import React from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
interface iData {
  id: number;
  task: string;
  status: boolean;
  description: string;
  start: string;
  end: string;
}
const EnterInfo = () => {
  const [todo, setTodo] = React.useState("");
  const [edit, setEdit] = React.useState(0);
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [desc, setDesc] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [done1, setDone1] = React.useState<any>(-1);
  const [details, setDetails] = React.useState("");
  const [data, setData] = React.useState<iData[]>([
    
  ]);

  const Toggle = () => {
    setDesc(!desc);
  };

  const DoneToggle = (id: any) => {
    setDone(!done);
    setDone1(id);
  };
  // const det = () => {
  //   setDetails(details);
  // };
  const changeState = (id: number) => {
    setEdit(id);
  };
  const rand = Math.floor(Math.random() * 3000) + 4000;

  //sorting

  const sortTask = (x: any) => {
    return (a: any, b: any) => {
      if (a[x] < b[x]) {
        return a[x];
      } else if (a[x] > b[x]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  const addtasks = () => {
    setData((prev) =>
      [
        ...prev,
        {
          id: rand,
          task: todo,
          status: false,
          description: details,
          start: start,
          end: end,
        },
      ].sort(sortTask("id"))
    );
  };

  const removeTasks = (id: number) => {
    let myFilter = data.filter((el) => el.id !== id);
    setData(myFilter);
  };
  const localData = JSON.parse(
    window.localStorage.getItem("codelabNames") || ""
  );
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome {localData.toUpperCase()}</h1>

        <p>let's create the tasks for today</p>
        <br />
        <br />

        <InputField
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter your tasks"
        />

        <TimeHold>
          <p>
            Please Enter The Time You Wish <br /> to Start and End Your Task
          </p>
          <Input1
            onChange={(e) => {
              setStart(e.target.value);
            }}
            placeholder="Please Enter The Time to Wish to Start Your Task"
            type="time"
          />
          <Input2
            onChange={(e) => {
              setEnd(e.target.value);
            }}
            placeholder="Please Enter The Time to Wish to End Your Task"
            type="time"
          />
        </TimeHold>
        {/* <input type="time" />
        <input type="date" /> */}
        {/* <Buttons onClick={Toggle}>write more</Buttons> */}

        {todo !== "" ? <Buttons onClick={Toggle}>write more</Buttons> : null}
        {desc ? (
          <TextArea
            onChange={(e) => {
              // console.log(e.target.value);
              setDetails(e.target.value);
            }}
            placeholder="Enter details of your task"
          />
        ) : null}

        {todo !== "" && details !== "" && start !== "" && end !== "" ? (
          <Button onClick={addtasks} cp="pointer" bg="black">
            Submit
          </Button>
        ) : (
          <Button cp="not-allowed" bg="silver">
            Submit
          </Button>
        )}

        <h3>All Tasks</h3>

        <CardHold>
          {data?.map((props) => (
            <Card key={props.id}>
              {props.id === edit ? (
                <input type="text" defaultValue={props.task} />
              ) : (
                <Title>Title : {props.task}</Title>
              )}
              <Desc>
                <span>Description:</span> {props.description}
              </Desc>
              <Start> Your Start Time : {props.start}</Start>
              <End>Your End Time : {props.end}</End>
              <BtbHold>
                <button
                  onClick={() => {
                    changeState(props.id);
                  }}
                >
                  Edit
                </button>
                {props.id !== done1 ? (
                  <Btn
                    onClick={() => {
                      DoneToggle(props.id);
                    }}
                  >
                    Done
                  </Btn>
                ) : null}
                {
                  done ? (
                    <P> This Task has Been Completed ....congratulations </P>
                  ) : null
                  // <P>
                  //   This Task has been completed
                  //   <BsCheck />
                  // </P>
                }
                <button
                  onClick={() => {
                    removeTasks(props.id);
                  }}
                >
                  Delete
                </button>
              </BtbHold>
            </Card>
          ))}
        </CardHold>
      </Container>
    </div>
  );
};

export default EnterInfo;

const Input1 = styled.input`
  width: 300px;
  height: 50px;
  background-color: white;
  border: 1px solid darkgray;
  margin-bottom: 20px;
  outline-color: black;
  border-radius: 5px;
  color: black;
  font-weight: 600;
`;
const Input2 = styled.input`
  width: 300px;
  height: 50px;
  background-color: white;
  border: none;
  outline-color: black;
  border-radius: 5px;
  color: black;
  font-weight: 600;
`;

const P = styled.h4`
  font-weight: bold;
  display: flex;
  align-items: center;

  /* position: absolute; */
`;

const Btn = styled.button`
  width: 90px;
  height: 40px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px;
  /* position: relative; */
  :hover {
    background-color: purple;
    color: white;
  }
`;

const End = styled.div``;

const Start = styled.div``;

const TimeHold = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  input {
  }
`;

const Desc = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
  span {
    font-weight: 700;
    color: black;
  }
`;

const Buttons = styled.button`
  margin-top: 20px;
  width: 90px;
  height: 30px;
  background-color: black;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  resize: none;

  outline-color: black;
`;

const CardHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Card = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 300px;
  background-color: white;

  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 10px;
  padding: 30px;

  @media screen and (max-width: 500px) {
    width: 270px;
    padding: 20px;
    margin-left: 10px;
  }
`;

const BtbHold = styled.div`
  button {
    width: 90px;
    height: 40px;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 10px;
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

  @media screen and (max-width: 500px) {
    width: 300px;
    padding: 0;
    margin-left: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */

  // background-image: linear-gradient(
  //   0deg,
  //   rgba(238, 156, 167, 1) 36%,
  //   rgba(212, 20, 90, 1) 93%
  // );

  h1 {
    margin: 0;
  }

  p {
    color: white;
    font-weight: 900;
  }
`;
