CREATE OR REPLACE FUNCTION insert_into_doctors (
    p_id bigint,
    p_licence_number character varying(50),
    p_identification_number character varying(50),
    p_name character varying(50),
    p_last_name character varying(50),
    p_phone_number bigint,
    p_email character varying(100),
    p_active boolean,
    p_licence_photo text,
    p_profile_picture text,
    p_birth_date date,
    p_biography text,
    p_speciality bigint
)
RETURNS VOID AS
$$
BEGIN 
    INSERT INTO doctors (
        id,
        licence_number, 
        identification_number, 
        name, 
        last_name, 
        phone_number, 
        email, 
        active,
        licence_photo,
        profile_picture,
        birth_date,
        biography,
        speciality_id
    ) VALUES (
        p_id,
        p_licence_number,
        p_identification_number,
        p_name,
        p_last_name,
        p_phone_number,
        p_email,
        p_active,
        p_licence_photo,
        p_profile_picture,
        p_birth_date,
        p_biography,
        p_speciality
    );
END;
$$
LANGUAGE plpgsql;