import { motion } from "motion/react";
import { CloudLightning, Droplet, ScanLine, Cpu, MessageSquare } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <CloudLightning className="w-8 h-8 text-sky-600" />,
      title: "ذكاء الطقس",
      desc: "توقعات طقس محلية جداً متفصلة على إحداثيات مزرعتك بالظبط."
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
      title: "ري ذكي",
      desc: "جداول ري أوتوماتيكية بتوفر لحد 40% من المياه الجوفية."
    },
    {
      icon: <ScanLine className="w-8 h-8 text-green-600" />,
      title: "ذكاء اصطناعي لأمراض النبات",
      desc: "صور النبات عشان تكتشف الأمراض وتاخد خطط علاج فورية."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "تكامل المستشعرات",
      desc: "وصل مستشعرات التربة والحرارة (IoT) للمتابعة في وقتها."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "مساعد ذكي",
      desc: "مساعد ذكاء اصطناعي شغال 24/7 بيرد على أسئلتك الزراعية بالعربي."
    }
  ];

  return (
    <section id="features" className="py-32 relative bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            الإمكانيات
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            كل اللي هتحتاجه عشان تزرع بذكاء
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 rounded-[2.5rem] ${index === 4 ? 'lg:col-span-2' : ''} ${index === 1 || index === 3 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="w-16 h-16 rounded-3xl bg-white/60 flex items-center justify-center mb-8 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
