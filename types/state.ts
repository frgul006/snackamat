import { Entry } from 'contentful'
import { Article } from '~/types'

export interface ArticleState {
  currentArticle?: Entry<Article>
}

export interface ArticlesState {
  articles: Array<Entry<Article>>
}

// tslint:disable-next-line: no-empty-interface
export interface RootState {}
