export const security = {
    // Anonymize report data by removing PII
    anonymizeReport(text: string): string {
        // Basic regex patterns for PII
        const phonePattern = /(\+?234|0)[789][01]\d{8}/g;
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const namePattern = /(Mr\.|Mrs\.|Ms\.|Dr\.|Barr\.)\s+[A-Z][a-z]+\s+[A-Z][a-z]+/g;

        return text
            .replace(phonePattern, '[REDACTED PHONE]')
            .replace(emailPattern, '[REDACTED EMAIL]')
            .replace(namePattern, '[REDACTED NAME]');
    },

    // Simple client-side rate limiting check
    checkRateLimit(actionType: string): boolean {
        const key = `rate_limit_${actionType}`;
        const lastAction = localStorage.getItem(key);
        const now = Date.now();
        const LIMIT_WINDOW = 60000; // 1 minute

        if (lastAction && now - parseInt(lastAction) < LIMIT_WINDOW) {
            return false; // Rate limited
        }

        localStorage.setItem(key, now.toString());
        return true; // Allowed
    },

    // Sanitize input to prevent XSS (basic example)
    sanitizeInput(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};
