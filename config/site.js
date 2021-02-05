module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Prefeitura de Bom Destino', // Navigation and Site Title
  titleAlt: 'Prefeitura de Bom Destino', // Title for JSONLD
  description: 'Portal oficial da Prefeitura de Bom Destino',
  url: 'https://prefeitura-bom-destino.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://prefeitura-bom-destino.netlify.com', // url + pathPrefix
  siteLanguage: 'pt-br', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'bomdestino', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Israel Lage', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@raellage', // Twitter Username
};
