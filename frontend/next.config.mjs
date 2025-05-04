/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
        },
      ],
    },
  };
  
  export default nextConfig;
  



// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;






// import path from "path";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@components": path.resolve(__dirname, "src/components"),
//       "@lib": path.resolve(__dirname, "src/lib"),
//       "@app": path.resolve(__dirname, "src/app"),
//     };
//     return config;
//   },
// };

// export default nextConfig;
