/** @type {import('next').NextConfig} */
const nextConfig = {

	images: {
		remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            }
        ]
	},
	env: {
		// Ajoutez une clé d'environnement
		NEXT_PUBLIC_MOVIE_API_KEY: process.env.MOVIE_API_KEY,
	},	
	async redirects() {
		return [
		  {
			source: '/home',
			destination: '/',
			permanent: true,
		  },
		]
	  },
	webpack(config, options) {
	  // Ajoutez la règle pour les fichiers SVG


	  config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	  });
  
	  // Ajoutez "canvas" aux externals
	  config.externals.push('canvas');
  
	  return config;
	},

  };
  
  module.exports = nextConfig;
  