import style from "@/app/CSS/Skills.module.css"

export default function Skills (){
    return (
        <div className={style.SkillContainer}>
            <div className={style.SkillChild}>
                <div>
                    <h2 className={style.SkillHeading} data-aos="zoom-in-down">Technologies I work with</h2>
                    <p className={style.SkillDesc} data-aos="zoom-in-down">
                        I have a solid foundation in web development , specilaizing  in HTML CSS & Typescript . My Experience to using framework like React and Next.Js to create dynamic and user friendly application. i'm also proficient in yechnologies to enhance my skills and contribute effectively to projects
                    </p>
                </div>
                <div>
                    <div className={style.Skills}>
                        <div className={style.SkillList}>
                            <h2 data-aos="zoom-in-down">Typescript</h2>
                            <h2 data-aos="zoom-in-down">Next.js</h2>
                            <h2 data-aos="zoom-in-down">Reat.js</h2>
                        </div>
                        <div className={style.SkillList}>
                            <h2 data-aos="zoom-in-down">Tailwind</h2>
                            <h2 data-aos="zoom-in-down">HTML</h2>
                            <h2 data-aos="zoom-in-down">CSS</h2>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}