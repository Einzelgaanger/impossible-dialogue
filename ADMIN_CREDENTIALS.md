# Quick Admin Setup - Run Once

## Step 1: Open Your Backend Dashboard

Access the Supabase dashboard to manage your database.

## Step 2: Run This SQL (One Time Only)

Go to the SQL Editor and run this script once:

```sql
-- Create admin user (change the email/password if you want)
DO $$
DECLARE
  admin_user_id uuid;
BEGIN
  -- Insert the admin user into auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_user_meta_data,
    created_at,
    updated_at
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@magicbuilders.com',
    crypt('Admin123!', gen_salt('bf')),
    now(),
    '{}',
    now(),
    now()
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING id INTO admin_user_id;

  -- If user already exists, get their ID
  IF admin_user_id IS NULL THEN
    SELECT id INTO admin_user_id FROM auth.users WHERE email = 'admin@magicbuilders.com';
  END IF;

  -- Add admin role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (admin_user_id, 'admin'::app_role)
  ON CONFLICT DO NOTHING;
END $$;
```

## Step 3: Login Details

- **URL**: Go to `/admin` on your website
- **Email**: `admin@magicbuilders.com`
- **Password**: `Admin123!`

**IMPORTANT**: Change these credentials after your first login by creating a new admin user with your preferred email, then delete this one.

## Why Not Hardcode?

Hardcoding credentials in code means anyone can:
- View your website source code (right-click → View Source)
- See the admin password in plain text
- Log into your admin panel
- Delete all your projects
- Modify your website content

This approach keeps credentials in your secure database, not in public code.
