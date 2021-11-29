import { FaPhone, FaEnvelope } from "react-icons/fa"



const Contacts = () => {
    return (
        <>
            <div className="contacts">
                <h1> Contact Me </h1>

                <ul>
                    <li>
                        <a href="tel:9544514236"><FaPhone />954-451-4236</a>
                    </li>
                    <li>
                        <a href="mailto:Elaiken91@gamil.com"><FaEnvelope />Elaiken91@gmail.com</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contacts
