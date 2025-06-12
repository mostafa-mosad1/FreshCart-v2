"use client"
import { Box, Stack, Typography, Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
interface IProps {
  img: string;
  title: string;
  category: string;
  price: number;
  id: number;
  ratingAverage: number;
}

function ShopCardProducts({ img, title, category, price, id ,ratingAverage }: IProps) {
  //   const navigate = useNavigate();
  //   const { addToCart, isLoading } = useContext(CartContext);
  //   const { AddToWishList, allIdList } = useContext(WishListContext);

  //   const status = allIdList.includes(id) ? 'red' : 'black';
  const status = "black";

  return (
    <Box
    key={id}
    sx={{
      boxShadow: 3,
      width: "300px",
      mx: 2,
      pb: 8,
      mb: 5,
      position: "relative",
      overflow: "hidden",
      height: "400px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: 10,
        "& .add-to-cart-btn": {
          bottom: 0,
        },
        "& .product-image": {
          transform: "scale(1.05)",
        }
      },
      transition: "all 0.5s ease",
    }}
  >
    <Box
      sx={{ cursor: "pointer", overflow: "hidden" }} 
    >
      <Box
        component="img"
        src={img}
        alt={title}
        className="product-image" 
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "fill",
          overflow:"hidden",
          transition: "transform 0.5s ease",
        }}
      />
  
  <VisibilityIcon
       onClick={()=>{console.log("show")}}
        sx={{
          color: status,
          fontSize: "2.5rem",
          position: "absolute",
          top: 10,
          right: 10,
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
            color:"green"
          },
          transition: "all 0.2s ease",
        }}
      />

      <Box px={2}>
        <Stack spacing={1} mt={1}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "600",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {category}
          </Typography>
  
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              
            }}
          >
            {title}
          </Typography>
  
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1">{price} EGP</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box
                component="span"
                sx={{
                  color: "warning.main",
                  fontSize: "1.25rem",
                }}
              >
                ★
              </Box>
              <Typography>{ratingAverage}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  
    <Box sx={{ position: "relative", mx: 2, mt: 4, textAlign: "center" }}>
      <Button
       onClick={()=>{console.log(" Add to Cart")}}
        variant="contained"
        className="add-to-cart-btn"
        sx={{
          bgcolor: "green",
          width: "65%",
          position: "relative",
          bottom: -100,
          color: "white",
          transition: "bottom 1s ease",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        Add to Cart
      </Button>
  
      <Favorite
       onClick={()=>{console.log("Favorite")}}
        sx={{
          color: status,
          fontSize: "2.5rem",
          position: "absolute",
          bottom: 0,
          right: 0,
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
          },
          transition: "all 0.2s ease",
        }}
      />
    </Box>
  </Box>
  );
}

export default ShopCardProducts;
