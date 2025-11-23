export const womenRightsPrompts = {
    category: 'women-rights',
    introduction: "I am the CEDDERT AI Journalist. I am here to provide a safe, confidential space for you to report violations of women's rights. Your identity will be protected. Are you in a safe place to talk?",

    initialOptions: [
        "Yes, I am safe",
        "No, I need help immediately",
        "Reporting for someone else"
    ],

    subCategories: [
        {
            id: 'domestic_violence',
            label: 'Domestic Violence',
            description: 'Physical, emotional, or economic abuse by a partner or family member'
        },
        {
            id: 'sexual_violence',
            label: 'Sexual Violence/Rape',
            description: 'Non-consensual sexual acts or harassment'
        },
        {
            id: 'discrimination',
            label: 'Gender Discrimination',
            description: 'Denial of opportunities, inheritance, or rights based on gender'
        },
        {
            id: 'harmful_practices',
            label: 'Harmful Traditional Practices',
            description: 'FGM, forced marriage, widowhood rites'
        }
    ],

    questions: {
        domestic_violence: [
            {
                id: 'safety_check',
                text: "Your safety is paramount. Is the abuser currently nearby? Do you need a number for a shelter or emergency response?",
                options: [
                    "I am safe for now",
                    "I need emergency contacts",
                    "I am in a shelter"
                ]
            },
            {
                id: 'incident_desc',
                text: "Please describe what happened. (e.g., Physical beating, threats, locking up).",
                type: 'text'
            },
            {
                id: 'frequency',
                text: "Is this the first time? How long has this been happening?",
                type: 'text'
            },
            {
                id: 'children',
                text: "Are there children involved or present during these incidents?",
                options: [
                    "Yes, children are present",
                    "No children",
                    "Children are also victims"
                ]
            },
            {
                id: 'contact_info',
                text: "We can connect you with support organizations. May we have your contact number or email? It will be kept strictly confidential.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        sexual_violence: [
            {
                id: 'medical_attention',
                text: "If the incident happened recently (within 72 hours), have you sought medical attention? This is crucial for your health and evidence collection.",
                options: [
                    "Yes, I have seen a doctor",
                    "No, I haven't",
                    "I am afraid to go"
                ]
            },
            {
                id: 'perpetrator_identity',
                text: "Do you know the person who did this? (e.g., Neighbor, Colleague, Stranger, Family member).",
                type: 'text'
            },
            {
                id: 'location',
                text: "Where did this happen? (e.g., At home, Work, School, Public place).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "This is a very sensitive case. To provide you with the right support, may we have a secure way to contact you?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
