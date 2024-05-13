import PropTypes from "prop-types";
import ChatBubbleLeftIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon';

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
import { filterDataByStatus } from "src/utils/filter-data";
import { useState } from "react";
import { handleDownload } from "src/utils/download-data";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";

export const OverviewSmsData = (props) => {
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
            {`SMS ${text} Data`}
            </Typography>
            <Typography variant="h4">
                {text === "Used" ? (data?.counts?.SMS ?? "N/A") : (data?.total-data?.counts?.SMS ?? "N/A")}
              </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
            <ChatBubbleLeftIcon />
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

OverviewSmsData.propTypes = {
  sx: PropTypes.object,
};
