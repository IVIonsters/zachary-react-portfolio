/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Replace with your form submission logic
      // For example, using EmailJS, Formspree, or your own backend
      // await sendForm(formData);

      // Simulating a successful submission after a delay
      setTimeout(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Thank you! Your message has been sent." }
        });

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <SectionWrapper name='contact'>
      <div className="space-y-12">
        <div>
          <h2 className='text-3xl font-bold mb-1'>Get In Touch</h2>
          <div className="w-12 h-1 bg-accent mb-6"></div>
          <p className='text-muted max-w-2xl'>
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="bg-glass backdrop-blur-sm p-6 rounded-lg h-full border border-tertiary/30">
              <h3 className="text-xl font-semibold text-light mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted">
                <p>I'm currently looking for new opportunities. Send me a message and I'll get back to you as soon as possible.</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="bg-tertiary p-2 rounded-full mr-4">
                      <HiOutlineMail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Email</p>
                      <a href="mailto:ZacharyPolof@gmail.com" className="text-light hover:text-accent transition-colors">
                        ZacharyPolof@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-tertiary p-2 rounded-full mr-4">
                      <FaLinkedin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">LinkedIn</p>
                      <a href="https://linkedin.com/in/zacharypolof" className="text-light hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                        linkedin.com/in/zacharypolof
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-tertiary p-2 rounded-full mr-4">
                      <FaGithub className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">GitHub</p>
                      <a href="https://github.com/IVIonsters" className="text-light hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                        github.com/IVIonsters
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-glass backdrop-blur-sm border border-tertiary/50 rounded-md focus:outline-none focus:border-accent text-light"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-glass backdrop-blur-sm border border-tertiary/50 rounded-md focus:outline-none focus:border-accent text-light"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full p-3 bg-glass backdrop-blur-sm border border-tertiary/50 rounded-md focus:outline-none focus:border-accent text-light resize-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`py-3 px-8 bg-glass backdrop-blur-sm text-light rounded-md border border-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300 ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status.info.msg && (
                <div className={`mt-4 p-4 rounded-md ${status.info.error ? 'bg-red-500/20 text-red-200 border border-red-500/30' : 'bg-green-500/20 text-green-200 border border-green-500/30'}`}>
                  {status.info.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
