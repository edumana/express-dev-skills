import { Router } from 'express'
import * as skillsCtrl from '../controllers/dev-skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

export {
  router
}
