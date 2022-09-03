import React from 'react'
import { Card, CardContent, Typography, CardHeader } from '@mui/material';

const ErrorCard = ({ errorMsg }) => {
    return (
        <Card sx={{ maxWidth: 445 , height:300, alignItems: 'center', justifyContent: 'center' , margin:'150px auto'}}>
            <CardHeader
                color="#FFFF"
                title="Error"
                subheader="Oppppppppp! you have a problem with"
            />
            <CardContent >
                <Typography variant="body2" color="red" fontWeight="bold" fontSize={30} 
                sx={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    {errorMsg}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ErrorCard