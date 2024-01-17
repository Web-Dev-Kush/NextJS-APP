"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";

export default function Page(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    let userId = props.params.edituser;
    let userData = await fetch("http://localhost:3000/api/users/" + userId);
    userData = await userData.json();
    if (userData.success) {
      let result = userData.result;
      setFname(result.fname);
      setLname(result.lname);
      setAge(result.age);
      setRole(result.role);
      setCompany(result.company);
      setPhone(result.phone);
      setAddress(result.address);
    }
  };

  const updateUser = async () => {
    let userId = props.params.edituser;
    let data = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "PUT",
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
    data = await data.json();
    if (data.result) {
      alert("User Data Successfully Updated");
    } else {
      alert("Data not Updated. Please check again");
    }
  };

  return (
    <div>
      <h1>Update User</h1>
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
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
      <Link href="/users">Users List Page</Link>
      <br />
      <Link href="/">Home Page</Link>
    </div>
  );
}
