import { useSearchParams } from "@remix-run/react"
import React from "react"
import { DatePicker } from "../DatePicker"
import { Input } from "../Input"
import { Select } from "../Select"

export const DynamicInputs = ({ filterConfig }) => {
  const [searchParams] = useSearchParams()

  return (
    <>
      {filterConfig.map((item) => {
        switch (item.type) {
          case "text":
            return <Input key={item.name} defaultValue={searchParams.get(item.name)} {...item} />

          case "dropdown":
            return <Select key={item.name} defaultValue={searchParams.get(item.name)} {...item} />

          case "date":
            return (
              <DatePicker key={item.name} defaultValue={searchParams.get(item.name)} {...item} />
            )

          default:
            return null
        }
      })}
    </>
  )
}
