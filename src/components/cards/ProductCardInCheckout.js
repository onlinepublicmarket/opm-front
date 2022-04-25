import React from "react";
import ModalImage from "react-modal-image-responsive";
import subs from "../../assets/images/subs.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ProductCardInCheckout = ({ p }) => {
  const colors = ["Arena Blanco","Ayala","Baliwasan","Baluno","Boalan","Bolong","Buenavista","Bunguiao","Busay (Sacol Island)","Cabaluay","Cabatangan","Cacao","Calabasa","Calarian","Camino Nuevo","Campo Islam","Canelar","Capisan","Cawit","Culianan","Curuan","Dita","Divisoria","Dulian (Upper Bunguiao)","Dulian (Upper Pasonanca)","Guisao","Guiwan","Kasanyangan","La Paz","Labuan","Lamisahan","Landang Gua","Landang Laum","Lanzones","Lapakan","Latuan (Curuan)","Licomo","Limaong","Limpapa","Lubigan","Lumayang","Lumbangan","Lunzuran","Maasin","Malagutay","Mampang","Manalipa","Mangusu","Manicahan","Mariki","Mercedes","Muti","Pamucutan","Pangapuyan","Panubigan","Pasilmanta (Sacol Island)","Pasobolong","Pasonanca","Patalon","Putik","Quiniput","Recodo","Rio Hondo","Salaan","San Jose Cawa-cawa","San Jose Gusu","San Ramon","San Roque","Sangali","Santa Barbara","Santa Catalina","Santa Maria","Santo Niño","Sibulao (Caruan)","Sinubung","Sinunoc","Tagasilay","Taguiti","Talabaan","Talisayan","Talon-talon","Tetuan","Tictapul","Tigbalabag","Tigtabon","Tolosa","Tugbungan","Tulungatung","Tumalutab","Tumitus","Victoria","Vitali","Zambowood","Zone I (Poblacion)","Zone II (Poblacion)","Zone III (Poblacion)","Zone IV (Poblacion)"];
  let dispatch = useDispatch();

  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={subs} large={subs} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>₱{p.price}</td>
        <td>{p.brand}</td>
        <td>
         {p.color}
        </td>
        <td className="text-center">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;