// Sanity client setup
// This file will be used once Sanity project is configured

import { sanityConfig } from './config';

// Sanity CMS client (currently disabled)
// The site uses static data. Uncomment below when ready to integrate Sanity CMS:
/*
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});
*/

// Helper function to fetch data
// Currently returns empty array - replace with Sanity client when CMS is integrated
export async function fetchContent<T>(query: string): Promise<T[]> {
  // When Sanity is configured, uncomment:
  // return sanityClient.fetch<T[]>(query);
  return [] as T[];
}

// Helper function to fetch single document
// Currently returns null - replace with Sanity client when CMS is integrated
export async function fetchDocument<T>(query: string): Promise<T | null> {
  // When Sanity is configured, uncomment:
  // return sanityClient.fetch<T>(query);
  return null;
}
