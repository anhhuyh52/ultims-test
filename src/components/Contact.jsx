import React, { useState } from 'react';
import { Mail, Phone , MapPin, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted! This would connect to your backend in a real application.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    };
  
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <Mail className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">anhhuyd3v@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+84 829228150</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Da Nang, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/huy-anh262125184/" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;