export const AffidavitTemplate = (data: any) => `
IN THE HIGH COURT OF JUSTICE
${data.state.toUpperCase()} STATE OF NIGERIA
IN THE ${data.lga.toUpperCase()} JUDICIAL DIVISION

AFFIDAVIT OF FACTS

I, ${data.deponent_name}, ${data.deponent_gender}, Christian/Muslim, Nigerian Citizen, of ${data.deponent_address}, do hereby make oath and state as follows:

1. That I am the Deponent herein and by virtue of my position, I am conversant with the facts of this matter.

2. That on ${data.incident_date}, at ${data.incident_location}, I witnessed/experienced the following:
   ${data.incident_details}

3. That the information provided in my report (Reference: ${data.report_ref}) regarding ${data.offense_title} is true and correct to the best of my knowledge.

4. That I make this solemn declaration conscientiously believing the same to be true and in accordance with the Oaths Act of 2004.

__________________________
DEPONENT

Sworn to at the High Court Registry,
This ______ day of ____________, 20____

BEFORE ME

__________________________
COMMISSIONER FOR OATHS
`;
