class DoctorModel {
    getAllDoctors = 'SELECT * FROM doctors';
    getDoctorByEmail = 'SELECT * FROM doctors WHERE email = $1';
    getDoctorByDni = 'SELECT * FROM doctors WHERE dni = $1';
    getDoctorById = 'SELECT * FROM doctors WHERE id = $1';

  
    /**
     * Realiza una ejecución de una función creada dentro de la base de datos
     */
    postDoctor = 'SELECT insert_into_doctors($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
  
    deleteDoctorByDni = 'DELETE FROM doctors WHERE dni = $1';
    deleteDoctorByEmail = 'DELETE FROM doctors WHERE email = $1';

    updateDoctorByEmail ='UPDATE doctors  SET licence_number=$2, identification_number=$3, name=$4 ,last_name=$5 ,phone_number=$6 ,active=$7,licence_photo=$8,profile_picture=$9,birth_date=$10,biography=$11,speciality_id=$12  WHERE id = $1'


  }
  
  const ClassDoctorModel = new DoctorModel();
  
  export { ClassDoctorModel };