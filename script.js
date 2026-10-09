// ================================
// Chez Délice Ilham
// بدّل رقم واتساب هنا قبل النشر
// مثال المغرب: 2126XXXXXXXX
// ================================
const WHATSAPP_NUMBER = "212620918118";

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const toast = document.getElementById("toast");
const languageSelect = document.getElementById("languageSelect");

const translations = {
  "الرئيسية": { en: "Home", fr: "Accueil", de: "Startseite" },
  "أطباق مغربية": { en: "Moroccan dishes", fr: "Plats marocains", de: "Marokkanische Gerichte" },
  "حلويات": { en: "Sweets", fr: "Pâtisseries", de: "Süßigkeiten" },
  "كيكات": { en: "Cakes", fr: "Gâteaux", de: "Kuchen" },
  "المناسبات": { en: "Occasions", fr: "Événements", de: "Anlässe" },
  "الصور": { en: "Gallery", fr: "Galerie", de: "Galerie" },
  "تواصل معنا": { en: "Contact us", fr: "Contactez-nous", de: "Kontakt" },
  "مذاق مغربي أصيل… بحب وذوق": { en: "Authentic Moroccan flavors, made with love", fr: "Les saveurs authentiques du Maroc, préparées avec amour", de: "Authentischer marokkanischer Geschmack – mit Liebe zubereitet" },
  "أطباق مغربية شهية، حلويات تقليدية وكيكات للمناسبات، محضرة بعناية وبمذاق منزلي أصيل.": { en: "Delicious Moroccan dishes, traditional sweets and celebration cakes, carefully prepared with authentic homemade flavor.", fr: "Des plats marocains savoureux, des pâtisseries traditionnelles et des gâteaux de fête, préparés avec soin et un goût authentique fait maison.", de: "Köstliche marokkanische Gerichte, traditionelles Gebäck und Festtagstorten – sorgfältig zubereitet mit authentischem hausgemachtem Geschmack." },
  "شوفو لائحة الأطباق": { en: "Explore the menu", fr: "Voir le menu", de: "Speisekarte ansehen" },
  "مرحبا بكم": { en: "Welcome", fr: "Bienvenue", de: "Willkommen" },
  "الذوق المغربي في كل طبق ❤️": { en: "Moroccan flavor in every dish ❤️", fr: "Le goût du Maroc dans chaque plat ❤️", de: "Marokkanischer Geschmack in jedem Gericht ❤️" },
  "فـ": { en: "At ", fr: "", de: "Bei " },
  "كنوجدو ليكم أطباق وحلويات مغربية بمواد مختارة وبطريقة تقليدية، مناسبة للعائلة، الأعراس، أعياد الميلاد وجميع المناسبات.": { en: " we prepare Moroccan dishes and sweets with carefully selected ingredients and traditional methods, perfect for families, weddings, birthdays and every special occasion.", fr: " nous préparons des plats et pâtisseries marocains avec des ingrédients soigneusement sélectionnés et selon des méthodes traditionnelles, pour les familles, mariages, anniversaires et toutes les occasions.", de: " bereiten wir marokkanische Gerichte und Süßigkeiten mit ausgewählten Zutaten und traditionellen Methoden zu – für Familien, Hochzeiten, Geburtstage und besondere Anlässe." },
  "طلبي دابا ←": { en: "Order now →", fr: "Commander →", de: "Jetzt bestellen →" },
  "صنع بحب": { en: "Made with love", fr: "Fait avec amour", de: "Mit Liebe gemacht" },
  "كل طبق كيتوجد بعناية باش يوصل ليكم": { en: "Every dish is carefully prepared just for you", fr: "Chaque plat est préparé avec soin pour vous", de: "Jedes Gericht wird sorgfältig für Sie zubereitet" },
  "اختار اللي بغيتي": { en: "Choose what you like", fr: "Choisissez ce qui vous plaît", de: "Wählen Sie Ihren Favoriten" },
  "لائحة المأكولات والحلويات": { en: "Food & sweets menu", fr: "Menu des plats et pâtisseries", de: "Speisekarte: Gerichte & Süßes" },
  "تقدرو تطلبو الكمية والبلاتو حسب المناسبة ديالكم.": { en: "Choose the quantity and platter to suit your occasion.", fr: "Choisissez la quantité et le plateau adaptés à votre événement.", de: "Menge und Platte passend zu Ihrem Anlass bestellbar." },
  "الكل": { en: "All", fr: "Tout", de: "Alle" },
  "أطباق": { en: "Dishes", fr: "Plats", de: "Gerichte" },
  "طبق مغربي": { en: "Moroccan dish", fr: "Plat marocain", de: "Marokkanisches Gericht" },
  "طاجين باللحم والخضر": { en: "Meat and vegetable tagine", fr: "Tajine à la viande et aux légumes", de: "Tajine mit Fleisch und Gemüse" },
  "طاجين بنكهة مغربية تقليدية، مناسب للعائلة والمناسبات.": { en: "A traditional Moroccan tagine, perfect for family meals and special occasions.", fr: "Un tajine marocain traditionnel, idéal pour les repas en famille et les occasions spéciales.", de: "Ein traditioneller marokkanischer Tajine, ideal für Familienessen und besondere Anlässe." },
  "حسب الطلب": { en: "Made to order", fr: "Sur commande", de: "Auf Bestellung" },
  "طلب": { en: "Order", fr: "Commander", de: "Bestellen" },
  "الأحد والمناسبات": { en: "Sundays & occasions", fr: "Dimanches et événements", de: "Sonntage & Anlässe" },
  "كسكس مغربي": { en: "Moroccan couscous", fr: "Couscous marocain", de: "Marokkanischer Couscous" },
  "كسكس بالخضر واللحم، محضر بالطريقة المغربية التقليدية.": { en: "Couscous with vegetables and meat, prepared in the traditional Moroccan way.", fr: "Couscous aux légumes et à la viande, préparé selon la tradition marocaine.", de: "Couscous mit Gemüse und Fleisch, traditionell marokkanisch zubereitet." },
  "مناسبات": { en: "Special occasions", fr: "Événements", de: "Besondere Anlässe" },
  "بسطيلة بالدجاج": { en: "Chicken pastilla", fr: "Pastilla au poulet", de: "Pastilla mit Hähnchen" },
  "بسطيلة مقرمشة بالدجاج واللوز والتوابل المغربية.": { en: "Crispy pastilla with chicken, almonds and Moroccan spices.", fr: "Pastilla croustillante au poulet, aux amandes et aux épices marocaines.", de: "Knusprige Pastilla mit Hähnchen, Mandeln und marokkanischen Gewürzen." },
  "حسب الحجم": { en: "Size options", fr: "Selon la taille", de: "Je nach Größe" },
  "حلويات مغربية": { en: "Moroccan sweets", fr: "Pâtisseries marocaines", de: "Marokkanisches Gebäck" },
  "كعب الغزال": { en: "Kaab el ghazal (gazelle horns)", fr: "Cornes de gazelle", de: "Gazellenhörnchen" },
  "حلوى باللوز بنكهة مغربية راقية، مناسبة للضيافة.": { en: "Elegant almond pastries with a refined Moroccan flavor, perfect for serving guests.", fr: "De délicates pâtisseries aux amandes, parfaites pour recevoir.", de: "Feines Mandelgebäck mit marokkanischem Geschmack – ideal für Gäste." },
  "بالكيلو أو البلّاتو": { en: "By the kilo or platter", fr: "Au kilo ou en plateau", de: "Nach Gewicht oder als Platte" },
  "تقليدية": { en: "Traditional", fr: "Traditionnel", de: "Traditionell" },
  "الشباكية": { en: "Chebakia", fr: "Chebakia", de: "Chebakia" },
  "شباكية بالعسل والزنجلان، مثالية لرمضان والمناسبات.": { en: "Honey and sesame chebakia, perfect for Ramadan and celebrations.", fr: "Chebakia au miel et au sésame, idéale pour le Ramadan et les fêtes.", de: "Chebakia mit Honig und Sesam – perfekt für Ramadan und Feste." },
  "حسب الكمية": { en: "Quantity options", fr: "Selon la quantité", de: "Je nach Menge" },
  "بريوات": { en: "Briouats", fr: "Briouates", de: "Briouats" },
  "بريوات باللوز": { en: "Almond briouats", fr: "Briouates aux amandes", de: "Mandel-Briouats" },
  "بريوات مقرمشة محشوة باللوز ومعطرة بماء الزهر.": { en: "Crispy pastries filled with almonds and scented with orange blossom water.", fr: "De petits feuilletés croustillants aux amandes et à l'eau de fleur d'oranger.", de: "Knuspriges Gebäck mit Mandelfüllung und Orangenblütenwasser." },
  "بالعدد أو البلّاتو": { en: "By the piece or platter", fr: "À la pièce ou en plateau", de: "Stückweise oder als Platte" },
  "كيكة أعياد الميلاد": { en: "Birthday cake", fr: "Gâteau d'anniversaire", de: "Geburtstagstorte" },
  "كيكات بأشكال ونكهات مختلفة حسب اختياركم.": { en: "Cakes in a variety of designs and flavors, made to your liking.", fr: "Des gâteaux aux formes et saveurs variées, selon vos envies.", de: "Torten in verschiedenen Designs und Geschmacksrichtungen nach Ihren Wünschen." },
  "السعر حسب الحجم": { en: "Price depends on size", fr: "Prix selon la taille", de: "Preis je nach Größe" },
  "أعراس": { en: "Weddings", fr: "Mariages", de: "Hochzeiten" },
  "كيكة الأعراس والمناسبات": { en: "Wedding and celebration cake", fr: "Gâteau de mariage et de fête", de: "Hochzeits- und Festtagstorte" },
  "تصميم خاص وأنيق للأعراس والخطوبة وجميع المناسبات.": { en: "A custom elegant design for weddings, engagements and every special occasion.", fr: "Un design élégant et personnalisé pour les mariages, fiançailles et toutes les occasions.", de: "Ein elegantes individuelles Design für Hochzeiten, Verlobungen und besondere Anlässe." },
  "تصميم خاص": { en: "Custom design", fr: "Création personnalisée", de: "Individuelles Design" },
  "المطبخ المغربي": { en: "Moroccan cuisine", fr: "Cuisine marocaine", de: "Marokkanische Küche" },
  "أطباق كتحكي على المغرب 🇲🇦": { en: "Dishes that tell the story of Morocco 🇲🇦", fr: "Des plats qui racontent le Maroc 🇲🇦", de: "Gerichte, die von Marokko erzählen 🇲🇦" },
  "من الطاجين والكسكس حتى البسطيلة والرفيسة، كنحضرو الأطباق بعناية وبلمسة منزلية.": { en: "From tagine and couscous to pastilla and rfissa, every dish is carefully prepared with a homemade touch.", fr: "Du tajine et du couscous à la pastilla et la rfissa, chaque plat est préparé avec soin et une touche maison.", de: "Von Tajine und Couscous bis Pastilla und Rfissa – jedes Gericht wird sorgfältig und mit einer hausgemachten Note zubereitet." },
  "✓ مكونات مختارة": { en: "✓ Selected ingredients", fr: "✓ Ingrédients sélectionnés", de: "✓ Ausgewählte Zutaten" },
  "✓ مذاق مغربي أصيل": { en: "✓ Authentic Moroccan flavor", fr: "✓ Saveurs marocaines authentiques", de: "✓ Authentischer marokkanischer Geschmack" },
  "✓ كميات حسب الطلب": { en: "✓ Quantities made to order", fr: "✓ Quantités sur commande", de: "✓ Mengen nach Bestellung" },
  "✓ تجهيز للمناسبات": { en: "✓ Catering for special occasions", fr: "✓ Préparations pour vos événements", de: "✓ Für besondere Anlässe" },
  "حلاوة من الدار ❤️": { en: "Homemade sweetness ❤️", fr: "La douceur du fait maison ❤️", de: "Hausgemachte Köstlichkeiten ❤️" },
  "حلويات تقليدية للضيافة، الأعياد، رمضان والمناسبات.": { en: "Traditional sweets for guests, holidays, Ramadan and special occasions.", fr: "Des pâtisseries traditionnelles pour recevoir, les fêtes, le Ramadan et toutes les occasions.", de: "Traditionelles Gebäck für Gäste, Feiertage, Ramadan und besondere Anlässe." },
  "باللوز وماء الزهر.": { en: "With almonds and orange blossom water.", fr: "Aux amandes et à l'eau de fleur d'oranger.", de: "Mit Mandeln und Orangenblütenwasser." },
  "شباكية": { en: "Chebakia", fr: "Chebakia", de: "Chebakia" },
  "بالعسل والزنجلان.": { en: "With honey and sesame.", fr: "Au miel et au sésame.", de: "Mit Honig und Sesam." },
  "مقرمشة ولذيذة.": { en: "Crispy and delicious.", fr: "Croustillantes et délicieuses.", de: "Knusprig und lecker." },
  "غريبة وفقاص": { en: "Ghriba & fekkas", fr: "Ghriba et fekkas", de: "Ghriba & Fekkas" },
  "مثالية مع أتاي.": { en: "Perfect with Moroccan mint tea.", fr: "Parfaits avec un thé à la menthe.", de: "Perfekt zu marokkanischem Minztee." },
  "كيكات حسب الطلب": { en: "Custom cakes", fr: "Gâteaux personnalisés", de: "Torten nach Wunsch" },
  "كيكة على ذوقك 🎂": { en: "A cake made your way 🎂", fr: "Un gâteau à votre goût 🎂", de: "Eine Torte ganz nach Ihrem Geschmack 🎂" },
  "اختار النكهة، الحجم والتصميم… وحنا نوجدوه ليك.": { en: "Choose the flavor, size and design… we’ll make it for you.", fr: "Choisissez le parfum, la taille et le design… nous le préparons pour vous.", de: "Wählen Sie Geschmack, Größe und Design – wir fertigen Ihre Torte an." },
  "طلب كيكة": { en: "Order a cake", fr: "Commander un gâteau", de: "Torte bestellen" },
  "بلّاتوات وتجهيزات للمناسبات": { en: "Platters and catering for special occasions", fr: "Plateaux et préparations pour vos événements", de: "Platten und Catering für besondere Anlässe" },
  "للأعراس، الخطوبة، أعياد الميلاد، رمضان، العقيقة والضيافة.": { en: "For weddings, engagements, birthdays, Ramadan, aqiqah and entertaining guests.", fr: "Pour les mariages, fiançailles, anniversaires, le Ramadan, l'aqiqah et vos réceptions.", de: "Für Hochzeiten, Verlobungen, Geburtstage, Ramadan, Aqiqah und Bewirtungen." },
  "الأعراس والخطوبة": { en: "Weddings & engagements", fr: "Mariages et fiançailles", de: "Hochzeiten & Verlobungen" },
  "حلويات وبلّاتوات بتنسيق أنيق.": { en: "Sweets and platters, beautifully arranged.", fr: "Pâtisseries et plateaux joliment présentés.", de: "Süßes und Platten stilvoll arrangiert." },
  "أعياد الميلاد": { en: "Birthdays", fr: "Anniversaires", de: "Geburtstage" },
  "كيكات وحلويات حسب الثيم.": { en: "Cakes and sweets to match your theme.", fr: "Gâteaux et pâtisseries selon votre thème.", de: "Torten und Süßigkeiten passend zum Motto." },
  "رمضان": { en: "Ramadan", fr: "Ramadan", de: "Ramadan" },
  "شباكية، بريوات وحلويات رمضانية.": { en: "Chebakia, briouats and Ramadan sweets.", fr: "Chebakia, briouates et douceurs du Ramadan.", de: "Chebakia, Briouats und Ramadan-Süßigkeiten." },
  "العائلة والضيافة": { en: "Family & hospitality", fr: "Famille et réception", de: "Familie & Gastfreundschaft" },
  "أطباق مغربية جاهزة لللمة.": { en: "Moroccan dishes ready to share.", fr: "Des plats marocains prêts à partager.", de: "Marokkanische Gerichte für gesellige Runden." },
  "معرض الصور": { en: "Photo gallery", fr: "Galerie photos", de: "Fotogalerie" },
  "من مطبخنا ليكم": { en: "From our kitchen to you", fr: "De notre cuisine à votre table", de: "Aus unserer Küche für Sie" },
  "تجاربكم كتهمنا": { en: "Your experience matters", fr: "Votre expérience compte", de: "Ihre Erfahrung ist uns wichtig" },
  "تقييمات الزبناء": { en: "Customer reviews", fr: "Avis des clients", de: "Kundenbewertungen" },
  "التقييمات اللي ترسلوها لينا غادي نراجعوها قبل النشر. كون أول من يشارك رأيه.": { en: "We review submitted ratings before publishing them. Be the first to share your experience.", fr: "Nous vérifions les avis reçus avant leur publication. Soyez le premier à partager votre expérience.", de: "Wir prüfen eingereichte Bewertungen vor der Veröffentlichung. Teilen Sie als Erste/r Ihre Erfahrung." },
  "مازال ما كايناش تقييمات منشورة. شاركنا رأيك باش تكون الأول.": { en: "No reviews have been published yet. Share your experience to be the first.", fr: "Aucun avis n'a encore été publié. Partagez votre expérience pour être le premier.", de: "Bisher wurden noch keine Bewertungen veröffentlicht. Teilen Sie Ihre Erfahrung als Erste/r." },
  "شاركنا رأيك": { en: "Share your review", fr: "Donnez votre avis", de: "Bewerten Sie uns" },
  "الاسم (اختياري)": { en: "Name (optional)", fr: "Nom (facultatif)", de: "Name (optional)" },
  "الاسم اللي بغيتي يبان": { en: "Name to display", fr: "Nom à afficher", de: "Anzeigename" },
  "التقييم ديالك": { en: "Your rating", fr: "Votre note", de: "Ihre Bewertung" },
  "اختار تقييم من نجمة إلى خمس نجوم": { en: "Choose a rating from one to five stars", fr: "Choisissez une note de une à cinq étoiles", de: "Wählen Sie eine Bewertung von einem bis fünf Sternen" },
  "5 نجوم": { en: "5 stars", fr: "5 étoiles", de: "5 Sterne" },
  "4 نجوم": { en: "4 stars", fr: "4 étoiles", de: "4 Sterne" },
  "3 نجوم": { en: "3 stars", fr: "3 étoiles", de: "3 Sterne" },
  "نجمتان": { en: "2 stars", fr: "2 étoiles", de: "2 Sterne" },
  "نجمة واحدة": { en: "1 star", fr: "1 étoile", de: "1 Stern" },
  "التعليق ديالك": { en: "Your comment", fr: "Votre commentaire", de: "Ihr Kommentar" },
  "كتب تجربتك معانا...": { en: "Tell us about your experience...", fr: "Racontez-nous votre expérience...", de: "Teilen Sie Ihre Erfahrung mit uns ..." },
  "غادي يتفتح واتساب باش تصيفط التقييم. ما غاديش يتنشر حتى نراجعوه ونأخذو موافقتك.": { en: "WhatsApp will open so you can send your review. It will only be published after review and with your permission.", fr: "WhatsApp s'ouvrira pour envoyer votre avis. Il ne sera publié qu'après vérification et avec votre accord.", de: "WhatsApp wird geöffnet, damit Sie Ihre Bewertung senden können. Sie wird erst nach Prüfung und mit Ihrer Zustimmung veröffentlicht." },
  "صيفط التقييم عبر واتساب": { en: "Send review via WhatsApp", fr: "Envoyer l'avis par WhatsApp", de: "Bewertung per WhatsApp senden" },
  "بدون اسم": { en: "Anonymous", fr: "Anonyme", de: "Anonym" },
  "تقييم جديد من الموقع": { en: "New website review", fr: "Nouvel avis du site", de: "Neue Website-Bewertung" },
  "النجوم": { en: "Rating", fr: "Note", de: "Bewertung" },
  "التعليق": { en: "Comment", fr: "Commentaire", de: "Kommentar" },
  "طاجين مغربي": { en: "Moroccan tagine", fr: "Tajine marocain", de: "Marokkanischer Tajine" },
  "كسكس": { en: "Couscous", fr: "Couscous", de: "Couscous" },
  "كيكات": { en: "Cakes", fr: "Gâteaux", de: "Kuchen" },
  "بلّاتوات": { en: "Platters", fr: "Plateaux", de: "Platten" },
  "بغيتي تطلب؟ تواصل معانا 📞": { en: "Would you like to order? Get in touch 📞", fr: "Envie de commander ? Contactez-nous 📞", de: "Möchten Sie bestellen? Kontaktieren Sie uns 📞" },
  "عمر الفورمولاير وكتب لينا شنو بغيتي، وغادي نتواصلو معاك لتأكيد الطلب.": { en: "Fill in the form and tell us what you’d like. We’ll contact you to confirm your order.", fr: "Remplissez le formulaire et indiquez-nous votre souhait. Nous vous contacterons pour confirmer la commande.", de: "Füllen Sie das Formular aus und teilen Sie uns Ihren Wunsch mit. Wir melden uns zur Bestätigung." },
  "الهاتف": { en: "Phone", fr: "Téléphone", de: "Telefon" },
  "المكان": { en: "Location", fr: "Adresse", de: "Standort" },
  "سيدي معروف، الدار البيضاء، المغرب 🇲🇦": { en: "Sidi Maarouf, Casablanca, Morocco 🇲🇦", fr: "Sidi Maarouf, Casablanca, Maroc 🇲🇦", de: "Sidi Maarouf, Casablanca, Marokko 🇲🇦" },
  "أوقات الطلب": { en: "Ordering hours", fr: "Horaires de commande", de: "Bestellzeiten" },
  "كل يوم حسب المواعيد": { en: "Daily, by arrangement", fr: "Tous les jours, sur rendez-vous", de: "Täglich nach Vereinbarung" },
  "إنستغرام": { en: "Instagram", fr: "Instagram", de: "Instagram" },
  "طلب أو استفسار": { en: "Order or enquiry", fr: "Commande ou renseignement", de: "Bestellung oder Anfrage" },
  "الاسم": { en: "Name", fr: "Nom", de: "Name" },
  "كتب الاسم ديالك": { en: "Enter your name", fr: "Saisissez votre nom", de: "Geben Sie Ihren Namen ein" },
  "رقم الهاتف": { en: "Phone number", fr: "Numéro de téléphone", de: "Telefonnummer" },
  "شنو بغيتي؟": { en: "What would you like?", fr: "Que souhaitez-vous ?", de: "Was möchten Sie?" },
  "استفسار عام": { en: "General enquiry", fr: "Demande générale", de: "Allgemeine Anfrage" },
  "الرسالة": { en: "Message", fr: "Message", de: "Nachricht" },
  "كتب لينا الكمية، التاريخ وأي تفاصيل أخرى...": { en: "Tell us the quantity, date and any other details...", fr: "Indiquez la quantité, la date et tout autre détail...", de: "Nennen Sie uns die Menge, das Datum und weitere Details ..." },
  "إرسال الطلب عبر واتساب": { en: "Send order via WhatsApp", fr: "Envoyer la commande par WhatsApp", de: "Bestellung per WhatsApp senden" },
  "الأطباق": { en: "Dishes", fr: "Plats", de: "Gerichte" },
  "مذاق مغربي أصيل… بحب وذوق 🇲🇦": { en: "Authentic Moroccan flavors… made with love 🇲🇦", fr: "Les saveurs authentiques du Maroc… avec amour 🇲🇦", de: "Authentischer marokkanischer Geschmack … mit Liebe 🇲🇦" },
  "©": { en: "©", fr: "©", de: "©" },
  " — جميع الحقوق محفوظة": { en: " — All rights reserved", fr: " — Tous droits réservés", de: " — Alle Rechte vorbehalten" },
  "تم اختيار الطلب ✓": { en: "Item selected ✓", fr: "Article sélectionné ✓", de: "Artikel ausgewählt ✓" },
  "طاجين مغربي بالخضر": { en: "Moroccan vegetable tagine", fr: "Tajine marocain aux légumes", de: "Marokkanischer Gemüsetajine" },
  "طبق كسكس مغربي بالخضر واللحم": { en: "Moroccan couscous with vegetables and meat", fr: "Couscous marocain aux légumes et à la viande", de: "Marokkanischer Couscous mit Gemüse und Fleisch" },
  "بسطيلة مغربية بالدجاج واللوز": { en: "Moroccan chicken and almond pastilla", fr: "Pastilla marocaine au poulet et aux amandes", de: "Marokkanische Hähnchen-Mandel-Pastilla" },
  "حلويات مغربية متنوعة من بينها كعب الغزال": { en: "A selection of Moroccan sweets, including gazelle horns", fr: "Assortiment de pâtisseries marocaines, dont les cornes de gazelle", de: "Auswahl marokkanischer Süßigkeiten, darunter Gazellenhörnchen" },
  "الشباكية المغربية بالعسل": { en: "Moroccan honey chebakia", fr: "Chebakia marocaine au miel", de: "Marokkanische Chebakia mit Honig" },
  "بريوات مغربية محشوة باللوز ومزينة بالزنجلان": { en: "Moroccan almond briouats topped with sesame", fr: "Briouates marocaines aux amandes et au sésame", de: "Marokkanische Mandel-Briouats mit Sesam" },
  "كيكة بيضاء مزينة بالورود الحمراء للمناسبات": { en: "White celebration cake decorated with red flowers", fr: "Gâteau blanc décoré de fleurs rouges pour une fête", de: "Weiße Festtagstorte mit roten Blumen" },
  "حلويات أنيقة للمناسبات والأعراس": { en: "Elegant sweets for weddings and celebrations", fr: "Pâtisseries élégantes pour mariages et fêtes", de: "Elegantes Gebäck für Hochzeiten und Feiern" },
  "تشكيلة أطباق مغربية من الطاجين والكسكس والمقبلات": { en: "A selection of Moroccan dishes, including tagine, couscous and appetizers", fr: "Assortiment de plats marocains : tajine, couscous et entrées", de: "Auswahl marokkanischer Gerichte mit Tajine, Couscous und Vorspeisen" },
  "كعب الغزال المغربي على طبق فضي": { en: "Moroccan gazelle horns on a silver platter", fr: "Cornes de gazelle marocaines sur un plateau argenté", de: "Marokkanische Gazellenhörnchen auf einer Silberplatte" },
  "شباكية مغربية بالعسل والزنجلان": { en: "Moroccan honey and sesame chebakia", fr: "Chebakia marocaine au miel et au sésame", de: "Marokkanische Chebakia mit Honig und Sesam" },
  "بريوات مغربية مثلثة مزينة بالزنجلان": { en: "Triangular Moroccan briouats topped with sesame", fr: "Briouates marocaines triangulaires au sésame", de: "Dreieckige marokkanische Briouats mit Sesam" },
  "صينية غريبة وفقاص مغربي": { en: "A platter of Moroccan ghriba and fekkas biscuits", fr: "Plateau de biscuits marocains ghriba et fekkas", de: "Platte mit marokkanischem Ghriba und Fekkas" },
  "تشكيلة تصاميم كيكات حسب الطلب": { en: "A selection of custom cake designs", fr: "Exemples de gâteaux personnalisés", de: "Auswahl individueller Tortendesigns" },
  "عروسان يمسكان بأيدي بعضهما في مناسبة الخطوبة": { en: "A couple holding hands at their engagement", fr: "Un couple se tenant la main lors de ses fiançailles", de: "Ein Paar hält sich bei der Verlobung an den Händen" },
  "كيكة عيد ميلاد مزينة بتاج ذهبي": { en: "Birthday cake decorated with a golden crown", fr: "Gâteau d'anniversaire orné d'une couronne dorée", de: "Geburtstagstorte mit goldener Krone" },
  "فانوس وتمور وأجواء رمضانية": { en: "A lantern, dates and a Ramadan setting", fr: "Lanterne, dattes et ambiance du Ramadan", de: "Laterne, Datteln und Ramadan-Stimmung" },
  "مائدة مغربية عامرة بأطباق تقليدية للعائلة والضيافة": { en: "A Moroccan table full of traditional dishes for family and guests", fr: "Une table marocaine garnie de plats traditionnels pour la famille et les invités", de: "Ein reich gedeckter marokkanischer Tisch für Familie und Gäste" },
  "طاجين مغربي في طبق فخاري": { en: "Moroccan tagine in a clay dish", fr: "Tajine marocain dans un plat en terre cuite", de: "Marokkanischer Tajine in einer Tonschale" },
  "كسكس مغربي بالخضر واللحم": { en: "Moroccan couscous with vegetables and meat", fr: "Couscous marocain aux légumes et à la viande", de: "Marokkanischer Couscous mit Gemüse und Fleisch" },
  "تشكيلة حلويات مغربية متنوعة على طبق للتقديم": { en: "An assortment of Moroccan sweets on a serving platter", fr: "Assortiment de pâtisseries marocaines sur un plateau", de: "Auswahl marokkanischer Süßigkeiten auf einer Servierplatte" },
  "كيكة شوكولاتة مزينة للحفلات": { en: "Chocolate cake decorated for a celebration", fr: "Gâteau au chocolat décoré pour une fête", de: "Schokoladentorte für eine Feier" },
  "الشباكية المغربية بالعسل مع غطاء تقليدي": { en: "Moroccan honey chebakia with a traditional cover", fr: "Chebakia marocaine au miel sous une cloche traditionnelle", de: "Marokkanische Honig-Chebakia unter einer traditionellen Abdeckung" },
  "بلّاتو حلويات مغربية متنوعة مرتبة للتقديم": { en: "A platter of assorted Moroccan sweets, ready to serve", fr: "Plateau de pâtisseries marocaines assorties, prêt à servir", de: "Servierplatte mit verschiedenen marokkanischen Süßigkeiten" },
  "مائدة مغربية عامرة بأطباق تقليدية": { en: "A Moroccan table full of traditional dishes", fr: "Une table marocaine garnie de plats traditionnels", de: "Ein reich gedeckter marokkanischer Tisch mit traditionellen Gerichten" },
  "Chez Délice Ilham - أطباق وحلويات مغربية": { en: "Chez Délice Ilham - Moroccan food and sweets", fr: "Chez Délice Ilham - cuisine et pâtisseries marocaines", de: "Chez Délice Ilham – marokkanische Küche und Süßigkeiten" },
  "Chez Délice Ilham - أطباق مغربية وحلويات وكيكات حسب الطلب": { en: "Chez Délice Ilham - Moroccan food, sweets and custom cakes", fr: "Chez Délice Ilham - cuisine marocaine, pâtisseries et gâteaux personnalisés", de: "Chez Délice Ilham – marokkanische Gerichte, Süßigkeiten und Torten nach Wunsch" },
  "Chez Délice Ilham — جميع الحقوق محفوظة": { en: "Chez Délice Ilham — All rights reserved", fr: "Chez Délice Ilham — Tous droits réservés", de: "Chez Délice Ilham — Alle Rechte vorbehalten" },
  "فتح القائمة": { en: "Open menu", fr: "Ouvrir le menu", de: "Menü öffnen" },
  "اختيار اللغة": { en: "Choose language", fr: "Choisir la langue", de: "Sprache auswählen" },
  "طلب أو استفسار": { en: "Order or enquiry", fr: "Commande ou renseignement", de: "Bestellung oder Anfrage" }
};

