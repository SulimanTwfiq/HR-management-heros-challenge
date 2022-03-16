import React from "react"

import MuiButton from "@mui/material/Button"
import { ExtendButtonBase, ButtonTypeMap, SxProps, Theme } from "@mui/material"

interface IButton extends ExtendButtonBase<ButtonTypeMap<{}, "button">> {
  styleCSS: SxProps<Theme>
}
export const Button: React.FC<IButton> = ({ children, styleCSS, ...props }) => {
  return (
    <MuiButton variant="contained" sx={styleCSS} {...props}>
      {children}
    </MuiButton>
  )
}
