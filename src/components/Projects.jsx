import React from 'react';

const Projects = () => {
  const projets = [
    {
      nom: 'Prekar',
      description: "Application de location de voiture (Symfony, MySQL)",
    },
    {
      nom: 'Pac-Man',
      description: "Jeu Pac-Man développé en C++ avec SDL2",
    },
    {
      nom: 'Twisk',
      description: "Simulation d’événements discrets en Java et C",
    },
    {
      nom: 'Zoot',
      description: "Création d’un compilateur avec Jflex, JavaCup et MIPS",
    },
    {
      nom: 'Développement mobile',
      description: "App Android pour navigation dans un bâtiment",
    },
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Projets</h2>
      <div className="space-y-6">
        {projets.map((projet, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow">
            <h3 className="text-xl text-white font-semibold">{projet.nom}</h3>
            <p className="text-gray-300">{projet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
