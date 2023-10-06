import conexion from "../config/db.js";

const getNegotiation = async (request, response) => {
  try {
    const query = "SELECT * FROM negotiation";
    const negotiations = await conexion.query(query);
    response.json(negotiations.rows);
  } catch (error) {
    console.error("Error al obtener las negociaciones:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const insertNegotiation = async (request, response) => {
  try {
    const { status_id, user_id, companie_id, negotiation_hours } = request.body;
    const query =
      "INSERT INTO negotiation (status_id, user_id, companie_id, negotiation_hours) VALUES ($1, $2, $3, $4)";
    const result = await conexion.query(query, [status_id, user_id, companie_id, negotiation_hours]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al insertar la negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateNegotiation = async (request, response) => {
  try {
    const id = request.params.id;
    const { status_id, user_id, companie_id, negotiation_hours } = request.body;
    const query =
      "UPDATE negotiation SET status_id=$1, user_id=$2, companie_id=$3, negotiation_hours=$4 WHERE negotiation_id=$5";
    const result = await conexion.query(query, [status_id, user_id, companie_id, negotiation_hours, id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al actualizar la negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteNegotiation = async (request, response) => {
  try {
    const id = request.params.id;
    const query = "DELETE FROM negotiation WHERE negotiation_id=$1";
    const result = await conexion.query(query, [id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al eliminar la negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getNegotiation, insertNegotiation, updateNegotiation, deleteNegotiation };
