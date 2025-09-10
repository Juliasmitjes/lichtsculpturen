import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:julia@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Naam: ${formData.name}\nEmail: ${formData.email}\n\nBericht:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-handwritten text-4xl lg:text-5xl text-accent mb-4">
              Laten we praten
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Neem contact op
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nieuwsgierig naar mijn werk? Wil je meer weten over een specifieke sculptuur 
              of schilderij? Ik hoor graag van je!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-foreground mb-6">
                  Kom langs in mijn atelier
                </h4>
                <p className="text-muted-foreground mb-8">
                  In mijn atelier kun je mijn werk van dichtbij bekijken en voelen. 
                  Maak een afspraak en ontdek de verhalen achter elke creatie.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    detail: "julia@example.com",
                    action: "mailto:julia@example.com"
                  },
                  {
                    icon: Phone,
                    title: "Telefoon", 
                    detail: "+31 6 12345678",
                    action: "tel:+31612345678"
                  },
                  {
                    icon: MapPin,
                    title: "Atelier",
                    detail: "Amsterdam, Nederland",
                    action: null
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.title}</p>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.detail}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h5 className="font-handwritten text-xl text-accent mb-2">
                  Bezoek mijn atelier
                </h5>
                <p className="text-muted-foreground text-sm mb-4">
                  Maak een afspraak voor een persoonlijke kennismaking
                </p>
                <Button variant="outline" size="sm">
                  Afspraak maken
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h4 className="text-2xl font-semibold text-foreground mb-6">
                Stuur een bericht
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="je@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Onderwerp
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">Kies een onderwerp...</option>
                    <option value="Lichtsculptuur informatie">Lichtsculptuur informatie</option>
                    <option value="Schilderij informatie">Schilderij informatie</option>
                    <option value="Opdracht aanvraag">Opdracht aanvraag</option>
                    <option value="Atelierbeziek">Atelierbeziek</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Vertel me over je interesse in mijn werk..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Verstuur bericht
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;