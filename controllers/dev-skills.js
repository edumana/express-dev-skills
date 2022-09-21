import { Skill } from '../models/skills.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('dev-skills', {
      skills: skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export{
  index
}