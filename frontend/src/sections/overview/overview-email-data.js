import PropTypes from "prop-types";
import EnvelopeIcon from '@heroicons/react/24/solid/EnvelopeIcon';

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

export const OverviewEmailData = (props) => {
  const { sx, data } = props;
  const [text,setText]=useState("Used");
 
  const toggle=(text)=>{
    let newText=text==="Used"? "Fresh" :"Used";
    setText(newText);
  }


  return (
    <>
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
            {`email ${text} Data`}
            </Typography>
            <Typography variant="h4">
                {text === "Used" ? (data?.counts?.EMAIL ?? "N/A") : (data?.total-data?.counts?.EMAIL ?? "N/A")}
              </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
            <EnvelopeIcon />
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
            {`View ${text==="Used"?"Fresh":"Used"}`}
          </Button>
         
        </CardActions>
      </CardContent>
    </Card>
    </>
  );
};

OverviewEmailData.propTypes = {
 
  data: PropTypes.array,
  sx: PropTypes.object,
};
