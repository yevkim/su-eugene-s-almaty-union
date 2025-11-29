import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Plane, Mountain, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-mountain-venue.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import almatyMountains from "@/assets/almaty-mountains.jpg";

const Index = () => {
  /* TODO: Replace all placeholder text with actual content */
  /* TODO: Replace placeholder images with real proposal and couple photos */
  /* TODO: Update Russian translations throughout */
  /* TODO: Add actual RSVP form URL */
  /* TODO: Add actual venue Google Maps link */
  /* TODO: Add official visa information links */
  /* TODO: Add contact email and phone numbers */

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-serif text-lg font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              SJ & E
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('story')} className="text-sm hover:text-primary transition-colors">Our Story</button>
              <button onClick={() => scrollToSection('wedding-day')} className="text-sm hover:text-primary transition-colors">Wedding Day</button>
              <button onClick={() => scrollToSection('travel')} className="text-sm hover:text-primary transition-colors">Travel</button>
              <button onClick={() => scrollToSection('stay')} className="text-sm hover:text-primary transition-colors">Stay</button>
              <button onClick={() => scrollToSection('rsvp')} className="text-sm hover:text-primary transition-colors">RSVP</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/60 via-hero-overlay/40 to-hero-overlay/70" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 animate-in fade-in duration-1000">
            Su June & Eugene
          </h1>
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-8 animate-in fade-in duration-1000 delay-200">
            <Calendar className="w-6 h-6" />
            <span>8 August 2026</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl mb-12 animate-in fade-in duration-1000 delay-300">
            <MapPin className="w-5 h-5" />
            <span>Sulusai, near Almaty, Kazakhstan</span>
          </div>
          
          {/* Bilingual Welcome - TODO: Refine copy */}
          <div className="max-w-2xl mx-auto mb-12 space-y-3 animate-in fade-in duration-1000 delay-500">
            <p className="text-lg md:text-xl font-light">
              Join us in the mountains for a celebration of love and adventure
            </p>
            <p className="text-lg md:text-xl font-light">
              Присоединяйтесь к нам в горах для праздника любви и приключений
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-1000 delay-700">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('rsvp')}
              className="bg-rsvp-highlight hover:bg-rsvp-highlight/90 text-foreground font-semibold"
            >
              RSVP
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('travel')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              Travel & Stay
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Our Story / Наша История
          </h2>
          
          {/* TODO: Replace with actual couple story */}
          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
            <p className="text-lg text-muted-foreground">
              [EN] A brief, playful introduction about how Su June and Eugene met, their adventures together, 
              and the journey that led to this mountain celebration in Almaty.
            </p>
            <p className="text-lg text-muted-foreground">
              [RU] Краткое, игривое введение о том, как Су Джун и Евгений встретились, их приключениях вместе,
              и путешествии, которое привело к этому горному празднованию в Алматы.
            </p>
          </div>

          {/* Timeline - TODO: Add actual milestones */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={couplePortrait} 
                  alt="Proposal photo placeholder - replace with actual proposal photo"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">First Meeting / Первая встреча</h3>
                <p className="text-muted-foreground mb-2">
                  [EN] Story of how they met - add actual details here.
                </p>
                <p className="text-muted-foreground">
                  [RU] История их встречи - добавьте фактические детали здесь.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Adventures Together / Приключения вместе</h3>
                <p className="text-muted-foreground mb-2">
                  [EN] Their travels, experiences, shared moments.
                </p>
                <p className="text-muted-foreground">
                  [RU] Их путешествия, опыт, совместные моменты.
                </p>
              </div>
              <div>
                <img 
                  src={almatyMountains} 
                  alt="Travel photo placeholder - replace with couple travel photo"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">The Proposal / Предложение</h3>
              <p className="text-muted-foreground mb-2">
                [EN] Story of the proposal - when, where, how it happened.
              </p>
              <p className="text-muted-foreground">
                [RU] История предложения - когда, где, как это произошло.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="wedding-day" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Wedding Day / День Свадьбы
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Date & Venue */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Date & Time</h3>
                    <div className="flex items-start gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">8 August 2026 (08.08.2026)</p>
                        <p className="text-sm text-muted-foreground">Full schedule below</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Venue / Место</h3>
                    <div className="flex items-start gap-3 mb-4">
                      <Mountain className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Sulusai (Sulu Sai) Resort & SPA</p>
                        <p className="text-sm text-muted-foreground">Near Almaty, Kazakhstan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-muted-foreground mb-2">
                    [EN] A beautiful mountain retreat surrounded by nature, fresh air, and stunning views. 
                    An intimate and cozy atmosphere perfect for our celebration.
                  </p>
                  <p className="text-muted-foreground">
                    [RU] Прекрасное горное убежище в окружении природы, свежего воздуха и потрясающих видов.
                    Интимная и уютная атмосфера, идеальная для нашего праздника.
                  </p>
                </div>

                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => window.open('https://maps.google.com/?q=Sulusai+Resort+Almaty', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Map / Карта
                  </Button>
                  {/* TODO: Replace with actual venue coordinates */}
                </div>
              </CardContent>
            </Card>

            {/* Schedule - TODO: Add actual times */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">Schedule / Расписание</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 font-semibold text-primary">14:00</div>
                    <div>
                      <p className="font-semibold">Guest Arrival / Прибытие гостей</p>
                      <p className="text-sm text-muted-foreground">Welcome drinks and refreshments</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-semibold text-primary">15:00</div>
                    <div>
                      <p className="font-semibold">Ceremony / Церемония</p>
                      <p className="text-sm text-muted-foreground">Outdoor mountain ceremony</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-semibold text-primary">16:30</div>
                    <div>
                      <p className="font-semibold">Reception & Dinner / Прием и ужин</p>
                      <p className="text-sm text-muted-foreground">Celebration begins</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-semibold text-primary">20:00</div>
                    <div>
                      <p className="font-semibold">Party / Вечеринка</p>
                      <p className="text-sm text-muted-foreground">Dancing and celebration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info - TODO: Customize */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">What to Know / Полезная информация</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Dress Code / Дресс-код</h4>
                    <p className="text-muted-foreground">
                      [TODO: Add dress code guidance - e.g., Smart casual, Garden party attire, etc.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weather / Погода</h4>
                    <p className="text-muted-foreground">
                      August in the Almaty mountains is typically warm and pleasant (20-28°C / 68-82°F) during the day, 
                      cooler in the evening. Bring a light jacket for the evening.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel to Almaty Section */}
      <section id="travel" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Travel to Almaty / Как добраться до Алматы
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                      Getting to Almaty / Прибытие в Алматы
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      [EN] Almaty is accessible via major international hubs. The main airport is <strong>Almaty International Airport (ALA)</strong>.
                      Many guests from Singapore and Southeast Asia have convenient options including flights with airlines such as AirAsia X and other carriers.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      [RU] Алматы доступен через крупные международные узлы. Главный аэропорт - <strong>Международный аэропорт Алматы (ALA)</strong>.
                      Многие гости из Сингапура и Юго-Восточной Азии имеют удобные варианты, включая рейсы с такими авиакомпаниями, как AirAsia X и другие.
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">Approximate Flight Durations / Примерная продолжительность полета:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>From Singapore / Southeast Asia:</strong> ~8-10 hours (with connections)</li>
                  <li>• <strong>From Western Europe:</strong> ~6-8 hours (direct or 1 stop)</li>
                  <li>• <strong>From North America:</strong> ~12-16 hours (with connections)</li>
                  <li>• <strong>From Australia:</strong> ~12-15 hours (with connections)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Note: Actual routes and times vary. Please check with airlines for current schedules.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                  From Airport to Venue / От аэропорта до места проведения
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Airport to Almaty City Centre:</strong> Approximately 20-30 minutes by taxi or transfer.
                  </p>
                  <p>
                    <strong>City Centre to Sulusai Venue Area:</strong> Approximately 45-60 minutes drive into the mountains 
                    (exact time varies; we will provide detailed directions closer to the date).
                  </p>
                  <p className="text-sm italic">
                    We will share recommended transfer options and may organize group transportation for guests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visa & Entry Section */}
      <section id="visa" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Visa & Entry Basics / Визы и въезд
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-accent/20 rounded-lg border border-accent">
                  <p className="text-sm font-semibold mb-2">Important Disclaimer / Важный дисклеймер:</p>
                  <p className="text-sm text-muted-foreground">
                    Please always verify the latest visa and entry requirements with official government websites 
                    or your airline before booking. Rules change frequently.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">General Information</h3>
                    <p className="text-muted-foreground mb-3">
                      [EN] Many nationalities currently have visa-free or simplified entry to Kazakhstan for short visits. 
                      This includes citizens from countries such as Singapore, Malaysia, Germany, Italy, Australia, USA, Philippines, and others. 
                      However, requirements vary by nationality and can change.
                    </p>
                    <p className="text-muted-foreground">
                      [RU] Многие граждане в настоящее время имеют безвизовый или упрощенный въезд в Казахстан для коротких визитов.
                      Это включает граждан таких стран, как Сингапур, Малайзия, Германия, Италия, Австралия, США, Филиппины и другие.
                      Однако требования различаются по гражданству и могут меняться.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Helpful Resources / Полезные ресурсы</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        • <a href="https://www.gov.kz/services/visa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Official Kazakhstan Visa Information (placeholder link - TODO: Add real link)
                        </a>
                      </li>
                      <li>
                        • <a href="https://www.mfa.gov.sg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Singapore MFA Travel Advice for Kazakhstan (placeholder - TODO: Add real link)
                        </a>
                      </li>
                      <li>
                        • Check with your country's foreign affairs ministry for the latest travel advisories
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Stay Section */}
      <section id="stay" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Where to Stay / Где остановиться
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-2">
                [EN] We'll provide personalized accommodation recommendations closer to the date. 
                Consider staying either in Almaty city for easy access to cafes and restaurants, 
                or closer to the mountains for a nature experience.
              </p>
              <p className="text-lg text-muted-foreground">
                [RU] Мы предоставим персонализированные рекомендации по размещению ближе к дате.
                Рассмотрите возможность остановиться либо в городе Алматы для легкого доступа к кафе и ресторанам,
                либо ближе к горам для отдыха на природе.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                  Accommodation Options / Варианты размещения
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">In Almaty City / В городе Алматы</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      [TODO: Add 2-3 recommended hotels in Almaty city centre with brief descriptions]
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Hotel Recommendation 1 (City Centre)</li>
                      <li>• Hotel Recommendation 2 (Nearby area)</li>
                      <li>• Hotel Recommendation 3 (Budget-friendly option)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Near the Mountains / Рядом с горами</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      [TODO: Add 2-3 mountain area accommodations]
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Mountain Lodge 1</li>
                      <li>• Mountain Resort 2</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Mountain className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                      Oi Qaragai (Lesnaya Skazka) / Ой Қарағай
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      [EN] A beautiful mountain resort area with forest, wooden houses, and mountain views. 
                      Perfect for a nature getaway before or after the wedding. Activities include hiking, horseback riding, 
                      and simply enjoying the fresh mountain air.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      [RU] Прекрасная горная курортная зона с лесом, деревянными домами и видами на горы.
                      Идеально для отдыха на природе до или после свадьбы. Активности включают походы, конные прогулки,
                      и просто наслаждение свежим горным воздухом.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => window.open('http://oikaragai.kz', '_blank')}>
                      Learn More / Узнать больше
                    </Button>
                    {/* TODO: Replace with actual Oi Qaragai website link */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section id="itineraries" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Suggested Itineraries / Предлагаемые маршруты
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-2">
                [EN] These are flexible ideas to help you plan your visit. We may organize some group tours 
                for close friends (details to be confirmed).
              </p>
              <p className="text-lg text-muted-foreground">
                [RU] Это гибкие идеи, которые помогут вам спланировать ваш визит. Мы можем организовать групповые туры
                для близких друзей (детали будут подтверждены).
              </p>
            </div>

            {/* 3-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  3-Day Quick Visit / 3-дневный быстрый визит
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Day 1: Arrival & City Exploration</h4>
                    <p className="text-sm text-muted-foreground">
                      Arrive in Almaty, settle in. Explore city cafes, visit local markets (e.g., Green Bazaar), 
                      enjoy panoramic views from Kok Tobe viewpoint.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 2: Wedding Day</h4>
                    <p className="text-sm text-muted-foreground">
                      Travel to Sulusai for the wedding celebration in the mountains!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 3: Nature Morning & Departure</h4>
                    <p className="text-sm text-muted-foreground">
                      Quick morning visit to Medeu or Shymbulak mountain area, then depart.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  5-Day Extended Trip / 5-дневная расширенная поездка
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Day 1: Arrival & City</h4>
                    <p className="text-sm text-muted-foreground">
                      Arrive, explore Almaty city, cafes, and local culture.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 2: Mountain Adventure</h4>
                    <p className="text-sm text-muted-foreground">
                      Full day trip to Big Almaty Lake or Charyn Canyon (dramatic landscapes).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 3: Wedding Day</h4>
                    <p className="text-sm text-muted-foreground">
                      Celebration at Sulusai!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 4: Relax in Mountains</h4>
                    <p className="text-sm text-muted-foreground">
                      Stay in Oi Qaragai or nearby, enjoy nature, hiking, and forest air.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 5: City & Departure</h4>
                    <p className="text-sm text-muted-foreground">
                      Last morning in Almaty, shopping or final sights, then depart.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  7-Day Full Experience / 7-дневный полный опыт
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Days 1-2: Almaty City & Culture</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore city thoroughly: cafes, parks, museums, local food, markets.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 3: Nature Excursion</h4>
                    <p className="text-sm text-muted-foreground">
                      Day trip to Kolsai or Kaindy Lakes (stunning alpine scenery).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 4: Wedding Day</h4>
                    <p className="text-sm text-muted-foreground">
                      Celebrate in the mountains at Sulusai!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Days 5-6: Mountain Retreat</h4>
                    <p className="text-sm text-muted-foreground">
                      Extended stay in Oi Qaragai or similar. Hiking, horseback riding, relaxation. 
                      Optional day trip to Charyn Canyon.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 7: Final City Day & Departure</h4>
                    <p className="text-sm text-muted-foreground">
                      Last leisurely morning, final shopping or sightseeing, departure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section - Highlighted */}
      <section id="rsvp" className="section-padding bg-rsvp-highlight/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-rsvp-highlight shadow-lg">
              <CardContent className="p-10">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
                  RSVP
                </h2>

                <div className="space-y-6 text-center mb-8">
                  <p className="text-lg">
                    <strong>[EN]</strong> If you have received a personal invitation from us, 
                    please let us know if you can join us! We're managing numbers carefully to keep our celebration intimate.
                  </p>
                  <p className="text-lg">
                    <strong>[RU]</strong> Если вы получили от нас личное приглашение,
                    пожалуйста, дайте нам знать, сможете ли вы присоединиться к нам! Мы тщательно управляем количеством гостей, чтобы сохранить интимность нашего праздника.
                  </p>

                  <div className="p-6 bg-accent/30 rounded-lg border border-accent/50">
                    <p className="font-semibold mb-2">Important / Важно:</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      [EN] Please only submit an RSVP if you received a specific invitation. 
                      No additional plus-ones or children unless explicitly mentioned in your invitation.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [RU] Пожалуйста, отправляйте RSVP только если вы получили конкретное приглашение.
                      Никаких дополнительных гостей или детей, если это не указано явно в вашем приглашении.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12"
                    onClick={() => window.open('https://notion.so/your-rsvp-form', '_blank')}
                  >
                    Submit RSVP / Отправить RSVP
                  </Button>
                  {/* TODO: Replace with actual RSVP form URL (Notion or other) */}
                  <p className="text-sm text-muted-foreground mt-4">
                    This will open our RSVP form in a new window
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs & Contact Section */}
      <section id="faqs" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            FAQs & Contact / Вопросы и контакты
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* FAQs */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  Frequently Asked Questions / Часто задаваемые вопросы
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">What should I wear? / Что надеть?</h4>
                    <p className="text-sm text-muted-foreground">
                      [TODO: Add dress code guidance here]
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Can I bring children? / Могу ли я привести детей?</h4>
                    <p className="text-sm text-muted-foreground">
                      [EN] We love your little ones, but this will be an adults-only celebration unless 
                      children are specifically mentioned on your invitation.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [RU] Мы любим ваших малышей, но это будет праздник только для взрослых, если
                      дети не указаны конкретно в вашем приглашении.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What about dietary restrictions? / Что насчет диетических ограничений?</h4>
                    <p className="text-sm text-muted-foreground">
                      [EN] Please let us know in your RSVP if you have any dietary requirements, 
                      and we'll do our best to accommodate.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [RU] Пожалуйста, сообщите нам в RSVP, если у вас есть диетические требования,
                      и мы сделаем все возможное, чтобы учесть их.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What's the weather like in August? / Какая погода в августе?</h4>
                    <p className="text-sm text-muted-foreground">
                      [EN] August in the Almaty mountains is typically warm during the day (20-28°C / 68-82°F) 
                      and cooler in the evening. Bring layers and a light jacket.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [RU] Август в горах Алматы обычно теплый днем (20-28°C) и прохладнее вечером. 
                      Возьмите одежду слоями и легкую куртку.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">How do I get to the venue? / Как добраться до места проведения?</h4>
                    <p className="text-sm text-muted-foreground">
                      [EN] We'll provide detailed transportation information closer to the date. 
                      Group transfer options may be available.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [RU] Мы предоставим подробную информацию о транспорте ближе к дате.
                      Возможны варианты групповых трансферов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  Get in Touch / Связаться с нами
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions or special requests? We're here to help!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:wedding@example.com" className="text-primary hover:underline">
                      wedding@example.com {/* TODO: Replace with actual email */}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      WhatsApp / Telegram: +X XXX XXX XXXX {/* TODO: Replace with actual numbers */}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="sm">
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm">
                    Telegram
                  </Button>
                  {/* TODO: Add actual WhatsApp and Telegram links */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <p className="font-serif text-2xl mb-2">Su June & Eugene</p>
          <p className="text-sm opacity-80">8 August 2026 · Almaty, Kazakhstan</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
