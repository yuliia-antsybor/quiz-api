const express = require('express');
const router = express.Router();

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

const questions = [
  [ { question: 'How old are you?', varaints: ['a', 'b', 'c']} ],
  [ { question: 'The biggest country in Europe', varaints: ['Ukraine', 'France', 'Luxemburg']} ]
]

router.get('/quiz', (req, res) => {
  res.json({ items: QUIZ_LIST })
});

router.get('/quiz/:id', (req, res) => {
  const id = req.params.id;

  if (questions[id]) {
    res.json({ items: questions[id] });
  } else {
    res.status(404).send('Quiz was not found');
  }
});

module.exports = router;