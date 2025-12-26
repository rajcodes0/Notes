import express from "express"
const router = express.Router()
import { createNotes, getAllnotes,deleteNotes,getNotesById, updateNotes } from "../controllers/notescontroller.js"

router.get('/',getAllnotes)
router.get('/:id',getNotesById)
router.post('/',createNotes)
router.put('/:id',updateNotes)
router.delete('/:id',deleteNotes)

export default router