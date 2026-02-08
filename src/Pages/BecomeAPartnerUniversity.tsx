import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import "../Styles/BecomeAPartner.css";

export function BecomeAPartnerUniversity() {
  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />
        <div className="contents-container">
          <div className="contact-heading">
            <img src="/images/logo.jpeg" alt="logo image" />
            <h2>Contact Us Today!</h2>
          </div>
          <form action="" className="form">
            <div className="form-row">
              <div className="form-row-item">
                <label htmlFor="fn">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  required
                  id="fn"
                  placeholder="E.g. John"
                />
              </div>
              <div className="form-row-item">
                <label htmlFor="ln">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  required
                  id="ln"
                  placeholder="E.g. Doe"
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-item">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="E.g. john@doe.com"
                  className="form-input"
                />
              </div>
              <div className="form-row-item">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="phone"
                  required
                  placeholder="E.g. +2348010000000"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-item">
                <label htmlFor="institution">
                  Institution Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="institution"
                  required
                />
              </div>
              <div className="form-row-item">
                <label htmlFor="position">
                  Position at Institution<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="position"
                  required
                />
              </div>
            </div>
            <div className="btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
