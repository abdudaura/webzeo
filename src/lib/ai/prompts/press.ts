export const pressPrompts = {
    category: 'press',
    introduction: "I am the CEDDERT AI Journalist. A free press is vital. I am documenting attacks on journalists and media freedom. Are you a journalist or reporting an attack on one?",

    initialOptions: [
        "I am a Journalist under threat",
        "Reporting arrest of a Journalist",
        "Reporting censorship/shutdown"
    ],

    subCategories: [
        {
            id: 'harassment',
            label: 'Harassment/Threats',
            description: 'Threats to life, stalking, online bullying'
        },
        {
            id: 'arrest',
            label: 'Arrest/Detention',
            description: 'Unlawful arrest of media personnel'
        },
        {
            id: 'censorship',
            label: 'Censorship',
            description: 'Blocking websites, seizing equipment, shutting down stations'
        }
    ],

    questions: {
        harassment: [
            {
                id: 'source',
                text: "Who is threatening you? (e.g., Government official, Security agents, Anonymous).",
                type: 'text'
            },
            {
                id: 'reason',
                text: "Is this related to a specific story you are working on?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We can connect you with journalist protection networks. May we have your secure contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        arrest: [
            {
                id: 'journalist_name',
                text: "What is the name of the journalist and their media house?",
                type: 'text'
            },
            {
                id: 'location',
                text: "Where are they being held?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help advocate for their release, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
