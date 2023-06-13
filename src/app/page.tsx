"use client";
import { app } from "@/api/app";
import CardsName from "@/components/CardsName";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  password: string;
  token: string;
  user: string;
}

export default function Home() {
  const [users, setUsers] = useState<Users[]>();

  function getAllUsers() {
    app.get("/users").then(function (response) {
      setUsers(response.data.data);
    });
  }

  useEffect(() => getAllUsers(), []);

  return (
    <>
      <div className="px-3 mt-5">
        Users:
      </div>
      <main className="row card-container">
        {users && users.map(user => <CardsName name={user.name} />)}
      </main>
    </>
  )
}
