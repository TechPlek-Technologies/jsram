import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { useCallback, useMemo, useState } from "react";
import { applyPagination, applyPaginationForObject } from "src/utils/apply-pagination";


const useCustomers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

export const OverviewCityCount = (props) => {
  const { cities = {}, sx } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(cities, page, rowsPerPage);
  
  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <Card sx={sx}>
      <CardHeader title="City Data" />
      <Scrollbar sx={{}}>
        <Box sx={{}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No</TableCell>
                <TableCell>CITY</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
           
              {customers.map((city, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{city?.CITY}</TableCell>
                  <TableCell>{city?.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
        component="div"
        count={cities.length}
        items={customers}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
        </Box>
      </Scrollbar>
    </Card>
  );
};

OverviewCityCount.prototype = {
  orders: PropTypes.object,
  sx: PropTypes.object,
};
