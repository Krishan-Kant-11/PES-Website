const { Router } = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profileController.js');
const authMiddleware = require('../middlewares/auth.js');

const router = Router();

router.get('/get', authMiddleware(false), getUserProfile);
router.put('/update', authMiddleware(false), updateUserProfile);

module.exports = router;