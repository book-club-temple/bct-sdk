export enum Lang {
  EN = "en",
  DE = "de",
  FR = "fr",
  ES = "es",
}

export enum HttpMethod {
  CONNECT = "CONNECT",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  TRACE = "TRACE",
}

export type Id = string | number

export enum QueryParams {
  Language = "language",
  Search = "search",
}

export enum QueryParamsKeys {
  LANGUAGE = "language",
  LIMIT = "limit",
  ORDER = "order",
  PAGE = "page",
  SEARCH = "search",
}
