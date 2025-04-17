import { useState } from "react";

import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";

const brands = [
  {
    id: 1,
    image: brand1,
  },
  {
    id: 2,
    image: brand2,
  },
  {
    id: 3,
    image: brand3,
  },
  {
    id: 4,
    image: brand4,
  },
  {
    id: 5,
    image: brand5,
  },
];
export default function BrandSelection() {
    const [selected, setSelected] = useState([1]); // default selected is Apple

    const handleToggle = (id) => {
      if (selected.includes(id)) {
        setSelected(selected.filter((item) => item !== id));
      } else {
        setSelected([...selected, id]);
      }
    };
      
      return (
        <div style={{ display: "flex", gap: "16px", }}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              style={{
                position: "relative",
                width: "100%",
                height: "113px",
                border: selected.includes(brand.id)
                  ? "1px solid #2970CC"
                  : "1px solid #BBC5CD",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
              onClick={() => handleToggle(brand.id)}
            >
              <img
                src={brand.image}
                alt={brand.name}
           
              />
              <input
                type="checkbox"
                checked={selected.includes(brand.id)}
                onChange={() => handleToggle(brand.id)}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  borderRadius: "12px"
                }}
              />
            </div>
          ))}
        </div>
      );
    }