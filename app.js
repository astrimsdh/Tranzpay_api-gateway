require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const mediaRouter = require('./routes/media');
const transactionsRouter = require('./routes/transactions');
const refreshTokensRouter = require('./routes/refreshTokens');
const brandsRouter = require('./routes/brands');
const categoriesRouter = require('./routes/categories');
const subCategoriesRouter = require('./routes/subCategories');
const customersRouter = require('./routes/customers');
const productPrepaidRouter = require('./routes/productPrepaid');
const productPascaRouter = require('./routes/productPasca');


const verifyToken = require('./middlewares/verifyToken');
const can = require('./middlewares/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({ extended: false, limit: '100mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', verifyToken, can('admin'), productsRouter);
app.use('/media', verifyToken, mediaRouter);
app.use('/transactions', verifyToken, transactionsRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/brands', verifyToken, brandsRouter);
app.use('/categories',  verifyToken, categoriesRouter);
app.use('/sub-categories',  verifyToken, subCategoriesRouter);
app.use('/customers', verifyToken,  customersRouter);
app.use('/product-prepaid', verifyToken,  productPrepaidRouter);
app.use('/product-pasca', verifyToken,  productPascaRouter);


module.exports = app;
