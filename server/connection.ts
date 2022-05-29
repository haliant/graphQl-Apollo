export const mysql = require("mysql");

export const connection = mysql.createConnection({
    host: "localhost",
    port: "3310",
    user: "root",
    database: "UserList"
});

export const startCb = (err: any) => {
    if (err) console.log(err);
    console.log("Run");
};

export const endCb = (err: any) => {
    if (err) console.log(err);
    console.log("Stop");
};

export const executeConnection = async (query: string) => {
    connection.connect(startCb);

    const promise = await new Promise((resolve, rej) => {
        connection.query(query, (err: Error, res: Response) => {
            resolve(res);
        });
    });

    connection.end(endCb);
    return promise;
};
