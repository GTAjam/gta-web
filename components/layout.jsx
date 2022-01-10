import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Top from "./back_to_top/back_to_top";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Top />
      <Footer />
    </>
  );
}
