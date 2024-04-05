import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const IPVFlashcardMain = () => {

  const [flashcards, setFlashcards] = useState(FLASHCARD_QUESTIONS);

  return (
    <div className="card-container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const FLASHCARD_QUESTIONS = [
    {
        id: 1,
        question: "Which type of vaccine is based on a weakened form of the pathogen that replicates in the host but causes a mild infection, stimulating an immune response without causing the disease?",
        answer: "Live attenuated vaccine",
        options: [
          "Inactivated vaccine",
          "mRNA vaccine",
          "Live attenuated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 2,
        question: "Among the following, which vaccine type uses a killed or inactivated form of the pathogen to induce an immune response without the risk of causing the disease in the host?",
        answer: "Inactivated vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 3,
        question: "Which vaccine type is composed of genetic material, instructing cells to produce a viral protein that triggers an immune response against the pathogen?",
        answer: "mRNA vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 4,
        question: "Among the listed vaccine types, which one involves the use of a part of the pathogen, such as a protein or sugar, conjugated with a carrier protein to enhance the immune response, particularly in young children?",
        answer: "Conjugate vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 5,
        question: "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself?",
        answer: "Toxoid vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 6,
        question: "Among the following vaccines, which one is an example of a live attenuated vaccine commonly administered for measles, mumps, and rubella (MMR)?",
        answer: "Varicella vaccine",
        options: [
          "Polio vaccine",
          "Varicella vaccine",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "Tetanus vaccine"
        ]
      },
      {
        id: 7,
        question: "Which vaccine type includes examples such as the influenza vaccine and the rabies vaccine, which utilize inactivated forms of the pathogens to trigger an immune response?",
        answer: "Inactivated vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 8,
        question: "Among the listed vaccines, which one involves the introduction of genetic material into cells to produce proteins that trigger an immune response, as seen in some COVID-19 vaccines?",
        answer: "mRNA vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 9,
        question: "Which vaccine type is designed to prevent diseases caused by bacterial infections, particularly those with polysaccharide capsules, by enhancing the immune response against the bacteria's polysaccharide capsule?",
        answer: "Conjugate vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 10,
        question: "Among the following vaccines, which one utilizes weakened or attenuated forms of the poliovirus to induce an immune response without causing the disease in the host?",
        answer: "OPV (Oral Polio Vaccine)",
        options: [
          "IPV (Inactivated Polio Vaccine)",
          "OPV (Oral Polio Vaccine)",
          "HPV (Human Papillomavirus Vaccine)",
          "MMR (Measles, Mumps, Rubella) vaccine",
          "DTaP (Diphtheria, Tetanus, acellular Pertussis) vaccine"
        ]
      },
      {
        id: 11,
        question: "Which vaccine type uses killed or inactivated forms of the pathogen to trigger an immune response without the risk of causing the disease in the host, as seen in some seasonal influenza vaccines?",
        answer: "Inactivated vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 12,
        question: "Among the listed vaccines, which one involves the use of a small, harmless piece of the pathogen, such as a protein or sugar, to trigger an immune response, as seen in the Hepatitis B vaccine?",
        answer: "Subunit vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Subunit vaccine"
        ]
      },
      {
        id: 13,
        question: "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself, as observed in the diphtheria and tetanus vaccines?",
        answer: "Toxoid vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 14,
        question: "Among the following vaccines, which one is an example of a live attenuated vaccine commonly administered for protection against measles, mumps, and rubella (MMR)?",
        answer: "Varicella vaccine",
        options: [
          "Polio vaccine",
          "Varicella vaccine",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "Tetanus vaccine"
        ]
      },
      {
        id: 15,
        question: "Which vaccine type includes examples such as the influenza vaccine and the rabies vaccine, which utilize inactivated forms of the pathogens to trigger an immune response?",
        answer: "Inactivated vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 16,
        question: "Among the listed vaccines, which one involves the introduction of genetic material into cells to produce proteins that trigger an immune response, as seen in some COVID-19 vaccines?",
        answer: "mRNA vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 17,
        question: "Which vaccine type is designed to prevent diseases caused by bacterial infections, particularly those with polysaccharide capsules, by enhancing the immune response against the bacteria's polysaccharide capsule?",
        answer: "Conjugate vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 18,
        question: "Among the following vaccines, which one utilizes weakened or attenuated forms of the poliovirus to induce an immune response without causing the disease in the host?",
        answer: "OPV (Oral Polio Vaccine)",
        options: [
          "IPV (Inactivated Polio Vaccine)",
          "OPV (Oral Polio Vaccine)",
          "HPV (Human Papillomavirus Vaccine)",
          "MMR (Measles, Mumps, Rubella) vaccine",
          "DTaP (Diphtheria, Tetanus, acellular Pertussis) vaccine"
        ]
      },
      {
        id: 19,
        question: "Which vaccine type uses killed or inactivated forms of the pathogen to trigger an immune response without the risk of causing the disease in the host, as seen in some seasonal influenza vaccines?",
        answer: "Inactivated vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 20,
        question: "Among the listed vaccines, which one involves the use of a small, harmless piece of the pathogen, such as a protein or sugar, to trigger an immune response, as seen in the Hepatitis B vaccine?",
        answer: "Subunit vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Subunit vaccine"
        ]
      },
      {
        id: 21,
        question: "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself, as observed in the diphtheria and tetanus vaccines?",
        answer: "Toxoid vaccine",
        options: [
          "Live attenuated vaccine",
          "mRNA vaccine",
          "Inactivated vaccine",
          "Conjugate vaccine",
          "Toxoid vaccine"
        ]
      },
      {
        id: 22,
        question: "At what age is the first dose of the DTaP/IPV/Hib/HepB vaccine typically administered to infants in the UK's childhood vaccination schedule?",
        answer: "2 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 23,
        question: "At what age do children usually receive the second dose of the DTaP/IPV/Hib/HepB vaccine in the UK's childhood vaccination schedule?",
        answer: "4 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 24,
        question: "When do infants typically receive the third dose of the DTaP/IPV/Hib/HepB vaccine as per the UK's childhood vaccination schedule?",
        answer: "6 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 25,
        question: "At what age is the first dose of the MenB (Meningococcal B) vaccine typically administered to infants as part of the UK's vaccination schedule?",
        answer: "2 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 26,
        question: "When is the booster dose of the MenB (Meningococcal B) vaccine typically given to infants in the UK's vaccination schedule?",
        answer: "4 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 27,
        question: "At what age is the first dose of the MenACWY (Meningococcal ACWY) vaccine routinely given to adolescents in the UK?",
        answer: "12-13 years",
        options: [
          "10-11 years",
          "12-13 years",
          "14-15 years",
          "16-18 years",
          "19-21 years"
        ]
      },
      {
        id: 28,
        question: "When do adolescents usually receive the booster dose of the MenACWY (Meningococcal ACWY) vaccine in the UK?",
        answer: "16-18 years",
        options: [
          "10-11 years",
          "12-13 years",
          "14-15 years",
          "16-18 years",
          "19-21 years"
        ]
      },
      {
        id: 29,
        question: "At what age is the first dose of the MMR (Measles, Mumps, Rubella) vaccine administered to children as part of the UK's vaccination schedule?",
        answer: "1 year",
        options: [
          "2 months",
          "1 year",
          "2 years",
          "3 years",
          "4 years"
        ]
      },
      {
        id: 30,
        question: "When do children usually receive the second dose of the MMR (Measles, Mumps, Rubella) vaccine in the UK's vaccination schedule?",
        answer: "2 years",
        options: [
          "2 months",
          "1 year",
          "2 years",
          "3 years",
          "4 years"
        ]
      },
      {
        id: 31,
        question: "At what age is the first dose of the HPV (Human Papillomavirus) vaccine routinely given to adolescents in the UK?",
        answer: "12-13 years",
        options: [
          "8-9 years",
          "10-11 years",
          "12-13 years",
          "14-15 years",
          "16-18 years"
        ]
      },
      {
        id: 32,
        question: "When do adolescents typically receive the second dose of the HPV (Human Papillomavirus) vaccine in the UK?",
        answer: "16-18 years",
        options: [
          "8-9 years",
          "10-11 years",
          "12-13 years",
          "14-15 years",
          "16-18 years"
        ]
      },
      {
        id: 33,
        question: "At what age is the first dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine administered to infants in the UK's vaccination schedule?",
        answer: "2 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 34,
        question: "When do infants usually receive the booster dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine in the UK?",
        answer: "4 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 35,
        question: "At what age is the first dose of the PCV (Pneumococcal Conjugate Vaccine) administered to infants in the UK's vaccination schedule?",
        answer: "2 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 36,
        question: "When do infants usually receive the second dose of the PCV (Pneumococcal Conjugate Vaccine) in the UK's vaccination schedule?",
        answer: "4 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 37,
        question: "At what age is the first dose of the Rotavirus vaccine typically administered to infants in the UK's vaccination schedule?",
        answer: "2 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 38,
        question: "When do infants usually receive the second dose of the Rotavirus vaccine in the UK's vaccination schedule?",
        answer: "4 months",
        options: [
          "2 months",
          "4 months",
          "6 months",
          "12 months",
          "18 months"
        ]
      },
      {
        id: 39,
        question: "At what age is the first dose of the BCG (Bacillus Calmette-Guérin) vaccine given to newborns in the UK at higher risk of tuberculosis?",
        answer: "At birth",
        options: [
          "At birth",
          "1 month",
          "3 months",
          "6 months",
          "1 year"
        ]
      },
      {
        id: 40,
        question: "When do children typically receive the booster dose of the BCG (Bacillus Calmette-Guérin) vaccine in the UK?",
        answer: "1 year",
        options: [
          "At birth",
          "1 month",
          "3 months",
          "6 months",
          "1 year"
        ]
      },
      {
        id: 41,
        question: "Which vaccine is recommended for individuals aged 65 and older to protect against pneumococcal infections, particularly pneumonia and meningitis?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 42,
        question: "Among the following vaccines, which one is recommended for individuals over 65 years old to prevent shingles caused by the varicella-zoster virus?",
        answer: "Zoster (Shingles) vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Zoster (Shingles) vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 43,
        question: "Which vaccine is specifically advised for individuals with chronic liver disease, including hepatitis B and hepatitis C, to prevent serious complications?",
        answer: "Hepatitis B vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "Hepatitis B vaccine"
        ]
      },
      {
        id: 44,
        question: "Among the listed vaccines, which one is recommended for individuals with diabetes to protect against pneumococcal infections, reducing the risk of complications?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 45,
        question: "Which vaccine is advised for individuals with chronic respiratory conditions, such as chronic obstructive pulmonary disease (COPD), to prevent exacerbations and complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "MMR (Measles, Mumps, Rubella) vaccine"
        ]
      },
      {
        id: 46,
        question: "Among the following vaccines, which one is particularly advised for individuals with chronic heart conditions, such as heart failure or coronary artery disease, to prevent complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 47,
        question: "Which vaccine is advised for individuals with compromised immune systems due to diseases like HIV/AIDS or certain medications to prevent severe infections?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "MMR (Measles, Mumps, Rubella) vaccine"
        ]
      },
      {
        id: 48,
        question: "Among the listed vaccines, which one is recommended for individuals on long-term steroid therapy or immunosuppressants to protect against pneumococcal infections?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 49,
        question: "Which vaccine is advised for individuals over 65 years old, particularly those residing in long-term care facilities, to prevent influenza and related complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "MMR (Measles, Mumps, Rubella) vaccine"
        ]
      },
      {
        id: 50,
        question: "Among the following vaccines, which one is recommended for individuals traveling to regions with a high risk of hepatitis A infection to prevent the disease?",
        answer: "Hepatitis A vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 51,
        question: "Which vaccine is advised for individuals with chronic kidney disease, including those on dialysis, to prevent severe complications from infections?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 52,
        question: "Among the listed vaccines, which one is advised for individuals with sickle cell disease or asplenia to prevent infections from encapsulated bacteria?",
        answer: "Pneumococcal polysaccharide vaccine (PPSV23)",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "MMR (Measles, Mumps, Rubella) vaccine"
        ]
      },
      {
        id: 53,
        question: "Which vaccine is recommended for individuals with a history of Guillain-Barré syndrome (GBS) or its associated risks to prevent influenza and related complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 54,
        question: "Among the following vaccines, which one is recommended for individuals with chronic neurological conditions, such as multiple sclerosis, to prevent severe infections?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 55,
        question: "Which vaccine is advised for individuals with chronic inflammatory conditions, like rheumatoid arthritis, to prevent infections and related complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 56,
        question: "Among the listed vaccines, which one is recommended for individuals undergoing chemotherapy or radiation therapy to protect against influenza and related complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 57,
        question: "Which vaccine is advised for individuals receiving immunosuppressive medications, like biologics, to prevent infections and severe complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      },
      {
        id: 58,
        question: "Among the following vaccines, which one is recommended for individuals with chronic lung conditions, like asthma, to prevent exacerbations and complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis A vaccine",
          "MMR (Measles, Mumps, Rubella) vaccine"
        ]
      },
      {
        id: 59,
        question: "Which vaccine is advised for individuals with chronic liver disease, including those with cirrhosis, to prevent infections and related complications?",
        answer: "Influenza vaccine",
        options: [
          "Td (Tetanus, diphtheria) vaccine",
          "Pneumococcal polysaccharide vaccine (PPSV23)",
          "Influenza vaccine",
          "Hepatitis B vaccine",
          "HPV (Human Papillomavirus) vaccine"
        ]
      }
];


export default IPVFlashcardMain;