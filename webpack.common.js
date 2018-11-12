var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
            extensions: ['.js', '.ts', '.jsx']
          },  
    entry: {
        app: ['../src/index.ts','../src/react_exercise.jsx'],
                appStyles: [
          './misEstilos.scss',
        ],
        vendor: [
          'jquery',
          'react',
          'react-dom',
        ],
        
     },
  output: {
    
    filename: '[name].[chunkhash].js',
},
 optimization: {
  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: 'initial',
        name: 'vendor',
        test: 'vendor',
        enforce: true
      },
    }
  },
 },
  module: {
    rules: [
        {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'awesome-typescript-loader',
                    options: {
                      useBabel: true,
                      "babelCore": "@babel/core", // needed for Babel v7
                    },
                  },
      
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ]
              },
      {
               test: /\.css$/,
               exclude: /node_modules/,
               use: [
                          MiniCssExtractPlugin.loader, 
                         "css-loader"
                      ]
             },   
             {
                       test: /\.(png|jpg)$/,
                       exclude: /node_modules/,
                        use: {
                                loader: 'url-loader',
                                options: {
                                limit:5000,
                                name: './img/[hash].[name].[ext]'
                           }, 
                        },
                    },  
                     {
                              test: /\.html$/,
                              loader: 'html-loader',
                             },          
    ],
  },
  plugins: [
       new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
      new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: 'index.html', 
      hash:true,
    }),
    new webpack.ProvidePlugin({
             $: "jquery",
             jQuery: "jquery"
           }),    
           
           new MiniCssExtractPlugin({
                 filename: "[name].css",
                 chunkFilename: "[id].css"
               }),
  ],
};