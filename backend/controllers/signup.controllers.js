import bcrypt from 'bcrypt'
import { ClassLoginModel } from '../models/login.model.js'

class SignupController {
  async signup (req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y/o contraseña son requeridos' })
    }

    try {
      const isEmailValid = await ClassLoginModel.getLoginByEmail(email)
      if (isEmailValid) {
        console.error('Email already in use signupController', email)
        return res.status(400).json({ message: 'Email ya está en uso' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const dbUser = await ClassLoginModel.postLogin(email, hashedPassword)

      if (!dbUser) {
        console.error('Error al insertar el usuario signupController', email)
        return res
          .status(400)
          .json({ message: 'Error al registrar el usuario' })
      }

      return res.status(200).json({ message: 'Usuario creado con éxito!' })
    } catch (error) {
      if (error.code === '23505') {
        console.error('Email already exists signupController', email)
        return res.status(400).json({ message: 'Email ya está en uso' })
      } else {
        console.error('Error SignupController', error)
        return res.status(500).json({
          message: 'Error al procesar su solicitud, por favor intentelo nuevamente'
        })
      }
    }
  }
}

const ClassSignupController = new SignupController()

export { ClassSignupController }
