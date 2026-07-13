import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");


  const scriptURL = "https://script.google.com/macros/s/AKfycbzNdvsyUuet9mrP8UUhzu6d9nqGMGgO-RDFo0HoYe3XaN-VHuk2kVOd3U4sqaN9OMfrTg/exec";


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });


      setStatus("Message Sent Successfully 🚀");

      setFormData({
        name:"",
        email:"",
        message:""
      });


    } catch (error) {

      setStatus("Something went wrong ❌");

    }

  };


  return (
    <section className="contact" id="contact">

      <div className="stars"></div>


      <motion.div
        className="contact-container"
        initial={{opacity:0, y:80}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
      >

        <h2>
          Let's <span>Connect</span>
        </h2>


        <p>
          Have a project or opportunity?
          Let's create something amazing together 🚀
        </p>


        <div className="contact-box">


          <div className="contact-info">

            <h3>Contact Me</h3>


            <div className="info">
              <FaEnvelope/>
              <span>
                naziyanadaf2006@gmail.com
              </span>
            </div>


            <div className="info">
              <FaPhone/>
              <span>
                +91 9082080136
              </span>
            </div>


            <div className="social">

              <a href="https://github.com/naziya2006" target="_blank">
                <FaGithub/>
              </a>


              <a href="https://www.linkedin.com/in/naziya-nadaf-942437328/" target="_blank">
                <FaLinkedin/>
              </a>

            </div>


          </div>



          <form onSubmit={handleSubmit}>


            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            <button type="submit">
              Send Message 🚀
            </button>


            <p className="form-status">
              {status}
            </p>


          </form>


        </div>


      </motion.div>


    </section>
  );
}