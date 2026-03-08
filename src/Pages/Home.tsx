import { TopNavOne } from "../Components/TopNavOne"
import { Footer } from "../Components/Footer"
import { TopNavTwo } from "../Components/TopNavTwo"
import { Hero } from "../Components/hero"
import { CounterSection } from "../Components/CounterSection"
import "../Styles/home.css"
import { HomeSectionOne } from "../Components/HomeSectionOne"
import { VideoSection } from "../Components/VideoSection"
import { HomeLastSection } from "../Components/HomeLastSection"
// import { useEffect } from "react"


export function Home() {
  // useEffect(() => {
  //   (function(d, m){
  //     const kommunicateSettings = {
  //       appId: "2e03f58419cf2f2f188ab69b61c268916",
  //       popupWidget: true,
  //       automaticChatOpenOnNavigation: true
  //     };
  //     const s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     document.head.appendChild(s);
  //     (window as any).kommunicate = m;
  //     m._globals = kommunicateSettings;
  //   })(document, (window as any).kommunicate || {});
  //   }, []);

  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />
        <Hero />
        <HomeSectionOne />
        <CounterSection />
        <VideoSection />
        <HomeLastSection />
        

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

