/* LIVA – menu data. Edit prices and dishes here; the website updates automatically.
   Item format: I(name, description NL, description EN, price, tag "V" | "VN" | "NH" (not halal) | "", name EN (optional))
   A price can be a number, a text like "+1", or a list for several sizes, e.g. [5.5, 26.5] for glass / bottle.
   Section options: open: true  → open by default (currently all closed) · featured: true → highlighted (used for the grill). */
const I = (n, dn, de, p, t, ne) => ({ n, ne: ne || n, dn: dn || "", de: de || dn || "", p, t: t || "" });
const GB = { nl: ["glas", "fles"], en: ["glass", "bottle"] };

const MENU = [
  /* ───────────────────────── BREAKFAST & LUNCH ───────────────────────── */
  {
    id: "lunch",
    label: { nl: "Ontbijt & lunch", en: "Breakfast & lunch" },
    intro: { nl: "Een goed begin van de dag, en een lunch die je bijblijft.", en: "A great start to the day, and a lunch to remember." },
    sections: [
      { t: { nl: "Ontbijt bij LIVA", en: "Breakfast club" }, items: [
        I("LIVA breakfast", "zuurdesembrood · gebakken ei · ham · kaas · yoghurt · croissant · jam · boter · jus d'orange", "sourdough bread · fried egg · ham · cheese · yoghurt · croissant · jam · butter · jus d'orange", 16.5, "NH"),
        I("Turks ontbijt", "turks brood · tomaat · peterselie · feta · olijven · sucuk · gekookt ei · padrón pepers · komkommer", "homemade turkish bread · tomato · feta · olives · sucuk · boiled egg · padrón peppers · cucumber", 16.5, "", "Turkish breakfast"),
        I("Croissant", "dagelijks vers gebakken · jam · boter", "freshly baked daily · jam · butter", 4, "V"),
        I("Yoghurt & granola", "griekse yoghurt · seizoensfruit · granola · honing", "greek yoghurt · seasonal fruit · granola · honey", 8.5, "V"),
      ]},
      { t: { nl: "Ei specials", en: "Egg specials" }, note: { nl: "geserveerd op bruin zuurdesembrood", en: "served on brown sourdough bread" }, items: [
        I("Roerei · spiegelei · omelet", "extra kaas +2,5 · sucuk +3,5 · spinazie +2 · tomaat +2 · ham +2,5 · bacon +3 (ham & bacon niet halal)", "add cheese +2.5 · sucuk +3.5 · spinach +2 · tomato +2 · ham +2.5 · crispy bacon +3 (ham & bacon not halal)", 8.5, "V", "Scrambled · fried · omelet"),
        I("Shakshuka", "spicy tomatensaus · gepocheerd ei · ui · geroosterde paprika · knoflook", "spicy tomato sauce · poached egg · roasted bell pepper · garlic · onion", 12),
        I("Menemen", "roerei · tomaat · verse kruiden · groene paprika · extra sucuk +3,5 · feta +2,5", "scrambled egg · tomato · herbs · green bell pepper · add sucuk +3.5 · feta +2.5", 12),
      ]},
      { t: { nl: "Sandwiches", en: "Sandwiches" }, note: { nl: "geserveerd op bruin zuurdesembrood", en: "served on brown sourdough bread" }, items: [
        I("Kroketten", "2 rundvleeskroketten · mosterd", "2 beef croquettes · mustard", 11.5, "", "Beef croquettes"),
        I("Truffelkroketten", "2 truffel-paddenstoelenkroketten · truffelmayo", "2 truffle-mushroom croquettes · truffle mayonnaise", 11.5, "V", "Truffle croquettes"),
        I("Carpaccio", "rundvlees · truffel · parmezaan · rucola · pijnboompitten", "thinly sliced beef · truffle · parmesan · rucola · pine nuts", 14),
        I("Crispy humus", "gegrilde groenten · humus · gezuurde rode kool · krokante paddenstoelen", "grilled vegetables · humus · crispy mushrooms · pickled red cabbage", 12.5, "VN"),
        I("Smashed avocado", "tomaat · rode ui · avocado · citroen · chilivlokken · extra kip +4 · zalm +4 · ei +2,5 · bacon +3 (niet halal)", "tomato · red onion · avocado · lemon · chili flakes · add chicken +4 · smoked salmon +4 · fried egg +2.5 · bacon +3 (not halal)", 12, "VN"),
        I("BLTC", "gegrilde kip · bacon · sla · tomaat · kaas · honing-mosterdsaus · extra friet +3 · truffelfriet +4,5", "grilled chicken · bacon · lettuce · tomato · cheese · honey-mustard sauce · add fries +3 · truffle fries +4.5", 14, "NH"),
        I("Balık ekmek", "gegrilde zeebaars · sla · rode ui · citroen · peterselie · op huisgemaakt turks brood", "grilled sea bass · lettuce · red onion · lemon · parsley · on homemade turkish bread", 16),
      ]},
      { t: { nl: "Flatbread", en: "Flatbread" }, items: [
        I("Philly cheesesteak", "mals rundvlees · cheddar · paprika · gebakken ui", "tender beef · cheddar · bell pepper · sautéed onions", 16),
        I("LIVA falafel", "humus · komkommer · falafel · tahini · rode kool", "humus · cucumber · falafel · tahini · red cabbage", 14, "VN"),
        I("Pulled chicken", "langzaam gegaarde kip · rode ui · koolsalade · geroosterde paprika · spicy liva saus", "slow-cooked chicken · red onion · fresh coleslaw · roasted bell pepper · spicy liva sauce", 14),
        I("Köfte Anatolian", "gehaktballen · spicy tomatensaus · knoflookyoghurt", "meatballs · spicy tomato sauce · garlic yoghurt", 15),
      ]},
      { t: { nl: "Tosti's", en: "Toasties" }, note: { nl: "op huisgemaakt brood", en: "on homemade bread" }, items: [
        I("Kaas", "gele kaas · ketchup", "yellow cheese · ketchup", 7.5, "V", "Cheese"),
        I("Ham", "ham · gele kaas · ketchup", "ham · yellow cheese · ketchup", 8.5, "NH"),
        I("Salami", "sucuk · gele kaas · ketchup", "sucuk · yellow cheese · ketchup", 9),
        I("Pulled chicken", "langzaam gegaarde kip · cheddar · spicy liva saus", "slow-cooked chicken · cheddar · spicy liva sauce", 10),
      ]},
      { t: { nl: "Soepen", en: "Soups" }, items: [
        I("Mercimek", "rode linzen · aardappel · boter · gepureerd", "red lentils · potato · butter · puréed", 7, "V"),
        I("Tavuk", "pulled chicken · groenten · vermicelli", "pulled chicken · vegetables · vermicelli", 8),
        I("Soep van de dag", "vraag naar onze dagspecialiteit", "ask about our daily special", 7, "", "Soup of the day"),
      ]},
      { t: { nl: "Salades", en: "Salads" }, items: [
        I("Caesar salad", "romaine · kip · parmezaan · gekookt ei · ansjovis · klassieke caesardressing", "romaine lettuce · chicken · parmesan · boiled egg · anchovies · classic caesar dressing", 16.5),
        I("Kleine herdersalade", "fijngesneden sla · tomaat · peterselie · komkommer · extra falafel +3 · feta +2,5 · kip +4 · tonijn +3,5", "finely chopped salad · tomato · parsley · cucumber · add falafel +3 · feta +2.5 · chicken +4 · tuna +3.5", 9.5, "VN", "Small shepherd's salad"),
      ]},
    ],
  },

  /* ───────────────────────── DINNER ───────────────────────── */
  {
    id: "dinner",
    label: { nl: "Diner", en: "Dinner" },
    intro: { nl: "Van de grill, uit de oven, uit onze pasta club en meze om te delen.", en: "From the grill, from the oven, from our pasta club and meze to share." },
    sections: [
      { featured: true, t: { nl: "Van de grill", en: "From the grill" }, note: { nl: "geserveerd met rijst en salade", en: "served with rice and salad" }, items: [
        I("LIVA grill", "köfte · kippendij · kipspies · lamskotelet", "köfte · chicken thighs · chicken skewers · lamb cutlet", 32.5),
        I("Köfte", "rundergehaktballen · mild gekruid", "beef meatballs · mildly spiced", 25),
        I("Kippendijen", "gemarineerde kippendijen · ui · verse kruiden", "marinated chicken thighs · onion · herbs", 25.5, "", "Chicken thighs"),
        I("Lamskoteletten", "kruidenmix van de chef · aan het bot", "chef's marinade · served on the bone", 30, "", "Lamb cutlets"),
        I("Zalm", "verse zalmfilet · dille · citroen", "fresh salmon fillet · dill · lemon", 25, "", "Salmon"),
        I("Zeebaars", "gefileerd · mediterrane kruiden", "filleted · mediterranean herbs", 27.5, "", "Sea bass"),
        I("Cauliflower steak", "steak-stijl bloemkool · knoflook · parmezaan · kruidenboter · citroen", "steak-style cauliflower · garlic · parmesan · herb butter · lemon", 16.5, "V"),
      ]},
      { t: { nl: "Uit de oven", en: "Oven dishes" }, note: { nl: "geserveerd met rijst en salade", en: "served with rice and salad" }, items: [
        I("İmam bayıldı", "gevulde aubergine · paprika · bloemkool · broccoli · tomaat · ui · knoflook", "stuffed eggplant · bell pepper · cauliflower · broccoli · tomato · onion · garlic", 23, "V"),
        I("Creamy gambaschotel", "grote scampi · knoflook · room · ui", "prawns · garlic · cream · onion", 28, "", "Creamy prawn casserole"),
        I("Tavuk güveç", "malse kip · champignons · tomaat · kaas", "tender chicken · mushrooms · tomato · cheese", 24.5),
        I("Chef's special", "vraag naar onze dagspecialiteit", "ask about our daily special", "d.p."),
      ]},
      { t: { nl: "Classic comforts", en: "Classic comforts" }, note: { nl: "geserveerd met krokante friet en salade", en: "served with crispy fries and salad" }, items: [
        I("Hollandse biefstuk", "in de pan gebakken · romige pepersaus", "pan-seared · creamy peppercorn sauce", 26, "", "Dutch beef steak"),
        I("Kipsaté", "kipspiesen · kroepoek · pindasaus · krokante ui", "chicken skewers · prawn crackers · peanut sauce · crispy onions", 25, "", "Chicken satay"),
        I("Huisgemaakte hamburger", "runderburger · cheddar · ui · augurk · sla", "beef patty · cheddar · onion · pickles · lettuce", 21, "", "Homemade hamburger"),
      ]},
      { t: { nl: "The pasta club", en: "The pasta club" }, items: [
        I("Tagliatelle chicken alfredo", "gegrilde kip · spinazie · room · knoflook · champignons", "chicken · spinach · cream · garlic · mushroom", 23),
        I("Penne alla vodka", "romige tomaten-vodkasaus · parmezaan · chili", "creamy tomato and vodka sauce · parmesan · chili", 18.5, "V"),
        I("Lasagna bolognese", "bechamel · bolognesesaus · mozzarella", "béchamel · bolognese sauce · mozzarella", 19.5),
        I("Ravioli al tartufo", "truffel-paddenstoelenravioli · parmezaan · truffelolie · zwarte peper · tijm", "truffle-mushroom ravioli · parmesan · truffle oil · black pepper · thyme", 20.5, "V"),
      ]},
      { t: { nl: "Salades", en: "Salads" }, items: [
        I("Caesar salad", "romaine · kip · parmezaan · gekookt ei · ansjovis · caesardressing", "romaine lettuce · chicken · parmesan · boiled egg · anchovies · caesar dressing", 17),
        I("Smoked salmon", "bladsla · rode biet · gerookte zalm · avocado", "mixed salad · beetroot · smoked salmon · avocado", 18.5),
        I("Kleine herdersalade", "fijngesneden sla · tomaat · peterselie · komkommer · extra falafel +3 · feta +2,5 · kip +4 · tonijn +3,5", "finely chopped salad · tomato · parsley · cucumber · add falafel +3 · feta +2.5 · chicken +4 · tuna +3.5", 9.5, "VN", "Small shepherd's salad"),
      ]},
      { t: { nl: "Soepen", en: "Soups" }, items: [
        I("Mercimek", "rode linzen · aardappel · boter · gepureerd", "red lentils · potato · butter · puréed", 7, "V"),
        I("Tavuk", "pulled chicken · groenten · vermicelli", "pulled chicken · vegetables · vermicelli", 8),
        I("Soep van de dag", "vraag naar onze dagspecialiteit", "ask about our daily special", 7, "", "Soup of the day"),
      ]},
      { t: { nl: "Meze tasting", en: "Meze tasting" }, note: { nl: "een zorgvuldig samengestelde selectie van onze favoriete meze, perfect om te delen", en: "a carefully curated selection of our favourite meze, perfect for sharing" }, items: [
        I("LIVA proeverij · 1 persoon", "3 koude & 2 warme bites", "3 cold & 2 warm bites", 19.5, "", "LIVA tasting · 1 person"),
        I("LIVA proeverij · 2 personen", "6 koude & 4 warme gerechtjes om samen te delen", "6 cold & 4 warm bites to share together", 38, "", "LIVA tasting · 2 persons"),
        I("Rakı meze · 1 persoon", "kies 3 meze + 1 glas rakı", "choose 3 meze + 1 glass of rakı", 15, "", "Rakı meze · 1 person"),
        I("Rakı meze · 2 personen", "kies 5 meze + 1 fles rakı (35 cl)", "choose 5 meze + 1 bottle of rakı (35 cl)", 60, "", "Rakı meze · 2 persons"),
        I("Jij kiest, wij serveren", "feta · humus · meloen · tzatziki · noten · ezme · brood · rode biet · olijven", "feta · humus · melon · tzatziki · nuts · ezme · bread · beetroot · olives", "", "", "You choose, we serve"),
      ]},
      { t: { nl: "Koude bites", en: "Cold bites" }, items: [
        I("Antep ezme", "pittige tomatensalsa · verse munt · paprika", "spicy tomato salsa · fresh mint · bell pepper", 7.9, "VN"),
        I("Çerkez tavuğu", "romige kipmeze · walnoot · yoghurt · knoflook", "creamy chicken meze · walnut · yoghurt · garlic", 9.5),
        I("Tzatziki", "griekse yoghurt · komkommer · knoflook", "greek yoghurt · cucumber · garlic", 7.5, "V"),
        I("Humus", "kikkererwten · tahin · citroen · olijfolie", "chickpeas · tahini · lemon · olive oil", 7.9, "VN"),
        I("Şakşuka", "gestoofde aubergine · paprika · knoflook", "slow-cooked eggplant · bell pepper · garlic", 8.5, "VN"),
        I("Truffle carpaccio", "ossenhaas · truffeldressing · parmezaan", "tenderloin · truffle dressing · parmesan", 14.5),
        I("Bread & dips", "huisgemaakt brood · olijfolie · kruidenboter", "homemade bread · olive oil · herb butter", 6, "V"),
      ]},
      { t: { nl: "Warme bites", en: "Warm bites" }, items: [
        I("Crispy sigara", "feta · peterselie · krokant filodeeg", "feta · parsley · crispy filo pastry", 7.9, "V"),
        I("LIVA wings", "gegrilde kippenvleugeltjes · buffalo saus", "grilled chicken wings · buffalo sauce", 9),
        I("Calamares a la romana", "krokante inktvisringen · citroen · aioli", "crispy squid rings · lemon · aioli dip", 11.5),
        I("İçli köfte", "bulgurbollen · gekruid gehakt · walnoten", "stuffed bulgur · seasoned minced meat · walnut", 10),
        I("Gambas al ajillo", "gebakken scampi · rode peper · knoflook · olijfolie", "sautéed prawns · garlic oil · red chili · parsley", 13.5),
        I("Albóndigas", "spaanse gehaktballen · mozzarella · tomatensaus", "spanish meatballs · mozzarella · tomato sauce", 8.5),
        I("Padrón pepers", "milde groene pepers · zeezout · olijfolie", "mild green peppers · sea salt · olive oil", 7.5, "VN", "Padrón peppers"),
      ]},
    ],
  },

  /* ───────────────────────── BORREL BITES ───────────────────────── */
  {
    id: "bites",
    label: { nl: "Snacks", en: "Snacks" },
    intro: { nl: "Voor bij een koud biertje, een spritz of een glas wijn.", en: "Perfect with a cold beer, a spritz or a glass of wine." },
    sections: [
      { t: { nl: "Warme bites", en: "Warm bites" }, items: [
        I("Bitterballen", "rundvleesbitterballen · mosterd", "beef bitterballen · mustard", 8),
        I("Calamares", "krokante inktvisringen · aioli · citroen", "crispy squid rings · aioli · lemon", 11.5),
        I("Kaastengels", "oude kaas · sweet chilisaus", "aged cheese · sweet chili sauce", 8, "V", "Cheese rolls"),
        I("Karaage chicken", "krokante kip · spicy liva saus", "crispy chicken · spicy liva sauce", 11),
        I("Gyoza shrimp", "garnalendumplings · sweet soya", "shrimp dumplings · sweet soy", 9.5),
        I("Vega loempia", "groenteloempia's · sweet chilisaus", "vegetable spring rolls · sweet chili sauce", 7.5, "VN"),
        I("Fried cauliflower", "krokante bloemkool · truffelmayo", "crispy cauliflower · truffle mayo", 9.5, "V"),
        I("Crispy fries", "verse friet · mayonaise", "fresh fries · mayonnaise", 5.5, "V"),
        I("Truffle fries", "verse friet · truffelolie · parmezaan · truffelmayo", "fresh fries · truffle oil · parmesan · truffle mayo", 7.5, "V"),
      ]},
      { t: { nl: "Koude bites", en: "Cold bites" }, items: [
        I("Notenmix", "geroosterde notenmelange", "roasted mixed nuts", 4.5, "VN", "Mixed nuts"),
        I("Marinated olives", "groene olijven · knoflook · kruiden", "green olives · garlic · herbs", 5, "VN"),
        I("Sardines picante", "sardines in olijfolie · chili · citroen", "sardines in olive oil · chili · lemon", 7),
        I("Feta & zo", "romige feta · oregano · citroen", "creamy feta · oregano · lemon", 6.5, "V", "Feta & co"),
      ]},
      { t: { nl: "Om te delen", en: "To share" }, items: [
        I("Trio of meze", "ezme · tzatziki · humus · vers brood", "ezme · tzatziki · humus · fresh bread", 12.5, "V"),
        I("LIVA snackplateau", "16 stuks · mix van onze frituurgerechten", "16 pieces · a mix of our fried bites", 18.5, "", "LIVA snack platter"),
      ]},
    ],
  },

  /* ───────────────────────── DESSERTS ───────────────────────── */
  {
    id: "desserts",
    label: { nl: "Desserts", en: "Desserts" },
    intro: { nl: "Een zoete afsluiter, of iets lekkers bij de koffie.", en: "A sweet finish, or something nice with your coffee." },
    sections: [
      { t: { nl: "Desserts", en: "Desserts" }, items: [
        I("Classic tiramisu", "koffie · lange vingers · mascarpone · cacao", "coffee · ladyfingers · mascarpone · cacao", 6.5),
        I("Dame blanche", "vanille-ijs · slagroom · chocoladesaus", "vanilla ice cream · whipped cream · chocolate sauce", 7.5),
        I("Affogato", "shotje espresso · pistachecrumble · vanille-ijs", "shot of espresso · pistachio crumble · vanilla ice cream", 7),
        I("Pera al vino tinto", "stoofpeer · glühwein · steranijs · walnoten", "poached pear · mulled wine · star anise · walnuts", 8.5),
        I("Lava cake", "warme chocoladetaart · zachte vloeibare kern", "warm chocolate cake · soft molten centre", 8.5),
        I("Holtkamp cheesecake", "rood fruit cheesecake · bolletje ijs", "red fruit cheesecake · scoop of ice cream", 8),
        I("Huisgemaakte baklava", "filodeeg · walnoten · boter · bolletje ijs", "filo pastry · walnuts · butter · scoop of ice cream", 7.5, "", "Homemade baklava"),
        I("Gelato", "vanille · chocolade · aardbei · citroen", "vanilla · chocolate · strawberry · lemon", 3),
      ]},
      { t: { nl: "Bij de koffie", en: "With your coffee" }, items: [
        I("Kruimige appeltaart", "", "", 6, "", "Crumbly apple pie"),
        I("Cheesecake rood fruit", "", "", 6, "", "Red fruit cheesecake"),
        I("Taart van de week", "", "", 6, "", "Cake of the week"),
        I("Huisgemaakte baklava", "", "", 7.5, "", "Homemade baklava"),
      ]},
    ],
  },

  /* ───────────────────────── KIDS ───────────────────────── */
  {
    id: "kids",
    label: { nl: "LIVA Kids", en: "LIVA Kids" },
    intro: { nl: "Ons kindermenu, voor de kleine gasten.", en: "Our kids' menu, for our youngest guests." },
    sections: [
      { t: { nl: "Lunch", en: "Lunch" }, items: [
        I("Eitje", "met een bammetje · keuze uit: gebakken ei · omelet · roerei", "on toast · choose from: fried egg · omelet · scrambled", 5, "V", "Egg your way"),
        I("Kids tosti", "gele kaas · ketchup", "yellow cheese · ketchup", 5, "V", "Kids toastie"),
        I("Broodje kroket", "bammetje · runderkroket of truffelkroket", "slice of bread · beef or truffle croquette", 6, "", "Croquette on bread"),
        I("Bammetje", "keuze uit: nutella · jam · kaas · pindakaas", "choose from: nutella · jam · cheese · peanut butter", 3, "V", "Bread & spread"),
      ]},
      { t: { nl: "Diner", en: "Dinner" }, items: [
        I("LIVA Kids menu", "friet · komkommer · tomaat · ketchup · keuze uit: krokante kip · kroket · kaastengels", "fries · cucumber · tomato · ketchup · choose from: crispy chicken · croquette · cheese sticks", 10),
        I("Penne of tagliatelle", "keuze uit: marinara · bolognese · boter", "choose from: marinara · bolognese · butter", 9.5, "V", "Penne or tagliatelle"),
        I("Lasagnaatje", "bechamel · bolognesesaus · mozzarella", "béchamel · bolognese sauce · mozzarella", 9.5, "", "Mini lasagna"),
        I("Fish & rice", "gebakken zeebaars · rijst · komkommer · tomaat", "baked sea bass · rice · cucumber · tomato", 12.5),
      ]},
      { t: { nl: "Toetje", en: "Dessert" }, items: [
        I("Yoghurt met fruit", "griekse yoghurt · seizoensfruit", "greek yoghurt · seasonal fruit", 5.5, "", "Yoghurt with fruit"),
        I("Dame blanche", "vanille-ijs · slagroom · chocoladesaus", "vanilla ice cream · whipped cream · chocolate sauce", 7.5),
        I("Appeltaartje", "kruimige appeltaart · slagroom", "crumbly apple pie · whipped cream", 6, "", "Apple pie"),
        I("Bol ijs", "keuze uit: vanille · chocolade · aardbei · citroen", "choose from: vanilla · chocolate · strawberry · lemon", 3, "", "Scoop of ice cream"),
      ]},
    ],
  },

  /* ───────────────────────── DRINKS ───────────────────────── */
  {
    id: "drinks",
    label: { nl: "Drankjes", en: "Drinks" },
    intro: { nl: "Koffie, huisgemaakte limonades, cocktails, speciaalbier en natuurlijk rakı.", en: "Coffee, homemade lemonades, cocktails, craft beer and of course rakı." },
    sections: [
      { t: { nl: "Koffie & thee", en: "Coffee & tea" }, groups: [
        { t: { nl: "Koffie", en: "Coffee" }, items: [
          I("Espresso", "", "", 3), I("Koffie", "", "", 3.5, "", "Coffee"), I("Doppio", "", "", 4),
          I("Espresso macchiato", "", "", 3.7), I("Cortado", "", "", 3.7), I("Flat white", "", "", 4.6),
          I("Latte macchiato", "", "", 4.4), I("Cappuccino", "", "", 4),
        ]},
        { t: { nl: "Specials", en: "Specials" }, items: [
          I("Iced latte", "", "", 4.9), I("Cold brew", "met zelfgemaakte cold foam +1", "with homemade cold foam +1", 4),
          I("Warme chocolademelk", "met slagroom +0,5", "with whipped cream +0.5", 4, "", "Hot chocolate"),
        ]},
        { t: { nl: "Thee & matcha", en: "Tea & matcha" }, items: [
          I("Losse thee van T's", "earl grey · green jasmine · al 'coco' mond · white berry", "earl grey · green jasmine · al 'coco' mond · white berry", 3.9, "", "Loose-leaf tea by T's"),
          I("Munt- of gemberthee", "", "", 4, "", "Fresh mint or ginger tea"),
          I("Chai latte", "maak het 'dirty' +1,5", "make it 'dirty' +1.5", 4.5),
          I("Matcha latte", "", "", 5),
          I("Iced matcha latte", "mango · strawberry · vanilla +0,5", "mango · strawberry · vanilla +0.5", 5.5),
        ]},
      ]},
      { t: { nl: "Fris & limonade", en: "Soft drinks & lemonade" }, groups: [
        { t: { nl: "LIVA lemonade", en: "LIVA lemonade" }, note: { nl: "huisgemaakt", en: "homemade" }, items: [
          I("Classic lemon", "", "", 4.5), I("Strawberry & mint", "", "", 5), I("Hibiscus & rose", "", "", 5.5),
          I("Ginger & lemongrass", "", "", 5.5), I("Mango & passion fruit", "", "", 6),
        ]},
        { t: { nl: "Frisdranken", en: "Soft drinks" }, items: [
          I("Coca-Cola · Coca-Cola Zero", "", "", 3.9), I("Fanta orange · Fanta cassis", "", "", 3.9), I("Sprite", "", "", 3.9),
          I("Lipton ice tea sparkling · green", "", "", 3.9), I("Fristi · Chocomel", "", "", 4), I("Red Bull", "", "", 5),
        ]},
        { t: { nl: "Water & sappen", en: "Water & juices" }, items: [
          I("Spa blauw · Spa rood", "", "", 3.9, "", "Spa still · sparkling"),
          I("Spa blauw · Spa rood 0,75 l", "", "", 7.8, "", "Spa still · sparkling 0.75 l"),
          I("Jus d'orange", "", "", 5), I("Appelsap · perensap", "", "", 4, "", "Apple · pear juice"), I("Big Tom tomatensap", "", "", 4.5, "", "Big Tom tomato juice"),
        ]},
        { t: { nl: "Fever-Tree", en: "Fever-Tree" }, items: [
          I("Indian tonic · Sicilian lemonade", "", "", 4.5), I("Ginger ale · Ginger beer", "", "", 4.5),
          I("Pink grapefruit · Elderflower tonic", "", "", 4.5), I("Raspberry & rhubarb tonic", "", "", 4.5),
        ]},
      ]},
      { t: { nl: "Bier", en: "Beer" }, groups: [
        { t: { nl: "Van de tap", en: "On tap" }, cols: { nl: ["klein", "groot"], en: ["small", "large"] }, items: [
          I("Heineken", "pilsener · 5% · 25 / 50 cl", "pilsner · 5% · 25 / 50 cl", [4.2, 8]),
          I("Affligem blond", "blond · zacht · 6,7% · 30 / 50 cl", "blonde · smooth · 6.7% · 30 / 50 cl", [6.2, 10]),
          I("Texelse Skuumkoppe", "tarwebier · vol & romig · 6% · 30 / 50 cl", "wheat beer · full & creamy · 6% · 30 / 50 cl", [6.2, 10]),
          I("Brouwerij 't IJ IJwit", "witbier · verfrissend · 6,5% · 30 / 50 cl", "white beer · refreshing · 6.5% · 30 / 50 cl", [6.5, 10]),
          I("Eeuwige Jeugd Gladjanus", "IPA · hoppig · 5,2% · 30 / 50 cl", "IPA · hoppy · 5.2% · 30 / 50 cl", [6.5, 10]),
          I("Wisseltap", "vraag het aan ons team", "ask our team", [6.2, 10], "", "Rotating tap"),
        ]},
        { t: { nl: "Pitchers · 1,5 l", en: "Pitchers · 1.5 l" }, items: [
          I("Heineken pitcher", "pilsener · 5%", "pilsner · 5%", 22.5),
          I("Speciaalbier pitcher", "speciaalbier van de tap naar keuze", "craft beer from the tap of your choice", 30, "", "Craft beer pitcher"),
        ]},
        { t: { nl: "Op fles", en: "Bottled" }, items: [
          I("La Chouffe", "belgisch blond · kruidig · 8%", "belgian blonde · spicy · 8%", 6.2),
          I("Eeuwige Jeugd Lellebel", "fruitig blond · zachte bitter · 5,7%", "fruity blonde · soft bitter · 5.7%", 6.5),
          I("Eeuwige Jeugd Bullebak", "weizen meets tripel · 7,2%", "weizen meets tripel · 7.2%", 6.5),
          I("Brouwerij 't IJ IPA", "blond, fruitig & bitter · 6,5%", "blonde, fruity & bitter · 6.5%", 6.4),
          I("Brouwerij 't IJ Zatte", "kruidige tripel · stevig · 8%", "spicy tripel · strong · 8%", 6.4),
          I("Apple Bandit", "cider · fris & licht droog · 4,5%", "cider · fresh & lightly dry · 4.5%", 6),
          I("Liefmans Fruitesse", "fruitbier · on the rocks · 3,8%", "fruit beer · on the rocks · 3.8%", 5.5),
          I("Corona Extra", "mexicaans pilsbier · limoen · 4,5%", "mexican lager · lime · 4.5%", 6.2),
        ]},
        { t: { nl: "Alcoholvrij", en: "Alcohol-free" }, items: [
          I("Heineken 0.0", "pilsener · 0,0%", "pilsner · 0.0%", 4),
          I("Affligem blond 0.0", "0,0%", "0.0%", 6),
          I("Brouwerij 't IJ Vrijwit", "0,5%", "0.5%", 6.2),
        ]},
      ]},
      { t: { nl: "Cocktails", en: "Cocktails" }, groups: [
        { t: { nl: "Signatures · 13,5", en: "Signatures · 13.5" }, items: [
          I("Rose garden", "sir edmond gin · verse citroen · eiwit · rozenblaadjes · rozensiroop", "sir edmond gin · fresh lemon · egg white · rose petals · rose syrup", ""),
          I("El diablo", "jameson irish whiskey · fever-tree ginger ale · limoensap · hibiscus", "jameson irish whiskey · fever-tree ginger ale · lime juice · hibiscus", ""),
          I("Sicilian vodka", "premium vodka · limoncello · fever-tree sicilian lemonade · citroen", "premium vodka · limoncello · fever-tree sicilian lemonade · lemon", ""),
          I("Mojito", "bacardi · munt · bruiswater · suikersiroop · verse limoen", "bacardi · mint · soda · sugar syrup · fresh lime", ""),
          I("Amaretto sour", "adriatico amaretto · verse citroen · eiwit · angostura bitters", "adriatico amaretto · fresh lemon · egg white · angostura bitters", ""),
        ]},
        { t: { nl: "Classics · 12,5", en: "Classics · 12.5" }, items: [
          I("Espresso martini", "premium vodka · suikersiroop · tia maria · espresso · koffiebonen", "premium vodka · sugar syrup · tia maria · espresso · coffee beans", ""),
          I("Pornstar martini", "premium vodka · eiwit · vanille · passievruchtpuree · passievrucht", "premium vodka · egg white · vanilla · passion fruit purée · passion fruit", ""),
          I("Paloma", "tequila reposado · limoensap · grapefruit lemonade · grapefruit", "tequila reposado · lime juice · grapefruit lemonade · grapefruit", ""),
        ]},
        { t: { nl: "Spritz XL · 12", en: "Spritz XL · 12" }, items: [
          I("Aperol spritz", "aperol aperitivo · prosecco · bruiswater · sinaasappel", "aperol aperitivo · prosecco · soda · orange", ""),
          I("LIVA spritz", "fever-tree pink grapefruit · prosecco · bruiswater · grapefruit", "fever-tree pink grapefruit · prosecco · soda · grapefruit", ""),
          I("Hugo spritz", "vlierbloesemlikeur · prosecco · verse munt · bruiswater · limoen", "elderflower liqueur · prosecco · fresh mint · soda · lime", ""),
          I("Autumn spritz", "citroengras-gembersiroop · prosecco · appelsap · bruiswater", "lemongrass & ginger syrup · prosecco · apple juice · soda", ""),
        ]},
        { t: { nl: "Gin & tonic · 13,5", en: "Gin & tonic · 13.5" }, items: [
          I("Sir Edmond", "sir edmond gin · fever-tree indian tonic · sinaasappel · koffiebonen", "sir edmond gin · fever-tree indian tonic · orange · coffee beans", ""),
          I("Hendrick's", "hendrick's gin · komkommer · fever-tree elderflower tonic", "hendrick's gin · cucumber · fever-tree elderflower tonic", ""),
        ]},
        { t: { nl: "Mocktails · 10", en: "Mocktails · 10" }, items: [
          I("Amaretto sour", "adriatico amaretto 0.0 · eiwit · citroen", "adriatico amaretto 0.0 · egg white · lemon", ""),
          I("Pornstar martini", "passievruchtpuree · citroen · vanille", "passion fruit purée · lemon · vanilla", ""),
          I("Peachy bellini", "alcoholvrije prosecco · perzik · limoen", "alcohol-free prosecco · peach · lime", ""),
          I("Pink no-secco spritz", "fever-tree pink grapefruit · grapefruit · alcoholvrije prosecco", "fever-tree pink grapefruit · grapefruit · alcohol-free prosecco", ""),
        ]},
      ]},
      { t: { nl: "Rakı & sterk", en: "Rakı & spirits" }, groups: [
        { t: { nl: "Rakı", en: "Rakı" }, cols: { nl: ["glas", "35 cl", "70 cl"], en: ["glass", "35 cl", "70 cl"] }, items: [
          I("Yeni rakı", "", "", [6, 40, 75]),
          I("Efe rakı gold", "", "", [7.5, 45, 85]),
          I("Tekirdağ göbek", "", "", [8.5, 55, 95]),
          I("Beylerbeyi göbek", "", "", [8.5, 55, 95]),
        ]},
        { t: { nl: "Likeuren", en: "Liqueurs" }, items: [
          I("Cointreau", "", "", 5.5), I("De Kuyper triple sec · elderflower", "", "", 4.5), I("Limoncello · meloncello", "", "", 4.2),
          I("Aperol · Campari · Jägermeister", "", "", 5), I("Sambuca · Salmari", "", "", 4.2),
          I("Adriatico amaretto · Baileys", "", "", 5), I("Tia Maria · Licor 43", "", "", 4.5),
        ]},
        { t: { nl: "Jenever, vodka & rum", en: "Jenever, vodka & rum" }, items: [
          I("Bols jonge jenever", "", "", 4), I("Bols oude jenever", "", "", 4.5),
          I("Smirnoff No. 21", "", "", 5.5), I("Grey Goose", "", "", 7.4),
          I("Bacardi carta blanca", "", "", 5.5), I("Bacardi carta negra", "", "", 5.9),
        ]},
        { t: { nl: "Whiskey, gin & tequila", en: "Whiskey, gin & tequila" }, items: [
          I("Jameson", "", "", 5.5), I("Jack Daniel's", "", "", 5.9), I("Johnnie Walker Black Label", "", "", 6.8),
          I("Chivas Regal", "", "", 7.5), I("Glenfiddich", "", "", 8),
          I("Sir Edmond gin", "", "", 7.5), I("Hendrick's gin", "", "", 8.5),
          I("Jose Cuervo silver", "", "", 5.5), I("Jose Cuervo reposado", "", "", 6), I("Elemental mezcal", "", "", 7.5),
        ]},
      ]},
    ],
  },

  /* ───────────────────────── WINE ───────────────────────── */
  {
    id: "wine",
    label: { nl: "Wijnkaart", en: "Wine list" },
    intro: { nl: "Op glas of per fles, van Spanje tot Sicilië en Turkije.", en: "By the glass or by the bottle, from Spain to Sicily and Türkiye." },
    sections: [
      { t: { nl: "Wijnen", en: "Wines" }, note: { nl: "per glas of per fles", en: "by the glass or by the bottle" }, groups: [
        { t: { nl: "Wit", en: "White" }, cols: GB, items: [
          I("Verdejo", "El Convertido · Spanje", "El Convertido · Spain", [5.5, 26.5]),
          I("Sauvignon blanc", "Guillaman · Frankrijk", "Guillaman · France", [5.9, 28.5]),
          I("Chardonnay", "Les Petites Cabanes · Frankrijk", "Les Petites Cabanes · France", [6.5, 31]),
          I("Pinot grigio", "Naonis · Italië", "Naonis · Italy", [6.8, 32.5]),
          I("Pinot blanc", "Les Caves de l'Enfer · Frankrijk — vol en sappig met een mooi bittertje", "Les Caves de l'Enfer · France — full-bodied with a pleasant hint of bitterness", ["", 36.5]),
          I("Narince", "Antik Emir · Turkije — verfijnd & vol met frisse aroma's", "Antik Emir · Türkiye — elegant, full & lively aromas", ["", 38]),
          I("Riesling", "Villa Niederberger · Duitsland — fris, zoetzure aanzet en droog in de finale", "Villa Niederberger · Germany — bright, refreshing with a dry finish", ["", 40.2]),
          I("Regaleali bianco", "Tasca Conti d'Almerita · Sicilië — verfrissend, elegant, met lekker wit fruit", "Tasca Conti d'Almerita · Sicily — fresh and elegant, with juicy white fruit", ["", 46.5]),
          I("Albariño", "Martín Códax · Spanje — mineralig, fris en bloemig met een vleugje citrus", "Martín Códax · Spain — crisp & mineral, citrus-fresh with an elegant finish", ["", 49]),
          I("Chardonnay", "Coppola · Verenigde Staten — soepel en rond, niet te zwaar en heel verleidelijk", "Coppola · United States — silky, smooth & seductive", ["", 52.5]),
        ]},
        { t: { nl: "Rood", en: "Red" }, cols: GB, items: [
          I("Tempranillo", "El Convertido · Spanje", "El Convertido · Spain", [5.5, 26.5]),
          I("Merlot", "Limelight · Zuid-Afrika", "Limelight · South Africa", [5.9, 28]),
          I("Montepulciano", "Passofino · Italië", "Passofino · Italy", [7.5, 36]),
          I("Malbec", "Tilia · Argentinië — een soepele afdronk, vol en romig", "Tilia · Argentina — rich & creamy, with a silky finish", ["", 36.5]),
          I("Shiraz", "Antik Emir · Turkije — perfect in balans tussen kruidigheid en rijp fruit", "Antik Emir · Türkiye — ripe fruit and warming spice, beautifully balanced", ["", 38]),
          I("Pinot noir", "Bis by Biscaye · Frankrijk — fruitig, aromatisch & kruidig met zachte tannines", "Bis by Biscaye · France — fruity, aromatic & spicy with soft tannins", ["", 38.5]),
          I("Nero d'Avola", "Tasca Conti d'Almerita · Sicilië — een stevige smaak vol zuidelijke kruiden", "Tasca Conti d'Almerita · Sicily — bold, with rich mediterranean spices", ["", 46.5]),
          I("Reserva superior", "Gran Marius · Spanje — zeer krachtig, maar warm en zwoel", "Gran Marius · Spain — powerful, warm & velvety", ["", 47.5]),
          I("Cabernet sauvignon", "Coppola · Verenigde Staten — vol, rijk & stevig met fijne tonen van vanille", "Coppola · United States — rich & full-bodied, with delicate vanilla notes", ["", 52.5]),
        ]},
        { t: { nl: "Rosé, bubbels & zoet", en: "Rosé, bubbles & sweet" }, cols: GB, items: [
          I("Pinot grigio blush", "Naonis · Italië", "Naonis · Italy", [6, 28]),
          I("Cava", "A la Puerta del Barrio · Spanje", "A la Puerta del Barrio · Spain", [6.5, 31]),
          I("Prosecco", "Naonis · Italië", "Naonis · Italy", [7, 34]),
          I("Moscato", "Deakin Estate · Australië", "Deakin Estate · Australia", [5.8, 27.5]),
        ]},
      ]},
    ],
  },
];
