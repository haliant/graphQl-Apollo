import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import schema from "./schema";

const app: Express = express();
const port = 5050;

const users = [
  { id: 1, username: "user1" },
  { id: 2, username: "user2" },
  { id: 3, username: "user3" },
];

interface User {
  id: number;
  username: string;
  age?: number;
}
interface UserInput {
  username: string;
  age?: number;
}

const createUser = (input: UserInput) => {
  const id = Date.now();
  const user = { id, ...input };
  return user;
};

const root = {
  getAllUsers: () => users,
  getUser: ({ id }: any) => users.find((user) => user.id === id),
  createUser: ({ input }: { input: UserInput }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
