import { MetadataRoute } from 'next'
import { SEO_CONFIG } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SEO_CONFIG.name,
        short_name: "Omar EK",
        description: SEO_CONFIG.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#0F172A', // Slate-900 like existing theme
        theme_color: '#0F172A',
        icons: [
            {
                src: '/assets/logo.png', // Assuming this exists as logo.png was referenced in layout
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
