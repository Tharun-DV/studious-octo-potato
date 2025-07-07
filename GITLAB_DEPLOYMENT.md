# GitLab CI/CD Deployment Guide

This repository contains multiple GitLab CI/CD workflow configurations for deploying your Astro blog.

## Available Workflows

### 1. Basic GitLab Pages (`.gitlab-ci.yml`)
- Simple deployment to GitLab Pages
- Automatic deployment on push to `main` branch
- Manual staging deployment from `develop` branch

### 2. Advanced Pipeline (`.gitlab-ci-advanced.yml`)
- Comprehensive pipeline with linting, testing, and security scanning
- Review apps for merge requests
- Staging and production environments
- Artifact caching for faster builds

### 3. Docker-based Pipeline (`.gitlab-ci-docker.yml`)
- Containerized deployment using Docker
- Multi-stage builds for optimization
- Container registry integration
- Webhook-based deployment triggers

## Setup Instructions

### For GitLab Pages Deployment

1. **Rename the desired workflow file:**
   ```bash
   mv .gitlab-ci.yml .gitlab-ci.yml.backup  # backup existing if any
   mv .gitlab-ci-advanced.yml .gitlab-ci.yml  # use advanced pipeline
   ```

2. **Configure GitLab Pages:**
   - Go to your GitLab project
   - Navigate to Settings → Pages
   - Your site will be available at `https://username.gitlab.io/repository-name`

3. **Set up environment variables (if needed):**
   - Go to Settings → CI/CD → Variables
   - Add any required environment variables

### For Docker Deployment

1. **Use the Docker workflow:**
   ```bash
   mv .gitlab-ci-docker.yml .gitlab-ci.yml
   ```

2. **Configure Container Registry:**
   - Go to Settings → CI/CD → Variables
   - Add `CI_REGISTRY_USER` and `CI_REGISTRY_PASSWORD` if using external registry

3. **Set up deployment webhooks:**
   - Add `STAGING_WEBHOOK_URL` and `STAGING_WEBHOOK_TOKEN` variables
   - Add `PRODUCTION_WEBHOOK_URL` and `PRODUCTION_WEBHOOK_TOKEN` variables

## Environment Variables

### Required Variables
- `CI_REGISTRY_USER`: Docker registry username (for Docker deployment)
- `CI_REGISTRY_PASSWORD`: Docker registry password (for Docker deployment)

### Optional Variables
- `NODE_ENV`: Environment (default: production)
- `STAGING_WEBHOOK_URL`: Webhook URL for staging deployment
- `STAGING_WEBHOOK_TOKEN`: Authentication token for staging
- `PRODUCTION_WEBHOOK_URL`: Webhook URL for production deployment
- `PRODUCTION_WEBHOOK_TOKEN`: Authentication token for production

## Deployment Strategies

### Automatic Deployment
- `main` branch → Production
- `develop` branch → Staging (manual trigger)

### Manual Deployment
- Use GitLab's environment interface
- Navigate to Deployments → Environments
- Click "Deploy" for manual deployments

### Review Apps
- Automatic creation for merge requests
- Available at `https://projectid-mrid.pages.gitlab.io`
- Automatic cleanup when MR is closed

## Docker Deployment

### Building Locally
```bash
docker build -t astro-blog .
docker run -p 80:80 astro-blog
```

### Using Docker Compose
```yaml
version: '3.8'
services:
  astro-blog:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

## Monitoring and Troubleshooting

### Pipeline Debugging
1. Check the pipeline logs in GitLab CI/CD → Pipelines
2. Review job logs for specific errors
3. Check artifact expiration times

### Common Issues
- **Build fails**: Check `package.json` scripts and dependencies
- **Deployment fails**: Verify environment variables and permissions
- **Pages not updating**: Clear GitLab Pages cache or check artifact paths

## Security Considerations

### Secrets Management
- Use GitLab CI/CD variables for sensitive data
- Mark variables as "Protected" and "Masked"
- Rotate webhook tokens regularly

### Docker Security
- Use multi-stage builds to reduce image size
- Scan images for vulnerabilities using Trivy
- Use specific tag versions instead of `latest`

## Performance Optimization

### Caching
- Node modules are cached between builds
- Docker layers are optimized for caching
- Artifacts expire automatically to save space

### Build Optimization
- Use `npm ci` instead of `npm install`
- Implement proper `.dockerignore` file
- Use Alpine Linux images for smaller size

## Support

For issues with:
- **GitLab CI/CD**: Check GitLab documentation
- **Astro build**: Check Astro documentation
- **Docker**: Check Docker documentation
- **This configuration**: Create an issue in the repository
