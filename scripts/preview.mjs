// Local preview of the static build (`out/`), served under the same base path as GitHub Pages.
// A plain `npx serve out` can't do this: the pages reference `/Portfolio/_next/...`, which it would 404,
// so the site loads with no styles or scripts.
import http from "node:http"
import { networkInterfaces } from "node:os"
import handler from "serve-handler"
import nextConfig from "../next.config.mjs"

const BASE = nextConfig.basePath ?? ""
const PORT = Number(process.env.PORT) || 4321

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost")

  // `/` and `/Portfolio` both go to the site root, like GitHub Pages
  if (BASE && (url.pathname === "/" || url.pathname === BASE)) {
    res.writeHead(301, { Location: `${BASE}/` })
    return res.end()
  }
  if (BASE && !url.pathname.startsWith(`${BASE}/`)) {
    res.writeHead(404, { "Content-Type": "text/plain" })
    return res.end(`Not found. The site lives under ${BASE}/`)
  }

  // Strip the base path so the request maps onto the files in out/
  req.url = url.pathname.slice(BASE.length) + url.search
  return handler(req, res, { public: "out" })
})

server.listen(PORT, "0.0.0.0", () => {
  const lan = Object.values(networkInterfaces())
    .flat()
    .filter((a) => a && a.family === "IPv4" && !a.internal)
    .map((a) => `  http://${a.address}:${PORT}${BASE}/`)
  console.log(`Preview of out/ at:\n  http://localhost:${PORT}${BASE}/\n${lan.join("\n")}`)
})
