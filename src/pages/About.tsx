import React from "react";
import PageContainer from "./PageContainer";
import NameLogo from "../components/svg/NameLogo";
import styles from "../styles/pages/about.module.scss";

const About:React.FC = () => {

    return(
        <PageContainer theme="light" id="about" name="about">
            <span className="verticalCaptionText lightCaption">About</span>
            <span className="horizontalCaptionText lightCaption">About</span>
            <div className={styles.aboutWrapper}>
                <div className={styles.greeting}>
                    <div className={styles.greetingLineContainer}>
                        <span>Hello, I am</span>
                        <NameLogo id="aboutLogo"/>
                    </div>
                    <div className={styles.greetingLineContainer}>
                        <span>A passionate Front-End Developer & UI/UX Designer</span>
                    </div>
                </div>
                <div className={styles.introduction}>
                I have 15 years of experience in software development. It is indispensable for me that develop extensible, maintainable, reusable, and user-friendly applications. My utmost passion is designing and developing software that makes people's life easier and happier.
                <br /><br />
                I mostly specialize in designing interfaces and coding these interfaces in the latest front-end frameworks like React and Angular by using the best practices in the sector. My clients range from individuals to large corporations. 
                Solving problems, designing and coding new interfaces for my clients, and trying and learning new things about design and development are the biggest portion of my daily life. 
                <br /><br />
                My new passions are Mobile Development and Native Coding in React which is the next skill that I am trying to involve in my professional life.
                    <div className={styles.skills}>
                        <div className={styles.skillWrapper}>
                            <ul>
                                <li>{`- HTML / CSS / Sass`}</li>
                                <li>{`- JavaScript / TypeScript`}</li>
                                <li>{`- React / Redux`}</li>
                                <li>{`- Angular`}</li>
                                <li>{`- Bootstrap / Material UI / Semantic UI`}</li>
                                <li>{`- Formik / React Hook Form`}</li>
                            </ul>
                        </div>
                        <div className={styles.skillWrapper}>
                            <ul>
                                <li>{`- Python / Django`}</li>
                                <li>{`- C#.NET Core MVC`}</li>
                                <li>{`- AWS`}</li>
                                <li>{`- MySQL / PostgreSQL / MS SQL`}</li>
                                <li>{`- Eslint`}</li>
                                <li>{`- Cloudinary`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default About;