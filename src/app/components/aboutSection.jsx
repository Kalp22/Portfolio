import styles from "../styles/aboutSection.module.css";

export default function About({ about }) {
  return (
    <div className={styles.aboutParent} id="about_parent">
      <div className={[styles.aboutSection, "unselectable", "title"].join(" ")}>
        About
      </div>

      <div className={styles.aboutContext}>
        {about && about.map((data, i) => <p key={i}>{data.p}</p>)}
      </div>
    </div>
  );
}
