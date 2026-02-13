// import { useState } from "react";
import { Nationalities } from "../Components/nationalities";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import data from "../data/programes.json";
import "../Styles/programs.css";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Footer } from "../Components/Footer";

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
            <form action="">
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
                  />
                </div>
                <div className="form-row-item">
                  <label htmlFor="name">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+XX"
                  />
                </div>
              </div>
              <Nationalities />
              <div className="program-row">
                <label htmlFor="program">
                  Programe <span>*</span>
                </label>
                <input type="text" value={result.PROGRAMES} />
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
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
