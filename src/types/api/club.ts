import { Id } from "../core"

export interface Club {
  name: string
  clubEmblem?: string
}

export interface ApiClubGetList {
  id: Id
  name: string
  clubEmblem?: string
  createdAt: Date
}

export type ApiClubGet = ApiClubGetList
