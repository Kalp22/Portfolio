import styles from "../styles/techIKnow.module.css";
import Image from "next/image";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";

export default function Technologies() {
  return (
    <div className={styles.techParent}>
      <div className={["unselectable", "title"].join(" ")}>My Skills</div>
      <div className={styles.techLogos}>
        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaHtml5 className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>HTML</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <Image
              src={"C.svg"}
              alt="C"
              className={styles.logoIcons}
              width={"70"}
              height={"70"}
            />
          </div>
          <div className={styles.logoText}>C</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaPython className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Python</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaCss3Alt className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>CSS</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaGitAlt className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Git</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <BsGithub className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Github</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <IoLogoJavascript className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Javascript</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaNodeJs className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Nodejs & Expressjs</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <SiMongodb className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Mongodb</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <SiCplusplus className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>C++</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <BiLogoPostgresql className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Postgresql</div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <FaReact className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Reactjs</div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <TbBrandNextjs className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Nextjs</div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logoImages}>
            <BiLogoTailwindCss className={styles.logoIcons} size={"70px"} />
          </div>
          <div className={styles.logoText}>Tailwind CSS</div>
        </div>
      </div>
    </div>
  );
}
