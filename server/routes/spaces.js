import express from "express";
import {
  createSpace,
  deleteSpace,
  getSpace,
  getSpaces,
  updateSpace,
  countByName,
  countByType,
  getSpaceTables
} from "../controllers/space.js";

// import {
//   countByCity,
//   countByType,
//   createSpace,
//   deleteSpace,
//   getSpace,
//   getSpaceTables,
//   getSpaces,
//   updateSpace,
// } from "../controllers/space.js";
import Space from "../models/Space.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createSpace);
  
//update hotel 
 router.put("/:id", verifyAdmin, updateSpace);

//delete
router.delete("/:id", verifyAdmin, deleteSpace);

//get
router.get("/find/:id",getSpace);

//get all
router.get("/",getSpaces);
////////////////////////////
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);

router.get("/countByType", countByType);
router.get("/countByName", countByName);
router.get("/table/:id", getSpaceTables);


//     try {
//     const Spaces = await Space.find();
//     res.status(200).json(Spaces);
//   } catch (err) {
//     next(err);
//   }
// });




export default router;