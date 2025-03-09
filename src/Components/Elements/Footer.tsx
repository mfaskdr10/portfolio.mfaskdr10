import Container from "../Layouts/Container";
import LinkSocial from "./LinkSocial";

const Footer: React.FC = () => {
  return (
    <Container>
      <footer className="pt-20">
        <div className="flex justify-between flex-col lg:flex-row gap-30">
          <div className="flex-3">
            <h1 className="text-3xl font-bold mb-2">
              Muhammad Fadhil Alvan Syah | MFAS
            </h1>
            <p className="mb-10 text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae aut animi quis possimus nulla est nisi? Reprehenderit
              veniam corrupti ex!
            </p>
            <h3 className="text-2xl font-semibold mb-2">Hubungi Kami</h3>
            <p className="text-lg font-medium mb-5">mfaskdr10@gmail.com</p>
            <p className="text-xl font-bold">
              Kab. Kediri Jawa Timur Indonesia, 64182
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Kategori Tulisan</h1>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Tautan</h1>
          </div>
        </div>
        <hr className="my-5 border-zinc-600" />
        <div className="text-center pb-5">
          <LinkSocial />
          <p className="text-zinc-400 mt-5">
            © 2025 Muhammad Fadhil Alvan Syah. All Rights Reserved
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
