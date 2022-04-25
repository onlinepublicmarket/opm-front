import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className=" mr-sm-2 input"
        placeholder="Search"
        style={{
          border:"none",
          outline:"none",
          display:"flex",
          height:"34px",
          verticalAlign:"middle",
         // position:"relative",
          bottom:"12px",
          right:"9px",
          borderRadius:"22px",
          width:"700px",
          boxSizing:"border-box",
          padding:"0 18px",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
         paddingBottom:"0px"
      
         }}
      />
      <SearchOutlined  onClick={handleSubmit} style={{ cursor: "pointer",color:"#7CB342" }} />
    </form>
  );
};

export default Search;