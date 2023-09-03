import http from 'http'
import httpProxy from 'http-proxy'


const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: 'https://maps.googleapis.com', // Google Maps API endpoint
    changeOrigin: true,
  });
});

const PORT = 3000; // Choose a port that's not used by your React app
server.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
