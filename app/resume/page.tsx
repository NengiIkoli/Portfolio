"use client"

import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="bg-white text-black min-h-screen p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">NENGI IKOLI</h1>
        <div className="flex justify-center gap-4 text-sm">
          <span>ikolinengi@gmail.com</span>
          <span>||</span>
          <Link href="https://www.linkedin.com/in/ayebanengiyefaikoli/" className="text-blue-600 hover:underline">
            LinkedIn
          </Link>
          <span>||</span>
          <Link href="https://github.com/NengiIkoli" className="text-blue-600 hover:underline">
            GitHub
          </Link>
          <span>||</span>
          <Link href="/" className="text-blue-600 hover:underline">
            Portfolio
          </Link>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">CORE COMPETENCIES</h2>
        <div className="mb-4">
          <h3 className="font-bold mb-2">TECHNICAL SKILLS</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Programming Languages:</span> HTML, CSS, JavaScript, Java, Python
            </li>
            <li>
              <span className="font-semibold">Cloud Computing:</span> Amazon Web Services, GitHub Copilot ChatGPT
            </li>
            <li>
              <span className="font-semibold">Software:</span> Figma, React, Node, Adobe Creative Suite, Sketch
            </li>
            <li>
              <span className="font-semibold">Operating Systems:</span> Linux, Windows 10, Mac OS, Android/iOS, Windows
              Server
            </li>
            <li>
              <span className="font-semibold">Hardware:</span> iMac, MacBooks, iPhone, iPad, Android/Samsung phones and
              tablets, Windows laptops and desktops
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>User-Centered Design (UCD) Principles</li>
              <li>Prototyping and Interactive Design with Figma, Adobe XD, and Sketch</li>
              <li>Usability Testing and User Research Analysis</li>
              <li>Wireframing and Mockup Creation for Web and Mobile Platforms</li>
              <li>Cross-Functional Collaboration and Communication</li>
              <li>A/B Testing and Data-Driven Decision Making</li>
              <li>Design System Development and Maintenance</li>
              <li>Gamification and Engagement Design for Enhanced User Interaction</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tools Proficiency: Miro, InVision, and Adobe Creative Suite</li>
              <li>Motion Graphics and Interactive Animations using After Effects</li>
              <li>Visual Hierarchy and Information Architecture Design</li>
              <li>Responsive Design for Mobile-First and Cross-Browser Compatibility</li>
              <li>Problem-Solving and Debugging for Interface Optimization</li>
              <li>Agile Methodology for UI/UX Development Projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Front-End Web Developer</h3>
            <span>2024 to Current</span>
          </div>
          <div className="font-semibold mb-1">Agilian LLC</div>
          <p className="italic mb-2">
            Develop and implement responsive, user-friendly web interfaces, ensuring seamless functionality and an
            engaging user experience within the Medicaid health equity ecosystem.
          </p>
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Optimized data reporting processes by assisting in cloud data warehouse projects, improving analytics
              efficiency.
            </li>
            <li>
              Develop and maintain user-facing web apps for data visualizations, task automation, and workflow
              enhancements
            </li>
            <li>
              Enhanced data-driven decision-making by leveraging Amazon QuickSight to develop interactive dashboards and
              reports.
            </li>
            <li>
              Streamlined project execution by refining Epics, User Stories, and tasks in JIRA, improving backlog
              management.
            </li>
            <li>
              Improved documentation efficiency by producing detailed release notes, ensuring seamless project
              communication.
            </li>
            <li>Collaborate with my team to deliver software components and enhance existing features.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">UI/UX Engineer</h3>
            <span>2022 to 2024</span>
          </div>
          <div className="font-semibold mb-1">Springboard</div>
          <p className="italic mb-2">
            Collaborated with developers and stakeholders to design, code, test, and deploy user-facing features,
            ensuring seamless user experiences and high-quality, maintainable code.
          </p>
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Elevated project collaboration and cross-functional alignment by presenting design concepts during
              critique sessions, effectively incorporating stakeholder feedback to refine deliverables.
            </li>
            <li>Engaged in code reviews and participated in daily stand-up meetings.</li>
            <li>
              Led user testing initiatives to uncover usability issues, leveraging insights to iteratively enhance
              prototype functionality, resulting in a 30% improvement in user satisfaction scores.
            </li>
            <li>Collaborated with the team to deliver software components and improve existing features.</li>
            <li>Partnered with stakeholders and product teams to create high-quality UX user experiences.</li>
            <li>
              Contributed to the development of scalable design systems, fostering consistency across interfaces while
              maintaining flexibility to address specific user and business requirements.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">User Interface Design Intern</h3>
            <span>2023 to 2024</span>
          </div>
          <div className="font-semibold mb-1">Flip & Floss (B2C)</div>
          <p className="italic mb-2">
            Developed user-centric interfaces using Figma, designing the reward system page for Flip & Floss to enhance
            usability, improve engagement, and incorporate gamified elements tailored for young users.
          </p>
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Conducted user research and iterative testing with children and parents, refining design solutions to
              optimize task completion rates and foster intuitive user interactions.
            </li>
            <li>
              Designed child-friendly interfaces with robust parental control features, ensuring a secure and engaging
              environment that promotes financial literacy for young users.
            </li>
            <li>
              Collaborated cross-functionally with developers and stakeholders to align design solutions with project
              goals, ensuring seamless implementation and usability across platforms.
            </li>
            <li>
              Utilized data-driven insights from usability testing to enhance design features, achieving a 20%
              improvement in user engagement metrics and increasing system adoption rates.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Interior Designer</h3>
            <span>2021 to 2022</span>
          </div>
          <div className="font-semibold mb-1">Lorna Gross Interior Design</div>
          <p className="italic mb-2">
            Enhanced user engagement by applying innovative design principles to digital platforms, leveraging expertise
            in spatial planning and aesthetics to create intuitive and visually appealing interfaces.
          </p>
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Increased lead generation and user retention by designing user-centric digital experiences, incorporating
              research-driven insights to optimize usability and functionality.
            </li>
            <li>
              Streamlined design workflows by effectively communicating concepts and collaborating with cross-functional
              teams, ensuring alignment with project objectives and user needs.
            </li>
            <li>
              Applied expertise in layout design and visual hierarchy to create prototypes and mockups, facilitating
              stakeholder buy-in and improving the design-to-development handoff process.
            </li>
            <li>
              Utilized user feedback and analytics to refine designs, achieving measurable improvements in engagement
              metrics and overall user satisfaction.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">Freelance Designer</h3>
            <span>2021 to 2022</span>
          </div>
          <div className="font-semibold mb-1">Self-Employed</div>
          <p className="italic mb-2">
            Enhanced user engagement by applying innovative design principles to digital platforms, leveraging expertise
            in spatial planning and aesthetics to create intuitive and visually appealing interfaces.
          </p>
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Elevated brand recognition and user engagement by developing cohesive digital branding strategies,
              leveraging tools like Figma, Adobe XD, and Sketch to create visually compelling and user-friendly designs.
            </li>
            <li>
              Designed and delivered wireframes, prototypes, and high-fidelity compositions for web and mobile
              applications, consistently exceeding client expectations and driving satisfaction.
            </li>
            <li>
              Collaborated with clients to transform visions into actionable design solutions, fostering long-term
              partnerships and achieving measurable improvements in user engagement metrics.
            </li>
            <li>
              Executed user-focused design strategies by conducting market research and usability testing, refining
              deliverables to enhance the overall user experience.
            </li>
            <li>
              Enhanced project outcomes by integrating animation and motion graphics using After Effects, adding dynamic
              elements to prototypes and interfaces for web and mobile platforms.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">EDUCATION</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <span className="font-semibold">NPower</span>
              <p>Path2TECH Full Stack Developer Program</p>
            </div>
            <div className="text-right">
              <span>2025</span>
              <p>Spring</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="font-semibold">Masters of Science in Engineering</span>
              <p>Grand Canyon University</p>
            </div>
            <div className="text-right">
              <span>2026</span>
              <p>Fall</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="font-semibold">Bachelors of Arts in Interior Architecture</span>
              <p>The George Washington University</p>
            </div>
            <div className="text-right">
              <span>2022</span>
              <p>Winter</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">CERTIFICATIONS</h2>
        <ul className="list-disc pl-5">
          <li>Intro to Git/Github</li>
          <li>Springboard UI/UX Design Certificate</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">PROJECTS</h2>

        <div className="mb-4">
          <h3 className="font-bold">UX Design Capstone Project</h3>
          <div className="font-semibold">Redesign for Savr Recipe App (Design Sprint) | Winter 2024</div>
          <ul className="list-disc pl-5">
            <li>
              Redesigned the information architecture and overall user interface of Savr Recipes, a startup cooking
              application, to address user feedback and improve usability, resulting in an enhanced user experience and
              streamlined navigation.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Groove Media App | Capstone Project</h3>
          <div className="font-semibold">Lead UI/UX Designer | Spring 2024</div>
          <ul className="list-disc pl-5">
            <li>
              Led the design and prototyping of Groove Media, incorporating full UX research, including user interviews
              and usability testing, to guide design decisions.
            </li>
            <li>
              Improved task efficiency by 20% through iterative design and user feedback, refining interface elements
              for a more intuitive experience.
            </li>
            <li>
              Developed a user-centered music streaming app with personalized playlists and social sharing features,
              enhancing user engagement and community interaction.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">TRAINING</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <h3 className="font-bold">NPower | Remote</h3>
            <span>09/2024 – 04/2025</span>
          </div>
          <div className="font-semibold mb-1">Full Stack Developer Trainee</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Completed an intensive 24-week Full Stack Developer training program, gaining hands-on experience in both
              front-end and back-end development technologies, including HTML, CSS, and JavaScript.
            </li>
            <li>
              Developed proficiency in building responsive and interactive user interfaces using popular front-end
              frameworks such as Figma and React.js, ensuring a seamless user experience across various devices.
            </li>
            <li>
              Acquired essential back-end development skills through practical training in server-side scripting with
              Node.js, utilizing Express.js for efficient routing and building scalable web applications.
            </li>
            <li>
              Demonstrated the ability to work with databases by mastering fundamental database management concepts and
              hands-on experience with MongoDB, ensuring effective storage and retrieval of data.
            </li>
            <li>
              Collaborated with peers on real-world projects, applying Agile development methodologies, version control
              using Git, and participating in regular code reviews, fostering a collaborative environment.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">COURSE OF WORK</h2>
        <p>
          Google IT Automation with Python, Polymorphism, File I/O, Object-oriented Programming in Java, Version
          control, Branching, and Collaboration using Git, GitHub projects using HTML and CSS
        </p>
      </section>

      <div className="mt-8 text-center text-sm">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 print:hidden"
        >
          Print this Resume
        </button>
      </div>

      <style jsx global>{`
        @media print {
          body {
            font-size: 12px;
          }
          h1 {
            font-size: 18px;
          }
          h2 {
            font-size: 16px;
          }
          h3 {
            font-size: 14px;
          }
          .print\\:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
