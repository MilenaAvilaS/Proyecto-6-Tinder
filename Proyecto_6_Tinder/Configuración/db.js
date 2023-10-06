import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',  // Valor predeterminado: 'localhost'
    user: process.env.DB_USER || 'usuario',     // Valor predeterminado: 'usuario'
    password: process.env.DB_PASSWORD || 'contraseña', // Valor predeterminado: 'contraseña'
    database: process.env.DB_DATABASE || 'basededatos', // Valor predeterminado: 'basededatos'
    port: process.env.DB_PORT || 5432,          // Valor predeterminado: 5432 (puerto PostgreSQL)
    // Agrega opciones de configuración adicionales según sea necesario
    // ssl: true,
});

pool.on('error', (err) => {
    console.error('Error en la pool de conexiones:', err.message);
});

export default pool;
