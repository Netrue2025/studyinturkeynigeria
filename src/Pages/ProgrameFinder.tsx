import { TopNavOne } from "../Components/TopNavOne"
import { TopNavTwo } from "../Components/TopNavTwo"
import "../Styles/ProgramFinder.css"
import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ReactPaginate from "react-paginate";
import data from "../data/programes.json";


export function ProgrameFinder() {
  
  
  const words = ["Discorver", "Exploy", "Pursue"]

  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setWord(words[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Pagenation

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const cleanData = data.filter(item =>
    item &&
    item.id &&
    !isNaN(item.id) &&
    String(item.id).trim() !== "");

  // 🔹 Pagination logic

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = cleanData.slice(startIndex, endIndex);
  const pageCount = Math.ceil(cleanData.length / ITEMS_PER_PAGE);

  // 🔹 Smooth scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  


    return (
      
      <>
        <TopNavOne />
        <TopNavTwo />

        <div className="programfinder-container">
          <div className="contents-container">
            <h1><span key={word} className="change-word">{word}</span>  your dream program</h1>
            <div className="programes-container">
              <div className="search-container">
                <h3>Search Programes</h3>
                <div className="search-container">
                  <CiSearch className="icon"/>
                  <input className="input-box" type="search" placeholder="Enter Keywords"/>
                </div>
              </div>
              <div className="programes">

                {currentItems.map( result => (
                  <div className="program-inset" key={result.id} >
                    <h3>{result.PROGRAMES}</h3>
                    <h4><span>${Math.round(result.CODE * 0.000050)}</span>  ${Math.round(result.CODE * 0.000020)}</h4>
                  </div>

                ))}
              </div>

              {/* PAGINATION */}
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next ›"
                previousLabel="‹ Prev"
                pageCount={pageCount}
                onPageChange={(e) => setCurrentPage(e.selected)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                containerClassName="pagination"
                pageClassName="page-item"
                activeClassName="active"
              />


            </div>
              
          </div>
        </div>
      </>
    )
  
}
