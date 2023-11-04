
import { Commute, DragIndicator, ElectricMeter, GroupOutlined, Groups2, Groups2Outlined, OilBarrel, Sell } from "@mui/icons-material"
import { store } from "../App"

export const getPrivilegeStatus = (privilege = '') => {
    const user = store?.getState()?.user?.userData || {}
    const privileges = user?.privileges || []
    
    if(typeof(privilege) === 'string') {
        return Boolean(privileges.find(({ name }) => privilege === name)) ? true : false
    } else {
        return Boolean( privilege.map((priv) => Boolean(privileges.find(({ name }) => priv === name))).reduce((prev, nex) => prev || nex)) ? true : false
    }
}

export const getUserFullName = () => {
    const user = store?.getState()?.user?.userData || {}
    return `${user?.last_name || ''} ${user?.first_name || ''} ${user?.middle_name || ''}`.trim();;
}

export const getUserInstCode = () => {
    const user = store?.getState()?.user?.userData || {}
    return `${user?.institution_code || ''}`;
}

export const isInternalUser = () => {
    const user = store?.getState()?.user?.userData || {}
    return Boolean(user?.institution_code === '00001');
}

export const getUserRole = () => {
    const user = store?.getState()?.user?.userData || {}
    return `${user?.role || ''}`;
}

String.prototype.capitalize = function(string = '') {
    const str = string.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2
}


export const getFullName = (first_name = '', last_name = '', middle_name = '') => {
    return String().capitalize(`${last_name || ''} ${first_name || ''} ${middle_name || '   '}`).trim();
}

export const getUserInstitutionName = () => {
    const user = store?.getState()?.user?.userData || {}
    return `${user?.institution_name}`
}

export const getColor = (color) => {
    //   'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning',
    switch (color) {
        case 'pending':
            return 'warning'
        case 'submitted':
            return 'info'
        case 'appraised':
            return 'info'
        case 'approved':
            return 'success'
        case 'active':
            return 'success'
        case 'inactive':
            return 'error'
        default:
            return 'default'
    }
}

export const makeid = (length = 5) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}


export const partners = [
    { img: "logo.png", name: 'Central Bank of Nigeria' },
    { img: "ncs.jpg", name: 'Nigeria Custom Service' },
    { img: "dmo.jpg", name: 'Debt Management Office' },
    { img: "nuprc.jpg", name: 'Nigerian Upstream Petroleum Regulatory Commission' },
    { img: "sec.png", name: 'Securities and Exchange Commission, Nigeria' },
    { img: "ogfza.png", name: 'Oil Gas Free Zones Authority of Nigeria' },
    { img: "nbs.jpg", name: 'National Bureau of Statistics' },
    { img: "nmdpra.jpg", name: 'Nigeria Midstream and Downstream Petroleum Regulatory Authority' },
    { img: "FIRS.jpg", name: 'Federal Inland Revenue Service' },
];

export const searchResults = [
    { 
        title: "Real Gross Domestic Product for Nigeria", dateRange: '2004 to 2023 (Oct 14)',
        providedBy: 'DMO', frequency: 'Annually',
        tags: ['Percent Change From Preceding Period', 'Annual', 'Not Seasonally Adjusted'],
        message: 'Observations for the current and future years are projections. The IMF provides these series as part of their Regional Economic Outlook (REO) reports. These reports discuss recent economic developments and prospects for countries in...'
    },
    { 
        title: "Number of Bank Branches for Nigeria", dateRange: '2004 to 2018 (Mar 23)',
        providedBy: 'BOF', frequency: 'Annually',
        tags: ['Number per 100,000 adults', 'Annual', 'Not Seasonally Adjusted'],
        message: 'Number of commercial bank branches per 100,000 adults. For each type of reporting institution calculated as:(number of institutions + number of branches)*100,000/adult population in the reporting country. (International Monetary Fund...'
    },
    { 
        title: "General Government Revenue for Nigeria", dateRange: '2004 to 2023 (Oct 14)',
        providedBy: 'CBN', frequency: 'Annually',
        tags: ['Percent of GDP', 'Annual', 'Not Seasonally Adjusted'],
        message: 'Observations for the current and future years are projections. The IMF provides these series as part of their Regional Economic Outlook (REO) reports. These reports discuss recent economic developments and prospects for countries in...'
    }
];

