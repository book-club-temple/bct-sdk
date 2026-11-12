import { Genre } from "../../constants/enum"
import { Id } from "../core"

export interface Book {
  title: string
  author: string
  pages: number
  yearPublished: number
  genre: Genre[]
}

export interface ApiBookGetList {
  id: Id
  title: string
  author: string
  pages: number
  yearPublished: number
  genre: Genre[]
  createdAt: Date
}

export type ApiBookGet = ApiBookGetList
