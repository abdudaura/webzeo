export const PetitionTemplate = (data: any) => `
PETITION FOR URGENT INTERVENTION

Date: ${new Date().toLocaleDateString()}

TO:
The Commissioner of Police / The Director, Department of State Services
${data.state} State Command

Dear Sir/Ma,

PETITION AGAINST ${data.accused_name || 'UNKNOWN PERSONS'} FOR ${data.offense_title.toUpperCase()}

I, ${data.complainant_name}, a citizen of Nigeria residing at ${data.complainant_address}, hereby bring to your attention a matter of urgent public importance regarding ${data.offense_title}.

FACTS OF THE MATTER:
${data.description}

On ${data.incident_date}, at approximately ${data.incident_time}, the following events occurred at ${data.incident_location}:
${data.incident_details}

I have attached the following evidence to support this petition:
${data.evidence_list ? data.evidence_list.map((e: string) => `- ${e}`).join('\n') : '- (No evidence attached)'}

PRAYERS:
1. That you use your good office to investigate this matter urgently.
2. That the perpetrators be brought to book in accordance with the laws of the Federal Republic of Nigeria.
3. That necessary protection be provided to the victims/complainant.

I trust in your commitment to justice and the rule of law.

Yours faithfully,

__________________________
${data.complainant_name}
${data.complainant_phone}
`;
