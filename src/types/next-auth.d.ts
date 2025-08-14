import { UserPermission } from "./enums"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      permissions: UserPermission[]
    }
  }

  interface User {
    id: string
    permissions: UserPermission[]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    permissions: UserPermission[]
  }
}
