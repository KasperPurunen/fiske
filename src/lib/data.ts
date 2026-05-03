import { gearImages, methodImages, speciesImages } from "@/lib/images";

export type Method = {
  slug: string;
  name: string;
  image: string;
  season: string;
  target: string;
  shortText: string;
  intro: string;
  howItWorks: string[];
  whenWhere: string;
  beginnerTips: string[];
};

export type Species = {
  slug: string;
  name: string;
  latin: string;
  image: string;
  category: "Sötvatten" | "Saltvatten";
  size: string;
  habitat: string;
  bestMethod: string;
  bestBait: string;
  shortTip: string;
  intro: string;
  howToCatch: string[];
  funFacts: string[];
};

export type Gear = {
  slug: string;
  name: string;
  image: string;
  badge: string;
  shortText: string;
  intro: string;
  whatToLookFor: string[];
  beginnerPick: string;
};

export const methods: Method[] = [
  {
    slug: "flugfiske",
    name: "Flugfiske",
    image: methodImages.flugfiske,
    season: "Vår–höst",
    target: "Öring, harr, lax",
    shortText:
      "Med flugfiske kastar du en lätt fluga med hjälp av en tung lina. Tekniken tar tid att lära sig men är väldigt rolig — det är som att måla i luften. Funkar bäst i strömmande vatten.",
    intro:
      "Flugfiske är en av de äldsta och mest poetiska fiskeformerna. Istället för att kasta ett tungt drag använder du själva linan som vikt och låter en nästan viktlös fluga landa mjukt på vattnet — precis som en riktig insekt.",
    howItWorks: [
      "Du har ett långt, smalt flugspö (oftast 8–9 fot, klass 5–6 för öring).",
      "Linan är tung och plastig — det är den som du faktiskt kastar.",
      "Mellan linan och flugan sitter ett tunt, genomskinligt tafs.",
      "Genom att slänga spöet fram och tillbaka bygger du upp en kaströrelse där linan rullar ut.",
      "Flugan landar mjukt på vattnet och flyter eller sjunker beroende på typ.",
    ],
    whenWhere:
      "Bäst i strömmande åar och älvar — särskilt där öring, harr och lax går. Tidig morgon eller kväll, när insekterna kläcks, är guld. På sommaren när det är varmt blir fisket extra bra.",
    beginnerTips: [
      "Börja med ett färdigt nybörjarpaket — spö, rulle, lina och tafs ihop.",
      "Öva kastet på en gräsmatta innan du går till vattnet — utan krok!",
      "Stå alltid med strömmen i ryggen och kasta uppströms.",
      "Smyg fram. Öringen ser dig långt innan du ser den.",
    ],
  },
  {
    slug: "spinnfiske",
    name: "Spinnfiske",
    image: methodImages.spinnfiske,
    season: "Hela året",
    target: "Gädda, abborre, gös",
    shortText:
      "Du kastar ut ett drag och vevar in det. Draget rör sig som en liten fisk och lurar rovfiskarna. Lätt att börja med och funkar i nästan alla vatten.",
    intro:
      "Spinnfiske är troligen den vanligaste fiskeformen i Sverige. Du har ett spö, en haspelrulle och ett drag som ser ut som en småfisk. Du kastar ut, vevar hem — och försöker lura rovfisken att tro att draget är mat.",
    howItWorks: [
      "Spöet är oftast 2,1–2,7 meter långt med en haspelrulle.",
      "Linan är tunn (0,20–0,30 mm nylon eller flätlina).",
      "I änden sitter ett drag — sked, spinnare, jigg eller wobbler.",
      "Du kastar ut, låter draget sjunka lite, och vevar sedan in i jämn fart.",
      "Variera farten och gör små ryck — det får draget att se levande ut.",
    ],
    whenWhere:
      "Funkar i nästan alla vatten — sjöar, åar, kusten. Vår och höst är bäst för rovfisk. Pröva runt vass, stenar, branta kanter och i utlopp där fisken jagar.",
    beginnerTips: [
      "Börja med ett medelstyvt spö (klass 10–30 g) — funkar för det mesta.",
      "Använd alltid stållina eller fluorocarbon-tafs när du fiskar gädda.",
      "Variera draget om det inte hugger — färg, storlek och djup.",
      "Räkna sekunderna draget sjunker för att fiska på olika djup.",
    ],
  },
  {
    slug: "mete",
    name: "Mete",
    image: methodImages.mete,
    season: "Vår–höst",
    target: "Mört, abborre, braxen",
    shortText:
      "Den klassiska metoden — krok, mask och flöte. Du kastar ut och väntar tills flötet sticker ner. Perfekt för nybörjare och bra att göra med kompisar.",
    intro:
      "Mete är fiske i sin enklaste form: en krok, ett bete, ett flöte och tålamod. Det är så de flesta börjar fiska som barn — och många fortsätter hela livet. Lugnt, mysigt och perfekt att kombinera med en kanelbulle och en termos.",
    howItWorks: [
      "Spöet kan vara enkelt — t.ex. ett 4 m långt teleskopspö utan rulle.",
      "Sätt fast ett flöte på linan och en liten krok i änden.",
      "Trä på betet — mask, majs, deg, maggot eller bröd.",
      "Kasta ut försiktigt, sätt dig och vänta.",
      "När flötet sjunker — slå mothåll och dra upp fisken.",
    ],
    whenWhere:
      "Funkar i lugnt vatten — bryggor, vikar, åar, dammar. Sommarens varma dagar är perfekta. Lokal abborre, mört och braxen biter ofta hela dagen.",
    beginnerTips: [
      "Köp färdiga krokar med påsatt tafs — sparar massor av tid.",
      "Mask från trädgården funkar nästan alltid.",
      "Mata gärna lite (släng i lite majs eller bröd) där du fiskar.",
      "Sitt stilla — fisken hör mer än du tror.",
    ],
  },
  {
    slug: "pimpel",
    name: "Pimpel",
    image: methodImages.pimpel,
    season: "Vinter",
    target: "Abborre, röding, gädda",
    shortText:
      "Vinterns fiske. Du borrar ett hål i isen och pimplar med en liten pirk eller balansvippa. Klä dig varmt — och kolla alltid att isen håller!",
    intro:
      "Pimpelfiske är vinterns stora äventyr. Du borrar ett hål i isen, sätter dig på en pall, och låter en liten pirk dansa i hålet. När det hugger märks det direkt i handen — pimpelfisket är väldigt taktiskt.",
    howItWorks: [
      "Du behöver en isborr (manuell eller eldriven) för att göra hålet.",
      "Pimpelspöet är kort (30–60 cm) med en enkel rulle eller spole.",
      "I änden sitter en pirk — en liten vikt med krok som dansar i vattnet.",
      "Du fiskar nära botten och lyfter spöet 10–30 cm i taget — pirken faller och 'vibrerar'.",
      "När fisken hugger känns det som ett hårt knyck.",
    ],
    whenWhere:
      "Mitt på vintern, när isen är minst 10 cm tjock på bra plats. Abborre och röding är vanligast. Pröva nära öar, branta kanter eller där fiskebåtarna brukar vara på sommaren.",
    beginnerTips: [
      "Säkerheten först — bär alltid isnubbar runt halsen och säg var du fiskar.",
      "Borra flera hål och flytta dig — fisken är inte alltid där du tror.",
      "Klä dig varmt i lager. Det blir kallt att sitta still.",
      "Maggot eller en liten räka som bete höjer chansen rejält.",
    ],
  },
  {
    slug: "trolling",
    name: "Trolling",
    image: methodImages.trolling,
    season: "Vår–höst",
    target: "Lax, öring, gädda",
    shortText:
      "Du drar dragen efter en båt som rör sig sakta. Med flera spön samtidigt kan du täcka stora områden. Vanligt i de stora sjöarna som Vänern och Vättern.",
    intro:
      "Trolling betyder att du drar drag efter en båt som rör sig sakta. Du kan ha 2–8 spön igång samtidigt på olika djup. Det är ett effektivt sätt att täcka stora områden och hitta fisken — speciellt i stora, djupa sjöar och längs kusten.",
    howItWorks: [
      "Båten kör i 2–4 knop, helt långsamt.",
      "Trollingspön är långa (2,4–3,3 m) och ligger i särskilda hållare.",
      "Olika djup nås med planerboards (ut åt sidorna) eller downriggers (ner i djupet).",
      "Dragen är wobblers, skedar eller flugor — efter vad fisken vill ha.",
      "När det hugger börjar rullen vina — då är det dags!",
    ],
    whenWhere:
      "Främst i de stora sjöarna — Vänern och Vättern är världsberömda för insjölax och öring. Vår och höst är bäst. Längs kusten kan man trolla efter havsöring och lax.",
    beginnerTips: [
      "Börja med 2 spön. Mer än så blir snabbt rörigt utan vana.",
      "Håll konstant fart och rak kurs — varv tar tid att räta upp linorna efter.",
      "Notera djup, fart och drag varje gång du får hugg — så hittar du mönstret.",
      "Säkerhet på sjön: flytväst, kapell, koll på vädret.",
    ],
  },
];

