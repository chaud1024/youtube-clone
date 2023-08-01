import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
    navigate(`/search/${value}`);
  };

  return (
    <div>
      <h1>Youtube</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={handleChange}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}
