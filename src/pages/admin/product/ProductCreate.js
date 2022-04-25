import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";


const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Arena Blanco","Ayala","Baliwasan","Baluno","Boalan","Bolong","Buenavista","Bunguiao","Busay (Sacol Island)","Cabaluay","Cabatangan","Cacao","Calabasa","Calarian","Camino Nuevo","Campo Islam","Canelar","Capisan","Cawit","Culianan","Curuan","Dita","Divisoria","Dulian (Upper Bunguiao)","Dulian (Upper Pasonanca)","Guisao","Guiwan","Kasanyangan","La Paz","Labuan","Lamisahan","Landang Gua","Landang Laum","Lanzones","Lapakan","Latuan (Curuan)","Licomo","Limaong","Limpapa","Lubigan","Lumayang","Lumbangan","Lunzuran","Maasin","Malagutay","Mampang","Manalipa","Mangusu","Manicahan","Mariki","Mercedes","Muti","Pamucutan","Pangapuyan","Panubigan","Pasilmanta (Sacol Island)","Pasobolong","Pasonanca","Patalon","Putik","Quiniput","Recodo","Rio Hondo","Salaan","San Jose Cawa-cawa","San Jose Gusu","San Ramon","San Roque","Sangali","Santa Barbara","Santa Catalina","Santa Maria","Santo Niño","Sibulao (Caruan)","Sinubung","Sinunoc","Tagasilay","Taguiti","Talabaan","Talisayan","Talon-talon","Tetuan","Tictapul","Tigbalabag","Tigtabon","Tolosa","Tugbungan","Tulungatung","Tumalutab","Tumitus","Victoria","Vitali","Zambowood","Zone I (Poblacion)","Zone II (Poblacion)","Zone III (Poblacion)","Zone IV (Poblacion)"],
  brands: ["Lady's Choice", "Magnolia", "Contadina", "Kikkoman", "Knorr","Del Monte","Silver Swan","Minola","NA","No Brand"],
  color: "",
  brand: "",
  seller:"",
  isSeller:"",
};

const ProductCreate = ({history}) => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        setLoading(false); //newly added
        toast.success(`"${res.data.title}" is created`);
        // window.location.reload();
        history.push("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCatagoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
    });
    setShowSub(true);
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
            <h4>Product create</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subOptions={subOptions}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;