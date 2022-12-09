const router = require('express').Router();

const customerController = require('../controllers/customercontrollers');
router.get('/', customerController.index);
router.get('/inicio', customerController.inicio);
router.post('/save', customerController.save);
router.get('/login', customerController.login);
router.post('/auth', customerController.auth);
router.get('/contact',customerController.contact);
router.get('/locales', customerController.locales);
router.get('/pipiplaya', customerController.pipiplaya);
router.get('/blogs', customerController.blogs);
router.get('/logout', customerController.logout);
router.get('/valoraciones',customerController.valoraciones);
router.get('/foro', customerController.foro);

module.exports = router;