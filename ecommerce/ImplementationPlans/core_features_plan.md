# Comprehensive Implementation Plan - Core Features, Backend & UX

This plan identifies missing modern features, documents technical bugs, and outlines the strategy to transform "WoWeBazaar" into a production-ready 2026 ecommerce platform.

## 1. Authentication & Security Enhancements
### OAuth Integration (Missing Feature)
- **Goal**: Implement Social Login (Google, Facebook, Apple) to reduce friction.
- **Backend Strategy**: Define new `auth/social` endpoints for handling OAuth tokens.
- **Frontend UI**: Add "Social Login" buttons using consistent rounded-icon patterns below the "OR" divider in `login.html`.

### Advanced Security
- **Goal**: Enhance account protection.
- **Strategy**: Implement Multi-Factor Authentication (MFA) using the existing OTP service for high-value transactions.

## 2. Backend Migration & Feature parity
### Transition from Mock to Live Data
- **Problem**: Wishlist, Compare, and several homepage sections currently fetch from local `.json` files.
- **Solution**: 
  - Migrate `WishlistService` and `CompareService` to use `${environment.baseURL}`.
  - Implement actual database interactions for persistence across sessions/devices.

### Real-Time Services [NEW]
- **Flight Booking**: Integrate a live GDS/API (or mock aggregator) to provide real-time pricing and availability.
- **International Parcel**: Complete the shipping wizard and connect to a logistics tracking API for real-time cargo status.

## 3. Bug Analysis & Remediation
| ID | Issue | Root Cause | Proposed Fix |
|---|---|---|---|
| B1 | Broken Discount Text | Missing template variables in product loops. | Update `product-box` component to handle null/zero discounts gracefully. |
| B2 | Zero Pricing ($0.00) | Data inconsistency in mock JSONs/Product list. | Implement a fallback display or hide products with no price. |
| B3 | Routing 404s | `/collections` and service links missing in `routes.ts`. | Correct `app.routes.ts` and `page.routes.ts` to match the data-driven slugs. |
| B4 | Branding Leaks | "Multikart" text found in Footer/Copyright/Meta. | Global search and replace with "WoWeBazaar" throughout all templates and `i18n` files. |

## 4. Missing Modern Ecommerce Features
- **Advanced Search**: Implementation of fuzzy search and auto-complete in `ProductService`.
- **Product Comparison Matrix**: Transform the `Compare` service into a visual grid comparing technical specs.
- **Dynamic Coupons**: A functional checkout section to apply and validate discount codes via API.
- **Analytics & SEO**: Link `SeoService` with a 2026 analytics platform (e.g., GA4) for event tracking.

## 5. Vision: The "Best Product" Design
- **Dark Aesthetics**: Enable the "Dark Mode" toggle in `General` settings as a premium UX feature.
- **Micro-interactions**: Add feedback for "Add to Cart" (toast notifications + cart icon anim).
- **Green UX**: Optimize the `HttpClient` interceptors to cache static images and data locally.

## Verification Plan
1. **Auth Test**: Verify OAuth redirection and token handling in browser.
2. **Data Integrity**: Ensure Wishlist/Compare items persist after page refresh.
3. **Bug Audit**: Re-verify the Homepage to ensure "Limited Time Offer" text and prices are fixed.
4. **Link Audit**: Automated crawl of all navigation links to ensure zero 404s.
