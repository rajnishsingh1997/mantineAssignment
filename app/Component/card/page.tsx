"use client";
import { Anchor, Button, Card, Flex, Image, Text } from "@mantine/core";

import UserImage from "../logo/page";
import { useState } from "react";

const UserCard = ({ name, email, phone, website, onDelete, id }) => {
  const [followUser, setFollowUser] = useState(false);

  const handleFollowUser = (id: number) => {
    setFollowUser(!followUser);
  };
  return (
    <Card
      shadow="xl"
      padding="md"
      style={{
        width: "400px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <UserImage name={name} />
      <Text size="md" fw={500} style={{ marginTop: "10px" }}>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {name}
          {followUser && (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-star"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </span>
          )}
        </Flex>
      </Text>
      <Flex
        direction="column"
        gap={6}
        align="start"
        style={{ marginTop: "10px", width: "100%" }}
      >
        <Anchor
          size="sm"
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`mailto:${email}`}
          target="_blank"
        >
          <span>@</span> {email}
        </Anchor>
        <Anchor
          size="sm"
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`tel:${phone}`}
          target="_blank"
        >
          {phone}
        </Anchor>
        <Anchor
          size="sm"
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`https://${website}`}
          target="_blank"
        >
          {website}
        </Anchor>
      </Flex>
      <Flex
        gap="sm"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "20px" , marginLeft:'-70px' }}
      >
        <Button onClick={() => handleFollowUser(id)} style={{ width: "150px" }}>
          <Flex gap="xs" align="center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
              >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
            <Text style={{ marginLeft: "5px" }}>
              {followUser ? "Unfollow" : "Follow"}
            </Text>
          </Flex>
        </Button>
        <Button onClick={() => onDelete(id)} style={{ width: "150px" }}>
          <Flex gap="xs" align="center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
              >
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
            <Text style={{ marginLeft: "5px" }}>Delete</Text>
          </Flex>
        </Button>
      </Flex>
    </Card>
  );
};

export default UserCard;
