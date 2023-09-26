"use client";
import { GoogleAnalyticsScript } from "@/lib/GoogleAnalytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <GoogleAnalyticsScript />
    </>
  );
}
