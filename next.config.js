const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: ['images.unsplash.com', 'postrai-storage.fra1.digitaloceanspaces.com'],
	},
	async rewrites() {
		return [
			{
				source: '/dashboard',
				destination: '/dashboard/index',
			},
		]
	}
}

module.exports = nextConfig
