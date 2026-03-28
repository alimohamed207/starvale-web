import { motion } from "motion/react";
import { Activity, Droplet, Thermometer, Cloud, Smartphone } from "lucide-react";

export default function Sensors() {
  return (
    <section className="py-32 relative bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            تكامل الـ IoT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            مستشعرات المزرعة الذكية
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            وصل مستشعرات عشان تتابع التربة والميه بدقة عالية وفي وقتها.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Droplet className="w-8 h-8 text-blue-500" />, title: "رطوبة التربة", desc: "تابع مستويات الميه عند أعماق الجذور المختلفة." },
            { icon: <Thermometer className="w-8 h-8 text-orange-500" />, title: "الحرارة", desc: "راقب التغيرات في حرارة التربة والهواء." },
            { icon: <Activity className="w-8 h-8 text-green-500" />, title: "جودة الميه", desc: "قيس مستويات الملوحة والـ pH في المياه الجوفية." }
          ].map((sensor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 rounded-3xl flex flex-col items-center text-center ${index === 1 ? 'lg:-translate-y-8' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-6 shadow-sm">
                {sensor.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{sensor.title}</h3>
              <p className="text-gray-600">{sensor.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Diagram */}
        <div className="max-w-4xl mx-auto relative h-64 flex items-center justify-between">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
              className="h-full bg-gradient-to-r from-blue-400 via-primary to-sky-500"
            />
          </div>

          {[
            { icon: <Activity className="w-8 h-8 text-gray-700" />, label: "المستشعرات" },
            { icon: <Cloud className="w-8 h-8 text-gray-700" />, label: "السحابة" },
            { icon: <img src="/logo.png" alt="Starvale" className="w-8 h-8 object-contain" />, label: "ذكاء ستارفيل" },
            { icon: <Smartphone className="w-8 h-8 text-gray-700" />, label: "المزارع" }
          ].map((node, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.5, type: "spring" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-4">
                {node.icon}
              </div>
              <span className="font-bold text-gray-900">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
