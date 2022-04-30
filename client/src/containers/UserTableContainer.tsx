import { useQuery } from "@apollo/client";
import { Card, Table } from "antd";
import { GET_ALL_USERS } from "../query/user";

export interface User {
    id: number;
    username: string;
    age: number;
}

export const UserTableContainer = () => {
    const { data, loading } = useQuery(GET_ALL_USERS);

    const columns = [
        {
            title: "ID",
            dataIndex: "id"
        },
        {
            title: "Username",
            dataIndex: "username"
        },
        {
            title: "Age",
            dataIndex: "age"
        }
    ];
    return (
        <Card bordered={false}>
            <Table
                rowKey={(record: User) => record.id}
                dataSource={data?.getAllUsers ?? []}
                columns={columns}
                loading={loading}
            />
        </Card>
    );
};
