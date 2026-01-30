import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Blog from "./Components/Blog";
import FindOutMore from "./Components/FindOutMore";
import ViewAllCourse from "./Components/ViewAllCourse";
import BcomeTecherFindOut from "./Components/BcomeTecherFindOut";
import GetStart from "./Components/GetStart";
import MegaMenu from "./Components/MegaMenu";
import AboutSection from "./Components/AboutSection";
import LanguageCourses from "./Components/LanguageCourses";
import PremiumSection from "./Components/PremiumSection";
import Reviews from "./Components/Reviews";
import WordPress from "./Components/WordPress";
import TeacherProfile from "./Components/TeacherProfile";
import TeacherListing from "./Components/TeacherListing";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Read More Stories" element={<Blog/>}/>
        <Route path="/View All Courses" element={<FindOutMore/>}/>
       <Route path="Find Out Moree" element={<BcomeTecherFindOut/>}/>
       <Route path="/view-all-categories" element={<ViewAllCourse/>}/>
      <Route path ="/Get Start" element={<GetStart/>}/>
       <Route path="/MegaMenu" element={<MegaMenu/>}/>
       <Route path="About" element={<AboutSection/>}/>
       <Route path="/Find Out More" element={<FindOutMore/>}/>
       <Route path="/View All Courses-001" element={<FindOutMore/>}/>
       <Route path="/LanguageCourses" element={<LanguageCourses/>}/>
       <Route path ="/About eTreeks" element={<AboutSection/>}/>
       <Route path ="/Courses Catalog" element={<ViewAllCourse/>}/>
       <Route path="/Premium Learning" element={<PremiumSection/>}/>
       <Route path="/From the Blog" element={<Blog/>}/>
       <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/wordpress/:slug" element={<WordPress/>} />
      <Route path="/Teacher Profile" element={<TeacherProfile/>}/>
      <Route path="/Teachers Listing" element={<TeacherListing/>}/>
      <Route path="/About Us Page" element={<AboutSection/>}/>
       <Route path="/Categories Listing" element={<ViewAllCourse/>}/>
        <Route path="/Category Details" element={<FindOutMore/>}/>
        <Route path="/Courses Listing" element={<WordPress/>}/>
        <Route path="/Course Details" element={<Blog/>}/> 
        <Route path="/FindOutMore-1" element={<FindOutMore/>} />
        <Route path="//Start Learning" element={<GetStart/>}/>

       </Routes>




      <Footer />
    </>
  );
}

export default App;
