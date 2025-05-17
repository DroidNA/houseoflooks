// import axios from "axios";
// import { useEffect } from "react";
import forHerImage from "../assets/images/for_her.jfif";
import forHimImage from "../assets/images/for-him.jpg";

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("http://localhost:3000");
  //     console.log(res.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
        <div className="carousel-item bg-[url('./src/assets/images/tshirt.jpg')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title text-amber-100 justify-end uppercase">
              <span className="bg-black p-1 rounded-box">Tshirts</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/jeans.jpg')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end text-amber-100 uppercase">
              <span className="bg-black p-1 rounded-box">Jeans</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/cargo.jpg')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end uppercase text-amber-100">
              <span className="bg-black p-1 rounded-box">Cargos</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/kurta.jfif')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end uppercase text-amber-100">
              <span className="bg-black p-1 rounded-box">Kurtas</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/co-ord.jfif')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end uppercase  text-amber-100">
              <span className="bg-black p-1 rounded-box">Co-Ords</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/suit.jfif')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end uppercase text-amber-900">
              <span className="bg-black p-1 rounded-box">Suits</span>
            </h2>
          </div>
        </div>
        <div className="carousel-item bg-[url('./src/assets/images/shoes.jpg')] w-[300px] h-[300px] rounded-box bg-cover">
          <div className="card-body flex ">
            <h2 className="card-title justify-end uppercase text-amber-100">
              <span className="bg-black p-1 rounded-box">Shoes</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 md:w-[50%] mx-auto ">
        <div className="card bg-base-100 image-full shadow-sm mt-4">
          <figure>
            <img src={forHimImage} alt="Shoes" height="300" width="300" />
          </figure>
          <div className="card-body flex  flex-col justify-center">
            <h2 className="card-title justify-center">For Him</h2>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-sm mt-4">
          <figure>
            <img src={forHerImage} alt="Shoes" height="300" width="300" />
          </figure>
          <div className="card-body flex flex-col justify-center">
            <h2 className="card-title justify-center">For Her</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
