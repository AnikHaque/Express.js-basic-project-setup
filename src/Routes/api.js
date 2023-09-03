// api.js
const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// Create APIs for blogController
router.get('/blogs/create', blogController.create);
router.get('/blogs/read', blogController.read);
router.get('/blogs/delete', blogController.delete);
router.get('/blogs/update', blogController.update);

// Create APIs for blogDetailsController
router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/delete', blogDetailsController.delete);
router.get('/blogDetails/update', blogDetailsController.update);

// Repeat the above pattern for all 10 controller files and their functions

// Create APIs for commentController
router.get('/comments/create', commentController.create);
router.get('/comments/read', commentController.read);
router.get('/comments/delete', commentController.delete);
router.get('/comments/update', commentController.update);

// Create APIs for messageController
router.get('/messages/create', messageController.create);
router.get('/messages/read', messageController.read);
router.get('/messages/delete', messageController.delete);
router.get('/messages/update', messageController.update);

// Create APIs for portfolioController
router.get('/portfolios/create', portfolioController.create);
router.get('/portfolios/read', portfolioController.read);
router.get('/portfolios/delete', portfolioController.delete);
router.get('/portfolios/update', portfolioController.update);

// Create APIs for productController
router.get('/products/create', productController.create);
router.get('/products/read', productController.read);
router.get('/products/delete', productController.delete);
router.get('/products/update', productController.update);

// Create APIs for profitController
router.get('/profits/create', profitController.create);
router.get('/profits/read', profitController.read);
router.get('/profits/delete', profitController.delete);
router.get('/profits/update', profitController.update);

// Create APIs for projectController
router.get('/projects/create', projectController.create);
router.get('/projects/read', projectController.read);
router.get('/projects/delete', projectController.delete);
router.get('/projects/update', projectController.update);

// Create APIs for serviceController
router.get('/services/create', serviceController.create);
router.get('/services/read', serviceController.read);
router.get('/services/delete', serviceController.delete);
router.get('/services/update', serviceController.update);

// Create APIs for titleController
router.get('/titles/create', titleController.create);
router.get('/titles/read', titleController.read);
router.get('/titles/delete', titleController.delete);
router.get('/titles/update', titleController.update);

module.exports = router;
