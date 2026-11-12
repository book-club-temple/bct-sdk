import { UserRole } from "../../constants/enum"
import { Id } from "../core"

export interface User {
  username: string
  email: string
  passwordHash: string
  profileUrl?: string
}

export interface ApiUserGetList {
  id: Id
  username: string
  email: string
  role: UserRole
  profileUrl?: string
  createdAt: Date
}

export type ApiUserGet = ApiUserGetList
