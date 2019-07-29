import { Entry } from 'contentful'
import { Article } from '~/types'

export class MetaService {
  public static getMetaForArticle(article: Entry<Article>): Array<{}> {
    return [
      {
        hid: 'description',
        name: 'description',
        content: article.fields.summary
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: article.fields.summary
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `https:${article.fields.image.fields.file.url}?w=520&h=664&fit=fill&q=75`
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: 520
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: 664
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: article.fields.title + ' | snackamat.se'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: `https://snackamat.se/artikel/${article.fields.slug}`
      },
      {
        hid: 'article:published_time',
        name: 'article:published_time',
        content: article.fields.publishedAt
      },
      {
        hid: 'article:modified_time',
        name: 'article:modified_time',
        content: article.sys.updatedAt
      },
      {
        hid: 'og:updated_time',
        name: 'og:updated_time',
        content: article.sys.updatedAt
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: article.fields.title + ' | snackamat.se'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: article.fields.summary
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https:${article.fields.image.fields.file.url}?w=520&h=664&fit=fill&q=75`
      },
      {
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: 520
      },
      {
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: 664
      }
    ]
  }
}
