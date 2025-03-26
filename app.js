const http = require('http');
const path = require('path');

const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const rootDir = require('./util/path');

// initialize express as requestHandler
const app = express();
// it will add support for req.body to be parsed for content of regular form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// prefix of admin route - for all routes that are hadnled internanlly
app.use('/admin', adminRoute);
app.use(shopRoute);
console.log(`rootDir is ${rootDir}`);
// adding error page and 404 status
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
});
// shortcut for server listening
app.listen(3000);
