import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Arena Blanco","Ayala","Baliwasan","Baluno","Boalan","Bolong","Buenavista","Bunguiao","Busay (Sacol Island)","Cabaluay","Cabatangan","Cacao","Calabasa","Calarian","Camino Nuevo","Campo Islam","Canelar","Capisan","Cawit","Culianan","Curuan","Dita","Divisoria","Dulian (Upper Bunguiao)","Dulian (Upper Pasonanca)","Guisao","Guiwan","Kasanyangan","La Paz","Labuan","Lamisahan","Landang Gua","Landang Laum","Lanzones","Lapakan","Latuan (Curuan)","Licomo","Limaong","Limpapa","Lubigan","Lumayang","Lumbangan","Lunzuran","Maasin","Malagutay","Mampang","Manalipa","Mangusu","Manicahan","Mariki","Mercedes","Muti","Pamucutan","Pangapuyan","Panubigan","Pasilmanta (Sacol Island)","Pasobolong","Pasonanca","Patalon","Putik","Quiniput","Recodo","Rio Hondo","Salaan","San Jose Cawa-cawa","San Jose Gusu","San Ramon","San Roque","Sangali","Santa Barbara","Santa Catalina","Santa Maria","Santo Niño","Sibulao (Caruan)","Sinubung","Sinunoc","Tagasilay","Taguiti","Talabaan","Talisayan","Talon-talon","Tetuan","Tictapul","Tigbalabag","Tigtabon","Tolosa","Tugbungan","Tulungatung","Tumalutab","Tumitus","Victoria","Vitali","Zambowood","Zone I (Poblacion)","Zone II (Poblacion)","Zone III (Poblacion)","Zone IV (Poblacion)"],
  brands: ["Lady's Choice", "Magnolia", "Contadina", "Kikkoman", "Knorr","Del Monte","Silver Swan"],
  color: "",
  brand: "",
  seller:"",
  isSeller:"",
};
const ProductUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // console.log("single product", p);
      // 1 load single proudct
      setValues({ ...values, ...p.data });
      // 2 load single product category subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subs
      });
      // 3 prepare array of sub ids to show as default sub values in antd Select
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("ARR", arr);
      setArrayOfSubs((prev) => arr); // required for ant design select to work
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
      setCategories(c.data);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    values.subs = arrayOfSubs;
    values.category = selectedCategory ? selectedCategory : values.category;

    updateProduct(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });

    console.log("EXISTING CATEGORY values.category", values.category);

    // if user clicks back to the original category
    // show its sub categories in default
    if (values.category._id === e.target.value) {
      loadProduct();
    }
    // clear old sub category ids
    setArrayOfSubs([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Product update</h4>
          )}

          {/* {JSON.stringify(values)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            subOptions={subOptions}
            arrayOfSubs={arrayOfSubs}
            setArrayOfSubs={setArrayOfSubs}
            selectedCategory={selectedCategory}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;