export const FOIRequestTemplate = (data: any) => `
FREEDOM OF INFORMATION REQUEST

Date: ${new Date().toLocaleDateString()}

TO:
The Head of Agency / The Director
${data.agency_name}
${data.agency_address}

Dear Sir/Ma,

APPLICATION FOR INFORMATION PURSUANT TO THE FREEDOM OF INFORMATION ACT 2011

I, ${data.applicant_name}, representing ${data.organization_name || 'myself as a concerned citizen'}, hereby write to request information regarding:

${data.subject_matter.toUpperCase()}

Specifically, I am requesting the following documents/information:
${data.requested_info_list.map((item: string, index: number) => `${index + 1}. ${item}`).join('\n')}

I would appreciate if this information is made available within 7 days as stipulated by the Freedom of Information Act 2011.

I am willing to pay the necessary fees for the duplication of these documents.

Thank you for your cooperation.

Yours faithfully,

__________________________
${data.applicant_name}
${data.applicant_phone}
${data.applicant_email}
`;
