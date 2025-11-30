import { FaGithub, FaReact } from "react-icons/fa";
import { SiLaravel, SiTailwindcss, SiVite } from "react-icons/si";
import gambar from "../../assets/images/gambar.jpg";
import gambar2 from "../../assets/images/gambar2.jpg";
import gambar3 from "../../assets/images/gambar3.jpg";
import gambar4 from "../../assets/images/gambar4.jpg";
import gambar5 from "../../assets/images/gambar5.jpg";


const CardPortofolio2 = () => {
  return (
    <div data-aos="fade-left" className="w-full mb-6 md:mb-0 md:w-full">
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
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mitra Tani</h2>
          <div className="text-sm">Menggunakan teknologi framework</div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-info">
              <div className="flex items-center">
                Fronted : {"  "}
                ReactJS
                <FaReact /> + Vite <SiVite />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-success">
              <div className="flex items-center">
                CSS : {"  "}
                Tailwindcss
                <SiTailwindcss />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="badge badge-error">
              <div className="flex items-center">
                Backend : {"  "}
                Laravel
                <SiLaravel />
              </div>
            </div>
          </div>
          <div className="card-actions justify-center">
            <a href="https://github.com/riyu13/mitra_tani_laravel">
              <button className="btn btn-ghost">
                Fullstack <FaGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortofolio2
