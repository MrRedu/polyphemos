export const QUERY_HOME_PAGE = {
  populate: {
    fields: ['title', 'description'],
    blogSection: {
      fields: ['title', 'description'],
    },
  },
};

export const QUERY_BLOG_PAGE = {
  populate: {
    fields: ['title', 'description'],
    articles: {
      populate: {
        fields: ['title', 'summary', 'published', 'author', 'tags', 'label'],
        multimedia: {
          fields: ['url', 'name', 'alternativeText', 'width', 'height'],
        },
      },
    },
  },
};
