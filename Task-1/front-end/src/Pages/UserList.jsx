import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const UserList = () => {
  const [data, getdata] = useState([]);
  const fetchdata = async () => {
    await axios
      .get("http://localhost:8000/register", {
        method: "GET",
      })
      .then((r) => {
        getdata(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>Phone</Th>
              <Th>Country</Th>
            </Tr>
          </Thead>
          {data &&
            data.map((e) => {
              return (
                <Tbody>
                  <Tr>
                    <Td>{e.id}</Td>
                    <Td>{e.Name}</Td>
                    <Td>{e.Age}</Td>
                    <Td>{e.Gender}</Td>
                    <Td>{e.Phone}</Td>
                    <Td>{e.Country}</Td>
                  </Tr>
                </Tbody>
              );
            })}
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
