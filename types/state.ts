import { Entry } from 'contentful';
import { Article } from '~/types';

export interface ArticleState {
  currentArticle?: Entry<Article>
}

export interface ArticlesState {
  articles: Array<Entry<Article>>
}

export interface SearchState {
  results: Array<Entry<Article>>
  filter: string
  isSearching: boolean
}

// tslint:disable-next-line: no-empty-interface
export interface RootState {}
