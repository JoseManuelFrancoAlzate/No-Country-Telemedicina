import { client } from "../db.js";
import { ClassUserModel } from "../models/user.model.js";
import {
  validatePostUser,
  validatePutUser,
} from "../utils/validators/usersValidator.js";

class UsersController {
  /**
   * Funcion encargada de obtener todos los usuarios
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */
  async get(req, res) {
    const { dni } = req.query;
    console.log("Nuevo", dni);
    if (dni && typeof dni !== "string") {
      return res.status(400).json({ error: "Type of dni must be a string" });
    }

    try {
      if (dni) {
        const response = await client.query(ClassUserModel.getUsersByDni, [
          dni,
        ]);
        if (!response.rows.length) {
          return res.status(404).json({ message: "User Not Found" });
        } else {
          return res.status(200).json(response.rows[0]);
        }
      }
      const response = await client.query(ClassUserModel.getAllUsers);
      return res.status(200).json(response.rows);
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }

  // GET USER BY EMAIL
  async getUserByEmail(req, res) {
    const { email } = req.query;
    console.log("EMAIL ES", email);
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Type of email must be a string" });
    }

    try {
      const dbUser = await client.query(ClassUserModel.getUserByEmail, [email]);
      if (!dbUser.rows.length) {
        // MODIFY HANDLE ERROR
        console.error("User not Found in UsersController:", email);
        return res.status(404).json({ message: "User Not Found" });
      }

      const user = dbUser.rows[0];
      console.log("User found:", user);

      return res.status(200).json({ user });
    } catch (error) {
      console.error("Error getUserByEmail", error);
      return res.status(500).json({
        message:
          "Error al procesar su solicitud, porfavor intentelo nuevamente",
      });
    }
  }

  /**
   * Funcion encargada de guardar usuarios en la base de datos
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */
  async post(req, res) {
    const result = validatePostUser(req.body);

    if (result.error) {
      return res.status(500).json(result.error.issues);
    }

    const {
      name,
      lastName,
      email,
      identificationNumber,
      birthDate,
      profilePicture,
      genre,
      countryId,
      identificationType,
    } = result.data;

    try {
      await client.query(ClassUserModel.postUser, [
        name,
        lastName,
        email,
        identificationNumber,
        birthDate,
        profilePicture,
        genre,
        countryId,
        identificationType,
      ]);

      return res.status(200).json(result.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  /**
   * Funcion encargada de eliminar un usuario
   *
   * requiere un dni o un email proveniente de query
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */
  async delete(req, res) {
    const { dni, email } = req.query;

    try {
      if (dni && email) {
        return res
          .status(406)
          .json({ message: "Provide just an Email OR a DNI" });
      } else if (dni) {
        client.query(ClassUserModel.deleteUsersByDni, [dni]);
        return res.status(200).json({ message: "User Deleted Successfully" });
      } else if (email) {
        client.query(ClassUserModel.deleteUsersByEmail, [email]);
        return res.status(200).json({ message: "User Deleted Successfully" });
      } else {
        return res
          .status(500)
          .json({ error: "Must provide an Email or a DNI" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  /**
   * Funcion encargada de actualizar un usuario
   *
   * requiere un dni o un email proveniente de query
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */

  async put(req, res) {
    const result = validatePutUser(req.body);

    if (result.error) {
      return res.status(400).json(result.error.issues);
    }

    try {
      const {
        id,
        name,
        lastName,
        email,
        identificationNumber,
        birthDate,
        profilePicture,
        genre,
        countryId,
        identificationType,
      } = result.data;
      await client.query(ClassUserModel.updateUserByDni, [
        id,
        name,
        lastName,
        email,
        identificationNumber,
        birthDate,
        profilePicture,
        genre,
        countryId,
        identificationType,
      ]);
      return res.status(200).json({
        name,
        lastName,
        email,
        identificationNumber,
        birthDate,
        profilePicture,
        genre,
        countryId,
        identificationType,
      });
    } catch (err) {
      console.error("Error actualizando usuario:", err);
      return res.status(500).json({ message: "Error actualizando usuario" });
    }
  }
}

const ClassUsersController = new UsersController();

export { ClassUsersController };
