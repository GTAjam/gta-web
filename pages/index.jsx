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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <Hero />
      <ProjectTrailer />
      <NewsCarousel />
    </>
  );
}
