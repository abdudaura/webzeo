export const agriculturePrompts = {
    category: 'agriculture',
    introduction: "I am the CEDDERT AI Journalist. Agriculture is the backbone of our economy. I am documenting challenges facing farmers and food security. Please tell me about the issue.",

    initialOptions: [
        "Reporting Farmer-Herder Crisis",
        "Reporting Lack of Fertilizer/Inputs",
        "Reporting Flooding/Drought",
        "Reporting Pest Infestation"
    ],

    subCategories: [
        {
            id: 'conflict',
            label: 'Farmer-Herder Conflict',
            description: 'Destruction of crops by cattle, violence on farms'
        },
        {
            id: 'inputs',
            label: 'Access to Inputs',
            description: 'Unavailable or expensive fertilizer, seeds, or chemicals'
        },
        {
            id: 'climate',
            label: 'Climate Impact',
            description: 'Floods washing away farms, severe drought'
        },
        {
            id: 'market',
            label: 'Market Access',
            description: 'Inability to sell produce, road blockages'
        }
    ],

    questions: {
        conflict: [
            {
                id: 'incident_date',
                text: "When did the incident occur?",
                type: 'text'
            },
            {
                id: 'damage_desc',
                text: "Describe the damage. Were crops destroyed? Was there violence involved?",
                type: 'text'
            },
            {
                id: 'perpetrators',
                text: "Who was responsible? Did you see them?",
                type: 'text'
            },
            {
                id: 'security_response',
                text: "Did security agencies intervene?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "This is a serious security and economic issue. May we have your contact details for verification?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        inputs: [
            {
                id: 'item_needed',
                text: "What input is missing or too expensive? (e.g., NPK Fertilizer, Urea, Improved Seeds).",
                type: 'text'
            },
            {
                id: 'govt_program',
                text: "Is there a government distribution program in your area? Is it working?",
                options: [
                    "Yes, but diverted",
                    "Yes, but too expensive",
                    "No program seen",
                    "Program is working well"
                ]
            },
            {
                id: 'contact_info',
                text: "To help us advocate for better support for farmers, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
