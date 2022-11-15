import React, {useState} from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  };

  const onButtonClickHandler = () => {
    console.log("search: ", search);
  }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Search Pokemon" onChange={onChangeHandler}/>
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler} >Buscar</button>
      </div>
    </div>
  );
}

export default Searchbar;