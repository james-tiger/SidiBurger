import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const ContactSection = () => {
  return <section id="contact" className="py-16 bg-gradient-to-r from-red-50 to-red-100 bg-rose-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h2>
          <p className="text-xl text-gray-600">نحن هنا لخدمتك على مدار الساعة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">اتصل بنا</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-mono text-lg">01031594803</p>
                <p className="font-mono text-lg">01031596828</p>
              </div>
              <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                اتصل الآن
              </Button>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">موقعنا</h3>
              <p className="text-gray-600 mb-4">
                اهنا اسياد الرجبة<br />
                القاهرة، مصر
              </p>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                اعرض على الخريطة
              </Button>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ساعات العمل</h3>
              <div className="text-gray-600 space-y-1">
                <p>السبت - الخميس</p>
                <p className="font-semibold">10:00 ص - 2:00 ص</p>
                <p>الجمعة</p>
                <p className="font-semibold">2:00 م - 2:00 ص</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* QR Code Section */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};