export const dataCatalogue = [
    {
        title: 'National Accounts',
        icon: <Groups2   />,
        subCatalogues: [
            'GDP',
            'Agric RGDP',
            'Industry RGDP',
            'Crude Petroleum & Natural Gas RGDP',
            'Solid Minerals RGDP',
            'Manufacturing RGDP',
            'Construction RGDP',
            'Trade RGDP',
            'Services RGDP',
            'Transport RGDP',
            'Information and Communication RGDP',
            'Utilities RGDP',
            'Accommodation and Food Services RGDP',
            'Finance & Insurance RGDP',
            'Real Estate RGDP',
            'Professional, Scientific & Technical Services RGDP',
            'Admin & Support Services RGDP',
            'Public Administration RGDP',
            'Education RGDP',
            'Human, Health & Social Services RGDP',
            'Arts, Entertainment & Recreation RGDP',
            'Other Services RGDP',
            'Non-Oil Real GDP',
        ]
    },
    {
        title: 'Prices',
        icon: <Sell />,
        subCatalogues: [
            'CPI',
            'All Items CPI',
            'All Items less Farm Produce. CPI',
            'All Items less Farm Produce. and Energy CPI',
            'Imported Food CPI',
            'Food CPI',
            'Food &  Non Alcoholic Bev. CPI',
            'Alcoholic Beverage. Tobacco and Kola CPI',
            'Clothing and Footwear CPI',
            'Housing Water, Electricity. Gas and Other  Fuel',
            'Furnishings & Household Equipment Maintenance.',
            'Health.',
            'Transport',
            'Communication',
            'Recreation & Culture.',
            'Education',
            'Restaurant &  Hotels',
            'Miscellaneous Goods & Services',
            'Urban CPI',
            'Rural CPI',
            { 
                title: 'Household data:', sub: [
                    'Household Income', 'Household Consumption Expenditure', 'Household Investment Expenditure',
                ] 
            },
            'Non-oil Export Funding to the Economy',
            'Credit to Industrial Sector'
        ]
    },
    {
        title: 'Demographic Indicators',
        icon: <DragIndicator />,
        subCatalogues: [
            { 
                title: 'Population Statistics', sub: [
                    'Age', 'Gender', 'Mortality rate', 'Birth rate'
                ] 
            }
        ]
    },
    {
        title: 'Crude Oil Statistics',
        icon: <OilBarrel />,
        subCatalogues: [
            { 
                title: 'Crude Oil & Gas Statistics', sub: [ 
                    'Crude Oil Production',
                    'Gas Production',
                    'Oil Consumption',
                    'Gas Consumption',
                    'Oil Prices',
                    'Gas Prices'
                ] 
            }
        ]
    },
    {
        title: 'Energy & Social Development',
        icon: <ElectricMeter />,
        subCatalogues: [
            'Manufacturing Capacity Utilization',
            'Electricity Generation and Consumption ',
            { 
                title: 'National Housing Fund data', sub: [ 
                    'Loan disbursement',
                    'Housing Units',
                ] 
            },
            { 
                title: 'Social Development Interventions', sub: [ 
                    'Number of interventions',
                    'Number of Beneficiaries',
                ]
            },
            'Renewal Energy',
            'Telecom Statistics ',
            'Solid Minerals Statistics '
        ]
    },
    {
        title: 'Transportation Statistics',
        icon: <Commute />,
        subCatalogues: [
            { 
                title: 'Air Transport Statistics', sub: [ 
                    'Passenger Traffic',
                    'Aircraft Movement',
                    'Cargo Movement ',
                    'Mail Movement',
                ] 
            },
            { 
                title: 'Water Transport Statistics', sub: [ 
                    'Ship Traffic',
                    'Cargo Throughput',
                ] 
            },
            { 
                title: 'Rail Statistics', sub: [ 
                    'Passenger carriage',
                    'Freight movement',
                ] 
            },
        ]
    },
    
]

