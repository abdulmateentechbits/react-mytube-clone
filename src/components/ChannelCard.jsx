import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAction, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail?.snippet?.thumbnails?.high.url);
    return (
        <Box sx={{
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '378px', sm: '378px', md: '358px' },
            height: '326px',
            margin: 'auto',
            borderRadius: '0px',

        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column ', justifyContent: 'center', textAlign: 'center', color: 'white', marginTop: marginTop }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: "50%", height: "160px", width: "160px",
                            border:'1px solid green',
                        }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                        {
                            channelDetail?.statistics?.subscriberCount && (
                                <Typography variant="h6">
                                    {
                                        parseInt(
                                            channelDetail?.statistics?.subscriberCount
                                        ).toLocaleString()
                                    } Subscribers
                                </Typography>
                            )
                        }
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard