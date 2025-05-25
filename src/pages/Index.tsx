import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuSection } from "@/components/MenuSection";
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { Menu, X } from "lucide-react";
const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuData = {
    meat: {
      title: "مليو اللحمة",
      titleEn: "Meat Menu",
      color: "bg-red-600",
      items: [{
        name: "كلاسيك تشيز بيف",
        nameEn: "Classic Cheese Beef",
        price: "159",
        originalPrice: "129",
        description: "لحمة بقري مع جبنة شيدر وخس وطماطم"
      }, {
        name: "دراجون فيل",
        nameEn: "Dragon Feel",
        price: "159",
        originalPrice: "129",
        description: "لحمة بقري حارة مع صوص دراجون"
      }, {
        name: "مشروم برجر",
        nameEn: "Mushroom Burger",
        price: "165",
        originalPrice: "135",
        description: "لحمة بقري مع مشروم طازج"
      }, {
        name: "سكورن آرت",
        nameEn: "Scorn Art",
        price: "179",
        originalPrice: "149",
        description: "لحمة بقري مع صوص خاص"
      }, {
        name: "تريبل وي",
        nameEn: "Triple Way",
        price: "165",
        originalPrice: "135",
        description: "ثلاث قطع لحمة بقري"
      }]
    },
    chicken: {
      title: "مليو السدق",
      titleEn: "Chicken Menu",
      color: "bg-red-500",
      items: [{
        name: "كلاسيك سدق",
        nameEn: "Classic Chicken",
        price: "135",
        description: "قطعة دجاج مشوية مع الخضار"
      }, {
        name: "دراجون فيل سدق",
        nameEn: "Dragon Feel Chicken",
        price: "138",
        description: "دجاج حار مع صوص دراجون"
      }, {
        name: "مشروم سدق",
        nameEn: "Mushroom Chicken",
        price: "140",
        description: "دجاج مع مشروم طازج"
      }, {
        name: "سكورن آرت سدق",
        nameEn: "Scorn Art Chicken",
        price: "155",
        description: "دجاج مع صوص خاص"
      }, {
        name: "تريبل وي سدق",
        nameEn: "Triple Way Chicken",
        price: "140",
        description: "ثلاث قطع دجاج"
      }]
    },
    grilled: {
      title: "مليو الفراخ",
      titleEn: "Grilled Menu",
      color: "bg-red-700",
      items: [{
        name: "كانتاكي فرايد",
        nameEn: "Kentucky Fried",
        price: "19",
        description: "قطع دجاج مقلية"
      }, {
        name: "كانتاكي وي",
        nameEn: "Kentucky Way",
        price: "125",
        description: "وجبة دجاج كاملة"
      }, {
        name: "كانتاكي فيل",
        nameEn: "Kentucky Feel",
        price: "25",
        description: "قطع دجاج حارة"
      }, {
        name: "تشيكن رول",
        nameEn: "Chicken Roll",
        price: "125",
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
      titleEn: "Appetizers",
      color: "bg-red-800",
      items: [{
        name: "بيكونا",
        nameEn: "Bacon",
        price: "15",
        description: "شرائح لحم مقدد"
      }, {
        name: "سموك تركي",
        nameEn: "Smoked Turkey",
        price: "15",
        description: "لحم تركي مدخن"
      }, {
        name: "موزا",
        nameEn: "Moza",
        price: "15",
        description: "جبنة موزاريلا"
      }, {
        name: "خيار مخلل",
        nameEn: "Pickled Cucumber",
        price: "10",
        description: "خيار مخلل طازج"
      }, {
        name: "برجر 200",
        nameEn: "200g Burger",
        price: "60",
        description: "قطعة لحم 200 جرام"
      }, {
        name: "برجر 150",
        nameEn: "150g Burger",
        price: "40",
        description: "قطعة لحم 150 جرام"
      }]
    },
    salads: {
      title: "السلطات",
      titleEn: "Salads",
      color: "bg-red-600",
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
    },
    extras: {
      title: "اصناف جانبية",
      titleEn: "Side Dishes",
      color: "bg-red-500",
      items: [{
        name: "أونيون ريندز 5 قطع",
        nameEn: "5 Onion Rings",
        price: "20",
        description: "5 قطع بصل مقلي"
      }, {
        name: "عدد 3 قطع ستريبس",
        nameEn: "3 Chicken Strips",
        price: "70",
        description: "3 قطع دجاج ستريبس"
      }, {
        name: "تشيزي فيل فرايز",
        nameEn: "Cheesy Feel Fries",
        price: "35",
        description: "بطاطس بالجبنة"
      }, {
        name: "سدقي تشيزي فرايز",
        nameEn: "Chicken Cheesy Fries",
        price: "45",
        description: "بطاطس بالدجاج والجبنة"
      }]
    }
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-red-500 transform hover:scale-110 transition-transform duration-300">🔥 بيتزا برجر</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105 my-0 px-[26px]">الرئيسية</a>
              <a href="#menu" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105">قائمة الطعام</a>
              <a href="#contact" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-105">اتصل بنا</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white transform hover:scale-110 transition-transform duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && <div className="md:hidden bg-black border-t border-gray-700 transform transition-all duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-white hover:text-red-500 transform hover:translate-x-2 transition-all duration-300">الرئيسية</a>
                <a href="#menu" className="block px-3 py-2 text-white hover:text-red-500 transform hover:translate-x-2 transition-all duration-300">قائمة الطعام</a>
                <a href="#contact" className="block px-3 py-2 text-white hover:text-red-500 transform hover:translate-x-2 transition-all duration-300">اتصل بنا</a>
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Menu Sections */}
      <section id="menu" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full animate-float3d"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full animate-float3d animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-400 rounded-full animate-float3d animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 bg-red-600">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 transform hover:scale-105 transition-transform duration-300 drop-shadow-lg">قائمة الطعام</h2>
            <p className="text-2xl text-gray-600 transform hover:translate-y-1 transition-transform duration-300">اكتشف مجموعتنا المميزة من الأطباق الشهية</p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-16">
            {Object.entries(menuData).map(([key, section], index) => <div key={key} className="transform transition-all duration-500" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <MenuSection title={section.title} titleEn={section.titleEn} items={section.items} color={section.color} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="text-3xl font-bold text-red-500 mb-3 transform hover:scale-110 transition-transform duration-300">🔥 بيتزا برجر</div>
            <p className="text-gray-400 text-lg">أفضل طعم في المدينة</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 transform hover:text-white transition-colors duration-300">&copy; 2024 بيتزا برجر. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;