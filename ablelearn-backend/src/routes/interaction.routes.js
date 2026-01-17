const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/interaction.controller');

router.post('/log', auth, controller.logInteraction);

module.exports = router;
