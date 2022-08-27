import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={(e) => { }}
            sx={{
                borderRadius: 20, border: '1px solid #e3e3e3', overflow:'hidden', pl: 2, boxShadow: 'none', mr: { sm: 5}
            }}
        >
            <input className='search-bar' placeholder='Search....' value="" onChange={() => { }} />
            <IconButton type="submit" sx={{ p:'5px', color:'red'}}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar