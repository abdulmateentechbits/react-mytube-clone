import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import { Videos } from './'

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => { setVideoDetails(data.items[0]) });
        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);
    if (!videoDetails?.snippet) return 'Loading...';
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;
    return (
        <Box minHeight="90vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player'
                            controls
                        />
                        <Typography variant="h5" fontWeight="bold" p={2} color='#fff'>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between"
                            sx={{ color: '#fff' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}/`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' alignItems="center" gap={20}>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} Views
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail