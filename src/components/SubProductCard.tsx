// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import photo from "../assests/photo-slider1.jpg";
// import { Box, Rating, Stack, IconButton } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// interface Iprops {
//   id: number;
//   name: string;
//   image: string[];
//   price: string;
// }

// export default function ProductCard({ id, name, image, price }: Iprops) {
//   return (
//     <Card
//       sx={{
//         width: 250,
//         position: "relative",
//         overflow: "hidden",
//         "&:hover .imageHover": {
//           bottom: 0, // الزر يرتفع عند الـ Hover
//           opacity: 0.5, // يظهر تدريجياً
//         },
//       }}
//     >
//       <Box
//         sx={{
//           height: 140,
//           background: "red",
//           position: "relative",
//           overflow: "hidden",
//         }}
//         component={"div"}
//       >
//         <CardMedia
//           sx={{ background: "green", width: "100%", height: "100%" }}
//           image={`${photo}`}
//           title="Products image"
//         />
        
// <Box
//   className="imageHover"
//   sx={{
//     position: "absolute",
//     height: "100%",
//     width: "100%",
//     bottom: "-140px",
//     transition: "all 0.9s ease",
//     zIndex: 10,
//   }}
// >
//   {/* الخلفية الشفافة في عنصر منفصل */}
//   <Box
//     sx={{
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       top: 0,
//       left: 0,
//       backgroundColor: "rgba(0, 0, 0, 0.5)", // بدل opacity استخدم rgba
//       zIndex: 10,
//     }}
//   />

//   {/* المحتوى فوق الخلفية فعليًا */}
//   <Box
//     sx={{
//       position: "relative",
//       zIndex: 20,
//       height: "100%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: 1,
//     }}
//   >
//     <IconButton
//       sx={{ color: "white", padding: "2px" }}
//       aria-label="view"
//       onClick={() => console.log("view")}
//     >
//       <VisibilityIcon sx={{ fontSize: "28px" }} />
//     </IconButton>
//     <IconButton
//       sx={{ color: "white", padding: "2px" }}
//       aria-label="favorite"
//       onClick={() => console.log("FavoriteIcon")}
//     >
//       <FavoriteIcon sx={{ fontSize: "28px" }} />
//     </IconButton>
//   </Box>
// </Box>



//       </Box>
//       <CardContent>
//         <Stack
//           direction={"row"}
//           justifyContent={"space-between"}
//           alignItems={"center"}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 display: "-webkit-box",
//                 WebkitLineClamp: 1,
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//               }}
//               gutterBottom
//               component="div"
//             >
//               {name}
//             </Typography>

//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               {price} $
//             </Typography>

//             <Rating name="disabled" value={Math.random() * 5} readOnly />
//           </Box>
//           <IconButton
//             size="small"
//             sx={{
//               "&:hover": { background: "green", color: "white" },
//               transition: "all 0.9s ease",
//               width: "50px",
//               height: "50px",
//             }}
//             aria-label="AddShoppingCartIcon"
//           >
//             <AddShoppingCartIcon />
//           </IconButton>
//         </Stack>
//       </CardContent>
//       <CardActions>



        {/* <Box
        
          className="moveButton"
          sx={{
            display:"flex",
            position: "absolute",
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
            transition: "all 0.3s ease",
            opacity: 0,
          }}
        >
          <Button   sx={{background:"green",fontSize:"10px"}} endIcon={<AddShoppingCartIcon/>} type="submit" variant="contained"> add to cart</Button>
        </Box> */}
//       </CardActions>
//     </Card>
//   );
// }




  
  import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import photo from "../assests/photo-slider1.jpg";
import { Box, Rating, Stack, IconButton, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "react-slick";

interface Iprops {
  id: number;
  name: string;
  images: string[];
  price: string;
}

export default function SubProductCard({ id, name, images, price }: Iprops) {
  let settings = {
    dots: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    infinite: true,
    speed: 500,
  };

  return (
    <Card
      sx={{
        width: 250,
        position: "relative",
        overflow: "hidden",
        "&:hover .imageHover": {
          bottom: 0,
        },
      }}
    >
      <Box
        sx={{
          height: 200,
          position: "relative",
          overflow: "hidden",
        }}
        component="div"
      >
       

        <Slider {...settings}>
                {images.map((img, i) => (
                <img key={i} style={{ width: "100%", height: "100%", objectFit: "fill"}} src={`${img}`} />
                ))}
              </Slider>

        <Box
          className="imageHover"
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            bottom: "-200px",
            transition: "all 0.9s ease",
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 20,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
           
            <IconButton
              sx={{ color: "white", padding: "2px","&:hover":{background:"gray"}}}
              aria-label="view"
              onClick={() => console.log("view")}
            >
              <VisibilityIcon sx={{ fontSize: "28px" }} />
            </IconButton>
            <IconButton
              sx={{ color: "white", padding: "2px","&:hover":{background:"gray"}}}
              aria-label="favorite"
              onClick={() => console.log("FavoriteIcon")}
            >
              <FavoriteIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              gutterBottom
              component="div"
            >
              {name}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {price} $
            </Typography>

            <Rating name="disabled" value={Math.random() * 5} readOnly />
          </Box>

          <IconButton
          onClick={()=>{
            console.log("add to cart");
          }}
            size="small"
            sx={{
              "&:hover": {  color: "green" },
              transition: "all 0.9s ease",
              width: "50px",
              height: "50px",
            }}
            aria-label="AddShoppingCartIcon"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}

  
  