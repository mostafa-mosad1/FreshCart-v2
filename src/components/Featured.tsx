import Image from "next/image";
import Featured1 from "../assests/Featured1.png";
import Featured2 from "../assests/Featured2.png";
import Featured3 from "../assests/Featured3.png";
import Featured4 from "../assests/Featured4.png";
import services1 from "../assests/Services1.png";
import services2 from "../assests/Services2.png";
import services3 from "../assests/Services3.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CardActionArea from "@mui/material/CardActionArea";

interface Iprops {}
function Featured({}: Iprops) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          padding: "10px",
          borderLeft: "12px solid green",
          paddingLeft: "30px",
          margin: "20px",
        }}
      >
        Featured
      </Typography>
      <Typography variant="h4" sx={{ padding: "10px" }}>
        New Arrival
      </Typography>
      <Stack
        gap={2}
        marginBlock={{xl:6}}
        sx={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          justifyContent: "center",
          
        }}
        direction={"row"}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Image
            style={{ width: "100%", height: "80vh", overflow: "hidden" }}
            src={Featured1}
            alt="Featured1"
          />
        </Box>
        <Stack
          gap={2}
          sx={{
            width: "50%",
            height: "80",
            overflow: "hidden",
            display: { xs: "none", md: "block" },
          }}
          direction={"column"}
        >
          <Image
            style={{ width: "100%", height: "40vh", overflow: "hidden" }}
            src={Featured2}
            alt="Featured1"
          />
          <Stack
            gap={2}
            sx={{ width: "100%", height: "40vh", overflow: "hidden" }}
            direction={"row"}
          >
            <Image
              style={{
                width: "50%",
                height: "40vh",
                overflow: "hidden",
                objectFit: "fill",
              }}
              src={Featured3}
              alt="Featured3"
            />
            <Image
              style={{
                width: "50%",
                height: "40vh",
                overflow: "hidden",
                objectFit: "fill",
              }}
              src={Featured4}
              alt="Featured4"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={"center"}
        gap={2}
        sx={{
          width: "100%",
          overflow: "hidden",
          marginBlock: {xs:"30px",md:"50px"},
          flexWrap: "wrap",
        }}
        direction={"row"}
      >
        <Card sx={{ maxWidth: 345,height:"220px", textAlign: "center" }}>
          <CardActionArea>
            <Image
              style={{ overflow: "hidden", objectFit: "fill",paddingTop:"15px" }}
              src={services1}
              alt="services1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FREE AND FAST DELIVERY
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                free delivery for all orders over 140$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345,height:"220px", textAlign: "center" }}>
          <CardActionArea>
            <Image
              style={{ overflow: "hidden", objectFit: "fill",paddingTop:"15px" }}
              src={services2}
              alt="services2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                24/7 CUSTOMER SERVICES
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                friendly 24/7 customer support
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345,height:"220px", textAlign: "center" }}>
          <CardActionArea>
            <Image
              style={{ overflow: "hidden", objectFit: "fill",paddingTop:"15px" }}
              src={services3}
              alt="services3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MONEY BACK GUARANTEE
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                we reurn money within 30 days
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
}

export default Featured;
