import React, { useState } from 'react';
import './MyForm.css'; 
function MyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let err = {};
    if (!formData.firstName) {
      err.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      err.lastName = 'Last Name is required';
    }
    if (!formData.username) {
      err.username = 'Username is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Invalid Email Address';
    }
    if (!formData.password) {
      err.password = 'Password is required';
    }
    if (!formData.phoneNo || !/^\d{10}$/.test(formData.phoneNo)) {
      err.phoneNo = 'Phone Number is required and must be 10 digits';
    }
    if (!formData.country) {
      err.country = 'Country is required';
    }
    if (!formData.city) {
      err.city = 'City is required';
    }
    if (!formData.panNo || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) err.panNo = 'Invalid PAN Number';
    if (!formData.aadharNo || !/^\d{12}$/.test(formData.aadharNo)) err.aadharNo = 'Invalid Aadhaar Number';
    return err;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      setIsSubmitted(true);

      // Simulate form data submission using fetch (replace with your actual API endpoint)
      const response = await fetch('https://api.example.com/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
        // Handle successful submission (e.g., clear form, display success message)
      } else {
        console.error('Error submitting form data:', response.statusText);
        // Handle submission errors (e.g., display error message)
      }
    } else {
      setErrors(err);
    }
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div>
          <h2>Form Submitted Successfully!</h2>
          <p>Here are the details you entered:</p>
          <ul>
            {Object.keys(formData).map((key) => (
              <li key={key}>
                {key}: {formData[key]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
           <h1>Login Form</h1>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error-input' : ''}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error-input' : ''}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error-input' : ''}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error-input' : ''}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className={errors.phoneNo ? 'error-input' : ''}
            />
            {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? 'error-input' : ''}
            />
            {errors.country && <p className="error">{errors.country}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? 'error-input' : ''}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="panNo">PAN Number:</label>
            <input
              type="text"
              name="panNo"
              id="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className={errors.panNo ? 'error-input' : ''}
            />
            {errors.panNo && <p className="error">{errors.panNo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="aadharNo">Aadhar Number:</label>
            <input
              type="text"
              name="aadharNo"
              id="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              className={errors.aadharNo ? 'error-input' : ''}
            />
            {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
          </div>
          <button type="submit" disabled={isSubmitted}>
            {isSubmitted ? 'Submitted' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}

export default MyForm;
