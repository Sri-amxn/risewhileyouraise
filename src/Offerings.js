import React from "react";
import Card from "./Card";
import "./Offerings.css";
import video_lessons from './assets/images/video_lessons.svg';
import theraputic from './assets/images/theraputic.svg';
import reflective from './assets/images/reflective.svg';
import virtual from './assets/images/virtual.svg';
import inner from './assets/images/innner.svg';
import upgrades from './assets/images/upgrades.svg';
import pdf from './assets/images/pdf.svg';
import lifetime from './assets/images/lifetime.svg';
import certificate from './assets/images/certificate.svg';
import grpvideo from './assets/images/grpvideo.svg';

const cardData = [
  { image: video_lessons, title: "Video Lessons" },
  { image: theraputic, title: "Theraputic Guided Audio" },
  { image: reflective, title: "Reflective Writing Assignments" },
  { image: virtual, title: "Access to a Virtual Healing Community" },
  { image: inner, title: "Inner Work Practices" },
  { image: upgrades, title: "All Future Upgrades and Content Add-ons" },
  { image: pdf, title: "PDF Supportive Notes" },
  { image: lifetime, title: "Lifetime Access" },
  { image: certificate, title: "Certificate of Completion" },
  { image: grpvideo, title: "Monthly Live Group Q&A Sessions with Namrata" },
];

const Offerings = () => {
  return (
    <div className="grid">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default Offerings;
