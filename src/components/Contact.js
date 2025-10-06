import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-background">
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`particle particle-${i + 1}`}></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together to bring your ideas to life!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>deepak250704@gmail.com</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📱</div>
                            <h3>Phone</h3>
                            <p>+91 6362797128</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>Marathahalli, Bangalore 560037</p>
                        </div>

                        <div className="social-links">
                            <h3>Follow Me</h3>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/deepak-kumar-sahu-0b65a8347/" className="social-link">
                                    <span>💼</span> LinkedIn
                                </a>
                                <a href="https://github.com/PrimaryDeepak" className="social-link">
                                    <span>🐱</span> GitHub
                                </a>
                                <a href="https://www.instagram.com/deepak_kumar_rio4/" className="social-link">
                                    <span>📷</span> Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder=" "
                                />
                                <label className="form-label">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder=" "
                                />
                                <label className="form-label">Your Email</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder=" "
                                />
                                <label className="form-label">Subject</label>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-input form-textarea"
                                    placeholder=" "
                                    rows="5"
                                ></textarea>
                                <label className="form-label">Your Message</label>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;