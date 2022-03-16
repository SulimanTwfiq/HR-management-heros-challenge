import { redirect, LoaderFunction } from "remix"

export const loader: LoaderFunction = async () => {
  return redirect("/heros")
}
