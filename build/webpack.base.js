const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const userConfig = require('./user.config');

const upperFirst = (str) => {
  if (!str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
};

const prefixLoader = {
  loader: path.resolve(__dirname, 'prefix-loader/index.js'),
  options: {
    rules: [
      {
        from: /\bvan-(?!doc)/g,
        to: `${userConfig.prefix}-`
      },
      {
        from: /([^@])\bvant\b/g,
        to: (m, first) => `${first}${userConfig.prefix}`
      },
      {
        from: /\bVant\b/g,
        to: upperFirst(userConfig.prefix)
      }
    ]
  }
};

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.less']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          prefixLoader
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          // enable sub-packages to find babel config
          options: {
            rootMode: 'upward'
          }
        }, prefixLoader]
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          'style-loader',
          prefixLoader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader', prefixLoader]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
