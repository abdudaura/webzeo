import { useNavigate } from 'react-router-dom'
import { Shield, DollarSign, Scale, Heart, GraduationCap, Building, Zap, Wheat, Leaf, Vote, Baby, Users, Home, Briefcase, Gavel, Newspaper, Wifi, AlertCircle } from 'lucide-react'

interface ReportCategoriesTabProps {
    onSelect?: () => void
    searchQuery?: string
}

const CATEGORIES = [
    { id: 'security', name: 'Security & Conflict', icon: Shield, color: 'text-red-600', description: 'Kidnapping, Armed Robbery, Terrorism' },
    { id: 'corruption', name: 'Corruption & Fraud', icon: DollarSign, color: 'text-yellow-600', description: 'Bribery, Embezzlement, Fraud' },
    { id: 'human-rights', name: 'Human Rights Violations', icon: Scale, color: 'text-purple-600', description: 'Police Brutality, Discrimination' },
    { id: 'healthcare', name: 'Healthcare Issues', icon: Heart, color: 'text-pink-600', description: 'Hospital Conditions, Drug Shortage' },
    { id: 'education', name: 'Education Problems', icon: GraduationCap, color: 'text-blue-600', description: 'School Facilities, Teacher Issues' },
    { id: 'infrastructure', name: 'Infrastructure Failures', icon: Building, color: 'text-gray-600', description: 'Roads, Bridges, Public Buildings' },
    { id: 'utilities', name: 'Utilities (Power, Water)', icon: Zap, color: 'text-orange-600', description: 'Electricity, Water Supply, Waste' },
    { id: 'agriculture', name: 'Agriculture & Land Disputes', icon: Wheat, color: 'text-green-600', description: 'Land Grabbing, Farmer-Herder Conflicts' },
    { id: 'environment', name: 'Environmental Issues', icon: Leaf, color: 'text-emerald-600', description: 'Pollution, Deforestation, Climate' },
    { id: 'electoral', name: 'Electoral Malpractice', icon: Vote, color: 'text-indigo-600', description: 'Vote Buying, Rigging, Violence' },
    { id: 'child-rights', name: 'Child Rights Violations', icon: Baby, color: 'text-cyan-600', description: 'Child Labor, Abuse, Trafficking' },
    { id: 'women-rights', name: "Women's Rights Issues", icon: Users, color: 'text-rose-600', description: 'Gender Violence, Discrimination' },
    { id: 'housing', name: 'Housing & Displacement', icon: Home, color: 'text-amber-600', description: 'Forced Eviction, Homelessness' },
    { id: 'labor', name: 'Labor & Employment', icon: Briefcase, color: 'text-teal-600', description: 'Unpaid Wages, Poor Conditions' },
    { id: 'judicial', name: 'Judicial Misconduct', icon: Gavel, color: 'text-stone-600', description: 'Court Delays, Corruption' },
    { id: 'press', name: 'Press Freedom Violations', icon: Newspaper, color: 'text-slate-600', description: 'Journalist Harassment, Censorship' },
    { id: 'digital', name: 'Internet & Digital Rights', icon: Wifi, color: 'text-violet-600', description: 'Internet Shutdown, Privacy Violations' },
    { id: 'other', name: 'Other Issues', icon: AlertCircle, color: 'text-gray-500', description: 'AI will help categorize' },
]

const ReportCategoriesTab = ({ onSelect, searchQuery = '' }: ReportCategoriesTabProps) => {
    const navigate = useNavigate()

    const filteredCategories = CATEGORIES.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/report/${categoryId}`)
        onSelect?.()
    }

    return (
        <div className="divide-y divide-gray-100">
            {filteredCategories.map((category) => {
                const Icon = category.icon
                return (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className="w-full p-4 hover:bg-gray-50 transition flex items-start gap-4 text-left"
                    >
                        <div className={`p-3 rounded-full bg-gray-100 ${category.color}`}>
                            <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                            <p className="text-sm text-gray-500 truncate">{category.description}</p>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                            {/* Could show last report time here */}
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default ReportCategoriesTab
