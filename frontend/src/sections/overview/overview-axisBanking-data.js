import PropTypes from "prop-types";
import CurrencyRupeeIcon from '@heroicons/react/24/solid/CurrencyRupeeIcon';

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import { useState } from "react";
import { filterDataByBank } from "src/utils/filter-data";
import { handleDownload } from "src/utils/download-data";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";

export const OverviewAxisBankData = (props) => {
  const { sx, data } = props;
  const [text,setText]=useState("APPROVED");

 
  const toggle=(text)=>{
    let newText=text==="APPROVED"? "DECLINE" :"APPROVED";
    setText(newText);
  }

 
  return (
    <>
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {`AXIS ${text} Data`}
            </Typography>
            <Typography variant="h4">
                {text === "APPROVED" ? (data?.counts?.["BANKS STATUS_approved"] ?? "N/A") : (data?.counts?.["BANKS STATUS_declined"] ?? "N/A")}
              </Typography>
           
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.dark",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
            <CurrencyRupeeIcon />
            </SvgIcon>
          </Avatar>
        </Stack>

        <CardActions sx={{ justifyContent: "space-between" }} style={{ "marginBottom": "-25px" }}>
        {/* <Button
            color="text.secondary"
            endIcon={
              <SvgIcon fontSize="small">
              <ArrowDownOnSquareIcon />
            </SvgIcon>
            }
            size="small"
            variant="caption"
            onClick={handleDialogOpen}
            >
            Download
          </Button> */}
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
            variant="text"
            onClick={()=>{
              toggle(text);
            }}
          >
            {`View ${text==="APPROVED"?"Declined":"Approved"}`}
          </Button>
         
        </CardActions>
      </CardContent>
    </Card>
   
    </>
  );
};

OverviewAxisBankData.propTypes = {
  sx: PropTypes.object,
};
