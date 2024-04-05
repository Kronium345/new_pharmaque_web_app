import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const InfectionFlashcardMain = () => {

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
        question: "A 45-year-old male with a history of penicillin allergy presents with severe cellulitis. Which antibiotic should be avoided in this patient?",
        answer: "Azithromycin",
        options: [
          "Ceftriaxone",
          "Vancomycin",
          "Azithromycin",
          "Cefazolin",
          "Clindamycin"
        ]
      },
      {
        id: 2,
        question: "A pregnant woman with a urinary tract infection requires antibiotic treatment. Which antibiotic should be avoided due to potential teratogenic effects?",
        answer: "Ciprofloxacin",
        options: [
          "Nitrofurantoin",
          "Amoxicillin",
          "Trimethoprim",
          "Ciprofloxacin",
          "Doxycycline"
        ]
      },
      {
        id: 3,
        question: "A patient is prescribed linezolid for a serious Gram-positive infection. Which adverse effect should be monitored closely?",
        answer: "Hematological toxicity",
        options: [
          "Hepatotoxicity",
          "Nephrotoxicity",
          "Hematological toxicity",
          "Peripheral neuropathy",
          "Hypothyroidism"
        ]
      },
      {
        id: 4,
        question: "A 30-year-old male with a confirmed diagnosis of tuberculosis is started on a multidrug regimen. What should be co-prescribed to prevent peripheral neuropathy?",
        answer: "Vitamin B6",
        options: [
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Folate",
          "Iron"
        ]
      },
      {
        id: 5,
        question: "A patient with a history of methicillin-resistant Staphylococcus aureus (MRSA) infection requires oral therapy. Which agent is effective against MRSA?",
        answer: "Linezolid",
        options: [
          "Amoxicillin",
          "Cephalexin",
          "Linezolid",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 6,
        question: "A 55-year-old patient is diagnosed with a urinary tract infection, and their urine culture reveals Escherichia coli. Which antibiotic is the best choice for empiric therapy?",
        answer: "Ciprofloxacin",
        options: [
          "Trimethoprim",
          "Ceftriaxone",
          "Ciprofloxacin",
          "Vancomycin",
          "Gentamicin"
        ]
      },
      {
        id: 7,
        question: "A 60-year-old patient with a history of Clostridium difficile infection (CDI) needs treatment for a skin abscess. Which antibiotic should be avoided due to a higher risk of CDI recurrence?",
        answer: "Clindamycin",
        options: [
          "Clindamycin",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Vancomycin"
        ]
      },
      {
        id: 8,
        question: "A patient is prescribed metronidazole for a bacterial vaginosis (BV) infection. What should be avoided while on this medication?",
        answer: "Alcohol consumption",
        options: [
          "Alcohol consumption",
          "Dairy products",
          "Citrus fruits",
          "Green leafy vegetables",
          "Caffeine"
        ]
      },
      {
        id: 9,
        question: "A 70-year-old patient with a history of chronic kidney disease (CKD) requires treatment for a urinary tract infection. Which antibiotic should be dose-adjusted in this patient?",
        answer: "Nitrofurantoin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Nitrofurantoin",
          "Ciprofloxacin",
          "Trimethoprim"
        ]
      },
      {
        id: 10,
        question: "A patient is on long-term therapy with amphotericin B for a fungal infection. Which electrolyte imbalance should be closely monitored?",
        answer: "Hyponatremia",
        options: [
          "Hyperkalemia",
          "Hyponatremia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ]
      },
      {
        id: 11,
        question: "A 25-year-old female presents with a severe skin infection caused by Pseudomonas aeruginosa. Which antibiotic is typically reserved for Pseudomonas infections?",
        answer: "Piperacillin/tazobactam",
        options: [
          "Cephalexin",
          "Doxycycline",
          "Amoxicillin",
          "Ciprofloxacin",
          "Piperacillin/tazobactam"
        ]
      },
      {
        id: 12,
        question: "A patient on long-term antifungal therapy with ketoconazole complains of erectile dysfunction. What is the most likely cause of this adverse effect?",
        answer: "Hyperprolactinemia",
        options: [
          "Hypertension",
          "Diabetes",
          "Hypothyroidism",
          "Hyperprolactinemia",
          "Hyperglycemia"
        ]
      },
      {
        id: 13,
        question: "A 40-year-old patient is diagnosed with a skin infection caused by a β-lactamase-producing organism. Which antibiotic is the best choice in this scenario?",
        answer: "Amoxicillin/clavulanate",
        options: [
          "Amoxicillin/clavulanate",
          "Ceftriaxone/sulbactam",
          "Cefepime",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 14,
        question: "A 60-year-old male with chronic obstructive pulmonary disease (COPD) is prescribed prophylactic antibiotics during exacerbations. Which antibiotic is recommended for this purpose?",
        answer: "Ciprofloxacin",
        options: [
          "Ciprofloxacin",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Trimethoprim/sulfamethoxazole"
        ]
      },
      {
        id: 15,
        question: "A patient with severe sepsis is started on an empiric antibiotic regimen. Which antibiotic combination covers both Gram-negative and Gram-positive organisms effectively?",
        answer: "Piperacillin/tazobactam + gentamicin",
        options: [
          "Vancomycin + ceftriaxone",
          "Azithromycin + doxycycline",
          "Piperacillin/tazobactam + gentamicin",
          "Amoxicillin/clavulanate + ciprofloxacin",
          "Trimethoprim/sulfamethoxazole + amphotericin B"
        ]
      },
      {
        id: 16,
        question: "A patient develops severe diarrhea after taking an antibiotic. What is the most likely causative agent of antibiotic-associated diarrhea (AAD)?",
        answer: "Clostridium difficile",
        options: [
          "Clostridium difficile",
          "Escherichia coli",
          "Streptococcus pneumoniae",
          "Lactobacillus species",
          "Staphylococcus aureus"
        ]
      },
      {
        id: 17,
        question: "A 35-year-old patient with a history of liver cirrhosis requires empiric antibiotic therapy for an abdominal infection. Which antibiotic should be used with caution due to hepatotoxicity risk?",
        answer: "Ciprofloxacin",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Amoxicillin/clavulanate",
          "Gentamicin"
        ]
      },
      {
        id: 18,
        question: "A 28-year-old female presents with a severe skin infection, and her medical history includes recent use of oral contraceptives. Which antibiotic may reduce contraceptive effectiveness?",
        answer: "Ciprofloxacin",
        options: [
          "Doxycycline",
          "Amoxicillin",
          "Ciprofloxacin",
          "Clindamycin",
          "Trimethoprim/sulfamethoxazole"
        ]
      },
      {
        id: 19,
        question: "A patient with a history of drug-resistant tuberculosis (TB) is started on a second-line TB regimen. Which antibiotic is commonly used in such regimens for drug-resistant TB?",
        answer: "Levofloxacin",
        options: [
          "Isoniazid",
          "Rifampicin",
          "Ethambutol",
          "Pyrazinamide",
          "Levofloxacin"
        ]
      },
      {
        id: 20,
        question: "A 50-year-old male with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to potential exacerbation of myasthenia gravis symptoms?",
        answer: "Ciprofloxacin",
        options: [
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin",
          "Amoxicillin/clavulanate",
          "Trimethoprim/sulfamethoxazole"
        ]
      },
      {
        id: 21,
        question: "Which antibiotics inhibit bacterial protein synthesis by binding to the 30S ribosomal subunit?",
        answer: "Tetracyclines",
        options: [
          "Penicillins",
          "Macrolides",
          "Quinolones",
          "Tetracyclines",
          "Glycopeptides"
        ]
      },
      {
        id: 22,
        question: "What is the primary mechanism of action of β-lactam antibiotics like penicillin?",
        answer: "Inhibition of cell wall",
        options: [
          "Inhibition of DNA gyrase",
          "Inhibition of cell wall",
          "Inhibition of RNA polymerase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 23,
        question: "Which antifungal agents inhibit ergosterol synthesis in fungal cell membranes?",
        answer: "Fluconazole",
        options: [
          "Amphotericin B",
          "Fluconazole",
          "Azithromycin",
          "Vancomycin",
          "Ceftriaxone"
        ]
      },
      {
        id: 24,
        question: "Which class of antibiotics interferes with bacterial DNA replication by targeting DNA gyrase?",
        answer: "Quinolones",
        options: [
          "Aminoglycosides",
          "Macrolides",
          "Quinolones",
          "Cephalosporins",
          "Glycopeptides"
        ]
      },
      {
        id: 25,
        question: "What is the primary mechanism of action of metronidazole in treating anaerobic bacterial infections?",
        answer: "DNA damage",
        options: [
          "Inhibition of RNA polymerase",
          "Inhibition of cell wall",
          "Inhibition of DNA gyrase",
          "DNA damage",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 26,
        question: "Which antiviral drug inhibits the activity of the viral enzyme reverse transcriptase in the treatment of HIV?",
        answer: "Zidovudine",
        options: [
          "Acyclovir",
          "Oseltamivir",
          "Zidovudine",
          "Amantadine",
          "Ribavirin"
        ]
      },
      {
        id: 27,
        question: "What is the primary mechanism of action of sulfonamide antibiotics?",
        answer: "Inhibition of folic acid synthesis",
        options: [
          "Inhibition of RNA polymerase",
          "Inhibition of cell wall",
          "Inhibition of DNA gyrase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 28,
        question: "Which class of antifungal drugs interferes with fungal cell membrane function by binding to ergosterol?",
        answer: "Polyenes",
        options: [
          "Polyenes",
          "Azoles",
          "Echinocandins",
          "Tetracyclines",
          "Aminoglycosides"
        ]
      },
      {
        id: 29,
        question: "Which antibiotic class inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs)?",
        answer: "β-lactams",
        options: [
          "Tetracyclines",
          "Macrolides",
          "Quinolones",
          "Cephalosporins",
          "β-lactams"
        ]
      },
      {
        id: 30,
        question: "What is the primary mechanism of action of oseltamivir in the treatment of influenza?",
        answer: "Inhibition of neuraminidase",
        options: [
          "Inhibition of DNA gyrase",
          "Inhibition of cell wall",
          "Inhibition of neuraminidase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 31,
        question: "Which antiviral drug inhibits the synthesis of viral DNA by acting as a nucleoside analog?",
        answer: "Zidovudine",
        options: [
          "Ribavirin",
          "Zidovudine",
          "Amantadine",
          "Oseltamivir",
          "Acyclovir"
        ]
      },
      {
        id: 32,
        question: "What is the primary mechanism of action of amphotericin B in the treatment of fungal infections?",
        answer: "Disruption of cell membrane",
        options: [
          "Inhibition of RNA polymerase",
          "Inhibition of cell wall",
          "Inhibition of DNA gyrase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 33,
        question: "Which class of antibiotics inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit?",
        answer: "Macrolides",
        options: [
          "Macrolides",
          "Tetracyclines",
          "Quinolones",
          "Aminoglycosides",
          "Glycopeptides"
        ]
      },
      {
        id: 34,
        question: "Which antifungal drug class interferes with fungal cell wall synthesis by inhibiting β-(1,3)-D-glucan synthesis?",
        answer: "Echinocandins",
        options: [
          "Polyenes",
          "Azoles",
          "Echinocandins",
          "Tetracyclines",
          "Aminoglycosides"
        ]
      },
      {
        id: 35,
        question: "Which antiviral drug inhibits the synthesis of viral RNA by blocking RNA-dependent RNA polymerase?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zidovudine",
          "Amantadine",
          "Oseltamivir",
          "Acyclovir"
        ]
      },
      {
        id: 36,
        question: "What is the primary mechanism of action of daptomycin, an antibiotic used to treat Gram-positive bacterial infections?",
        answer: "Disruption of cell membrane",
        options: [
          "Inhibition of RNA polymerase",
          "Inhibition of cell wall",
          "Inhibition of DNA gyrase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 37,
        question: "Which class of antibiotics inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit and disrupting peptide bond formation?",
        answer: "Macrolides",
        options: [
          "Aminoglycosides",
          "Macrolides",
          "Quinolones",
          "Tetracyclines",
          "Glycopeptides"
        ]
      },
      {
        id: 38,
        question: "What is the primary mechanism of action of acyclovir, an antiviral medication used to treat herpes virus infections?",
        answer: "Disruption of cell membrane",
        options: [
          "Inhibition of DNA gyrase",
          "Inhibition of cell wall",
          "Inhibition of RNA polymerase",
          "Disruption of cell membrane",
          "Inhibition of viral fusion"
        ]
      },
      {
        id: 39,
        question: "Which antifungal drug class inhibits fungal cell wall synthesis by inhibiting the enzyme 1,3-β-D-glucan synthase?",
        answer: "Echinocandins",
        options: [
          "Polyenes",
          "Azoles",
          "Echinocandins",
          "Tetracyclines",
          "Aminoglycosides"
        ]
      },
      {
        id: 40,
        question: "What is the primary mechanism of action of rifampicin, an antibiotic commonly used to treat tuberculosis?",
        answer: "Inhibition of RNA polymerase",
        options: [
          "Inhibition of DNA gyrase",
          "Inhibition of cell wall",
          "Inhibition of RNA polymerase",
          "Disruption of cell membrane",
          "Inhibition of folic acid synthesis"
        ]
      },
      {
        id: 41,
        question: "A 55-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should the pharmacist warn the patient about?",
        answer: "Hyperglycemia",
        options: [
          "Hypoglycemia",
          "Hyperglycemia",
          "Hypotension",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 42,
        question: "A 70-year-old patient with hypertension and osteoarthritis is taking warfarin for anticoagulation. The patient develops a skin infection and is prescribed trimethoprim/sulfamethoxazole. Which potential drug interaction should be addressed?",
        answer: "Increased INR",
        options: [
          "Increased INR",
          "Decreased blood pressure",
          "Hyperkalemia",
          "Photosensitivity",
          "GI bleeding"
        ]
      },
      {
        id: 43,
        question: "A 40-year-old patient with epilepsy is on long-term phenytoin therapy. The patient contracts a respiratory infection and is prescribed erythromycin. What potential drug interaction is a concern with this combination?",
        answer: "Increased phenytoin levels",
        options: [
          "Decreased phenytoin levels",
          "Increased phenytoin levels",
          "Seizure exacerbation",
          "Cardiac arrhythmias",
          "Photosensitivity"
        ]
      },
      {
        id: 44,
        question: "A 65-year-old patient with chronic kidney disease is prescribed gentamicin for a severe urinary tract infection. The patient is also taking furosemide for edema. What potential drug interaction should be considered in this case?",
        answer: "Nephrotoxicity",
        options: [
          "Nephrotoxicity",
          "Ototoxicity",
          "Hypokalemia",
          "Hyperkalemia",
          "Photosensitivity"
        ]
      },
      {
        id: 45,
        question: "A 50-year-old patient with depression is taking sertraline, an SSRI antidepressant. The patient develops a respiratory infection and is prescribed linezolid. What potential drug interaction should be communicated to the patient?",
        answer: "Serotonin syndrome",
        options: [
          "Serotonin syndrome",
          "Hypertensive crisis",
          "Gastrointestinal bleeding",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 46,
        question: "A 30-year-old patient with asthma is prescribed theophylline for bronchodilation. The patient develops a skin infection and is prescribed clarithromycin. What potential drug interaction should be discussed with the patient?",
        answer: "Increased theophylline levels",
        options: [
          "Increased theophylline levels",
          "Decreased theophylline levels",
          "Bronchospasm",
          "Hepatotoxicity",
          "Photosensitivity"
        ]
      },
      {
        id: 47,
        question: "A 60-year-old patient with chronic pain is taking oxycodone for pain management. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should be discussed with the patient?",
        answer: "Decreased analgesic effect",
        options: [
          "Decreased analgesic effect",
          "Increased analgesic effect",
          "Respiratory depression",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 48,
        question: "A 45-year-old patient with a history of bipolar disorder is taking lithium for mood stabilization. The patient develops a urinary tract infection and is prescribed amoxicillin. What potential drug interaction should be monitored in this case?",
        answer: "Increased lithium levels",
        options: [
          "Decreased lithium levels",
          "Increased lithium levels",
          "Lithium-induced tremor",
          "Lithium-induced rash",
          "Lithium-induced weight gain"
        ]
      },
      {
        id: 49,
        question: "A 55-year-old patient with coronary artery disease is taking clopidogrel as an antiplatelet agent. The patient develops cellulitis and is prescribed clarithromycin. What potential drug interaction should be addressed with the patient?",
        answer: "Decreased antiplatelet effect",
        options: [
          "Decreased antiplatelet effect",
          "Increased antiplatelet effect",
          "Gastrointestinal bleeding",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 50,
        question: "A 70-year-old patient with atrial fibrillation is taking warfarin as an anticoagulant. The patient develops a urinary tract infection and is prescribed nitrofurantoin. What potential drug interaction should be discussed with the patient?",
        answer: "Increased INR",
        options: [
          "Increased INR",
          "Decreased blood pressure",
          "Hyperkalemia",
          "Photosensitivity",
          "GI bleeding"
        ]
      },
      {
        id: 51,
        question: "A 60-year-old patient with chronic obstructive pulmonary disease (COPD) is taking theophylline for bronchodilation. The patient is prescribed azithromycin for a chest infection. What potential drug interaction should be discussed with the patient?",
        answer: "Increased theophylline levels",
        options: [
          "Increased theophylline levels",
          "Decreased theophylline levels",
          "Bronchospasm",
          "Hepatotoxicity",
          "Photosensitivity"
        ]
      },
      {
        id: 52,
        question: "A 50-year-old patient with irritable bowel syndrome (IBS) is taking loperamide for diarrhea control. The patient develops a respiratory infection and is prescribed clarithromycin. What potential drug interaction should be considered in this case?",
        answer: "Increased loperamide levels",
        options: [
          "Decreased loperamide levels",
          "Increased loperamide levels",
          "Respiratory depression",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 53,
        question: "A 40-year-old patient with rheumatoid arthritis is taking methotrexate for disease management. The patient develops a skin infection and is prescribed doxycycline. What potential drug interaction should be discussed with the patient?",
        answer: "Increased methotrexate toxicity",
        options: [
          "Decreased methotrexate efficacy",
          "Increased methotrexate toxicity",
          "Gastrointestinal bleeding",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 54,
        question: "A 65-year-old patient with Parkinson's disease is taking levodopa/carbidopa for symptom control. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should be discussed with the patient?",
        answer: "Decreased levodopa efficacy",
        options: [
          "Decreased levodopa efficacy",
          "Increased levodopa toxicity",
          "Respiratory depression",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 55,
        question: "A 55-year-old patient with epilepsy is taking valproic acid for seizure control. The patient develops a respiratory infection and is prescribed erythromycin. What potential drug interaction is a concern with this combination?",
        answer: "Increased valproic acid levels",
        options: [
          "Decreased valproic acid levels",
          "Increased valproic acid levels",
          "Seizure exacerbation",
          "Cardiac arrhythmias",
          "Photosensitivity"
        ]
      },
      {
        id: 56,
        question: "A 50-year-old patient with type 2 diabetes is taking glyburide for glycemic control. The patient develops cellulitis and is prescribed ciprofloxacin. What potential drug interaction should be addressed with the patient?",
        answer: "Hypoglycemia",
        options: [
          "Hypoglycemia",
          "Hyperglycemia",
          "Hypotension",
          "QT prolongation",
          "Photosensitivity"
        ]
      },
      {
        id: 57,
        question: "A 45-year-old patient with chronic kidney disease is prescribed vancomycin for a severe skin infection. The patient is also taking oral iron supplements for anemia. What potential drug interaction should be monitored in this case?",
        answer: "Iron toxicity",
        options: [
          "Nephrotoxicity",
          "Ototoxicity",
          "Hypokalemia",
          "Iron toxicity",
          "Photosensitivity"
        ]
      },
      {
        id: 58,
        question: "A 40-year-old female patient with a history of epilepsy is currently taking phenytoin to control seizures. She is diagnosed with a skin infection and prescribed an antibiotic. Which antibiotic is known to decrease the effectiveness of phenytoin?",
        answer: "Ciprofloxacin",
        options: [
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 59,
        question: "A 60-year-old male patient with heart failure is on digoxin therapy. He develops a respiratory infection and requires an antibiotic. Which antibiotic should be used cautiously due to an increased risk of digoxin toxicity?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Levofloxacin"
        ]
      },
      {
        id: 60,
        question: "A 45-year-old patient with chronic kidney disease (CKD) is diagnosed with a urinary tract infection. Which antibiotic should be used with caution and possibly dose-adjusted in this patient population due to renal impairment?",
        answer: "Nitrofurantoin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Nitrofurantoin",
          "Ciprofloxacin",
          "Trimethoprim"
        ]
      },
      {
        id: 61,
        question: "A 70-year-old patient with type 2 diabetes is prescribed an antibiotic for a respiratory infection. The patient is taking metformin to control blood sugar. Which antibiotic interaction should be monitored in this case?",
        answer: "Hypoglycemia",
        options: [
          "Increased risk of bleeding",
          "Hypoglycemia",
          "QT interval prolongation",
          "Hyperkalemia",
          "Neurotoxicity"
        ]
      },
      {
        id: 62,
        question: "A 50-year-old patient with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to the potential exacerbation of myasthenia gravis symptoms?",
        answer: "Ciprofloxacin",
        options: [
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin",
          "Amoxicillin/clavulanate",
          "Trimethoprim/sulfamethoxazole"
        ]
      },
      {
        id: 63,
        question: "A 45-year-old patient with chronic kidney disease (CKD) is diagnosed with a skin infection and requires antibiotic therapy. Which antibiotic should be used with caution and possibly dose-adjusted due to renal impairment?",
        answer: "Trimethoprim/sulfamethoxazole",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Trimethoprim/sulfamethoxazole",
          "Doxycycline",
          "Levofloxacin"
        ]
      },
      {
        id: 64,
        question: "A 70-year-old patient with type 2 diabetes is prescribed an antibiotic for a skin infection. The patient is taking sulfonylureas to control blood sugar. Which antibiotic interaction should be monitored in this case?",
        answer: "Hypoglycemia",
        options: [
          "Increased risk of bleeding",
          "Hypoglycemia",
          "QT interval prolongation",
          "Hyperkalemia",
          "Neurotoxicity"
        ]
      },
      {
        id: 65,
        question: "A 55-year-old patient with chronic liver disease is prescribed an antibiotic for a respiratory infection. Which antibiotic should be used with caution in this patient population due to potential hepatotoxicity?",
        answer: "Azithromycin",
        options: [
          "Ciprofloxacin",
          "Amoxicillin",
          "Azithromycin",
          "Trimethoprim/sulfamethoxazole",
          "Gentamicin"
        ]
      },
      {
        id: 66,
        question: "A 60-year-old male with a history of heart arrhythmia is prescribed an antibiotic for a urinary tract infection. Which antibiotic should be used cautiously due to the potential to prolong the QT interval and worsen the arrhythmia?",
        answer: "Azithromycin",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 67,
        question: "A 70-year-old patient with a history of chronic obstructive pulmonary disease (COPD) is prescribed prophylactic antibiotics during exacerbations. Which antibiotic is recommended for this purpose in COPD patients?",
        answer: "Azithromycin",
        options: [
          "Ciprofloxacin",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Trimethoprim/sulfamethoxazole"
        ]
      },
      {
        id: 68,
        question: "A 50-year-old male with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to the potential exacerbation of myasthenia gravis symptoms?",
        answer: "Ciprofloxacin",
        options: [
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin",
          "Amoxicillin/clavulanate",
          "Linezolid"
        ]
      },
      {
        id: 69,
        question: "A 35-year-old patient with a history of Clostridium difficile infection (CDI) is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to a higher risk of CDI recurrence?",
        answer: "Doxycycline",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Vancomycin"
        ]
      },
      {
        id: 70,
        question: "A 40-year-old patient with a history of epilepsy is currently taking carbamazepine to control seizures. The patient develops a urinary tract infection and is prescribed an antibiotic. Which antibiotic is known to decrease the effectiveness of carbamazepine?",
        answer: "Ciprofloxacin",
        options: [
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 71,
        question: "A 60-year-old patient with hypertension is on an ACE inhibitor. Which antibiotic should be avoided due to a risk of hyperkalemia when taken with an ACE inhibitor?",
        answer: "Trimethoprim/sulfamethoxazole",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Trimethoprim/sulfamethoxazole",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 72,
        question: "A 50-year-old patient with heart failure is on digoxin therapy. He develops a urinary tract infection and requires an antibiotic. Which antibiotic should be used cautiously due to an increased risk of digoxin toxicity?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Levofloxacin"
        ]
      },
      {
        id: 73,
        question: "A 55-year-old patient is prescribed an antibiotic for a respiratory infection. After a few days of treatment, the patient develops severe diarrhea. Which antibiotic is most likely responsible for this adverse effect?",
        answer: "Amoxicillin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Vancomycin"
        ]
      },
      {
        id: 74,
        question: "A 65-year-old patient with a history of gout is prescribed an antibiotic for a skin infection. The patient experiences sudden joint pain and swelling. Which antibiotic may have triggered a gout flare in this patient?",
        answer: "Amoxicillin/clavulanate",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Doxycycline",
          "Azithromycin",
          "Gentamicin"
        ]
      },
      {
        id: 75,
        question: "A 40-year-old patient taking methotrexate for rheumatoid arthritis develops a respiratory infection and is prescribed an antibiotic. Which antibiotic should be used cautiously to avoid interactions with methotrexate?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Levofloxacin"
        ]
      },
      {
        id: 76,
        question: "A 50-year-old patient with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient experiences increased muscle weakness. Which antibiotic may have exacerbated the myasthenia gravis symptoms?",
        answer: "Ciprofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Ciprofloxacin",
          "Azithromycin",
          "Vancomycin"
        ]
      },
      {
        id: 77,
        question: "A 60-year-old patient with hypertension is on an ACE inhibitor. After starting an antibiotic for a urinary tract infection, the patient experiences a persistent dry cough. Which antibiotic is most likely responsible for this side effect?",
        answer: "Amoxicillin/clavulanate",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Doxycycline",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 78,
        question: "A 70-year-old patient with a history of chronic kidney disease (CK) is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient experiences nausea, vomiting, and confusion. Which antibiotic may have caused these adverse effects?",
        answer: "Gentamicin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Gentamicin",
          "Azithromycin",
          "Doxycycline"
        ]
      },
      {
        id: 79,
        question: "A 45-year-old patient is prescribed an antibiotic for a skin infection. The patient experiences severe photosensitivity and a skin rash after exposure to sunlight. Which antibiotic is most likely responsible for this adverse effect?",
        answer: "Doxycycline",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 80,
        question: "A 55-year-old patient is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient develops a high fever, severe muscle stiffness, and confusion. Which antibiotic may have triggered these adverse effects?",
        answer: "Ciprofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Ciprofloxacin",
          "Azithromycin",
          "Gentamicin"
        ]
      },
      {
        id: 81,
        question: "A 65-year-old patient with a history of depression is taking a selective serotonin reuptake inhibitor (SSRI) for mood stabilization. The patient develops a urinary tract infection and is prescribed an antibiotic. Which antibiotic interaction should be monitored in this case?",
        answer: "Serotonin syndrome",
        options: [
          "Increased risk of bleeding",
          "Hypoglycemia",
          "Serotonin syndrome",
          "Nephrotoxicity",
          "Hyperkalemia"
        ]
      },
      {
        id: 82,
        question: "A 50-year-old patient with a history of rheumatoid arthritis is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient develops difficulty in breathing, a persistent cough, and chest pain. Which antibiotic may have triggered these adverse effects?",
        answer: "Azithromycin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 83,
        question: "A 60-year-old patient with chronic kidney disease (CK) is prescribed an antibiotic for a urinary tract infection. Shortly after starting the antibiotic, the patient experiences ringing in the ears and hearing loss. Which antibiotic may have caused these adverse effects?",
        answer: "Gentamicin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Gentamicin",
          "Azithromycin",
          "Doxycycline"
        ]
      },
      {
        id: 84,
        question: "A 70-year-old patient with hypertension is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient experiences a sudden drop in blood pressure, dizziness, and fainting. Which antibiotic may have caused these adverse effects?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Doxycycline",
          "Azithromycin",
          "Levofloxacin"
        ]
      },
      {
        id: 85,
        question: "A 45-year-old patient is prescribed an antibiotic for a skin infection. After starting the antibiotic, the patient develops severe diarrhea with bloody stools and abdominal pain. Which antibiotic may have triggered these adverse effects?",
        answer: "Amoxicillin/clavulanate",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Ciprofloxacin",
          "Azithromycin",
          "Doxycycline"
        ]
      },
      {
        id: 86,
        question: "A 50-year-old patient with a history of bipolar disorder is taking lithium for mood stabilization. The patient develops a respiratory infection and is prescribed an antibiotic. Which antibiotic interaction should be monitored in this case?",
        answer: "Lithium toxicity",
        options: [
          "Increased risk of bleeding",
          "Hypoglycemia",
          "Lithium toxicity",
          "Nephrotoxicity",
          "Neurotoxicity"
        ]
      },
      {
        id: 87,
        question: "A 35-year-old patient is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient experiences a severe headache, stiff neck, and sensitivity to light. Which antibiotic may have caused these adverse effects?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Amoxicillin/clavulanate",
          "Doxycycline",
          "Azithromycin",
          "Linezolid"
        ]
      },
      {
        id: 88,
        question: "Which antibiotic has the highest risk of causing Clostridium difficile-associated diarrhea?",
        answer: "Clindamycin",
        options: [
          "Ceftriaxone",
          "Clindamycin",
          "Vancomycin",
          "Amoxicillin",
          "Azithromycin"
        ]
      },
      {
        id: 89,
        question: "Which drug has the narrowest spectrum of activity against Gram-negative bacteria?",
        answer: "Aztreonam",
        options: [
          "Ciprofloxacin",
          "Meropenem",
          "Gentamicin",
          "Trimethoprim",
          "Aztreonam"
        ]
      },
      {
        id: 90,
        question: "Which antifungal medication requires dose adjustment in hepatic impairment?",
        answer: "Voriconazole",
        options: [
          "Fluconazole",
          "Voriconazole",
          "Amphotericin B",
          "Caspofungin",
          "Micafungin"
        ]
      },
      {
        id: 91,
        question: "Which antibiotic has the highest risk of causing tendinitis and tendon rupture?",
        answer: "Levofloxacin",
        options: [
          "Erythromycin",
          "Levofloxacin",
          "Cefotaxime",
          "Doxycycline",
          "Trimethoprim"
        ]
      },
      {
        id: 92,
        question: "Which drug is commonly associated with the development of Red Man Syndrome?",
        answer: "Vancomycin",
        options: [
          "Vancomycin",
          "Linezolid",
          "Daptomycin",
          "Teicoplanin",
          "Tigecycline"
        ]
      },
      {
        id: 93,
        question: "Which antiviral drug is least likely to cause bone marrow suppression?",
        answer: "Oseltamivir",
        options: [
          "Zidovudine",
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Foscarnet"
        ]
      },
      {
        id: 94,
        question: "Which antibiotic is most associated with causing ototoxicity?",
        answer: "Tobramycin",
        options: [
          "Tobramycin",
          "Azithromycin",
          "Cefepime",
          "Penicillin G",
          "Tetracycline"
        ]
      },
      {
        id: 95,
        question: "Which antifungal medication has the potential to cause hepatotoxicity?",
        answer: "Itraconazole",
        options: [
          "Caspofungin",
          "Itraconazole",
          "Micafungin",
          "Anidulafungin",
          "Fluconazole"
        ]
      },
      {
        id: 96,
        question: "Which drug is contraindicated in patients with G6PD deficiency due to the risk of hemolysis?",
        answer: "Sulfamethoxazole",
        options: [
          "Sulfamethoxazole",
          "Nitrofurantoin",
          "Metronidazole",
          "Ceftriaxone",
          "Penicillin V"
        ]
      },
      {
        id: 97,
        question: "Which antibiotic has the highest likelihood of causing pseudomembranous colitis?",
        answer: "Clindamycin",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Azithromycin",
          "Doxycycline",
          "Amoxicillin"
        ]
      },
      {
        id: 98,
        question: "Which antiviral agent can potentially cause psychiatric side effects such as hallucinations and confusion?",
        answer: "Ribavirin",
        options: [
          "Oseltamivir",
          "Zanamivir",
          "Acyclovir",
          "Ribavirin",
          "Ganciclovir"
        ]
      },
      {
        id: 99,
        question: "Which antibiotic may require dose adjustment in patients with severe renal impairment due to decreased clearance?",
        answer: "Vancomycin",
        options: [
          "Gentamicin",
          "Erythromycin",
          "Ceftriaxone",
          "Vancomycin",
          "Linezolid"
        ]
      },
      {
        id: 100,
        question: "Which antifungal medication has the potential for serious infusion-related reactions, including hypotension and bronchospasm?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B",
          "Fluconazole"
        ]
      },
      {
        id: 101,
        question: "Which drug is most commonly associated with the development of photosensitivity reactions?",
        answer: "Doxycycline",
        options: [
          "Doxycycline",
          "Trimethoprim",
          "Cefalexin",
          "Azithromycin",
          "Amoxicillin"
        ]
      },
      {
        id: 102,
        question: "Which antibiotic is least likely to cause prolongation of the QT interval?",
        answer: "Linezolid",
        options: [
          "Levofloxacin",
          "Clarithromycin",
          "Ciprofloxacin",
          "Moxifloxacin",
          "Linezolid"
        ]
      },
      {
        id: 103,
        question: "Which antifungal medication requires monitoring for visual disturbances due to potential ocular toxicity?",
        answer: "Voriconazole",
        options: [
          "Voriconazole",
          "Caspofungin",
          "Micafungin",
          "Anidulafungin",
          "Fluconazole"
        ]
      },
      {
        id: 104,
        question: "Which drug is associated with the risk of causing agranulocytosis, leading to severe neutropenia?",
        answer: "Co-trimoxazole",
        options: [
          "Carbapenems",
          "Methicillin",
          "Co-trimoxazole",
          "Linezolid",
          "Cloxacillin"
        ]
      },
      {
        id: 105,
        question: "Which antibiotic is most likely to cause drug-induced liver injury (DILI) among the listed options?",
        answer: "Rifampicin",
        options: [
          "Azithromycin",
          "Ceftriaxone",
          "Rifampicin",
          "Amoxicillin",
          "Clindamycin"
        ]
      },
      {
        id: 106,
        question: "Which antiviral medication is associated with the highest risk of renal toxicity?",
        answer: "Ganciclovir",
        options: [
          "Acyclovir",
          "Zidovudine",
          "Ganciclovir",
          "Oseltamivir",
          "Ribavirin"
        ]
      },
      {
        id: 107,
        question: "Which antibiotic is least likely to cause disruption of the normal gut flora?",
        answer: "Trimethoprim",
        options: [
          "Ampicillin",
          "Tetracycline",
          "Metronidazole",
          "Cefixime",
          "Trimethoprim"
        ]
      },
      {
        id: 108,
        question: "Which antibiotic is most associated with causing pseudomembranous colitis?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Amoxicillin",
          "Doxycycline"
        ]
      },
      {
        id: 109,
        question: "Among the listed antibiotics, which one has the highest likelihood of causing QT interval prolongation?",
        answer: "Moxifloxacin",
        options: [
          "Levofloxacin",
          "Ciprofloxacin",
          "Moxifloxacin",
          "Clindamycin",
          "Linezolid"
        ]
      },
      {
        id: 110,
        question: "Which antifungal medication carries the risk of causing hepatotoxicity?",
        answer: "Itraconazole",
        options: [
          "Fluconazole",
          "Caspofungin",
          "Micafungin",
          "Itraconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 111,
        question: "Among the listed antibiotics, which one has the broadest spectrum of activity against Gram-negative bacteria?",
        answer: "Meropenem",
        options: [
          "Cefepime",
          "Amoxicillin",
          "Ciprofloxacin",
          "Meropenem",
          "Doxycycline"
        ]
      },
      {
        id: 112,
        question: "Which antibiotic is most commonly associated with causing tendon rupture and tendinitis?",
        answer: "Levofloxacin",
        options: [
          "Levofloxacin",
          "Ceftriaxone",
          "Vancomycin",
          "Azithromycin",
          "Amoxicillin"
        ]
      },
      {
        id: 113,
        question: "Among the listed antiviral medications, which one is least likely to cause central nervous system (CNS) side effects?",
        answer: "Zanamivir",
        options: [
          "Acyclovir",
          "Ribavirin",
          "Zanamivir",
          "Ganciclovir",
          "Oseltamivir"
        ]
      },
      {
        id: 114,
        question: "Which antifungal medication may require dose adjustment in patients with hepatic impairment due to altered metabolism?",
        answer: "Voriconazole",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole",
          "Micafungin"
        ]
      },
      {
        id: 115,
        question: "Among the listed antibiotics, which one is most likely to cause photosensitivity reactions?",
        answer: "Doxycycline",
        options: [
          "Trimethoprim",
          "Doxycycline",
          "Cefalexin",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 116,
        question: "Which antibiotic is most commonly associated with causing a metallic taste as an adverse effect?",
        answer: "Metronidazole",
        options: [
          "Clarithromycin",
          "Metronidazole",
          "Amoxicillin",
          "Erythromycin",
          "Cefixime"
        ]
      },
      {
        id: 117,
        question: "Among the listed antiviral agents, which one has the potential to cause hemolytic anemia in patients with glucose-6-phosphate dehydrogenase (G6PD) deficiency?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zidovudine",
          "Ganciclovir",
          "Acyclovir",
          "Oseltamivir"
        ]
      },
      {
        id: 118,
        question: "Which antifungal medication is most commonly associated with infusion-related reactions such as fever and chills?",
        answer: "Amphotericin B",
        options: [
          "Fluconazole",
          "Micafungin",
          "Voriconazole",
          "Anidulafungin",
          "Amphotericin B"
        ]
      },
      {
        id: 119,
        question: "Among the listed antibiotics, which one requires monitoring for auditory toxicity, particularly affecting hearing?",
        answer: "Gentamicin",
        options: [
          "Gentamicin",
          "Ceftriaxone",
          "Azithromycin",
          "Vancomycin",
          "Linezolid"
        ]
      },
      {
        id: 120,
        question: "Which antibiotic is most commonly associated with the development of Red Man Syndrome upon rapid infusion?",
        answer: "Vancomycin",
        options: [
          "Vancomycin",
          "Teicoplanin",
          "Daptomycin",
          "Linezolid",
          "Tigecycline"
        ]
      },
      {
        id: 121,
        question: "Among the listed antiviral medications, which one has the highest risk of causing renal toxicity?",
        answer: "Ganciclovir",
        options: [
          "Zidovudine",
          "Ribavirin",
          "Acyclovir",
          "Ganciclovir",
          "Oseltamivir"
        ]
      },
      {
        id: 122,
        question: "Which antifungal medication has the potential to cause visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Voriconazole",
          "Caspofungin",
          "Fluconazole"
        ]
      },
      {
        id: 123,
        question: "Among the listed antibiotics, which one is least likely to cause disruption of the normal gut flora?",
        answer: "Trimethoprim",
        options: [
          "Tetracycline",
          "Amoxicillin",
          "Metronidazole",
          "Cefixime",
          "Trimethoprim"
        ]
      },
      {
        id: 124,
        question: "Which antibiotic is most commonly associated with causing drug-induced liver injury (DILI)?",
        answer: "Rifampicin",
        options: [
          "Azithromycin",
          "Ceftriaxone",
          "Rifampicin",
          "Amoxicillin",
          "Clindamycin"
        ]
      },
      {
        id: 125,
        question: "Among the listed antiviral medications, which one is most likely to cause psychiatric side effects such as hallucinations and confusion?",
        answer: "Ribavirin",
        options: [
          "Oseltamivir",
          "Zanamivir",
          "Acyclovir",
          "Ribavirin",
          "Ganciclovir"
        ]
      },
      {
        id: 126,
        question: "Which antibiotic has the narrowest spectrum of activity against Gram-positive bacteria?",
        answer: "Teicoplanin",
        options: [
          "Linezolid",
          "Vancomycin",
          "Daptomycin",
          "Teicoplanin",
          "Clindamycin"
        ]
      },
      {
        id: 127,
        question: "Which antifungal medication requires monitoring for potential infusion-related reactions such as hypotension and bronchospasm?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Micafungin",
          "Caspofungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 128,
        question: "Among the listed antibiotics, which one has the highest risk of causing peripheral neuropathy as an adverse effect?",
        answer: "Metronidazole",
        options: [
          "Linezolid",
          "Ciprofloxacin",
          "Metronidazole",
          "Erythromycin",
          "Trimethoprim"
        ]
      },
      {
        id: 129,
        question: "Which antifungal medication may require therapeutic drug monitoring due to its variable pharmacokinetics and potential for drug interactions?",
        answer: "Voriconazole",
        options: [
          "Voriconazole",
          "Fluconazole",
          "Caspofungin",
          "Micafungin",
          "Anidulafungin"
        ]
      },
      {
        id: 130,
        question: "Among the listed antibiotics, which one is least likely to cause Clostridium difficile-associated diarrhea (CDAD)?",
        answer: "Vancomycin",
        options: [
          "Amoxicillin",
          "Azithromycin",
          "Ceftriaxone",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 131,
        question: "Which antiviral medication is most commonly associated with renal impairment and requires dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir",
        options: [
          "Acyclovir",
          "Zidovudine",
          "Oseltamivir",
          "Ribavirin",
          "Ganciclovir"
        ]
      },
      {
        id: 132,
        question: "Which antibiotic is most commonly associated with causing a disulfiram-like reaction when combined with alcohol?",
        answer: "Metronidazole",
        options: [
          "Ciprofloxacin",
          "Metronidazole",
          "Clindamycin",
          "Doxycycline",
          "Trimethoprim"
        ]
      },
      {
        id: 133,
        question: "Among the listed antibiotics, which one is most associated with causing myelosuppression and may necessitate regular monitoring of blood counts?",
        answer: "Clindamycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Clindamycin",
          "Trimethoprim",
          "Linezolid"
        ]
      },
      {
        id: 134,
        question: "Which antifungal medication is most commonly associated with causing QT interval prolongation?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Fluconazole",
          "Voriconazole",
          "Caspofungin"
        ]
      },
      {
        id: 135,
        question: "Among the listed antibiotics, which one is most commonly associated with causing crystalluria as an adverse effect?",
        answer: "Trimethoprim",
        options: [
          "Ceftriaxone",
          "Amoxicillin",
          "Ciprofloxacin",
          "Trimethoprim",
          "Doxycycline"
        ]
      },
      {
        id: 136,
        question: "Which antibiotic is most associated with the development of tendinopathy and tendon rupture?",
        answer: "Levofloxacin",
        options: [
          "Levofloxacin",
          "Ceftriaxone",
          "Azithromycin",
          "Amoxicillin",
          "Tetracycline"
        ]
      },
      {
        id: 137,
        question: "Among the listed antiviral medications, which one is least likely to cause gastrointestinal disturbances as a common adverse effect?",
        answer: "Zidovudine",
        options: [
          "Zidovudine",
          "Ribavirin",
          "Acyclovir",
          "Ganciclovir",
          "Oseltamivir"
        ]
      },
      {
        id: 138,
        question: "Which antifungal medication is most commonly associated with hepatotoxicity and may necessitate liver function monitoring during therapy?",
        answer: "Voriconazole",
        options: [
          "Caspofungin",
          "Micafungin",
          "Anidulafungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 139,
        question: "Among the listed antibiotics, which one has the highest risk of causing hypersensitivity reactions, including Stevens-Johnson syndrome?",
        answer: "Azithromycin",
        options: [
          "Cefalexin",
          "Doxycycline",
          "Azithromycin",
          "Ciprofloxacin",
          "Amoxicillin"
        ]
      },
      {
        id: 140,
        question: "Which antiviral medication is most commonly associated with causing neuropsychiatric side effects, such as depression and mood changes?",
        answer: "Oseltamivir",
        options: [
          "Ribavirin",
          "Oseltamivir",
          "Zanamivir",
          "Acyclovir",
          "Ganciclovir"
        ]
      },
      {
        id: 141,
        question: "Among the listed antibiotics, which one has the highest risk of causing ototoxicity?",
        answer: "Gentamicin",
        options: [
          "Linezolid",
          "Azithromycin",
          "Ceftriaxone",
          "Amoxicillin",
          "Gentamicin"
        ]
      },
      {
        id: 142,
        question: "Which antibiotic is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Ceftriaxone",
          "Clindamycin",
          "Vancomycin",
          "Minocycline",
          "Amoxicillin"
        ]
      },
      {
        id: 143,
        question: "Among the listed antiviral medications, which one is least likely to cause bone marrow suppression?",
        answer: "Zanamivir",
        options: [
          "Ribavirin",
          "Zidovudine",
          "Acyclovir",
          "Oseltamivir",
          "Zanamivir"
        ]
      },
      {
        id: 144,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, including fever and chills?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Micafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 145,
        question: "Among the listed antibiotics, which one has the highest risk of causing gastrointestinal disturbances, such as pseudomembranous colitis?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Doxycycline",
          "Amoxicillin",
          "Vancomycin"
        ]
      },
      {
        id: 146,
        question: "Which antibiotic is most commonly associated with causing drug-induced liver injury (DILI) and may require monitoring of liver function tests during therapy?",
        answer: "Rifampicin",
        options: [
          "Azithromycin",
          "Ceftriaxone",
          "Rifampicin",
          "Amoxicillin",
          "Clindamycin"
        ]
      },
      {
        id: 147,
        question: "Among the listed antiviral medications, which one has the potential to cause hemolytic anemia in individuals with glucose-6-phosphate dehydrogenase (G6PD) deficiency?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zidovudine",
          "Ganciclovir",
          "Acyclovir",
          "Oseltamivir"
        ]
      },
      {
        id: 148,
        question: "Among the listed antibiotics, which one is most commonly associated with causing tendonitis and tendon rupture?",
        answer: "Levofloxacin",
        options: [
          "Levofloxacin",
          "Ceftriaxone",
          "Azithromycin",
          "Amoxicillin",
          "Tetracycline"
        ]
      },
      {
        id: 149,
        question: "Which antifungal medication is most commonly associated with causing electrolyte abnormalities, such as hypokalemia and hypomagnesemia?",
        answer: "Amphotericin B",
        options: [
          "Fluconazole",
          "Voriconazole",
          "Caspofungin",
          "Micafungin",
          "Amphotericin B"
        ]
      },
      {
        id: 150,
        question: "Among the listed antibiotics, which one is least likely to cause photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Cefalexin",
        options: [
          "Doxycycline",
          "Cefalexin",
          "Trimethoprim",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 151,
        question: "Which antiviral medication is most commonly associated with causing CNS side effects, such as confusion and hallucinations, especially in elderly patients?",
        answer: "Ribavirin",
        options: [
          "Zanamivir",
          "Acyclovir",
          "Ribavirin",
          "Oseltamivir",
          "Ganciclovir"
        ]
      },
      {
        id: 152,
        question: "Among the listed antibiotics, which one is most commonly associated with causing a metallic taste in the mouth as an adverse effect?",
        answer: "Ceftriaxone",
        options: [
          "Metronidazole",
          "Clarithromycin",
          "Doxycycline",
          "Amoxicillin",
          "Ceftriaxone"
        ]
      },
      {
        id: 153,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, including fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B",
        options: [
          "Caspofungin",
          "Micafungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 154,
        question: "Among the listed antibiotics, which one has the highest risk of causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Minocycline",
          "Doxycycline"
        ]
      },
      {
        id: 155,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity, potentially leading to renal impairment?",
        answer: "Ganciclovir",
        options: [
          "Acyclovir",
          "Zidovudine",
          "Oseltamivir",
          "Ganciclovir",
          "Ribavirin"
        ]
      },
      {
        id: 156,
        question: "Among the listed antibiotics, which one is least likely to cause disruption of the normal gut flora?",
        answer: "Vancomycin",
        options: [
          "Amoxicillin",
          "Vancomycin",
          "Ceftriaxone",
          "Clindamycin",
          "Doxycycline"
        ]
      },
      {
        id: 157,
        question: "Which antifungal medication is most commonly associated with causing hepatic impairment and may require liver function monitoring during therapy?",
        answer: "Voriconazole",
        options: [
          "Fluconazole",
          "Caspofungin",
          "Voriconazole",
          "Micafungin",
          "Anidulafungin"
        ]
      },
      {
        id: 158,
        question: "Among the listed antibiotics, which one is most commonly associated with causing tendinopathy and tendon rupture?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Levofloxacin",
          "Amoxicillin",
          "Erythromycin"
        ]
      },
      {
        id: 159,
        question: "Which antiviral medication is most commonly associated with causing retinal toxicity and visual disturbances, requiring ophthalmologic monitoring during therapy?",
        answer: "Ganciclovir",
        options: [
          "Acyclovir",
          "Ribavirin",
          "Ganciclovir",
          "Oseltamivir",
          "Zanamivir"
        ]
      },
      {
        id: 160,
        question: "Among the listed antibiotics, which one has the highest risk of causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline",
        options: [
          "Doxycycline",
          "Amoxicillin",
          "Trimethoprim",
          "Cefalexin",
          "Azithromycin"
        ]
      },
      {
        id: 161,
        question: "Which antifungal medication is most commonly associated with causing QT interval prolongation, potentially leading to arrhythmias?",
        answer: "Voriconazole",
        options: [
          "Anidulafungin",
          "Micafungin",
          "Voriconazole",
          "Caspofungin",
          "Fluconazole"
        ]
      },
      {
        id: 162,
        question: "Among the listed antibiotics, which one is most commonly associated with causing a disulfiram-like reaction when combined with alcohol?",
        answer: "Metronidazole",
        options: [
          "Ceftriaxone",
          "Doxycycline",
          "Metronidazole",
          "Amoxicillin",
          "Trimethoprim"
        ]
      },
      {
        id: 163,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zanamivir",
          "Oseltamivir",
          "Ganciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 164,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 165,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Caspofungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 166,
        question: "Among the listed antibiotics, which one has the highest risk of causing hypoglycemia as an adverse effect?",
        answer: "Linezolid",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Azithromycin",
          "Amoxicillin",
          "Linezolid"
        ]
      },
      {
        id: 167,
        question: "Which antiviral medication is most commonly associated with causing bone marrow suppression, leading to hematologic side effects?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Ganciclovir",
          "Zidovudine"
        ]
      },
      {
        id: 168,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 169,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 170,
        question: "Among the listed antibiotics, which one is least likely to cause tendonitis and tendon rupture as an adverse effect?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Levofloxacin",
          "Amoxicillin",
          "Erythromycin",
          "Trimethoprim"
        ]
      },
      {
        id: 171,
        question: "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
        answer: "Ribavirin",
        options: [
          "Acyclovir",
          "Ribavirin",
          "Oseltamivir",
          "Ganciclovir",
          "Zanamivir"
        ]
      },
      {
        id: 172,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline",
        options: [
          "Ciprofloxacin",
          "Doxycycline",
          "Amoxicillin",
          "Azithromycin",
          "Cefalexin"
        ]
      },
      {
        id: 173,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Micafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 174,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Minocycline",
          "Doxycycline"
        ]
      },
      {
        id: 175,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir",
        options: [
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Ganciclovir",
          "Zidovudine"
        ]
      },
      {
        id: 176,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Amoxicillin",
          "Doxycycline",
          "Linezolid"
        ]
      },
      {
        id: 177,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Caspofungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 178,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 179,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zanamivir",
          "Oseltamivir",
          "Ganciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 180,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 181,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 182,
        question: "Among the listed antibiotics, which one is least commonly associated with causing tendonitis and tendon rupture as an adverse effect?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Levofloxacin",
          "Amoxicillin",
          "Erythromycin",
          "Trimethoprim"
        ]
      },
      {
        id: 183,
        question: "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
        answer: "Ribavirin",
        options: [
          "Acyclovir",
          "Ribavirin",
          "Oseltamivir",
          "Ganciclovir",
          "Zanamivir"
        ]
      },
      {
        id: 184,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline",
        options: [
          "Ciprofloxacin",
          "Doxycycline",
          "Amoxicillin",
          "Azithromycin",
          "Cefalexin"
        ]
      },
      {
        id: 185,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Micafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 186,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Minocycline",
          "Doxycycline"
        ]
      },
      {
        id: 187,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir",
        options: [
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Ganciclovir",
          "Zidovudine"
        ]
      },
      {
        id: 188,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Amoxicillin",
          "Doxycycline",
          "Linezolid"
        ]
      },
      {
        id: 189,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Caspofungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 190,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 191,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zanamivir",
          "Oseltamivir",
          "Ganciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 192,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 193,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 194,
        question: "Among the listed antibiotics, which one is least commonly associated with causing tendonitis and tendon rupture as an adverse effect?",
        answer: "Levofloxacin",
        options: [
          "Ceftriaxone",
          "Levofloxacin",
          "Amoxicillin",
          "Erythromycin",
          "Trimethoprim"
        ]
      },
      {
        id: 195,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zanamivir",
          "Oseltamivir",
          "Ganciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 196,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 197,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 198,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline",
        options: [
          "Ciprofloxacin",
          "Doxycycline",
          "Amoxicillin",
          "Azithromycin",
          "Cefalexin"
        ]
      },
      {
        id: 199,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Micafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 200,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Minocycline",
          "Doxycycline"
        ]
      },
      {
        id: 201,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir",
        options: [
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Ganciclovir",
          "Zidovudine"
        ]
      },
      {
        id: 202,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Amoxicillin",
          "Doxycycline",
          "Linezolid"
        ]
      },
      {
        id: 203,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Caspofungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 204,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 205,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin",
        options: [
          "Ribavirin",
          "Zanamivir",
          "Oseltamivir",
          "Ganciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 206,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 207,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole",
        options: [
          "Micafungin",
          "Anidulafungin",
          "Caspofungin",
          "Voriconazole",
          "Fluconazole"
        ]
      },
      {
        id: 208,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline",
        options: [
          "Ciprofloxacin",
          "Doxycycline",
          "Amoxicillin",
          "Azithromycin",
          "Cefalexin"
        ]
      },
      {
        id: 209,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B",
        options: [
          "Anidulafungin",
          "Caspofungin",
          "Micafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 210,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline",
        options: [
          "Azithromycin",
          "Amoxicillin",
          "Ciprofloxacin",
          "Minocycline",
          "Doxycycline"
        ]
      },
      {
        id: 211,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir",
        options: [
          "Ribavirin",
          "Acyclovir",
          "Oseltamivir",
          "Ganciclovir",
          "Zidovudine"
        ]
      },
      {
        id: 212,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid",
        options: [
          "Ciprofloxacin",
          "Clindamycin",
          "Amoxicillin",
          "Doxycycline",
          "Linezolid"
        ]
      },
      {
        id: 213,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B",
        options: [
          "Micafungin",
          "Caspofungin",
          "Anidulafungin",
          "Voriconazole",
          "Amphotericin B"
        ]
      },
      {
        id: 214,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone",
        options: [
          "Ceftriaxone",
          "Azithromycin",
          "Ciprofloxacin",
          "Doxycycline",
          "Vancomycin"
        ]
      },
      {
        id: 215,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Omeprazole increases warfarin bioavailability",
        options: [
          "Omeprazole decreases warfarin metabolism",
          "Omeprazole inhibits warfarin absorption",
          "Omeprazole increases warfarin bioavailability",
          "Omeprazole induces warfarin metabolism",
          "Omeprazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 216,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Fluconazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 217,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin interferes with warfarin binding sites"
        ]
      },
      {
        id: 218,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B interferes with warfarin binding sites"
        ]
      },
      {
        id: 219,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline increases warfarin bioavailability",
        options: [
          "Azithromycin decreases warfarin metabolism",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin increases warfarin bioavailability",
          "Minocycline induces warfarin metabolism",
          "Doxycycline interferes with warfarin binding sites"
        ]
      },
      {
        id: 220,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir increases warfarin bioavailability",
        options: [
          "Ribavirin decreases warfarin metabolism",
          "Acyclovir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Zidovudine interferes with warfarin binding sites"
        ]
      },
      {
        id: 221,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid interferes with warfarin binding sites"
        ]
      },
      {
        id: 222,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B interferes with warfarin binding sites"
        ]
      },
      {
        id: 223,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone decreases warfarin metabolism",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin interferes with warfarin binding sites"
        ]
      },
      {
        id: 224,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin decreases warfarin metabolism",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir interferes with warfarin binding sites"
        ]
      },
      {
        id: 225,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Omeprazole increases warfarin bioavailability",
        options: [
          "Omeprazole decreases warfarin metabolism",
          "Omeprazole inhibits warfarin absorption",
          "Omeprazole increases warfarin bioavailability",
          "Omeprazole induces warfarin metabolism",
          "Omeprazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 226,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Fluconazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 227,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin interferes with warfarin binding sites"
        ]
      },
      {
        id: 228,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B interferes with warfarin binding sites"
        ]
      },
      {
        id: 229,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid interferes with warfarin binding sites"
        ]
      },
      {
        id: 230,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B interferes with warfarin binding sites"
        ]
      },
      {
        id: 231,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone decreases warfarin metabolism",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin interferes with warfarin binding sites"
        ]
      },
      {
        id: 232,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin decreases warfarin metabolism",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir interferes with warfarin binding sites"
        ]
      },
      {
        id: 233,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Omeprazole increases warfarin bioavailability",
        options: [
          "Omeprazole decreases warfarin metabolism",
          "Omeprazole inhibits warfarin absorption",
          "Omeprazole increases warfarin bioavailability",
          "Omeprazole induces warfarin metabolism",
          "Omeprazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 234,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Fluconazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 235,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin interferes with warfarin binding sites"
        ]
      },
      {
        id: 236,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B interferes with warfarin binding sites"
        ]
      },
      {
        id: 237,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid increases warfarin bioavailability"
        ]
      },
      {
        id: 238,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 239,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone increases warfarin bioavailability",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 240,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin increases warfarin bioavailability",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir increases warfarin bioavailability"
        ]
      },
      {
        id: 241,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin increases warfarin bioavailability",
        options: [
          "Azithromycin increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 242,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole increases warfarin bioavailability",
          "Fluconazole induces warfarin metabolism"
        ]
      },
      {
        id: 243,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin increases warfarin bioavailability"
        ]
      },
      {
        id: 244,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 245,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid increases warfarin bioavailability"
        ]
      },
      {
        id: 246,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 247,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone increases warfarin bioavailability",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 248,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin increases warfarin bioavailability",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir increases warfarin bioavailability"
        ]
      },
      {
        id: 249,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin increases warfarin bioavailability",
        options: [
          "Azithromycin increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 250,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole increases warfarin bioavailability",
          "Fluconazole induces warfarin metabolism"
        ]
      },
      {
        id: 251,
        question: "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin increases warfarin bioavailability"
        ]
      },
      {
        id: 252,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 253,
        question: "Which antibiotic is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid increases warfarin bioavailability"
        ]
      },
      {
        id: 254,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 255,
        question: "Which antibiotic is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone increases warfarin bioavailability",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 256,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin increases warfarin bioavailability",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir increases warfarin bioavailability"
        ]
      },
      {
        id: 257,
        question: "Which antibiotic is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin increases warfarin bioavailability",
        options: [
          "Azithromycin increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 258,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole increases warfarin bioavailability",
          "Fluconazole induces warfarin metabolism"
        ]
      },
      {
        id: 259,
        question: "Which antibiotic is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
        answer: "Doxycycline increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Azithromycin induces warfarin metabolism",
          "Cefalexin increases warfarin bioavailability"
        ]
      },
      {
        id: 260,
        question: "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Anidulafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Micafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 261,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
        answer: "Minocycline increases warfarin bioavailability",
        options: [
          "Azithromycin decreases warfarin metabolism",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin increases warfarin bioavailability",
          "Minocycline increases warfarin bioavailability",
          "Doxycycline interferes with warfarin binding sites"
        ]
      },
      {
        id: 262,
        question: "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Ganciclovir increases warfarin bioavailability",
        options: [
          "Ribavirin decreases warfarin metabolism",
          "Acyclovir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir increases warfarin bioavailability",
          "Zidovudine interferes with warfarin binding sites"
        ]
      },
      {
        id: 263,
        question: "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
        answer: "Linezolid increases warfarin bioavailability",
        options: [
          "Ciprofloxacin decreases warfarin metabolism",
          "Clindamycin inhibits warfarin absorption",
          "Amoxicillin increases warfarin bioavailability",
          "Doxycycline induces warfarin metabolism",
          "Linezolid increases warfarin bioavailability"
        ]
      },
      {
        id: 264,
        question: "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
        answer: "Amphotericin B increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Caspofungin inhibits warfarin absorption",
          "Anidulafungin increases warfarin bioavailability",
          "Voriconazole induces warfarin metabolism",
          "Amphotericin B increases warfarin bioavailability"
        ]
      },
      {
        id: 265,
        question: "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
        answer: "Ceftriaxone increases warfarin bioavailability",
        options: [
          "Ceftriaxone increases warfarin bioavailability",
          "Azithromycin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 266,
        question: "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
        answer: "Ribavirin increases warfarin bioavailability",
        options: [
          "Ribavirin increases warfarin bioavailability",
          "Zanamivir inhibits warfarin absorption",
          "Oseltamivir increases warfarin bioavailability",
          "Ganciclovir induces warfarin metabolism",
          "Acyclovir increases warfarin bioavailability"
        ]
      },
      {
        id: 267,
        question: "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
        answer: "Azithromycin increases warfarin bioavailability",
        options: [
          "Azithromycin increases warfarin bioavailability",
          "Amoxicillin inhibits warfarin absorption",
          "Ciprofloxacin decreases warfarin metabolism",
          "Doxycycline induces warfarin metabolism",
          "Vancomycin increases warfarin bioavailability"
        ]
      },
      {
        id: 268,
        question: "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
        answer: "Voriconazole increases warfarin bioavailability",
        options: [
          "Micafungin decreases warfarin metabolism",
          "Anidulafungin inhibits warfarin absorption",
          "Caspofungin increases warfarin bioavailability",
          "Voriconazole increases warfarin bioavailability",
          "Fluconazole induces warfarin metabolism"
        ]
      },
      {
        id: 269,
        question: "You receive a call from Mrs K, a patient you know well and who has been a regular patient at your pharmacy. She calls informing you that she has been given medication for tuberculosis but remembers only requiring four antibiotics (one of which is isoniazid) but is unsure why they have been prescribed pyridoxine alongside this. Which one of the following adverse effects has pyridoxine been prescribed to help prevent from the use of Isoniazid?",
        answer: "Peripheral neuropathy increases warfarin bioavailability",
        options: [
          "Hepatitis decreases warfarin metabolism",
          "Bloody stools inhibits warfarin absorption",
          "Haemolytic anemia increases warfarin bioavailability",
          "Peripheral neuropathy increases warfarin bioavailability",
          "Pancreatitis interferes with warfarin binding sites"
        ]
      }
];

export default InfectionFlashcardMain;