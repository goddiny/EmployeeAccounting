import './ItemDescription.css';

const ItemDescription = ({birthdate, post, specific}) => {

  const month = birthdate.toLocaleString("en-US", { month: "2-digit" });
  const day = birthdate.toLocaleString("en-US", { day: "2-digit" });
  const year = birthdate.getFullYear();

  return (
    <div className="description">
      <p>
        <b>Date of birth:</b> {day}.{month}.{year}
      </p>
      <p>
        <b>Post:</b> {post}
      </p>
      {specific !== "" ? <p>Specific: {specific}</p> : ""}
    </div>
  );
};

export default ItemDescription;
