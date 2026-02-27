# Implementation Plan - Logo and Images Replacement

This plan details the replacement of all placeholder and brand-specific assets with AI-generated, "WoWeBazaar" branded images following 2026 design trends.

## Proposed Strategy

Replace static, low-quality placeholders with high-vibrancy, modern assets created via the `generate_image` tool. All new images will be placed in `assets/images/branded/` to maintain clean project organization.

## Assets Identification & Replacement Plan

### 1. Brand Identity Assets
- **Main Logo (Header/Footer)**:
  - **Source**: `assets/images/settings/logo-dark.png` / `footer-logo.png`
  - **Replacement**: A premium "WoWeBazaar" text + icon logo (Sleek, modern, high contrast).
- **Favicon**:
  - **Source**: `assets/images/settings/favicon.png`
  - **Replacement**: A simplified version of the new brand icon.

### 2. Homepage Hero & Banners
- **Main Fashion Slide**:
  - **Source**: `/images/theme/fashion_one/fashion_one_5.png`
  - **Replacement**: High-fashion lifestyle image featuring diverse models and modern apparel.
- **Flight & Parcel Service Slides**:
  - **Source**: `/images/company/flight_1.jpg`, `flight_2.jpg`, `slide_1.png`
  - **Replacement**: 
    - **Flight**: Stunning aerial view of a modern jet or a premium cabin interior with "WoWeBazaar" boarding pass.
    - **Parcel**: High-tech logistics visualization showing a package being handled with care between Nepal and Cyprus landmarks.
- **Service Icons**:
  - **Source**: `/images/theme/fashion_one/service.png`
  - **Replacement**: Custom glassmorphism-style icons for "Instant Shipping," "24/7 Support," and "Global Reach."

### 3. About Us & Team
- **Hero Banner**:
  - **Source**: `/images/placeholder/about-us/about_banner.png`
  - **Replacement**: Immersive "Scrollytelling"-friendly hero image showing the "WoWeBazaar" headquarters and global routes.
- **Team Profiles**:
  - **Source**: `/images/placeholder/about-us/member.png`
  - **Replacement**: Professional, AI-generated headshots with consistent lighting and backgrounds.

### 4. Marketplace & Social
- **Product Placeholders**: Various images in `/images/product/` as identified during implementation.
- **Instagram Feed Banners**:
  - **Source**: `/images/company/insta_1.jpeg` - `insta_8.jpeg`
  - **Replacement**: Curated, aesthetic product-in-use photos to simulate a vibrant social feed.

## Execution Steps
1. Generate images using specific prompts for each category.
2. Optimize images for WebP format to ensure "Green UX" performance.
3. Update `themeOptions.json` and `fashion_one.json` to point to new `assets/images/branded/` paths.
