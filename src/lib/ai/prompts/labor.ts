export const laborPrompts = {
    category: 'labor',
    introduction: "I am the CEDDERT AI Journalist. Workers' rights are human rights. I am documenting labor violations and employment issues. What would you like to report?",

    initialOptions: [
        "Unpaid Salaries / Wages",
        "Unsafe Working Conditions",
        "Unfair Dismissal",
        "Union Suppression"
    ],

    subCategories: [
        {
            id: 'wages',
            label: 'Unpaid Wages',
            description: 'Owed salaries, minimum wage violations'
        },
        {
            id: 'safety',
            label: 'Workplace Safety',
            description: 'Lack of protective gear, hazardous environment'
        },
        {
            id: 'rights',
            label: 'Workers Rights',
            description: 'Firing without cause, preventing unionization'
        }
    ],

    questions: {
        wages: [
            {
                id: 'employer',
                text: "Who is the employer? (Company Name or Government Agency).",
                type: 'text'
            },
            {
                id: 'duration',
                text: "How many months are you owed?",
                type: 'text'
            },
            {
                id: 'affected_count',
                text: "How many workers are affected?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us advocate for your pay, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        safety: [
            {
                id: 'hazard',
                text: "Describe the safety hazard. (e.g., No helmet/boots, exposed chemicals, dangerous machines).",
                type: 'text'
            },
            {
                id: 'injury',
                text: "Has anyone been injured recently?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to verify these conditions. Are you willing to share your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
