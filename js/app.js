const P1 = "img/p1.jpg";
const P2 = "img/p2.jpg";
const P3 = "img/p3.jpg";
const P4 = "img/p4.jpg";
const P5 = "img/p5.jpg";
const P6 = "img/p6.jpg";

const ANCHAN_PERSIK_MANGO = "img/anchan_persik_mango.webp";
const ANCHAN_CHERNIROY = "img/anchan_s_chernikoy.webp";
const MATCHA_KLUBNIKA = "img/klubnikaz_matcha.webp";
const MATCHA_KIVI = "img/kivi-matcha.webp";
const CHAY_MANGO_MARAKUYA = "img/chay_mango_marakuya.webp";
const CHAY_OBLEPIKHOVIY = "img/chay_oplepixoviy.webp";
const CHAY_TRAVYANOY = "img/chay_travyanoy.webp";
const CHAY_YAGODNIY = "img/chay_yagodniy.webp";

// Предзагрузка всех изображений в память для мгновенного переключения без задержек
[
  P1, P2, P3, P4, P5, P6,
  ANCHAN_PERSIK_MANGO, ANCHAN_CHERNIROY, MATCHA_KLUBNIKA, MATCHA_KIVI,
  CHAY_MANGO_MARAKUYA, CHAY_OBLEPIKHOVIY, CHAY_TRAVYANOY, CHAY_YAGODNIY
].forEach(src => {
  const img = new Image();
  img.src = src;
});

