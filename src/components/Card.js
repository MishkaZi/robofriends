import { React } from "react";
const Card = ({id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa1 ma3 grow bw2 shadow-5"
    style={{ height: 300, width:200, fontSize:10}}>
      <img src={`https://robohash.org/${id}?150x150`} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
