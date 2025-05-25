
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
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className={`inline-block ${color} text-white px-8 py-4 rounded-full mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm opacity-90">{titleEn}</p>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{item.nameEn}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <span className="text-sm text-gray-500">ج.م</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                  )}
                </div>
                
                {item.originalPrice && (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                    خصم!
                  </Badge>
                )}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:from-red-600 hover:to-red-700">
                أضف للطلب
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
