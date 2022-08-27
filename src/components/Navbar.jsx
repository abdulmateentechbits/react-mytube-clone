import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack direction="row" className='headerStack' alignItems="center" p={2} sx={{ position: 'sticky', top: 0, justifyContent: 'space-between', zIndex:999 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} className="my-tube-logo" alt="Logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar