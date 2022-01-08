import Head from "next/head";
import Hero from "../components/hero/hero";
import ProjectTrailer from "../components/projects/projectTrailer";
import NewsCarousel from "../components/news/newsCarousel";
import Member from "../components/team/member";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTA</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}

      </Head>
      <Hero />
      <ProjectTrailer />
      <NewsCarousel />
      <Member />
    </>
  );
}
