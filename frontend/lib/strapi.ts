// import { cacheLife } from 'next/cache';
import qs from 'qs';
export const STRAPI_BASE_URL = 'http://localhost:1337';

const QUERY_HOME_PAGE = {
  populate: {
    fields: ['title', 'description'],
    blogSection: {
      fields: ['title', 'description'],
      populate: {
        CardPost: {
          fields: ['title', 'summary', 'published', 'author', 'tags', 'label'],
          populate: {
            image: {
              fields: ['url', 'name', 'alternativeText', 'width', 'height'],
            },
          },
        },
      },
    },
  },
};

export async function getHomePage() {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_HOME_PAGE);
  const { data, meta } = await getStrapiData(`/api/home-page?${query}`);
  return data;
}

export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
}
