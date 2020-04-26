const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('User Router'));

module.exports = router;