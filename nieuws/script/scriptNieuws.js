let main = document.getElementById("nieuwsMain");
let img = document.getElementById("headerNieuwsH");

function resize() {
    let sizeBody = window.innerWidth;
    if(sizeBody > 0 && sizeBody < 1300){
        document.getElementById("nieuwsContainer").style.gridTemplateColumns = "1fr";
    }
    if(sizeBody > 1300 && sizeBody < 1650){
        document.getElementById("nieuwsContainer").style.gridTemplateColumns = "1fr 1fr";
    }
    if(sizeBody > 1650 && sizeBody < 9999){
        document.getElementById("nieuwsContainer").style.gridTemplateColumns = "1fr 1fr 1fr";
    }
  }
  
    window.onresize = resize;
    resize();
    document.getElementById("clickN0").addEventListener("click", () =>{
        img.style.backgroundImage  = `url('./media/h0.jpeg')`;
        main.innerHTML = '';
    })

document.getElementById("clickN1").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h1.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>10.03.2022</div>

        <div class=kopNieuws>HISTORIC GRAND PRIX VOOR ALLE LIEFHEBBERS VAN AUTOSPORT</div>

        <div class=kopNieuws2>De kaartverkoop voor de Historic Grand Prix 2022 is vandaag gestart! De in ere herstelde Historic Grand Prix van Nederland vindt dit jaar plaats op 15,16 & 17 juli op CM.com Circuit Zandvoort. Voor de vele autosportliefhebbers is dit het belangrijkste historische race-evenement van Nederland. De organisatie is in handen van de Dutch Grand Prix, die ook de F1 Heineken Dutch Grand Prix organiseert. De initiatiefnemers zijn bijzonder trots Chris Zegers aan te mogen kondigen als ambassadeur van het evenement.</div>
        
        <div class=plattetextNieuws>Voor jong en oud
        Voor alle racefans die nog niet eerder in aanraking zijn gekomen met de historie van de autosport is dit de kans. De Historic Grand Prix is het nummer 1 historische race event van Nederland. Bucket-list materiaal voor alle autosportliefhebbers, zowel voor deelnemers als fans. Maar ook voor liefhebbers van goed georganiseerde topsportevenementen is de Historic Grand Prix een unieke beleving. Voor de bezoekers is het event een ontdekkingstocht naar de rijke historie van onder andere de Formule 1 autosport op Circuit Zandvoort in de entourage van een openluchtmuseum. Van de klassieke en zeer exclusieve racebolides, de aankleding, het entertainment, tot het eten in de verschillende foodcourts; dat alles maakt de Historic Grand Prix tot een uniek evenement voor jong en oud. Om dit te benadrukken, biedt de organisatie, alle bij de Dutch Grand Prix geregistreerde fans, de mogelijkheid twee kinderen gratis mee te nemen naar het event, bij aanschaf van een ticket. Mis het niet en koop nu jouw tickets voor de Historic Grand Prix op https://historicgrandprix.nl/!
        
        </br></br>

        Chris Zegers – ambassadeur Historic Grand Prix
        “Ik herinner me nog goed dat ik aan de hand van m’n vader naar het circuit in Zandvoort ging. Wat een wereld ging daar voor mij open. Het neusje van de zalm -de Formule 1- zo dichtbij. Gefascineerd door het vermogen, de snelheid en het geluid. M’n liefde voor mooie snelle auto’s is daar geboren. Zo ook m’n interesse in de techniek achter de auto’s. Tenslotte zijn ’t de innovaties van destijds waar we vandaag de dag allemaal plezier van hebben. Ook als ik in m’n gerenoveerde klassieker een ritje maak. Ik kijk er naar uit om jullie te mogen ontvangen in Zandvoort en je deelgenoot te maken van deze bijzondere wereld.”
        
        </div>

    </div>
    `;
})

document.getElementById("clickN2").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h2.png')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>23.02.2022</div>

        <div class=kopNieuws>DUTCH GRAND PRIX LANCEERT TIKTOK KANAAL</div>

        <div class=kopNieuws2>Vandaag is het officiële TikTok kanaal van de Formula 1 Heineken Dutch Grand Prix gelanceerd. TikTok is ‘s werelds snelst groeiende social media platform voor korte video’s.</div>
        
        <div class=plattetextNieuws>De lancering valt samen met de pre-season testdagen in Barcelona, waar de coureurs en de teams zich klaarstomen voor een nieuwe Formule 1 seizoen. Al op zondag 20 maart staat de eerste race in Bahrein op het programma en is het nog 15 races tot aan de start van de Formula 1 Heineken Dutch Grand Prix 2022 in Zandvoort! Het account, @f1dutchgp , is de plek voor de nieuwste F1-content, exclusieve video’s achter de schermen en mooie throwbacks. Neem snel een kijkje op ons TikTok kanaal!
        
        </br></br>

        Met TikTok kunnen gebruikers video’s van 10-15 seconden over elk onderwerp maken en delen, rechtstreeks vanaf hun mobiele apparaat. Het moedigt iedereen aan om een ‘creator’ te zijn en momenten te delen die ertoe doen via video, waarbij vaak gesprekken en trends worden gestart. Met gebruikers in 150 landen zal het platform de Grand Prix van Nederland in staat stellen om op nieuwe manieren in contact te komen met fans en een wereldwijd publiek te bereiken.
        </div>
        
    </div>
    `;
})

