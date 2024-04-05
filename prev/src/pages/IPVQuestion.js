import React, { useEffect, useState } from "react"
import ScoreView from "./ScoreView/ScoreView"
import QuizView from "./QuizView/QuizView"
import { useNavigate, Link } from "react-router-dom"
import classnames from "classnames" // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai" // Import icons if not already imported

const IPVQuestion = () => {
  const navigate = useNavigate()

  const [questions, useQuestions] = useState([
    {
      question:
        "Which type of vaccine is based on a weakened form of the pathogen that replicates in the host but causes a mild infection, stimulating an immune response without causing the disease?",
      answers: [
        { text: "Inactivated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Live attenuated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Live attenuated vaccines contain weakened pathogens that replicate in the host, triggering an immune response without causing severe illness.",
    },
    {
      question:
        "Among the following, which vaccine type uses a killed or inactivated form of the pathogen to induce an immune response without the risk of causing the disease in the host?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Inactivated vaccines employ killed or inactivated pathogens to prompt an immune response without the risk of causing the disease in the host.",
    },
    {
      question:
        "Which vaccine type is composed of genetic material, instructing cells to produce a viral protein that triggers an immune response against the pathogen?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine", isCorrect: true },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "mRNA vaccines utilize genetic material to direct cells to produce viral proteins, eliciting an immune response against the pathogen.",
    },
    {
      question:
        "Among the listed vaccine types, which one involves the use of a part of the pathogen, such as a protein or sugar, conjugated with a carrier protein to enhance the immune response, particularly in young children?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine", isCorrect: true },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Conjugate vaccines consist of pathogen parts conjugated with a carrier protein, amplifying the immune response, especially in young children.",
    },
    {
      question:
        "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine", isCorrect: true },
      ],
      Explanation:
        "Toxoid vaccines utilize chemically modified toxins to trigger an immune response against the toxin produced by the pathogen rather than the pathogen itself.",
    },
    {
      question:
        "Among the following vaccines, which one is an example of a live attenuated vaccine commonly administered for measles, mumps, and rubella (MMR)?",
      answers: [
        { text: "Polio vaccine" },
        { text: "Varicella vaccine", isCorrect: true },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "Tetanus vaccine" },
      ],
      Explanation:
        "The varicella vaccine is an example of a live attenuated vaccine administered for diseases like measles, mumps, and rubella (MMR).",
    },
    {
      question:
        "Which vaccine type includes examples such as the influenza vaccine and the rabies vaccine, which utilize inactivated forms of the pathogens to trigger an immune response?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Inactivated vaccines, like the influenza and rabies vaccines, employ inactivated forms of pathogens to prompt an immune response.",
    },
    {
      question:
        "Among the listed vaccines, which one involves the introduction of genetic material into cells to produce proteins that trigger an immune response, as seen in some COVID-19 vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine", isCorrect: true },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "mRNA vaccines introduce genetic material into cells to produce proteins that stimulate an immune response, as seen in certain COVID-19 vaccines.",
    },
    {
      question:
        "Which vaccine type is designed to prevent diseases caused by bacterial infections, particularly those with polysaccharide capsules, by enhancing the immune response against the bacteria's polysaccharide capsule?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine", isCorrect: true },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Conjugate vaccines aim to prevent diseases caused by bacteria with polysaccharide capsules by boosting the immune response against the bacteria's polysaccharide capsule.",
    },
    {
      question:
        "Among the following vaccines, which one utilizes weakened or attenuated forms of the poliovirus to induce an immune response without causing the disease in the host?",
      answers: [
        { text: "IPV (Inactivated Polio Vaccine)" },
        { text: "OPV (Oral Polio Vaccine)", isCorrect: true },
        { text: "HPV (Human Papillomavirus Vaccine)" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
        { text: "DTaP (Diphtheria, Tetanus, acellular Pertussis) vaccine" },
      ],
      Explanation:
        "The Oral Polio Vaccine (OPV) uses weakened or attenuated forms of the poliovirus to prompt an immune response without causing the disease.",
    },
    {
      question:
        "Which vaccine type uses killed or inactivated forms of the pathogen to trigger an immune response without the risk of causing the disease in the host, as seen in some seasonal influenza vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Inactivated vaccines, like some seasonal influenza vaccines, employ killed or inactivated forms of pathogens to induce an immune response without causing the disease.",
    },
    {
      question:
        "Among the listed vaccines, which one involves the use of a small, harmless piece of the pathogen, such as a protein or sugar, to trigger an immune response, as seen in the Hepatitis B vaccine?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Subunit vaccine", isCorrect: true },
      ],
      Explanation:
        "Subunit vaccines, like the Hepatitis B vaccine, use harmless pieces of pathogens to elicit an immune response.",
    },
    {
      question:
        "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself, as observed in the diphtheria and tetanus vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine", isCorrect: true },
      ],
      Explanation:
        "Toxoid vaccines, like the diphtheria and tetanus vaccines, prompt an immune response against toxins produced by the pathogen rather than the pathogen itself.",
    },
    {
      question:
        "Among the following vaccines, which one is an example of a live attenuated vaccine commonly administered for protection against measles, mumps, and rubella (MMR)?",
      answers: [
        { text: "Polio vaccine" },
        { text: "Varicella vaccine", isCorrect: true },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "Tetanus vaccine" },
      ],
      Explanation:
        "The varicella vaccine is an example of a live attenuated vaccine administered for diseases like measles, mumps, and rubella (MMR).",
    },
    {
      question:
        "Which vaccine type includes examples such as the influenza vaccine and the rabies vaccine, which utilize inactivated forms of the pathogens to trigger an immune response?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Inactivated vaccines, like the influenza and rabies vaccines, employ inactivated forms of pathogens to prompt an immune response.",
    },
    {
      question:
        "Among the listed vaccines, which one involves the introduction of genetic material into cells to produce proteins that trigger an immune response, as seen in some COVID-19 vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine", isCorrect: true },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "mRNA vaccines introduce genetic material into cells to produce proteins that stimulate an immune response, as seen in certain COVID-19 vaccines.",
    },
    {
      question:
        "Which vaccine type is designed to prevent diseases caused by bacterial infections, particularly those with polysaccharide capsules, by enhancing the immune response against the bacteria's polysaccharide capsule?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine", isCorrect: true },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Conjugate vaccines aim to prevent diseases caused by bacteria with polysaccharide capsules by boosting the immune response against the bacteria's polysaccharide capsule.",
    },
    {
      question:
        "Among the following vaccines, which one utilizes weakened or attenuated forms of the poliovirus to induce an immune response without causing the disease in the host?",
      answers: [
        { text: "IPV (Inactivated Polio Vaccine)" },
        { text: "OPV (Oral Polio Vaccine)", isCorrect: true },
        { text: "HPV (Human Papillomavirus Vaccine)" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
        { text: "DTaP (Diphtheria, Tetanus, acellular Pertussis) vaccine" },
      ],
      Explanation:
        "The Oral Polio Vaccine (OPV) uses weakened or attenuated forms of the poliovirus to prompt an immune response without causing the disease.",
    },
    {
      question:
        "Which vaccine type uses killed or inactivated forms of the pathogen to trigger an immune response without the risk of causing the disease in the host, as seen in some seasonal influenza vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine", isCorrect: true },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine" },
      ],
      Explanation:
        "Inactivated vaccines, like some seasonal influenza vaccines, employ killed or inactivated forms of pathogens to induce an immune response without causing the disease.",
    },
    {
      question:
        "Among the listed vaccines, which one involves the use of a small, harmless piece of the pathogen, such as a protein or sugar, to trigger an immune response, as seen in the Hepatitis B vaccine?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Subunit vaccine", isCorrect: true },
      ],
      Explanation:
        "Subunit vaccines, like the Hepatitis B vaccine, use harmless pieces of pathogens to elicit an immune response.",
    },
    {
      question:
        "Which vaccine type is based on a toxoid, a chemically modified toxin of the pathogen, aimed at stimulating an immune response against the toxin produced by the pathogen rather than the pathogen itself, as observed in the diphtheria and tetanus vaccines?",
      answers: [
        { text: "Live attenuated vaccine" },
        { text: "mRNA vaccine" },
        { text: "Inactivated vaccine" },
        { text: "Conjugate vaccine" },
        { text: "Toxoid vaccine", isCorrect: true },
      ],
      Explanation:
        "Toxoid vaccines, like the diphtheria and tetanus vaccines, prompt an immune response against toxins produced by the pathogen rather than the pathogen itself.",
    },
    {
      question:
        "At what age is the first dose of the DTaP/IPV/Hib/HepB vaccine typically administered to infants in the UK's childhood vaccination schedule?",
      answers: [
        { text: "2 months", isCorrect: true },
        { text: "4 months" },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The first dose of DTaP/IPV/Hib/HepB vaccine is typically given at 2 months as part of the childhood vaccination schedule in the UK.",
    },
    {
      question:
        "At what age do children usually receive the second dose of the DTaP/IPV/Hib/HepB vaccine in the UK's childhood vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "4 months", isCorrect: true },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The second dose of DTaP/IPV/Hib/HepB vaccine is typically administered at 4 months in the UK's childhood vaccination schedule.",
    },
    {
      question:
        "When do infants typically receive the third dose of the DTaP/IPV/Hib/HepB vaccine as per the UK's childhood vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "4 months" },
        { text: "6 months", isCorrect: true },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The third dose of DTaP/IPV/Hib/HepB vaccine is usually given at 6 months in the UK's childhood vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the MenB (Meningococcal B) vaccine typically administered to infants as part of the UK's vaccination schedule?",
      answers: [
        { text: "2 months", isCorrect: true },
        { text: "4 months" },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The first dose of the MenB (Meningococcal B) vaccine is usually given at 2 months as part of the UK's vaccination schedule.",
    },
    {
      question:
        "When is the booster dose of the MenB (Meningococcal B) vaccine typically given to infants in the UK's vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "4 months", isCorrect: true },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The booster dose of the MenB (Meningococcal B) vaccine is typically administered at 4 months in the UK's vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the MenACWY (Meningococcal ACWY) vaccine routinely given to adolescents in the UK?",
      answers: [
        { text: "10-11 years" },
        { text: "12-13 years", isCorrect: true },
        { text: "14-15 years" },
        { text: "16-18 years" },
        { text: "19-21 years" },
      ],
      Explanation:
        "The first dose of the MenACWY (Meningococcal ACWY) vaccine is typically given to adolescents at 12-13 years in the UK.",
    },
    {
      question:
        "When do adolescents usually receive the booster dose of the MenACWY (Meningococcal ACWY) vaccine in the UK?",
      answers: [
        { text: "10-11 years" },
        { text: "12-13 years" },
        { text: "14-15 years" },
        { text: "16-18 years", isCorrect: true },
        { text: "19-21 years" },
      ],
      Explanation:
        "Adolescents typically receive the booster dose of the MenACWY (Meningococcal ACWY) vaccine at 16-18 years in the UK.",
    },
    {
      question:
        "At what age is the first dose of the MMR (Measles, Mumps, Rubella) vaccine administered to children as part of the UK's vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "1 year", isCorrect: true },
        { text: "2 years" },
        { text: "3 years" },
        { text: "4 years" },
      ],
      Explanation:
        "The first dose of the MMR (Measles, Mumps, Rubella) vaccine is typically given at 1 year in the UK's vaccination schedule.",
    },
    {
      question:
        "When do children usually receive the second dose of the MMR (Measles, Mumps, Rubella) vaccine in the UK's vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "1 year" },
        { text: "2 years", isCorrect: true },
        { text: "3 years" },
        { text: "4 years" },
      ],
      Explanation:
        "The second dose of the MMR (Measles, Mumps, Rubella) vaccine is typically administered at 2 years in the UK's vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the HPV (Human Papillomavirus) vaccine routinely given to adolescents in the UK?",
      answers: [
        { text: "8-9 years" },
        { text: "10-11 years" },
        { text: "12-13 years", isCorrect: true },
        { text: "14-15 years" },
        { text: "16-18 years" },
      ],
      Explanation:
        "The first dose of the HPV (Human Papillomavirus) vaccine is usually given to adolescents at 12-13 years in the UK.",
    },
    {
      question:
        "When do adolescents typically receive the second dose of the HPV (Human Papillomavirus) vaccine in the UK?",
      answers: [
        { text: "8-9 years" },
        { text: "10-11 years" },
        { text: "12-13 years" },
        { text: "14-15 years" },
        { text: "16-18 years", isCorrect: true },
      ],
      Explanation:
        "Adolescents typically receive the second dose of the HPV (Human Papillomavirus) vaccine at 16-18 years in the UK.",
    },
    {
      question:
        "At what age is the first dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine administered to infants in the UK's vaccination schedule?",
      answers: [
        { text: "2 months", isCorrect: true },
        { text: "4 months" },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The first dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine is typically given at 2 months as part of the UK's vaccination schedule.",
    },
    {
      question:
        "When do infants usually receive the booster dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine in the UK?",
      answers: [
        { text: "2 months" },
        { text: "4 months", isCorrect: true },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "Infants typically receive the booster dose of the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine at 4 months in the UK's vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the PCV (Pneumococcal Conjugate Vaccine) administered to infants in the UK's vaccination schedule?",
      answers: [
        { text: "2 months", isCorrect: true },
        { text: "4 months" },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The first dose of the PCV (Pneumococcal Conjugate Vaccine) is typically given at 2 months as part of the UK's vaccination schedule.",
    },
    {
      question:
        "When do infants usually receive the second dose of the PCV (Pneumococcal Conjugate Vaccine) in the UK's vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "4 months", isCorrect: true },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "Infants typically receive the second dose of the PCV (Pneumococcal Conjugate Vaccine) at 4 months in the UK's vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the Rotavirus vaccine typically administered to infants in the UK's vaccination schedule?",
      answers: [
        { text: "2 months", isCorrect: true },
        { text: "4 months" },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "The first dose of the Rotavirus vaccine is typically given at 2 months as part of the UK's vaccination schedule.",
    },
    {
      question:
        "When do infants usually receive the second dose of the Rotavirus vaccine in the UK's vaccination schedule?",
      answers: [
        { text: "2 months" },
        { text: "4 months", isCorrect: true },
        { text: "6 months" },
        { text: "12 months" },
        { text: "18 months" },
      ],
      Explanation:
        "Infants typically receive the second dose of the Rotavirus vaccine at 4 months in the UK's vaccination schedule.",
    },
    {
      question:
        "At what age is the first dose of the BCG (Bacillus Calmette-Guérin) vaccine given to newborns in the UK at higher risk of tuberculosis?",
      answers: [
        { text: "At birth", isCorrect: true },
        { text: "1 month" },
        { text: "3 months" },
        { text: "6 months" },
        { text: "1 year" },
      ],
      Explanation:
        "The first dose of the BCG (Bacillus Calmette-Guérin) vaccine is typically given at birth to newborns at higher risk of tuberculosis in the UK.",
    },
    {
      question:
        "When do children typically receive the booster dose of the BCG (Bacillus Calmette-Guérin) vaccine in the UK?",
      answers: [
        { text: "At birth" },
        { text: "1 month" },
        { text: "3 months" },
        { text: "6 months" },
        { text: "1 year", isCorrect: true },
      ],
      Explanation:
        "Children typically receive the booster dose of the BCG (Bacillus Calmette-Guérin) vaccine at 1 year in the UK.",
    },
    {
      question:
        "Which vaccine is recommended for individuals aged 65 and older to protect against pneumococcal infections, particularly pneumonia and meningitis?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is recommended for individuals aged 65 and older to safeguard against pneumococcal infections.",
    },
    {
      question:
        "Among the following vaccines, which one is recommended for individuals over 65 years old to prevent shingles caused by the varicella-zoster virus?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine" },
        { text: "Zoster (Shingles) vaccine", isCorrect: true },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Zoster (Shingles) vaccine is recommended for individuals over 65 years old to prevent shingles caused by the varicella-zoster virus.",
    },
    {
      question:
        "Which vaccine is specifically advised for individuals with chronic liver disease, including hepatitis B and hepatitis C, to prevent serious complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "Hepatitis B vaccine", isCorrect: true },
      ],
      Explanation:
        "The Hepatitis B vaccine is specifically recommended for individuals with chronic liver disease, including hepatitis B and hepatitis C, to prevent serious complications.",
    },
    {
      question:
        "Among the listed vaccines, which one is recommended for individuals with diabetes to protect against pneumococcal infections, reducing the risk of complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is recommended for individuals with diabetes to shield against pneumococcal infections and related complications.",
    },
    {
      question:
        "Which vaccine is advised for individuals with chronic respiratory conditions, such as chronic obstructive pulmonary disease (COPD), to prevent exacerbations and complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis A vaccine" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is recommended for individuals with chronic respiratory conditions like COPD to prevent exacerbations and related complications.",
    },
    {
      question:
        "Among the following vaccines, which one is particularly advised for individuals with chronic heart conditions, such as heart failure or coronary artery disease, to prevent complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is specifically recommended for individuals with chronic heart conditions to prevent complications.",
    },
    {
      question:
        "Which vaccine is advised for individuals with compromised immune systems due to diseases like HIV/AIDS or certain medications to prevent severe infections?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is advised for individuals with compromised immune systems to prevent severe infections.",
    },
    {
      question:
        "Among the listed vaccines, which one is recommended for individuals on long-term steroid therapy or immunosuppressants to protect against pneumococcal infections?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is recommended for individuals on long-term steroid therapy or immunosuppressants to prevent pneumococcal infections.",
    },
    {
      question:
        "Which vaccine is advised for individuals over 65 years old, particularly those residing in long-term care facilities, to prevent influenza and related complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis A vaccine" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is specifically recommended for individuals over 65 years old, especially those in long-term care facilities, to prevent influenza and related complications.",
    },
    {
      question:
        "Among the following vaccines, which one is recommended for individuals traveling to regions with a high risk of hepatitis A infection to prevent the disease?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine", isCorrect: true },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Hepatitis A vaccine is advised for individuals traveling to high-risk regions to prevent hepatitis A infection.",
    },
    {
      question:
        "Which vaccine is advised for individuals with chronic kidney disease, including those on dialysis, to prevent severe complications from infections?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is recommended for individuals with chronic kidney disease, including those on dialysis, to prevent severe complications from infections.",
    },
    {
      question:
        "Among the listed vaccines, which one is advised for individuals with sickle cell disease or asplenia to prevent infections from encapsulated bacteria?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        {
          text: "Pneumococcal polysaccharide vaccine (PPSV23)",
          isCorrect: true,
        },
        { text: "Influenza vaccine" },
        { text: "Hepatitis A vaccine" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
      ],
      Explanation:
        "The Pneumococcal polysaccharide vaccine (PPSV23) is advised for individuals with sickle cell disease or asplenia to prevent infections from encapsulated bacteria.",
    },
    {
      question:
        "Which vaccine is recommended for individuals with a history of Guillain-Barré syndrome (GBS) or its associated risks to prevent influenza and related complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is recommended for individuals with a history of Guillain-Barré syndrome (GBS) or its associated risks to prevent influenza and related complications.",
    },
    {
      question:
        "Among the following vaccines, which one is recommended for individuals with chronic neurological conditions, such as multiple sclerosis, to prevent severe infections?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis A vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is recommended for individuals with chronic neurological conditions to prevent severe infections.",
    },
    {
      question:
        "Which vaccine is advised for individuals with chronic inflammatory conditions, like rheumatoid arthritis, to prevent infections and related complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is advised for individuals with chronic inflammatory conditions like rheumatoid arthritis to prevent infections and related complications.",
    },
    {
      question:
        "Among the listed vaccines, which one is recommended for individuals undergoing chemotherapy or radiation therapy to protect against influenza and related complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis A vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is recommended for individuals undergoing chemotherapy or radiation therapy to prevent influenza and related complications.",
    },
    {
      question:
        "Which vaccine is advised for individuals receiving immunosuppressive medications, like biologics, to prevent infections and severe complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is advised for individuals receiving immunosuppressive medications to prevent infections and severe complications.",
    },
    {
      question:
        "Among the following vaccines, which one is recommended for individuals with chronic lung conditions, like asthma, to prevent exacerbations and complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis A vaccine" },
        { text: "MMR (Measles, Mumps, Rubella) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is recommended for individuals with chronic lung conditions like asthma to prevent exacerbations and related complications.",
    },
    {
      question:
        "Which vaccine is advised for individuals with chronic liver disease, including those with cirrhosis, to prevent infections and related complications?",
      answers: [
        { text: "Td (Tetanus, diphtheria) vaccine" },
        { text: "Pneumococcal polysaccharide vaccine (PPSV23)" },
        { text: "Influenza vaccine", isCorrect: true },
        { text: "Hepatitis B vaccine" },
        { text: "HPV (Human Papillomavirus) vaccine" },
      ],
      Explanation:
        "The Influenza vaccine is advised for individuals with chronic liver disease, including those with cirrhosis, to prevent infections and related complications.",
    },
  ])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isQuizOver, setIsQuizOver] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [delayNextQuestion, setDelayNextQuestion] = useState(false)
  const [showExplanation, setShowExplanation] = useState(true) // Assuming you have a state for showing/hiding explanations

  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const handleAnswerClick = (isCorrect) => {
    if (!delayNextQuestion) {
      setSelectedAnswer(isCorrect)
      setDelayNextQuestion(true)

      // check score
      if (isCorrect) setScore(score + 1)

      setTimeout(() => {
        const next = currentQuestion + 1
        if (next < questions.length) {
          setCurrentQuestion(next)
          setSelectedAnswer(null) // Reset selected answer
          setDelayNextQuestion(false) // Reset delay
          shuffleQuestions(questions) // Shuffle questions for the next round
        } else {
          setIsQuizOver(true)
        }
      }, 5000) // 5000 milliseconds = 5 seconds
    }
  }

  const handleResetClick = () => {
    setScore(0)
    setCurrentQuestion(0)
    setIsQuizOver(false)
    setSelectedAnswer(null)
    setDelayNextQuestion(false)
    shuffleQuestions(questions)
  }

  return (
    <main>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-3 leftnavigation p-4">
            <Link className="navbar-brand" to="index.html">
              <img
                src="images/Logo.png"
                alt="PharmaQue Logo"
                className="logo1"
              />
              <span className="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" className="removeunderline inactivelink">
              <p className="pt-5 pb-3 m-0">
                <img
                  src="images/DashboardGrey.png"
                  className="navigationicon"
                  alt="icon"
                />
                <span className="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline activelink">
              <p class="py-3 m-0">
                <img
                  src="images/ChaptersColour.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Chapters</span>
              </p>
            </Link>
            <Link to="/flashcards" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlashcardsGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Flashcards</span>
              </p>
            </Link>
            <Link to="/flaggedquestions" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/FlaggedQuestionsGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">
                  Flagged Questions
                </span>
              </p>
            </Link>
            <Link to="/pastchapters" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/PastChaptersGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Past Chapters</span>
              </p>
            </Link>
            <Link to="/upcomingevents" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/UpcomingEventsGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
              </p>
            </Link>
            <Link to="/queryresponses" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/QueryResponsesGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Query Responses</span>
              </p>
            </Link>
            <Link to="/myaccount" class="removeunderline inactivelink">
              <p class="py-3 m-0">
                <img
                  src="images/AccountGrey.png"
                  class="navigationicon"
                  alt="icon"
                />
                <span class="fs-5 navigationoption mx-4">Account</span>
              </p>
            </Link>

            {/* Additional navigation links */}
          </div>
          <div className="col-sm-9 p-4 maincontent">
            <div className="row">
              <div className="col-sm-7">
                <p className="fs-4 mt-4 fw-bold navybluetext">
                  Chapter: Musculoskeletal and Joint Disease
                </p>
              </div>
              <div className="col-sm-5">
                <button
                  type="submit"
                  className="btn btn-primary back fw-bold fs-5 mt-4 floatright mb-4"
                >
                  <img
                    src="images/Back.png"
                    className="tinyicon mx-3"
                    alt="icon"
                  />
                  Back To Chapter Selection
                </button>
              </div>
            </div>
            <div className="App">
              {isQuizOver ? (
                <ScoreView
                  handleResetClick={handleResetClick}
                  score={score}
                  questions={questions}
                />
              ) : (
                <QuizView
                  questions={questions}
                  currentQuestion={currentQuestion}
                  handleAnswerClick={handleAnswerClick}
                  selectedAnswer={selectedAnswer}
                />
              )}
            </div>
            {/* Additional content */}
            <div className="row mt-3">
              <span className="fw-bold fs-5 navybluetext inline fitcontent">
                Discussion (1 Post)
              </span>
              <a
                href="#"
                className="removeunderline navybluetext inline fitcontent"
              >
                <span className="fs-5">
                  <img
                    src="images/SortIcon.png"
                    className="moderateicon mx-3"
                    alt="icon"
                  />{" "}
                  Sort By None
                </span>
              </a>
            </div>
            <div className="row mt-3">
              <div className="col-sm-1 ">
                <img
                  src="images/DummyAvatar.png"
                  className="midsizeicon mb-3"
                  alt="icon"
                />
              </div>
              <div className="col-sm-11">
                <div class="form">
                  <textarea
                    class="form-control fs-5"
                    rows="2"
                    id="comment"
                    placeholder="Write a comment"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                >
                  Post Comment
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-1 ">
                <img
                  src="images/DummyAvatar.png"
                  className="littlemidsizeicon mb-3"
                  alt="icon"
                />
              </div>
              <div className="col-sm-11">
                <span className="fs-5 fw-bold mediumbluetext">
                  Michael Andrew
                </span>
                <br />
                <span className="fs-5 navybluetext">
                  I don’t think this question will be very useful for Masters
                  level Pharmacy students like myself because we already learned
                  the answer to it in our Bachelors.
                </span>
                <p>
                  <button className="buttonstyle">
                    <img
                      src="images/ThumbsUp.png"
                      className="moderateicon mx-3 my-3"
                      alt="icon"
                    />
                  </button>
                  <button className="buttonstyle">
                    <img
                      src="images/ThumbsDown.png"
                      className="moderateicon mx-3 my-3"
                      alt="icon"
                    />
                  </button>
                  <a
                    href="#"
                    className="fw-bold fs-5 removeunderline navybluetext"
                  >
                    Reply
                  </a>
                  <a
                    href="#"
                    className="fw-bold fs-5 removeunderline navybluetext floatright mx-4 my-2"
                  >
                    Report
                  </a>
                </p>
              </div>
            </div>
            {/* End of additional content */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default IPVQuestion
