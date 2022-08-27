import React from 'react'
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './';

const Feed = () => {
    return (
        <Stack sx={{
            flexDirection: { sm: 'column', md: 'row' }
        }}>
            <Box sx={{
                height: {
                    sx: 'auto',
                    md: '90vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 },
            }}>
                <Sidebar />

                <Typography className="copyright"
                    sx={{
                        color: 'white',
                        mt: 1.5
                    }}
                    variant="body2" >Copyright 2022 MYtube | Media </Typography>
            </Box>
            {/* End of left side bar */}
            <Box p={2} style={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    New <span style={{ color: '#F31503' }}> Videos</span>
                </Typography>
                <Videos videos={[]} />
            </Box>
        </Stack>
    )
}

export default Feed 