document.getElementById("clickN3").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h3.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>26.01.2022</div>

        <div class=kopNieuws>POSITIEVE ECONOMISCHE EN SOCIALE IMPACT DUTCH GRAND PRIX 2021</div>

        <div class=kopNieuws2>In september keerde de Formula 1 Heineken Dutch Grand Prix terug in Nederland. Tienduizenden bezoekers reisde af naar CM.com Circuit Zandvoort en miljoenen mensen wereldwijd genoten mee via tv of online. Vriend en vijand waren het al snel met elkaar eens; het evenement was een groot succes. De Breda University of Applied Sciences (BUas) heeft een wetenschappelijk onderzoek afgerond naar de economische, sociale en maatschappelijke impact van het evenement en daaruit bleek dat de terugkeer van het evenement ook veel positieve effecten heeft op de regio.</div>
        
        <div class=plattetextNieuws>Positieve economisch impact
        De Dutch Grand Prix heeft geleid tot een hoop extra bestedingen in Zandvoort en de regio. Door het evenement werden er € 22,3 miljoen aan additionele bestedingen in Zandvoort en € 44,5 miljoen aan additionele bestedingen in de Metropool Regio Amsterdam (inclusief Zandvoort) gedaan. Deze extra bestedingen heeft 244 banen in Zandvoort en 498 banen in de MRA-regio (inclusief Zandvoort) opgeleverd. Opvallend is dat deze cijfers, zelfs met 2/3 van de totale capaciteit als gevolg van de Corona-maatregelen, hoger uitvallen dan de voorspellingen uit het Desicio onderzoek van 2017. 
        
        </br></br>

        Positieve sociaal en maatschappelijke impact
        De bewoners, ondernemers en bezoekers waren eensgezind over hoe zij de Dutch Grand Prix beleefd hebben. Bewoners waren onder de indruk van het evenement (87,2%) en hebben enorm genoten (88,9%) van de terugkeer van de Formule 1 in Zandvoort. Ook de ondernemers waren te spreken over de sfeer in het dorp en in hun bedrijf (8,7 voor de sfeer in het dorp en een 8,4 voor de sfeer in het eigen bedrijf). De bezoekers genoten ook van de goede sfeer in Zandvoort: 93% is het eens of helemaal eens met de stelling ‘er hangt een goede sfeer in het dorp’ en 92% van de bezoekers voelde zich welkom.

        </br></br>

        Zandvoort goed bereikbaar
