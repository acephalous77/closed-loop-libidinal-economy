// Psychopolitics of Socialization — consumer research expansion, 2026-11-22.
//
// Encodes the eleven-pass Consumer Research room ("The Arbitrage of the Subject"):
// consumer research as the comparator of the closed loop — reading the subject back,
// pricing the gap between self-estimate and firm-estimate, and holding the spread as
// an asset. The module is merged over atlas-data.js and atlas-additions.js at load
// time, so the original corpus files stay untouched and this expansion keeps its own
// provenance.
//
// New territories: consumer research & the readout (1911–), the arbitrage of the
// subject (1916–), and the remedy apparatus (1970–). New lenses: readout, arbitrage,
// remedy. New relations: reads, prices, sells, buys, audits, exempts, justifies,
// establishes, bans, conditions, enforces, supplies. The negative-file and export
// branches extend the existing carceral, statecap and surveil territories back to
// 1858.
//
// Evidence tiers follow the existing ladder: documented | contested | speculative.
// Vendors' efficacy figures, advocate-relayed numbers and interpretive theses the
// dossier flags are marked contested. Sources are named in each record; the full
// dossier lives in the Consumer Research room (notes 00–27).

export const CLUSTERS = {
  "consumer": {
    "label": "Consumer research & the readout",
    "hue": 175
  },
  "arbitrage": {
    "label": "The arbitrage of the subject",
    "hue": 25
  },
  "remedy": {
    "label": "The remedy apparatus",
    "hue": 300
  }
};

export const LENSES = {
  "readout": {
    "label": "The readout",
    "desc": "The comparator: reading the subject back, pricing the difference, and holding the spread as an asset."
  },
  "arbitrage": {
    "label": "The arbitrage",
    "desc": "The spread between the subject's self-estimate and the firm's estimate — segmentation, pricing, and the wage at the bottom of the chain."
  },
  "remedy": {
    "label": "Remedy & legitimation",
    "desc": "Rights, disclosures, audits and prohibitions — and the production of consent."
  }
};

