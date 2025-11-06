import React, { useState } from "react";
import MemberForm from "./MemberForm";

export default function Dashboard({ setIsAuthenticated }) {
  const [members, setMembers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 flex items-center gap-2 text-center sm:text-left">
          🏥 Health Insurance Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 w-full sm:w-auto"
        >
          Logout
        </button>
      </header>

      {/* Member Form */}
      <div className="max-w-6xl mx-auto">
        <MemberForm addMember={addMember} />
      </div>

      {/* Member List */}
      <div className="mt-10 max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 text-center sm:text-left">
          🧾 Registered Members
        </h2>

        {members.length === 0 ? (
          <p className="text-gray-500 text-center py-6">
            No members added yet.
          </p>
        ) : (
          <>
            {/* Responsive Member List */}
            <div className="mt-6">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <table className="min-w-full text-sm text-gray-700 border-collapse">
                  <thead className="bg-blue-200 text-gray-900">
                    <tr>
                      <th className="py-2 px-3 text-left">Member ID</th>
                      <th className="py-2 px-3 text-left">Full Name</th>
                      <th className="py-2 px-3 text-left">Gender</th>
                      <th className="py-2 px-3 text-left">DOB</th>
                      <th className="py-2 px-3 text-left">Email</th>
                      <th className="py-2 px-3 text-left">Contact</th>
                      <th className="py-2 px-3 text-left">City</th>
                      <th className="py-2 px-3 text-left">Policy No</th>
                      <th className="py-2 px-3 text-left">Plan</th>
                      <th className="py-2 px-3 text-left">Coverage</th>
                      <th className="py-2 px-3 text-left">Sum Insured</th>
                      <th className="py-2 px-3 text-left">Premium</th>
                      <th className="py-2 px-3 text-left">Policy Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, idx) => (
                      <tr
                        key={idx}
                        className={`border-t hover:bg-blue-50 ${
                          idx % 2 === 0 ? "bg-white" : "bg-blue-100/50"
                        }`}
                      >
                        <td className="py-2 px-3">{m.memberId}</td>
                        <td className="py-2 px-3">
                          {m.firstName} {m.lastName}
                        </td>
                        <td className="py-2 px-3">{m.gender}</td>
                        <td className="py-2 px-3">{m.dob}</td>
                        <td className="py-2 px-3">{m.email}</td>
                        <td className="py-2 px-3">{m.contact}</td>
                        <td className="py-2 px-3">{m.city}</td>
                        <td className="py-2 px-3">{m.policyNumber}</td>
                        <td className="py-2 px-3">{m.planType}</td>
                        <td className="py-2 px-3">{m.coverageType}</td>
                        <td className="py-2 px-3">₹{m.sumInsured}</td>
                        <td className="py-2 px-3">₹{m.premium}</td>
                        <td className="py-2 px-3">
                          {m.policyStartDate} → {m.policyEndDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {members.map((m, idx) => (
                  <div
                    key={idx}
                    className="border rounded-xl bg-white shadow-sm p-4"
                  >
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                      <h3 className="font-semibold text-blue-700">
                        {m.firstName} {m.lastName}
                      </h3>
                      <span className="text-sm text-gray-600">
                        {m.memberId}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><strong>Gender:</strong> {m.gender}</p>
                      <p><strong>DOB:</strong> {m.dob}</p>
                      <p><strong>Email:</strong> {m.email}</p>
                      <p><strong>Contact:</strong> {m.contact}</p>
                      <p><strong>City:</strong> {m.city}</p>
                      <p><strong>Policy No:</strong> {m.policyNumber}</p>
                      <p><strong>Plan:</strong> {m.planType}</p>
                      <p><strong>Coverage:</strong> {m.coverageType}</p>
                      <p><strong>Sum Insured:</strong> ₹{m.sumInsured}</p>
                      <p><strong>Premium:</strong> ₹{m.premium}</p>
                      <p>
                        <strong>Policy Period:</strong> {m.policyStartDate} →{" "}
                        {m.policyEndDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 mb-4">
        © {new Date().getFullYear()} Health Insurance Portal | All Rights Reserved
      </footer>
    </div>
  );
}
