import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-32 relative overflow-hidden bg-white/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1592982537447-6f2334208f34?q=80&w=2070&auto=format&fit=crop" 
              alt="Satellite Data" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            
            {/* Overlay Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-8 right-8 glass-panel p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-900 tracking-wider uppercase">بث مباشر من الأقمار الصناعية</span>
              </div>
              <p className="text-gray-800 font-medium">بنعالج أكتر من 10,000 نقطة بيانات للهكتار يومياً.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              الحل بتاعنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              من الفضاء للأرض: قرارات زراعية بسيطة
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              ستارفيل بيحول بيانات الطقس المعقدة من الأقمار الصناعية لقرارات زراعية بسيطة وعملية. بنقولك بالظبط محصولك محتاج إيه وإمتى.
            </p>

            <ul className="space-y-6">
              {[
                "إمتى تروي بناءً على رطوبة التربة وتوقعات الطقس",
                "كمية الميه المطلوبة بالظبط لكل نوع محصول",
                "إنذارات مبكرة لمخاطر الطقس (صقيع، موجات حر)"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-gray-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
