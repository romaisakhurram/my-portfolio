import style from "@/app/CSS/Header.module.css"
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";

export default function Header () {
    return (
       <div className={style.HeaderContainer}>
        <div className={style.HeaderChild}>
            <div className={style.HeaderLogo}><Image src={logo} alt="logo"  width={100} height={70}/></div>
               <ul className={style.HeaderList}>
                 <li className="menulink"><a href="/">Home</a></li>
                 <li className="menulink"><a href="/About">About </a></li>
                 <li className="menulink"><a href="/Projects">Projects</a></li>
                 <li className="menulink"><a href="/Contact">Contact</a></li>
                </ul>
        </div>

       </div>
    );
}