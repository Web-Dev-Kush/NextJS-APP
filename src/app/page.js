import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MyCart Shop</h1>
      <Link href="/addproduct">Add Products</Link>
      <br />
      <Link href="/products">Products List</Link>
      <br />
      <Link href="/adduser">Add User</Link>
      <br />
      <Link href="/users">Users List</Link>
    </main>
  );
}