const MENU = {
  'breakfasts': [
    { id: 'french_toast', name: { ru: 'Французский тост с ягодами', uz: 'Rezavorli fransuz tosti' }, desc: { ru: 'Нежный тост со свежими ягодами и натуральным сиропом', uz: 'Yangi rezavorlar va tabiiy sirop bilan mayin fransuz tosti' }, weight: '', price: 35000, badge: '', img: P1 },
    { id: 'benedict_salmon', name: { ru: 'Бенедикт с лососем', uz: 'Qizil baliqli Benedikt' }, desc: { ru: 'Бенедикт со слабосоленым лососем и голландским соусом', uz: 'Qizil baliq va golland sousi bilan klassik Benedikt' }, weight: '', price: 65000, badge: 'HIT', img: P5 },
    { id: 'granola_strawberry', name: { ru: 'Гранола с клубникой', uz: 'Qulupnayli granola' }, desc: { ru: 'Хрустящая запеченная гранола с натуральным йогуртом и клубникой', uz: 'Qarsildoq granola, tabiiy yogurt va yangi qulupnay' }, weight: '', price: 50000, badge: '', img: P3 },
    { id: 'granola_mango', name: { ru: 'Гранола с манго', uz: 'Mangolik granola' }, desc: { ru: 'Хрустящая гранола с натуральным йогуртом и кусочками спелого манго', uz: 'Qarsildoq granola, tabiiy yogurt va pishgan mango' }, weight: '', price: 50000, badge: '', img: P3 },
    { id: 'draniki_salmon', name: { ru: 'Драники с лососем', uz: 'Qizil baliqli draniklar' }, desc: { ru: 'Золотистые картофельные драники с нежным лососем и сметаной', uz: 'Qizil baliq va smetana bilan tillarang kartoshka draniklar' }, weight: '', price: 75000, badge: '', img: P5 },
    { id: 'shakshuka', name: { ru: 'Шакшука', uz: 'Shakshuka' }, desc: { ru: 'Яйца в ароматном томатном соусе со специями и хрустящим тостом', uz: "Xushbo'y pomidor sousida pishirilgan tuxumlar" }, weight: '', price: 55000, badge: '', img: P6 },
    { id: 'oatmeal', name: { ru: 'Каша Овсяная', uz: 'Suli kasha' }, desc: { ru: 'Нежная овсяная каша на молоке со сливочным маслом', uz: 'Sutda pishirilgan mayin suli kasha' }, weight: '', price: 30000, badge: '', img: P1 },
    { id: 'semolina', name: { ru: 'Каша манная', uz: 'Manniy kasha' }, desc: { ru: 'Традиционная манная каша со сливочным маслом', uz: "Sariyog' bilan tayyorlangan klassik manniy kasha" }, weight: '', price: 30000, badge: '', img: P1 },
    { id: 'omelette_mushroom', name: { ru: 'Омлет с грибами', uz: "Qo'ziqorinli omlet" }, desc: { ru: 'Пышный омлет с обжаренными лесными грибами и зеленью', uz: "Qovurilgan qo'ziqorinlar bilan yam-yashil omlet" }, weight: '', price: 48000, badge: '', img: P5 },
    { id: 'omelette_chicken', name: { ru: 'Омлет с курицей', uz: 'Tovuqli omlet' }, desc: { ru: 'Пышный омлет с нежным куриным филе и травами', uz: "Mayin tovuq filesi bilan to'yimli omlet" }, weight: '', price: 48000, badge: '', img: P5 },
    { id: 'omelette_cheese', name: { ru: 'Омлет с сыром', uz: 'Pishloqli omlet' }, desc: { ru: 'Нежный классический омлет с тянущимся сыром', uz: "Cho'ziluvchi pishloq bilan mayin klassik omlet" }, weight: '', price: 35000, badge: '', img: P5 },
    { id: 'syrniki', name: { ru: 'Сырники', uz: 'Sirniklar' }, desc: { ru: 'Нежные творожные сырники со сметаной и ягодным соусом', uz: 'Tvorogli mayin sirniklar, smetana va rezavor sousi' }, weight: '', price: 45000, badge: '', img: P3 },
    { id: 'pancakes_honey', name: { ru: 'Блинчики с медом', uz: 'Asalli blinchiklar' }, desc: { ru: 'Тонкие домашние блинчики со сливочным маслом и натуральным медом', uz: "Sariyog' va tabiiy asal bilan yupqa blinchiklar" }, weight: '', price: 45000, badge: '', img: P3 }
  ],
  'set_breakfast': [
    { id: 'set_italian', name: { ru: 'Итальянский завтрак', uz: 'Italyan nonushtasi' }, desc: { ru: 'Сет: хрустящая фокачча, моцарелла, томаты, яйцо и кофе', uz: 'Set: qarsildoq fokachcha, motsarella, pomidor, tuxum va kofe' }, weight: '', price: 85000, badge: 'СЕТ', img: P1 },
    { id: 'set_french', name: { ru: 'Французский завтрак', uz: 'Fransuz nonushtasi' }, desc: { ru: 'Сет: свежий круассан, сливочное масло, ягодный конфитюр и кофе', uz: "Set: yangi kruassan, sariyog', rezavor jem va kofe" }, weight: '', price: 65000, badge: 'СЕТ', img: P3 },
    { id: 'set_english', name: { ru: 'Английский завтрак', uz: 'Ingliz nonushtasi' }, desc: { ru: 'Сет: яичница, бекон, сосиски, тосты, фасоль в томате и напиток', uz: 'Set: tuxum, bekon, sosiskalar, tostlar, loviya va ichimlik' }, weight: '', price: 55000, badge: 'СЕТ', img: P5 }
  ],
  'salads': [
    { id: 'salad_burrata', name: { ru: 'Салат Буррата', uz: 'Burrata salati' }, desc: { ru: 'Сливочный мешочек бурраты со сладкими томатами и соусом песто', uz: 'Shirin pomidorlar va pesto sousi bilan qaymoqli burrata' }, weight: '', price: 85000, badge: '', img: P6 },
    { id: 'salad_greek', name: { ru: 'Салат Греческий', uz: 'Grek salati' }, desc: { ru: 'Свежие огурцы, томаты, болгарский перец, сыр фета, маслины и оливковое масло', uz: "Bodring, pomidor, bulg'or qalampiri, feta pishlog'i va zaytun" }, weight: '', price: 50000, badge: '', img: P6 },
    { id: 'salad_grill', name: { ru: 'Салат Грилл', uz: 'Grill salati' }, desc: { ru: 'Овощи на гриле с пикантной авторской заправкой и зеленью', uz: "Mualliflik sousi va ko'katlar bilan grilda pishirilgan sabzavotlar" }, weight: '', price: 70000, badge: '', img: P6 },
    { id: 'salad_roastbeef', name: { ru: 'Салат Ростбиф', uz: 'Rostbif salati' }, desc: { ru: 'Сочные ломтики ростбифа с рукколой, черри и выдержанным пармезаном', uz: "Rukkola, cherri va parmezan bilan suvli rostbif bo'laklari" }, weight: '', price: 80000, badge: '', img: P5 },
    { id: 'salad_stracciatella', name: { ru: 'Салат Страчателла с томатами', uz: 'Pomidorli Strachatella salati' }, desc: { ru: 'Нежнейшая страчателла со спелыми томатами, бальзамиком и базиликом', uz: 'Pishgan pomidorlar, balzamik va rayhon bilan mayin strachatella' }, weight: '', price: 85000, badge: 'NEW', img: P6 },
    { id: 'salad_tropical', name: { ru: 'Салат Тропический', uz: 'Tropik salat' }, desc: { ru: 'Освежающий микс с тропическими фруктами, свежей зеленью и цитрусовой заправкой', uz: "Tropik mevalar, yangi ko'katlar va sitrus sousli tetiklantiruvchi salat" }, weight: '', price: 45000, badge: '', img: P6 },
    { id: 'salad_eggplant', name: { ru: 'Салат Хрустящий баклажан', uz: 'Qarsildoq baqlajon salati' }, desc: { ru: 'Хрустящие баклажаны в сладком чили с томатами черри, кинзой и кунжутом', uz: 'Shirin chili sousidagi qarsildoq baqlajon, cherri pomidor va kunjut' }, weight: '', price: 60000, badge: '', img: P6 },
    { id: 'salad_caesar', name: { ru: 'Салат Цезарь', uz: 'Sezar salati' }, desc: { ru: 'Хрустящий романо, обжаренное филе курицы, гренки, пармезан и соус цезарь', uz: 'Qarsildoq romano, tovuq filesi, suxariklar, parmezan va sezar sousi' }, weight: '', price: 60000, badge: 'HIT', img: P6 }
  ],
  'sandwiches': [
    { id: 'club_sandwich', name: { ru: 'Клаб сэндвич', uz: 'Klab sendvich' }, desc: { ru: 'Трехслойный тостовый хлеб, куриное филе, бекон, яйцо, томаты и соус', uz: 'Uch qavatli tost noni, tovuq filesi, bekon, tuxum, pomidor va sous' }, weight: '', price: 65000, badge: '', img: P3 },
    { id: 'smash_burger', name: { ru: 'Смэш бургер', uz: 'Smesh burger' }, desc: { ru: 'Фирменная булочка бриошь, сочная котлета с корочкой, сыр чеддер и соус', uz: "Brioshe bulochkasi, suvli qarsildoq kotlet, chedder pishlog'i va maxsus sous" }, weight: '', price: 70000, badge: 'HIT', img: P5 },
    { id: 'texas_sandwich', name: { ru: 'Сэндвич по-техасски', uz: 'Texas sendvichi' }, desc: { ru: 'Сэндвич с сочной говядиной, соусом BBQ, хрустящим луком и маринованным огурчиком', uz: "Mol go'shti, BBQ sousi, qarsildoq piyoz va tuzlangan bodring bilan sendvich" }, weight: '', price: 65000, badge: '', img: P3 },
    { id: 'mortadella_sandwich', name: { ru: 'Сэндвич с мортаделлой', uz: 'Mortadellali sendvich' }, desc: { ru: 'Итальянская мортаделла, сливочный сыр, руккола и фисташковый акцент', uz: 'Italyan mortadellasi, qaymoqli pishloq, rukkola va pista' }, weight: '', price: 65000, badge: '', img: P3 }
  ],
  'soups': [
    { id: 'mexican_soup', name: { ru: 'Суп мексиканский', uz: "Meksika sho'rvasi" }, desc: { ru: 'Пряный наваристый суп с фасолью, кукурузой, фаршем и перцем чили', uz: "Loviya, makkajo'xori, qiyma va achchiq chili bilan ziravorli sho'rva" }, weight: '', price: 40000, badge: '', img: P4 },
    { id: 'minestrone', name: { ru: 'Суп Минестроне', uz: "Minestrone sho'rvasi" }, desc: { ru: 'Легкий классический итальянский суп из сезонных овощей с добавлением пасты', uz: "Mavsumiy sabzavotlar va mayda makaron bilan klassik italyan sho'rvasi" }, weight: '', price: 35000, badge: '', img: P4 },
    { id: 'tom_yam', name: { ru: 'Суп Том ям с лососем', uz: 'Qizil baliqli Tom yam' }, desc: { ru: 'Знаменитый тайский кисло-острый суп с лососем, кокосовым молоком и грибами', uz: "Qizil baliq, kokos suti va qo'ziqorinlar bilan nordon-achchiq tayland sho'rvasi" }, weight: '', price: 55000, badge: 'HIT', img: P4 },
    { id: 'lentil_soup', name: { ru: 'Чечевичный суп', uz: "Yasmiq sho'rvasi" }, desc: { ru: 'Бархатистый крем-суп из красной чечевицы с восточными специями и лимоном', uz: "Sharqona ziravorlar va limon bilan qizil yasmiqdan tayyorlangan krem-sho'rva" }, weight: '', price: 35000, badge: '', img: P4 }
  ],
  'mains': [
    { id: 'lamb_rack', name: { ru: 'Баранья корейка с овощами', uz: "Sabzavotli qo'y qovurg'asi" }, desc: { ru: 'Нежная обжаренная корейка ягненка с гарниром из овощей гриль', uz: "Grilda pishirilgan sabzavotlar bilan mayin qo'y qovurg'asi" }, weight: '', price: 135000, badge: '', img: P5 },
    { id: 'bone_steak', name: { ru: 'Бон-стейк с картофелем пайе', uz: 'Kartoshka paye bilan Bon-steyk' }, desc: { ru: 'Сочный премиальный стейк на кости с хрустящей соломкой картофеля пайе', uz: 'Qarsildoq kartoshka paye bilan suyakda pishirilgan suvli steyk' }, weight: '', price: 150000, badge: 'HIT', img: P5 },
    { id: 'chicken_mushroom', name: { ru: 'Куриное филе с грибным соусом', uz: "Qo'ziqorin sousli tovuq filesi" }, desc: { ru: 'Нежнейшее куриное филе под сливочно-грибным соусом с травами', uz: "Qaymoqli-qo'ziqorinli sousda pishirilgan mayin tovuq filesi" }, weight: '', price: 75000, badge: '', img: P5 },
    { id: 'salmon_hollandaise', name: { ru: 'Лосось под голландским соусом', uz: 'Golland sousli qizil baliq' }, desc: { ru: 'Стейк из лосося идеальной прожарки под шелковистым соусом голландез', uz: 'Ipakdek mayin golland sousi bilan pishirilgan qizil baliq steyki' }, weight: '', price: 160000, badge: '', img: P5 },
    { id: 'medallion_gratin', name: { ru: 'Медальон с гратеном', uz: 'Gratenli medalon' }, desc: { ru: 'Медальоны из вырезки говядины с запеченным сырно-картофельным гратеном', uz: "Pishloqli-kartoshkali graten bilan mol go'shti medalonlari" }, weight: '', price: 160000, badge: '', img: P5 },
    { id: 'perlotto_truffle', name: { ru: 'Перлотто с трюфельным соусом', uz: 'Tryufel sousli perlotto' }, desc: { ru: 'Нежное перловое ризотто с благородным трюфельным соусом и пармезаном', uz: "Xushbo'y tryufel sousi va parmezan bilan tayyorlangan arpa risottosi" }, weight: '', price: 60000, badge: 'NEW', img: P4 }
  ],
  'bowls': [
    { id: 'bowl_green', name: { ru: 'Боул зелень с авокадо', uz: "Ko'katli avokado bouli" }, desc: { ru: 'Свежий микс салатов, спелый авокадо, огурцы, эдамаме, семена и легкая заправка', uz: "Yangi salat miksi, pishgan avokado, bodring, edamame va urug'lar" }, weight: '', price: 135000, badge: '', img: P6 },
    { id: 'bowl_salmon', name: { ru: 'Боул с лососем', uz: 'Qizil baliqli boul' }, desc: { ru: 'Свежий лосось, рис, авокадо, бобы эдамаме, чука и кунжутный соус', uz: 'Yangi qizil baliq, guruch, avokado, edamame, chuka va kunjut sousi' }, weight: '', price: 150000, badge: 'HIT', img: P6 },
    { id: 'bowl_tuna', name: { ru: 'Боул с тунцом', uz: 'Tunetsli boul' }, desc: { ru: 'Обожженный тунец, рис, свежие овощи, водоросли нори и соус понзу', uz: 'Yengil qovurilgan tunets, guruch, yangi sabzavotlar va ponzu sousi' }, weight: '', price: 75000, badge: '', img: P6 }
  ],
  'sides': [
    { id: 'potato_village', name: { ru: 'Картофель по-деревенски', uz: 'Qishloqcha kartoshka' }, desc: { ru: 'Ароматные картофельные дольки, запеченные с розмарином и чесноком', uz: "Rozmarin va sarimsoq bilan pishirilgan xushbo'y kartoshka" }, weight: '160 г', price: 15000, badge: '', img: P4 },
    { id: 'fries', name: { ru: 'Картофель фри', uz: 'Kartoshka fri' }, desc: { ru: 'Классический хрустящий картофель фри с легкой солью', uz: 'Klassik qarsildoq kartoshka fri' }, weight: '160 г', price: 15000, badge: '', img: P4 },
    { id: 'mashed_potato', name: { ru: 'Картофельное пюре', uz: 'Kartoshka pyuresi' }, desc: { ru: 'Воздушное нежное пюре из отборного картофеля со сливочным маслом и молоком', uz: "Sariyog' va sut bilan tayyorlangan mayin kartoshka pyuresi" }, weight: '', price: 20000, badge: '', img: P4 },
    { id: 'grilled_veg', name: { ru: 'Овощи на гриле', uz: 'Grildagi sabzavotlar' }, desc: { ru: 'Цукини, баклажан, болгарский перец, томаты и грибы с дымком', uz: "Kabaxti, baqlajon, bulg'or qalampiri, pomidor va qo'ziqorinlar" }, weight: '', price: 28000, badge: '', img: P6 },
    { id: 'rice', name: { ru: 'Отварной рис', uz: 'Qaynatilgan guruch' }, desc: { ru: 'Рассыпчатый длиннозерный отварной рис со сливочным маслом', uz: "Sariyog' bilan tayyorlangan mayda qaynatilgan guruch" }, weight: '', price: 15000, badge: '', img: P4 }
  ],
  'pizza': [
    { id: 'pizza_al_polo', name: { ru: 'Пицца Аль Поло', uz: 'Al Polo pitsa' }, desc: { ru: 'Нежное куриное филе, грибы, моцарелла и ароматный томатный соус', uz: "Tovuq filesi, qo'ziqorinlar, motsarella va xushbo'y pomidor sousi" }, weight: '', price: 85000, badge: '', img: P3 },
    { id: 'pizza_burrata', name: { ru: 'Пицца Буррата', uz: 'Burrata pitsa' }, desc: { ru: 'Хрустящее тесто, томатный соус, свежая буррата, черри и базилик', uz: 'Qarsildoq xamir, pomidor sousi, yangi burrata, cherri va rayhon' }, weight: '', price: 110000, badge: '', img: P3 },
    { id: 'pizza_margherita', name: { ru: 'Пицца Маргарита', uz: 'Margarita pitsa' }, desc: { ru: 'Классика Неаполя: фирменный томатный соус, моцарелла и свежий базилик', uz: 'Neapol klassikasi: maxsus pomidor sousi, motsarella va yangi rayhon' }, weight: '', price: 75000, badge: '', img: P3 },
    { id: 'pizza_pepperoni', name: { ru: 'Пицца Пепперони', uz: 'Pepperoni pitsa' }, desc: { ru: 'Пикантная пепперони, много тянущейся моцареллы и томатный соус', uz: "Pikant pepperoni, ko'p cho'ziluvchi motsarella va pomidor sousi" }, weight: '', price: 85000, badge: 'HIT', img: P3 },
    { id: 'pizza_roastbeef', name: { ru: 'Пицца Ростбиф', uz: 'Rostbif pitsa' }, desc: { ru: 'Ломтики ростбифа, сыр моцарелла, свежая руккола и соус бальзамик', uz: "Rostbif bo'laklari, motsarella, yangi rukkola va balzamik sousi" }, weight: '', price: 105000, badge: '', img: P3 },
    { id: 'pizza_truffle', name: { ru: 'Пицца с трюфельной пастой', uz: 'Tryufel pastali pitsa' }, desc: { ru: 'Белый сливочный соус, моцарелла, шампиньоны и ароматная трюфельная паста', uz: "Oq qaymoqli sous, motsarella, shampinyonlar va xushbo'y tryufel pastasi" }, weight: '', price: 90000, badge: '', img: P3 },
    { id: 'pizza_salmon', name: { ru: 'Пицца Сальмон бьянка', uz: 'Salmon byanka pitsa' }, desc: { ru: 'Сливочная основа, филе лосося, сыр моцарелла, каперсы и зелень', uz: "Qaymoqli asos, qizil baliq filesi, motsarella va ko'katlar" }, weight: '', price: 110000, badge: '', img: P3 },
    { id: 'pizza_stracciatella', name: { ru: 'Пицца Страчателла с томатами', uz: 'Pomidorli Strachatella pitsa' }, desc: { ru: 'Хрустящий бортик, сливочная страчателла, сладкие томаты черри и песто', uz: 'Qarsildoq xamir, qaymoqli strachatella, shirin cherri va pesto' }, weight: '', price: 110000, badge: '', img: P3 },
    { id: 'pizza_cheese', name: { ru: 'Пицца Сырная', uz: 'Pishloqli pitsa' }, desc: { ru: 'Четыре благородных сыра: моцарелла, горгонзола, пармезан и гауда', uz: "To'rt xil oliy navli pishloq: motsarella, gorgonzola, parmezan va gauda" }, weight: '', price: 90000, badge: '', img: P3 }
  ],
  'waffles': [
    {
      id: 'waffle_belgian',
      name: { ru: 'Бельгийские вафли', uz: 'Belgiya vafllari' },
      desc: { ru: 'Пышные вафли · Топпинги на выбор: бельгийский шоколад / Nutella / фисташка, клубника, банан, мороженое', uz: "Vafllar · Tanlov bo'yicha toppinglar: shokolad / Nutella / pista, qulupnay, banan, muzqaymoq" },
      weight: '',
      price: 35000,
      badge: '',
      img: P1,
      hasToppings: true
    },
    {
      id: 'waffle_superset',
      name: { ru: 'Супер сет вафель', uz: 'Super vafl seti' },
      desc: { ru: 'Большой сет вафель с топпингом на выбор: бельгийский шоколад / Nutella / фисташковый шоколад', uz: "Katta vafl seti, tanlov bo'yicha shokolad: belgiya shokoladi / Nutella / pista shokoladi" },
      weight: '',
      price: 150000,
      badge: 'СЕТ',
      img: P1,
      variants: [
        { id: 'waffle_superset_belgian', label: { ru: 'Бельгийский', uz: 'Belgiya' }, price: 150000 },
        { id: 'waffle_superset_nutella', label: { ru: 'Nutella', uz: 'Nutella' }, price: 150000 },
        { id: 'waffle_superset_pistachio', label: { ru: 'Фисташковый', uz: 'Pistali' }, price: 150000 }
      ]
    }
  ],
  'coffee': [
    { id: 'iced_americano', name: { ru: 'Айс Американо', uz: 'Ays Amerikano' }, desc: { ru: 'Двойной эспрессо с фильтрованной холодной водой и кубиками льда', uz: "Muz va sovuq suv bilan tayyorlangan tetiklantiruvchi espresso" }, weight: '', price: 30000, badge: '', img: P2 },
    { id: 'iced_latte', name: { ru: 'Айс Латте', uz: 'Ays Latte' }, desc: { ru: 'Эспрессо со свежим холодным молоком и кубиками льда', uz: "Yangi sovuq sut, espresso va muz bo'laklari" }, weight: '', price: 35000, badge: '', img: P2 },
    { id: 'americano', name: { ru: 'Американо', uz: 'Amerikano' }, desc: { ru: 'Классический эспрессо с добавлением горячей воды', uz: "Issiq suv qo'shilgan klassik espresso" }, weight: '', price: 25000, badge: '', img: P2 },
    { id: 'bumble', name: { ru: 'Бамбл-кофе', uz: 'Bambl-kofe' }, desc: { ru: 'Слоистый кофейный коктейль: эспрессо, апельсиновый сок и карамельный сироп', uz: 'Espresso, yangi apelsin sharbati va karamel siropi' }, weight: '', price: 35000, badge: 'NEW', img: P2 },
    {
      id: 'cappuccino',
      name: { ru: 'Капучино', uz: 'Kapuchino' },
      desc: { ru: 'Идеальный баланс эспрессо и бархатистой молочной пены', uz: "Espresso va mayin sut ko'pigi muvozanati" },
      weight: '',
      price: 30000,
      badge: '',
      img: P2,
      variants: [
        { id: 'cappuccino_m', label: { ru: 'M', uz: 'M' }, price: 30000 },
        { id: 'cappuccino_l', label: { ru: 'L', uz: 'L' }, price: 35000 }
      ]
    },
    {
      id: 'latte',
      name: { ru: 'Латте', uz: 'Latte' },
      desc: { ru: 'Нежный кофейный напиток с большим количеством вспененного молока', uz: "Ko'p miqdorda ko'pirtirilgan sutli mayin kofe" },
      weight: '',
      price: 30000,
      badge: '',
      img: P2,
      variants: [
        { id: 'latte_s', label: { ru: 'S', uz: 'S' }, price: 30000 },
        { id: 'latte_l', label: { ru: 'L', uz: 'L' }, price: 35000 }
      ]
    },
    { id: 'raf', name: { ru: 'Раф', uz: 'Raf' }, desc: { ru: 'Эспрессо, взбитый со сливками и ванильным сахаром в нежную пену', uz: "Qaymoq va vanil shakari bilan birga ko'pirtirilgan kofe" }, weight: '', price: 40000, badge: '', img: P2 },
    { id: 'espresso', name: { ru: 'Эспрессо', uz: 'Espresso' }, desc: { ru: 'Насыщенный шот кофе с плотной золотистой пенкой crema', uz: "Qalin tillarang krema bilan to'yingan klassik espresso" }, weight: '', price: 25000, badge: '', img: P2 },
    { id: 'espresso_tonic', name: { ru: 'Эспрессо-тоник', uz: 'Espresso-tonik' }, desc: { ru: 'Освежающий микс тоника, эспрессо, льда и ломтика лайма', uz: "Tonik, espresso, muz va laym bo'lagi bilan tetiklantiruvchi ichimlik" }, weight: '', price: 35000, badge: '', img: P2 },
    { id: 'filter_coffee', name: { ru: 'Фильтр-кофе (Batch brew)', uz: 'Filtr-kofe' }, desc: { ru: 'Мягкий кофе фильтр-заваривания, раскрывающий все тонкие ноты зерна', uz: "Kofe donalarining barcha mayin ta'mlarini ochib beruvchi filtr-kofe" }, weight: '', price: 25000, badge: '', img: P2 }
  ],
  'lemonades': [
    {
      id: 'lemon_raspberry',
      name: { ru: 'Лимонад Малина-маракуйя', uz: 'Malina-marakuya limonadi' },
      desc: { ru: 'Освежающий лимонад со спелой малиной и сочной маракуйей', uz: 'Yangi malina va sharbatli marakuya bilan limonad' },
      weight: '',
      price: 40000,
      badge: '',
      img: P4,
      variants: [
        { id: 'lemon_rasp_glass', label: { ru: 'Стакан', uz: 'Stakan' }, price: 40000 },
        { id: 'lemon_rasp_carafe', label: { ru: 'Графин', uz: 'Grafin' }, price: 80000 }
      ]
    },
    {
      id: 'lemon_mango',
      name: { ru: 'Лимонад Манго-маракуйя', uz: 'Mango-marakuya limonadi' },
      desc: { ru: 'Яркий тропический лимонад из манго и маракуйи', uz: 'Yorqin tropik mango va marakuya limonadi' },
      weight: '',
      price: 40000,
      badge: '',
      img: P4,
      variants: [
        { id: 'lemon_mango_glass', label: { ru: 'Стакан', uz: 'Stakan' }, price: 40000 },
        { id: 'lemon_mango_carafe', label: { ru: 'Графин', uz: 'Grafin' }, price: 80000 }
      ]
    },
    { id: 'pina_colada', name: { ru: 'Лимонад Пина Колада', uz: 'Pina Kolada limonadi' }, desc: { ru: 'Безалкогольный тропический коктейль с кокосовым молоком и ананасом', uz: 'Kokos suti va ananas sharbatli alkogolsiz kokteyl' }, weight: '', price: 40000, badge: '', img: P4 },
    {
      id: 'mojito_classic',
      name: { ru: 'Мохито Классический', uz: 'Klassik Moxito' },
      desc: { ru: 'Свежая мята, лайм, содовая и тростниковый сахар со льдом', uz: 'Yalpiz, laym, gazlangan suv va muz' },
      weight: '',
      price: 35000,
      badge: '',
      img: P4,
      variants: [
        { id: 'mojito_classic_glass', label: { ru: 'Стакан', uz: 'Stakan' }, price: 35000 },
        { id: 'mojito_classic_carafe', label: { ru: 'Графин', uz: 'Grafin' }, price: 70000 }
      ]
    },
    {
      id: 'mojito_strawberry',
      name: { ru: 'Мохито Клубничный', uz: 'Qulupnayli Moxito' },
      desc: { ru: 'Классический мохито с добавлением натурального клубничного пюре', uz: 'Tabiiy qulupnay pyuresi bilan moxito' },
      weight: '',
      price: 35000,
      badge: 'HIT',
      img: P4,
      variants: [
        { id: 'mojito_strawberry_glass', label: { ru: 'Стакан', uz: 'Stakan' }, price: 35000 },
        { id: 'mojito_strawberry_carafe', label: { ru: 'Графин', uz: 'Grafin' }, price: 70000 }
      ]
    },
    {
      id: 'mojito_kiwi',
      name: { ru: 'Мохито с Киви', uz: 'Kivili Moxito' },
      desc: { ru: 'Освежающий мохито со свежим киви, лаймом и мятой', uz: 'Yangi kivi, laym va yalpiz bilan moxito' },
      weight: '',
      price: 35000,
      badge: '',
      img: P4,
      variants: [
        { id: 'mojito_kiwi_glass', label: { ru: 'Стакан', uz: 'Stakan' }, price: 35000 },
        { id: 'mojito_kiwi_carafe', label: { ru: 'Графин', uz: 'Grafin' }, price: 70000 }
      ]
    },
    { id: 'smoothie_mint', name: { ru: 'Смузи мятный', uz: 'Yalpizli smuzi' }, desc: { ru: 'Густой освежающий смузи со свежей мятой, лаймом и яблоком', uz: 'Yalpiz, laym va olma bilan quyuq tetiklantiruvchi smuzi' }, weight: '', price: 45000, badge: '', img: P4 },
    { id: 'smoothie_berry', name: { ru: 'Смузи ягодный', uz: 'Rezavorli smuzi' }, desc: { ru: 'Густой витаминный смузи из лесных и садовых ягод', uz: "O'rmon va bog' rezavorlaridan tayyorlangan vitaminli smuzi" }, weight: '', price: 45000, badge: '', img: P4 }
  ],
  'matcha': [
    { id: 'anchan_peach', name: { ru: 'Анчан Персик-манго', uz: 'Anchan Shaftoli-mango' }, desc: { ru: 'Натуральный синий чай анчан с сочным персиком и манго со льдом', uz: "Muz, shaftoli va mango bilan tabiiy ko'k anchan choyi" }, weight: '', price: 45000, badge: '', img: ANCHAN_PERSIK_MANGO },
    { id: 'anchan_blueberry', name: { ru: 'Анчан с Черникой', uz: 'Chernikali Anchan' }, desc: { ru: 'Натуральный синий чай анчан с черничным пюре и льдом', uz: "Chernika pyuresi va muz bilan ko'k anchan choyi" }, weight: '', price: 45000, badge: '', img: ANCHAN_CHERNIROY },
    { id: 'matcha_strawberry', name: { ru: 'Матча Клубничный', uz: 'Qulupnayli Matcha' }, desc: { ru: 'Церемониальная матча со взбитым молоком и сочным клубничным слоем', uz: "Ko'pirtirilgan sut, qulupnay qatlami va yapon matcha choyi" }, weight: '', price: 45000, badge: 'HIT', img: MATCHA_KLUBNIKA },
    { id: 'matcha_kiwi', name: { ru: 'Матча с Киви', uz: 'Kivili Matcha' }, desc: { ru: 'Японская зеленая матча с молоком и натуральным пюре из киви', uz: 'Sut va tabiiy kivi pyuresi bilan yashil matcha' }, weight: '', price: 45000, badge: '', img: MATCHA_KIVI },
    { id: 'matcha_apple', name: { ru: 'Матча Яблоко-киви', uz: 'Matcha Olma-kivi' }, desc: { ru: 'Освежающий матча-коктейль с зеленым яблоком и киви', uz: 'Yashil olma va kivi bilan tetiklantiruvchi matcha kokteyli' }, weight: '', price: 45000, badge: '', img: P2 }
  ],
  'milkshakes': [
    { id: 'milk_banana', name: { ru: 'Милкшейк Банановый', uz: 'Bananli milksheyk' }, desc: { ru: 'Сливочное мороженое, свежее молоко и спелый банан', uz: 'Qaymoqli muzqaymoq, yangi sut va pishgan banan' }, weight: '', price: 35000, badge: '', img: P4 },
    { id: 'milk_strawberry', name: { ru: 'Милкшейк Клубничный', uz: 'Qulupnayli milksheyk' }, desc: { ru: 'Густой молочный коктейль со сливочным пломбиром и клубникой', uz: 'Qaymoqli plombir va yangi qulupnayli quyuq kokteyl' }, weight: '', price: 35000, badge: '', img: P4 },
    { id: 'milk_chocolate', name: { ru: 'Милкшейк Шоколадный', uz: 'Shokoladli milksheyk' }, desc: { ru: 'Насыщенный шоколадный пломбир, молоко и топленый шоколад', uz: 'Shokoladli plombir, sut va eritilgan shokolad' }, weight: '', price: 35000, badge: '', img: P4 }
  ],
  'fresh': [
    { id: 'juice_orange', name: { ru: 'Сок Апельсиновый', uz: 'Apelsin freshi' }, desc: { ru: '100% свежевыжатый сок из сладких отборных апельсинов', uz: '100% yangi siqilgan shirin apelsin sharbati' }, weight: '', price: 50000, badge: '', img: P4 },
    { id: 'juice_grapefruit', name: { ru: 'Сок Грейпфрутовый', uz: 'Greypfrut freshi' }, desc: { ru: '100% свежевыжатый сок с приятной благородной горчинкой', uz: '100% yangi siqilgan greypfrut sharbati' }, weight: '', price: 50000, badge: '', img: P4 },
    { id: 'juice_passion', name: { ru: 'Сок Маракуйи', uz: 'Marakuya sharbati' }, desc: { ru: 'Натуральный тропический сок из спелой маракуйи', uz: 'Pishgan marakuyadan tayyorlangan tabiiy tropik sharbat' }, weight: '', price: 25000, badge: '', img: P4 },
    { id: 'juice_apple', name: { ru: 'Сок Яблочный', uz: 'Olma freshi' }, desc: { ru: '100% свежевыжатый сок из хрустящих зеленых яблок', uz: '100% yangi siqilgan qarsildoq olma sharbati' }, weight: '', price: 35000, badge: '', img: P4 }
  ],
  'tea_author': [
    { id: 'tea_mango', name: { ru: 'Чай Манго-маракуйя', uz: 'Mango-marakuya choyi' }, desc: { ru: 'Горячий авторский чай с сочным манго, маракуйей и цитрусами в чайнике', uz: 'Mango, marakuya va sitruslar bilan qaynoq mualliflik choyi' }, weight: '', price: 45000, badge: '', img: CHAY_MANGO_MARAKUYA },
    { id: 'tea_sea_buckthorn', name: { ru: 'Чай Облепиховый', uz: 'Chakandali choy' }, desc: { ru: 'Согревающий витаминный чай с натуральной облепихой, медом и имбирем', uz: "Tabiiy chakanda, asal va zanjabil bilan vitaminli choy" }, weight: '', price: 45000, badge: 'HIT', img: CHAY_OBLEPIKHOVIY },
    { id: 'tea_herbal', name: { ru: 'Чай Травяной', uz: "O'tli choy" }, desc: { ru: 'Успокаивающий сбор из душистых горных трав, ромашки и мяты', uz: "Tog' o'tlari, moychechak va yalpizdan tayyorlangan tinchlantiruvchi choy" }, weight: '', price: 30000, badge: '', img: CHAY_TRAVYANOY },
    { id: 'tea_apple_cinnamon', name: { ru: 'Чай Яблоко-корица', uz: 'Olma-dolchin choyi' }, desc: { ru: 'Пряный чай со свежими яблоками, палочкой корицы и бадьяном', uz: 'Yangi olma, dolchin tayoqchasi va badyan bilan ziravorli choy' }, weight: '', price: 35000, badge: '', img: P2 },
    { id: 'tea_berry', name: { ru: 'Чай Ягодный', uz: 'Rezavorli choy' }, desc: { ru: 'Ароматный чай со сбором лесных ягод, мятой и медом', uz: "O'rmon rezavorlari, yalpiz va asal bilan xushbo'y choy" }, weight: '', price: 45000, badge: '', img: CHAY_YAGODNIY }
  ],
  'tea_classic': [
    { id: 'tea_earl_grey', name: { ru: 'Чай Earl Grey', uz: 'Earl Grey choyi' }, desc: { ru: 'Благородный черный чай с натуральным маслом бергамота в чайнике', uz: 'Bergamot moyi bilan boyitilgan oliy navli qora choy' }, weight: '', price: 20000, badge: '', img: P2 },
    { id: 'tea_milky_way', name: { ru: 'Чай Milky Way', uz: 'Milky Way choyi' }, desc: { ru: 'Фирменный чай с мягкими сливочно-карамельными нотками', uz: "Mayin qaymoqli-karamel ta'mli maxsus choy" }, weight: '', price: 30000, badge: '', img: P2 },
    { id: 'tea_dahongpao', name: { ru: 'Чай Да Хун Пао', uz: 'Da Xun Pao choyi' }, desc: { ru: 'Знаменитый китайский утесный улун с глубоким дымно-карамельным вкусом', uz: "Chuqur tutunli-karamel ta'mga ega mashhur xitoy ulun choyi" }, weight: '', price: 30000, badge: '', img: P2 },
    { id: 'tea_jasmine', name: { ru: 'Чай Жасмин', uz: 'Yasminli choy' }, desc: { ru: 'Зеленый чай высшего сорта с натуральными цветками жасмина', uz: "Tabiiy yasmin gullari bilan xushbo'y yashil choy" }, weight: '', price: 20000, badge: '', img: P2 },
    { id: 'tea_milk_oolong', name: { ru: 'Чай Молочный улун', uz: 'Sutli ulun choyi' }, desc: { ru: 'Слабоферментированный улун с нежным сливочно-молочным ароматом', uz: "Mayin qaymoqli-sutli xushbo'ylikka ega yashil ulun choyi" }, weight: '', price: 25000, badge: '', img: P2 }
  ],
  'soft': [
    { id: 'bonaqua', name: { ru: 'BonAqua', uz: 'BonAqua' }, desc: { ru: 'Чистая питьевая вода без газа / с газом', uz: 'Gazsiz / gazli toza ichimlik suvi' }, weight: '0.5 л', price: 5000, badge: '', img: P4 },
    { id: 'borjomi', name: { ru: 'Borjomi', uz: 'Borjomi' }, desc: { ru: 'Легендарная минеральная природная газированная вода', uz: 'Tabiiy gazlangan mineral suv' }, weight: '0.33 л', price: 20000, badge: '', img: P4 },
    { id: 'cola_zero', name: { ru: 'Coca-Cola Zero', uz: 'Coca-Cola Zero' }, desc: { ru: 'Освежающий газированный напиток без сахара', uz: 'Shakarsiz tetiklantiruvchi gazlangan ichimlik' }, weight: '0.25 л', price: 15000, badge: '', img: P4 },
    { id: 'fanta', name: { ru: 'Fanta', uz: 'Fanta' }, desc: { ru: 'Апельсиновый газированный напиток', uz: 'Apelsinli gazlangan ichimlik' }, weight: '0.25 л', price: 15000, badge: '', img: P4 },
    { id: 'schweppes', name: { ru: 'Schweppes', uz: 'Schweppes' }, desc: { ru: 'Классический горьковатый тоник', uz: 'Klassik nordon-achchiq tonik' }, weight: '0.25 л', price: 15000, badge: '', img: P4 },
    { id: 'sprite', name: { ru: 'Sprite', uz: 'Sprite' }, desc: { ru: 'Лимонно-лаймовый газированный напиток', uz: 'Limon va laymli gazlangan ichimlik' }, weight: '0.25 л', price: 15000, badge: '', img: P4 },
    { id: 'rich', name: { ru: 'Сок Rich', uz: 'Rich sharbati' }, desc: { ru: 'Премиальный пакетированный сок в ассортименте', uz: 'Assortimentdagi premium paketlangan sharbat' }, weight: '0.25 л', price: 20000, badge: '', img: P4 },
    { id: 'viko', name: { ru: 'Сок Viko', uz: 'Viko sharbati' }, desc: { ru: 'Пакетированный сок в ассортименте', uz: 'Assortimentdagi paketlangan sharbat' }, weight: '0.25 л', price: 10000, badge: '', img: P4 }
  ],
  'desserts': [
    { id: 'san_seb_nutella', name: { ru: 'Сан-Себастьян с нутеллой', uz: 'Nutellali San-Sebastyan' }, desc: { ru: 'Нежнейший баскский обожженный чизкейк с щедрой порцией Nutella', uz: 'Nutella bilan qoplangan mayin bask chizkeyki' }, weight: '', price: 50000, badge: '', img: P4 },
    { id: 'san_seb_blueberry', name: { ru: 'Сан-Себастьян с голубикой', uz: "Ko'k rezavorli San-Sebastyan" }, desc: { ru: 'Баскский обожженный чизкейк со свежей голубикой и ягодным соусом', uz: "Yangi ko'k rezavor va sous bilan bask chizkeyki" }, weight: '', price: 50000, badge: '', img: P4 },
    { id: 'san_seb_pistachio', name: { ru: 'Сан-Себастьян с фисташками', uz: 'Pistali San-Sebastyan' }, desc: { ru: 'Баскский обожженный чизкейк с натуральной фисташковой пастой', uz: "Tabiiy pista pastasi va pista bo'laklari bilan bask chizkeyki" }, weight: '', price: 60000, badge: 'HIT', img: P4 },
    { id: 'cheesecake_oreo', name: { ru: 'Чизкейк Oreo', uz: 'Oreo chizkeyk' }, desc: { ru: 'Нежный сливочный чизкейк с кусочками хрустящего печенья Oreo', uz: "Qarsildoq Oreo pechenesi bo'laklari bilan mayin chizkeyk" }, weight: '', price: 40000, badge: '', img: P4 },
    { id: 'cheesecake_hazelnut', name: { ru: 'Чизкейк с фундуком', uz: 'Funduqli chizkeyk' }, desc: { ru: 'Сливочный чизкейк с карамелизированным дробленым фундуком', uz: 'Karamellangan maydalangan funduq bilan qaymoqli chizkeyk' }, weight: '', price: 35000, badge: '', img: P4 },
    { id: 'cheesecake_pistachio', name: { ru: 'Чизкейк Фисташковый', uz: 'Pistali chizkeyk' }, desc: { ru: 'Изысканный чизкейк с бархатным вкусом отборной фисташки', uz: "Tanlangan pista ta'miga ega nafis qaymoqli chizkeyk" }, weight: '', price: 40000, badge: '', img: P4 },
    { id: 'medovik', name: { ru: 'Медовик классический', uz: 'Klassik medovik' }, desc: { ru: 'Тонкие медовые коржи со сметанно-сливочным кремом по домашнему рецепту', uz: 'Mayin smetana-qaymoq kremi bilan klassik asalli tort' }, weight: '', price: 30000, badge: '', img: P4 },
    { id: 'napoleon', name: { ru: 'Наполеон с фисташкой и малиной', uz: 'Pista va malinali Napoleon' }, desc: { ru: 'Хрустящие слоеные коржи с фисташковым заварным кремом и свежей малиной', uz: 'Pista kremi va yangi malina bilan qarsildoq qavatli Napoleon' }, weight: '', price: 30000, badge: 'NEW', img: P4 }
  ]
};

