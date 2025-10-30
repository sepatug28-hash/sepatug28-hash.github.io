import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Modern Sofa",
      price: 899,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      category: "Living Room",
    },
    {
      id: "2",
      name: "Dining Table Set",
      price: 1299,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      category: "Dining",
    },
    {
      id: "3",
      name: "Minimalist Bed Frame",
      price: 749,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      category: "Bedroom",
    },
    {
      id: "4",
      name: "Bookshelf",
      price: 299,
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
      category: "Storage",
    },
  ];

  const categories = [
    {
      name: "Living Room",
      path: "/categories/living-room",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    },
    {
      name: "Bedroom",
      path: "/categories/bedroom",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    },
    {
      name: "Kitchen",
      path: "/categories/kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
              alt="Hero"
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
          </div>
          <div className="relative z-10 text-center text-primary-foreground px-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Scandinavian Design for Modern Living
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Discover timeless furniture that combines simplicity, functionality, and beauty
            </p>
            <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <Link to="/products">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Room</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect pieces for every space in your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="group relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <span className="inline-flex items-center gap-2 text-sm">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites that bring style and comfort to your home
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $100</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">Premium materials & craftsmanship</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">↻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
