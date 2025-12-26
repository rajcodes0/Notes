import Note from "../models/notes.js"


export async function getAllnotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in fetching notes", error);
    res.status(500).json({ message: "Error in fetching notes" });
  }
}

export async function getNotesById(req,res){
  try {
    const note   = await Note.findById(req.params.id)
    if(!note)  return res.status(400).json({message:"note is not found"})
      res.status(200).json(note);
    

  }
  catch(error){
console.error("Error in get notes controller ", error); 
res.status(500).json({mesage:"internal server error"})
  } 
    
  
}

export async function createNotes(req,res){
   try {
    const {title,content} = req.body
    const note  = new Note({
        title,
        content
    })
  const savedNote  =  await note.save();
    res.status(201).json({savedNote})
   }catch(error){
    console.log("Error in creating note",error);
    res.status(500).json({message:"Error in creating note"})

   }
}
 
export async function updateNotes(req,res){
  try {
    const {title,content}= req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
   if(!updatedNote) return res.status(404).json({message:"note is not found"})
    res.status(200).json({updatedNote})
  } catch (error) {
     res.status(500).json({message:"note is not updated successfuly",error})
  }
}
 
export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Note not deleted successfully" });
  }
}



