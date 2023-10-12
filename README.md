# SASS AI

Welcome to **SAAS AI**! This is a [Next.js](https://nextjs.org/) application Inspired By [Code With Antonio](https://www.youtube.com/@codewithantonio) designed to showcase the integration of [Open AI](https://openai.com/) and [Replicate](https://replicate.com/) for creating 5 AI generators (chat, code, image, music and video) plus using [stripe](https://stripe.com/) for payment and [crisp](https://crisp.chat/en/) for customer support.

![App Screenshot](/public/screenshot.png)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies](#technologies)

## Getting Started

These instructions will help you set up a local copy of the project on your machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) or any package manager you like

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zougari47/sass-ai.git
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Add .env file in root directory:

   ```plaintext
   ### .env file example

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   OPENAI_API_KEY=

   REPLICATE_API_KEY=

   STRIPE_API_KEY=
   STRIPE_WEBHOOK_SECRET=

   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXT_PUBLIC_CRISP_CHAT_ID=
   ```

4. Run the project:
   ```bash
   pnpm dev
   ```

### Technologies

<!-- write front on every technologies it description -->

- [Next.js](https://nextjs.org/) React full stack framework
- [Tailwind CSS](https://tailwindcss.com/) Utility-first CSS framework
- [Shadcn-ui](https://ui.shadcn.com/) Re-usable components built using Radix UI and Tailwind CSS.
- [Prisma](https://www.prisma.io/) Modern database ORM toolkit
- [Open AI](https://openai.com/) AI API
- [Replicate](https://replicate.com/) AI API
- [Stripe](https://stripe.com/) Online payments gateway
- [Crisp](https://crisp.chat/en/) Customer messaging and support
