module.exports = {
  entry: './js/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
   modulesDirectories: ['node_modules', 'js/vendor']
 },

  devtool: "#cheap-module-source-map" 
};
