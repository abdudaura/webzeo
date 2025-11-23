export const housingPrompts = {
    category: 'housing',
    introduction: "I am the CEDDERT AI Journalist. Everyone deserves safe shelter. I am documenting housing issues and displacement. What is your situation?",

    initialOptions: [
        "Forced Eviction / Demolition",
        "IDP Camp Conditions",
        "Land Grabbing",
        "Tenant Rights Violation"
    ],

    subCategories: [
        {
            id: 'eviction',
            label: 'Forced Eviction',
            description: 'Demolition of homes without notice or compensation'
        },
        {
            id: 'displacement',
            label: 'Displacement (IDPs)',
            description: 'Living conditions in refugee/IDP camps'
        },
        {
            id: 'land_grab',
            label: 'Land Grabbing',
            description: 'Illegal seizure of land by powerful individuals or government'
        }
    ],

    questions: {
        eviction: [
            {
                id: 'location',
                text: "Where is the property located?",
                type: 'text'
            },
            {
                id: 'notice',
                text: "Did you receive prior notice? Was there a court order?",
                options: [
                    "No notice given",
                    "Short notice (< 7 days)",
                    "Proper notice given",
                    "Court order served"
                ]
            },
            {
                id: 'perpetrator',
                text: "Who carried out the eviction? (e.g., State Govt, Police, Landlord with thugs).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us provide legal support or advocacy, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        displacement: [
            {
                id: 'camp_name',
                text: "Which IDP camp are you in?",
                type: 'text'
            },
            {
                id: 'needs',
                text: "What are the most urgent needs? (e.g., Food, Water, Medicine, Blankets).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help connect aid to your location, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
