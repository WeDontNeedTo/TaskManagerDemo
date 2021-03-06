import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import TaskManagerService from "../../services/TaskManagerService";

const AddTaskForm = ({ addTask }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [user, setUser] = useState("all");
  const [usersdata, setUserdata] = useState([]);

  const API = new TaskManagerService();

  useEffect(() => {
    return async () => {
      await API.getUsers().then((res) => {
        setUserdata(res.data);
      });
    };
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (user === "all" || value.length < 1) {
      return;
    }
    if (value.trim()) {
      addTask({
        id: Date.now(),
        title: value,
        contractor_id: +user,
        status: 1,
      });
      setValue("");
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={handleShow}
        style={{ margin: "4px" }}
      >
        Новая задача
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Новая задача</Modal.Title>
        </Modal.Header>
        <Modal.Body>Пожалуйста, введите название задачи</Modal.Body>
        <form onSubmit={handlerSubmit}>
          <input
            className="form-control"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="...."
            style={{ width: "80%", margin: "6px" }}
          />
          <Modal.Body>Пожалуйста, выберите исполнителя</Modal.Body>
          <select
            className="form-control"
            style={{ width: "80%", margin: "6px" }}
            onChange={(event) => setUser(event.target.value)}
          >
            <option value={"all"}>Все исполнители</option>
            {usersdata.map((i) => {
              return (
                <option key={i.id} value={i.id}>
                  {i.last_name} {i.first_name}
                </option>
              );
            })}
          </select>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="outline-success" type="submit">
              Сохранить
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskForm;
