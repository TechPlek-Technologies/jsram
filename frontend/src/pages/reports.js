import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDataContext } from "src/contexts/data-context";
import { handleDownload } from "src/utils/download-data";
import FilterPop from "src/utils/filter-report";
import axios from "axios";
import { domain } from "src/config";
import {
  getPaginatedResult,
  getPaginatedfilterData,
  getUniqueCities,
  searchAndPaginate,
} from "src/api/api";

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [personName, setPersonName] = useState([]);
  const [uniqueCity, setUniqueCity] = useState(null);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [data, setData] = useState(null);
  const [downloadButton, setDownloadButton]=useState(false);
  const [filterValues, setFilterValues] = useState({
    CITY: [], // Update from 'city' to 'CITY'
    "WHATS APP": "All", // Update from 'whatsappStatus' to 'WHATS APP'
    "EMPLOYMENT TYPE": "All", // Update from 'employeeStatus' to 'EMPLOYMENT TYPE'
    DATE: null, // Update from 'whatsappFromDate' to 'DATE'
    DATE_3: null, // Update from 'whatsappToDate' to 'DATE_3'
    SMS: "All", // Update from 'smsStatus' to 'SMS'
    DATE_4: null, // Update from 'smsFromDate' to 'DATE_4'
    CALLING: "All", // Update from 'callingStatus' to 'CALLING'
    CALLING: null, // Update from 'callingFromDate' to 'CALLING'
    DATE_5: null, // Update from 'callingToDate' to 'DATE_5'
    "LOGIN DONE": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
    "BANKS STATUS_1": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
    "BANKS STATUS": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
    "LOGIN BANK": "All", // Update from 'sbiBankStatus' to 'LOGIN BANK'
  });
  
  const [loading, setLoading] = useState(true);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleFilterOptionClick = async () => {
    // Use filterValues state to filter your main data
    setFilterOpen(false);
  };
  const handleFilterClick = () => {
    setPage(0);
    setRowsPerPage(5)
    setFilterOpen(true);
  };

  const timeoutIdRef = useRef(null);

  const handleSearchChange = async (event) => {
    setSearchTerm(event.target.value);

    // Clear any existing timeout
    clearTimeout(timeoutIdRef.current);

    // Set a new timeout
    timeoutIdRef.current = setTimeout(async () => {
      setPage(0);
      setRowsPerPage(5);
      await searchData(event.target.value);
    }, 2000);
  };

  const searchData = async (query) => {
    try {
      setLoading(true);
      const response = await searchAndPaginate(page, rowsPerPage, query);
      console.log(response.articles);
      setData(response.articles.data);
      setCount(response.articles.metadata.totalCount);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fetchUniqueCities = async () => {
    const array = [];
    const fetchedData = await getUniqueCities();

    fetchedData.forEach((element) => {
      array.push(element["CITY"]);
      setUniqueCity(array);
    });
  };


  const handleDownload=async ()=>{
    await fetchUniqueCities()
    resetFilters();
    setDownloadButton(true);
    setFilterOpen(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response;
      if (Object.keys(filterValues).length === 0) {
        // Fetch normal paginated data
        response = await getPaginatedResult(page + 1, rowsPerPage);


        const response = await getPaginatedResult(page + 1, rowsPerPage);
        setCount(response.articles.metadata.totalCount);
        setData(response.articles.data);



      } else {
        // Fetch filtered paginated data
        response = await getPaginatedfilterData(page + 1, rowsPerPage, filterValues);
        setCount(response.total);
        setData(response.data);
      }
   
      setLoading(false);
    };
  
    fetchData();
  }, [page, rowsPerPage, filterValues]);
  
  const resetFilters = () => {

    setPersonName([]);
    setFilterValues({
      CITY: [], // Update from 'city' to 'CITY'
      "WHATS APP": "All", // Update from 'whatsappStatus' to 'WHATS APP'
      "EMPLOYMENT TYPE": "All", // Update from 'employeeStatus' to 'EMPLOYMENT TYPE'
      DATE: null, // Update from 'whatsappFromDate' to 'DATE'
      DATE_3: null, // Update from 'whatsappToDate' to 'DATE_3'
      SMS: "All", // Update from 'smsStatus' to 'SMS'
      DATE_4: null, // Update from 'smsFromDate' to 'DATE_4'
      CALLING: "All", // Update from 'callingStatus' to 'CALLING'
      CALLING: null, // Update from 'callingFromDate' to 'CALLING'
      DATE_5: null, // Update from 'callingToDate' to 'DATE_5'
      "LOGIN DONE": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
      "LOGIN BANK": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
      "BANKS STATUS_1": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
      "BANKS STATUS": "All", // Update from 'axisBankStatus' to 'LOGIN DONE'
    });
  };
  return (
    <>
      <Head>
        <title>Customers | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Typography variant="h4">Data Reports</Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <CustomersSearch
                  searchTerm={searchTerm}
                  handleSearchChange={handleSearchChange}
                  setData={setData}
                />
                <Button onClick={async()=>{
                  setDownloadButton(false)
                  handleFilterClick();
                  await fetchUniqueCities()
                }}>Filter</Button>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Button
                color="danger"
                disabled={!data}
                onClick={() => {
                  handleDownload();
                }}
              >
                Download
              </Button>
            </Stack>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <CustomersTable
                count={count}
                items={data}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                loading={loading}
              />
            )}
          </Stack>
        </Container>
      </Box>
      <FilterPop
        personName={personName}
        setPersonName={setPersonName}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        cities={uniqueCity}
        isFilterOpen={isFilterOpen}
        setFilterOpen={setFilterOpen}
        handleFilterClose={handleFilterClose}
        handleFilterOptionClick={handleFilterOptionClick}
        resetFilters={resetFilters}
        downloadButton={downloadButton}
      />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
