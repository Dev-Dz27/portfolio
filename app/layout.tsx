import "./globals.css";
import { Foldit, Nunito_Sans } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
// import { Analytics } from "@/components/analytics";
import { GoogleAnalyticsScript } from "@/lib/GoogleAnalytics";
import Script from "next/script";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "IslamJs",
    template: "%s | devdzportfolio.vercel.app",
  },
  description:
    "Self-taught web developer proficient with Next.js and Tailwind ",
  openGraph: {
    title: "chronark.com",
    description:
      "Self-taught web developer proficient with Next.js and Tailwind ",
    url: "https://devdzportfolio.vercel.app",
    siteName: "devdzportfolio.vercel.app",
    images: [
      {
        url: "/og.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: "Chronark",
  //   card: "summary_large_image",
  // },
  icons: {
    shortcut: "/favicon.png",
  },
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"], display: "swap" });
const foldit = Foldit({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-foldit",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={[inter.variable, calSans.variable].join(" ")}
      className={cn(
        nunitoSans.className,
        calSans.variable,
        foldit.variable,
        "dark"
      )}
    >
      <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token={process.env.BEAM_API_TOKEN}
        async // TODO: replace with strategy? https://nextjs.org/docs/app/api-reference/components/script#props
      />
{/* Tidio Chat  */}
      <Script
        src="https://code.tidio.co/uhuq4md42kqigg5cqnrzaib15bucgif4.js"
        async // TODO: replace with strategy? https://nextjs.org/docs/app/api-reference/components/script#props
      />

      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <GoogleAnalyticsScript />
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
