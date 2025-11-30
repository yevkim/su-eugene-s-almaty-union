import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Plane, Mountain, Mail, Phone, Home, HelpCircle } from "lucide-react";
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
              className="font-serif text-lg font-semibold text-primary hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <Mountain className="w-5 h-5 text-accent" />
              Kim Chee
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('story')} className="text-sm hover:text-primary transition-colors">Our Story</button>
              <button onClick={() => scrollToSection('wedding-day')} className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Wedding Day
              </button>
              <button onClick={() => scrollToSection('travel')} className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Travel
              </button>
              <button onClick={() => scrollToSection('stay')} className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Stay
              </button>
              <button onClick={() => scrollToSection('rsvp')} className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Mail className="w-4 h-4" />
                RSVP
              </button>
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
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 animate-in fade-in duration-1000">
            Su June & Eugene
          </h1>
          <p className="font-serif text-4xl md:text-6xl mb-8 animate-in fade-in duration-1000 delay-100">
            Су Джун и Евгений
          </p>
          <div className="space-y-2 text-lg md:text-xl mb-8 animate-in fade-in duration-1000 delay-200">
            <p>08.08.2026 · Sulusai, near Almaty, Kazakhstan</p>
            <p className="text-base md:text-lg opacity-90">08.08.2026 · Сулуса́й, недалеко от Алматы, Казахстан</p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-8 space-y-3 animate-in fade-in duration-1000 delay-300">
            <p className="text-lg md:text-xl font-light">
              We're getting married in the mountains of Kazakhstan and would love for you to celebrate with us.
            </p>
            <p className="text-base md:text-lg font-light italic opacity-90">
              Мы женимся в горах Казахстана и очень хотим отпраздновать этот день вместе с вами.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 space-y-2 animate-in fade-in duration-1000 delay-400">
            <p className="text-sm md:text-base opacity-80">
              This page has everything you need to plan your trip, from how to get to Almaty to ideas for exploring after the wedding.
            </p>
            <p className="text-xs md:text-sm italic opacity-70">
              Здесь вы найдёте всю нужную информацию: как добраться до Алматы и чем заняться до и после свадьбы.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('rsvp')}
              className="bg-rsvp-highlight hover:bg-rsvp-highlight/90 text-foreground font-semibold gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="text-left">
                <span className="block">RSVP (invited guests only)</span>
                <span className="block text-xs opacity-80">только для приглашённых гостей</span>
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('travel')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-left">
                <span className="block">Travel & stay details</span>
                <span className="block text-xs opacity-80">Информация о поездке</span>
              </span>
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
          
          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
            <p className="text-lg text-foreground/80">
              A Kazakh–German–Russian boy from Almaty and a Chinese Hakka girl from Malaysia somehow ended up 
              in the same tiny dot on the map: Singapore. One coffee chat led to many more, and suddenly the 
              idea of 'home' started to mean each other.
            </p>
            <p className="text-base text-foreground/70 italic">
              Казахско‑немецко‑русский парень из Алматы и китайская хака‑девушка из Малайзии каким‑то образом 
              оказались в одном и том же маленьком месте на карте — в Сингапуре. Одна случайная встреча за кофе 
              плавно превратилась в много тёплых разговоров, и понятие «дом» очень быстро стало означать друг друга.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Milestone 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={couplePortrait} 
                  alt="PHOTO PLACEHOLDER – Proposal day"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">PHOTO PLACEHOLDER – Proposal day</p>
              </div>
              <div className="order-1 md:order-2 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">We crossed paths in Singapore</h3>
                <h3 className="font-serif text-xl italic text-primary/80">Мы встретились в Сингапуре</h3>
                <p className="text-muted-foreground">
                  We met in Singapore, both far away from where we grew up, and immediately bonded over food, stories about our families, and life between cultures.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Мы познакомились в Сингапуре, далеко от мест, где выросли, и сразу нашли общий язык: через еду, рассказы о семьях и жизнь между разными культурами.
                </p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">Many flights, one team</h3>
                <h3 className="font-serif text-xl italic text-primary/80">Множество перелётов, одна команда</h3>
                <p className="text-muted-foreground">
                  Between work trips, family visits, and holidays, we collected a lot of boarding passes and even more inside jokes. Somewhere between airports, we quietly became a team.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Рабочие командировки, поездки к родным и совместные отпуска подарили нам целую коллекцию посадочных талонов и ещё больше внутренних шуток. Где‑то между аэропортами мы очень незаметно стали настоящей командой.
                </p>
              </div>
              <div>
                <img 
                  src={almatyMountains} 
                  alt="PHOTO PLACEHOLDER – Couple travel photo"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">PHOTO PLACEHOLDER – Couple travel photo</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">The proposal</h3>
              <h3 className="font-serif text-xl italic text-primary/80">Предложение</h3>
              <p className="text-muted-foreground">
                Surrounded by beautiful views and way too many photos, Eugene asked, Su June said yes, and both of us cried more than expected.
              </p>
              <p className="text-muted-foreground text-sm italic">
                В окружении красивых видов и бесконечного количества фотографий Евгений сделал предложение, Су Джун сказала «да», и оба вдруг расплакались куда сильнее, чем планировали.
              </p>
              <div className="mt-6 bg-muted/30 rounded-lg p-6">
                <p className="text-sm text-muted-foreground">PHOTO PLACEHOLDER – Just us being silly</p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">Now it's wedding time</h3>
              <h3 className="font-serif text-xl italic text-primary/80">Теперь время свадьбы</h3>
              <p className="text-muted-foreground">
                Next stop: the mountains near Almaty, to bring together our families and friends from all over the world and start the next chapter.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Следующая остановка — горы под Алматы, где мы соберём родных и друзей со всего мира и начнём новую главу нашей истории.
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
            <Card className="mb-8">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-2xl font-serif text-primary">8 August 2026 / 8 августа 2026</p>
                  <p className="text-xl">
                    Sulusai (Sulu Sai) Resort & SPA
                    <br />
                    <span className="text-base text-muted-foreground">
                      Near Almaty, Kazakhstan / Недалеко от Алматы, Казахстан
                    </span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/80">
                      On 8 August 2026, we'll be celebrating our wedding at Sulusai, a cozy mountain resort just 
                      outside Almaty. Think fresh air, pine trees, big skies, and a lot of happy tears.
                    </p>
                    <p className="text-foreground/70 text-sm italic mt-2">
                      8 августа 2026 года мы будем праздновать нашу свадьбу в Сулусае — уютном горном курорте недалеко 
                      от Алматы. Представьте свежий воздух, сосны, огромное небо и много‑много счастливых слёз.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-foreground/80">
                      Sulusai is a peaceful spot in the foothills with beautiful views, wooden details, and nature 
                      all around. It's the kind of place where time slows down a little, and evenings feel extra magical.
                    </p>
                    <p className="text-foreground/70 text-sm italic mt-2">
                      Сулусай — это тихое место в предгорьях с прекрасными видами, деревянными деталями и природой вокруг. 
                      Здесь время будто идёт медленнее, а вечера кажутся особенно волшебными.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-foreground/70">
                      Exact timing and program for the day will be shared closer to the date, but you can already plan 
                      to spend the whole day and evening with us.
                    </p>
                    <p className="text-foreground/60 text-sm italic mt-2">
                      Точное время и программа дня будут опубликованы ближе к дате, но уже сейчас можно смело планировать 
                      провести с нами весь день и вечер.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('https://maps.google.com/?q=Sulusai+Resort+Almaty', '_blank')}
                  >
                    <MapPin className="w-4 h-4" />
                    View venue on map / Посмотреть место на карте
                  </Button>
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
            <div className="text-center space-y-3">
              <p className="text-lg text-foreground/80">
                Almaty is the largest city in Kazakhstan, set right next to the mountains. It's easy to reach 
                with a combination of regional and international flights.
              </p>
              <p className="text-base text-foreground/70 italic">
                Алматы — крупнейший город Казахстана, который буквально упирается в горы. Добраться сюда можно 
                с помощью удобных стыковочных и прямых рейсов.
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  Airport & Getting Around / Аэропорт и трансфер
                </h3>
                <div>
                  <p className="text-foreground/70">
                    You'll be flying into Almaty International Airport (ALA). From the airport, it's about 
                    25–40 minutes by car to the city centre, depending on traffic, and longer to reach the 
                    mountain area where Sulusai is located.
                  </p>
                  <p className="text-foreground/60 text-sm italic mt-2">
                    Вы прилетите в Международный аэропорт Алматы (ALA). От аэропорта до центра города примерно 
                    25–40 минут на машине в зависимости от пробок, а до горного района, где находится Сулусай, 
                    дорога займёт больше времени.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  From Singapore & Southeast Asia
                </h3>
                <h3 className="font-serif text-lg italic text-primary/80">
                  Из Сингапура и Юго-Восточной Азии
                </h3>
                <p className="text-foreground/70 text-sm">
                  From Singapore and nearby cities, the most convenient way is to fly with one or two 
                  connections via regional hubs. Depending on the route, the total travel time is usually 
                  around 10–13 hours, including transit. Airlines like AirAsia X and other regional carriers 
                  often appear among the options, but routes and schedules change over time.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  Из Сингапура и городов Юго‑Восточной Азии чаще всего удобно лететь с одной‑двумя стыковками 
                  через региональные хабы. В зависимости от маршрута дорога обычно занимает около 10–13 часов 
                  вместе с пересадками. Варианты перелётов часто включают авиакомпании вроде AirAsia X и другие 
                  региональные перевозчики, но расписание и маршруты со временем меняются.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">From Europe</h3>
                <h3 className="font-serif text-lg italic text-primary/80">Из Европы</h3>
                <p className="text-foreground/70 text-sm">
                  From major European cities, many guests will likely fly via hubs such as Istanbul, Dubai, 
                  Abu Dhabi, or Frankfurt. Typical total travel times are around 7–10 hours, depending on 
                  where you start and your connections.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  Из крупных городов Европы удобнее всего лететь через крупные хабы, например Стамбул, Дубай, 
                  Абу‑Даби или Франкфурт. Весь путь обычно занимает около 7–10 часов в зависимости от города 
                  вылета и выбранных стыковок.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  From the US & Other Long-Haul Destinations
                </h3>
                <h3 className="font-serif text-lg italic text-primary/80">
                  Из США и других дальних направлений
                </h3>
                <p className="text-foreground/70 text-sm">
                  From the US and other long-haul destinations, expect at least two flights and a total 
                  travel time of 14–20 hours or more, depending on your route. Most itineraries will go 
                  via major European or Middle Eastern hubs.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  Из США и других дальних направлений, скорее всего, потребуется минимум два перелёта, а общая 
                  дорога может занять 14–20 часов и более, в зависимости от маршрута. Чаще всего перелёты проходят 
                  через крупные европейские или ближневосточные хабы.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 space-y-3">
                <div>
                  <p className="text-foreground/70">
                    <strong>Transport to venue:</strong> Once you land in Almaty, you can use taxis, ride‑hailing 
                    apps, or pre‑arranged transfers to get to your accommodation. Closer to the wedding, we'll share 
                    more details about how to get from the city to Sulusai.
                  </p>
                  <p className="text-foreground/60 text-sm italic mt-2">
                    <strong>Трансфер к месту свадьбы:</strong> По прилёте в Алматы можно воспользоваться такси, 
                    приложениями для вызова машины или заранее заказанным трансфером до вашего жилья. Ближе к свадьбе 
                    мы поделимся подробной информацией о том, как удобнее добраться из города до Сулусая.
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
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-accent/20 rounded-lg border border-accent">
                  <div className="space-y-3">
                    <p className="text-foreground/80">
                      Kazakhstan has a relatively friendly visa policy for many countries, and a large number of guests 
                      will be able to enter visa‑free for short stays. However, rules can change before August 2026, 
                      so please always check official sources before you travel.
                    </p>
                    <p className="text-foreground/70 text-sm italic">
                      У Казахстана достаточно лояльный визовый режим для граждан многих стран, и большинство наших гостей 
                      смогут въехать без визы на короткий срок. Но правила могут измениться к августу 2026 года, поэтому, 
                      пожалуйста, обязательно проверяйте актуальную информацию на официальных сайтах перед поездкой.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/80">
                      At the moment, citizens of countries such as Singapore, Malaysia, Vietnam, Germany, Italy, Australia, 
                      the United States, the Philippines and many others can usually enter Kazakhstan visa‑free for a limited 
                      number of days, as part of Kazakhstan's expanded visa‑free regime. The exact conditions (how many days, 
                      single or multiple entry, etc.) depend on your passport.
                    </p>
                    <p className="text-foreground/70 text-sm italic mt-2">
                      На данный момент граждане таких стран, как Сингапур, Малайзия, Вьетнам, Германия, Италия, Австралия, США, 
                      Филиппины и ряда других государств, как правило, могут въезжать в Казахстан без визы на ограниченный срок 
                      в рамках расширенного безвизового режима. Точные условия (количество дней, однократный или многократный въезд 
                      и т.п.) зависят от вашего паспорта.
                    </p>
                  </div>

                  <div>
                    <p className="text-foreground/80">
                      Because visa rules and registration requirements can change, please use the links below or contact the 
                      nearest Kazakh embassy or consulate to confirm what applies to you.
                    </p>
                    <p className="text-foreground/70 text-sm italic mt-2">
                      Поскольку визовые правила и требования к регистрации могут меняться, пожалуйста, используйте ссылки ниже 
                      или свяжитесь с ближайшим посольством или консульством Казахстана, чтобы уточнить, какие правила действуют 
                      именно для вас.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Helpful Resources / Полезные ресурсы:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Official information on Kazakhstan's visa regime (Ministry of Foreign Affairs)
                      <br />
                      <span className="text-xs italic">Официальная информация о визовом режиме Казахстана (МИД)</span>
                    </li>
                    <li>
                      • Travel advice and entry information from your country's foreign affairs ministry (e.g., Singapore MFA, U.S. State Department, etc.)
                      <br />
                      <span className="text-xs italic">Рекомендации и требования к въезду от МИДа вашей страны (например, МИД Сингапура, Госдепартамент США и др.)</span>
                    </li>
                    <li>
                      • Online visa and entry requirements checkers provided by airlines or travel agencies
                      <br />
                      <span className="text-xs italic">Онлайн‑сервисы авиакомпаний и туристических сайтов для проверки визовых требований</span>
                    </li>
                  </ul>
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
            <div className="text-center space-y-3">
              <p className="text-lg text-foreground/80">
                There are many beautiful places to stay in and around Almaty, from cozy city apartments to mountain resorts.
              </p>
              <p className="text-base text-foreground/70 italic">
                В Алматы и вокруг города есть много красивых вариантов размещения — от уютных квартир в центре до горных курортов.
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div>
                  <p className="text-foreground/80">
                    We'll share specific recommendations for hotels and areas a bit closer to the date, once we have a better 
                    idea of where most guests prefer to stay.
                  </p>
                  <p className="text-foreground/70 text-sm italic mt-2">
                    Конкретные рекомендации по отелям и районам мы отправим ближе к дате свадьбы, когда поймём, какие варианты 
                    больше всего подходят нашим гостям.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Mountain className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-primary">
                      Oi Qaragai (Lesnaya Skazka)
                    </h3>
                    <div>
                      <p className="text-foreground/80">
                        If you like the idea of waking up in the mountains, you can also look at places like Oi Qaragai 
                        (Lesnaya Skazka) and similar mountain resorts near Almaty as inspiration for a short getaway 
                        before or after the wedding.
                      </p>
                      <p className="text-foreground/70 text-sm italic mt-2">
                        Если вам нравится идея просыпаться в горах, можно присмотреться к местам вроде «Ой‑Карагай» (Лесная сказка) 
                        и другим горным курортам недалеко от Алматы — это отличный вариант для мини‑отпуска до или после свадьбы.
                      </p>
                    </div>
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
            <div className="text-center space-y-3">
              <p className="text-lg text-foreground/80">
                Many guests will arrive on Thursday, get settled, celebrate with us on Saturday 8 August, and then stay 
                longer to explore. Below are some light ideas for 3, 5, and 7 days in and around Almaty, with a focus on 
                nature and a few city highlights.
              </p>
              <p className="text-base text-foreground/70 italic">
                Многие гости прилетят в четверг, спокойно устроятся, отметят с нами свадьбу в субботу 8 августа, а потом 
                останутся подольше, чтобы посмотреть окрестности. Ниже — лёгкие идеи на 3, 5 и 7 дней в Алматы и вокруг, 
                с упором на природу и парой городских впечатлений.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-center space-y-2">
              <p className="text-foreground/80">
                These are not fixed tours, just suggestions to help you imagine your trip. You can mix and match or join 
                small group tours with local guides.
              </p>
              <p className="text-foreground/70 text-sm italic">
                Это не готовые туры, а лишь идеи, которые помогут представить свою поездку. Можно комбинировать дни по‑своему 
                или присоединиться к небольшим групповым турам с местными гидами.
              </p>
            </div>

            {/* 5-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  5-Day Extended Trip / 5-дневная расширенная поездка
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-2">Day 1 – Thursday / День 1 – четверг</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Arrive in Almaty, check in, and take it easy. Go for a gentle walk in the city centre, grab coffee 
                      or dinner, and get used to the time difference and climate.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Прилет в Алматы, заселение и спокойный день. Можно прогуляться по центру, выпить кофе или поужинать 
                      в городе и привыкнуть к новому часовому поясу и климату.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 2 – Friday / День 2 – пятница</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Explore Almaty city and the foothills at a relaxed pace. You might ride the cable car up Kok Tobe hill, 
                      walk through parks and the Green Bazaar, or visit a viewpoint to see the city against the mountains.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Неспешно знакомимся с Алматы и предгорьями. Можно подняться на холм Кок‑Тобе по канатной дороге, 
                      погулять по паркам и Зелёному базару или выйти на смотровую площадку с видом на город и горы.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 3 – Saturday / День 3 – суббота</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Wedding day! Keep the day free for getting ready, transfers, and celebrating with us in Sulusai from day to night.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      День свадьбы! Оставьте его полностью свободным для сборов, дороги до площадки и праздника с нами в Сулусае 
                      с утра до позднего вечера.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 4 – Sunday / День 4 – воскресенье</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Take a day trip to one of the nearby lakes, such as Big Almaty Lake or Lake Issyk with Turgen Gorge. 
                      Expect stunning views, fresh air, and plenty of photo stops.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Съездите на однодневную экскурсию к одному из близлежащих озёр, например к Большому Алматинскому озеру 
                      или к озеру Иссык с Тургенским ущельем. Вас ждут захватывающие виды, свежий воздух и множество мест для фотографий.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 5 – Monday / День 5 – понедельник</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Use this as a flexible day in the city: brunch, museums, parks, last-minute shopping, and a relaxed dinner 
                      before your flight out or next adventure.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Гибкий день в городе: бранч, музеи, парки, покупки и неспешный ужин перед вылетом или продолжением путешествия.
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
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-2">Day 1 – Thursday / День 1 – четверг</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Arrival and soft landing in Almaty.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Прилёт и мягкое знакомство с городом.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 2 – Friday / День 2 – пятница</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      City + Kok Tobe, cafés, markets.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Город, Кок‑Тобе, кафе и рынки.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 3 – Saturday / День 3 – суббота</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Wedding day.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      День свадьбы.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Days 4–5 – Nature escape / Дни 4–5 – выезд на природу</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Use two days to join a small-group or private trip to Charyn Canyon and the mountain lakes (Kolsai, Kaindy) 
                      or another multi‑day nature tour. These areas are famous for dramatic canyons, forests, and turquoise lakes.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Выделите два дня на групповую или индивидуальную поездку в Чарынский каньон и к горным озёрам (Кольсай, Каинды) 
                      или на другой многодневный маршрут. Эти места известны своими впечатляющими каньонами, лесами и бирюзовыми озёрами.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 6 – Monday / День 6 – понедельник</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Come back to Almaty and have a slow city day: spa, coffee, parks, or a short walk in the foothills.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Возвращаемся в Алматы и устраиваем медленный городской день: спа, кофе, парки или короткая прогулка в предгорьях.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Day 7 – Tuesday / День 7 – вторник</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Keep your last day open for souvenir shopping, one last viewpoint, and your flight home.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Оставьте последний день для сувениров, ещё одного красивого вида на горы и вылета домой.
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

                <div className="space-y-6 mb-8">
                  <div className="text-center space-y-3">
                    <p className="text-lg text-foreground/80">
                      If you have received an invitation from us, we would be very happy if you could let us know whether you can join.
                    </p>
                    <p className="text-base text-foreground/70 italic">
                      Если вы получили от нас приглашение, нам будет очень приятно, если вы сообщите, сможете ли приехать.
                    </p>
                  </div>

                  <div className="p-6 bg-accent/30 rounded-lg border border-accent/50 space-y-4">
                    <p className="font-semibold text-center">Important / Важно:</p>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-foreground/80">
                          To help us plan the day and the seating carefully, please note:
                        </p>
                        <p className="text-foreground/70 italic">
                          Чтобы мы могли аккуратно спланировать день и рассадку, пожалуйста, обратите внимание:
                        </p>
                      </div>
                      <ul className="space-y-2 text-foreground/70">
                        <li>• Only invited guests should fill in the RSVP form.</li>
                        <li className="text-xs italic">Заполнять форму RSVP должны только гости, которые получили персональное приглашение.</li>
                        <li>• Please do not bring additional plus‑ones unless they are clearly included in your invitation.</li>
                        <li className="text-xs italic">Пожалуйста, не приводите дополнительных +1, если они явно не указаны в вашем приглашении.</li>
                        <li>• Please do not bring children unless they are specifically invited.</li>
                        <li className="text-xs italic">Пожалуйста, не приводите детей, если они отдельно не приглашены.</li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-foreground/70">
                          Thank you for understanding and helping us keep the celebration personal and comfortable for everyone.
                        </p>
                        <p className="text-foreground/60 text-xs italic">
                          Спасибо за понимание и за то, что помогаете нам сделать праздник личным и комфортным для всех гостей.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 gap-2"
                    onClick={() => window.open('https://notion.so/your-rsvp-form', '_blank')}
                  >
                    <Mail className="w-5 h-5" />
                    <span>
                      <span className="block">RSVP now</span>
                      <span className="block text-xs opacity-90">Заполнить RSVP</span>
                    </span>
                  </Button>
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
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  Frequently Asked Questions / Часто задаваемые вопросы
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">What will the weather be like? / Какая погода будет?</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Early August in Almaty is usually warm in the city and cooler in the mountains, especially in the evenings. 
                      We recommend checking the forecast closer to the date and bringing a light layer for nights outdoors.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      В начале августа в городе обычно тепло, а в горах заметно прохладнее, особенно вечером. Рекомендуем проверить 
                      прогноз ближе к дате и взять с собой лёгкую тёплую одежду для вечерних прогулок.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Can I arrive earlier or stay longer? / Могу ли я приехать раньше или остаться дольше?</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Yes, of course! Many guests plan to arrive on Thursday or Friday and stay a few extra days to explore. 
                      Our suggested itineraries above can give you ideas, and you can also book additional tours with local operators.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Да, конечно! Многие гости планируют прилететь в четверг или пятницу и остаться ещё на несколько дней. 
                      Идеи в разделе с маршрутами могут помочь спланировать поездку, а при желании можно присоединиться к дополнительным 
                      турам у местных организаторов.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What about food and dietary restrictions? / Что насчет еды и диетических ограничений?</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Kazakh cuisine includes a lot of meat, but there will also be options for guests who prefer lighter meals. 
                      Please let us know about any dietary restrictions in your RSVP form so we can do our best to accommodate them.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      В казахской кухне много мясных блюд, но на празднике будут и более лёгкие варианты. Пожалуйста, укажите все 
                      пищевые ограничения в форме RSVP, чтобы мы могли постараться учесть ваши пожелания.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">How will we get to the wedding venue? / Как мы доберёмся до места свадьбы?</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Closer to the date, we'll share details about transport options between Almaty city and Sulusai, 
                      including any arranged transfers or recommended routes by taxi.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Ближе к дате свадьбы мы поделимся подробной информацией о вариантах поездки из Алматы до Сулусая, 
                      включая возможные организованные трансферы и рекомендованные маршруты на такси.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  Get in Touch / Связаться с нами
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    If you have any questions about travel, visas, or plans, please feel free to reach out to us.
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    Если у вас есть вопросы о поездке, визе или планах, пожалуйста, не стесняйтесь написать нам.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email us: [your email here]</p>
                      <p className="text-xs text-muted-foreground italic">Написать нам: [ваш email]</p>
                    </div>
                  </div>
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
