const express = require('express');
const router = express.Router();

router.use(express.urlencoded( {extended : true}));
router.use(express.json());


router.get('/', (req, res) => {
    res.send('test123');
})

router.post('/', (req, res) => {
    res.status(201).send(req.body);
})

module.exports = router