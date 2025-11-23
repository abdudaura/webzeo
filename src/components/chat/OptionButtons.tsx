interface OptionButtonsProps {
    options: string[]
    onSelect: (option: string) => void
}

const OptionButtons = ({ options, onSelect }: OptionButtonsProps) => {
    return (
        <div className="flex justify-start mt-2">
            <div className="max-w-[70%] space-y-2">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(option)}
                        className="w-full text-left px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-brand-primary transition text-sm font-medium text-gray-700"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OptionButtons
