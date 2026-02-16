// import { useState } from "react";
import { Nationalities } from "../Components/nationalities";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import data from "../data/programes.json";
import "../Styles/programs.css";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Footer } from "../Components/Footer";
// import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";


export function Programes() {
  const { id } = useParams();

  console.log(id);

  // Filtered Data from API
  const cleanData = data.filter(
    (items) =>
      items && items.id && !isNaN(items.id) && String(items.id).trim() !== "",
  );

  // const singleProgram = cleanData.find((x) => x.id === result)
  const result = cleanData.find((item) => item.id === Number(id));
  console.log(result);

  // Form submission
  // const [success, setSuccess] = useState("");
   


  const onSubmit = async (event) => {
    const form = event.target; // store reference
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "757e495b-89b1-4f06-8ce3-aab98d590b93");

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
       
    });
   
      // Emailjs autoresponder
    const sendConfirmEmail = (FormData) => {
      emailjs.send(
      "service_rc2llto",
      "template_yt0dbh9",
      {to_email: formData.get("email"),
        to_name: formData.get("name"),
        message: `Hi ${formData.get('name')}, <br><br> Thank you for your application. Our agent will contact you shortly on how to complete your application. <br><br> Best regard <br> SITN Team`
      },
      "z4q27QZ3eb3Ew--iz"
      )
      .then(() => console.log("Email Sent"))
      .catch((err) => console.log(err))
    } 

    // const data = await response.json();
    // setSuccess(data.success ? "Success!" : "Error");
    
    Swal.fire({
      title: "Thank you for showing intrest in this programe, our agent will get in touch with you shortly to complete the apllication process.",
      icon: "success",
      draggable: true
    });
    sendConfirmEmail(Object.fromEntries(formData.entries()));
    form.reset();
    
  };


  return (
    <div className="main-container">
      <TopNavOne />
      <TopNavTwo />
      <div className="content-container">
        <header>
          <h1>{result.PROGRAMES}</h1>
        </header>
        <section className="content">
          <div className="left-side">
            <aside>
              <h3>KEY INFORMATION</h3>
            </aside>
            <div className="inset">
              <div className="badge language">
                <h3>English /{result.Language}</h3>
              </div>
              <div className="badge year">
                <h3>1 Year</h3>
              </div>
              <div className="badge duration">
                <h3>Full-Time</h3>
              </div>
            </div>
            <div className="program-available">
              <h2>
                <span>Program </span>Available
              </h2>
            </div>
            <div className="tution">
              <h2>
                Tution: <span>${result.id + result.id * 200}</span>
              </h2>
            </div>
            <div className="discounted">
              <h2>
                Discounted Tution:{" "}
                <span className="underline-span">
                  ${result.id + result.id * 100}
                </span>
              </h2>
            </div>
          </div>
          
          <div className="right-side">
            <h1>Applying is as easy as filling this form...</h1>
            <form  action="" onSubmit={onSubmit}>
              {/* Auto responder */}
              {/* <div className="responder">
                <input type="hidden" name="access_key" value="757e495b-89b1-4f06-8ce3-aab98d590b93"/>
                <input type="hidden" name="subject" value="SITN Application Confirmation" />
                <input type="hidden" name="From_name" value="SITN" />
                <input type="hidden" name="replyto" value="%email%" />
                <input type="hidden" name="autoresponse" value="Hello {{name}} 👋 <br><br> Thank you for showing intrest to study {{course}}. Please wait for our agent to contact you on what next to do. <br><br> Best Regards<br> SITN Team" />
              </div> */}
              <div className="form-row">
                <div className="form-row-item">
                  <label htmlFor="name">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-row-item">
                  <label htmlFor="name">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-row-item">
                  <label htmlFor="name">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-row-item">
                  <label htmlFor="name">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="+XX"
                    required
                  />
                </div>
              </div>
              <Nationalities />
              <div className="program-row">
                <label htmlFor="program">
                  Programe <span>*</span>
                </label>
                <input type="text" value={result.PROGRAMES} name="course"/>
              </div>
              <div className="program-level-container">
                <div className="program-level">
                  <h4>
                    Program Level <span>*</span>
                  </h4>
                  <ul>
                    <li>TOMER</li>
                    <li>Associate</li>
                    <li>Bachelor</li>
                    <li>Master</li>
                    <li>PHD/Doctorate</li>
                  </ul>
                </div>
                <div className="language-of-instruction">
                  <h4>
                    Language of Instruction <span>*</span>
                  </h4>
                  <ul>
                    <li>English</li>
                    <li>Turkish</li>
                  </ul>
                </div>
              </div>
              <div className="btn">
                <button type="submit">Submit</button>
              </div>
              {/* <p>{success}</p> */}
             

            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