export const searchCategories = [
    {  
        title: 'Monetary Statistics',
        subCategories: [
            { 
                title: 'Financial and Monetary Statistics', 
                subCategories: [
                    { 
                        title: "Broad Money",
                        frequency: 'Monthly',
                        reportSection: "ReportSectionb0020f98b0c142436e8a"
                    },
                    { 
                        title: "Net Foreign Asset",
                        frequency: 'Monthly',
                        reportSection: "ReportSectiona6d4bed917c5708ce391"
                    },
                    { 
                        title: "Claims of government and other sectors",
                        frequency: 'Monthly',
                        reportSection: "ReportSectiona968fcc67198e00e4107"
                    },
                ]
            },
            // { 
            //     title: 'Money Market Rates', 
            //     subCategories: [
            //         { 
            //             title: "Weighted Average Interest Rates of Deposit Money Banks	Monthly",
            //             frequency: 'Monthly',
            //             reportSection: "ReportSectionb0020f98b0c142436e8a"
            //         },
            //         { 
            //             title: "Money Market Rates (Monthly)",
            //             frequency: 'Monthly',
            //             reportSection: "ReportSectionb0020f98b0c142436e8a"
            //         },
            //     ]
            // },
        ],
        details: <>
            The monetary survey, which consolidates the analytical accounts of the monetary authority with the consolidated analytical balance sheet of the Deposit Money Banks (DMBs), is prepared by the Money and Banking Statistics Office, Statistics Department of the CBN. This is done using the IMF’s Monetary and Financial Statistics Manual (MFSM) 2000 and its compilation guide of 2008. The monetary authority analytical balance sheet is generated from the enterprise electronic solution – Oracle ERP. Since 2007, DMBs’ returns are received on the electronic Financial Analysis Surveillance System (e-FASS) platform for processing the consolidated balance sheet of the DMBs. Currently, the DMBs exist in three forms based on the nature of their banking license as a result of the termination of the universal banking system by end 2012 by the monetary authority. These are the commercial banks with the longest history of banking activities; the merchant banks which returned to Nigeria’s financial system in January 2013; and the non-interest banks with records of banking activities from March 2012.
            <br />
            <br />
            The office also generates credits granted by the DMBs to the economic sectors, and other report tables on the DMBs. These financial and monetary tables are captured in the Financial Statistics category of the CBN Statistics Database. Other data available in this category include discount houses’ statistics, payments system statistics, bankers’ clearing house statistics and capital market statistics. The Interest Rates category captures money market interest rates and weighted average interest rates of the DMBs.
        </>
    }, 
    {  
        title: 'External Sector Statistics',
        subCategories: [
            {
                title: "Balance of Payments",
                subCategories: [
                    { 
                        title: 'Current Account Balance',
                        frequency: 'Annual',
                        reportSection: "ReportSectionb0020f98b0c142436e8a"
                    },
                    { 
                        title: 'External Reserve Assets',
                        frequency: 'Annual',
                        reportSection: "ReportSection0ce18c26571455aa0b21"
                    },
                    { 
                        title: 'Financial Account Balance',
                        frequency: 'Annual',
                        reportSection: "ReportSectionb0020f98b0c142436e8a"
                    },
                ]

            }
        ],
        details: <>
            The Central Bank of Nigeria is responsible for the preparation of the Balance of Payments (BOP) and the International Investment Position (IIP) of the Nigerian economy. Commencing 2005, these accounts are compiled based on the IMF’s Balance of Payments Manual 5 (BPM5); the BOP and IIP tables feature in the External Sector Statistics category of the CBN Statistics Database. BOP is provided on annual and quarterly frequencies, with the quarterly starting from quarter one of 2010.
            <br />
            <br />
            Currently, the sources of data used for preparing these accounts include the enterprise e-FASS for services and capital importation, Cobalt for non-oil exports, Nigerian Integrated Customs Information System (NICIS) of the Nigerian Customs Service (NCS) for imports, Nigerian National Petroleum Corporation (NNPC) and Nigerian Liquefied Natural Gas (NLNG) for oil & gas exports and Petroleum Products Pricing Regulatory Agency (PPPRA) for oil imports. Other sources include Bank for International Settlement (BIS) for non-financial sector deposits and loans of Nigerians abroad, the Debt Management Office (DMO) for debt statistics, as well as the National Bureau of Statistics (NBS) for data reconciliations. Other external sector statistics which feature in the External Sector Statistics category are on exchange rate statistics, demand and supply of foreign exchange, external reserves, international trade summary, external debt stock, capital importation, cash flow, and crude petroleum statistics. Besides external debt stock data, which is provided on quarterly frequency, others are monthly data.
        </>
    },
    {  title: 'Real Sector Statistics', 
        subCategories: [
            { 
                title: 'Consumer Price Index', 
                subCategories: [
                    "Basket Composition of Composite Consumer Price Index (Base November 2009 = 100)",
                    "Urban Consumer Price Index (Nov 2009 = 100)",
                    "Rural Consumer Price Index (Nov 2009 = 100)",
                    "CPI & Inflation Rates (Base November 2009 = 100)"
                ]
            },
            { 
                title: 'GDP Statistics', 
                subCategories: [

                ]
            },
            { 
                title: 'Other Real Sector Statistics', 
                subCategories: [

                ]
            },
            { 
                title: 'Rainfall Statistics', 
                subCategories: [

                ]
            },
        ],
        details: <>
            On the national account statistics side, real sector tables in the CBN Statistics Database include Gross Domestic Production (GDP), by production as well as income and expenditure; implicit GDP deflator; and a drill down into GDP sub-components for crop production, wholesale &amp; retail trade and other manufacturing. Assigned category for GDP data is National Accounts, with quarterly history usually dating back to quarter one of 1981. 1990 is the base year for real GDP at constant basic prices. GDP statistics are measured in million Naira. National accounts statistics are produced by the National Bureau of Statistics (NBS), using the basis of the 1993 System of National Accounts (SNA). The GDP by production is the flagship national account depicting the current economic status of the Nigerian economy. It is an integration of the macroeconomic accounts, which presents the entire system of production in Nigeria on economic activity sector basis. Currently, 33 economic activity sectors are captured in the GDP by production table. These are divided into 5 main groups, namely
            <br />
            <ul>
                <li>Agriculture - with 4 activity sectors,</li>
                <li>Industry - with 7 activity sectors,</li>
                <li>Building &amp; Construction - as a stand-alone activity sector,</li>
                <li>Wholesale &amp; Retail Trade - as a stand-alone activity sector, and</li>
                <li>Services - with 20 activity sectors.</li>
            </ul>

            More information on Nigeria's national accounts statistics can be accessed at the NBS website: www.nigerianstat.gov.ng . 
            <br />
            The consumption expenditure data of the 2003/2004 Nigerian Living Standard Survey is the basis of Nigeria's Consumer Price Index (CPI); now revalued to November 2009 as the base from the hitherto May 2003 base period. Currently, it is computed as a weighted measure of average price changes collected through monthly survey on a selected market basket of 740 goods and services. Weights are attached to the 12 divisions in the All Items CPI market basket, according to significance. Construction of the 12 divisions is on the basis of Classification of Individual Consumption by Purpose (COICOP). CPIs are computed for the urban and rural classification sectors, before they are combined on the basis of allocated weights of 0.455 and 0.545, respectively to generate the national composite CPI. The weights are according to the country’s population ratios split along the urban and rural divide. Inflation is computed from the weighted monthly measures of CPI and reported by the NBS in three categories, namely Month-on Change, Year-on Change and 12-Month Average Change; all expressed in percentage. The CPIs available in the database include:
            <br />
            <br />            
            <ul>
                <li>The Composite CPIs for the country (All Items, All Items less Farm Produce and Food)</li>
                <li>Basket Composition for the All Items Composite CPI (This features the 12 divisions)</li>
                <li>Urban CPI for the country</li>
                <li>Rural CPI for the country</li>
            </ul>            
        </>
    }, 
    {  title: 'Govt. Finance Statistics', count: 22 },
    {  title: 'Gross Domestic Product', count: 40 },
]

export const fsrccMembers = [
    "Central Bank of Nigeria",
    "Securities and Exchange Commission",
    "Federal Ministry of Finance",
    "Corporate Affairs Commission",
    "Nigeria Deposit Insurance Corporate",
    "National Insurance Commission",
    "National Pension Commission (admitted pending amendment of the CBN Act)"

]

export const dataTypeOptions = [
    { code: 'numeric' },
    { code: 'date' },
    { code: 'int' },
    { code: 'string' },
]


export const dataTags = ['Annual', 'Nigeria', 'Realtime', 'DMO', 'Excel', 'FIRS', 'CBN', 'Economic', 'Statistical']