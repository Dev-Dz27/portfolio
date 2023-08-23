// utils/GoogleAnalytics.tsx
import Script from "next/script";

export function GoogleAnalyticsScript() {
  const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
}
