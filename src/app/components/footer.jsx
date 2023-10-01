import styles from '../styles/footer.module.css'

import {TbBrandNextjs} from 'react-icons/tb'
import {BsLinkedin} from 'react-icons/bs'
import { FaSquareGithub } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"


export default function Footer() {

    return(
        <div className={styles.footerParent}>
            <div className={styles.createBy}>
                <span>Created By</span>
                <span>Kalpesh</span>
            </div>
            <div className={styles.createUsing}>
                <span>Created using</span>
                <div>
                    <TbBrandNextjs size={'45px'} />
                </div>
            </div>
            <div className={styles.socialParent}>
                <span>Social Media</span>
                <div className={styles.socialSites}>
                    <div className={styles.siteIcons}>
                        <FaSquareGithub size={'35px'} />
                    </div>
                    <div className={styles.siteIcons}>
                        <BsLinkedin size={'35px'} />

                    </div>
                    <div className={styles.siteIcons}>
                        <FaSquareInstagram size={'35px'} />

                    </div>
                </div>
            </div>
        </div>
    )
}