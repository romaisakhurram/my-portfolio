import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import style from "@/app/CSS/Contact.module.css"

export default function Contact () {
    return (
        <div id="Contact" className={style.ContactContainer}>

            <div className={style.ContactChild}>

                <div className={style.ContactGrandChild}>
                    <h2 className={style.ContactHeading} data-aos="zoom-in-down">Get in Touch</h2>
                    <p className={style.ContactDesc} data-aos="zoom-in-down">
                        Drop me a line give me a call or send me a message by submitting the form.
                    </p>
                    <br />
                    <div className={style.email} data-aos="zoom-in-down">
                        <CiMail  size={30}/> romaisa123@gmail.com
                    </div>
                    <br />
                    <div   className={style.Number} data-aos="zoom-in-down">
                        <BsTelephone  size={30}/> (123) 456 123 987
                    </div>

                </div>
                <div className={style.Form}>
                    <div className={style.Name} data-aos="zoom-in-down">
                       <label htmlFor="name">Name</label>
                       <input type="text" className={style.inputName}
                       id="name"/>
                    </div>
                    <br />
                    <div className={style.Email} data-aos="zoom-in-down">
                       <label htmlFor="Email">Email</label>
                       <input type="text" className={style.inputEmail}
                       id="Email"/>
                    </div>
                    <br />
                    <div className={style.Message} data-aos="zoom-in-down">
                       <label htmlFor="Message">Message</label>
                       <textarea className={style.inputMessage}
                       id="Message" rows={6}></textarea>
                    </div>
                    <br />
                    <button id="button"className={style.ContactButton} data-aos="zoom-in-down">Submit</button>

                </div>

            </div>

        </div>
    )
}