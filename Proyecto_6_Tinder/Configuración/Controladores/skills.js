import conexion from "../config/db.js";

const getSkills = async (request, response) => {
  try {
    const query = "SELECT * FROM skills";
    const skills = await conexion.query(query);
    response.json(skills.rows);
  } catch (error) {
    console.error("Error al obtener las habilidades:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const insertSkills = async (request, response) => {
  try {
    const { skill_name, skill_description } = request.body;
    const query = "INSERT INTO skills (skill_name, skill_description) VALUES ($1, $2)";
    const result = await conexion.query(query, [skill_name, skill_description]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al insertar la habilidad:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateSkills = async (request, response) => {
  try {
    const id = request.params.id;
    const { skill_name, skill_description } = request.body;
    const query =
      "UPDATE skills SET skill_name=$1, skill_description=$2 WHERE skill_id=$3";
    const result = await conexion.query(query, [skill_name, skill_description, id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al actualizar la habilidad:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteSkills = async (request, response) => {
  try {
    const id = request.params.id;
    const query = "DELETE FROM skills WHERE skill_id=$1";
    const result = await conexion.query(query, [id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al eliminar la habilidad:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getSkills, insertSkills, updateSkills, deleteSkills };
