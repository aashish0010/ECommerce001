Admin Panel Phase 1 Implementation Plan
This document outlines the implementation strategy for the first phase of the Admin Panel, focusing on open login, specific tab visibility, API integration, dashboard creation, user-company relationships, and order management.

Proposed Changes
1. Admin Login
Goal: Allow only admin users to login to the admin panel.
Implementation:
Backend: Update the authentication endpoint or role validation logic to ensure that only users with the Admin or Company User role can access the admin panel. Non-admin users should be rejected with an unauthorized error.
Frontend: Ensure the login form displays appropriate error messages (e.g., "Unauthorized access") if a non-admin user attempts to authenticate.
2. Menu Configuration
Goal: Show Dashboard, Users, Product, and Orders tabs. Hide Store, Media, and Page tabs.
Implementation:
Frontend: Edit 

src/app/shared/data/menu.ts
.
Keep/Show: dashboard, users, products, orders.
Hide/Remove: stores, media, pages.
3. API Integration & Dashboard
Goal: Fetch information from an API and replace static data. Create a dedicated dashboard API fueled by the database.
Implementation:
Backend (C#):
Create a new API Controller (e.g., DashboardController) in the BookManagementSystem backend.
Implement endpoints to calculate and return real-time statistics (total users, total orders, revenue, etc.) from the database.
Frontend (Angular):
Identify usages of static JSON files (like public/assets/data/cart.json, etc.).
Create Angular services to fetch data from the new backend APIs.
Update the Dashboard component (src/app/components/dashboard) to subscribe to the new API instead of static mock data.
4. Admin Users and Company Relationship
Goal: Relate admin users to a company. Seed a default company and company user. Under a company user, they can create other admin users.
Implementation:
Backend (C# Entities & EF Core):
Update the User entity in BookManagementSystem.Entities to include a CompanyId foreign key.
Ensure the Company entity includes a collection of Users.
Generate and apply an Entity Framework migration for these schema changes.
Database Seeding:
Update the database initializer/seeder to always insert a default "Company" and at least one "Company User" associated with that company upon startup.
Frontend (Angular):
Update the Users tab components (src/app/components/user) to send the CompanyId when creating new admin users, ensuring they are nested under the current company user's organization.
5. Order Management
Goal: Manage all customer orders from the Orders tab.
Implementation:
Ensure the Orders components (src/app/components/order) are fully integrated with the backend Order APIs.
Implement capabilities to view order details, update order statuses (e.g., processing, shipped, delivered), and manage customer requests.
Verification Plan
Automated Tests
Backend Integration Tests: Run C# API integration tests using dotnet test in the BookManagementSystem.Test project to verify the new Dashboard endpoint and the User-Company relationship logic.
Frontend Unit Tests: Run Angular tests using ng test to ensure the Menu configuration filters out the correct tabs and that the Login component successfully mocks the authentication bypassed state.
Manual Verification
Login: Navigate to the admin login page, enter valid admin credentials (e.g., an email with the Admin or Company User role), and verify successful redirection to the Dashboard. Also verify that attempting to log in with regular user credentials fails and displays an appropriate error message.
Menu Visibility: Verify that only Dashboard, Users, Products, and Orders are visible in the sidebar. Confirm Store, Media, and Pages are not present.
Dashboard Data: Verify that the statistics shown on the Dashboard change accordingly when new data (users, orders) is added to the database.
User Management: Log in as the seeded Company User. Navigate to the Users tab, create a new Admin User, and verify in the database that the new user is correctly linked to the same CompanyId.
Order Management: Place a dummy order from the frontend (if available) or seed an order, go to the Orders tab in the admin panel, and verify the order appears and its status can be updated.