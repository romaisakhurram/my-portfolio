import {StaticImageData} from "next/image";
import  Image  from "next/image";
import resume from "@/app/Images/resume.jpg"
import CurrencyConvertor from "@/app/Images/CurrencyConvertor.jpg"
import dynamicResume from "@/app/Images/dynamic resume.jpg"
import Website from "@/app/Images/Website.jpg"
import form from "@/app/Images/Form.jpg"
import  BlogWebsite from "@/app/Images/BlogWebsite.jpg"
import style from "@/app/CSS/Project.module.css"

type Idata ={
    id :number
    title :string
    desc : string
    Image : StaticImageData
    tags :string[]
    Link : string
}

const data : Idata[] = [
        {
            id : 1,
            title : "Static Resume",
            desc : "A Typescript based dynamic  resume built with HTML and CSS allowing to showcase their skills dynamically" ,
            Image: resume,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :""
        },

        {
            id : 2,
            title : "Currency Convertor",
            desc : "A  simple HTML , CSS & Typescript powered tool for converting currencies with real time rates. " ,
            Image: CurrencyConvertor,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :""
        },

        {
            id : 3,
            title : "Dynamic Resume",
            desc : "A Typescript based dynamic  resume built with HTML and CSS allowing to showcase their skills dynamically. " ,
            Image: dynamicResume,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :""
        },

        {
            id : 4,
            title : "Restaurant Website",
            desc : "A simple website with HTML , CSS & Typescript for managing and organizing " ,
            Image: Website,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :""
        },

        {
            id : 5,
            title : "Restaurant Website",
            desc : "A simple form with HTML & CSS for managing and organizing " ,
            Image: form,
            tags:["HTML" ,"CSS"],
            Link :""
        },

        {
            id : 6,
            title : "Restaurant Website",
            desc : "A simple website with Next.js, CSS & Tailwind for managing and organizing " ,
            Image: BlogWebsite,
            tags:["Next.js" , "CSS" , "Tailwind" ],
            Link :""
        },

    ];

export default function Projects ()  {      
    return (
        <div  id="Projects" className={style.ProjectContainer} data-aos="zoom-in-down">
            <div className={style.ProjectHeading}> Projects </div>
            
            <div className={style.ProjectChild}>
               {data.map ((Idata) => (
                    <div  key={Idata.id} className={style.container}>
                       <Image className={style.ProjectImage}
                         src={Idata.Image}
                         alt ={Idata.title}
                         width={350}
                         height={350}
                        />

                       <div className={style.title}>{Idata.title}</div>
                       <div>{Idata.desc}</div>
                        <div className={style.tags}>{Idata.tags.map((tag , index) =>(
                          <span key={index} className={style.tagList}> {tag}</span>
                          ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>

    );
}