import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  const handleShowOnMap = () => {
    // Google Maps URL with the location coordinates for Sidi Gaber area
    const locationQuery = encodeURIComponent("ابراج سيدي جابر البرج الخامس خلف محطة سيدي جابر بجوار مخبز لؤلؤة المدينة المنورة، الإسكندرية، مصر");
    const googleMapsUrl = `https://www.google.com/maps/search/${locationQuery}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-rose-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-6">
            اتصل بنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا لخدمتك على مدار الساعة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                اتصل بنا
              </h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <p className="font-mono text-xl font-semibold bg-gray-50 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    01031594803
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <p className="font-mono text-xl font-semibold bg-gray-50 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    01031596828
                  </p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                اتصل الآن
              </Button>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                موقعنا
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                ابراج سيدي جابر البرج الخامس<br />
                خلف محطة سيدي جابر بجوار<br />
                مخبز لؤلؤة المدينة المنورة
              </p>
              <Button 
                onClick={handleShowOnMap}
                variant="outline" 
                className="w-full border-2 border-red-600 text-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                اعرض على الخريطة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};