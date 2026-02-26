// Dynamic proxy configuration.
// ASP.NET Core SpaProxy sets ASPNETCORE_HTTPS_PORT when it launches npm start,
// so this works correctly whether running from IIS Express or Kestrel.
const httpsPort = process.env['ASPNETCORE_HTTPS_PORT'] || 7141;

module.exports = {
  '/api': {
    target: `https://ecommerce001-production.up.railway.app`,
    secure: false,
    changeOrigin: true
  }
};
