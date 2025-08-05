const express = require('express');
const router = express.Router();

// GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// POST /api/echo
router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// GET /api/user/:id
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId, name: 'User #' + userId });
});

module.exports = router;
