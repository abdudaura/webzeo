export interface Category {
    id: string;
    label: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: string;
    label: string;
}

export const REPORT_CATEGORIES: Category[] = [
    {
        id: 'security',
        label: 'Security & Conflict',
        subCategories: [
            { id: 'banditry', label: 'Banditry / Armed Robbery' },
            { id: 'kidnapping', label: 'Kidnapping / Abduction' },
            { id: 'communal_clash', label: 'Communal / Ethnic Clash' },
            { id: 'terrorism', label: 'Terrorist Activity / Insurgency' },
            { id: 'hate_speech', label: 'Hate Speech / Incitement' },
            { id: 'suspicious_movement', label: 'Suspicious Movement' },
            { id: 'cultism', label: 'Cultism / Gang Violence' }
        ]
    },
    {
        id: 'infrastructure',
        label: 'Infrastructure & Utilities',
        subCategories: [
            { id: 'road_damage', label: 'Road Damage / Potholes' },
            { id: 'bridge_collapse', label: 'Bridge Collapse' },
            { id: 'power_outage', label: 'Power Outage / Transformer Fault' },
            { id: 'water_supply', label: 'No Water Supply / Broken Pipe' },
            { id: 'public_building', label: 'Dilapidated Public Building' },
            { id: 'telecom', label: 'Telecommunication Failure' }
        ]
    },
    {
        id: 'health',
        label: 'Health & Sanitation',
        subCategories: [
            { id: 'disease_outbreak', label: 'Disease Outbreak (Cholera, etc.)' },
            { id: 'hospital_negligence', label: 'Hospital Negligence / Lack of Staff' },
            { id: 'refuse_dump', label: 'Illegal Refuse Dump / Sanitation' },
            { id: 'water_pollution', label: 'Water Pollution' },
            { id: 'drug_abuse', label: 'Drug Abuse / Trafficking' }
        ]
    },
    {
        id: 'education',
        label: 'Education',
        subCategories: [
            { id: 'school_dilapidation', label: 'Dilapidated School Structure' },
            { id: 'teacher_absence', label: 'Teacher Absenteeism' },
            { id: 'lack_materials', label: 'Lack of Learning Materials' },
            { id: 'student_dropout', label: 'High Student Dropout' }
        ]
    },
    {
        id: 'governance',
        label: 'Governance & Corruption',
        subCategories: [
            { id: 'bribery', label: 'Bribery / Extortion' },
            { id: 'vote_buying', label: 'Vote Buying / Electoral Fraud' },
            { id: 'abuse_power', label: 'Abuse of Power / Office' },
            { id: 'project_abandonment', label: 'Abandoned Government Project' },
            { id: 'pension_issues', label: 'Pension / Salary Issues' }
        ]
    },
    {
        id: 'environment',
        label: 'Environment & Disaster',
        subCategories: [
            { id: 'flood', label: 'Flooding' },
            { id: 'drought', label: 'Drought / Desertification' },
            { id: 'erosion', label: 'Erosion' },
            { id: 'fire', label: 'Fire Outbreak' },
            { id: 'pest_invasion', label: 'Pest Invasion (Locusts, etc.)' }
        ]
    },
    {
        id: 'human_rights',
        label: 'Human Rights & Social Justice',
        subCategories: [
            { id: 'police_brutality', label: 'Police Brutality / Harassment' },
            { id: 'domestic_violence', label: 'Domestic Violence' },
            { id: 'child_abuse', label: 'Child Abuse / Labor' },
            { id: 'gbv', label: 'Gender-Based Violence (GBV)' },
            { id: 'discrimination', label: 'Discrimination / Exclusion' }
        ]
    },
    {
        id: 'economy',
        label: 'Economy & Trade',
        subCategories: [
            { id: 'market_fire', label: 'Market Fire' },
            { id: 'price_gouging', label: 'Price Gouging / Hoarding' },
            { id: 'unemployment', label: 'Youth Unemployment Issues' },
            { id: 'agric_issues', label: 'Agricultural / Farming Issues' }
        ]
    }
];
