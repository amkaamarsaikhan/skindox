import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>
        <Navbar />
        {children} {/* Энд Home хуудас буюу Hero, Products орно */}
        <Footer />
      </body>
    </html>
  );
}