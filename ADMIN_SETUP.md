# Admin Portal Setup Guide

## Creating Your First Admin User

To access the admin dashboard, you need to create an admin account and assign the admin role.

### Step 1: Create a User Account

1. Sign up for an account using your email and password
2. Use the authentication system on your site to register
3. Note down your email address - you'll need it for the next step

### Step 2: Assign Admin Role

After creating your user account, you need to manually add the admin role to your user in the database.

**Option A: Using the Backend Dashboard**

1. Click the "View Backend" button in Lovable
2. Navigate to Table Editor
3. Open the `user_roles` table
4. Click "Insert row"
5. Fill in the following:
   - `user_id`: Your user ID (copy from the auth.users table or get it from your profile)
   - `role`: Select "admin" from the dropdown
6. Click "Save"

**Option B: Using SQL (if you have SQL access)**

```sql
-- Replace 'your-email@example.com' with your actual email
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'your-email@example.com';
```

### Step 3: Access the Admin Dashboard

1. Navigate to `/admin` on your site
2. Log in with your email and password
3. You should now see the full admin dashboard!

## Admin Dashboard Features

### Projects Management
- **Add New Projects**: Create portfolio projects with details like title, client, category, description, impact metrics, and tags
- **View All Projects**: Browse all existing projects in your portfolio
- **Delete Projects**: Remove projects that are no longer needed

### Contact Submissions
- **View All Submissions**: See all contact form submissions from your website
- **Update Status**: Mark submissions as "New", "In Progress", or "Completed"
- **Contact Details**: View sender's name, email, company, and message

## Security Notes

- **Never share your admin credentials**
- The admin role is stored securely in the database with Row-Level Security (RLS) policies
- Only users with the 'admin' role in the `user_roles` table can access the admin dashboard
- All admin actions are authenticated on the server side

## Troubleshooting

**Problem**: "Access Denied" message after logging in
**Solution**: Make sure your user has been assigned the 'admin' role in the `user_roles` table

**Problem**: Can't see the admin dashboard
**Solution**: Clear your browser cache and try logging in again

**Problem**: Database errors when creating projects
**Solution**: Check that all required fields are filled in and properly formatted

## Support

If you need help setting up your admin account, please contact Magic Builders Consultancy support.
