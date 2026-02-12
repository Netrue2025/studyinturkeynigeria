import { useState } from "react";
import { Footer } from "../Components/Footer";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Countries } from "../Components/Countries";
import "../Styles/BecomeAnAgent.css";

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
  operationType: string;
  hasWebsite: string;
  website: string;
  companyName: string;
  companyIndustry: string;
  employees: string;
  companyHasWebsite: string;
  companyWebsite: string;
  experience: string;
  method: string;
  studentCapacity: string;
}

export function BecomeAnAgent() {
  const [step, setStep] = useState(1);
  // const totalSteps = 4;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    whatsapp: "",
    operationType: "",
    hasWebsite: "",
    website: "",
    companyName: "",
    companyIndustry: "",
    employees: "",
    companyHasWebsite: "",
    companyWebsite: "",
    experience: "",
    method: "",
    studentCapacity: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate current step
  const validateStep = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.country) newErrors.country = "Country is required";
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.whatsapp.trim())
        newErrors.whatsapp = "Whatsapp is required";
    }

    if (step === 3) {
      if (!formData.operationType)
        newErrors.operationType = "Select Individual or Company";

      if (formData.operationType === "individual") {
        if (!formData.hasWebsite) newErrors.hasWebsite = "Select yes/no";
        if (formData.hasWebsite === "yes" && !formData.website.trim())
          newErrors.website = "Website is required";
      }

      if (formData.operationType === "company") {
        if (!formData.companyName.trim())
          newErrors.companyName = "Company name required";
        if (!formData.companyIndustry.trim())
          newErrors.companyIndustry = "Industry required";
        if (!formData.employees.trim())
          newErrors.employees = "Employees field required";
        if (!formData.companyHasWebsite)
          newErrors.companyHasWebsite = "Select yes/no";
        if (
          formData.companyHasWebsite === "yes" &&
          !formData.companyWebsite.trim()
        )
          newErrors.companyWebsite = "Website required";
      }
    }

    if (step === 4) {
      if (!formData.experience) newErrors.experience = "Select yes/no";
      if (formData.experience === "yes" && !formData.method) {
        newErrors.method = "Select Method";
      }
      if (!formData.studentCapacity) {
        newErrors.studentCapacity = "Select student capacity";
      }
    }

    return newErrors;
  };

  const goNext = () => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep(step + 1);
    document
      .querySelector(".partner-application-container")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setErrors({});
    setStep(step - 1);
    document
      .querySelector(".partner-application-container")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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

          {/* Stepper */}
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
                    onClick={() => setStep(num)}
                  >
                    <div className="circle">{num}</div>
                    <span>{label}</span>
                  </div>
                );
              },
            )}
          </div>

          {/* Form */}
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
                      />
                      <label>First Name</label>
                      {errors.firstName && (
                        <label id="error">{errors.firstName}</label>
                      )}
                    </div>
                    <div className="form-input-info">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <label>Last Name</label>
                      {errors.lastName && (
                        <label id="error">{errors.lastName}</label>
                      )}
                    </div>
                  </div>
                </div>

                <Countries
                  value={formData.country}
                  onChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, country: value }))
                  }
                />
                {errors.country && <label id="error">{errors.country}</label>}

                <div className="next-btn">
                  <button type="button" onClick={goNext}>
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
                    />
                    {errors.email && <label id="error">{errors.email}</label>}
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
                    />
                    {errors.phone && <label id="error">{errors.phone}</label>}
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
                    />
                    {errors.whatsapp && (
                      <label id="error">{errors.whatsapp}</label>
                    )}
                  </div>
                </div>

                <div className="next-btn">
                  <button type="button" onClick={goBack}>
                    Back
                  </button>
                  <button type="button" onClick={goNext}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="form-step">
                <div className="form-input-op">
                  <label>
                    Are you working as an Individual or Company <span>*</span>
                  </label>
                  <label className="operation-row">
                    <input
                      type="radio"
                      name="operationType"
                      value="individual"
                      checked={formData.operationType === "individual"}
                      onChange={handleChange}
                    />
                    Individual
                  </label>
                  <label className="operation-row">
                    <input
                      type="radio"
                      name="operationType"
                      value="company"
                      checked={formData.operationType === "company"}
                      onChange={handleChange}
                    />
                    Company
                  </label>
                  {errors.operationType && (
                    <label id="error">{errors.operationType}</label>
                  )}

                  {/* Individual */}
                  {formData.operationType === "individual" && (
                    <div className="conditional-input">
                      <label>
                        Do you have a website? <span>*</span>
                      </label>
                      <label className="operation-row">
                        <input
                          type="radio"
                          name="hasWebsite"
                          value="yes"
                          checked={formData.hasWebsite === "yes"}
                          onChange={handleChange}
                        />{" "}
                        Yes
                      </label>
                      <label className="operation-row">
                        <input
                          type="radio"
                          name="hasWebsite"
                          value="no"
                          checked={formData.hasWebsite === "no"}
                          onChange={handleChange}
                        />{" "}
                        No
                      </label>
                      {errors.hasWebsite && (
                        <label id="error">{errors.hasWebsite}</label>
                      )}

                      {formData.hasWebsite === "yes" && (
                        <>
                          <label>
                            Website <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                          />
                          {errors.website && (
                            <label id="error">{errors.website}</label>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {/* Company */}
                  {formData.operationType === "company" && (
                    <div className="conditional-input">
                      <label>
                        Company Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                      {errors.companyName && (
                        <label id="error">{errors.companyName}</label>
                      )}

                      <label>
                        Company Industry <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="companyIndustry"
                        value={formData.companyIndustry}
                        onChange={handleChange}
                      />
                      {errors.companyIndustry && (
                        <label id="error">{errors.companyIndustry}</label>
                      )}

                      <label>
                        Employees <span>*</span>
                      </label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                      />
                      {errors.employees && (
                        <label id="error">{errors.employees}</label>
                      )}

                      <label>
                        Do you have a website? <span>*</span>
                      </label>
                      <label className="operation-row">
                        <input
                          type="radio"
                          name="companyHasWebsite"
                          value="yes"
                          checked={formData.companyHasWebsite === "yes"}
                          onChange={handleChange}
                        />{" "}
                        Yes
                      </label>
                      <label className="operation-row">
                        <input
                          type="radio"
                          name="companyHasWebsite"
                          value="no"
                          checked={formData.companyHasWebsite === "no"}
                          onChange={handleChange}
                        />{" "}
                        No
                      </label>
                      {errors.companyHasWebsite && (
                        <label id="error">{errors.companyHasWebsite}</label>
                      )}

                      {formData.companyHasWebsite === "yes" && (
                        <>
                          <label>
                            Company Website <span>*</span>
                          </label>
                          <input
                            type="text"
                            name="companyWebsite"
                            value={formData.companyWebsite}
                            onChange={handleChange}
                          />
                          {errors.companyWebsite && (
                            <label id="error">{errors.companyWebsite}</label>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="next-btn">
                  <button type="button" onClick={goBack}>
                    Back
                  </button>
                  <button type="button" onClick={goNext}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="form-step">
                <div className="form-input-experience">
                  <div className="input-experience">
                    <label>
                      Do you have experience in the education field?{" "}
                      <span>*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.experience && (
                      <label id="error">{errors.experience}</label>
                    )}
                  </div>
                  {formData.experience === "yes" && (
                    <div className="method">
                      <label>
                        Choose from the following means/methods you rely on to
                        attract students: <span>*</span>
                      </label>
                      <select
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="method1">
                          My relationship at university with other students
                        </option>
                        <option value="method2">
                          I work in an academic institution
                        </option>
                        <option value="method3">Social media platforms</option>
                        <option value="method4">Friends/Acquaintances</option>
                      </select>
                      {errors.method && (
                        <label id="error">{errors.method}</label>
                      )}
                    </div>
                  )}
                  <div className="year-of-experience">
                    <label>
                      How many students can you handle? <span>*</span>
                    </label>
                    <div className="experience-row-container">
                      <label className="year-of-experience-row">
                        <input
                          type="radio"
                          name="studentCapacity"
                          value="less"
                          checked={formData.studentCapacity === "less"}
                          onChange={handleChange}
                        />{" "}
                        Less than 5
                      </label>
                      <label className="year-of-experience-row">
                        <input
                          type="radio"
                          name="studentCapacity"
                          value="tenStudent"
                          checked={formData.studentCapacity === "tenStudent"}
                          onChange={handleChange}
                        />{" "}
                        5–10 students
                      </label>
                      <label className="year-of-experience-row">
                        <input
                          type="radio"
                          name="studentCapacity"
                          value="more"
                          checked={formData.studentCapacity === "more"}
                          onChange={handleChange}
                        />{" "}
                        More than 10
                      </label>
                    </div>
                    {errors.studentCapacity && (
                      <label id="error">{errors.studentCapacity}</label>
                    )}
                  </div>
                </div>

                <div className="next-btn">
                  <button type="button" onClick={goBack}>
                    Back
                  </button>
                  <button type="submit" id="submit-btn">
                    Submit
                  </button>
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