const interfaceMessages = {
  ar: {
    invalidForm: "عافاك عمر الاسم ورقم الهاتف.",
    selected: (item) => `تم اختيار: ${item} ✓`,
    whatsappIntro: (name) => `سلام، أنا ${name}.\nبغيت نستفسر/نطلب:`,
    itemLabel: "رقم الهاتف:",
    detailsLabel: "التفاصيل:",
    noDetails: "ما كايناش تفاصيل إضافية.",
    thanks: "شكراً Chez Délice Ilham 🇲🇦"
  },
  en: {
    invalidForm: "Please enter your name and phone number.",
    selected: (item) => `Selected: ${item} ✓`,
    whatsappIntro: (name) => `Hello, my name is ${name}.\nI would like to enquire about/order:`,
    itemLabel: "Phone number:",
    detailsLabel: "Details:",
    noDetails: "No additional details.",
    thanks: "Thank you, Chez Délice Ilham 🇲🇦"
  },
  fr: {
    invalidForm: "Veuillez saisir votre nom et votre numéro de téléphone.",
    selected: (item) => `Sélectionné : ${item} ✓`,
    whatsappIntro: (name) => `Bonjour, je m'appelle ${name}.\nJe souhaite demander des renseignements/commander :`,
    itemLabel: "Téléphone :",
    detailsLabel: "Détails :",
    noDetails: "Aucun détail supplémentaire.",
    thanks: "Merci, Chez Délice Ilham 🇲🇦"
  },
  de: {
    invalidForm: "Bitte geben Sie Ihren Namen und Ihre Telefonnummer ein.",
    selected: (item) => `Ausgewählt: ${item} ✓`,
    whatsappIntro: (name) => `Hallo, mein Name ist ${name}.\nIch möchte eine Anfrage stellen/bestellen:`,
    itemLabel: "Telefonnummer:",
    detailsLabel: "Details:",
    noDetails: "Keine weiteren Angaben.",
    thanks: "Vielen Dank, Chez Délice Ilham 🇲🇦"
  }
};

