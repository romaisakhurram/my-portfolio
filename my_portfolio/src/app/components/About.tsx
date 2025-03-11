import style from "@/app/CSS/About.module.css"
import Link from "next/link"

export default function About () {
    return (
        <div className={style.AboutContainer}>
            <div className={style.AboutChild}>
            
            <h2 className={style.AboutHeading} data-aos="zoom-in-down">About Me</h2> <br />
            <p className={style.aboutDesc} data-aos="zoom-in-down">  
            
            - My name is Romaisa , I am a professional Fron-End developer. - your passion for coding, your journey into web development, and how you turned your passion into a career. - HTML , CSS , TYPESCRIPT , NEXT.JS, frameworks and specialize in UI/UX designs .

            <br /> <br />
            -your journey from the beginning: how you got started with programming and what inspired you to pursue web development. - I am enrolled In GIAIC (Goverment Iniatiative Of Artificial Intelligence).

             <br /> <br />
           - Dive deeper into your technical skills, focusing on front-end and back-end development. - Include details proficiency with key technologies,: - Front-end: HTML5, CSS3, JavaScript (React.js , Next.js) - Version control: Git, GitHub - APIs and integrations - Provide examples of how you use these technologies in your work, explaining your approach to solving common problems like performance issues, loading speed, and scalability.I am a Student of GIAIC and also create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic. Front-end developers focus on the user-facing side of their work, functional and secure.
            </p>

            </div>

            <button data-aos="zoom-in-down" className={style.button}> <Link href="https://resume-opal-one.vercel.app/">Resume </Link> </button>

        </div>
    )
}