const CAT_NAMES = {
  'breakfasts': { ru: 'Завтраки', uz: 'Nonushta' },
  'set_breakfast': { ru: 'Сет Завтрак', uz: 'Set Nonushta' },
  'salads': { ru: 'Салаты', uz: 'Salatlar' },
  'sandwiches': { ru: 'Сэндвичи', uz: 'Sendvichlar' },
  'soups': { ru: 'Супы', uz: "Sho'rvalar" },
  'mains': { ru: 'Основное блюдо', uz: 'Asosiy taomlar' },
  'bowls': { ru: 'Боулы', uz: 'Boullar' },
  'sides': { ru: 'Гарниры', uz: 'Garnirlar' },
  'pizza': { ru: 'Пицца', uz: 'Pitsa' },
  'waffles': { ru: 'Вафли и Сеты', uz: 'Vafli va Setlar' },
  'coffee': { ru: 'Кофе', uz: 'Kofe' },
  'lemonades': { ru: 'Лимонады и Смузи', uz: 'Limonadlar' },
  'matcha': { ru: 'Матча', uz: 'Matcha' },
  'milkshakes': { ru: 'Молочные коктейли', uz: 'Milksheyklar' },
  'fresh': { ru: 'Фреши', uz: 'Yangi sharbatlar' },
  'tea_author': { ru: 'Авторские чаи', uz: 'Mualliflik choylari' },
  'tea_classic': { ru: 'Классический чай', uz: 'Klassik choy' },
  'soft': { ru: 'Напитки', uz: 'Ichimliklar' },
  'desserts': { ru: 'Десерты', uz: 'Desertlar' }
};

