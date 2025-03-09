import Container from "../Layouts/Container";
import HeaderSection from "../Layouts/HeaderSection";

const Contact: React.FC = () => {
  return (
    <Container classname="dark:bg-zinc-800 bg-sky-200">
      <section className="py-20">
        <HeaderSection
          title="Contact Me"
          desc="Contact me through the form below for collaborations, questions, or just to say hello. I'll be happy to respond as soon as possible!"
        />
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">Masukkan Email</label>
            <input type="text" className="border" />
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Contact;
