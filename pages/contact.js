import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [concern, setConcern] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()               // default behaviour of form is to refresh the page
    console.log(name, email, concern, password);
    const data = { name, email, concern, password };
    // get the value corresponding to the keys given as parameters

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        alert("Thank you for your interest. We will get back to you soon!")
        setConcern("");
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleChange = (e) => {
    console.log(e);
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
    else if (e.target.name == "concern") {
      setConcern(e.target.value);
    }
    // default behaviour of form is to refresh the page
  }

  return <div className={styles.container}>
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
        <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Email address</label>
        <input className={styles.input} type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className={styles.formText}>We'll never share your email with anyone else.</div>
      </div>

      <div className={styles.mb3}>
        <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
        <textarea className={styles.input} value={concern} onChange={handleChange} name='concern' id="concern" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  </div>;

}

export default Contact;