const CATS = Object.keys(MENU);

// Инициализация языка и текущего блюда из параметров URL (Deep Linking)
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');
const dishParam = parseInt(urlParams.get('dish'), 10);
const langParam = urlParams.get('lang');

let curLang = (langParam === 'ru' || langParam === 'uz') ? langParam : 'ru';
let curCat = 'breakfasts';
let curIdx = 0;

// Если открыта ссылка, очищаем адресную строку для будущих обновлений по F5
if (window.location.search) {
  window.history.replaceState(null, '', window.location.pathname);
}
let curVariantIdx = 0;
let showingA = true;
let crossfadeTimer = null;
const cart = {}; // itemId -> {qty, price, name: {ru, uz}, img}

try {
  const savedCart = localStorage.getItem('lamari_cart');
  if (savedCart) {
    Object.assign(cart, JSON.parse(savedCart));
  }
} catch (e) {
  console.error("Ошибка парсинга корзины из localStorage:", e);
}

function money(n) { return n.toLocaleString('ru-RU') + ' сум'; }

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const imgA = document.getElementById('imgA');
const imgB = document.getElementById('imgB');
const dishCat = document.getElementById('dishCat');
const dishTitle = document.getElementById('dishTitle');
const dishBadge = document.getElementById('dishBadge');
const dishInCartBadge = document.getElementById('dishInCartBadge');
const dishTimeBadge = document.getElementById('dishTimeBadge');
const dishDesc = document.getElementById('dishDesc');
const pillLabel = document.getElementById('pillLabel');
const addBtn = document.getElementById('addBtn');
const tabsEl = document.getElementById('tabs');
const dotsEl = document.getElementById('dots');
const toastEl = document.getElementById('toast');
const cartBadge = document.getElementById('cartBadge');
const cartChip = document.getElementById('cartChip');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const variantSelector = document.getElementById('variantSelector');

