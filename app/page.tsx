"use client";
import { useEffect, useState } from "react";
import UserCard from "./Component/card/page";
import LoadingIcons from "react-loading-icons";
import { BarLoader } from "react-spinners";
import { Box, Paper } from "@mantine/core";

export default function HomePage() {
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  }

  const [user, setUserDetail] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUserDetail(data);
    setLoading(false);
  };

  const handleDelete = (id: number) => {
    setUserDetail((user) => user.filter((user) => user.id !== id));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (!user) {
    return (
      <div className="spinner-container" style={{ width: "100%" }}>
        <BarLoader color={"#3498db"} loading={loading} />
      </div>
    );
  }

  return (
    <Paper
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        gridAutoFlow: "row",
        overflowX: "auto",
      }}
    >
      {user.map((user: any, index: number) => {
        const { name, email, phone, website, id } = user;

        return (
          <UserCard
            user={user}
            key={index}
            name={name}
            email={email}
            phone={phone}
            website={website}
            onDelete={handleDelete}
            id={id}
          ></UserCard>
        );
      })}
    </Paper>
  );
}
