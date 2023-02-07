import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  count: 0,
  data: {
    user: {
      isLoggedIn: true,
      userName: "arslan",
      avatar: "arslan",
      favorites: ["python", "js", "java"],
    },
    topResults: {
      amount: 3,
      scores: [22, 33, 44, 55],
    },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "TASK":
      let obj = state.data;
      //   obj.user.userName = "another name";
      //   obj.user.avatar = "another avatar";
      //   obj.user.isLoggedIn = false;
      //   obj.user.favorites = obj.user.favorites.filter((el) => el !== "js");
      delete obj.topResults;
      obj.addInfo = { firstName: "firstname", lastName: "lastName" };
      obj.user.favorites.push("another");
      return { ...state, data: obj };
    default:
      return state;
  }
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("🚀 ~ file: index.jsx:45 ~ UseReducer ~ state", state);

  const handlePlus = () => {
    // setCount(count + 1);
    dispatch({ type: "ADD" });
  };
  const handleReset = () => {
    // setCount(0);
    dispatch({ type: "RESET" });
  };
  const handleMinus = () => {
    // setCount(count - 1);
    dispatch({ type: "SUBTRACT" });
  };
  const handleClick = () => {
    dispatch({ type: "TASK" });
  };
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-bold">Count app</h1>
        <h1 className="text-3xl font-bold">{state.count}</h1>
        <h1 className="text-3xl font-bold capitalize">
          usernam: {state.data.user.userName}
        </h1>
        <h1 className="text-3xl font-bold">
          isLogged in: {state.data.user.isLoggedIn ? "true" : "false"}
        </h1>
        <h1 className="text-3xl font-bold capitalize">
          avatar: {state.data.user.avatar}
        </h1>
        <h1 className="text-3xl font-bold">
          favorites: {state.data.user.favorites.join(", ")}
        </h1>
        <h1 className="text-3xl font-bold">
          Top results:{" "}
          {state.data.topResults ? state.data.topResults.amount : "no results"}
        </h1>

        <button
          onClick={handleClick}
          className="border border-black mt-4 px-4 py-2 rounded hover:bg-green-600 hover:text-white hover:border-white"
        >
          Change
        </button>

        {/* <div className="flex flex-row gap-4 m-4">
          <button
            onClick={handlePlus}
            className="border border-black px-4 py-2 rounded hover:bg-green-600 hover:text-white hover:border-white"
          >
            Plus
          </button>
          <button
            onClick={handleReset}
            className="border border-black px-4 py-2 rounded hover:bg-orange-600 hover:text-white hover:border-white"
          >
            Reset
          </button>
          <button
            onClick={handleMinus}
            className="border border-black px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-white"
          >
            Minus
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UseReducer;
