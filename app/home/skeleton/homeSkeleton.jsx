"use client";

import { Box, Skeleton, Stack, Grid, Paper } from "@mui/material";

export default function UkdriveHomeSkeleton() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Skeleton variant="rectangular" width="100%" height={400} />
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 3,
          textAlign: "center",
        }}
      >
        <Skeleton width={240} height={46} sx={{ mx: "auto" }} />
        <Skeleton width={180} height={60} sx={{ mx: "auto", mt: 1 }} />
        <Skeleton width={520} height={28} sx={{ mx: "auto", mt: 3 }} />
        <Skeleton width={420} height={28} sx={{ mx: "auto", mt: 1 }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="circular" width={42} height={42} />
          ))}
          <Skeleton width={180} height={28} />
        </Stack>

        <Skeleton
          variant="rounded"
          width={200}
          height={56}
          sx={{ mx: "auto", mt: 6 }}
        />
      </Box>

      {[1, 2].map((i) => (
        <Box key={i} sx={{ mt: 4, px: 2 }}>
          <Skeleton width={220} height={36} sx={{ mb: 2 }} />
          <Stack direction="row" spacing={2} overflow="hidden">
            {[1, 2, 3].map((c) => (
              <Skeleton key={c} variant="rounded" width={260} height={160} />
            ))}
          </Stack>
        </Box>
      ))}

      <Box sx={{ mt: 6, px: 2 }}>
        <Skeleton width={260} height={36} sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} md={4} key={i}>
              <Skeleton variant="rounded" height={220} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Skeleton width={180} height={36} sx={{ mb: 2 }} />
        <Stack spacing={2}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="rounded" height={60} />
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                }}
              >
                <Skeleton width="60%" height={32} />
                <Skeleton width="100%" height={22} sx={{ mt: 2 }} />
                <Skeleton width="90%" height={22} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Skeleton variant="rectangular" height={220} />
      </Box>
    </Box>
  );
}
