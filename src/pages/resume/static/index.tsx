
import { GoogleAnalytics } from "@next/third-parties/google";
export default function ResumeStatic() {
    return (
        <div className="font-sans text-black bg-white max-w-[1200px] mx-auto p-5 leading-relaxed p-12">
            <div className="flex justify-between items-start">
                <h1 className="text-[#2c3e50] text-4xl">Atharva Deepak Kamble</h1>
                <a href="mailto:me@athk.dev" className="text-[#2980b9] hover:underline">me@athk.dev</a>
            </div>
            <div className="flex justify-between items-end mt-4">
                <div>
                    <span className="flex gap-2">
                        <a href="https://github.com/athkdev" className="text-[#2980b9] hover:underline">GitHub</a> •
                        <a href="https://linkedin.com/in/athk" className="text-[#2980b9] hover:underline">LinkedIn</a> •
                        <a href="https://athk.dev" className="text-[#2980b9] hover:underline">Portfolio</a> •
                        <span>Open for relocation across the US</span>
                    </span>
                </div>
                <span>857-200-4661</span>
            </div>

            <h2 className="text-[#2c3e50] border-b border-[#ccc] pb-1 mt-8">Education</h2>
            <p className="flex justify-between items-baseline">
                <span><strong>Northeastern University</strong></span>
                <span>Boston, MA</span>
            </p>
            <p className="flex justify-between items-baseline text-[#616161]">
                <span>Master of Science in CS + Information Systems (Full Stack Web & Cloud Infrastructure)</span>
                <span>Sep 2023 - May 2025</span>
            </p>
            <p className="text-[#616161]">
                Relevant Courses: Algorithms, Linux/UNIX, Web and API development, OOP in Java, Design Patterns, Operating Systems
            </p>

            <p className="flex justify-between items-baseline">
                <span><strong>University of Mumbai</strong></span>
                <span>Mumbai, IN</span>
            </p>
            <p className="flex justify-between items-baseline text-[#616161]">
                <span>Bachelor of Engineering in Electrical Engineering & CS</span>
                <span>Aug 2018 - May 2022</span>
            </p>
            <p className="text-[#616161]">
                Relevant Courses: C Programming, OOP, Databases, Networking & Architecture, Big Data, Hadoop, Image Processing
            </p>

            <h2 className="text-[#2c3e50] border-b border-[#ccc] pb-1 mt-8">Technical Skills</h2>
            <ul className="list-disc ml-5">
                <li><strong>Frontend:</strong> <span className="text-[#616161]">React, Typescript, JavaScript, Next.js, Vue.js, Vite, JQuery, Tailwind, Three.js</span></li>
                <li><strong>DevOps & Systems:</strong> <span className="text-[#616161]">Linux, Bash, Docker, Jenkins, Terraform, CI/CD, GitHub Actions, REST APIs</span></li>
                <li><strong>Backend & Databases:</strong> <span className="text-[#616161]">Java, Spring Boot, Python, Django, Go, GraphQL, C++, SQL, PostgreSQL</span></li>
                <li><strong>Data & AI:</strong> <span className="text-[#616161]">AWS EC2, SageMaker, LangChain, OpenAI, Pandas, Numpy, Matplotlib, PyTorch, Kafka</span></li>
            </ul>

            <h2 className="text-[#2c3e50] border-b border-[#ccc] pb-1 mt-8">Work Experience</h2>
            <p className="flex justify-between items-baseline">
                <span><strong>Northeastern University</strong></span>
                <span>Boston, MA</span>
            </p>
            <p className="flex justify-between items-baseline">
                <span>Graduate TA (Web development & algorithms)</span>
                <span>Sep 2024 - Apr 2025</span>
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Instruct students in React, C#, Unity, Git, GitHub and the Agile methodology through 1-on-1 sessions and online communications.</li>
                <li>Run weekly office hours, breaking down tough concepts and debugging live for 25+ students, including pair programming when necessary.</li>
            </ul>
            <p className="flex justify-between items-baseline">
                <span><strong>Cognizant</strong></span>
                <span>Mumbai, IN</span>
            </p>
            <p className="flex justify-between items-baseline">
                <span>Software Engineer 1</span>
                <span>Aug 2022 - Jun 2023</span>
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Developed a well documented Java library that simplified application deployment workflow that automates containerization with Docker and Terraform resulting in a one-click deployment solution.</li>
                <li>Engineered a payments app for external stakeholders by integrating Stripe using React, Java (Spring), Apache and AWS, supporting 40+ local payment gateways and 130+ currencies.</li>
                <li>Built and maintained an in-house React component library with 28+ reusable and themeable UI elements. Used by 5+ teams to improve development speed and maintain visual consistency.</li>
                <li>Developed pixel perfect UI as per wireframes from the UX design team for OneCognizant (company-wide appstore). Built in React, Tailwind, SCSS and Typescript.</li>
                <li>Refactored a monolithic app into modular Python microservices, enabling service-specific deployments and minimizing downtime during updates.</li>
                <li>Write integration tests with Playwright and React Testing Library to validate end-to-end user workflows - ensuring 90%+ test coverage.</li>
            </ul>

            <p className="flex justify-between items-baseline">
                <span><strong>Raftlabs</strong></span>
                <span>Remote</span>
            </p>
            <p className="flex justify-between items-baseline">
                <span>Full Stack Software Engineer (Founding Engineer)</span>
                <span>Apr 2021 - Aug 2022</span>
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Developed a website for a supply chain analytics tool, optimizing delivery schedules and inventory management with scalable React, and Java. Used the in-browser IndexedDB for local caching resulting in extremely fast user experience.</li>
                <li>Implemented an automated CI/CD pipeline using GitHub Actions and Python to schedule blog posts for the marketing team - resulting in an efficient workflow with no manual overhead.</li>
                <li>Revamped a financial loyalty app for the Bank of Ireland using React, GraphQL, Python (Django), and Docker to streamline revenue tracking and help customers gain rewards.</li>
                <li>Integrated Meta&apos;s webhooks with Shopify and Node.js to help viewers buy products by commenting codes in Facebook live streams.</li>
                <li>Coded a proof of concept for an efficient coupon distribution system in Typescript, Node.js and PostgreSQL that could handle 2000 requests per second.</li>
            </ul>

            <h2 className="text-[#2c3e50] border-b border-[#ccc] pb-1 mt-8">Projects</h2>

            <p>
                <strong><a href="https://github.com/athkdev/model0" className="text-[#2980b9] hover:underline">Model-0 – PaaS for AI Chatbots</a></strong><br />
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Full stack web app for creating and deploying AI chatbots with AWS SageMaker providing integration for developers in less than 4 minutes.</li>
                <li>Set up HTTP Apache server with Amazon EC2 instance to handle swift load balancing and secure encryption by setting up a SSL certificate.</li>
                <li>Developed a robust REST API with authenticated routes for communicating with SageMaker API to manage creation, and tuning of ML models. Create permissions in Linux for Apache server by adding it to the current user group.</li>
                <li>Configured a reverse proxy between the Apache route traffic from web and localhost for serving a dynamic Next.js app.</li>
                <li>Built a GitHub actions CI/CD pipeline that deploys code on an EC2 instance automatically once code is pushed to GitHub.</li>
                <li>Used Next.js, React.js, REST API, Typescript, PostgreSQL AWS SageMaker and AWS EC2. The app is launched live at <a href="https://m0.athk.dev" className="text-[#2980b9] hover:underline">m0.athk.dev</a></li>
            </ul>

            <p>
                <strong><a href="https://github.com/athkdev/legacy-the-app-assignment" className="text-[#2980b9] hover:underline">Mental Health Counseling AI Chatbot</a></strong><br />
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Chatbot-powered full stack app designed for mental health counselors to make informed decisions while actively counseling.</li>
                <li>Extracted NLP insights from a dataset of 3000+ counsellor-client sessions and stored them in PostgreSQL database for filtering and pagination.</li>
                <li>Integrated an OpenAI-powered chat that is pre-trained to respond like a counsellor with guided conversations to improve accessibility.</li>
                <li>Built with OpenAI, Next.js, React, Typescript, Node.js, Python and PostgreSQL. The app is launched live here.</li>
            </ul>

            <p>
                <strong><a href="https://github.com/athkdev/crawler" className="text-[#2980b9] hover:underline">Highly performant web crawler (Java 21)</a></strong>
            </p>
            <ul className="list-disc ml-5 text-[#616161]">
                <li>Highly performant web crawler in Java that includes a CLI and stores all URLs in a graph data structure using Neo4j.</li>
                <li>Applied design principles for a scalable and low-latency architecture. Store URLs in Neo4J database concurrently in a graph format.</li>
                <li>Utilised Java&apos;s CompletableFuture API to achieve concurrency and parallelism. Benchmarked at 730 URLs per second.</li>
                <li>Built with Java and Neo4J.</li>
            </ul>
        </div>
    );
}
