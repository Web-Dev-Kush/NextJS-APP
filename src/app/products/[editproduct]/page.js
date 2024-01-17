"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [colour, setColour] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let productId = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + productId
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setColour(result.colour);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    let productId = props.params.editproduct;
    let data = await fetch(
      "http://localhost:3000/api/products/" + productId,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, colour, company, category }),
      }
    );
    data = await data.json();
    if (data.result) {
      alert("Product Successfully Updated");
    } else {
      alert("Data not Updated. Please check again");
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
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
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
      <Link href="/products">Product List Page</Link>
      <br />
      <Link href="/">Home Page</Link>
    </div>
  );
}
