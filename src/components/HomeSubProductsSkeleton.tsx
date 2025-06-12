import { Box, Skeleton, Stack } from "@mui/material";

export default function HomeSubProductsSkeleton() {
  return (
    <Box
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
     
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180} 
        sx={{ borderRadius: 2 }}
      />

      
     

      
      <Stack direction="row" paddingInline={2} paddingBottom={2} justifyContent={"space-around"} alignItems={"center"} mt={1}>
        
      <Stack direction="column" spacing={1}>
        <Skeleton variant="rectangular" width="110px" height={25} sx={{ borderRadius: 1 }} />
        <Skeleton variant="rectangular" width="50px" height={20} sx={{ borderRadius: 1 }} />
        <Stack direction="row" gap={1} mx={4}>
  {Array.from({ length: 5 }).map((_, index) => (
    <Box
      key={index}
      sx={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#bdbdbd"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </Box>
  ))}
</Stack>

      </Stack>


        <Skeleton variant="rectangular" width={56} height={20} sx={{ borderRadius: 1 }} />
      </Stack>
    </Box>
  );
}
