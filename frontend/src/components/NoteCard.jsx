import { PenSquare, Trash2Icon } from "lucide-react";

import { Link } from "react-router";
import { formatDate } from "../lib/utils.js";
import  api from "../lib/axios.js"
import toast from 'react-hot-toast'

function NoteCard({ note,setNotes }) {
  const handleDelete = async(e,id) =>{
    e.preventDefault();
     e.stopPropagation();

    if(!window.confirm ("Are you sure you want to delete it;"))
      return ;
    try {
      await api.delete(`/notes/${id}`)
      toast.success("note deleted succesfully")
      setNotes((prev) => prev.filter(note => note._id !== id))
      
    } catch (error) {
      console.log("Error in handleDelete",error)
      toast.error("Failed to delte the note")
      
    }
  }
  return (
    <Link
      to={`/notes/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-green-200 p-4"
    >
      <div className="card-body">
        <h3 className=" card-title text-base-content font-bold text-lg">
          {note.title}
        </h3>
        <p className="text-gray-600 mt-2">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4  ">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <PenSquare className="size-4" />
            <button className="btn btn-ghost btn-xs text-error
            " onClick={(e)=>handleDelete(e,note._id)}>
              <Trash2Icon className=" size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
