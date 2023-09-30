import styles from '../styles/aboutSection.module.css'

export default function About() {

    // const aboutParent = document.querySelector('#about_parent');

    // window.addEventListener('scroll', () => {
    //     const elementPosition = aboutParent.getBoundingClientRect().top;
    //     const screenHeight = window.innerHeight;

    //     if (elementPosition < screenHeight * 0.75) {
    //         aboutParent.classList.add('aboutAnimation')
    //         // aboutParent.classList.remove('aboutParent');
    //     }
    // });

    return (
        <div
            className={styles.aboutParent}
            id="about_parent"
        >
            <div
                className={[styles.aboutSection, "unselectable", "title"].join(" ")}
            >
                About
            </div>

            <div
                className={styles.aboutContext}
            >
                <p>
                    Greetings! I am a dedicated 3rd-year student at St. Vincent Pallotti College of Engineering and Technology, pursuing a B. Tech in Computer Engineering.
                    I have an insatiable curiosity and a passion for learning.
                    Within the realm of Computer Engineering, I'm driving deeper into Coding and Algorithms, viewing it as an expansive universe to explore.
                    Beyond computers, my heart is captivated by Astronomy, where the Cosmos' vastness and its celestial mysteries have always fascinated me.
                </p><p>
                    What truly defines me is my thirst for knowledge and also commitment to personal growth.
                    I believe curiosity is the engine of my progress and employ my mind to learn and adapt rapidly.
                    In a rapidly evolving world, staying at technology's growing forefront is my priority. I aspire to be contributing to the exciting frontiers of innovation.
                    In essence, I am a relentless explorer of knowledge, throttled by curiosity, passionate about computer engineering, and enamored by the cosmos.
                    As my educational journey continues, I'm committed to expanding my horizons and contributing to a future brimming with possibilities.
                </p>
            </div>
        </div>
    )
}