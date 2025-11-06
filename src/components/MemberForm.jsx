import React, { useState } from "react";

export default function MemberForm({ addMember }) {
  const [member, setMember] = useState({
    memberId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    policyNumber: "",
    planType: "",
    coverageType: "",
    sumInsured: "",
    policyStartDate: "",
    policyEndDate: "",
    premium: "",
  });

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(member);
    setMember({
      memberId: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      email: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      pin: "",
      policyNumber: "",
      planType: "",
      coverageType: "",
      sumInsured: "",
      policyStartDate: "",
      policyEndDate: "",
      premium: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-5xl bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 text-center">
          🧍 Add New Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* --- Basic Info --- */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="memberId"
                value={member.memberId}
                onChange={handleChange}
                placeholder="Member ID"
                className="border p-3 rounded-lg w-full"
                required
              />
              <input
                name="firstName"
                value={member.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border p-3 rounded-lg w-full"
                required
              />
              <input
                name="lastName"
                value={member.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border p-3 rounded-lg w-full"
                required
              />
              <input
                type="date"
                name="dob"
                value={member.dob}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
                required
              />
              <select
                name="gender"
                value={member.gender}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
                required
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select
                name="maritalStatus"
                value={member.maritalStatus}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              >
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="email"
                value={member.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-3 rounded-lg w-full"
                required
              />
              <input
                name="contact"
                value={member.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="border p-3 rounded-lg w-full"
                required
              />
              <input
                name="address"
                value={member.address}
                onChange={handleChange}
                placeholder="Address"
                className="col-span-1 sm:col-span-2 border p-3 rounded-lg w-full"
              />
              <input
                name="city"
                value={member.city}
                onChange={handleChange}
                placeholder="City"
                className="border p-3 rounded-lg w-full"
              />
              <input
                name="state"
                value={member.state}
                onChange={handleChange}
                placeholder="State"
                className="border p-3 rounded-lg w-full"
              />
              <input
                name="pin"
                value={member.pin}
                onChange={handleChange}
                placeholder="PIN Code"
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          {/* --- Policy Info --- */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Policy Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="policyNumber"
                value={member.policyNumber}
                onChange={handleChange}
                placeholder="Policy Number"
                className="border p-3 rounded-lg w-full"
                required
              />
              <select
                name="planType"
                value={member.planType}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
                required
              >
                <option value="">Plan Type</option>
                <option>Basic</option>
                <option>Premium</option>
                <option>Gold</option>
              </select>
              <select
                name="coverageType"
                value={member.coverageType}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              >
                <option value="">Coverage Type</option>
                <option>Individual</option>
                <option>Family</option>
              </select>
              <input
                name="sumInsured"
                value={member.sumInsured}
                onChange={handleChange}
                placeholder="Sum Insured (₹)"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="date"
                name="policyStartDate"
                value={member.policyStartDate}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="date"
                name="policyEndDate"
                value={member.policyEndDate}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                name="premium"
                value={member.premium}
                onChange={handleChange}
                placeholder="Premium Amount (₹)"
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 w-full sm:w-auto"
            >
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