export const species: Species[] = [
  {
    slug: "abborre",
    name: "Abborre",
    latin: "Perca fluviatilis",
    image: speciesImages.abborre,
    category: "Sötvatten",
    size: "20–40 cm vanligt, kan bli över 50 cm",
    habitat: "Sjöar och åar i hela Sverige",
    bestMethod: "Spinn eller mete",
    bestBait: "Liten jigg, spinnare eller mask",
    shortTip:
      "Abborren går ofta i stim. Hittar du en — finns det fler! Pröva runt vass, stenar och bryggor. På sommaren är morgon och kväll bäst.",
    intro:
      "Abborren är Sveriges nationalfisk och en av landets vanligaste fiskar. Den känns igen på sina mörka, lodräta tvärrandiga sidor och de röda undre fenorna. En riktig stor abborre — kallas randig storgubbe av många — är en av de roligaste fiskarna att få på kroken.",
    howToCatch: [
      "Pröva små jiggar (3–8 cm) i röd, vit eller chartreuse på spinnspöet.",
      "Mete med mask längs en vassrand på sommaren — säkert kort.",
      "På vintern: pimpla med en liten pirk + maggot.",
      "Kolla efter ytaktivitet — om småfisk hoppar är abborren under.",
    ],
    funFacts: [
      "Abborren har vassa taggar i ryggfenan — håll med våt hand när du tar i den.",
      "Stora honor kan leva i 20+ år.",
      "Abborren är kannibal — stora abborrar äter helst småabborrar.",
    ],
  },
  {
    slug: "gadda",
    name: "Gädda",
    latin: "Esox lucius",
    image: speciesImages.gadda,
    category: "Sötvatten",
    size: "60–100 cm vanligt, kan bli över 130 cm",
    habitat: "Insjöar, åar, brackvatten",
    bestMethod: "Spinn eller trolling",
    bestBait: "Stora wobblers, jerkbaits, jiggar",
    shortTip:
      "Gäddan är en rovfisk som ligger och vaktar i vass och vid stenar. Använd alltid stållina — gäddan har vassa tänder! Vår och höst är bästa tiden.",
    intro:
      "Gäddan är en hänsynslös rovfisk som ligger orörlig i vass eller bakom stenar och väntar på att något ska simma förbi. Då sker en blixtsnabb attack. Stora gäddor — riktiga 'meterhugg' — är många sportfiskares dröm.",
    howToCatch: [
      "Stora wobblers (12–20 cm) i naturliga eller knallfärger.",
      "Jerkbaits som du tvärrycker — gäddan triggas av rörelse.",
      "Trolling längs branta kanter på 4–8 m djup.",
      "Använd stållina eller tjock fluorocarbon — annars biter gäddan av linan.",
    ],
    funFacts: [
      "Gäddan kan attackera fiskar nästan lika stora som sig själv.",
      "Den har över 700 vassa, bakåtböjda tänder.",
      "Vår och höst är bäst — på sommaren är gäddan trög av värmen.",
    ],
  },
  {
    slug: "gos",
    name: "Gös",
    latin: "Sander lucioperca",
    image: speciesImages.gos,
    category: "Sötvatten",
    size: "40–70 cm vanligt, kan bli över 100 cm",
    habitat: "Större sjöar med grumligt vatten",
    bestMethod: "Jiggfiske eller trolling",
    bestBait: "Jigg, vertikalfiske med small fish-imitation",
    shortTip:
      "Gösen jagar helst i skymning och på natten. Den gillar djupa kanter och bottnar med grus. Var försiktig med kroken — gösen har vassa taggar i fenan!",
    intro:
      "Gösen är en av Sveriges mest eftertraktade matfiskar — vit, fast köttbit utan tråkiga ben. Den ser ut som en blandning av gädda och abborre, med samma långsmala kropp som gäddan men randig som abborren.",
    howToCatch: [
      "Jiggfiske med 7–12 cm jigg i naturliga färger på 4–10 m djup.",
      "Vertikalfiske från båt med ekolod — håll jiggen rakt under båten.",
      "Trolling med small wobblers längs djupa kanter.",
      "Bästa tiden: skymning och första timmarna efter mörker.",
    ],
    funFacts: [
      "Gösen har stora, glansiga ögon — anpassade för att se i mörker.",
      "Den jagar helst i grumligt eller mörkt vatten.",
      "I Mälaren finns enorma bestånd — Sveriges främsta gösvatten.",
    ],
  },
  {
    slug: "oring",
    name: "Öring",
    latin: "Salmo trutta",
    image: speciesImages.oring,
    category: "Sötvatten",
    size: "30–60 cm vanligt, havsöring kan bli över 80 cm",
    habitat: "Strömmande åar, havet, kalla sjöar",
    bestMethod: "Flugfiske eller spinn",
    bestBait: "Torrflugor, nymfer, små skedar",
    shortTip:
      "Öringen är skygg och ser bra. Smyg fram, kasta uppströms och låt draget driva ner med strömmen. Tidig morgon eller skymning är guld.",
    intro:
      "Öringen är en av de vackraste och mest utmanande fiskarna i svenska vatten. Insjööring, bäcköring och havsöring är samma art men lever i olika miljöer. Att se en öring stiga och ta en torrfluga är en av sportfiskets största upplevelser.",
    howToCatch: [
      "Flugfiske: torrfluga om insekter kläcker, nymf annars.",
      "Spinn: små glittrande skedar (5–15 g), kastas uppströms.",
      "Vid kustfiske: jigga med små jiggar längs stenrev.",
      "Smyg fram, klä dig i dämpade färger.",
    ],
    funFacts: [
      "Havsöring vandrar ut i havet och kommer tillbaka för att leka i samma å där den föddes.",
      "Färgen varierar — från silver i havet till brunfläckig i bäckar.",
      "Öringen kan leva i 15+ år.",
    ],
  },
  {
    slug: "lax",
    name: "Lax",
    latin: "Salmo salar",
    image: speciesImages.lax,
    category: "Sötvatten",
    size: "60–100 cm vanligt, kan bli över 120 cm",
    habitat: "Östersjön och stora älvar (Mörrumsån, Torneälv)",
    bestMethod: "Flugfiske eller trolling",
    bestBait: "Flugor, wobblers, naturligt bete",
    shortTip:
      "Lax går upp i åarna för att leka under sommar och höst. Det är då du har bäst chans att fånga den från land. Kräver ofta fiskekort och har särskilda regler.",
    intro:
      "Atlantlaxen — kungen bland sötvattensfiskar. Den växer upp i havet, blir stor och stark, och vandrar sedan tillbaka till samma älv där den föddes för att leka. Att kroka en stor lax i en älv är något du minns hela livet.",
    howToCatch: [
      "Flugfiske med större laxflugor i kustälvar.",
      "Spinn med tunga skedar (15–30 g) i klart vatten.",
      "Trolling i Vänern eller längs Östersjökusten.",
      "Lokala regler är strikta — kolla minimimått och fångstkvoter.",
    ],
    funFacts: [
      "Laxen kan hoppa över 3 meter för att passera vattenfall.",
      "Mörrumsån har Sveriges längsta dokumenterade laxfiske — sedan 1500-talet.",
      "Östersjölaxen är genetiskt unik och skyddad.",
    ],
  },
  {
    slug: "regnbage",
    name: "Regnbåge",
    latin: "Oncorhynchus mykiss",
    image: speciesImages.regnbage,
    category: "Sötvatten",
    size: "30–60 cm vanligt",
    habitat: "Put-and-take-vatten, vissa åar",
    bestMethod: "Flugfiske, mete, spinn",
    bestBait: "Powerbait, mask, små spinnare och flugor",
    shortTip:
      "Regnbågen sätts ofta ut i fiskevatten där man betalar dagskort. Den är inte så skygg som öringen och perfekt för nybörjare som vill få fisk på kroken.",
    intro:
      "Regnbågen kommer egentligen från västra Nordamerika men är nu en av Sveriges vanligaste 'put-and-take'-fiskar. Den känns igen på sin rosa stripa längs sidan. Perfekt fisk för nybörjare — den är inte särskilt slug och biter på det mesta.",
    howToCatch: [
      "Mete med Powerbait på en bottenrigg — klassiker i put-and-take.",
      "Spinn med små spinnare (4–6 g).",
      "Flugfiske med nymfer eller streamers.",
      "På morgon och kväll äter den vid ytan — pröva torrfluga.",
    ],
    funFacts: [
      "Regnbågen kan hoppa högt — riktigt rolig på lätt utrustning.",
      "Den växer snabbt — i en bra damm kan den dubblera vikten på ett år.",
      "Bra matfisk — fast och inte särskilt benig.",
    ],
  },
  {
    slug: "roding",
    name: "Röding",
    latin: "Salvelinus alpinus",
    image: speciesImages.roding,
    category: "Sötvatten",
    size: "30–50 cm vanligt, kan bli över 70 cm",
    habitat: "Kalla, djupa sjöar — främst i fjällen och Vättern",
    bestMethod: "Pimpel, mete, trolling",
    bestBait: "Maggot, mörtfileé, små pirkar",
    shortTip:
      "Rödingen står djupt på sommaren och nära ytan på vintern. Den är en av Sveriges vackraste fiskar med röda undersidor under leken. Smakar fantastiskt rökt!",
    intro:
      "Rödingen lever i kalla, klara sjöar — från fjällen i norr till djupet av Vättern i söder. Under leken på hösten får hanen lysande röd buk och vita kanter på fenorna. Kötten är rosa-orange och en av de finaste matfiskarna i Sverige.",
    howToCatch: [
      "Pimpel på vintern, ofta nära ytan i klara fjällvatten.",
      "Trolling djupt (15–30 m) på sommaren med små wobblers.",
      "Mete med maggot eller mörtfileé från båt.",
      "Lyssna på lokala fiskare — rödingen är platsspecifik.",
    ],
    funFacts: [
      "Rödingen tål kallaste vattnet av alla våra laxfiskar.",
      "I Vättern finns en unik storrödingsstam.",
      "Rökt röding är en delikatess i fjällvärlden.",
    ],
  },
  {
    slug: "harr",
    name: "Harr",
    latin: "Thymallus thymallus",
    image: speciesImages.harr,
    category: "Sötvatten",
    size: "30–45 cm vanligt, kan bli över 60 cm",
    habitat: "Strömmande, kalla älvar — främst Norrland",
    bestMethod: "Flugfiske",
    bestBait: "Små torrflugor, nymfer",
    shortTip:
      "Harren känns igen på sin enorma ryggfena, nästan som en segel. Den jagar insekter vid ytan — perfekt för flugfiske. Lever i samma vatten som öringen.",
    intro:
      "Harren är de norrländska älvarnas drottning — en otroligt vacker fisk med en stor, segel-liknande ryggfena målad i blått, rött och violett. Den lever på insekter och är därför ett favoritmål för flugfiskare.",
    howToCatch: [
      "Flugfiske med små torrflugor (#16–#20) eller nymfer.",
      "Kasta över strömkanter och kvillar — där harren brukar stå.",
      "Mete med mask kan funka i vissa vatten.",
      "Bästa tider: sommarkvällar när insekter kläcker.",
    ],
    funFacts: [
      "Harren luktar svagt av timjan — på latin heter den Thymallus.",
      "Den lever ofta i samma vatten som öring och röding.",
      "Fenomenal matfisk — vit, mild och delikat.",
    ],
  },
  {
    slug: "sik",
    name: "Sik",
    latin: "Coregonus lavaretus",
    image: speciesImages.sik,
    category: "Sötvatten",
    size: "30–50 cm vanligt",
    habitat: "Kalla sjöar och bräckt vatten i hela Sverige",
    bestMethod: "Mete, pimpel, nät",
    bestBait: "Maggot, små jiggar, sikflugor",
    shortTip:
      "Siken är en lugn fisk som lever i stim. Den gillar svalt, klart vatten. Viktig matfisk i norr — rökt sik från Storsjön är en delikatess.",
    intro:
      "Siken är en silverfärgad stimfisk som lever i kalla, djupa sjöar och längs Östersjökusten. Den är skygg och svår att fånga med spinn — mete och pimpel funkar bäst. Sikkött är vitt, milt och anses som en av Sveriges finaste matfiskar.",
    howToCatch: [
      "Pimpel med små pirkar och maggot på vintern.",
      "Mete med maggot eller liten räka från brygga eller båt.",
      "Sikflugor — speciella små flugor utvecklade för flugfiske efter sik.",
      "Sök upp stim med ekolod på 5–15 m djup.",
    ],
    funFacts: [
      "Sikrom säljs som löjrom-substitut.",
      "Det finns flera underarter — älvsik, blåsik, planktonsik.",
      "Storsjö-sik och kalixsik är riktiga delikatesser.",
    ],
  },
  {
    slug: "torsk",
    name: "Torsk",
    latin: "Gadus morhua",
    image: speciesImages.torsk,
    category: "Saltvatten",
    size: "40–80 cm vanligt, kan bli över 1 m",
    habitat: "Västkusten, Östersjön (på djupare vatten)",
    bestMethod: "Pirkfiske från båt, kustspinn",
    bestBait: "Pirkar, jiggar, sill som naturbete",
    shortTip:
      "Torsken känns igen på sin skäggtömme under munnen. Bestånden i Östersjön är svaga — kontrollera alltid lokala regler. På Västkusten är fisket bättre.",
    intro:
      "Torsken är en av Sveriges viktigaste matfiskar — den vita, flagiga köttbiten i fiskpinnar och fish & chips. Bestånden i Östersjön är pressade och fisket är hårt reglerat, men på Västkusten kan man fortfarande få fina fiskar.",
    howToCatch: [
      "Pirkfiske från båt på 30–80 m djup — släpp pirken till botten och pumpa upp.",
      "Kustspinn med tunga jiggar längs stenrev.",
      "Naturligt bete (sillfilé) på krok — torsken älskar lukt.",
      "Kolla alltid aktuella regler — minimimått och fredningstider varierar.",
    ],
    funFacts: [
      "Skäggtömmen under munnen hjälper torsken att hitta mat på botten.",
      "En stor torsk kan svälja en hel sill.",
      "Torskleverolja från torskens lever är en klassisk vintervitamin.",
    ],
  },
  {
    slug: "makrill",
    name: "Makrill",
    latin: "Scomber scombrus",
    image: speciesImages.makrill,
    category: "Saltvatten",
    size: "30–45 cm vanligt",
    habitat: "Västkusten under sommarhalvåret",
    bestMethod: "Hekla (rad med små krokar) från båt eller brygga",
    bestBait: "Glittrande hekla, små jiggar",
    shortTip:
      "Makrillen kommer in mot kusten i juli–september i stora stim. Det är ett av Sveriges roligaste och enklaste sommarfisken — ofta får man flera samtidigt!",
    intro:
      "Makrillen är en av sommarens stora glädjeämnen längs Västkusten. När stimmen kommer in mot land kan du ofta få flera makrillar samtidigt på en hekla. Färsk grillad makrill är en sommarklassiker.",
    howToCatch: [
      "Hekla med 4–6 små glittrande krokar — hela 'kedjan' i ett kast.",
      "Kasta från brygga, klippa eller liten båt.",
      "Variera vevhastighet och låt heklan sjunka olika djupt.",
      "Bästa tid: juli–september när vattnet är som varmast.",
    ],
    funFacts: [
      "Makrillen kan simma i 80 km/h — en av havets snabbaste fiskar.",
      "Stora stim kan vara hundratals meter långa.",
      "Färska makrillar har vacker ränder med metalliska blå/gröna toner.",
    ],
  },
  {
    slug: "sill",
    name: "Sill / Strömming",
    latin: "Clupea harengus",
    image: speciesImages.sill,
    category: "Saltvatten",
    size: "20–35 cm vanligt",
    habitat: "Hela kusten — kallas strömming i Östersjön, sill på Västkusten",
    bestMethod: "Hekla från båt eller pir",
    bestBait: "Små glittrande krokar utan bete",
    shortTip:
      "Sillen går nära ytan i stim och är lätt att fånga med en hekla. Klassiskt fiske från piren en sommarkväll — och en av Sveriges viktigaste matfiskar.",
    intro:
      "Sill (Västkusten) eller strömming (Östersjön) — samma art, olika namn. Den är en av världens viktigaste matfiskar och har varit grunden i den svenska kosthållningen i tusentals år. Surströmming, inlagd sill, gravad sill — listan är lång.",
    howToCatch: [
      "Hekla med 6–8 små krokar utan bete — sillen biter på själva metallen.",
      "Pir, brygga eller båt — bäst på morgon och kväll.",
      "Låt heklan sjunka 5–15 m och dra upp i ryckiga rörelser.",
      "På Västkusten lokal sill, i Östersjön strömming — samma teknik.",
    ],
    funFacts: [
      "Strömming är samma fisk som sill, bara från Östersjön — där växer den långsammare och blir mindre.",
      "Sill leker i enorma stim — miljarder fiskar samtidigt.",
      "Surströmming är jäst strömming — en svensk delikatess som luktar starkt.",
    ],
  },
];

