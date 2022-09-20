import { Link } from "react-router-dom"
import { Typography, Box, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channelDetail, marginTop }) => {
    if (!channelDetail?.snippet) return 'Loading...'

    console.log(channelDetail)

    return (
        <Box
        sx={{boxShadow: 'none', borderRadius: 20, display:'flex', justifyContent:'center', alignItems:'center', width: {xs: 356, md: 320}, margin:'auto', marginTop}}    
    >
        <Link to={`/yt-clone/channel/${channelDetail?.id}`}>
            <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: 180, width: 180, mb: 2, border: '1px solid #e3e3e3'}}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
    )
}




export default ChannelCard