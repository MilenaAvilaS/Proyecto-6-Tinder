-- Crear Tabla de Habilidades
CREATE TABLE IF NOT EXISTS skills (
    skill_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(50) NOT NULL,
    skill_description VARCHAR(100) NOT NULL
);

-- Ingresar datos a la tabla de Habilidades
INSERT INTO skills (skill_name, skill_description) VALUES 
    ('Comunicación Efectiva', 'Compartir ideas de forma comprensible'),
    ('Pensamiento Crítico', 'Capacidad para evaluar la consistencia de las ideas'),
    ('Persuasión', 'Inducir a alguien con razones a hacer o creer algo'),
    ('Resolución de Problemas', 'Encontrar soluciones para problemas'),
    ('Inteligencia Emocional', 'Reconocer y gestionar emociones propias y ajenas');

-- Consultar Registros de la Tabla de Habilidades
SELECT * FROM skills;

-- Crear Tabla de Usuarios
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_city VARCHAR(30) NOT NULL,
    user_address VARCHAR(50) NOT NULL,
    user_tariff NUMERIC(10, 2) NOT NULL,
    skill_id INT NOT NULL,
    FOREIGN KEY (skill_id) REFERENCES skills (skill_id)
);

-- Ingresar datos a la tabla de Usuarios
INSERT INTO users (user_name, user_city, user_address, user_tariff, skill_id) VALUES 
    ('Cristian Torres', 'Bogota', 'Calle 165 N° 32-29', 30, 1),
    ('Cristian Torres', 'Bogota', 'Calle 165 N° 32-29', 30, 2),
    ('Cristian Torres', 'Bogota', 'Calle 165 N° 32-29', 30, 3),
    ('Cristian Torres', 'Bogota', 'Calle 165 N° 32-29', 30, 4),
    ('Cristian Torres', 'Bogota', 'Calle 165 N° 32-29', 30, 5),
    ('Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 1),
    ('Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 2),
    ('Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 3),
    ('Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 4),
    ('Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 5);

-- Consultar Registros de la Tabla de Usuarios
SELECT * FROM users;

-- Crear Tabla de Empresas
CREATE TABLE IF NOT EXISTS companies (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(50) NOT NULL,
    company_city VARCHAR(30) NOT NULL,
    company_address VARCHAR(50) NOT NULL,
    sector VARCHAR(50) NOT NULL
);

-- Ingresar datos a la tabla de Empresas
INSERT INTO companies (company_name, company_city, company_address, sector) VALUES 
    ('Productos Naturales de la Sabana SAS', 'Cajica', 'KM 5 Via Cajica Tabio', 'Industrial'),
    ('Ecopetrol SA', 'Bogota', 'Carrera 13 n.º 36 - 24', 'Petrolero'),
    ('Rappi', 'Bogota', 'Cra. 14a #71a-59', 'Domicilios');

-- Consultar Registros de la Tabla de Empresas
SELECT * FROM companies;

-- Crear Tabla de Estado de Negociación
CREATE TABLE IF NOT EXISTS negotiation_status (
    status_id SERIAL PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL,
    status_description VARCHAR(100) NOT NULL
);

-- Ingresar datos a la tabla de Estados de Negociación
INSERT INTO negotiation_status (status_name, status_description) VALUES 
    ('Cotización', 'Búsqueda de la mejor oferta'),
    ('Contratación', 'Elección de la mejor opción'),
    ('Ejecución', 'Ejecución del contrato'),
    ('Finalización', 'Finalización del contrato');

-- Consultar Registros de la Tabla de Estados de Negociación
SELECT * FROM negotiation_status;

-- Crear Tabla de Negociación
CREATE TABLE IF NOT EXISTS negotiation (
    negotiation_id SERIAL PRIMARY KEY,
    status_id INT NOT NULL,
    user_id INT NOT NULL,
    company_id INT NOT NULL,
    negotiation_hours NUMERIC(5, 2),
    FOREIGN KEY (status_id) REFERENCES negotiation_status (status_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (company_id) REFERENCES companies (company_id)
);

-- Ingresar datos a la tabla de Negociación
INSERT INTO negotiation (status_id, user_id, company_id, negotiation_hours) VALUES (1, 1, 3, 6);

-- Consultar Registros de la Tabla de Negociación
SELECT * FROM negotiation;
