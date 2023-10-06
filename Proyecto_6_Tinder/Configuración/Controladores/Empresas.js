import conexion from "../config/db.js";

const getCompanies = async (request, response) => {
  try {
    const query = "SELECT * FROM companies";
    const companies = await conexion.query(query);
    response.json(companies.rows);
  } catch (error) {
    console.error("Error al obtener las empresas:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const insertCompanies = async (request, response) => {
  try {
    const { company_name, company_city, company_address, company_sector } = request.body;
    const query =
      "INSERT INTO companies (company_name, company_city, company_address, company_sector) VALUES ($1, $2, $3, $4)";
    const result = await conexion.query(query, [company_name, company_city, company_address, company_sector]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al insertar la empresa:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateCompanies = async (request, response) => {
  try {
    const id = request.params.id;
    const { company_name, company_city, company_address, company_sector } = request.body;
    const query =
      "UPDATE companies SET company_name=$1, company_city=$2, company_address=$3, company_sector=$4 WHERE id=$5";
    const result = await conexion.query(query, [company_name, company_city, company_address, company_sector, id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al actualizar la empresa:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteCompanies = async (request, response) => {
  try {
    const id = request.params.id;
    const query = "DELETE FROM companies WHERE id=$1";
    const result = await conexion.query(query, [id]);
    response.json({ success: result.rowCount });
  } catch (error) {
    console.error("Error al eliminar la empresa:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
};

export { getCompanies, insertCompanies, updateCompanies, deleteCompanies };
