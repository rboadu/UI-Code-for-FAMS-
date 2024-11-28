import React from 'react'; 
import TeamMember from '.\TeamMember';

function About(){
    return (
        <div>
            <h1> About Our Team </h1>
            <p> We are a group of passionate group of engineers
            </p>

            {/*Mission Section*/}
            <section className='mission section'>
            <h2> Our Mission: </h2>
            <p>
                The primary goal is to develop interactive robotic
                systems for industrial and educational applications. 
                The main focuses are surgical, after-surgical rehabilitation, 
                and wearable devices for enhancing accessibility. 
                We also look into the educational aspect of robotic 
                systems for college and K-12 students.
            </p>
        </section>

        {/*Vission*/}
        <section className='vission-overiew'>
            <h2>Vision:</h2>
            <p>

            </p>
        </section>

        {/*Company Background*/}
        <section className='company-overview:'>
            <h2>Company Background:</h2>
            <p>

            </p>
        </section>

        {/*Team Members*/}
        <section className='team-overview'>
            <h2>Meet Our Team </h2>

        <TeamMember
            name = "Shashwat Sharma"
            role = "FAMS Team Captin"
            bio = " Shashwat, manages finances, resources, and research in soft robotics and human-robot interaction. He is persuing a masters in Mechanical Engineering, he previously worked on soft robotic grippers at the Indian Institute of Science. His research now focuses on artificial muscles for rehabilitation devices."
            photo =""
        />
          
          <TeamMember
            name="Weida Hua"
            role= "FAMS Co-Captin"
            bio="Weida co-leads the FAMS team, focusing on soft robotics control. A master’s student in Electrical and Computer Engineering, he specializes in deep learning and embedded systems."
            photo=".jpg"
        />

        <TeamMember
            name = "Malani Snowden"
            role = "NLP & Chatbot Lead" 
            bio = "Malani leads the NLP and Chatbot teams. She is an ECE major at NYU Tandon with minors in Mathematics and Quantum Technology. Her expertise includes AI and machine learning, with projects like a code-debugging platform and AI desk pet."
            photo =""
    
        />
        <TeamMember
            name = "Jaden Ritchie"
            role = "AI Team"
            bio = "Jaden develops an intelligent query-handling system using Gemini 1.5 Flash for academic and mental health support. He's a Software Engineer Intern at Pharmasol and previously worked at Grassroots Grocer."
            photo =""
    
        />
        <TeamMember
            name = "Brandon Kolodiy"
            role = "AI Team"
            bio = "Brandon is an Electrical Engineering sophomore at NYU Tandon, specializing in chatbot systems for EG-UY 1004. He has experience in C++, Python, and machine learning frameworks like PyTorch and TensorFlow."
            photo = ""
        />

        <TeamMember
            name = "Jacqueline Guimac"
            role = "UI & AI Front-End Lead"
            bio = "Jacqueline, a CS student at NYU Tandon, leads the UI team and focuses on efficient interfaces. She is skilled in Python, C++, ReactJS, and is passionate about representing the Hispanic community in tech."
            photo = ""
        />

        <TeamMember
            name = "Nai Hernandez"
            role = "UI & Front-End Lead"
            bio = "Nai is a UX researcher and front-end developer studying Integrated Design and Media. Her work blends creativity and technical skills to craft meaningful, user-centered digital experiences."
            photo = ""
        />
        <TeamMember
            name = "Rebecca Boadu"
            role = "UI & Front-Team"
            bio = "Rebecca is a front-end developer at NYU Tandon exploring technology's intersection with real-world problem-solving. She has skills in Python, C++, and HTML."
            photo = ""
  
        />

        <TeamMember
            name = "Alex Wang"
            role = "Soft Robotics Control Lead"
            bio = "Alex, an ECE student at NYU, specializes in embedded programming and control systems for soft robotics. He joined FAMS in 2024 under Professor Rui Li's guidance."
            photo = ""
  
        />
        <TeamMember
            name = "Tony Yu"
            role = "Soft Robotics Team"
            bio = "Tony, a first-year biomolecular science student at NYU Tandon, is part of the mechanical subteam, manufacturing robotic fingers for interdisciplinary projects."
            photo = ""
  
        />
        <TeamMember
            name = "Osemudiame Kingsley-Odia (Mudia)"
            role = "Soft Robotics Team"
            bio = "Mudia focuses on bio-inspired soft robots for rehabilitation. A Chemical & Biomolecular Engineering major, he brings skills in biomimicry and CAD."
            photo = ""
  
        />
        <TeamMember
            name = "Alyza Ava Alfonso"
            role = "Soft Robotics Team"
            bio = "Alyza works on sensor integration for agricultural robots. She is an Electrical Engineering major with expertise in circuit design, troubleshooting, and programming in C++ and Python."
            photo = ""
  
        />
        <TeamMember
            name = "Yifei (Simon) Hu"
            role = "Soft Robotics Team"
            bio = "Simon focuses on sensor testing for soft robotics. He is a Computer Engineering student specializing in hardware-software integration and sensor calibration."
            photo = ""
  
        />
        <TeamMember
            name = "Ayesa Siddeky"
            role = "Soft Robotics Team"
            bio = "Ayesa, a Biomolecular Science student, specializes in soft robotic grippers, CAD, and FEA. She is passionate about applying engineering to healthcare."
            photo = ""
  
        />
        <TeamMember
            name = "Thays Leach"
            role = "Soft Robotics Team"
            bio = "Thays is an Electrical and Computer Engineering student focused on programming control systems for soft robots. Her skills include ROS, C++, and Arduino."
            photo = ""
  
        />
        <TeamMember
            name = "Gavin Velasco"
            role = "Soft Robotics Team"
            bio = "Gavin is an Electrical Engineering junior focused on robotics and software development. He has worked on projects involving app development and eye-hand coordination analysis."
            photo = ""
  
        />
        <TeamMember
            name = "Justin Yee"
            role = "Computer Vision Lead"
            bio = "Justin leads the Computer Vision team, managing research and integration of CV for medical applications. He is a senior studying Computer Engineering."
            photo = ""
  
        />
        <TeamMember
            name = "Hongkun Yang"
            role = "Computer Vision Team"
            bio = "Hongkun works on training CV models for medical research. He is studying Mathematics and Computer Science at NYU Tandon."
            photo = ""
  
        />
        <TeamMember
            name = "Veer Choksi"
            role = "Human-Robot Interaction Lead"
            bio = "Veer leads chassis design for a robotic arm project. He is a Civil Engineering student at NYU, with experience in CAD software and 3D printing."
            photo = ""
  
        />
        <TeamMember
            name = "Melanie Lin"
            role = "Human-Robot Interaction Team"
            bio = "Melanie is a Mechanical Engineering student at NYU Tandon. She specializes in 3D modeling and helps fabricate service robot parts using 3D printing."
            photo = ""
  
        />

        </section>

      </div>
    )

}

export default About;


