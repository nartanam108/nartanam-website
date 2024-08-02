import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: ''
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "490b3e45-0648-46e7-8b85-cfe143a4821b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSuccess('Form submitted successfully');
      setError('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comment: ''
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setError('Error submitting form');
      setSuccess('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Please fill out the form below to register</h1>
      <p className={styles.indication}><span className={styles.asterisk}>*</span> Indicates required field</p>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name<span className={styles.asterisk}>*</span></label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email<span className={styles.asterisk}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment">Comment<span className={styles.asterisk}>*</span></label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {result && !success && <p>{result}</p>}
    </div>
  );
};

export default Contact;
