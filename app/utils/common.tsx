import { format } from "date-fns"

export function getObjectByPath(o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1") // convert indexes to properties
  s = s.replace(/^\./, "") // strip a leading dot
  var a = s.split(".")
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i]
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}

export function formatDate(date) {
  const result = format(new Date(date), "LLLL d, yyyy")
  return result
}
