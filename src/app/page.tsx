
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import SubProductsHome from "@/components/SubProductsHome";
import CategoriesSlider from "@/components/CategoriesSlider";



export default function Home() {
 
  <Toaster position="top-center" reverseOrder={false} />;
  return <div className="">home
  {/* <ProductCard/> */}
  <CategoriesSlider/>
  <SubProductsHome/>
  </div>;
}
