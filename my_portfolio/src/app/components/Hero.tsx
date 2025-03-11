import style from "@/app/CSS/Hero.module.css"
import Link from "next/link";
import Image from "next/image";
import profile from "@/app/Images/profile.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero () {
    return (
        <div className={style.HeroContainer}>
                <div className={style.HeroChild}>
                    <div>
                        <h3 id="h3" data-aos="zoom-in-down">Hello I'm</h3>
                        <p className={style.MainHeading} data-aos="zoom-in-down">Web Developer</p>
                        <p className={style.MainHeading} data-aos="zoom-in-down">Romaisa Khurram</p>
                        <button data-aos="zoom-in-down" className={style.button}><Link href="https://www.linkedin.com/in/romaisa-khurram123"> <BsLinkedin/> </Link></button>
                        <button data-aos="zoom-in-down" className={style.button}><Link href="https://github.com/romaisakhurram"> <FaGithub/> </Link></button>
                        <button data-aos="zoom-in-down" className={style.button}><Link href="https://mahamkhurram1230@gmail.com"> <MdEmail/> </Link></button>
                    </div>
                    <div>
                        <Image src={profile} alt="profile image" width={450} height={450} id="Image"/>
                    </div>
                </div>
            </div>
    );
}