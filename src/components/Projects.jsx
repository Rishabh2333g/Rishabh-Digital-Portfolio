
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Student Prediction Model',
        description:'The "Student Prediction Model" project is centered around predicting student performance through the application of machine learning techniques. Python serves as the primary programming language for this endeavor, with Pandas being utilized for data manipulation and analysis. For data visualization, the project employs Seaborn and Matplotlib, enabling the creation of insightful graphical representations. Machine learning models and preprocessing techniques from Scikit-learn are implemented to analyze and predict student outcomes effectively. The project allows users to select different types of graphical data analysis. It conducts a comprehensive analysis based on various factors, including class, semester, gender, nationality, grade, section, topic, stage, and absenteeism, to provide a nuanced understanding of student performance.',
        image: {},
        git:'https://github.com/Rishabh2333g/Student-Performance-prediction-ML',
        technologies:[' Python', 'Scikit-learn', 'Pandas', 'Serborn']
    },
    {
        title:'FurniHub - Marketplace for Used Furniture',
        description:'I built a full-stack web application utilizing the MERN stack, which features comprehensive functionalities including Seller and Buyer Dashboards, Product Filtering, and Authentication using JWT for secure access. The development process involved the integration of Firebase authentication to ensure secure user access, alongside the implementation of JWT tokens to maintain user sessions effectively. I engineered intuitive user interfaces that support image uploads and streamlined management of furniture listings. Additionally, I orchestrated the integration of payment gateways and advanced search functionalities to enhance the user experience and operational efficiency of the platform.',
        image: {},
        git:'https://github.com/Rishabh2333g/FurniHub.co',
        technologies:['MERN', 'Firebase', 'JWT', 'Payment Gateway']
    },
    {
        title:'FlexFit: Posture Detection and Correction AI Trainer',
        description:'I developed a machine learning system that leverages MediaPipe, OpenPose, and LSTM models to analyze exercise form effectively. This system was trained to identify and track body movements and yoga poses accurately during gym exercises. I designed the system to perform pose detection, correction, and sequencing in real-time, ensuring a comprehensive analysis of exercise form. Feedback on the user performance is delivered through a user-friendly application, which can be accessed on either mobile or web platforms, providing a versatile and accessible solution for users aiming to improve their exercise techniques.',
        image: {},
        git:'https://github.com/Rishabh2333g/Gym-exercise-Posture-Detection-and-Correction',
        technologies:['MediaPipe', 'Python', 'Hugging Face']
    },
    {
        title:'Zoom-Clone',
        description:'The project seamlessly integrates Clerk and GetStream to provide robust user authentication and efficient messaging capabilities. It employs Tailwind CSS for its styling, ensuring a modern and responsive design. Built with Next.js, the project benefits from enhanced performance and SEO, making it more accessible and faster for users. Package management is handled through npm, streamlining the development process by efficiently managing dependencies. Additionally, the project places a strong emphasis on security, particularly in the handling of API keys and secrets, ensuring that user data and application integrity are maintained at all times.',
        image: {},
        git:'https://github.com/Rishabh2333g/zoom-clone-main',
        technologies:['Clerk', 'GetStream', 'Tailwind CSS', 'Next.js']
    },
]

export default Projects