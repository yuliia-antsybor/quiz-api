const express = require('express')

const router = express.Router()

const questions = require('./questions')
const categories = require('./category')

router.get('/quiz/category', (req, res) => {
  res.json(categories)
})

router.get('/quiz/:id/questions', (req, res) => {
  const { id } = req.params

  if (!questions[id]) {
    res.status(404).send()
    return
  }

  const modifiedQuestions = questions[id].map((item) => {
    return {
      question: item.question,
      options: item.options,
    }
  })

  res.json({
    category: categories[id],
    questions: modifiedQuestions,
  })
})

module.exports = router

// 1.додати ендпоінт , який буде присилати айді питання та отриману відповідь, щоб повертало тру чи фолс.
// 2.не показувати правильну відповідь
