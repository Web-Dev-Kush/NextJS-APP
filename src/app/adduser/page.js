"use client";
import { useState } from "react";
import "../style.css";
import Link from "next/link";

export default function Page() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  const addUser = async () => {
    console.log(fname, lname, age, role, company, phone, address);
    let result = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        age,
        role,
        company,
        phone,
        address,
      }),
    });
    result = await result.json();
    if (result.success) {
      alert("User Successfully added");
    } else {
      alert("Data not valid. Please check again");
    }
  };

  return (
    <div>
      <h1>Add User Page</h1>
      <input
        className="input"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        type="text"
        placeholder="Enter First Name"
      />
      <input
        className="input"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        type="text"
        placeholder="Enter Last Name"
      />
      <input
        className="input"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="Number"
        placeholder="Enter Age"
      />
      <input
        className="input"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        type="text"
        placeholder="Enter your role"
      />
      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company Name"
      />
      <input
        className="input"
        type="Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your contact number"
      />
      <input
        className="input"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <button className="btn" onClick={addUser}>
        Add User
      </button>

      <Link href="/">Home Page</Link>
    </div>
  );
}
