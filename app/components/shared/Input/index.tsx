import React from "react"

import { TextField, TextFieldProps } from "@mui/material"

type InputProps =
  | {
      id: string
      label: string
      name: string
      defaultValue: string
    }
  | TextFieldProps

export const Input: React.FC<InputProps> = ({ variant = "standard", defaultValue, ...props }) => {
  return <TextField variant={variant} defaultValue={defaultValue} fullWidth {...props} />
}
