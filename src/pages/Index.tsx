import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";

const RestaurantMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedItems, setAnimatedItems] = useState([]);

  const menuData = {
    meat: {
      title: "مليو اللحمة",
      titleEn: "MEAT MENU",
      items: [{
        name: "كلاسيك تشيز بيف",
        nameEn: "Classic Cheese Beef",
        price: "25",
        description: "لحمة بقري مع جبنة شيدر وخس وطماطم"
      }, {
        name: "دراجون فيل",
        nameEn: "Dragon Feel",
        price: "10",
        description: "لحمة بقري حارة مع صوص دراجون"
      }, {
        name: "مشروم برجر",
        nameEn: "Mushroom Burger",
        price: "25",
        description: "لحمة بقري مع مشروم طازج"
      }, {
        name: "سكورن آرت",
        nameEn: "Scorn Art",
        price: "35",
        description: "لحمة بقري مع صوص خاص"
      }, {
        name: "تريبل وي",
        nameEn: "Triple Way",
        price: "65",
        description: "ثلاث قطع لحمة بقري"
      }]
    },
    chicken: {
      title: "مليو السدق",
      titleEn: "CHICKEN MENU",
      items: [{
        name: "كلاسيك سدق",
        nameEn: "Classic Chicken",
        price: "15",
        description: "قطعة دجاج مشوية مع الخضار"
      }, {
        name: "دراجون فيل سدق",
        nameEn: "Dragon Feel Chicken",
        price: "15",
        description: "دجاج حار مع صوص دراجون"
      }, {
        name: "مشروم سدق",
        nameEn: "Mushroom Chicken",
        price: "25",
        description: "دجاج مع مشروم طازج"
      }, {
        name: "سكورن آرت سدق",
        nameEn: "Scorn Art Chicken",
        price: "25",
        description: "دجاج مع صوص خاص"
      }, {
        name: "تريبل وي سدق",
        nameEn: "Triple Way Chicken",
        price: "20",
        description: "ثلاث قطع دجاج"
      }]
    },
    grilled: {
      title: "مليو الفراخ",
      titleEn: "GRILLED MENU",
      items: [{
        name: "كانتاكي فرايد",
        nameEn: "Kentucky Fried",
        price: "70",
        description: "قطع دجاج مقلية"
      }, {
        name: "كانتاكي وي",
        nameEn: "Kentucky Way",
        price: "80",
        description: "وجبة دجاج كاملة"
      }, {
        name: "كانتاكي فيل",
        nameEn: "Kentucky Feel",
        price: "95",
        description: "قطع دجاج حارة"
      }, {
        name: "تشيكن رول",
        nameEn: "Chicken Roll",
        price: "30",
        description: "رول دجاج بالخضار"
      }, {
        name: "رافي ناجتس",
        nameEn: "Rafi Nuggets",
        price: "20",
        description: "قطع دجاج صغيرة"
      }]
    },
    appetizers: {
      title: "الاضافات",
      titleEn: "APPETIZERS",
      items: [{
        name: "بيكونا",
        nameEn: "Bacon",
        price: "25",
        description: "شرائح لحم مقدد"
      }, {
        name: "سموك تركي",
        nameEn: "Smoked Turkey",
        price: "15",
        description: "لحم تركي مدخن"
      }, {
        name: "موزا",
        nameEn: "Moza",
        price: "10",
        description: "جبنة موزاريلا"
      }, {
        name: "خيار مخلل",
        nameEn: "Pickled Cucumber",
        price: "15",
        description: "خيار مخلل طازج"
      }, {
        name: "جبنة شيدر",
        nameEn: "Cheddar Cheese",
        price: "25",
        description: "شرائح جبنة شيدر"
      }, {
        name: "صوص حار",
        nameEn: "Hot Sauce",
        price: "15",
        description: "صوص حار إضافي"
      }, {
        name: "صوص كريمي",
        nameEn: "Creamy Sauce",
        price: "10",
        description: "صوص كريمي طازج"
      }]
    },
    salads: {
      title: "السلطات",
      titleEn: "SALADS",
      items: [{
        name: "كاليفورنيا سلاد",
        nameEn: "California Salad",
        price: "85",
        description: "سلطة كاليفورنيا طازجة"
      }, {
        name: "سيدي سلاد",
        nameEn: "Sidi Salad",
        price: "95",
        description: "سلطة مشكلة"
      }, {
        name: "سوبر سلاد",
        nameEn: "Super Salad",
        price: "85",
        description: "سلطة سوبر مع الخضار"
      }, {
        name: "جروك سلاد",
        nameEn: "Greek Salad",
        price: "65",
        description: "سلطة يونانية"
      }]
    }
  };

  const categories = [
    { key: 'all', name: 'الكل', nameEn: 'ALL' },
    { key: 'meat', name: 'اللحمة', nameEn: 'MEAT' },
    { key: 'chicken', name: 'السدق', nameEn: 'CHICKEN' },
    { key: 'grilled', name: 'الفراخ', nameEn: 'GRILLED' },
    { key: 'appetizers', name: 'الاضافات', nameEn: 'APPETIZERS' },
    { key: 'salads', name: 'السلطات', nameEn: 'SALADS' }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      let allItems = [];
      Object.keys(menuData).forEach(key => {
        allItems = [...allItems, ...menuData[key].items.map(item => ({ ...item, category: key }))];
      });
      return allItems;
    }
    return menuData[activeCategory]?.items.map(item => ({ ...item, category: activeCategory })) || [];
  };

  useEffect(() => {
    const items = getFilteredItems();
    setAnimatedItems([]);
    setTimeout(() => {
      setAnimatedItems(items);
    }, 100);
  }, [activeCategory]);

  const HeroSection = () => (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="Grilled food background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 to-black/80"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-red-500/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-red-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-6 drop-shadow-2xl animate-pulse">
              🔥 سيدي بـــرجر
            </h1>
          </div>
          <p className="text-2xl md:text-4xl text-white mb-8 font-light tracking-wide drop-shadow-lg">
            أفضل طعم في المدينة
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            اكتشف مجموعتنا المميزة من البرجر والبيتزا المحضرة بأجود المكونات
          </p>
          <button 
            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 border-2 border-red-500/30"
          >
            اكتشف القائمة
          </button>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">اتصل بنا</h2>
          <p className="text-xl text-gray-300">نحن هنا لخدمتك</p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/60 p-8 rounded-2xl shadow-2xl border border-red-500/20 backdrop-blur-sm max-w-md w-full">
            <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">معلومات التواصل</h3>
            <div className="space-y-6 text-white">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="text-red-500 text-2xl">📞</span>
                <span className="text-lg">01031594803-01031596828</span>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="text-red-500 text-2xl">📍</span>
                <span className="text-lg">ابراج سيدي جابر البرج الخامس خلف محطة سيدي جابر بجوار مخبز لؤلؤة المدينة المنورة</span>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-2xl border-b border-red-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-red-500 transform hover:scale-110 transition-transform duration-300">
                 سيدي بـــرجر
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              <a href="#home" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105 border-b-2 border-transparent hover:border-red-500 px-2">
                الرئيسية
              </a>
              <a href="#menu" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105 border-b-2 border-transparent hover:border-red-500 px-2">
                قائمة الطعام
              </a>
              <a href="#contact" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105 border-b-2 border-transparent hover:border-red-500">
                اتصل بنا
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white transform hover:scale-110 transition-transform duration-300 p-2 rounded-lg hover:bg-red-500/20" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20 transform transition-all duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-white hover:text-red-500 hover:bg-red-500/10 rounded-lg transform hover:translate-x-2 transition-all duration-300">
                  الرئيسية
                </a>
                <a href="#menu" className="block px-3 py-2 text-white hover:text-red-500 hover:bg-red-500/10 rounded-lg transform hover:translate-x-2 transition-all duration-300">
                  قائمة الطعام
                </a>
                <a href="#contact" className="block px-3 py-2 text-white hover:text-red-500 hover:bg-red-500/10 rounded-lg transform hover:translate-x-2 transition-all duration-300">
                  اتصل بنا
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-600/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500/5 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-400/5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              قائمة الطعام
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              اكتشف مجموعتنا المميزة من الأطباق الشهية
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-2xl shadow-red-500/50'
                    : 'bg-transparent text-gray-300 border-red-500/30 hover:border-red-500 hover:text-white hover:bg-red-500/10'
                }`}
              >
                <span className="block text-sm">{category.nameEn}</span>
                <span className="block text-lg">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {animatedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-900/80 to-black/60 rounded-2xl p-6 border border-red-500/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {item.name}
                        </h3>
                        <span className="text-sm text-gray-400 uppercase tracking-wider">
                          {item.nameEn}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-left ml-6">
                      <div className="text-2xl md:text-3xl font-bold text-red-500">
                        {item.price} ج.م
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {item.originalPrice} ج.م
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Dotted line similar to the sushi menu */}
                  <div className="border-b border-dotted border-gray-600 my-4"></div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span className="uppercase tracking-wider">
                      {menuData[item.category]?.titleEn || ''}
                    </span>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105">
                      اطلب الآن
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 relative overflow-hidden border-t border-red-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="text-3xl font-bold text-red-500 mb-3 transform hover:scale-110 transition-transform duration-300">
               سيدي بـــرجر
            </div>
            <p className="text-gray-400 text-lg">أفضل طعم في المدينة</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 transform hover:text-white transition-colors duration-300">
              © 2025 سيدي بـــرجر. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RestaurantMenu;