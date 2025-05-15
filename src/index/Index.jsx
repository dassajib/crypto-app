import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Homepage from "../pages/Homepage/Homepage"
import CoinPage from "../pages/CoinPage/CoinPage"
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/HeroSection/HeroSection"

const Index = () => {
    
  return (
    <Box sx={{backgroundColor: "#14161a", color: "white", minHeight: "100vh"}}>
        <Navbar />
        <HeroSection />
        <Routes>
            <Route exact path="/" element={<Homepage /> } />
            <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
    </Box>
  )
}

export default Index