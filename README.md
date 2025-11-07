## Multi-Step Intake Form

This project renders a three-step intake form in Next.js for capturing personal, education, and social details. The form lives in `app/page.js` and relies on a handful of local components to keep each step tidy.

- **State & flow**: `page.js` stores the active step and all field values in React state. Navigation buttons move forward or back only after the required fields for that step are filled in.
- **Steps**: `PersonalDetails`, `Education`, and `Socials` components handle their respective sections. The sidebar shows progress with Lucide icons and highlights the current step.
- **Submission**: On the final step, the form posts the collected data to `https://jsonplaceholder.typicode.com/posts` with axios and resets on success. Toast notifications (via `react-toastify`) give feedback for both success and error cases.
- **Styling**: Tailwind utility classes and the `BackgroundPattern` component drive the layout. The design targets a centered, desktop-first experience with a blue accent panel on larger screens.

To tweak the form, update the validation rules in `isStepValid`, adjust the field definitions in the step components, or point the axios request to your own endpoint.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
