import React from "react";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router";
import CreatePage from "./Pages/CreatePage";
import NoteDetailPage from "./Pages/NoteDetailPage";

function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id"  element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
