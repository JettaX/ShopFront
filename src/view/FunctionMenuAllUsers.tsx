import {useEffect, useState} from "react";
import {apiGetUsers} from "../api/UserApi";
import {defaultUser} from "../interfaces";
import {FunctionMenuAllUsersCard} from "./FunctionMenuAllUsersCard";

export function FunctionMenuAllUsers() {
    const [users, setUsers] = useState(Array.of(defaultUser));
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
            if (!isLoad) {
                apiGetUsers().then(users => {
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
                    users.map(user => <FunctionMenuAllUsersCard key={user.id} user={user}></FunctionMenuAllUsersCard>)
                }

            </ol>
        </div>
    )
}