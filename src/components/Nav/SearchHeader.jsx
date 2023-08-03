import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${value}`);
  };

  useEffect(() => {
    setValue(keyword || "");
  }, [keyword]);
  // params가 변경될 때 마다 검색창 내 value 바꿔주기

  return (
    <header className="w-full p-2 mb-4 flex items-center justify-center relative">
      <Link
        className="absolute inset-y-1/4 left-4 flex items-center cursor-pointer"
        to={`/`}>
        <span className="text-5xl">
          <FaYoutube className="text-brand" />
        </span>
        <span className="text-3xl font-bold ml-1">Youtube</span>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-5/12 rounded-3xl flex items-center justify-between overflow-hidden">
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={handleChange}
          className="p-2 w-full rounded-s-3xl"
        />
        <button className="bg-zinc-600 h-[40px] w-14 flex justify-center items-center">
          <BsSearch className="text-gray-50" />
        </button>
      </form>
    </header>
  );
}
