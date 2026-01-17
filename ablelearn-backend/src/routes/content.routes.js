const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const contentController = require('../controllers/content.controller');


router.post('/', auth, contentController.createContent);


router.post('/:id/approve', auth, contentController.approveContent);


router.get('/approved', auth, contentController.getApprovedContent);

module.exports = router;
