export interface AudioRecorder {
    start: () => Promise<void>
    stop: () => Promise<Blob>
    isRecording: boolean
}

export const useAudioRecorder = (): AudioRecorder => {
    let mediaRecorder: MediaRecorder | null = null
    let audioChunks: Blob[] = []
    let isRecording = false

    const start = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorder = new MediaRecorder(stream)
            audioChunks = []

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data)
            }

            mediaRecorder.start()
            isRecording = true
        } catch (error) {
            console.error('Error accessing microphone:', error)
            throw error
        }
    }

    const stop = async (): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            if (!mediaRecorder) {
                reject(new Error('Recorder not initialized'))
                return
            }

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' })
                audioChunks = []
                isRecording = false
                resolve(audioBlob)
            }

            mediaRecorder.stop()
            mediaRecorder.stream.getTracks().forEach(track => track.stop())
        })
    }

    return { start, stop, isRecording }
}
