import { Footer } from "../Components/Footer";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";

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
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
