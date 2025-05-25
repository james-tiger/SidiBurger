import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80')`
          }}
        ></div>
        {/* Dark overlay with opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
        
        {/* Additional texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 15l15 25H15z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-lg transform rotate-45 animate-float shadow-2xl backdrop-blur-sm"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full animate-float animation-delay-1000 shadow-xl backdrop-blur-sm"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 bg-gradient-to-br from-white/20 to-gray-300/20 transform rotate-12 animate-float animation-delay-2000 shadow-lg backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8 mt-16">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
                  استمتع بوجباتنا
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  الشهية
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto lg:mx-0 rounded-full shadow-lg"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0 backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-white/10">
              نقدم لك أفضل أنواع البرجر والبيتزا المشوية بنكهات استثنائية وجودة عالية. 
              اكتشف تجربة طعام لا تُنسى مع أطباقنا المميزة المحضرة بعناية فائقة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-bold rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 border-0">
                تصفح القائمة
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-black/30 backdrop-blur-sm px-10 py-6 text-lg font-bold rounded-xl transition-all duration-500 transform hover:scale-110">
                عن المطعم
              </Button>
            </div>
          </div>

          {/* Right Side - Enhanced Food Grill Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Main grill plate with enhanced styling */}
              <div className="w-96 h-96 relative">
                {/* Grill base with glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-black/90 rounded-full shadow-2xl border-4 border-gray-500/50 transform group-hover:rotate-1 transition-all duration-700 backdrop-blur-sm"></div>
                
                {/* Enhanced grill grates */}
                <div className="absolute inset-8 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/80 to-gray-900/90 rounded-full backdrop-blur-sm"></div>
                  {/* Horizontal grates with glow */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-full h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 shadow-lg shadow-orange-500/20" 
                      style={{ top: `${12 + i * 10}%` }}
                    ></div>
                  ))}
                  {/* Vertical grates with glow */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute h-full w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400 shadow-lg shadow-orange-500/20" 
                      style={{ left: `${12 + i * 10}%` }}
                    ></div>
                  ))}
                </div>
                
                {/* Enhanced food items on grill */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center logo instead of burger emoji */}
                  <div className="absolute w-28 h-28 bg-gradient-to-br from-orange-500/20 to-red-700/20 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-500 shadow-2xl shadow-orange-500/40 border-2 border-orange-300/30 backdrop-blur-sm animate-bounce">
                    <img 
                      alt="Restaurant Logo" 
                      src="/lovable-uploads/23f51f5c-e22b-4249-b804-4268b2fad09d.png" 
                      className="w-22 h-16 object-contain drop-shadow-xl" 
                    />
                  </div>
                  
                  {/* Enhanced surrounding food items */}
                  <div className="absolute -top-12 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-2xl animate-pulse shadow-xl shadow-red-500/30 border border-red-400/30">🥩</div>
                  <div className="absolute -bottom-12 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-xl animate-bounce shadow-xl shadow-yellow-500/30">🌭</div>
                  <div className="absolute -left-12 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-lg animate-float shadow-lg shadow-red-500/30">🍅</div>
                  <div className="absolute -right-12 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-lg animate-float animation-delay-1000 shadow-lg shadow-red-500/30">🍅</div>
                  
                  {/* Additional food items */}
                  <div className="absolute top-16 -right-6 w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-sm animate-float animation-delay-2000 shadow-md">🥒</div>
                  <div className="absolute -top-6 left-16 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-sm animate-float animation-delay-3000 shadow-md">🧅</div>
                </div>
              </div>
              
              {/* Enhanced heat/smoke effects */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-orange-400/40 to-transparent rounded-full animate-pulse blur-sm"></div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-t from-yellow-400/30 to-transparent rounded-full animate-pulse animation-delay-1000 blur-sm"></div>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-red-400/20 to-transparent rounded-full animate-pulse animation-delay-2000 blur-sm"></div>
              
              {/* Enhanced floating utensils */}
              <div className="absolute -top-16 -left-16 w-20 h-6 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full transform rotate-45 animate-float shadow-xl backdrop-blur-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full absolute right-1 top-1.5 shadow-lg"></div>
              </div>
              <div className="absolute -bottom-16 -right-16 w-20 h-6 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full transform -rotate-45 animate-float animation-delay-2000 shadow-xl backdrop-blur-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full absolute left-1 top-1.5 shadow-lg"></div>
              </div>
              
              {/* Enhanced glowing effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/15 via-red-500/10 to-yellow-500/15 animate-pulse blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-400/10 to-red-400/10 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements for atmosphere */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-orange-400/60 to-orange-600/60 rounded-full animate-float shadow-xl backdrop-blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-gradient-to-br from-yellow-400/50 to-yellow-600/50 rounded-full animate-float animation-delay-2000 shadow-xl backdrop-blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-orange-300/40 to-orange-500/40 rounded-full animate-float animation-delay-1000 shadow-lg backdrop-blur-sm"></div>
      <div className="absolute top-32 right-20 w-7 h-7 bg-gradient-to-br from-red-400/45 to-red-600/45 rounded-full animate-float animation-delay-3000 shadow-lg backdrop-blur-sm"></div>
      <div className="absolute bottom-40 left-32 w-9 h-9 bg-gradient-to-br from-orange-500/50 to-orange-700/50 rounded-full animate-float animation-delay-4000 shadow-xl backdrop-blur-sm"></div>
      
      {/* Additional atmospheric elements */}
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-br from-yellow-300/30 to-yellow-500/30 rounded-full animate-float animation-delay-5000 shadow-md"></div>
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-gradient-to-br from-red-300/35 to-red-500/35 rounded-full animate-float animation-delay-6000 shadow-md"></div>
    </section>
  );
};