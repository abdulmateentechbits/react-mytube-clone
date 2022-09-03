import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((response) => setChannelDetail(response?.items[0]))
            .catch((err) => console.log("Channel Error: ", err.message));
        // search videos
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((response) => setVideos(response?.items))
            .catch((err) => console.log("Search Error: ", err.message));
    }, [channelDetail, id])
    return (
        <Box minHeight='90vh'>
            <div style={{
                background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                zIndex: 999,
                height: '300px'
            }}/>
                <ChannelCard channelDetail={channelDetail} marginTop='-290px' />
                <Box display="flex" p="2px">
                    <Box sx={{
                        mr: { sm: '100px' }
                    }}>
                        <Videos videos={videos} />
                    </Box>
                </Box>
        </Box >
    )
}

export default ChannelDetail