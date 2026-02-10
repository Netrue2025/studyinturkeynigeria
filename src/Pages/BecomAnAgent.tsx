import { Footer } from "../Components/Footer";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Countries } from "../Components/Countries";
import "../Styles/BecomeAnAgent.css";

export function BecomeAnAgent() {
  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />
        <div className="contents-container">
          <div className="contact-heading">
            <img src="/images/logo.jpeg" alt="logo image" />
            <h2>Become an Agent!</h2>
          </div>
          <div className="partner-application-container">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <h2>Partner Application</h2>
            <form className="form">
              <div className="form-name">
                <label htmlFor="">
                  Name <span>*</span>
                </label>
                <div className="form-row-items">
                  <div className="form-input">
                    <input type="text" required />
                    <label htmlFor="">First Name</label>
                  </div>
                  <div className="form-input">
                    <input type="text" required />
                    <label htmlFor="">Last Name</label>
                  </div>
                </div>
              </div>
              <Countries />
              <div className="next-btn">
                <button>Next</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
