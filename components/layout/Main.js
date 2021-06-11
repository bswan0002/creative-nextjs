import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-2 mt-20">{children}</main>
      <Footer />
    </div>
  );
}
