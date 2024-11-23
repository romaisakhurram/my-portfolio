import style from "@/app/CSS/Header.module.css"

export default function Header () {
    return (
       <div className={style.HeaderContainer}>
        <div className={style.HeaderChild}>
            <div className={style.HeaderLogo}>Romaisa</div>
               <ul className={style.HeaderList}>
                 <li className="menulink"><a href="#hero">Home</a></li>
                 <li className="menulink"><a href="#About">About </a></li>
                 <li className="menulink"><a href="#Projects">Projects</a></li>
                 <li className="menulink"><a href="#Contact">Contact</a></li>
                </ul>
        </div>

       </div>
    );
}