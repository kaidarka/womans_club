import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://club-womens.ru',
			lastModified: new Date(),
		},
		{
			url: 'https://club-womens.ru/services',
			lastModified: new Date(),
		},
		{
			url: 'https://club-womens.ru/contacts',
			lastModified: new Date(),
		},
	]
}
