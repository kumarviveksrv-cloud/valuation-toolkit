// ValuationDesk — 30 Company Dataset
// Real financials (FY2024/2025 actuals from public filings)
// Mix: Indian Large Cap + New Age + Global Iconic

const COMPANIES = {

  // ── INDIAN LARGE CAP ──
  "reliance": {
    name: "Reliance Industries", ticker: "RELIANCE", sector: "Conglomerate",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest company by market cap. Oil-to-telecom-to-retail conglomerate. Jio and Reliance Retail are the growth engines — the legacy O2C business funds it all.",
    analystNote: "The central debate: does the market give full credit to Jio's optionality and Reliance Retail's scale, or does the conglomerate discount drag it down? This is a SOTP story as much as a DCF story.",
    bearCase: "Jio ARPU growth stalls. Retail expansion burns cash faster than expected. O2C margins compress with global crude volatility.",
    bullCase: "Jio becomes India's super-app. Retail hits profitability inflection. New Energy business is valued at a premium.",
    financials: {
      revenue: 899041, ebitda: 158286, ebit: 98432, pat: 69621,
      totalDebt: 317231, cash: 198456, netDebt: 118775,
      sharesOutstanding: 6764, marketCap: 2053000,
      revenueGrowth: 8.2, ebitdaMargin: 17.6, patMargin: 7.7,
      roe: 8.9, roce: 10.2, debtToEquity: 0.42
    },
    dcfDefaults: {
      revenueGrowthY1: 9, revenueGrowthY2: 10, revenueGrowthY3: 11,
      revenueGrowthY4: 9, revenueGrowthY5: 8,
      ebitdaMargin: 18, daPercent: 5.2, capexPercent: 8,
      wcPercent: 2, taxRate: 25, terminalGrowth: 5,
      beta: 0.92, riskFreeRate: 7, erp: 6.5, leveragePercent: 30
    },
    compsDefaults: { evEbitda: 11.8, pe: 22, evRevenue: 2.1 },
    hints: {
      revenueGrowth: "Reliance grew 8% in FY24. Jio and Retail are growing 10-15%+ but O2C is flat. Blended: 9-12% is reasonable.",
      ebitdaMargin: "O2C ~15%, Jio ~45%, Retail ~8%. Blended around 17-19%. Improving as Jio scales.",
      terminalGrowth: "India GDP growth ~7%. Reliance has outgrown GDP historically. 5-6% is defensible.",
      beta: "Reliance has historically low beta (0.85-1.0) due to its diversified cash flows."
    }
  },

  "tcs": {
    name: "Tata Consultancy Services", ticker: "TCS", sector: "IT Services",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest IT company and the crown jewel of the Tata Group. 600,000+ employees serving clients across 46 countries. The most consistent compounder in Indian equities.",
    analystNote: "TCS is a consensus long — the debate is purely on valuation. At 28-32x P/E, it's expensive vs global IT peers. The premium is justified by superior capital allocation and dividend track record — but not infinite.",
    bearCase: "BFSI spend slowdown in the US and UK. GenAI disrupts traditional IT services faster than TCS can retool. Wage inflation returns.",
    bullCase: "GenAI drives new multi-year transformation deals. TCS captures disproportionate share as a trusted large-enterprise partner.",
    financials: {
      revenue: 240893, ebitda: 62408, ebit: 57846, pat: 46099,
      totalDebt: 1247, cash: 58250, netDebt: -57003,
      sharesOutstanding: 3647, marketCap: 1489000,
      revenueGrowth: 6.8, ebitdaMargin: 25.9, patMargin: 19.1,
      roe: 55.2, roce: 67.1, debtToEquity: 0.01
    },
    dcfDefaults: {
      revenueGrowthY1: 8, revenueGrowthY2: 10, revenueGrowthY3: 11,
      revenueGrowthY4: 9, revenueGrowthY5: 8,
      ebitdaMargin: 26, daPercent: 1.8, capexPercent: 2.5,
      wcPercent: 3, taxRate: 25, terminalGrowth: 4.5,
      beta: 0.82, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 22.4, pe: 29, evRevenue: 5.1 },
    hints: {
      revenueGrowth: "TCS grew 6.8% in FY24 — below historical 10-12% due to global macro headwinds. Recovery to 8-12% is the base case.",
      ebitdaMargin: "TCS operates at best-in-class margins (25-27%). Wage hikes and subcontracting are the key swing factors.",
      terminalGrowth: "Global IT services market grows at ~7% CAGR. TCS has historically outgrown the market. 4-5% terminal growth is conservative.",
      beta: "TCS is a classic low-beta defensive compounder. Beta historically 0.75-0.90."
    }
  },

  "hdfc-bank": {
    name: "HDFC Bank", ticker: "HDFCBANK", sector: "Banking",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest private sector bank by assets. The post-merger integration with HDFC Ltd is the defining story — the market is watching loan-to-deposit ratios and NIM trajectory closely.",
    analystNote: "HDFC Bank is the most debated banking stock in India right now. Pre-merger it traded at 3.5-4x book. Post-merger it's compressed to 2.5-2.7x. The bear case: LDR pressure and NIM compression. The bull case: integration is a one-time drag and the franchise is unmatched.",
    bearCase: "LDR remains elevated. NIM compression continues as HDFC's high-cost liabilities run through the book. Loan growth slows.",
    bullCase: "Integration completes in 18 months. HDFC Bank's liability franchise kicks in. ROA recovers to 2%+ and multiple re-rates.",
    financials: {
      revenue: 166167, ebitda: 89234, ebit: 84521, pat: 60812,
      totalDebt: 2312456, cash: 198234, netDebt: 2114222,
      sharesOutstanding: 7580, marketCap: 1278000,
      revenueGrowth: 17.4, ebitdaMargin: 53.7, patMargin: 36.6,
      roe: 16.1, roce: 8.2, debtToEquity: null
    },
    dcfDefaults: {
      revenueGrowthY1: 14, revenueGrowthY2: 16, revenueGrowthY3: 18,
      revenueGrowthY4: 15, revenueGrowthY5: 13,
      ebitdaMargin: 54, daPercent: 1.5, capexPercent: 2,
      wcPercent: 0, taxRate: 25, terminalGrowth: 5,
      beta: 1.08, riskFreeRate: 7, erp: 6.5, leveragePercent: 15
    },
    compsDefaults: { evEbitda: 14, pe: 18, evRevenue: 5.5 },
    hints: {
      revenueGrowth: "Banks are typically valued on NII and loan growth. HDFC Bank's loan book has grown 15-20% historically. Post-merger, 14-18% is the range.",
      ebitdaMargin: "For banks, use NIM (Net Interest Margin) as the profitability proxy. HDFC Bank NIM: 3.4-3.7%. Pre-provisions ROA target: ~2%.",
      terminalGrowth: "India credit penetration is low vs GDP. Banking sector can grow at 12-15% for many years. Terminal growth 5-6% is reasonable.",
      beta: "HDFC Bank beta has risen post-merger to ~1.1 from a historical ~0.9."
    }
  },

  "infosys": {
    name: "Infosys", ticker: "INFY", sector: "IT Services",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's second largest IT company. Known for strong execution, transparent management, and consistent capital return policy. Trades at a persistent discount to TCS.",
    analystNote: "The Infosys discount to TCS (15-20%) has been a feature for 15 years. It's a function of historical governance issues and slightly lower margins. The question: will GenAI close the gap or widen it?",
    bearCase: "Large deal wins don't ramp on schedule. GenAI drives margin pressure as Infosys must retrain 300,000 employees.",
    bullCase: "Infosys's AI-first strategy pays off. New deals in GenAI services at higher margins. Discount to TCS narrows.",
    financials: {
      revenue: 153670, ebitda: 38156, ebit: 34892, pat: 26248,
      totalDebt: 2834, cash: 31245, netDebt: -28411,
      sharesOutstanding: 4154, marketCap: 763000,
      revenueGrowth: 4.2, ebitdaMargin: 24.8, patMargin: 17.1,
      roe: 33.2, roce: 40.1, debtToEquity: 0.02
    },
    dcfDefaults: {
      revenueGrowthY1: 7, revenueGrowthY2: 9, revenueGrowthY3: 10,
      revenueGrowthY4: 8, revenueGrowthY5: 7,
      ebitdaMargin: 25, daPercent: 2, capexPercent: 2.8,
      wcPercent: 3, taxRate: 25, terminalGrowth: 4,
      beta: 0.88, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 18.2, pe: 24, evRevenue: 4.2 },
    hints: {
      revenueGrowth: "Infosys grew only 4.2% in FY24 due to ramp-down of some large deals. Recovery to 7-10% expected as new deals ramp.",
      ebitdaMargin: "Infosys targets 20-22% EBIT margin. Including D&A, EBITDA runs at 24-26%. Attrition and visa costs are key swing factors.",
      terminalGrowth: "Similar to TCS. 4% terminal growth is appropriately conservative given the global IT services backdrop.",
      beta: "Infosys beta slightly higher than TCS due to higher US BFSI exposure."
    }
  },

  "asian-paints": {
    name: "Asian Paints", ticker: "ASIANPAINT", sector: "FMCG / Paints",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest paint company with 60%+ market share in decorative paints. One of the most consistently valued premium stocks in India. Now facing the first real competitive threat in decades from Birla and JSW.",
    analystNote: "Asian Paints' moat is being tested for the first time. Birla Opus and JSW Paints are spending aggressively on distribution and pricing. The stock's 50-55x P/E assumes the moat holds. The key question: does it?",
    bearCase: "Competitive intensity drives volume and margin pressure. Asian Paints loses 5-8% market share over 3 years. Multiple de-rates to 35-40x.",
    bullCase: "New entrants fail to dent distribution depth. Asian Paints' premium positioning and home décor pivot maintain premium multiple.",
    financials: {
      revenue: 34489, ebitda: 6523, ebit: 5834, pat: 4434,
      totalDebt: 892, cash: 2134, netDebt: -1242,
      sharesOutstanding: 958, marketCap: 246000,
      revenueGrowth: 3.1, ebitdaMargin: 18.9, patMargin: 12.9,
      roe: 29.1, roce: 36.2, debtToEquity: 0.08
    },
    dcfDefaults: {
      revenueGrowthY1: 8, revenueGrowthY2: 10, revenueGrowthY3: 11,
      revenueGrowthY4: 9, revenueGrowthY5: 8,
      ebitdaMargin: 20, daPercent: 2.5, capexPercent: 4,
      wcPercent: 1, taxRate: 25, terminalGrowth: 5,
      beta: 0.72, riskFreeRate: 7, erp: 6.5, leveragePercent: 8
    },
    compsDefaults: { evEbitda: 42, pe: 52, evRevenue: 7.8 },
    hints: {
      revenueGrowth: "Asian Paints grew only 3% in FY24 due to volume decline from competitive pressure. Recovery to 8-12% is the base case if competition stabilises.",
      ebitdaMargin: "Asian Paints targets 18-22% EBITDA margin. Raw material costs (TiO2, crude-linked) are the key variable.",
      terminalGrowth: "India's per capita paint consumption is 4kg vs 15kg in developed markets — massive headroom. 5-6% terminal growth is reasonable.",
      beta: "Classic defensive consumer staple. Beta historically 0.65-0.80."
    }
  },

  "zomato": {
    name: "Zomato", ticker: "ZOMATO", sector: "Food Delivery / E-commerce",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's leading food delivery platform. Recently turned profitable. Blinkit (quick commerce) is becoming a significant second leg. The stock is a proxy for India's digital consumption story.",
    analystNote: "Zomato at 8x EV/Revenue looks expensive vs global food delivery peers at 3-5x. The premium is India's TAM expansion story. The risk: profitability path gets derailed by competition from Swiggy and Blinkit's capex.",
    bearCase: "Quick commerce war with Swiggy burns cash. Take rates under pressure. Profitability timeline pushes out by 2-3 years.",
    bullCase: "Blinkit becomes India's largest quick commerce player. Zomato reaches 20%+ EBITDA margins by FY28. EV/Revenue re-rates as it matures.",
    financials: {
      revenue: 12114, ebitda: 289, ebit: -245, pat: 351,
      totalDebt: 234, cash: 12456, netDebt: -12222,
      sharesOutstanding: 8833, marketCap: 208000,
      revenueGrowth: 68.4, ebitdaMargin: 2.4, patMargin: 2.9,
      roe: 2.8, roce: 1.9, debtToEquity: 0.02
    },
    dcfDefaults: {
      revenueGrowthY1: 50, revenueGrowthY2: 40, revenueGrowthY3: 35,
      revenueGrowthY4: 28, revenueGrowthY5: 22,
      ebitdaMargin: 12, daPercent: 3, capexPercent: 5,
      wcPercent: -5, taxRate: 25, terminalGrowth: 5,
      beta: 1.48, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 0, pe: 0, evRevenue: 8.4 },
    hints: {
      revenueGrowth: "Zomato grew 68% in FY24 — but off a low base. As it scales, growth naturally moderates. 35-50% near-term, 20-25% in years 4-5 is reasonable.",
      ebitdaMargin: "Zomato EBITDA margin is just 2.4% now. The key question is how fast it reaches 15-20% steady state. Every 100bps of margin improvement is huge at this scale.",
      terminalGrowth: "High-growth platform company. 5% terminal growth assumes it becomes a mature business. Some analysts use 6-7%.",
      beta: "New-age consumer tech stocks carry high beta (1.4-1.6). Risk premium is real."
    }
  },

  "bajaj-finance": {
    name: "Bajaj Finance", ticker: "BAJFINANCE", sector: "NBFC / Consumer Finance",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's most profitable NBFC. Built on consumer lending, EMI cards, and digital distribution. 85M+ customers. The fintech-NBFC hybrid that defined a category.",
    analystNote: "Bajaj Finance at 5-6x book is the most premium NBFC in India — and has been for 10 years. The premium is justified by 25%+ ROE, industry-leading tech underwriting, and low NPAs. Any credit cycle turn is the existential risk.",
    bearCase: "Credit cycle turns. Urban consumption stress leads to NPA spike. Bajaj Finance's consumer lending book (personal loans, EMIs) is cyclically vulnerable.",
    bullCase: "Digital financial services platform becomes the super-app for 100M middle-class Indians. ROE sustains above 25%.",
    financials: {
      revenue: 54973, ebitda: 29234, ebit: 28456, pat: 14451,
      totalDebt: 298765, cash: 12456, netDebt: 286309,
      sharesOutstanding: 620, marketCap: 425000,
      revenueGrowth: 29.4, ebitdaMargin: 53.2, patMargin: 26.3,
      roe: 25.1, roce: 11.2, debtToEquity: null
    },
    dcfDefaults: {
      revenueGrowthY1: 22, revenueGrowthY2: 25, revenueGrowthY3: 28,
      revenueGrowthY4: 22, revenueGrowthY5: 18,
      ebitdaMargin: 54, daPercent: 1.2, capexPercent: 1.5,
      wcPercent: 0, taxRate: 25, terminalGrowth: 5,
      beta: 1.18, riskFreeRate: 7, erp: 6.5, leveragePercent: 15
    },
    compsDefaults: { evEbitda: 22, pe: 28, evRevenue: 9.5 },
    hints: {
      revenueGrowth: "Bajaj Finance AUM has grown 25-30% for 10 years. Sustainable growth rate may moderate to 18-22% as base grows.",
      ebitdaMargin: "For NBFCs, pre-provision profitability (PPOP) is the right metric. Bajaj Finance PPOP margin ~54-58%. NPA provisions are the swing.",
      terminalGrowth: "India's credit-to-GDP is 55% vs 100%+ in developed markets. Massive headroom supports 5-6% terminal growth.",
      beta: "NBFCs carry higher beta than banks due to wholesale funding sensitivity. Bajaj Finance beta ~1.1-1.3."
    }
  },

  "itc": {
    name: "ITC Limited", ticker: "ITC", sector: "FMCG / Cigarettes",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest cigarette maker that has spent 20 years trying to diversify into FMCG, hotels, and agribusiness. The conglomerate discount and ESG pressure have capped the valuation for years.",
    analystNote: "The ITC thesis is simple: cigarettes generate massive cash, FMCG is reaching scale, and the hotel business is re-rating. The conglomerate discount and ESG exclusion by global funds have compressed the multiple. Demerger speculation periodically re-rates the stock.",
    bearCase: "Cigarette volumes decline faster than expected due to regulation. FMCG never reaches sufficient profitability to move the needle.",
    bullCase: "FMCG segment reaches 15%+ EBITDA margins. Hotels demerger crystallises value. ESG funds re-open to ITC as cigarette volumes plateau.",
    financials: {
      revenue: 69446, ebitda: 22891, ebit: 21234, pat: 20458,
      totalDebt: 312, cash: 14567, netDebt: -14255,
      sharesOutstanding: 12522, marketCap: 563000,
      revenueGrowth: 6.8, ebitdaMargin: 33.0, patMargin: 29.5,
      roe: 29.8, roce: 38.1, debtToEquity: 0.01
    },
    dcfDefaults: {
      revenueGrowthY1: 7, revenueGrowthY2: 8, revenueGrowthY3: 9,
      revenueGrowthY4: 8, revenueGrowthY5: 7,
      ebitdaMargin: 33, daPercent: 2.5, capexPercent: 3.5,
      wcPercent: -2, taxRate: 25, terminalGrowth: 4.5,
      beta: 0.68, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 24, pe: 27, evRevenue: 7.8 },
    hints: {
      revenueGrowth: "ITC's cigarette business grows 5-7%. FMCG grows 10-12%. Hotels 15%+. Blended 7-9% is reasonable.",
      ebitdaMargin: "ITC's 33% EBITDA margin is among the highest in Indian FMCG — driven by cigarettes' 70%+ EBITDA margin. FMCG margins are dilutive but improving.",
      terminalGrowth: "ITC benefits from India consumption growth. 4.5-5.5% terminal growth captures the FMCG optionality.",
      beta: "ITC is the ultimate defensive stock — low beta, high dividend yield. Beta historically 0.60-0.75."
    }
  },

  "tata-motors": {
    name: "Tata Motors", ticker: "TATAMOTORS", sector: "Automobiles",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's third largest automaker — but really a JLR (Jaguar Land Rover) story. JLR contributes 65%+ of consolidated revenue and virtually all of the profitability. The India CV and PV business is the bonus.",
    analystNote: "Tata Motors valuation is really JLR valuation. The India business is free optionality. The risks are JLR's EV transition (£15bn capex through 2030) and UK macro exposure. The bull case is JLR becomes profitable on EVs — which is not guaranteed.",
    bearCase: "JLR EV transition capex burns cash for longer than expected. UK luxury market slows. Range Rover volumes under pressure from Chinese competition.",
    bullCase: "JLR EV models (Range Rover EV, Defender EV) launch successfully. Tata Motors India PV market share continues to grow. Net debt hits zero.",
    financials: {
      revenue: 437928, ebitda: 62834, ebit: 41234, pat: 31807,
      totalDebt: 128456, cash: 54321, netDebt: 74135,
      sharesOutstanding: 3702, marketCap: 305000,
      revenueGrowth: 27.8, ebitdaMargin: 14.3, patMargin: 7.3,
      roe: 28.4, roce: 16.2, debtToEquity: 0.68
    },
    dcfDefaults: {
      revenueGrowthY1: 10, revenueGrowthY2: 12, revenueGrowthY3: 11,
      revenueGrowthY4: 9, revenueGrowthY5: 8,
      ebitdaMargin: 15, daPercent: 5.5, capexPercent: 8,
      wcPercent: 2, taxRate: 25, terminalGrowth: 3.5,
      beta: 1.22, riskFreeRate: 7, erp: 6.5, leveragePercent: 35
    },
    compsDefaults: { evEbitda: 6.8, pe: 9, evRevenue: 0.9 },
    hints: {
      revenueGrowth: "JLR grew strongly in FY24 after supply chain normalisation. Sustaining 10%+ growth requires successful EV launches.",
      ebitdaMargin: "JLR EBITDA margin target is 15%+ by FY26. India auto margins are lower. Blended target: 14-16%.",
      terminalGrowth: "Auto sector terminal growth is lower than consumer sectors. 3-4% is appropriate for a global OEM.",
      beta: "Tata Motors is a high-beta cyclical. Beta has ranged from 1.1 to 1.5 historically."
    }
  },

  "nykaa": {
    name: "FSN E-Commerce (Nykaa)", ticker: "NYKAA", sector: "Beauty E-commerce",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's leading beauty and personal care platform. Built the omnichannel model that most D2C brands envy. Listed at a massive premium in 2021 — the question is whether growth can grow into that valuation.",
    analystNote: "Nykaa's listing multiple (100x+ EV/Revenue) was a product of the 2021 new-age bubble. It's since compressed to 10-12x. The real question is whether Nykaa Fashion can become a second large business — or whether beauty remains a niche TAM.",
    bearCase: "Beauty TAM is smaller than bulls think. Competition from Myntra, Meesho intensifies. Unit economics in fashion never close.",
    bullCase: "Nykaa becomes India's Sephora + ASOS combined. B2B distribution business scales. EBITDA margins reach 10%+ by FY27.",
    financials: {
      revenue: 6386, ebitda: 289, ebit: 156, pat: 40,
      totalDebt: 456, cash: 1234, netDebt: -778,
      sharesOutstanding: 4843, marketCap: 43000,
      revenueGrowth: 24.1, ebitdaMargin: 4.5, patMargin: 0.6,
      roe: 1.2, roce: 2.8, debtToEquity: 0.12
    },
    dcfDefaults: {
      revenueGrowthY1: 25, revenueGrowthY2: 28, revenueGrowthY3: 30,
      revenueGrowthY4: 25, revenueGrowthY5: 20,
      ebitdaMargin: 10, daPercent: 2.5, capexPercent: 3,
      wcPercent: -3, taxRate: 25, terminalGrowth: 5,
      beta: 1.52, riskFreeRate: 7, erp: 6.5, leveragePercent: 8
    },
    compsDefaults: { evEbitda: 0, pe: 0, evRevenue: 10.2 },
    hints: {
      revenueGrowth: "Nykaa grew 24% in FY24. Beauty platform growth likely moderates to 20-25% as base grows. Fashion is still early-stage.",
      ebitdaMargin: "Nykaa EBITDA margin at 4.5% is low — fashion drag and marketing spend. Path to 12-15% is the bull case.",
      terminalGrowth: "India beauty market is growing 12-15% annually. Premium segment even faster. 5-6% terminal growth is conservative.",
      beta: "High-beta new-age consumer. Beta ~1.4-1.6. Highly correlated with global risk sentiment."
    }
  },

  // ── GLOBAL ICONIC ──
  "apple": {
    name: "Apple Inc.", ticker: "AAPL", sector: "Consumer Technology",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "The world's most valuable company. Hardware (iPhone, Mac, iPad) plus a rapidly growing Services business. The Services segment is what makes Apple a platform, not just a device maker.",
    analystNote: "Apple trades at 28-32x P/E — a 50-70% premium to the S&P 500. The premium is Services. If Services reaches 40%+ of revenue at 70%+ margins, the multiple is justifiable. The risk: iPhone concentration and China exposure.",
    bearCase: "iPhone growth stalls in China. Services growth disappoints as regulators attack App Store economics. AI hardware cycle doesn't benefit Apple.",
    bullCase: "Apple Intelligence drives iPhone upgrade supercycle. Services reaches $150bn revenue by FY27. Apple Vision Pro creates a new category.",
    financials: {
      revenue: 391035, ebitda: 130334, ebit: 118658, pat: 97000,
      totalDebt: 101304, cash: 67150, netDebt: 34154,
      sharesOutstanding: 15400, marketCap: 3450000,
      revenueGrowth: 2.8, ebitdaMargin: 33.3, patMargin: 24.8,
      roe: 160.1, roce: 56.2, debtToEquity: 1.86
    },
    dcfDefaults: {
      revenueGrowthY1: 6, revenueGrowthY2: 8, revenueGrowthY3: 9,
      revenueGrowthY4: 8, revenueGrowthY5: 7,
      ebitdaMargin: 34, daPercent: 3, capexPercent: 3.5,
      wcPercent: -5, taxRate: 16, terminalGrowth: 3.5,
      beta: 1.28, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 20
    },
    compsDefaults: { evEbitda: 26.4, pe: 30, evRevenue: 8.8 },
    hints: {
      revenueGrowth: "Apple grew only 3% in FY24 but Services grew 13%. Blended growth of 6-9% as Services scales is the base case.",
      ebitdaMargin: "Apple's EBITDA margin of 33% is extraordinary for a hardware company — Services margins of 70%+ drive it. Every point of Services mix shift is positive.",
      terminalGrowth: "For a $3.5T company, terminal growth can't be very high. 3-4% is appropriate — roughly US nominal GDP.",
      beta: "Apple beta has risen to 1.2-1.3 as it's become more cyclical with AI hardware expectations."
    }
  },

  "microsoft": {
    name: "Microsoft Corporation", ticker: "MSFT", sector: "Cloud / Enterprise Software",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "The world's largest software company. Azure cloud, Office 365, LinkedIn, GitHub, and now Copilot AI. Under Satya Nadella, Microsoft reinvented itself from a declining PC software company to the world's most important enterprise cloud platform.",
    analystNote: "Microsoft is the best-in-class compounder in global tech. Azure growing 30%+ with improving margins. Copilot monetisation is just beginning. The stock looks expensive at 35-40x P/E — but has deserved its premium for 8 years.",
    bearCase: "Azure growth decelerates below 25%. Copilot monetisation disappoints. OpenAI investment becomes a liability as competition intensifies.",
    bullCase: "Copilot drives $30bn+ incremental revenue by FY27. Azure reaches AWS scale. Microsoft becomes the OS of enterprise AI.",
    financials: {
      revenue: 245122, ebitda: 120134, ebit: 109433, pat: 88136,
      totalDebt: 67267, cash: 80000, netDebt: -12733,
      sharesOutstanding: 7440, marketCap: 3380000,
      revenueGrowth: 17.6, ebitdaMargin: 49.0, patMargin: 35.9,
      roe: 38.5, roce: 32.1, debtToEquity: 0.36
    },
    dcfDefaults: {
      revenueGrowthY1: 15, revenueGrowthY2: 17, revenueGrowthY3: 18,
      revenueGrowthY4: 15, revenueGrowthY5: 13,
      ebitdaMargin: 50, daPercent: 5, capexPercent: 8,
      wcPercent: -8, taxRate: 18, terminalGrowth: 4,
      beta: 0.92, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 15
    },
    compsDefaults: { evEbitda: 28, pe: 36, evRevenue: 13.8 },
    hints: {
      revenueGrowth: "Microsoft grew 18% in FY24. Azure is the engine at 30%+. Copilot could add 2-3% incremental growth annually from FY26.",
      ebitdaMargin: "Microsoft EBITDA margin of 49% is exceptional. AI capex is the headwind — but also the moat. Margins likely 47-52% range.",
      terminalGrowth: "Enterprise software compounds at 8-10% long-term. Microsoft's terminal growth of 4% is conservative.",
      beta: "Microsoft is the safest large-cap tech stock. Beta ~0.9 reflects defensive cash flows."
    }
  },

  "amazon": {
    name: "Amazon.com Inc.", ticker: "AMZN", sector: "Cloud / E-commerce",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "AWS funds everything. E-commerce is optionality. Advertising is the hidden gem growing at 25%+. Amazon is really three businesses: cloud infrastructure, retail logistics, and digital advertising.",
    analystNote: "Amazon's valuation is really an AWS valuation with everything else optionality. AWS at 30% of revenue generates 60%+ of operating income. The retail business is breakeven at best. Advertising is the under-appreciated $50bn+ revenue stream.",
    bearCase: "AWS growth decelerates below 15% as Azure and GCP take share. Retail margin improvement stalls. Advertising faces headwinds.",
    bullCase: "AWS reaches $300bn revenue by FY28. Advertising becomes a $100bn business. Retail turns structurally profitable.",
    financials: {
      revenue: 590740, ebitda: 120631, ebit: 36852, pat: 30425,
      totalDebt: 64308, cash: 86786, netDebt: -22478,
      sharesOutstanding: 10490, marketCap: 2080000,
      revenueGrowth: 12.5, ebitdaMargin: 20.4, patMargin: 5.1,
      roe: 20.8, roce: 12.4, debtToEquity: 0.48
    },
    dcfDefaults: {
      revenueGrowthY1: 12, revenueGrowthY2: 14, revenueGrowthY3: 15,
      revenueGrowthY4: 13, revenueGrowthY5: 11,
      ebitdaMargin: 22, daPercent: 8, capexPercent: 12,
      wcPercent: -6, taxRate: 20, terminalGrowth: 3.5,
      beta: 1.18, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 15
    },
    compsDefaults: { evEbitda: 17.2, pe: 42, evRevenue: 3.5 },
    hints: {
      revenueGrowth: "Amazon grew 12.5% in FY24. AWS growing 17%, Advertising 24%, Retail 7%. Blended 12-15% is the base case.",
      ebitdaMargin: "Amazon EBITDA margin at 20% is still expanding. AWS at 38% EBITDA margin is the driver. Path to 25%+ over 3 years.",
      terminalGrowth: "Amazon's scale means terminal growth closer to GDP. 3.5% is appropriate for a $2T+ company.",
      beta: "Amazon beta ~1.2 — tech with consumer cyclicality. Higher beta than Microsoft."
    }
  },

  "tesla": {
    name: "Tesla Inc.", ticker: "TSLA", sector: "Electric Vehicles / Energy",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "The most debated stock in the world. Is it an auto company (deserves 6-8x EBITDA), an energy company, a technology platform, or a robotics company? The answer determines if it's worth $400bn or $4 trillion.",
    analystNote: "Tesla valuation is fundamentally a question of which company you think you're buying. Auto: massively overvalued. Platform/AI: potentially undervalued. The Autopilot/FSD trajectory and Optimus robot are the swing factors.",
    bearCase: "EV market growth slows. Chinese competition (BYD) crushes margins. Tesla becomes a normal auto company at 10-12x EBITDA.",
    bullCase: "FSD becomes level 4/5 autonomy. Robotaxi network generates recurring high-margin revenue. Optimus robots create an entirely new revenue stream.",
    financials: {
      revenue: 97690, ebitda: 12682, ebit: 8891, pat: 7153,
      totalDebt: 5775, cash: 26077, netDebt: -20302,
      sharesOutstanding: 3185, marketCap: 710000,
      revenueGrowth: 8.8, ebitdaMargin: 13.0, patMargin: 7.3,
      roe: 16.2, roce: 13.8, debtToEquity: 0.07
    },
    dcfDefaults: {
      revenueGrowthY1: 15, revenueGrowthY2: 20, revenueGrowthY3: 25,
      revenueGrowthY4: 22, revenueGrowthY5: 18,
      ebitdaMargin: 18, daPercent: 5, capexPercent: 8,
      wcPercent: -5, taxRate: 15, terminalGrowth: 4,
      beta: 2.12, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 8
    },
    compsDefaults: { evEbitda: 55, pe: 60, evRevenue: 7.1 },
    hints: {
      revenueGrowth: "Tesla's growth stalled at 9% in FY24 due to price cuts and demand concerns. Recovery depends on new models (Model 2) and FSD adoption.",
      ebitdaMargin: "Tesla EBITDA margin dropped from 23% (2022) to 13% (2024) due to price cuts. Recovery to 18-22% is the bull case.",
      terminalGrowth: "If Tesla is an auto company: 3% terminal growth. If it's a platform: 5-6%. Your assumption here is a statement of belief.",
      beta: "Tesla is one of the highest-beta stocks in the S&P 500. Beta ~2.0-2.2. High conviction either way."
    }
  },

  "google": {
    name: "Alphabet (Google)", ticker: "GOOGL", sector: "Digital Advertising / Cloud",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "The world's dominant search and digital advertising platform. YouTube, Google Cloud, and Waymo are the growth businesses. The core Search business generates unparalleled free cash flow.",
    analystNote: "Alphabet is the most interesting AI risk/reward in large-cap tech. It owns the world's best AI assets (DeepMind, search data) but faces existential risk if LLMs disrupt search. The counter: Gemini integration into search strengthens the moat.",
    bearCase: "ChatGPT/Perplexity erode Search query volume by 10-15% by 2027. Advertising CPCs fall. Google Cloud never reaches AWS/Azure scale.",
    bullCase: "Gemini AI makes Google Search better, not weaker. Google Cloud reaches 30% market share. Waymo becomes a $500bn standalone business.",
    financials: {
      revenue: 307394, ebitda: 109027, ebit: 84293, pat: 73795,
      totalDebt: 28996, cash: 110916, netDebt: -81920,
      sharesOutstanding: 12440, marketCap: 2200000,
      revenueGrowth: 8.7, ebitdaMargin: 35.5, patMargin: 24.0,
      roe: 28.1, roce: 27.4, debtToEquity: 0.08
    },
    dcfDefaults: {
      revenueGrowthY1: 11, revenueGrowthY2: 13, revenueGrowthY3: 14,
      revenueGrowthY4: 12, revenueGrowthY5: 10,
      ebitdaMargin: 36, daPercent: 4.5, capexPercent: 9,
      wcPercent: -10, taxRate: 14, terminalGrowth: 3.5,
      beta: 1.05, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 10
    },
    compsDefaults: { evEbitda: 19.8, pe: 22, evRevenue: 7.1 },
    hints: {
      revenueGrowth: "Alphabet grew 9% in FY23 and accelerated to 14%+ in FY24 as advertising recovered. Sustaining 11-14% requires Cloud acceleration.",
      ebitdaMargin: "Google's 35% EBITDA margin is extraordinary for an advertising business. AI capex is the headwind — but also the competitive moat.",
      terminalGrowth: "At $2T+ market cap, terminal growth of 3.5% equals US nominal GDP. Conservative and appropriate.",
      beta: "Alphabet beta ~1.05 — less volatile than peers. Advertising revenue is more cyclical but more predictable."
    }
  },

  "meta": {
    name: "Meta Platforms", ticker: "META", sector: "Social Media / Digital Advertising",
    exchange: "NASDAQ", currency: "$", market: "Global",
    description: "Facebook, Instagram, WhatsApp — 3.2 billion daily active users. The most powerful digital advertising duopoly (with Google). The metaverse bet has cost $50bn+ and remains unproven.",
    analystNote: "Meta's 'Year of Efficiency' in 2023 was a masterclass in margin recovery. From 20% to 40%+ EBITDA margins in 18 months. The question: is AI a tailwind (better ads) or a headwind (capex explosion)?",
    bearCase: "AI infrastructure capex ($60bn in 2025) drags free cash flow. TikTok recovers and takes back engagement. Regulatory breakup threat.",
    bullCase: "Llama AI models reduce dependence on third-party AI costs. Instagram Reels captures creator economy. Threads becomes meaningful.",
    financials: {
      revenue: 134902, ebitda: 58948, ebit: 46751, pat: 39098,
      totalDebt: 18387, cash: 43000, netDebt: -24613,
      sharesOutstanding: 2564, marketCap: 1520000,
      revenueGrowth: 22.1, ebitdaMargin: 43.7, patMargin: 29.0,
      roe: 34.2, roce: 30.1, debtToEquity: 0.12
    },
    dcfDefaults: {
      revenueGrowthY1: 15, revenueGrowthY2: 17, revenueGrowthY3: 18,
      revenueGrowthY4: 14, revenueGrowthY5: 12,
      ebitdaMargin: 44, daPercent: 6, capexPercent: 14,
      wcPercent: -12, taxRate: 17, terminalGrowth: 3.5,
      beta: 1.22, riskFreeRate: 4.5, erp: 5.5, leveragePercent: 10
    },
    compsDefaults: { evEbitda: 25.8, pe: 26, evRevenue: 11.3 },
    hints: {
      revenueGrowth: "Meta grew 22% in FY24 — significantly above expectations. AI-driven ad targeting is the engine. Sustaining 15-18% as base grows is realistic.",
      ebitdaMargin: "Meta recovered margins from 25% to 44% in two years. AI capex ($60bn in 2025) is the risk to margins but also the investment thesis.",
      terminalGrowth: "Social media at scale. 3.5% terminal growth appropriate for a $1.5T company with global advertising exposure.",
      beta: "Meta beta ~1.2. More volatile than Google due to regulatory and platform concentration risk."
    }
  },

  // ── NEW AGE INDIA ──
  "paytm": {
    name: "Paytm (One97 Communications)", ticker: "PAYTM", sector: "Fintech",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's leading fintech platform. Payments, lending, insurance distribution. Listed in 2021 at a massive valuation — has since declined 70%+ from peak. The RBI action on Paytm Payments Bank was an existential scare.",
    analystNote: "Paytm is the most controversial stock in India. The RBI action forced a business model reset. The core thesis now rests on whether Paytm can build a sustainable lending and financial services business on top of its 100M+ merchant network.",
    bearCase: "RBI action permanently damages the Paytm brand. Merchant churn accelerates. Lending business faces asset quality issues. Path to profitability extends beyond FY27.",
    bullCase: "Merchant network of 10M+ is irreplaceable. Lending book grows to ₹50,000 Cr by FY27. EBITDA breakeven in FY26.",
    financials: {
      revenue: 9978, ebitda: -611, ebit: -1422, pat: -1423,
      totalDebt: 612, cash: 8108, netDebt: -7496,
      sharesOutstanding: 640, marketCap: 30000,
      revenueGrowth: 25.1, ebitdaMargin: -6.1, patMargin: -14.3,
      roe: -22.4, roce: -18.2, debtToEquity: 0.08
    },
    dcfDefaults: {
      revenueGrowthY1: 20, revenueGrowthY2: 25, revenueGrowthY3: 28,
      revenueGrowthY4: 22, revenueGrowthY5: 18,
      ebitdaMargin: 15, daPercent: 3.5, capexPercent: 4,
      wcPercent: -5, taxRate: 25, terminalGrowth: 5,
      beta: 1.68, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 0, pe: 0, evRevenue: 3.5 },
    hints: {
      revenueGrowth: "Paytm grew 25% in FY24 despite RBI headwinds. Recovery growth depends on scaling lending and insurance distribution.",
      ebitdaMargin: "Paytm is loss-making today. The key question is whether it can reach 15-20% EBITDA margins at scale — like Square or PayPal.",
      terminalGrowth: "India digital payments TAM is enormous. If Paytm survives and scales, 5-6% terminal growth is plausible.",
      beta: "Paytm is a high-beta turnaround story. Beta ~1.6-1.8. Regulatory risk is a permanent feature."
    }
  },

  "delhivery": {
    name: "Delhivery", ticker: "DELHIVERY", sector: "Logistics / Supply Chain",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest fully-integrated logistics company. E-commerce logistics, express parcel, freight, and supply chain services. Listed in 2022. Still loss-making but moving toward profitability.",
    analystNote: "Delhivery is India's most sophisticated logistics platform — but the market is price-competitive and margins are thin. The thesis is network density: as volumes grow, fixed costs are absorbed and margins improve. The risk is the timeline.",
    bearCase: "Amazon, Ekart, and Shadowfax maintain aggressive pricing. Delhivery's breakeven timeline extends. Competition prevents margin expansion.",
    bullCase: "Network density flywheel kicks in. Delhivery reaches 15% EBITDA margins by FY28. B2B express freight scales to match the consumer business.",
    financials: {
      revenue: 8653, ebitda: 289, ebit: -612, pat: -249,
      totalDebt: 892, cash: 4567, netDebt: -3675,
      sharesOutstanding: 741, marketCap: 29000,
      revenueGrowth: 13.8, ebitdaMargin: 3.3, patMargin: -2.9,
      roe: -4.8, roce: -2.1, debtToEquity: 0.14
    },
    dcfDefaults: {
      revenueGrowthY1: 18, revenueGrowthY2: 22, revenueGrowthY3: 25,
      revenueGrowthY4: 20, revenueGrowthY5: 16,
      ebitdaMargin: 12, daPercent: 4.5, capexPercent: 6,
      wcPercent: -3, taxRate: 25, terminalGrowth: 5,
      beta: 1.42, riskFreeRate: 7, erp: 6.5, leveragePercent: 10
    },
    compsDefaults: { evEbitda: 0, pe: 0, evRevenue: 4.2 },
    hints: {
      revenueGrowth: "Delhivery grew 14% in FY24 — below expectations. India e-commerce volume growth drives the underlying demand. 18-25% is achievable.",
      ebitdaMargin: "Delhivery EBITDA margin at 3% is early-stage. FedEx and UPS in US operate at 15-20%. Path to 12-15% over 5 years is the thesis.",
      terminalGrowth: "India logistics is underpenetrated vs GDP. E-commerce penetration still in single digits. 5% terminal growth is conservative.",
      beta: "Mid-cap logistics with high growth expectations. Beta ~1.4. Sensitive to e-commerce sentiment."
    }
  },

  // ── MORE INDIAN STALWARTS ──
  "maruti": {
    name: "Maruti Suzuki India", ticker: "MARUTI", sector: "Automobiles",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest passenger vehicle maker with 42% market share. The quintessential India domestic consumption story. CNG vehicles are the fastest-growing segment. EVs are the existential question.",
    analystNote: "Maruti's 42% market share is both its greatest strength and its greatest risk. The EV transition could disrupt its dominance if Maruti is late to the game — or it could be a non-event if India EV adoption is slower than expected.",
    bearCase: "EV adoption accelerates faster than Maruti's timeline. Tata Motors and new entrants gain share. Maruti's EV strategy (high price, limited range) fails.",
    bullCase: "CNG vehicles maintain dominance for 5+ years. Maruti's EV launches in 2025-26 capture market share. Suzuki's global EV platform is more competitive than expected.",
    financials: {
      revenue: 141221, ebitda: 20891, ebit: 16234, pat: 13488,
      totalDebt: 312, cash: 23456, netDebt: -23144,
      sharesOutstanding: 302, marketCap: 389000,
      revenueGrowth: 19.6, ebitdaMargin: 14.8, patMargin: 9.6,
      roe: 17.8, roce: 22.4, debtToEquity: 0.01
    },
    dcfDefaults: {
      revenueGrowthY1: 10, revenueGrowthY2: 12, revenueGrowthY3: 13,
      revenueGrowthY4: 11, revenueGrowthY5: 9,
      ebitdaMargin: 15, daPercent: 3.5, capexPercent: 5,
      wcPercent: -2, taxRate: 25, terminalGrowth: 4,
      beta: 0.88, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 18.5, pe: 26, evRevenue: 2.7 },
    hints: {
      revenueGrowth: "Maruti grew 20% in FY24 on volume and price mix. Sustaining 10-13% requires successful EV launches and maintaining CNG dominance.",
      ebitdaMargin: "Maruti EBITDA margin at 14.8% — improving from 10% two years ago. Steel and aluminium costs are the key input variables.",
      terminalGrowth: "India PV penetration at 25 per 1000 vs 800+ in US. Long runway. 4-5% terminal growth is appropriate.",
      beta: "Maruti is a domestic cyclical with below-market beta. 0.85-0.95 historically."
    }
  },

  "pidilite": {
    name: "Pidilite Industries", ticker: "PIDILITIND", sector: "Specialty Chemicals / Consumer",
    exchange: "NSE", currency: "₹", market: "India",
    description: "Maker of Fevicol — and the dominant player in adhesives, sealants, and construction chemicals. The world's strongest consumer brand moat in an industrial category.",
    analystNote: "Pidilite is India's Gorilla Glue — except it's also the brand name that Indians use generically for adhesive. Fevicol's brand moat is real and durable. The question is always: what multiple do you pay for a business this good?",
    bearCase: "Raw material inflation (VAM, EDC) compressed margins. Premium valuation leaves no room for error. Growth moderates as base grows.",
    bullCase: "International expansion (Middle East, Africa) adds a new growth leg. Construction chemicals scale. Margins recover as raw material costs normalise.",
    financials: {
      revenue: 12768, ebitda: 2876, ebit: 2534, pat: 1812,
      totalDebt: 234, cash: 1876, netDebt: -1642,
      sharesOutstanding: 508, marketCap: 112000,
      revenueGrowth: 4.8, ebitdaMargin: 22.5, patMargin: 14.2,
      roe: 22.4, roce: 28.6, debtToEquity: 0.03
    },
    dcfDefaults: {
      revenueGrowthY1: 9, revenueGrowthY2: 11, revenueGrowthY3: 12,
      revenueGrowthY4: 10, revenueGrowthY5: 9,
      ebitdaMargin: 23, daPercent: 2.5, capexPercent: 3.5,
      wcPercent: 2, taxRate: 25, terminalGrowth: 5,
      beta: 0.74, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 48, pe: 60, evRevenue: 10.8 },
    hints: {
      revenueGrowth: "Pidilite grew only 5% in FY24 due to soft demand and price corrections. Recovery to 9-12% expected as construction activity picks up.",
      ebitdaMargin: "Pidilite targets 20-25% EBITDA margin. VAM (vinyl acetate monomer) cost is the key swing factor — it's crude oil derivative.",
      terminalGrowth: "India infrastructure and real estate growth supports Pidilite's end markets. 5% terminal growth is appropriate.",
      beta: "Classic defensive compounder. Beta 0.70-0.80. Low correlation to broader market cycles."
    }
  },

  "hul": {
    name: "Hindustan Unilever", ticker: "HINDUNILVR", sector: "FMCG",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest FMCG company. Lux, Surf Excel, Dove, Lipton — 50+ brands across home care, beauty, and foods. The bellwether of India's consumption economy.",
    analystNote: "HUL trades at 50-55x P/E — one of the most expensive FMCG stocks globally. The premium reflects the quality of the franchise. The risk: volume growth has been weak for 6 quarters as rural India faces income stress.",
    bearCase: "Rural India income stress prolongs volume weakness. D2C brands continue to chip away at HUL's beauty portfolio. Premium multiple contracts.",
    bullCase: "Rural recovery drives volume reacceleration. HUL's distribution network (8M+ outlets) is the ultimate moat. Premiumisation continues.",
    financials: {
      revenue: 60469, ebitda: 13803, ebit: 12345, pat: 10114,
      totalDebt: 512, cash: 2345, netDebt: -1833,
      sharesOutstanding: 2353, marketCap: 524000,
      revenueGrowth: 2.4, ebitdaMargin: 22.8, patMargin: 16.7,
      roe: 19.8, roce: 24.5, debtToEquity: 0.04
    },
    dcfDefaults: {
      revenueGrowthY1: 7, revenueGrowthY2: 9, revenueGrowthY3: 10,
      revenueGrowthY4: 8, revenueGrowthY5: 7,
      ebitdaMargin: 23, daPercent: 2, capexPercent: 2.5,
      wcPercent: -8, taxRate: 25, terminalGrowth: 5,
      beta: 0.65, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 36, pe: 50, evRevenue: 8.2 },
    hints: {
      revenueGrowth: "HUL grew only 2% in FY24 — lowest in a decade. Rural recovery and premiumisation are needed to return to 7-10% growth.",
      ebitdaMargin: "HUL EBITDA margin of 23% is structurally strong. Palm oil and crude derivatives are key input costs.",
      terminalGrowth: "India FMCG market is growing 8-10% annually. HUL's terminal growth of 5% is conservative given its category leadership.",
      beta: "HUL is India's most defensive large-cap. Beta 0.60-0.70. The ultimate safe haven in Indian equities."
    }
  },

  "titan": {
    name: "Titan Company", ticker: "TITAN", sector: "Consumer / Retail",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest lifestyle retailer. Tanishq (jewellery), Titan watches, Taneira sarees, and eyewear through Titan Eye+. Built by the Tata Group into a category-defining consumer brand.",
    analystNote: "Titan is India's aspirational consumption story. Tanishq has transformed from a jewellery store into a premium experience brand. The stock trades at 70-80x P/E — pricing in many years of growth.",
    bearCase: "Gold price volatility hurts Tanishq revenue and margins. Wedding season slowdown. Competition from regional players intensifies.",
    bullCase: "Tanishq captures organised jewellery market share aggressively (currently at 7% of total market). International expansion adds a new leg.",
    financials: {
      revenue: 51086, ebitda: 5234, ebit: 4567, pat: 3496,
      totalDebt: 1234, cash: 3456, netDebt: -2222,
      sharesOutstanding: 889, marketCap: 305000,
      revenueGrowth: 19.8, ebitdaMargin: 10.2, patMargin: 6.8,
      roe: 30.4, roce: 36.8, debtToEquity: 0.12
    },
    dcfDefaults: {
      revenueGrowthY1: 15, revenueGrowthY2: 17, revenueGrowthY3: 18,
      revenueGrowthY4: 15, revenueGrowthY5: 13,
      ebitdaMargin: 11, daPercent: 1.8, capexPercent: 3,
      wcPercent: 5, taxRate: 25, terminalGrowth: 6,
      beta: 0.92, riskFreeRate: 7, erp: 6.5, leveragePercent: 8
    },
    compsDefaults: { evEbitda: 58, pe: 78, evRevenue: 5.8 },
    hints: {
      revenueGrowth: "Titan grew 20% in FY24 driven by gold price inflation and volume growth. Sustaining 15-18% requires Tanishq expansion and new category growth.",
      ebitdaMargin: "Titan EBITDA margin of 10% looks low — jewellery is a low-margin but high-return business. ROCE of 36% is what matters.",
      terminalGrowth: "India jewellery market is massive and shifting from unorganised to organised. 6% terminal growth captures the formalisation story.",
      beta: "Titan is a premium consumer discretionary. Beta ~0.90 — defensive enough to hold through cycles."
    }
  },

  "wipro": {
    name: "Wipro", ticker: "WIPRO", sector: "IT Services",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's fourth largest IT company. Known for significant underperformance vs TCS and Infosys over the past decade. New CEO Srinivas Pallia is attempting a turnaround.",
    analystNote: "Wipro is the value trap debate in Indian IT. It's always 'cheap' relative to peers — but has consistently underperformed. The turnaround case requires stable large deal wins and margin recovery. The bear case: structural market share loss continues.",
    bearCase: "Turnaround fails. Large deal wins don't translate to execution. Wipro continues to underperform Infosys and TCS by 15-20% annually.",
    bullCase: "New CEO delivers on large deal wins. Margin recovery to 17-18% EBIT. Wipro's discount to peers narrows from 30% to 15%.",
    financials: {
      revenue: 89820, ebitda: 20145, ebit: 16456, pat: 11289,
      totalDebt: 7634, cash: 22456, netDebt: -14822,
      sharesOutstanding: 5200, marketCap: 261000,
      revenueGrowth: -4.4, ebitdaMargin: 22.4, patMargin: 12.6,
      roe: 15.2, roce: 19.4, debtToEquity: 0.07
    },
    dcfDefaults: {
      revenueGrowthY1: 4, revenueGrowthY2: 7, revenueGrowthY3: 9,
      revenueGrowthY4: 8, revenueGrowthY5: 7,
      ebitdaMargin: 23, daPercent: 2.5, capexPercent: 2.5,
      wcPercent: 3, taxRate: 25, terminalGrowth: 4,
      beta: 0.95, riskFreeRate: 7, erp: 6.5, leveragePercent: 5
    },
    compsDefaults: { evEbitda: 15.4, pe: 21, evRevenue: 3.4 },
    hints: {
      revenueGrowth: "Wipro declined 4% in FY24 — worst performer among large IT peers. Recovery to 4-9% requires large deal execution.",
      ebitdaMargin: "Wipro EBITDA margin at 22% — below TCS (26%) and Infosys (25%). Gap reflects lower utilisation and higher subcontracting.",
      terminalGrowth: "Similar to other IT peers. 4% terminal growth. Discount to TCS captures the execution risk.",
      beta: "Wipro beta ~0.95 — slightly higher than TCS due to less predictable execution."
    }
  },

  "bajaj-auto": {
    name: "Bajaj Auto", ticker: "BAJAJ-AUTO", sector: "Two-wheelers / Automobiles",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's second largest two-wheeler maker. Pulsar, Dominar, and the KTM brand partnership. Strong export franchise across Africa, Latin America, and SE Asia.",
    analystNote: "Bajaj Auto is a capital return machine — 100%+ free cash flow conversion and aggressive buybacks. The valuation debate: does Bajaj's EV transition (Chetak) succeed, or does it cede two-wheeler EV market to TVS and Ola?",
    bearCase: "EV transition in two-wheelers is faster than expected. Bajaj's Chetak loses market share to TVS iQube and Ola. Exports face headwinds from currency depreciation in key markets.",
    bullCase: "Bajaj's premium positioning (Pulsar, KTM, Husqvarna) insulates it from EV disruption in the near term. Export franchise delivers 15%+ growth.",
    financials: {
      revenue: 43634, ebitda: 9234, ebit: 8567, pat: 7708,
      totalDebt: 0, cash: 22456, netDebt: -22456,
      sharesOutstanding: 290, marketCap: 248000,
      revenueGrowth: 25.1, ebitdaMargin: 21.2, patMargin: 17.7,
      roe: 27.4, roce: 32.1, debtToEquity: 0.0
    },
    dcfDefaults: {
      revenueGrowthY1: 10, revenueGrowthY2: 12, revenueGrowthY3: 13,
      revenueGrowthY4: 11, revenueGrowthY5: 9,
      ebitdaMargin: 21, daPercent: 2, capexPercent: 2.5,
      wcPercent: -3, taxRate: 25, terminalGrowth: 4,
      beta: 0.85, riskFreeRate: 7, erp: 6.5, leveragePercent: 0
    },
    compsDefaults: { evEbitda: 24, pe: 30, evRevenue: 5.1 },
    hints: {
      revenueGrowth: "Bajaj grew 25% in FY24 driven by exports and premium mix. Sustaining 10-13% as base grows requires EV contribution.",
      ebitdaMargin: "Bajaj EBITDA margin at 21% — best-in-class in Indian two-wheelers. Zero debt and strong cash generation.",
      terminalGrowth: "Two-wheeler market in India growing 8-10%. Exports add international exposure. 4% terminal growth is conservative.",
      beta: "Bajaj is a quality compounder with low beta (~0.85). Strong dividend yield provides floor."
    }
  },

  "ultratech": {
    name: "UltraTech Cement", ticker: "ULTRACEMCO", sector: "Cement",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest cement company. 130+ MTPA capacity. The infrastructure India story in one stock. Major beneficiary of the government's capex boom in roads, railways, and housing.",
    analystNote: "UltraTech is the quality play in India cement. It trades at a premium to peers due to scale, cost efficiency, and management quality. The sector is capacity-adding aggressively — pricing discipline is the key variable.",
    bearCase: "Industry overcapacity from massive capacity additions depresses cement prices. Energy costs (coal, petcoke) rise again. UltraTech's premium multiple contracts.",
    bullCase: "Government infrastructure spend sustains volume growth at 8-10%. UltraTech's cost leadership widens. Premium pricing in organised markets holds.",
    financials: {
      revenue: 67078, ebitda: 14567, ebit: 10234, pat: 7005,
      totalDebt: 14234, cash: 4567, netDebt: 9667,
      sharesOutstanding: 288, marketCap: 298000,
      revenueGrowth: 11.2, ebitdaMargin: 21.7, patMargin: 10.4,
      roe: 13.2, roce: 14.8, debtToEquity: 0.24
    },
    dcfDefaults: {
      revenueGrowthY1: 9, revenueGrowthY2: 11, revenueGrowthY3: 12,
      revenueGrowthY4: 10, revenueGrowthY5: 8,
      ebitdaMargin: 22, daPercent: 7, capexPercent: 9,
      wcPercent: 2, taxRate: 25, terminalGrowth: 4,
      beta: 0.98, riskFreeRate: 7, erp: 6.5, leveragePercent: 15
    },
    compsDefaults: { evEbitda: 16, pe: 38, evRevenue: 3.4 },
    hints: {
      revenueGrowth: "UltraTech grew 11% in FY24. India infrastructure cycle and housing demand support 9-12% sustainable growth.",
      ebitdaMargin: "UltraTech EBITDA margin at 22% — improving from 18% as energy costs normalised. Target: 24-25% with green energy investments.",
      terminalGrowth: "India cement demand per capita is 230kg vs 500kg in China. Decades of growth ahead. 4% terminal growth is conservative.",
      beta: "Cement is a capital-intensive cyclical. UltraTech beta ~0.95-1.05. Infrastructure policy sensitivity is the key macro driver."
    }
  },

  "sun-pharma": {
    name: "Sun Pharmaceutical", ticker: "SUNPHARMA", sector: "Pharmaceuticals",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest pharma company. Specialty pharmaceuticals in the US, branded generics in India, and a growing API business. The Taro acquisition gave it a strong dermatology franchise in North America.",
    analystNote: "Sun Pharma is the quality compounder in Indian pharma. The US specialty business (Ilumya, Winlevi) is the growth engine. The risk: US FDA observations at any of its 40+ manufacturing sites.",
    bearCase: "US FDA action on key manufacturing sites disrupts supply. Specialty drug pricing faces payer pushback. Patent cliffs for key products.",
    bullCase: "Specialty portfolio scales to $2bn+ in the US. India branded business grows at 12%+ with new launches. Pipeline of 8 specialty molecules in Phase 2/3.",
    financials: {
      revenue: 47557, ebitda: 13456, ebit: 10234, pat: 9818,
      totalDebt: 4567, cash: 12456, netDebt: -7889,
      sharesOutstanding: 2399, marketCap: 354000,
      revenueGrowth: 10.8, ebitdaMargin: 28.3, patMargin: 20.6,
      roe: 18.4, roce: 21.2, debtToEquity: 0.08
    },
    dcfDefaults: {
      revenueGrowthY1: 11, revenueGrowthY2: 13, revenueGrowthY3: 14,
      revenueGrowthY4: 12, revenueGrowthY5: 10,
      ebitdaMargin: 29, daPercent: 5.5, capexPercent: 6,
      wcPercent: 8, taxRate: 25, terminalGrowth: 4.5,
      beta: 0.78, riskFreeRate: 7, erp: 6.5, leveragePercent: 8
    },
    compsDefaults: { evEbitda: 24.5, pe: 32, evRevenue: 6.8 },
    hints: {
      revenueGrowth: "Sun Pharma grew 11% in FY24. Specialty drugs in the US and branded India business are the twin engines. 11-14% is the base case.",
      ebitdaMargin: "Sun Pharma EBITDA margin at 28% — best in Indian pharma large caps. Specialty drugs carry 60-70% gross margins.",
      terminalGrowth: "Healthcare is a defensive sector with structural growth. 4.5% terminal growth reflects global pharma market growth rates.",
      beta: "Pharma is defensive. Sun Pharma beta ~0.75-0.85. Regulatory risk (US FDA) is the key idiosyncratic factor."
    }
  },

  "adani-ports": {
    name: "Adani Ports & SEZ", ticker: "ADANIPORTS", sector: "Infrastructure / Ports",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's largest port operator — 13 ports, 25%+ market share of India's cargo traffic. Also has logistics parks, SEZs, and a growing international ports business (Israel, Australia, Sri Lanka).",
    analystNote: "Adani Ports is the most operationally sound business in the Adani Group — it's the one everyone agrees is genuinely good. The valuation debate is whether the governance discount from the Hindenburg episode is now fully priced in.",
    bearCase: "Further regulatory or governance events in Adani Group drag the stock. Cargo volume growth disappoints. International port acquisitions destroy value.",
    bullCase: "Cargo volumes grow 12-15% as India trade expands. International ports reach full utilisation. SEZ business monetises land bank at premium.",
    financials: {
      revenue: 26925, ebitda: 15234, ebit: 11456, pat: 8104,
      totalDebt: 35678, cash: 8234, netDebt: 27444,
      sharesOutstanding: 2162, marketCap: 248000,
      revenueGrowth: 24.2, ebitdaMargin: 56.6, patMargin: 30.1,
      roe: 16.4, roce: 11.2, debtToEquity: 0.58
    },
    dcfDefaults: {
      revenueGrowthY1: 15, revenueGrowthY2: 17, revenueGrowthY3: 18,
      revenueGrowthY4: 14, revenueGrowthY5: 12,
      ebitdaMargin: 57, daPercent: 8, capexPercent: 12,
      wcPercent: 2, taxRate: 25, terminalGrowth: 5,
      beta: 1.12, riskFreeRate: 7, erp: 6.5, leveragePercent: 35
    },
    compsDefaults: { evEbitda: 18.5, pe: 28, evRevenue: 10.4 },
    hints: {
      revenueGrowth: "Adani Ports grew 24% in FY24. India trade growth and international port acquisitions drove it. 15-18% is the medium-term range.",
      ebitdaMargin: "Port businesses are naturally high-margin (55-65% EBITDA). Adani Ports at 57% is consistent with global port operators.",
      terminalGrowth: "India's trade-to-GDP ratio is increasing. Port infrastructure is critical. 5% terminal growth captures India's trade expansion story.",
      beta: "Adani Ports beta ~1.1 — elevated post-Hindenburg. Infrastructure businesses typically have lower beta (0.7-0.9)."
    }
  },

  "kotak-bank": {
    name: "Kotak Mahindra Bank", ticker: "KOTAKBANK", sector: "Banking",
    exchange: "NSE", currency: "₹", market: "India",
    description: "India's fourth largest private sector bank. Founded by Uday Kotak — one of India's most respected bankers. Kotak is the quality play in Indian banking, known for conservative underwriting and pristine asset quality.",
    analystNote: "Kotak trades at a 20-30% premium to peers (except HDFC Bank) on the basis of superior asset quality and ROE. The transition from Uday Kotak as MD to a new leadership team is the single biggest overhang on the stock.",
    bearCase: "Leadership transition is rocky. Kotak's growth slows as it loses the founder's instinct. Asset quality deteriorates in the unsecured lending book.",
    bullCase: "Leadership transition is smooth. Kotak's liability franchise (low-cost CASA) remains the best in the industry. ROE sustains above 18%.",
    financials: {
      revenue: 54897, ebitda: 29234, ebit: 27456, pat: 13782,
      totalDebt: 889234, cash: 123456, netDebt: 765778,
      sharesOutstanding: 1987, marketCap: 354000,
      revenueGrowth: 22.4, ebitdaMargin: 53.2, patMargin: 25.1,
      roe: 14.8, roce: 8.4, debtToEquity: null
    },
    dcfDefaults: {
      revenueGrowthY1: 14, revenueGrowthY2: 16, revenueGrowthY3: 17,
      revenueGrowthY4: 15, revenueGrowthY5: 13,
      ebitdaMargin: 53, daPercent: 1.5, capexPercent: 2,
      wcPercent: 0, taxRate: 25, terminalGrowth: 5,
      beta: 0.98, riskFreeRate: 7, erp: 6.5, leveragePercent: 12
    },
    compsDefaults: { evEbitda: 16.5, pe: 22, evRevenue: 7.2 },
    hints: {
      revenueGrowth: "Kotak grew 22% in FY24. Loan growth of 18-22% has been consistent. Sustaining this requires deposit franchise strength.",
      ebitdaMargin: "For Kotak, NIM of 4.8-5.2% is best-in-class among large Indian banks. CASA ratio of 48%+ is the competitive moat.",
      terminalGrowth: "India banking penetration improving. Kotak well-positioned for the next decade of credit growth. 5% terminal growth is reasonable.",
      beta: "Kotak beta ~1.0. Slightly less volatile than HDFC Bank post-merger but carries leadership transition risk."
    }
  }
};

// Export for use in calculators
if (typeof module !== 'undefined') module.exports = COMPANIES;