export const NODES = [
  {
    "id": "charles_coolidge_parlin",
    "label": "Charles Coolidge Parlin",
    "sub": "market researcher, Curtis Publishing, 1911–1916",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1911,
    "lens": [
      "readout",
      "market",
      "measure",
      "epistemic"
    ],
    "rec": {
      "what": "Hired by Curtis in 1911 to run its Division of Commercial Research; invented the scope, technique and name of commercial research.",
      "fund": "Curtis Publishing salary, inside the advertising department.",
      "did": "Read pantry contents and household trash, ran 1,121 interviews across 165 cities, and wrote Agricultural Implements, Department Store Lines and Automobiles. Influence of Women.",
      "src": [
        "Curtis Publishing Company records, Kislak Center, University of Pennsylvania",
        "Parlin, Agricultural Implements (1911–12)",
        "Parlin, Department Store Lines (1911–12)"
      ]
    }
  },
  {
    "id": "curtis_publishing",
    "label": "Curtis Publishing Company",
    "sub": "magazine publisher, Philadelphia, 1911",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1911,
    "lens": [
      "market",
      "readout",
      "polecon"
    ],
    "rec": {
      "what": "Publisher of the Saturday Evening Post and Ladies' Home Journal; bought Country Gentleman and needed to prove a sellable readership to advertisers.",
      "fund": "Advertising revenue and subscriptions; the research served the ad department.",
      "did": "Created the Division of Commercial Research in its Advertising Department in 1911, hiring Parlin to manufacture a demonstrable, priced audience.",
      "src": [
        "Curtis Publishing Company records, Kislak Center, University of Pennsylvania",
        "Parlin, Department Store Lines (1911–12)"
      ]
    }
  },
  {
    "id": "commercial_research_division",
    "label": "Division of Commercial Research",
    "sub": "research unit, Curtis Publishing, 1911–",
    "type": "program",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1911,
    "lens": [
      "readout",
      "measure",
      "market"
    ],
    "rec": {
      "what": "First in-house market research operation in the United States, created inside Curtis's advertising department to specify the readership.",
      "fund": "Curtis Publishing Company.",
      "did": "Produced a 460-page agricultural implements survey across sixteen states (1912), a 165-city department-store study, and a 1916 study of women's influence on automobile purchase.",
      "src": [
        "Curtis records, series V and VIII, Kislak Center",
        "Parlin, Agricultural Implements (1911–12)",
        "Parlin, Automobiles. Influence of Women (1916)"
      ]
    }
  },
  {
    "id": "the_trash_audit",
    "label": "The trash audit",
    "sub": "founding method, household discard reading, 1911",
    "type": "idea",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1911,
    "lens": [
      "readout",
      "measure",
      "epistemic",
      "mechanism"
    ],
    "lever": "data",
    "co": 0.15,
    "rec": {
      "what": "Reading household discard — pantry contents and trash — to infer brand purchases; forensic, unconsented, domestic and brand-comparative.",
      "fund": "Curtis Publishing, through the Division of Commercial Research.",
      "did": "Constituted the household as a purchase series; the founding posture later automated in meters, tills, cookies and pixels.",
      "src": [
        "Curtis Publishing Company records, Kislak Center",
        "Parlin, Department Store Lines (1911–12)"
      ]
    }
  },
  {
    "id": "clarence_saunders",
    "label": "Clarence Saunders",
    "sub": "grocer and inventor, Memphis, 1916–1923",
    "type": "person",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1916,
    "lens": [
      "market",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "Memphis grocer who opened the first self-service store and patented its apparatus in pieces; ruined by the 1923 short squeeze.",
      "fund": "Own capital and a $10m borrowed position in Piggly Wiggly stock.",
      "did": "Opened Piggly Wiggly on 6 September 1916; patented the self-serving store, price-tag adjacency and the printed receipt; died in 1953 still designing an automated store.",
      "src": [
        "US Patent 1,242,872 (Saunders, Self-serving store)",
        "US Patent 1,297,405",
        "Exchange rule action on the March 1923 corner"
      ]
    }
  },
  {
    "id": "piggly_wiggly",
    "label": "Piggly Wiggly",
    "sub": "self-service grocery, Memphis, 1916–1923",
    "type": "case",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1916,
    "lens": [
      "market",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "First self-service grocery, Memphis: turnstiles, continuous-path shelving, one cashier, cash only; the clerk's functions split into prosthetics.",
      "fund": "Saunders's capital; franchised after 1916.",
      "did": "Eliminated the clerk who held price memory and attested the transaction; reached 1,000-plus franchised stores and $100m sales by 1923; shoplifting losses offset by impulse purchasing.",
      "src": [
        "US Patent 1,242,872 (Saunders)",
        "US Patent 1,357,521",
        "US Patent 1,297,405"
      ]
    }
  },
  {
    "id": "earnest_elmo_calkins",
    "label": "Earnest Elmo Calkins",
    "sub": "advertising executive and theorist, 1930–1932",
    "type": "person",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1930,
    "lens": [
      "market",
      "theory",
      "polecon"
    ],
    "rec": {
      "what": "Advertising executive who called consumption engineering a new business science coupling consumer research to design innovation.",
      "fund": "Commercial advertising; the trade that bought the research.",
      "did": "Wrote 'The New Consumption Engineer, and the Artist' (1930), named artificial obsolescence, and introduced Sheldon and Arens's 1932 manifesto.",
      "src": [
        "Calkins, 'The New Consumption Engineer, and the Artist' (1930)",
        "Calkins, 'What Consumer Engineering Really Is' (1932)",
        "Sheldon and Arens, Consumer Engineering (1932)"
      ]
    }
  },
  {
    "id": "consumer_engineering",
    "label": "Consumer engineering",
    "sub": "demand-creation programme, 1932",
    "type": "program",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1932,
    "lens": [
      "market",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "lever": "symbolic",
    "co": 0.65,
    "rec": {
      "what": "The 1932 programme to answer overproduction by measuring wants and then redesigning the object, including its durability.",
      "fund": "Manufacturers and their design departments; sold as a business technique.",
      "did": "Paired consumer research with restyling and fashion cycles in textiles, furnishings and durables; set the target of consuming all that can be made.",
      "src": [
        "Sheldon and Arens, Consumer Engineering (1932)",
        "Calkins in Frederick, ed., A Philosophy of Production (1930)",
        "Consumer Engineering, 1920s–1970s (Palgrave, 2019)"
      ]
    }
  },
  {
    "id": "sheldon_and_arens",
    "label": "Roy Sheldon and Egmont Arens",
    "sub": "designers and authors, Calkins's department, 1932",
    "type": "person",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1932,
    "lens": [
      "market",
      "theory",
      "temporal"
    ],
    "rec": {
      "what": "Calkins's design-department authors of the 1932 manifesto; the pair who wrote the two-part job description of consumer engineering.",
      "fund": "Calkins's design department.",
      "did": "Asked whether artificial obsolescence could be created and answered that the discipline ends only when all production is consumed.",
      "src": [
        "Sheldon and Arens, Consumer Engineering (1932)",
        "Calkins, 'What Consumer Engineering Really Is' (1932)"
      ]
    }
  },
  {
    "id": "artificial_obsolescence",
    "label": "Artificial obsolescence",
    "sub": "doctrine of the shortened product life, 1932",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1932,
    "lens": [
      "market",
      "temporal",
      "mechanism",
      "polecon"
    ],
    "lever": "symbolic",
    "co": 0.72,
    "rec": {
      "what": "The deliberate shortening of a product's life, licensed by a defensible account of what consumers want.",
      "fund": "No separate funder; a doctrine inside consumer engineering.",
      "did": "Converted goods people use into goods they use up; supplied the product's death date as a specification, justified by measurement.",
      "src": [
        "Sheldon and Arens, Consumer Engineering (1932), ch. 3",
        "London, Ending the Depression Through Planned Obsolescence (1932)",
        "Slade, Made to Break (2006)"
      ]
    }
  },
  {
    "id": "audimeter",
    "label": "Audimeter",
    "sub": "passive tuning recorder, MIT, 1935–1939",
    "type": "program",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1935,
    "lens": [
      "readout",
      "measure",
      "mechanism",
      "epistemic"
    ],
    "lever": "data",
    "co": 0.2,
    "rec": {
      "what": "Electromechanical recorder of radio tuning, field-tested in Boston in late 1935; the first passive consumer sensor.",
      "fund": "John Shepard financed the Boston field test; Elder and Woodruff developed it at MIT.",
      "did": "Removed the subject from the measurement path; patent filed 17 August 1936, granted 10 October 1939; trademarked by Elder and Woodruff.",
      "src": [
        "'Audimeter,' MBC Encyclopedia of Radio",
        "Beville, Audience Ratings (1988)"
      ]
    }
  },
  {
    "id": "robert_elder",
    "label": "Robert Elder",
    "sub": "MIT marketing instructor and meter inventor, 1930–1936",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1930,
    "lens": [
      "readout",
      "measure",
      "mechanism"
    ],
    "rec": {
      "what": "MIT marketing instructor who conceived the Audimeter with Woodruff, prompted by Lever Brothers and CBS.",
      "fund": "MIT appointment; CBS published his earlier surveys.",
      "did": "Ran two mail surveys for CBS in 1930 and 1931, negotiated a royalty-free licence around RCA's blocking patent, and sold the meter rights to Nielsen in spring 1936.",
      "src": [
        "Beville, Audience Ratings (1988)",
        "'Audimeter,' MBC Encyclopedia of Radio",
        "'A.C. Nielsen Company,' MBC Encyclopedia of Radio"
      ]
    }
  },
  {
    "id": "the_panel",
    "label": "The panel",
    "sub": "standing sample as commodity, 1942",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1942,
    "lens": [
      "readout",
      "market",
      "polecon",
      "temporal"
    ],
    "lever": "data",
    "co": 0.25,
    "rec": {
      "what": "A standing sample sold for its continuity; the data is a by-product. A renewable relationship with households that agreed to be a sensor.",
      "fund": "Advertisers and broadcasters buying the currency.",
      "did": "Made the buyer purchase persistence; the measurement came second. Recruited households also kept diaries unpaid, performing the attribution labour.",
      "src": [
        "Beville, Audience Ratings (1988)",
        "Smythe, 'On the Audience Commodity and Its Work' (1981)"
      ]
    }
  },
  {
    "id": "hawthorne_works",
    "label": "Hawthorne Works",
    "sub": "Western Electric plant, Cicero, Illinois, 1924–1932",
    "type": "case",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1924,
    "lens": [
      "readout",
      "socio",
      "epistemic",
      "polecon"
    ],
    "rec": {
      "what": "Western Electric plant at Cicero, Illinois, 35,000 workers; four research phases from illumination to the bank wiring room, 1924–1932.",
      "fund": "Western Electric, with the National Research Council for the lighting phase.",
      "did": "Hosted 21,126 open-ended employee interviews and the relay assembly and bank wiring studies; the point where the apparatus turned from output to attitudes.",
      "src": [
        "Roethlisberger and Dickson, Management and the Worker (1939)",
        "Harvard Business School Historical Collections, Hawthorne exhibit",
        "Hassard, Human Relations 65(11), 2012"
      ]
    }
  },
  {
    "id": "western_electric",
    "label": "Western Electric",
    "sub": "AT&T manufacturing subsidiary, 1924",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1924,
    "lens": [
      "polecon",
      "socio",
      "readout"
    ],
    "rec": {
      "what": "AT&T's sole telephone-equipment supplier, running welfare capitalism as explicit anti-union strategy before Mayo arrived.",
      "fund": "AT&T, as its manufacturing subsidiary.",
      "did": "Commissioned the Hawthorne studies and already held a human-relations philosophy; Mayo's team swam with the tide.",
      "src": [
        "Hassard, 'Rethinking the Hawthorne Studies' (2012)",
        "Roethlisberger and Dickson, Management and the Worker (1939)"
      ]
    }
  },
  {
    "id": "elton_mayo",
    "label": "Elton Mayo",
    "sub": "Harvard industrial researcher, at Hawthorne 1928",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1928,
    "lens": [
      "socio",
      "theory",
      "epistemic"
    ],
    "rec": {
      "what": "Harvard industrial researcher, a known anti-union academic, brought to Hawthorne in 1928.",
      "fund": "Harvard appointment; John D. Rockefeller Jr as benefactor.",
      "did": "Supplied the literary account of the Hawthorne discovery; the team's interviews reported no criticism of the company in a union-avoidance plant.",
      "src": [
        "Mayo, The Human Problems of an Industrial Civilization (1933)",
        "Hassard, Human Relations 65(11), 2012",
        "Roethlisberger and Dickson (1939)"
      ]
    }
  },
  {
    "id": "hawthorne_effect",
    "label": "The Hawthorne effect",
    "sub": "observation-raises-output thesis, 1939",
    "type": "theory",
    "cl": "consumer",
    "ev": "contested",
    "eff": "contested",
    "yr": 1939,
    "lens": [
      "epistemic",
      "theory",
      "measure",
      "socio"
    ],
    "rec": {
      "what": "The claim that being observed raises output, canonised in 1939 from the illumination experiments.",
      "fund": "No separate funder; a finding inside the Western Electric programme.",
      "did": "Organised the methodological unconscious of the social sciences for seventy-five years; the recovered illumination records show no such pattern, and the surviving effect is smaller.",
      "src": [
        "Levitt and List, AEJ: Applied Economics 3(1), 2011",
        "Roethlisberger and Dickson (1939)",
        "Carey, ASR 32(3), 1967"
      ]
    }
  },
  {
    "id": "univac_census",
    "label": "UNIVAC I at the Census",
    "sub": "first US commercial computer installation, 1951",
    "type": "program",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1951,
    "lens": [
      "readout",
      "mechanism",
      "epistemic",
      "polecon"
    ],
    "rec": {
      "what": "Installation of UNIVAC I, the first US commercial computer, at the Bureau of the Census in 1951.",
      "fund": "Federal government, through the Census Bureau.",
      "did": "Removed the clerk-and-punchcard bottleneck that had incidentally protected privacy, making record linkage practical before the National Data Center proposal.",
      "src": [
        "Ruggles Report (April 1965)",
        "Kaysen Report (October 1966)"
      ]
    }
  },
  {
    "id": "bureau_of_the_census",
    "label": "Bureau of the Census",
    "sub": "federal statistical agency, 1951",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1951,
    "lens": [
      "readout",
      "address",
      "market",
      "polecon"
    ],
    "rec": {
      "what": "Federal statistical agency that received UNIVAC I and tabulated the census Claritas later reallocated onto ZIP codes.",
      "fund": "Federal appropriation.",
      "did": "Tabulated data only for administrative geographies; consulted Robbin in 1971 and seated him on its small-areas advisory committee in 1974.",
      "src": [
        "Robbin CV, ricercar.com/JRCV-D",
        "Ruggles Report (April 1965)",
        "Caplan, 'Clusters,' The New Yorker (1982)"
      ]
    }
  },
  {
    "id": "national_data_center",
    "label": "National Data Center",
    "sub": "proposed federal record consolidation, 1965–1966",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1965,
    "lens": [
      "remedy",
      "epistemic",
      "temporal",
      "polecon"
    ],
    "rec": {
      "what": "Proposal to consolidate federal statistical records into one centre, developed through the Ruggles and Kaysen reports.",
      "fund": "Federal statistical budget; advocated by Ruggles, Dunn and Bowman.",
      "did": "Defeated after House and Senate hearings; the Social Security number became the joining-key fight; the defeat was a real privacy victory.",
      "src": [
        "Ruggles Report (April 1965)",
        "Kaysen Report (October 1966)",
        "The Computer and Invasion of Privacy, House hearings (1966)"
      ]
    }
  },
  {
    "id": "cornelius_gallagher",
    "label": "Cornelius E. Gallagher",
    "sub": "US representative, New Jersey, 1965–1967",
    "type": "person",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1965,
    "lens": [
      "remedy",
      "temporal",
      "epistemic"
    ],
    "rec": {
      "what": "Democratic congressman from New Jersey who chaired the Special Subcommittee on Invasion of Privacy.",
      "fund": "Congressional office; no outside funder recorded.",
      "did": "Opened hearings on 2 June 1965; framed the harm as temporal and moral — the computer neither forgives nor forgets; named the Social Security number as the linking danger.",
      "src": [
        "The Computer and Invasion of Privacy (1966), statement at 1",
        "112 Cong. Rec. 19963 (18 August 1966)",
        "Gallagher, 'Privacy and the National Data Center' (1967)"
      ]
    }
  },
  {
    "id": "house_invasion_of_privacy_subcommittee",
    "label": "Special Subcommittee on Invasion of Privacy",
    "sub": "House Government Operations, 89th Congress, 1965–1966",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1965,
    "lens": [
      "remedy",
      "polecon"
    ],
    "rec": {
      "what": "House Government Operations special subcommittee, 89th Congress; the visible forum of the 1965–66 privacy panic.",
      "fund": "House of Representatives.",
      "did": "Heard Packard and Reich against the data centre, Ruggles and Dunn for it; installed the distinction between data that decides fate and data that sells.",
      "src": [
        "The Computer and Invasion of Privacy (1966)",
        "Computer Privacy, Senate Judiciary hearings (1967–68)",
        "Federal Data Banks, Computers, and the Bill of Rights (1971)"
      ]
    }
  },
  {
    "id": "fcra",
    "label": "Fair Credit Reporting Act",
    "sub": "federal statute, 15 U.S.C. §1681, 1970",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1970,
    "lens": [
      "remedy",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "1970 statute regulating consumer reporting agencies for credit, employment, insurance, housing and similar eligibility decisions.",
      "fund": "Federal statute; enforced by the FTC.",
      "did": "Created access, dispute, accuracy and permissible-purpose rules; the FTC brought about 100 actions and $30m in penalties; marketing stayed outside.",
      "src": [
        "Fair Credit Reporting Act, 15 U.S.C. §1681 et seq. (1970)",
        "FTC, 40 Years of Experience with the FCRA (2011)",
        "FTC, Data Brokers (2014)",
        "FCRA §605(a), 15 U.S.C. §1681c(a)",
        "FTC Advisory Opinion to Sum (15 September 1999)",
        "FCRA, 1970",
        "CDIA comments, 2 Apr 2025",
        "CFPB medical-debt report, Apr 2023"
      ]
    }
  },
  {
    "id": "marketing_exemption",
    "label": "The marketing exemption",
    "sub": "legal carve-out, 1970–present",
    "type": "idea",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1970,
    "lens": [
      "remedy",
      "market",
      "polecon",
      "epistemic"
    ],
    "rec": {
      "what": "The legal negative space where data sold for marketing carries no accuracy duty, no access, no correction and no recognised harm.",
      "fund": "No agency funds it; it is the absence of regulation, confirmed by FTC statements.",
      "did": "Defined what counted as injury, making the same person a party in one column and an input in the other; the CFPB's 2024 Regulation V proposal is the first serious attempt to move it.",
      "src": [
        "FTC, Data Brokers: A Call for Transparency and Accountability (2014), 1, 7, 25",
        "FTC, 40 Years of Experience with the FCRA (2011)",
        "CFPB, Regulation V Proposed Rule, 89 Fed. Reg. (13 December 2024)"
      ]
    }
  },
  {
    "id": "jonathan_robbin",
    "label": "Jonathan Robbin",
    "sub": "founder of Claritas, 1971–1982",
    "type": "person",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1971,
    "lens": [
      "address",
      "market",
      "measure",
      "polecon"
    ],
    "rec": {
      "what": "Founder of Claritas; social-profile consultant to the War on Poverty and the Census Bureau before selling geodemography.",
      "fund": "OEO and Census consultancies, then commercial clients.",
      "did": "Reallocated the 1970 census onto 36,000 ZIP codes, published REZIDE in 1974, built the forty-cluster system, and boasted he could predict what a ZIP eats, drinks, drives and thinks.",
      "src": [
        "Robbin CV, ricercar.com/JRCV-D",
        "Caplan, 'Clusters,' The New Yorker (1982)",
        "Washington Post, 'Army Recruits Claritas...' (1 September 1980)"
      ]
    }
  },
  {
    "id": "claritas",
    "label": "Claritas",
    "sub": "geodemographic research firm, 1971–",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1971,
    "lens": [
      "address",
      "market",
      "polecon"
    ],
    "rec": {
      "what": "Market-research firm founded in 1971 to join public census aggregates to addressable commercial geography.",
      "fund": "Direct-marketing clients; later the US Army.",
      "did": "Sold ZIP-reallocated census to mailers, built PRIZM under the 1980 census and COMPASS, and contracted with the Army Recruiting Command in 1980.",
      "src": [
        "Robbin CV, ricercar.com/JRCV-D",
        "Washington Post (1 September 1980)",
        "Webber and Burrows, The Professional Geographer (2013)",
        "00 · Hub, §VIII.22, state as first client",
        "12 · Exhaust and disintermediation, era table",
        "15 · The counterfactual, Part one",
        "Robbin CV (ricercar.com/JRCV-D)",
        "Lincoln Caplan, The New Yorker, 25 Jan 1982",
        "NIMH profile system record"
      ]
    }
  },
  {
    "id": "prizm",
    "label": "PRIZM",
    "sub": "ZIP-level cluster system, 1974–1980",
    "type": "program",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1974,
    "lens": [
      "address",
      "market",
      "measure",
      "socio"
    ],
    "lever": "data",
    "co": 0.3,
    "rec": {
      "what": "Potential Ratings in ZIP Markets: forty neighbourhood clusters linking census geography to sales records and survey respondents.",
      "fund": "Claritas clients, including packaged-goods manufacturers and the Army.",
      "did": "Classified every ZIP, tract and block group; grew to sixty-six clusters by 2004; later joined to clients' transaction files and a GIS package.",
      "src": [
        "Caplan, 'Clusters,' The New Yorker (1982)",
        "New York Times, 'The ZIP Code' (17 July 1988)",
        "Robbin CV, ricercar.com/JRCV-D"
      ]
    }
  },
  {
    "id": "usarec",
    "label": "US Army Recruiting Command",
    "sub": "Fort Sheridan, Illinois, 1980",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1980,
    "lens": [
      "address",
      "market",
      "polecon",
      "mechanism"
    ],
    "rec": {
      "what": "US Army Recruiting Command at Fort Sheridan, Illinois; Claritas's first prestige client.",
      "fund": "US Department of Defense.",
      "did": "Bought a custom geodemographic model under General Thurman to target high-quality recruits: 500 variables in 34 factors, regression scored by explained variance.",
      "src": [
        "Washington Post, 'Army Recruits Claritas to Find Who Uncle Sam Wants' (1980)",
        "Air Force Institute of Technology, Factors Influencing Army Accessions (ADA124845)",
        "AUSA, 'New Recruiting Truths'"
      ]
    }
  },
  {
    "id": "geodemographics",
    "label": "Geodemographics",
    "sub": "area-based classification method, 1974",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "contested",
    "yr": 1974,
    "lens": [
      "address",
      "socio",
      "epistemic",
      "market"
    ],
    "lever": "data",
    "co": 0.25,
    "rec": {
      "what": "Classification of people by the attributes of the area they live in. No observation of the person is required.",
      "fund": "Public census data, privately reallocated and sold.",
      "did": "Routed around consent because no observation of the person occurred; carried residential segregation into cluster names such as Public Assistance and Emerging Minorities.",
      "src": [
        "Caplan, 'Clusters,' The New Yorker (1982)",
        "New York Times, 'The ZIP Code' (17 July 1988)",
        "Webber and Burrows (2013)"
      ]
    }
  },
  {
    "id": "vals",
    "label": "VALS",
    "sub": "Values and Lifestyles typology, SRI, 1978",
    "type": "program",
    "cl": "arbitrage",
    "ev": "contested",
    "yr": 1978,
    "lens": [
      "socio",
      "market",
      "theory",
      "address"
    ],
    "lever": "symbolic",
    "co": 0.7,
    "rec": {
      "what": "Values and Lifestyles: SRI's nine-type psychographic typology, inaugurated as a product in 1978.",
      "fund": "SRI International's consulting business; roughly 130 clients by the mid-1980s.",
      "did": "Rendered the 1960s–70s refusal as an inner-directed mind-set with a media diet; laughed out of the Market Research Council, then adopted as shared vocabulary.",
      "src": [
        "Mitchell, The Nine American Lifestyles (1982)",
        "SRI International, A Heritage of Innovation, ch. 14",
        "Ray and Anderson, The Cultural Creatives (2000)"
      ]
    }
  },
  {
    "id": "arnold_mitchell",
    "label": "Arnold Mitchell",
    "sub": "SRI researcher and VALS author, 1978–1982",
    "type": "person",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1978,
    "lens": [
      "socio",
      "theory",
      "market"
    ],
    "rec": {
      "what": "SRI researcher who built VALS from Riesman and Maslow to explain why clients could not read the 1960s.",
      "fund": "SRI International.",
      "did": "Coined Cultural Creatives, wrote The Nine American Lifestyles, and made VALS a minor celebrity product used in the Bartles & Jaymes campaign.",
      "src": [
        "Mitchell, The Nine American Lifestyles (1982)",
        "SRI International, A Heritage of Innovation, ch. 14",
        "Ray and Anderson, The Cultural Creatives (2000)"
      ]
    }
  },
  {
    "id": "sri_international",
    "label": "SRI International",
    "sub": "contract research institute, 1978",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1978,
    "lens": [
      "market",
      "theory",
      "polecon"
    ],
    "rec": {
      "what": "Contract research institute that produced VALS and sold it to agencies, networks and publishers as a common language.",
      "fund": "Government and corporate contracts; VALS was a product line.",
      "did": "Marketed its own repositioning successes as testimonials; its value to clients was coordination. Predictive accuracy was secondary.",
      "src": [
        "SRI International, A Heritage of Innovation, ch. 14",
        "Mitchell, The Nine American Lifestyles (1982)"
      ]
    }
  },
  {
    "id": "psychographics",
    "label": "Psychographics",
    "sub": "sorting by disposition, 1970s–1980s",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1978,
    "lens": [
      "socio",
      "market",
      "epistemic",
      "address"
    ],
    "lever": "symbolic",
    "co": 0.72,
    "rec": {
      "what": "Sorting by disposition — values, lifestyle, aspiration. Class, age, race and place recede as the axes.",
      "fund": "No separate funder; a commercial technique sold through research firms.",
      "did": "Converted a class into a lifestyle and produced a classified population that cannot recognise itself as a class, which is what an addressable market needs.",
      "src": [
        "Mitchell, The Nine American Lifestyles (1982)",
        "SRI International, A Heritage of Innovation, ch. 14",
        "Ray and Anderson, The Cultural Creatives (2000)"
      ]
    }
  },
  {
    "id": "caci",
    "label": "CACI",
    "sub": "geodemographic firm, ACORN commercialiser, 1977-",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1977,
    "lens": [
      "market",
      "readout",
      "transmission"
    ],
    "rec": {
      "what": "American geodemographic firm that commercialised Richard Webber's ward-level UK census classification as ACORN and employed Dunn and Humby on spatial targeting.",
      "fund": "Commercial licensing and client contracts.",
      "did": "Sold the same classification into UK and US markets within five years of Claritas's 1974 cluster system; its ACORN work seeded dunnhumby.",
      "src": [
        "15 · The counterfactual, Part one",
        "Computer Weekly, Clubcard at 30",
        "The Professional Geographer (2013), geodemographics US and UK"
      ]
    }
  },
  {
    "id": "richard_webber",
    "label": "Richard Webber",
    "sub": "geographer, UK census classification, 1977",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1977,
    "lens": [
      "readout",
      "transmission",
      "market"
    ],
    "rec": {
      "what": "British geographer whose 1977 ward-level classification of the UK census produced 36 neighbourhood types from tenure, occupation and family structure.",
      "fund": "Centre for Environmental Studies, academic post.",
      "did": "CACI commercialised his classification as ACORN; he later built Mosaic with CCN/Experian, covering 29 countries and 400 million households.",
      "src": [
        "15 · The counterfactual, Part one",
        "Webber (1977), Centre for Environmental Studies",
        "GIM International, neighbourhood classification"
      ]
    }
  },
  {
    "id": "dunnhumby",
    "label": "dunnhumby",
    "sub": "Tesco analytics partner, founded 1989",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1989,
    "lens": [
      "readout",
      "market",
      "polecon",
      "mechanism"
    ],
    "rec": {
      "what": "Tesco's analytics partner, founded in a Chiswick kitchen in 1989 by Edwina Dunn and Clive Humby after CACI spatial-targeting work.",
      "fund": "Tesco annual fee plus a share of manufacturer data payments.",
      "did": "Showed a 10 per cent sample reached 95-99 per cent accuracy; built the Clubcard readout and sold manufacturers access to their own customers.",
      "src": [
        "Computer Weekly, Clubcard at 30",
        "BBC News, the couple who transformed shopping",
        "Marketing Week, 13 March 2019"
      ]
    }
  },
  {
    "id": "tesco_clubcard",
    "label": "Tesco Clubcard",
    "sub": "loyalty card, launched 13 February 1995",
    "type": "program",
    "cl": "consumer",
    "ev": "contested",
    "eff": "contested",
    "yr": 1995,
    "lens": [
      "readout",
      "market",
      "mechanism",
      "polecon"
    ],
    "lever": "data",
    "co": 0.45,
    "rec": {
      "what": "Tesco's loyalty card, launched with 16 million cards printed; it assigned a name to a basket and made the till tape a wholesalable record.",
      "fund": "Tesco internal estimate about £50m over three years; dunnhumby quoted £250,000 for ten weeks.",
      "did": "Seven million cards in two weeks, over 70 per cent of sales matched within days; Tesco overtook Sainsbury's; the £60bn first-decade estimate is contested.",
      "src": [
        "Computer Weekly, Clubcard at 30",
        "Marketing Week, 13 March 2019",
        "undisturbed, Tesco's Original Retail Data Engine"
      ]
    }
  },
  {
    "id": "loyalty_loop",
    "label": "The loyalty loop",
    "sub": "retailer as research bureau, 1995",
    "type": "idea",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1995,
    "lens": [
      "mechanism",
      "polecon",
      "market",
      "readout"
    ],
    "lever": "data",
    "co": 0.45,
    "rec": {
      "what": "The arrangement in which a retailer's transaction record becomes a proprietary panel sold back to the manufacturers who supply it.",
      "fund": "Manufacturer data-access fees.",
      "did": "Inverted the manufacturer-retailer relation; the retailer occupies both sides of the negotiation and sells the map of the terrain it controls.",
      "src": [
        "09 · The loyalty loop, claim",
        "Smythe, Blindspot of Western Marxism (1977)",
        "Computer Weekly, Clubcard at 30"
      ]
    }
  },
  {
    "id": "gandy",
    "label": "Oscar H. Gandy Jr.",
    "sub": "political economist, The Panoptic Sort, 1993",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1993,
    "lens": [
      "theory",
      "readout",
      "socio",
      "epistemic"
    ],
    "rec": {
      "what": "Political economist whose 1993 The Panoptic Sort theorised identification, classification, assessment and distribution as one readout chain.",
      "fund": "Academic appointment; Westview 1993, Oxford University Press 2021.",
      "did": "Defined the panoptic sort as cybernetic triage by presumed economic or political value; named rational discrimination and classification without recognition.",
      "src": [
        "Gandy, The Panoptic Sort (Westview 1993; OUP 2021)",
        "Turow, The Daily You",
        "Gandy interview, Logic(s)"
      ]
    }
  },
  {
    "id": "panoptic_sort",
    "label": "The panoptic sort",
    "sub": "difference machine, 1993",
    "type": "theory",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1993,
    "lens": [
      "theory",
      "readout",
      "socio",
      "mechanism"
    ],
    "rec": {
      "what": "Gandy's name for the integrated system that identifies, classifies, assesses and distributes people to their places in the array of life chances.",
      "fund": "Not applicable; academic theory.",
      "did": "Individuates and distributes; its political achievement is preventing a public by sorting a population into categories whose members cannot recognise each other.",
      "src": [
        "Gandy, The Panoptic Sort (1993; 2021)",
        "10 · The panoptic sort, claim",
        "Turow, The Daily You"
      ]
    }
  },
  {
    "id": "ghost_work",
    "label": "Ghost Work",
    "sub": "Gray and Suri, 2019",
    "type": "theory",
    "cl": "consumer",
    "ev": "documented",
    "yr": 2019,
    "lens": [
      "polecon",
      "mechanism",
      "socio"
    ],
    "rec": {
      "what": "Gray and Suri's study of labour performed by humans but believed by customers to be automated; the second, invisible workforce of the readout.",
      "fund": "Houghton Mifflin Harcourt book contract; academic research posts.",
      "did": "Named the annotator behind AI and business insights; showed the subject produces the signal for free while the ghost worker cleans it below automation cost.",
      "src": [
        "Gray and Suri, Ghost Work (2019)",
        "Gray interview, The Verge, 13 May 2019",
        "Irani in BBC Worklife, 29 August 2019"
      ]
    }
  },
  {
    "id": "lewis_rao",
    "label": "Lewis and Rao",
    "sub": "advertising measurement study, 2014",
    "type": "case",
    "cl": "consumer",
    "ev": "documented",
    "eff": "failed",
    "yr": 2014,
    "lens": [
      "epistemic",
      "market",
      "mechanism"
    ],
    "rec": {
      "what": "Randall Lewis and Justin Rao's study of twenty-five randomised field experiments and $2.8m of advertising expenditure, testing whether ad returns can be measured.",
      "fund": "NBER and AMA working paper; retailer and brokerage experiment partners.",
      "did": "Found campaign R-squared about 0.0000054; a 10 per cent baseline difference creates a selection effect 600 times the causal effect; ten million person-weeks needed.",
      "src": [
        "Lewis and Rao, On the Near Impossibility of Measuring the Returns to Advertising (2014)",
        "11 · The efficacy paradox, evidence 1"
      ]
    }
  },
  {
    "id": "nps",
    "label": "Net Promoter Score",
    "sub": "Reichheld metric, 2003",
    "type": "program",
    "cl": "consumer",
    "ev": "documented",
    "eff": "failed",
    "yr": 2003,
    "lens": [
      "epistemic",
      "market",
      "mechanism"
    ],
    "lever": "data",
    "co": 0.5,
    "rec": {
      "what": "Fred Reichheld's one-number customer metric, published in Harvard Business Review and adopted by more than two-thirds of the Fortune 1000.",
      "fund": "HBR publication and the commercial metrics market.",
      "did": "Correlated 2001-02 scores with past 1999-2002 growth; failed replication as a growth predictor and still dominates practice.",
      "src": [
        "Reichheld, The One Number You Need to Grow, HBR (Dec 2003)",
        "Keiningham et al., Journal of Marketing (2007)",
        "Sharp (2008), snake oil and fake science"
      ]
    }
  },
  {
    "id": "efficacy_paradox",
    "label": "The efficacy paradox",
    "sub": "the spread, not the lift, 2014-2026",
    "type": "idea",
    "cl": "consumer",
    "ev": "contested",
    "yr": 2014,
    "lens": [
      "epistemic",
      "theory",
      "mechanism",
      "market"
    ],
    "rec": {
      "what": "The finding that the apparatus cannot be shown to change behaviour, is bought anyway, and sells uncertainty reduction plus a defensible reason for decisions.",
      "fund": "Not applicable; analytic finding.",
      "did": "Reconciled noise-floor lift with persistent spend: the six-hundredfold selection effect is the output; beliefs differ 6.93 times across similar firms.",
      "src": [
        "11 · The efficacy paradox, claim",
        "Lewis and Rao (2014)",
        "FTC, Surveillance Pricing 6(b) Research Summaries (Jan 2025)"
      ]
    }
  },
  {
    "id": "surveillance_pricing",
    "label": "Surveillance pricing",
    "sub": "price as probe, 2000-2026",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "documented",
    "eff": "partial",
    "yr": 2000,
    "lens": [
      "market",
      "mechanism",
      "readout",
      "polecon"
    ],
    "lever": "data",
    "co": 0.55,
    "rec": {
      "what": "Pricing that uses personal data and behavioural traces to set or steer an individual's price; the FTC calls prices increasingly multi-dimensional.",
      "fund": "Commercial pricing intermediaries and their retailer clients.",
      "did": "FTC documented 250-plus client firms and minute-by-minute updates; independent evidence finds 2 per cent of EU retailers, 6 per cent of cases, median differential under 1.6 per cent.",
      "src": [
        "FTC, Surveillance Pricing 6(b) Study: Research Summaries (Jan 2025)",
        "OECD, Personalised Pricing in the Digital Era (2018)",
        "12 · Exhaust and disintermediation, correction"
      ]
    }
  },
  {
    "id": "ftc_6b",
    "label": "FTC 6(b) surveillance-pricing study",
    "sub": "orders July 2024, summaries January 2025",
    "type": "program",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "remedy",
      "market",
      "readout",
      "epistemic"
    ],
    "rec": {
      "what": "The FTC's 6(b) study of surveillance-pricing intermediaries, ordered July 2024, with staff summaries published 17 January 2025 on a 3-2 vote.",
      "fund": "Public, Federal Trade Commission.",
      "did": "Found three tool categories, 250-plus clients including casinos and sportsbooks, schedules to the minute, and vendor claims of 2-5 per cent revenue growth.",
      "src": [
        "FTC, Surveillance Pricing 6(b) Study: Research Summaries (Jan 2025)",
        "FTC, Surveillance Pricing Update and The Work Ahead (17 Jan 2025)",
        "ABA, Antitrust Source (April 2026)"
      ]
    }
  },
  {
    "id": "pricing_intermediaries",
    "label": "Pricing intermediaries",
    "sub": "FTC respondents, 2024-2025",
    "type": "faction",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "market",
      "mechanism",
      "transmission"
    ],
    "lever": "data",
    "co": 0.55,
    "rec": {
      "what": "The firms selling price-targeting, segmentation and ranking tools: Mastercard, Revionics, Bloomreach, PROS, Accenture and McKinsey among the FTC's respondents.",
      "fund": "Commercial software and consulting fees.",
      "did": "Collectively served at least 250 client firms across grocery, apparel, travel, financial services, betting and B2B distribution.",
      "src": [
        "FTC, Surveillance Pricing 6(b) Study: Research Summaries (Jan 2025)",
        "McCarter and English, 6 February 2025"
      ]
    }
  },
  {
    "id": "subject_as_underlying",
    "label": "The subject as underlying",
    "sub": "option on the future self, 2025",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "contested",
    "yr": 2025,
    "lens": [
      "polecon",
      "mechanism",
      "theory",
      "market"
    ],
    "rec": {
      "what": "The reframing of the priced subject as an underlying asset: the firm models a future willingness to pay and charges the difference.",
      "fund": "Not applicable; analytic framing.",
      "did": "Turned price from a published signal into a one-way probe; the informational function is retained by the firm and removed from the buyer.",
      "src": [
        "12 · Exhaust and disintermediation, the probe",
        "FTC, Surveillance Pricing 6(b) Study (Jan 2025)",
        "gambling dossier notes 02 and 12, cross-reference"
      ]
    }
  },
  {
    "id": "surrogate_respondents",
    "label": "Synthetic respondents",
    "sub": "persona substitution test, 2024",
    "type": "case",
    "cl": "arbitrage",
    "ev": "documented",
    "eff": "failed",
    "yr": 2024,
    "lens": [
      "epistemic",
      "mechanism",
      "temporal"
    ],
    "rec": {
      "what": "The attempt to replace surveyed subjects with model-generated personas, tested against Twin-2K-500 and found indistinguishable from an empty persona.",
      "fund": "Commercial synthetic-data vendors; academic benchmark.",
      "did": "Full persona scored 0.748 against 0.734 for an empty persona and 0.750 for midpoint guessing; recursive training collapses tails first.",
      "src": [
        "Shumailov et al., Nature 631 (2024)",
        "Twin-2K-500 persona test, as reported in note 20",
        "12 · Exhaust and disintermediation, withdrawal"
      ]
    }
  },
  {
    "id": "ccpa",
    "label": "California Consumer Privacy Act",
    "sub": "statute, 2018",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2018,
    "lens": [
      "remedy",
      "epistemic"
    ],
    "rec": {
      "what": "California's broad data-control statute, granting rights to know, delete and opt out of the sale of personal information.",
      "fund": "Public statute.",
      "did": "Built usage reporting into the statute, producing the first firm-level audit trail of rights exercise; the opt-out right is the most-used of the three.",
      "src": [
        "Corren, Iowa Law Review 109 (2024)",
        "Habib et al., arXiv:2009.07884 (2020)",
        "IAB, CCPA Benchmark Survey Summary (Nov 2020)"
      ]
    }
  },
  {
    "id": "exercise_rate",
    "label": "The exercise rate",
    "sub": "0.1-1 per cent, 2020-2024",
    "type": "idea",
    "cl": "remedy",
    "ev": "documented",
    "eff": "failed",
    "yr": 2020,
    "lens": [
      "remedy",
      "mechanism",
      "epistemic",
      "socio"
    ],
    "rec": {
      "what": "The share of consumers who actually use a data right, measured at 0.1-1 per cent under the CCPA and read by firms as evidence of consent.",
      "fund": "Not applicable; measured finding.",
      "did": "0.1 per cent for most firms; 1.1 per cent mobile bottom link against 26.7 per cent top banner; 35-36 per cent of firms evade by declaring they do not sell.",
      "src": [
        "Corren, Gaining or Losing Control?, Iowa Law Review (2024)",
        "Habib et al., (Un)clear and (In)conspicuous (2020)",
        "Consumer Reports, Authorized Agent CCPA pilot (2021)"
      ]
    }
  },
  {
    "id": "right_for_sale",
    "label": "The right for sale",
    "sub": "consent or pay, 2024",
    "type": "idea",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "remedy",
      "polecon",
      "market"
    ],
    "rec": {
      "what": "The arrangement in which the right to refuse being read is sold back to the subject as a subscription, with the reading firm setting the price.",
      "fund": "Subscription revenue paid to the reading platform.",
      "did": "Meta's consent-or-pay model; EDPB Opinion 08/2024 held personal data cannot be a tradeable commodity; the opinion is non-binding and litigated.",
      "src": [
        "EDPB, Opinion 08/2024 (17 April 2024)",
        "Meta Platforms Ireland v EDPB, Case T-319/24",
        "18 · The remedy is not a remedy, Part four"
      ]
    }
  },
  {
    "id": "gdpr",
    "label": "General Data Protection Regulation",
    "sub": "EU statute, 2016-2018",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "eff": "partial",
    "yr": 2016,
    "lens": [
      "remedy",
      "polecon",
      "epistemic"
    ],
    "rec": {
      "what": "The EU regulation with purpose limitation, erasure, an absolute objection to direct marketing and Article 22 contestation of automated decisions.",
      "fund": "Public statute.",
      "did": "Apparent 12 per cent compliance cost measured at 0.6 per cent, the rest lost visibility; market concentration rose 17 per cent; rights remain barely exercised.",
      "src": [
        "GDPR Arts. 5(1)(b), 5(1)(e), 17, 21(2)-(3), 22",
        "00 · Hub, §VII.19, GDPR cost and concentration",
        "15 · The counterfactual, Part two",
        "Goldberg, Johnson and Shriver, MSI WP 21-110",
        "Janßen et al., NBER WP 30028",
        "Johnson, Shriver and Goldberg, concentration"
      ]
    }
  },
  {
    "id": "bverfg_1983",
    "label": "BVerfGE 65, 1",
    "sub": "German census judgment, 15 December 1983",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1983,
    "lens": [
      "remedy",
      "theory",
      "temporal",
      "socio"
    ],
    "rec": {
      "what": "The German Federal Constitutional Court's census judgment, deriving informational self-determination from personality and human dignity.",
      "fund": "Public court.",
      "did": "Held purpose decisive, no irrelevant datum, and that citizens must know who knows what about them, when and on what occasion; census postponed to 1987.",
      "src": [
        "BVerfG, 15 December 1983, BVerfGE 65, 1",
        "Deutsches Museum, Stop the census! (13 April 1983)",
        "15 · The counterfactual, Part two"
      ]
    }
  },
  {
    "id": "google_spain_delisting",
    "label": "Google Spain",
    "sub": "CJEU C-131/12, 13 May 2014",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "eff": "partial",
    "yr": 2014,
    "lens": [
      "remedy",
      "temporal",
      "epistemic"
    ],
    "rec": {
      "what": "The CJEU ruling that a search engine is a data controller and must delist links to lawful but inadequate, irrelevant or excessive information.",
      "fund": "Public court; delisting regime administered by Google.",
      "did": "Held prejudice unnecessary and truth insufficient; Google has received 2.18 million requests and delists about half; 1 per cent of requesters sought 20 per cent of URLs.",
      "src": [
        "CJEU, C-131/12, Google Spain (13 May 2014)",
        "Google, Requests to delist content under European privacy law (to 27 Sept 2026)",
        "16 · The temporal harm, Part four"
      ]
    }
  },
  {
    "id": "update_is_not_correction",
    "label": "Update is not correction",
    "sub": "temporal harm, 2026",
    "type": "idea",
    "cl": "remedy",
    "ev": "contested",
    "yr": 2026,
    "lens": [
      "temporal",
      "epistemic",
      "remedy"
    ],
    "rec": {
      "what": "The distinction between the firm's update, which makes a record current, and the subject's correction, which makes it answerable; the apparatus has only the first.",
      "fund": "Not applicable; analytic formulation.",
      "did": "The marketing column has no temporal limit, accuracy duty or access right; a record is always current and never amendable.",
      "src": [
        "16 · The temporal harm, claim",
        "The Computer and Invasion of Privacy, House subcommittee, July 1966",
        "FTC, Data Brokers: A Call for Transparency and Accountability (May 2014)"
      ]
    }
  },
  {
    "id": "medical_debt_removal",
    "label": "Medical debt removal",
    "sub": "CFPB action, 2025",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "eff": "partial",
    "yr": 2025,
    "lens": [
      "remedy",
      "epistemic",
      "polecon"
    ],
    "rec": {
      "what": "The CFPB's removal of medical debt from credit reports after asking whether the debt predicted repayment; the dossier's one measured remedy success.",
      "fund": "Public regulator, CFPB.",
      "did": "22.8 million people gained 25 points; medical debt in credit files fell from 14 per cent to 5 per cent; the practice ended.",
      "src": [
        "00 · Hub, §VII.19 and the four-investigation table",
        "CFPB, regulator with subpoena power, hub table",
        "19 · Does substantive action work?, per hub",
        "CFPB, Consumer Credit and the Removal of Medical Collections, Apr 2023",
        "Equifax, Experian and TransUnion announcements, Apr 2023",
        "Forbes Advisor, 14% to 5%"
      ]
    }
  },
  {
    "id": "scanner_revolt",
    "label": "The scanner revolt",
    "sub": "item-pricing campaigns, 1974-1981",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "eff": "partial",
    "yr": 1974,
    "lens": [
      "remedy",
      "socio",
      "market",
      "mechanism"
    ],
    "rec": {
      "what": "The 1970s consumer campaign against scanner-only pricing, which won item-pricing and unit-pricing laws and lost the attested price on the good.",
      "fund": "Consumer organising and state legislatures.",
      "did": "Scanner adoption was about 1 per cent of US stores by 1979; most states traded item pricing for unit pricing; the comparison survived, the attestation did not.",
      "src": [
        "NIST Special Publication 1181, Unit Pricing Guide (2015)",
        "Anderson Economic Group, Michigan's Item Pricing Law",
        "Business Week, The Supermarket Scanner That Failed (1976)"
      ]
    }
  },
  {
    "id": "ny_algorithmic_pricing_disclosure_act",
    "label": "New York Algorithmic Pricing Disclosure Act",
    "sub": "effective 10 November 2025",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2025,
    "lens": [
      "remedy",
      "market"
    ],
    "rec": {
      "what": "New York's disclosure statute requiring a conspicuous statement when an algorithm sets a price using the consumer's personal data.",
      "fund": "Public statute.",
      "did": "Created the first enforceable point-of-sale disclosure right for algorithmic pricing. It announces a readout; it does not ban the practice.",
      "src": [
        "InPLP, The US Regulatory Landscape of Surveillance Pricing (2026)",
        "17 · The states build the other side"
      ]
    }
  },
  {
    "id": "maryland_hb895",
    "label": "Maryland H.B. 895",
    "sub": "Protection from Predatory Pricing Act, 2026",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2026,
    "lens": [
      "remedy",
      "market"
    ],
    "rec": {
      "what": "Maryland's Protection from Predatory Pricing Act, barring personal-data grocery pricing in stores of at least 15,000 square feet and in delivery.",
      "fund": "Public statute.",
      "did": "Bars shopper-specific grocery prices with exceptions for loyalty, subscription, supply, location and cost; 45-day cure; effective 1 October 2026.",
      "src": [
        "InPLP, The US Regulatory Landscape of Surveillance Pricing (2026)",
        "Lowenstein Sandler, New Jersey's Fair Price Protection Act (2026)"
      ]
    }
  },
  {
    "id": "connecticut_pa26_130",
    "label": "Connecticut P.A. 26-130",
    "sub": "signed 4 June 2026",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2026,
    "lens": [
      "remedy",
      "market",
      "epistemic"
    ],
    "rec": {
      "what": "Connecticut's statute barring surveillance pricing and requiring a point-of-sale label when personal data raised a price.",
      "fund": "Public statute.",
      "did": "Enacted the mandatory sentence naming a price-setting device and personal data; effective 1 October 2026; the label announces a readout without granting contestation.",
      "src": [
        "InPLP, The US Regulatory Landscape of Surveillance Pricing (2026)",
        "Lowenstein Sandler, New Jersey's Fair Price Protection Act (2026)",
        "17 · The states build the other side"
      ]
    }
  },
  {
    "id": "new_jersey_a4085",
    "label": "New Jersey A4085",
    "sub": "Fair Price Protection Act, 2026",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2026,
    "lens": [
      "remedy",
      "market",
      "mechanism"
    ],
    "rec": {
      "what": "New Jersey's Fair Price Protection Act, making surveillance pricing an unlawful practice for grocery retail and third-party delivery.",
      "fund": "Public statute.",
      "did": "Covers browsing history, location, inferred family size and income, biometric and genetic data; effective 1 August 2027; pauses new electronic shelf labels for a year.",
      "src": [
        "Lowenstein Sandler, New Jersey's Fair Price Protection Act (2026)",
        "InPLP, The US Regulatory Landscape of Surveillance Pricing (2026)"
      ]
    }
  },
  {
    "id": "point_of_sale_label",
    "label": "The point-of-sale label",
    "sub": "Connecticut sentence, 2026",
    "type": "idea",
    "cl": "remedy",
    "ev": "documented",
    "eff": "failed",
    "yr": 2026,
    "lens": [
      "remedy",
      "epistemic",
      "mechanism"
    ],
    "rec": {
      "what": "The mandatory sentence disclosing that a price was raised by a device using personal data; Connecticut's design object and the first announcement right at the shelf.",
      "fund": "Public statute.",
      "did": "Tells the shopper a readout occurred without naming the inference or granting contestation; the tested disclosure produced 62-96 per cent no recall.",
      "src": [
        "17 · The states build the other side, Connecticut label",
        "OECD, The Effects of Online Disclosure about Personalised Pricing on Consumers (2021)",
        "18 · The remedy is not a remedy, announcement is not contestation"
      ]
    }
  },
  {
    "id": "oecd_disclosure_experiment",
    "label": "OECD personalised-pricing disclosure experiment",
    "sub": "Dublin and Santiago, 2021",
    "type": "program",
    "cl": "remedy",
    "ev": "documented",
    "eff": "failed",
    "yr": 2021,
    "lens": [
      "remedy",
      "epistemic",
      "market",
      "mechanism"
    ],
    "rec": {
      "what": "A three-stage experiment applying real price personalisation in Dublin and Santiago; disclosures had no significant effect on noticing price differences, recall or overpayment.",
      "fund": "OECD.",
      "did": "Found 62% to 96% did not recall the label and participants paid about 2% above baseline on price-hike items.",
      "src": [
        "OECD, Effects of Online Disclosure about Personalised Pricing, 2021",
        "OECD, Personalised Pricing in the Digital Era, 2018",
        "UK CMA, 2018"
      ]
    }
  },
  {
    "id": "mrc",
    "label": "Media Rating Council",
    "sub": "audit body, founded 1963",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1963,
    "lens": [
      "remedy",
      "epistemic",
      "readout"
    ],
    "rec": {
      "what": "The industry's measurement audit body, founded to pre-empt a regulator, the only body with audit rights into the readout.",
      "fund": "Dues from the firms it accredits.",
      "did": "Seven full-time employees; recorded a more than 10 per cent drift in Nielsen's currency in March 2026, post hoc, with only the vendor holding the instrument.",
      "src": [
        "00 · Hub, §VIII.21, the MRC",
        "00 · Hub, what the room is now for, item 3",
        "12 · Exhaust and disintermediation, withdrawal",
        "MRC, Roadmap for Enhancing Digital Measurement",
        "Harris Committee record, 1963-66",
        "Marketing Dive, 23 Jan 2025"
      ]
    }
  },
  {
    "id": "two_columns",
    "label": "The credit and marketing columns",
    "sub": "FCRA credit vs marketing split, 1970-",
    "type": "idea",
    "cl": "remedy",
    "ev": "documented",
    "yr": 1970,
    "lens": [
      "readout",
      "market",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "The FCRA's governed credit column and its exempt marketing column, treated as separate worlds; the dossier finds the same three bureaus own both.",
      "fund": "None; a statutory distinction.",
      "did": "Split the readout into a regulated eligibility trade and an unregulated marketing trade with no accuracy duty.",
      "src": [
        "TransUnion 8-K/EX-99.3, 1 Dec 2021",
        "AdExchanger, 13 Sep 2021",
        "Experian press release, 19 Nov 2020"
      ]
    }
  },
  {
    "id": "transunion",
    "label": "TransUnion",
    "sub": "credit bureau; Neustar owner, 2021",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2019,
    "lens": [
      "market",
      "readout",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "A nationwide credit bureau; bought TruSignal, Signal, Tru Optik and Neustar, and runs the TruAudience marketplace where Equifax sells audiences.",
      "fund": "Public; credit and marketing revenue.",
      "did": "Closed Neustar for $3.1066bn on 1 December 2021, putting identity resolution inside a consumer reporting agency.",
      "src": [
        "TransUnion 8-K/EX-99.3",
        "AdExchanger, 13 Sep 2021",
        "TransUnion blog, Equifax Q&A"
      ]
    }
  },
  {
    "id": "experian",
    "label": "Experian",
    "sub": "credit bureau; Tapad owner, 2020",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2020,
    "lens": [
      "market",
      "readout",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "A nationwide credit bureau that bought Tapad from Telenor for about $280m and invested in InfoSum, holding identity resolution inside the regulated firm.",
      "fund": "Public; credit and marketing revenue.",
      "did": "Acquired Tapad on 19 November 2020 and launched third-party data onboarding, joining the two columns under one owner.",
      "src": [
        "Experian press release, 19 Nov 2020",
        "Adweek, 20 Nov 2020",
        "Experian Marketing Forward blog, 19 Nov 2020"
      ]
    }
  },
  {
    "id": "equifax",
    "label": "Equifax",
    "sub": "credit bureau; IXI owner, 2006",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2006,
    "lens": [
      "market",
      "readout",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "A credit bureau holding 820 million credit profiles; its IXI Network tracks more than $28tn in anonymised accounts and sells audiences through TransUnion's marketplace.",
      "fund": "Public; credit and marketing revenue.",
      "did": "Bought IXI for $124m in 2006 and folded it into Equifax Data-Driven Marketing.",
      "src": [
        "Equifax press release, 21 Oct 2006",
        "Equifax closing release, 28 Oct 2006",
        "AdExchanger, Equifax marketing suite"
      ]
    }
  },
  {
    "id": "neustar",
    "label": "Neustar",
    "sub": "identity resolution; TransUnion, 2021",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2021,
    "lens": [
      "market",
      "mechanism",
      "readout"
    ],
    "rec": {
      "what": "An identity-resolution firm whose OneID, Marketing and Communications businesses were sold to TransUnion for $3.1066bn cash, closing 1 December 2021.",
      "fund": "Acquired by TransUnion.",
      "did": "Brought cross-device identity resolution into a consumer reporting agency, the graph's central double-hat edge.",
      "src": [
        "TransUnion 8-K/EX-99.3",
        "Reuters, 13 Sep 2021",
        "Variety, 13 Sep 2021"
      ]
    }
  },
  {
    "id": "tapad",
    "label": "Tapad",
    "sub": "cross-device identity; Experian, 2020",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2020,
    "lens": [
      "market",
      "mechanism",
      "readout"
    ],
    "rec": {
      "what": "A cross-device identity-resolution firm sold by Telenor to Experian for about $280m, giving the credit bureau a marketing-identity layer.",
      "fund": "Acquired by Experian.",
      "did": "Closed into Experian on 19 November 2020, the second bureau purchase of an identity broker in five years.",
      "src": [
        "Experian press release, 19 Nov 2020",
        "Wikipedia/Tapad",
        "Adweek, 20 Nov 2020"
      ]
    }
  },
  {
    "id": "ixi_corp",
    "label": "IXI Corporation",
    "sub": "consumer wealth data; Equifax, 2006",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2006,
    "lens": [
      "market",
      "mechanism",
      "readout"
    ],
    "rec": {
      "what": "A consumer-wealth data firm whose network measured deposit and investment accounts; Equifax bought it for $124m and rolled it into marketing audiences.",
      "fund": "Acquired by Equifax.",
      "did": "Gave Equifax a $10tn-measured asset in 2006, later described as $28tn and sold through TransUnion's marketplace.",
      "src": [
        "Equifax press release, 21 Oct 2006",
        "Equifax closing release, 28 Oct 2006",
        "TransUnion blog, Equifax Q&A"
      ]
    }
  },
  {
    "id": "community_profile_project",
    "label": "OEO Community Profile Project",
    "sub": "federal geodemography, 1966",
    "type": "program",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1966,
    "lens": [
      "readout",
      "statecap",
      "mechanism",
      "socio"
    ],
    "rec": {
      "what": "Robbin's 187,000-page profile of all 3,134 US counties for the Office of Economic Opportunity, merging 1960 census data with 29 agencies' data.",
      "fund": "Office of Economic Opportunity.",
      "did": "Prototyped geodemographic targeting on the poor for federal administration before Claritas sold the method to retailers.",
      "src": [
        "Robbin CV (ricercar.com/JRCV-D)",
        "Lincoln Caplan, The New Yorker, 25 Jan 1982",
        "OEO Community Profile Project record"
      ]
    }
  },
  {
    "id": "dhs_oig_2023",
    "label": "DHS OIG location-data report",
    "sub": "inspector-general finding, 28 Sep 2023",
    "type": "case",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2023,
    "lens": [
      "statecap",
      "remedy",
      "readout",
      "temporal"
    ],
    "rec": {
      "what": "The DHS inspector general found CBP, ICE and the Secret Service violated federal law by buying and using commercial location data without warrants and without a department policy.",
      "fund": "DHS Office of Inspector General.",
      "did": "Documented more than 55,000 CBP queries and 16,000 ICE queries; found required privacy assessments incomplete.",
      "src": [
        "DHS OIG report, 28 Sep 2023",
        "Wyden et al. letter, 3 Mar 2026",
        "ACLU FOIA via The Verge, 18 Jul 2022"
      ]
    }
  },
  {
    "id": "non_evidentiary_clause",
    "label": "Non-evidentiary purchase clause",
    "sub": "contract term, 2019-2026",
    "type": "case",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2019,
    "lens": [
      "statecap",
      "mechanism",
      "temporal",
      "polecon"
    ],
    "rec": {
      "what": "A contract term forbidding the government from citing purchased location data in any legal or administrative proceeding, including as a basis for a warrant.",
      "fund": "Vendor contract language.",
      "did": "Kept purchased readout out of the evidentiary record, making the state's use unavailable to courts and defendants.",
      "src": [
        "Criminal Legal News, 1 Jul 2026",
        "Locate X contract clause, as reported",
        "DHS OIG report, 28 Sep 2023"
      ]
    }
  },
  {
    "id": "voter_file",
    "label": "The voter file",
    "sub": "public record sold by states, 2020",
    "type": "program",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2020,
    "lens": [
      "readout",
      "market",
      "socio",
      "polecon"
    ],
    "rec": {
      "what": "A state-attested record of which primaries and general elections a person voted in, sold for $1,000 a copy or $5,000 a year, joined to 600-2,500 commercial fields.",
      "fund": "State fee schedule.",
      "did": "Supplied verified participation history for propensity scores; 37 states restrict commercial use and none audits it.",
      "src": [
        "Montana Free Press, 6 Mar 2020",
        "NHPR, political data firms",
        "The Fulcrum, The Voter as Estimate"
      ]
    }
  },
  {
    "id": "l2_political",
    "label": "L2 Political",
    "sub": "voter-file append vendor, 2020",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2020,
    "lens": [
      "market",
      "readout",
      "mechanism"
    ],
    "rec": {
      "what": "A voter-file vendor that appended hundreds of consumer fields, including predictive modelling, to state records; Montana's purchase records show the commercial join.",
      "fund": "Commercial data sales.",
      "did": "Turned the public participation record into a marketing profile by adding consumer fields the state never collected.",
      "src": [
        "Montana Free Press, 6 Mar 2020",
        "The Fulcrum, The Voter as Estimate",
        "NHPR, political data firms"
      ]
    }
  },
  {
    "id": "microtargeting_first_amendment",
    "label": "First Amendment microtargeting shield",
    "sub": "doctrine, 2022",
    "type": "case",
    "cl": "remedy",
    "ev": "contested",
    "yr": 2022,
    "lens": [
      "remedy",
      "mechanism",
      "polecon",
      "epistemic"
    ],
    "rec": {
      "what": "The doctrine that political ad microtargeting is content-based speech, so proposed bans cannot satisfy strict scrutiny; the note adopts it as the speech shield.",
      "fund": "Constitutional doctrine.",
      "did": "Left the political readout unregulated from the speech side while the marketing carve-out left it unregulated from the data side.",
      "src": [
        "John M. King, Boston University Law Review, 2022",
        "CDIA comments, 2 Apr 2025",
        "Kalla and Broockman, APSR, 2018"
      ]
    }
  },
  {
    "id": "fusion_centers",
    "label": "Fusion centers",
    "sub": "78 state-federal intelligence hubs, 2012",
    "type": "program",
    "cl": "surveil",
    "ev": "documented",
    "eff": "failed",
    "yr": 2012,
    "lens": [
      "readout",
      "surveil",
      "statecap",
      "mechanism"
    ],
    "lever": "data",
    "co": 0.08,
    "rec": {
      "what": "Seventy-eight state and local intelligence hubs with more than 90 DHS personnel, access to FBI and DHS systems, and a sharing arrangement no agency owns.",
      "fund": "DHS and state and local law enforcement.",
      "did": "Produced 13 months of reports without uncovering a terrorist threat or disrupting a plot, per the Senate investigation.",
      "src": [
        "EFF, Why Fusion Centers Matter",
        "Senate PSI report, 2 Oct 2012",
        "Gizmodo, fusion centers"
      ]
    }
  },
  {
    "id": "senate_psi_2012",
    "label": "Senate PSI fusion-center report",
    "sub": "oversight investigation, 2 Oct 2012",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "eff": "failed",
    "yr": 2012,
    "lens": [
      "remedy",
      "surveil",
      "epistemic",
      "temporal"
    ],
    "rec": {
      "what": "A two-year bipartisan investigation reviewing 13 months of DHS-funded fusion-center reports, finding no terrorist threat uncovered and no plot disrupted.",
      "fund": "US Senate Permanent Subcommittee on Investigations.",
      "did": "Found shoddy intelligence, 40 reports killed on civil-liberties grounds, and no sanction for officials who violated guidelines.",
      "src": [
        "Senate PSI report, 2 Oct 2012",
        "Brennan Center, fusion centers",
        "EFF, Why Fusion Centers Matter"
      ]
    }
  },
  {
    "id": "calgang",
    "label": "CalGang",
    "sub": "California gang database, 2016 audit",
    "type": "program",
    "cl": "carceral",
    "ev": "documented",
    "eff": "failed",
    "yr": 2016,
    "lens": [
      "carceral",
      "readout",
      "mechanism",
      "temporal"
    ],
    "lever": "data",
    "co": 0.05,
    "rec": {
      "what": "California's shared gang database, holding more than 150,000 people, run by an executive board with no statutory authority and self-reported audits.",
      "fund": "Local law enforcement; no state oversight.",
      "did": "Held 42 people under one year old, 28 for admitting gang membership; 23% of criteria entries lacked support.",
      "src": [
        "California State Auditor, Report 2015-130",
        "Los Angeles Times, 11 Aug 2016",
        "Ars Technica, 2016"
      ]
    }
  },
  {
    "id": "chicago_ssl",
    "label": "Chicago Strategic Subject List",
    "sub": "violence-risk score, 2012-2020",
    "type": "program",
    "cl": "carceral",
    "ev": "documented",
    "eff": "failed",
    "yr": 2012,
    "lens": [
      "carceral",
      "readout",
      "mechanism",
      "temporal"
    ],
    "lever": "data",
    "co": 0.05,
    "rec": {
      "what": "A 0-500 violence-risk score applied to more than 280,000 Chicagoans by 2016; RAND found no effect on homicide or shooting victimisation.",
      "fund": "Chicago Police Department; NIJ grant.",
      "did": "Increased arrest exposure for listed people and ran three to four years after RAND reported no effect.",
      "src": [
        "Saunders et al., RAND, J Exp Criminol, 2016",
        "Chicago OIG review",
        "The Verge, 2020"
      ]
    }
  },
  {
    "id": "criminal_tribes_act_1871",
    "label": "Criminal Tribes Act 1871",
    "sub": "colonial statute, Bengal",
    "type": "case",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1871,
    "lens": [
      "carceral",
      "socio",
      "temporal",
      "mechanism"
    ],
    "lever": "social",
    "co": 0.05,
    "rec": {
      "what": "A colonial statute providing for the registration, surveillance and control of criminal tribes, covering close to 200 communities without defining tribe or criminal tribe.",
      "fund": "British Indian government.",
      "did": "Required adult males to report weekly to police, imposed collective responsibility, separated children and transmitted the classification.",
      "src": [
        "Criminal Tribes Act 1871, preamble and section 2",
        "History and Anthropology, 2023",
        "The Daily Guardian, 11 Oct 2026"
      ]
    }
  },
  {
    "id": "bengal_identification_system",
    "label": "Bengal identification system",
    "sub": "fingerprinting, 1858-1897",
    "type": "program",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1858,
    "lens": [
      "carceral",
      "mechanism",
      "temporal",
      "transmission"
    ],
    "rec": {
      "what": "Herschel's palm print at Jangipur in 1858, pensioner prints by 1863, the Hooghly Letter of 1877 and the Bengal Fingerprint Bureau of 1897.",
      "fund": "British Indian government.",
      "did": "Built the identification infrastructure Scotland Yard adopted in 1900, designed to make a subject population legible.",
      "src": [
        "The Fingerprint Sourcebook (NIJ)",
        "Indian Express, Bengal biometric identity",
        "Oxford Research Encyclopedia of Asian History"
      ]
    }
  },
  {
    "id": "negative_file",
    "label": "The negative file",
    "sub": "record of presumptions, 1871-",
    "type": "idea",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1871,
    "lens": [
      "carceral",
      "epistemic",
      "mechanism",
      "temporal"
    ],
    "lever": "symbolic",
    "co": 0.08,
    "rec": {
      "what": "A file whose entries are presumptions: membership in a criminal community, a designation, a status. Conduct was never the basis, so conduct cannot falsify it.",
      "fund": "None.",
      "did": "Explains why audit findings of no effect changed nothing: a presumption cannot be disproved by testing it.",
      "src": [
        "Criminal Tribes Act 1871",
        "California State Auditor, 2016",
        "Saunders et al., RAND, 2016"
      ]
    }
  },
  {
    "id": "project_camelot",
    "label": "Project Camelot",
    "sub": "Army counterinsurgency research, 1963-65",
    "type": "program",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1963,
    "lens": [
      "statecap",
      "readout",
      "mechanism",
      "transmission"
    ],
    "rec": {
      "what": "The Army's roughly $6m, 140-person-year project to predict and influence social change and internal war potential, run through SORO at American University.",
      "fund": "US Army Office of Research and Development.",
      "did": "Was cancelled on 8 July 1965 and continued the next day under smaller task labels; DoD behavioural-science funding rose the next year.",
      "src": [
        "Project Camelot, Methods for Predicting and Influencing Social Change",
        "Nisbet, Project Camelot: An Autopsy",
        "CONICET, Cold War in Latin America"
      ]
    }
  },
  {
    "id": "ibope",
    "label": "IBOPE",
    "sub": "Brazilian survey institute, 1942",
    "type": "institution",
    "cl": "consumer",
    "ev": "documented",
    "yr": 1942,
    "lens": [
      "market",
      "readout",
      "transmission",
      "socio"
    ],
    "rec": {
      "what": "The Brazilian Institute of Public Opinion and Statistics, founded in São Paulo by Auricélio Penteado after studying under George Gallup; its first product was audience measurement.",
      "fund": "Commercial; later WPP.",
      "did": "Carried American survey method into Latin America, became Kantar IBOPE Media in 2014 and formed Nielsen IBOPE.",
      "src": [
        "Developing Consumers, Enterprise and Society",
        "Kantar IBOPE Media record",
        "Nielsen IBOPE joint venture record"
      ]
    }
  },
  {
    "id": "receptivity_score",
    "label": "The receptivity score",
    "sub": "Lerner's empathy index, 1958",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "contested",
    "yr": 1958,
    "lens": [
      "readout",
      "epistemic",
      "mechanism",
      "transmission"
    ],
    "rec": {
      "what": "Lerner's measure of empathy or psychic mobility, scoring how open a person is to messages from elsewhere and ranking societies by the share of high scorers.",
      "fund": "VOA and CENIS, with CIA and Ford Foundation money.",
      "did": "Became the ancestor of propensity scores: a number measuring how reachable a person is, used to decide whether to reach them.",
      "src": [
        "Lerner, The Passing of Traditional Society, 1958",
        "Shah, The Production of Modernization",
        "Katz, prophet of international communication"
      ]
    }
  },
  {
    "id": "brantingham_aro",
    "label": "Army Research Office predictive grants",
    "sub": "Brantingham, 2006",
    "type": "program",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2006,
    "lens": [
      "statecap",
      "carceral",
      "mechanism",
      "transmission"
    ],
    "rec": {
      "what": "Multiple US Army Research Office grants to Jeffrey Brantingham and colleagues to develop algorithms predicting insurgent activity in Iraq, before any police contract.",
      "fund": "US Army Research Office.",
      "did": "Extended a foraging analogy from animal movement to insurgents, then to crime; the mathematics was, in Brantingham's words, very much the same.",
      "src": [
        "Brantingham, Army Research Office grants, 2006",
        "Automating Banishment, The Architecture of Data-Driven Policing",
        "Truthout, What Amazon Taught the Cops"
      ]
    }
  },
  {
    "id": "predpol",
    "label": "PredPol",
    "sub": "predictive policing, 2011-2020",
    "type": "institution",
    "cl": "carceral",
    "ev": "documented",
    "yr": 2011,
    "lens": [
      "carceral",
      "readout",
      "mechanism",
      "transmission"
    ],
    "rec": {
      "what": "The predictive-policing product deployed by LAPD in 2011 field tests and incorporated in 2012, built on Brantingham's Army-funded algorithms.",
      "fund": "Venture capital; LAPD contracts.",
      "did": "Installed at LAPD with $200,000 that Bill Bratton persuaded Target to donate; ended in 2020 after community pressure.",
      "src": [
        "Truthout, What Amazon Taught the Cops",
        "Automating Banishment",
        "Said, Wisconsin Law Review, 2020"
      ]
    }
  },
  {
    "id": "sama",
    "label": "Sama",
    "sub": "AI data vendor, Nairobi; 2021-2026",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "eff": "failed",
    "yr": 2021,
    "lens": [
      "market",
      "polecon",
      "temporal",
      "mechanism"
    ],
    "rec": {
      "what": "The Nairobi outsourcing firm that supplied OpenAI with data labelling and content classification, paying agents $1.32 to $1.44 an hour against a $12.50 contract rate.",
      "fund": "Client contracts; OpenAI about $200,000.",
      "did": "Cancelled the OpenAI work three days after a second press disclosure, moved staff off the explicit-content bonus, and later liquidated.",
      "src": [
        "Perrigo, TIME, 18 Jan 2023",
        "TIME, 9 Nov 2026",
        "Wikipedia, Sama (company)"
      ]
    }
  },
  {
    "id": "remotasks",
    "label": "Remotasks",
    "sub": "Scale AI labelling platform",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "eff": "failed",
    "yr": 2022,
    "lens": [
      "market",
      "polecon",
      "temporal",
      "mechanism"
    ],
    "rec": {
      "what": "Scale AI's crowdsourcing platform, paying Venezuelan workers about 50 cents an hour and piecework rates of $2 to $5 a week; scored one fair-work criterion out of ten.",
      "fund": "Scale AI.",
      "did": "Shut down in Kenya, Nigeria and Pakistan on 8 March 2024 with hours of notice; faced a US Labor Department wage investigation.",
      "src": [
        "Oxford Internet Institute, 2022",
        "Rest of World via Spirelight, Mar 2024",
        "CBS News 60 Minutes, 24 Nov 2024"
      ]
    }
  },
  {
    "id": "rlhf_pay_band",
    "label": "The RLHF pay band",
    "sub": "annotation wage structure, 2023-",
    "type": "idea",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2023,
    "lens": [
      "polecon",
      "market",
      "mechanism",
      "socio"
    ],
    "rec": {
      "what": "The price structure of annotation: $1.32 an hour for the worker who reads the corpus, $30 to $100+ for the professional who evaluates it.",
      "fund": "None; a wage relation.",
      "did": "Made the apparatus's class structure explicit in price, so the wage does the sorting instead of the model.",
      "src": [
        "Perrigo, TIME, 18 Jan 2023",
        "Posada, Platform Extractivism",
        "Forage.ai vendor guide"
      ]
    }
  },
  {
    "id": "cfpb",
    "label": "Consumer Financial Protection Bureau",
    "sub": "federal regulator, 2022-",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2022,
    "lens": [
      "remedy",
      "readout",
      "mechanism",
      "polecon"
    ],
    "rec": {
      "what": "The federal regulator with subpoena power over consumer reporting; its 2022 finding that medical bills do not predict repayment ended the practice.",
      "fund": "Federal appropriation.",
      "did": "Asked whether medical debt predicted repayment, got no, and the bureaus removed it; later finalised a broader rule for March 2025.",
      "src": [
        "CFPB, Consumer Credit and the Removal of Medical Collections, Apr 2023",
        "CFPB, Medical Debt, 2022",
        "Chopra statement"
      ]
    }
  },
  {
    "id": "predictive_warrant",
    "label": "The predictive-warrant requirement",
    "sub": "proposed rule, 2023-",
    "type": "idea",
    "cl": "remedy",
    "ev": "contested",
    "yr": 2023,
    "lens": [
      "remedy",
      "mechanism",
      "readout",
      "epistemic"
    ],
    "rec": {
      "what": "A rule requiring any firm using personal data to set, rank or target an offer to show a regulator that the inference predicts the outcome it is used to predict.",
      "fund": "None; a proposal.",
      "did": "Generalises the medical-debt mechanism: where the warrant fails, the use becomes an unfair practice.",
      "src": [
        "CFPB, Consumer Credit and the Removal of Medical Collections, Apr 2023",
        "Chopra statement",
        "OECD, Personalised Pricing in the Digital Era, 2018"
      ]
    }
  },
  {
    "id": "auditable_ground_truth",
    "label": "Auditable ground truth",
    "sub": "proposed validation standard, 2026",
    "type": "idea",
    "cl": "remedy",
    "ev": "contested",
    "yr": 2026,
    "lens": [
      "remedy",
      "epistemic",
      "readout",
      "mechanism"
    ],
    "rec": {
      "what": "The demand that any derived model of a population be validated against a subject-derived sample whose accuracy is publicly attested by a party that does not sell the model.",
      "fund": "None; a proposal.",
      "did": "Asks nothing of the subject, requires no comprehension, and targets the firm's warrant. The interface is left alone.",
      "src": [
        "Shumailov et al., Nature, 2024",
        "MRC, Guidance on Existing Standards for AI, 8 Jul 2026",
        "Nielsen press release, 22 Jan 2025"
      ]
    }
  },
  {
    "id": "shumailov_model_collapse",
    "label": "Model collapse theorem",
    "sub": "Shumailov et al., Nature, 2024",
    "type": "theory",
    "cl": "consumer",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "epistemic",
      "theory",
      "mechanism",
      "readout"
    ],
    "rec": {
      "what": "The proof that training on recursively generated data causes irreversible defects, with the tails of the original distribution disappearing first.",
      "fund": "Academic research.",
      "did": "Proved a derived model of a population cannot validate itself, so the apparatus needs a non-derived reference permanently.",
      "src": [
        "Shumailov et al., Nature 631, 2024",
        "Toubia et al., 2025",
        "Peng et al., 2026"
      ]
    }
  },
  {
    "id": "twin_2k_500",
    "label": "Twin-2K-500 floor result",
    "sub": "synthetic-respondent benchmark, 2025-26",
    "type": "program",
    "cl": "consumer",
    "ev": "documented",
    "eff": "failed",
    "yr": 2025,
    "lens": [
      "epistemic",
      "readout",
      "mechanism",
      "theory"
    ],
    "rec": {
      "what": "A benchmark showing full-persona synthetic respondents scored 0.748 against 0.734 for an empty persona and 0.750 for guessing the scale midpoint.",
      "fund": "Academic research.",
      "did": "Showed the headline 75% accuracy is the information-free floor; demographics-only correlation averaged 0.08.",
      "src": [
        "Toubia et al., 2025",
        "Peng et al., 2026",
        "Synthetic Data in Marketing Research"
      ]
    }
  },
  {
    "id": "oracle_data_cloud",
    "label": "Oracle Data Cloud",
    "sub": "adtech data business, exited 2024",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "market",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "Oracle's data cloud, built from BlueKai, Datalogix, Grapeshot, Moat and AddThis; revenue fell from about $2bn in 2022 to about $300m in 2024.",
      "fund": "Oracle.",
      "did": "Shut down 30 September 2024; its partner feeds moved to LiveRamp, Acxiom, Experian Marketing Services, Epsilon and The Trade Desk.",
      "src": [
        "AdExchanger, 1 Jul 2024",
        "The Register, 13 Jun 2024",
        "PrivacyOn sunset guide"
      ]
    }
  },
  {
    "id": "william_herschel",
    "label": "W. J. Herschel",
    "sub": "Bengal colonial administrator; fingerprint pioneer, 1858–1877",
    "type": "person",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1858,
    "lens": [
      "readout",
      "mechanism",
      "transmission",
      "epistemic"
    ],
    "rec": {
      "what": "Took Rajyadhar Konai's palm print at Jangipur in 1858, then required fingerprints for pensions, deeds, prisons and criminal courts in Hooghly.",
      "fund": "Bengal colonial administration",
      "did": "Converted a local signing practice, the tep-sai, into an instrument of control; his 1877 Hooghly Letter spread fingerprinting across official institutions.",
      "src": [
        "Fingerprint Sourcebook (NIJ)",
        "Indian Express, 'How Bengal helped create the modern world of biometric identity'",
        "Oxford Research Encyclopedia of Asian History"
      ]
    }
  },
  {
    "id": "edward_henry",
    "label": "E. R. Henry",
    "sub": "Inspector-General of Police, Bengal; fingerprint system, 1896–1901",
    "type": "person",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1896,
    "lens": [
      "readout",
      "mechanism",
      "transmission",
      "polecon"
    ],
    "rec": {
      "what": "As Inspector-General of Police in Bengal, ordered fingerprints alongside anthropometric measurements of Bengali prisoners in 1896; the 1897 committee made his system official.",
      "fund": "British Indian government",
      "did": "His system replaced Bertillonage in India, then traveled to Scotland Yard when he became Chief Commissioner of the Met in 1900–01.",
      "src": [
        "Fingerprint Sourcebook (NIJ)",
        "Oxford Research Encyclopedia of Asian History",
        "IIP Series, 'Forensic Fingerprinting: A Fascinating Historical Journey from Bengal'"
      ]
    }
  },
  {
    "id": "bengal_fingerprint_bureau",
    "label": "Bengal Fingerprint Bureau",
    "sub": "World's first fingerprint bureau, Calcutta, 1897–",
    "type": "institution",
    "cl": "carceral",
    "ev": "documented",
    "yr": 1897,
    "lens": [
      "readout",
      "mechanism",
      "transmission",
      "polecon"
    ],
    "rec": {
      "what": "Established in Calcutta's Writers' Building in 1897, replacing the Calcutta Anthropometric Bureau; the first institution to classify and centralise fingerprint records.",
      "fund": "British Indian government",
      "did": "Institutionalised the Henry system, moved skilled classification into a central office, and became the model exported to police forces globally.",
      "src": [
        "IIP Series, 'Forensic Fingerprinting: A Fascinating Historical Journey from Bengal'",
        "Fingerprint Sourcebook (NIJ)",
        "Oxford Research Encyclopedia of Asian History"
      ]
    }
  },
  {
    "id": "francis_galton",
    "label": "Francis Galton",
    "sub": "Anthropometrist and eugenicist, 1888–",
    "type": "person",
    "cl": "eugenics",
    "ev": "documented",
    "yr": 1888,
    "lens": [
      "epistemic",
      "mechanism",
      "theory",
      "readout"
    ],
    "rec": {
      "what": "Turned to fingerprints in 1888 while running an anthropometric programme aimed at heritability; derived the correlation coefficient from forearm length and height.",
      "fund": "Kensington Museum laboratory",
      "did": "His critique that Bertillon's measures ignored correlation helped kill Bertillonage; his heredity research made individuation and eugenics one programme.",
      "src": [
        "Fingerprint Sourcebook (NIJ)",
        "Oxford Research Encyclopedia of Asian History"
      ]
    }
  },
  {
    "id": "soro",
    "label": "Special Operations Research Office (SORO)",
    "sub": "Army-funded social research office, American University, 1963–1966",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1963,
    "lens": [
      "readout",
      "mechanism",
      "transmission",
      "polecon"
    ],
    "rec": {
      "what": "Army-funded office at American University that took over planning for Project Camelot, the counterinsurgency research programme budgeted at roughly $6 million over three to four years.",
      "fund": "U.S. Army",
      "did": "Ran Camelot until its public cancellation, then continued the work under smaller task labels; renamed the Center for Research in Social Systems in 1966.",
      "src": [
        "Project Camelot (1964–65)",
        "Nisbet, 'Project Camelot: An Autopsy'",
        "CONICET, 'Cold War in Latin America: the Camelot Project (1964–1965)'"
      ]
    }
  },
  {
    "id": "cress",
    "label": "Center for Research in Social Systems (CRESS)",
    "sub": "SORO renamed; Army social research, 1966",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1966,
    "lens": [
      "readout",
      "mechanism",
      "transmission",
      "temporal"
    ],
    "rec": {
      "what": "The 1966 rename of SORO, created as the Army's social-research office continued Camelot's work after the public cancellation.",
      "fund": "U.S. Army / DoD",
      "did": "Carried the counterinsurgency research programme under a new label while Congress raised the behavioral-science budget from $27.3m to $34m.",
      "src": [
        "Project Camelot (1964–65)",
        "Nisbet, 'Project Camelot: An Autopsy'",
        "CONICET, 'Cold War in Latin America: the Camelot Project (1964–1965)'"
      ]
    }
  },
  {
    "id": "voa",
    "label": "Voice of America (VOA)",
    "sub": "State Department broadcasting arm; Lerner survey funder, 1950–51",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1950,
    "lens": [
      "readout",
      "transmission",
      "epistemic",
      "polecon"
    ],
    "rec": {
      "what": "The State Department's international broadcasting arm; Lerner's 1,600 interviews across six Middle Eastern countries in 1950–51 were collected under its auspices.",
      "fund": "U.S. State Department",
      "did": "Financed the survey that produced The Passing of Traditional Society and its empathy index, a measure of how reachable a population is.",
      "src": [
        "Lerner, The Passing of Traditional Society (1958)",
        "Shah, The Production of Modernization",
        "VOA-funded fieldwork via Columbia"
      ]
    }
  },
  {
    "id": "cenis",
    "label": "MIT Center for International Studies (CENIS)",
    "sub": "CIA- and Ford-funded MIT research center, 1950s",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1958,
    "lens": [
      "readout",
      "epistemic",
      "transmission",
      "polecon"
    ],
    "rec": {
      "what": "MIT center where Daniel Lerner worked, funded with CIA money and a large Ford Foundation grant; the base for The Passing of Traditional Society.",
      "fund": "CIA; Ford Foundation",
      "did": "Housed the modernization research that turned media reach into a measurable score and helped define development communication.",
      "src": [
        "Lerner, The Passing of Traditional Society (1958)",
        "Shah, The Production of Modernization"
      ]
    }
  },
  {
    "id": "acxiom",
    "label": "Acxiom",
    "sub": "Data broker; IPG acquisition, 2018",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2014,
    "lens": [
      "market",
      "readout",
      "polecon",
      "mechanism"
    ],
    "rec": {
      "what": "One of nine brokers in the FTC's 2014 study; later acquired by IPG for about $2.3 billion and named among the successor feeds after Oracle Data Cloud closed.",
      "fund": "IPG (acquired 2018)",
      "did": "Supplied broker data to Facebook's Partner Categories and absorbed data feeds that had fed Oracle, consolidating the identity layer into an agency holding company.",
      "src": [
        "FTC, Data Brokers: A Call for Transparency and Accountability (May 2014)",
        "AdExchanger, 'Inside The Fall Of Oracle's Advertising Business' (1 July 2024)",
        "ANA, 'Media Transparency Initiative' (2016)"
      ]
    }
  },
  {
    "id": "epsilon",
    "label": "Epsilon",
    "sub": "Data broker; Publicis acquisition, 2019",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2012,
    "lens": [
      "market",
      "readout",
      "polecon",
      "mechanism"
    ],
    "rec": {
      "what": "Broker in Facebook's Partner Categories from 2012/13, acquired by Publicis in 2019, and named among the feeds that absorbed Oracle Data Cloud's demand.",
      "fund": "Publicis (acquired 2019)",
      "did": "Carried third-party broker data into platform targeting, then consolidated into an agency holding company as the identity layer contracted.",
      "src": [
        "Quartz/TechCrunch, 28 March 2018",
        "AdExchanger, 'Inside The Fall Of Oracle's Advertising Business' (1 July 2024)",
        "ANA, 'Media Transparency Initiative' (2016)"
      ]
    }
  },
  {
    "id": "cbp",
    "label": "Customs and Border Protection (CBP)",
    "sub": "DHS border agency; location-data buyer, FY2019–20",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2019,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "DHS component that bought commercial location data through six contracts and two CTD databases in FY2019–20, logging more than 55,000 queries.",
      "fund": "U.S. federal budget",
      "did": "The DHS inspector general found its warrantless purchase and use of location data violated federal law and lacked a privacy impact assessment.",
      "src": [
        "DHS Office of Inspector General report (28 September 2023)",
        "ACLU FOIA disclosures via The Verge (18 July 2022)",
        "Criminal Legal News, 'Surveillance for Sale' (1 July 2026)"
      ]
    }
  },
  {
    "id": "dea",
    "label": "Drug Enforcement Administration (DEA)",
    "sub": "Federal drug enforcement agency; data buyer, 2026",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2026,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "Named among federal agencies buying commercial data that would otherwise require a warrant, in the 2026 buyer list on the broker-purchase loophole.",
      "fund": "U.S. federal budget",
      "did": "Illustrates the procurement route around the Fourth Amendment: the agency can purchase location and other records from brokers instead of compelling them.",
      "src": [
        "Criminal Legal News, 'Surveillance for Sale' (1 July 2026)",
        "DHS Office of Inspector General report (28 September 2023)"
      ]
    }
  },
  {
    "id": "fbi",
    "label": "Federal Bureau of Investigation (FBI)",
    "sub": "Federal investigative agency; Palantir client, 2013",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2013,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "Listed among at least twelve agencies using Palantir in a leaked 2013 document and among the federal buyers of commercial data in the 2026 broker-purchase record.",
      "fund": "U.S. federal budget",
      "did": "Sits on both the platform-procurement and data-purchase sides of the state's readout, the two routes that bypass direct compulsion.",
      "src": [
        "The New York Times Magazine, 'Does Palantir See Too Much?' (21 October 2020)",
        "Criminal Legal News, 'Surveillance for Sale' (1 July 2026)"
      ]
    }
  },
  {
    "id": "secret_service",
    "label": "United States Secret Service",
    "sub": "DHS protective agency; location-data buyer, 2019",
    "type": "institution",
    "cl": "statecap",
    "ev": "documented",
    "yr": 2019,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "DHS component that bought Babel Street location data in 2019 for more than $600,000; the inspector general found the purchase violated federal law.",
      "fund": "U.S. federal budget",
      "did": "Its warrantless location-data purchase was one of three DHS component practices named in the 2023 inspector-general report.",
      "src": [
        "DHS Office of Inspector General report (28 September 2023)",
        "Criminal Legal News, 'Surveillance for Sale' (1 July 2026)"
      ]
    }
  },
  {
    "id": "i360",
    "label": "i360",
    "sub": "Koch-network political data vendor, 2020s",
    "type": "institution",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 2026,
    "lens": [
      "market",
      "readout",
      "polecon",
      "epistemic"
    ],
    "rec": {
      "what": "Koch-network vendor claiming 190 million voters, 250 million consumers and 1,800 data points per record; it told the FEC it is 'akin to an enhanced phone book.'",
      "fund": "Koch network",
      "did": "Appends commercial and political data to voter records and describes its internal firewall as a caution. Nothing requires it.",
      "src": [
        "NHPR, 'Not Just the Trump Commission...'",
        "i360, FEC filing / response in MUR 114462 (Palmer affidavit)",
        "The Fulcrum, 'The Voter as Estimate'"
      ]
    }
  },
  {
    "id": "edpb",
    "label": "European Data Protection Board (EDPB)",
    "sub": "EU data-protection regulator; Opinion 08/2024",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2024,
    "lens": [
      "remedy",
      "polecon",
      "mechanism",
      "theory"
    ],
    "rec": {
      "what": "Adopted Opinion 08/2024 on consent-or-pay, holding that large platforms cannot make data protection a feature users pay to enjoy.",
      "fund": "EU member authorities",
      "did": "Called consent-or-pay likely invalid, said personal data is not a tradeable commodity, and saw Meta seek annulment of the opinion.",
      "src": [
        "EDPB, Opinion 08/2024 (17 April 2024)",
        "Meta Platforms Ireland v EDPB, General Court (Case T-319/24)",
        "IAB Europe, Position Paper (18 July 2024)"
      ]
    }
  },
  {
    "id": "rezide",
    "label": "REZIDE",
    "sub": "National ZIP-code demography encyclopedia, 1974",
    "type": "program",
    "cl": "arbitrage",
    "ev": "documented",
    "yr": 1974,
    "lens": [
      "market",
      "readout",
      "mechanism",
      "epistemic"
    ],
    "rec": {
      "what": "Robbin's 1974 National Encyclopedia of Residential ZIP Code Demography: 3,000 pages, 121 characteristics for every U.S. five-digit ZIP code.",
      "fund": "Claritas",
      "did": "Turned the census into an addressable commercial surface, the databook ancestor of the cluster system and PRIZM.",
      "src": [
        "Jonathan Robbin CV (ricercar.com/JRCV-D)",
        "Lincoln Caplan, 'Clusters,' The New Yorker (25 January 1982)",
        "New York Times, 'The ZIP Code' (17 July 1988)"
      ]
    }
  },
  {
    "id": "regulation_v",
    "label": "Regulation V (CFPB data-broker rule)",
    "sub": "CFPB FCRA rulemaking, proposed 13 December 2024",
    "type": "program",
    "cl": "remedy",
    "ev": "contested",
    "yr": 2024,
    "lens": [
      "remedy",
      "polecon",
      "mechanism",
      "temporal"
    ],
    "rec": {
      "what": "CFPB proposal to treat information used for FCRA-covered purposes as a consumer report regardless of the broker's knowledge, and to bar marketing sales by brokers collecting for permissible purposes.",
      "fund": "CFPB",
      "did": "Would close much of the 1970 marketing carve-out if finalized; industry objects that it makes brokers into CRAs by data provenance. Use is the criterion the industry wants.",
      "src": [
        "CFPB, 'Protecting Americans From Harmful Data Broker Practices (Regulation V),' Proposed Rule (13 December 2024)",
        "Mayer Brown, 'CFPB Initiates Fair Credit Reporting Act Rulemaking' (Oct 2023)",
        "ABA, 'When Pricing Gets Personal' (April 2026)"
      ]
    }
  },
  {
    "id": "ruggles_report",
    "label": "Ruggles Report",
    "sub": "Federal record-linkage inventory, April 1965",
    "type": "case",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1965,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "April 1965 report cataloguing more than three billion records on individuals and the clerical processing limits that had constrained linkage until computers.",
      "fund": "U.S. federal government",
      "did": "Supplied the inventory for the National Data Center proposal and documented the clerk as the old privacy barrier.",
      "src": [
        "Ruggles Report (April 1965)",
        "The Computer and Invasion of Privacy hearings (26–28 July 1966)"
      ]
    }
  },
  {
    "id": "kaysen_report",
    "label": "Kaysen Report",
    "sub": "National Data Center proposal, October 1966",
    "type": "case",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1966,
    "lens": [
      "readout",
      "mechanism",
      "polecon",
      "temporal"
    ],
    "rec": {
      "what": "October 1966 report that, with Ruggles, developed the proposal to consolidate federal statistical records in a National Data Center.",
      "fund": "U.S. federal government",
      "did": "Argued the center's public-good case as the congressional privacy fight was turning against it; the center was defeated.",
      "src": [
        "Kaysen Report (October 1966)",
        "Ruggles Report (April 1965)",
        "The Computer and Invasion of Privacy hearings (1966)"
      ]
    }
  },
  {
    "id": "social_security_number",
    "label": "Social Security number",
    "sub": "Federal identifier; proposed linking key, 1966",
    "type": "program",
    "cl": "statecap",
    "ev": "documented",
    "yr": 1966,
    "lens": [
      "readout",
      "mechanism",
      "temporal",
      "polecon"
    ],
    "rec": {
      "what": "The identifier Gallagher warned would make linked federal records readily available to any interested party, benevolent or not, in August 1966.",
      "fund": "U.S. federal government",
      "did": "Became the test case for the principle that the join key is the danger in record linkage. The record itself is secondary.",
      "src": [
        "112 Cong. Rec. 19963 (18 August 1966)",
        "The Computer and Invasion of Privacy hearings (1966)"
      ]
    }
  },
  {
    "id": "joseph_turow",
    "label": "Joseph Turow",
    "sub": "Media scholar; The Daily You, 2011",
    "type": "person",
    "cl": "consumer",
    "ev": "documented",
    "yr": 2011,
    "lens": [
      "theory",
      "socio",
      "epistemic",
      "market"
    ],
    "rec": {
      "what": "Media scholar whose Daily You describes marketers using profile databases to sort Americans into 'targets' or 'waste,' the defensive logic Gandy named.",
      "fund": "Academic research",
      "did": "Supplied the target/waste formulation that complements Gandy's panoptic sort: being targeted is evidence of surviving a screen.",
      "src": [
        "Joseph Turow, The Daily You",
        "Gandy, The Panoptic Sort (1993)"
      ]
    }
  },
  {
    "id": "ftc_data_brokers_2014",
    "label": "FTC Data Brokers report (2014)",
    "sub": "FTC study of nine data brokers, May 2014",
    "type": "case",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2014,
    "lens": [
      "market",
      "readout",
      "polecon",
      "remedy"
    ],
    "rec": {
      "what": "FTC study of nine brokers documenting 1.4 billion transactions, 700 billion data elements, 3,000 segments per consumer, and the FCRA's marketing gap.",
      "fund": "U.S. Federal Trade Commission",
      "did": "Stated that the FCRA generally does not cover marketing data; the report became the reference inventory of the exempt sector.",
      "src": [
        "FTC, Data Brokers: A Call for Transparency and Accountability (May 2014)",
        "U.S. Senate Commerce Committee majority staff report (December 2013)"
      ]
    }
  },
  {
    "id": "california_state_auditor",
    "label": "California State Auditor",
    "sub": "state audit office; CalGang report, 2016",
    "type": "institution",
    "cl": "remedy",
    "ev": "documented",
    "yr": 2016,
    "lens": [
      "remedy",
      "epistemic",
      "readout"
    ],
    "rec": {
      "what": "The state audit office whose 2016 CalGang report found 23 per cent of criteria entries unsupported, 42 people under one year old, and no statutory authority for the database.",
      "fund": "California state budget.",
      "did": "Recommended fixes; the database remained running, and its audits stayed self-reported with no independent verification.",
      "src": [
        "California State Auditor, Report 2015-130 (Aug 2016)",
        "Los Angeles Times, 11 Aug 2016",
        "24 · The other network, the audit table"
      ]
    }
  }
];

