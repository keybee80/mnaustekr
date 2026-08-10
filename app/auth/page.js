"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setMessage(
      error
        ? error.message
        : "Účet vytvořen. Potvrď prosím e-mail a potom se přihlas."
    );
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setMessage(error ? error.message : "Přihlášení proběhlo úspěšně.");
  }

  return (
    <main style={{ maxWidth: 400, margin: "64px auto", padding: 24 }}>
      <h1>MňauŠtěkr</h1>
      <h2>Přihlášení</h2>

      <p>
        <label>
          E-mail<br />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Heslo<br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </p>

      <button onClick={signIn}>Přihlásit</button>
      <button onClick={signUp} style={{ marginLeft: 8 }}>
        Vytvořit účet
      </button>

      {message && <p>{message}</p>}
    </main>
  );
}