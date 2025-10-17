CREATE OR REPLACE FUNCTION check_even_odd(n integer) RETURN AS $$
DO $$
DECLARE
result TEXT;
BEGIN
if n%2=0 THEN
result:='Even';
ELSE
return:='Odd';
END IF
RETURN result;
END
%% LANGUAGE plpgsql;


