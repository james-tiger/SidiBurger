
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
      items: [
        { name: "كلاسيك تشيز بيف", nameEn: "Classic Cheese Beef", price: "159", originalPrice: "129", description: "لحمة بقري مع جبنة شيدر وخس وطماطم" },
        { name: "دراجون فيل", nameEn: "Dragon Feel", price: "159", originalPrice: "129", description: "لحمة بقري حارة مع صوص دراجون" },
        { name: "مشروم برجر", nameEn: "Mushroom Burger", price: "165", originalPrice: "135", description: "لحمة بقري مع مشروم طازج" },
        { name: "سكورن آرت", nameEn: "Scorn Art", price: "179", originalPrice: "149", description: "لحمة بقري مع صوص خاص" },
        { name: "تريبل وي", nameEn: "Triple Way", price: "165", originalPrice: "135", description: "ثلاث قطع لحمة بقري" }
      ]
    },
    chicken: {
      title: "مليو السدق",
      titleEn: "Chicken Menu", 
      color: "bg-red-500",
      items: [
        { name: "كلاسيك سدق", nameEn: "Classic Chicken", price: "135", description: "قطعة دجاج مشوية مع الخضار" },
        { name: "دراجون فيل سدق", nameEn: "Dragon Feel Chicken", price: "138", description: "دجاج حار مع صوص دراجون" },
        { name: "مشروم سدق", nameEn: "Mushroom Chicken", price: "140", description: "دجاج مع مشروم طازج" },
        { name: "سكورن آرت سدق", nameEn: "Scorn Art Chicken", price: "155", description: "دجاج مع صوص خاص" },
        { name: "تريبل وي سدق", nameEn: "Triple Way Chicken", price: "140", description: "ثلاث قطع دجاج" }
      ]
    },
    grilled: {
      title: "مليو الفراخ",
      titleEn: "Grilled Menu",
      color: "bg-red-700", 
      items: [
        { name: "كانتاكي فرايد", nameEn: "Kentucky Fried", price: "19", description: "قطع دجاج مقلية" },
        { name: "كانتاكي وي", nameEn: "Kentucky Way", price: "125", description: "وجبة دجاج كاملة" },
        { name: "كانتاكي فيل", nameEn: "Kentucky Feel", price: "25", description: "قطع دجاج حارة" },
        { name: "تشيكن رول", nameEn: "Chicken Roll", price: "125", description: "رول دجاج بالخضار" },
        { name: "رافي ناجتس", nameEn: "Rafi Nuggets", price: "20", description: "قطع دجاج صغيرة" }
      ]
    },
    appetizers: {
      title: "الاضافات",
      titleEn: "Appetizers",
      color: "bg-red-800",
      items: [
        { name: "بيكونا", nameEn: "Bacon", price: "15", description: "شرائح لحم مقدد" },
        { name: "سموك تركي", nameEn: "Smoked Turkey", price: "15", description: "لحم تركي مدخن" },
        { name: "موزا", nameEn: "Moza", price: "15", description: "جبنة موزاريلا" },
        { name: "خيار مخلل", nameEn: "Pickled Cucumber", price: "10", description: "خيار مخلل طازج" },
        { name: "برجر 200", nameEn: "200g Burger", price: "60", description: "قطعة لحم 200 جرام" },
        { name: "برجر 150", nameEn: "150g Burger", price: "40", description: "قطعة لحم 150 جرام" }
      ]
    },
    salads: {
      title: "السلطات", 
      titleEn: "Salads",
      color: "bg-red-600",
      items: [
        { name: "كاليفورنيا سلاد", nameEn: "California Salad", price: "85", description: "سلطة كاليفورنيا طازجة" },
        { name: "سيدي سلاد", nameEn: "Sidi Salad", price: "95", description: "سلطة مشكلة" },
        { name: "سوبر سلاد", nameEn: "Super Salad", price: "85", description: "سلطة سوبر مع الخضار" },
        { name: "جروك سلاد", nameEn: "Greek Salad", price: "65", description: "سلطة يونانية" }
      ]
    },
    extras: {
      title: "اصناف جانبية",
      titleEn: "Side Dishes", 
      color: "bg-red-500",
      items: [
        { name: "أونيون ريندز 5 قطع", nameEn: "5 Onion Rings", price: "20", description: "5 قطع بصل مقلي" },
        { name: "عدد 3 قطع ستريبس", nameEn: "3 Chicken Strips", price: "70", description: "3 قطع دجاج ستريبس" },
        { name: "تشيزي فيل فرايز", nameEn: "Cheesy Feel Fries", price: "35", description: "بطاطس بالجبنة" },
        { name: "سدقي تشيزي فرايز", nameEn: "Chicken Cheesy Fries", price: "45", description: "بطاطس بالدجاج والجبنة" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-red-500">🔥 بيتزا برجر</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition-colors">الرئيسية</a>
              <a href="#menu" className="hover:text-red-500 transition-colors">القائمة</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">اتصل بنا</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-white hover:text-red-500">الرئيسية</a>
                <a href="#menu" className="block px-3 py-2 text-white hover:text-red-500">القائمة</a>
                <a href="#contact" className="block px-3 py-2 text-white hover:text-red-500">اتصل بنا</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Menu Sections */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">قائمة الطعام</h2>
            <p className="text-xl text-gray-600">اكتشف مجموعتنا المميزة من الأطباق الشهية</p>
          </div>

          <div className="space-y-12">
            {Object.entries(menuData).map(([key, section]) => (
              <MenuSection 
                key={key}
                title={section.title}
                titleEn={section.titleEn}
                items={section.items}
                color={section.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold text-red-500 mb-2">🔥 بيتزا برجر</div>
            <p className="text-gray-400">أفضل طعم في المدينة</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">&copy; 2024 بيتزا برجر. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
