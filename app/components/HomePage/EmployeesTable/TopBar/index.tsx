import { Box, Typography } from "@mui/material"
import React from "react"
import { Button, IconButton } from "~/components/shared"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"
export const TopBar = ({ setIsFiltersShown }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: 2 }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Heroes</Typography>
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => setIsFiltersShown((prev) => !prev)}>
          <TuneIcon />
        </IconButton>
      </div>
    </Box>
  )
}
