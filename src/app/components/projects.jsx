import styles from "../styles/projects.module.css";

import ProjectCard from "./projectCard";

export default function Projects({ project }) {
  return (
    <div className={styles.projectParent}>
      <div className={["unselectable", "title"].join(" ")}>Projects</div>
      <div className={styles.projectsCover}>
        {project &&
          project.map((data, i) => <ProjectCard pData={data} key={i} />)}
      </div>
    </div>
  );
}