Het ambitieuze mobiliteitsplan van de Dutch Grand Prix heeft geresulteerd in boven verwachting positieve cijfers met betrekking tot de duurzaamheidseis. De doelstelling was om in drie jaar een autoloos evenement te zijn, iets wat met minder dan 5% van de bezoekers met de auto naar de eindbestemming komen, al in 2021 grotendeels is behaald. Het evenement bleef, door deze spreiding van de verschillende vervoersmiddelen, heel goed bereikbaar en de in- en uitstroom verliep goed.
        </div>
        
    </div>
    `;
})

document.getElementById("clickN4").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h4.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>15.10.2021</div>

        <div class=kopNieuws>F1 HEINEKEN DUTCH GRAND PRIX OP 4 SEPTEMBER 2022, KAARTVERKOOP START 1 NOVEMBER 2021</div>

        <div class=kopNieuws2>Vele tienduizenden mensen hebben ervan genoten, de terugkeer van de Formule 1 tijdens het eerste zonovergoten weekend van september 2021. En dat lag niet alleen aan de historische overwinning van Max Verstappen, maar ook aan het enthousiasme van alle Oranje-fans. Voor 2022 staat de 2e editie van de F1 Heineken Grand Prix gepland op 4 september en de kaartverkoop voor dat evenement start op 1 november 2021. Vanaf 15 oktober 2021 kunnen leden van ‘Dutch GP club’ al kaarten kopen in de pre-sale.</div>
        
        <div class=plattetextNieuws>1e Editie F1 Heineken Grand Prix was een succes
        De F1 organisatie was lovend, de coureurs oprecht enthousiast en zo was ook de reactie van de landelijke en internationale media. De langverwachte files en opstoppingen bleven uit dankzij een gedegen mobiliteitsplan gecombineerd met tijdige en gerichte communicatie. Slechts 2% van de bezoekers kwam met de auto. De organisatie van het evenement en de beperkte publieksactiviteiten, verliepen goed, op een tijdelijke kassa storing na. Zelfs sceptici waren van mening dat de terugkeer van de Grand Prix naar Zandvoort een succes was.
        
        </br></br>

        Nieuwe datum 4 september 2022
Op de F1-kalender staat dat het Formule 1 circus op 2, 3 en 4 september 2022 weer afreist naar CM.com Circuit Zandvoort. De F1 Heineken Dutch Grand Prix staat volgend jaar in het teken van ‘The Ultimate Race Festival’. Dit betekent niet alleen de beste coureurs ter wereld in de Formule 1 en uiteraard de aanwezigheid van andere spectaculaire race-klassen, maar ook optredens van diverse artiesten en een volgepakt aanbod in de fanzone.

        </br></br>

        Kaartverkoop 2022, beperkt aanbod
        Vanaf 1 november start de reguliere kaartverkoop. Iedere potentiele koper, die zich geregistreerd heeft, mag maximaal zes kaarten bestellen voor 2022 of voor 2022 en 2023. Gezien de beperkte beschikbaarheid en de grote vraag maakt de organisatie gebruik van een aanvraagproces en loting. Op 10 november worden de geïnteresseerden geïnformeerd of de kaarten toegewezen zijn.
        Een groot deel van de kaarten voor 2022 is al vergeven aan die fans die de organisatie in 2021 moest afwijzen als gevolg van de Corona-maatregelen. Met andere woorden; staanplaatsen zijn niet meer beschikbaar. Daarnaast is een deel van de kaarten al verkocht aan die fans die, in eerste instantie kaarten, voor drie jaar gekocht hebben.
        
        </br></br>
        
        Voorverkoop voor vaste klanten vanaf 15 oktober
Alle leden van DutchGP club, diegenen die in 2021 kaarten hadden, krijgen de kans om in de pre-sale maximaal zes kaarten te bestellen. Al deze fans zijn al geregistreerd en moeten, als ze een keuze gemaakt hebben, de bestelde kaarten direct afrekenen. Die bestelling is dan in de loop van de dag beschikbaar in eenieder zijn eigen MyDGP-omgeving.
Doorgeschoven en driejaars tickets
Wanneer fans hun tickets hebben doorgeschoven naar 2022 of eigenaar zijn van een driejaars-ticket, dan is deze uiteraard geldig voor de race in 2022. In de pre-sale mag je wel extra tickets bijkopen. Men moet er dan wel rekening mee houden dat die zitplaatsen van eventuele nieuwe tickets, niet naast eerdere orders geplaatst kunnen worden.
Sportief directeur Jan Lammers “Datum sluit weer perfect aan”
“We hebben met z’n allen in 2021 echt iets neergezet,” zegt Jan Lammers. “De toeschouwers en de deelnemers waren superblij. Ondertussen zijn de voorbereidingen voor 2022 alweer in volle gang natuurlijk. Met de datum in 2022 zijn we heel tevreden. Zoals eerder gezegd; we verlengen de zomer in Zandvoort. Het sluit perfect aan, precies in het staartje van de vakantieperiode, dat is gunstig voor de ondernemers in de regio. Wij kijken er echt naar uit om in 2022 echt uit te pakken en dit keer met een ruim aanbod aan entertainment en nog meer publieksactiviteiten.”
        </div>
        
    </div>
    `;
})

