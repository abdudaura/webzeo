import ChatWindow from './components/ChatWindow'
import VoiceAssistantButton from '../../components/ui/VoiceAssistantButton'

const ChatHomePage = () => {
  return (
    <div className="h-full relative">
      <ChatWindow />
      <VoiceAssistantButton />
    </div>
  )
}

export default ChatHomePage
