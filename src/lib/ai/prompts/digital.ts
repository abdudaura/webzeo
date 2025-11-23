export const digitalPrompts = {
    category: 'digital',
    introduction: "I am the CEDDERT AI Journalist. Digital rights are human rights. I am documenting internet shutdowns, surveillance, and online censorship. What is the issue?",

    initialOptions: [
        "Internet Shutdown / Throttling",
        "Website Blocked",
        "Online Harassment / Doxing",
        "Digital Surveillance"
    ],

    subCategories: [
        {
            id: 'shutdown',
            label: 'Internet Shutdown',
            description: 'Total blackout or slowing down of internet services'
        },
        {
            id: 'censorship',
            label: 'Website Blocking',
            description: 'Inability to access specific news or social media sites'
        },
        {
            id: 'privacy',
            label: 'Privacy Violation',
            description: 'Illegal surveillance or data breach'
        }
    ],

    questions: {
        shutdown: [
            {
                id: 'location',
                text: "Which area is affected? (State, City).",
                type: 'text'
            },
            {
                id: 'network',
                text: "Which network providers are down? (MTN, Glo, Airtel, 9mobile).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us verify this outage, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        censorship: [
            {
                id: 'site',
                text: "Which website or app is blocked?",
                type: 'text'
            },
            {
                id: 'error_msg',
                text: "What error message do you see? (e.g., Connection Reset, 404).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need technical details. Are you willing to share your contact info?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
