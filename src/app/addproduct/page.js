"use client";
import { useState } from "react";
import "../style.css";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [colour, setColour] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    console.log(name, price, colour, company, category);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({name, price, colour, company, category}),
    });
    result = await result.json();
    if (result.success) {
      alert("Product Successfully added");
    } else {
      alert("Data not valid. Please check again");
    }
  };

  return (
    <div>
      <h1>Add Product Page</h1>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Product Name"
      />
      <input
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter Product Price"
      />
      <input
        className="input"
        value={colour}
        onChange={(e) => setColour(e.target.value)}
        type="text"
        placeholder="Enter Product Colour"
      />
      <input
        className="input"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product Company"
      />
      <input
        className="input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product Category"
      />
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>

      <Link href="/">Home Page</Link>
    </div>
  );
}
