import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();

  const product = {
    id: id || "1",
    name: "Modern Minimalist Sofa",
    price: 899,
    description: "Experience ultimate comfort with our modern minimalist sofa. Crafted with premium materials and Scandinavian design principles, this piece combines style and functionality.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    category: "Living Room",
    inStock: true,
    features: [
      "Premium fabric upholstery",
      "Solid wood frame",
      "High-density foam cushions",
      "Easy to clean and maintain",
      "5-year warranty",
    ],
    dimensions: {
      width: "220cm",
      depth: "90cm",
      height: "85cm",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>5-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day return policy</span>
              </div>
            </div>

            <Tabs defaultValue="features" className="mt-8">
              <TabsList className="w-full">
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                <TabsTrigger value="dimensions" className="flex-1">Dimensions</TabsTrigger>
                <TabsTrigger value="care" className="flex-1">Care</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="space-y-2 mt-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="dimensions" className="mt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Width:</span>
                    <span className="font-medium">{product.dimensions.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Depth:</span>
                    <span className="font-medium">{product.dimensions.depth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Height:</span>
                    <span className="font-medium">{product.dimensions.height}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="care" className="mt-4">
                <p className="text-muted-foreground">
                  Clean with a soft, damp cloth. Avoid harsh chemicals. For deeper cleaning, use appropriate upholstery cleaner. Keep away from direct sunlight to prevent fading.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
