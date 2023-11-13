const express = require('express');
const router = express.Router();

const questions = require('./questions')

const QUIZ_LIST = [
  {
    id: 0,
    name: 'Nature',
    img: './mountains.jpg'
  },
  {
    id: 1,
    name: 'Geography',
    img: './earth.jpg'
  },
];

router.get('/quiz', (req, res) => {
  res.json({ items: QUIZ_LIST })
});

router.get('/quiz/:id', (req, res) => {
  const id = req.params.id; // nature

  // questions[id]

  if (questions[id]) {
    res.json({ items: questions[id] });
  } else {
    res.status(404).send('Quiz was not found');
  }
});

module.exports = router;

