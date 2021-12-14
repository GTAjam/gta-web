import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import ProjectTrailer from "../components/projects/projectTrailer";
import NewsCarousel from "../components/news/newsCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTA</title>
      </Head>

      <Hero />
      <ProjectTrailer />
      <NewsCarousel />
    </>
  );
}
