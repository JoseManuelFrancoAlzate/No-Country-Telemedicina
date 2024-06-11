CREATE OR REPLACE FUNCTION insert_into_users (
	p_name character varying(50),
	p_last character varying(50),
	p_email character varying(100),
	p_identification character varying(50),
	p_birth_date date,
	p_profile_pic text,
	p_genre genre,
	p_country_id integer,
	p_indentification_type integer
)
RETURNS VOID AS
$$
BEGIN 
	INSERT INTO users (
    name, 
    last_name, 
    email, 
    identification_number, 
    birth_date,
    profile_picture,
    genre,
    country_id,
    identification_type
  ) VALUES (
    p_name,
    p_last,
    p_email,
    p_identification,
    p_birth_date,
    p_profile_pic,
    p_genre,
    p_country_id,
    p_indentification_type
  );
END;
$$
LANGUAGE plpgsql;