const csvData = `
Company,Symbol,totalEsg,environmentScore,socialScore,governanceScore,ratingYear,ratingMonth
3M,MMM,37.35,17.22,13.59,6.54,2023,9
A. O. Smith,AOS,25.44,7.15,11.87,6.42,2023,9
Abbott Laboratories,ABT,24.83,2.27,14.24,8.33,2023,9
AbbVie,ABBV,29.93,2.38,17.19,10.36,2023,9
Accenture,ACN,9.84,0.82,4.61,4.41,2023,9
Adobe Inc.,ADBE,13.08,1.94,5.99,5.15,2023,9
AES Corporation,AES,26.69,13.26,8.18,5.26,2023,9
Aflac,AFL,18.33,0.3,9.14,8.9,2023,9
Agilent Technologies,A,13.64,1.12,6.42,6.1,2023,9
Air Products,APD,12.26,7.42,1.5,3.35,2023,9
Akamai Technologies,AKAM,17.01,3.0,7.09,6.93,2023,9
Albemarle Corporation,ALB,26.57,15.39,4.85,6.33,2023,9
Alexandria Real Estate Equities,ARE,13.89,3.91,3.66,6.32,2023,9
Allegion,ALLE,21.78,10.9,5.84,5.04,2023,9
Alliant Energy,LNT,21.36,8.54,6.55,6.28,2023,9
Allstate,ALL,22.04,1.03,10.13,10.88,2023,9
Alphabet Inc. (Class A),GOOGL,24.22,1.56,11.16,11.51,2023,9
Altria,MO,31.32,6.1,17.64,7.58,2023,9
Amazon,AMZN,30.61,6.0,15.39,9.22,2023,9
Ameren,AEE,27.17,12.85,9.07,5.25,2023,9
American Electric Power,AEP,26.14,12.66,8.1,5.38,2023,9
American Express,AXP,18.61,0.05,8.85,9.7,2023,9
American International Group,AIG,24.18,1.65,9.67,12.86,2023,9
American Tower,AMT,10.9,2.9,2.85,5.16,2023,9
American Water Works,AWK,21.62,9.04,7.58,5.0,2023,9
Ameriprise Financial,AMP,20.27,2.08,7.83,10.34,2023,9
Ametek,AME,23.9,8.65,8.51,6.73,2023,9
Amgen,AMGN,21.96,0.73,13.48,7.75,2023,9
Amphenol,APH,19.57,7.32,4.64,7.6,2023,9
Analog Devices,ADI,22.92,9.27,6.68,6.98,2023,9
Ansys,ANSS,15.89,3.51,7.32,5.07,2023,9
APA Corporation,APA,38.81,21.98,8.88,7.96,2021,3
Apple Inc.,AAPL,17.22,0.46,7.39,9.37,2023,9
Applied Materials,AMAT,12.74,4.49,2.97,5.28,2023,9
Aptiv,APTV,10.66,1.45,3.94,5.26,2023,9
Arch Capital Group,ACGL,22.46,1.47,10.1,10.89,2023,9
Archer Daniels Midland,ADM,31.79,16.64,10.15,5.01,2023,9
Arista Networks,ANET,16.67,0.4,8.88,7.39,2023,9
Arthur J. Gallagher & Co.,AJG,21.16,0.09,10.92,10.15,2023,9
Assurant,AIZ,24.11,1.63,10.82,11.66,2023,9
AT&T,T,23.91,3.26,13.94,6.72,2023,9
Atmos Energy,ATO,34.61,14.83,13.42,6.36,2023,9
Autodesk,ADSK,16.76,3.68,8.19,4.89,2023,9
Automatic Data Processing,ADP,13.82,2.8,5.54,5.49,2023,9
AutoZone,AZO,11.02,0.11,7.07,3.83,2023,9
AvalonBay Communities,AVB,9.76,2.96,2.05,4.75,2023,9
Avery Dennison,AVY,16.07,11.42,0.95,3.71,2023,9
Ball Corporation,BALL,12.1,7.6,0.76,3.74,2023,9
Bank of America,BAC,28.3,1.73,15.09,11.48,2023,9
BNY Mellon,BK,20.93,1.13,9.86,9.94,2023,9
"Bath & Body Works, Inc.",BBWI,28.3,12.17,10.25,5.88,2023,9
Baxter International,BAX,23.57,2.83,13.6,7.14,2023,9
Becton Dickinson,BDX,23.82,3.04,13.65,7.13,2023,9
Best Buy,BBY,15.89,2.4,9.09,4.4,2023,9
Biogen,BIIB,22.24,0.42,14.46,7.37,2023,9
BlackRock,BLK,18.25,0.9,7.36,9.99,2023,9
Blackstone Inc.,BX,23.39,2.52,9.57,11.29,2023,9
Boeing,BA,39.6,8.84,22.48,8.29,2023,9
Booking Holdings,BKNG,19.23,0.98,10.13,8.13,2023,9
BorgWarner,BWA,12.59,2.67,4.21,5.71,2023,9
Boston Scientific,BSX,23.11,2.36,11.85,8.89,2023,9
Bristol Myers Squibb,BMY,22.74,1.31,14.37,7.07,2023,9
Broadcom,AVGO,19.98,7.34,6.0,6.64,2023,9
Broadridge Financial Solutions,BR,16.63,4.19,7.5,4.94,2023,9
Brown & Brown,BRO,20.48,0.13,9.77,10.58,2023,9
Bunge Global,BG,32.92,14.39,13.26,5.27,2023,9
"BXP, Inc.",BXP,12.51,2.54,4.52,5.45,2023,9
C.H. Robinson,CHRW,19.32,4.73,9.29,5.3,2023,9
Cadence Design Systems,CDNS,12.02,2.33,4.88,4.81,2023,9
Camden Property Trust,CPT,16.09,4.0,3.93,8.17,2023,9
Campbell Soup Company,CPB,23.5,10.87,8.15,4.47,2023,9
Capital One,COF,22.5,0.13,12.28,10.09,2023,9
Cardinal Health,CAH,14.86,1.17,7.33,6.36,2023,9
CarMax,KMX,12.1,0.09,8.02,3.99,2023,9
Carnival,CCL,24.49,9.4,10.13,4.96,2023,9
Caterpillar Inc.,CAT,36.17,10.43,17.69,8.06,2023,9
Cboe Global Markets,CBOE,20.95,2.73,7.58,10.64,2023,9
CBRE Group,CBRE,7.98,1.46,1.89,4.64,2023,9
CDW,CDW,9.21,2.48,3.21,3.52,2023,9
Celanese,CE,26.13,14.7,5.86,5.57,2023,9
Cencora,COR,12.75,1.57,5.53,5.65,2023,9
Centene Corporation,CNC,19.89,0.09,13.28,6.51,2023,9
CenterPoint Energy,CNP,28.73,12.92,10.67,5.14,2023,9
CF Industries,CF,29.33,16.19,7.73,5.42,2023,9
Charles Schwab Corporation,SCHW,23.28,2.39,8.95,11.94,2023,9
Charter Communications,CHTR,24.72,6.05,10.72,7.95,2023,9
Chevron Corporation,CVX,36.6,17.01,9.18,10.42,2023,9
Chipotle Mexican Grill,CMG,20.66,6.79,9.59,4.27,2023,9
Chubb Limited,CB,23.6,1.46,11.54,10.61,2023,9
Church & Dwight,CHD,19.86,6.89,6.31,6.66,2023,9
Cigna,CI,11.65,0.02,5.99,5.65,2021,3
Cincinnati Financial,CINF,25.61,1.76,10.97,12.88,2023,9
Cintas,CTAS,18.08,3.03,9.17,5.88,2023,9
Cisco,CSCO,13.87,0.45,6.9,6.51,2023,9
Citigroup,C,29.24,1.8,13.75,13.69,2023,9
Citizens Financial Group,CFG,23.54,1.96,10.15,11.43,2023,9
Clorox,CLX,21.63,7.72,8.59,5.31,2023,9
CME Group,CME,17.8,2.13,6.48,9.19,2023,9
CMS Energy,CMS,21.7,9.61,6.84,5.24,2023,9
Coca-Cola Company (The),KO,21.63,7.23,9.54,4.86,2023,9
Cognizant,CTSH,14.66,1.11,7.64,5.91,2023,9
Colgate-Palmolive,CL,26.17,8.32,11.31,6.54,2023,9
Comcast,CMCSA,23.09,3.96,10.9,8.23,2023,9
Conagra Brands,CAG,30.83,10.71,15.42,4.7,2023,9
ConocoPhillips,COP,33.91,17.57,8.07,8.28,2023,9
Consolidated Edison,ED,23.81,6.86,10.86,6.08,2023,9
Constellation Brands,STZ,24.66,9.45,10.04,5.18,2023,9
Cooper Companies (The),COO,17.47,2.7,8.8,5.96,2023,9
Copart,CPRT,16.03,1.48,8.96,5.59,2023,9
Corning Inc.,GLW,16.48,5.53,4.81,6.13,2023,9
CoStar Group,CSGP,21.91,4.86,9.34,7.71,2023,9
Costco,COST,23.29,6.52,11.22,5.55,2023,9
Coterra,CTRA,36.07,20.26,8.34,7.47,2023,9
Crown Castle,CCI,10.1,4.08,1.67,4.35,2023,9
CSX Corporation,CSX,21.91,7.04,10.03,4.84,2023,9
Cummins,CMI,19.3,5.62,7.74,5.94,2023,9
CVS Health,CVS,21.97,0.03,15.76,6.17,2023,9
Danaher Corporation,DHR,11.86,1.35,5.16,5.35,2023,9
Darden Restaurants,DRI,27.47,7.92,15.0,4.55,2023,9
DaVita,DVA,22.56,0.07,14.08,8.42,2023,9
Deere & Company,DE,19.95,2.67,10.79,6.49,2023,9
Dell Technologies,DELL,16.66,0.71,8.41,7.54,2023,9
Delta Air Lines,DAL,30.26,9.88,14.57,5.8,2023,9
Devon Energy,DVN,33.76,17.67,8.56,7.53,2023,9
Dexcom,DXCM,24.05,5.35,10.62,8.08,2023,9
Digital Realty,DLR,12.61,2.8,2.81,7.0,2023,9
Discover Financial,DFS,22.5,0.13,11.87,10.51,2023,9
Dollar General,DG,17.59,3.5,8.56,5.53,2023,9
Dollar Tree,DLTR,20.08,3.29,12.78,4.02,2023,9
Dominion Energy,D,26.4,11.94,8.84,5.62,2023,9
Domino's,DPZ,29.19,10.65,12.2,6.34,2023,9
Dover Corporation,DOV,25.88,7.98,12.48,5.42,2023,9
D. R. Horton,DHI,21.03,8.71,6.66,5.66,2023,9
DTE Energy,DTE,29.8,15.03,10.04,4.73,2023,9
Duke Energy,DUK,27.01,11.52,10.68,4.81,2023,9
DuPont,DD,28.6,14.66,7.99,5.94,2023,9
Eastman Chemical Company,EMN,25.27,12.84,5.85,6.59,2023,9
Eaton Corporation,ETN,17.94,5.46,6.76,5.72,2023,9
eBay,EBAY,17.6,2.74,7.65,7.21,2023,9
Ecolab,ECL,19.86,8.54,6.05,5.27,2023,9
Edison International,EIX,27.51,10.98,11.42,5.11,2023,9
Edwards Lifesciences,EW,18.57,2.86,8.08,7.63,2023,9
Electronic Arts,EA,13.29,0.13,8.42,4.73,2023,9
Elevance Health,ELV,11.38,0.07,6.03,5.29,2023,9
Emerson Electric,EMR,28.36,8.77,13.05,6.55,2023,9
Entergy,ETR,26.67,14.04,7.3,5.32,2023,9
EOG Resources,EOG,34.16,20.16,6.67,7.33,2023,9
EQT Corporation,EQT,35.69,17.66,10.08,7.95,2023,9
Equifax,EFX,23.16,0.08,16.3,6.78,2023,9
Equinix,EQIX,13.88,3.44,5.31,5.13,2023,9
Equity Residential,EQR,11.91,2.98,2.87,6.05,2023,9
Erie Indemnity,ERIE,27.56,2.6,11.44,13.52,2023,9
Essex Property Trust,ESS,12.44,3.46,2.84,6.13,2023,9
Estée Lauder Companies (The),EL,25.48,6.95,11.05,7.48,2023,9
Everest Group,EG,17.96,1.39,6.67,9.91,2023,9
Eversource Energy,ES,18.62,4.67,8.56,5.39,2023,9
Exelon,EXC,22.86,7.38,9.05,6.44,2023,9
Expedia Group,EXPE,27.65,4.27,13.31,10.08,2023,9
Expeditors International,EXPD,16.56,4.15,7.56,4.84,2023,9
Extra Space Storage,EXR,15.2,4.23,3.72,7.26,2023,9
ExxonMobil,XOM,41.6,23.11,10.01,8.48,2023,9
"F5, Inc.",FFIV,17.15,4.14,7.61,5.4,2023,9
FactSet,FDS,18.37,4.32,8.75,5.3,2023,9
Fastenal,FAST,24.67,9.28,8.29,7.1,2023,9
Federal Realty,FRT,12.42,2.27,4.34,5.82,2021,9
FedEx,FDX,19.68,5.66,8.42,5.61,2023,9
Fidelity National Information Services,FIS,17.48,4.09,8.17,5.21,2023,9
Fifth Third Bank,FITB,16.84,1.19,8.15,7.5,2023,9
FirstEnergy,FE,25.56,10.77,8.99,5.79,2023,9
Fiserv,FI,19.64,4.12,8.74,6.77,2023,9
FMC Corporation,FMC,30.73,14.35,8.92,7.46,2023,9
Ford Motor Company,F,22.35,7.43,6.41,8.51,2023,9
Fortinet,FTNT,18.9,2.5,10.03,6.37,2023,9
Fortive,FTV,34.76,16.09,13.97,4.7,2023,9
Franklin Templeton,BEN,18.3,1.12,9.88,7.3,2023,9
Freeport-McMoRan,FCX,31.61,15.26,9.96,6.4,2023,9
Garmin,GRMN,20.66,4.78,11.63,4.25,2023,9
Gartner,IT,18.93,0.11,13.17,5.64,2023,9
GE Aerospace,GE,40.55,14.24,15.41,10.9,2023,9
Gen Digital,GEN,16.94,3.35,8.2,5.39,2023,9
General Dynamics,GD,35.19,9.37,18.9,6.93,2023,9
General Mills,GIS,21.13,8.32,8.72,4.09,2023,9
General Motors,GM,28.5,9.83,11.48,7.19,2023,9
Genuine Parts Company,GPC,13.66,4.67,5.18,3.8,2023,9
Gilead Sciences,GILD,22.97,1.0,14.34,7.62,2023,9
Global Payments,GPN,20.87,3.65,10.68,6.54,2023,9
Globe Life,GL,20.35,1.58,8.28,10.49,2023,9
Goldman Sachs,GS,25.45,0.88,12.76,11.82,2023,9
Halliburton,HAL,25.63,9.79,8.9,6.94,2023,9
Hartford (The),HIG,16.63,1.81,7.24,7.58,2023,9
Hasbro,HAS,7.08,0.04,2.88,4.16,2023,9
HCA Healthcare,HCA,28.84,3.9,17.72,7.22,2023,9
Henry Schein,HSIC,13.95,2.0,5.67,6.28,2023,9
Hershey Company (The),HSY,26.05,10.52,10.4,5.14,2023,9
Hess Corporation,HES,33.11,18.93,7.2,6.98,2023,9
Hewlett Packard Enterprise,HPE,10.69,0.95,4.14,5.6,2023,9
Hilton Worldwide,HLT,17.56,6.11,7.0,4.45,2023,9
Hologic,HOLX,25.0,4.57,12.08,8.35,2023,9
Home Depot (The),HD,12.64,3.32,5.56,3.76,2023,9
Honeywell,HON,28.62,10.99,10.59,7.04,2023,9
Hormel Foods,HRL,30.0,13.31,10.68,6.0,2023,9
Host Hotels & Resorts,HST,13.35,3.25,4.58,5.52,2023,9
HP Inc.,HPQ,11.26,0.11,5.05,6.09,2023,9
Hubbell Incorporated,HUBB,19.6,5.6,9.09,4.91,2023,9
Humana,HUM,22.47,0.01,16.71,5.74,2023,9
Huntington Bancshares,HBAN,21.84,1.97,11.19,8.68,2023,9
IBM,IBM,14.14,1.78,6.22,6.14,2023,9
IDEX Corporation,IEX,29.34,10.28,13.72,5.34,2023,9
Idexx Laboratories,IDXX,18.66,2.62,7.1,8.94,2023,9
Illinois Tool Works,ITW,25.29,7.0,11.78,6.52,2023,9
Incyte,INCY,24.76,1.06,16.3,7.41,2023,9
Intel,INTC,18.87,4.93,7.32,6.62,2023,9
Intercontinental Exchange,ICE,19.78,1.7,9.25,8.82,2023,9
International Flavors & Fragrances,IFF,22.69,10.49,5.57,6.63,2023,9
International Paper,IP,24.47,15.15,4.5,4.81,2023,9
Interpublic Group of Companies (The),IPG,10.32,0.04,5.0,5.28,2023,9
Intuit,INTU,16.41,0.97,10.7,4.73,2023,9
Intuitive Surgical,ISRG,21.07,3.65,9.58,7.84,2023,9
Invesco,IVZ,22.79,0.73,11.02,11.04,2023,9
IQVIA,IQV,19.14,1.3,10.62,7.22,2023,9
Iron Mountain,IRM,14.5,5.0,3.74,5.76,2023,9
J.B. Hunt,JBHT,14.82,3.28,6.55,5.0,2023,9
Jack Henry & Associates,JKHY,18.66,4.32,8.66,5.68,2023,9
Jacobs Solutions,J,22.37,5.29,11.46,5.62,2022,8
Johnson & Johnson,JNJ,23.98,0.92,15.02,8.03,2023,9
Johnson Controls,JCI,14.43,4.49,4.55,5.39,2023,9
JPMorgan Chase,JPM,29.26,1.11,16.45,11.7,2023,9
Juniper Networks,JNPR,14.82,1.82,7.2,5.8,2023,9
Kellanova,K,28.37,10.64,13.35,4.38,2023,9
KeyBank,KEY,21.42,1.59,9.16,10.66,2023,9
Keysight,KEYS,7.6,1.2,1.75,4.65,2023,9
Kimberly-Clark,KMB,28.48,10.43,10.4,7.64,2023,9
Kimco Realty,KIM,10.9,2.35,2.58,5.97,2023,9
Kinder Morgan,KMI,18.96,8.28,7.19,3.49,2023,9
KLA Corporation,KLAC,17.19,7.41,5.13,4.64,2023,9
Kraft Heinz,KHC,33.7,13.49,14.05,6.17,2023,9
Kroger,KR,21.27,6.55,9.12,5.6,2023,9
LabCorp,LH,19.74,0.43,12.71,6.6,2023,9
Lam Research,LRCX,13.61,4.5,3.97,5.14,2023,9
Las Vegas Sands,LVS,18.69,2.3,7.72,8.67,2023,9
Leidos,LDOS,17.65,3.37,9.03,5.25,2023,9
Lennar,LEN,25.36,11.26,8.55,5.55,2023,9
Lilly (Eli),LLY,24.28,2.54,12.6,9.14,2023,9
LKQ Corporation,LKQ,11.07,3.8,4.0,3.27,2023,9
Lockheed Martin,LMT,30.18,7.96,15.11,7.11,2023,9
Loews Corporation,L,16.38,0.59,4.25,11.53,2023,9
Lowe's,LOW,11.78,3.31,5.31,3.17,2023,9
Lululemon Athletica,LULU,16.94,1.58,9.86,5.5,2023,9
LyondellBasell,LYB,20.69,13.5,2.1,5.09,2023,9
M&T Bank,MTB,26.53,2.63,10.32,13.58,2023,9
Marathon Oil,MRO,37.72,21.07,9.05,7.6,2023,9
Marathon Petroleum,MPC,30.49,17.09,8.15,5.25,2023,9
Marriott International,MAR,21.43,8.55,9.16,3.72,2023,9
Marsh McLennan,MMC,21.07,0.09,11.31,9.67,2023,9
Martin Marietta Materials,MLM,30.12,16.68,4.77,8.67,2023,9
Masco,MAS,22.19,9.73,5.64,6.82,2023,9
Mastercard,MA,17.07,2.15,6.66,8.27,2023,9
McCormick & Company,MKC,26.07,9.63,11.09,5.35,2023,9
McDonald's,MCD,25.95,7.56,12.56,5.84,2023,9
McKesson Corporation,MCK,15.23,1.65,7.28,6.29,2023,9
Medtronic,MDT,22.77,1.78,13.43,7.57,2023,9
Merck & Co.,MRK,21.39,1.85,10.64,8.9,2023,9
Meta Platforms,META,34.08,2.71,21.09,10.29,2023,9
MetLife,MET,16.43,0.69,6.96,8.77,2023,9
Mettler Toledo,MTD,13.1,1.0,7.41,4.69,2023,9
MGM Resorts,MGM,24.76,1.3,12.97,10.49,2023,9
Microchip Technology,MCHP,31.82,15.25,9.16,7.4,2023,9
Micron Technology,MU,18.18,7.23,5.46,5.49,2023,9
Microsoft,MSFT,15.06,1.46,7.53,6.07,2023,9
Mid-America Apartment Communities,MAA,13.09,3.9,2.95,6.25,2023,9
Mohawk Industries,MHK,14.14,5.75,4.19,4.19,2023,9
Molson Coors Beverage Company,TAP,21.37,7.25,8.61,5.51,2023,9
Mondelez International,MDLZ,22.02,7.23,9.39,5.41,2023,9
Monster Beverage,MNST,29.23,12.07,12.04,5.11,2023,9
Moody's Corporation,MCO,15.82,1.61,6.09,8.12,2023,9
Morgan Stanley,MS,24.58,1.14,12.91,10.53,2023,9
Mosaic Company (The),MOS,33.52,13.87,11.05,8.6,2023,9
Motorola Solutions,MSI,13.13,2.26,5.07,5.8,2023,9
MSCI,MSCI,16.27,1.57,6.97,7.74,2023,9
"Nasdaq, Inc.",NDAQ,13.09,0.03,5.63,7.43,2023,9
NetApp,NTAP,15.43,2.19,7.74,5.5,2023,9
Netflix,NFLX,16.41,0.09,7.31,9.01,2023,9
Newmont,NEM,20.52,7.05,8.24,5.22,2023,9
News Corp (Class A),NWSA,11.47,0.02,4.74,6.72,2023,9
NextEra Energy,NEE,23.27,9.38,8.3,5.6,2023,9
"Nike, Inc.",NKE,19.61,2.98,9.99,6.65,2023,9
NiSource,NI,26.02,11.98,9.17,4.87,2023,9
Nordson Corporation,NDSN,24.89,8.18,11.61,5.1,2023,9
Norfolk Southern Railway,NSC,23.92,8.02,10.48,5.42,2023,9
Northern Trust,NTRS,23.86,1.87,11.83,10.17,2023,9
Northrop Grumman,NOC,27.53,7.79,14.37,5.37,2023,9
Norwegian Cruise Line Holdings,NCLH,25.94,8.97,10.9,6.08,2023,9
NRG Energy,NRG,31.97,16.8,9.5,5.69,2023,9
Nucor,NUE,32.82,9.3,14.72,8.8,2023,9
Nvidia,NVDA,13.59,2.3,4.95,6.34,2023,9
"NVR, Inc.",NVR,20.27,7.21,7.82,5.24,2023,9
NXP Semiconductors,NXPI,19.84,8.58,5.45,5.81,2023,9
O'Reilly Auto Parts,ORLY,12.05,0.14,8.15,3.76,2023,9
Occidental Petroleum,OXY,41.66,24.98,9.7,6.97,2023,9
Omnicom Group,OMC,16.28,0.09,9.33,6.86,2023,9
ON Semiconductor,ON,22.43,11.79,5.69,4.95,2023,9
ONEOK,OKE,25.15,10.83,11.01,3.31,2023,9
Oracle Corporation,ORCL,13.89,0.5,7.79,5.6,2023,9
Paccar,PCAR,27.64,8.36,10.99,8.3,2023,9
Packaging Corporation of America,PKG,18.64,13.96,1.06,3.62,2023,9
Palo Alto Networks,PANW,13.92,0.7,7.62,5.6,2023,9
Paramount Global,PARA,14.99,0.11,7.51,7.37,2023,9
Parker Hannifin,PH,29.48,9.46,13.78,6.24,2023,9
Paychex,PAYX,16.73,3.21,7.16,6.36,2023,9
PayPal,PYPL,17.77,2.83,9.19,5.75,2023,9
Pentair,PNR,22.06,5.97,10.01,6.07,2023,9
PepsiCo,PEP,22.06,7.27,9.63,5.16,2023,9
Pfizer,PFE,24.59,2.12,12.85,9.63,2023,9
PG&E Corporation,PCG,30.38,9.58,15.38,5.42,2023,9
Philip Morris International,PM,28.45,3.42,13.54,11.49,2023,9
Phillips 66,PSX,35.43,20.76,8.82,5.85,2023,9
Pinnacle West,PNW,30.79,14.72,10.23,5.84,2023,9
PNC Financial Services,PNC,26.07,1.94,13.29,10.83,2023,9
PPG Industries,PPG,25.21,10.98,7.7,6.54,2023,9
PPL Corporation,PPL,31.32,17.08,8.9,5.33,2023,9
Principal Financial Group,PFG,14.19,0.81,5.82,7.56,2023,9
Procter & Gamble,PG,28.57,9.6,12.23,6.74,2023,9
Progressive Corporation,PGR,20.02,1.45,8.5,10.07,2023,9
Prologis,PLD,10.27,2.74,2.5,5.03,2023,9
Prudential Financial,PRU,19.91,0.64,10.01,9.25,2023,9
Public Service Enterprise Group,PEG,27.23,12.48,9.28,5.46,2023,9
PTC Inc.,PTC,18.9,4.92,8.61,5.37,2023,9
Public Storage,PSA,13.05,4.74,2.61,5.7,2023,9
PulteGroup,PHM,21.42,9.19,7.31,4.92,2023,9
Qorvo,QRVO,28.52,12.32,8.5,7.7,2023,9
Quanta Services,PWR,36.91,12.15,15.73,9.04,2023,9
Qualcomm,QCOM,15.39,5.34,4.5,5.55,2023,9
Quest Diagnostics,DGX,21.21,0.13,13.07,8.0,2023,9
Ralph Lauren Corporation,RL,14.62,1.22,7.79,5.62,2023,9
Raymond James Financial,RJF,27.02,2.35,11.23,13.44,2023,9
Realty Income,O,15.47,4.41,5.32,5.74,2023,9
Regency Centers,REG,11.71,3.72,3.21,4.77,2023,9
Regeneron,REGN,18.04,0.34,10.96,6.74,2023,9
Regions Financial Corporation,RF,16.85,1.82,6.67,8.36,2023,9
Republic Services,RSG,20.91,11.19,6.02,3.7,2023,9
ResMed,RMD,26.39,3.54,12.41,10.43,2023,9
Revvity,RVTY,16.7,0.75,10.1,5.85,2023,9
Rockwell Automation,ROK,17.67,5.37,6.64,5.65,2023,9
"Rollins, Inc.",ROL,19.31,1.76,10.63,6.92,2023,9
Roper Technologies,ROP,20.44,4.67,9.67,6.09,2023,9
Ross Stores,ROST,18.23,1.79,10.76,5.68,2023,9
Royal Caribbean Group,RCL,20.71,8.15,7.68,4.88,2023,9
S&P Global,SPGI,13.04,0.0,6.22,6.82,2023,9
Salesforce,CRM,14.88,2.01,7.48,5.39,2023,9
SBA Communications,SBAC,11.58,3.11,3.23,5.23,2023,9
Schlumberger,SLB,20.28,8.08,6.29,5.91,2023,9
Seagate Technology,STX,10.66,1.59,3.8,5.26,2021,5
Sempra,SRE,23.59,10.86,7.85,4.88,2023,9
ServiceNow,NOW,16.59,3.99,6.04,6.57,2023,9
Sherwin-Williams,SHW,29.35,14.31,9.2,5.85,2023,9
Simon Property Group,SPG,13.98,3.83,3.99,6.15,2023,9
Skyworks Solutions,SWKS,27.95,11.82,8.93,7.21,2023,9
J.M. Smucker Company (The),SJM,30.45,12.89,11.99,5.57,2023,9
Snap-on,SNA,30.53,9.0,13.91,7.62,2023,9
Southern Company,SO,32.98,14.68,11.0,7.3,2023,9
Southwest Airlines,LUV,30.67,11.04,13.69,5.95,2023,9
Stanley Black & Decker,SWK,25.31,5.0,12.51,7.8,2023,9
Starbucks,SBUX,24.67,5.79,14.62,4.27,2023,9
State Street Corporation,STT,24.08,1.61,12.95,9.52,2023,9
Steel Dynamics,STLD,32.98,10.56,14.36,8.06,2023,9
Stryker Corporation,SYK,28.26,3.99,13.24,11.03,2023,9
Synchrony Financial,SYF,17.28,0.13,9.89,7.25,2023,9
Synopsys,SNPS,14.42,3.34,6.93,4.16,2023,9
Sysco,SYY,15.95,5.42,6.05,4.47,2023,9
T-Mobile US,TMUS,24.63,4.19,13.38,7.07,2023,9
T. Rowe Price,TROW,16.91,2.39,8.95,5.57,2023,9
"Tapestry, Inc.",TPR,14.84,1.1,8.57,5.18,2023,9
Targa Resources,TRGP,33.21,14.23,14.75,4.24,2023,9
Target Corporation,TGT,14.35,1.93,7.55,4.86,2023,9
TE Connectivity,TEL,14.8,5.81,4.44,4.55,2023,9
Teleflex,TFX,29.63,4.83,16.12,8.67,2023,9
Teradyne,TER,17.03,7.11,4.89,5.03,2023,9
"Tesla, Inc.",TSLA,25.23,3.31,14.08,7.85,2023,9
Texas Instruments,TXN,20.65,7.76,5.96,6.93,2023,9
Textron,TXT,33.61,10.92,16.08,6.61,2023,9
Thermo Fisher Scientific,TMO,12.81,1.44,4.89,6.47,2023,9
TJX Companies,TJX,14.38,1.89,7.65,4.84,2023,9
Tractor Supply,TSCO,16.1,3.43,8.19,4.47,2023,9
Trane Technologies,TT,15.2,4.39,5.71,5.11,2023,9
TransDigm Group,TDG,38.72,12.01,17.71,9.0,2023,9
Travelers Companies (The),TRV,20.33,1.01,9.3,10.02,2023,9
Trimble Inc.,TRMB,12.41,3.76,3.43,5.23,2023,9
Tyson Foods,TSN,35.92,14.02,12.39,9.51,2023,9
U.S. Bank,USB,30.26,1.75,15.5,13.01,2023,9
"UDR, Inc.",UDR,13.92,3.72,3.91,6.29,2023,9
Ulta Beauty,ULTA,15.61,4.08,7.25,4.28,2023,9
Union Pacific Corporation,UNP,23.45,7.3,10.55,5.6,2023,9
United Airlines Holdings,UAL,28.61,10.78,12.79,5.04,2023,9
United Parcel Service,UPS,18.57,4.17,8.91,5.49,2023,9
United Rentals,URI,16.86,5.32,6.13,5.42,2023,9
UnitedHealth Group,UNH,15.3,0.03,9.67,5.59,2023,9
Universal Health Services,UHS,32.98,3.7,20.68,8.6,2023,9
Valero Energy,VLO,32.56,20.15,7.42,4.99,2023,9
Ventas,VTR,12.86,3.42,3.89,5.56,2023,9
Verisign,VRSN,21.3,4.74,10.77,5.79,2023,9
Verisk,VRSK,17.53,0.05,12.49,4.98,2023,9
Verizon,VZ,18.73,3.74,9.59,5.39,2023,9
Vertex Pharmaceuticals,VRTX,22.72,0.75,15.4,6.57,2023,9
Visa Inc.,V,16.68,1.81,8.22,6.65,2023,9
Vulcan Materials Company,VMC,29.28,13.42,6.81,9.05,2023,9
W. R. Berkley Corporation,WRB,21.83,1.97,7.95,11.91,2023,9
W. W. Grainger,GWW,16.0,4.54,5.55,5.91,2023,9
Wabtec,WAB,23.33,5.36,11.99,5.98,2023,9
Walgreens Boots Alliance,WBA,16.25,1.79,9.29,5.18,2023,9
Walmart,WMT,25.26,5.86,12.36,7.05,2023,9
Walt Disney Company (The),DIS,15.7,0.04,8.96,6.71,2023,9
Waste Management,WM,16.65,8.09,5.24,3.32,2023,9
Waters Corporation,WAT,14.62,1.35,8.19,5.09,2023,9
WEC Energy Group,WEC,27.46,13.36,8.96,5.13,2023,9
Wells Fargo,WFC,36.24,2.05,14.75,19.43,2023,9
Welltower,WELL,13.23,4.24,3.49,5.5,2023,9
Western Digital,WDC,11.43,1.48,3.91,6.05,2023,9
Weyerhaeuser,WY,16.68,9.05,4.18,3.45,2023,9
Williams Companies,WMB,21.82,8.72,10.13,2.96,2023,9
Willis Towers Watson,WTW,18.66,0.07,7.83,10.76,2023,9
Wynn Resorts,WYNN,25.7,3.37,11.75,10.58,2023,9
Xcel Energy,XEL,26.45,12.7,9.26,4.49,2023,9
Xylem Inc.,XYL,18.13,4.27,8.66,5.19,2023,9
Yum! Brands,YUM,20.1,4.53,11.45,4.12,2023,9
Zimmer Biomet,ZBH,26.02,3.6,14.52,7.89,2023,9
Zoetis,ZTS,18.77,3.24,6.81,8.72,2023,9
`;

// Parse CSV data
const companies = csvData.trim().split('\n').slice(1).map(row => {
    const [Company, Symbol, totalEsg, environmentScore, socialScore, governanceScore] = row.split(',');
    return { Company, Symbol, totalEsg, environmentScore, socialScore, governanceScore };
});

// Populate dropdown
const companyList = document.getElementById('companyList');
companies.forEach(company => {
    const option = document.createElement('option');
    option.value = company.Symbol;
    option.textContent = `${company.Company} (${company.Symbol})`;
    companyList.appendChild(option);
});

// Update ESG scores
function updateScores(company) {
    document.getElementById('totalEsg').textContent = company.totalEsg;
    document.getElementById('environmentScore').textContent = company.environmentScore;
    document.getElementById('socialScore').textContent = company.socialScore;
    document.getElementById('governanceScore').textContent = company.governanceScore;
}

// Event listener for search input
const companySearch = document.getElementById('companySearch');
companySearch.addEventListener('input', (event) => {
    const selectedCompany = companies.find(company => company.Symbol === event.target.value);
    if (selectedCompany) {
        updateScores(selectedCompany);
    }
});