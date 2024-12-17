import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['monaco-editor', 'monaco-sql-languages'],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		loader: 'jsx',
		include: /\.tsx?$/, // to include .tsx files for swc
	},
	build: {
		rollupOptions: {
			external: ['monaco-editor'], // Externalize Monaco to prevent bundling issues
		},
	},
});
