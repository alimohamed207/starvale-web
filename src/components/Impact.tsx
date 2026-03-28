import { motion } from "motion/react";
import { Droplets, TrendingUp, ShieldCheck } from "lucide-react";

export default function Impact() {
  const stats = [
    {
      icon: <Droplets className="w-10 h-10 text-blue-500" />,
      value: "40%",
      label: "ميه متوفرة",
      desc: "متوسط تقليل استخدام المياه الجوفية في الموسم."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      value: "25%",
      label: "تقليل خساير المحصول",
      desc: "خساير أقل بفضل الاكتشاف المبكر للأمراض وتنبيهات الطقس."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
      value: "1.5x",
      label: "زيادة الكفاءة",
      desc: "محصول أعلى للهكتار من خلال التوزيع الأمثل للموارد."
    }
  ];

  return (
    <section id="impact" className="py-32 relative bg-primary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586771107445-d3af11116297?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-300 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            التأثير
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            نتايج حقيقية للمزارعين الحقيقيين
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white/10 backdrop-blur-md p-10 rounded-[2rem] hover:bg-white/20 transition-colors shadow-xl shadow-black/5 ${index === 1 ? 'md:translate-y-8' : ''}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                {stat.icon}
              </div>
              <div className="text-6xl font-bold mb-4 tracking-tighter">{stat.value}</div>
              <h3 className="text-2xl font-semibold mb-3">{stat.label}</h3>
              <p className="text-green-100 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
