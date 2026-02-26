-- =============================================================
-- PostgreSQL Setup Script for WOW Commerce
-- Run as the postgres superuser:
--   psql -U postgres -h localhost -f postgres_setup.sql
-- =============================================================

-- 1. Create the application database user
CREATE USER wow_user WITH
    PASSWORD 'WowApp@2026'
    NOSUPERUSER
    NOCREATEROLE
    NOCREATEDB
    NOREPLICATION
    INHERIT
    LOGIN;

-- 2. Create the database owned by the app user
CREATE DATABASE wowcommerce
    OWNER = wow_user
    ENCODING = 'UTF8';

-- 3. Connect to the new database and grant schema-level permissions
\c wowcommerce

GRANT ALL PRIVILEGES ON DATABASE wowcommerce TO wow_user;
GRANT ALL ON SCHEMA public TO wow_user;

-- Ensure future tables/sequences created by migrations are accessible
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES    TO wow_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO wow_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO wow_user;

-- Needed for PostgreSQL 15+ (public schema privilege revoked by default in PG15+)
GRANT CREATE ON SCHEMA public TO wow_user;

\echo '======================================================='
\echo 'Setup complete!'
\echo 'Database : wowcommerce'
\echo 'User     : wow_user'
\echo 'Password : WowApp@2026'
\echo '======================================================='
