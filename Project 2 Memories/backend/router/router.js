import express from "express";

import { createSpecific, deleteSpecific, getAll, getSpecific, updateSpecific } from "../controllers/router_handler.js";

const router = express.Router()

// get all
router.get("/", getAll); 

//get specific 
router.get('/:id', getSpecific)

// create 
router.post('/', createSpecific)

//update specific
router.put('/:id', updateSpecific)

// delete specific
router.delete('/:id', deleteSpecific)



 
export { router };