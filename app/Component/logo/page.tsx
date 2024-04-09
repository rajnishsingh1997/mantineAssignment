"use client";
import { Image } from "@mantine/core";
import React, { useEffect, useState } from "react";

const UserImage = ({ user }) => {

  const { name } = user;
  const [logo, setLogo] = useState("");

  const getUserLogo = async (name: string) => {
    const res = await fetch(
      `https://api.dicebear.com/7.x/initials/svg?seed=${name}`
    );
    const data = res;

    setLogo(data.url);
  };
  useEffect(() => {
    getUserLogo(name);
  }, [user]);

  return (
    <div>
      <Image
        radius="md"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        src={logo}
      />
    </div>
  );
};

export default UserImage;
