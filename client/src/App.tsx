import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_USERS } from "./query/uesr";
import "./App.css";
import { CREATE_USER } from "./mutations/uesr";

interface User {
    id?: number;
    username: string;
    age?: number;
}

function App() {
    const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
    const [newUser] = useMutation(CREATE_USER);

    const [users, setUsers] = useState<Array<User>>([]);
    const [form, setForm] = useState<User>({ username: "", age: undefined });

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
        if (error) alert(error);
    }, [data, error, loading]);

    const addUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await newUser({ variables: form });
        refetch();
    };

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="App">
            <form>
                Name
                <input
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    type="text"
                />
                Age
                <input value={form.age} onChange={(e) => setForm({ ...form, age: +e.target.value })} />
                <button onClick={addUser}>Create</button>
                <button>Reset</button>
            </form>

            <div>
                <ul>
                    {users.map((el) => (
                        <li key={el.id}>
                            ID: {el.id} Name: {el.username} Age: {el.age ?? "unknown"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

