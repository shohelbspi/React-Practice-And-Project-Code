import { useState } from "react";
import Popup from "./Popup";
import "./App.css";

function App() {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <div className="min-h-screen flex items-center gap-5 justify-center bg-slate-100">
      <button
        onClick={() => setEditPopup(true)}
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg transition duration-300"
      >
        Edit
      </button>

      <button
        onClick={() => setDeletePopup(true)}
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg transition duration-300"
      >
        Delete
      </button>

      <Popup popup={editPopup} setPopup={setEditPopup} title='Confrim' desc='Do You want Edit'/>
      <Popup popup={deletePopup} setPopup={setDeletePopup} title='Delete' desc='Do You want Delete'/>
    </div >
  );
}

export default App;