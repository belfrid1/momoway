/* const { getDefaultConfig } = require("expo/metro-config");
const withNativewind = require("nativewind/metro");

module.exports = withNativewind(getDefaultConfig(__dirname)); */


const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

module.exports = config;