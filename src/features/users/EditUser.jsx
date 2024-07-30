import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const existingUser = users.filter((user) => user.id === params.id);
  const { name, description } = existingUser[0];

  const [values, setValues] = useState({
    name,
    description,
  });

  const handleEditUser = () => {
    dispatch(
      editUser({
        id: params.id,
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
          label="E-mail"
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          inputProps={{ type: "description", placeholder: "Your description" }}
        />
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    </>
  );
};

export default EditUser;
