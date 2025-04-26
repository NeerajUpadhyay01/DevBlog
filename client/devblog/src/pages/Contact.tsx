import React from "react";
import { Icon } from "@iconify/react";
import Icons from "../components/Icons";

const Contact: React.FC = () => {
  const IconArr: String[] = [
    "logos:javascript",
    "devicon:typescript",
    "devicon:postgresql-wordmark",
    "devicon:mongodb-wordmark",
    "skill-icons:react-dark",
    "logos:nodejs",
    "skill-icons:expressjs-dark",
    "devicon:tailwindcss",
    "logos:html-5",
    "devicon:css3-wordmark",
    "devicon:git",
    "devicon:github",
  ];
  return (
    <div className="flex flex-col md:h-max h-screen w-screen">
      <div className="flex flex-col h-[100vh] w-screen md:justify-evenly gap-y-10 items-center">
        <div className="h-max flex md:flex-row flex-col gap-5 shadow-2xl rounded md:w-max w-[75vw] p-3 items-center">
          <div>
            <img
              className="rounded-full shadow-xl border-2 border-indigo-600 hover: hover:shadow-2xl cursor-pointer"
              src="https://media.licdn.com/dms/image/D4E03AQEutysDmmKD9Q/profile-displayphoto-shrink_400_400/0/1689167832524?e=1700697600&v=beta&t=ax4Vp9kY3Hj0p4guS0zQfLIMnELA0zZ632MbNeKj0IU"
              alt=""
              height="200px"
              width="200px"
            />
          </div>
          <div className="flex flex-col h-max gap-3 p-2 md:w-[65vw] w-[50vw]">
            <h1 className="md:text-xl text-base font-semibold">
              Neeraj Upadhyay
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              I am a full-stack developer who designed and developed DevBlog, a
              seamless platform where developers unite, share their stories, the
              latest tech updates, or just be themselves, utilizing Postgres
              SQL, Express.js, React.js, Tailwind CSS, and Node.js with
              TypeScript to create a modern and scalable Web application.
            </p>
          </div>
        </div>

        <div className="h-max flex flex-col gap-5 shadow-2xl rounded md:w-[80vw] w-[75vw] p-3 items-center">
          <p className="title text-xl font-bold">
            Explored <span className="text-indigo-600">Tech Stack</span>
          </p>
          <div className="h-max w-[100%] flex items-center flex-wrap justify-around gap-3">
            {IconArr.map((icon) => (
              <Icons iconName={icon} />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-max shadow-2xl w-max items-center">
          <div className="p-2 flex h-max w-max justify-center items-center">
            <h1 className="text-indigo-600 font-semibold md:text-xl capitalize text-base">
              Let's connect on
            </h1>
          </div>
          <div className="flex md:flex-row flex-col items-center h-max w-max gap-5 p-2">
            <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
              <Icon icon="ic:baseline-email" color="orange" height="4vh" />
              <p className="text-gray-600 font-medium">
                neerajsaraswat111@gmail.com
              </p>
            </div>
            <a href="">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="icon-park:github" height="4vh" />
                <p className="text-gray-600 font-medium">GitHub</p>
              </div>
            </a>

            <a href="">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="devicon:linkedin" height="4vh" />
                <p className="text-gray-600 font-medium">Linkedin</p>
              </div>
            </a>
            <a href="">
              <div className="flex flex-row justify-center gap-2 p-1 h-max w-max">
                <Icon icon="line-md:twitter-x-alt" height="4vh" />
                <p className="text-gray-600 font-medium">Twitter</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
