import {StaticImageData} from "next/image";
import  Image  from "next/image";
import calculator from "@/app/Images/calculator.png"
import CurrencyConvertor from "@/app/Images/CurrencyConvertor.jpg"
import dynamicResume from "@/app/Images/dynamic resume.jpg"
import Ecommerce from "@/app/Images/Ecommerce.png"
import form from "@/app/Images/Form.jpg"
import  BlogWebsite from "@/app/Images/BlogWebsite.png"
import FurnitureWebsite from "@/app/Images/FurnitureWebsite.png"
import ConstructionWebsite from "@/app/Images/ConstructionWebsite.png"
import style from "@/app/CSS/Project.module.css"
import Link from "next/link";

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
            title : "E-commerce Website",
            desc : "A Mini E-commerce website with Next.Js & Tailwind CSS  for managing and organizing" ,
            Image: Ecommerce,
            tags:["Next.JS" ,"TailwindCSS" ],
            Link :"https://mini-e-commerce-seven.vercel.app/"
        },

        {
            id : 2,
            title : "Currency Convertor",
            desc : "A  simple HTML , CSS & Typescript powered tool for converting currencies with real time rates. " ,
            Image: CurrencyConvertor,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :"https://currencyconvertor-weld.vercel.app/"
        },

        {
            id : 3,
            title : "Dynamic Resume",
            desc : "A Typescript based dynamic  resume built with HTML and CSS allowing to showcase their skills dynamically. " ,
            Image: dynamicResume,
            tags:["HTML" ,"CSS" , "Typescript" ],
            Link :"https://hackathon-project-4gyr.vercel.app/"
        },

        {
            id : 4,
            title : "Simple Calculator",
            desc : "A Calculator built with HTML and CSS allowing to showcase their skills dynamically" ,
            Image: calculator,
            tags:["HTML" ,"CSS"],
            Link :"https://simplecalculator-eta-eight.vercel.app/"
        },

        {
            id : 5,
            title : "Form",
            desc : "A simple form with HTML & CSS for managing and organizing " ,
            Image: form,
            tags:["HTML" ,"CSS"],
            Link :"https://form-pi-sandy.vercel.app/"
        },

        {
            id : 6,
            title : "Blog Website",
            desc : "A simple website with Next.js, CSS & Tailwind for managing and organizing " ,
            Image: BlogWebsite,
            tags:["Next.js" ,  "TailwindCSS" ],
            Link :"https://blog-website-ivory-mu.vercel.app/"
        },

        {
            id : 7,
            title : "Furniture Website",
            desc : "A simple website with Next.js, CSS & Tailwind for managing and organizing " ,
            Image: FurnitureWebsite,
            tags:["Next.js" ,  "TailwindCSS" ],
            Link :"https://website-alpha-ecru-34.vercel.app/"
        },

        {
            id : 8,
            title : "Construction Website",
            desc : "A furniture website with Next.js & Tailwind CSS for managing and organizing the UI/UX design  " ,
            Image: ConstructionWebsite,
            tags:["Next.js" , "TailwindCSS" , "UI/UX" ],
            Link :"https://websit-construction.vercel.app/"
        },

    ];

export default function Projects ()  {      
    return (
        <div  id="Projects" className={style.ProjectContainer} data-aos="zoom-in-down">
            <div className={style.ProjectHeading}> Projects </div>
            
            <div className={style.ProjectChild}>
               {data.map ((Idata) => (
                    <div  key={Idata.id} className={style.container}>
                        <Link href={Idata.Link}>
                       <Image className={style.ProjectImage}
                         src={Idata.Image}
                         alt ={Idata.title}
                         width={350}
                         height={350}
                        />
                        </Link>

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