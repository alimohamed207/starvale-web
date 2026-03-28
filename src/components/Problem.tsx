import { motion } from "motion/react";
import { Droplets, ThermometerSun, Wind } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "الاعتماد على المياه الجوفية",
      desc: "الزراعة في الوادي الجديد بتعتمد كلياً على المياه الجوفية. كل نقطة بتفرق."
    },
    {
      icon: <ThermometerSun className="w-8 h-8 text-orange-500" />,
      title: "حرارة الصحراء القاسية",
      desc: "معدلات التبخر العالية معناها إن أي قرار ري غلط بيضيع ميه ويضر المحصول."
    },
    {
      icon: <Wind className="w-8 h-8 text-gray-500" />,
      title: "طقس متقلب",
      desc: "العواصف الرملية المفاجئة وانخفاض درجات الحرارة ممكن تدمر حصاد موسم كامل."
    }
  ];

  return (
    <section className="py-32 relative bg-sand/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            التحدي
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            الزراعة في الصحراء مفيهاش رحمة
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            من غير بيانات دقيقة، المزارعين بيضطروا يخمنوا. ده بيؤدي لإهدار الموارد، نقص المحصول، وممارسات غير مستدامة.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 ${index === 1 ? 'md:translate-y-8' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
