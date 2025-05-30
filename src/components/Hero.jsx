import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
        Keita Mahamadou
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Étudiant en cybersécurité | Développeur passionné
      </p>
      <a
        href="/cv/Mahamadou_Keita-2.pdf"
        download
        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
      >
        Télécharger mon CV
      </a>
    </section>
  );
};

export default Hero;
