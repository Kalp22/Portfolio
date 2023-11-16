import styles from "../styles/projectCard.module.css";

export default function ProjectCard({ pData, key }) {
  return (
    <div className={styles.theProjects} key={key}>
      <div className={styles.projectHeads}>
        <span className={styles.projectTitle}>{pData.name}</span>
        <span className={styles.projectDescript}>
          A criminal database management system
        </span>
        <div className={styles.linksWrapper}>
          <div className={styles.pLink}>
            <a
              href={pData.sourceLink}
              target="_blank"
              className={styles.sourceLink}
            >
              Source Code
            </a>
          </div>
          <div className={styles.pLink}>
            <a
              href={pData.projectLink}
              target="_blank"
              className={styles.viewLink}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <span className={styles.projectDescription}>{pData.description}</span>
    </div>
  );
}
