"use client"
import Main from "@/app/Screens/home/page.jsx"
import Navbar from "./Components/navbar/page";
import SmallNav from "@/app/Components/smallNav/page"
import Footer from "@/app/Components/footer/page"
import Mainbody from"@/app/Components/mainbody/page"
import Benifits from "@/app/Components/referbenifits/page";
import Questions from"@/app/Components/Questions/page"
export default function Home() {
  return (
        <div>
          <Navbar/>
          <SmallNav/>
         <Main />
         <Mainbody/>
         <Benifits/>
         <Questions/>
         <Footer/>
        </div>
  );
}
