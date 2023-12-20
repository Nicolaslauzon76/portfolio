import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.user_firstname.value === "") {
      alert("Veuillez entrer votre prénom");
      return;
    }

    if (e.target.user_name.value === "") {
      alert("Veuillez entrer votre nom");
      return;
    }

    if (e.target.user_email.value === "") {
      alert("Veuillez entrer votre courriel");
      return;
    }

    if (e.target.message.value === "") {
      alert("Veuillez entrer votre message");
      return;
    }

    emailjs
      .sendForm(
        "service_vkzei6k",
        "template_ys7wyhp",
        form.current,
        "gJPFP9-TfcsyI4bU7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email envoyé !");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <article className="contact__formulaire">
      <form ref={form} onSubmit={sendEmail}>
        
        <input type="text" name="user_firstname" placeholder="Prénom"/>
        <input type="text" name="user_name" placeholder="Nom"/>
        <input type="email" name="user_email" placeholder="Courriel"/>
        <textarea name="message" placeholder="Votre beau message !"/>
        <input type="submit" value="Envoyer" />
      </form>
    </article>
  );
};

export default ContactForm;
