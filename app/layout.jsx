import Script from "next/script";
import Providers from "./providers";
import StoreClientLayout from "./store-client-layout";
export const metadata = {
  title: {
    default: "UKDrive – Your Ride, Your Way",
    template: "%s | UKDrive",
  },

  description:
    "UKDrive is a ride booking, ride sharing, and delivery app offering cabs, bikes, and autos with verified drivers, affordable fares, and 24x7 support across Uttarakhand.",

  metadataBase: new URL("https://ukdrive.in"),

  keywords: [
    "UKDrive",
    "ride booking app Uttarakhand",
    "cab booking Uttarakhand",
    "bike taxi Uttarakhand",
    "auto booking Uttarakhand",
    "local delivery service",
    "ride sharing app India",
    "rent bike",
    "rent car",
    "UKDrive Kotdwara",
    "UKDrive Uttarakhand",
    "UKDrive taxi service",
    "UKDrive ride booking app",
    "UKDrive delivery service",
    "kotdwara taxi",
    "kotdwara cab",
    "cab for booking kotdwara",
    "cab near by me",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.ukdrive.in",
  },

  openGraph: {
    title: "UKDrive – Ride Booking, Ride Sharing & Delivery App",
    description:
      "Book cabs, bikes, and autos with UKDrive. Safe rides, verified drivers, real-time tracking, and affordable fares across Uttarakhand.",
    url: "https://ukdrive.in/",
    siteName: "UKDrive",
    images: [
      {
        url: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20banner%201.png?updatedAt=1766089352036",
        width: 1200,
        height: 630,
        alt: "UKDrive – Your Ride, Your Way",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UKDrive – Your Ride, Your Way",
    description:
      "Ride booking, ride sharing & delivery services with verified drivers and affordable fares.",
    images: [
      "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20banner%201.png?updatedAt=1766089352036",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="ukdrive-app-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "UKDrive",
            operatingSystem: "Android",
            applicationCategory: "TransportationApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
          }),
        }}
      />
      <body>
        <Providers>
          <StoreClientLayout>{children}</StoreClientLayout>
        </Providers>
      </body>
    </html>
  );
}
