import { Id } from "../core"

export interface Rating {
  userId: Id
  bookId: Id
  clubId: Id
  score: number
}

export interface ApiRatingGetList {
  id: Id
  userId: Id
  bookId: Id
  clubId: Id
  score: number
  createdAt: Date
}

export type ApiRatingGet = ApiRatingGetList
