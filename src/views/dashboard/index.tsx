import { Box, Button, Grid } from "@mui/material"
import { DoughnutChart, MultiaxisLine } from "../../common/components"

export const Dashboard = () => {

    return (
        <Grid container spacing={2} sx={{ m: "2rem" }}>
            <Grid item xs={4} >
                <Box sx={{ maxHeight: "20rem", width: "100%", display: "flex", justifyContent: "center" }}>
                    <MultiaxisLine sx={{ width: "100%" }} />

                </Box>
            </Grid>
            <Grid item xs={4} >
                <Box sx={{ maxHeight: "20rem", width: "100%", display: "flex", justifyContent: "center" }}>
                    <MultiaxisLine sx={{ width: "100%" }} />

                </Box>
            </Grid>
            <Grid item xs={4} >
                <Box sx={{ maxHeight: "20rem", width: "100%", display: "flex", justifyContent: "center" }}>
                    <MultiaxisLine />

                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ maxWidth: "21rem" }}>
                    <DoughnutChart />
                </Box>
            </Grid>



        </Grid>)
}