// class UserModel {
//   getAllUsers = 'SELECT * FROM users'
//   getUsersByDni = 'SELECT * FROM vw_users_info WHERE identification_number = $1'
//   getUserByEmail = 'SELECT * FROM vw_users_info WHERE email = $1'

//   /**
//    * Realiza una ejecucion de una funcion creada dentro de la base de datos
//    */
//   postUser = 'SELECT insert_into_users($1, $2, $3, $4, $5, $6, $7, $8, $9)'
//   deleteUsersByDni = 'DELETE FROM users WHERE identification_number = $1'
//   deleteUsersByEmail = 'DELETE FROM users WHERE email = $1'
//   updateUserByDni ="UPDATE users SET name=$2, last_name=$3, email=$4 ,identification_number=$5 ,birth_date=$6 ,profile_picture=$7,genre=$8,country_id=$9,identification_type=$10 WHERE id = $1 "
// }

class UserModel {
  constructor () {
    this.getAllUsers = 'SELECT * FROM users'
    this.getUsersByDni = 'SELECT * FROM users WHERE identification_number = $1'
    this.getUserByEmail = 'SELECT * FROM users WHERE email = $1'
    this.getUserById = 'SELECT * FROM users WHERE id = $1'

    this.postUser = 'SELECT insert_into_users($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    this.deleteUsersByDni = 'DELETE FROM users WHERE identification_number = $1'
    this.deleteUsersByEmail = 'DELETE FROM users WHERE email = $1'
    this.updateUserByDni = 'UPDATE users SET name=$2, last_name=$3, email=$4 ,identification_number=$5 ,birth_date=$6 ,profile_picture=$7,genre=$8,country_id=$9,identification_type=$10 WHERE id = $1 '
  }
}
const ClassUserModel = new UserModel()

export { ClassUserModel }
