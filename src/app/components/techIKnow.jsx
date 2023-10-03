import styles from '../styles/techIKnow.module.css'
import Image from 'next/image'

import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiMongodb } from "react-icons/si"
import { BsGithub } from "react-icons/bs"
import { BiLogoPostgresql } from "react-icons/bi"

export default function Technologies() {

    return (
        <div className={styles.techParent}>
            <div
                className={["unselectable", "title"].join(" ")}
            >
                Technologies I Learned
            </div>
            <div
                className={styles.techLogos}
            >
                <div className={styles.logos}>
                    <FaHtml5 className={styles.logoIcons} size={'70px'} />
                    HTML
                </div>

                <div className={styles.logos}>
                    {/* <img src="../C.svg" className={styles.logoIcons} /> */}
                    <Image src={"C.svg"} alt='C' className={styles.logoIcons} width={'70'} height={'70'}/>
                    C
                </div>

                <div className={styles.logos}>
                    <FaPython className={styles.logoIcons} size={'70px'} />
                    Python
                </div>

                <div className={styles.logos}>
                    <FaCss3Alt className={styles.logoIcons} size={'70px'} />
                    CSS
                </div>

                <div className={styles.logos}>
                    <FaGitAlt className={styles.logoIcons} size={'70px'} />
                    Git
                </div>

                <div className={styles.logos}>
                    <BsGithub className={styles.logoIcons} size={'70px'} />
                    Github
                </div>

                <div className={styles.logos}>
                    <IoLogoJavascript className={styles.logoIcons} size={'70px'} />
                    Javascript
                </div>

                <div className={styles.logos}>
                    <FaNodeJs className={styles.logoIcons} size={'70px'} />
                    Nodejs & Expressjs
                </div>
                
                <div className={styles.logos}>
                    <SiMongodb className={styles.logoIcons} size={'70px'} />
                    Mongodb
                </div>

                <div className={styles.logos}>
                    <Image src={"C++.svg"} alt='C++' className={styles.logoIcons} width={'70'} height={'70'}/>
                    C++
                </div>

                <div className={styles.logos}>
                    <BiLogoPostgresql className={styles.logoIcons} size={'70px'} />
                    Postgresql
                </div>
                
                <div className={styles.logos}>
                    <FaReact className={styles.logoIcons} size={'70px'} />
                    React
                </div>
                
            </div>
        </div>
    )
}