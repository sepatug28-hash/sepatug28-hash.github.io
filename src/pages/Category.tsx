import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  const { category } = useParams();
  
  const categoryNames: Record<string, string> = {
    "living-room": "Living Room",
    "bedroom": "Bedroom",
    "kitchen": "Kitchen",
  };

  const categoryProducts: Record<string, any[]> = {
    "living-room": [
      {
        id: "1",
        name: "Modern Sofa",
        price: 899,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        category: "Living Room",
      },
      {
        id: "6",
        name: "Coffee Table",
        price: 329,
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
        category: "Living Room",
      },
    ],
    "bedroom": [
      {
        id: "3",
        name: "Minimalist Bed Frame",
        price: 749,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        category: "Bedroom",
      },
      {
        id: "8",
        name: "Wardrobe",
        price: 1099,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
        category: "Bedroom",
      },
    ],
    "kitchen": [
      {
        id: "7",
        name: "Kitchen Cabinet",
        price: 899,
        image: "https://images.unsplash.com/photo-1556228994-330c5b0e9bdf?w=800&q=80",
        category: "Kitchen",
      },
    ],
  };

  const categoryName = categoryNames[category || ""] || "Category";
  const products = categoryProducts[category || ""] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Category Header */}
        <section className="relative h-80 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/90">
            <img
              src={`https://images.unsplash.com/photo-${category === 'living-room' ? '1567016432779' : category === 'bedroom' ? '1540518614846' : '1556911220'}-094069958ea5?w=1600&q=80`}
              alt={categoryName}
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
          </div>
          <div className="relative z-10 text-center text-primary-foreground px-4">
            <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
            <p className="text-xl text-primary-foreground/90">
              Discover our curated collection of {categoryName.toLowerCase()} furniture
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
