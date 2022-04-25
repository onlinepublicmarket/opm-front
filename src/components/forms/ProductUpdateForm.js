import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
    seller,
   
    isSeller
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
        
          value={title}
          onChange={handleChange}
          style={{  height: "45px",
          width: "100%",
          outline:" none",
          fontSize: "16px",
          borderRadius: "5px",
          paddingLeft: "15px",
          border: "1px solid #ccc",
         
          transition: "all 0.3s ease"}}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
      
          value={description}
          onChange={handleChange}
          style={{  height: "45px",
          width: "100%",
          outline:" none",
          fontSize: "16px",
          borderRadius: "5px",
          paddingLeft: "15px",
          border: "1px solid #ccc",
         
          transition: "all 0.3s ease"}}
        />
      </div>
      <div className="form-group">
        <label>Name of Shop</label>
        <input
          type="text"
          name="seller"
         
          value={seller}
          onChange={handleChange}
          style={{  height: "45px",
          width: "100%",
          outline:" none",
          fontSize: "16px",
          borderRadius: "5px",
          paddingLeft: "15px",
          border: "1px solid #ccc",
         
          transition: "all 0.3s ease"}}
        />
      </div>


      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
         
          value={price}
          onChange={handleChange}
          style={{  height: "45px",
          width: "100%",
          outline:" none",
          fontSize: "16px",
          borderRadius: "5px",
          paddingLeft: "15px",
          border: "1px solid #ccc",
         
          transition: "all 0.3s ease"}}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          
          value={quantity}
          onChange={handleChange}
          style={{  height: "45px",
          width: "100%",
          outline:" none",
          fontSize: "16px",
          borderRadius: "5px",
          paddingLeft: "15px",
          border: "1px solid #ccc",
         
          transition: "all 0.3s ease"}}
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>
      <div className="form-group">
        <label>Seller</label>
        <select
          name="isSeller"
          value={isSeller === "Yes" ? "Yes" : "No"}
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <br />
      <button className="btn btn-outline-success">Save</button>
    </form>
  );
};

export default ProductUpdateForm;