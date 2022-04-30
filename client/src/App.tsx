import { Col, Row } from "antd";

import { UserTableContainer } from "./containers/UserTableContainer";
import { AddUserFormContainer } from "./containers/AddUserFormContainer";
import { UsersAgeChartContainer } from "./containers/UsersAgeChart";

function App() {
    return (
        <Row>
            <Col>
                <UsersAgeChartContainer />
            </Col>
            <Col span={24}>
                <AddUserFormContainer />
            </Col>
            <Col span={24}>
                <UserTableContainer />
            </Col>
        </Row>
    );
}

export default App;
