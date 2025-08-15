import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import connectDB from '@/lib/db'
import Project from '@/models/Project'
import { authOptions } from '@/lib/auth'

// GET - Fetch all projects for the authenticated user
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    const projects = await Project.find({ userId: session.user.email })
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, url, aiName, description, position } = body

    if (!name || !url || !aiName) {
      return NextResponse.json(
        { error: 'Name, URL, and AI name are required' },
        { status: 400 }
      )
    }

    await connectDB()

    // Check if project name already exists for this user
    const existingProject = await Project.findOne({
      userId: session.user.email,
      name: name.trim()
    })

    if (existingProject) {
      return NextResponse.json(
        { error: 'A project with this name already exists' },
        { status: 409 }
      )
    }

    const project = await Project.create({
      userId: session.user.email,
      name: name.trim(),
      url: url.trim().toLowerCase(),
      aiName: aiName.trim(),
      description: description?.trim(),
      position: position || 'bottom-right',
    })

    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
