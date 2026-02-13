# Deeksha's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS
- **Contact Form**: Functional contact form with Resend email service
- **Smooth Navigation**: Sticky navbar with smooth scrolling
- **Professional Sections**: Hero, About, Projects, Skills, Contact, Footer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and add your Resend API key
   - Get your API key from [Resend](https://resend.com/api-keys)
   - Update the email address in `src/app/api/contact/route.ts`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
- Update your name, bio, and social links in `src/components/Hero.tsx`
- Modify the about section in `src/components/About.tsx`
- Add your projects in `src/components/Projects.tsx`
- Update skills in `src/components/Skills.tsx`

### Contact Form
- Replace `your-email@example.com` in `src/app/api/contact/route.ts` with your actual email
- Add your Resend API key to `.env.local`

### Styling
- All components use Tailwind CSS for styling
- Colors and design can be customized in each component file

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `RESEND_API_KEY` environment variable in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: Resend
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # Contact form API
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Main page
│   └── components/
│       ├── About.tsx               # About section
│       ├── Contact.tsx             # Contact form
│       ├── Footer.tsx              # Footer
│       ├── Hero.tsx                # Hero section
│       ├── Navbar.tsx              # Navigation
│       ├── Projects.tsx            # Projects showcase
│       └── Skills.tsx              # Skills display
├── .env.local                      # Environment variables
└── package.json
```

## License

This project is open source and available under the MIT License.