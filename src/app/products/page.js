import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  data = await data.json();
  console.log("data from api call", data);
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
export default async function Page() {
  const products = await getProducts();
  console.log("products at page", products);

  return (
    <div>
      <h1>Products List Page</h1>
      <Link href="/">Home Page</Link>
      <table border="2" width="800">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Colour</td>
            <td>Company</td>
            <td>Category</td>
            <td>Update</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.colour}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td>
                <Link href={"products/" + item._id}>Edit</Link>
              </td>
              <td>
                <DeleteProduct id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
