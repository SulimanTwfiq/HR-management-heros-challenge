import React from "react"
import DatePickerMUI from "@mui/lab/DatePicker"
import { TextField } from "@mui/material"

export const DatePicker = ({ label, name, ...props }) => {
  const [value, setValue] = React.useState(null)

  return (
    <DatePickerMUI
      label={label}
      value={value}
      onChange={(newValue) => {
        console.log("newValue", newValue)

        setValue(newValue)
      }}
      renderInput={(params) => <TextField variant="standard" name={name} {...params} fullWidth />}
      {...props}
    />
  )
}
