import { useState, useEffect } from "react";
import axios from "axios";
const UseEffectAPIimage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Image grid from fakestore</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
        </div>
        ))}
      </div>
    </div>
  );
};
export default UseEffectAPIimage;