# Variables for Docker labels
VERSION := $(shell git describe --tags --always 2>/dev/null || echo "v0.0.0")
GIT_COMMIT := $(shell git rev-parse HEAD 2>/dev/null || echo "unknown")
BUILD_DATE := $(shell date -u +'%Y-%m-%dT%H:%M:%SZ')
ECR_REGISTRY := ghcr.io
ORG_NAME := t-esp-asstagj
SERVICE_NAME := web

.PHONY: help
help:
	@echo "Makefile for web project"
	@echo "Available targets:"
	@echo "  install           - Install dependencies with yarn"
	@echo "  dev               - Start development server"
	@echo "  build             - Build the project"
	@echo "  build_staging     - Build staging Docker image"
	@echo "  build_production  - Build production Docker image"
	@echo "  push_staging      - Push staging image to registry"
	@echo "  push_production   - Push production image to registry"
	@echo ""
	@echo "Docker build info:"
	@echo "  Version: $(VERSION)"
	@echo "  Commit: $(shell echo $(GIT_COMMIT) | cut -c1-8)"
	@echo "  Build Date: $(BUILD_DATE)"

.PHONY: install
install:
	@echo "Installing dependencies with yarn..."
	@yarn install

.PHONY: dev
dev:
	@echo "Starting development server..."
	@yarn dev

.PHONY: build
build:
	@echo "Building project..."
	@yarn build

.PHONY: build_staging
build_staging:
	@echo "🏗️  Building staging Docker image"
	@echo "   Version: $(VERSION)"
	@echo "   Commit: $(shell echo $(GIT_COMMIT) | cut -c1-8)"
	@echo "   Build Date: $(BUILD_DATE)"
	@docker build \
		--build-arg VERSION="$(VERSION)" \
		--build-arg GIT_COMMIT="$(GIT_COMMIT)" \
		--build-arg BUILD_DATE="$(BUILD_DATE)" \
		--file docker/Dockerfile.staging \
		--tag "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):staging" \
		--tag "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):staging-$(VERSION)" \
		--tag "$(SERVICE_NAME):staging" \
		.
	@echo "✅ Staging image built successfully"

.PHONY: build_production
build_production:
	@echo "🏗️  Building production Docker image"
	@echo "   Version: $(VERSION)"
	@echo "   Commit: $(shell echo $(GIT_COMMIT) | cut -c1-8)"
	@echo "   Build Date: $(BUILD_DATE)"
	@docker build \
		--build-arg VERSION="$(VERSION)" \
		--build-arg GIT_COMMIT="$(GIT_COMMIT)" \
		--build-arg BUILD_DATE="$(BUILD_DATE)" \
		--file docker/Dockerfile.production \
		--tag "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):latest" \
		--tag "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):$(VERSION)" \
		--tag "$(SERVICE_NAME):production" \
		.
	@echo "✅ Production image built successfully"

.PHONY: push_staging
push_staging: build_staging
	@echo "📤 Pushing staging image to registry..."
	@docker push "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):staging"
	@docker push "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):staging-$(VERSION)"
	@echo "✅ Staging image pushed successfully"

.PHONY: push_production
push_production: build_production
	@echo "📤 Pushing production image to registry..."
	@docker push "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):latest"
	@docker push "$(ECR_REGISTRY)/$(ORG_NAME)/$(SERVICE_NAME):$(VERSION)"
	@echo "✅ Production image pushed successfully"