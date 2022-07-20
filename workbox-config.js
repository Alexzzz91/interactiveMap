// workbox-config.js
module.exports = {
    globDirectory: "dist",
    globPatterns: [
      "**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest}"
    ],
    swDest: "dist/service-worker.js",
    maximumFileSizeToCacheInBytes: 7000000,
    clientsClaim: true,
    skipWaiting: true
  };