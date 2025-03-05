import HeaderSection from "../Layouts/HeaderSection";

const AboutSection = () => {
  return (
    <section className="pt-20">
      <HeaderSection
        title="Tentang Saya"
        desc="Ini adalah perkenalan singkat"
      />

      <div className="w-full dark:bg-zinc-900 bg-zinc-100 p-10 lg:p-12 rounded-2xl border border-gray-400">
        <p className="mb-10 text-lg dark:text-gray-200 w-full lg:w-4xl">
          Halo! Saya adalah seorang Web Developer yang bersemangat dalam
          menciptakan pengalaman digital yang menarik, responsif, dan
          fungsional. Dengan keahlian dalam teknologi web modern, saya telah
          mengembangkan berbagai proyek yang menggabungkan desain inovatif
          dengan performa optimal. Saya memiliki pengalaman dalam Frontend
          menggunakan berbagai teknologi seperti Laravel, React, dan Vite, serta
          memastikan setiap proyek yang saya bangun memiliki animasi interaktif
          untuk memberikan pengalaman pengguna yang lebih dinamis.
        </p>

        <div className="flex gap-10 lg:flex-row flex-col">
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500 dark:text-emerald-200">
            1+
            <span className="text-xl leading-5 text-black dark:text-white">
              Years <br /> Experience
            </span>
          </h1>
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500 dark:text-emerald-200">
            10+
            <span className="text-xl leading-5 text-black dark:text-white">
              Project <br /> Done
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
