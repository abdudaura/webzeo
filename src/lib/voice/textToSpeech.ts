export const speak = (text: string, lang: 'en' | 'ha' = 'en') => {
    if (!('speechSynthesis' in window)) {
        console.warn('Text-to-speech not supported')
        return
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Attempt to set language/voice
    // Hausa might not be supported by all browsers, fallback to English or generic
    if (lang === 'ha') {
        // Try to find a Hausa voice or similar African accent if available
        // This is browser dependent
        utterance.lang = 'ha-NG'
    } else {
        utterance.lang = 'en-NG' // Nigerian English if available
    }

    utterance.rate = 1.0
    utterance.pitch = 1.0

    window.speechSynthesis.speak(utterance)
}

export const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
    }
}
