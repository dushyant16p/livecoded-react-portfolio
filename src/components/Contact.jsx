import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";

// Contact component
// React concepts:
// - Controlled inputs: input value comes from state
// - onChange: updates state on every keystroke
// - useState with an object: one state for all form fields
// - Form validation and conditional rendering for messages
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // One onChange handler for all inputs.
  // e.target.name tells us which field changed.
  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your full name.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Please enter a subject.";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Please write a message.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If there are errors, stop here and show them
    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    // Validation passed - show success and reset the form
    // NOTE: This is a demo. No email is actually sent.
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Contact"
          subtitle="Have a question, an opportunity, or just want to say hello? Reach out below."
        />

        <div className="contact-layout">
          <div className="contact-info">
            <h3>Let's connect</h3>
            <p>
              I'm always happy to talk about projects, internships, or learning
              web development. You can also find me here:
            </p>

            <ul className="contact-list">
              <li>
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </li>
              <li>
                <Github size={18} />
                {/* REPLACE: href comes from portfolioData.js */}
                <a href={personalInfo.githubUrl}>GitHub</a>
              </li>
              <li>
                <Linkedin size={18} />
                <a href={personalInfo.linkedinUrl}>LinkedIn</a>
              </li>
            </ul>

            <p className="demo-note">
              Demo form: This form is for practice only and does not send a
              real email. A backend or a form service is needed for real
              email delivery.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />
              {errors.subject && <p className="error-text">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>

            {/* Conditional rendering: success message */}
            {isSubmitted && (
              <p className="success-text">
                Thank you! Your message passed validation. This is a demo
                form, so no email was sent — connect a backend or form
                service to receive real messages.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
