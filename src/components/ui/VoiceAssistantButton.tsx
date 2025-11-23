import { Mic } from 'lucide-react'

const VoiceAssistantButton = () => {
    return (
        <button className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-brand-primary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-brand-dark transition-colors z-50">
            <Mic className="w-7 h-7" />
        </button>
    )
}

export default VoiceAssistantButton
