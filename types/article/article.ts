import { Document as contentfulDocument } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

import { ArticleCuisine } from './article-cuisine.enum';
import { ArticleDiet } from './article-diet.enum';
import { ArticleMethod } from './article-method.enum';
import { ArticleType } from './article-type.enum';

export interface Article {
  title: string
  slug: string
  publishedAt: string
  types: ArticleType[]
  image: Entry<{
    title: string
    description: string
    file: {
      url: string
      fileName: string
      contentType: string
    }
  }>
  summary: string
  content: contentfulDocument
  cuisines: ArticleCuisine[]
  methods: ArticleMethod[]
  diets: ArticleDiet[]
  tags: string[]
  relatedArticles: Article[]
}
