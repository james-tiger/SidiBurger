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
export const MenuSection = ({
  title,
  titleEn,
  items,
  color
}: MenuSectionProps) => {
  return <div className="mb-24 relative">
      {/* Brick pattern background for sections */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='10'/%3E%3Crect x='20' y='10' width='20' height='10'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 20px'
      }}></div>
      </div>

      {/* Section Header with enhanced professional styling */}
      <div className="text-center mb-16 relative z-10">
        <div className={`inline-block ${color} text-white px-16 py-8 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          <h3 className="text-4xl font-bold relative z-10 drop-shadow-lg tracking-wide">{title}</h3>
          <p className="text-xl opacity-90 relative z-10 mt-2">{titleEn}</p>
        </div>
      </div>

      {/* Menu Items Grid with professional card styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-0 shadow-lg bg-white overflow-hidden relative perspective-1000 menu-item-card" style={{
        animationDelay: `${index * 0.1}s`,
        transformStyle: 'preserve-3d'
      }}>
            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Professional floating elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transform translate-z-10 group-hover:animate-bounce transition-all duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transform translate-z-10 group-hover:animate-pulse transition-all duration-700"></div>

            <CardContent className="p-10 relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors duration-300 transform group-hover:scale-105">
                    {item.name}
                  </h4>
                  <p className="text-lg text-gray-500 mb-4 group-hover:text-gray-700 transition-colors">{item.nameEn}</p>
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{item.description}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-red-700 group-hover:scale-110 transition-transform duration-300 drop-shadow-md price-tag">{item.price}</span>
                  <span className="text-xl text-gray-500 font-medium">ج.م</span>
                  {item.originalPrice && <span className="text-lg text-gray-400 line-through transform group-hover:scale-105 transition-transform">{item.originalPrice}</span>}
                </div>
                
                {item.originalPrice && <Badge className="bg-red-100 text-red-800 hover:bg-red-200 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md font-bold px-4 py-2">
                    خصم!
                  </Badge>}
              </div>

              {/* Professional price highlight */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl mx-[240px] my-0 bg-red-900">
                <span className="text-white text-lg font-bold">🔥</span>
              </div>
            </CardContent>

            {/* Professional bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </Card>)}
      </div>

      {/* Professional section divider */}
      <div className="mt-20 flex justify-center">
        <div className="w-40 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full shadow-lg transform hover:scale-x-150 transition-transform duration-500"></div>
      </div>
    </div>;
};