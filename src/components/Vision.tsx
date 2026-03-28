import { motion } from "motion/react";
import { Globe, Cpu, Zap, Link } from "lucide-react";

export default function Vision() {
  const visions = [
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "نماذج تنبؤ بالذكاء الاصطناعي",
      desc: "تعلم آلي متقدم لتوقع المحصول وأسعار السوق قبلها بشهور."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "أتمتة كاملة",
      desc: "توصيل مباشر بصمامات الري الذكية عشان تروي المحاصيل أوتوماتيك بناءً على قرارات الذكاء الاصطناعي."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "توسع قومي",
      desc: "التوسع من الوادي الجديد لتغطية كل الأراضي الزراعية في مصر والشرق الأوسط."
    },
    {
      icon: <Link className="w-6 h-6 text-purple-500" />,
      title: "تكامل الأنظمة",
      desc: "التوصيل بقواعد البيانات الزراعية القومية لتوزيع الدعم بشكل أسهل."
    }
  ];

  return (
    <section className="py-32 relative bg-sand/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              رؤية المستقبل
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              بنبني مستقبل الزراعة
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              إحنا مش بس بنعمل تطبيق؛ إحنا بنبني البنية التحتية الرقمية للزراعة المستدامة في المناطق الصحراوية.
            </p>

            <div className="space-y-8">
              {visions.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop" 
              alt="Future Farming" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent mix-blend-multiply" />
            
            {/* Overlay Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-12 right-12 glass-panel p-8 rounded-3xl backdrop-blur-xl bg-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">تأثير عالمي</h4>
                  <p className="text-green-100 text-sm">أهداف التنمية المستدامة</p>
                </div>
              </div>
              <div className="flex gap-2">
                {['القضاء على الجوع', 'مياه نظيفة', 'العمل المناخي'].map((goal, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-md">
                    {goal}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
