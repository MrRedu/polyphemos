import qs from 'qs';
// import { cacheLife } from 'next/cache';

import {
  QUERY_ARTICLE_BY_ID,
  QUERY_ARTICLES,
  QUERY_BLOG_PAGE,
  QUERY_HOME_PAGE,
} from './queries';
import { Label } from '@/types/types';

export const STRAPI_BASE_URL = 'http://localhost:1337';

export async function getArticleById(id: string) {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_ARTICLE_BY_ID);
  const response = await getStrapiData(
    // /api/articles?filters[slug][$eq]=el-futuro-de-la-ia-generativa-mas-alla-de-los-chatbots&populate=*
    `/api/articles?filters[slug][$eq]=${id}&${query}`
  );

  return response?.data?.[0];
}

export async function getArticles({
  page = 1,
  label = null,
}: {
  page?: number;
  label?: Label | null;
}) {
  const queryObj = {
    ...QUERY_ARTICLES,
    pagination: {
      page: page,
      pageSize: 13,
    },
    filters: {},
  };

  if (label && label !== 'Todos') {
    queryObj.filters = {
      label: {
        $eq: label,
      },
    };
  }

  const query = qs.stringify(queryObj);
  const response = await getStrapiData(`/api/articles?${query}`);
  return {
    articles: response?.data || [],
    meta: response?.meta?.pagination || {},
  };
}

export async function getBlogPage() {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_BLOG_PAGE);
  const response = await getStrapiData(`/api/blog-page?${query}`);
  return response?.data;
}

export async function getHomePage() {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  return response?.data;
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
