import { AppBar, Box, Container, MenuItem, Select, Toolbar } from '@mui/material'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <AppBar color='transparent' position="static" sx={{ paddingY: 1 }}>
            <Container>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ cursor: "pointer" }}>
                        <img src={logo} alt="Logo" />
                    </Box>

                    <Box>
                        <Select
                            variant="outlined"
                            defaultValue={"Taka"}
                            sx={{
                                width: 100,
                                height: 40,
                                color: "white",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                            }}
                        >
                            <MenuItem value={"Taka"}>Taka</MenuItem>
                            <MenuItem value={"Usd"}>Usd</MenuItem>
                        </Select>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
