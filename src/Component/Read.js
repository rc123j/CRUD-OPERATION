import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Read = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://64f38030edfa0459f6c6a218.mockapi.io/crud-youtube').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //delete operation
  function handleDelete(id) {
    axios.delete(`https://64f38030edfa0459f6c6a218.mockapi.io/crud-youtube/${id}`).then(() => {
      getData();
    });
  }

  return (
    <>
      <h1>READ-OPERATION</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => {
            return (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
