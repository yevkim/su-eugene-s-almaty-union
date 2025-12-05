import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Mountain } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-mountain-venue.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import almatyMountains from "@/assets/almaty-mountains.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Language Switcher Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end">
        <LanguageSwitcher />
      </header>

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
            {t("Su June & Eugene", "Су Джун и Евгений")}
          </h1>
          <div className="space-y-2 text-lg md:text-xl mb-8 animate-in fade-in duration-1000 delay-200">
            <p>{t(
              "08.08.2026 · Sulusai, near Almaty, Kazakhstan",
              "08.08.2026 · Сулуса́й, недалеко от Алматы, Казахстан"
            )}</p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-8 animate-in fade-in duration-1000 delay-300">
            <p className="text-lg md:text-xl font-light">
              {t(
                "We're getting married in the mountains of Kazakhstan and would love for you to celebrate with us.",
                "Мы женимся в горах Казахстана и очень хотим отпраздновать этот день вместе с вами."
              )}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 animate-in fade-in duration-1000 delay-400">
            <p className="text-sm md:text-base opacity-80">
              {t(
                "This page has everything you need to plan your trip, from how to get to Almaty to ideas for exploring after the wedding.",
                "Здесь вы найдёте всю нужную информацию: как добраться до Алматы и чем заняться до и после свадьбы."
              )}
            </p>
          </div>

          <div className="flex justify-center animate-in fade-in duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rsvp-highlight hover:bg-rsvp-highlight/90 text-primary-foreground font-semibold gap-2"
            >
              <Mail className="w-5 h-5" />
              {t("RSVP (invited guests only)", "RSVP (только для приглашённых гостей)")}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Our Story", "Наша История")}
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-foreground/80">
              {t(
                "A Kazakh–German–Russian boy from Almaty and a Chinese Hakka girl from Malaysia somehow ended up in the same tiny dot on the map: Singapore. One coffee chat led to many more, and suddenly the idea of 'home' started to mean each other.",
                "Казахско‑немецко‑русский парень из Алматы и китайская хака‑девушка из Малайзии каким‑то образом оказались в одном и том же маленьком месте на карте — в Сингапуре. Одна случайная встреча за кофе плавно превратилась в много тёплых разговоров, и понятие «дом» очень быстро стало означать друг друга."
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Milestone 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={couplePortrait} 
                  alt={t("PHOTO PLACEHOLDER – Proposal day", "ФОТО – День предложения")}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {t("PHOTO PLACEHOLDER – Proposal day", "ФОТО – День предложения")}
                </p>
              </div>
              <div className="order-1 md:order-2 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  {t("We crossed paths in Singapore", "Мы встретились в Сингапуре")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "We met in Singapore, both far away from where we grew up, and immediately bonded over food, stories about our families, and life between cultures.",
                    "Мы познакомились в Сингапуре, далеко от мест, где выросли, и сразу нашли общий язык: через еду, рассказы о семьях и жизнь между разными культурами."
                  )}
                </p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  {t("Many flights, one team", "Множество перелётов, одна команда")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "Between work trips, family visits, and holidays, we collected a lot of boarding passes and even more inside jokes. Somewhere between airports, we quietly became a team.",
                    "Рабочие командировки, поездки к родным и совместные отпуска подарили нам целую коллекцию посадочных талонов и ещё больше внутренних шуток. Где‑то между аэропортами мы очень незаметно стали настоящей командой."
                  )}
                </p>
              </div>
              <div>
                <img 
                  src={almatyMountains} 
                  alt={t("PHOTO PLACEHOLDER – Couple travel photo", "ФОТО – Путешествие вдвоём")}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {t("PHOTO PLACEHOLDER – Couple travel photo", "ФОТО – Путешествие вдвоём")}
                </p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {t("The proposal", "Предложение")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Surrounded by beautiful views and way too many photos, Eugene asked, Su June said yes, and both of us cried more than expected.",
                  "В окружении красивых видов и бесконечного количества фотографий Евгений сделал предложение, Су Джун сказала «да», и оба вдруг расплакались куда сильнее, чем планировали."
                )}
              </p>
              <div className="mt-6 bg-muted/30 rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  {t("PHOTO PLACEHOLDER – Just us being silly", "ФОТО – Просто мы дурачимся")}
                </p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {t("Now it's wedding time", "Теперь время свадьбы")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Next stop: the mountains near Almaty, to bring together our families and friends from all over the world and start the next chapter.",
                  "Следующая остановка — горы под Алматы, где мы соберём родных и друзей со всего мира и начнём новую главу нашей истории."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="wedding-day" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Wedding Day", "День Свадьбы")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-2xl font-serif text-primary">
                    {t("8 August 2026", "8 августа 2026")}
                  </p>
                  <p className="text-xl">
                    Sulusai (Sulu Sai) Resort & SPA
                    <br />
                    <span className="text-base text-muted-foreground">
                      {t("Near Almaty, Kazakhstan", "Недалеко от Алматы, Казахстан")}
                    </span>
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/80">
                    {t(
                      "On 8 August 2026, we'll be celebrating our wedding at Sulusai, a cozy mountain resort just outside Almaty. Think fresh air, pine trees, big skies, and a lot of happy tears.",
                      "8 августа 2026 года мы будем праздновать нашу свадьбу в Сулусае — уютном горном курорте недалеко от Алматы. Представьте свежий воздух, сосны, огромное небо и много‑много счастливых слёз."
                    )}
                  </p>
                  
                  <p className="text-foreground/80">
                    {t(
                      "Sulusai is a peaceful spot in the foothills with beautiful views, wooden details, and nature all around. It's the kind of place where time slows down a little, and evenings feel extra magical.",
                      "Сулусай — это тихое место в предгорьях с прекрасными видами, деревянными деталями и природой вокруг. Здесь время будто идёт медленнее, а вечера кажутся особенно волшебными."
                    )}
                  </p>

                  <p className="text-foreground/70">
                    {t(
                      "Exact timing and program for the day will be shared closer to the date, but you can already plan to spend the whole day and evening with us.",
                      "Точное время и программа дня будут опубликованы ближе к дате, но уже сейчас можно смело планировать провести с нами весь день и вечер."
                    )}
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('https://maps.google.com/?q=Sulusai+Resort+Almaty', '_blank')}
                  >
                    <MapPin className="w-4 h-4" />
                    {t("View venue on map", "Посмотреть место на карте")}
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
            {t("Travel to Almaty", "Как добраться до Алматы")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg text-foreground/80">
                {t(
                  "Almaty is the largest city in Kazakhstan, set right next to the mountains. It's easy to reach with a combination of regional and international flights.",
                  "Алматы — крупнейший город Казахстана, который буквально упирается в горы. Добраться сюда можно с помощью удобных стыковочных и прямых рейсов."
                )}
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  {t("Airport & Getting Around", "Аэропорт и трансфер")}
                </h3>
                <p className="text-foreground/70">
                  {t(
                    "You'll be flying into Almaty International Airport (ALA). From the airport, it's about 25–40 minutes by car to the city centre, depending on traffic, and longer to reach the mountain area where Sulusai is located.",
                    "Вы прилетите в Международный аэропорт Алматы (ALA). От аэропорта до центра города примерно 25–40 минут на машине в зависимости от пробок, а до горного района, где находится Сулусай, дорога займёт больше времени."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {t("From Singapore & Southeast Asia", "Из Сингапура и Юго-Восточной Азии")}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {t(
                    "From Singapore and nearby cities, the most convenient way is to fly with one or two connections via regional hubs. Depending on the route, the total travel time is usually around 10–13 hours, including transit. Airlines like AirAsia X and other regional carriers often appear among the options, but routes and schedules change over time.",
                    "Из Сингапура и городов Юго‑Восточной Азии чаще всего удобно лететь с одной‑двумя стыковками через региональные хабы. В зависимости от маршрута дорога обычно занимает около 10–13 часов вместе с пересадками. Варианты перелётов часто включают авиакомпании вроде AirAsia X и другие региональные перевозчики, но расписание и маршруты со временем меняются."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {t("From Europe", "Из Европы")}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {t(
                    "From major European cities, many guests will likely fly via hubs such as Istanbul, Dubai, Abu Dhabi, or Frankfurt. Typical total travel times are around 7–10 hours, depending on where you start and your connections.",
                    "Из крупных городов Европы удобнее всего лететь через крупные хабы, например Стамбул, Дубай, Абу‑Даби или Франкфурт. Весь путь обычно занимает около 7–10 часов в зависимости от города вылета и выбранных стыковок."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {t("From the US & Other Long-Haul Destinations", "Из США и других дальних направлений")}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {t(
                    "From the US and other long-haul destinations, expect at least two flights and a total travel time of 14–20 hours or more, depending on your route. Most itineraries will go via major European or Middle Eastern hubs.",
                    "Из США и других дальних направлений, скорее всего, потребуется минимум два перелёта, а общая дорога может занять 14–20 часов и более, в зависимости от маршрута. Чаще всего перелёты проходят через крупные европейские или ближневосточные хабы."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <p className="text-foreground/70">
                  <strong>{t("Transport to venue:", "Трансфер к месту свадьбы:")}</strong> {t(
                    "Once you land in Almaty, you can use taxis, ride‑hailing apps, or pre‑arranged transfers to get to your accommodation. Closer to the wedding, we'll share more details about how to get from the city to Sulusai.",
                    "По прилёте в Алматы можно воспользоваться такси, приложениями для вызова машины или заранее заказанным трансфером до вашего жилья. Ближе к свадьбе мы поделимся подробной информацией о том, как удобнее добраться из города до Сулусая."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visa & Entry Section */}
      <section id="visa" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Visa & Entry Basics", "Визы и въезд")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-accent/20 rounded-lg border border-accent">
                  <p className="text-foreground/80">
                    {t(
                      "Kazakhstan has a relatively friendly visa policy for many countries, and a large number of guests will be able to enter visa‑free for short stays. However, rules can change before August 2026, so please always check official sources before you travel.",
                      "У Казахстана достаточно лояльный визовый режим для граждан многих стран, и большинство наших гостей смогут въехать без визы на короткий срок. Но правила могут измениться к августу 2026 года, поэтому, пожалуйста, обязательно проверяйте актуальную информацию на официальных сайтах перед поездкой."
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/80">
                    {t(
                      "At the moment, citizens of countries such as Singapore, Malaysia, Vietnam, Germany, Italy, Australia, the United States, the Philippines and many others can usually enter Kazakhstan visa‑free for a limited number of days, as part of Kazakhstan's expanded visa‑free regime. The exact conditions (how many days, single or multiple entry, etc.) depend on your passport.",
                      "На данный момент граждане таких стран, как Сингапур, Малайзия, Вьетнам, Германия, Италия, Австралия, США, Филиппины и ряда других государств, как правило, могут въезжать в Казахстан без визы на ограниченный срок в рамках расширенного безвизового режима. Точные условия (количество дней, однократный или многократный въезд и т.п.) зависят от вашего паспорта."
                    )}
                  </p>

                  <p className="text-foreground/80">
                    {t(
                      "Because visa rules and registration requirements can change, please use the links below or contact the nearest Kazakh embassy or consulate to confirm what applies to you.",
                      "Поскольку визовые правила и требования к регистрации могут меняться, пожалуйста, используйте ссылки ниже или свяжитесь с ближайшим посольством или консульством Казахстана, чтобы уточнить, какие правила действуют именно для вас."
                    )}
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3">{t("Helpful Resources:", "Полезные ресурсы:")}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t(
                      "Official information on Kazakhstan's visa regime (Ministry of Foreign Affairs)",
                      "Официальная информация о визовом режиме Казахстана (МИД)"
                    )}</li>
                    <li>• {t(
                      "Travel advice and entry information from your country's foreign affairs ministry (e.g., Singapore MFA, U.S. State Department, etc.)",
                      "Рекомендации и требования к въезду от МИДа вашей страны (например, МИД Сингапура, Госдепартамент США и др.)"
                    )}</li>
                    <li>• {t(
                      "Online visa and entry requirements checkers provided by airlines or travel agencies",
                      "Онлайн‑сервисы авиакомпаний и туристических сайтов для проверки визовых требований"
                    )}</li>
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
            {t("Where to Stay", "Где остановиться")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg text-foreground/80">
                {t(
                  "There are many beautiful places to stay in and around Almaty, from cozy city apartments to mountain resorts.",
                  "В Алматы и вокруг города есть много красивых вариантов размещения — от уютных квартир в центре до горных курортов."
                )}
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <p className="text-foreground/80">
                  {t(
                    "We'll share specific recommendations for hotels and areas a bit closer to the date, once we have a better idea of where most guests prefer to stay.",
                    "Конкретные рекомендации по отелям и районам мы отправим ближе к дате свадьбы, когда поймём, какие варианты больше всего подходят нашим гостям."
                  )}
                </p>
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
                    <p className="text-foreground/80">
                      {t(
                        "If you like the idea of waking up in the mountains, you can also look at places like Oi Qaragai (Lesnaya Skazka) and similar mountain resorts near Almaty as inspiration for a short getaway before or after the wedding.",
                        "Если вам нравится идея просыпаться в горах, можно присмотреться к местам вроде «Ой‑Карагай» (Лесная сказка) и другим горным курортам недалеко от Алматы — это отличный вариант для мини‑отпуска до или после свадьбы."
                      )}
                    </p>
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
            {t("Suggested Itineraries", "Предлагаемые маршруты")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg text-foreground/80">
                {t(
                  "Many guests will arrive on Thursday, get settled, celebrate with us on Saturday 8 August, and then stay longer to explore. Below are some light ideas for 3, 5, and 7 days in and around Almaty, with a focus on nature and a few city highlights.",
                  "Многие гости прилетят в четверг, спокойно устроятся, отметят с нами свадьбу в субботу 8 августа, а потом останутся подольше, чтобы посмотреть окрестности. Ниже — лёгкие идеи на 3, 5 и 7 дней в Алматы и вокруг, с упором на природу и парой городских впечатлений."
                )}
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <p className="text-foreground/80">
                {t(
                  "These are not fixed tours, just suggestions to help you imagine your trip. You can mix and match or join small group tours with local guides.",
                  "Это не готовые туры, а лишь идеи, которые помогут представить свою поездку. Можно комбинировать дни по‑своему или присоединиться к небольшим групповым турам с местными гидами."
                )}
              </p>
            </div>

            {/* 5-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("5-Day Extended Trip", "5-дневная расширенная поездка")}
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 1 – Thursday", "День 1 – четверг")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Arrive in Almaty, check in, and take it easy. Go for a gentle walk in the city centre, grab coffee or dinner, and get used to the time difference and climate.",
                        "Прилет в Алматы, заселение и спокойный день. Можно прогуляться по центру, выпить кофе или поужинать в городе и привыкнуть к новому часовому поясу и климату."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 2 – Friday", "День 2 – пятница")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Explore Almaty city and the foothills at a relaxed pace. You might ride the cable car up Kok Tobe hill, walk through parks and the Green Bazaar, or visit a viewpoint to see the city against the mountains.",
                        "Неспешно знакомимся с Алматы и предгорьями. Можно подняться на холм Кок‑Тобе по канатной дороге, погулять по паркам и Зелёному базару или выйти на смотровую площадку с видом на город и горы."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 3 – Saturday", "День 3 – суббота")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Wedding day! Keep the day free for getting ready, transfers, and celebrating with us in Sulusai from day to night.",
                        "День свадьбы! Оставьте его полностью свободным для сборов, дороги до площадки и праздника с нами в Сулусае с утра до позднего вечера."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 4 – Sunday", "День 4 – воскресенье")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Take a day trip to one of the nearby lakes, such as Big Almaty Lake or Lake Issyk with Turgen Gorge. Expect stunning views, fresh air, and plenty of photo stops.",
                        "Съездите на однодневную экскурсию к одному из близлежащих озёр, например к Большому Алматинскому озеру или к озеру Иссык с Тургенским ущельем. Вас ждут захватывающие виды, свежий воздух и множество мест для фотографий."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 5 – Monday", "День 5 – понедельник")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Use this as a flexible day in the city: brunch, museums, parks, last-minute shopping, and a relaxed dinner before your flight out or next adventure.",
                        "Гибкий день в городе: бранч, музеи, парки, покупки и неспешный ужин перед вылетом или продолжением путешествия."
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7-Day Itinerary */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("7-Day Full Experience", "7-дневный полный опыт")}
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 1 – Thursday", "День 1 – четверг")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("Arrival and soft landing in Almaty.", "Прилёт и мягкое знакомство с городом.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 2 – Friday", "День 2 – пятница")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("City + Kok Tobe, cafés, markets.", "Город, Кок‑Тобе, кафе и рынки.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 3 – Saturday", "День 3 – суббота")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("Wedding day.", "День свадьбы.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Days 4–5 – Nature escape", "Дни 4–5 – выезд на природу")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Use two days to join a small-group or private trip to Charyn Canyon and the mountain lakes (Kolsai, Kaindy) or another multi‑day nature tour. These areas are famous for dramatic canyons, forests, and turquoise lakes.",
                        "Выделите два дня на групповую или индивидуальную поездку в Чарынский каньон и к горным озёрам (Кольсай, Каинды) или на другой многодневный маршрут. Эти места известны своими впечатляющими каньонами, лесами и бирюзовыми озёрами."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 6 – Monday", "День 6 – понедельник")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Come back to Almaty and have a slow city day: spa, coffee, parks, or a short walk in the foothills.",
                        "Возвращаемся в Алматы и устраиваем медленный городской день: спа, кофе, парки или короткая прогулка в предгорьях."
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("Day 7 – Tuesday", "День 7 – вторник")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Keep your last day open for souvenir shopping, one last viewpoint, and your flight home.",
                        "Оставьте последний день для сувениров, ещё одного красивого вида на горы и вылета домой."
                      )}
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
                  <div className="text-center">
                    <p className="text-lg text-foreground/80">
                      {t(
                        "If you have received an invitation from us, we would be very happy if you could let us know whether you can join.",
                        "Если вы получили от нас приглашение, нам будет очень приятно, если вы сообщите, сможете ли приехать."
                      )}
                    </p>
                  </div>

                  <div className="p-6 bg-accent/30 rounded-lg border border-accent/50 space-y-4">
                    <p className="font-semibold text-center">{t("Important:", "Важно:")}</p>
                    <div className="space-y-3 text-sm">
                      <p className="text-foreground/80">
                        {t(
                          "To help us plan the day and the seating carefully, please note:",
                          "Чтобы мы могли аккуратно спланировать день и рассадку, пожалуйста, обратите внимание:"
                        )}
                      </p>
                      <ul className="space-y-2 text-foreground/70">
                        <li>• {t(
                          "Only invited guests should fill in the RSVP form.",
                          "Заполнять форму RSVP должны только гости, которые получили персональное приглашение."
                        )}</li>
                        <li>• {t(
                          "Please do not bring additional plus‑ones unless they are clearly included in your invitation.",
                          "Пожалуйста, не приводите дополнительных +1, если они явно не указаны в вашем приглашении."
                        )}</li>
                        <li>• {t(
                          "Please do not bring children unless they are specifically invited.",
                          "Пожалуйста, не приводите детей, если они отдельно не приглашены."
                        )}</li>
                      </ul>
                      <p className="text-foreground/70 pt-2">
                        {t(
                          "Thank you for understanding and helping us keep the celebration personal and comfortable for everyone.",
                          "Спасибо за понимание и за то, что помогаете нам сделать праздник личным и комфортным для всех гостей."
                        )}
                      </p>
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
                    {t("RSVP now", "Заполнить RSVP")}
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
            {t("FAQs & Contact", "Вопросы и контакты")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("Frequently Asked Questions", "Часто задаваемые вопросы")}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t("What will the weather be like?", "Какая погода будет?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Early August in Almaty is usually warm in the city and cooler in the mountains, especially in the evenings. We recommend checking the forecast closer to the date and bringing a light layer for nights outdoors.",
                        "В начале августа в городе обычно тепло, а в горах заметно прохладнее, особенно вечером. Рекомендуем проверить прогноз ближе к дате и взять с собой лёгкую тёплую одежду для вечерних прогулок."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("Can I arrive earlier or stay longer?", "Могу ли я приехать раньше или остаться дольше?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Yes, of course! Many guests plan to arrive on Thursday or Friday and stay a few extra days to explore. Our suggested itineraries above can give you ideas, and you can also book additional tours with local operators.",
                        "Да, конечно! Многие гости планируют прилететь в четверг или пятницу и остаться ещё на несколько дней. Идеи в разделе с маршрутами могут помочь спланировать поездку, а при желании можно присоединиться к дополнительным турам у местных организаторов."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("What about food and dietary restrictions?", "Что насчет еды и диетических ограничений?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Kazakh cuisine includes a lot of meat, but there will also be options for guests who prefer lighter meals. Please let us know about any dietary restrictions in your RSVP form so we can do our best to accommodate them.",
                        "В казахской кухне много мясных блюд, но на празднике будут и более лёгкие варианты. Пожалуйста, укажите все пищевые ограничения в форме RSVP, чтобы мы могли постараться учесть ваши пожелания."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("How will we get to the wedding venue?", "Как мы доберёмся до места свадьбы?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Closer to the date, we'll share details about transport options between Almaty city and Sulusai, including any arranged transfers or recommended routes by taxi.",
                        "Ближе к дате свадьбы мы поделимся подробной информацией о вариантах поездки из Алматы до Сулусая, включая возможные организованные трансферы и рекомендованные маршруты на такси."
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("Get in Touch", "Связаться с нами")}
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    {t(
                      "If you have any questions about travel, visas, or plans, please feel free to reach out to us.",
                      "Если у вас есть вопросы о поездке, визе или планах, пожалуйста, не стесняйтесь написать нам."
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {t("Email us: [your email here]", "Написать нам: [ваш email]")}
                    </p>
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
          <p className="font-serif text-2xl mb-2">{t("Su June & Eugene", "Су Джун и Евгений")}</p>
          <p className="text-sm opacity-80">{t("8 August 2026 · Almaty, Kazakhstan", "8 августа 2026 · Алматы, Казахстан")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
