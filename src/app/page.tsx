
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import SubProductsHome from "@/components/SubProductsHome";
import CategoriesSlider from "@/components/CategoriesSlider";
import Featured from "@/components/Featured";
import MainSlider from "@/components/mainSlider";





export default function Home() {
 
  <Toaster position="top-center" reverseOrder={false} />;
  return <div className="">home
  <MainSlider/>
  {/* <ProductCard/> */}
  <CategoriesSlider/>
  <SubProductsHome/>
  <Featured/>
  </div>;
}
