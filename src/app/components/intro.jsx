import styles from "../styles/intro.module.css";

export default function Intro({ tags }) {
  return (
    <div className={styles.intro}>
      <div className={[styles.hi, "unselectable"].join(" ")}>Hi,</div>
      <div className={[styles.iAmK, "unselectable"].join(" ")}>
        I am Kalpesh Nimje
      </div>
      <div className={[styles.myTags, "unselectable"].join(" ")}>
        {tags &&
          tags.map((data, i) => (
            <div className={styles.tags} key={i}>
              {" "}
              {data.tag} {tags.length != i + 1 ? "|" : ""}
            </div>
          ))}
      </div>
      <div className={[styles.myResponsiveTags, "unselectable"].join(" ")}>
        {tags &&
          tags.map((data, i) => (
            <div className={styles.responsiveTags} key={i}>
              <div className={styles.eachResponsiveTag}>I am a {data.tag}</div>
              {tags.length == i + 1 ? (
                <div></div>
              ) : (
                <div className={styles.underline}></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
