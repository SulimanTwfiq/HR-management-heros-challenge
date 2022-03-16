import IconButtonMUI from "@mui/material/IconButton"
import React from "react"

export const IconButton = ({ children, ...props }) => {
  return <IconButtonMUI {...props}>{children}</IconButtonMUI>
}
