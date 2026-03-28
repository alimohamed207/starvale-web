export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Starvale Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              منصة ذكاء الطقس الزراعي اللي بتمكن المزارعين في الوادي الجديد من اتخاذ قرارات مبنية على البيانات.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">المنتج</h4>
            <ul className="space-y-4">
              {['المميزات', 'إزاي بيشتغل', 'الأسعار', 'دراسات حالة', 'أسئلة شائعة'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">الشركة</h4>
            <ul className="space-y-4">
              {['عننا', 'الوظايف', 'المدونة', 'الصحافة'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} ستارڤيل. كل الحقوق محفوظة.</p>
            <p>
              تم التطوير بواسطة <a href="https://seya-net.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors font-semibold">Seya Team</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
