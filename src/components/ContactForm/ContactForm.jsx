import css from "./ContactForm.module.css"
import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
    const id = useId();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Minimum 3 letters').max(50, 'Maximum 50 letters').required("This field is required!"),
        number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX-XX-XX")
    .required("This field is required!"),
    });
    
    const handleSubmit = (values, actions) => {
        onAdd({ id: id, ...values});
        actions.resetForm();
    }

    return (
        <Formik initialValues={{
            name: "",
            number: ""
        }} onSubmit={handleSubmit}
        validationSchema={validationSchema}>
            <Form className={css.contactform}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" className={css.forminput} id={nameFieldId} />
                <ErrorMessage name="name" component="span" className={css.error} />

                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" className={css.forminput} id={numberFieldId} />
                <ErrorMessage name="number" component="span" className={css.error} />
                
                <button type="submit" className={css.formbtn}>Add contact</button>
            </Form>
        </Formik>
    )
}