document.getElementById("clickN5").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h5.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>05.09.2021</div>

        <div class=kopNieuws>HISTORISCHE TERUGKEER FORMULE 1 NAAR ZANDVOORT</div>

        <div class=kopNieuws2>De terugkeer van de Formula 1 Heineken Dutch Grand Prix naar Zandvoort is zeer positief verlopen. Samen met alle betrokken partijen is geschiedenis geschreven. Op het gerenoveerde circuit van CM.com Circuit Zandvoort werd een divers raceprogramma gepresenteerd met als ultiem hoogtepunt de race in Formule 1 op zondag 5 september. De in-en uitstroom van maximaal 65.000 bezoekers verliep het gehele weekend soepel, de drukte op het terrein bleef, na aanscherping van de communicatiemiddelen, beheersbaar en er zijn geen noemenswaardige incidenten geweest. Het weekend werd zondag feestelijk afgesloten met de winst van Max Verstappen in de Formule 1.</div>
        
        <div class=plattetextNieuws>Robert van Overdijk, directeur van de Dutch Grand Prix is supertrots: “We hebben voor het eerst weer de Grote Prijs van Nederland meegemaakt. Nederland, en in het bijzonder Zandvoort, is echt op de kaart gezet internationaal. Ik sta hier zo trots als een pauw dat we samen met onze fans, partners, leveranciers, NS, ProRail en Gemeente Zandvoort iets hebben neergezet dat door velen voor onmogelijk werd gehouden. Dankzij Nederlands ondernemerschap en organisatiekunde komt op dit evenement alles bij elkaar en hebben we samen geschiedenis geschreven.” Naar schatting keken wereldwijd 70 miljoen fans via de televisie naar het raceweekend op Zandvoort.
        
        </br></br>

        Max Verstappen wint en neemt leiding in kampioenschap over Vele tienduizenden racefans, veelal gehuld in oranje, maakten voor het eerst in 36 jaar weer een F1-race mee op het gerenoveerde circuit. Onder toeziend oog van het Nederlands koningspaar reed Max Verstappen zondagmiddag naar de eerste plek. De Nederlandse coureur volgt daarmee de laatste winnaar van de Grote Prijs van Nederland in 1985, de iconische Niki Lauda, op. “De verwachtingen waren voorafgaand aan het weekend zo hoog. Het is niet altijd even gemakkelijk om daaraan te voldoen. Het is geweldig dat ik ook de leiding in het kampioenschap heb kunnen pakken”, zegt Max Verstappen.

        </br></br>

        Circuit goed bereikbaar Het ambitieuze mobiliteitsplan van de Dutch Grand Prix heeft geresulteerd in boven verwachting positieve cijfers. De doelstelling was om in drie jaar een autoloos evenement te zijn, iets wat met het feit dat slechts minder dan 1% van de bezoekers met de auto kwam, al dit jaar zo goed als is behaald. Verder maakte het merendeel van de bezoekers gebruik van het openbaar vervoer of arriveerde te voet. Maar liefst 34% arriveerde op de fiets in een indrukwekkende oranje optocht. Het evenement bleef door deze spreiding van vervoersmiddelen heel goed bereikbaar en de in- en uitstroom verliep ook op zondag vloeiend. Testen voor Toegang evenement De Dutch Grand Prix vond afgelopen dagen plaats onder het ‘Testen voor Toegang’ protocol, waarin de anderhalvemeterregel losgelaten kan worden. Voor de toegang tot het circuit werden de bezoekers gecontroleerd via de CoronaCheck-app. Om de fans en de crew die meerdere dagen in de omgeving van Zandvoort verbleven van dienst te zijn, werden tijdelijke testlocaties ingericht door Testen voor Toegang en GGD. De organisatie van de Dutch Grand Prix scherpte op vrijdag 3 september de communicatie richting het publiek aan om te zorgen voor een goede doorstroming in de pauzes. Zo zijn bezoekers ook via allerlei communicatiemiddelen gevraagd om hun vaste zitplaats zoveel mogelijk te gebruiken en elkaar de ruimte te geven. Deze aangescherpte communicatie heeft, volgens de betrokken overheidsdiensten, tot het gewenste resultaat geleid.
        
        </br></br>
        
        Nederlands entertainment van wereldformaat Tijdens het evenement maakten ook enkele wereldberoemde Nederlandse artiesten hun opwachting. Davina Michelle creëerde, in samenwerking met Armin van Buuren, speciaal voor F1 Heineken Dutch Grand Prix 2021 een remix van de titelsong ‘Beat Me’. En bracht die, voorafgaand aan haar uitvoering van het volkslied, ten gehore. DJ Tiësto sloot het evenement feestelijk af, met een DJ-set vanaf de baan. Nederlandse trots Jan Lammers eindigt: “Wat een fantastisch weekend, we hebben de wereld verrast. We kijken terug op een zeer geslaagd internationaal evenement met Max als geweldige winnaar. Als klein jongetje groeide ik op in Zandvoort en was ik gelijk verliefd op het autoracen. Prachtig om hier dan nu als sportief directeur te staan. Van de Zandvoortse gemeenschap heb ik het hele weekend alleen maar positieve geluiden gehoord. Maar ook als land kunnen we ontzettend trots zijn. Ik wil iedereen bedanken voor de fenomenale organisatie achter de schermen. Wat een klus hebben we de afgelopen twee jaar geklaard. Maar het was het bloed, zweet en tranen waard. We zien graag dat dit evenement als een van de voorbeelden wordt gebruikt waardoor de evenementenbranche weer meer ruimte krijgt. Het was historisch.”</div>
        
    </div>
    `;
})

document.getElementById("clickN6").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h6.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>04.09.2021</div>

        <div class=kopNieuws>ZONNIGE QUALIFYING SATURDAY SUCCESVOL EN GOED VERLOPEN</div>

        <div class=kopNieuws2>De tweede dag van de Formula 1 Heineken Dutch Grand Prix 2021 is succesvol verlopen. De drukte was goed beheersbaar mede als gevolg van de aangescherpte communicatie richting bezoekers zijn de piekmomenten van de dag ervoor voorkomen. Maximaal 65.000 autosportliefhebbers zijn vandaag getrakteerd op een zonovergoten, divers raceprogramma met als koningsnummer; de kwalificatie in de Formule 1.</div>
        
        <div class=plattetextNieuws>Eerste Nederlander op pole position in Zandvoort Max Verstappen pakte pole position voor uitzinnige, in het oranje geklede, racefans. Een unieke prestatie op een bijzonder sfeervolle en feestelijke dag. Nog nooit eerder stond een Nederlander op de eerste startpositie tijdens de Grote Prijs van Nederland. Slechts twee procent met de auto Zowel de in- als uittocht van fans door Zandvoort verliep vlekkeloos. In de ochtend arriveerde bijna de helft van de bezoekers te voet of met de fiets, 33% met het openbaar vervoer en 8% met pendelbussen (MaaS – Mobility as a Service). Opvallend is het feit dat slechts 2% van de raceliefhebbers met de auto komt. Deze cijfers leveren een verrassend positieve bijdrage aan de duurzaamheidsambities van de organisatie op het gebied van mobiliteit.
        
        </br></br>

        Geplaceerd evenement De Formule 1 Heineken Dutch Grand Prix 2021 wordt georganiseerd onder het protocol van ‘Testen voor Toegang’ waarbij toeschouwers bij aankomst op het circuit naar een vaccinatiebewijs of negatief testresultaat worden gevraagd. Vervolgens wordt het publiek gestimuleerd zoveel mogelijk op hun aangewezen plaats te blijven en wordt er gezorgd voor goede spreiding van de bezoekers op het evenement. Maatregelen sorteren effect Op zaterdag 4 september is in de communicatie naar bezoekers meer focus gelegd op de regels van een ‘Testen voor Toegang evenement’. Zo zijn bezoekers via allerlei communicatiemiddelen gevraagd om hun vaste zitplaats zoveel mogelijk te gebruiken en elkaar de ruimte te geven. Additioneel worden er vrijwilligers ingezet om mensen er bijvoorbeeld op te wijzen hun consumpties op de tribune te nuttigen. Uit het afstemmingsoverleg (AO) tussen de verschillende betroken diensten (o.a. brandweer, politie, gemeente, veiligheidsregio Kennemerland, NS, ProRail) kwam de feedback dat de genomen maatregelen effect sorteren.

        </br></br>

        Sfeervolle oranje-zee van supporters Racefans konden vandaag genieten van een historische kwalificatie op de Grand Prix in Nederland die voor het eerst in 36 jaar weer op Zandvoort plaatsvond. Max Verstappen, die poleposition behaalde en opgetogen zijn team en de fans bedankte, biedt een veelbelovende opmaat naar de race morgen.
        
        </br></br>
        
        “Wat een dag” Robert van Overdijk, directeur van de Dutch Grand Prix zegt: “Wat een dag. Na 36 jaar een Nederlander op poleposition, stralend weer en een geweldige sfeer. De communicatie richting bezoekers die we hebben gehanteerd, sorteren het gewenste effect met een beheersbare drukte en goede doorstroming. Er was geen enkele file in de wijde omtrek van Zandvoort. De instroom en de uitstroom verliep heel goed en slechts 2% komt met de auto.”
        
    </div>
    `;
})

