export const QUERY_HOME_PAGE = {
  populate: {
    fields: ['title', 'description'],
  },
}

export const QUERY_ARTICLES = {
  populate: {
    fields: ['slug', 'title', 'summary', 'published', 'author', 'label'],
    cover: {
      fields: ['url', 'name', 'alternativeText', 'width', 'height'],
    },
  },
  sort: ['published:desc'],
  // pagination: {
  //   page: 1,
  //   pageSize: 13,
  // },
}

export const QUERY_ARTICLE_BY_ID = {
  populate: {
    fields: [
      'slug',
      'title',
      'content',
      'summary',
      'published',
      'author',
      'label',
    ],
    cover: {
      fields: ['url', 'name', 'alternativeText', 'width', 'height'],
      // fields: ['*'],
    },
  },
}
