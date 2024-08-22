import { ImUser } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css"

export default function Contact({data: { id, name, number }, onDelete}) {
    return (
        <div className={css.contactcontainer}>
            <p className={css.contacttext}><ImUser className={css.icon} size="20" />{name}</p>
            <p className={css.contacttext}><FaPhone className={css.icon} size="20" />{number}</p>
            <button className={css.btncontact} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}