document.getElementById("clickN7").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h7.png')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>03.09.2021</div>

        <div class=kopNieuws>START DUTCH GRAND PRIX MET SUPER FRIDAY</div>

        <div class=kopNieuws2>Na 36 jaar reden er vandaag weer Formule 1-wagens uit de Zandvoortse pitstraat nadat er in 1985 voor het laatst op het circuit werd gereden door de Formule 1 autoklasse. De langverwachte editie van de Formula 1 Heineken Dutch Grand Prix 2021 ging van start met de vrije trainingen, waarbij de meeste coureurs voor het eerst kennismaakten met het vernieuwde circuit.</div>
        
        <div class=plattetextNieuws>Racespektakel voor jong en oud De tribunes waren op de dag van de eerste vrije trainingen gevuld met fans die voornamelijk in het oranje gehuld gingen. Een groot deel van het publiek vandaag heeft via Jumbo met 50% korting een ticket kunnen aanschaffen. De supermarktketen is al jarenlang sponsor van Max Verstappen en wilt de racesport bereikbaar maken voor jong en oud. “Het rijden op Circuit Zandvoort vandaag beviel me wel. Het is best een korte ronde met veel snelle bochten, dus ik heb me vermaakt”, laat Max aan het einde van Super Friday weten. “Het was geweldig om vandaag voor al dat publiek te rijden en die oranje zee van supporters op de tribunes te zien. Het is super dat er dankzij Jumbo zoveel fans al op vrijdag bij konden zijn. Echt heel mooi.”
        
        </br></br>

        Toegang naar circuit druk maar ordelijk verlopen Het CM.com Circuit Zandvoort opende vandaag voor het eerst zijn deuren voor maximaal 65.000 bezoekers. De bereikbaarheid van het circuit verliep goed terwijl er veel mensen op pad waren. Om elkaar op het terrein de ruimte te geven en de doorstroom te bevorderen worden bezoekers gevraagd, via de grote schermen, speaker en social media kanalen om zoveel mogelijk hun vaste zitplaats te gebruiken om zo de maatregelen in acht te nemen. Na de eerste vrije training van F1 hebben de organisatoren in overleg met de gemeente extra maatregelen getroffen om voor betere spreiding te zorgen na afloop van de meest populaire programma-onderdelen. Bij de uitstroom van het publiek na het tweede Formule 1 onderdeel is hierdoor de mensenstroom beter gereguleerd. De uitstroom van de bezoekers richting huis is succesvol verlopen.

        </br></br>

        Qualifying Saturday: De zaterdag wordt ongekend spannend met de kwalificaties: wie start er op pole position op de race van zondag? Bekijk hier het volledige programma.
        
       
    </div>
    `;
})

document.getElementById("clickN8").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h8.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>02.09.2021</div>

        <div class=kopNieuws>PROBEER NU HET OFFICIËLE DUTCH GRAND PRIX FILTER</div>

        <div class=kopNieuws2>Heb jij hem al uitgeprobeerd? Het officiële Formula 1 Heineken Dutch Grand Prix filter op Instagram en Facebook! </div>
        
        <div class=plattetextNieuws>Heb jij altijd al eens over CM.com Circuit Zandvoort willen racen? Maak dan nu een virtueel rondje over het circuit en deel jouw race met vrienden en familie op Facebook en Instagram! Gebruik #DutchGP en tag ons account op Facebook and Instagram  en wie weet zie jij jezelf tijdens de Dutch Grand Prix terug op onze officiële kanalen!

        </div>
        <img class="afbeeldingClick" src="./media/h8+.jpg" alt="#">
    </div>
    `;
})

