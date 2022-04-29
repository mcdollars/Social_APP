module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    loader: "css-loader?url=false",
  },
};