export const LINKS = [
  {
    "s": "charles_coolidge_parlin",
    "t": "curtis_publishing",
    "r": "staffs"
  },
  {
    "s": "curtis_publishing",
    "t": "commercial_research_division",
    "r": "establishes"
  },
  {
    "s": "charles_coolidge_parlin",
    "t": "commercial_research_division",
    "r": "ran"
  },
  {
    "s": "commercial_research_division",
    "t": "the_trash_audit",
    "r": "ran"
  },
  {
    "s": "the_trash_audit",
    "t": "consumer_engineering",
    "r": "feeds"
  },
  {
    "s": "the_trash_audit",
    "t": "audimeter",
    "r": "rhymes"
  },
  {
    "s": "the_trash_audit",
    "t": "zuboff",
    "r": "rhymes"
  },
  {
    "s": "clarence_saunders",
    "t": "piggly_wiggly",
    "r": "ran"
  },
  {
    "s": "piggly_wiggly",
    "t": "consumer_engineering",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "earnest_elmo_calkins",
    "t": "consumer_engineering",
    "r": "influenced"
  },
  {
    "s": "sheldon_and_arens",
    "t": "consumer_engineering",
    "r": "theorizes"
  },
  {
    "s": "consumer_engineering",
    "t": "artificial_obsolescence",
    "r": "establishes"
  },
  {
    "s": "earnest_elmo_calkins",
    "t": "artificial_obsolescence",
    "r": "influenced"
  },
  {
    "s": "consumer_engineering",
    "t": "dichter",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "robert_elder",
    "t": "audimeter",
    "r": "ran"
  },
  {
    "s": "nielsen",
    "t": "audimeter",
    "r": "ran"
  },
  {
    "s": "audimeter",
    "t": "the_panel",
    "r": "feeds"
  },
  {
    "s": "nielsen",
    "t": "the_panel",
    "r": "reads"
  },
  {
    "s": "nielsen",
    "t": "audience_measurement",
    "r": "ran"
  },
  {
    "s": "smythe",
    "t": "the_panel",
    "r": "theorizes"
  },
  {
    "s": "smythe",
    "t": "audience_measurement",
    "r": "exposed"
  },
  {
    "s": "mrc",
    "t": "nielsen",
    "r": "audits"
  },
  {
    "s": "mrc",
    "t": "audience_measurement",
    "r": "justifies",
    "q": "C"
  },
  {
    "s": "the_panel",
    "t": "loyalty_loop",
    "r": "influenced"
  },
  {
    "s": "audience_measurement",
    "t": "loyalty_loop",
    "r": "influenced"
  },
  {
    "s": "nielsen",
    "t": "loyalty_loop",
    "r": "influenced"
  },
  {
    "s": "western_electric",
    "t": "hawthorne_works",
    "r": "sited"
  },
  {
    "s": "elton_mayo",
    "t": "hawthorne_works",
    "r": "ran"
  },
  {
    "s": "elton_mayo",
    "t": "hawthorne_effect",
    "r": "influenced"
  },
  {
    "s": "hawthorne_works",
    "t": "hawthorne_effect",
    "r": "feeds"
  },
  {
    "s": "hawthorne_effect",
    "t": "administrative_research",
    "r": "influenced"
  },
  {
    "s": "lazarsfeld",
    "t": "administrative_research",
    "r": "ran"
  },
  {
    "s": "adorno",
    "t": "lazarsfeld",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "adorno",
    "t": "administrative_research",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "bureau_of_the_census",
    "t": "univac_census",
    "r": "ran"
  },
  {
    "s": "univac_census",
    "t": "national_data_center",
    "r": "influenced"
  },
  {
    "s": "bureau_of_the_census",
    "t": "claritas",
    "r": "feeds"
  },
  {
    "s": "cornelius_gallagher",
    "t": "house_invasion_of_privacy_subcommittee",
    "r": "ran"
  },
  {
    "s": "house_invasion_of_privacy_subcommittee",
    "t": "national_data_center",
    "r": "exposed"
  },
  {
    "s": "house_invasion_of_privacy_subcommittee",
    "t": "fcra",
    "r": "influenced"
  },
  {
    "s": "house_invasion_of_privacy_subcommittee",
    "t": "packard",
    "r": "convenes"
  },
  {
    "s": "national_data_center",
    "t": "fcra",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "ruggles_report",
    "t": "national_data_center",
    "r": "influenced"
  },
  {
    "s": "kaysen_report",
    "t": "national_data_center",
    "r": "influenced"
  },
  {
    "s": "ruggles_report",
    "t": "kaysen_report",
    "r": "influenced"
  },
  {
    "s": "social_security_number",
    "t": "national_data_center",
    "r": "feeds"
  },
  {
    "s": "cornelius_gallagher",
    "t": "social_security_number",
    "r": "theorizes"
  },
  {
    "s": "us_congress",
    "t": "fcra",
    "r": "establishes"
  },
  {
    "s": "ftc",
    "t": "fcra",
    "r": "enforces"
  },
  {
    "s": "fcra",
    "t": "two_columns",
    "r": "establishes"
  },
  {
    "s": "fcra",
    "t": "marketing_exemption",
    "r": "exempts"
  },
  {
    "s": "marketing_exemption",
    "t": "two_columns",
    "r": "establishes"
  },
  {
    "s": "cfpb",
    "t": "regulation_v",
    "r": "ran"
  },
  {
    "s": "regulation_v",
    "t": "marketing_exemption",
    "r": "bans",
    "q": "C"
  },
  {
    "s": "ftc_data_brokers_2014",
    "t": "marketing_exemption",
    "r": "exposed"
  },
  {
    "s": "ftc_data_brokers_2014",
    "t": "two_columns",
    "r": "exposed"
  },
  {
    "s": "ftc_data_brokers_2014",
    "t": "acxiom",
    "r": "audits"
  },
  {
    "s": "ftc_data_brokers_2014",
    "t": "oracle_data_cloud",
    "r": "audits"
  },
  {
    "s": "ftc_data_brokers_2014",
    "t": "epsilon",
    "r": "audits"
  },
  {
    "s": "cfpb",
    "t": "transunion",
    "r": "audits"
  },
  {
    "s": "cfpb",
    "t": "medical_debt_removal",
    "r": "ran"
  },
  {
    "s": "medical_debt_removal",
    "t": "two_columns",
    "r": "exposed",
    "q": "C"
  },
  {
    "s": "medical_debt_removal",
    "t": "predictive_warrant",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "fcra",
    "t": "ccpa",
    "r": "influenced"
  },
  {
    "s": "gdpr",
    "t": "ccpa",
    "r": "influenced"
  },
  {
    "s": "bverfg_1983",
    "t": "gdpr",
    "r": "influenced"
  },
  {
    "s": "bverfg_1983",
    "t": "panoptic_sort",
    "r": "rhymes"
  },
  {
    "s": "google_spain_delisting",
    "t": "gdpr",
    "r": "influenced"
  },
  {
    "s": "gdpr",
    "t": "right_for_sale",
    "r": "became"
  },
  {
    "s": "gdpr",
    "t": "transunion",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "gdpr",
    "t": "oracle_data_cloud",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "right_for_sale",
    "t": "gdpr",
    "r": "captures"
  },
  {
    "s": "edpb",
    "t": "right_for_sale",
    "r": "denies"
  },
  {
    "s": "eu_inst",
    "t": "edpb",
    "r": "establishes"
  },
  {
    "s": "ccpa",
    "t": "exercise_rate",
    "r": "feeds"
  },
  {
    "s": "exercise_rate",
    "t": "right_for_sale",
    "r": "justifies",
    "q": "C"
  },
  {
    "s": "google_spain_delisting",
    "t": "update_is_not_correction",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "update_is_not_correction",
    "t": "fcra",
    "r": "theorizes"
  },
  {
    "s": "scanner_revolt",
    "t": "point_of_sale_label",
    "r": "rhymes"
  },
  {
    "s": "scanner_revolt",
    "t": "surveillance_pricing",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "ny_algorithmic_pricing_disclosure_act",
    "t": "point_of_sale_label",
    "r": "establishes"
  },
  {
    "s": "connecticut_pa26_130",
    "t": "point_of_sale_label",
    "r": "establishes"
  },
  {
    "s": "maryland_hb895",
    "t": "surveillance_pricing",
    "r": "bans"
  },
  {
    "s": "connecticut_pa26_130",
    "t": "surveillance_pricing",
    "r": "bans"
  },
  {
    "s": "new_jersey_a4085",
    "t": "surveillance_pricing",
    "r": "bans"
  },
  {
    "s": "maryland_hb895",
    "t": "loyalty_loop",
    "r": "exempts"
  },
  {
    "s": "new_jersey_a4085",
    "t": "loyalty_loop",
    "r": "exempts"
  },
  {
    "s": "point_of_sale_label",
    "t": "surveillance_pricing",
    "r": "justifies",
    "q": "C"
  },
  {
    "s": "oecd_disclosure_experiment",
    "t": "point_of_sale_label",
    "r": "exposed"
  },
  {
    "s": "oecd_disclosure_experiment",
    "t": "predictive_warrant",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "predictive_warrant",
    "t": "medical_debt_removal",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "shumailov_model_collapse",
    "t": "auditable_ground_truth",
    "r": "influenced"
  },
  {
    "s": "mrc",
    "t": "auditable_ground_truth",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "nielsen",
    "t": "auditable_ground_truth",
    "r": "justifies",
    "q": "C"
  },
  {
    "s": "surrogate_respondents",
    "t": "subject_as_underlying",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "twin_2k_500",
    "t": "surrogate_respondents",
    "r": "feeds"
  },
  {
    "s": "shumailov_model_collapse",
    "t": "surrogate_respondents",
    "r": "influenced"
  },
  {
    "s": "lewis_rao",
    "t": "efficacy_paradox",
    "r": "influenced"
  },
  {
    "s": "nps",
    "t": "efficacy_paradox",
    "r": "influenced"
  },
  {
    "s": "ghost_work",
    "t": "efficacy_paradox",
    "r": "influenced"
  },
  {
    "s": "gandy",
    "t": "zuboff",
    "r": "influenced"
  },
  {
    "s": "gandy",
    "t": "efficacy_paradox",
    "r": "influenced"
  },
  {
    "s": "gandy",
    "t": "panoptic_sort",
    "r": "theorizes"
  },
  {
    "s": "gandy",
    "t": "joseph_turow",
    "r": "influenced"
  },
  {
    "s": "joseph_turow",
    "t": "panoptic_sort",
    "r": "theorizes"
  },
  {
    "s": "panoptic_sort",
    "t": "surveillance_pricing",
    "r": "feeds"
  },
  {
    "s": "panoptic_sort",
    "t": "voter_file",
    "r": "influenced"
  },
  {
    "s": "panoptic_sort",
    "t": "negative_file",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "smythe",
    "t": "ghost_work",
    "r": "influenced"
  },
  {
    "s": "ghost_work",
    "t": "rlhf_pay_band",
    "r": "influenced"
  },
  {
    "s": "jonathan_robbin",
    "t": "claritas",
    "r": "ran"
  },
  {
    "s": "jonathan_robbin",
    "t": "rezide",
    "r": "establishes"
  },
  {
    "s": "rezide",
    "t": "prizm",
    "r": "feeds"
  },
  {
    "s": "claritas",
    "t": "prizm",
    "r": "ran"
  },
  {
    "s": "us_army",
    "t": "usarec",
    "r": "ran"
  },
  {
    "s": "usarec",
    "t": "claritas",
    "r": "buys"
  },
  {
    "s": "claritas",
    "t": "geodemographics",
    "r": "ran"
  },
  {
    "s": "jonathan_robbin",
    "t": "geodemographics",
    "r": "theorizes"
  },
  {
    "s": "geodemographics",
    "t": "psychographics",
    "r": "rhymes"
  },
  {
    "s": "geodemographics",
    "t": "prizm",
    "r": "feeds"
  },
  {
    "s": "caci",
    "t": "claritas",
    "r": "rival"
  },
  {
    "s": "richard_webber",
    "t": "caci",
    "r": "influenced"
  },
  {
    "s": "caci",
    "t": "dunnhumby",
    "r": "influenced"
  },
  {
    "s": "dunnhumby",
    "t": "tesco_clubcard",
    "r": "ran"
  },
  {
    "s": "tesco_clubcard",
    "t": "loyalty_loop",
    "r": "became"
  },
  {
    "s": "loyalty_loop",
    "t": "surveillance_pricing",
    "r": "feeds"
  },
  {
    "s": "loyalty_loop",
    "t": "subject_as_underlying",
    "r": "feeds"
  },
  {
    "s": "sri_international",
    "t": "vals",
    "r": "ran"
  },
  {
    "s": "arnold_mitchell",
    "t": "vals",
    "r": "ran"
  },
  {
    "s": "arnold_mitchell",
    "t": "psychographics",
    "r": "theorizes"
  },
  {
    "s": "sri_international",
    "t": "psychographics",
    "r": "ran"
  },
  {
    "s": "vals",
    "t": "psychographics",
    "r": "feeds"
  },
  {
    "s": "surveillance_pricing",
    "t": "subject_as_underlying",
    "r": "became"
  },
  {
    "s": "surveillance_pricing",
    "t": "zuboff",
    "r": "influenced"
  },
  {
    "s": "ftc_6b",
    "t": "surveillance_pricing",
    "r": "exposed"
  },
  {
    "s": "ftc_6b",
    "t": "pricing_intermediaries",
    "r": "exposed"
  },
  {
    "s": "pricing_intermediaries",
    "t": "surveillance_pricing",
    "r": "supplies"
  },
  {
    "s": "oracle_data_cloud",
    "t": "acxiom",
    "r": "feeds"
  },
  {
    "s": "oracle_data_cloud",
    "t": "epsilon",
    "r": "feeds"
  },
  {
    "s": "oracle_data_cloud",
    "t": "liveramp",
    "r": "feeds"
  },
  {
    "s": "oracle_data_cloud",
    "t": "experian",
    "r": "feeds"
  },
  {
    "s": "transunion",
    "t": "neustar",
    "r": "buys"
  },
  {
    "s": "experian",
    "t": "tapad",
    "r": "buys"
  },
  {
    "s": "equifax",
    "t": "ixi_corp",
    "r": "buys"
  },
  {
    "s": "equifax",
    "t": "transunion",
    "r": "sells"
  },
  {
    "s": "transunion",
    "t": "two_columns",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "experian",
    "t": "two_columns",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "equifax",
    "t": "two_columns",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "acxiom",
    "t": "meta_co",
    "r": "feeds"
  },
  {
    "s": "epsilon",
    "t": "meta_co",
    "r": "feeds"
  },
  {
    "s": "cbp",
    "t": "lexisnexis",
    "r": "buys"
  },
  {
    "s": "ice",
    "t": "lexisnexis",
    "r": "buys"
  },
  {
    "s": "dea",
    "t": "lexisnexis",
    "r": "buys"
  },
  {
    "s": "fbi",
    "t": "palantir",
    "r": "buys"
  },
  {
    "s": "non_evidentiary_clause",
    "t": "ice",
    "r": "conditions"
  },
  {
    "s": "non_evidentiary_clause",
    "t": "cbp",
    "r": "conditions"
  },
  {
    "s": "non_evidentiary_clause",
    "t": "dea",
    "r": "conditions"
  },
  {
    "s": "non_evidentiary_clause",
    "t": "fbi",
    "r": "conditions"
  },
  {
    "s": "dhs_oig_2023",
    "t": "cbp",
    "r": "audits"
  },
  {
    "s": "dhs_oig_2023",
    "t": "ice",
    "r": "audits"
  },
  {
    "s": "dhs_oig_2023",
    "t": "secret_service",
    "r": "audits"
  },
  {
    "s": "ice",
    "t": "dhs_oig_2023",
    "r": "rival",
    "q": "C"
  },
  {
    "s": "cbp",
    "t": "safegraph",
    "r": "buys"
  },
  {
    "s": "community_profile_project",
    "t": "claritas",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "jonathan_robbin",
    "t": "community_profile_project",
    "r": "ran"
  },
  {
    "s": "us_govt",
    "t": "community_profile_project",
    "r": "funded"
  },
  {
    "s": "nimh",
    "t": "claritas",
    "r": "buys"
  },
  {
    "s": "voter_file",
    "t": "l2_political",
    "r": "feeds"
  },
  {
    "s": "i360",
    "t": "voter_file",
    "r": "feeds"
  },
  {
    "s": "receptivity_score",
    "t": "voter_file",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "microtargeting_first_amendment",
    "t": "voter_file",
    "r": "exempts",
    "q": "C"
  },
  {
    "s": "marketing_exemption",
    "t": "voter_file",
    "r": "exempts",
    "q": "C"
  },
  {
    "s": "fcra",
    "t": "voter_file",
    "r": "exempts",
    "q": "C"
  },
  {
    "s": "voter_file",
    "t": "cambridge_analytica",
    "r": "feeds",
    "q": "C"
  },
  {
    "s": "i360",
    "t": "microtargeting_first_amendment",
    "r": "feeds",
    "q": "C"
  },
  {
    "s": "criminal_tribes_act_1871",
    "t": "negative_file",
    "r": "establishes"
  },
  {
    "s": "bengal_identification_system",
    "t": "negative_file",
    "r": "influenced"
  },
  {
    "s": "bengal_identification_system",
    "t": "criminal_tribes_act_1871",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "bengal_identification_system",
    "t": "bengal_fingerprint_bureau",
    "r": "establishes"
  },
  {
    "s": "william_herschel",
    "t": "bengal_identification_system",
    "r": "ran"
  },
  {
    "s": "edward_henry",
    "t": "bengal_identification_system",
    "r": "ran"
  },
  {
    "s": "edward_henry",
    "t": "bengal_fingerprint_bureau",
    "r": "influenced"
  },
  {
    "s": "francis_galton",
    "t": "bengal_identification_system",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "francis_galton",
    "t": "davenport_laughlin",
    "r": "influenced"
  },
  {
    "s": "negative_file",
    "t": "calgang",
    "r": "influenced"
  },
  {
    "s": "negative_file",
    "t": "chicago_ssl",
    "r": "influenced"
  },
  {
    "s": "negative_file",
    "t": "fusion_centers",
    "r": "influenced"
  },
  {
    "s": "california_state_auditor",
    "t": "calgang",
    "r": "audits"
  },
  {
    "s": "california_state_auditor",
    "t": "negative_file",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "senate_psi_2012",
    "t": "fusion_centers",
    "r": "exposed"
  },
  {
    "s": "rand",
    "t": "chicago_ssl",
    "r": "audits"
  },
  {
    "s": "flock_safety",
    "t": "fusion_centers",
    "r": "denies",
    "q": "C"
  },
  {
    "s": "fusion_centers",
    "t": "lexisnexis",
    "r": "reads"
  },
  {
    "s": "calgang",
    "t": "chicago_ssl",
    "r": "rhymes"
  },
  {
    "s": "predpol",
    "t": "chicago_ssl",
    "r": "rhymes"
  },
  {
    "s": "brantingham_aro",
    "t": "predpol",
    "r": "influenced"
  },
  {
    "s": "project_camelot",
    "t": "brantingham_aro",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "soro",
    "t": "project_camelot",
    "r": "ran"
  },
  {
    "s": "us_army",
    "t": "soro",
    "r": "funded"
  },
  {
    "s": "soro",
    "t": "cress",
    "r": "became"
  },
  {
    "s": "cress",
    "t": "brantingham_aro",
    "r": "influenced",
    "q": "C"
  },
  {
    "s": "us_dod",
    "t": "project_camelot",
    "r": "funded"
  },
  {
    "s": "project_camelot",
    "t": "negative_file",
    "r": "rhymes",
    "q": "C"
  },
  {
    "s": "voa",
    "t": "lerner",
    "r": "funded"
  },
  {
    "s": "lerner",
    "t": "cenis",
    "r": "staffs"
  },
  {
    "s": "cenis",
    "t": "receptivity_score",
    "r": "ran"
  },
  {
    "s": "lerner",
    "t": "receptivity_score",
    "r": "theorizes"
  },
  {
    "s": "ibope",
    "t": "audience_measurement",
    "r": "influenced"
  },
  {
    "s": "sama",
    "t": "rlhf_pay_band",
    "r": "prices"
  },
  {
    "s": "remotasks",
    "t": "rlhf_pay_band",
    "r": "prices"
  },
  {
    "s": "openai",
    "t": "sama",
    "r": "buys"
  },
  {
    "s": "meta_co",
    "t": "sama",
    "r": "buys"
  },
  {
    "s": "scale_ai",
    "t": "remotasks",
    "r": "ran"
  },
  {
    "s": "rlhf_pay_band",
    "t": "subject_as_underlying",
    "r": "rhymes",
    "q": "C"
  }
];

