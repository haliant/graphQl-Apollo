import { Button, Card, Col, Form, Input, InputNumber, Row } from "antd";
import { useMutation, useQuery } from "@apollo/client";

import { CREATE_USER } from "../mutations/user";
import { GET_ALL_USERS } from "../query/user";
import { useForm } from "antd/lib/form/Form";

export const AddUserFormContainer = () => {
    const [form] = useForm();
    const [newUser] = useMutation(CREATE_USER);
    const { refetch } = useQuery(GET_ALL_USERS);

    const addUser = async (data: FormData) => {
        await newUser({ variables: { input: data } });

        form.resetFields();
        refetch();
    };

    return (
        <Card bordered={false}>
            <Form form={form} onFinish={addUser} layout="horizontal">
                <Row gutter={24}>
                    <Col flex="250px">
                        <Form.Item name="username" label="Username">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col flex="150px">
                        <Form.Item name="age" label="Age">
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Row gutter={16}>
                            <Col>
                                <Button htmlType="submit">Submit</Button>
                            </Col>
                            <Col>
                                <Button htmlType="reset">Reset</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};
