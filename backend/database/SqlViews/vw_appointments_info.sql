CREATE OR REPLACE VIEW vw_appointments_info AS
SELECT 
	TO_CHAR(appo.appointment_date) AS appointment_date,
 	appo.attended,
	doctors.licence_number,
	doctors.dni AS doctors_dni,
	doctors.name || ' ' || doctors.last_name AS doctors_full_name ,
	doctors.phone_number,
	doctors.email AS doctors_email,
	doctors.active,
	doctors.licence_photo,
	doctors.profile_picture AS doctors_profile_picture,
	TO_CHAR(doctors.birth_date, 'YYYY-MM-DD') AS doctors_birth_date,
	doctors.biography,
	users.name || ' ' || users.last_name AS users_full_name,
	users.email AS users_email,
	users.identification_number,
	TO_CHAR(users.birth_date, 'YYYY-MM-DD') AS users_birth_date,
	users.profile_picture
FROM appointments appo
JOIN doctors ON (doctors.id = appo.doctors_id)
JOIN users ON (users.id = appo.users_id);
