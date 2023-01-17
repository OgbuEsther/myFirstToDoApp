import React from "react";
import styled from "styled-components";
import pic from "./TodoAssests/clock5.png";
import { useNavigate } from "react-router-dom";

const TodoHomeScreen = () => {
  const [name, setName] = React.useState("");

  const navigate = useNavigate();
  //   const [nameData, setNameData] = React.useState("");

  const addUser = () => {
    // setNameData(name);
    window.localStorage.setItem("codelabNames", JSON.stringify(name));
    navigate("/enterinfo");
  };

  //   window.localStorage.setItem("todo", JSON.stringify(name));
  return (
    <div>
      <Container>
        <ImageHold>
          <img src={pic} alt="" />
        </ImageHold>
        <h1>Welcome to my planner</h1>
        <p>Please fill in your name to start creating tasks</p>

        <InputField
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your fullName"
        />

        {name !== "" ? (
          <Button cp="pointer" onClick={addUser} bg="black">
            Next
          </Button>
        ) : (
          <Button cp="not-allowed" bg="silver">
            Next
          </Button>
        )}
      </Container>
    </div>
  );
};

export default TodoHomeScreen;

const ImageHold = styled.div`
  width: 150px;
  height: 150px;
  /* background-color: blue; */
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Button = styled.button<{ bg: string; cp: string }>`
  height: 50px;
  width: 150px;
  margin-top: 30px;
  border: none;
  outline: none;
  background-color: ${(props) => props.bg};
  color: white;
  transition: all ease-in-out 400ms;
  border-radius: 10px;
  cursor: ${(props) => props.cp};

  font-size: 20px;
  font-weight: bold;
  :hover {
    background-color: darkgray;

    color: black;
    transform: scale(0.95);
  }
`;

const InputField = styled.input`
  height: 50px;
  width: 400px;
  border: 1px solid gray;
  padding-left: 10px;
  border-radius: 5px;
  outline-color: skyblue;
  transition: all ease-in-out 400ms;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    margin: 0;
  }
`;
