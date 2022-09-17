import {React,useState} from "react";


const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="row g-0 mt-5">
        <div className="col-5"></div>
        <div className="col-4">
          {" "}
          <div className="btn-group">
            <button
              className="btn btn-dark "
              onClick={() => setCount(count + 1)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <h1 className="">{count}</h1>
            <button
              className="btn btn-dark"
              onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
