import React, { useState } from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (isSending) {
      return;
    }
    setIsSending(true);

    const NAME = e.target.NAME.value;
    const EMAIL = e.target.EMAIL.value;
    const MESSAGE = e.target.MESSAGE.value;

    fetch("https://manifestserver.onrender.com/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        subject:
          "MAIL FROM PORTFOLIO WEBSITE from" +
          NAME +
          " at " +
          new Date().toISOString(),
        html: EMAIL + " " + MESSAGE,
      }),
    })
      .then(() => {
        e.target.reset();
      })
      .finally(() => setIsSending(false));
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input id="NAME" type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input id="EMAIL" type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          id="MESSAGE"
          type="text"
          rows={5}
          placeholder="Message"
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Form;
