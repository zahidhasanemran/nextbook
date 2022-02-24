module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    customKey: "",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.externals = [
      ...config.externals,
      {
        PhoneInput: "react-phone-number-input",
      },
    ];

    return config;
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({});
