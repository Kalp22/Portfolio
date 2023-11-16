"use client"
import { useEffect } from 'react'
import React from 'react'
import styles from '../styles/projects.module.css'
import { toast } from "react-toastify"

import ProjectCard from './projectCard'

export default function Projects() {
    const [project, setProject] = React.useState([])

    useEffect(() => {
        const getData = async () => {
            fetch('http://localhost:3500/', {
                method: "GET"
            }).then((res) => res.json())
                .then((data) => {
                    if (data.status)
                        setProject(data.projects)
                    else {
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
        <div className={styles.projectParent}>
            <div
                className={["unselectable", "title"].join(" ")}
            >
                Projects
            </div>
            <div className={styles.projectsCover}>
                {
                    project &&
                    project.map((data,i) => 
                        <ProjectCard pData={data}/>
                    )
                }
            </div>
        </div>
    )
}