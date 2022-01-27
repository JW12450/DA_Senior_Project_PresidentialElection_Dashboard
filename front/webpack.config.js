module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
      plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          filename: "Pye1.html", //Name of file in ./dist/
          template: "Pye1.html", //Name of template in ./src
          hash: true
                })
      ]
    },
  };