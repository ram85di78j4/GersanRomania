# Deployment Guide - Gersan Romania

## 🚀 Quick Start

This Next.js application is ready for production deployment. Follow the steps below for your chosen platform.

## 📋 Pre-Deployment Checklist

- [x] No sensitive data in codebase
- [x] `.gitignore` configured properly
- [x] Environment variables documented in `.env.example`
- [x] Production build tested locally
- [x] All console statements removed
- [x] Security review completed

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Gersan Romania website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gersan-romania.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (Optional)**
   - If using Sanity CMS in the future, add in Vercel dashboard:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `gersan-romania.ro`)
   - Follow DNS configuration instructions

**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`

---

### Option 2: VPS Deployment (Ubuntu/Debian)

For deployment on your own VPS with full control.

#### Prerequisites

- Ubuntu 20.04+ or Debian 11+
- Node.js 18+ installed
- Nginx installed
- Domain pointing to your VPS IP

#### Step 1: Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

#### Step 2: Clone and Build

```bash
# Clone repository
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/gersan-romania.git
cd gersan-romania

# Install dependencies
sudo npm install

# Build for production
sudo npm run build
```

#### Step 3: Configure PM2

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'gersan-romania',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/gersan-romania',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Start the application:

```bash
# Start with PM2
sudo pm2 start ecosystem.config.js

# Save PM2 configuration
sudo pm2 save

# Setup PM2 to start on boot
sudo pm2 startup systemd
```

#### Step 4: Configure Nginx

Create `/etc/nginx/sites-available/gersan-romania`:

```nginx
server {
    listen 80;
    server_name gersan-romania.ro www.gersan-romania.ro;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }
}
```

Enable the site:

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/gersan-romania /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 5: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d gersan-romania.ro -d www.gersan-romania.ro

# Auto-renewal is configured automatically
```

#### Step 6: Firewall Configuration

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable
```

---

### Option 3: Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Deploy:

```bash
docker-compose up -d
```

---

## 🔧 Environment Variables

The application works without environment variables (uses placeholder data).

For future Sanity CMS integration, add these **public** variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Important:** All variables are prefixed with `NEXT_PUBLIC_` and are safe to expose publicly.

---

## 📊 Performance Optimization

### Recommended Settings

1. **Enable Compression** - Gzip/Brotli in Nginx or CDN
2. **CDN** - Use Cloudflare or similar for static assets
3. **Image Optimization** - Next.js Image component is already configured
4. **Caching Headers** - Configure in Nginx or hosting platform

### Build Optimization

The project is already optimized with:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Lazy loading for 3D components
- ✅ Optimized images
- ✅ Minified CSS and JS

---

## 🔍 Monitoring

### PM2 Monitoring (VPS)

```bash
# View logs
pm2 logs gersan-romania

# Monitor resources
pm2 monit

# Restart application
pm2 restart gersan-romania
```

### Health Check Endpoint

The application runs on port 3000 by default. Health check:

```bash
curl http://localhost:3000
```

---

## 🔄 Updates and Maintenance

### Update Deployment (VPS)

```bash
cd /var/www/gersan-romania
sudo git pull origin main
sudo npm install
sudo npm run build
sudo pm2 restart gersan-romania
```

### Update Deployment (Vercel)

Simply push to GitHub - Vercel auto-deploys:

```bash
git add .
git commit -m "Update content"
git push origin main
```

---

## 🛡️ Security Considerations

✅ **Implemented:**
- HTTPS/SSL required for production
- No sensitive data in codebase
- Environment variables properly configured
- Security headers recommended in Nginx

✅ **Recommended:**
- Enable Cloudflare for DDoS protection
- Regular dependency updates: `npm audit`
- Monitor logs for suspicious activity
- Backup configuration and content regularly

---

## 📞 Support

For deployment issues or questions:
- Review `SECURITY.md` for security guidelines
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Verify `.env.example` for configuration

---

## 🎯 Production URL

After deployment, your site will be available at:
- **Production:** `https://gersan-romania.ro`
- **WWW:** `https://www.gersan-romania.ro`

Make sure DNS is configured to point to your deployment platform.
