import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
// import Member from "./team/member";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
