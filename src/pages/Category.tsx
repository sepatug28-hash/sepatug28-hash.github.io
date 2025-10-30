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
    "dining": "Dining",
    "storage": "Storage",
    "office": "Office",
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
        id: "2",
        name: "Coffee Table",
        price: 329,
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
        category: "Living Room",
      },
      {
        id: "3",
        name: "Accent Chair",
        price: 549,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
        category: "Living Room",
      },
      {
        id: "4",
        name: "TV Stand",
        price: 429,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        category: "Living Room",
      },
      {
        id: "5",
        name: "Floor Lamp",
        price: 199,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
        category: "Living Room",
      },
    ],
    "bedroom": [
      {
        id: "6",
        name: "Minimalist Bed Frame",
        price: 749,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        category: "Bedroom",
      },
      {
        id: "7",
        name: "Wardrobe",
        price: 1099,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
        category: "Bedroom",
      },
      {
        id: "8",
        name: "Nightstand",
        price: 249,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
        category: "Bedroom",
      },
      {
        id: "9",
        name: "Dresser with Mirror",
        price: 899,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
        category: "Bedroom",
      },
      {
        id: "10",
        name: "Bedside Table Lamp",
        price: 129,
        image: "https://images.unsplash.com/photo-1543198126-a8ad8e47a917?w=800&q=80",
        category: "Bedroom",
      },
    ],
    "kitchen": [
      {
        id: "11",
        name: "Kitchen Cabinet",
        price: 899,
        image: "https://images.unsplash.com/photo-1556228994-330c5b0e9bdf?w=800&q=80",
        category: "Kitchen",
      },
      {
        id: "12",
        name: "Kitchen Island",
        price: 1299,
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
        category: "Kitchen",
      },
      {
        id: "13",
        name: "Bar Stools Set",
        price: 399,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        category: "Kitchen",
      },
      {
        id: "14",
        name: "Pantry Shelf",
        price: 349,
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
        category: "Kitchen",
      },
      {
        id: "15",
        name: "Kitchen Cart",
        price: 279,
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
        category: "Kitchen",
      },
    ],
    "dining": [
      {
        id: "16",
        name: "Dining Table Set",
        price: 1299,
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
        category: "Dining",
      },
      {
        id: "17",
        name: "Dining Chairs Set of 4",
        price: 699,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
        category: "Dining",
      },
      {
        id: "18",
        name: "Extendable Dining Table",
        price: 1499,
        image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
        category: "Dining",
      },
      {
        id: "19",
        name: "Sideboard Cabinet",
        price: 849,
        image: "https://images.unsplash.com/photo-1595514535102-4b7f5e85f2fd?w=800&q=80",
        category: "Dining",
      },
      {
        id: "20",
        name: "Dining Bench",
        price: 399,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        category: "Dining",
      },
    ],
    "storage": [
      {
        id: "21",
        name: "Bookshelf",
        price: 299,
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
        category: "Storage",
      },
      {
        id: "22",
        name: "Storage Cabinet",
        price: 549,
        image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
        category: "Storage",
      },
      {
        id: "23",
        name: "Wall Shelving Unit",
        price: 379,
        image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
        category: "Storage",
      },
      {
        id: "24",
        name: "Cube Storage Organizer",
        price: 229,
        image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=800&q=80",
        category: "Storage",
      },
      {
        id: "25",
        name: "Display Cabinet",
        price: 679,
        image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&q=80",
        category: "Storage",
      },
    ],
    "office": [
      {
        id: "26",
        name: "Office Chair",
        price: 449,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
        category: "Office",
      },
      {
        id: "27",
        name: "Standing Desk",
        price: 799,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
        category: "Office",
      },
      {
        id: "28",
        name: "Filing Cabinet",
        price: 329,
        image: "https://images.unsplash.com/photo-1600493572608-697490a1f48c?w=800&q=80",
        category: "Office",
      },
      {
        id: "29",
        name: "Desk Organizer",
        price: 89,
        image: "https://images.unsplash.com/photo-1584438689866-e27c936bbf91?w=800&q=80",
        category: "Office",
      },
      {
        id: "30",
        name: "Office Bookcase",
        price: 599,
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
        category: "Office",
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
