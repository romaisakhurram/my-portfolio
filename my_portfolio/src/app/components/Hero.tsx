import style from "@/app/CSS/Hero.module.css"
import Link from "next/link";

export default function Hero () {
    return (
       <div className={style.HeroContainer}>
           <div className={style.HeroChild}>
              <div className={style.HeroGrandChild}></div>
                <div className={style.MainHeading}>
                    <div>
                        <p  data-aos="zoom-in-down">I am</p>
                        <p  data-aos="zoom-in-down">Romaisa</p>
                        <p  data-aos="zoom-in-down">Khurram</p>
                        <button data-aos="zoom-in-down" className={style.button}> <Link href="https://resume-delta-orpin.vercel.app/">Resume </Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}