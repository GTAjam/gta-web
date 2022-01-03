import Link from "next/link";

const Hero = () => {
  return (
    <div className="sec1">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          top: 0,
          left: 0,
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src="/bv.mp4" type="video/mp4" />
      </video>

      <div
        className="sec2"
        style={{
          fontSize: "100px",
          marginTop: "300px",
        }}
      >
        WELCOME TO GTA
      </div>
    </div>
  );
};

export default Hero;
