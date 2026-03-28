import { motion } from "motion/react";
import { MapPin, Satellite, BrainCircuit, Smartphone } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "دخل بيانات المزرعة",
      desc: "ارسم حدود مزرعتك واختار نوع المحصول."
    },
    {
      icon: <Satellite className="w-8 h-8 text-white" />,
      title: "جمع بيانات الأقمار",
      desc: "بنجيب بيانات الطقس ورطوبة التربة بدقة عالية."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      title: "تحليل الذكاء الاصطناعي",
      desc: "نماذجنا بتحسب احتياجات الميه والمخاطر بالظبط."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "توصيات ذكية",
      desc: "استلم تنبيهات بسيطة وعملية على تليفونك."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative bg-sand/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            الخطوات
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            إزاي ستارفيل بيشتغل
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl shadow-primary/20 relative">
                  {step.icon}
                  <div className="absolute -bottom-4 bg-white text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