export const THREADS = [
  {
    "id": "comparator",
    "title": "The comparator",
    "accent": "oklch(0.78 0.12 175)",
    "blurb": "The loop's return path: the century-long apparatus that read the subject back and priced the difference.",
    "steps": [
      {
        "node": "charles_coolidge_parlin",
        "note": "1911 — Curtis hires Parlin to manufacture a priced readership; the first commercial research division reads pantries and household trash."
      },
      {
        "node": "the_trash_audit",
        "note": "The founding posture is forensic, unconsented and domestic: the object is constituted by reading its waste."
      },
      {
        "node": "consumer_engineering",
        "note": "1932 — measure the want, then change the object, including its death date. Observation and obsolescence become one discipline."
      },
      {
        "node": "audimeter",
        "note": "1935–1942 — the meter removes testimony from the measurement path; the subject can no longer lie, or know."
      },
      {
        "node": "the_panel",
        "note": "The standing sample becomes the commodity: the buyer purchases continuity, and the data follows."
      },
      {
        "node": "univac_census",
        "note": "1951 — UNIVAC at the Census removes the clerk-and-punchcard bottleneck that had incidentally protected privacy."
      },
      {
        "node": "fcra",
        "note": "1970 — the panic produces a charter for credit, employment, insurance and housing. Marketing is left outside."
      },
      {
        "node": "prizm",
        "note": "1974 — the census is reallocated onto ZIP codes; the population becomes addressable without being observed."
      },
      {
        "node": "vals",
        "note": "1978 — the interior is segmented; the refusal of the 1960s is priced as a lifestyle."
      },
      {
        "node": "tesco_clubcard",
        "note": "1995 — the till tape becomes a wholesalable asset; the retailer becomes a research bureau."
      },
      {
        "node": "surveillance_pricing",
        "note": "2000– — the price becomes a probe; the readout is charged back to the subject in the price."
      }
    ]
  },
  {
    "id": "spread",
    "title": "The spread",
    "accent": "oklch(0.80 0.13 25)",
    "blurb": "The apparatus sells the spread; truth is the alibi. At the bottom of the chain the spread is a wage.",
    "steps": [
      {
        "node": "surveillance_pricing",
        "note": "The price has become a one-way experiment on willingness to pay, run at the buyer's expense."
      },
      {
        "node": "pricing_intermediaries",
        "note": "The FTC's respondents sell the tools: segmentation, targeting and ranking, with schedules to the minute."
      },
      {
        "node": "ftc_6b",
        "note": "The 6(b) study documents the capability — 250-plus clients, vendor claims of 2–5 per cent revenue growth — while independent evidence finds the practice rare."
      },
      {
        "node": "subject_as_underlying",
        "note": "The priced subject becomes an underlying: the firm buys optionality on a future self it has helped shape."
      },
      {
        "node": "oracle_data_cloud",
        "note": "Oracle exits the data cloud in 2024; its feeds consolidate into agencies and brokers."
      },
      {
        "node": "transunion",
        "note": "The FCRA's two columns are owned by the same three firms: TransUnion buys Neustar after TruSignal, Signal and Tru Optik."
      },
      {
        "node": "voter_file",
        "note": "The state sells the record of who votes, joined to 600–2,500 commercial fields; 37 states restrict it and none audits."
      },
      {
        "node": "sama",
        "note": "OpenAI pays Sama $12.50 an hour for the classification of child sexual abuse; the worker takes home $1.32."
      },
      {
        "node": "rlhf_pay_band",
        "note": "The apparatus no longer needs to model who is reachable. It can pay them differently: $1.32 to read the corpus, $30–100+ to evaluate it."
      }
    ]
  },
  {
    "id": "remedy",
    "title": "The remedy that isn't",
    "accent": "oklch(0.80 0.12 300)",
    "blurb": "Rights, labels and audits do not change the effective position. One regulator's question did.",
    "steps": [
      {
        "node": "fcra",
        "note": "The charter governs credit and exempts marketing. Privacy law was written for citizens facing a state."
      },
      {
        "node": "bverfg_1983",
        "note": "1983 — the German Constitutional Court articulates informational self-determination and writes the formula: who knows what about you, when, and on what occasion."
      },
      {
        "node": "gdpr",
        "note": "The EU builds the strongest rights. The measured cost is 0.6 per cent; the apparent 12 per cent was lost visibility, and concentration rose 17 per cent."
      },
      {
        "node": "ccpa",
        "note": "California grants rights to know, delete and opt out, and builds usage reporting into the statute."
      },
      {
        "node": "exercise_rate",
        "note": "0.1–1 per cent exercise the right; design swings it by a factor of fifteen; 35–36 per cent of firms evade by declaring they do not sell."
      },
      {
        "node": "right_for_sale",
        "note": "The strongest right is sold back as a subscription. The EDPB says personal data cannot be a tradeable commodity; the opinion is non-binding."
      },
      {
        "node": "oecd_disclosure_experiment",
        "note": "62–96 per cent did not recall the label, and disclosure did not stop overpayment. Announcement is not contestation."
      },
      {
        "node": "medical_debt_removal",
        "note": "But one thing worked: the CFPB asked whether medical debt predicted repayment, the answer was no, and 22.8 million people gained 25 points."
      },
      {
        "node": "predictive_warrant",
        "note": "The lever nobody was pulling: make the inference justify itself. The only mechanism in the dossier with a measured success."
      }
    ]
  },
  {
    "id": "negative_file",
    "title": "The negative file",
    "accent": "oklch(0.74 0.13 35)",
    "blurb": "A record of presumptions, built in Bengal and still running. Four audits changed nothing.",
    "steps": [
      {
        "node": "bengal_identification_system",
        "note": "1858 — Herschel takes a palm print at Jangipur to frighten a contractor out of repudiating his signature; the identification infrastructure is built on a subject population."
      },
      {
        "node": "criminal_tribes_act_1871",
        "note": "1871 — notification, registration, weekly police reporting and collective responsibility, with no definition of tribe or criminal tribe anywhere in the statute."
      },
      {
        "node": "calgang",
        "note": "2016 — 42 people under one year old, 28 for admitting gang membership; 23 per cent of criteria entries unsupported; no statute, no state oversight."
      },
      {
        "node": "chicago_ssl",
        "note": "The heat list scores 280,000 people; RAND finds no effect on violence and a higher likelihood of arrest, and the list runs three to four more years."
      },
      {
        "node": "fusion_centers",
        "note": "78 hubs, 13 months of reporting, no terrorist threat uncovered, no plot disrupted; the audit has no power to stop anything."
      },
      {
        "node": "flock_safety",
        "note": "The vendor disclaims the network in writing: it is not Flock's job to police the police."
      },
      {
        "node": "negative_file",
        "note": "The designation is the justification. A presumption cannot be disproved by testing it, which is why evidence does not move the apparatus."
      }
    ]
  },
  {
    "id": "export_return",
    "title": "The route out and back",
    "accent": "oklch(0.78 0.12 60)",
    "blurb": "The survey went out as a commercial apparatus and a counterinsurgency science, and came home as predictive policing.",
    "steps": [
      {
        "node": "ibope",
        "note": "1942 — IBOPE carries Gallup's method into Latin America; its first product is audience measurement."
      },
      {
        "node": "lerner",
        "note": "1950–51 — Lerner's VOA-funded surveys produce the empathy index: a score for how reachable a population is."
      },
      {
        "node": "voa",
        "note": "The State Department finances the survey; the receptivity score is the ancestor of every propensity score in the dossier."
      },
      {
        "node": "project_camelot",
        "note": "1963–65 — the Army's $6m, 140-person-year project to predict and influence social change and internal war potential."
      },
      {
        "node": "soro",
        "note": "The Army-funded Special Operations Research Office runs Camelot; after the public cancellation the work continues under smaller task labels."
      },
      {
        "node": "cress",
        "note": "1966 — SORO is renamed CRESS; DoD behavioural-science funding rises from $27.3m to $34m."
      },
      {
        "node": "brantingham_aro",
        "note": "2006 — Army Research Office grants extend a foraging analogy from animal movement to insurgents, then to crime."
      },
      {
        "node": "predpol",
        "note": "2011 — PredPol is installed at LAPD with $200,000 that Bill Bratton persuaded Target to donate."
      },
      {
        "node": "sama",
        "note": "2021– — the export continued after decolonisation as a wage, and the wage is the spread."
      }
    ]
  }
];

