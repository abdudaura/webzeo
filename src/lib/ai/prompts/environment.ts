export const environmentPrompts = {
    category: 'environment',
    introduction: "I am the CEDDERT AI Journalist. Our environment sustains us. I am documenting environmental hazards and degradation. What issue are you reporting?",

    initialOptions: [
        "Oil Spillage / Pollution",
        "Illegal Mining",
        "Deforestation / Logging",
        "Air Pollution / Soot"
    ],

    subCategories: [
        {
            id: 'pollution',
            label: 'Pollution (Oil/Air/Water)',
            description: 'Contamination of land or water sources'
        },
        {
            id: 'mining',
            label: 'Illegal Mining',
            description: 'Unregulated mining causing land degradation'
        },
        {
            id: 'erosion',
            label: 'Erosion / Landslide',
            description: 'Threat to houses and land due to erosion'
        }
    ],

    questions: {
        pollution: [
            {
                id: 'location',
                text: "Where is the pollution occurring? (Community, LGA).",
                type: 'text'
            },
            {
                id: 'source',
                text: "What is the source? (e.g., Broken pipeline, Factory chimney, Dumping site).",
                type: 'text'
            },
            {
                id: 'impact',
                text: "How is it affecting the community? (e.g., Can't fish, breathing problems, crops dying).",
                type: 'text'
            },
            {
                id: 'evidence',
                text: "Can you upload a photo or video of the pollution?",
                options: [
                    "Yes, uploading now",
                    "No, I don't have a camera"
                ]
            },
            {
                id: 'contact_info',
                text: "To help us verify this environmental hazard, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        mining: [
            {
                id: 'location',
                text: "Where is the mining site?",
                type: 'text'
            },
            {
                id: 'operators',
                text: "Who are the operators? (e.g., Foreigners, Locals, Unknown company).",
                type: 'text'
            },
            {
                id: 'safety',
                text: "Are there safety concerns? (e.g., Open pits, child labor, armed guards).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to investigate this further. Are you willing to share your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
