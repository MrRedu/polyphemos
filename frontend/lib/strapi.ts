import qs from 'qs';
import { cacheLife } from 'next/cache';

import { QUERY_BLOG_PAGE, QUERY_HOME_PAGE } from './queries';

export const STRAPI_BASE_URL = 'http://localhost:1337';

export async function getBlogPage() {
  'use cache';
  cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_BLOG_PAGE);
  const response = await getStrapiData(`/api/blog-page?${query}`);
  return response?.data;
}

export async function getHomePage() {
  'use cache';
  cacheLife({ expire: 60 * 15 });

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
