import Container from "../Layouts/Container";
import HeaderSection from "../Layouts/HeaderSection";
import fotoHome from "/public/images/foto-nobg.png";

const AboutSection = () => {
  return (
    <Container>
      <section className="pt-20">
        <HeaderSection title="About Me" desc="This is my brief introduction" />

        <div className="bg-dark-gradient p-7 lg:px-15 rounded-xl border-2 border-zinc-700">
          <div className="flex items-center justify-center gap-5">
            <div className="w-full lg:w-3/4">
              <p className="mb-10 text-lg dark:text-gray-200">
                Halo! Saya adalah seorang Web Developer yang bersemangat dalam
                menciptakan pengalaman digital yang menarik, responsif, dan
                fungsional. Dengan keahlian dalam teknologi web modern, saya
                telah mengembangkan berbagai proyek yang menggabungkan desain
                inovatif dengan performa optimal. Saya memiliki pengalaman dalam
                Frontend menggunakan berbagai teknologi seperti Laravel, React,
                dan Vite, serta memastikan setiap proyek yang saya bangun
                memiliki animasi interaktif untuk memberikan pengalaman pengguna
                yang lebih dinamis.
              </p>
              <div className="flex gap-10 lg:flex-row flex-col">
                <h1 className="flex items-center text-5xl font-bold gap-2 text-sky-500 dark:text-sky-200">
                  1+
                  <span className="text-xl leading-5 text-black dark:text-white">
                    Years <br /> Experience
                  </span>
                </h1>
                <h1 className="flex items-center text-5xl font-bold gap-2 text-sky-500 dark:text-sky-200">
                  10+
                  <span className="text-xl leading-5 text-black dark:text-white">
                    Project <br /> Done
                  </span>
                </h1>
              </div>
            </div>
            <img
              src={fotoHome}
              alt=""
              className="w-[30%] mx-auto hidden lg:block"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutSection;
