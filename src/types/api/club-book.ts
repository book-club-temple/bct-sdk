import { ClubBookStatus, Genre } from "../../constants/enum"
import { Id } from "../core"

export interface ClubBook {
  bookId: Id
  clubId: Id
  title: string
  author: string
  pages: number
  yearPublished: number
  genre: Genre[]
  status: ClubBookStatus
}

export interface ApiGetClubBookList {
  bookId: Id
  clubId: Id
  title: string
  author: string
  pages: number
  yearPublished: number
  genre: Genre[]
  status: ClubBookStatus
  completedAt: Date | null
}

export type ApiGetClubBook = ApiGetClubBookList
