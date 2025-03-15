import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import gambar from "../../assets/images/gambar.png";
import gambar2 from "../../assets/images/gambar2.png";
import gambar3 from "../../assets/images/gambar3.png";
import gambar4 from "../../assets/images/gambar4.png";
import gambar5 from "../../assets/images/gambar5.png";
import gambar6 from "../../assets/images/gambar6.png";

const CardPortofolio = () => {
  return (
    <div data-aos="fade-right" className="w-full mb-6 md:mb-0 md:w-full">
      <div className="card card-side bg-base-100 shadow-sm shadow-neutral-100">
        <figure>
          <div className="h-72 w-96 carousel rounded-none">
            <div className="carousel-item w-full">
              <img
                src={gambar}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={gambar2}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={gambar3}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={gambar4}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={gambar5}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={gambar6}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">LPK Yukimaga Surakarta</h2>
          <div className="text-sm">Menggunakan teknologi framework</div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-info">
              <div className="flex items-center">
                Fronted : {"  "}
                ReactJS
                <FaReact />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-success">
              <div className="flex items-center">
                CSS : {"  "}
                Bulma
                <SiBulma />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-error">
              <div className="flex items-center">
                Backend : {"  "}
                Node
                <FaNodeJs />
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <p className="flex flex-row">
              <a href="https://github.com/riyu13/frontend">
                <button className="btn btn-ghost">
                  Frontend <FaGithub />
                </button>
              </a>
              <a href="https://github.com/riyu13/backend">
                <button className="btn btn-ghost">
                  Backend <FaGithub />
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortofolio
