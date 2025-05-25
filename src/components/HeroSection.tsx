
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-black via-red-900 to-black text-white py-24 overflow-hidden">
      {/* Enhanced Background Pattern with 3D effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating 3D geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-lg transform rotate-45 animate-float opacity-20 shadow-2xl"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-float animation-delay-1000 opacity-30 shadow-xl"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 bg-gradient-to-br from-white to-gray-300 transform rotate-12 animate-float animation-delay-2000 opacity-25 shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-red-500 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300 inline-block">بيتزا</span>
              <br />
              <span className="text-white drop-shadow-xl transform hover:scale-110 transition-transform duration-300 inline-block">برجر</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
              نقدم لك أفضل أنواع البرجر والبيتزا<br />
              بطعم لا يُنسى وجودة استثنائية
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xl font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-red-500/25"
              >
                تصفح القائمة
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white text-white hover:bg-white hover:text-black px-10 py-5 text-xl font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-xl"
              >
                عن المطعم
              </Button>
            </div>
          </div>

          {/* Enhanced Chef Character Illustration with 3D effects */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-700 hover:scale-110 relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-red-400/50 to-transparent rounded-full"></div>
                <div className="text-8xl transform group-hover:scale-125 transition-transform duration-500 relative z-10 drop-shadow-2xl">🍔</div>
              </div>
              
              {/* Enhanced floating elements with 3D effects */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-3xl animate-bounce shadow-2xl transform group-hover:scale-125 transition-transform duration-300">
                🔥
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl animate-pulse shadow-xl transform group-hover:scale-125 transition-transform duration-300">
                ⭐
              </div>
              <div className="absolute top-12 -left-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-lg animate-float animation-delay-1000 shadow-lg transform group-hover:scale-125 transition-transform duration-300">
                ✨
              </div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 w-96 h-96 border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-8 w-80 h-80 border border-red-300/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with 3D effects */}
      <div className="absolute top-20 left-10 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-float shadow-xl opacity-70 transform hover:scale-150 transition-transform duration-300"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-float animation-delay-2000 shadow-lg opacity-60 transform hover:scale-150 transition-transform duration-300"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-full animate-float animation-delay-1000 shadow-md opacity-50 transform hover:scale-150 transition-transform duration-300"></div>
      
      {/* Additional floating elements for more depth */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float animation-delay-3000 shadow-sm opacity-40"></div>
      <div className="absolute bottom-40 left-32 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float animation-delay-4000 shadow opacity-45"></div>
    </section>
  );
};
