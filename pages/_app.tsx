import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import React, { useEffect, useState } from "react";
// import "tailwindcss/talwind.css";
import "../styles/global.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
