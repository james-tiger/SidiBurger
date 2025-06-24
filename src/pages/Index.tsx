import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedItems, setAnimatedItems] = useState([]);

  // Image paths for each menu item
  const itemImages = {
    appetizers: {
      "Bacon": "/src/images/appetizers/bacon.jpg",
      "Smoked Turkey": "/src/images/appetizers/smoked-turkey.jpg",
      "Pickled Cucumber": "/src/images/appetizers/pickles.jpg",
      "Mushroom": "/src/images/appetizers/mushroom.jpg",
      "Jalapeño": "/src/images/appetizers/jalapeno.jpg",
      "Cheese Sauce": "/src/images/appetizers/cheese-sauce.jpg",
      "Pastrami": "/src/images/appetizers/pastrami.jpg",
      "Premium Burger Patty": "/src/images/appetizers/premium-patty.jpg",
      "Linked Burger Patty": "/src/images/appetizers/linked-patty.jpg"
    },
    sauces: {
      "Classic Sauce": "",
      "Spanish Sauce": "/src/images/sauces/spanish.jpg",
      "Sidi Sauce": "/src/images/sauces/sidi.jpg",
      "Cheese Sauce": "/src/images/sauces/cheese.jpg",
      "Herb Sauce": "/src/images/sauces/herb.jpg"
    },
    sides: {
      "3 Pieces Strips": "/src/images/sides/strips.jpg",
      "Cheese Meal Fries": "/src/images/sides/cheese-fries.jpg",
      "Sidi Cheese Fries": "/src/images/sides/sidi-fries.jpg",
      "Fries Packet": "/src/images/sides/fries.jpg"
    },
    SAUSAGE: {
      "Classic Sausage": "https://a.top4top.io/p_3461fwbi11.jpg",
      "Dragon Hill Sausage": "https://k.top4top.io/p_3461lthcp2.jpg",
      "Mushroom Sausage": "https://i.top4top.io/p_3461so9651.jpg",
      "Soul Art Sausage": "https://a.top4top.io/p_3461h2wsk1.jpg",
      "Triple Way Sausage": "https://h.top4top.io/p_3461gpjak1.jpg"
    },
    meat: {
      "Classic Cheese Beef": "https://f.top4top.io/p_346196pcz2.jpg",
      "Dragon Hill": "https://h.top4top.io/p_346103b9y4.jpg",
      "Mushroom Burger": "https://g.top4top.io/p_346116zu03.jpg",
      "School Art": "https://i.top4top.io/p_3461qcqoy5.jpg",
      "Triple Way": "https://e.top4top.io/p_3461iqlbj1.jpg",
      "Classic Cheese Beef + Fries": "https://f.top4top.io/p_346196pcz2.jpg",
      "Dragon Hill + Fries": "https://h.top4top.io/p_346103b9y4.jpg",
      "Mushroom Burger + Fries": "https://g.top4top.io/p_346116zu03.jpg",
      "School Art + Fries": "https://i.top4top.io/p_3461qcqoy5.jpg",
      "Triple Way + Fries": "https://e.top4top.io/p_3461iqlbj1.jpg"
    },
    smashBurger: {
      "Smash Classic": "/src/images/smash/single-classic.jpg",
      "Dragon Hill": "/src/images/smash/single-dragon.jpg",
      "Mushroom Burger": "/src/images/smash/single-mushroom.jpg",
      "School Art": "/src/images/smash/single-school-art.jpg",
      "Double Smash Classic + Fries": "/src/images/smash/double-classic.jpg",
      "Double Dragon Hill + Fries": "/src/images/smash/double-dragon.jpg",
      "Double Mushroom Burger + Fries": "/src/images/smash/double-mushroom.jpg",
      "Double School Art + Fries": "/src/images/smash/double-school-art.jpg",
      "Triple Smash Classic + Fries": "/src/images/smash/triple-classic.jpg",
      "Triple Dragon Hill + Fries": "/src/images/smash/triple-dragon.jpg",
      "Triple Mushroom Burger + Fries": "/src/images/smash/triple-mushroom.jpg",
      "Triple School Art + Fries": "/src/images/smash/triple-school-art.jpg"
    },
    chickenWraps: {
      "Chicken": "/src/images/chicken/country.jpg",
      "Gerald Chicken": "/src/images/chicken/gerald.jpg",
      "KOR RAP Chicken": "/src/images/chicken/kor-rap.jpg",
      "Chicken Wrap Roll": "/src/images/chicken/wrap-roll.jpg"
    }
  };

  const menuData = {
    appetizers: {
      title: "الأضافات",
      titleEn: "APPETIZERS",
      items: [
        {
          name: "بيكون",
          nameEn: "Bacon",
          price: "15",
          image: itemImages.appetizers["Bacon"]
        },
        {
          name: "سموك تركي",
          nameEn: "Smoked Turkey",
          price: "15",
          image: itemImages.appetizers["Smoked Turkey"]
        },
        {
          name: "خيار مخلل",
          nameEn: "Pickled Cucumber",
          price: "7",
          image: itemImages.appetizers["Pickled Cucumber"]
        },
        {
          name: "مشروم",
          nameEn: "Mushroom",
          price: "20",
          image: itemImages.appetizers["Mushroom"]
        },
        {
          name: "هالبينو",
          nameEn: "Jalapeño",
          price: "7",
          image: itemImages.appetizers["Jalapeño"]
        },
        {
          name: "صوص جبنة",
          nameEn: "Cheese Sauce",
          price: "15",
          image: itemImages.appetizers["Cheese Sauce"]
        },
        {
          name: "بسطرمة",
          nameEn: "Pastrami",
          price: "15",
          image: itemImages.appetizers["Pastrami"]
        },
        {
          name: "قطعة برجر رايق",
          nameEn: "Premium Burger Patty",
          price: "35",
          image: itemImages.appetizers["Premium Burger Patty"]
        },
        {
          name: "قطعة برجر هتشبعك",
          nameEn: "Linked Burger Patty",
          price: "65",
          image: itemImages.appetizers["Linked Burger Patty"]
        }
      ]
    },
    sauces: {
      title: "الصوصات",
      titleEn: "SAUCES",
      items: [
        {
          name: "كلاسيك صوص",
          nameEn: "Classic Sauce",
          price: "15",
          image: itemImages.sauces["Classic Sauce"]
        },
        {
          name: "اسبايسي صوص",
          nameEn: "Spanish Sauce",
          price: "15",
          image: itemImages.sauces["Spanish Sauce"]
        },
        {
          name: "سيدي صوص",
          nameEn: "Sidi Sauce",
          price: "15",
          image: itemImages.sauces["Sidi Sauce"]
        },
        {
          name: "صوص جبنة",
          nameEn: "Cheese Sauce",
          price: "15",
          image: itemImages.sauces["Cheese Sauce"]
        },
        {
          name: "صوص أعشاب",
          nameEn: "Herb Sauce",
          price: "15",
          image: itemImages.sauces["Herb Sauce"]
        }
      ]
    },
    sides: {
      title: "أصناف جانبية",
      titleEn: "SIDES",
      items: [
        {
          name: "عدد ٣ قطع ستربس",
          nameEn: "3 Pieces Strips",
          price: "55",
          image: itemImages.sides["3 Pieces Strips"]
        },
        {
          name: "تشيز هيل فرايز",
          nameEn: "Cheese Meal Fries",
          price: "45",
          image: itemImages.sides["Cheese Meal Fries"]
        },
        {
          name: "سدق تشيز فرايز",
          nameEn: "Sidi Cheese Fries",
          price: "55",
          image: itemImages.sides["Sidi Cheese Fries"]
        },
        {
          name: "تشيز سيدي فرايز",
          nameEn: "Sidi Cheese Fries",
          price: "65",
          image: itemImages.sides["Sidi Cheese Fries"]
        },
        {
          name: "باكيت بطاطس",
          nameEn: "Fries Packet",
          price: "25",
          image: itemImages.sides["Fries Packet"]
        }
      ]
    },
    SAUSAGE: {
      title: "منيو السدق",
      titleEn: "SAUSAGE MENU",
      items: [
        {
          name: "كلاسيك سدق",
          nameEn: "Classic Sausage",
          price: "95",
          description: "سدق +  خس +  طماطم + بصل +  خيار مخلل + صوص جبنة + صوص  كلاسيك",
          image: itemImages.SAUSAGE["Classic Sausage"]
        },
        {
          name: "دراجون هيل سدق",
          nameEn: "Dragon Hill Sausage",
          price: "100",
          description: "سدق + خس + طماطم + بصل + خيار مخلل + هالبينو + اسبايسي صوص",
          image: itemImages.SAUSAGE["Dragon Hill Sausage"]
        },
        {
          name: "مشروم سدق",
          nameEn: "Mushroom Sausage",
          price: "115",
          description: "سدق + خس + طماطم + بصل + مشروم كريمي +خيار مخلل",
          image: itemImages.SAUSAGE["Mushroom Sausage"]
        },
        {
          name: "سكول أرت سدق",
          nameEn: "Soul Art Sausage",
          price: "130",
          description: "سدق + خس + طماطم + بصل + بسطرمة + بيكون + سيدي  صوص",
          image: itemImages.SAUSAGE["Soul Art Sausage"]
        },
        {
          name: "تريبول وي سدق",
          nameEn: "Triple Way Sausage",
          price: "115",
          description: "سدق + خس + طماطم + بصل مكرمل  + سيدي صوص",
          image: itemImages.SAUSAGE["Triple Way Sausage"]
        }
      ]
    },
    meat: {
      title: "منيو اللحم",
      titleEn: "MEAT MENU",
      categories: [
        {
          name: "رايق",
          nameEn: "Regular",
          items: [
            {
              name: "كلاسيك تشيز بيف",
              nameEn: "Classic Cheese Beef",
              price: "95",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + صوص جبنة + صوص كلاسيك",
              image: itemImages.meat["Classic Cheese Beef"]
            },
            {
              name: "دراجون هيل",
              nameEn: "Dragon Hill",
              price: "100",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + هالبينو + اسبايسي صوص",
              image: itemImages.meat["Dragon Hill"]
            },
            {
              name: "مشروم برجر",
              nameEn: "Mushroom Burger",
              price: "115",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + مشروم كريمي + خيار مخلل",
              image: itemImages.meat["Mushroom Burger"]
            },
            {
              name: "سكول أرت",
              nameEn: "School Art",
              price: "130",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + بسطرمة + بيكون + سيدي صوص",
              image: itemImages.meat["School Art"]
            },
            {
              name: "تريبل وي",
              nameEn: "Triple Way",
              price: "115",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل مكرمل + سيدي صوص",
              image: itemImages.meat["Triple Way"]
            }
          ]
        },
        {
          name: "هيشبعك ومعاه بطاطس",
          nameEn: "Combo",
          items: [
            {
              name: "كلاسيك تشيز بيف + بطاطس",
              nameEn: "Classic Cheese Beef + Fries",
              price: "129",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + صوص جبنة + صوص كلاسيك + بطاطس",
              image: itemImages.meat["Classic Cheese Beef + Fries"]
            },
            {
              name: "دراجون هيل + بطاطس",
              nameEn: "Dragon Hill + Fries",
              price: "129",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + هالبينو + اسبايسي صوص + بطاطس",
              image: itemImages.meat["Dragon Hill + Fries"]
            },
            {
              name: "مشروم برجر + بطاطس",
              nameEn: "Mushroom Burger + Fries",
              price: "135",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + مشروم كريمي + خيار مخلل + بطاطس",
              image: itemImages.meat["Mushroom Burger + Fries"]
            },
            {
              name: "سكول أرت + بطاطس",
              nameEn: "School Art + Fries",
              price: "149",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + بسطرمة + بيكون + سيدي صوص + بطاطس",
              image: itemImages.meat["School Art + Fries"]
            },
            {
              name: "تريبل وي + بطاطس",
              nameEn: "Triple Way + Fries",
              price: "135",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل مكرمل + سيدي صوص + بطاطس",
              image: itemImages.meat["Triple Way + Fries"]
            }
          ]
        }
      ]
    },
    smashBurger: {
      title: "السماش برجر",
      titleEn: "SMASH BURGER",
      categories: [
        {
          name: "سنجل",
          nameEn: "Single",
          items: [
            {
              name: "سماش كلاسيك",
              nameEn: "Smash Classic",
              price: "90",
              description: "قطعة لحم بقري صافي + خس + طماطم + خيار مخلل + صوص جبنة",
              image: itemImages.smashBurger["Smash Classic"]
            },
            {
              name: "دراجون هيل",
              nameEn: "Dragon Hill",
              price: "100",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + هالبينو + صوص سبايسي",
              image: itemImages.smashBurger["Dragon Hill"]
            },
            {
              name: "مشروم برجر",
              nameEn: "Mushroom Burger",
              price: "115",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + مشروم كريمي + خيار مخلل",
              image: itemImages.smashBurger["Mushroom Burger"]
            },
            {
              name: "سكول أرت",
              nameEn: "School Art",
              price: "120",
              description: "قطعة لحم بقري صافي + خس + طماطم + بصل + بسطرمة + بيكون + سيدي صوص",
              image: itemImages.smashBurger["School Art"]
            }
          ]
        },
        {
          name: "دبل مع بطاطس",
          nameEn: "Double + Fries",
          items: [
            {
              name: "دبل سماش كلاسيك + بطاطس",
              nameEn: "Double Smash Classic + Fries",
              price: "129",
              description: "قطعتين لحم بقري صافي + خس + طماطم + خيار مخلل + صوص جبنة + بطاطس مقلية",
              image: itemImages.smashBurger["Double Smash Classic + Fries"]
            },
            {
              name: "دبل دراجون هيل + بطاطس",
              nameEn: "Double Dragon Hill + Fries",
              price: "129",
              description: "قطعتين لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + هالبينو + صوص سبايسي + بطاطس مقلية",
              image: itemImages.smashBurger["Double Dragon Hill + Fries"]
            },
            {
              name: "دبل مشروم برجر + بطاطس",
              nameEn: "Double Mushroom Burger + Fries",
              price: "135",
              description: "قطعتين لحم بقري صافي + خس + طماطم + بصل + مشروم كريمي + خيار مخلل + بطاطس مقلية",
              image: itemImages.smashBurger["Double Mushroom Burger + Fries"]
            },
            {
              name: "دبل سكول أرت + بطاطس",
              nameEn: "Double School Art + Fries",
              price: "149",
              description: "قطعتين لحم بقري صافي + خس + طماطم + بصل + بسطرمة + بيكون + سيدي صوص + بطاطس مقلية",
              image: itemImages.smashBurger["Double School Art + Fries"]
            }
          ]
        },
        {
          name: "تريبل مع بطاطس",
          nameEn: "Triple + Fries",
          items: [
            {
              name: "تريبل سماش كلاسيك + بطاطس",
              nameEn: "Triple Smash Classic + Fries",
              price: "149",
              description: "ثلاث قطع لحم بقري صافي + خس + طماطم + خيار مخلل + صوص جبنة + بطاطس مقلية",
              image: itemImages.smashBurger["Triple Smash Classic + Fries"]
            },
            {
              name: "تريبل دراجون هيل + بطاطس",
              nameEn: "Triple Dragon Hill + Fries",
              price: "149",
              description: "ثلاث قطع لحم بقري صافي + خس + طماطم + بصل + خيار مخلل + هالبينو + صوص سبايسي + بطاطس مقلية",
              image: itemImages.smashBurger["Triple Dragon Hill + Fries"]
            },
            {
              name: "تريبل مشروم برجر + بطاطس",
              nameEn: "Triple Mushroom Burger + Fries",
              price: "169",
              description: "ثلاث قطع لحم بقري صافي + خس + طماطم + بصل + مشروم كريمي + خيار مخلل + بطاطس مقلية",
              image: itemImages.smashBurger["Triple Mushroom Burger + Fries"]
            },
            {
              name: "تريبل سكول أرت + بطاطس",
              nameEn: "Triple School Art + Fries",
              price: "179",
              description: "ثلاث قطع لحم بقري صافي + خس + طماطم + بصل + بسطرمة + بيكون + سيدي صوص + بطاطس مقلية",
              image: itemImages.smashBurger["Triple School Art + Fries"]
            }
          ]
        }
      ]
    },
    chickenWraps: {
      title: "منيو الفراخ",
      titleEn: "CHICKEN WRAPS",
      items: [
        {
          name: "كانتــــــري تشـيكن",
          nameEn: "Chicken",
          price: "120",
          description: "صدر دجاج كرسبي + بسطرمة + سموك تركي  + خس + طماطم + صوص +  صوص كلاسيك ",
          image: itemImages.chickenWraps["Chicken"]
        },
        {
          name: "جــــــريلد تشـــكين",
          nameEn: "Gerald Chicken",
          price: "125",
          description: "صدر دجاج مشوي + بيف بييكون + بسطرمة + فلفل ألوان + طماطم + زيتون +  مشروم + بصل مكرمل ",
          image: itemImages.chickenWraps["Gerald Chicken"]
        },
        {
          name: "كـــــور راب تشــكين",
          nameEn: "KOR RAP Chicken",
          price: "120",
          description: "صدر دجاج كرسبي + بسطرمة + سموك تركي  + خس + طماطم + صوص +  صوص كلاسيك ",
          image: itemImages.chickenWraps["KOR RAP Chicken"]
        },
        {
          name: "تشـــــكن راب رول",
          nameEn: "Chicken Wrap Roll",
          price: "129",
          description: "صدر دجاج مشوي + بيف بييكون + بسطرمة + فلفل ألوان + زيتون +  مشروم + بصل مكرمل ",
          image: itemImages.chickenWraps["Chicken Wrap Roll"]
        }
      ]
    }
  };

  const categories = [
    { key: 'all', name: 'الكل', nameEn: 'ALL' },
    { key: 'meat', name: 'اللحم', nameEn: 'MEAT' },
    { key: 'smashBurger', name: 'السماش برجر', nameEn: 'SMASH BURGER' },
    { key: 'SAUSAGE', name: 'السدق', nameEn: 'SAUSAGE' },
    { key: 'chickenWraps', name: 'الفراخ', nameEn: 'CHICKEN WRAPS' },
    { key: 'appetizers', name: 'الأضافات', nameEn: 'APPETIZERS' },
    { key: 'sauces', name: 'الصوصات', nameEn: 'SAUCES' },
    { key: 'sides', name: 'أصناف جانبية', nameEn: 'SIDES' }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      let allItems = [];
      Object.keys(menuData).forEach(key => {
        if (menuData[key].categories) {
          menuData[key].categories.forEach(category => {
            allItems = [...allItems, ...category.items.map(item => ({ ...item, category: key, subCategory: category.name }))];
          });
        } else {
          allItems = [...allItems, ...menuData[key].items.map(item => ({ ...item, category: key }))];
        }
      });
      return allItems;
    }
    
    if (menuData[activeCategory]?.categories) {
      return menuData[activeCategory].categories.flatMap(category => 
        category.items.map(item => ({ ...item, category: activeCategory, subCategory: category.name }))
      );
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
           احنا اسياد البرجر
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          برجر حقيقي بخلطة بهار سريه  مع صوصات اصليه خاصه بينا
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
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.nameEn}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1">
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
                          {item.subCategory && (
                            <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">
                              {item.subCategory}
                            </span>
                          )}
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
                        </button>
                      </div>
                    </div>
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
            <p className="text-gray-400 text-lg">احنا اسياد البرجر</p>
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
