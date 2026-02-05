import { TopNavOne } from "../Components/TopNavOne"
import { Footer } from "../Components/Footer"
import { TopNavTwo } from "../Components/TopNavTwo"
import { Hero } from "../Components/hero"
import { CounterSection } from "../Components/CounterSection"
import "../Styles/home.css"
import { HomeSectionOne } from "../Components/HomeSectionOne"
import { VideoSection } from "../Components/VideoSection"
import { HomeLastSection } from "../Components/HomeLastSection"

export function Home() {
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

