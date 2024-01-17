"use client";

import { useRouter } from "next/navigation";

export default function DeleteUser(props) {
  const router = useRouter();
  const deleteRecord = async () => {
    let response = await fetch(
      "http://localhost:3000/api/users/" + props.id,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Record deleted successfully");
      router.push("/products");
    }
  };
  return <button onClick={deleteRecord}>Delete</button>;
}
