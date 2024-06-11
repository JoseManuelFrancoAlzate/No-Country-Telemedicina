class DoctorModel {
    getAllDoctors = 'SELECT * FROM doctors';
    getDoctorByEmail = 'SELECT * FROM doctors WHERE email = $1';
    getDoctorByDni = 'SELECT * FROM doctors WHERE dni = $1';
  
    /**
     * Realiza una ejecución de una función creada dentro de la base de datos
     */
    postDoctor = 'SELECT insert_into_doctors($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  
    deleteDoctorByDni = 'DELETE FROM doctors WHERE dni = $1';
    deleteDoctorByEmail = 'DELETE FROM doctors WHERE email = $1';
  }
  
  const ClassDoctorModel = new DoctorModel();
  
  export { ClassDoctorModel };