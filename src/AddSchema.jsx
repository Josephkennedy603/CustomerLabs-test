import React, { useState } from "react";
import "./AddSchema.css";
import CloseIcon from "./icons/close.png";
import axios from "axios";

const AddSchema = () => {
  const [segmentName, setSegmentName] = useState("");

  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [openNew, setOpenNew] = useState(false);

  const [options, setOptions] = useState([
    {
      label: "First Name",
      value: "first_name",
    },
    {
      label: "Last Name",
      value: "last_name",
    },
    {
      label: "Gender",
      value: "gender",
    },
    {
      label: "Age",
      value: "age",
    },
    {
      label: "Account Name",
      value: "account_name",
    },
    {
      label: "City",
      value: "city",
    },
    {
      label: "State",
      value: "state",
    },
  ]);

  console.log(selectedSchemas);

  const save = async () => {
    try {
      const res = await axios.post(
        "https://webhook.site/26c0c791-a4ae-44c3-9de0-d028d3905be5",
        { segment_name: segmentName, schema: selectedSchemas }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="addSchema">
      <div className="header">
        <img src="https://img.icons8.com/metro/26/ffffff/back.png" alt="back" />
        <h3>Save Segment</h3>
      </div>
      <div className="section">
        <p className="fontweight-bold">Enter the name of the segment </p>
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="Name of the segment"
          onChange={(e) => setSegmentName(e.target.value)}
        />

        <p className="fontweight-bold">
          To save your segment, you need to add the schemas to build the query{" "}
        </p>

        <div className="Traits">
          <img
            className="green"
            src="https://i.pinimg.com/originals/be/c9/b9/bec9b9ae9b5262dc0d02a2674a55ea41.png"
            alt=""
          />
          <div className="fontweight-bold">User Traits </div>
          <img
            className="red"
            src="https://static.vecteezy.com/system/resources/thumbnails/014/615/035/small_2x/red-basic-shape-for-new-product-stickers-special-offer-label-png.png"
            alt=""
          />
          <div className="fontweight-bold">Group Traits</div>
        </div>

        <div className="point"></div>

        <div className="selected-schemes">
          {selectedSchemas.map((schema) => (
            <div>
              <p>{schema.label}</p>{" "}
              <img
                onClick={() => {
                  let updatedSelectedSchemas = selectedSchemas.filter(
                    (sel) => sel.value !== schema.value
                  );
                  setSelectedSchemas(updatedSelectedSchemas);
                  setOptions([
                    ...options,
                    { label: schema.label, value: schema.value },
                  ]);
                }}
                src={CloseIcon}
                alt=""
              />
            </div>
          ))}
        </div>

        {openNew && (
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedSchemas([
                ...selectedSchemas,
                { label: e.target.value, value: e.target.value },
              ]);
              let updatedOptions = options?.filter(
                (opt) => opt?.value !== e.target.value
              );
              setOptions(updatedOptions);
              setOpenNew(false);
            }}
          >
            <option selected disabled>
              {" "}
              Add schema to segment{" "}
            </option>
            {options.map((opt) => (
              <option value={opt?.value}>{opt?.label}</option>
            ))}
          </select>
        )}

        <p
          style={{ color: "#41b494", cursor: "pointer" }}
          className="fontweight-bold"
          onClick={() => setOpenNew(true)}
        >
          + Add new Schema
        </p>
      </div>

      <div className="Save-button">
        <button
          style={{ color: "white", background: "#41b494" }}
          onClick={() => save()}
          className="fontweight-bold"
        >
          Save the Segment
        </button>{" "}
        <button
          style={{ color: "red", background: "white" }}
          className="fontweight-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddSchema;
