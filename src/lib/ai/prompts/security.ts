export const securityPrompts = {
    category: 'security',
    introduction: "I am the CEDDERT AI Journalist. I document security incidents to help improve public safety and hold authorities accountable. I need to gather precise details. First, are you currently in a safe location?",

    initialOptions: [
        "Yes, I am safe",
        "No, I am hiding/in danger",
        "I am reporting for someone else"
    ],

    subCategories: [
        {
            id: 'kidnapping',
            label: 'Kidnapping / Abduction',
            description: 'Forced abduction for ransom or other purposes'
        },
        {
            id: 'armed_robbery',
            label: 'Armed Robbery / Banditry',
            description: 'Attacks on homes, highways, or communities'
        },
        {
            id: 'terrorism',
            label: 'Terrorism / Insurgency',
            description: 'Attacks by insurgent groups (e.g., Boko Haram, ISWAP)'
        },
        {
            id: 'communal_conflict',
            label: 'Communal/Ethnic Conflict',
            description: 'Clashes between communities or herdsmen/farmer conflicts'
        },
        {
            id: 'cultism',
            label: 'Cult Violence',
            description: 'Clashes between rival cult groups'
        }
    ],

    questions: {
        kidnapping: [
            {
                id: 'victim_count',
                text: "How many people were abducted? Please specify if there were women, children, or elderly persons involved.",
                type: 'text'
            },
            {
                id: 'incident_timeline',
                text: "When exactly did the abduction take place? (Date and Time). How long did the operation last?",
                type: 'text'
            },
            {
                id: 'perpetrator_description',
                text: "Did you see the abductors? How many were they? How were they dressed (uniforms, masked, plain clothes)? What language were they speaking?",
                type: 'text'
            },
            {
                id: 'weapons',
                text: "What kind of weapons were they carrying? (e.g., AK-47s, machetes, locally made guns)",
                options: [
                    "Heavy Assault Rifles (AK-47s)",
                    "Pistols/Handguns",
                    "Machetes/Knives",
                    "Clubs/Sticks",
                    "I couldn't see"
                ]
            },
            {
                id: 'ransom',
                text: "Has a ransom demand been made? If yes, how much? Have they provided a proof of life?",
                type: 'text'
            },
            {
                id: 'authority_response',
                text: "Have the police or security agencies been notified? Did they respond? If yes, which division?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to verify these details or provide updates. Are you willing to share your contact number or email? It will remain confidential.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        armed_robbery: [
            {
                id: 'location_type',
                text: "Where did the robbery occur?",
                options: [
                    "Residential Home",
                    "Highway/Road",
                    "Bank/Commercial Area",
                    "Marketplace",
                    "Religious Center"
                ]
            },
            {
                id: 'casualties',
                text: "Were there any casualties or injuries? Please provide details.",
                type: 'text'
            },
            {
                id: 'stolen_items',
                text: "What was taken? (Cash, Vehicles, Livestock, Valuables). This helps us track patterns.",
                type: 'text'
            },
            {
                id: 'response_time',
                text: "How long did it take for security forces to arrive after being called?",
                options: [
                    "They didn't come",
                    "Over 1 hour",
                    "30-60 minutes",
                    "15-30 minutes",
                    "Immediately"
                ]
            },
            {
                id: 'contact_info',
                text: "To help us verify this incident, may we have your contact details? We will not share this with anyone without your permission.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
