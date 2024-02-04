import React from "react";
import { useParams } from "react-router-dom";

function DetailPage({ shoes }) {
  let { id } = useParams();
  id = parseInt(id, 10);

  const selectedProduct = shoes.find((item) => item.id === id);

  if (!shoes || isNaN(id) || id >= shoes.length) {
    return <div>상품이 존재하지 않습니다.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + `/shoes${id + 1}.jpeg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;