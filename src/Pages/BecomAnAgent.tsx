import { useState } from "react";
import { Footer } from "../Components/Footer";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Countries } from "../Components/Countries";
import "../Styles/BecomeAnAgent.css";

export function BecomeAnAgent() {
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  // ALL FORM DATA IN ONE PLACE
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    whatsapp: "",
    operationType: "",

    // individual
    hasWebsite: "",
    website: "",

    // company
    companyName: "",
    companyIndustry: "",
    employees: "",
    companyHasWebsite: "",
    companyWebsite: "",

    experience: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation per step
  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.country
      );
    }

    if (step === 2) {
      return (
        formData.email.trim() &&
        formData.phone.trim() &&
        formData.whatsapp.trim()
      );
    }

    if (step === 3) {
      if (!formData.operationType) return false;

      if (formData.operationType === "individual") {
        if (!formData.hasWebsite) return false;
        if (formData.hasWebsite === "yes" && !formData.website.trim())
          return false;
        return true;
      }

      if (formData.operationType === "company") {
        if (
          !formData.companyName.trim() ||
          !formData.companyIndustry.trim() ||
          !formData.employees.trim() ||
          !formData.companyHasWebsite
        )
          return false;

        if (
          formData.companyHasWebsite === "yes" &&
          !formData.companyWebsite.trim()
        )
          return false;

        return true;
      }
    }

    if (step === 4) {
      return formData.experience.trim();
    }

    return false;
  };

  // Safe navigation
  const goToStep = (nextStep) => {
    if (nextStep > step && !isStepValid()) return;

    setStep(nextStep);
    document
      .querySelector(".partner-application-container")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FINAL DATA:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="main-container">
      <TopNavOne />
      <TopNavTwo />

      <div className="contents-container">
        <div className="contact-heading">
          <img src="/images/logo.png" alt="logo image" />
          <h2>Become an Agent!</h2>
        </div>
        <div className="partner-application-container">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          <h2>Partner Application</h2>

          {/* STEPPER */}
          <div className="stepper">
            {["Information", "Communication", "Operation", "Experience"].map(
              (label, index) => {
                const num = index + 1;
                return (
                  <div
                    key={label}
                    className={`step ${
                      step === num ? "active" : step > num ? "completed" : ""
                    }`}
                    onClick={() => goToStep(num)}
                  >
                    <div className="circle">{num}</div>
                    <span>{label}</span>
                  </div>
                );
              },
            )}
          </div>

          {/* FORM */}
          <form className="form" onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {step === 1 && (
              <div className="form-step">
                <div className="form-name">
                  <label>
                    Name <span>*</span>
                  </label>

                  <div className="form-row-items">
                    <div className="form-input-info">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <label>First Name</label>
                    </div>

                    <div className="form-input-info">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <label>Last Name</label>
                    </div>
                  </div>
                </div>

                <Countries
                  value={formData.country}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: value,
                    }))
                  }
                />

                <div className="next-btn">
                  <button
                    type="button"
                    disabled={!isStepValid()}
                    onClick={() => goToStep(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="form-step">
                <div className="form-input-comm-container">
                  <div className="form-input-comm">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-input-comm">
                    <label>
                      Phone <span>*</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-input-comm">
                    <label>
                      Whatsapp <span>*</span>
                    </label>
                    <input
                      type="number"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="next-btn">
                  <button type="button" onClick={() => goToStep(1)}>
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!isStepValid()}
                    onClick={() => goToStep(3)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <div className="form-input-op">
                  <label>
                    Are you working as an Individual or Company <span>*</span>
                  </label>

                  <label className="operation-row">
                    <input
                      type="radio"
                      id="individual"
                      name="operationType"
                      value="individual"
                      checked={formData.operationType === "individual"}
                      onChange={handleChange}
                    />
                    <label>Individual</label>
                  </label>

                  <label className="operation-row">
                    <input
                      type="radio"
                      id="company"
                      name="operationType"
                      value="company"
                      checked={formData.operationType === "company"}
                      onChange={handleChange}
                    />
                    <label htmlFor="company">Company</label>
                  </label>

                  {/* ================= INDIVIDUAL ================= */}
                  {formData.operationType === "individual" && (
                    <div className="conditional-input">
                      <label>Do You Have Website? <span>*</span></label>

                      <label className="operation-row">
                        <input
                          type="radio"
                          name="hasWebsite"
                          value="yes"
                          checked={formData.hasWebsite === "yes"}
                          onChange={handleChange}
                        />
                        <label>Yes</label>
                      </label>

                      <label className="operation-row">
                        <input
                          type="radio"
                          name="hasWebsite"
                          value="no"
                          checked={formData.hasWebsite === "no"}
                          onChange={handleChange}
                        />
                        <label>No</label>
                      </label>

                      {formData.hasWebsite === "yes" && (
                        <>
                          <label>Please input website <span>*</span></label>
                          <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                          />
                        </>
                      )}
                    </div>
                  )}

                  {/* ================= COMPANY ================= */}
                  {formData.operationType === "company" && (
                    <div className="conditional-input">
                      <label>Company Name <span>*</span></label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />

                      <label>Company Industry <span>*</span></label>
                      <input
                        type="text"
                        name="companyIndustry"
                        value={formData.companyIndustry}
                        onChange={handleChange}
                      />

                      <label>How many employees do you have? <span>*</span></label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                      />

                      <label>Do You Have Website? <span>*</span></label>

                      <label className="operation-row">
                        <input
                          type="radio"
                          name="companyHasWebsite"
                          value="yes"
                          checked={formData.companyHasWebsite === "yes"}
                          onChange={handleChange}
                        />
                        <label>Yes</label>
                      </label>

                      <label className="operation-row">
                        <input
                          type="radio"
                          name="companyHasWebsite"
                          value="no"
                          checked={formData.companyHasWebsite === "no"}
                          onChange={handleChange}
                        />
                        <label>No</label>
                      </label>

                      {formData.companyHasWebsite === "yes" && (
                        <div className="conditional-input">
                          <label>Please add your Website <span>*</span></label>
                          <input
                            type="text"
                            name="companyWebsite"
                            value={formData.companyWebsite}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="next-btn">
                  <button type="button" onClick={() => goToStep(2)}>
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!isStepValid()}
                    onClick={() => goToStep(4)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="form-step">
                <div className="form-input">
                  <label>Do you have experience in the education field?</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="next-btn">
                  <button type="button" onClick={() => goToStep(3)}>
                    Back
                  </button>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
