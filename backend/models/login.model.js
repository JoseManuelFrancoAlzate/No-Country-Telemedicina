class LoginModel {
  constructor () {
    this.postLogin = 'SELECT insert_into_login($3, $2, $1)'
    this.getLoginById = 'SELECT * FROM login WHERE id = $1'
    this.getLoginByEmail = 'SELECT * FROM login WHERE email = $1'
  }
}

const ClassLoginModel = new LoginModel()

export { ClassLoginModel }
