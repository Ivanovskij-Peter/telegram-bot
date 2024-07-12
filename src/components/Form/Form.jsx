import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../hooks/useTelegram";
const Form = () => {
  const { tg } = useTelegram();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send data",
    });
  }, [tg]);

  useEffect(() => {
    if (!name || !company) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, name, company]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };
  const onChangeOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="form">
      <h3>Input here your data</h3>
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={onChangeName}
      />
      <input
        className="input"
        type="text"
        placeholder="Company"
        value={company}
        onChange={onChangeCompany}
      />
      <select className="select" value={option} onChange={onChangeOption}>
        <option value="1">Some data</option>
        <option value="1">Some data</option>
      </select>
    </div>
  );
};

export default Form;
