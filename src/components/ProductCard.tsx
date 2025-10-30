import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-md"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
          <Button
            size="sm"
            className="gap-2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
