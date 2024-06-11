import { client } from "../db.js";
import { ClassCountryModel } from "../models/country.model.js";

class CountriesController {
  /**
   * Funcion encargada de obtener todos los usuarios
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */
  async get(req, res) {
    try {
      const response = await client.query(ClassCountryModel.getAllCountries);
      console.log(response);
      return res.status(200).json(response.rows);
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }
}

const ClassCountriesController = new CountriesController();

export { ClassCountriesController };
