import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For a user site hosted at https://<username>.github.io/, use root base '/'
  // If this were a project site (github.io/<repo>), set base to '/<repo>/'
  base: '/',
  plugins: [react()],
})
