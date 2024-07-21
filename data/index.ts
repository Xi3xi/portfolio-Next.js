export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#project" },
    { name: "Experiences", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize collaboration, fostering open communication ",
      description: "Experienced in Agile development environments, having served as a Scrum Master to enhance communication between stakeholders and team members, and confident in contributing effectively to cross-functional teams.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/team.gif",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications 💻",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for both Web and Mobile development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Continue Learning and currently building project with .Net(C#)",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Would like to know more about me?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    
    {
      id: 1,
      title: "Motivation Model Editor",
      des: " A Motivational model editor to assist the development team in capturing and analysing stakeholders' requirements during the project's design phase.",
      img: "/mm.jpg",
      iconLists: [
        {id: 1, name: "React", image: "/re.svg"}, 
        {id: 2, name: "Vite", image: "/vite.png"}, 
        {id: 3, name: "TypeScript", image: "/ts.svg"}, 
        {id: 4, name: "Bootstrap", image: "/bootstrap.png"}],
      // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "Coming soon",
    },
    {
      id: 2,
      title: "Online Ticket-Booking Platform",
      des: "Online platform to support concurrent ticket purchases and different roles in management including Customer, Administritor and Event Planner.",
      img: "/ticketBooking.jpg",
      iconLists: [
        {id: 1, name: "React", image: "/re.svg"}, 
        {id: 2, name: "Java", image: "/java.png"}, 
        {id: 3, name: "JavaScript", image: "/js.png"}, 
        {id: 4, name: "PostgreSQL", image: "/psqlt.png"}, 
        {id: 5, name: "Tomcat", image: "/tomcat.png"}],
      link: "Coming Soon",
    },
    {
      id: 3,
      title: "User Story Validation Plugin",
      des: "A user story validation plugin that integrates high-level requirements validation into the CI/CD pipeline using the Buildkite platform.",
      img: "/backup-output.png",
      iconLists: [
        {id: 1, name: "Buildkite", image: "/bk2.png"}, 
        {id: 2, name: "Docker", image: "/dock.svg"}, 
        {id: 3, name: "AWS", image: "/aws.webp"}, 
        {id: 4, name: "Bash", image: "/bash.png"}],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "BSP Submission Platform",
      des: "A web-based behaviour support plans and reports(BSP) submission platform for NDIS.",
      img: "/BSP.jpg",
      // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      iconLists: [
        {id: 1, name: "Springboot", image: "/spring.svg"}, 
        {id: 2, name: "MongoDB", image: "/mgdb.png"}, 
        {id: 3, name: "React", image: "/re.svg"}, 
        {id: 4, name: "JavaScript", image: "/js.png"}],
      link: "Coming Soon",
    },
    {
      id: 5,
      title: "Travel Sharing Application",
      des: "It is a mobile application designed for users to create and pickup multimedia \"packages\" of travel memories on various locations.",
      img: "/mobile.png",
      // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      iconLists: [
        {id: 1, name: "Android Studio", image: "/android.jpg"}, 
        {id: 2, name: "Firebase", image: "/fb.png"}, 
        {id: 3, name: "Google Map API", image: "/api-g.jpg"},
        {id: 4, name: "Gradle", image: "/gradle.png"},
      ],
      link: "Coming Soon",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Pursuing a Master's in Software Engineering has provided me the perfect platform to create meaningful products that address everyday challenges, such as developing online ticket booking systems, designing FPS games, and conducting SVM training for algorithm analysis. I find immense joy in learning new things, continuously improving myself, and being a creator of useful and impactful solutions.",
      name: "University of Melbourne",
      title: "Master of Software Engineering 🧑‍💻",
      profileImg: "unimelb.jpg",
    },
    {
      quote:
        "As the Deputy Director of the Research Department in the Student Union, I promoted and organised key academic events, such as lectures and graduation defenses. This role honed my leadership and organisational skills, as I coordinated various academic activities to enhance the student learning experience. I also discovered a passion for programming, which allows me to create meaningful products that enhance productivity across diverse fields.",
      name: "Southeast University",
      title: "Bachelor Of Science 🏆",
      profileImg: "seu.png",
    },
    {
      quote:
        "During my internship as a Junior DevOps Engineer, I quickly mastered the CI/CD tool Buildkite and developed a fully functional plugin to streamline software testing within an Agile framework. Initially just a concept, I collaborated with a teammate to bring it to life, designing and implementing the core component. This significant work was co-authored into a paper accepted at the SERP'24 conference.",
      name: "Queue Solutions",
      title: "Junior DevOps Engineer Intern 🛠️",
      profileImg: "leon.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Material UI",
      img: "/mui.png",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Render",
      img: "/render.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Vercel",
      img: "/vsl.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Terraform",
      img: "/tf.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
    {
      id: 6,
      name: "Aceternity UI",
      img: "/a.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 7,
      name: "Tailwind",
      img: "/tw.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 8,
      name: "Next.js",
      img: "/next.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 9,
      name: "Buildkite",
      img: "/bk2.png",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];