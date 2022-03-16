import { useLoaderData } from "@remix-run/react"
import { isSameDay } from "date-fns"
import * as React from "react"
import type { MetaFunction } from "remix"
import { json, LoaderFunction } from "remix"
import HomePage from "~/components/HomePage"
import employeesList from "../../database/employeesList.json"
import filterConfig from "../../database/filterConfig.json"

export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const email = url.searchParams.get("email")?.trim().toLocaleLowerCase()
  const user_phone = url.searchParams.get("user_phone")?.trim().toLocaleLowerCase()
  const user_name = url.searchParams.get("user_name")?.trim().toLocaleLowerCase()
  const company = url.searchParams.get("company")?.trim().toLocaleLowerCase()
  const date = url.searchParams.get("date")?.trim().toLocaleLowerCase()
  const country = url.searchParams.get("country")?.trim().toLocaleLowerCase()
  let filteredList = employeesList.filter((item) => {
    let isFound
    if (email) {
      isFound = item.email.toLowerCase().startsWith(email)
      if (isFound === false) return false
    }
    if (user_phone) {
      isFound = item.user_phone.toLowerCase().startsWith(user_phone)
      if (isFound === false) return false
    }
    if (user_name) {
      console.log("item.user_name", item.user_name)

      isFound = item.user_name.toLowerCase().startsWith(user_name)
      if (isFound === false) return false
    }
    if (company) {
      isFound = item.company.toLowerCase().startsWith(company)
      if (isFound === false) return false
    }
    if (date) {
      isFound = isSameDay(new Date(date), new Date(item.date))
      if (isFound === false) return false
    }
    if (country) {
      isFound = item.country.toLowerCase().startsWith(country)
      if (isFound === false) return false
    }
    return true
  })

  return json({ employeesListData: filteredList, filterConfig })
}

export default function Index() {
  const data = useLoaderData()

  return (
    <React.Fragment>
      <HomePage employeesListData={data.employeesListData} filterConfig={data.filterConfig} />
    </React.Fragment>
  )
}
