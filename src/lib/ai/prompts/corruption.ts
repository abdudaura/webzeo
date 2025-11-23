export const corruptionPrompts = {
    category: 'corruption',
    introduction: "I am the CEDDERT AI Journalist. Corruption undermines our society. I am here to document your report with strict confidentiality. We protect our sources. Are you ready to share details about an act of corruption?",

    initialOptions: [
        "Yes, I want to report",
        "I have documents to leak",
        "I am afraid of victimization"
    ],

    subCategories: [
        {
            id: 'bribery',
            label: 'Bribery & Extortion',
            description: 'Demanding money for services that should be free or to bypass laws'
        },
        {
            id: 'embezzlement',
            label: 'Embezzlement/Fraud',
            description: 'Theft of public funds or resources'
        },
        {
            id: 'nepotism',
            label: 'Nepotism/Favoritism',
            description: 'Hiring or awarding contracts based on relationships rather than merit'
        },
        {
            id: 'contract_fraud',
            label: 'Contract/Procurement Fraud',
            description: 'Inflated contracts, ghost projects, or kickbacks'
        },
        {
            id: 'vote_buying',
            label: 'Electoral Corruption',
            description: 'Buying votes or manipulating election results'
        }
    ],

    questions: {
        bribery: [
            {
                id: 'agency_involved',
                text: "Which government agency or department is involved? (e.g., Police, Immigration, Customs, FRSC, Ministry of Education)",
                type: 'text'
            },
            {
                id: 'bribe_details',
                text: "What was the money demanded for? (e.g., Bail, Passport issuance, Passing a checkpoint, File processing)",
                type: 'text'
            },
            {
                id: 'amount_method',
                text: "How much was demanded? How was the payment made or requested? (Cash, Bank Transfer, POS). If Bank Transfer, do you have the account details?",
                type: 'text'
            },
            {
                id: 'official_identity',
                text: "Can you identify the official? Name, Rank, Office Number, or Physical Description.",
                type: 'text'
            },
            {
                id: 'evidence_availability',
                text: "Do you have any proof? (Audio recording, Video, Bank receipt, Chat screenshots). We can receive these securely.",
                options: [
                    "Yes, I have digital evidence",
                    "I have a witness",
                    "No physical evidence",
                    "I can get evidence later"
                ]
            },
            {
                id: 'contact_info',
                text: "We may need to contact you to collect the evidence or verify details. Are you willing to provide a secure contact method (Email/Phone)?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        contract_fraud: [
            {
                id: 'project_details',
                text: "What is the name and location of the project? (e.g., Road construction in X LGA, School renovation in Y community)",
                type: 'text'
            },
            {
                id: 'contractor_details',
                text: "Do you know the name of the contractor or company handling the project?",
                type: 'text'
            },
            {
                id: 'status',
                text: "What is the current status? (Abandoned, Poor quality work, Not started but commissioned)",
                options: [
                    "Abandoned halfway",
                    "Never started (Ghost Project)",
                    "Completed with poor materials",
                    "Ongoing but very slow"
                ]
            },
            {
                id: 'contact_info',
                text: "Investigating contract fraud often requires follow-up. May we have your contact details to reach out if we need more information?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
