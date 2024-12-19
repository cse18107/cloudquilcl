export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg" ,
        initialContent: `<h1 style="color: #333;">Blank Document</h1>`
    },
    { 
        id: "software-proposal", 
        label: "Software development proposal", 
        imageUrl: "/software-proposal.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

    <header>
        <h1 style="color: #333;">Software Development Documentation</h1>
        <p><strong>Version:</strong> 1.0</p>
        <p><strong>Last Updated:</strong> December 18, 2024</p>
    </header>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">1. Introduction</h2>
        <p>This document outlines the development of the software project, including requirements, design, implementation, and testing phases. The goal of this document is to provide a clear and detailed understanding of the software's architecture, features, and functionalities.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">2. Objectives</h2>
        <p>The main objectives of the software development project are as follows:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Design a user-friendly and intuitive interface.</li>
            <li>Ensure the software is scalable and maintainable.</li>
            <li>Develop core functionalities according to client requirements.</li>
            <li>Perform rigorous testing to ensure reliability and performance.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">3. Scope</h2>
        <p>The software will address the following key areas:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Platform: Web-based application.</li>
            <li>Target Audience: Small to medium-sized businesses.</li>
            <li>Core Features: User authentication, dashboard management, data analytics, and reporting.</li>
        </ul>
        <p>It will not include mobile applications or support for third-party integrations in the initial phase.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">4. System Requirements</h2>
        <p>The software will be compatible with the following environments:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Operating System: Windows, macOS, Linux</li>
            <li>Browser: Latest versions of Chrome, Firefox, Safari</li>
            <li>Database: MySQL or PostgreSQL</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">5. Architecture</h2>
        <h3 style="color: #555;">5.1 High-Level Design</h3>
        <p>The software architecture will be based on a client-server model with the following components:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Frontend: React.js for building the user interface.</li>
            <li>Backend: Node.js with Express for handling requests and business logic.</li>
            <li>Database: MySQL for storing user data and application information.</li>
        </ul>

        <h3 style="color: #555;">5.2 Data Flow</h3>
        <p>The data flow will follow a typical request-response cycle, where the client sends requests to the server, and the server responds with the necessary data from the database.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">6. Development Methodology</h2>
        <p>The project will follow an Agile development methodology, with iterative development cycles and regular feedback from stakeholders. This ensures flexibility and the ability to make changes based on user feedback during the development process.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">7. Testing Strategy</h2>
        <p>Testing will be conducted in the following stages:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li><strong>Unit Testing:</strong> Testing individual components for correctness.</li>
            <li><strong>Integration Testing:</strong> Ensuring the system works as a whole.</li>
            <li><strong>User Acceptance Testing (UAT):</strong> Validation from end-users before deployment.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">8. Deployment Plan</h2>
        <p>Once testing is complete, the software will be deployed to a production environment. The deployment process includes:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Preparation of deployment servers.</li>
            <li>Database migration and setup.</li>
            <li>Deployment of the backend and frontend applications.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">9. Conclusion</h2>
        <p>This document provides a high-level overview of the software development process, its objectives, and deliverables. The success of this project depends on collaboration among team members and stakeholders, along with consistent evaluation and feedback during each stage of development.</p>
    </div>

        </body>`
    },
    { 
        id: "project-proposal", 
        label: "Project proposal", 
        imageUrl: "/project-proposal.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background-color: #f4f4f9;">

    <header>
        <h1 style="color: #2c3e50; text-align: center;">Project Proposal</h1>
        <p style="text-align: center; color: #8e44ad;"><strong>Prepared by:</strong> Your Company Name</p>
        <p style="text-align: center; color: #34495e;"><strong>Version:</strong> 1.0 | <strong>Last Updated:</strong> December 18, 2024</p>
    </header>

    <div style="margin-bottom: 30px; text-align: center;">
        <img src="https://via.placeholder.com/800x400/3498db/ffffff?text=Project+Proposal+Image" alt="Project Proposal" style="width: 80%; border-radius: 8px;">
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #2980b9;">1. Introduction</h2>
        <p style="color: #7f8c8d;">This project proposal outlines the objectives, goals, and phases of the proposed project, aiming to provide a comprehensive solution to the identified needs. The goal is to successfully complete the project on time, within budget, and to the highest quality standards.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #27ae60;">2. Project Goals</h2>
        <p style="color: #7f8c8d;">The primary objectives of the project are:</p>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><span style="color: #e74c3c; font-weight: bold;">Goal 1:</span> Deliver a user-friendly online platform for [specific purpose].</li>
            <li><span style="color: #e74c3c; font-weight: bold;">Goal 2:</span> Ensure the solution is scalable and secure.</li>
            <li><span style="color: #e74c3c; font-weight: bold;">Goal 3:</span> Achieve customer satisfaction through intuitive design.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #8e44ad;">3. Project Scope</h2>
        <p style="color: #7f8c8d;">The project will focus on the following key deliverables:</p>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li>Develop a responsive web application.</li>
            <li>Integrate with third-party services for data exchange.</li>
            <li>Implement user authentication and authorization systems.</li>
        </ul>
        <p style="color: #7f8c8d;">Out of scope: Mobile application development and integration with legacy systems.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #f39c12;">4. Project Timeline</h2>
        <p style="color: #7f8c8d;">The project will be completed in the following phases:</p>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><span style="color: #1abc9c; font-weight: bold;">Phase 1:</span> Planning and Requirements Gathering - [Date]</li>
            <li><span style="color: #1abc9c; font-weight: bold;">Phase 2:</span> Design and Prototyping - [Date]</li>
            <li><span style="color: #1abc9c; font-weight: bold;">Phase 3:</span> Development and Testing - [Date]</li>
            <li><span style="color: #1abc9c; font-weight: bold;">Phase 4:</span> Final Deployment and Handover - [Date]</li>
        </ul>
        <p style="color: #7f8c8d;">The project is expected to take approximately 6 months to complete.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #c0392b;">5. Budget Estimate</h2>
        <p style="color: #7f8c8d;">The estimated cost for the project is as follows:</p>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><span style="color: #e67e22; font-weight: bold;">Development:</span> $50,000</li>
            <li><span style="color: #e67e22; font-weight: bold;">Design:</span> $20,000</li>
            <li><span style="color: #e67e22; font-weight: bold;">Testing and QA:</span> $10,000</li>
            <li><span style="color: #e67e22; font-weight: bold;">Miscellaneous:</span> $5,000</li>
        </ul>
        <p style="color: #7f8c8d;">Total Estimated Cost: <strong>$85,000</strong></p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #9b59b6;">6. Risks and Mitigation</h2>
        <p style="color: #7f8c8d;">Identified risks and their mitigation strategies include:</p>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><span style="color: #f39c12; font-weight: bold;">Risk 1:</span> Delays in development. <strong>Mitigation:</strong> Implement Agile project management.</li>
            <li><span style="color: #f39c12; font-weight: bold;">Risk 2:</span> Integration challenges. <strong>Mitigation:</strong> Perform thorough testing and review prior to integration.</li>
            <li><span style="color: #f39c12; font-weight: bold;">Risk 3:</span> Budget overruns. <strong>Mitigation:</strong> Regular budget tracking and updates.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #34495e;">7. Conclusion</h2>
        <p style="color: #7f8c8d;">This proposal outlines the strategic approach for delivering a comprehensive and effective solution to address your project’s needs. We believe that by collaborating closely, we can meet your objectives within the desired timeframe and budget.</p>
        <p style="color: #7f8c8d;"><strong>We look forward to discussing this proposal with you and embarking on this exciting project together!</strong></p>
    </div>

    <footer style="text-align: center; margin-top: 30px; color: #95a5a6;">
        <p>For any inquiries, please contact us at <strong>contact@yourcompany.com</strong></p>
    </footer>

</body>`
    },
    { 
        id: "business-proposal", 
        label: "Business proposal", 
        imageUrl: "/business-letter.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

    <header>
        <h1 style="color: #333;">Business Proposal</h1>
        <p><strong>Prepared by:</strong> Your Company Name</p>
        <p><strong>Version:</strong> 1.0</p>
        <p><strong>Last Updated:</strong> December 18, 2024</p>
    </header>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">1. Introduction</h2>
        <p>This business proposal outlines the key objectives, goals, and benefits of the proposed project or service. It aims to provide a clear understanding of the proposed solution, its value to the client, and how it will meet the identified needs.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">2. Problem Statement</h2>
        <p>The primary issue that this proposal aims to address is:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Identifying the key challenges the client is facing.</li>
            <li>The business inefficiencies, customer pain points, or market gaps.</li>
            <li>Details on how these challenges impact operations, growth, or revenue.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">3. Proposed Solution</h2>
        <p>Our proposed solution to address the challenges outlined above is as follows:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Overview of the solution and how it will tackle the identified problem.</li>
            <li>Step-by-step approach for implementation.</li>
            <li>Key features or services included in the solution.</li>
        </ul>
        <p>Our solution leverages [your product or service] to provide the following benefits:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li>Efficiency improvement in business processes.</li>
            <li>Cost savings over the long term.</li>
            <li>Scalability to meet future growth demands.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">4. Benefits</h2>
        <p>The proposed solution offers the following benefits:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li><strong>Increased Revenue:</strong> By addressing [specific issue], the solution opens up new revenue streams or increases existing ones.</li>
            <li><strong>Cost Efficiency:</strong> Reduces operational costs through streamlined processes and automation.</li>
            <li><strong>Improved Customer Satisfaction:</strong> Addresses customer pain points, leading to a better experience.</li>
            <li><strong>Competitive Advantage:</strong> Provides the client with a unique advantage in the market.</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">5. Implementation Plan</h2>
        <p>The implementation of this proposal will be carried out in the following phases:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li><strong>Phase 1:</strong> Initial planning and requirements gathering.</li>
            <li><strong>Phase 2:</strong> Solution design and development.</li>
            <li><strong>Phase 3:</strong> Testing and quality assurance.</li>
            <li><strong>Phase 4:</strong> Final deployment and monitoring.</li>
        </ul>
        <p>The implementation timeline will span approximately [X] months, with each phase carefully managed to ensure timely delivery.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">6. Cost Estimate</h2>
        <p>The estimated cost for the implementation of the proposed solution is as follows:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li><strong>Initial Setup:</strong> $[amount]</li>
            <li><strong>Ongoing Maintenance:</strong> $[amount] per month</li>
            <li><strong>Additional Costs:</strong> [Any additional fees, such as training or support]</li>
        </ul>
        <p>We believe that the investment in this solution will deliver significant value to your business in the form of [specific benefits].</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">7. Risks and Mitigation</h2>
        <p>Like any project, there are inherent risks. However, we have identified the following risks and corresponding mitigation strategies:</p>
        <ul style="margin: 0 0 10px 20px;">
            <li><strong>Risk 1:</strong> [Describe the risk]. <strong>Mitigation:</strong> [Describe the mitigation].</li>
            <li><strong>Risk 2:</strong> [Describe the risk]. <strong>Mitigation:</strong> [Describe the mitigation].</li>
            <li><strong>Risk 3:</strong> [Describe the risk]. <strong>Mitigation:</strong> [Describe the mitigation].</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #333;">8. Conclusion</h2>
        <p>This business proposal offers a detailed solution to address the key challenges faced by [Client’s Company Name]. By implementing this solution, your organization will benefit from increased efficiency, reduced costs, and enhanced customer satisfaction. We are confident that this partnership will result in significant long-term value for your business.</p>
        <p><strong>We look forward to your positive response and to collaborating on this exciting opportunity.</strong></p>
    </div>

</body>`
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background-color: #f4f4f9; color: #2c3e50;">

    <header style="text-align: center; margin-bottom: 20px;">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" style="border-radius: 50%; width: 150px; height: 150px; margin-bottom: 10px;">
        <h1 style="color: #2980b9;">John Doe</h1>
        <p style="font-size: 18px; color: #7f8c8d;">Software Developer</p>
        <p style="color: #34495e;">Email: johndoe@example.com | Phone: +123 456 7890 | LinkedIn: linkedin.com/in/johndoe</p>
    </header>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #27ae60;">Objective</h2>
        <p style="color: #7f8c8d;">Motivated and results-driven software developer with 5+ years of experience in building innovative solutions. Seeking to leverage expertise in web development and problem-solving skills to contribute to a dynamic team.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #8e44ad;">Skills</h2>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><span style="color: #e74c3c;">Programming Languages:</span> JavaScript, Python, Java, C++</li>
            <li><span style="color: #e74c3c;">Web Technologies:</span> HTML, CSS, React, Node.js, Express</li>
            <li><span style="color: #e74c3c;">Databases:</span> MySQL, MongoDB, PostgreSQL</li>
            <li><span style="color: #e74c3c;">Tools & Frameworks:</span> Git, Docker, Kubernetes, AWS</li>
            <li><span style="color: #e74c3c;">Soft Skills:</span> Team Collaboration, Problem-Solving, Time Management</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #f39c12;">Experience</h2>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2980b9;">Senior Software Developer</h3>
            <p style="font-weight: bold; color: #7f8c8d;">XYZ Tech Solutions | 2021 - Present</p>
            <ul style="margin: 0 0 10px 20px; color: #34495e;">
                <li>Developed scalable web applications using React, Node.js, and MongoDB.</li>
                <li>Collaborated with cross-functional teams to implement new features and fix bugs.</li>
                <li>Led code reviews, ensuring code quality and adherence to best practices.</li>
                <li>Optimized the application performance, reducing load times by 30%.</li>
            </ul>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2980b9;">Software Developer</h3>
            <p style="font-weight: bold; color: #7f8c8d;">ABC Software Inc. | 2018 - 2021</p>
            <ul style="margin: 0 0 10px 20px; color: #34495e;">
                <li>Built and maintained customer-facing websites and internal tools using JavaScript and Python.</li>
                <li>Worked closely with the QA team to ensure seamless integration of new features.</li>
                <li>Participated in sprint planning and provided input on product features and deadlines.</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #9b59b6;">Education</h2>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2980b9;">Bachelor of Science in Computer Science</h3>
            <p style="font-weight: bold; color: #7f8c8d;">University of Example | 2014 - 2018</p>
            <ul style="margin: 0 0 10px 20px; color: #34495e;">
                <li>Graduated with a 3.8 GPA</li>
                <li>Completed courses in Data Structures, Algorithms, and Web Development</li>
                <li>Developed a web application as a final year project</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #c0392b;">Certifications</h2>
        <ul style="margin: 0 0 10px 20px; color: #34495e;">
            <li><strong>Certified AWS Solutions Architect</strong> - Amazon Web Services, 2023</li>
            <li><strong>JavaScript Developer Certification</strong> - Code Academy, 2022</li>
        </ul>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #34495e;">Projects</h2>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2980b9;">Personal Portfolio Website</h3>
            <p style="color: #7f8c8d;">Developed a responsive portfolio website showcasing personal projects, blog, and contact information. Built using HTML, CSS, and JavaScript.</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2980b9;">E-commerce Website</h3>
            <p style="color: #7f8c8d;">Created a fully functional e-commerce website with payment integration using React and Node.js. Implemented features like product search, user authentication, and shopping cart.</p>
        </div>
    </div>

    <footer style="text-align: center; margin-top: 30px; color: #95a5a6;">
        <p>For any inquiries, feel free to contact me at <strong>johndoe@example.com</strong></p>
    </footer>

</body>`
    },
    { 
        id: "cover-letter", 
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background-color: #f4f4f9; color: #2c3e50;">

    <header style="text-align: left; margin-bottom: 30px;">
        <h1 style="color: #2980b9;">John Doe</h1>
        <p style="font-size: 18px; color: #7f8c8d;">Email: johndoe@example.com | Phone: +123 456 7890 | LinkedIn: linkedin.com/in/johndoe</p>
        <p style="font-size: 16px; color: #7f8c8d;">[Date]</p>
    </header>

    <div style="margin-bottom: 30px;">
        <p style="font-size: 18px; color: #34495e;">Hiring Manager's Name</p>
        <p style="font-size: 18px; color: #34495e;">Company Name</p>
        <p style="font-size: 18px; color: #34495e;">Company Address</p>
        <p style="font-size: 18px; color: #34495e;">City, State, ZIP</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #27ae60;">Dear [Hiring Manager's Name],</h2>
        <p style="color: #7f8c8d;">I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board or Company Website]. With my background in [Your Field/Industry], combined with my experience in [Relevant Experience or Skills], I am confident in my ability to make a valuable contribution to your team.</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #8e44ad;">Why I'm a Great Fit</h2>
        <p style="color: #7f8c8d;">I have [X] years of experience in [Industry or Field], and during that time, I have developed strong skills in [Key Skills]. In my previous role at [Previous Company], I was responsible for [Key Responsibilities], and I successfully [Achievement/Outcome]. This experience has equipped me with the ability to [Relevant Skill/Task] and to thrive in fast-paced, dynamic environments.</p>
        <p style="color: #7f8c8d;">I am particularly drawn to [Company Name] because of [Reason you admire the company or specific reason for applying]. I believe that my experience with [Relevant Experience] will allow me to contribute immediately to your team and help achieve the company’s goals in [Relevant Area].</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #f39c12;">Conclusion</h2>
        <p style="color: #7f8c8d;">Thank you for considering my application. I would welcome the opportunity to discuss how my background, skills, and enthusiasm align with the needs of your team. Please feel free to contact me at [Your Phone Number] or via email at [Your Email Address] to schedule an interview or if you need any additional information.</p>
        <p style="color: #7f8c8d;">I look forward to the possibility of contributing to the continued success of [Company Name].</p>
    </div>

    <div style="margin-top: 30px;">
        <p style="color: #34495e;">Sincerely,</p>
        <p style="font-weight: bold; color: #2980b9;">John Doe</p>
    </div>

