import { TopNavOne } from "../Components/TopNavOne"
import { TopNavTwo } from "../Components/TopNavTwo"
import "../Styles/ProgramFinder.css"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ReactPaginate from "react-paginate";
import rawData from "../data/programes.json";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
// import type { number } from "framer-motion";

// const datas:any[] = data
export function ProgrameFinder() {
    // Filtered Data from API
   
    interface Program {
      id: number;
      CODE: number;
      PROGRAM_TURKEY: string;
      UNIVERSITIES_ID: string;
      UNIVERSITIES: string;
      PROGRAMES: string;

    }
    const data = rawData as Program[];
    const cleanData= data.filter(items =>
    items &&
    items.id &&
    !isNaN(items.id) &&
    String(items.id).trim() !== "");

   

 

    // Search Function
    // const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");

    // const handleSearch = () => {
    //   if (!query.trim()) {
    //     setSearchResults([]);
    //     return;
    //   }
    //   const filtered = cleanData.filter(item =>
    //     item.program?.toLowerCase().includes(query.toLowerCase())
    //   );
    //   setSearchResults(filtered);
    // };
    // switch what to display
    // const dataToDisplay = searchResults.length > 0
    // ? searchResults
    // :cleanData ;

  // Pagenation
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // 🔹 Pagination logic
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = cleanData.slice(startIndex, endIndex); //Final usable data
  const pageCount = Math.ceil(cleanData.length / ITEMS_PER_PAGE);



    // 🔹 Smooth scroll on page change
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    // Text Animation
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
  
    // Dynamic Navigation
     const navigate = useNavigate();


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
                 
                  <CiSearch className="icon" />
                  <input className="input-box" type="text" placeholder="Enter Keywords"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="programes">
              

                {currentItems.map((result:any, index:number) => (

                    <div className="program-inset" key={index} onClick={()=>navigate(`/Programs/${result.id}`, {replace: true, state:(result)})}>
                      <h3>{result.PROGRAMES}</h3>
                      <h4><span>$200</span>  $100</h4>
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
                pageLinkClassName="page"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"


              />


            </div>
              
          </div>
        </div>
      </>
    )
  
}
