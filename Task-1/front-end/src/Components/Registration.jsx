import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [userdata, setuserdata] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    userdata[event.target.name] = event.target.value;
    setuserdata(userdata);
  };
  console.log(userdata);

  const handleSubmit = () => {
    console.log(userdata);

    if (
      userdata.Password === userdata.Confirmpassword &&
      userdata.Phone.length === 10
    ) {
      axios
        .post("http://localhost:8000/register", userdata)
        .then((r) => {
          console.log(r.data);
        })
        .catch((e) => {
          console.log(e);
        });

      navigate("/users");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register here !
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={"8"}
        >
          <Stack spacing={3}>
            <Box w="50vh">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="Name"
                  value={userdata.Name}
                />
              </FormControl>
            </Box>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                name="Age"
                value={userdata.Age}
              />
            </FormControl>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                name="Gender"
                value={userdata.Gender}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                name="Phone"
                value={userdata.Phone}
              />
            </FormControl>
            <FormControl id="country" isRequired>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                name="Country"
                value={userdata.Country}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
