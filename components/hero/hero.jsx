import Link from "next/link";

const Hero = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "black", zIndex: "-1" }}>
      <video autoPlay loop muted style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        zIndex: "-1",
        top: 40,
        left: 0,
        objectFit: "cover",
        paddingTop: "24px",
        zIndex: "0"
      }}>
        <source src="/bv.mp4" type="video/mp4" />
      </video>

      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "3.5rem",
      }}>
        <p style={{ fontSize: "5rem", fontFamily: "Marcellus SC", fontWeight: "900", letterSpacing: "1.5rem", color: "#fff", zIndex: "1" }}>GTA</p>
        <p className="text-center" style={{ fontFamily: "Roboto Condensed", color: "#c4cfde", fontSize: "2rem", zIndex: "1" }}>(Welcome to the world of Game Development)</p>
      </div>

    </div>
  );
};

export default Hero;