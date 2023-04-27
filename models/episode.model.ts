export interface Episodes {
  info: Info
  results: Result[]
  error: any
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Result {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}
