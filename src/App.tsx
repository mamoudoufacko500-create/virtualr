import  Workflow  from "./Composants/Workflow"
import FeatureSection from "./Composants/FeatureSection"
import HeroSection from "./Composants/HeroSection"
import Navbar from "./Composants/Navbar"
import Pricing from "./Composants/Pricing"
import Testimonials from "./Composants/Testimonials"
import Footer from "./Composants/Footer"



const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSection />  
       <FeatureSection />
        <Workflow />
        <Pricing/>
        <Testimonials />
        <Footer/>
      </div>
    </>
  )
}

export default App
