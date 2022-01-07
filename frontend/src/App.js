import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Component />
    </>
  );
}

function Component() {
  var user = `by Dheeraj Ingale 210940320036`;
  let [chat, setChat] = useState("");
  let [list, setList] = useState([]);

  const handleChat = (e) => {
    setChat(e.target.value);
  };

  const send = async () => {
    if (chat == "") {
      alert("Empty");
      return;
    }

    const url = "http://localhost:4000/add-msg";
    const message = { data: chat };

    await axios.post(url, message);
    const newList = [...list, message];
    setList(newList);
    setChat("");
  };

  const Align = (index, item) => {
    if (index % 2 == 0) {
      return <div className="alert alert-secondary text-end">{item.data}</div>;
    } else {
      return (
        <div className="alert alert-secondary text-start">{item.data}</div>
      );
    }
  };

  return (
    <div>
      <div className="bg-dark text-light p-3 mb-2">
        <h1>MyChatApp</h1> {user}
      </div>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg w-100 mb-4"
            type="text"
            value={chat}
            placeholder="Lets chat here..."
            onChange={handleChat}
          />
        </div>
        <div className="col">
          <input
            className="btn btn-lg btn-secondary w-25 mb-4"
            type="button"
            value="Send"
            onClick={send}
          />
        </div>
      </div>

      <div>
        {list.map((index, item) => (
          <div key={index}>
            {Align(index, item)}
            <Align />
          </div>
        ))}
      </div>
    </div>
  );
}
