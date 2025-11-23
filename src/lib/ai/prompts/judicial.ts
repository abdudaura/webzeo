export const judicialPrompts = {
    category: 'judicial',
    introduction: "I am the CEDDERT AI Journalist. Justice delayed is justice denied. I am documenting judicial misconduct and court delays. What is your experience?",

    initialOptions: [
        "Bribery in Court",
        "Unnecessary Adjournments",
        "Missing Case Files",
        "Judicial Bias"
    ],

    subCategories: [
        {
            id: 'corruption',
            label: 'Judicial Corruption',
            description: 'Judges or court staff demanding money'
        },
        {
            id: 'delay',
            label: 'Delay of Justice',
            description: 'Endless adjournments, refusal to hear bail applications'
        }
    ],

    questions: {
        corruption: [
            {
                id: 'court_details',
                text: "Which court is this? (e.g., Magistrate Court X, High Court Y).",
                type: 'text'
            },
            {
                id: 'incident',
                text: "Who demanded the bribe? (e.g., Registrar, Clerk, Judge's aide). How much?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "This is a serious allegation. May we have your contact details for confidential verification?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        delay: [
            {
                id: 'case_number',
                text: "Do you have the Case Number? (Optional but helpful).",
                type: 'text'
            },
            {
                id: 'duration',
                text: "How long has the case been in court?",
                type: 'text'
            },
            {
                id: 'reason',
                text: "What reason is given for the delays? (e.g., Judge absent, File missing).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To help us track this case, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
