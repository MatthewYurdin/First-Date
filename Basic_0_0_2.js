var Basic = (function() {
  
'use strict';
  
const SETTINGS = {DEFAULT_OUTPUT_FORMAT: "js"};
    
// LOG MANAGEMENT ---------------------------------------------------- //

const Log = { text: "", session: _generate_session_id(), initialized: new Date(), updated: null };
var Names = [];
const Words = ["have","would","your","first","even","in","while","each","before","men","around","point","almost","program","least","wanted","everything","used","looked","police","comes","policy","everyone","show","quite","third","officials","rights","science","include","happened","culture","longer","miles","knowledge","staff","thanks","forces","green","set","deal","cold","lower","amount","doctor","down","loss","participants","parts","build","answer","capital","heavy","camera","surface","stars","expected","once","explain","less","terms","needed","structure","talk","soldiers","means","turn","experts","wild","na","intelligence","date","sir","forget","united","yards","join","dream","below","runs","added","decide","empty","operations","farm","losing","significantly","features","library","thin","possibly","move","target","sick","views","welcome","heads","stands","faculty","essential","usual","keeps","soil","dance","upper","gay","falling","technical","throw","earlier","cutting","potential","deep","consistent","waste","perform","supply","desert","host","caused","sad","online","dust","assume","approximately","chain","far","following","reports","hat","other","interviews","shoot","headed","bike","amendment","outcome","royal","lies","indians","apparent","check","carried","replace","devices","canadian","discovery","arrested","contains","sounds","refused","potentially","deer","comprehensive","draft","benefit","deputy","analyst","solutions","exists","dozens","or","revealed","index","married","given","ends","online","grandfather","mere","smell","combine","allies","print","okay","desperate","bench","regulation","assess","joins","flag","powder","hungry","moderate","wake","emotions","worried","ambassador","ended","fathers","cry","gardens","divided","port","opinions","broader","penalty","finance","root","boards","forests","extension","conservatives","sixth","conversations","ridge","suspect","promising","account","topics","welcome","shift","shower","ends","plot","gathered","copies","lawsuit","frustration","entitled","exclusive","approached","harm","dynamic","lip","genuine","forum","connect","inquiry","fires","doubt","ranks","shade","pray","civilians","participant","rope","interior","afterward","readily","respect","silly","grief","grip","determination","controlling","suits","census","respect","rage","dimension","blanket","laid","fork","initiatives","counselors","sought","secure","burned","occasions","ambitious","consent","teenage","hockey","inside","measuring","classrooms","dress","vessels","tribe","shelf","virtue","mentally","temple","manufacturer","peer","snapped","priests","faster","citizenship","sole","loyalty","hunger","narrative","embrace","gained","stance","continent","beloved","voluntary","shakes","investing","rank","rubber","driveway","importantly","sticking","translation","tensions","occupied","imposed","within","alpha","bullets","flash","terribly","masses","rejected","cargo","bizarre","decides","accidents","proven","therapist","boost","brains","graph","addiction","poorly","confirmed","dessert","litigation","disputes","columns","hurt","fucking","challenged","sixteen","sprinkle","flu","explosive","approaches","shortage","portable","eighteen","permitted","illustrate","direct","outfit","store","accordingly","encouraged","appealing","destiny","backed","shocking","disciplines","apartments","emergence","continually","utterly","assignments","starters","transactions","attacked","stack","contrary","claimed","flags","wrapped","compost","respective","cleared","above","cooperate","governing","blocking","liquor","matched","trace","sage","chapel","observatory","governance","dismissed","awesome","interpreter","repair","helicopters","rituals","socioeconomic","consisted","youngsters","pounding","methodology","boundary","criterion","homemade","poison","realizes","cent","protected","lend","worried","beautifully","confronted","sensible","selecting","delay","geographical","considering","questionable","sue","develops","tackle","knocked","restricted","armor","psychiatrist","mound","beads","composer","saddle","towels","leverage","relies","vulnerability","stretched","resulted","insurgents","fax","listened","continuity","champions","astonishing","patriots","accepted","precedent","commissions","schedules","fond","detention","prefers","suspected","spin","provinces","blonde","pitchers","accessories","sunglasses","assembled","gradual","cockpit","insufficient","babe","solitary","pursued","delayed","lebanese","premiums","deployment","fishery","bombings","backdrop","oaks","rebounds","mug","goodbye","scarcely","motorcycle","violate","altitude","markers","overnight","ferry","dismissed","interview","higher","mortgages","fort","approached","alternate","canopy","cite","drain","lace","affluent","triple","roller","hooks","credits","fringe","genetics","ropes","sailor","variability","fries","enhanced","lenders","employs","inferior","respectable","selfish","expressive","torso","steer","glances","cannon","temples","massage","fireworks","measures","strawberry","lay","obey","yielded","scottish","witnessed","fallen","stew","whistle","ambiguity","empowerment","wonders","pitch","folds","onstage","striped","proposes","forbidden","crushed","automated","modifications","brushing","consuming","reef","veil","patriot","floral","outset","located","freed","hopeless","valleys","gathering","relaxed","comprehend","exquisite","receivers","colon","cartoons","administrations","narrowly","tune","migrant","premium","estrogen","monks","goats","batting","melted","graders","overhead","versatile","guided","downward","styling","stumbling","curb","disagreed","decker","electrons","cooked","entrepreneurial","revive","dwarf","examiner","debated","following","inflammation","spacious","overlook","rip","automotive","anguish","conceal","utter","ponds","bust","poisoning","discrepancy","cracked","purity","freight","fulfillment","bore","competing","apparel","librarian","lest","factual","butcher","stain","sleeps","drill","pneumonia","plagued","tattoos","pleasing","tremendously","loosen","welcoming","barefoot","pilgrimage","lavish","terrestrial","constellation","chick","pineapple","carve","rested","suspects","martian","gripped","algae","illustrated","muted","brochure","ballpark","opaque","remotely","processors","frame","commute","impaired","effect","drummer","canon","doubted","crabs","appoint","lever","insure","nests","strait","sly","comrades","granny","unmarried","fleeting","guitarist","powdered","attentive","naming","blizzard","calculated","fishes","ultraviolet","wondered","fundraising","eliminated","might","pitching","ordinarily","vibration","constituted","awakened","thy","derives","translucent","warden","nightclub","unmistakable","informants","divisive","hospice","sane","cured","examinations","frustrations","suppression","orientations","jurisdictions","grassy","trusted","suns","bloom","invaluable","illusions","highlight","forestry","hydraulic","unfairly","mimic","detailing","betrayed","muster","handmade","breathtaking","depressive","preoccupation","strewn","traces","predatory","cactus","nearing","lofty","booster","decks","nominal","researched","coarsely","ponder","encompasses","racist","measured","deserted","analog","bathrooms","narrowed","humiliating","disturbances","testifying","proceeds","appealed","parchment","admirable","rents","exposition","endeavors","standoff","sociological","survives","awaits","safest","lingered","yells","micro","ecumenical","best","savior","individuality","intrusive","grueling","spiritually","intervening","rotting","huddled","pandemic","synonymous","resolved","smuggling","infancy","trumpet","prenatal","stricken","dated","satire","reasoned","worthy","durability","single","clove","disco","sweets","puzzles","uncanny","discriminatory","tallest","whereabouts","tuesdays","disarmament","sweeps","ripple","infusion","chrome","tandem","bumper","convertible","fencing","tape","complement","jockey","flawless","distractions","opposing","speeds","zero","flickered","his/her","restoring","mower","picturesque","woodland","grit","sensibilities","patriarch","timeline","acutely","negotiated","worrisome","rounding","opium","validate","sacrificed","instructive","contradict","impartial","pigeon","coincide","unravel","beneficiary","junior","oppressed","instrumentation","warheads","trophies","dagger","exits","punctuated","devised","figurative","praising","paddle","nuggets","prized","filtered","microbial","unimaginable","suspended","solemnly","desolate","keystone","smashed","markings","trusting","disposed","doubling","rethinking","cartilage","brethren","archival","shutters","walker","nonverbal","beginner","patting","alike","toured","swath","plume","whiteness","piracy","conceivably","kissed","algebra","jolly","adversely","faculties","generalizations","nitrate","fluttered","totaled","watchful","prelude","originated","cohesive","heyday","piety","veal","revived","ferns","exhilarating","inseparable","priesthood","receding","wad","scorn","speculated","precedents","heartfelt","premier","cracker","westward","grumbled","hasty","replication","canvases","discursive","accorded","crunchy","doubling","fondly","diver","bribery","dutifully","bosom","matched","reserved","deepen","receptions","cylinders","immortality","minimally","prevailed","stamina","naturalization","sift","somatic","elm","respite","consensual","waterways","deafening","drugstores","stirs","omega","weakest","brace","brackets","banned","notoriety","chunky","equate","religiosity","overshadowed","appetizers","cadet","spade","dearest","bore","sheath","editorials","blinded","respects","fahrenheit","dame","tart","vibe","mandarin","pamphlets","rhyme","compulsion","extracurricular","recruit","expressly","microphones","summed","diversify","refrigerators","swell","classy","shaker","limitless","homegrown","relieved","spacing","swelled","embroidered","stalled","stair","autographs","vested","marxism","countess","knitting","poisoned","manned","vertigo","gutter","supervisory","coliseum","absurdity","stranded","paparazzi","blackened","nexus","mainline","fixes","inconclusive","widowed","exacerbate","ascending","soot","warily","facet","stacking","coexist","out","walkers","thunderstorms","distressing","ecclesiastical","inventors","descending","heightened","delete","decoys","mechanically","recorders","hints","painstakingly","ratified","syndicate","coined","rubric","wishful","midwife","maximizing","globes","parched","scaled","onlookers","sill","sacramental","shelling","foray","combed","hunts","hectares","afflicted","terminally","trotted","bulging","tops","clasped","afterthought","ordination","locks","enriched","fluke","skim","issuers","shyness","pluck","enigma","differential","jutting","contest","harvests","entrusted","nonstop","gunshots","parable","unskilled","fraternal","propane","secretariat","molestation","inexplicably","tears","unequivocally","wrestler","evolves","polled","memorials","awards","blight","reinventing","yank","concluding","lite","alcove","tripped","bruised","filth","freaking","cried","bookcase","glided","hive","gauges","tripled","swimsuit","broiler","messed","fortified","dignitaries","lockers","outback","pimp","schoolhouse","puritan","throes","buoyant","smeared","redesign","downloading","veered","rappers","universes","slack","slash","milestones","barbaric","pizzas","structurally","ill","supplementary","meek","departmental","rabbis","circumference","handlebar","bolstered","tuned","tortured","twinkling","refresh","fleece","hatch","whores","homelands","confectioners","passersby","distinguished","progressives","inexorably","minimized","novelists","vectors","swayed","spires","dispensing","decentralization","miscarriage","toothpick","code","cuttings","latitudes","outside","canceling","unequivocal","swarmed","lifes","consulate","presided","disingenuous","persistently","dove","stallion","rockers","swooped","fret","amish","drunks","speculators","blackberries","convection","harbour","universality","thorn","freaks","evaluates","busting","dashed","oust","faceless","primate","cooled","trove","colt","valiant","temp","episodic","sculptors","wholeheartedly","harmonies","dubbed","fresco","derby","delegations","stitched","shred","blouses","fucked","punches","configured","mandated","reset","blended","sputtered","unveiled","disengagement","spasm","shrugs","canteen","spotty","bluish","synergy","original","lashed","hypothermia","yoke","airfare","sari","potentials","didactic","gale","humanistic","impressionist","broil","bipartisanship","synagogues","charmed","revolved","treasured","mercifully","sprinted","vestiges","fostered","velvety","wrong","tacked","shoestring","piss","scolded","dazed","unbridled","polished","horny","slider","tomography","heartache","outlawed","hint","transistors","dispatches","sprinting","prohibited","breakfast","resale","flattered","reestablish","whitetail","uptown","drowsy","glut","hawking","maniac","infuse","foodborne","penicillin","medial","liaisons","synod","consul","martinis","routed","soaked","mormon","refrigerated","eviction","wrestlers","bowl","imperialist","rests","behest","disputed","princesses","apprehended","homely","unwrapped","bereaved","cappuccino","sodas","grumpy","chronicles","raging","enviable","oncology","bio","affections","patina","lithe","palliative","contagion","activated","exempted","weakens","omnipresent","nomads","manhunt","diplomatically","supernovae","bully","sonnet","unbeaten","resonated","regrettable","boobs","offensively","otherness","crusts","runny","provokes","pleated","intercepted","amazed","thaw","subconscious","marchers","grassland","unresponsive","floods","jigs","sycamore","escapes","narrow","quadrant","buttered","included","subtests","stilts","whine","terse","juggernaut","maestro","moonlit","likened","instantaneously","sultan","pardons","sorbet","raccoons","sunsets","congolese","minivans","rust","git","probes","savagely","stash","blocker","bumpers","grins","isolating","folic","oeuvre","rig","regionally","complicating","goddesses","energized","paramedic","shortfalls","branch","thong","curved","engulfed","rebuilt","plotted","sow","pretend","nurture","screened","rearranging","clustered","exercised","cyst","calculators","channeled","downsizing","romantically","spreadsheets","whatnot","thrilled","sprinter","casings","curving","conferring","correlational","swivel","crumpled","custodian","shapely","shanks","cathedrals","eyelid","skewed","impeccably","rapprochement","washcloth","zooming","beholden","tic","demonstrated","burrows","slugging","empathic","dabbed","oscillations","evocation","dazzled","alkaline","bugging","inciting","rattles","screeners","deformation","runaway","streamlining","weighting","pooled","genomes","diction","clockwork","covariate","vested","waxy","ginseng","comatose","diminishing","timeout","ratty","antibacterial","collaboratively","emanate","dorsal","carnal","snob","nurtured","erroneously","bungalows","innards","buyouts","straddle","astrophysics","socialized","wherewithal","smock","verbatim","mercilessly","ipods","refurbished","disparaging","deepens","defaults","skimmed","buckled","cob","penetrates","elixir","conjured","threes","regressions","whippy","prophecies","trashing","cursor","dispassionate","middleman","ruckus","bottling","inaugurated","cockroach","processed","sit","artisanal","peculiarities","chicano","linguistically","moored","acoustical","empowers","unsettled","fevers","overtook","nonchalantly","infecting","leprosy","sauntered","raves","disrupted","facsimile","cacao","pissing","pistachios","alphabetical","quadrupled","negotiable","pelagic","imitations","allay","growls","irrigated","ballplayers","orchestrate","verve","towering","cynic","salutary","loyalist","testimonials","caseloads","expedient","insured","lounges","pinot","extrapolate","pulley","ostracized","morsel","etcetera","memorized","pianos","frills","bronchitis","enveloping","ballplayer","hustled","marathons","commended","superstitions","claw","privatized","workhorse","backfield","inflicted","visionaries","permafrost","mined","mocha","hybridization","wannabe","bicentennial","unseat","steeple","wills","prow","sprinkling","necktie","amass","peels","nudge","financiers","adheres","pangs","outlive","golly","stepwise","disarmed","fluted","excels","commonsense","tunisian","baffled","paleontologist","inexcusable","fanned","elms","tipsy","deductibles","fables","obstructed","miniatures","cooperated","orator","duster","softening","roughness","rebelled","moralistic","veering","hawkish","incurring","silos","indescribable","jocks","roused","ironclad","cortical","pipe","zionists","cleansed","sulfate","clasping","zoological","unguarded","admirals","inflamed","withered","multinationals","droning","ergonomic","prided","carcinogenic","distanced","interventionist","riser","dyed","crude","femoral","cleverness","steal","lecturers","replied","strangled","scarier","certifying","delineated","mercenary","sweatshop","trite","unsound","irrefutable","sculpting","pacemaker","brawny","crustaceans","buffeted","weirdest","trowel","stodgy","cancellations","tutsi","insulted","squatter","semisweet","unearthed","oldies","headquartered","huffed","debriefing","flicked","declination","confiscate","executor","dissecting","typed","aquariums","divider","growths","upped","taffeta","strictest","capitulation","queried","spaceships","biomechanical","straddled","regenerative","quixotic","astrology","vicariously","pianists","outlay","cloying","sledge","charred","unrealized","syndicates","puffs","graded","eclipse","upwardly","fleck","hindering","seductively","reimbursements","eyed","vocations","squash","wads","goldenrod","imitators","micrograms","presentable","refurbished","chivalry","rearranged","voids","befuddled","leveraging","evaluator","bundle","ironed","patrimony","penned","nerdy","highlander","raunchy","barbarian","arched","analytically","mestizo","fantastical","pervasiveness","moslems","invades","misogyny","elongation","transferred","musculature","personalized","limply","sinewy","redder","gopher","differentiating","mime","hardening","statistician","carotene","rework","armrest","yin","tearfully","snags","waned","bolts","norse","hunks","gunships","spank","engendered","incarcerated","racialized","sartorial","grumble","rediscovery","psychoanalyst","autonomic","oiled","busters","phonemic","attenuation","shoelaces","interactivity","liken","gagged","craps","indecipherable","plunger","paralyze","canines","indeterminacy","funds","blasphemous","deviance","godly","starlings","honorably","hitchhiking","afrikaner","rescind","imprints","paleontology","agonized","stiletto","solitaire","swallowed","woozy","certifications","diasporic","swerving","tilted","cultivar","reconstitute","ramparts","platelets","worshipped","trots","lengthened","finisher","rivets","yarns","parametric","drafty","churn","asiatic","prancing","snorts","prisms","degenerated","typified","adapters","excavated","shortwave","decreed","rebut","corrected","loci","haunt","foreclose","reprocessing","spangled","pushers","impedes","unpeeled","sabre","dabs","quadriplegic","malay","swatting","indulgences","backfired","scabs","smacks","purifying","liminal","ceaselessly","hustlers","censuses","worrying","blacked","mans","stencil","frustrates","poof","headrest","schizophrenic","permeated","reaffirming","handball","muskie","disengaged","vanities","outboards","ghoulish","resurrected","proportioned","sprinkles","copyrights","irresistibly","suffocation","quills","disregarded","democratize","raffle","detest","dud","mutuality","tactful","disconnection","eggnog","inquiring","forwarded","bellow","magellanic","buzzes","damned","decrying","mournfully","hydraulics","compressors","accentuated","dented","osmosis","tailspin","holdover","parsing","billfish","massacred","exonerate","croissant","appetizing","pinpoints","batons","ovary","adorning","overrun","adrenalin","burlesque","freakish","stages","technologist","burlesque","generically","misfit","pertained","incontrovertible","turbans","cryogenic","hallucinatory","cambodians","uncoordinated","pendants","neuropsychological","tussle","dialed","accented","caddies","druids","wirelessly","filers","nauseating","rasping","progressions","beekeepers","squared","illegality","dinky","tired","persuasions","crack","ionized","relaying","christmases","miscommunication","reparation","blessedly","babysit","shakedown","glen","spectrograph","transcended","shutouts","quit","commuting","heartthrob","linseed","interferometer","recast","misreading","dissented","culvert","coasted","excluded","automaton","mull","impregnable","traditionalism","registries","encircled","delineates","armament","casement","panamanians","expletives","dames","cytoplasm","deflating","facelift","vaccinate","cornerstones","repudiated","creatinine","misuse","iceman","surmount","unremitting","brushy","trumpeted","costliest","protean","safaris","size","bombs","shucks","analgesia","interloper","screenwriters","draftees","mambo","halfhearted","proactively","woodpeckers","spry","perturbed","threefold","speakerphone","monotheism","untended","heavenward","musicality","snook","terrified","hypnotized","chairlift","exhorting","coped","inferential","fruiting","tormented","scoundrels","shades","chub","pragmatically","defaulted","satiric","furloughs","scouted","spurned","combos","garlicky","electrification","synthesized","supermodels","midline","rhinitis","inflections","fetches","piercings","macadamia","agitating","terrify","eardrums","calipers","kinematic","usurped","theocratic","realist","pellagra","strengthened","assimilated","reformists","humorously","peripatetic","zoologist","itemized","airbag","withered","fomenting","dialectics","knowledges","opportunist","questioners","roundabout","raked","sputter","marinating","bengal","sizzled","disembark","overcoats","pawnshop","soothes","cookout","barbeque","escarole","glanced","ephemera","asters","titled","quiescent","jousting","mikes","purposive","bunkhouse","interlopers","hampers","lye","locomotor","immobilized","humping","navies","hobbit","tidying","overprotective","halfback","eardrum","composts","unwrapping","constrained","hieroglyphics","perp","catapulted","clobbered","brook","beheading","chinaman","damp","coos","flavorings","thrush","doled","congregated","optically","merited","conspirator","marshland","lags","barium","bluntness","vaulting","insolence","saris","maturities","implore","marketability","funk","mind/body","constricted","brawls","streetlamps","baptisms","screamer","bemoaned","sage","dropoff","frigging","unblinking","ornately","stonework","honoree","aggregated","coital","flicks","expansionism","astrologer","globules","miserly","squashed","ripeness","violated","cubist","chip","equaling","normalized","perdition","febrile","barreled","extinguished","larder","woodshed","persimmons","ischaemic","hyperventilating","stockpiled","anticommunist","junket","fen","mitigating","tramped","whirred","cargoes","aborigines","aspartame","discontents","downgrade","manservant","refutes","emotionless","baptize","flocked","gyrating","charlatan","gibbous","appraised","scooting","bungled","agnostic","aww","calibers","throb","mothballs","abdicate","remanded","expletive","furnishing","lustful","teutonic","walkable","cued","relapses","clank","marksman","smelting","namibian","grousing","beget","premeditation","nonconference","plover","treasured","reckons","theoreticians","jiffy","carnivals","tahini","dispelling","consoled","superficiality","inoculated","clavicle","diarist","threw","coexisted","butchered","dims","axioms","rainmaker","pocked","wadded","scandinavians","allergist","imago","bawled","heritages","lupine","outpaced","concomitantly","barstool","potentiality","icelanders","foretold","cycled","scrim","premenopausal","patriarchate","venal","redistributing","rout","saxon","boatload","consummate","tinkle","awakenings","filmed","centurion","reverted","fussed","restrained","snowmen","majoritarian","necromancer","refocused","darn","scowls","consistencies","derrick","glycemic","flout","clout","studded","primrose","toot","bedeviled","flunk","senility","talmudic","mandibular","reestablished","steeples","crocheted","abrogation","subsidence","disregards","whimper","kneecaps","exculpatory","snowmobiling","transsexuals","swipes","dramatized","diffusing","gynecologists","compaction","bafflement","steadies","malign","hosiery","epidermal","fancies","designed","electrocuted","lout","realtime","unsaturated","triads","spellbinding","unapproachable","tarry","oversold","devaluations","operant","addled","slapstick","raincoats","causally","anthropocentric","steadying","legitimized","phase","deadlocked","kickball","randomization","posturing","forkful","sunbeam","inlay","inversions","microfilm","derailing","burdening","coped","precut","andalusian","ejido","acceded","glorified","huff","handmaiden","actualization","coleus","shimmied","squish","resemblances","existentialist","aggregations","midsole","falsified","electrocardiogram","ladybugs","piazzas","natty","slurred","ruffle","bustier","junky","gyroscopes","moray","deliriously","carload","scrutinizes","crouched","refractive","jingled","rheumatism","dollies","nanomachines","catlike","elaborations","inboard","knower","squashed","chauvinist","comradeship","beheaded","tethers","comorbidities","retelling","notched","terminations","birdhouse","interwoven","rebuke","menthol","vagrant","referenda","slovaks","spawns","stomped","unripe","clambers","abacus","neoplasms","moonscape","slurped","sculpting","somersault","comportment","argentine","parietal","meringues","sympathizes","coated","benched","previewing","seditious","nigerian","eustachian","metalepsis","wires","nabbed","unhook","solvable","outpatients","anagram","mappings","schools","fondle","repaint","industrywide","hypothesizes","pinup","fluorescents","collectivization","scimitar","postliberal","jacked","nicked","copywriter","clot","basso","timberland","chervil","euclidean","codon","hardier","craw","marvellous","asylums","creche","adenoma","bulldoze","reassembling","abeyance","burping","bagpipe","depicted","dissimilarity","swirled","churlish","plumed","yesterdays","interdict","fart","underpass","cueing","metafictional","salable","dazzlingly","partiality","counterclockwise","howitzer","pyrotechnic","croup","melanesian","insulated","rehabbing","consolidations","pled","chaperones","daypack","poststructuralism","reappeared","journeyed","disconnects","systemically","bostonians","warfarin","toughened","disconcertingly","billows","infiltrates","actuaries","dragoons","teemed","pruned","theoretician","bombardments","engraved","anime","calcification","maglev","underpaid","hollowed","mentored","balkanization","skewness","theism","ejecting","reexamining","levitating","dotcom","tinderbox","neotropical","residuum","reminisces","palest","seaports","reject","disassembly","bondsman","irrigators","resonated","masterminding","squeaks","civilize","trippy","tornados","internists","councilor","valance","quelled","feasted","ruminating","misdirected","chauffeurs","samplings","refereed","mastoid","swathed","sop","chucking","hippest","scrunch","detonations","refectory","nativists","pocketed","jailing","disowned","hosing","bitter","snapdragons","helm","midges","trawl","eland","feels","quarterbacking","brim","handwoven","mangos","apologetics","archrival","pinpricks","autoworkers","civilisation","lettered","gaffer","nucleon","jocular","hurtle","foretaste","middleclass","sanitized","oracular","vespers","methodism","preposterously","highfalutin","starker","image","overnights","laryngitis","lobotomy","beanstalk","biomes","wanes","faxes","proffered","troubleshoot","unabridged","scams","recapitulation","nonfarm","lymphocyte","shepherded","tapes","goodie","brunettes","rambler","snakebite","transracial","saps","ricochet","aroused","walled","tuneup","mined","readmitted","blackjack","custards","rupee","scattershot","shod","hurdler","multimodal","scarification","eurocentrism","trachoma","trendiest","chagrined","billow","corroded","groped","retouching","fishmonger","groomers","malted","flintlock","enculturation","encased","mouthed","barrages","muddled","gripes","stereotypic","bulgarian","monasticism","bloomed","refrains","envying","socials","picaresque","spatulas","neurobiologist","consumables","hypochondria","caddis","undulated","kindergartner","cancelling","jot","encirclement","emergent","acupressure","scalability","mortise","badgered","haranguing","blackboards","temptress","oldie","barbells","underneath","indepth","crewmates","cartilaginous","crystallography","potholed","hassling","populist","recouped","iridescence","unalienable","motorcar","flaxseeds","pocked","unzipping","vomits","cleaving","disassembling","haystacks","contextualizing","horsemanship","hysterectomies","hie","fasciitis","selflessly","salvos","reawaken","waterless","allusive","voiding","anesthesiology","wingman","profligacy","shortchange","unemployable","extricating","funnies","sieges","morphologically","pupa","subtractive","homespun","showdowns","starless","bended","experientially","piranha","capitalized","oratorio","humorists","acidophilus","savaged","repositioned","vagrant","misanthropic","impudence","overdosed","aperitif","postelection","scrip","pegboard","sidling","deflates","megalomaniac","armless","defame","washtub","univocal","contessa","androgens","intensional","sinfully","sighed","redeployed","hollowly","washbasin","louts","chopstick","exhaled","boatyard","polymorphisms","chromolithograph","scandalously","lull","tipoff","standalone","mutability","marketeers","minion","atherosclerotic","trapezium","castigating","pointlessly","squeezed","globalized","pinheads","maladjusted","bugle","personifications","nitride","punished","scoffed","watchfulness","abrogated","phlegmatic","hillbillies","chittering","familiars","borers","paratroops","salinities","ruled","undone","illicitly","atonal","scamming","footrest","sweatsuit","eave","gook","cozying","vanishingly","canvass","outscoring","wholesale","pocked","archetypical","sifted","composted","aryan","precocity","interspecific","okapi","pillowy","oversimplifying","copped","fungible","uplifted","untaxed","confectionery","businesswomen","zoologists","bullfrogs","pumas","regionalist","natatorium","packinghouse","tediously","undergirds","disentangling","cases","transposing","recognitions","gordian","prefatory","intraoperatively","anticoagulants","tartlets","helo","peeks","pulverizing","enticingly","vacillated","boxlike","transgressing","slingshots","waked","briefers","seaweeds","formalists","capon","lambasted","dupe","impinges","inundating","sensitized","swelter","citronella","lupines","midfielders","nutraceuticals","ethnolinguistic","rankled","subsumes","cluck","commies","purrs","fratricide","sheathing","pinochle","opals","diagnosticians","dba","dispersed","conversed","disdain","hearken","incandescence","waterskiing","committeeman","pleasantness","personified","accreting","audiologic","compartmentalized","hamming","quirkiness","crams","officiated","sodomized","pseudoscience","nonworking","archdiocesan","delft","numeracy","schooled","leaver","concilium","vomited","hatless","frilled","retched","incentivize","dozes","egghead","tango","deferments","velodrome","megapixels","windsurfers","dishes","presages","lopping","transmute","impale","cosponsors","hindrances","disenfranchise","storyboard","sprayers","personalism","noncustodial","ischaemia","spiraled","carpeted","overpowers","unproved","bookshops","hypocrisies","spigots","soulmate","arteriosclerosis","dehydrate","analysed","tactility","geriatrician","seatings","subarachnoid","irredeemably","resurrects","venturesome","overrated","offload","closeted","crescent","fledglings","aerodynamically","ghosting","dales","salvadoran","illiquid","nubians","mesocosms","melded","stashes","invalidates","seamanship","loveable","mimics","pronunciations","expensing","leaker","pressurization","wiseguy","temporomandibular","astrolabe","centenarian","lugged","peeves","misspelled","phoniness","backpedal","hummocks","yogurts","menfolk","abolishment","nonbeliever","hydride","decongestant","webcams","interconnects","colonisation","backed","fleshing","bloodcurdling","gather","searchingly","healed","stuffiness","parallelogram","animistic","ziggurat","reamer","autocorrelation","smokejumpers","retells","oddballs","blabbing","cofounders","nondisclosure","tonalities","consenting","veldt","omicron","aminoglycosides","sumptuously","destabilized","uncoiling","scarily","chromed","tees","unpardonable","filberts","eliminations","exurbs","purifiers","decryption","sigmoidoscopy","anthocyanins","phosphatidylserine","clouds","nestled","accessorized","impaling","hightail","spoons","footed","snuggle","cheerio","pinecone","benzodiazepines","gyre","aggress","boded","feathering","incarcerating","chug","teletype","threesomes","coneflower","anklet","clientelistic","performativity","moduli","pored","scrubbed","telegraphs","pillaged","sentenced","fickleness","riffing","agitprop","screenwriting","vegetated","polymorphic","ague","supremo","goldenseal","sandwiching","shored","schoolyards","retraces","repatriating","purposefulness","defiled","dinghies","pedagogies","recreationists","contrail","lodgers","netball","impoverishing","unshakeable","interrelate","engrossing","toys","inaugurations","bushwhacking","hypnotized","rutting","multilayer","subroutine","terrapin","innervation","neutered","upends","pinker","spume","absconded","antiballistic","luncheonette","balaclava","cretan","clucks","chronograph","hydrodynamics","coevolution","fusarium","etruscans","worksites","wangled","budgeting","mislaid","dramatized","doodled","bouffant","dickering","earthward","finales","lightheadedness","positivistic","categorized","acupuncturists","bloodflow","altazimuth","combustor","autoimmunity","comedown","atrophied","reemerging","reshuffle","thumped","countrified","forebear","lapdog","tabulated","cost/benefit","leftism","ecclesia","silkworm","neurophysiological","caudal","catalans","microfluidic","tutee","gluttonous","compartmentalized","contriving","sideswiped","shipwrecked","monotonously","powdering","haughtiness","pushcarts","grayed","conjugated","presentational","particularist","inductions","thomism","angiosperm","plunked","bookend","trivialized","shrewdest","indoctrinating","recused","defamed","tussles","genuflect","spake","wiretap","brutalization","absorbable","codicil","substantiated","pec","homonym","ensnared","contravenes","skullduggery","fledged","upmarket","perplexities","arrayed","flogged","replicated","nonperforming","leakers","gooseberries","phantasms","neurotics","accelerant","endothelium","landform","octavo","haole","hashed","nicety","neologism","lampooned","dazedly","pigheaded","rezoned","overindulge","hissy","creaming","applewood","overflight","colorings","stoners","swigs","peritoneal","uncreated","spooling","arsenate","arb","refashioned","singeing","brushfire","outplayed","nonconformist","doubter","yowled","tolling","profs","effacement","shootdown","metallurgist","odalisque","labial","payee","transacted","direst","auctions","snacked","slimmed","pixelated","counterforce","uploads","perjure","canonize","wildcard","breadcrumb","agoraphobic","striders","selectmen","tailgaters","hyperthermia","postnational","splotched","affronts","bounteous","dosed","showpieces","allegorically","telecast","fibs","yaw","demimonde","preempts","groundhogs","couplers","protozoan","plasmodium","cichlids","steeled","unhooked","togas","tantalized","stupefaction","ornamented","carnality","pawned","audits","inessential","contestable","contraries","ringworm","civilised","hmong","nonathlete","deliverables","intervenor","perilymph","suffusing","reawakened","slosh","unscramble","trendier","ethnomusicologist","fannies","rehabbed","thaws","windage","abracadabra","handholding","restiveness","saxophonists","mastiffs","boogeyman","savannahs","ching","papyri","homologues","productivist","flaunted","affronted","knuckled","pirouetting","reinstitute","mistreated","jangle","glaciated","automates","hoofprints","heartwood","interpersonally","spectrographs","dildos","belligerency","gladiolus","acreages","chinooks","nonmagnetic","rationed","exactions","arbs","tenderest","festively","froze","wittiest","decayed","goofily","gloried","haw","organised","yowling","demotic","readjustments","gummed","monger","tanners","eavesdropper","paraphrased","transnationalization","bobble","sahelian","tibias","adverbials","multivolume","offseasons","jilted","wallop","moustaches","collate","underlain","sulkily","eyestrain","papists","labelled","unexcavated","organised","blowhole","fatties","burnet","octet","diarists","parities","variates","whiled","airbrushed","thenceforth","evincing","repulsed","commiserated","clocks","recalculate","obfuscating","illogically","embalmed","criteria","hubristic","freesia","cribbage","vining","masculinization","captioning","surfactants","intubate","skycap","flatboat","concessioners","mycoplasma","horrifies","forecloses","innovatively","sublimated","nuking","forwards","cornflowers","hardbound","plenipotentiary","dilapidation","hybridize","prostates","mulberries","canvassers","retouch","ephemerality","quantized","excessiveness","sutra","meridional","biospherians","sensationalized","itches","drearily","revoked","midriffs","foremothers","sleekness","deified","tenting","matriculated","immigrations","underdiagnosed","ejector","tranquilly","rewarm","antiglobalization","flanker","gladioli","switchers","tintype","literariness","worklife","unibody","ellagic","transmembrane","hypergiants","snowballing","undimmed","rethought","sobbed","iniquitous","coltish","unreturned","bookworms","tilth","homos","chainstay","townie","crudites","merchantmen","angstrom","metrosexual","reintroductions","racewalking","fibrotic","hagiographical","zebrafish","checkable","bulled","unspecific","grandness","stalemated","diverging","sleighs","fizzles","uncredited","gamine","chafe","tableaus","handedly","hoarfrost","nosegay","unblock","barbiturate","newspapering","stunners","domiciled","fuckup","pistils","erosional","sieving","rocketship","shylock","dali","overclocking","livened","junker","irreproachable","propound","likeminded","roughhousing","pointblank","fetchingly","annihilates","unharvested","demarcated","scoped","renames","pressroom","swivelled","ordinations","bomblets","nonmarital","portcullis","justificatory","divinations","sapiential","hypervisor","loans","whooshes","condescended","instinctually","juntas","northwesterly","ingrate","hindmost","waterfronts","parisian","jiggles","cockatoos","roughy","leviathans","plowman","microsurgical","institutionalism","exhumations","histiocytes","sedentarization","succinylcholine","counterattacking","myopically","dirtied","jar","pooping","skulduggery","wingspans","furled","lawfulness","seceded","reposed","coproducer","essayed","fumigate","remodelers","gigantism","rebuffs","sentimentalists","channelization","piste","parfaits","viscose","cephalopod","barbadian","periodontitis","juggernauts","computerizing","chaperone","broaches","dilates","couturiers","ubiquitously","nondrinkers","instamatic","proletarians","noncancerous","italic","phlebitis","hellcat","incendiaries","clericalism","goslings","disembodiment","melanocytes","dosas","pulsatile","quant","monopsony","hydrogeologic","leafrollers","sashays","shakiness","heartened","stupendously","bloodily","timberlands","ghettoization","zings","lockouts","colloquia","prizing","overexertion","offsides","artifices","fisting","saltine","shadowbox","murres","rubato","primitively","swim/tennis","foreseeability","rhodopsin","hornless","overenthusiastic","gestured","userfriendly","barrel","gabbling","mailorder","posses","undescribed","cohost","battening","hypercompetitive","compendia","wormed","sandblast","conventionalized","underwire","microstructures","undecidable","neurocognitive","contractures","dictaphone","fairgoers","downforce","perineal","coinsurance","stingless","disposer","deduces","firsttime","romanced","nuttier","highprofile","zigs","forestalls","endurable","pharmacopoeia","undercounting","drabness","abusively","babushkas","chlorinated","crawly","communicant","zipped","heedlessness","cartload","kumbaya","idylls","cenotaph","bearnaise","orthopaedics","secretory","visualized","bridgedeck","jewelweed","roosted","patriline","helicity","toughed","intermingled","antiestablishment","outmaneuvering","fishtails","drenches","stylishness","tablemates","limps","diddling","pathologize","distractible","virginian","jawed","earplug","musicmaking","wilful","blipped","ambulate","bronzers","preexistent","ecliptic","necropsy","cremations","quietism","canvasbacks","singlespeed","malawian","velociraptors","multigroup","glioma","blackfish","phronesis","outdistancing","intertwines","sentimentalize","recalculated","rededicated","dolts","outspending","anthologized","squishes","unrighteous","recrossing","exorcising","funkiest","unkept","icecream","unassimilated","flirts","clamshells","tamely","capitalizations","doorpost","headship","pretest","groundball","vesting","elastics","annexed","pictograms","sunward","intrafamily","illusionists","arnica","cowled","partialed","breakpoint","modernities","somatosensory","poliovirus","roundel","populates","engineers","minces","fluffier","reelected","poignance","wraithlike","recalculated","forsakes","vomits","accosts","greying","weekender","toggling","overstated","alphabetized","transcendently","pasturing","greengrocers","bedchambers","rollouts","sustainment","hyperglycemia","narcos","primatologists","cardioversion","necromancers","consilium","undeservedly","flamed","commandeers","lovably","marshalled","ekes","ratted","outlasts","palpating","counseled","disobeys","pinions","misplacement","desecrated","goofballs","muzzling","indigence","schemed","housebroken","metrowide","recalculation","antiracism","microhabitats","witchhunt","reactively","briers","noncanonical","gamebird","robusta","snorer","fraudster","volar","rolloff","presbyters","minitower","conspecific","biodegradability","nontribal","overmantel","blastomere","belabored","screeds","firstclass","trussed","boobs","wearied","suprisingly","postdate","carjacked","writer/producer","insurgence","costumers","improvident","uncleared","overthinking","warlordism","messing","panoptic","substrata","dhows","noninstitutional","deists","nocked","raconteurs","cartilages","abortifacient","differentiable","forewings","subcomponent","skald","psychs","regurgitated","ethereally","aviaries","masseurs","contrariness","highenergy","demur","rusts","depreciated","undesignated","ordains","decoupled","detainment","crisped","telco","elderberries","tumescent","unbraided","sacerdotal","semigloss","assessable","celeriac","bairn","thyroids","instantiates","eponym","toponyms","ephemeris","leadeth","squeezebox","ackee","odorants","neovascularization","mezzotint","sisterhoods","telescreen","crate","forwards","neatnik","thrums","clothed","clumsier","grudge","spiritedly","copout","guilelessly","cyberworld","zephyrs","workmates","larders","appeasers","schooldays","eveningwear","mastication","deathwatch","aldehydes","brogans","hardshell","expressionist","turbos","taquitos","practicums","halfpipes","fishbone","mouser","nearside","workflows","chasuble","underlayment","autogenous","focalized","pares","nudibranch","periodized","utilitarians","muchneeded","steamrolled","capsizes","twoyear","professionalizing","bellmen","decanting","limpness","boutonniere","batch","molestations","corseted","incidently","toddies","transcendentally","untilled","paintwork","armorers","defrosted","coevolutionary","pedalling","gynaecology","difficile","stiffnesses","gnatcatcher","waterboarded","bakeware","lyres","scrod","emplotment","trypsin","hexadecimal","hearthside","sickout","harpooner","nonsensically","adulatory","winced","doltish","denuding","subcontinental","prizefight","carped","busman","ritualize","summited","transmuted","surmounts","moistly","compendiums","grandmom","savour","reinscription","boatbuilding","threepiece","awesomeness","freebasing","besiegers","cinderblocks","juche","perturbing","sickos","pastoralist","darwinists","whirr","sourwood","neuropsychiatry","crosspieces","inside/outside","usurers","evensong","microlending","wouldst","cocci","biomonitoring","silversides","matrilocal","stayers","capriccio","superyacht","combated","cynosure","meagerly","motor","presumable","rooms","blousy","rubberneckers","remastered","truncating","codpiece","frazzle","vitiated","hoodwink","deadened","bussed","fessed","curtsying","daywear","uncared","tankful","mouthwashes","weepers","tabernacles","dehumidifiers","tootling","overshoot","syllabuses","routed","adenocarcinomas","temblors","kinking","tearooms","kirtle","hypnotists","endotoxins","hyperinflationary","busses","deontological","sidestream","replicants","mutagens","corm","pleura","kales","pitot","virgilian","deworming","bunghole","overstressed","suffused","gaudiest","swamped","gangplanks","desertlike","counterbalanced","tawdriness","wielders","gherkin","haziness","combers","slunk","unshod","begrudges","cased","routs","earless","backbenchers","gridlike","plusses","clomps","pollinates","documentations","placatingly","dramaturge","artificer","heinie","touchbacks","fetishized","nubbly","mouton","overcharge","ba'athists","uncleanliness","spelunkers","greyness","topsail","narrational","geoscientists","polymaths","laparoscope","pipa","moonshiner","rarebit","forwarders","tunafish","phrenologists","rilles","freeplay","backscattered","duplexer","gemsbok","accedes","bookmark","overoptimistic","bricklaying","powdered","radiologically","tensest","undemocratically","helpmates","criers","doorposts","pimped","scourged","superstructures","televises","leapers","axes","kinks","bingeing","serapes","lik","glassless","antiunion","revolutionizes","paradigmatically","greasier","imbricated","dogsled","win/win","ancestries","meanies","pizzicato","protectress","focally","homologies","oke","incapability","demineralization","arachnid","neotraditional","carbos","underpaintings","nonthermal","doublings","pipefish","osteoclastic","emulated","mensuration","former","subversiveness","nailheads","coifed","unlatching","swore","shortterm","pullbacks","undemonstrative","offed","cricketer","lumberman","squelching","slews","splenetic","nonobvious","unharnessed","queerest","signup","threshed","brome","disabused","narrativization","attitudinally","revenant","overtopped","homed","kerygma","lassies","headnotes","pumpkinseed","homeschooled","fluconazole","butterbeans","potentiation","preceptors","nonabusive","bustards","kabbalists","polymyositis","nominalization","arrowing","somnambulant","peopled","shirked","pontiffs","hobnailed","scrimped","tracksuits","documentable","defanged","buttonholing","inflects","unvaried","baggier","kneejerk","spectres","refigure","kilted","mystifications","neaten","practises","backstreets","hosed","footless","eld","flasher","ramified","herstory","ruching","skyways","squalled","polysemous","appropriative","reactant","nonhostile","euthanized","backstrap","shoehorn","dauber","gastropod","tattler","salicylate","neuroprotective","infectiousness","agonal","conative","abscissa","homogenate","deprogrammer","tanzanite","skipjacks","hyphenation","cuirassiers","caprichos","gawks","geared","scarfed","fantasias","prorated","scuttled","rearmed","relaxations","deactivating","uppermost","scampered","tushes","avoirdupois","tills","chiselers","bawdiness","undisputable","spendthrift","lacquerware","retests","rankest","tomahawks","coolheaded","candidness","hedges","reappearances","neuropathologist","yearend","scalawag","tosser","bowstrings","underresearched","unquantified","cabriole","wineskins","dromedaries","biryani","uncontrollability","kibbles","embossing","altimeters","numismatist","biofouling","juristic","adelgid","floozie","septicaemia","intradiegetic","hyphal","incudostapedial","beguine","identificational","acclaim","seriality","mistily","jested","quainter","glints","tyrannically","coproduced","apprehensible","spackle","bottles","terephthalate","unroofed","waterbased","reappointed","bayoneted","interchanged","slobby","cutover","floriferous","ecumenist","hackwork","weedkiller","nanoparticle","oligotrophic","seismographic","musicale","laydown","periodicities","velar","macrofauna","parasitological","temporariness"];

Log.text += "Basic.js (session '" + Log.session + "') initialized " + Log.initialized.toString() + " with settings:\n" + Object.entries(SETTINGS).map(function(e){ return "  " + e[0] + " = " + e[1]; }).join("\n") + "\n\n";

function _update_log(t) {
 let u = Date.now();
 Log.text += "@+" + ((u - Log.initialized)/1000).toFixed(2) +  " seconds: " + t + "\n\n";
 Log.updated = u;
}
   
function _update_SETTINGS(k, v) {
 SETTINGS[k] = v;
 _update_log("Settings updated..." + k + " = " + v);
}

//NAME GENERATION

function _generate_session_id(){
  let id_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (var i = 0; i < 7; i++){
    id += id_chars.substr(Math.round((Math.random()*(id_chars.length-1))), 1);
  }
  return id;
  //if ( _includes( Names, id ) ){
  //  return _generate_session_id();
  //} else {
  //  Names.list.push( id );
  //  return id;
  //}
}

function _generate_name(){
  let n = _random( Words )  + "_" + _random( Words );
  return n;
  //if ( _includes( Names, n ) ){
  //   return _generate_name();
  // } else {
  //   Names.list.push( n );
  //   return n;
  // }
}

// SAVING FILES ------------------------------------------------- //

function _download_log() {
 let element = document.createElement('a');
 element.setAttribute('href', ('data:text/plain;charset=utf-8,' + encodeURIComponent(Log.text)));
 element.setAttribute('download', ('session_log_' + Log.session + ".txt"));
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
 _update_log("User downloaded a copy of the log as 'session_log_" + Log.session + ".txt'");
}

function _download_data(Rektangle){
  //get format info from Rektangle data
  let element = document.createElement('a');
  element.setAttribute('href', ('data:' + Rektangle.mime + ';charset=utf-8,' + encodeURIComponent(Rektangle.text)));
  element.setAttribute('download', Rektangle.filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  _update_log("User downloaded a copy of the dataset " + _dataset + " as '" + converted_data.filename + ".'");
}

// SORTS ----------------------------------------------------- //
   
function _compare_asc(a, b) { return a - b; }

function _compare_desc(a, b) { return b - a; }

// RANDOMNESS ------------------------------------------------ //

var _random = function(arr){
  return arr[Math.round((Math.random()*(arr.length-1)))];
}

var _shuffle = function(arr) {
  var i = 0
    , j = 0
    , temp = null

  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

var _random_sample = function(arr, n){
  let frame = arr.slice(0);
  _shuffle(frame);
  return frame.filter(function(f, index){ return index < n; });
}

var _noise = function(factor = 1){
  //Adds random noise -- result in [0 : 30] muliplied by argument for factor
  let r = Math.random() * factor;
  return Number(r.toFixed(2));
}

var _coin_flip = function(proportion = 0.5000){
  //Makes random noise or other quantity randomly positive or negative
  return (Math.random() <= proportion) ? true : false;
}

var _plus_or_minus = function(x, shift){
  //Makes random noise or other quantity randomly positive or negative
  return ( _coin_flip() ) ? x + shift : x - shift;
}

var _dummy_array = function(N = 1000, mode = 'empty'){
  // modes: empty, order, boolean, numbers, words, IDs
  let result = [];
  for (let i = 1; i <= N; i++){
    if ( mode = 'empty' ) {
      result.push( null );
    }
    else if ( mode = 'order' ) {
      result.push( i );
    }
    else if ( mode = 'boolean' ) {
      result.push( _coin_flip() );
    }
    else if ( mode = 'numbers' ) {
      result.push( Number( Math.random().toFixed(5) ) );
    }
    else if ( mode = 'words' ) {
      result.push( _random( Words )  + " " + _random( Words ) + " " + _random( Words ));
    }
    else if ( mode = 'ids' ) {
      result.push( _generate_session_id() );
    }
  }
  return result;
}

//LIST OPERATORS

var _includes = function( list, x ) {
  if ( list.length === undefined) {
    return ( typeof( list[x] ) === "undefined" ) ? false : true;
  }
  else if ( list.length >= 0 ) {
    return ( list.indexOf( x ) >= 0 ) ? true : false;
  }
  else {
    return null;
  }
}

var _insert = function(arr, index, element){
  if (index === 0) {
    return [element].concat(arr);
  }
  else {
    let temp = arr.slice(0, index);
    temp.push(element);
    return temp.concat(arr.slice(index));
  }
}

//TODO fix removing multiple instances from array
var _remove = function(list, x) {
  if ( typeof( list ) == 'string' ) {
    while ( list.indexOf( x ) > -1 ) {
      list = list.replace( x , "" );
    }
    return list;
  }
  else if ( list.length == undefined ) {
    if (_includes( list, x )) {
      delete list[x];
      return list;
    }
  }
  else if ( list.length >= 0 ) {
    let i = 0;
    while ( (list.length - i) > 0) {
      if ( list[i] === x ){
        list.splice( i, 1 );
      } else {
        i += 1;
      }
    }
    return list;
  }
}

var _distinct = function(arr){
  let d = [];
  for (var i = 0; i < arr.length; i++){
    if (d.indexOf(arr[i]) === -1) {
      d.push(arr[i]);
    }
  }
  return d.sort(_compare_asc);
}

var _flatten = function(list) {
	//if list is an object with properties that are arrays, then arrays assumed to be of same length
 	if ( Array.isArray(list) ) {
  		return list.reduce(function (flat, toFlatten) { return flat.concat(Array.isArray(toFlatten) ? _flatten(toFlatten) : toFlatten); }, []);
	}
	throw new Error("Basic.flatten() requires 1 input array.");
}

var _detect_layout = function(list){
	// return {valid: true|false, layout: object-of-arrays|array-of-objects, rows: 100, arrays: [], other: []}
	let result = {};
	if (Array.isArray(list)){
		let items = _distinct( list.map(function(m){return typeof(m);}) );
		if ((items.length === 1) && (items[0] == 'object')) {
			result.valid = true;
			result.type = "array-of-objects";
			result.variables = Object.keys(list[0]);
			result.rows = list.length;
		} else {
			result.valid = false;
			result.type = "array";
		}
	}
	else if (typeof(list) == 'object') {
		let array_props = Object.keys( list ).filter(function(f){ return Array.isArray( list[f] ) });
		let other_props = Object.keys( list ).filter(function(f){ return ( !Array.isArray( list[f] ) ) });
		let lengths = _distinct(_flatten( array_props.map(function(m){ return list[m].length; })));
		if (lengths.length === 1) {
			result.rows = lengths[0];
			result.valid = true;
			result.type = "object-of-arrays";
			result.arrays = array_props;
			result.other = other_props;
		} else {
			result.valid = false;
			result.type = "object";
		}
	}
	else {
		result.valid = false;
		result.type = "other";
	}
	return result; 
}

var _transform = function(list){
	let layout = _detect_layout(list);
	if (!layout.valid) {
		throw new Error("Basic.transform() requires as input either (1) an array of objects; or (2) an object containing at least one property of type array.");
	}
	else if (layout.type == 'array-of-objects'){
		let result = {};
		layout.variables.forEach(function(f){
			result[f] = list.map(function(m){return m[f];});
		});
		return result;
	}
	else if (layout.type == 'object-of-arrays'){
		let result = [];
		for (let row = 0; row < layout.rows; row ++){
			let obj = {};
			layout.other.forEach(function(f){ obj[f] = list[f]; });
			obj.row_transform = row;
			layout.arrays.forEach(function(f){ obj[f] = list[f][row]; });
			result.push(obj);
		}
		return result;
	}
}

var _glue = function(x, y){
  if ( _scalar( x ) && _scalar( y ) ) {
  	return [x, y];
  }
  else if ( Array.isArray( x ) && Array.isArray( y )) {
  	return x.concat(y);
  }
  else if ( (typeof x == 'object') && (typeof y == 'object') ) {
  	let result = {};
  	Object.keys(x).forEach(function(f, i){
  		result[f] = x[f];
  	});
  	Object.keys(y).filter(function(k){return _includes( Object.keys(x), k ) === false; }).forEach(function(f, i){ result[f] = y[f]; });
  	return result;
  }
  else {
  	throw new Error("Basic.glue() requires 2 inputs that are both arrays, objects or scalar.");
  }
}

var _marry = function(left, right){
 	if ( Array.isArray(left) && Array.isArray(right) ) {
		if ( left.length === right.length ) {
			if ( _scalar(left[0]) && _scalar(right[0]) ) {
				return left.map(function(m, i){ return [m, right[i]]; });
		  	}
		  	else if ( typeof(left[0]) == 'object' && typeof(right[0]) == 'object' ) {
		  		return left.map(function(m, i){ return _glue(m, right[i]); });
		  	}
		  	else if ( Array.isArray(left[0]) && Array.isArray(right[0]) ) {
		  		return left.map(function(m, i){ return [m, right[i]]; });
			}
		}
  	}
	throw new Error("Basic.marry() requires 2 equal-length input arrays.");
}

//SET OPERATORS

var _union = function(x, y){
  //return array of elements in either x or y
  return _distinct(_glue(x, y));
}

var _intersection = function(x, y){
  //return array of elements in either x or y
  return _union( x, y ).filter(function(f){ return ((_includes(x, f)) && (_includes(y, f)));});
}

var _difference = function(x, y){
  //return array of elements in either x or y
  let inter = _intersection(x, y);
  return _union(x, y).filter(function(f){ return _includes(inter, f) === false; });
}

var _scalar = function(thing){
	return (/string|number|boolean/).test(typeof thing);
}
 
return {

/* Settings management */
  
settings: function(setting = "unspecified", value = "unspecified"){ if (setting == "unspecified") {console.log(JSON.stringify(SETTINGS)); } else if (value == "unspecified") {console.log(SETTINGS[setting]); } else {return update_SETTINGS(setting, value); } },

/* Log management */

show_log: function(){return Log.text; },
user_update: function(user_text = "User updated the log."){return _update_log("From user..." + user_text); },
module_update: function(x){return _update_log(x); },
save_log: function(){return _download_log(); },

/* Saving Files */

save_data: function( a ){return _download_data( a ); },

/* Naming */

generate_name: function() {return _generate_name(); },
/* Sorts */

ascending: function( a, b ){return _compare_asc( a, b ); },
descending: function( a, b ){return _compare_desc( a, b ); },

/* Randomness */

random: function( a ){return _random( a ); },
shuffle: function( a ) {return _shuffle( a ); },
random_sample: function( a, b ) {return _random_sample( a, b ); },
noise: function( a ){return _noise( a ); },
coin_flip: function( a ){return _coin_flip( a ); },
plus_or_minus: function( a, b ){return _plus_or_minus( a, b ); },
dummy_array: function( a, b ){return _dummy_array( a, b ); },

/* List operators */

distinct: function( a ){return _distinct( a ); },
insert: function( a, b, c ){ return _insert( a, b, c ); },
flatten: function( a ){return _flatten( a ); },
glue: function( a, b ) {return _glue( a, b ); },
marry: function( a, b ) {return _marry( a, b ); },
includes: function( a, b ){return _includes( a, b ); },
remove: function( a, b ){return _remove( a, b ); },
transform: function( a ){return _transform( a ); },
  
/* Set Operators */
	
union: function( a, b ) {return _union( a, b ); },
intersection: function( a, b ) {return _intersection( a, b ); },
difference: function( a, b ) {return _difference( a, b ); },

/* Typing */

scalar: function( a ){ return _scalar( a ); },
detect_layout: function( a ){ return _detect_layout( a ); },

/* Testing */
  
test: function( assert ){let result = eval(assert) === true ? "passed" : "failed"; _update_log("Test (" + assert + ") " + result); console.log("Test (" + assert + ") " + result + "."); }

};
  
}());