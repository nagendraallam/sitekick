import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Contact from '@/models/Contact'

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1405617063657209996/_smCluRksLAxn5vQjz6WKpA8IPHNqMR2yq7j_IlUdS2g09o-l-380gsMIXocMKb9hJ4y'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function sendDiscordNotification(contactData: any) {
  try {
    const embed = {
      title: "🚀 New Contact Form Submission!",
      color: 0x3B82F6, // Blue color
      fields: [
        {
          name: "👤 Name",
          value: contactData.name,
          inline: true
        },
        {
          name: "📧 Email",
          value: contactData.email,
          inline: true
        },
        {
          name: "🏢 Company",
          value: contactData.company || "Not provided",
          inline: true
        },
        {
          name: "📞 Phone",
          value: contactData.phone || "Not provided",
          inline: true
        },
        {
          name: "📝 Subject",
          value: contactData.subject || "Not specified",
          inline: true
        },
        {
          name: "💬 Message",
          value: contactData.message.length > 1000 ? 
            contactData.message.substring(0, 1000) + "..." : 
            contactData.message,
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "SiteKick Contact Form"
      }
    }

    const payload = {
      username: "SiteKick Bot",
      avatar_url: "https://cdn.discordapp.com/embed/avatars/0.png",
      embeds: [embed]
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      console.error('Failed to send Discord notification:', response.statusText)
    }
  } catch (error) {
    console.error('Error sending Discord notification:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, subject } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const contactData = {
      name,
      email,
      company,
      phone,
      message,
      subject,
    }

    // Send Discord notification first
    await sendDiscordNotification(contactData)

    // Then save to database
    await connectDB()
    const contact = new Contact(contactData)
    await contact.save()

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: contact._id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .select('-__v')

    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
