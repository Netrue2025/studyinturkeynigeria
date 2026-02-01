import "../Styles/countersection.css"
import { useEffect } from "react";

export function CounterSection(){
    // JS Animation for circular contuer
    function animateCount(el) {
        const target = +el.dataset.target;
        const duration = 1500;
        const startTime = performance.now();

        function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            el.textContent = target >= 1000
            ? `${Math.floor(value / 1000)}K+`
            : `${value}+`;

            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }
    // Trigger counter on scroll
    useEffect(() => {
        const section = document.querySelector(".stats-section");
        const counters = document.querySelectorAll(".count");

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                counters.forEach(animateCount);
                observer.disconnect(); // run once
            }
            },
            { threshold: 0.4 }
            );

            if (section) observer.observe(section);
        }, []);


    return(
        <div className="CounterSection">
            <section className="stats-section">
                <div className="stat-circle big">
                    <span className="count" data-target="170000">0</span>
                    <p>Students</p>
                </div>

                <div className="stat-circle medium">
                    <span className="count" data-target="200">0</span>
                    <p>Universities</p>
                </div>

                <div className="stat-circle small">
                    <span className="count" data-target="60000">0</span>
                    <p>Programs</p>
                </div>
            </section>
            <section className="counter-other-contents">
                <h1>Our team of expert 
                    advisors is here to support you every 
                    step of the way.
                </h1>
                <p>
                    With the right documents and qualifications, we can secure your acceptance at one of our prestigious
                    partner universities. In addition, 90% of our students receive scholarships from partnered universities.
                    Our success is measured by your achievements. Join us and let’s make your academic dreams a reality.​
                </p>
            </section>

        </div>
    )
}