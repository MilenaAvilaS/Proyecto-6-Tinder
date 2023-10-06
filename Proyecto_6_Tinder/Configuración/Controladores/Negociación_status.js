import conexion from "../config/db.js";

const getNegotiationStatus = async (request, response) => {
  try {
    const query = "SELECT * FROM negotiation_status";
    const status = await conexion.query(query);
    response.json(status.rows);
  } catch (error) {
    console.error("Error al obtener los estados de negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const insertNegotiationStatus = async (request, response) => {
  try {
    const { status_name, status_description } = request.body;
    const query =
      "INSERT INTO negotiation_status (status_name, status_description) VALUES ($1, $2)";
    const result = await conexion.query(query, [status_name, status_description]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al insertar el estado de negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateNegotiationStatus = async (request, response) => {
  try {
    const id = request.params.id;
    const { status_name, status_description } = request.body;
    const query =
      "UPDATE negotiation_status SET status_name=$1, status_description=$2 WHERE status_id=$3";
    const result = await conexion.query(query, [status_name, status_description, id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al actualizar el estado de negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteNegotiationStatus = async (request, response) => {
  try {
    const id = request.params.id;
    const query = "DELETE FROM negotiation_status WHERE status_id=$1";
    const result = await conexion.query(query, [id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al eliminar el estado de negociación:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export {
  getNegotiationStatus,
  insertNegotiationStatus,
  updateNegotiationStatus,
  deleteNegotiationStatus,
};
