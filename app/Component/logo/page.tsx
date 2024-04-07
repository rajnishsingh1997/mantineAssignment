"use client";
import { Image } from "@mantine/core";
import React, { useEffect, useState } from "react";

const UserImage = ({name}) => {
  const [logo, setLogo] = useState("");

  const getUserLogo = async (name: string) => {
    const res = await fetch(
      `https://api.dicebear.com/7.x/initials/svg?seed=${name}`
    );
    const data = res;
    // console.log(data.url);
    setLogo(data.url);
  };
  useEffect(() => {
    getUserLogo(name);
  }, []);

  console.log(logo);

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
