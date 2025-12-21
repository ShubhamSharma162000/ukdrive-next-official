import Providers from "./providers";
import StoreClientLayout from "./store-client-layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StoreClientLayout>{children}</StoreClientLayout>
        </Providers>
      </body>
    </html>
  );
}
