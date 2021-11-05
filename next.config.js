/** @type {import('next').NextConfig} */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["react-vant"]);
const withSass = require("@zeit/next-sass");
module.exports = withPlugins([withImages, withTM], {
  images: {
    domains: ["img.yzcdn.cn", "lanhu.oss-cn-beijing.aliyuncs.com"],
  },
});