export const CLUSTER_POS = {
  "consumer": [
    -1050,
    600
  ],
  "arbitrage": [
    720,
    430
  ],
  "remedy": [
    430,
    640
  ]
};

export const POS = {
  "clarence_saunders": [
    735.7,
    384.6
  ],
  "piggly_wiggly": [
    702.4,
    504.4
  ],
  "earnest_elmo_calkins": [
    689.2,
    373.4
  ],
  "artificial_obsolescence": [
    789.4,
    452.8
  ],
  "consumer_engineering": [
    646.2,
    467.6
  ],
  "sheldon_and_arens": [
    753.3,
    528.7
  ],
  "the_panel": [
    769.8,
    349.7
  ],
  "receptivity_score": [
    624.9,
    361.7
  ],
  "claritas": [
    653.9,
    533.3
  ],
  "jonathan_robbin": [
    598,
    435.4
  ],
  "geodemographics": [
    812.4,
    361.4
  ],
  "prizm": [
    729.2,
    305
  ],
  "rezide": [
    831.5,
    478.9
  ],
  "arnold_mitchell": [
    815.1,
    527.9
  ],
  "psychographics": [
    718.4,
    560.7
  ],
  "sri_international": [
    605.7,
    486.2
  ],
  "vals": [
    629.4,
    312.8
  ],
  "usarec": [
    779.9,
    561.3
  ],
  "surveillance_pricing": [
    868.2,
    367
  ],
  "equifax": [
    670.7,
    280.3
  ],
  "ixi_corp": [
    834.7,
    315.3
  ],
  "epsilon": [
    585.3,
    391.9
  ],
  "acxiom": [
    872.9,
    467.5
  ],
  "non_evidentiary_clause": [
    670.9,
    580.2
  ],
  "transunion": [
    748.7,
    596.9
  ],
  "experian": [
    754.8,
    271.5
  ],
  "l2_political": [
    584,
    337
  ],
  "tapad": [
    858.2,
    524.3
  ],
  "voter_file": [
    598.1,
    548
  ],
  "neustar": [
    537.7,
    438.9
  ],
  "sama": [
    702.5,
    250.4
  ],
  "remotasks": [
    826.7,
    575.2
  ],
  "rlhf_pay_band": [
    909.6,
    435.5
  ],
  "ftc_6b": [
    708,
    619.8
  ],
  "oracle_data_cloud": [
    600.2,
    279.7
  ],
  "pricing_intermediaries": [
    827.7,
    271.2
  ],
  "surrogate_respondents": [
    918.2,
    487.8
  ],
  "subject_as_underlying": [
    556.3,
    540.3
  ],
  "i360": [
    642.6,
    613.7
  ],
  "bengal_identification_system": [
    -1180,
    -867.9
  ],
  "william_herschel": [
    -1203.8,
    -739.8
  ],
  "criminal_tribes_act_1871": [
    -1093.2,
    -835.2
  ],
  "negative_file": [
    -1269.3,
    -754.6
  ],
  "edward_henry": [
    -1156.8,
    -908
  ],
  "bengal_fingerprint_bureau": [
    -1270.2,
    -907.3
  ],
  "predpol": [
    -1155.4,
    -733.1
  ],
  "chicago_ssl": [
    -1210.2,
    -940.9
  ],
  "calgang": [
    -1098.3,
    -738.5
  ],
  "charles_coolidge_parlin": [
    -1073.2,
    642
  ],
  "commercial_research_division": [
    -1048.4,
    540.4
  ],
  "curtis_publishing": [
    -981.3,
    614.6
  ],
  "the_trash_audit": [
    -1134,
    604.4
  ],
  "hawthorne_works": [
    -1026.3,
    671.8
  ],
  "western_electric": [
    -966.4,
    565.5
  ],
  "elton_mayo": [
    -1111.4,
    554.4
  ],
  "robert_elder": [
    -1067.3,
    698.9
  ],
  "audimeter": [
    -986,
    526.7
  ],
  "hawthorne_effect": [
    -1074.8,
    504.5
  ],
  "ibope": [
    -946.2,
    645.7
  ],
  "bureau_of_the_census": [
    -1130.3,
    513.9
  ],
  "univac_census": [
    -939.8,
    600.4
  ],
  "caci": [
    -987.1,
    689.6
  ],
  "richard_webber": [
    -1018.4,
    492.2
  ],
  "dunnhumby": [
    -1175.9,
    581
  ],
  "gandy": [
    -1178.6,
    652.1
  ],
  "panoptic_sort": [
    -1169.5,
    538.5
  ],
  "loyalty_loop": [
    -917,
    559.6
  ],
  "tesco_clubcard": [
    -1019.1,
    732.4
  ],
  "nps": [
    -1097.9,
    739.5
  ],
  "joseph_turow": [
    -1075.7,
    458.7
  ],
  "efficacy_paradox": [
    -937,
    687.8
  ],
  "lewis_rao": [
    -890.1,
    593.1
  ],
  "ghost_work": [
    -974.5,
    482.4
  ],
  "shumailov_model_collapse": [
    -1147.9,
    728.1
  ],
  "twin_2k_500": [
    -1003.6,
    451.3
  ],
  "francis_galton": [
    23.8,
    -177.4
  ],
  "mrc": [
    416.6,
    572.1
  ],
  "cornelius_gallagher": [
    466.5,
    715.1
  ],
  "house_invasion_of_privacy_subcommittee": [
    371.2,
    613.7
  ],
  "national_data_center": [
    340.2,
    644.4
  ],
  "fcra": [
    500.5,
    683.5
  ],
  "marketing_exemption": [
    477,
    554.3
  ],
  "two_columns": [
    420.1,
    736.3
  ],
  "scanner_revolt": [
    368.1,
    563.8
  ],
  "bverfg_1983": [
    351.7,
    689.3
  ],
  "senate_psi_2012": [
    525.7,
    596.9
  ],
  "ftc_data_brokers_2014": [
    370.6,
    747.7
  ],
  "google_spain_delisting": [
    464,
    760.7
  ],
  "california_state_auditor": [
    307.8,
    685.6
  ],
  "gdpr": [
    409.7,
    522.1
  ],
  "ccpa": [
    555.9,
    627.1
  ],
  "exercise_rate": [
    513.4,
    741.7
  ],
  "oecd_disclosure_experiment": [
    291.3,
    643.9
  ],
  "cfpb": [
    359.6,
    518.2
  ],
  "microtargeting_first_amendment": [
    512.6,
    515.4
  ],
  "predictive_warrant": [
    551.5,
    722.5
  ],
  "edpb": [
    331.5,
    731.1
  ],
  "regulation_v": [
    402,
    795.3
  ],
  "right_for_sale": [
    316.3,
    528.2
  ],
  "medical_debt_removal": [
    278.3,
    585.9
  ],
  "ny_algorithmic_pricing_disclosure_act": [
    451.2,
    805.1
  ],
  "auditable_ground_truth": [
    585,
    595.7
  ],
  "connecticut_pa26_130": [
    335.2,
    787
  ],
  "maryland_hb895": [
    274,
    716.4
  ],
  "new_jersey_a4085": [
    507.7,
    793.9
  ],
  "point_of_sale_label": [
    390.7,
    477.2
  ],
  "update_is_not_correction": [
    605.2,
    646.2
  ],
  "voa": [
    981.7,
    318.6
  ],
  "cenis": [
    1030.8,
    142.7
  ],
  "project_camelot": [
    1088.2,
    228
  ],
  "soro": [
    1034.9,
    320.9
  ],
  "ruggles_report": [
    871.5,
    174.5
  ],
  "community_profile_project": [
    841.7,
    206.9
  ],
  "cress": [
    938,
    99.1
  ],
  "kaysen_report": [
    868.6,
    132.4
  ],
  "social_security_number": [
    873.8,
    275.4
  ],
  "brantingham_aro": [
    1016,
    360.6
  ],
  "fbi": [
    1131,
    263.9
  ],
  "cbp": [
    816.9,
    166.2
  ],
  "secret_service": [
    1065.6,
    367.8
  ],
  "dhs_oig_2023": [
    1103.6,
    110.7
  ],
  "dea": [
    860.7,
    83.3
  ],
  "fusion_centers": [
    1877.1,
    -88.4
  ]
};
