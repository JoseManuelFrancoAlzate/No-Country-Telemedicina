class MedicalRecordModel {

    getAllMedicalRecords="select * from medical_records"

    postMedicalRecord = 'SELECT insert_into_medicalRecords($1, $2, $3, $4, $5, $6)'

    updateMedicalRecord="UPDATE medical_records SET date=$2, doctor_id=$3, consultation_reason=$4 ,recomendations=$5 ,diagnosis=$6 ,users_id=$7 WHERE id = $1 "





}

const ClassMedicalRecordModel = new MedicalRecordModel()

export { ClassMedicalRecordModel }

