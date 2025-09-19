import { motion } from 'framer-motion';

function MainHome({ aboutData, scrollToSection }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-15 blur-3xl"
      />

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4"
        >
          {aboutData?.name || "Loading..."}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl text-purple-200 font-light mb-6 tracking-wide"
        >
          {aboutData?.title || "Loading..."}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {aboutData?.bio || "Loading..."}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={() => scrollToSection("about")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300"
        >
          Explore My Journey ↓
        </motion.button>
      </div>
    </motion.section>
  );
}

export default MainHome;
