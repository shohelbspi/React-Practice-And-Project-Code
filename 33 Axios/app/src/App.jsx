import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    editMode: false
  });

  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await axios({
        url: "https://6a741ff415e0453fe1b46586.mockapi.io/users"
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchUsers();
  }, []);

  // ২. ইনপুট পরিবর্তন
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(function (prevData) {
      return { ...prevData, [name]: value };
    });
  }

  // ৩. ইউজার সেভ করা
  async function handleSaveUser() {
    if (!formData.name || !formData.age) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await axios({
        url: "https://6a741ff415e0453fe1b46586.mockapi.io/users",
        method: 'post',
        data: { name: formData.name, age: formData.age }
      });
      fetchUsers();
      resetForm();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  // ৪. এডিট মোড সেট করা
  function handleEditUser(user) {
    setFormData({ ...user, editMode: true });
  }

  // ৫. ইউজার আপডেট করা
  async function handleUpdateUser() {
    try {
      await axios({
        url: `https://6a741ff415e0453fe1b46586.mockapi.io/users/${formData.id}`,
        method: 'put',
        data: { name: formData.name, age: formData.age }
      });

      fetchUsers();
      resetForm();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async function handleDeleteUser(id) {
    await axios({
      url: `https://6a741ff415e0453fe1b46586.mockapi.io/users/${id}`,
      method: 'delete',
    });

    alert('User Delete Successfully')
    fetchUsers();
  }

  // ৬. ফর্ম রিসেট
  function resetForm() {
    setFormData({ name: '', age: '', editMode: false });
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased py-8 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              User Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Create, edit, and monitor application users efficiently.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-[lightseagreen] border border-teal-200">
              Total Users: {users.length}
            </span>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left Panel: Form */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sticky top-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                {formData.editMode ? "Edit User Details" : "Add New User"}
              </h2>
              {formData.editMode && (
                <button
                  onClick={resetForm}
                  className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                >
                  Cancel
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  name="name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen] focus:border-transparent text-sm transition-all bg-slate-50/50 focus:bg-white"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 28"
                  name="age"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[lightseagreen] focus:border-transparent text-sm transition-all bg-slate-50/50 focus:bg-white"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-2">
                {formData.editMode ? (
                  <button
                    className="w-full bg-[lightseagreen] hover:bg-[#1a918b] text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-sm"
                    onClick={handleUpdateUser}
                  >
                    <span>Update</span>
                  </button>
                ) : (
                  <button
                    className="w-full bg-[lightseagreen] hover:bg-[#1a918b] text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-sm"
                    onClick={handleSaveUser}
                  >
                    <span>Save User</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel: Table */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Registered Users</h2>
              {loading && <span className="text-xs text-slate-400">Syncing...</span>}
            </div>

            {/* Scrollable Container */}
            <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-slate-50 z-10 border-b border-slate-200/80">
                  <tr className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-6">ID</th>
                    <th className="py-3.5 px-6">User Name</th>
                    <th className="py-3.5 px-6">Age</th>
                    <th className="py-3.5 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {users.length > 0 ? (
                    users.map(function (user,index) {
                      return (
                        <tr
                          key={user.id}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="py-4 px-6 font-mono text-xs text-slate-400">
                            #{index+1}
                          </td>
                          <td className="py-4 px-6 font-medium text-slate-900">
                            {user.name}
                          </td>
                          <td className="py-4 px-6 text-slate-600">
                            {user.age} Yrs
                          </td>
                          <td className="py-4 px-6 text-center">
                            <button
                              className="px-3 py-1.5 text-xs font-medium text-[lightseagreen] bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-100"
                              onClick={function () {
                                handleEditUser(user);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="px-3 py-1.5 text-xs font-medium text-red-400 bg-teal-50  mx-4 hover:bg-teal-100 rounded-lg transition-colors border border-teal-100"
                              onClick={function () {
                                handleDeleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-12 text-center text-slate-400">
                        {loading ? "Loading users..." : "No users found in database."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;