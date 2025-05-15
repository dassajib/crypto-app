import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import CoinPage from "../pages/CoinPage/CoinPage"
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/HeroSection/HeroSection"

const Index = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Routes>
            <Route exact path="/" element={<Homepage /> } />
            <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
    </div>
  )
}

export default Index