import { executeConnection } from "./connection";

interface UserInput {
    username: string;
    age: number;
}

export const root = {
    getAllUsers: async () => {
        const query = "SELECT * FROM UserList";

        const result = await executeConnection(query);

        return result;
    },
    // getUser: ({ id }: any) => users.find((user) => user.id === id),
    createUser: async ({ input }: { input: UserInput }) => {
        const query = `INSERT INTO 'UserList' (name, age) values('${input.username}', '${input.age}')`;

        const result = await executeConnection(query);

        return result;
    }
};
