import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        description: values.description,
      })
    );
    setValues({ name: "", description: "" });
    navigate("/");
  };

  return (
    <>
      <div className="mt-10 max-w-xl mx-auto">
        <TextField
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: "text", placeholder: "Your Name" }}
        />
        <br />
        <TextField
          label="Description"
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          inputProps={{ type: "description", placeholder: "Your description" }}
        />
        <Button onClick={handleAddUser}>Submit</Button>
      </div>
    </>
  );
};

export default AddUser;
