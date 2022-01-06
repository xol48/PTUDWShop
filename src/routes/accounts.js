const express = require('express');
const router = express.Router();

const accountsController = require('../app/controllers/AccountsController');

router.get('/login', accountsController.login);
router.get('/out', accountsController.out);
router.post('/login', accountsController.check);
router.get('/show', accountsController.show);
router.get('/admin-list', accountsController.adminlist);
router.get('/admin-add', accountsController.adminadd);
router.post('/admin-add', accountsController.adminstore);
router.put('/save-update/:id', accountsController.save);
module.exports = router;