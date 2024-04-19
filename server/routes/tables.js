import express from "express";
import {
  createTable,
  deleteTable,
  getTable,
  getTables,
//   updateTable,
  updateTableAvailability,
} from "../controllers/table.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:spaceid", verifyAdmin, createTable);

// //UPDATE
router.put("/availability/:id", updateTableAvailability);
// router.put("/:id", verifyAdmin, updateTable);
//DELETE
router.delete("/:id/:spaceid", verifyAdmin, deleteTable);
//GET

router.get("/:id", getTable);
//GET ALL


router.get("/", getTables);

export default router;
