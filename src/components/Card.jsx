const Card = (props) => {
  console.log(props);
  const { clientsArr } = props;
  let salute = "";
  if (clientsArr.country === "de") {
    salute = "hallo";
  } else if (clientsArr.country === "en") {
    salute = "Hello";
  } else if (clientsArr.country === "fr") {
    salute = "Bonjour";
  } else {
    salute = "Hola";
  }

  if (clientsArr.isPremium) {
    return (
      <div className="true-premium">
        <p>
          {salute}:{clientsArr.name}
        </p>
        <p>age: {clientsArr.age}</p>
        <p>Is it a premium client?: yes</p>
      </div>
    );
  } else {
    return (
      <div className="false-premium">
        <p>
          {salute}: {clientsArr.name}
        </p>
        <p>age: {clientsArr.age}</p>
        <p>Is it a premium client?: no</p>
      </div>
    );
  }
};

export default Card;
