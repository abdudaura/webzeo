import { PetitionTemplate } from './templates/PetitionTemplate';
import { AffidavitTemplate } from './templates/AffidavitTemplate';
import { FOIRequestTemplate } from './templates/FOIRequestTemplate';

export type DocumentType = 'petition' | 'affidavit' | 'foi_request';

export const DocumentGenerator = {
    generateContent(type: DocumentType, data: any): string {
        switch (type) {
            case 'petition':
                return PetitionTemplate(data);
            case 'affidavit':
                return AffidavitTemplate(data);
            case 'foi_request':
                return FOIRequestTemplate(data);
            default:
                throw new Error(`Unsupported document type: ${type}`);
        }
    },

    // Placeholder for PDF generation - would normally use jspdf here
    async generatePDF(content: string, filename: string): Promise<void> {
        console.log(`Generating PDF for ${filename}...`);
        // In a real implementation:
        // const doc = new jsPDF();
        // doc.text(content, 10, 10);
        // doc.save(filename);

        // For now, we'll just simulate a download or open a print window
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>${filename}</title>
                        <style>
                            body { font-family: 'Times New Roman', serif; padding: 40px; white-space: pre-wrap; line-height: 1.5; }
                        </style>
                    </head>
                    <body>${content}</body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    }
};
