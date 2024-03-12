import styles from "../../styles/Home.module.css";
import Link from "next/link";

import { useState } from 'react';

export default function LoginTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Login Page</h1>
      </main>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p className={styles.description}>
          <Link href="/home">&larr; Go Back</Link>
    </p>
    </div>
  );
};