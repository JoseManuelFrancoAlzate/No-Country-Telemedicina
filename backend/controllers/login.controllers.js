import { client } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import { ClassUserModel } from "../models/user.model.js";
import { ClassLoginModel } from "../models/login.model.js";
import { ClassDoctorModel } from "../models/doctors.model.js";


class LoginController {

  async post(req, res) {
    const result = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // const existUser = await client.query(ClassLoginModel.getLoginByEmail,[result.email]);

    // if (existUser){
    //   return res.status(500).json({ message: 'elusuario ya existe' });
    // }

    let { password, role, email } = result;
    try {
      await client.query(ClassLoginModel.postLogin, [
        email,
        role,
        (password = hashedPassword),
      ]);
      const lastRegister= await client.query('SELECT * FROM login ORDER BY id DESC LIMIT 1')
      console.log(lastRegister.rows[0].id)
      let id=lastRegister.rows[0].id;
      let name;
      let lastName;
      let identificationNumber;
      let birthDate;
      let profilePicture;
      let genre;
      let countryId;
      let identificationType;
      let biography;
      let licenceNumber;
      let phoneNumber;
      let licencePhoto;
      let active=false;
      let speciality_id=1;

      
      
      if (role=="USER"){
        await client.query(ClassUserModel.postUser, [
          name,
          lastName,
          email=email,
          identificationNumber,
          birthDate,
          profilePicture,
          genre,
          countryId,
          identificationType,

        ])       
      } else if (role=="DOCTOR"){
        await client.query(ClassDoctorModel.postDoctor, [
          id,
          licenceNumber,
          identificationNumber,
          name,
          lastName,
          phoneNumber,
          email=email,
          active,
          licencePhoto,
          profilePicture,
          birthDate,
          biography,
          speciality_id
        ])

      }   

      return res.status(200).json(result.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await client.query(ClassLoginModel.getLoginByEmail, [email]);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Authentication failed. User not found." });
      }

      // Debugging logs
      console.log("Password:", password);
      console.log("Hashed Password:", user.rows);

      if (!password) {
        return res.status(400).json({ message: "Password is required." });
      }

      const isMatch = await bcrypt.compare(password, user.rows[0].password);
      console.log("isMatch:", isMatch);

      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Authentication failed. Wrong password." });
      }

      // Authentication successful
      const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });

      res.status(200).json({user: user.rows, token: token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
const ClassLoginController = new LoginController();

export { ClassLoginController };
