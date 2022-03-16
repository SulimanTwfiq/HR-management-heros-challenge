import { Box, SxProps, Theme } from "@mui/material"
import React from "react"

interface ICardContainer {
  styleCSS?: SxProps<Theme>
}
export const CardContainer: React.FC<ICardContainer> = ({ children, styleCSS }) => {
  return <Box sx={{ backgroundColor: "white", ...styleCSS }}>{children}</Box>
}
