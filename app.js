const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceElement = require('./modules/replaceElement');


const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const {
        query,
        pathname
    } = url.parse(req.url, true);


    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        const cardHtml = dataObj.map(el => replaceElement(tempCard, el)).join('');
        const output = tempOverview.replace(/{%PRODUCT_CARD%}/g, cardHtml);
        res.end(output);
    } else if (pathname === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        const product = dataObj[query.id];
        const output = replaceElement(tempProduct, product);
        res.end(output);
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
    } else {
        res.writeHead(404, {

        });
        res.end('<h1>not found</h1>');
    }
});
server.listen(4002, () => {
    console.log('server started at port 4002');
})