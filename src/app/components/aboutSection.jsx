"use client"
import React, { useEffect } from 'react'
import styles from '../styles/aboutSection.module.css'
import { toast } from "react-toastify"

export default function About() {
    const [about, setAbout] = React.useState([])

    useEffect(() => {
        const getData = async () => {
            fetch("http://localhost:3500/", {
                method: "GET"
            }).then((res) => res.json())
                .then((data) => {
                    if (data.status) {
                        setAbout(data.aboutParas)
                    } else {
                        toast.error("Error in fetching data", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        })
                    }
                }).catch((err) => {
                    toast.error("Server Error", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
                })
        }
        getData()
    }, [])

    return (
        <div
            className={styles.aboutParent}
            id="about_parent"
        >
            <div
                className={[styles.aboutSection, "unselectable", "title"].join(" ")}
            >
                About
            </div>

            <div
                className={styles.aboutContext}
            >
                {
                    about && about.map((data, i) => 
                        <p>{data.p}</p>
                    )
                }
            </div>
        </div>
    )
}