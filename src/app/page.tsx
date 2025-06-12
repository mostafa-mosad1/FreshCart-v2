
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import CategoriesSlider from "@/components/CategoriesSlider";
import Featured from "@/components/Featured";
import MainSlider from "@/components/mainSlider";
import HomeSubProducts from "@/components/HomeSubProducts";





export default function Home() {
 
  <Toaster position="top-center" reverseOrder={false} />;
  return <div className="">
  <MainSlider/>
  <CategoriesSlider/>
  <HomeSubProducts/>
  <Featured/>
  </div>;
}
