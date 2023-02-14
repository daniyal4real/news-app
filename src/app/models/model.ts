export interface News {
  id: number
  title: string
  description: string
  link: string
  img: string
}

export interface PageInfo {
  current_page: number
  total_pages: number
}

export interface Res {
  news: News[]
  page_info: PageInfo
}
