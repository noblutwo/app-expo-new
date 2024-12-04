const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Thêm cấu hình cho aliases
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@app': path.resolve(__dirname, 'src/app'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@hooks': path.resolve(__dirname, 'src/hooks'),
  '@utils': path.resolve(__dirname, 'src/utils'),
  '@assets': path.resolve(__dirname, 'src/assets')
};

module.exports = config;