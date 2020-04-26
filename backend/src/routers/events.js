const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Event Router'));

module.exports = router;