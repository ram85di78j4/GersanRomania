# Security Guidelines

## Environment Variables

This project uses environment variables for configuration. All environment variables are **public** and safe to expose in the frontend bundle.

### Current Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity CMS project ID (public, optional)
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity CMS dataset name (public, optional)

All environment variables are prefixed with `NEXT_PUBLIC_` which means they are bundled into the client-side JavaScript and are publicly accessible.

### Important Notes

1. **No Private Keys**: This project does not use any private API keys, tokens, or secrets in the frontend code.

2. **Placeholder Data**: The website currently uses static placeholder data and does not require Sanity CMS to function.

3. **Future CMS Integration**: When integrating with Sanity CMS:
   - Only use **public** environment variables (prefixed with `NEXT_PUBLIC_`)
   - Never expose write tokens or private API keys in frontend code
   - Use server-side API routes for any operations requiring authentication

4. **Safe for Public Deployment**: This codebase is safe to:
   - Push to public GitHub repositories
   - Deploy to public hosting platforms
   - Share openly without security concerns

## What's Safe to Commit

✅ **Safe to commit:**
- All source code in `/src`
- Configuration files (`next.config.mjs`, `tailwind.config.ts`, etc.)
- `.env.example` (template file with no real values)
- Public environment variables (if needed)

❌ **Never commit:**
- `.env` or `.env.local` files with real values
- Private API keys or tokens
- Database credentials
- Authentication secrets
- Personal access tokens

## Security Best Practices

1. **Environment Variables**: Always use `.env.example` as a template and create your own `.env.local` for local development.

2. **API Routes**: If you add API routes in the future, never expose sensitive operations or credentials in client-side code.

3. **Third-Party Services**: When integrating third-party services, always use their public/read-only keys in frontend code.

4. **Content Security**: The Sanity CMS integration is designed to use public read-only access. Write operations should be done through Sanity Studio, not the frontend.

## Reporting Security Issues

If you discover a security vulnerability, please email security@gersan-romania.ro (or create a private security advisory on GitHub).

## Production Deployment Checklist

Before deploying to production:

- [ ] Verify no `.env` files are committed
- [ ] Check that all API keys are public/read-only
- [ ] Ensure no console.log statements expose sensitive data
- [ ] Review that no hardcoded credentials exist
- [ ] Confirm `.gitignore` is properly configured
- [ ] Test that the site works without environment variables (using placeholder data)
