// Sanity client setup
// This file will be used once Sanity project is configured

import { sanityConfig } from './config';

// Placeholder for future Sanity client
// Uncomment and configure when ready to connect to Sanity CMS:
/*
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});
*/

// Helper function to fetch data (placeholder)
export async function fetchContent<T>(query: string): Promise<T[]> {
  // TODO: Replace with actual Sanity client fetch
  // return sanityClient.fetch<T[]>(query);
  
  // Currently using placeholder data - Sanity client not configured
  return [] as T[];
}

// Helper function to fetch single document (placeholder)
export async function fetchDocument<T>(query: string): Promise<T | null> {
  // TODO: Replace with actual Sanity client fetch
  // return sanityClient.fetch<T>(query);
  
  // Currently using placeholder data - Sanity client not configured
  return null;
}
