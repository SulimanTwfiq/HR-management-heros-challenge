import React, { useState } from "react"
import { Table } from "~/components/shared"
import { formatDate } from "~/utils/common"
import { CardContainer } from "../../shared/CardContainer"
import { TopBar } from "./TopBar"

export const EmployeesTable = ({ employeesListData, setIsFiltersShown }) => {
  const data = React.useMemo(() => employeesListData, [employeesListData])

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "user_name",
      },
      {
        Header: "Phone",
        accessor: "user_phone",
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }: { value: string }) => {
          return <a href={`mailto:${value}`}>{value}</a>
        },
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => {
          return <span>{formatDate(value)}</span>
        },
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Company",
        accessor: "company",
      },
    ],
    []
  )

  return (
    <CardContainer>
      <TopBar setIsFiltersShown={setIsFiltersShown} />
      {data && <Table data={data} columns={columns} />}
    </CardContainer>
  )
}
