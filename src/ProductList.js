import React from "react";
import ProductCart from "./ProductCart";

const ProductList = () => {
  return (
    <div className="productList">
      <ProductCart
        id='1'
        imgUrl="https://m.media-amazon.com/images/I/71tT8J5cKuL._AC_UY218_.jpg"
        title="New Apple iPhone 12 Mini (128GB) - White"
        price='99999'
        numRating='3323'
      />
      <ProductCart
        id='2'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/71%2BLFEM0A5L._SL1500_.jpg"
        title="ASUS ZenBook 13 (2020) Intel Core i5-1135G7 11th Gen 13.3-inch FHD Thin and Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/MS Office 2019/Intel Iris Xᵉ Graphics/Lilac Mist/1.11 kg), UX325EA-EG501TS"
        price='76490'
        numRating='227'
      />
      <ProductCart
        id='3'
        imgUrl="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
        price='3899'
        numRating='8993'
      />
      <ProductCart
        id='4'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/71T-1NKFHAL._SL1500_.jpg"
        title="Gigabyte GeForce GV-N710D3-2GL 2GB PCI-Express Graphics Card (Black)"
        price='4999'
        numRating='4123'
      />
      <ProductCart
        id='5'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/71T-1NKFHAL._SL1500_.jpg"
        title="Gigabyte GeForce GV-N710D3-2GL 2GB PCI-Express Graphics Card (Black)"
        price="4999"
        numRating='4123'
      />
      <ProductCart
        id='6'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SL1500_.jpg"
        title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)"
        price="19999"
        numRating='40123'
      />
      <ProductCart
        id='7'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/81cIK-WlKDL._SL1500_.jpg"
        title="PS4 1TB Slim Bundled with Spider-Man, GT Sport, Ratchet &amp; Clank And PSN 3Month"
        price="35999"
        numRating='932'
      />
      <ProductCart
        id='8'
        imgUrl="https://images-na.ssl-images-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg"
        title="New Apple 11-inch iPad Pro with Apple M1 chip (Wi-Fi + Cellular, 256GB) - Space Grey (2021 Model, 3rd Generation)"
        price="109999"
        numRating='9322'
      />
    </div>
  );
};

export default ProductList;
