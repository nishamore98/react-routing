import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => setuserdata(res.data.data));
  }, []);

  return (
    <>
      <h3>Home</h3>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>e-mail</th>
        </tr>
        {userdata?.map((item, index) => {
          return (
            <tr className="home-table">
              <td>{item.id}</td>
              <td>
                {item.first_name}
                {item.last_name}
              </td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default Home;
