import styles from '../styles/intro.module.css'

export default function Intro() {

    return (
        <div className={styles.intro}>
            <div
                className={[styles.hi, "unselectable"].join(' ')}
            >
                Hi,
            </div>
            <div
                className={[styles.iAmK, "unselectable"].join(' ')}
            >
                I am Kalpesh Nimje
            </div>
            <div className={[styles.myTags, "unselectable"].join(' ')}>
                <div
                    className={styles.tags}
                > Student |
                </div><div
                    className={styles.tags}
                >
                    Engineer |
                </div>
                <div
                    className={styles.tags}
                >
                    Web Developer |
                </div>
                <div
                    className={styles.tags}
                >
                    Programmer
                </div>
            </div>
        </div>
    )
}