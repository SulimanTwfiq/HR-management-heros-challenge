import { Box, Typography } from "@mui/material"
import { Form } from "@remix-run/react"
import { Button, CardContainer, DynamicInputs, Input } from "~/components/shared"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useSearchParams } from "remix"

export const EmployeesFilter = ({ filterConfig }) => {
  return (
    <CardContainer
      styleCSS={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "2px gray solid",
          paddingY: 3,
          marginBottom: 2,
        }}
      >
        FILTERS
      </Typography>
      <Form method="get" id="filter-form">
        <Box sx={{ display: "grid", gridGap: 20, alignItems: "center", paddingX: 2 }}>
          <DynamicInputs filterConfig={filterConfig} />
        </Box>
      </Form>

      <Button
        type="submit"
        form="filter-form"
        startIcon={<FilterListIcon />}
        styleCSS={{ marginY: 5, marginX: "auto" }}
      >
        Filter
      </Button>
    </CardContainer>
  )
}
