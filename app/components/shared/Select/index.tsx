import React, { useEffect } from "react"

import { FormControl, InputLabel, MenuItem, Select as SelectMUI } from "@mui/material"
import { useFetcher } from "@remix-run/react"
import { getObjectByPath } from "~/utils/common"
import LoadingButton from "@mui/lab/LoadingButton"

export const Select = ({ handleChange, value, label, name, children, API, ...props }: any) => {
  const fetcher = useFetcher()
  const isLoading = fetcher.state === "loading"

  useEffect(() => {
    if (API && fetcher.type === "init") {
      fetcher.load(API)
    }
  }, [fetcher])

  const showDataFromAPI = () => {
    const pathStringToArray = props.shownLabelPropertyPath.split(".")
    const labelToShow = pathStringToArray.pop()
    return {
      dataBasedOnStringPath: getObjectByPath(fetcher.data, pathStringToArray.join(".")),
      labelToShow,
    }
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <SelectMUI
        labelId={label}
        id={label}
        defaultValue={value}
        label={label}
        onChange={handleChange}
        variant="standard"
        name={name}
        multiple={Boolean(props?.multiple)}
        {...props}
      >
        {isLoading && <LoadingButton />}
        {API &&
          fetcher.data &&
          showDataFromAPI().dataBasedOnStringPath.map((item) => {
            const label = item[showDataFromAPI().labelToShow]
            return (
              <Select.MenuItem key={label} value={label} {...item}>
                {label}
              </Select.MenuItem>
            )
          })}
        {children}
      </SelectMUI>
    </FormControl>
  )
}

Select.MenuItem = ({ children, value, ...props }) => {
  return (
    <MenuItem {...props} value={value}>
      {children}
    </MenuItem>
  )
}
