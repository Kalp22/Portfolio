import styles from '../styles/projectCard.module.css'

export default function ProjectCard(data) {
    
    return (
        <div className={styles.theProjects}>
            <div className={styles.projectHeads}>
                <span className={styles.projectTitle}>
                    {
                        data.pData.name
                    }
                </span>
                <span className={styles.projectDescript}>
                    A criminal database management system
                </span>
                <div className={styles.linksWrapper}>
                    <div className={styles.pLink}>
                        <a href={data.pData.sourceLink} target='_blank' className={styles.sourceLink}>
                            Source Code
                        </a>
                    </div>
                    <div className={styles.pLink}>
                        <a href={data.pData.projectLink} target='_blank' className={styles.viewLink}>
                            View Project
                        </a>
                    </div>
                </div>
            </div>
            <span className={styles.projectDescription}>
                {data.pData.description}
            </span>
        </div>
    )
}