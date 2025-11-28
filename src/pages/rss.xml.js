import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Afnaan Qasim',
    description: 'Welcome to my portfolio',
    site: 'https://afnaanweb.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}