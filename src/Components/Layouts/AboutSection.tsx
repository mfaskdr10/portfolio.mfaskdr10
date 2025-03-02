import HeaderSection from "../Fragments/HeaderSection";

const AboutSection = () => {
  return (
    <section className="py-20">
      <HeaderSection
        title="Tentang Saya"
        desc="Ini adalah perkenalan singkat"
      />

      <div className="w-full bg-white p-10 rounded-3xl shadow-2xl">
        <p className="mb-5 text-lg text-justify text-gray-700">
          Halo! Saya adalah seorang Web Developer yang bersemangat dalam
          menciptakan pengalaman digital yang menarik, responsif, dan
          fungsional. Dengan keahlian dalam teknologi web modern, saya telah
          mengembangkan berbagai proyek yang menggabungkan desain inovatif
          dengan performa optimal. <br />
          Saya memiliki pengalaman dalam Frontend menggunakan berbagai teknologi
          seperti Laravel, React, dan Vite, serta memastikan setiap proyek yang
          saya bangun memiliki animasi interaktif untuk memberikan pengalaman
          pengguna yang lebih dinamis. <br />
          Tidak hanya sekadar membuat website, saya juga fokus pada UI/UX
          Design, keamanan, dan performa untuk memastikan solusi yang saya
          kembangkan tidak hanya estetis, tetapi juga efisien dan ramah
          pengguna. <br />
          Jika Anda sedang mencari seorang Web Developer yang dapat membantu
          mewujudkan ide digital Anda menjadi nyata, jangan ragu untuk
          menghubungi saya. Mari berkolaborasi dan ciptakan sesuatu yang luar
          biasa bersama!
        </p>

        <div className="flex gap-10 items-center lg:flex-row flex-col">
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500">
            1+
            <span className="text-xl leading-5">
              Years <br /> Experience
            </span>
          </h1>
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500">
            10+
            <span className="text-xl leading-5">
              Project <br /> Done
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
