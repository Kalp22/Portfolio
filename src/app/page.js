"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/aboutSection";
import Technologies from "./components/techIKnow";
import Projects from "./components/projects";
import Footer from "./components/footer";

import styles from "./styles/home.module.css";

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      fetch("https://kalpesh-portfolio-backend.vercel.app/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setData(data);
            setLoading(false);
          } else {
            toast.error("Error in fetching data", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        })
        .catch((err) => {
          toast.error("Server Error: " + err, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className={styles.loading}>
            <Navbar />
            <div className={styles.loader}></div>
            <div className={styles.loader2}></div>
            <div className={styles.loader3}></div>
          </div>
        </>
      ) : (
        <main className={styles.main}>
          <Navbar />
          <Intro tags={data.tags} />
          <About about={data.aboutParas} />
          <Technologies />
          <Projects project={data.projects} />
          <Footer />
          <ToastContainer />
        </main>
      )}
    </>
  );
}
