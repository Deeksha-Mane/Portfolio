# ✨ Deeksha's Portfolio

A stunning, modern, and responsive portfolio website built with cutting-edge technologies to showcase your professional work and achievements.

---

## 🚀 Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Mobile-first approach with smooth, fluid animations |
| ⚡ **Modern Tech Stack** | Next.js 16, TypeScript, Tailwind CSS |
| 📧 **Smart Contact Form** | Functional contact form with Resend email integration |
| 🎯 **Smooth Navigation** | Sticky navbar with smooth scrolling transitions |
| 🎨 **Professional Sections** | Hero, About, Projects, Skills, Contact, Footer |
| ⚙️ **SEO Optimized** | Built with best practices for search engines |

</div>

---

## 📋 Prerequisites

```bash
✅ Node.js 18+ 
✅ npm or yarn package manager
✅ Resend API Key (for contact form)
```

---

## 🛠️ Quick Start

### 1️⃣ **Clone & Install**
```bash
git clone https://github.com/Deeksha-Mane/Portfolio.git
cd Portfolio
npm install
```

### 2️⃣ **Environment Setup**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_RESEND_API_KEY=your_api_key_here
```
Get your API key from [Resend Dashboard](https://resend.com/api-keys)

### 3️⃣ **Run Development Server**
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser 🌐

### 4️⃣ **Deploy**
Push to GitHub and deploy on [Vercel](https://vercel.com) with one click! 🚀

---

## 🎨 Customization Guide

### Personal Information
```typescript
// src/components/Hero.tsx
👤 Update your name and bio
🔗 Add social media links
📝 Customize your headline
```

### About Section
```typescript
// src/components/About.tsx
✏️ Write your professional story
📚 Highlight your background
💡 Share your expertise
```

### Projects Showcase
```typescript
// src/components/Projects.tsx
🎯 Add your best projects
📸 Include project images
🔗 Link to live demos
```

### Skills & Technologies
```typescript
// src/components/Skills.tsx
💻 List your technical skills
🛠️ Add proficiency levels
📊 Organize by categories
```

---

## 📧 Contact Form Setup

1. **Update Email Address**
   - Open `src/app/api/contact/route.ts`
   - Replace `your-email@example.com` with your actual email

2. **Add Resend API Key**
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_RESEND_API_KEY=your_key
     ```

3. **Test Your Form**
   - Send a test email from the contact form
   - Verify it reaches your inbox

---

## 🎯 Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| 🖥️ **Framework** | Next.js 16 with App Router |
| 📘 **Language** | TypeScript |
| 🎨 **Styling** | Tailwind CSS with animations |
| 🎭 **Icons** | Lucide React |
| 📧 **Email** | Resend |
| 🚀 **Hosting** | Vercel (recommended) |

</div>

---

## 📁 Project Structure

```
Portfolio/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 api/
│   │   │   └── 📂 contact/
│   │   │       └── route.ts          ✉️ Contact API endpoint
│   │   ├── globals.css               🎨 Global styles
│   │   ├── layout.tsx                📐 Root layout
│   │   └── page.tsx                  🏠 Main page
│   └── 📂 components/
│       ├── About.tsx                 👤 About section
│       ├── Contact.tsx               📧 Contact form
│       ├── Footer.tsx                🔚 Footer
│       ├── Hero.tsx                  ⭐ Hero section
│       ├── Navbar.tsx                🧭 Navigation
│       ├── Projects.tsx              🎯 Projects showcase
│       └── Skills.tsx                💪 Skills display
├── .env.local                        🔑 Environment variables
├── package.json                      📦 Dependencies
└── README.md                         📖 Documentation
```

---

## 🚀 Deployment Options

### ⭐ Vercel (Recommended)
```bash
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add RESEND_API_KEY in Vercel dashboard
4. Deploy! 🎉
```

### Other Platforms
- 🌐 **Netlify** - Excellent Next.js support
- 🚂 **Railway** - Simple and affordable
- 🌊 **DigitalOcean** - Powerful cloud platform

---

## 💡 Tips & Tricks

- 🎨 Customize colors in Tailwind configuration
- ⚡ Enable dark mode in settings
- 📱 Test on mobile devices during development
- 🔍 Use Chrome DevTools for responsive testing
- 📈 Monitor performance with Vercel Analytics

---

## 📝 License

This project is open source and available under the **MIT License**.

---

<div align="center">

### ⭐ If you found this helpful, please star the repository! ⭐

**Built with ❤️ by Deeksha**

[Portfolio](https://github.com/Deeksha-Mane/Portfolio) • [Issues](https://github.com/Deeksha-Mane/Portfolio/issues) • [Discussions](https://github.com/Deeksha-Mane/Portfolio/discussions)

</div>