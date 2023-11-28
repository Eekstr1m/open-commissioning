/** @type {import('next').NextConfig} */
const nextConfig = {
  // future: {
  //   webpack5: true,
  // },
  // webpack: (config) => {
  //   // load worker files as a urls with `file-loader`
  //   config.module.rules.unshift({
  //     test: /pdf\.worker\.(min\.)?js/,
  //     use: [
  //       {
  //         loader: "file-loader",
  //         options: {
  //           name: "[contenthash].[ext]",
  //           publicPath: "_next/static/worker",
  //           outputPath: "static/worker",
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
