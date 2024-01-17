import DeleteUser from "@/lib/DeleteUser";
import Link from "next/link";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users", {
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
  const users = await getUsers();
  console.log("users at page", users);

  return (
    <div>
      <h1>Users List Page</h1>
      <Link href="/">Home Page</Link>
      <table border="2" width="800">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Role</td>
            <td>Company</td>
            <td>Contact No</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.age}</td>
              <td>{item.role}</td>
              <td>{item.company}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <Link href={"users/" + item._id}>Edit</Link>
              </td>
              <td>
                <DeleteUser id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
