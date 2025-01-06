import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsConfgPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsConfgPaths()]
})