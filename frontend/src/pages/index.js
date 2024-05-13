import Head from "next/head";
import { Box, Button, CircularProgress, Container, Divider, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewData } from "src/sections/overview/overview-data";
import { OverviewCityCount } from "src/sections/overview/overview-city-data";
import { OverviewTelecallingData } from "src/sections/overview/overview-telecalling-data";
import { OverviewWhatsAppData } from "src/sections/overview/overview-whatsapp-data";
import { overallData } from "src/utils/filter-data";
import { OverviewSmsData } from "src/sections/overview/overview-sms-data";
import { OverviewEmailData } from "src/sections/overview/overview-email-data";
import { OverviewIVRData } from "src/sections/overview/overview-ivr-data";
import { OverviewAxisBankData } from "src/sections/overview/overview-axisBanking-data";
import { OverviewSBIBankData } from "src/sections/overview/overview-sbiBanking-data";
import { useEffect, useState } from "react";
import { getDashBoardInfo, getUniqueCities } from "src/api/api";

const Page = () => {
  // const {  loading } = useDataContext();
  const [cityCounts, setCityCounts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dashboardData,setDashBoardData]=useState([]);

  useEffect(() => {

    setLoading(true)
    const fetchUniqueCities = async () => {
      const fetchedData = await getUniqueCities();
      setCityCounts(fetchedData);
    };

    const dashboardInfo=async ()=>{
      
      const response=await getDashBoardInfo();
      setDashBoardData(response)

    }
    fetchUniqueCities();
    dashboardInfo();
    setLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title>Overview | Jai Shree Ram</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          {/* <VerificationButton /> */}
          {loading ?dashboardData&& (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh', // Set to 100% of the viewport height
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewTelecallingData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewWhatsAppData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewSmsData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Divider />
              <Grid xs={12} sm={6} lg={3}>
                <OverviewEmailData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewIVRData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewAxisBankData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <OverviewSBIBankData sx={{ height: "100%" }} data={dashboardData} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
               {cityCounts&&<OverviewCityCount cities={cityCounts} sx={{ height: "100%" }} />} 
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
