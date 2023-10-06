import conexion from "../config/db.js";

const getUsers = async (request, response) => {
  try {
    const query = "SELECT * FROM users";
    const users = await conexion.query(query);
    response.json(users.rows);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const insertUsers = async (request, response) => {
  try {
    const { user_name, user_city, user_address, user_tariff, skill_id } = request.body;
    const query =
      "INSERT INTO users (user_name, user_city, user_address, user_tariff, skill_id) VALUES ($1, $2, $3, $4, $5)";
    const result = await conexion.query(query, [user_name, user_city, user_address, user_tariff, skill_id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al insertar el usuario:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateUsers = async (request, response) => {
  try {
    const id = request.params.id;
    const { user_name, user_city, user_address, user_tariff, skill_id } = request.body;
    const query =
      "UPDATE users SET user_name=$1, user_city=$2, user_address=$3, user_tariff=$4, skill_id=$5 WHERE id=$6";
    const result = await conexion.query(query, [user_name, user_city, user_address, user_tariff, skill_id, id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteUsers = async (request, response) => {
  try {
    const id = request.params.id;
    const query = "DELETE FROM users WHERE id=$1";
    const result = await conexion.query(query, [id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getUsers, insertUsers, updateUsers, deleteUsers };