const originalTextNodes = new Map();
const originalAttributes = new WeakMap();
const originalOptionValues = new WeakMap();
let currentLanguage = "ar";

const translate = (source, language) => translations[source]?.[language] ?? source;

const translatePage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const text = original.trim();
    if (text) node.nodeValue = original.replace(text, translate(text, language));
  }

  document.querySelectorAll("[alt], [placeholder], [aria-label], [title]").forEach((element) => {
    for (const attribute of ["alt", "placeholder", "aria-label", "title"]) {
      if (!element.hasAttribute(attribute)) continue;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const saved = originalAttributes.get(element);
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, translate(saved[attribute], language));
    }
  });

  document.querySelectorAll("#item option").forEach((option) => {
    if (!originalOptionValues.has(option)) originalOptionValues.set(option, option.textContent.trim());
    option.value = translate(originalOptionValues.get(option), language);
  });
  document.title = language === "ar"
    ? "Chez Délice Ilham | "
    : `Chez Délice Ilham | ${language === "en" ? "Moroccan food & sweets" : language === "fr" ? "Cuisine marocaine" : "Marokkanische Küche"}`;
  document.querySelector('meta[name="description"]').content = translate(
    "Chez Délice Ilham - أطباق مغربية وحلويات وكيكات حسب الطلب",
    language
  );
};

