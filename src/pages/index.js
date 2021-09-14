import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const displayLgBoulos = {
  fontSize: 150,
  fontWeight: 900,
  fontFamily: "Inter",
  color: "#017fc7",
};
const displayLgBelimpex = {
  fontSize: 150,
  fontWeight: 900,
  fontFamily: "Inter",
  color: "#bfd73e",
};
const displayLgBelpapyrus = {
  fontSize: 150,
  fontWeight: 900,
  fontFamily: "Inter",
  color: "#1f7872",
};

function HomepageHeader() {
  return (
    // <header className={clsx("hero hero--primary", styles.heroBanner)}>
    //   <div className="container">
    //     <h1 style={{ fontSize: 35, fontFamily: "sans-serif" }}>Belimpex Documentation</h1>
    //     <p style={{ fontSize: 18 }}>documentation page for Bpl Software</p>
    //     <Link to="/">Introduction Page</Link>
    //   </div>
    // </header>
    <div style={{ textAlign: "center" }}>
      <h1 style={displayLgBoulos}>Boulos</h1>
      <h1 style={displayLgBelimpex}>Belimpex</h1>
      <h1 style={displayLgBelpapyrus}>Belpapyrus</h1>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
