export interface ArticleType {
  value: string
  xmlId: string
}

export interface Article {
  code: string
  date: number
  image: string
  link: string
  name: string
  previewText: string
  type: ArticleType
}

export interface ServerPagination {
  current: number
  total: number
}

export interface ServerResponse {
  nav: ServerPagination
  items: Article[]
}