languageSelect.addEventListener("change", () => translatePage(languageSelect.value));
translatePage("ar");

const heroSlides = document.querySelector(".hero-slides");
const heroMedia = [
  "hero-tajine-photo.png",
  { video: "hero-video.mp4" },
  "pastilla-chicken-photo.png",
  "pastilla-photo.png"
];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentHeroSlide = 0;
let heroSlideTimer;
let heroSlideResetTimer;

if (heroSlides) {
  const slides = [...heroMedia, heroMedia[0]].map((media) => {
    const isVideo = typeof media !== "string";
    const slide = document.createElement(isVideo ? "video" : "img");
    slide.className = "hero-slide";
    slide.dataset.src = `images/${isVideo ? media.video : media}`;
    if (isVideo) {
      slide.muted = true;
      slide.loop = true;
      slide.playsInline = true;
      slide.preload = "none";
    } else {
      slide.alt = "";
    }
    slide.addEventListener("error", () => {
      console.error(`Hero slide media failed to load: ${slide.dataset.src}`);
    });
    heroSlides.append(slide);
    return slide;
  });

  const loadHeroSlide = (index) => {
    const slide = slides[index];
    if (slide && !slide.getAttribute("src")) {
      slide.src = slide.dataset.src;
      if (slide instanceof HTMLVideoElement) {
        slide.load();
      }
    }
  };

  const updateHeroSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    heroSlides.style.transform = `translateX(-${currentHeroSlide * slideWidth}px)`;
    slides.forEach((slide, index) => {
      if (slide instanceof HTMLVideoElement) {
        if (index === currentHeroSlide) {
          slide.play().catch((error) => {
            console.error(`Hero slide video failed to play: ${slide.dataset.src}`, error);
          });
        } else {
          slide.pause();
        }
      }
    });
  };

  const stopHeroSlideTimer = () => {
    window.clearTimeout(heroSlideTimer);
    window.clearTimeout(heroSlideResetTimer);
  };

  const startHeroSlideshow = () => {
    stopHeroSlideTimer();
    if (reducedMotion.matches) {
      currentHeroSlide = 0;
      heroSlides.style.transition = "none";
      updateHeroSlidePosition();
      void heroSlides.offsetWidth;
      heroSlides.style.removeProperty("transition");
      return;
    }

    loadHeroSlide(currentHeroSlide + 1);
    const currentSlide = slides[currentHeroSlide];
    const slideDuration = currentSlide instanceof HTMLVideoElement && Number.isFinite(currentSlide.duration)
      ? currentSlide.duration * 1000 + 800
      : 5000;
    heroSlideTimer = window.setTimeout(() => {
      currentHeroSlide += 1;
      updateHeroSlidePosition();

      if (currentHeroSlide === heroMedia.length) {
        heroSlideResetTimer = window.setTimeout(() => {
          heroSlides.style.transition = "none";
          currentHeroSlide = 0;
          updateHeroSlidePosition();
          void heroSlides.offsetWidth;
          heroSlides.style.removeProperty("transition");
          startHeroSlideshow();
        }, 800);
      } else {
        startHeroSlideshow();
      }
    }, slideDuration);
  };

  loadHeroSlide(0);
  startHeroSlideshow();
  reducedMotion.addEventListener("change", startHeroSlideshow);
  window.addEventListener("resize", () => {
    heroSlides.style.transition = "none";
    updateHeroSlidePosition();
    void heroSlides.offsetWidth;
    heroSlides.style.removeProperty("transition");
  });
}

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// فلترة الأطباق
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".food-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    cards.forEach(card => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.category !== filter
      );
    });
  });
});

