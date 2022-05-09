import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebaseinit";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const email = user?.email;
      const url = `https://whispering-chamber-57446.herokuapp.com/myItem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getItem();
  }, [user]);
  return (
    <div>
      <h1>Your order:{myItems.length} </h1>
    </div>
  );
};

export default MyItems;
