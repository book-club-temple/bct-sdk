import { Id } from "../core"

export interface ClubMember {
  userId: Id
}

export interface ApiClubMemberGetList {
  clubId: Id
  userId: Id
  joinedAt: Date
}

export type ApiClubMemberGet = ApiClubMemberGetList
