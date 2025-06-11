"use client";
import { useGetCategoriesQuery } from "@/Redux/features/CategoriesApi";
import Slider from "react-slick";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



interface Iprops {}
function CategoriesSlider({}: Iprops) {
    const [selectedCard, setSelectedCard] = React.useState(0);
  const {isLoading,data,error}  = useGetCategoriesQuery("");

  console.log(data)

  var settings = 
    {
        dots: false,
  slidesToShow: 2, // لازم يكون 1 عشان centerMode يشتغل صح
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: "150px", // القيمة الافتراضية
  responsive: [
    {
      breakpoint: 1200, // شاشة أقل من 1200px
      settings: {
        centerPadding: "100px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 900, // شاشة أقل من 900px
      settings: {
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600, // شاشة أقل من 600px
      settings: {
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
  ], // هنا بيتحكم قد إيه من اللي قبله و بعده يظهر
      
      
  };
  
  
  return (
    <>
      <Typography variant="h4" sx={{ padding: "10px" }}>
        Browse By Category
      </Typography>

      <Slider {...settings}>
       
        {data?.data?.map((cate:any, index:number) => (
       <div  key={cate.name} >
         <Card sx={{width:"400px"}} >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%',display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <Typography variant="h5" component="div">
                {cate.name}
              </Typography>
              <img  style={{ width: "50px", height: "50px", objectFit: "fill"}} src={`${cate.image}`} />
            </CardContent>
          </CardActionArea>
        </Card>
       </div>
      ))}
      
       
      </Slider>

      <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      
    </Box>

    </>
  );
}

export default CategoriesSlider;