const descOverlay = document.getElementById('descOverlay');
const descModal = document.getElementById('descModal');
const descModalTitle = document.getElementById('descModalTitle');
const descModalText = document.getElementById('descModalText');
const descModalWeight = document.getElementById('descModalWeight');
const descTimeNotice = document.getElementById('descTimeNotice');
const dishMoreBtn = document.getElementById('dishMoreBtn');
const dishMoreText = document.getElementById('dishMoreText');
const closeDescBtn = document.getElementById('closeDesc');

const waffleOverlay = document.getElementById('waffleOverlay');
const waffleModal = document.getElementById('waffleModal');
const waffleModalTitle = document.getElementById('waffleModalTitle');
const waffleModalBody = document.getElementById('waffleModalBody');
const waffleAddCartBtn = document.getElementById('waffleAddCartBtn');
const closeWaffleBtn = document.getElementById('closeWaffle');

const tabsViewport = document.querySelector('.tabs-viewport');

let advanceTimer = null;
let appLoaded = false;
let slideStartTime = 0;
let slideElapsedBeforePause = 0;
let isPausedOnHold = false;
let holdStartTime = 0;
let wasHold = false;
let isTouchEvent = false;
let toastTimer = null;

// Настройка переключателя языков (Десктоп)
const langRuBtn = document.getElementById('langRu');
const langUzBtn = document.getElementById('langUz');

// Настройка переключателя языков (Мобильный / Модалка)
const langMobileBtn = document.getElementById('langMobileBtn');
const langOverlay = document.getElementById('langOverlay');
const langModal = document.getElementById('langModal');
const langModalTitle = document.getElementById('langModalTitle');
const closeLangBtn = document.getElementById('closeLang');
const btnSelectRu = document.getElementById('btnSelectRu');
const btnSelectUz = document.getElementById('btnSelectUz');

langRuBtn.onclick = () => setLanguage('ru');
langUzBtn.onclick = () => setLanguage('uz');
btnSelectRu.onclick = () => { setLanguage('ru'); closeLangModal(); };
btnSelectUz.onclick = () => { setLanguage('uz'); closeLangModal(); };

function openLangModal() {
  langOverlay.style.opacity = '';
  langModal.style.transform = '';
  langOverlay.classList.add('open');
  langModal.classList.add('open');
  pauseSlider();
}

function closeLangModal() {
  langOverlay.classList.remove('open');
  langModal.classList.remove('open');
  setTimeout(() => {
    langModal.style.transform = '';
    langOverlay.style.opacity = '';
  }, 350);
  resumeSlider();
}

function setLanguage(lang) {
  if (curLang === lang) return;
  curLang = lang;

  // Обновляем десктоп
  langRuBtn.classList.toggle('active', lang === 'ru');
  langUzBtn.classList.toggle('active', lang === 'uz');

  // Обновляем мобильный триггер
  langMobileBtn.textContent = lang.toUpperCase();

  // Обновляем кнопки в модалке
  btnSelectRu.classList.toggle('active', lang === 'ru');
  btnSelectUz.classList.toggle('active', lang === 'uz');

  // Сохраняем позицию скролла табов, чтобы не дергалось
  const savedScroll = tabsViewport.scrollLeft;
  renderTabs();
  tabsViewport.scrollLeft = savedScroll;

  setDish(curCat, curIdx);
  updateCartUI();
  translateStaticUI();
}

function translateStaticUI() {
  const cartTitleEl = document.getElementById('cartTitle');
  const cartTotalLabel = document.getElementById('cartTotalLabel');

  const titleText = curLang === 'ru' ? 'Корзина ' : 'Savat ';
  const firstChild = cartTitleEl.firstChild;
  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    firstChild.textContent = titleText;
  } else {
    cartTitleEl.insertBefore(document.createTextNode(titleText), cartTitleEl.firstChild);
  }

  if (curLang === 'ru') {
    cartTotalLabel.textContent = 'Итого';
    checkoutBtn.textContent = 'Очистить заказ';
    dishMoreText.textContent = 'Детали';
    langModalTitle.textContent = 'Выберите язык';
  } else {
    cartTotalLabel.textContent = 'Jami';
    checkoutBtn.textContent = 'Savatni tozalash';
    dishMoreText.textContent = 'Batafsil';
    langModalTitle.textContent = 'Tilni tanlang';
  }
}

// Получить текущий контекст блюда с учетом выбранного варианта
function getCurrentCartContext() {
  const d = MENU[curCat][curIdx];
  if (d.variants && d.variants[curVariantIdx]) {
    const v = d.variants[curVariantIdx];
    return {
      id: v.id,
      name: {
        ru: `${d.name.ru} (${v.label.ru})`,
        uz: `${d.name.uz} (${v.label.uz})`
      },
      price: v.price,
      img: d.img,
      isVariant: true
    };
  }
  return {
    id: d.id,
    name: d.name,
    price: d.price,
    img: d.img,
    isVariant: false
  };
}

