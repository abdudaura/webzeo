export const childRightsPrompts = {
    category: 'child-rights',
    introduction: "I am the CEDDERT AI Journalist. Protecting children is a collective responsibility. I am here to document reports of child abuse or neglect. Please tell me about the child's situation.",

    initialOptions: [
        "I am a concerned citizen",
        "I am a teacher/caregiver",
        "I am a family member",
        "I am the child (victim)"
    ],

    subCategories: [
        {
            id: 'child_abuse',
            label: 'Physical/Emotional Abuse',
            description: 'Beating, starving, or cruel punishment'
        },
        {
            id: 'child_labor',
            label: 'Child Labor/Trafficking',
            description: 'Forced work, hawking during school hours, or trafficking'
        },
        {
            id: 'out_of_school',
            label: 'Out of School Children',
            description: 'Children denied access to education'
        },
        {
            id: 'sexual_abuse',
            label: 'Sexual Abuse/Exploitation',
            description: 'Molestation or exploitation of a minor'
        }
    ],

    questions: {
        child_abuse: [
            {
                id: 'victim_details',
                text: "How old is the child (approximate)? Is it a boy or a girl?",
                type: 'text'
            },
            {
                id: 'abuser_relationship',
                text: "Who is abusing the child? (e.g., Parent, Guardian, Teacher, Neighbor).",
                type: 'text'
            },
            {
                id: 'abuse_nature',
                text: "Describe the abuse. (e.g., Severe flogging, burns, starvation, locking up).",
                type: 'text'
            },
            {
                id: 'location',
                text: "Where is the child right now? Please provide the address or location so help can reach them.",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "To ensure the child gets help, we may need to contact you for more directions. Are you willing to provide your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        child_labor: [
            {
                id: 'work_type',
                text: "What kind of work is the child doing? (e.g., Street hawking, Farm work, Domestic help, Begging).",
                type: 'text'
            },
            {
                id: 'timing',
                text: "When do they work? Is it during school hours?",
                options: [
                    "During school hours (Morning)",
                    "After school/Weekends",
                    "All day, every day"
                ]
            },
            {
                id: 'handler',
                text: "Is there an adult supervising or forcing them? Who are they working for?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to follow up to locate this child. May we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
