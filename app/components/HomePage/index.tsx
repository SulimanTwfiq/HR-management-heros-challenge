import React, { useState } from "react"

import { Box, Container } from "@mui/material"

import { EmployeesFilter } from "./EmployeesFilter"
import { EmployeesTable } from "./EmployeesTable"

const HomePage = ({ employeesListData, filterConfig }) => {
  const [isFiltersShown, setIsFiltersShown] = useState(true)

  return (
    <Box sx={{ marginTop: 5, paddingX: 20 }}>
      <Box
        sx={
          isFiltersShown ? { display: "grid", gridTemplateColumns: "360px 1fr", gridGap: 15 } : {}
        }
      >
        {isFiltersShown && <EmployeesFilter filterConfig={filterConfig} />}

        <EmployeesTable
          employeesListData={employeesListData}
          setIsFiltersShown={setIsFiltersShown}
        />
      </Box>
    </Box>
  )
}

export default HomePage
