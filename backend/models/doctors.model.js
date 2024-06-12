class DoctorModel {
    getAllDoctors = 'SELECT * FROM doctors';
    getDoctorByEmail = 'SELECT * FROM doctors WHERE email = $1';
    getDoctorByDni = 'SELECT * FROM doctors WHERE dni = $1';
  
    /**
     * Realiza una ejecución de una función creada dentro de la base de datos
     */
    postDoctor = 'SELECT insert_into_doctors($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
  
    deleteDoctorByDni = 'DELETE FROM doctors WHERE dni = $1';
    deleteDoctorByEmail = 'DELETE FROM doctors WHERE email = $1';

    updateDoctorByEmail ='UPDATE doctors  SET name=$2, last_name=$3, email=$4 ,identification_number=$5 ,birth_date=$6 ,profile_picture=$7,genre=$8,country_id=$9,identification_type=$10 WHERE id = $1 '
  }
  
  const ClassDoctorModel = new DoctorModel();
  
  export { ClassDoctorModel };