// زر "طلب" داخل كل بطاقة
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const item = translate(button.dataset.item, currentLanguage);
    document.getElementById("item").value = item;
    document.getElementById("orderForm").scrollIntoView({ behavior: "smooth" });

    toast.textContent = interfaceMessages[currentLanguage].selected(item);
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  });
});

// إرسال الطلب إلى واتساب
document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const item = document.getElementById("item").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone) {
    alert(interfaceMessages[currentLanguage].invalidForm);
    return;
  }

  const messages = interfaceMessages[currentLanguage];
  const text = `${messages.whatsappIntro(name)}
${item}

${messages.itemLabel} ${phone}
${messages.detailsLabel}
${message || messages.noDetails}

${messages.thanks}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

const reviewForm = document.getElementById("reviewForm");
const reviewComment = document.getElementById("reviewComment");
const reviewMessages = {
  ar: {
    invalidComment: "عافاك كتب تعليق قبل ما تصيفط التقييم.",
    title: "تقييم جديد من موقع Chez Délice Ilham",
    name: "الاسم",
    anonymous: "بدون اسم",
    rating: "التقييم",
    comment: "التعليق"
  },
  en: {
    invalidComment: "Please write a comment before sending your review.",
    title: "New review from the Chez Délice Ilham website",
    name: "Name",
    anonymous: "Anonymous",
    rating: "Rating",
    comment: "Comment"
  },
  fr: {
    invalidComment: "Veuillez écrire un commentaire avant d'envoyer votre avis.",
    title: "Nouvel avis du site Chez Délice Ilham",
    name: "Nom",
    anonymous: "Anonyme",
    rating: "Note",
    comment: "Commentaire"
  },
  de: {
    invalidComment: "Bitte schreiben Sie einen Kommentar, bevor Sie Ihre Bewertung senden.",
    title: "Neue Bewertung von der Website Chez Délice Ilham",
    name: "Name",
    anonymous: "Anonym",
    rating: "Bewertung",
    comment: "Kommentar"
  }
};

reviewComment.addEventListener("input", () => reviewComment.setCustomValidity(""));
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!reviewForm.reportValidity()) return;

  const comment = reviewComment.value.trim();
  if (!comment) {
    reviewComment.setCustomValidity(reviewMessages[currentLanguage].invalidComment);
    reviewComment.reportValidity();
    return;
  }

  const messages = reviewMessages[currentLanguage];
  const name = document.getElementById("reviewName").value.trim() || messages.anonymous;
  const rating = new FormData(reviewForm).get("rating");
  const text = `${messages.title}
${messages.name}: ${name}
${messages.rating}: ${rating}/5
${messages.comment}:
${comment}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const reviewWindow = window.open(url, "_blank");

  if (reviewWindow) {
    reviewWindow.opener = null;
  } else {
    window.location.assign(url);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
