import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    school,
    hsc,
    college,
    filmpire,
    weather,
    gptjsm,
    threejs,
    movieanalysis,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Reactjs Development",
      icon: mobile,
    },
    {
      title: "Data Analytics",
      icon: backend,
    },
    {
      title: "Video Editing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Secondary School Certificate",
      company_name: "Sowdambikaa Matric higher secondary school",
      icon: school,
      iconBg: "#383E56",
      date: "June 2017 - April 2018",
      points: [
        "Completed secondary school certificate in June 2017 to April 2018 with an exceptional 94.6% percentage, showcasing academic excellence and dedication to studies.",
        "Demonstrated consistent high performance throughout the academic year, maintaining an outstanding level of achievement in various subjects.",
        "Exhibited a strong work ethic and dedication, reflecting the effort invested in studies to achieve remarkable results.",
      ],
    },
    {
      title: "Higher Secondary Certificate",
      company_name: "Sowdambikaa Matric higher secondary school",
      icon: hsc,
      iconBg: "#E6DEDD",
      date: "June 2019 - Mar 2020",
      points: [
        "Completed Higher Secondary Certificate from June 2019 to March 2020 with an exceptional 90.3% percentage, showcasing dedication and excellence in studies.",
        "Opted for the challenging Bio-Maths group, displaying a strong interest in science and mathematics and the ability to handle complex subjects.",
        "Achieved a remarkable cut-off mark of 178.5 out of 200, demonstrating exceptional performance in the qualifying examination.",
        "Successfully secured admission to college through the counseling process, reflecting your eligibility and competitiveness for the desired course.",
      ],
    },
    {
      title: "Higher education",
      company_name: "Kumaraguru college of technologgy",
      icon: college,
      iconBg: "#383E56",
      date: "Sept 2020 - Present",
      points: [
        "Academic Excellence: Currently pursuing B.Tech in Information Technology since September 2020, showcasing dedication to higher education and specialization in the field.",
        "Maintained an impressive 8.4 CGPA with no arrears, indicating efficient handling of the curriculum.",
        "Project Diversity: Successfully completed multiple projects in various domains within Information Technology, demonstrating versatility and adaptability in technical skills.",
        "Leadership Role : Serving as the Editing Team Lead at Nigal Studio, the official filmography club of the institution, showcasing strong leadership skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Filmpire",
      description:
        "Filmpire is an online platform that provides movie enthusiasts with comprehensive movie information, ratings, and reviews. It offers a user-friendly interface to discover, search, and explore a vast collection of films from various genres and eras",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: filmpire,
      source_code_link: "https://github.com/vinoth-kct/filmpire",
    },
    {
      name: "Weather Search",
      description:
        "Stay informed and plan your day with ease using the Weather Search app. Get real-time weather updates for any location, all in one place.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/vinoth-kct/weather-app",
    },
    {
      name: "GPT3-JSM",
      description:
        "gpt3-jsm is a dynamic and modern website created with HTML, CSS, React, and designed using Figma for a seamless user interface and user experience (UI/UX).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gptjsm,
      source_code_link: "https://github.com/vinoth-kct/GPT3-jsm",
    },
    {
      name: "IMDB Movie Analysis",
      description:
      "IMDb Movie Analysis Project: A data-driven exploration of movie ratings, genres, and trends to uncover insights and patterns within the vast IMDb movie database.",
      tags: [
        {
          name: "jupyternotebook",
          color: "blue-text-gradient",
        },
        {
          name: "Excel",
          color: "green-text-gradient",
        },
      ],
      image: movieanalysis,
      source_code_link: "https://github.com/vinoth-kct/IMDB-Movie-Analisis",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };