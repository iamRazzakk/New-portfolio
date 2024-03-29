import { GiClawSlashes, GiPhone } from "react-icons/gi";
import { FaArrowTrendDown, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import pdf from '../../public/Md Abdur Razzak.pdf'
const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"https://i.ibb.co/58wN5vK/Office-1-1.jpg"}
            alt="Md Abdur Razzak"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Md Abdur Razzak">
            Md Abdur Razzak
          </h1>
          <p className="title">Front End Developer</p>

          <button className="resume lg:p-3 lg:px-5 mt-1 p-2 px-4 lg:mt-4" type="submit" data-form-btn>
            <a href={pdf} download>Download Resume</a><FaArrowTrendDown></FaArrowTrendDown>
          </button>

        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdEmail />

            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:mdabdurrazzakrakib290@gmail.com" className="contact-link">
                mdabdurrazzakrakib290@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+880 1878-265664" className="contact-link">
                +880 1878-265664
              </a>
            </div>
          </li>


          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot></FaLocationDot>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Chittagong, Bangladesh</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-link">
            <a className="social-link" href="https://github.com/iamRazzakk" target="_blank">
              <FaGithub ></FaGithub>
            </a>
          </li>
          <li className="">
            <a className="social-link" href="https://www.linkedin.com/in/razzak392/" target="_blank">
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li >
            <a className="social-link" href="https://twitter.com/rakibt23p" target="_blank">
              <FaTwitter ></FaTwitter>
            </a>
          </li>
          <li className="social-link">
            <a className="social-link" href="https://www.facebook.com/profile.php?id=100089884363943" target="_blank">
              <FaFacebook ></FaFacebook>
            </a>
          </li>
        </ul>
      </div>
    </aside >
  )
}

export default Aside