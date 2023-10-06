import { Router } from "express";
import {
  getSkills,
  insertSkills,
  updateSkills,
  deleteSkills,
} from "../controllers/skills.js";
import {
  getUsers,
  insertUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/users.js";
import {
  getCompanies,
  insertCompanies,
  updateCompanies,
  deleteCompanies,
} from "../controllers/companies.js";
import {
  getNegotiationStatus,
  insertNegotiationStatus,
  updateNegotiationStatus,
  deleteNegotiationStatus,
} from "../controllers/negotiation_status.js";
import {
  getNegotiation,
  insertNegotiation,
  updateNegotiation,
  deleteNegotiation,
} from "../controllers/negotiation.js";

const router = Router();

// Rutas de Habilidades (Skills)
router.get("/skills", getSkills);
router.post("/skills", insertSkills);
router.put("/skills/:id", updateSkills);
router.delete("/skills/:id", deleteSkills);

// Rutas de Usuarios (Users)
router.get("/users", getUsers);
router.post("/users", insertUsers);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

// Rutas de Compañías (Companies)
router.get("/companies", getCompanies);
router.post("/companies", insertCompanies);
router.put("/companies/:id", updateCompanies);
router.delete("/companies/:id", deleteCompanies);

// Rutas de Estado de Negociación (Negotiation Status)
router.get("/status", getNegotiationStatus);
router.post("/status", insertNegotiationStatus);
router.put("/status/:id", updateNegotiationStatus);
router.delete("/status/:id", deleteNegotiationStatus);

// Rutas de Negociación (Negotiation)
router.get("/negotiation", getNegotiation);
router.post("/negotiation", insertNegotiation);
router.put("/negotiation/:id", updateNegotiation);
router.delete("/negotiation/:id", deleteNegotiation);

export default router;
