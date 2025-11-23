export const validationPrompts = {
    category: 'validation',
    introduction: "I am the CEDDERT AI Journalist. I am here to verify a report. Please provide the Report ID you are referencing.",

    initialOptions: [
        "I have a Report ID",
        "I don't have an ID"
    ],

    subCategories: [],

    questions: {
        verification: [
            {
                id: 'report_id',
                text: "Please enter the Report ID.",
                type: 'text'
            },
            {
                id: 'evidence',
                text: "Do you have additional evidence to add to this report?",
                options: [
                    "Yes, I have photos/videos",
                    "Yes, I have documents",
                    "No, just confirming details"
                ]
            },
            {
                id: 'contact_info',
                text: "To complete the verification, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
