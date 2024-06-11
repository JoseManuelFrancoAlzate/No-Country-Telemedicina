CREATE OR REPLACE FUNCTION insert_into_medicalRecords (
	p_date date ,
	p_doctor_id integer,
	p_consultation text,
	p_recomendations text,
	p_diagnostic text,
	p_user_id integer
)
RETURNS VOID AS
$$
BEGIN 
	INSERT INTO medical_records (
    date, 
    doctor_id,
    consultant  n_reason,
    recomendations,
    diagnosis,
    users_id
  ) VALUES (
    p_date, 
    p_doctor_id,
    p_consultation,
    p_recomendations,
    p_diagnostic,
    p_user_id
    
  );
END;
$$
LANGUAGE plpgsql;