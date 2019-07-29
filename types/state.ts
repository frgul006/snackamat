import { Article } from '~/types'

export interface ArticleState {
  currentArticle?: Article
}

export interface ArticlesState {
  articles: Article[]
}

export interface RootState {}
