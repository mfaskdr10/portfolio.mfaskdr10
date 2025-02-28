type ButtonResume = {
  id: number;
  state: string;
  text: string;
};

export const buttonResumes: ButtonResume[] = [
  {
    id: 0,
    state: "education",
    text: "Education",
  },
  {
    id: 1,
    state: "experience",
    text: "Experience",
  },
  {
    id: 2,
    state: "professional-skill",
    text: "Professional Skills",
  },
];

type Experience = {
  id: number;
  title: string;
  desc: string;
};

type DataEducation = {
  id: number;
  school: string;
  period: string;
  experiences: Experience[];
};

export const dataEducations: DataEducation[] = [
  {
    id: 0,
    school: "MIN 2 Kediri",
    period: "Feb 2024 - Feb 2024",
    experiences: [],
  },
  {
    id: 1,
    school: "MTsN 8 Kediri",
    period: "Feb 2024 - Feb 2024",
    experiences: [
      {
        id: 0,
        title: "Juara 2 Desain Power Point",
        desc: "Dalam Kegiatan Ajang Kompetisi Kelas Unggulan (AKKU)",
      },
    ],
  },
  {
    id: 2,
    school: "SMKN 1 Kediri",
    period: "Feb 2024 - Feb 2024",
    experiences: [
      {
        id: 0,
        title: "Juara 3 Kediri Cyber Security (KCSC) 2024",
        desc: "asasasas",
      },
      {
        id: 1,
        title: "Certificate MTCNA",
        desc: "asasasas",
      },
    ],
  },
];
