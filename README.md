# Next.js Portfolio with Supabase

A modern portfolio website built with Next.js 15 and Supabase, showcasing projects and skills.

## Technologies Used

- **Next.js 15** - React framework with the App Router
- **React 19** - UI library
- **Supabase** - Backend as a Service (database, auth, storage)
- **TanStack Query** - Data fetching and state management
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## Features

- Responsive design
- Server and client components
- Data fetching with TanStack Query
- Project showcase with filtering
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
- Supabase account

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

This portfolio uses Supabase as the backend. You need to set up the following tables:

### Projects Table

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  live_url TEXT,
  source_url TEXT,
  technologies TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Deployment

This project can be easily deployed on Vercel:

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).
