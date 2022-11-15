import React from "react";

const Searchbar = () => {
  let search = "";
  const onChangeHandler = (e) => {
    console.log("pokemon: ",e.target.value);
    search = e.target.value;
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Search Pokemon" onChange={onChangeHandler}/>
        {search}
      </div>
    </div>
  );
}

export default Searchbar;