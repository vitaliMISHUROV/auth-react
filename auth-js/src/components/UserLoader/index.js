import React, { useState, useEffect } from "react";
import { useData } from "../../hooks";
import * as API from "../../api";



const UserLoader = () => {
  const { data: users, isLoading, error } = useData(API.getUsers);
  

  const userList = users.map((user) => (
    <article key={user.id}>
      <h2>{user.name}</h2>
      email:<a href={`mailto:${user.email}`}><h1>{user.email}</h1></a>
    </article>
  ));

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>Error</div>}
      {users.length > 0 && userList}
    </div>
  );
};

export default UserLoader;
