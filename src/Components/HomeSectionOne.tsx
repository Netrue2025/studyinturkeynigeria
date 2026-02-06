import "../Styles/HomeSectionOne.css"
import { useEffect } from "react";


export function HomeSectionOne(){
    // Aminamtion for the image background
    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
        },
        { threshold: 0.2 }
    );

    const el = document.querySelector(".background-container");
    if (el) observer.observe(el);

    return () => observer.disconnect();
    }, []);
    // Amination for the image itself
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("image-in-view");
                }
                },
                { threshold: 0.2 }
            );

            const el = document.querySelector(".front-image");
            if (el) observer.observe(el);

            return () => observer.disconnect();
        }, []);


    return(
        
        <section className="HomeSectionOne">
            <div className="section-one">
                <article>
                    <h2>Study In Turkey.</h2>
                    <p>There are over 200 universities in Türkiye. The choices are endless. Study in a country with a rich cultural heritage and a 
                        unique combination of Eastern and Western influences.
                    </p>
                </article>
                <article>
                    <h2>Fully Accredited Universities.</h2>
                    <p>Come and join more than 320.000 
                        international students who already study abroad
                    </p>
                </article>
            </div>
            <div className="section-two">
                <div className="background-container"></div>
                <div className="front-image"></div>
            </div>
            <div className="section-three">
                <article>
                    <h2>World Class Degree Programmes.</h2>
                    <p>Study at some of the most prestigious 
                        universities in the world, and at affordable prices!
                    </p>
                </article>
                <article>
                    <h2>We Offer You Peace of Mind!</h2>
                    <p>At SPT, our agents will help you find advice on university entry requirements, student visas, tuition fees, scholarships and living costs</p>
                </article>

            </div>
        </section>
        
    )
}