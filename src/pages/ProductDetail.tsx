import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Star, Package, Leaf, Clock, Award, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { getProductById } from '../components/data/Products';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  // const { toast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!id) {
    navigate('/');
    return null;
  }

  const product = getProductById(id);

  const [isZoomed, setIsZoomed] = useState(false);

 
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-business font-bold mb-4">Product niet gevonden</h1>
          <Button onClick={() => navigate('/')} variant="default">
            Terug naar overzicht
          </Button>
        </div>
      </div>
    );
  }

  const seasonColors = {
    lente: 'bg-green-100 text-green-800',
    zomer: 'bg-yellow-100 text-yellow-800', 
    herfst: 'bg-orange-100 text-orange-800',
    winter: 'bg-blue-100 text-blue-800',
    'alle-seizoenen': 'bg-purple-100 text-purple-800'
  };

  const seasonIcons = {
    lente: '🌸',
    zomer: '☀️',
    herfst: '🍂', 
    winter: '❄️',
    'alle-seizoenen': '🔄'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">

        {/* terug naar hoofdmenu knop */}
        <Button
          variant="secondary"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Terug naar overzicht
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* afbeeldingen */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-warm-sand shadow-lg cursor-pointer"
           onClick={() => {
              setIsZoomed(true);
            }}>
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

                {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <X
                    onClick={() => setIsZoomed(false)}
                    className="absolute top-10 right-10 w-10 h-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-50 cursor-pointer"
                  />

                  <div className="w-full h-full flex items-center justify-center">
                    <TransformWrapper>
                    <TransformComponent>
                      <img
                        src={product.images[selectedImageIndex]}
                        alt={product.title}
                        className="max-w-full max-h-[90vh] object-contain cursor-zoom-in"
                        style={{ transformOrigin: "center center" }}
                      />
                  </TransformComponent>
                  </TransformWrapper>
                  </div>
                </div>
              )}
                          
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                      selectedImageIndex === index 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* productinformatie */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge 
                    variant="season"
                    className={`mb-3 ${seasonColors[product.season]} `}
                  >
                    {seasonIcons[product.season]} {product.season === 'alle-seizoenen' ? 'Alle seizoenen' : product.season}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
                  <p className="text-lg font-bold font-business text-muted-foreground">{product.description}</p>
                </div>
                {/* <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                  <Heart className="w-5 h-5" />
                </Button> */}
              </div>
              
              <div className="text-3xl font-bold mb-6 text-primary">
                €{product.price}
              </div>
            </div>

            {/* CTA */}
            <Card className="border-2 border-primary/10 bg-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  <span className="text-green-600 font-business font-bold">Op voorraad - Handgemaakt op bestelling</span>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <label htmlFor="quantity" className="font-business font-bold">Aantal:</label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-border rounded-md px-3 py-2 bg-background font-business font-bold"
                  >
                    {[1, 2, 3].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <Button variant="default" size="lg">
                    Vrijblijvend aanvragen
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Gratis verzending binnen Nederland • 30 dagen bedenktijd
                </p>
              </CardContent>
            </Card>

            {/* eigenschappen */}
            <Card>
              <CardContent className="p-6 border-2 rounded-md bg-secondary-light border-secondary/10">
                <h3 className="font-bold font-business mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Eigenschappen
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex font-business font-bold items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* materialen */}
            <Card>
              <CardContent className="p-6 border border-border rounded-md bg-secondary/50 border-secondary-warm/20">
                <h3 className="font-bold font-business mb-4 flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-primary" />
                  Natuurlijke materialen
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <Badge key={index} variant="default">
                      {material}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* afmetingen */}
            <Card>
              <CardContent className="p-6 border border-border rounded-md bg-secondary/20 border-secondary-warm/10">
                <h3 className="font-business font-bold mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-primary" />
                  Afmetingen
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-bold font-business text-muted-foreground">Hoogte:</span>
                    <div className="font-bold font-business ">{product.dimensions.height}</div>
                  </div>
                  <div>
                    <span className="font-bold font-business text-muted-foreground">Breedte:</span>
                    <div className="font-bold font-business ">{product.dimensions.width}</div>
                  </div>
                  <div>
                    <span className="font-bold font-business  text-muted-foreground">Diepte:</span>
                    <div className="font-bold font-business ">{product.dimensions.depth}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

           

            {/* beschrijving */}
            <Card>
              <CardContent className="p-6 border-2 border-white/20 rounded-md">
                <h3 className="font-bold font-business mb-4">Over dit kunstwerk</h3>
                <p className="text-muted-foreground font-bold font-business leading-relaxed">
                  {product.longDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;