import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import schema from "./schema";
import { root } from "./rootValue";

const app: Express = express();
const port = 5050;

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema,
        rootValue: root
    })
);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
