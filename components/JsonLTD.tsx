export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Subhajit Guchhait",
    "url": "https://portfolio-weld-ten-00o6fw715f.vercel.app/",
    "image": "/certificate/my.jpg",
    "sameAs": [
      "https://github.com/SUBHAJITGUCHHAIT",
      "www.linkedin.com/in/subhajit-guchhait-6209762b3",
      "https://www.instagram.com/subhajit_guchhait_0/",
      "https://leetcode.com/u/Subhajit_Guchhait/"
    ],
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in MERN stack, Next.js, Typescript and AI solutions.",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Ucoder" 
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Swami Vivekananda University",
      "url": "https://swamivivekanandauniversity.ac.in/"
    },
    "knowsAbout": [
      "Full Stack Development",
      "Python",
      "Artificial Intelligence",
      "MongoDB",
      "Data Structures and Algorithms",
      "REST APIs",
      "Cloud Deployment"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
     "email": "mailto:subhajitguchhait12@gmail.com",
    "gender": "Male",
    "nationality": "Indian"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}