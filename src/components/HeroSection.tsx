import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  return <section id="home" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden min-h-screen flex items-center">
      {/* Dark textured background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 15l15 25H15z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      </div>

      {/* Logo positioned at top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 my-[320px] mx-[-357px]">
        <img alt="Restaurant Logo" src="/lovable-uploads/23f51f5c-e22b-4249-b804-4268b2fad09d.png" className="w-400 h-42 animate-float drop-shadow-2xl hover:scale-110 transition-transform duration-300 object-cover" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-45 animate-float opacity-40 shadow-2xl"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float animation-delay-1000 opacity-50 shadow-xl"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 bg-gradient-to-br from-white to-gray-300 transform rotate-12 animate-float animation-delay-2000 opacity-30 shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8 mt-16">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2 transform hover:scale-105 transition-transform duration-300">استمتع بوجباتنا</span>
              <span className="block text-orange-400 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">الشهية</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              نقدم لك أفضل أنواع البرجر والبيتزا المشوية بنكهات استثنائية وجودة عالية. 
              اكتشف تجربة طعام لا تُنسى مع أطباقنا المميزة المحضرة بعناية فائقة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-bold rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30">
                تصفح القائمة
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-10 py-6 text-lg font-bold rounded-lg transition-all duration-500 transform hover:scale-110">
                عن المطعم
              </Button>
            </div>
          </div>

          {/* Right Side - Food Grill Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Main grill plate */}
              <div className="w-96 h-96 relative">
                {/* Grill base */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl border-4 border-gray-600 transform group-hover:rotate-1 transition-all duration-700"></div>
                
                {/* Grill grates */}
                <div className="absolute inset-8 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                  {/* Horizontal grates */}
                  {[...Array(8)].map((_, i) => <div key={i} className="absolute w-full h-1 bg-gradient-to-r from-gray-500 to-gray-400 shadow-lg" style={{
                  top: `${12 + i * 10}%`
                }}></div>)}
                  {/* Vertical grates */}
                  {[...Array(8)].map((_, i) => <div key={i} className="absolute h-full w-1 bg-gradient-to-b from-gray-500 to-gray-400 shadow-lg" style={{
                  left: `${12 + i * 10}%`
                }}></div>)}
                </div>
                
                {/* Food items on grill */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center burger */}
                  <div className="absolute w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center text-2xl transform group-hover:scale-125 transition-transform duration-500 shadow-xl">
                    🍔
                  </div>
                  
                  {/* Surrounding food items */}
                  <div className="absolute -top-8 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-xl animate-pulse shadow-lg">🥩</div>
                  <div className="absolute -bottom-8 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-lg animate-bounce shadow-lg">🌭</div>
                  <div className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-sm animate-float">🍅</div>
                  <div className="absolute -right-8 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-sm animate-float animation-delay-1000">🍅</div>
                </div>
              </div>
              
              {/* Heat/smoke effects */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-orange-400/30 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-full animate-pulse animation-delay-1000"></div>
              
              {/* Floating utensils */}
              <div className="absolute -top-12 -left-12 w-16 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transform rotate-45 animate-float shadow-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute right-0 top-1"></div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-16 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transform -rotate-45 animate-float animation-delay-2000 shadow-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute left-0 top-1"></div>
              </div>
              
              {/* Glowing effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating elements for atmosphere */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-orange-400 rounded-full animate-float opacity-60 shadow-lg"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-yellow-400 rounded-full animate-float animation-delay-2000 opacity-50 shadow-lg"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-300 rounded-full animate-float animation-delay-1000 opacity-40 shadow-md"></div>
      <div className="absolute top-32 right-20 w-5 h-5 bg-red-400 rounded-full animate-float animation-delay-3000 opacity-45 shadow-md"></div>
      <div className="absolute bottom-40 left-32 w-7 h-7 bg-orange-500 rounded-full animate-float animation-delay-4000 opacity-50 shadow-lg"></div>
    </section>;
};