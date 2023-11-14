const express = require('express');
const router = express.Router();

const questions = require('./questions');
const categories = require('./category');

router.get('/quiz/category', (req, res) => {
  res.json(categories);
});

router.get('/quiz/category/:name', (req, res) => {
  const name = req.params.name; // nature

  // questions[id]

  if (questions[name]) {
    res.json({ items: questions[name] });
  } else {
    res.status(404).send('Quiz was not found');
  }
});

module.exports = router;

//1.додати ендпоінт , який буде присилати айді питання та отриману відповідь, щоб повертало тру чи фолс.
//2.не показувати правильну відповідь