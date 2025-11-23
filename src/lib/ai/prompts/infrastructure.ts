export const infrastructurePrompts = {
    category: 'infrastructure',
    introduction: "I am the CEDDERT AI Journalist. Good infrastructure is essential for development. I am documenting the state of roads, bridges, and public buildings. Please tell me about the infrastructure issue you are facing.",

    initialOptions: [
        "Reporting Bad Roads/Bridges",
        "Reporting Collapsed Building",
        "Reporting Abandoned Project",
        "Reporting Public Transport Issue"
    ],

    subCategories: [
        {
            id: 'roads_bridges',
            label: 'Roads & Bridges',
            description: 'Potholes, collapsed bridges, uncompleted road works'
        },
        {
            id: 'public_buildings',
            label: 'Public Buildings',
            description: 'Dilapidated government offices, markets, or centers'
        },
        {
            id: 'drainage',
            label: 'Drainage & Flooding',
            description: 'Blocked drains, lack of drainage causing floods'
        },
        {
            id: 'transport',
            label: 'Public Transport',
            description: 'Unsafe vehicles, unregulated fares, transport union extortion'
        }
    ],

    questions: {
        roads_bridges: [
            {
                id: 'location',
                text: "Where is this road or bridge located? (Street Name, Connecting Towns, LGA). Please be precise.",
                type: 'text'
            },
            {
                id: 'condition',
                text: "Describe the condition. (e.g., Deep potholes, Bridge washed away, Road cut off). How long has it been like this?",
                type: 'text'
            },
            {
                id: 'impact',
                text: "How is this affecting the community? (e.g., Accidents, increased transport cost, farmers can't move goods).",
                type: 'text'
            },
            {
                id: 'evidence',
                text: "Can you upload a photo of the road or bridge? Visual evidence is very important for infrastructure reports.",
                options: [
                    "Yes, uploading now",
                    "No, I don't have a camera",
                    "It is too far to go back"
                ]
            },
            {
                id: 'contact_info',
                text: "To help us verify the location and advocate for repairs, may we have your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ],
        public_buildings: [
            {
                id: 'building_name',
                text: "What is the name of the building? (e.g., Main Market, Secretariat, Community Hall).",
                type: 'text'
            },
            {
                id: 'issue_desc',
                text: "What is the problem? (e.g., Roof leaking, Fire damage, Abandoned construction).",
                type: 'text'
            },
            {
                id: 'contact_info',
                text: "We may need to follow up on this report. Are you willing to share your contact details?",
                options: [
                    "Yes, I will provide it",
                    "No, I prefer to remain anonymous"
                ]
            }
        ]
    }
}
