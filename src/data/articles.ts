export const pdfs = {
  terms:
    "https://www.decorater.cz/user/documents/upload/Decorater.cz%20-%20obchodn%C3%AD%20podm%C3%ADnky%20ve%20form%C3%A1tu%20PDF.pdf",
  privacy:
    "https://www.decorater.cz/user/documents/upload/Decorater.cz%20-%20Z%C3%A1sady%20zpracov%C3%A1n%C3%AD%20osobn%C3%ADch%20%C3%BAdaj%C5%AF%20ve%20form%C3%A1tu%20PDF.pdf",
  withdrawal:
    "https://www.decorater.cz/user/documents/upload/Decorater.cz%20-%20Formul%C3%A1%C5%99%20odstoupen%C3%AD%20od%20smlouvy%20ve%20form%C3%A1tu%20PDF.pdf",
  claim:
    "https://www.decorater.cz/user/documents/upload/Decorater.cz%20-%20Formul%C3%A1%C5%99%20reklamace.pdf",
} as const;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "jak-vybrat-kvetinovy-obraz-do-interieru",
    title: "Jak vybrat květinový obraz do interiéru",
    excerpt:
      "Květinový obraz přináší do interiéru barvy skutečných květin bez zalévání. Poradíme s velikostí, barevností i rámem.",
    body: [
      {
        type: "p",
        text: "Květinový obraz přináší do interiéru barvy a jemnost skutečných květin, ale nevyžaduje zalévání ani pravidelnou výměnu. Poradíme, jak vybrat správnou velikost, barevnost a rám.",
      },
      { type: "h2", text: "Čím je květinový obraz výjimečný?" },
      {
        type: "p",
        text: "Květinový obraz je prostorová dekorace ze stabilizovaných a sušených květin, mechu a dalších botanických prvků. Na rozdíl od tištěného obrazu vyniká skutečnou strukturou a přirozenými detaily.",
      },
      {
        type: "p",
        text: "Každá kompozice vzniká ručně. Přírodní materiály se mohou lehce lišit tvarem nebo odstínem, a proto je každý obraz originál.",
      },
      { type: "h2", text: "Vyberte obraz podle barev interiéru" },
      {
        type: "p",
        text: "Obraz můžete sladit s nábytkem a textilem, nebo jej využít jako kontrastní prvek. Jemné krémové a přírodní tóny působí klidně. Žluté a oranžové květiny vnášejí energii. Růžové a vícebarevné kompozice se stanou dominantou místnosti.",
      },
      { type: "h2", text: "Bílý, nebo černý rám?" },
      {
        type: "p",
        text: "Bílý rám působí lehce a hodí se na světlé stěny. Černý rám vytváří kontrast a sluší moderním interiérům. Rám můžete sladit i s dveřmi, úchytkami nebo dalšími rámy v místnosti.",
      },
      { type: "h2", text: "Jakou velikost zvolit?" },
      {
        type: "p",
        text: "Menší obraz se hodí na užší stěnu, nad komodu nebo do předsíně. Větší formát vynikne nad pohovkou nebo na hlavní stěně. Před výběrem si rozměr vyznačte na stěně papírovou páskou.",
      },
      { type: "h2", text: "Kam obraz pověsit?" },
      {
        type: "ul",
        items: [
          "nad komodu v obývacím pokoji",
          "nad jídelní stůl",
          "do ložnice, předsíně nebo pracovny",
          "do recepce či menšího salonu",
        ],
      },
      {
        type: "p",
        text: "Dekorace je určená pouze do interiéru. Nevhodná je koupelna, terasa nebo místo s přímým sluncem a vysokou vlhkostí.",
      },
      { type: "h2", text: "Jak o květinový obraz pečovat?" },
      {
        type: "p",
        text: "Obraz nezalévejte ani nestříkejte vodou. Prach opatrně odstraňte měkkým štětcem. Chraňte jej před vlhkostí, teplem a prudkými změnami teplot.",
      },
    ],
  },
  {
    slug: "jak-vybrat-mechovy-obraz-do-interieru",
    title: "Jak vybrat mechový obraz do interiéru",
    excerpt:
      "Mechový obraz přináší přírodní barvy a strukturu bez zalévání. Důležitá je velikost, umístění i styl místnosti.",
    body: [
      {
        type: "p",
        text: "Mechový obraz je dekorace ze stabilizovaného mechu a botanických prvků. Stabilizace pomáhá mechu zachovat vzhled bez zalévání. Každý kus je originál.",
      },
      { type: "h2", text: "Vyberte správnou velikost" },
      {
        type: "p",
        text: "Malý obraz se na velké stěně ztratí, příliš velký kus může menší místnost zatížit. Před nákupem si rozměr vyznačte na stěně páskou.",
      },
      {
        type: "ul",
        items: [
          "Menší obraz: užší stěna, komoda, předsíň, menší kancelář",
          "Větší obraz: nad pohovkou, jídelním stolem, v hale nebo recepci",
        ],
      },
      { type: "h2", text: "Kam mechový obraz umístit?" },
      {
        type: "p",
        text: "Nejlépe vynikne na klidné stěně s volným prostorem kolem. Střed obrazu obvykle do úrovně očí. Je určen jen do interiéru, mimo přímé slunce, vlhkost a radiátor.",
      },
      { type: "h2", text: "Musí se mechový obraz zalévat?" },
      {
        type: "p",
        text: "Ne. Nestříkejte jej vodou. Prach odstraňte měkkým štětcem nebo slabým proudem studeného vzduchu. Při správném umístění vydrží krásný několik let.",
      },
    ],
  },
  {
    slug: "flower-box-nebo-klasicka-kytice",
    title: "Flower box, nebo klasická kytice?",
    excerpt:
      "Klasická kytice potěší svěžestí, flower box dlouhou životností. Která varianta se hodí jako dárek?",
    body: [
      {
        type: "p",
        text: "Klasická kytice se skládá z čerstvě řezaných květin a potřebuje vodu i péči. Flower box je hotová dekorace v boxu. Ze stabilizovaných květin nepotřebuje vodu a vydrží několik let.",
      },
      { type: "h2", text: "Výhody klasické kytice" },
      {
        type: "p",
        text: "Hodí se, když chcete čerstvé a voňavé květiny na konkrétní den a víte, že se o ně obdarovaná může starat. Životnost je obvykle několik dní až dva týdny.",
      },
      { type: "h2", text: "Výhody flower boxu" },
      {
        type: "ul",
        items: [
          "dlouhá životnost bez zalévání",
          "hotová interiérová dekorace bez vázy",
          "originální ruční výroba",
          "připomínka události na delší dobu",
        ],
      },
      {
        type: "p",
        text: "Vyberte kytici pro vůni a svěžest daného dne. Flower box zvolte, když hledáte dekoraci, která tuto chvíli připomene mnohem déle.",
      },
    ],
  },
  {
    slug: "jak-pecovat-o-stabilizovane-a-susene-kvetiny",
    title: "Jak pečovat o stabilizované a sušené květiny",
    excerpt:
      "Stabilizované a sušené květiny nepotřebují zalévání. Stačí správné místo a šetrné zacházení.",
    body: [
      {
        type: "p",
        text: "Nejdůležitější pravidlo: nikdy je nezalévejte a nestříkejte vodou. Stabilizací byla přirozená vláha nahrazena konzervačním roztokem.",
      },
      {
        type: "ul",
        items: [
          "pouze interiér, ne koupelna ani terasa",
          "chránit před přímým sluncem",
          "vyhnout se vysoké vlhkosti",
          "mimo radiátor, krb a klimatizaci",
          "prach odstraňovat jen velmi jemně",
        ],
      },
      {
        type: "p",
        text: "Při správném umístění mohou zůstat krásné několik let. Drobné změny odstínu jsou přirozenou vlastností přírodních materiálů.",
      },
    ],
  },
  {
    slug: "jak-vybrat-flower-box-jako-darek",
    title: "Jak vybrat flower box jako dárek",
    excerpt:
      "Flower box neuvadne za několik dní. Poradíme s velikostí, barvami a stylem pro každou příležitost.",
    body: [
      {
        type: "p",
        text: "Flower box potěší k narozeninám, výročí, svátku, promoci i jako poděkování. Vybírejte podle barev obdarované a stylu jejího interiéru.",
      },
      {
        type: "ul",
        items: [
          "Růžové a pudrové tóny: romantika a jemnost",
          "Červené a vínové: láska, výročí, elegance",
          "Krémové a přírodní: nadčasová jistota",
          "Žluté: radost a světlo",
        ],
      },
      {
        type: "p",
        text: "Menší box je milá pozornost, střední velikost je univerzální k narozeninám, velký box se hodí k významnému jubileu. Každý kus Decorater vzniká ručně v Babicích nad Svitavou.",
      },
    ],
  },
  {
    slug: "moss-bowl---kousek-prirody--ktery-promeni-kazdy-interier",
    title: "Moss Bowl – Kousek přírody, který promění každý interiér",
    excerpt:
      "Ručně aranžované misky ze stabilizovaného mechu a přírodních materiálů bez údržby.",
    body: [
      {
        type: "p",
        text: "Moss Bowl by Decorater je originální interiérová dekorace ze stabilizovaného mechu a pečlivě vybraných přírodních materiálů. Každá miska je ručně aranžovaná.",
      },
      { type: "h2", text: "Co je Moss Bowl?" },
      {
        type: "ul",
        items: [
          "sušené květy, lotosové tobolky a exotické plody",
          "přírodní semena, dřevo a stabilizované rostliny",
          "bez zalévání, světla i speciální péče",
          "dlouhá životnost při správném umístění",
        ],
      },
      {
        type: "p",
        text: "Hodí se na konferenční stolek, komodu, jídelní stůl, do kanceláře i recepce. Zapadne do moderního, skandinávského i minimalistického interiéru.",
      },
    ],
  },
  {
    slug: "artisan-vanoce",
    title: "Artisan Vánoce",
    excerpt:
      "Vánoce s přírodními materiály, ruční tvorbou a jemnou elegancí v červené, zelené a zlaté.",
    body: [
      {
        type: "p",
        text: "Vánoce nemusí být přeplácené, aby byly kouzelné. Trend artisan spojuje přírodní materiály, ruční tvorbu a jemnou eleganci. Tón svátků: červená, zelená a dotek zlata.",
      },
      {
        type: "ul",
        items: [
          "ručně vyráběné dekorace",
          "mech, sušené květy a stabilizované rostliny",
          "barvy, které ladí, ne křičí",
          "kvalita před kvantitou",
        ],
      },
      { type: "h2", text: "Jak si vytvořit artisan atmosféru" },
      {
        type: "ol",
        items: [
          "Vyberte jeden výrazný prvek, například vánoční flower box.",
          "Přidejte svíčky s teplým světlem.",
          "Použijte jen pár doplňků.",
          "Vylaďte textilie do stejné barevné rodiny.",
        ],
      },
    ],
  },
  {
    slug: "proc-dat-prednost-stabilizovanym-kvetinam-pred-cerstvymi",
    title: "Proč dát přednost stabilizovaným květinám před čerstvými?",
    excerpt:
      "Čerstvá kytice vydrží dny. Stabilizované květiny si uchovají vzhled měsíce až roky bez složité péče.",
    body: [
      {
        type: "p",
        text: "Čerstvá kytice potěší vůní, ale její krása trvá jen pár dní. Stabilizované květiny si uchovají vzhled i barvy měsíce až let.",
      },
      {
        type: "ul",
        items: [
          "dlouhá životnost díky konzervaci",
          "minimální péče bez vody a slunce",
          "ekonomická volba v delším horizontu",
          "méně odpadu a nižší zátěž prostředí",
          "nadčasová dekorace i dárek",
        ],
      },
      {
        type: "p",
        text: "Čerstvé květy mají kouzlo pro slavnostní okamžik. Pro každodenní radost jsou stabilizované květiny praktickou volbou.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
