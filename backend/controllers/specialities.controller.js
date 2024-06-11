import { client } from '../db.js'
import { ClassSpecialityModel } from '../models/speciality.model.js'


class SpecialitiesController {
    async get (req, res) {
        try{
         const response = await client.query(ClassSpecialityModel.getAll)
         console.log(response)
           return res.status(200).json(response.rows) 
     
        }catch (err) {
         return res.status(500).json({ err: err.message })
        }
     
     }

}

const ClassSpecialitiesController = new SpecialitiesController()

export { ClassSpecialitiesController }
