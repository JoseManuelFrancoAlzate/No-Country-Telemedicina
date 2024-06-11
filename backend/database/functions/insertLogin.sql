CREATE OR REPLACE FUNCTION insert_into_login (
	p_password character varying(50),
	p_role character varying(50),
	p_email character varying(100),
)
RETURNS VOID AS
$$
BEGIN 
	INSERT INTO login (
    password, 
    role, 
    email, 
    
  ) VALUES (
    p_password,
    p_role,
    p_email,
  );
END;
$$
LANGUAGE plpgsql;