function renderVariantSelector(d) {
  variantSelector.innerHTML = '';
  if (d.variants && d.variants.length > 0) {
    variantSelector.style.display = 'flex';
    const allSamePrice = d.variants.every(v => v.price === d.variants[0].price);
    d.variants.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.className = 'var-btn' + (i === curVariantIdx ? ' active' : '');
      if (allSamePrice) {
        btn.textContent = v.label[curLang];
      } else {
        btn.textContent = `${v.label[curLang]} · ${money(v.price)}`;
      }
      btn.onclick = (e) => {
        e.stopPropagation();
        curVariantIdx = i;
        renderVariantSelector(d);
        updateCartUI();
      };
      variantSelector.appendChild(btn);
    });
  } else if (d.hasToppings) {
    variantSelector.style.display = 'flex';
    const btn = document.createElement('button');
    btn.className = 'var-btn active';
    btn.textContent = curLang === 'ru' ? 'Выбрать топпинги' : 'Toppinglarni tanlash';
    btn.onclick = (e) => {
      e.stopPropagation();
      openWaffleModal();
    };
    variantSelector.appendChild(btn);
  } else {
    variantSelector.style.display = 'none';
  }
}

function setDish(cat, idx) {
  const catChanged = (curCat !== cat);
  curCat = cat; curIdx = idx;
  curVariantIdx = 0;
  slideStartTime = Date.now();
  slideElapsedBeforePause = 0;
  isPausedOnHold = false;
  dotsEl.classList.remove('paused');

  const d = MENU[cat][idx];
  const incoming = showingA ? imgB : imgA;
  const outgoing = showingA ? imgA : imgB;

  // 1. Немедленно спрятать входящий буфер (без CSS-transition), чтобы старое фото не мелькнуло
  clearTimeout(crossfadeTimer);
  incoming.onload = null;
  incoming.classList.remove('active');
  incoming.style.transition = 'none';
  incoming.style.opacity = '0';
  incoming.style.animation = 'none';
  incoming.style.zIndex = '2';
  outgoing.style.zIndex = '1';

  // 2. Загрузить новое фото в полностью невидимый элемент
  incoming.src = d.img;
  incoming.alt = d.name[curLang];

  // 3. После перерисовки и декодирования — плавно проявить поверх старого
  const doFade = () => {
    incoming.onload = null;
    // Двойной rAF: первый — браузер фиксирует opacity:0, второй — запускает плавный переход к opacity:1
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        incoming.style.transition = '';
        incoming.style.opacity = '';
        incoming.style.animation = '';
        incoming.classList.add('active');
        crossfadeTimer = setTimeout(() => {
          outgoing.classList.remove('active');
        }, 650);
      });
    });
  };

  if (incoming.complete && incoming.naturalWidth > 0) {
    doFade();
  } else {
    incoming.onload = doFade;
  }
  showingA = !showingA;

  // Staggered text entrance — снимаем и заново запускаем анимацию
  const dishInfoEl = document.querySelector('.dish-info');
  dishInfoEl.classList.remove('stagger');
  void dishInfoEl.offsetWidth;
  dishInfoEl.classList.add('stagger');

  dishCat.textContent = CAT_NAMES[cat][curLang];
  dishTitle.textContent = d.name[curLang];

  // Установка бейджа
  if (d.badge) {
    dishBadge.textContent = d.badge;
    dishBadge.style.display = 'inline-block';
  } else {
    dishBadge.style.display = 'none';
  }

  // Установка времени подачи (Завтраки до 15:00)
  const isBreakfast = (cat === 'breakfasts' || cat === 'set_breakfast');
  if (isBreakfast) {
    dishTimeBadge.textContent = curLang === 'ru' ? 'до 15:00' : '15:00 gacha';
    dishTimeBadge.style.display = 'inline-flex';
  } else {
    dishTimeBadge.style.display = 'none';
  }

  // Установка описания и веса
  if (d.weight) {
    dishDesc.textContent = `${d.desc[curLang]} · ${d.weight}`;
  } else {
    dishDesc.textContent = d.desc[curLang];
  }

  renderVariantSelector(d);
  updateCartUI();

  renderDots(cat, idx);
  updateActiveTab(catChanged, true);
}

function nextDish() {
  const items = MENU[curCat];
  if (curIdx + 1 < items.length) {
    setDish(curCat, curIdx + 1);
  } else {
    // Переход на следующую категорию
    const catIdx = CATS.indexOf(curCat);
    const nextCat = CATS[(catIdx + 1) % CATS.length];
    setDish(nextCat, 0);
  }
}

function prevDish() {
  if (curIdx > 0) {
    setDish(curCat, curIdx - 1);
  } else {
    // Переход на предыдущую категорию
    const catIdx = CATS.indexOf(curCat);
    const prevCat = CATS[(catIdx - 1 + CATS.length) % CATS.length];
    setDish(prevCat, MENU[prevCat].length - 1);
  }
}

function getDishCartCount(dish) {
  if (!dish) return 0;
  let count = 0;
  if (dish.variants) {
    dish.variants.forEach(v => {
      if (cart[v.id]) count += cart[v.id].qty;
    });
  } else {
    if (cart[dish.id]) count += cart[dish.id].qty;
  }
  // Check any customized waffle variants
  Object.keys(cart).forEach(cartId => {
    if (cartId.startsWith(dish.id + '_')) {
      count += cart[cartId].qty;
    }
  });
  return count;
}

function getCatCartCount(cat) {
  let count = 0;
  const items = MENU[cat];
  if (!items) return 0;
  items.forEach(d => {
    count += getDishCartCount(d);
  });
  return count;
}

function updateTabBadges() {
  const tabs = tabsEl.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    const c = tab.getAttribute('data-cat');
    const count = getCatCartCount(c);
    let badge = tab.querySelector('.tab-badge');
    if (count > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'tab-badge';
        tab.appendChild(badge);
      }
      badge.textContent = count;
    } else if (badge) {
      badge.remove();
    }
  });
}

function updateDotsCartState() {
  const segs = dotsEl.querySelectorAll('.seg');
  segs.forEach((seg, i) => {
    const dish = MENU[curCat] && MENU[curCat][i];
    if (dish) {
      const qty = getDishCartCount(dish);
      seg.classList.toggle('in-cart', qty > 0);
    }
  });
}

function renderDots(cat, idx) {
  dotsEl.innerHTML = '';
  MENU[cat].forEach((dish, i) => {
    const s = document.createElement('div');
    const isActive = (i === idx && appLoaded);
    const dishQty = getDishCartCount(dish);
    s.className = 'seg' + (i < idx ? ' done' : isActive ? ' active' : '') + (dishQty > 0 ? ' in-cart' : '');
    s.innerHTML = '<i></i>';
    dotsEl.appendChild(s);
  });
  if (appLoaded) {
    startAdvanceTimer(cat, idx);
  }
}

function startAdvanceTimer(cat, idx, customDelay = 4500) {
  clearTimeout(advanceTimer);
  slideStartTime = Date.now() - (4500 - customDelay);
  slideElapsedBeforePause = 4500 - customDelay;
  isPausedOnHold = false;
  dotsEl.classList.remove('paused');

  advanceTimer = setTimeout(() => {
    nextDish();
  }, customDelay);
}

function renderTabs() {
  tabsEl.innerHTML = '';
  CATS.forEach(c => {
    const tab = document.createElement('div');
    tab.className = 'cat-tab' + (c === curCat ? ' active' : '');
    tab.setAttribute('data-cat', c);
    tab.textContent = CAT_NAMES[c][curLang];
    tab.onclick = () => {
      if (hasDraggedTabs) return;
      if (curCat !== c) {
        setDish(c, 0);
      } else {
        centerTab(tab, true);
      }
    };
    tabsEl.appendChild(tab);
  });
  updateActiveTab(true, false);
  updateTabBadges();
}

function updateActiveTab(shouldCenter = false, smooth = true) {
  const tabs = tabsEl.querySelectorAll('.cat-tab');
  let activeTabEl = null;
  tabs.forEach(tab => {
    const isAct = (tab.getAttribute('data-cat') === curCat);
    tab.classList.toggle('active', isAct);
    if (isAct) activeTabEl = tab;
  });
  if (shouldCenter && activeTabEl) {
    centerTab(activeTabEl, smooth);
  }
}

function centerTab(tabEl, smooth = true) {
  if (!tabEl || !tabsViewport) return;
  const viewW = tabsViewport.clientWidth;
  const tabLeft = tabEl.offsetLeft;
  const tabW = tabEl.offsetWidth;
  const targetScrollLeft = tabLeft - (viewW - tabW) / 2;
  tabsViewport.scrollTo({
    left: targetScrollLeft,
    behavior: smooth ? 'smooth' : 'auto'
  });
}

let isTabMouseDown = false;
let tabStartX = 0;
let tabScrollLeft = 0;
let hasDraggedTabs = false;

tabsViewport.addEventListener('mousedown', (e) => {
  isTabMouseDown = true;
  hasDraggedTabs = false;
  tabStartX = e.pageX - tabsViewport.offsetLeft;
  tabScrollLeft = tabsViewport.scrollLeft;
  tabsViewport.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
  if (!isTabMouseDown) return;
  const x = e.pageX - tabsViewport.offsetLeft;
  const walk = (x - tabStartX) * 1.4;
  if (Math.abs(walk) > 6) hasDraggedTabs = true;
  tabsViewport.scrollLeft = tabScrollLeft - walk;
});

window.addEventListener('mouseup', () => {
  isTabMouseDown = false;
  tabsViewport.style.cursor = 'grab';
  setTimeout(() => { hasDraggedTabs = false; }, 60);
});

let touchX = null;
const swipeZone = document.getElementById('swipeZone');

function pauseSlider() {
  if (isPausedOnHold || !appLoaded) return;
  holdStartTime = Date.now();
  wasHold = false;
  isPausedOnHold = true;
  clearTimeout(advanceTimer);
  slideElapsedBeforePause = Date.now() - slideStartTime;
  dotsEl.classList.add('paused');
}

function resumeSlider() {
  if (!isPausedOnHold || !appLoaded) return;
  isPausedOnHold = false;
  dotsEl.classList.remove('paused');

  const holdDuration = Date.now() - holdStartTime;
  if (holdDuration > 220) {
    wasHold = true;
  }

  const remaining = 4500 - slideElapsedBeforePause;
  if (remaining <= 350) {
    nextDish();
  } else {
    startAdvanceTimer(curCat, curIdx, remaining);
  }
}

swipeZone.addEventListener('touchstart', e => {
  isTouchEvent = true;
  touchX = e.touches[0].clientX;
  pauseSlider();
}, { passive: true });

