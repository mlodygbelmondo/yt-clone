import { Stack, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
    <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
      <Box display='flex' alignItems='center'>
        <Link to="/yt-clone" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Typography variant='h4' color='white' ml={1}>
          YTClone
        </Typography>
      </Box>

      <SearchBar />
    </Stack>
  )


export default Navbar