</body>`
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg" ,
        initialContent: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background-color: #f4f4f9; color: #2c3e50;">

    <header style="text-align: left; margin-bottom: 30px;">
        <h1 style="color: #2980b9;">John Doe</h1>
        <p style="font-size: 18px; color: #7f8c8d;">1234 Main Street</p>
        <p style="font-size: 18px; color: #7f8c8d;">City, State, ZIP</p>
        <p style="font-size: 18px; color: #7f8c8d;">Phone: +123 456 7890 | Email: johndoe@example.com</p>
    </header>

    <div style="margin-bottom: 30px;">
        <p style="font-size: 18px; color: #34495e;">[Date]</p>
    </div>

    <div style="margin-bottom: 30px;">
        <p style="font-size: 18px; color: #34495e;">[Recipient's Name]</p>
        <p style="font-size: 18px; color: #34495e;">[Recipient's Position]</p>
        <p style="font-size: 18px; color: #34495e;">[Company Name]</p>
        <p style="font-size: 18px; color: #34495e;">[Company Address]</p>
        <p style="font-size: 18px; color: #34495e;">[City, State, ZIP]</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #27ae60;">Dear [Recipient's Name],</h2>
        <p style="color: #7f8c8d;">I hope this letter finds you well. I am writing to [reason for writing the letter]. I wanted to take a moment to [express gratitude/ask for help/make a request, etc.].</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #8e44ad;">Body of the Letter</h2>
        <p style="color: #7f8c8d;">[Provide the details or context of the letter here. Mention the key points, requests, or actions required. You can divide the content into multiple paragraphs if necessary for clarity.]</p>
    </div>

    <div style="margin-bottom: 30px;">
        <h2 style="color: #f39c12;">Conclusion</h2>
        <p style="color: #7f8c8d;">Thank you for your time and consideration. Please let me know if you require any further information or clarification. I look forward to hearing from you soon.</p>
    </div>

    <div style="margin-top: 30px;">
        <p style="color: #34495e;">Sincerely,</p>
        <p style="font-weight: bold; color: #2980b9;">John Doe</p>
    </div>

</body>`
    },
]