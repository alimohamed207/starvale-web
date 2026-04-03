import { motion } from "motion/react";
import { Download as DownloadIcon, Apple, Play } from "lucide-react";

export default function Download() {
  return (
    <section className="py-32 relative bg-primary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1592982537447-6f2334208f34?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl bg-white/10"
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8">
            <DownloadIcon className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            جاهز تزرع بذكاء؟
          </h2>
          <p className="text-xl text-green-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            انضم لآلاف المزارعين في الوادي الجديد اللي بيوفروا ميه وبيزودوا محصولهم مع ستارڤيل.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://drive.google.com/file/d/1ESB494cVOr_JlLoZZEkkXQIwPHP7iBvM/view?usp=drive_link" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white text-primary font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-4 shadow-xl hover:-translate-y-1 duration-300">
              <DownloadIcon className="w-6 h-6" />
              <div className="text-right">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">حمل التطبيق</div>
                <div className="text-lg leading-none mt-1">للأندرويد (APK)</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
