import React, { useState } from 'react';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContactPage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  //contact form via formspree
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xrgyvzga",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks! I will get back to you soon.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div id="contact-layout">
      <p>Get in touch!</p>

      <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
        <TextField id="name" label="Name" variant="outlined"/>
        <TextField id="email" label="Email" variant="outlined"/>
        <TextField
          id="message" 
          label="Message" 
          name="message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="outlined" type="submit" disabled={serverState.submitting}>Send message</Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;