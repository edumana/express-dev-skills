import { Skill } from '../models/skills.js'

function index(req, res) {
  Skill.find({})
  .then(skill => {
    res.render('dev-skills', {
      skill: skill,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('dev-skills/new')
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/dev-skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/dev-skills')
  })
}

function deleteSkill(req,res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/dev-skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/dev-skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('dev-skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/dev-skills')
  })
}

function update(req, res){
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    res.redirect(`/dev-skills/${todo._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/dev-skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('dev-skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/dev-skills')
  })
}

export{
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update,
}