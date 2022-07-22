import "./index.css";

function Veri({ hava, city }) {
  return (
    <div className="mt-5">
      <h1 className="text-center"> {hava.name} </h1>
      <h1 className="text-center"> {hava.main.temp} </h1>
      <h1 className="text-center"> {hava.weather[0].main} </h1>
    </div>
  );
}

export default Veri;
