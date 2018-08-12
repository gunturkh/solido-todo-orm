const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.get);
router.post('/', controller.create);

router.get('/:id', controller.getOneById);
router.put('/:id', controller.updateOneById);
router.delete('/:id', controller.deleteOneById);

module.exports = router;