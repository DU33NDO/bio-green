"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18nInstance = i18next.createInstance();

i18nInstance.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        nav: {
          home: "Главная страница",
          about: "О нас",
          services: "Наши услуги",
          request: "Оставить заявку",
        },
        home: {
          slogan: "Мы за чистый город!",
          under_slogan: "Вывоз строительных и твердых бытовых отходов",
          request: "Оставить заявку",
          description:
            "Компания BIO GREEN с 2020 года заняла прочные позиции среди лидеров рынка вывоза строительных отходов. Мы зарекомендовали себя как надежный и динамично развивающийся партнер, предлагающий качественный сервис и индивидуальный подход к каждому клиенту.",
          principles: "Наши основные принципы",
          first_title: "Экологическая безопасность",
          first_body:
            "Экологическая безопасность окружающей среды и бережное отношение к экосистеме",
          second_title: "Соблюдение законодательства",
          second_body: "Соблюдение законодательства Республики Казахстан",
          third_title: "Ориентированность на клиента",
          third_body:
            "Качественная клиентоориентированность, гибкая система скидок, заключение договоров",
          fourth_title: "Унификация",
          fourth_body:
            "Унификация автопарка в целом, повышение его мобильности и функциональности",
          fifth_title: "Современные технологии",
          fifth_body:
            "Использование современных передовых технологии - система 'мультилифт'",
        },
        contact: {
          call: "Позвонить нам",
          whatsapp: "Написать в WhatsApp",
        },
        about: {
          title: "О нас",
          mission: {
            title: "Наша миссия",
            description:
              "Компания Bio Green стремится предлагать экологически безопасные решения по утилизации отходов. Наша миссия - внести свой вклад в создание более чистого города, предлагая эффективные услуги по вывозу строительного мусора при соблюдении самых высоких экологических стандартов.",
          },
          contact: {
            title: "Контактная информация",
            phone: "Телефон",
            email: "Email",
            address: {
              title: "Адрес",
              value:
                'Экспо-бульвар 5, пр. Кабанбай батыра, 58 "Б" корпус 6, офис 1, г. Астана',
            },
          },
          clients: {
            title: "Наши клиенты",
            description:
              "Мы гордимся сотрудничеством с ведущими компаниями Казахстана, которые доверяют нам вывоз и утилизацию строительных отходов.",
          },
        },
        service: {
          title: "Вывоз строительного мусора",
          subtitle:
            "Мы предлагаем экологически безопасные решения для вывоза строительного мусора объемом от 15 кубических метров",
          features: {
            title: "Наши контейнеры для вывоза мусора",
            eco: {
              title: "Экологически безопасны",
              description:
                "Наши контейнеры разработаны с учетом экологических стандартов и не наносят вред окружающей среде",
            },
            stability: {
              title: "Высокая устойчивость",
              description:
                "Прочная конструкция обеспечивает стабильность и безопасность при транспортировке и хранении отходов",
            },
            transport: {
              title: "Удобны для транспортировки",
              description:
                "Специальная конструкция позволяет легко загружать, транспортировать и разгружать контейнеры",
            },
          },
          attention: {
            title: "ВНИМАНИЕ!!!",
            illegal:
              "Вывоз бытовых и строительных отходов за пределы города либо на несанкционированные свалки запрещается и строго караются законом РК.",
            legislation:
              "В соответствии с законодательством РК Все отходы подлежат вывозу на специализированные городские полигоны где производится их надлежащая утилизация.",
            monitoring:
              "Нарушения фиксируются с помощью видеонаблюдения («Сергек»), GPS и рейдов с участием экологической полиции",
            penalties: "За нарушение предусмотрены штрафы:",
            individuals: "Физические лица — до 100 МРП (393 200 тенге)",
            entities: "Юридические лица — до 1000 МРП (3 932 000 тенге)",
            repeat:
              "Повторное нарушение — удвоенный штраф и возможная конфискация техники",
            responsibility:
              "Соблюдение правил — это не только вопрос закона, но и экологии города.",
            licensed: "У нас — лицензия, транспорт и опыт",
            authorized: "Вывозим строго на специализированные полигоны",
            documentation: "Предоставляем все закрывающие документы",
            view_certificate: "Посмотреть нашу лицензию",
            contact:
              "Обратитесь к нам — и избавьтесь от отходов легально и без рисков!",
            regulatory: "Нормативные документы:",
            ecoCode: "Экологический кодекс РК",
            adminCode:
              "Кодекс РК об административных правонарушениях (ст. 344, 505)",
            city: "Правила благоустройства г. Астаны",
          },
          cta: {
            title: "Закажите вывоз строительного мусора сегодня",
            description:
              "Мы обеспечиваем быструю доставку контейнеров и своевременный вывоз мусора, чтобы ваш проект продвигался без задержек",
            button: "Оставить заявку",
          },
          process: {
            title: "Наш процесс вывоза отходов",
            step1: "Оставьте заявку - свяжитесь с нами удобным способом",
            step2:
              "Доставка контейнера - мы привезем его на ваш объект после оформления всех формальностей",
            step3:
              "Заполните контейнер - как только он наполнится, подайте заявку на замену",
            step4:
              "Замена и вывоз - мы оперативно заменим контейнер и вывезем строительные отходы на утилизацию",
          },
          benefits: {
            title: "Преимущества наших услуг",
            eco: "Экологичная утилизация – строгое соблюдение экологических норм и стандартов",
            qualified:
              "Квалифицированный персонал – оперативная и профессиональная работа",
            modern:
              "Современная техника – автопарк с системой «мультилифт» для удобной смены контейнеров",
            capacity:
              "Бункеры 15 м³ – вместительные и удобные для любых объемов мусора",
            gps: "GPS-мониторинг – полный контроль передвижения транспорта в реальном времени",
            flexible:
              "Гибкие условия – конкурентные цены и индивидуальный подход к каждому клиенту",
          },
          equipment: {
            title: "Наша техника",
            description:
              "Мы используем современную технику для вывоза строительного мусора, обеспечивая быструю и эффективную работу.",
          },
        },
        request: {
          title: "Оставить заявку",
          form: {
            name: {
              label: "Полное имя",
              placeholder: "Введите свое полное имя",
            },
            phone: {
              label: "Номер телефона",
              placeholder: "+7 (XXX) XXX-XXXX",
            },
            email: {
              label: "Адрес электронной почты",
              placeholder: "your@email.com",
            },
            address: {
              label: "Адрес для вывоза отходов",
              placeholder: "Введите адрес",
            },
            service: {
              label: "Тип услуги",
              placeholder: "Выберите тип услуги",
              options: {
                construction: "Вывоз строительного мусора",
                demolition: "Вывоз отходов сноса",
                renovation: "Вывоз мусора при ремонте",
                other: "Другое",
              },
            },
            message: {
              label: "Дополнительная информация",
              placeholder:
                "Пожалуйста, предоставьте любую дополнительную информацию о ваших потребностях в вывозе мусора",
            },
            submit: "Отправить запрос",
          },
          success: {
            title: "Заявка подана!",
            message:
              "Спасибо за ваш запрос. Наши сотрудники свяжутся с вами в ближайшее время, чтобы обсудить ваши потребности в вывозе отходов.",
            button: "Отправить другой запрос",
          },
        },
        footer: {
          slogan: "Мы за чистый город!",
          services: "Услуги по вывозу строительных отходов",
          quickLinks: "Быстрые ссылки",
          contactUs: "Свяжитесь с нами",
          rights: "Все права защищены.",
          address: "Астана, Казахстан",
        },
        trucks: {
          items: [
            {
              title: "КАМАЗ",
              description:
                "Специализированный автомобиль для перевозки контейнеров",
              alt: "КАМАЗ Мультилифт без контейнера",
            },
            {
              title: "Погрузка контейнера",
              description: "Процесс погрузки контейнера на мультилифт",
              alt: "КАМАЗ с погрузкой синего контейнера",
            },
            {
              title: "Автопарк Bio Green",
              description:
                "Наш современный автопарк для вывоза строительного мусора",
              alt: "Три грузовика КАМАЗ и Scania",
            },
            {
              title: "Производство контейнеров",
              description:
                "Мы производим собственные контейнеры для строительного мусора",
              alt: "Производство контейнера в цеху",
            },
            {
              title: "Техника Bio Green",
              description: "Наша техника оснащена современным оборудованием",
              alt: "КАМАЗ с логотипом Bio Green",
            },
          ],
          slideLabel: "Перейти к слайду",
        },
      },
    },
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About Us",
          services: "Our Services",
          request: "Submit Request",
        },
        home: {
          slogan: "We stand for a clean city!",
          under_slogan: "Removal of construction and solid household waste",
          request: "Submit Request",
          description:
            "Since 2020, BIO GREEN has established strong positions among the leaders in the construction waste removal market. We have proven ourselves as a reliable and dynamically developing partner, offering quality service and an individual approach to each client.",
          principles: "Our Core Principles",
          first_title: "Environmental Safety",
          first_body:
            "Environmental safety and careful attention to the ecosystem",
          second_title: "Legal Compliance",
          second_body:
            "Compliance with the legislation of the Republic of Kazakhstan",
          third_title: "Customer-Oriented",
          third_body:
            "High-quality customer orientation, flexible discount system, contract execution",
          fourth_title: "Unification",
          fourth_body:
            "Fleet unification as a whole, increasing its mobility and functionality",
          fifth_title: "Modern Technologies",
          fifth_body:
            "Use of modern advanced technologies - 'multilift' system",
        },
        contact: {
          call: "Call Us",
          whatsapp: "Message on WhatsApp",
        },
        about: {
          title: "About Us",
          mission: {
            title: "Our Mission",
            description:
              "Bio Green strives to offer environmentally safe waste disposal solutions. Our mission is to contribute to creating a cleaner city by providing efficient construction waste removal services while maintaining the highest environmental standards.",
          },
          contact: {
            title: "Contact Information",
            phone: "Phone",
            email: "Email",
            address: {
              title: "Address",
              value:
                'Expo Boulevard 5, Kabanbay Batyr Ave., 58 "B" building 6, office 1, Astana',
            },
          },
          clients: {
            title: "Our Clients",
            description:
              "We are proud to collaborate with leading companies in Kazakhstan who trust us with their construction waste removal and disposal.",
          },
        },
        service: {
          title: "Construction Waste Removal",
          subtitle:
            "We offer environmentally safe solutions for construction waste removal with a volume of 15 cubic meters or more",
          features: {
            title: "Our Waste Removal Containers",
            eco: {
              title: "Environmentally Safe",
              description:
                "Our containers are designed with environmental standards in mind and do not harm the environment",
            },
            stability: {
              title: "High Stability",
              description:
                "Robust construction ensures stability and safety during transportation and storage of waste",
            },
            transport: {
              title: "Easy to Transport",
              description:
                "Special design allows for easy loading, transportation, and unloading of containers",
            },
          },
          attention: {
            title: "ATTENTION!!!",
            illegal:
              "The removal of household and construction waste outside the city or to unauthorized dumps is prohibited and strictly punishable under the laws of the Republic of Kazakhstan.",
            legislation:
              "According to Kazakhstani legislation, all waste must be transported to specialized city landfills where proper disposal is carried out.",
            monitoring:
              "Violations are monitored using video surveillance ('Sergek'), GPS tracking, and raids involving the environmental police.",
            penalties: "Penalties for violations include:",
            individuals: "Individuals — up to 100 MCI (393,200 KZT)",
            entities: "Legal entities — up to 1,000 MCI (3,932,000 KZT)",
            repeat:
              "Repeat offenses — double the fine and possible confiscation of equipment",
            responsibility:
              "Following the rules is not only a legal obligation but also a matter of environmental responsibility.",
            licensed: "We are licensed, equipped, and experienced",
            authorized: "We transport strictly to authorized landfills",
            documentation: "We provide all required documentation",
            view_certificate: "View our license",
            contact: "Contact us — dispose of waste legally and risk-free!",
            regulatory: "Regulatory Documents:",
            ecoCode: "Ecological Code of the Republic of Kazakhstan",
            adminCode:
              "Code of Administrative Offenses of the Republic of Kazakhstan (Articles 344, 505)",
            city: "Rules for the Improvement of the City of Astana",
          },
          cta: {
            title: "Order Construction Waste Removal Today",
            description:
              "We ensure quick container delivery and timely waste removal so your project can proceed without delays",
            button: "Submit request",
          },
          process: {
            title: "Our Waste Removal Process",
            step1: "Submit Request - contact us in any convenient way",
            step2:
              "Container Delivery - we will deliver it to your site after completing all formalities",
            step3:
              "Fill the Container - once it's full, submit a replacement request",
            step4:
              "Replacement and Removal - we will promptly replace the container and remove construction waste for disposal",
          },
          benefits: {
            title: "Benefits of Our Services",
            eco: "Eco-friendly Disposal – strict adherence to environmental norms and standards",
            qualified: "Qualified Personnel – prompt and professional work",
            modern:
              "Modern Equipment – fleet with 'multilift' system for convenient container replacement",
            capacity:
              "15m³ Containers – spacious and suitable for any waste volume",
            gps: "GPS Monitoring – full real-time transport movement control",
            flexible:
              "Flexible Terms – competitive prices and individual approach to each client",
          },
          equipment: {
            title: "Our Equipment",
            description:
              "We use modern equipment for construction waste removal, ensuring fast and efficient operation.",
          },
        },
        request: {
          title: "Submit Request",
          form: {
            name: {
              label: "Full Name",
              placeholder: "Enter your full name",
            },
            phone: {
              label: "Phone Number",
              placeholder: "+7 (XXX) XXX-XXXX",
            },
            email: {
              label: "Email Address",
              placeholder: "your@email.com",
            },
            address: {
              label: "Waste Collection Address",
              placeholder: "Enter address",
            },
            service: {
              label: "Service Type",
              placeholder: "Select service type",
              options: {
                construction: "Construction Waste Removal",
                demolition: "Demolition Waste Removal",
                renovation: "Renovation Waste Removal",
                other: "Other",
              },
            },
            message: {
              label: "Additional Information",
              placeholder:
                "Please provide any additional information about your waste removal needs",
            },
            submit: "Submit Request",
          },
          success: {
            title: "Request Submitted!",
            message:
              "Thank you for your request. Our staff will contact you shortly to discuss your waste removal needs.",
            button: "Submit Another Request",
          },
        },
        footer: {
          slogan: "We stand for a clean city!",
          services: "Construction waste removal services",
          quickLinks: "Quick Links",
          contactUs: "Contact Us",
          rights: "All rights reserved.",
          address: "Astana, Kazakhstan",
        },
        trucks: {
          items: [
            {
              title: "KAMAZ",
              description: "Specialized container transport vehicle",
              alt: "KAMAZ Multilift without container",
            },
            {
              title: "Container Loading",
              description: "Container loading process on multilift",
              alt: "KAMAZ loading blue container",
            },
            {
              title: "Bio Green Fleet",
              description: "Our modern fleet for construction waste removal",
              alt: "Three KAMAZ and Scania trucks",
            },
            {
              title: "Container Production",
              description: "We produce our own construction waste containers",
              alt: "Container production in workshop",
            },
            {
              title: "Bio Green Equipment",
              description: "Our equipment is fitted with modern technology",
              alt: "KAMAZ with Bio Green logo",
            },
          ],
          slideLabel: "Go to slide",
        },
      },
    },
    kz: {
      translation: {
        nav: {
          home: "Басты бет",
          about: "Біз туралы",
          services: "Қызметтеріміз",
          request: "Өтінім қалдыру",
        },
        home: {
          slogan: "Біз таза қала үшін еңбек етеміз!",
          under_slogan: "Құрылыс және қатты тұрмыстық қалдықтарды шығару",
          request: "Өтінім қалдыру",
          description:
            "BIO GREEN компаниясы 2020 жылдан бастап құрылыс қалдықтарын шығару нарығындағы көшбасшылар қатарынан берік орын алды. Біз сапалы қызмет пен жекелей көзқарас ұсынатын сенімді әрі қарқынды дамып келе жатқан серіктес ретінде танылдық.",
          principles: "Біздің негізгі қағидаттарымыз",
          first_title: "Экологиялық қауіпсіздік",
          first_body:
            "Қоршаған ортаның экологиялық қауіпсіздігі және экожүйеге ұқыпты көзқарас",
          second_title: "Заңнаманы сақтау",
          second_body: "Қазақстан Республикасының заңнамасын сақтау",
          third_title: "Клиентке бағдарлану",
          third_body:
            "Клиентке бағдарланған сапалы қызмет, икемді жеңілдіктер жүйесі, келісімшартпен жұмыс жасау",
          fourth_title: "Унификация",
          fourth_body:
            "Автопаркті жалпы унификациялау, оның мобильділігі мен функционалдығын арттыру",
          fifth_title: "Заманауи технологиялар",
          fifth_body:
            "Қазіргі заманғы озық технологияларды қолдану – 'мультилифт' жүйесі",
        },
        contact: {
          call: "Позвонить нам",
          whatsapp: "Написать в WhatsApp",
        },
        about: {
          title: "Біз туралы",
          mission: {
            title: "Біздің миссиямыз",
            description:
              "Bio Green компаниясы қалдықтарды қайта өңдеудің экологиялық қауіпсіз шешімдерін ұсынуға ұмтылады. Біздің миссиямыз – ең жоғары экологиялық стандарттарға сай құрылыс қалдықтарын шығару қызметтерін ұсынып, таза қала құруға өз үлесімізді қосу.",
          },
          contact: {
            title: "Байланыс ақпараты",
            phone: "Телефон",
            email: "Email",
            address: {
              title: "Мекен-жай",
              value:
                'ЭКСПО-бульвар 5, Қабанбай батыр даңғылы, 58 "Б" 6 корпус, 1 кеңсе, Астана қ.',
            },
          },
          clients: {
            title: "Біздің клиенттер",
            description:
              "Біз құрылыс қалдықтарын шығару және утилизациялау саласындағы қызметтерімізді сеніммен пайдаланатын Қазақстанның жетекші компанияларымен серіктестіктен мақтанамыз",
          },
        },
        service: {
          title: "Құрылыс қалдықтарын шығару",
          subtitle:
            "Біз құрылыс қалдықтарын шығару бойынша экологиялық қауіпсіз шешімдерді ұсынамыз",
          features: {
            title: "Қалдықтарды шығару үшін контейнерлеріміз",
            eco: {
              title: "Экологиялық қауіпсіз",
              description:
                "Біздің контейнерлер экологиялық стандарттарға сай жасалған және қоршаған ортаға зиян келтірмейді",
            },
            stability: {
              title: "Жоғары төзімділік",
              description:
                "Берік конструкция қалдықтарды тасымалдау және сақтау кезінде тұрақтылық пен қауіпсіздікті қамтамасыз етеді",
            },
            transport: {
              title: "Тасымалдауға ыңғайлы",
              description:
                "Арнайы конструкция контейнерлерді жүктеуді, тасымалдауды және түсіруді жеңілдетеді",
            },
          },
          attention: {
            title: "НАЗАР АУДАРЫҢЫЗ!!!",
            illegal:
              "Тұрмыстық және құрылыс қалдықтарын қаладан тыс жерге немесе рұқсат етілмеген полигондарға шығаруға тыйым салынады және бұл әрекеттер ҚР заңнамасына сәйкес қатаң жазаланады.",
            legislation:
              "ҚР заңнамасына сәйкес, барлық қалдықтар арнайы қалалық полигондарға шығарылып, онда тиісті түрде кәдеге жаратылады.",
            monitoring:
              "Бұзушылықтар бейнебақылау жүйесі («Сергек»), GPS бақылау және экологиялық полиция қатысатын рейдтер арқылы анықталады.",
            penalties: "Бұзушылықтар үшін айыппұлдар қарастырылған:",
            individuals: "Жеке тұлғаларға — 100 АЕК-ке дейін (393 200 теңге)",
            entities: "Заңды тұлғаларға — 1000 АЕК-ке дейін (3 932 000 теңге)",
            repeat:
              "Қайталанған жағдайда — айыппұл екі есе артып, техника тәркіленуі мүмкін",
            responsibility:
              "Ережелерді сақтау — бұл заң талабы ғана емес, сонымен қатар қаланың экологиясын қорғау ісі.",
            licensed: "Бізде — лицензия, арнайы техника және тәжірибе бар",
            authorized: "Қалдықтарды тек арнайы полигондарға жеткіземіз",
            documentation: "Барлық есептік және жабу құжаттарын ұсынамыз",
            view_certificate: "Біздің лицензияны қарау",
            contact:
              "Бізге хабарласыңыз — қалдықтардан заңды әрі қауіпсіз түрде құтылыңыз!",
            regulatory: "Нормативтік құжаттар:",
            ecoCode: "ҚР Экологиялық кодексі",
            adminCode:
              "ҚР Әкімшілік құқық бұзушылық туралы кодексі (344, 505-баптар)",
            city: "Астана қаласының абаттандыру ережелері",
          },
          cta: {
            title: "Құрылыс қалдықтарын шығару қызметіне тапсырыс беру",
            description:
              "Біз контейнерлерді жылдам жеткізіп, қалдықтарды уақытында шығара отырып, сіздің жобаңыздың үздіксіз жүруін қамтамасыз етеміз",
            button: "Өтінім қалдыру",
          },
          process: {
            title: "Қалдықтарды шығару процесі",
            step1:
              "Өтінім қалдырыңыз - бізбен кез келген ыңғайлы жолмен хабарласыңыз",
            step2:
              "Контейнерді жеткізу - барлық қажетті рәсімдерден кейін біз контейнерді сіздің объектіге жеткіземіз",
            step3:
              "Контейнерді толтырыңыз - контейнер толғаннан кейін, ауыстыру үшін өтінім қалдырыңыз",
            step4:
              "Ауыстыру және шығару - біз контейнерді тез арада ауыстырып, құрылыс қалдықтарын утилизацияға шығарамыз",
          },
          benefits: {
            title: "Біздің артықшылықтарымыз",
            eco: "Экологиялық утилизация – экологиялық нормалар мен стандарттарды қатаң сақтау",
            qualified: "Білікті мамандар – жылдам және кәсіби қызмет көрсету",
            modern:
              "Заманауи техника – контейнерлерді ыңғайлы ауыстыру үшін «мультилифт» жүйесі бар автопарк",
            capacity:
              "15 м³ бункерлер – кең және кез келген көлемдегі қалдықтарды жинауға ыңғайлы",
            gps: "GPS мониторингі – нақты уақыттағы көлік қозғалысын толық бақылау",
            flexible:
              "Икемді шарттар – қолайлы баға мен әр клиентке жеке көзқарас",
          },
          equipment: {
            title: "Біздің техника",
            description:
              "Құрылыс қалдықтарын шығару үшін біз заманауи техниканы пайдаланып, жұмысымыздың жылдамдығы мен тиімділігін қамтамасыз етеміз.",
          },
        },
        request: {
          title: "Өтінім қалдыру",
          form: {
            name: {
              label: "Аты-жөні",
              placeholder: "Сіздің толық атыңыз",
            },
            phone: {
              label: "Телефон нөмірі",
              placeholder: "+7 (XXX) XXX-XXXX",
            },
            email: {
              label: "Электрондық пошта",
              placeholder: "your@email.com",
            },
            address: {
              label: "Қалдықтарды шығару мекенжайы",
              placeholder: "Мекенжайды енгізіңіз",
            },
            service: {
              label: "Қызмет түрі",
              placeholder: "Қызмет түрін таңдаңыз",
              options: {
                construction: "Құрылыс қалдықтарын шығару",
                demolition: "Құрылыс бұзу қалдықтарын шығару",
                renovation: "Жөндеу кезінде қоқысты шығару",
                other: "Басқа",
              },
            },
            message: {
              label: "Қосымша ақпарат",
              placeholder:
                "Өтінеміз, қалдықтарды шығару қажеттіліктеріңіз туралы қосымша ақпарат беріңіз",
            },
            submit: "Өтінім қалдыру",
          },
          success: {
            title: "Өтінім берілді!",
            message:
              "Сұрағаныңыз үшін рахмет. Біздің қызметкерлер қалдықтарды шығару қажеттіліктерін талқылау үшін жақын арада сізбен байланысады.",
            button: "Басқа сұрау жіберу",
          },
        },
        footer: {
          slogan: "Біз таза қала үшін еңбек етеміз!",
          services: "Құрылыс қалдықтарын шығару қызметтері",
          quickLinks: "Жылдам сілтемелер",
          contactUs: "Байланыс ақпараты",
          rights: "Барлық құқықтар қорғалған.",
          address: "Астана, Қазақстан",
        },
        trucks: {
          items: [
            {
              title: "КАМАЗ",
              description: "Контейнерлерді тасымалдауға арналған арнайы көлік",
              alt: "КАМАЗ Мультилифт без контейнера",
            },
            {
              title: "Контейнерді жүктеу",
              description: "Контейнерді мультилифтке жүктеу процесі",
              alt: "КАМАЗ с погрузкой синего контейнера",
            },
            {
              title: "Bio Green автопаркі",
              description:
                "Құрылыс қалдықтарын шығару үшін арналған заманауи автопарк",
              alt: "Три грузовика КАМАЗ и Scania",
            },
            {
              title: "Контейнер өндірісі ",
              description:
                "Біз құрылыс қоқыстарына арналған өз контейнерлерімізді шығарамыз",
              alt: "Производство контейнера в цеху",
            },
            {
              title: "Bio Green техникасы",
              description: "Біздің техника заманауи жабдықтармен жабдықталған",
              alt: "КАМАЗ с логотипом Bio Green",
            },
          ],
          slideLabel: "Слайдқа өтіңіз",
        },
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18nInstance;
