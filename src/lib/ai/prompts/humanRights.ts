export const humanRightsPrompts = {
    category: 'human-rights',
    introduction: "I am the CEDDERT AI Journalist. I'm here to document human rights violations with the highest level of accuracy and confidentiality. Your safety is our priority. Before we proceed, can you confirm you are in a safe location to chat?",

    initialOptions: [
        "Yes, I am safe",
        "No, I need emergency help",
        "I want to report anonymously"
    ],

    emergencyResponse: "If you are in immediate danger, please stop this chat and find safety. Dial 112 for emergency services if possible. We can continue when you are safe.",

    subCategories: [
        {
            id: 'police_brutality',
            label: 'Police/Security Force Brutality',
            description: 'Excessive force, torture, or harassment by security agents'
        },
        {
            id: 'unlawful_detention',
            label: 'Unlawful Detention/Arrest',
            description: 'Arrest without cause or detention beyond 48 hours without court order'
        },
        {
            id: 'extrajudicial_killing',
            label: 'Extrajudicial Killing',
            description: 'Unlawful killing by state actors'
        },
        {
            id: 'discrimination',
            label: 'Discrimination/Inequality',
            description: 'Based on gender, religion, ethnicity, or disability'
        },
        {
            id: 'freedom_expression',
            label: 'Violation of Free Speech/Assembly',
            description: 'Crackdown on protests or censorship'
        }
    ],

    questions: {
        police_brutality: [
            {
                id: 'incident_details',
                text: "Please describe the incident in detail. What exactly happened? (e.g., beating, tear gas, shooting, harassment)",
                type: 'text'
            },
            {
                id: 'perpetrator_identity',
                text: "Can you identify the security agency involved? Please be specific if possible.",
                options: [
                    "Nigeria Police Force (NPF)",
                    "Tactical Unit (SWAT/IRT/STS)",
                    "Military/Army",
                    "DSS/SSS",
                    "NDLEA",
                    "Civil Defence (NSCDC)",
                    "Unknown/Plain Clothes"
                ]
            },
            {
                id: 'officer_details',
                text: "Did you see any name tags, badge numbers, or vehicle license plates? If yes, please provide them. Even a partial description of the officers (height, complexion, language spoken) is helpful.",
                type: 'text'
            },
            {
                id: 'location_time',
                text: "Where and when did this happen? Please provide the specific location (Street, Landmark, LGA) and the exact date and time.",
                type: 'text'
            },
            {
                id: 'injuries',
                text: "Were there any physical injuries sustained? If yes, have you sought medical attention? (We will ask for medical reports later if available)",
                options: [
                    "Severe injuries (Hospitalized)",
                    "Minor injuries",
                    "No physical injuries",
                    "Psychological trauma only"
                ]
            },
            {
                id: 'witnesses',
                text: "Were there any witnesses to this incident? Are they willing to corroborate your story?",
                options: [
                    "Yes, willing witnesses available",
                    "Yes, but they are afraid",
                    "No witnesses",
                    "I am not sure"
                ]
            },
            {
                id: 'consent_evidence',
                text: "Do you have any photos, videos, or medical reports as evidence? We can upload them securely. By proceeding, you consent to CEDDERT using this information for investigation and advocacy.",
                options: [
                    "I have evidence to upload",
                    "I have evidence but cannot share now",
                    "I do not have visual evidence",
                    "I do not consent (End Chat)"
                ]
            },
            {
                id: 'contact_info',
                text: "Finally, to verify this report and potentially follow up for legal assistance, may we have your contact number or email? This will be kept strictly confidential.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        unlawful_detention: [
            {
                id: 'detention_duration',
                text: "How long has the victim been detained? The law requires charging to court within 48 hours.",
                options: [
                    "Less than 48 hours",
                    "2 - 7 days",
                    "1 - 4 weeks",
                    "More than a month",
                    "Unknown"
                ]
            },
            {
                id: 'detention_location',
                text: "Which police station or facility is the victim being held at? Please be as specific as possible.",
                type: 'text'
            },
            {
                id: 'charges',
                text: "Have they been informed of their offense or charged to court? Has a lawyer been allowed to see them?",
                type: 'text'
            },
            {
                id: 'bail_demand',
                text: "Has there been any demand for money (bail) for their release? Bail is free in Nigeria. If money was demanded, how much and by whom?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us follow up on this case, possibly with legal aid, may we have a contact number for the victim's family or representative?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
