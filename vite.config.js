import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


const env = loadEnv('', process.cwd())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'import.meta.env.URI_MONGODB': JSON.stringify(env.URI_MONGODB)
  // }
})
