type NavLink = {
  name: string;
  path: string;
};

export const navLinks: NavLink[] = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Saya", path: "/about" },
  { name: "Layanan", path: "/services" },
  { name: "Projek", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Kontak", path: "/contact" },
];