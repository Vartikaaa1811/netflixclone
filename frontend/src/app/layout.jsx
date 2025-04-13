
import "./globals.css";



export const metadata = {
  title: "Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="/images/netflix-icon.png" />
        </head>
      <body>
        {children}
      </body>
    </html>
  );
}
