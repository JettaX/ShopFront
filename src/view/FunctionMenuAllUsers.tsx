import {useEffect, useState} from "react";
import {getUsers} from "../api/UserApi";
import {defaultUser} from "../interfaces";
import {FunctionMenuAllUsersCard} from "./FunctionMenuAllUsersCard";

export function FunctionMenuAllUsers() {
    const [users, setUsers] = useState(Array.of(defaultUser));
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
            if (!isLoad) {
                getUsers().then(users => {
                    setUsers(users.data);
                    setLoad(true);
                })
            }
        }, [isLoad]
    );
    return (
        <div className="d-flex w-100 justify-content-start">
            <ol className="d-flex">
                {
                    users.map(user => <FunctionMenuAllUsersCard user={user}></FunctionMenuAllUsersCard>)
                }

            </ol>
        </div>
    )
}