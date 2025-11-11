import "./globals.css";

import Providers from "./providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Providers>
         
          {children}
        </Providers>
      </body>
    </html>
  );
}
