const { Router } = require('express');
const { getAttendance, markAttendance } = require('../controllers/attendanceController.js');
const authMiddleware = require('../middlewares/auth.js');

const router = Router();

router.post('/getAtt', authMiddleware(true), getAttendance);
router.post('/markAtt', authMiddleware(false), markAttendance);

module.exports = router;