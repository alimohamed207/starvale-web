import { motion } from "motion/react";
import { Camera, Upload, CheckCircle2, AlertTriangle, Cpu } from "lucide-react";

export default function AIDetection() {
  return (
    <section className="py-32 relative bg-white/40 overflow-hidden">
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
              حماية المحصول بالذكاء الاصطناعي
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              اكتشف الأمراض في ثواني
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              متستناش خبير. صور النبات المريض، والذكاء الاصطناعي بتاعنا هيتعرف على المرض ويديك العلاج المظبوط في ثواني.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">التقط صورة</h4>
                  <p className="text-gray-600">استخدم كاميرا تليفونك عشان تصور الورقة أو الثمرة المصابة.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">تشخيص ذكي</h4>
                  <p className="text-gray-600">النموذج بتاعنا بيقارنها بآلاف الأمراض النباتية المعروفة.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Abstract Phone Frame */}
            <div className="w-[320px] h-[640px] bg-white rounded-[3rem] shadow-2xl p-4 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-2xl z-20" />
              
              <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden relative flex flex-col">
                {/* Camera View */}
                <div className="h-2/3 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Plant Leaf" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Scanning Animation */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] z-10"
                  />
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-black/10">
                    <div className="w-12 h-12 rounded-full bg-white" />
                  </div>
                </div>

                {/* Result Card */}
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <h4 className="font-bold text-gray-900 text-lg">تم اكتشاف اللفحة المبكرة</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">نسبة التأكد</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[94%]" />
                    </div>
                    <button className="w-full py-3 mt-4 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors">
                      عرض خطة العلاج
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-1/4 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <Upload className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-800">جاري رفع الصورة...</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