swipeZone.addEventListener('touchend', e => {
  if (!appLoaded) return;

  const dx = touchX !== null ? e.changedTouches[0].clientX - touchX : 0;
  const holdDuration = Date.now() - holdStartTime;

  if (Math.abs(dx) > 50) {
    isPausedOnHold = false;
    dotsEl.classList.remove('paused');
    if (dx < 0) {
      nextDish();
    } else {
      prevDish();
    }
  } else if (holdDuration <= 220) {
    isPausedOnHold = false;
    dotsEl.classList.remove('paused');
    const rect = swipeZone.getBoundingClientRect();
    const x = e.changedTouches[0].clientX - rect.left;
    if (x < rect.width * 0.35) {
      prevDish();
    } else {
      nextDish();
    }
  } else {
    resumeSlider();
  }

  touchX = null;
}, { passive: true });

swipeZone.addEventListener('mousedown', pauseSlider);
swipeZone.addEventListener('mouseup', resumeSlider);
swipeZone.addEventListener('mouseleave', resumeSlider);
swipeZone.addEventListener('contextmenu', e => e.preventDefault());

swipeZone.addEventListener('click', e => {
  if (isTouchEvent) {
    isTouchEvent = false;
    return;
  }
  if (wasHold) {
    wasHold = false;
    return;
  }
  const rect = swipeZone.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width * 0.35) {
    prevDish();
  } else {
    nextDish();
  }
});

function addToCart(itemId, qtyDelta, ctx) {
  const activeCtx = ctx || getCurrentCartContext();
  const id = itemId || activeCtx.id;
  if (!cart[id]) {
    cart[id] = { qty: 0, price: activeCtx.price, name: activeCtx.name, img: activeCtx.img };
  }
  cart[id].qty += qtyDelta;
  if (cart[id].qty <= 0) delete cart[id];

  // Сохраняем в localStorage
  localStorage.setItem('lamari_cart', JSON.stringify(cart));

  updateCartUI();
  if (qtyDelta > 0) {
    cartChip.classList.remove('pop');
    void cartChip.offsetWidth;
    cartChip.classList.add('pop');
  }
}

let lastPriceValue = null;
let priceAnimFrame = null;

function animatePriceDisplay(targetPrice) {
  const inCartText = curLang === 'ru' ? 'В корзину' : 'Savatga';

  if (lastPriceValue === null || lastPriceValue === targetPrice) {
    lastPriceValue = targetPrice;
    pillLabel.innerHTML = `${inCartText} · <span class="price-counter">${money(targetPrice)}</span>`;
    return;
  }

  const startPrice = lastPriceValue;
  const startTime = performance.now();
  const duration = 320;

  if (priceAnimFrame) cancelAnimationFrame(priceAnimFrame);

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round((startPrice + (targetPrice - startPrice) * ease) / 500) * 500;

    pillLabel.innerHTML = `${inCartText} · <span class="price-counter ${progress < 1 ? 'rolling' : ''}">${money(currentVal)}</span>`;

    if (progress < 1) {
      priceAnimFrame = requestAnimationFrame(update);
    } else {
      lastPriceValue = targetPrice;
      pillLabel.innerHTML = `${inCartText} · <span class="price-counter">${money(targetPrice)}</span>`;
    }
  }

  priceAnimFrame = requestAnimationFrame(update);
}

function updateCartUI() {
  let count = 0, sum = 0;
  Object.values(cart).forEach(c => { count += c.qty; sum += c.qty * c.price; });
  cartBadge.textContent = count;
  cartBadge.style.display = count > 0 ? 'flex' : 'none';

  // Обновление состояния и текста кнопки добавления
  const activeCtx = getCurrentCartContext();
  const cartItem = cart[activeCtx.id];
  if (cartItem && cartItem.qty > 0) {
    addBtn.classList.add('added');
    const itemsText = curLang === 'ru' ? 'шт в корзине' : 'ta savatda';
    pillLabel.textContent = `${cartItem.qty} ${itemsText}`;
    lastPriceValue = activeCtx.price;
    if (dishInCartBadge) {
      dishInCartBadge.textContent = curLang === 'ru' ? `${cartItem.qty} в корзине` : `${cartItem.qty} savatda`;
      dishInCartBadge.style.display = 'inline-flex';
    }
  } else {
    addBtn.classList.remove('added');
    animatePriceDisplay(activeCtx.price);
    if (dishInCartBadge) {
      dishInCartBadge.style.display = 'none';
    }
  }

  cartTotal.textContent = money(sum);
  checkoutBtn.disabled = count === 0;
  renderCartList();
  updateTabBadges();
  updateDotsCartState();
}

function renderCartList() {
  const itemIds = Object.keys(cart);
  if (itemIds.length === 0) {
    const emptyText = curLang === 'ru' ? 'В корзине пока пусто' : 'Savat hozircha bo\'sh';
    cartList.innerHTML = `<div class="empty-cart">${emptyText}</div>`;
    return;
  }

  cartList.innerHTML = '';
  itemIds.forEach(id => {
    const item = cart[id];
    const el = document.createElement('div');
    el.className = 'cart-row';
    el.innerHTML = `
      <img src="${escapeHTML(item.img)}" alt="${escapeHTML(item.name[curLang])}">
      <div class="cr-info">
        <div class="cr-name">${escapeHTML(item.name[curLang])}</div>
        <div class="cr-price">${money(item.price)}</div>
      </div>
      <div class="cr-qty">
        <button class="btn-minus" data-id="${escapeHTML(id)}">−</button>
        <span>${item.qty}</span>
        <button class="btn-plus" data-id="${escapeHTML(id)}">+</button>
      </div>
    `;

    el.querySelector('.btn-minus').onclick = () => addToCart(id, -1);
    el.querySelector('.btn-plus').onclick = () => addToCart(id, 1);

    cartList.appendChild(el);
  });
}

function triggerConfettiBurst(targetEl) {
  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const colors = ['#BFE94F', '#FFD700', '#FFFFFF', '#E8D3B1', '#72E1D1'];
  const count = 16;
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
    const distance = 35 + Math.random() * 45;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 15;
    const rot = Math.random() * 360;
    const size = 5 + Math.random() * 4;

    p.style.cssText = `
      left: ${centerX}px;
      top: ${centerY}px;
      width: ${size}px;
      height: ${size * (Math.random() > 0.4 ? 1.4 : 1)}px;
      background-color: ${color};
      --tx: ${tx}px;
      --ty: ${ty}px;
      --rot: ${rot}deg;
    `;
    container.appendChild(p);
  }

  setTimeout(() => {
    container.remove();
  }, 700);
}

function animateFlyToCart(fromElement, imgSrc) {
  const flyer = document.createElement('img');
  flyer.src = imgSrc;
  flyer.className = 'flying-dish-item';
  document.body.appendChild(flyer);

  const startRect = fromElement.getBoundingClientRect();
  const endRect = cartChip.getBoundingClientRect();

  const startX = startRect.left + startRect.width / 2 - 22;
  const startY = startRect.top + startRect.height / 2 - 22;

  const endX = endRect.left + endRect.width / 2 - 22;
  const endY = endRect.top + endRect.height / 2 - 22;

  const startTime = performance.now();
  const duration = 650;

  const safetyTimeout = setTimeout(() => {
    if (flyer.parentNode) {
      flyer.remove();
      cartChip.classList.remove('pop');
      void cartChip.offsetWidth;
      cartChip.classList.add('pop');
      triggerConfettiBurst(cartChip);
    }
  }, 1000);

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / duration, 1);

    const easeT = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const curX = startX + (endX - startX) * easeT;
    const curY = startY + (endY - startY) * easeT - Math.sin(t * Math.PI) * 120;

    const scale = 1 - t * 0.65;
    const opacity = 1 - t * 0.2;

    flyer.style.left = `${curX}px`;
    flyer.style.top = `${curY}px`;
    flyer.style.transform = `scale(${scale})`;
    flyer.style.opacity = opacity;

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      clearTimeout(safetyTimeout);
      flyer.remove();
      cartChip.classList.remove('pop');
      void cartChip.offsetWidth;
      cartChip.classList.add('pop');
      triggerConfettiBurst(cartChip);
    }
  }

  requestAnimationFrame(step);
}

// WAFFLE CUSTOMIZER LOGIC
let selectedWaffleChocolate = 'belgian';
let selectedWaffleFruits = [];
let selectedWaffleIceCream = false;

