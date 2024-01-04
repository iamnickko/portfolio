import GoogleAnalytics from "./components/GoogleAnalytics";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Nick Ko | Portfolio",
  description:
    "Showcasing the projects of a full stack software developer. This website was built using React.js and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
