/**
 * Contact obfuscation utilities
 * Reduces basic scraping while maintaining usability for real visitors
 */

/**
 * Decodes a base64-encoded contact string
 */
export function decodeContact(encoded: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return atob(encoded);
  } catch {
    return '';
  }
}

/**
 * Creates a mailto link with obfuscated email
 */
export function createMailtoLink(encodedEmail: string): string {
  const email = decodeContact(encodedEmail);
  return email ? `mailto:${email}` : '#';
}

/**
 * Creates a tel link with obfuscated phone
 */
export function createTelLink(encodedPhone: string): string {
  const phone = decodeContact(encodedPhone);
  return phone ? `tel:${phone}` : '#';
}

/**
 * Formats phone number for display
 */
export function formatPhone(encodedPhone: string): string {
  return decodeContact(encodedPhone);
}

/**
 * Formats email for display
 */
export function formatEmail(encodedEmail: string): string {
  return decodeContact(encodedEmail);
}

// Obfuscated contact data (base64 encoded)
export const CONTACT_DATA = {
  // office@gersanromania.ro
  email: 'b2ZmaWNlQGdlcnNhbnJvbWFuaWEucm8=',
  // +45 22295961
  phone: 'KzQ1IDIyMjk1OTYx',
} as const;
