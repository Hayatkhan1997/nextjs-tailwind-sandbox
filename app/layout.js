import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";
import MainHeader from "@/components/layout/leyout-sections/MainHeader";

export const metadata = {
  title: "Nextjs Tailwind SandBox",
  description:
    "This is a tutorial project from DevEmpower YouTube channel: https://www.youtube.com/@DevEmpower",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainHeader />
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
