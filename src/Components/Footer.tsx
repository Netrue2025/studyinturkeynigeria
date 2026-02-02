import "../Styles/Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="about">
          <h3>Welcome to StudyInTurkeyNigeria</h3>
          <p>
            StudyInTurkeyNigeria was founded by Educatek Ltd. company which has been in the education business since 2007. Educatek is dealing with education consultancy, corporate trainings and student services. This portal was founded to provide world class service to universities and higher education institutes in marketing and provide service to individual students and parents
          </p>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <h4>© 2026 StudyInTurkeyNigeria - All rights reserved.</h4>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a>
          </li>
          <li>
            <a href="#/ContactUs">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
