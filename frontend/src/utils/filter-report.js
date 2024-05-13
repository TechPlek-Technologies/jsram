import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import MultipleSelectCheckmarks from "./select-checkbox";
import { DatePicker } from "@mui/x-date-pickers";
import { DownloadfilterData } from "src/api/api";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const FilterPop = ({downloadButton,resetFilters,handleFilterOptionClick,personName,setPersonName,filterValues,cities,setFilterValues,isFilterOpen, setFilterOpen, handleFilterClose }) => {
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
     
      [name]: value,
    }));

  };


  const handleDateChange = (label, date) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [`${label}FromDate`]: date,
    }));
  };

  const handleToDateChange = (label, date) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [`${label}ToDate`]: date,
    }));
  };

  const downloadExcel = async () => {
    try {
      const response = await DownloadfilterData(filterValues); // Assuming DownloadfilterData is a function that makes the API call to fetch data from the backend
      const data = response.data; // Assuming the data is received as an array of objects
  
      // Filter out unwanted fields
      const filteredData = data.map(item => {
        const { __v, createdAt, updatedAt, _id, ...rest } = item;
        return rest;
      });
  
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(filteredData);
  
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
      saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'data.csv');
    } catch (error) {
      console.error("Error downloading Excel:", error);
    }
  };
  return (
    <Dialog fullWidth maxWidth="md" open={isFilterOpen} onClose={handleFilterClose}>
    <DialogTitle>Filter Options</DialogTitle>
    <DialogContent style={{ scale: "0.9" }}>
      
      <Stack direction="row" spacing={4}>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel style={{ fontSize: "12px" }}> City</InputLabel>
          <MultipleSelectCheckmarks
            label="Select City"
            setPersonName={setPersonName}
            personName={personName}
            setFilterValues={setFilterValues}
            names={cities}
          />
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Employment status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="EMPLOYMENT TYPE" // Update to match the state key
            value={filterValues["EMPLOYMENT TYPE"]} // Update to match the state key
            label="Employment status"
            onChange={handleChange}
          >
            {" "}
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Salaried"}>Salaried</MenuItem>
            <MenuItem value={"Self Employed Business"}>Self Employed Business</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
      </Stack>
  
      <InputLabel style={{ marginTop: "15px" }}> Select Via Status</InputLabel>
      <Stack direction="row" spacing={4}>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Whatsapp Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="WHATS APP" // Update to match the state key
            value={filterValues["WHATS APP"]} // Update to match the state key
            label="Whatsapp Status"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Fresh"}>Fresh</MenuItem>
            <MenuItem value={"Used"}>Used</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="From"
            value={filterValues.whatsappFromDate}
            onChange={(date) => handleDateChange("whatsapp", date)}
          />
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="To"
            value={filterValues.whatsappToDate}
            onChange={(date) => handleToDateChange("whatsapp", date)}
          />
        </Grid>
      </Stack>
      <Stack style={{ marginTop: "15px" }} direction="row" spacing={4}>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> SMS Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="SMS" // Update to match the state key
            value={filterValues.SMS} // Update to match the state key
            label="SMS Status"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Fresh"}>Fresh</MenuItem>
            <MenuItem value={"Used"}>Used</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="From"
            value={filterValues.DATE_4}
            onChange={(date) => handleDateChange("sms", date)}
          />
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="To"
            value={filterValues.smsToDate}
            onChange={(date) => handleToDateChange("sms", date)}
          />
        </Grid>
      </Stack>
      <Stack style={{ marginTop: "15px" }} direction="row" spacing={4}>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Calling Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="CALLING" // Update to match the state key
            value={filterValues.CALLING} // Update to match the state key
            label="Calling Status"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Fresh"}>Fresh</MenuItem>
            <MenuItem value={"Used"}>Used</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="From"
            value={filterValues.CALLING}
            onChange={(date) => handleDateChange("calling", date)}
          />
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Date</InputLabel>
          <DatePicker
            label="To"
            value={filterValues.DATE_5}
            onChange={(date) => handleToDateChange("calling", date)}
          />
        </Grid>
      </Stack>
  
      <InputLabel style={{ marginTop: "15px" }}> Select Via Bank Status</InputLabel>
      <Stack direction="row" spacing={4}>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> Axis Bank Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="BANKS STATUS_1" // Update to match the state key
            value={filterValues["BANKS STATUS_1"]} // Update to match the state key
            label="Axis Bank Status"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"APPROVED"}>Approved</MenuItem>
            <MenuItem value={"DECLINED"}>Declined</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10} md={2} display={"flex"} alignItems={"center"} gap={"10px"}>
          <InputLabel> SBI Bank Status</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="BANKS STATUS" // Update to match the state key
            value={filterValues["BANKS STATUS"]} // Update to match the state key
            label="SBI Bank Status"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"APPROVED"}>Approved</MenuItem>
            <MenuItem value={"DECLINED"}>Declined</MenuItem>
            <MenuItem value={"No Status"}>No Status</MenuItem>
          </Select>
        </Grid>
       
      </Stack>
      
    </DialogContent>
  
    <DialogActions>
      <Button
        onClick={() => {
          resetFilters();
        }}
        color="primary"
      >
        Reset
      </Button>
      <Button
        onClick={() => {
          setFilterOpen(false);
        }}
        color="primary"
      >
        Cancel
      </Button>
      {!downloadButton && <Button onClick={handleFilterOptionClick} color="primary">
        Save
      </Button>}
      {downloadButton && <Button onClick={downloadExcel} color="primary">
        Download
      </Button>}
    </DialogActions>
  </Dialog>
  
  );
};

export default FilterPop;
