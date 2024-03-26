import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UserView = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>User Data</h2>
      {isLoading && <h2>user Data is loading ...</h2>}
      {error && <p>{error}</p>}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 m-10">
        {users &&
          users?.map((user) => {
            const { id, name, username, email, phone } = user;
            return (
              <div key={id} className="bg-orange-400 text-white p-10 rounded-lg ">
                <h1>{name}</h1>
                <p>{username}</p>
                <p>{email}</p>
                <span>{phone}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserView;
