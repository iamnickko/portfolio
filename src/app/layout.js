import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Nick Ko",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
