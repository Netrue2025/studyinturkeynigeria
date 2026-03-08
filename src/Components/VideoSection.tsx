import "../Styles/VideoSection.css"
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function VideoSection(){
    // Video autoplay on scrollto the section
    useEffect(() => {
    const iframe = document.querySelector("iframe");

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            iframe!.src += "&autoplay=1";
            observer.disconnect();
        }
        },
        { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".video-section")!);
    }, []);


    return(
        <div className="video-container">
            <section className="video-section">
                <div className="video-wrapper">
                    <iframe
                    id="yt-player"
                    src="https://www.youtube.com/embed/ftUc1PbQeIM?si=3vRqrELv4V8yZvJg"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    // allowFullScreen
                    />
                    
                </div>
            </section>

            <section className="video-others-details">
                <h1>A <span>Promising Future Awaits.</span></h1>
                    
                     <Link to={"/ProgrameFinder"}>
                        <button>
                        
                            <h3>Browse Programes</h3>
                            <FaArrowRight className="btn-arrow"/>
                        
                            
                        </button>
                      </Link>
            </section>
        </div>
    )
}