function openWaffleModal() {
  const d = MENU[curCat][curIdx];
  waffleModalTitle.textContent = curLang === 'ru' ? 'Настроить Бельгийские вафли' : 'Belgiya vaflisini sozlash';

  const chocoOptions = [
    { id: 'none', label: { ru: 'Без шоколада', uz: 'Shokoladsiz' }, price: 0 },
    { id: 'belgian', label: { ru: 'Бельгийский шоколад', uz: 'Belgiya shokoladi' }, price: 15000 },
    { id: 'nutella', label: { ru: 'Шоколад Nutella', uz: 'Nutella shokoladi' }, price: 15000 },
    { id: 'pistachio', label: { ru: 'Фисташковый шоколад', uz: 'Pista shokoladi' }, price: 15000 }
  ];

  const fruitOptions = [
    { id: 'strawberry', label: { ru: 'Клубника', uz: 'Qulupnay' }, price: 10000 },
    { id: 'banana', label: { ru: 'Банан', uz: 'Banan' }, price: 10000 }
  ];

  const extraOptions = [
    { id: 'icecream', label: { ru: 'Мороженое', uz: 'Muzqaymoq' }, price: 12000 }
  ];

  function renderWaffleBody() {
    let total = d.price;
    const currentChoco = chocoOptions.find(c => c.id === selectedWaffleChocolate);
    if (currentChoco) total += currentChoco.price;
    selectedWaffleFruits.forEach(fId => {
      const f = fruitOptions.find(item => item.id === fId);
      if (f) total += f.price;
    });
    if (selectedWaffleIceCream) total += extraOptions[0].price;

    waffleModalBody.innerHTML = `
      <div>
        <div class="waffle-sec-title">${curLang === 'ru' ? '1. Шоколад (на выбор)' : '1. Shokolad (tanlov bo\'yicha)'}</div>
        <div class="waffle-opt-grid">
          ${chocoOptions.map(c => `
            <button class="waffle-opt-chip ${selectedWaffleChocolate === c.id ? 'active' : ''}" data-choco="${c.id}">
              <span>${c.label[curLang]}</span>
              <span class="waffle-opt-price">${c.price > 0 ? `+${money(c.price)}` : '0 сум'}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="waffle-sec-title">${curLang === 'ru' ? '2. Фрукты и ягоды' : '2. Mevalar va rezavorlar'}</div>
        <div class="waffle-opt-grid">
          ${fruitOptions.map(f => `
            <button class="waffle-opt-chip ${selectedWaffleFruits.includes(f.id) ? 'active' : ''}" data-fruit="${f.id}">
              <span>${f.label[curLang]}</span>
              <span class="waffle-opt-price">+${money(f.price)}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="waffle-sec-title">${curLang === 'ru' ? '3. Дополнительно' : '3. Qo\'shimcha'}</div>
        <div class="waffle-opt-grid">
          ${extraOptions.map(e => `
            <button class="waffle-opt-chip ${selectedWaffleIceCream ? 'active' : ''}" data-extra="${e.id}">
              <span>${e.label[curLang]}</span>
              <span class="waffle-opt-price">+${money(e.price)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    waffleAddCartBtn.textContent = `${curLang === 'ru' ? 'В корзину' : 'Savatga'} · ${money(total)}`;

    // Bind chips
    waffleModalBody.querySelectorAll('[data-choco]').forEach(btn => {
      btn.onclick = () => {
        selectedWaffleChocolate = btn.getAttribute('data-choco');
        renderWaffleBody();
      };
    });

    waffleModalBody.querySelectorAll('[data-fruit]').forEach(btn => {
      btn.onclick = () => {
        const fruitId = btn.getAttribute('data-fruit');
        if (selectedWaffleFruits.includes(fruitId)) {
          selectedWaffleFruits = selectedWaffleFruits.filter(id => id !== fruitId);
        } else {
          selectedWaffleFruits.push(fruitId);
        }
        renderWaffleBody();
      };
    });

    waffleModalBody.querySelectorAll('[data-extra]').forEach(btn => {
      btn.onclick = () => {
        selectedWaffleIceCream = !selectedWaffleIceCream;
        renderWaffleBody();
      };
    });
  }

  renderWaffleBody();

  waffleOverlay.style.opacity = '';
  waffleModal.style.transform = '';
  waffleOverlay.classList.add('open');
  waffleModal.classList.add('open');
  pauseSlider();
}

function closeWaffleModal() {
  waffleOverlay.classList.remove('open');
  waffleModal.classList.remove('open');
  setTimeout(() => {
    waffleModal.style.transform = '';
    waffleOverlay.style.opacity = '';
  }, 350);
  resumeSlider();
}

waffleAddCartBtn.onclick = () => {
  const d = MENU[curCat][curIdx];
  const partsRu = [];
  const partsUz = [];

  let totalPrice = d.price;

  if (selectedWaffleChocolate === 'belgian') {
    partsRu.push('Бельгийский шоколад'); partsUz.push('Belgiya shokoladi'); totalPrice += 15000;
  } else if (selectedWaffleChocolate === 'nutella') {
    partsRu.push('Nutella'); partsUz.push('Nutella'); totalPrice += 15000;
  } else if (selectedWaffleChocolate === 'pistachio') {
    partsRu.push('Фисташковый шоколад'); partsUz.push('Pista shokoladi'); totalPrice += 15000;
  }

  if (selectedWaffleFruits.includes('strawberry')) {
    partsRu.push('Клубника'); partsUz.push('Qulupnay'); totalPrice += 10000;
  }
  if (selectedWaffleFruits.includes('banana')) {
    partsRu.push('Банан'); partsUz.push('Banan'); totalPrice += 10000;
  }
  if (selectedWaffleIceCream) {
    partsRu.push('Мороженое'); partsUz.push('Muzqaymoq'); totalPrice += 12000;
  }

  const customKey = `waffle_custom_${selectedWaffleChocolate}_${selectedWaffleFruits.sort().join('_')}_${selectedWaffleIceCream ? 'ice' : 'noice'}`;
  const suffixRu = partsRu.length > 0 ? ` (${partsRu.join(', ')})` : '';
  const suffixUz = partsUz.length > 0 ? ` (${partsUz.join(', ')})` : '';

  const customWaffle = {
    id: customKey,
    name: {
      ru: `${d.name.ru}${suffixRu}`,
      uz: `${d.name.uz}${suffixUz}`
    },
    price: totalPrice,
    img: d.img
  };

  addToCart(customKey, 1, customWaffle);
  showAddToast(customWaffle);
  animateFlyToCart(waffleAddCartBtn, d.img);
  closeWaffleModal();
};

closeWaffleBtn.onclick = closeWaffleModal;
waffleOverlay.onclick = closeWaffleModal;

addBtn.addEventListener('click', (e) => {
  const d = MENU[curCat][curIdx];
  const activeCtx = getCurrentCartContext();
  const cartItem = cart[activeCtx.id];

  if (!cartItem) {
    if (d.hasToppings) {
      openWaffleModal();
      return;
    }
    addToCart(activeCtx.id, 1, activeCtx);
    showAddToast(activeCtx);
    triggerConfettiBurst(addBtn);
    animateFlyToCart(addBtn, activeCtx.img);
  } else {
    if (e.target.closest('#pillMinus')) {
      addToCart(activeCtx.id, -1, activeCtx);
      e.stopPropagation();
    } else {
      const plusEl = document.getElementById('pillPlus');
      addToCart(activeCtx.id, 1, activeCtx);
      showAddToast(activeCtx);
      triggerConfettiBurst(plusEl || addBtn);
      animateFlyToCart(plusEl || addBtn, activeCtx.img);
      e.stopPropagation();
    }
  }
});

function showAddToast(d) {
  const addedText = curLang === 'ru' ? 'Добавлено в корзину: ' : 'Savatga qo\'shildi: ';
  toastEl.textContent = `${addedText}${d.name[curLang]}`;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
}

function openCart() {
  updateCartUI();
  cartDrawer.style.transform = '';
  cartOverlay.style.opacity = '';
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
  pauseSlider();
}
function closeCart() {
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
  setTimeout(() => {
    cartDrawer.style.transform = '';
    cartOverlay.style.opacity = '';
  }, 350);
  resumeSlider();
}
cartChip.addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
checkoutBtn.addEventListener('click', () => {
  Object.keys(cart).forEach(k => delete cart[k]);
  localStorage.removeItem('lamari_cart');
  updateCartUI();
  closeCart();
  const clearedText = curLang === 'ru' ? 'Корзина очищена' : 'Savat tozalandi';
  toastEl.textContent = clearedText;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1400);
});

function openDesc() {
  const d = MENU[curCat][curIdx];
  const isBreakfast = (curCat === 'breakfasts' || curCat === 'set_breakfast');

  descModalTitle.textContent = d.name[curLang];
  descModalText.textContent = d.desc[curLang];

  if (isBreakfast) {
    descTimeNotice.textContent = curLang === 'ru'
      ? 'Подаются ежедневно до 15:00'
      : 'Har kuni 15:00 gacha tortiladi';
    descTimeNotice.style.display = 'flex';
  } else {
    descTimeNotice.style.display = 'none';
  }

  if (d.weight) {
    descModalWeight.textContent = d.weight;
    descModalWeight.style.display = 'inline-block';
  } else {
    descModalWeight.textContent = '';
    descModalWeight.style.display = 'none';
  }
  descModal.style.transform = '';
  descOverlay.style.opacity = '';
  descOverlay.classList.add('open');
  descModal.classList.add('open');
  pauseSlider();
}
function closeDesc() {
  descOverlay.classList.remove('open');
  descModal.classList.remove('open');
  setTimeout(() => {
    descModal.style.transform = '';
    descOverlay.style.opacity = '';
  }, 350);
  resumeSlider();
}
dishMoreBtn.addEventListener('click', openDesc);
descOverlay.addEventListener('click', closeDesc);
closeDescBtn.addEventListener('click', closeDesc);

langMobileBtn.addEventListener('click', openLangModal);
langOverlay.addEventListener('click', closeLangModal);
closeLangBtn.addEventListener('click', closeLangModal);

cartChip.addEventListener('animationend', () => cartChip.classList.remove('pop'));

const shareDishBtn = document.getElementById('shareDish');
shareDishBtn.addEventListener('click', async () => {
  const d = MENU[curCat][curIdx];
  const shareUrl = `${window.location.origin}${window.location.pathname}?cat=${curCat}&dish=${curIdx}&lang=${curLang}`;
  const shareTitle = d.name[curLang];
  const shareText = curLang === 'ru'
    ? `Посмотри какое вкусное блюдо в La Mari: ${d.name[curLang]}`
    : `La Mari'dagi ajoyib taomni ko'ring: ${d.name[curLang]}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
    } catch (err) {
      console.log('Пользователь отменил шеринг');
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareUrl);
      const copiedText = curLang === 'ru' ? 'Ссылка скопирована!' : 'Havola nusxalandi!';
      toastEl.textContent = copiedText;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1400);
    } catch (err) {
      console.error('Ошибка копирования ссылки:', err);
    }
  }
});

function makeDraggable(modalEl, handleEl, overlayEl, closeFn, scrollableChild = null) {
  let startY = 0, currentY = 0, isDragging = false;

  function onTouchStart(e) {
    if (scrollableChild && scrollableChild.scrollTop > 0) return;
    startY = e.touches[0].clientY;
    currentY = 0;
    isDragging = true;
    modalEl.style.transition = 'none';
    overlayEl.style.transition = 'none';
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    const y = e.touches[0].clientY;
    const dy = y - startY;

    if (dy > 0) {
      currentY = dy;
      modalEl.style.transform = `translateY(${dy}px)`;
      const opacity = Math.max(0, 1 - dy / 250);
      overlayEl.style.opacity = opacity;
      if (e.cancelable) e.preventDefault();
    }
  }

  function onTouchEnd() {
    if (!isDragging) {
      modalEl.style.transition = '';
      overlayEl.style.transition = '';
      return;
    }
    isDragging = false;
    modalEl.style.transition = '';
    overlayEl.style.transition = '';

    if (currentY > 80) {
      closeFn();
    } else {
      modalEl.style.transform = '';
      overlayEl.style.opacity = '';
    }
    currentY = 0;
  }

  handleEl.addEventListener('touchstart', onTouchStart, { passive: true });
  handleEl.addEventListener('touchmove', onTouchMove, { passive: false });
  handleEl.addEventListener('touchend', onTouchEnd, { passive: true });

  modalEl.addEventListener('touchstart', onTouchStart, { passive: true });
  modalEl.addEventListener('touchmove', onTouchMove, { passive: false });
  modalEl.addEventListener('touchend', onTouchEnd, { passive: true });
}

makeDraggable(descModal, document.querySelector('.desc-modal-handle'), descOverlay, closeDesc);
makeDraggable(cartDrawer, document.querySelector('.drawer-handle'), cartOverlay, closeCart, cartList);
makeDraggable(langModal, document.querySelector('.lang-modal-handle'), langOverlay, closeLangModal);
makeDraggable(waffleModal, document.querySelector('.waffle-handle'), waffleOverlay, closeWaffleModal, waffleModalBody);

renderTabs();
setDish(curCat, curIdx);
updateCartUI();

function setVH() { document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px'); }
setVH();
window.addEventListener('resize', () => {
  setVH();
  const activeTab = tabsEl.querySelector('.cat-tab.active');
  if (activeTab) centerTab(activeTab, false);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
    appLoaded = true;
    renderDots(curCat, curIdx);
  }, 1900);
});
