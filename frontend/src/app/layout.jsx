
import "./globals.css";



export const metadata = {
  title: "Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
        </head>
      <body>
        {children}
      </body>
    </html>
  );
}
///images/netflix-icon.png