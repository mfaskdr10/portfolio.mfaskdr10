const Contact: React.FC = () => {
  return (
    <div className="border border-white p-10 min-h-screen flex items-center justify-between">
      <h1>Ayo Kolaborasi </h1>
      <form action="">
        <label htmlFor="">Masukkan Email</label>
        <input type="text" className="border" />
      </form>
    </div>
  );
};

export default Contact;
