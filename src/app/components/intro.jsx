"use client";
import React, { useEffect } from "react";
import styles from "../styles/intro.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Intro() {
  const [tags, setTags] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch("https://kalpesh-portfolio-backend.vercel.app/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setTags(data.tags);
          } else {
            toast.error("Error in fetching data", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        })
        .catch((err) => {
          toast.error("Server Error", {
            position: "top-center",
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
    <div className={styles.intro}>
      <div className={[styles.hi, "unselectable"].join(" ")}>Hi,</div>
      <div className={[styles.iAmK, "unselectable"].join(" ")}>
        I am Kalpesh Nimje
      </div>
      <div className={[styles.myTags, "unselectable"].join(" ")}>
        {tags &&
          tags.map((data, i) => (
            <div className={styles.tags} key={i}>
              {" "}
              {data.tag} {tags.length != i + 1 ? "|" : ""}
            </div>
          ))}
      </div>
      <div className={[styles.myResponsiveTags, "unselectable"].join(" ")}>
        {tags &&
          tags.map((data, i) => (
            <div className={styles.responsiveTags} key={i}>
              <div className={styles.eachResponsiveTag}>I am a {data.tag}</div>
              {tags.length == i + 1 ? (
                <div></div>
              ) : (
                <div className={styles.underline}></div>
              )}
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
}
