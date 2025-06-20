import CategoriesData from "@/components/CategoriesData";
import MainSearch from "@/components/MainSearch";


interface Iprops {}
function page({}: Iprops) {
  return (
    <>
      <div className="">loka</div>
      {/* <MainSearch totalResults={10} onSearch={()=>{}}/> */}
      <CategoriesData/>
    </>
  );
}

export default page;
