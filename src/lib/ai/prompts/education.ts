export const educationPrompts = {
    category: 'education',
    introduction: "I am the CEDDERT AI Journalist. Education is the bedrock of our future. I am documenting the state of our schools to demand better standards. Please tell me about the situation.",

    initialOptions: [
        "Reporting on a Primary School",
        "Reporting on a Secondary School",
        "Reporting on a Tertiary Institution (University/Poly/College)"
    ],

    subCategories: [
        {
            id: 'infrastructure',
            label: 'Dilapidated Infrastructure',
            description: 'Collapsed roofs, no desks, overcrowding, no toilets'
        },
        {
            id: 'staffing',
            label: 'Teacher Absenteeism/Shortage',
            description: 'Teachers not coming to class, ghost workers, lack of qualified staff'
        },
        {
            id: 'extortion',
            label: 'Extortion/Illegal Fees',
            description: 'Paying for "free" books, exam malpractice fees, sorting'
        },
        {
            id: 'sexual_harassment',
            label: 'Sexual Harassment/Assault',
            description: 'Sex for grades, victimization by lecturers or students'
        }
    ],

    questions: {
        infrastructure: [
            {
                id: 'school_details',
                text: "What is the full name and location of the school? (State, LGA, Community).",
                type: 'text'
            },
            {
                id: 'condition_desc',
                text: "Describe the infrastructure problem. (e.g., Students sitting on the floor, Roof blown off, No fence/security).",
                type: 'text'
            },
            {
                id: 'student_population',
                text: "Roughly how many students are in a class? Is it overcrowded?",
                options: [
                    "Normal (30-40)",
                    "Crowded (50-80)",
                    "Overcrowded (100+)",
                    "I don't know"
                ]
            },
            {
                id: 'visual_proof',
                text: "Photos are very powerful for reporting school conditions. Can you upload a picture of the classroom or building?",
                options: [
                    "Yes, uploading now",
                    "No, I don't have a camera",
                    "It is not allowed"
                ]
            },
            {
                id: 'contact_info',
                text: "To help us advocate for improvements at this school, may we have your contact details for follow-up?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        sexual_harassment: [
            {
                id: 'safety_check',
                text: "This is a sensitive issue. Are you the victim, or are you reporting for someone else? We treat this with maximum confidentiality.",
                options: [
                    "I am the victim",
                    "Reporting for a friend/student",
                    "Reporting a general observation"
                ]
            },
            {
                id: 'perpetrator',
                text: "Who is the perpetrator? (e.g., Lecturer, Principal, Fellow Student). Do not mention names here if you are afraid, we can get that securely later.",
                type: 'text'
            },
            {
                id: 'pattern',
                text: "Is this a recurring issue? Have other students complained about this person?",
                type: 'text'
            },
            {
                id: 'reporting_history',
                text: "Has this been reported to the school authority? If yes, what was the action taken?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "This is a serious matter that may require sensitive follow-up. Are you willing to share a secure contact method? We will protect your identity.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
