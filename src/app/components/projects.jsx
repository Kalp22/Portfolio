import styles from '../styles/projects.module.css'

export default function Projects() {

    return (
        <div className={styles.projectParent}>
            <div
                className={["unselectable", "title"].join(" ")}
            >
                Projects
            </div>
            <div className={styles.projectsCover}>
                <div className={styles.theProjects}>
                    <div className={styles.projectHeads}>
                        <span className={styles.projectTitle}>Justice Index</span>
                        <div>
                            <a href='https://github.com/Mohitraut07/JusticeIndex' target='_blank' className={styles.sourceLink}>
                                Source Code
                            </a>
                            <a href='https://justice-index-j2l9.vercel.app/' target='_blank' className={styles.viewLink}>
                                View Project
                            </a>
                        </div>
                    </div>
                    <span className={styles.projectDescription}>
                        A criminal database management system
                    </span>
                </div>
                <div className={styles.theProjects}>
                    <div className={styles.projectHeads}>
                        <span className={styles.projectTitle}>Crunchyroll Copy</span>
                        <div>
                            <a href='https://github.com/Kalp22/Crounchyroll_Copy' target='_blank' className={styles.sourceLink}>
                                Source Code
                            </a>
                            <a href='https://kalp22.github.io/Crounchyroll_Copy/' target='_blank' className={styles.viewLink}>
                                View Project
                            </a>
                        </div>
                    </div>
                    <span className={styles.projectDescription}>
                        A static copy of a famous entertainment website
                    </span>
                </div>
            </div>
        </div>
    )
}