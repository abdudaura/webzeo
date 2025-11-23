export const electoralPrompts = {
    category: 'electoral',
    introduction: "I am the CEDDERT AI Journalist. Free and fair elections are the pillar of democracy. I am documenting reports of electoral malpractice. Please share what you have witnessed.",

    initialOptions: [
        "Reporting Pre-Election Incident",
        "Reporting Election Day Incident",
        "Reporting Post-Election Incident"
    ],

    subCategories: [
        {
            id: 'vote_buying',
            label: 'Vote Buying/Selling',
            description: 'Distribution of money or food for votes'
        },
        {
            id: 'violence',
            label: 'Electoral Violence/Thuggery',
            description: 'Attacks on polling units, voters, or officials'
        },
        {
            id: 'rigging',
            label: 'Rigging/Manipulation',
            description: 'Ballot box snatching, altering results, BVAS bypass'
        },
        {
            id: 'logistics',
            label: 'Logistical Failure',
            description: 'Late arrival of materials, missing result sheets'
        }
    ],

    questions: {
        vote_buying: [
            {
                id: 'party_involved',
                text: "Which political party or candidate is involved? (You can say 'Unknown' if unsure).",
                type: 'text'
            },
            {
                id: 'location',
                text: "Where is this happening? (Polling Unit Code, Ward, LGA). Precise location is vital.",
                type: 'text'
            },
            {
                id: 'method',
                text: "How are they buying votes? (Cash, Transfer, Food items, Cloths). How much is being offered?",
                type: 'text'
            },
            {
                id: 'evidence',
                text: "Do you have a photo or video of the transaction? Please upload it if safe to do so.",
                options: [
                    "Yes, I have evidence",
                    "No, it's too risky",
                    "I witnessed it only"
                ]
            },
            {
                id: 'contact_info',
                text: "We may need to verify this report with you. Are you willing to share your contact number or email?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        violence: [
            {
                id: 'incident_desc',
                text: "Describe the violence. (e.g., Thugs attacking voters, Shooting, Destruction of materials).",
                type: 'text'
            },
            {
                id: 'perpetrators',
                text: "Who are the attackers? Are they wearing any party insignia or uniforms?",
                type: 'text'
            },
            {
                id: 'security_presence',
                text: "Are security agents present? What is their reaction?",
                options: [
                    "Present and intervening",
                    "Present but doing nothing",
                    "Not present",
                    "Security agents are participating"
                ]
            },
            {
                id: 'contact_info',
                text: "For verification purposes, may we have your contact details? We will keep them confidential.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
