import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container2">
        <div className="text-center2 mb-20">
          <h1 className="title2">Meet Our Team</h1>
          <p className="description2">Our dedicated team is committed to reducing food waste and supporting communities. With diverse expertise in technology and outreach, we ensure ShareMeal connects surplus food effectively. Get to know us!</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="https://dummyimage.com/80x80" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Tripathi</h2>
                <p className="member-role">Web Designer and Developer</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="https://dummyimage.com/84x84" />
              <div className="member-details">
                <h2 className="member-name">Shani Soni</h2>
                <p className="member-role">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="https://dummyimage.com/84x84" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Mohile</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="https://dummyimage.com/84x84" />
              <div className="member-details">
                <h2 className="member-name">Manish Kashyap</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="https://dummyimage.com/84x84" />
              <div className="member-details">
                <h2 className="member-name">Someone</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
