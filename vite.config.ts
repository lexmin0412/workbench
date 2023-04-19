import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		cors: true,
		host: 'localhost',
		port: 9420,
		open: true,
		proxy: {
			'/oss': {
				target: 'https://lexmin.oss-cn-hangzhou.aliyuncs.com/apis',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/oss/, ''),
			},
			'/oo': {
				target: 'https://api.github.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/oo/, ''),
			},
		},
	}
})
