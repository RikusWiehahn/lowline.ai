import _ai from "..";

jest.setTimeout(40000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "",
});

//
//  #  ####     #####  #        ##   # #    #    ##### ###### #    # #####
//  # #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #  ####     #    # #      #    # # # #  #      #   #####    ##     #
//  #      #    #####  #      ###### # #  # #      #   #        ##     #
//  # #    #    #      #      #    # # #   ##      #   #       #  #    #
//  #  ####     #      ###### #    # # #    #      #   ###### #    #   #

describe("isPlaintext", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.isPlaintext({
      text: "The theatre was filled with an enthusiastic audience for the opening night.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.isPlaintext({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #####  #        ##   # #    #    ##### ###### #    # #####
//  #    # #      ##   # #      #    #  #  #    #   #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #      #####  # #  # #####  #    # #    #   #   #####     #    # #      #    # # # #  #      #   #####    ##     #
//  #  ### #      #  # # #      #####  ######   #   #         #####  #      ###### # #  # #      #   #        ##     #
//  #    # #      #   ## #      #   #  #    #   #   #         #      #      #    # # #   ##      #   #       #  #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #      ###### #    # # #    #      #   ###### #    #   #

describe("generatePlaintext", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.generatePlaintext({
      prompt:
        "Explain the rules of cricket in a way that a 5 year old can understand.",
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.generatePlaintext({
      prompt: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Prompt not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.generatePlaintext({
      prompt: `Summarize the following into a 1-2 paragraph human-readable briefing: {{Nelson's Pillar (also known as the Nelson Pillar or simply the Pillar) was a large granite column capped by a statue of Horatio Nelson, built in the centre of what was then Sackville Street (later renamed O'Connell Street) in Dublin, Ireland. Completed in 1809 when Ireland was part of the United Kingdom, it survived until March 1966, when it was severely damaged by explosives planted by Irish republicans. Its remnants were later destroyed by the Irish Army.

      The decision to build the monument was taken by Dublin Corporation in the euphoria following Nelson's victory at the Battle of Trafalgar in 1805. The original design by William Wilkins was greatly modified by Francis Johnston, on grounds of cost. The statue was sculpted by Thomas Kirk. From its opening on 29 October 1809 the Pillar was a popular tourist attraction, but provoked aesthetic and political controversy from the outset. A prominent city centre monument honouring an Englishman rankled as Irish nationalist sentiment grew, and throughout the 19th century there were calls for it to be removed, or replaced with a memorial to an Irish hero.
      
      It remained in the city as most of Ireland became the Irish Free State in 1922, and the Republic of Ireland in 1949. The chief legal barrier to its removal was the trust created at the Pillar's inception, the terms of which gave the trustees a duty in perpetuity to preserve the monument. Successive Irish governments failed to deliver legislation overriding the trust. Although influential literary figures such as W. B. Yeats and Oliver St. John Gogarty defended the Pillar on historical and cultural grounds, pressure for its removal intensified in the years preceding the 50th anniversary of the Rising, and its sudden demise was, on the whole, well-received by the public. Although it was widely believed that the action was the work of the Irish Republican Army (IRA), the police were unable to identify any of those responsible.
      
      After years of debate and numerous proposals, the site was occupied in 2003 by the Spire of Dublin, a slim needle-like structure rising almost three times the height of the Pillar. In 2000, a former republican activist gave a radio interview in which he admitted planting the explosives in 1966, but, after questioning him, the Gardaí decided not to take action. Relics of the Pillar are found in Dublin museums and appear as decorative stonework elsewhere and its memory is preserved in numerous works of Irish literature.
    
      Background

      The redevelopment of Dublin north of the River Liffey began in the early 18th century, largely through the enterprise of the property speculator Luke Gardiner.[1] His best-known work was the transformation in the 1740s of a narrow lane called Drogheda Street, which he demolished and turned into a broad thoroughfare lined with large and imposing town houses. He renamed it Sackville Street, in honour of Lionel Sackville, 1st Duke of Dorset, who served as Lord Lieutenant of Ireland from 1731 to 1737 and from 1751 to 1755.[2] After Gardiner's death in 1755 Dublin's growth continued, with many fine public buildings and grand squares, the city's status magnified by the presence of the Parliament of Ireland for six months of the year.[3] The Acts of Union of 1800, which united Ireland and Great Britain under a single Westminster polity, ended the Irish parliament and presaged a period of decline for the city.[4] The historian Tristram Hunt writes: "[T]he capital's dynamism vanished, absenteeism returned and the big houses lost their patrons".[4]

      The first monument in Sackville Street was built in 1759 in the location where the Nelson Pillar would eventually stand. The subject was William Blakeney, 1st Baron Blakeney, a Limerick-born army officer whose career extended over more than 60 years and ended with his surrender to the French after the siege of Minorca in 1756.[5] A brass statue sculpted by John van Nost the younger was unveiled on St Patrick's Day, 17 March 1759.[6][n 1] Donal Fallon, in his history of the Pillar, states that almost from its inception the Blakeney statue was a target for vandalism. Its fate is uncertain; Fallon records that it might have been melted down for cannon,[7] but it had certainly been removed by 1805.[8]

      Trafalgar

      On 21 October 1805, a Royal Naval fleet commanded by Vice Admiral Lord Nelson defeated the combined fleets of the French and Spanish navies in the Battle of Trafalgar. At the height of the battle Nelson was mortally wounded on board his flagship, HMS Victory; by the time he died later that day, victory was assured.[9]

      Nelson had been hailed in Dublin seven years earlier, after the Battle of the Nile, as defender of the Harp and Crown, the respective symbols of Ireland and Britain.[10] When news of Trafalgar reached the city on 8 November, there were similar scenes of patriotic celebration, together with a desire that the fallen hero should be commemorated.[11] The mercantile classes had particular reason to be grateful for a victory that restored the freedom of the high seas and removed the threat of a French invasion.[12] Many of the city's population had relatives who had been involved in the battle: up to one-third of the sailors in Nelson's fleet were from Ireland, including around 400 from Dublin itself. In his short account of the Pillar, Dennis Kennedy considers that Nelson would have been regarded in the city as a hero, not just among the Protestant Ascendancy but by many Catholics among the rising middle and professional classes.[13]

      The first step towards a permanent memorial to Nelson was taken on 18 November 1805 by the city aldermen, who after sending a message of congratulation to King George III, agreed that the erection of a statue would form a suitable tribute to Nelson's memory.[14][15] On 28 November, after a public meeting had supported this sentiment, a "Nelson committee" was established, chaired by the Lord Mayor. It contained four of the city's Westminster MPs, alongside other city notables including Arthur Guinness, the son of the brewery founder.[16] The committee's initial tasks were to decide precisely what form the monument should take and where it should be put. They had also to raise the funds to pay for it.[17]

      History

      At its first meeting the Nelson committee established a public subscription, and early in 1806 invited artists and architects to submit design proposals for a monument.[18] No specifications were provided, but the contemporary European vogue in commemorative architecture was for the classical form, typified by Trajan's Column in Rome.[17] Monumental columns, or "pillars of victory", were uncommon in Ireland at the time; the Cumberland Column in Birr, County Offaly, erected in 1747, was a rare exception.[19] From the entries submitted, the Nelson committee's choice was that of a young English architect, William Wilkins, then in the early stages of a distinguished career.[n 2] Wilkins's proposals envisaged a tall Doric column on a plinth, surmounted by a sculpted Roman galley.[21]

      The choice of the Sackville Street site was not unanimous. The Wide Streets Commissioners were worried about traffic congestion, and argued for a riverside location visible from the sea.[12] Another suggestion was for a seaside position, perhaps Howth Head at the entrance to Dublin Bay. The recent presence of the Blakeney statue in Sackville Street, and a desire to arrest the street's decline in the post-parliamentary years, were factors that may have influenced the final selection of that site which, Kennedy says, was the preferred choice of the Lord Lieutenant.[22]

      By mid-1807, fundraising was proving difficult; sums raised at that point were well short of the likely cost of erecting Wilkins's column. The committee informed the architect with regret that "means were not placed in their hands to enable them to gratify him, as well as themselves, by executing his design precisely as he had given it".[24] They employed Francis Johnston, architect to the City Board of Works, to make cost-cutting adjustments to Wilkins's scheme.[25][n 3] Johnston simplified the design, substituting a large functional block or pedestal for Wilkins's delicate plinth, and replacing the proposed galley with a statue of Nelson.[24] Thomas Kirk, a sculptor from Cork, was commissioned to provide the statue, to be fashioned from Portland stone.[27][28]

      By December 1807 the fund stood at £3,827, far short of the estimated £6,500 required to finance the project.[23][n 4] Nevertheless, by the beginning of 1808 the committee felt confident enough to begin the work, and organised the laying of the foundation stone. This ceremony took place on 15 February 1808—the day following the anniversary of Nelson's victory at the Battle of Cape St Vincent in 1797[30]—amid much pomp, in the presence of the new Lord Lieutenant, the Duke of Richmond, along with various civic dignitaries and city notables.[31] A memorial plaque eulogising Nelson's Trafalgar victory was attached to the stone. The committee continued to raise money as construction proceeded;[30] when the project was complete in the autumn of 1809, costs totalled £6,856, but contributions had reached £7,138, providing the committee with a surplus of £282.[32]

      When finished, the monument complete with its statue rose to a height of 134 feet (40.8 m).[n 5] The four sides of the pedestal were engraved with the names and dates of Nelson's greatest victories.[32][n 6] A spiral stairway of 168 steps ascended the hollow interior of the column, to a viewing platform immediately beneath the statue.[35] According to the committee's published report, 22,090 cubic feet (626 m3) of black limestone and 7,310 cubic feet (207 m3) of granite had been used to build the column and its pedestal.[36] The Pillar opened to the public on 21 October 1809, on the fourth anniversary of the Battle of Trafalgar; for ten pre-decimal pence,[32][n 7] visitors could climb to a viewing platform just below the statue, and enjoy what an early report describes as "a superb panoramic view of the city, the country and the fine bay".[34][n 8]
      
    }}`,
    });
    expect(result).toEqual({
      result: null,
      error: "This model's maximum context length is 4097 tokens. However, you requested 4345 tokens (2345 in the messages, 2000 in the completion). Please reduce the length of the messages or completion.",
    });
  });
});

//
//  #    #   ##    ####      ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####      ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #    # ######      #         # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

describe("hasSpellingErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasSpellingErrors({
      text: "The stufent went to the libary to researsh for her esssay.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasSpellingErrors({
      text: "The student went to the library to research for her essay.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasSpellingErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #     ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  #####  #   ##       ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #      #   ##           # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

describe("fixSpellingErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixSpellingErrors({
      text: "Wittenburg Cathdral is a bautifull and histroic bulding loceted in the German city of Wittenburg.",
    });
    expect(res).toEqual({
      result:
        "Wittenburg Cathedral is a beautiful and historic building located in the German city of Wittenburg.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixSpellingErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #    #   ##    ####      ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####     #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #    # ######      #    #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

describe("hasGrammarErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasGrammarErrors({
      text: "Ernest Shackleton was a famouse explorer who leaded an epic expedition to Antartica in 1914. The ship of him, the Endurance, became trapped in the ice and they had to abandonned it. Shackleton and his men then trekked across the ice and ocean in small boats until they reached a whaling station on South Georgia Island. Even though they faced many dangeres and hardshyps, Shackleton never losted hope or gived up. His story is truly inspiration.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasGrammarErrors({
      text: "Ernest Shackleton was a famous explorer who led an epic expedition to Antarctica in 1914. His ship, the Endurance, became trapped in the ice and they had to abandon it. Shackleton and his men then trekked across the ice and ocean in small boats until they reached a whaling station on South Georgia Island. Even though they faced many dangers and hardships, Shackleton never lost hope or gave up. His story is truly inspirational.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasGrammarErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #     ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  #####  #   ##      #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #      #   ##      #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

describe("fixGrammarErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixGrammarErrors({
      text: "Captain James Cook was one of the most famous explorers of all time. He was born in Yorkshire England in 1728. When Cook was the captain of the endeavour, he sailed to the east coast of australia and made the first European contact with the aboriginals.",
    });
    expect(res).toEqual({
      result:
        "Captain James Cook was one of the most famous explorers of all time. He was born in Yorkshire, England in 1728. When Cook was the captain of the Endeavour, he sailed to the east coast of Australia and made the first European contact with the Aboriginals.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixGrammarErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #    #   ##    ####     #####  #####   ####  ######   ##   #    # # ##### #   #
//  #    #  #  #  #         #    # #    # #    # #       #  #  ##   # #   #    # #
//  ###### #    #  ####     #    # #    # #    # #####  #    # # #  # #   #     #
//  #    # ######      #    #####  #####  #    # #      ###### #  # # #   #     #
//  #    # #    # #    #    #      #   #  #    # #      #    # #   ## #   #     #
//  #    # #    #  ####     #      #    #  ####  #      #    # #    # #   #     #

describe("hasProfanity", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasProfanity({
      text: "Oh shit, I can't believe I just said that.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasProfanity({
      text: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasProfanity({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #    #####  #####   ####  ######   ##   #    # # ##### #   #
//  #      #  #  #     #    # #    # #    # #       #  #  ##   # #   #    # #
//  #####  #   ##      #    # #    # #    # #####  #    # # #  # #   #     #
//  #      #   ##      #####  #####  #    # #      ###### #  # # #   #     #
//  #      #  #  #     #      #   #  #    # #      #    # #   ## #   #     #
//  #      # #    #    #      #    #  ####  #      #    # #    # #   #     #

describe("fixProfanity", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixProfanity({
      text: "Is this what I have become? Retrace the steps, retrace the steps, What the fuck have I become? Security, illusion for the weak, Refuge, sought in routine, Another gear in their fucking machine.",
    });
    expect(res).toEqual({
      result:
        "Is this what I have become? Retrace the steps, retrace the steps, What the **** have I become? Security, illusion for the weak, Refuge, sought in routine, Another gear in their ******* machine.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixProfanity({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  # #    #  ####  #      #    # #####  ######  ####     #    # ###### #    # ##### #  ####  #    #     ####  ######
//  # ##   # #    # #      #    # #    # #      #         ##  ## #      ##   #   #   # #    # ##   #    #    # #
//  # # #  # #      #      #    # #    # #####   ####     # ## # #####  # #  #   #   # #    # # #  #    #    # #####
//  # #  # # #      #      #    # #    # #           #    #    # #      #  # #   #   # #    # #  # #    #    # #
//  # #   ## #    # #      #    # #    # #      #    #    #    # #      #   ##   #   # #    # #   ##    #    # #
//  # #    #  ####  ######  ####  #####  ######  ####     #    # ###### #    #   #   #  ####  #    #     ####  #

describe("includesMentionOf", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "Warfare",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "Ancient Egypt",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.includesMentionOf({
      text: "",
      subject: "Warfare",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Subject not provided",
    });
  });
});

//
//  #  ####      ####  #    # ######  ####  ##### #  ####  #    #
//  # #         #    # #    # #      #        #   # #    # ##   #
//  #  ####     #    # #    # #####   ####    #   # #    # # #  #
//  #      #    #  # # #    # #           #   #   # #    # #  # #
//  # #    #    #   #  #    # #      #    #   #   # #    # #   ##
//  #  ####      ### #  ####  ######  ####    #   #  ####  #    #

describe("isQuestion", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.isQuestion({
      text: "When did Constantinople fall?",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.isQuestion({
      text: "Constantinople fell on May 29, 1453.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.isQuestion({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #####  # #####  ####
//  #      #    # #    # #    # #      #        #      #      #    # #   #   #
//   ####  #    # #      #      #####   ####    #      #####  #    # #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #####  #   #    ####

describe("suggestEdits", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.suggestEdits({
      text: "Rasputin was a man who lived in Rushia long ago. He was known for being a spiritual advizor to the Tsar and his family. Some people thought he was crazy, but others believed he had magical powers and cold heal people. Despite being controversial, Rasputin had a lot of influence over the Tsar and Tsarina, and his actions played a role in the fell of the Romanov dynasty.",
    });
    expect(res).toEqual({
      result:
        "Rasputin was a man who lived in Russia long ago. He was known for being a spiritual advisor to the Tsar and his family. Some people thought he was crazy, but others believed he had magical powers and could heal people. Despite being controversial, Rasputin had a lot of influence over the Tsar and Tsarina, and his actions played a role in the fall of the Romanov dynasty.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestEdits({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  #    # #    # #    # ###### #####  # ###### ######
//  #      #    # ##  ## ##  ## #      #    # #     #  #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####
//       # #    # #    # #    # #      #####  #   #    #
//  #    # #    # #    # #    # #      #   #  #  #     #
//   ####   ####  #    # #    # ###### #    # # ###### ######

describe("summarize", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.summarize({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
      sentence_count: 1,
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarize({
      text: "",
      sentence_count: 1,
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarize({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
      sentence_count: 0,
    });
    expect(result).toEqual({
      result: null,
      error: "Sentence count not provided",
    });
  });
});

//   ####  #    # #    # #    # ###### #####  # ###### ######    #    # ###### #   #    #####   ####  # #    # #####  ####
//  #      #    # ##  ## ##  ## #      #    # #     #  #         #   #  #       # #     #    # #    # # ##   #   #   #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####     ####   #####    #      #    # #    # # # #  #   #    ####
//       # #    # #    # #    # #      #####  #   #    #         #  #   #        #      #####  #    # # #  # #   #        #
//  #    # #    # #    # #    # #      #   #  #  #     #         #   #  #        #      #      #    # # #   ##   #   #    #
//   ####   ####  #    # #    # ###### #    # # ###### ######    #    # ######   #      #       ####  # #    #   #    ####

describe("summarizeKeyPoints", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.summarizeKeyPoints({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
    });

    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarizeKeyPoints({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### #        ##   #####   ####  #####    ##   ##### ######
//  #      #       #  #  #    # #    # #    #  #  #    #   #
//  #####  #      #    # #####  #    # #    # #    #   #   #####
//  #      #      ###### #    # #    # #####  ######   #   #
//  #      #      #    # #    # #    # #   #  #    #   #   #
//  ###### ###### #    # #####   ####  #    # #    #   #   ######

describe("elaborate", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.elaborate({
      text: "Is mayonnaise an instrument?",
      sentence_count: 2,
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.elaborate({
      text: "",
      sentence_count: 3,
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.elaborate({
      text: "Bitcoin was created by Satoshi Nakamoto.",
      sentence_count: 0,
    });
    expect(res).toEqual({
      result: null,
      error: "Sentence count not provided",
    });
  });
});

//
//  ###### #    # #####  #        ##   # #    #
//  #       #  #  #    # #       #  #  # ##   #
//  #####    ##   #    # #      #    # # # #  #
//  #        ##   #####  #      ###### # #  # #
//  #       #  #  #      #      #    # # #   ##
//  ###### #    # #      ###### #    # # #    #

describe("explain", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "novice",
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.explain({
      text: "",
      level: "beginner",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "" as any,
    });
    expect(res).toEqual({
      result: null,
      error: "Level not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "absolute beginner" as any,
    });
    expect(res).toEqual({
      result: null,
      error: "Invalid level",
    });
  });
});

//
//   ####  #        ##    ####   ####  # ###### #   #
//  #    # #       #  #  #      #      # #       # #
//  #      #      #    #  ####   ####  # #####    #
//  #      #      ######      #      # # #        #
//  #    # #      #    # #    # #    # # #        #
//   ####  ###### #    #  ####   ####  # #        #

describe("classify", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.classify({
      item: "The Epic of Gilgamesh",
      criteria: "language of original text",
      categories: [
        {
          id: "d5d7b896-bbc6-11ed-afa1-0242ac120002",
          text: "Modern languages",
        },
        {
          id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
          text: "Ancient languages",
        },
        {
          id: "efae8358-bbc6-11ed-afa1-0242ac120002",
          text: "Medieval languages",
        },
      ],
    });
    expect(res).toEqual({
      result: {
        id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
        text: "Ancient languages",
      },
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.classify({
      item: "",
      criteria: "language of original text",
      categories: [
        {
          id: "d5d7b896-bbc6-11ed-afa1-0242ac120002",
          text: "Modern languages",
        },
        {
          id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
          text: "Ancient languages",
        },
        {
          id: "efae8358-bbc6-11ed-afa1-0242ac120002",
          text: "Medieval languages",
        },
      ],
    });
    expect(res).toEqual({
      result: null,
      error: "Item not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.classify({
      item: "The Epic of Gilgamesh",
      criteria: "language of original text",
      categories: [],
    });
    expect(res).toEqual({
      result: null,
      error: "Categories not provided",
    });
  });
});

//
//   ####  ###### #####    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #        #      #   #  #       # #  #    # #    # #    # #    # #
//  #      #####    #      ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #        #      #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #        #      #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ######   #      #    # ######   #   #    #  ####  #    # #####   ####

describe("getKeywords", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.getKeywords({
      text: "The Epic of Gilgamesh was written in ancient Sumerian by an unknown author.",
      count: 3,
    });

    expect(res).toEqual({
      result: [expect.any(String), expect.any(String), expect.any(String)],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getKeywords({
      text: "",
      count: 3,
    });
    expect(res).toEqual({
      result: [],
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getKeywords({
      text: "The Epic of Gilgamesh was written in ancient Sumerian by an unknown author.",
      count: 0,
    });
    expect(res).toEqual({
      result: [],
      error: "Count not provided",
    });
  });
});

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #      ##   # #      #    #  #  #    #   #         #   #  #       # #  #    # #    # #    # #    # #
//  #      #####  # #  # #####  #    # #    #   #   #####     ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #      #  # # #      #####  ######   #   #         #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #      #   ## #      #   #  #    #   #   #         #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #    # ######   #   #    #  ####  #    # #####   ####

describe("generateKeywords", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.generateKeywords({
      topic: "Charles Dickens",
      count: 4,
    });
    expect(res).toEqual({
      result: [
        expect.any(String),
        expect.any(String),
        expect.any(String),
        expect.any(String),
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.generateKeywords({
      topic: "",
      count: 4,
    });
    expect(res).toEqual({
      result: [],
      error: "Topic not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.generateKeywords({
      topic: "Charles Dickens",
      count: 0,
    });
    expect(res).toEqual({
      result: [],
      error: "Count not provided",
    });
  });
});

//
//   ####  ###### #####    #####  ####  #####  #  ####
//  #    # #        #        #   #    # #    # # #    #
//  #      #####    #        #   #    # #    # # #
//  #  ### #        #        #   #    # #####  # #
//  #    # #        #        #   #    # #      # #    #
//   ####  ######   #        #    ####  #      #  ####

describe("getTopic", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.getTopic({
      text: "A developed country, New Zealand ranks highly in international comparisons of national performance, such as quality of life, education, protection of civil liberties, government transparency, and economic freedom. The country was the first to introduce a minimum wage, and the first to give women the right to vote. New Zealand underwent major economic changes during the 1980s, which transformed it from a protectionist to a liberalised free-trade economy.",
    });
    expect(res).toEqual({
      result: "New Zealand",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getTopic({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #####  #      #    # #####    ##   #      # ###### ######
//  #    # #      #    # #    #  #  #  #      #     #  #
//  #    # #      #    # #    # #    # #      #    #   #####
//  #####  #      #    # #####  ###### #      #   #    #
//  #      #      #    # #   #  #    # #      #  #     #
//  #      ######  ####  #    # #    # ###### # ###### ######

describe("pluralize", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.pluralize({
      item: "tornado",
      count: 3,
    });
    expect(res).toEqual({
      result: "tornadoes",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.pluralize({
      item: "",
      count: 3,
    });
    expect(res).toEqual({
      result: null,
      error: "Item not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.pluralize({
      item: "tornado",
      count: 0,
    });
    expect(res).toEqual({
      result: null,
      error: "Count not provided",
    });
  });
});

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    #   ##   #####  #    # #####   ####  #    # #    #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    ##  ##  #  #  #    # #   #  #    # #    # #    # ##   #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    # ## # #    # #    # ####   #    # #    # #    # # #  #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    # ###### #####  #  #   #    # #    # # ## # #  # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    # #    # #   #  #   #  #    # #    # ##  ## #   ##
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    # #    # #    # #    # #####   ####  #    # #    #

describe("plaintextToMarkdown", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.plaintextToMarkdown({
      text: `General Sherman (tree)
      General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.

      History
      The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman.`,
    });
    expect(res).toEqual({
      result: `# General Sherman (tree)
General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.

## History
The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman.`,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.plaintextToMarkdown({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    # ##### #    # #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    #    #   #   ##  ## #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    ######   #   # ## # #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    #   #   #    # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    #   #   #    # #
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    #   #   #    # ######

describe("plaintextToHTML", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.plaintextToHTML({
      text: `General Sherman (tree)
      General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.

      History
      The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman. The official story, which may be apocryphal, claims the tree was named in 1879 by naturalist James Wolverton, who had served as a lieutenant in the 9th Indiana Cavalry under Sherman.`,
    });
    expect(res).toEqual({
      result:
        "<div><h1>General Sherman (tree)</h1><p>General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.</p><h2>History</h2><p>The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman. The official story, which may be apocryphal, claims the tree was named in 1879 by naturalist James Wolverton, who had served as a lieutenant in the 9th Indiana Cavalry under Sherman.</p></div>",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.plaintextToHTML({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #####  ####     #    #  ####    ##       ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #       #  #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    #  ####  #    #     ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    #      # ######         # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #    # #    #    #    # #      #      #      #      # #   ## #    #
//    #    ####      ####   ####  #    #     ####  #      ###### ###### ###### # #    #  ####

describe("toSpellingUSA", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.toSpellingUSA({
      text: `The harbour was crowded with 19th century British sailing ships, their rigging taut in the stiff breeze as crews hoisted the mainsail, unfurled the jib, and set the topsail with skillful precision. The ships' wooden hulls were often painted in distinctive shades of grey or grey-blue, with names emblazoned in white letters on their sides.`,
    });
    expect(res).toEqual({
      result:
        "The harbor was crowded with 19th century British sailing ships, their rigging taut in the stiff breeze as crews hoisted the mainsail, unfurled the jib, and set the topsail with skillful precision. The ships' wooden hulls were often painted in distinctive shades of gray or blue-gray, with names emblazoned in white letters on their sides.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.toSpellingUSA({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #####  ####     #    # #    #     ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #   #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    # ####       ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    # #  #           # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #   #     #    # #      #      #      #      # #   ## #    #
//    #    ####      ####  #    #     ####  #      ###### ###### ###### # #    #  ####

describe("toSpellingUK", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.toSpellingUK({
      text: `The harbor was crowded with 19th century British sailing ships, their rigging taut in the stiff breeze as crews hoisted the mainsail, unfurled the jib, and set the topsail with skillful precision. The ships' wooden hulls were often painted in distinctive shades of gray or gray-blue, with names emblazoned in white letters on their sides.`,
    });
    expect(res).toEqual({
      result:
        "The harbour was crowded with 19th century British sailing ships, their rigging taut in the stiff breeze as crews hoisted the mainsail, unfurled the jib, and set the topsail with skilful precision. The ships' wooden hulls were often painted in distinctive shades of grey or grey-blue, with names emblazoned in white letters on their sides.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.toSpellingUK({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});
