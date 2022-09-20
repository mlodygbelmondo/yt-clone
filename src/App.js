import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import { Feed, ChannelDetail, SearchFeed, VideoDetail, Navbar } from "./components"


const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path="/yt-clone" exact element={<Feed />} />
                <Route path="/yt-clone/video/:id" element={<VideoDetail />} />
                <Route path="/yt-clone/channel/:id" element={<ChannelDetail />} />
                <Route path="/yt-clone/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App