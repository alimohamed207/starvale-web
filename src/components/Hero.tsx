import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, CloudRain, Sun, Wind } from "lucide-react";

const AnimatedWaves = () => (
  <motion.div 
    className="absolute inset-0 z-0 overflow-hidden"
    animate={{
      background: [
        "linear-gradient(to bottom right, #f0fdf4, #e0f2fe)",
        "linear-gradient(to bottom right, #e0f2fe, #f0fdf4)",
        "linear-gradient(to bottom right, #f0fdf4, #e0f2fe)",
      ]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      className="absolute bottom-0 left-0 w-[200%] h-[50vh] opacity-30 text-primary"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(1440, 0)"></path>
      </svg>
    </motion.div>
    <motion.div
      animate={{ x: ["-50%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      className="absolute bottom-0 left-0 w-[200%] h-[55vh] opacity-20 text-sky-400"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(1440, 0)"></path>
      </svg>
    </motion.div>
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      className="absolute bottom-0 left-0 w-[200%] h-[45vh] opacity-40 text-green-300"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(1440, 0)"></path>
      </svg>
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const bgY2 = useTransform(scrollY, [0, 1000], [0, 250]);
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);
  const imageY = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Elements */}
      <AnimatedWaves />

      <div className="w-full">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: textY, opacity }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              أول منصة زراعية بالذكاء الاصطناعي في الوادي الجديد
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-gray-900">
              زراعة ذكية بتعتمد على <span className="text-primary relative">
                ذكاء الأقمار الصناعية
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              منصة بتساعد المزارعين في الوادي الجديد ياخدوا قرارات أحسن باستخدام بيانات الطقس، الذكاء الاصطناعي، والمستشعرات الذكية.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                حمل التطبيق <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 rounded-full glass-card text-gray-900 font-medium hover:bg-white/60 transition-colors">
                جرب النسخة التجريبية
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: imageY }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Abstract Farm Illustration */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
                alt="Smart Farm" 
                className="w-full h-full object-cover rounded-[3rem]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Glass Weather Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-24 glass-panel p-6 rounded-3xl w-64"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-800">الوادي الجديد</span>
                <Sun className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">38°C</div>
              <div className="text-sm text-gray-600 mb-4">خطر تبخر عالي</div>
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-3/4" />
              </div>
            </motion.div>

            {/* Floating Action Card */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-32 glass-panel p-6 rounded-3xl w-72"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">تنبيه ري</h4>
                  <p className="text-sm text-gray-600">أجل الري يومين. متوقع مطر يوم الخميس.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="container mx-auto px-6 relative z-10 mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">نظرة عامة على المشروع</h3>
          <p className="text-gray-600">اتعرف أكتر على إزاي ستارڤيل بتغير شكل الزراعة في الوادي الجديد.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-gray-900 border-4 border-white/50"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/vo9MaaTmQwg" 
              title="Starvale Overview 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-gray-900 border-4 border-white/50"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/vOaP_CX-Y2o" 
              title="Starvale Overview 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
