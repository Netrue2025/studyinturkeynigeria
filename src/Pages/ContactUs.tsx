import { useState } from "react";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Footer } from "../Components/Footer";
import { Nationalities } from "../Components/nationalities";
import "../Styles/contactUs.css";

export function ContactUs() {
  interface ProgrammeChoice {
    id: number;
    programLevel: string;
    language: string;
    university: string;
    programName: string;
  }

  const [programmes, setProgrammes] = useState([
    { id: 1, programLevel: "", language: "", university: "", programName: "" },
  ]);

  const addChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (programmes.length < 3) {
      setProgrammes([
        ...programmes,
        {
          id: Date.now(),
          programLevel: "",
          language: "",
          university: "",
          programName: "",
        },
      ]);
    }
  };

  const removeChoice = (id: number) => {
    setProgrammes(programmes.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />
        <div className="contents-container">
          <div className="contact-heading">
            <img src="/images/logo.png" alt="logo image" />
            <h2>Contact Us Today!</h2>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-row">
              <div className="form-input first-name">
                <label htmlFor="first-name">
                  First Name<span>*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="E.g. John"
                  required
                />
              </div>
              <div className="form-input last-name">
                <label htmlFor="last-name">
                  Last Name<span>*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="E.g. Doe"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-input email">
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="E.g. john@doe.com"
                  required
                />
              </div>
              <div className="form-input phone-number">
                <label htmlFor="phone-number">
                  Phone Number<span>*</span>
                </label>
                <input
                  type="number"
                  id="phone-number"
                  placeholder="E.g. +2348010000000"
                  required
                />
              </div>
            </div>
            <Nationalities />

            {/* Programme selection */}
            <div className="programme-selection-container">
              <h2>What level and program do you wish to study?</h2>
              <h3>You can add up to 3 choices you wish to study.</h3>

              {/* Programme Level */}
              {programmes.map((choice: ProgrammeChoice, index: number) => (
                <div className="programme-level" key={choice.id}>
                  <div className="programme-level-wrapper">
                    <div className="selector programme-level-radio">
                      <label htmlFor="">
                        Program Level <span className="label-span">*</span>
                      </label>
                      <div className="radio-wrapper">
                        {[
                          "TÖMER",
                          "Associate",
                          "Bachelor",
                          "Master",
                          "PhD/Doctoral",
                        ].map((level) => (
                          <label key={level} className="radio-list">
                            <input
                              type="radio"
                              name={`programLevel-${choice.id}`}
                              value={level}
                              required
                            />
                            <span>{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Language of Instruction */}
                    <div className="selector select-language">
                      <label htmlFor="">
                        Language of Instruction{" "}
                        <span className="label-span">*</span>
                      </label>
                      <div className="radio-wrapper">
                        {["English", "Turkish"].map((lang) => (
                          <label key={lang} className="radio-list">
                            <input type="radio" name="language" required />
                            <span>{lang}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="university-with-programme-wrapper">
                    <div className="university-with-programme">
                      <label htmlFor="">
                        University Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. Medipol University"
                        required
                      />
                    </div>
                    <div className="university-with-programme">
                      <label htmlFor="">
                        Program Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. Computer Engineering"
                        required
                      />
                    </div>
                  </div>
                  <div className="add-another-choice-btn">
                    {index === programmes.length - 1 &&
                      programmes.length < 3 && (
                        <button onClick={addChoice}>Add another choice</button>
                      )}
                    {programmes.length === 3 && (
                      <button onClick={() => removeChoice(choice.id)}>
                        Remove choice
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="message">
              <label htmlFor="">Anything else you would like to ask/add?</label>
              <textarea placeholder="Type your message..."></textarea>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
