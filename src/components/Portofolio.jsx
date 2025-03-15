import Navbars from "./partials/Navbars";
import CardPortofolio from "./partials/CardPortofolio";
import CardPortofolio2 from "./partials/CardPortofolio2";

const Portofolio = () => {
  return (
    <div>
      <Navbars />
      <div className="p-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-5">
              <CardPortofolio/>
              <CardPortofolio2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
