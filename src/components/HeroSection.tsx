
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-800 via-red-900 to-black text-white py-24 overflow-hidden min-h-screen flex items-center">
      {/* Brick Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='10'/%3E%3Crect x='20' y='10' width='20' height='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 20px'
          }}
        ></div>
      </div>

      {/* Enhanced floating elements matching the reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-lg transform rotate-45 animate-float opacity-30 shadow-2xl"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float animation-delay-1000 opacity-40 shadow-xl"></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform rotate-12 animate-float animation-delay-2000 opacity-30 shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-red-400 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300 inline-block">بيتزا</span>
              <br />
              <span className="text-white drop-shadow-xl transform hover:scale-110 transition-transform duration-300 inline-block">برجر</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
              أجهنا اسعاد البرجر<br />
              نقدم لك أفضل أنواع البرجر والبيتزا
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-red-500/30"
              >
                تصفح القائمة
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white text-white hover:bg-white hover:text-red-900 px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-xl"
              >
                عن المطعم
              </Button>
            </div>
          </div>

          {/* Enhanced Chef Character inspired by the reference */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Main chef character with burger head */}
              <div className="w-96 h-96 relative">
                {/* Chef body */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-b from-white to-gray-100 rounded-t-full shadow-2xl"></div>
                
                {/* Chef hat/burger head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-700 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-red-400/50 to-transparent rounded-full"></div>
                  <div className="text-9xl transform group-hover:scale-125 transition-transform duration-500 relative z-10 drop-shadow-2xl">🍔</div>
                </div>
                
                {/* Chef's hands/tools */}
                <div className="absolute bottom-16 left-8 w-8 h-20 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full shadow-lg transform rotate-12"></div>
                <div className="absolute bottom-16 right-8 w-8 h-20 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full shadow-lg transform -rotate-12"></div>
              </div>
              
              {/* Enhanced floating elements with 3D effects */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl animate-bounce shadow-2xl transform group-hover:scale-125 transition-transform duration-300">
                🔥
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-3xl animate-pulse shadow-xl transform group-hover:scale-125 transition-transform duration-300">
                ⭐
              </div>
              <div className="absolute top-16 -left-12 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl animate-float animation-delay-1000 shadow-lg transform group-hover:scale-125 transition-transform duration-300">
                ✨
              </div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 w-full h-full border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-8 w-80 h-80 border border-red-300/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements matching the reference style */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-float shadow-xl opacity-70 transform hover:scale-150 transition-transform duration-300"></div>
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float animation-delay-2000 shadow-lg opacity-60 transform hover:scale-150 transition-transform duration-300"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full animate-float animation-delay-1000 shadow-md opacity-50 transform hover:scale-150 transition-transform duration-300"></div>
      
      {/* Additional floating elements for more depth */}
      <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float animation-delay-3000 shadow-sm opacity-40"></div>
      <div className="absolute bottom-40 left-32 w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float animation-delay-4000 shadow opacity-45"></div>
    </section>
  );
};
