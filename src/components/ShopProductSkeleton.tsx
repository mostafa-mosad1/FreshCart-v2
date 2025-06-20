import React from 'react';
import { Skeleton, Box, Stack } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

function ShopProductSkeleton() {
  return (
    <Box
      sx={{
        width: 256,
        p: 2,
        borderRadius: 1,
        boxShadow: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 192,
          mb: 2,
          bgcolor: 'grey.300',
          borderRadius: 1,
        }}
      >
        <ImageIcon sx={{ fontSize: 40, color: 'grey.500' }} />
      </Box>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Skeleton variant="rounded" width={128} height={40} />
        <Skeleton variant="rounded" width={128} height={40} />
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Skeleton variant="rounded" width={56} height={40} />
        <Skeleton variant="rounded" width={56} height={40} />
      </Stack>
      <Stack direction="row" gap={2} my={1} justifyContent="space-between">
        <Skeleton variant="rounded" sx={{mx:"auto"}} width={160} height={40} />
        <Skeleton variant="rounded" width={56} height={40} />
      </Stack>
    </Box>
  );
}

export default ShopProductSkeleton;