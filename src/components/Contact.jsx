import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact</h2>
      <p className="text-gray-300 mb-2">📧 mahamadoukeita469@gmail.com</p>
      <p className="text-gray-300 mb-2">📞 0751120461</p>
      <p className="text-gray-300 mb-2">🔗 
        <a href="https://www.linkedin.com/in/mahamadou-keita-3508a9" className="text-cyan-500 hover:underline">LinkedIn</a> | 
        <a href="https://github.com/KeitaMahamadou01" className="text-cyan-500 hover:underline ml-2">GitHub</a>
      </p>
    </section>
  );
};

export default Contact;
