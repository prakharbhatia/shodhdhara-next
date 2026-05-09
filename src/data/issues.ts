export interface Issue {
  number: number;
  pdfUrl: string;
  coverUrl?: string;
  year?: string;
  notes?: string;
}

// PDFs hosted locally use /files/ paths.
// PDFs on Google Drive use share links.
export const issues: Issue[] = [
  {
    number: 69,
    pdfUrl: "https://drive.google.com/file/d/1m2DeIPWtkMtarols4fw2OnQWG13ZX90Z/view?usp=drive_link",
    coverUrl: "/covers/69-cover.jpg",
    year: "2025",
  },
  {
    number: 68,
    pdfUrl: "https://drive.google.com/file/d/1weLtdaEsm-NnDBxedEzYTLZINFH6Z_EN/view?usp=drive_link",
    coverUrl: "/covers/68-cover.jpg",
    year: "2025",
  },
  {
    number: 67,
    pdfUrl: "https://drive.google.com/file/d/1IbAE-KC8nonPrB88OONYUzH3fBmShCPG/view?usp=sharing",
    coverUrl: "/covers/67-cover.jpg",
    year: "2024",
  },
  {
    number: 66,
    pdfUrl: "https://drive.google.com/file/d/11YwZN0xlOYm7hViNVCFjN0x0FGh3D_4d/view?usp=sharing",
    coverUrl: "/covers/66-cover.jpg",
    year: "2023",
  },
  {
    number: 65,
    pdfUrl: "https://drive.google.com/file/d/190L7hCXOnqoSsIRzv_hDWLTwh8g2IkbH/view?usp=sharing",
    coverUrl: "/covers/65-cover.jpg",
    year: "2023",
  },
  {
    number: 64,
    pdfUrl: "https://drive.google.com/file/d/10CDXRUBu-MN4dnkJ94GbeZ5bDCcru-15/view?usp=sharing",
    coverUrl: "/covers/64-cover.jpg",
    year: "2022",
  },
  {
    number: 63,
    pdfUrl: "https://drive.google.com/file/d/1dC2RtKEfT03zIfhJLSjT_aBMP1nch42u/view?usp=sharing",
    coverUrl: "/covers/63-cover.jpg",
    year: "2022",
  },
  {
    number: 62,
    pdfUrl: "https://drive.google.com/file/d/1iYO7KVCYptFnW88ggrv17RRt_eP-Y_GR/view?usp=sharing",
    coverUrl: "/covers/62-cover.jpg",
    year: "2022",
  },
  {
    number: 61,
    pdfUrl: "https://drive.google.com/file/d/180QjhwWtFRTtnSGGEyv2-sZAfzai5fgU/view?usp=sharing",
    coverUrl: "/covers/61-cover.jpg",
    year: "2021",
  },
  {
    number: 60,
    pdfUrl: "/files/60-final.pdf",
    coverUrl: "/covers/60-cover.jpg",
    year: "2021",
  },
  {
    number: 59,
    pdfUrl: "/files/59-final01.pdf",
    coverUrl: "/covers/59-cover.jpg",
    year: "2021",
  },
  {
    number: 58,
    pdfUrl: "/files/58-final.pdf",
    coverUrl: "/covers/58-cover.jpg",
    year: "2021",
  },
  {
    number: 57,
    pdfUrl: "/files/57-final.pdf",
    coverUrl: "/covers/57-cover.jpg",
    year: "2020",
  },
  {
    number: 56,
    pdfUrl: "/files/56-final.pdf",
    coverUrl: "/covers/56-cover.jpg",
    year: "2020",
  },
];
