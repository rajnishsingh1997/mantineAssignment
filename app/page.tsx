"use client";
import { useEffect, useState } from "react";
import UserCard from "./Component/card/page";
import LoadingIcons from "react-loading-icons";
import { BarLoader } from "react-spinners";

export default function HomePage() {
  const [user, setUserDetail] = useState();

  const [loading, setLoading] = useState(true); // Define the loading state

  const fetchData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUserDetail(data);
    setLoading(false);
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "10px",
        gridAutoFlow: "row",
        overflow: "hidden",
      }}
    >
      {user.map((user: any, index: number) => {
        const { name, email, phone, website } = user;

        return (
          <UserCard
            key={index}
            name={name}
            email={email}
            phone={phone}
            website={website}
          ></UserCard>
        );
      })}
    </div>
  );
}
