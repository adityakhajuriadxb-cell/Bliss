import { SITE } from '@/config/site';

// The regulatory statement, shown in the footer and on /compliance. Legal text: change
// it only with your compliance lead's sign-off.
export default function RegulatoryStatement({ className }) {
  const { legal } = SITE;
  return (
    <p className={className}>
      {legal.companyName} is incorporated in {legal.jurisdiction} (Corporation No. {legal.corporationNo}) and is
      registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada
      (FINTRAC), Registration No. {legal.msbRegistrationNo}, under the Proceeds of Crime (Money Laundering) and Terrorist
      Financing Act (PCMLTFA). {legal.companyName} is not authorised or registered by the Financial Conduct Authority
      (FCA) and is not a licensed payment service provider in the European Economic Area. Money transfer services in the
      EEA and United Kingdom are facilitated through regulated Licensed Partners who hold their own applicable
      authorisations. {SITE.name} does not hold customer funds. Past exchange rates are not indicative of future rates.{' '}
      {SITE.name} is intended for personal remittance use only; commercial transactions are not permitted.
    </p>
  );
}
