export const utilitiesPrompts = {
    category: 'utilities',
    introduction: "I am the CEDDERT AI Journalist. Access to power, water, and sanitation is a basic need. I am documenting failures in public utility services. What service are you having issues with?",

    initialOptions: [
        "Electricity / Power Supply",
        "Water Supply",
        "Waste Management / Sanitation",
        "Telecommunications"
    ],

    subCategories: [
        {
            id: 'electricity',
            label: 'Electricity/Power',
            description: 'Blackouts, transformer issues, estimated billing fraud'
        },
        {
            id: 'water',
            label: 'Water Supply',
            description: 'No running water, dirty water, broken boreholes'
        },
        {
            id: 'waste',
            label: 'Waste Management',
            description: 'Uncollected refuse, illegal dumping, environmental hazard'
        }
    ],

    questions: {
        electricity: [
            {
                id: 'provider',
                text: "Which distribution company (Disco) covers your area? (e.g., KEDCO, AEDC, EKEDC).",
                type: 'text'
            },
            {
                id: 'issue_type',
                text: "What is the specific issue?",
                options: [
                    "Total Blackout (Days/Weeks)",
                    "Transformer Fault",
                    "Crazy/Estimated Billing",
                    "Demand for money to fix pole/wire"
                ]
            },
            {
                id: 'duration',
                text: "How long has this been happening?",
                type: 'text'
            },
            {
                id: 'community_action',
                text: "Has the community reported this to the office? What was their response?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us follow up with the utility company, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        water: [
            {
                id: 'location',
                text: "Where is the affected area? (Street, Ward, LGA).",
                type: 'text'
            },
            {
                id: 'source',
                text: "What is the water source? (State Water Board, Community Borehole, Stream).",
                type: 'text'
            },
            {
                id: 'problem',
                text: "Describe the problem. (e.g., No water for months, Water is brown/smelly, Pipes broken).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to verify this report. Are you willing to share your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
