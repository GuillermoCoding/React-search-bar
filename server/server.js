const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log('listening on port : '+PORT);
});