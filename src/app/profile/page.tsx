"use client";
import axios from "axios";
import Image from 'next/image';
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

   

    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Company Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="bg-red-200 shadow-md rounded-lg p-6">
            <h2 className="text-gray-900 text-center text-xl font-bold mb-2">Company Environment</h2>
            <Image
              src="https://www.capgemini.com/in-en/wp-content/uploads/sites/6/2019/04/NCR-Office.jpg?w=960"
              alt="Company Overview"
              width={960}
              height={540}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-900 text-l font-bold">
              TechWave Solutions is a leading technology company specializing in innovative software solutions and digital services. Established in 2010, TechWave has rapidly grown to become a key player in the tech industry, delivering cutting-edge products and services to clients worldwide. With a focus on leveraging emerging technologies, such as artificial intelligence, blockchain, and cloud computing, TechWave empowers businesses to transform their operations and achieve digital excellence.
            </p>
          </div>
          <div className="bg-red-200 shadow-md rounded-lg p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-2">Team</h2>
            <Image
              src="https://i.ytimg.com/vi/FWXZxUdqRsk/maxresdefault.jpg"
              alt="Company Culture"
              width={1280}
              height={720}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700  text-l font-bold">
              TechWave Solutions boasts a diverse and talented team of professionals driven by passion, innovation, and expertise. Comprising software engineers, designers, consultants, and project managers, the team collaborates seamlessly to deliver exceptional technology solutions to clients worldwide. With a culture that values continuous learning, collaboration, and personal growth, TechWave fosters a supportive environment where team members can thrive and unleash their full potential. Each member brings unique skills and perspectives to the table, contributing to a dynamic and inclusive workplace culture that fuels creativity and innovation. Together, the TechWave team is dedicated to pushing the boundaries of technology and driving positive change in the digital landscape.
            </p>
          </div>
          <div className="bg-red-200 shadow-md rounded-lg p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-2">Office Spaces </h2>
            <Image
              src="https://assets.devx.work/images/blog/blog-detail/co-working-enterpreneyrs/slider-part/coworking-ahmedaba-slider-3.png"
              alt="Office Spaces"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700  text-l font-bold">
              TechWave Solutions maintains modern and dynamic office spaces designed to foster creativity, collaboration, and innovation. Located in vibrant urban centers, the offices feature open floor plans, ergonomic workstations, and state-of-the-art facilities to enhance productivity and employee well-being. With dedicated areas for meetings, brainstorming sessions, and social gatherings, the office environments promote a vibrant and inclusive culture where team members can thrive. From breakout areas with comfortable seating to recreational zones equipped with games and relaxation spaces, TechWave's office spaces are thoughtfully curated to inspire creativity and drive success in the digital age.
            </p>
          </div>
          <div className="bg-red-200 shadow-md rounded-lg p-6">
            <h2 className="text-gray-900 text-xl font-bold mb-2">Revenue model</h2>
            <Image
              src="https://getlucidity.com/wp-content/uploads/2021/03/revenue-model-framework.png"
              alt="Revenue model"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700  text-l font-bold">
              TechWave Solutions generates revenue primarily through custom software development services, strategic consulting, and subscription-based products. Clients pay for bespoke software solutions tailored to their needs, while consulting services provide expert guidance on digital transformation. Subscription-based products offer recurring revenue streams through cloud-based platforms or software-as-a-service (SaaS) solutions. Additionally, the company earns revenue from license fees, maintenance and support contracts, training programs, and partnerships with technology allies. This diversified revenue model enables TechWave to sustainably grow its business while delivering value to clients across various industries.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <hr className="my-2" />
          <button
            onClick={logout}
            className="bg-red-200 mt-4 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    );
};
