import "../Styles/Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="about">
          <h3>Welcome to StudyInTurkeyNigeria</h3>
          <p>
            StudyInTurkeyNigeria was founded by Educatek Ltd. company which has
            been in the education business since 2007. Educatek is dealing with
            education consultancy, corporate trainings and student services.
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
          <p>© 2026 StudyInTurkeyNigeria - All rights reserved.</p>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
