const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add Babel loader for specific node_modules
      webpackConfig.module.rules.push({
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-modal-component-eli/src')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      });

      return webpackConfig;
    },
  },
};
