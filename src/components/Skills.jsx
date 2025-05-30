import React from 'react';

const Skills = () => {
  return (
    <section className="px-6 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold text-white">Réseau & Sécurité</h3>
          <ul className="list-disc list-inside">
            <li>Différentes couches réseau</li>
            <li>DNS, DHCP, Sockets</li>
            <li>SMTP, HTTP, SSL/TLS, GnuPG</li>
            <li>Cryptographie symétrique & asymétrique</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Langages & Outils</h3>
          <ul className="list-disc list-inside">
            <li>C, C++, Java, Python, MIPS</li>
            <li>HTML5, CSS, JavaScript, PHP</li>
            <li>Git, GitHub, GitLab</li>
            <li>IntelliJ IDEA, VS Code, DBeaver</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