document.getElementById("clickN9").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h9.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>01.09.2021</div>

        <div class=kopNieuws>DIT IS DE FORMULA 1 HEINEKEN DUTCH GRAND PRIX TROFEE!</div>

        <div class=kopNieuws2>Heineken® heeft de allereerste F1®-kampioenschapstrofee ontwikkeld! Deze trofee is uitsluitend gemaakt van gerecyclede materialen voor de terugkeer van de Formula 1 Heineken Dutch Grand Prix ™ naar Zandvoort sinds 1985. </div>
        
        <div class=plattetextNieuws>Vandaag heeft Heineken®, de officiële F1® wereldwijde partner van de Formula 1,  het ontwerp van de trofee onthuld voor de Formula 1 Heineken Dutch Grand Prix™ 2021 en W Series™. Om de eerste Nederlandse Grand Prix™ sinds 1985 te vieren heeft het biermerk samen met ontwerper Piet Boon een uniek trofee ontwerp gecreëerd. De trofee is uitsluitend gemaakt van gerecyclede materialen die daarnaast ook een historische betekenis en lokale relevantie hebben. De inspiratie voor het ontwerp is gebaseerd op de eerste officiële trofee die in 1939 op Zandvoort werd uitgereikt, evenals het iconische groen van de Heineken®-flessen. Studio Piet Boon wilde een trofee maken die heden en verleden verbindt met hun ambacht en creativiteit. Het is de eerste F1®-trofee die volledig is gemaakt van gerecyclede materialen: de groene glazen schaal is gemaakt van gerecyclede Heineken®-flessen, de plastic plint is gemaakt van gerecyclede plastic kratten en de presentatie doos is gemaakt van afvaltriplex.
        
        </br></br>

        De eindklassering nummers zijn met zand in de trofee gegraveerd, een knipoog naar de locatie aan het strand van het iconische circuit van Zandvoort, met de mond geblazen glazen kom en gebouwd door Sommer Dutch Glass Art van beroemd Nederlands handgemaakt glas uit Leerdam, de “Glasstad”. Om de lancering van de trofee voorafgaand aan de Grand Prix™ te vieren, vertelt F1®-legende en Heineken®-ambassadeur Sir Jackie Stewart in een korte introductiefilm over het ontwerp en de processen die werden gebruikt om de trofee uitsluitend van gerecyclede materialen te maken.

        </br></br>

        De iconische Nederlandse ontwerper, Piet Boon zei; “Het is een absolute eer om geassocieerd te worden met F1® en W Series™ en om samen met Heineken® een stukje geschiedenis te kunnen schrijven. De discipline, een ongelooflijk oog voor detail en de samenwerking van een raceserie, deelt zeker raakvlakken met ons ontwerpteam.” Hans Erik Tuijt, Director Global Heineken® Sponsorship, Heineken, zei; “We zijn erg verheugd om F1® voor het eerst sinds 1985 weer in Nederland te mogen verwelkomen! Heineken is een zeer trotse sponsor van deze iconische race op Zandvoort. Om ons te helpen dit moment te vieren, hebben we samengewerkt met ontwerper Piet Boon om een ​​trofee te creëren die de perfecte balans bevat tussen het erfgoed van de eerste race in 1939, met een moderne twist, en een positieve kijk op de toekomst.
        
       
    </div>
    `;
})

document.getElementById("clickN10").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h10.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>01.09.2021</div>

        <div class=kopNieuws>HEINEKEN® 0.0 PITWALL BAR TIJDENS DUTCH GRAND PRIX</div>

        <div class=kopNieuws2>Official Event Supporter Heineken® maakt een unieke ervaring mogelijk. Op zaterdag 4 september kom je met de Heineken® 0.0 PitWall Bar aan het circuit namelijk dichterbij dan ooit tevoren! Heb jij je wel eens afgevraagd hoe het is om plaats te nemen in de Formula 1™ Pitstraat, of hoe het is om op de stoel van de grote teambazen te zitten? De meerdere schermen in de bar geven jou de mogelijkheid om de race van verschillende hoeken te bekijken, terwijl je geniet van een vers getapte Heineken® 0.0. Daarnaast word je de hele dag in de watten gelegd met een complete VIP ervaring.</div>
        
        <div class=plattetextNieuws>Met deze prijs ben jij helemaal klaar om volop te genieten van hét rondje waar we 36 jaar op hebben gewacht. Meedoen kan tot donderdag 2 september 15.00 uur.
        
        </br></br>

        Deze actie is verlopen. Je kunt helaas niet meer deelnemen. 

    </div>
    `;
})

