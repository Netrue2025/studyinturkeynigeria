import "../Styles/TopNavOne.css";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { CiChat2 } from "react-icons/ci";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useState } from "react";

export function TopNavOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu */}
      <div className="mobile-menu-container">
        <div className="email">
          <BsEnvelope className="envelope" />
        </div>
        <div className="phone">
          <FiPhoneCall className="phone-icon" />
        </div>
        <div className="message">
          <CiChat2 className="chat" />
        </div>
      </div>

      {/* Destop */}
      <div className="TopNavOne">
        <figure>
          <img src="/images/logo.jpeg" alt="logo image" />
        </figure>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RiCloseLine className="menu-icon" />
          ) : (
            <RiMenuLine className="menu-icon" />
          )}
        </div>
        <div className="navMenu">
          <div className="info">
            <BsEnvelope className="envelope" />
            <div className="info-text">
              <a href="mailto:INFO@STUDYTURKEYNIGERIA.COM">
                <span>INFO</span>
                <h3>@STUDYTURKEYNIGERIA.COM</h3>
              </a>
            </div>
          </div>
          <div className="contactUsNow">
            <FiPhoneCall className="phone" />
            <div className="contact-text">
              <span>CALL US NOW</span>
              <h3>
                <a href="tel:+905363233366">+90 536 323 3366</a>
              </h3>
            </div>
          </div>
          <div className="question">
            <CiChat2 className="chat" />
            <div className="chat-text">
              <a href="/#/ContactUs">
                <span>QUESTIONS?</span>
                <h3>CONTACT US</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="mobile-dropdown">
          <a href="/#/" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="/#/Universities" onClick={() => setIsOpen(false)}>
            Universities
          </a>

          <a href="/#/ProgrameFinder" onClick={() => setIsOpen(false)}>
            Programe Finder
          </a>

          {/* CONTACT DROPDOWN */}
          <div className="dropdown-section">
            <div
              className="dropdown-title"
              onClick={() => {
                setContactOpen(!contactOpen);
                setJoinOpen(false);
              }}
            >
              Contact {contactOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>

            {contactOpen && (
              <div className="dropdown-links">
                <a href="/#/ContactUs" onClick={() => setIsOpen(false)}>
                  Contact Us
                </a>

                <a
                  href="/#/SetUpMeetingStudent"
                  onClick={() => setIsOpen(false)}
                >
                  Setup a Meeting - Students
                </a>
              </div>
            )}
          </div>

          {/* JOIN US DROPDOWN */}
          <div className="dropdown-section">
            <div
              className="dropdown-title"
              onClick={() => {
                setJoinOpen(!joinOpen);
                setContactOpen(false);
              }}
            >
              Join Us {joinOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </div>

            {joinOpen && (
              <div className="dropdown-links">
                <a href="/#/BecomeAnAgent" onClick={() => setIsOpen(false)}>
                  Become An Agent
                </a>

                <a
                  href="/#/SetUpMeetingAgent"
                  onClick={() => setIsOpen(false)}
                >
                  Setup a Meeting - Agents
                </a>

                <a
                  href="/#/BecomeAPartnerUniversity"
                  onClick={() => setIsOpen(false)}
                >
                  Become a Partner University
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
