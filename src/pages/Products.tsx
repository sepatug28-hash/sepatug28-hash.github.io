import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
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
    {
      id: "5",
      name: "Office Chair",
      price: 449,
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
      category: "Office",
    },
    {
      id: "6",
      name: "Coffee Table",
      price: 329,
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
      category: "Living Room",
    },
    {
      id: "7",
      name: "Kitchen Cabinet",
      price: 899,
      image: "https://images.unsplash.com/photo-1556228994-330c5b0e9bdf?w=800&q=80",
      category: "Kitchen",
    },
    {
      id: "8",
      name: "Wardrobe",
      price: 1099,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      category: "Bedroom",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">All Products</h1>
            <p className="text-muted-foreground">
              Browse our complete collection of Scandinavian-inspired furniture
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "living" ? "default" : "outline"}
                onClick={() => setSelectedCategory("living")}
              >
                Living Room
              </Button>
              <Button
                variant={selectedCategory === "bedroom" ? "default" : "outline"}
                onClick={() => setSelectedCategory("bedroom")}
              >
                Bedroom
              </Button>
              <Button
                variant={selectedCategory === "kitchen" ? "default" : "outline"}
                onClick={() => setSelectedCategory("kitchen")}
              >
                Kitchen
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
