import { motion } from "motion/react";
import { LayoutDashboard, CloudSun, Stethoscope, CheckCircle, MessageCircle } from "lucide-react";

export default function AppPreview() {
  const screens = [
    {
      title: "لوحة التحكم",
      icon: <LayoutDashboard className="w-5 h-5" />,
      image: "/app-dashboard.png"
    },
    {
      title: "الطقس",
      icon: <CloudSun className="w-5 h-5" />,
      image: "/app-weather.png"
    },
    {
      title: "التوصيات",
      icon: <CheckCircle className="w-5 h-5" />,
      image: "/app-recommendations.png"
    },
    {
      title: "اكتشاف الأمراض",
      icon: <Stethoscope className="w-5 h-5" />,
      image: "/app-disease.png"
    },
    {
      title: "المساعد الذكي",
      icon: <MessageCircle className="w-5 h-5" />,
      image: "/app-chat.png"
    }
  ];

  return (
    <section className="py-32 relative bg-white/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            نظرة على التطبيق
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            مزرعتك في جيبك
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            واجهة نظيفة وسهلة متصممة مخصوص للمزارعين.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`flex flex-col items-center ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Phone Mockup */}
              <div className="w-[280px] h-[580px] bg-white rounded-[3rem] shadow-2xl p-3 relative overflow-hidden mb-8 group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-2xl z-20" />
                
                <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={screen.image} 
                    alt={screen.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Mock UI Elements */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <div className="w-24 h-4 rounded-full bg-white/20" />
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {screen.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{screen.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
