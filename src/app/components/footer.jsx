import styles from '../styles/footer.module.css'

import { TbBrandNextjs } from 'react-icons/tb'
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareGithub } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"
import { GrMail } from "react-icons/gr"


export default function Footer() {

    return(
        <div className={styles.footerParent}>
            <div className={styles.createBy}>
                <span>Created By</span>
                <span className={styles.myName}>Kalpesh</span>
            </div>
            <div className={styles.createUsing}>
                <span>Created using</span>
                <a href='https://nextjs.org/' target='_blank'>
                    <TbBrandNextjs size={'45px'} />
                </a>
            </div>
            <div className={styles.socialParent}>
                <span>Social Media</span>
                <div className={styles.socialSites}>

                    <a href='mailto:kalpesh22nimje@gmail.com' target='_blank' className={styles.siteIcons}>
                        <GrMail size={'35px'} />
                    </a>

                    <a href='https://github.com/Kalp22' target='_blank' className={styles.siteIcons}>
                        <FaSquareGithub size={'35px'} />
                    </a>

                    <a href='https://www.linkedin.com/in/kalpesh-nimje-305862234/' target='_blank' className={styles.siteIcons}>
                        <FaLinkedin size={'35px'} />
                    </a>

                    <a href='https://instagram.com/kalpeshn003?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' className={styles.siteIcons}>
                        <FaSquareInstagram size={'35px'} />
                    </a>

                </div>
            </div>
        </div>
    )
}