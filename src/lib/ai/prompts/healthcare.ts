export const healthcarePrompts = {
    category: 'healthcare',
    introduction: "I am the CEDDERT AI Journalist. Access to quality healthcare is a fundamental right. I want to understand the challenges you are facing at your healthcare facility. Your report can help drive improvements. Are you currently at the facility?",

    initialOptions: [
        "Yes, I am at the hospital/clinic",
        "No, reporting a past experience",
        "I am a healthcare worker reporting anonymously"
    ],

    subCategories: [
        {
            id: 'facility_condition',
            label: 'Poor Facility Condition',
            description: 'Dilapidated buildings, lack of power/water, unhygienic environment'
        },
        {
            id: 'staff_conduct',
            label: 'Staff Negligence/Misconduct',
            description: 'Absenteeism, rudeness, refusal to treat, or demand for bribes'
        },
        {
            id: 'resource_shortage',
            label: 'Lack of Drugs/Equipment',
            description: 'No medicines, broken machines, lack of beds or oxygen'
        },
        {
            id: 'cost_access',
            label: 'Cost & Accessibility',
            description: 'Exorbitant fees, rejection of insurance/NHIS'
        }
    ],

    questions: {
        facility_condition: [
            {
                id: 'facility_name',
                text: "What is the name of the Hospital, Clinic, or PHC? Please provide the exact location (LGA, Ward).",
                type: 'text'
            },
            {
                id: 'specific_issue',
                text: "Describe the condition. (e.g., Leaking roof, No electricity, No running water, Dirty wards, Broken toilets).",
                type: 'text'
            },
            {
                id: 'impact',
                text: "How is this affecting patient care? Are procedures being cancelled? Is there a risk of infection?",
                type: 'text'
            },
            {
                id: 'evidence',
                text: "Can you safely take a photo or video of the condition without violating patient privacy?",
                options: [
                    "Yes, I can upload photos",
                    "No, it is not allowed/safe",
                    "I already have photos"
                ]
            },
            {
                id: 'contact_info',
                text: "Thank you. To help us verify this report, would you be willing to share your contact details? We will keep them confidential.",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        staff_conduct: [
            {
                id: 'incident_description',
                text: "What happened? (e.g., Doctor not on seat, Nurse demanded money before treatment, Wrong medication administered).",
                type: 'text'
            },
            {
                id: 'time_wait',
                text: "How long did you wait to be seen? Was it an emergency?",
                type: 'text'
            },
            {
                id: 'staff_id',
                text: "Do you know the name or can you describe the staff member involved?",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to follow up on this serious allegation. May we have your contact number or email?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
