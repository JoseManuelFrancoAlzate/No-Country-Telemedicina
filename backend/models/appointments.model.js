class SqlAppointments {
  /**
   * Query encargado de traer todos los doctores de la BD
   *
   * Si se provee un nombre de doctor, traerá todas las citas pertenecientes al doctor
   */

  getAllAppointments = 'SELECT * FROM VW_APPOINTMENTS_INFO WHERE UPPER(DOCTORS_FULL_NAME) LIKE UPPER($1) ORDER BY appointment_date'

  getAppointmentsByDate = 'SELECT * FROM VW_APPOINTMENTS_INFO WHERE appointment_date = $1 ORDER BY appointment_date'

  

  /**
   * Query encargado de eliminar una cita
   *
   * Debe proveerse la fecha de la cita, el id del doctor y el id del paciente
   */
  deleteAppointment = 'DELETE FROM appointments WHERE appointment_date = $1 AND users_id = $2 AND doctors_id = $3'

  createAppointment = `
    INSERT INTO
      appointments (
      appointment_date,
      users_id,
      doctors_id
      )
    VALUES 
      ($1, $2, $3)`

  updateAppointments = `
    UPDATE appointments SET 
      appointment_date = $1,
      doctors_id = $2
    WHERE 
      appointment_date = $3
      AND users_id = $4`
}

export { SqlAppointments }
