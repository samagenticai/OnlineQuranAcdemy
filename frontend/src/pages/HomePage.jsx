import React from 'react';
import HeroSection from '../sections/home/HeroSection.jsx'
import WhyChooseUs from '../sections/home/WhyChooseUs.jsx'
import OurCourses from '../sections/home/OurCourses.jsx'
import HowItWorks from '../sections/home/HowItWorks.jsx'
import MeetOurTeachers from '../sections/home/MeetOurTeachers.jsx'
import LearningBenefits from '../sections/home/LearningBenefits.jsx'
import StudentReviews from '../sections/home/StudentReviews.jsx'
import FAQSection from '../sections/home/FAQSection.jsx'
import CTASection from '../sections/home/CTASection.jsx'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurCourses />
      <HowItWorks />
      <MeetOurTeachers />
      <LearningBenefits />
      <StudentReviews />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default HomePage;
