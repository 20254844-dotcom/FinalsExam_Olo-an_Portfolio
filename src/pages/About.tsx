function About() {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 mb-10 text-lg">
          I'm an IT student from the University of Baguio who's still learning to be better.
          I enjoy working on simple and fun projects and turning what I learn into something meaningful.
        </p>
  
        <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">HTML</span>
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">CSS</span>
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">Bootstrap</span>
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">TypeScript</span>
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">React</span>
          <span className="px-3 py-1 text-sm squared-full border border-blue-500 text-blue-400">Simple Backend</span>
        </div>
  
        <h2 className="text-xl font-bold text-white mb-4">Education</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-blue-400 text-sm font-medium">Elementary</p>
            <p className="text-white font-semibold">Buyagan Elementary School</p>
            <p className="text-gray-500 text-sm">2013 – 2019</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-blue-400 text-sm font-medium">High School</p>
            <p className="text-white font-semibold">Cordillera Career Development College</p>
            <p className="text-gray-500 text-sm">2019 – 2025</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-blue-400 text-sm font-medium">College</p>
            <p className="text-white font-semibold">University of Baguio – BSIT</p>
            <p className="text-gray-500 text-sm">2025 – Present</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;