document.getElementById("clickN11").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h11.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>31.08.2021</div>

        <div class=kopNieuws>KIDS F1 PERSCONFERENTIE: STEL JOUW VRAAG!</div>

        <div class=kopNieuws2>Een unieke kans voor alle jonge F1 fans in Nederland om op de wereldwijde televisie te verschijnen tijdens de Dutch Grand Prix!</div>
        
        <div class=plattetextNieuws>Dutch Grand Prix werkt samen met de F1 om kinderen jonger dan 13 jaar uit Nederland, de kans te bieden een vraag te stellen aan een Formula 1 coureur tijdens de live FIA Formula 1 persconferentie! Deze vraag, samen met het antwoord van de coureur, zal over de hele wereld worden uitgezonden naar de vele miljoenen fans die vanuit alle hoeken van de wereld naar de raceweek van de Dutch Grand Prix kijken. Heb jij een vraag die je altijd al hebt willen stellen aan de Formula 1 coureurs? Het hoeft niet eens over autosport te gaan. Het mag grappig zijn, anders of gewoon een brandende vraag waarvan je denkt dat de hele wereld er het antwoord op moet horen.
        
        </br></br>

        Om kans te maken dat jouw vraag wordt gekozen, stuur je een e-mail naar kidsquestion@dutchgp.com met daarin schriftelijk jouw vraag en een video waarin jij jouw vraag voorleest in het Engels. De beste tien vragen zullen worden geselecteerd voor live-uitzending met een video-opname geregeld door de Dutch Grand Prix. Bekijk hier aan welke eisen jouw video moet voldoen!

        </br></br>

        Let op: Je kan alleen tot morgen 1 september 16:00 jouw vraag inzenden. Inzendingen zijn alleen toegestaan voor Nederlandse kinderen jonger dan 13 jaar. De vragen moeten relevant zijn voor elke Formule 1-coureur en niet specifiek zijn voor één coureur of team. Daarnaast wordt de video alleen ingezonden en wereldwijd getoond als de voorwaarden ondertekend zijn meegestuurd door de ouders/voogd van het betreffende kind. Deze voorwaarden vind je hier.
        
       
    </div>
    `;
})

document.getElementById("clickN12").addEventListener("click", () =>{
    img.style.backgroundImage  = `url('./media/h12.jpg')`;
    main.innerHTML = `
    <div id=nieuwsClickMain>

        <div class=datumNieuwsClick>31.08.2021</div>

        <div class=kopNieuws>MASCOT® WORKWEAR OFFICIAL EVENT SUPPLIER VAN FORMULA 1 HEINEKEN DUTCH GRAND PRIX</div>

        <div class=kopNieuws2>MASCOT® WORKWEAR en Dutch Grand Prix hebben voor de komende drie jaar een “Official Event Supplier”-samenwerkingsovereenkomst ondertekend.</div>
        
        <div class=plattetextNieuws>MASCOT voorziet het officiële organisatieteam en Event Hosts van de Formula 1 Heineken Dutch Grand Prix, dat meer dan 1400 mensen telt, van producten uit onder meer de MASCOT® ACCELERATE-collectie. Producten die de organisatie en Event Hosts een uniforme en professionele uitstraling geven tijdens het evenement. CEO CM.com Circuit Zandvoort en directeur Formula 1 Heineken Dutch Grand Prix, Robert van Overdijk zegt: “Sportiviteit, kwaliteit en prestatie zijn waarden die MASCOT, Dutch Grand Prix en CM.com Circuit Zandvoort delen. Het is topsport om de beste te zijn in kwalitatieve en esthetische bedrijfskleding, die ook nog functioneel is. Onze medewerkers zijn ons visitekaartje en we vinden het belangrijk om hen verzorgd, herkenbaar en beschermd te kleden. Van onze onderhoudsploeg en facilitaire dienst, die er in weer en wind voor zorgen dat het circuit en de zakelijke evenementenlocaties tot in de puntjes zijn verzorgd tot ons hospitality en accountteam, die dagelijks onze zakelijke gasten ontvangen voor een onvergetelijke ervaring.” Sportief directeur Jan Lammers zegt: “De Formula 1 Heineken Dutch Grand Prix maakt na 36 jaar zijn comeback. Een uniek moment in de Nederlandse sportgeschiedenis. We hebben de ambitie om het grootste Ultimate Race Festival van de wereld te organiseren. Dit jaar weliswaar in afgeslankte vorm, maar ondanks dat, willen we aan de wereld laten zien waar we toe in staat zijn in Nederland. Daar hoort natuurlijk ook bij dat al onze mensen, in vele verschillende functies, de meest functionele en representatieve kleding van MASCOT dragen.”
        
        </br></br>

        “Wij zijn trots om een onderdeel te zijn van dit unieke sportevenement, de Formula 1 Heineken Dutch Grand Prix. Wij hebben een kledingpakket samengesteld met focus op comfort en representativiteit, waarbij de Event Hosts goed gekleed zijn ongeacht het weer”, aldus Danny Bonn, Market Director Benelux van MASCOT. Meer over MASCOT MASCOT is een internationale fabrikant van werkkleding, veiligheidskleding en veiligheidsschoenen met het hoofdkantoor in Denemarken. Middels eigen verkooporganisaties in 15 Europese landen levert MASCOT via een netwerk van professionele distributeurs haar producten aan de diverse eindgebruikers.

        </br></br>

        De ambities van MASCOT zijn groot en daarom is hoge kwaliteit cruciaal. De werkkleding is geen product op zich, maar een volledige service naar de klanten toe, waarin onder andere goede ondersteuning, een efficiënte logistiek en een hoge leveringsbetrouwbaarheid zijn opgenomen. In de Benelux is MASCOT actief met meer dan 33 medewerkers en met showrooms in Naarden en Brussel.
        
       
    </div>
    `;
})