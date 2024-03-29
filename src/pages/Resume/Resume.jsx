import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Higher Secondary School Certificate"
            date="2017 — 2019"
          // description="."
          />
        </ol>
        <ol className="timeline-list mt-2 lg:mt-2">
          <TimelineItem
            title="Bachelor of Business Administration"
            date="Running"
          // description="."
          />
        </ol>
      </div>


      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <div className="h3 md:flex justify-center flex- text-white">
          <div className="p-10">
            <h1 className="text-center  font-montserrat text-2xl ">Expertise</h1>
            <div className="md:mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="">
                <img className="w-10 h-10 rounded-xl " src="data:image/png;base64,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" alt="HTML5" />
              </div>
              <div>
                <img className="h-10 w-10 rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
              </div>
              <div>
                <img className="h-10 w-10 rounded-xl" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGZgDbt-O-QaWs5mOJM6fnbbmFcXXpirF0G8zrv2q_A&s" alt="" />
              </div>
            </div>
          </div>
          <div className="p-10">
            <h1 className="text-center  font-montserrat text-2xl">Comfortable</h1>
            <div className="md:mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
              </div>
            </div>
          </div>
          <div className="p-10 ">
            <h1 className="text-center  font-montserrat text-2xl">Familiar</h1>
            <div className="md:mt-10 grid grid-cols-2 md:grid-cols-3 mt-10 gap-6">
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src=" https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl " src=" https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src=" https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src=" https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirPA2StzlQ9dXqdoEBbNwRK_cuBLE92CgU3-AQZL5Kg&s" alt="" />
              </div>
              <div>
                <img className="w-10 h-10 rounded-xl  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qsZJPrZZJaKSsQQtfhFdk-CC_gMUBv_J_tIDMhj3ZQ&s" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
