"use client";

import { useState } from "react";

const pets = ["Hilda", "Mina", "Terry", "Sherry", "Trudy"];

export default function Home() {
  const [pet, setPet] = useState(pets[0]);
  const [food, setFood] = useState("");
  const [message, setMessage] = useState("");

  function saveFeeding(event) {
    event.preventDefault();

    if (!food.trim()) {
      setMessage("Doplň prosím krmivo.");
      return;
    }

    setMessage(`Zaznamenáno: ${pet} dostal/a ${food}.`);
  }

  return (
    <main style={{ maxWidth: 640, margin: "64px auto", padding: 24 }}>
      <h1>MňauŠtěkr</h1>
      <p>Rychlý záznam krmení.</p>

      <form onSubmit={saveFeeding}>
        <p>
          <label>
            Mazlíček<br />
            <select value={pet} onChange={(event) => setPet(event.target.value)}>
              {pets.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <label>
            Krmivo<br />
            <input
              value={food}
              onChange={(event) => setFood(event.target.value)}
              placeholder="Např. kapsička Carnilove"
            />
          </label>
        </p>

        <button type="submit">Zapsat krmení</button>
      </form>

      {message && <p><strong>{message}</strong></p>}
    </main>
  );
}