import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/90">
            <img
              src="https://images.unsplash.com/photo-1615874694520-474822394e73?w=1600&q=80"
              alt="About Us"
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
          </div>
          <div className="relative z-10 text-center text-primary-foreground px-4">
            <h1 className="text-5xl font-bold mb-4">About NordicHome</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Bringing Scandinavian simplicity and quality to homes worldwide
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, NordicHome was born from a passion for Scandinavian design and a belief that beautiful, functional furniture should be accessible to everyone. Our journey began in a small workshop in Copenhagen, where we crafted our first pieces with careful attention to detail and quality.
              </p>
              <p>
                Today, we've grown into a trusted name in modern furniture, but our core values remain unchanged. We believe in creating pieces that are not just furniture, but companions in your daily life—items that bring joy, comfort, and beauty to your space.
              </p>
              <p>
                Every piece in our collection is designed with three principles in mind: simplicity, functionality, and sustainability. We work with skilled craftspeople and sustainable materials to ensure that each item we create will last for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to using eco-friendly materials and sustainable manufacturing processes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted with premium materials and exceptional attention to detail.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-muted-foreground">
                  We believe in timeless Scandinavian design that never goes out of style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground mb-12">
              Our passionate team of designers, craftspeople, and customer service specialists work together to bring you the best furniture experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1438761681033 + i * 1000}-6613c18e22d8?w=300&q=80`}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">Team Member {i}</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
