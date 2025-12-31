import qs from 'qs'
// import { cacheLife } from 'next/cache';

import { QUERY_ARTICLE_BY_ID, QUERY_ARTICLES, QUERY_HOME_PAGE } from './queries'
import { Label } from '@/types/types'
import { API_BASE_URL } from './constants'

export async function getArticleById(id: string) {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_ARTICLE_BY_ID)
  const response = await getStrapiData(
    `/api/articles?filters[slug][$eq]=${id}&${query}`
  )

  return response?.data?.[0]
}

export async function getArticles({
  page = 1,
  label = null,
}: {
  page?: number
  label?: Label | null
}) {
  const queryObj = {
    ...QUERY_ARTICLES,
    pagination: {
      page: page,
      pageSize: 13,
    },
    filters: {},
  }

  if (label && label !== 'Todos') {
    queryObj.filters = {
      label: {
        $eq: label,
      },
    }
  }

  const query = qs.stringify(queryObj)
  const response = await getStrapiData(`/api/articles?${query}`)
  return {
    articles: response?.data || [],
    meta: response?.meta?.pagination || {},
  }
}

export async function getHomePage() {
  // 'use cache';
  // cacheLife({ expire: 60 * 15 });

  const query = qs.stringify(QUERY_HOME_PAGE)
  const response = await getStrapiData(`/api/home-page?${query}`)
  return response?.data
}

export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data', error)
    return null
  }
}

export async function registerUserService(userData: {
  username: string
  email: string
  password: string
}) {
  const URL = `${API_BASE_URL}/api/auth/local/register`

  const payload = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  }

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error registering user', error)
    return null
  }
}

export async function loginUserService(userData: {
  identifier: string
  password: string
}) {
  const URL = `${API_BASE_URL}/api/auth/local`

  const payload = {
    identifier: userData.identifier,
    password: userData.password,
  }

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error logging user', error)
    return null
  }
}