export const gear: Gear[] = [
  {
    slug: "fiskespo",
    name: "Fiskespö",
    image: gearImages.spo,
    badge: "Grund",
    shortText:
      "Spöet är själva grunden. Korta spön är lätta att hantera och bra för småfiske. Längre spön kastar längre och är bra för stora fiskar. Om du är ny — börja med ett spinnspö på ca 2,1–2,4 m.",
    intro:
      "Spöet är hjärtat i din utrustning. Det avgör hur långt du kan kasta, hur mycket du känner när fisken hugger, och vilken sorts fiske du kan göra. Det finns hundratals modeller, men för en nybörjare är valet enkelt: ett vanligt spinnspö passar nästan allt fiske.",
    whatToLookFor: [
      "Längd: 2,1–2,4 m är allround — kortare för båt, längre för långt kast.",
      "Klass (kastvikt): 10–30 g är bra allround för svenska vatten.",
      "Action: medium funkar bäst — varken för styvt eller för mjukt.",
      "Material: kol är lätt och känsligt, glasfiber är tåligare och billigare.",
    ],
    beginnerPick:
      "Ett 2,1 m spinnspö i klass 10–30 g från ett känt märke (Abu Garcia, Shimano, Daiwa) kostar runt 400–700 kr och funkar för 90% av svenskt sportfiske.",
  },
  {
    slug: "fiskerulle",
    name: "Fiskerulle",
    image: gearImages.rulle,
    badge: "Grund",
    shortText:
      "Rullen sitter på spöet och samlar in linan. Haspelrulle är vanligast och enklast för nybörjare. Den ska passa storleken på spöet och fisken du vill ha.",
    intro:
      "Rullen är spöets samarbetspartner. Den lagrar linan, släpper ut den när du kastar och sedan vevar in den. Det finns flera typer — haspel, baitcaster, multi — men för nybörjare är haspelrullen självklart.",
    whatToLookFor: [
      "Storlek 2500–4000 är allround — passar de flesta spinnspön.",
      "Antal kullager: 4–6 räcker för bra rullar — fler är inte alltid bättre.",
      "Bromssystem: framskruvad broms är enklast och vanligast.",
      "Material: aluminium tål mer än plast, men plast är lättare.",
    ],
    beginnerPick:
      "En haspelrulle i storlek 3000 från Shimano, Daiwa eller Abu Garcia för 500–900 kr räcker långt. Köp inte den allra billigaste — broms och växel slits snabbt.",
  },
  {
    slug: "lina",
    name: "Lina",
    image: gearImages.lina,
    badge: "Grund",
    shortText:
      "Linan kopplar dig till fisken. Tunn lina är osynligare i vattnet men går lättare av. Tjock lina håller bättre för stora fiskar. Vanlig nylonlina är ett bra val i början.",
    intro:
      "Linan är förbindelsen mellan dig och fisken. Tunn lina ger längre kast och mindre synlighet i vattnet. Tjock lina tål mer påfrestning. Det finns tre huvudtyper: monofil (nylon), fluorocarbon och flätlina.",
    whatToLookFor: [
      "Monofil (nylon): billig, töjbar, mjuk — perfekt för nybörjare.",
      "Fluorocarbon: nästan osynlig i vatten — bra som tafs.",
      "Flätlina: tunn och stark, ingen töj — bra känsla men dyrare.",
      "Tjocklek: 0,20–0,28 mm för allroundfiske, 0,30+ för gädda.",
    ],
    beginnerPick:
      "0,25 mm monofil nylonlina (t.ex. Stroft GTM, Berkley Trilene) — runt 100–150 kr för en stor spole. Räcker för flera säsonger.",
  },
  {
    slug: "krokar",
    name: "Krokar",
    image: gearImages.krok,
    badge: "Grund",
    shortText:
      "Kroken är det fisken biter på. Det finns många storlekar — små krokar för småfisk som mört, större för gädda och gös. Använd alltid hullinglösa krokar om du tänker släppa tillbaka fisken.",
    intro:
      "Kroken är den lilla pricken som fångar fisken. Det viktigaste är att välja rätt storlek för fisken du jagar. För liten — krokar fastnar inte. För stor — fisken sväljer den inte ens.",
    whatToLookFor: [
      "Storleken anges i nummer — högre nummer = mindre krok (#10 är mindre än #4).",
      "Hullinglösa krokar gör mindre skada om du släpper tillbaka fisken.",
      "Cirkelkrokar fastnar i mungipan istället för halsen — bättre för fisken.",
      "Vassheten: dra över nageln — den ska 'hugga' fast i nagelytan.",
    ],
    beginnerPick:
      "Ett krokset från Mustad eller Owner med storlek #4 till #10 — räcker för det mesta. Alltid hullinglös för catch-and-release.",
  },
  {
    slug: "drag",
    name: "Beten och drag",
    image: gearImages.drag,
    badge: "Lockar fisken",
    shortText:
      "Drag är konstgjorda beten som ser ut som småfisk. Skedar blänker, jiggar dansar, wobblers simmar. Naturliga beten är t.ex. mask, majs eller liten fisk.",
    intro:
      "Drag är konstgjorda beten som imiterar småfisk eller insekter. De finns i hundratals former, färger och storlekar. Att välja rätt drag för rätt fisk och rätt vatten är en konst som tar år att lära sig — och som aldrig blir tråkig.",
    whatToLookFor: [
      "Skedar: enkla blänkande metallplattor — funkar nästan alltid.",
      "Spinnare: snurrande blad — bra för abborre och öring.",
      "Wobblers: hårda plastfiskar som simmar — bra för gädda och gös.",
      "Jiggar: mjuka gummibeten med vikt — flexibel för djup och fart.",
    ],
    beginnerPick:
      "Ett startkit med 5–10 olika drag (sked, spinnare, jigg, wobbler) i olika färger för 200–400 kr. Lär dig sen vilka som funkar i ditt vatten.",
  },
];

export function findMethod(slug: string) {
  return methods.find((m) => m.slug === slug);
}
export function findSpecies(slug: string) {
  return species.find((s) => s.slug === slug);
}
export function findGear(slug: string) {
  return gear.find((g) => g.slug === slug);
}
