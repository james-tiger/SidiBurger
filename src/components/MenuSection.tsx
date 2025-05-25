
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  nameEn: string;
  price: string;
  originalPrice?: string;
  description: string;
}

interface MenuSectionProps {
  title: string;
  titleEn: string;
  items: MenuItem[];
  color: string;
}

export const MenuSection = ({ title, titleEn, items, color }: MenuSectionProps) => {
  return (
    <div className="mb-20">
      {/* Section Header with 3D effect */}
      <div className="text-center mb-12">
        <div className={`inline-block ${color} text-white px-12 py-6 rounded-2xl mb-6 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-y-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          <h3 className="text-3xl font-bold relative z-10 drop-shadow-lg">{title}</h3>
          <p className="text-lg opacity-90 relative z-10">{titleEn}</p>
        </div>
      </div>

      {/* Menu Items Grid with enhanced 3D animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 border-0 shadow-lg bg-white overflow-hidden relative perspective-1000"
            style={{
              animationDelay: `${index * 0.1}s`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Floating elements for 3D effect */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transform translate-z-10 group-hover:animate-bounce transition-all duration-500"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transform translate-z-10 group-hover:animate-pulse transition-all duration-700"></div>

            <CardContent className="p-8 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300 transform group-hover:scale-105">
                    {item.name}
                  </h4>
                  <p className="text-base text-gray-500 mb-3 group-hover:text-gray-700 transition-colors">{item.nameEn}</p>
                  <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{item.description}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-red-600 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{item.price}</span>
                  <span className="text-lg text-gray-500">ج.م</span>
                  {item.originalPrice && (
                    <span className="text-base text-gray-400 line-through transform group-hover:scale-105 transition-transform">{item.originalPrice}</span>
                  )}
                </div>
                
                {item.originalPrice && (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    خصم!
                  </Badge>
                )}
              </div>

              {/* Decorative 3D price tag effect */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl">
                <span className="text-white text-sm font-bold">🔥</span>
              </div>
            </CardContent>

            {/* Bottom shine effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </Card>
        ))}
      </div>

      {/* Section divider with 3D effect */}
      <div className="mt-16 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full shadow-lg transform hover:scale-x-150 transition-transform duration-500"></div>
      </div>
    </div>
  );
};
