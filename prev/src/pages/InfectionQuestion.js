import React, { useEffect, useState } from "react"
import ScoreView from "./ScoreView/ScoreView"
import QuizView from "./QuizView/QuizView"
import { useNavigate, Link } from "react-router-dom"
import classnames from "classnames" // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai" // Import icons if not already imported

const InfectionQuestion = () => {
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([
    {
      question:
        "A 45-year-old male with a history of penicillin allergy presents with severe cellulitis. Which antibiotic should be avoided in this patient?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Vancomycin" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Cefazolin" },
        { text: "Clindamycin" },
      ],
      Explanation:
        "Patients with a history of penicillin allergy may also be allergic to cephalosporins like ceftriaxone. Azithromycin is a safe alternative in such cases.",
    },
    {
      question:
        "A pregnant woman with a urinary tract infection requires antibiotic treatment. Which antibiotic should be avoided due to potential teratogenic effects?",
      answers: [
        { text: "Nitrofurantoin" },
        { text: "Amoxicillin" },
        { text: "Trimethoprim" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Ciprofloxacin is contraindicated in pregnancy due to potential teratogenic effects. Options A, B, and C are safer choices for treating UTIs during pregnancy.",
    },
    {
      question:
        "A patient is prescribed linezolid for a serious Gram-positive infection. Which adverse effect should be monitored closely?",
      answers: [
        { text: "Hepatotoxicity" },
        { text: "Nephrotoxicity" },
        { text: "Hematological toxicity", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Hypothyroidism" },
      ],
      Explanation:
        "Linezolid can cause hematological toxicity, including thrombocytopenia and anemia. Regular monitoring of blood counts is essential during treatment.",
    },
    {
      question:
        "A 30-year-old male with a confirmed diagnosis of tuberculosis is started on a multidrug regimen. What should be co-prescribed to prevent peripheral neuropathy?",
      answers: [
        { text: "Vitamin B6", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Folate" },
        { text: "Iron" },
      ],
      Explanation:
        "Isoniazid, commonly used to treat tuberculosis, can cause peripheral neuropathy. Co-prescribing vitamin B6 (pyridoxine) helps prevent this adverse effect.",
    },
    {
      question:
        "A patient with a history of methicillin-resistant Staphylococcus aureus (MRSA) infection requires oral therapy. Which agent is effective against MRSA?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Cephalexin" },
        { text: "Linezolid", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Linezolid is effective against MRSA infections. Options A, B, D, and E are not reliable choices for treating MRSA.",
    },
    {
      question:
        "A 55-year-old patient is diagnosed with a urinary tract infection, and their urine culture reveals Escherichia coli. Which antibiotic is the best choice for empiric therapy?",
      answers: [
        { text: "Trimethoprim" },
        { text: "Ceftriaxone" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Vancomycin" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Ciprofloxacin is a suitable empiric choice for Escherichia coli UTIs. Options A, B, D, and E are less appropriate for this specific infection.",
    },
    {
      question:
        "A 60-year-old patient with a history of Clostridium difficile infection (CDI) needs treatment for a skin abscess. Which antibiotic should be avoided due to a higher risk of CDI recurrence?",
      answers: [
        { text: "Clindamycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Clindamycin is associated with a higher risk of CDI recurrence. Options B, C, D, and E are safer choices for this patient.",
    },
    {
      question:
        "A patient is prescribed metronidazole for a bacterial vaginosis (BV) infection. What should be avoided while on this medication?",
      answers: [
        { text: "Alcohol consumption", isCorrect: true },
        { text: "Dairy products" },
        { text: "Citrus fruits" },
        { text: "Green leafy vegetables" },
        { text: "Caffeine" },
      ],
      Explanation:
        "Consuming alcohol while taking metronidazole can lead to a disulfiram-like reaction, characterized by nausea, vomiting, and headache. Patients should avoid alcohol during treatment.",
    },
    {
      question:
        "A 70-year-old patient with a history of chronic kidney disease (CKD) requires treatment for a urinary tract infection. Which antibiotic should be dose-adjusted in this patient?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Nitrofurantoin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Nitrofurantoin should be dose-adjusted in patients with CKD due to the risk of accumulation and potential toxicity. Options A, B, D, and E may not require dose adjustments in CKD.",
    },
    {
      question:
        "A patient is on long-term therapy with amphotericin B for a fungal infection. Which electrolyte imbalance should be closely monitored?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hyponatremia", isCorrect: true },
        { text: "Hypocalcemia" },
        { text: "Hypokalemia" },
        { text: "Hypernatremia" },
      ],
      Explanation:
        "Amphotericin B can lead to electrolyte imbalances, particularly hyponatremia. Regular monitoring of serum sodium levels is essential during treatment.",
    },
    {
      question:
        "A 25-year-old female presents with a severe skin infection caused by Pseudomonas aeruginosa. Which antibiotic is typically reserved for Pseudomonas infections?",
      answers: [
        { text: "Cephalexin" },
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Piperacillin/tazobactam", isCorrect: true },
      ],
      Explanation:
        "Piperacillin/tazobactam is a broad-spectrum antibiotic often reserved for severe infections, including those caused by Pseudomonas aeruginosa. Options A, B, C, and D are not the first-line choices for Pseudomonas.",
    },
    {
      question:
        "A patient on long-term antifungal therapy with ketoconazole complains of erectile dysfunction. What is the most likely cause of this adverse effect?",
      answers: [
        { text: "Hypertension" },
        { text: "Diabetes" },
        { text: "Hypothyroidism" },
        { text: "Hyperprolactinemia", isCorrect: true },
        { text: "Hyperglycemia" },
      ],
      Explanation:
        "Ketoconazole can cause hyperprolactinemia, which may lead to erectile dysfunction. Regular monitoring of prolactin levels is advised in such cases. Options A, B, C, and E are less likely to cause this effect.",
    },
    {
      question:
        "A 40-year-old patient is diagnosed with a skin infection caused by a β-lactamase-producing organism. Which antibiotic is the best choice in this scenario?",
      answers: [
        { text: "Amoxicillin/clavulanate", isCorrect: true },
        { text: "Ceftriaxone/sulbactam" },
        { text: "Cefepime" },
        { text: "Azithromycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Amoxicillin/clavulanate is effective against β-lactamase-producing organisms due to the presence of clavulanate, which inhibits β-lactamase enzymes. Options B, C, D, and E are less suitable for such infections.",
    },
    {
      question:
        "A 60-year-old male with chronic obstructive pulmonary disease (COP is prescribed prophylactic antibiotics during exacerbations. Which antibiotic is recommended for this purpose?",
      answers: [
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Trimethoprim/sulfamethoxazole" },
      ],
      Explanation:
        "Ciprofloxacin is a common choice for prophylactic antibiotics in COPD exacerbations due to its broad spectrum and low risk of resistance. Options B, C, D, and E may also be used in specific cases.",
    },
    {
      question:
        "A patient with severe sepsis is started on an empiric antibiotic regimen. Which antibiotic combination covers both Gram-negative and Gram-positive organisms effectively?",
      answers: [
        { text: "Vancomycin + ceftriaxone" },
        { text: "Azithromycin + doxycycline" },
        { text: "Piperacillin/tazobactam + gentamicin", isCorrect: true },
        { text: "Amoxicillin/clavulanate + ciprofloxacin" },
        { text: "Trimethoprim/sulfamethoxazole + amphotericin B" },
      ],
      Explanation:
        "Piperacillin/tazobactam + gentamicin is a broad-spectrum combination effective against both Gram-negative and Gram-positive organisms. Options A, B, D, and E do not provide adequate coverage for both types of organisms.",
    },
    {
      question:
        "A patient develops severe diarrhea after taking an antibiotic. What is the most likely causative agent of antibiotic-associated diarrhea (AA?",
      answers: [
        { text: "Clostridium difficile", isCorrect: true },
        { text: "Escherichia coli" },
        { text: "Streptococcus pneumoniae" },
        { text: "Lactobacillus species" },
        { text: "Staphylococcus aureus" },
      ],
      Explanation:
        "Clostridium difficile is a common causative agent of antibiotic-associated diarrhea (AA). Options B, C, D, and E are less likely to cause AA.",
    },
    {
      question:
        "A 35-year-old patient with a history of liver cirrhosis requires empiric antibiotic therapy for an abdominal infection. Which antibiotic should be used with caution due to hepatotoxicity risk?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Amoxicillin/clavulanate" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Ciprofloxacin should be used with caution in patients with liver cirrhosis due to its potential hepatotoxicity. Options A, B, D, and E are safer choices in such cases.",
    },
    {
      question:
        "A 28-year-old female presents with a severe skin infection, and her medical history includes recent use of oral contraceptives. Which antibiotic may reduce contraceptive effectiveness?",
      answers: [
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Clindamycin" },
        { text: "Trimethoprim/sulfamethoxazole" },
      ],
      Explanation:
        "Ciprofloxacin may reduce the effectiveness of oral contraceptives. Options A, B, D, and E are less likely to interfere with contraception.",
    },
    {
      question:
        "A patient with a history of drug-resistant tuberculosis (T is started on a second-line TB regimen. Which antibiotic is commonly used in such regimens for drug-resistant TB?",
      answers: [
        { text: "Isoniazid" },
        { text: "Rifampicin" },
        { text: "Ethambutol" },
        { text: "Pyrazinamide" },
        { text: "Levofloxacin", isCorrect: true },
      ],
      Explanation:
        "Levofloxacin is commonly used in second-line regimens for drug-resistant TB. Options A, B, C, and D are part of the first-line TB treatment.",
    },
    {
      question:
        "A 50-year-old male with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to potential exacerbation of myasthenia gravis symptoms?",
      answers: [
        { text: "Azithromycin" },
        { text: "Doxycycline" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Amoxicillin/clavulanate" },
        { text: "Trimethoprim/sulfamethoxazole" },
      ],
      Explanation:
        "Ciprofloxacin can exacerbate myasthenia gravis symptoms and should be avoided in patients with this condition. Options A, B, D, and E are safer choices.",
    },
    {
      question:
        "Which antibiotics inhibit bacterial protein synthesis by binding to the 30S ribosomal subunit?",
      answers: [
        { text: "Penicillins" },
        { text: "Macrolides" },
        { text: "Quinolones" },
        { text: "Tetracyclines", isCorrect: true },
        { text: "Glycopeptides" },
      ],
      Explanation:
        "Tetracyclines inhibit bacterial protein synthesis by binding to the 30S ribosomal subunit. Options A, B, C, and E have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of β-lactam antibiotics like penicillin?",
      answers: [
        { text: "Inhibition of DNA gyrase" },
        { text: "Inhibition of cell wall", isCorrect: true },
        { text: "Inhibition of RNA polymerase" },
        { text: "Disruption of cell membrane" },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "β-lactam antibiotics like penicillin primarily work by inhibiting cell wall synthesis in bacteria. Options A, C, D, and E describe mechanisms of action for other classes of antibiotics.",
    },
    {
      question:
        "Which antifungal agents inhibit ergosterol synthesis in fungal cell membranes?",
      answers: [
        { text: "Amphotericin B" },
        { text: "Fluconazole", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
        { text: "Ceftriaxone" },
      ],
      Explanation:
        "Fluconazole inhibits ergosterol synthesis in fungal cell membranes. Options A, C, D, and E are not antifungal agents and do not target ergosterol synthesis.",
    },
    {
      question:
        "Which class of antibiotics interferes with bacterial DNA replication by targeting DNA gyrase?",
      answers: [
        { text: "Aminoglycosides" },
        { text: "Macrolides" },
        { text: "Quinolones", isCorrect: true },
        { text: "Cephalosporins" },
        { text: "Glycopeptides" },
      ],
      Explanation:
        "Quinolones interfere with bacterial DNA replication by targeting DNA gyrase. Options A, B, D, and E have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of metronidazole in treating anaerobic bacterial infections?",
      answers: [
        { text: "Inhibition of RNA polymerase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of DNA gyrase" },
        { text: "DNA damage", isCorrect: true },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "Metronidazole works by causing DNA damage in anaerobic bacteria. Options A, B, C, and E describe mechanisms of action for other antibiotics.",
    },
    {
      question:
        "Which antiviral drug inhibits the activity of the viral enzyme reverse transcriptase in the treatment of HIV?",
      answers: [
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Zidovudine", isCorrect: true },
        { text: "Amantadine" },
        { text: "Ribavirin" },
      ],
      Explanation:
        "Zidovudine inhibits the activity of the viral enzyme reverse transcriptase in the treatment of HIV. Options A, B, D, and E are used to treat different viral infections with distinct mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of sulfonamide antibiotics?",
      answers: [
        { text: "Inhibition of RNA polymerase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of DNA gyrase" },
        { text: "Disruption of cell membrane" },
        { text: "Inhibition of folic acid synthesis", isCorrect: true },
      ],
      Explanation:
        "Sulfonamide antibiotics primarily work by inhibiting folic acid synthesis in bacteria. Options A, B, C, and D describe mechanisms of action for other classes of antibiotics.",
    },
    {
      question:
        "Which class of antifungal drugs interferes with fungal cell membrane function by binding to ergosterol?",
      answers: [
        { text: "Polyenes", isCorrect: true },
        { text: "Azoles" },
        { text: "Echinocandins" },
        { text: "Tetracyclines" },
        { text: "Aminoglycosides" },
      ],
      Explanation:
        "Polyenes interfere with fungal cell membrane function by binding to ergosterol. Options B, C, D, and E are not antifungal drugs and do not target ergosterol.",
    },
    {
      question:
        "Which antibiotic class inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs)?",
      answers: [
        { text: "Tetracyclines" },
        { text: "Macrolides" },
        { text: "Quinolones" },
        { text: "Cephalosporins" },
        { text: "β-lactams", isCorrect: true },
      ],
      Explanation:
        "β-lactam antibiotics inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs). Options A, B, C, and D have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of oseltamivir in the treatment of influenza?",
      answers: [
        { text: "Inhibition of DNA gyrase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of neuraminidase", isCorrect: true },
        { text: "Disruption of cell membrane" },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "Oseltamivir works by inhibiting neuraminidase, an enzyme crucial for the release of new viral particles from infected cells, in the treatment of influenza. Options A, B, D, and E have different mechanisms of action.",
    },
    {
      question:
        "Which antiviral drug inhibits the synthesis of viral DNA by acting as a nucleoside analog?",
      answers: [
        { text: "Ribavirin" },
        { text: "Zidovudine", isCorrect: true },
        { text: "Amantadine" },
        { text: "Oseltamivir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Zidovudine inhibits the synthesis of viral DNA by acting as a nucleoside analog in the treatment of HIV. Options A, C, D, and E have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of amphotericin B in the treatment of fungal infections?",
      answers: [
        { text: "Inhibition of RNA polymerase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of DNA gyrase" },
        { text: "Disruption of cell membrane", isCorrect: true },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "Amphotericin B disrupts fungal cell membranes, leading to leakage of cellular contents, in the treatment of fungal infections. Options A, B, C, and E have different mechanisms of action.",
    },
    {
      question:
        "Which class of antibiotics inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit?",
      answers: [
        { text: "Macrolides", isCorrect: true },
        { text: "Tetracyclines" },
        { text: "Quinolones" },
        { text: "Aminoglycosides" },
        { text: "Glycopeptides" },
      ],
      Explanation:
        "Macrolides inhibit bacterial protein synthesis by binding to the 50S ribosomal subunit. Options B, C, D, and E have different mechanisms of action.",
    },
    {
      question:
        "Which antifungal drug class interferes with fungal cell wall synthesis by inhibiting β-(1,3)-D-glucan synthesis?",
      answers: [
        { text: "Polyenes" },
        { text: "Azoles" },
        { text: "Echinocandins", isCorrect: true },
        { text: "Tetracyclines" },
        { text: "Aminoglycosides" },
      ],
      Explanation:
        "Echinocandins interfere with fungal cell wall synthesis by inhibiting β-(1,3)-D-glucan synthesis. Options A, B, D, and E are not antifungal drugs and do not target this pathway.",
    },
    {
      question:
        "Which antiviral drug inhibits the synthesis of viral RNA by blocking RNA-dependent RNA polymerase?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zidovudine" },
        { text: "Amantadine" },
        { text: "Oseltamivir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin inhibits the synthesis of viral RNA by blocking RNA-dependent RNA polymerase, used in the treatment of various viral infections. Options B, C, D, and E have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of daptomycin, an antibiotic used to treat Gram-positive bacterial infections?",
      answers: [
        { text: "Inhibition of RNA polymerase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of DNA gyrase" },
        { text: "Disruption of cell membrane", isCorrect: true },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "Daptomycin disrupts the cell membrane of Gram-positive bacteria, leading to cell death. Options A, B, C, and E describe mechanisms of action for other antibiotics.",
    },
    {
      question:
        "Which class of antibiotics inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit and disrupting peptide bond formation?",
      answers: [
        { text: "Aminoglycosides" },
        { text: "Macrolides", isCorrect: true },
        { text: "Quinolones" },
        { text: "Tetracyclines" },
        { text: "Glycopeptides" },
      ],
      Explanation:
        "Macrolides inhibit bacterial protein synthesis by binding to the 50S ribosomal subunit and disrupting peptide bond formation. Options A, C, D, and E have different mechanisms of action.",
    },
    {
      question:
        "What is the primary mechanism of action of acyclovir, an antiviral medication used to treat herpes virus infections?",
      answers: [
        { text: "Inhibition of DNA gyrase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of RNA polymerase" },
        { text: "Disruption of cell membrane", isCorrect: true },
        { text: "Inhibition of viral fusion" },
      ],
      Explanation:
        "Acyclovir inhibits viral DNA synthesis by acting as a nucleoside analog, specifically targeting viral DNA polymerase in herpes virus infections. Options B, C, D, and E have different mechanisms of action.",
    },
    {
      question:
        "Which antifungal drug class inhibits fungal cell wall synthesis by inhibiting the enzyme 1,3-β-D-glucan synthase?",
      answers: [
        { text: "Polyenes" },
        { text: "Azoles" },
        { text: "Echinocandins", isCorrect: true },
        { text: "Tetracyclines" },
        { text: "Aminoglycosides" },
      ],
      Explanation:
        "Echinocandins inhibit fungal cell wall synthesis by inhibiting the enzyme 1,3-β-D-glucan synthase. Options A, B, D, and E are not antifungal drugs and do not target this pathway.",
    },
    {
      question:
        "What is the primary mechanism of action of rifampicin, an antibiotic commonly used to treat tuberculosis?",
      answers: [
        { text: "Inhibition of DNA gyrase" },
        { text: "Inhibition of cell wall" },
        { text: "Inhibition of RNA polymerase", isCorrect: true },
        { text: "Disruption of cell membrane" },
        { text: "Inhibition of folic acid synthesis" },
      ],
      Explanation:
        "Rifampicin primarily works by inhibiting RNA polymerase in bacteria, leading to the inhibition of RNA synthesis. Options A, B, D, and E describe mechanisms of action for other antibiotics.",
    },
    {
      question:
        "A 55-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should the pharmacist warn the patient about?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hyperglycemia", isCorrect: true },
        { text: "Hypotension" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Ciprofloxacin can lead to hyperglycemia by affecting blood sugar levels. Patients taking metformin for diabetes should be informed about this interaction and advised to monitor their blood glucose levels closely.",
    },
    {
      question:
        "A 70-year-old patient with hypertension and osteoarthritis is taking warfarin for anticoagulation. The patient develops a skin infection and is prescribed trimethoprim/sulfamethoxazole. Which potential drug interaction should be addressed?",
      answers: [
        { text: "Increased INR", isCorrect: true },
        { text: "Decreased blood pressure" },
        { text: "Hyperkalemia" },
        { text: "Photosensitivity" },
        { text: "GI bleeding" },
      ],
      Explanation:
        "Trimethoprim/sulfamethoxazole can increase the International Normalized Ratio (INR) and raise the risk of bleeding when taken with warfarin. The patient should be closely monitored, and their warfarin dosage may need adjustment to maintain a therapeutic INR range.",
    },
    {
      question:
        "A 40-year-old patient with epilepsy is on long-term phenytoin therapy. The patient contracts a respiratory infection and is prescribed erythromycin. What potential drug interaction is a concern with this combination?",
      answers: [
        { text: "Decreased phenytoin levels" },
        { text: "Increased phenytoin levels", isCorrect: true },
        { text: "Seizure exacerbation" },
        { text: "Cardiac arrhythmias" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Erythromycin can increase phenytoin levels by inhibiting its metabolism. This interaction can lead to phenytoin toxicity and should be closely monitored. Dose adjustment of phenytoin may be necessary when co-administered with erythromycin.",
    },
    {
      question:
        "A 65-year-old patient with chronic kidney disease is prescribed gentamicin for a severe urinary tract infection. The patient is also taking furosemide for edema. What potential drug interaction should be considered in this case?",
      answers: [
        { text: "Nephrotoxicity", isCorrect: true },
        { text: "Ototoxicity" },
        { text: "Hypokalemia" },
        { text: "Hyperkalemia" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "The combination of gentamicin and furosemide can increase the risk of nephrotoxicity due to their potential cumulative renal effects. Close monitoring of kidney function and serum drug levels is essential in patients receiving both medications.",
    },
    {
      question:
        "A 50-year-old patient with depression is taking sertraline, an SSRI antidepressant. The patient develops a respiratory infection and is prescribed linezolid. What potential drug interaction should be communicated to the patient?",
      answers: [
        { text: "Serotonin syndrome", isCorrect: true },
        { text: "Hypertensive crisis" },
        { text: "Gastrointestinal bleeding" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Linezolid can interact with sertraline to cause serotonin syndrome, a potentially life-threatening condition characterized by agitation, confusion, rapid heart rate, and other symptoms. Patients should be advised to report any unusual symptoms and closely monitored when taking this combination.",
    },
    {
      question:
        "A 30-year-old patient with asthma is prescribed theophylline for bronchodilation. The patient develops a skin infection and is prescribed clarithromycin. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Increased theophylline levels", isCorrect: true },
        { text: "Decreased theophylline levels" },
        { text: "Bronchospasm" },
        { text: "Hepatotoxicity" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Clarithromycin can increase theophylline levels by inhibiting its metabolism. This interaction can lead to theophylline toxicity, resulting in symptoms like nausea, vomiting, and cardiac arrhythmias. Monitoring of theophylline levels and dosage adjustment may be necessary.",
    },
    {
      question:
        "A 60-year-old patient with chronic pain is taking oxycodone for pain management. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Decreased analgesic effect", isCorrect: true },
        { text: "Increased analgesic effect" },
        { text: "Respiratory depression" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Ciprofloxacin can reduce the analgesic effect of oxycodone by inhibiting its metabolism. Patients should be aware of potential decreased pain relief and may need adjustments in their pain management regimen while taking both medications.",
    },
    {
      question:
        "A 45-year-old patient with a history of bipolar disorder is taking lithium for mood stabilization. The patient develops a urinary tract infection and is prescribed amoxicillin. What potential drug interaction should be monitored in this case?",
      answers: [
        { text: "Decreased lithium levels" },
        { text: "Increased lithium levels", isCorrect: true },
        { text: "Lithium-induced tremor" },
        { text: "Lithium-induced rash" },
        { text: "Lithium-induced weight gain" },
      ],
      Explanation:
        "Amoxicillin can increase lithium levels by reducing renal clearance of lithium, potentially leading to lithium toxicity. Regular monitoring of lithium levels and clinical symptoms is crucial when these medications are co-administered.",
    },
    {
      question:
        "A 55-year-old patient with coronary artery disease is taking clopidogrel as an antiplatelet agent. The patient develops cellulitis and is prescribed clarithromycin. What potential drug interaction should be addressed with the patient?",
      answers: [
        { text: "Decreased antiplatelet effect", isCorrect: true },
        { text: "Increased antiplatelet effect" },
        { text: "Gastrointestinal bleeding" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Clarithromycin can reduce the antiplatelet effect of clopidogrel by inhibiting its metabolism. Patients on clopidogrel should be informed about this interaction, and alternative antibiotics may be considered to avoid compromising antiplatelet therapy.",
    },
    {
      question:
        "A 70-year-old patient with atrial fibrillation is taking warfarin as an anticoagulant. The patient develops a urinary tract infection and is prescribed nitrofurantoin. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Increased INR", isCorrect: true },
        { text: "Decreased blood pressure" },
        { text: "Hyperkalemia" },
        { text: "Photosensitivity" },
        { text: "GI bleeding" },
      ],
      Explanation:
        "Nitrofurantoin can increase the International Normalized Ratio (INR) when taken with warfarin, raising the risk of bleeding. The patient should be closely monitored, and warfarin dosage adjustments may be needed to maintain the desired anticoagulation effect.",
    },
    {
      question:
        "A 60-year-old patient with chronic obstructive pulmonary disease (COPD) is taking theophylline for bronchodilation. The patient is prescribed azithromycin for a chest infection. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Increased theophylline levels", isCorrect: true },
        { text: "Decreased theophylline levels" },
        { text: "Bronchospasm" },
        { text: "Hepatotoxicity" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Azithromycin can increase theophylline levels by inhibiting its metabolism. This interaction can lead to theophylline toxicity, characterized by nausea, vomiting, and cardiac arrhythmias. Close monitoring of theophylline levels is essential.",
    },
    {
      question:
        "A 50-year-old patient with irritable bowel syndrome (IBS) is taking loperamide for diarrhea control. The patient develops a respiratory infection and is prescribed clarithromycin. What potential drug interaction should be considered in this case?",
      answers: [
        { text: "Decreased loperamide levels" },
        { text: "Increased loperamide levels", isCorrect: true },
        { text: "Respiratory depression" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Clarithromycin can increase loperamide levels by inhibiting its metabolism, potentially leading to excessive central nervous system effects and respiratory depression. Patients should be monitored for signs of loperamide toxicity, such as sedation and slowed breathing.",
    },
    {
      question:
        "A 40-year-old patient with rheumatoid arthritis is taking methotrexate for disease management. The patient develops a skin infection and is prescribed doxycycline. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Decreased methotrexate efficacy" },
        { text: "Increased methotrexate toxicity", isCorrect: true },
        { text: "Gastrointestinal bleeding" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Doxycycline can increase the risk of methotrexate toxicity by displacing methotrexate from protein binding sites, leading to elevated levels of the drug. Patients should be closely monitored for signs of methotrexate toxicity when taking these medications together.",
    },
    {
      question:
        "A 65-year-old patient with Parkinson's disease is taking levodopa/carbidopa for symptom control. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What potential drug interaction should be discussed with the patient?",
      answers: [
        { text: "Decreased levodopa efficacy", isCorrect: true },
        { text: "Increased levodopa toxicity" },
        { text: "Respiratory depression" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Ciprofloxacin can decrease the efficacy of levodopa by reducing its absorption. Patients with Parkinson's disease should be informed about this interaction, and adjustments to the timing or dosage of levodopa may be necessary to maintain symptom control.",
    },
    {
      question:
        "A 55-year-old patient with epilepsy is taking valproic acid for seizure control. The patient develops a respiratory infection and is prescribed erythromycin. What potential drug interaction is a concern with this combination?",
      answers: [
        { text: "Decreased valproic acid levels" },
        { text: "Increased valproic acid levels", isCorrect: true },
        { text: "Seizure exacerbation" },
        { text: "Cardiac arrhythmias" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Erythromycin can increase valproic acid levels by inhibiting its metabolism. This interaction may lead to valproic acid toxicity, characterized by symptoms such as tremor, dizziness, and confusion. Close monitoring of valproic acid levels is essential.",
    },
    {
      question:
        "A 50-year-old patient with type 2 diabetes is taking glyburide for glycemic control. The patient develops cellulitis and is prescribed ciprofloxacin. What potential drug interaction should be addressed with the patient?",
      answers: [
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Hyperglycemia" },
        { text: "Hypotension" },
        { text: "QT prolongation" },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "Ciprofloxacin can lead to hypoglycemia by affecting blood sugar levels. Patients taking glyburide for diabetes should be informed about this interaction and advised to monitor their blood glucose levels closely.",
    },
    {
      question:
        "A 45-year-old patient with chronic kidney disease is prescribed vancomycin for a severe skin infection. The patient is also taking oral iron supplements for anemia. What potential drug interaction should be monitored in this case?",
      answers: [
        { text: "Nephrotoxicity" },
        { text: "Ototoxicity" },
        { text: "Hypokalemia" },
        { text: "Iron toxicity", isCorrect: true },
        { text: "Photosensitivity" },
      ],
      Explanation:
        "The combination of vancomycin and oral iron supplements can increase the risk of iron toxicity. Patients with chronic kidney disease should be closely monitored for signs of iron overload, such as gastrointestinal symptoms and liver damage.",
    },
    {
      question:
        "A 40-year-old female patient with a history of epilepsy is currently taking phenytoin to control seizures. She is diagnosed with a skin infection and prescribed an antibiotic. Which antibiotic is known to decrease the effectiveness of phenytoin?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Ciprofloxacin can decrease the effectiveness of phenytoin, potentially leading to reduced seizure control. It is important to monitor phenytoin levels and adjust the dose as needed when using this combination. Options A, C, D, and E have a lower likelihood of interacting with phenytoin.",
    },
    {
      question:
        "A 60-year-old male patient with heart failure is on digoxin therapy. He develops a respiratory infection and requires an antibiotic. Which antibiotic should be used cautiously due to an increased risk of digoxin toxicity?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Levofloxacin", isCorrect: true },
      ],
      Explanation:
        "Levofloxacin can increase digoxin levels, potentially leading to digoxin toxicity. It is essential to monitor digoxin levels and adjust the dose when using this combination. Options A, B, C, and D are less likely to interact with digoxin.",
    },
    {
      question:
        "A 45-year-old patient with chronic kidney disease (CKD) is diagnosed with a urinary tract infection. Which antibiotic should be used with caution and possibly dose-adjusted in this patient population due to renal impairment?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Nitrofurantoin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Nitrofurantoin should be used with caution and possibly dose-adjusted in patients with CKD due to the risk of drug accumulation and potential toxicity. Options A, B, D, and E may not require dose adjustments in CKD patients.",
    },
    {
      question:
        "A 70-year-old patient with type 2 diabetes is prescribed an antibiotic for a respiratory infection. The patient is taking metformin to control blood sugar. Which antibiotic interaction should be monitored in this case?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "QT interval prolongation" },
        { text: "Hyperkalemia" },
        { text: "Neurotoxicity" },
      ],
      Explanation:
        "The interaction between metformin and certain antibiotics can lead to hypoglycemia. It is essential to monitor blood glucose levels closely when using this combination and adjust the diabetes medication as needed. Options A, C, D, and E describe potential interactions but are not the primary concern with metformin use.",
    },
    {
      question:
        "A 50-year-old patient with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to the potential exacerbation of myasthenia gravis symptoms?",
      answers: [
        { text: "Azithromycin" },
        { text: "Doxycycline" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Amoxicillin/clavulanate" },
        { text: "Trimethoprim/sulfamethoxazole" },
      ],
      Explanation:
        "Ciprofloxacin can exacerbate myasthenia gravis symptoms and should be avoided in patients with this condition. Options A, B, D, and E are safer choices in such cases.",
    },
    {
      question:
        "A 45-year-old patient with chronic kidney disease (CKD) is diagnosed with a skin infection and requires antibiotic therapy. Which antibiotic should be used with caution and possibly dose-adjusted due to renal impairment?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Trimethoprim/sulfamethoxazole", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Levofloxacin" },
      ],
      Explanation:
        "Trimethoprim/sulfamethoxazole should be used with caution and possibly dose-adjusted in patients with CKD due to the risk of drug accumulation and potential toxicity. Options A, B, D, and E may not require dose adjustments in CKD patients.",
    },
    {
      question:
        "A 70-year-old patient with type 2 diabetes is prescribed an antibiotic for a skin infection. The patient is taking sulfonylureas to control blood sugar. Which antibiotic interaction should be monitored in this case?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "QT interval prolongation" },
        { text: "Hyperkalemia" },
        { text: "Neurotoxicity" },
      ],
      Explanation:
        "The combination of sulfonylureas and certain antibiotics can lead to hypoglycemia. It is essential to monitor blood glucose levels closely when using this combination and adjust the diabetes medication as needed. Options A, C, D, and E describe potential interactions but are not the primary concern with sulfonylureas.",
    },
    {
      question:
        "A 55-year-old patient with chronic liver disease is prescribed an antibiotic for a respiratory infection. Which antibiotic should be used with caution in this patient population due to potential hepatotoxicity?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Trimethoprim/sulfamethoxazole" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Azithromycin should be used with caution in patients with chronic liver disease due to potential hepatotoxicity. Options A, B, D, and E are less likely to cause hepatotoxicity.",
    },
    {
      question:
        "A 60-year-old male with a history of heart arrhythmia is prescribed an antibiotic for a urinary tract infection. Which antibiotic should be used cautiously due to the potential to prolong the QT interval and worsen the arrhythmia?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate" },
        { text: "Doxycycline" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Linezolid" },
      ],
      Explanation:
        "Azithromycin has the potential to prolong the QT interval and may worsen heart arrhythmias. Close monitoring of the QT interval is recommended when using this antibiotic in patients with arrhythmias. Options A, B, C, and E are less likely to affect the QT interval significantly.",
    },
    {
      question:
        "A 70-year-old patient with a history of chronic obstructive pulmonary disease (COPD) is prescribed prophylactic antibiotics during exacerbations. Which antibiotic is recommended for this purpose in COPD patients?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Trimethoprim/sulfamethoxazole" },
      ],
      Explanation:
        "Azithromycin is a common choice for prophylactic antibiotics in COPD exacerbations due to its broad spectrum and low risk of resistance. Options A, B, C, and E may also be used in specific cases.",
    },
    {
      question:
        "A 50-year-old male with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to the potential exacerbation of myasthenia gravis symptoms?",
      answers: [
        { text: "Azithromycin" },
        { text: "Doxycycline" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Amoxicillin/clavulanate" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Ciprofloxacin can exacerbate myasthenia gravis symptoms and should be avoided in patients with this condition. Options A, B, D, and E are safer choices in such cases.",
    },
    {
      question:
        "A 35-year-old patient with a history of Clostridium difficile infection (CDI) is prescribed an antibiotic for a respiratory infection. Which antibiotic should be avoided due to a higher risk of CDI recurrence?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Doxycycline is associated with a higher risk of CDI recurrence and should be avoided in patients with a history of CDI. Options A, B, D, and E are less likely to increase the risk of CDI recurrence.",
    },
    {
      question:
        "A 40-year-old patient with a history of epilepsy is currently taking carbamazepine to control seizures. The patient develops a urinary tract infection and is prescribed an antibiotic. Which antibiotic is known to decrease the effectiveness of carbamazepine?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Ciprofloxacin can decrease the effectiveness of carbamazepine, potentially leading to reduced seizure control. It is important to monitor carbamazepine levels and adjust the dose as needed when using this combination. Options A, C, D, and E have a lower likelihood of interacting with carbamazepine.",
    },
    {
      question:
        "A 60-year-old patient with hypertension is on an ACE inhibitor. Which antibiotic should be avoided due to a risk of hyperkalemia when taken with an ACE inhibitor?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Trimethoprim/sulfamethoxazole", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Trimethoprim/sulfamethoxazole should be avoided due to the risk of hyperkalemia when taken with an ACE inhibitor. Options A, B, D, and E have a lower likelihood of causing hyperkalemia.",
    },
    {
      question:
        "A 50-year-old patient with heart failure is on digoxin therapy. He develops a urinary tract infection and requires an antibiotic. Which antibiotic should be used cautiously due to an increased risk of digoxin toxicity?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Levofloxacin", isCorrect: true },
      ],
      Explanation:
        "Levofloxacin can increase digoxin levels, potentially leading to digoxin toxicity. It is essential to monitor digoxin levels and adjust the dose when using this combination. Options A, B, C, and D are less likely to interact with digoxin.",
    },
    {
      question:
        "A 55-year-old patient is prescribed an antibiotic for a respiratory infection. After a few days of treatment, the patient develops severe diarrhea. Which antibiotic is most likely responsible for this adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Amoxicillin is known to cause antibiotic-associated diarrhea, often due to disruption of the gut microbiota. Ceftriaxone, doxycycline, azithromycin, and vancomycin are less likely to cause this specific side effect.",
    },
    {
      question:
        "A 65-year-old patient with a history of gout is prescribed an antibiotic for a skin infection. The patient experiences sudden joint pain and swelling. Which antibiotic may have triggered a gout flare in this patient?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Amoxicillin/clavulanate can potentially trigger a gout flare due to its association with elevated serum uric acid levels. Options A, C, D, and E are less likely to exacerbate gout symptoms.",
    },
    {
      question:
        "A 40-year-old patient taking methotrexate for rheumatoid arthritis develops a respiratory infection and is prescribed an antibiotic. Which antibiotic should be used cautiously to avoid interactions with methotrexate?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Levofloxacin", isCorrect: true },
      ],
      Explanation:
        "Levofloxacin can interact with methotrexate and increase the risk of methotrexate toxicity. Close monitoring of methotrexate levels and appropriate dose adjustments are necessary in this scenario. Options A, B, C, and D have a lower likelihood of interacting with methotrexate.",
    },
    {
      question:
        "A 50-year-old patient with a history of myasthenia gravis is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient experiences increased muscle weakness. Which antibiotic may have exacerbated the myasthenia gravis symptoms?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ciprofloxacin can exacerbate myasthenia gravis symptoms and should be avoided in patients with this condition. Options A, B, D, and E are safer choices in such cases.",
    },
    {
      question:
        "A 60-year-old patient with hypertension is on an ACE inhibitor. After starting an antibiotic for a urinary tract infection, the patient experiences a persistent dry cough. Which antibiotic is most likely responsible for this side effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Amoxicillin/clavulanate is known to cause a persistent dry cough, which may mimic the side effect of ACE inhibitors. Ceftriaxone, doxycycline, azithromycin, and ciprofloxacin are less likely to cause this specific side effect.",
    },
    {
      question:
        "A 70-year-old patient with a history of chronic kidney disease (CK) is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient experiences nausea, vomiting, and confusion. Which antibiotic may have caused these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Gentamicin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Gentamicin can cause nephrotoxicity and neurotoxicity, leading to symptoms like nausea, vomiting, and confusion. Patients with CKD are particularly vulnerable to these adverse effects. Options A, B, D, and E are less likely to cause these specific side effects.",
    },
    {
      question:
        "A 45-year-old patient is prescribed an antibiotic for a skin infection. The patient experiences severe photosensitivity and a skin rash after exposure to sunlight. Which antibiotic is most likely responsible for this adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions, which can lead to skin rashes and discomfort when exposed to sunlight. Options A, B, D, and E are less likely to cause this specific side effect.",
    },
    {
      question:
        "A 55-year-old patient is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient develops a high fever, severe muscle stiffness, and confusion. Which antibiotic may have triggered these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Ciprofloxacin can lead to severe adverse effects such as fever, muscle stiffness, and confusion, resembling symptoms of neuroleptic malignant syndrome. Options A, B, D, and E are less likely to cause these specific side effects.",
    },
    {
      question:
        "A 65-year-old patient with a history of depression is taking a selective serotonin reuptake inhibitor (SSRI) for mood stabilization. The patient develops a urinary tract infection and is prescribed an antibiotic. Which antibiotic interaction should be monitored in this case?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Hypoglycemia" },
        { text: "Serotonin syndrome", isCorrect: true },
        { text: "Nephrotoxicity" },
        { text: "Hyperkalemia" },
      ],
      Explanation:
        "The combination of an SSRI and certain antibiotics can increase the risk of serotonin syndrome. Close monitoring for symptoms of serotonin syndrome, such as agitation, confusion, rapid heart rate, and high blood pressure, is essential in this scenario. Options A, B, D, and E describe potential interactions but are not the primary concern in this case.",
    },
    {
      question:
        "A 50-year-old patient with a history of rheumatoid arthritis is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient develops difficulty in breathing, a persistent cough, and chest pain. Which antibiotic may have triggered these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Linezolid" },
      ],
      Explanation:
        "Azithromycin is associated with a rare but serious side effect known as drug-induced pneumonitis, which can cause symptoms like difficulty in breathing, a persistent cough, and chest pain. Options A, B, C, and E are less likely to cause this specific side effect.",
    },
    {
      question:
        "A 60-year-old patient with chronic kidney disease (CK) is prescribed an antibiotic for a urinary tract infection. Shortly after starting the antibiotic, the patient experiences ringing in the ears and hearing loss. Which antibiotic may have caused these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Gentamicin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Gentamicin can cause ototoxicity, including ringing in the ears and hearing loss. Patients with CKD are at a higher risk of experiencing this adverse effect. Options A, B, D, and E are less likely to cause these specific side effects.",
    },
    {
      question:
        "A 70-year-old patient with hypertension is prescribed an antibiotic for a respiratory infection. Shortly after starting the antibiotic, the patient experiences a sudden drop in blood pressure, dizziness, and fainting. Which antibiotic may have caused these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Levofloxacin", isCorrect: true },
      ],
      Explanation:
        "Levofloxacin is known to have the potential to cause orthostatic hypotension and a sudden drop in blood pressure, leading to symptoms like dizziness and fainting. Options A, B, C, and D are less likely to cause these specific side effects.",
    },
    {
      question:
        "A 45-year-old patient is prescribed an antibiotic for a skin infection. After starting the antibiotic, the patient develops severe diarrhea with bloody stools and abdominal pain. Which antibiotic may have triggered these adverse effects?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin/clavulanate", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Azithromycin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Amoxicillin/clavulanate is associated with a risk of antibiotic-associated colitis, which can manifest as severe diarrhea with bloody stools and abdominal pain. Options A, C, D, and E are less likely to cause these specific side effects.",
    },
    {
      question:
        "A 50-year-old patient with a history of bipolar disorder is taking lithium for mood stabilization. The patient develops a respiratory infection and is prescribed an antibiotic. Which antibiotic interaction should be monitored in this case?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Hypoglycemia" },
        { text: "Lithium toxicity", isCorrect: true },
        { text: "Nephrotoxicity" },
        { text: "Neurotoxicity" },
      ],
      Explanation:
        "The combination of lithium and certain antibiotics can increase the risk of lithium toxicity. Monitoring of lithium levels and adjustment of the dose may be necessary in this scenario. Options A, B, D, and E describe potential interactions but are not the primary concern in this case.",
    },
    {
      question:
        "A 35-year-old patient is prescribed an antibiotic for a respiratory infection. After starting the antibiotic, the patient experiences a severe headache, stiff neck, and sensitivity to light. Which antibiotic may have caused these adverse effects?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Amoxicillin/clavulanate" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Ceftriaxone can cause central nervous system side effects, including severe headaches, stiff neck, and sensitivity to light. These symptoms may indicate meningitis or other serious conditions. Options B, C, D, and E are less likely to cause these specific side effects.",
    },
    {
      question:
        "Which antibiotic has the highest risk of causing Clostridium difficile-associated diarrhea?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Clindamycin", isCorrect: true },
        { text: "Vancomycin" },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
      ],
      Explanation:
        "Clindamycin is associated with a significantly higher risk of Clostridium difficile infection due to its broad-spectrum activity and disturbance of the normal gut flora.",
    },
    {
      question:
        "Which drug has the narrowest spectrum of activity against Gram-negative bacteria?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Meropenem" },
        { text: "Gentamicin" },
        { text: "Trimethoprim" },
        { text: "Aztreonam", isCorrect: true },
      ],
      Explanation:
        "Aztreonam is primarily effective against aerobic Gram-negative bacteria, exhibiting a narrow spectrum limited to certain Gram-negative pathogens.",
    },
    {
      question:
        "Which antifungal medication requires dose adjustment in hepatic impairment?",
      answers: [
        { text: "Fluconazole" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Amphotericin B" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
      ],
      Explanation:
        "Voriconazole's metabolism is affected by hepatic impairment, necessitating dosage adjustment due to the risk of increased concentrations and potential toxicity.",
    },
    {
      question:
        "Which antibiotic has the highest risk of causing tendinitis and tendon rupture?",
      answers: [
        { text: "Erythromycin" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Cefotaxime" },
        { text: "Doxycycline" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Fluoroquinolones like levofloxacin have been associated with an increased risk of tendinitis and tendon rupture, especially in older adults.",
    },
    {
      question:
        "Which drug is commonly associated with the development of Red Man Syndrome?",
      answers: [
        { text: "Vancomycin", isCorrect: true },
        { text: "Linezolid" },
        { text: "Daptomycin" },
        { text: "Teicoplanin" },
        { text: "Tigecycline" },
      ],
      Explanation:
        "Rapid infusion of vancomycin can lead to Red Man Syndrome, characterized by flushing, hypotension, and rash, due to histamine release.",
    },
    {
      question:
        "Which antiviral drug is least likely to cause bone marrow suppression?",
      answers: [
        { text: "Zidovudine" },
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir", isCorrect: true },
        { text: "Foscarnet" },
      ],
      Explanation:
        "Oseltamivir, commonly used for influenza, is less likely to cause bone marrow suppression compared to other antiviral agents in the options.",
    },
    {
      question: "Which antibiotic is most associated with causing ototoxicity?",
      answers: [
        { text: "Tobramycin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Cefepime" },
        { text: "Penicillin G" },
        { text: "Tetracycline" },
      ],
      Explanation:
        "Aminoglycosides like tobramycin are known to cause ototoxicity, which can result in irreversible damage to the inner ear structures, leading to hearing loss.",
    },
    {
      question:
        "Which antifungal medication has the potential to cause hepatotoxicity?",
      answers: [
        { text: "Caspofungin" },
        { text: "Itraconazole", isCorrect: true },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Itraconazole is associated with the risk of hepatotoxicity, with cases of liver injury reported during its use.",
    },
    {
      question:
        "Which drug is contraindicated in patients with G6PD deficiency due to the risk of hemolysis?",
      answers: [
        { text: "Sulfamethoxazole", isCorrect: true },
        { text: "Nitrofurantoin" },
        { text: "Metronidazole" },
        { text: "Ceftriaxone" },
        { text: "Penicillin V" },
      ],
      Explanation:
        "Sulfamethoxazole can induce hemolysis in individuals with glucose-6-phosphate dehydrogenase (G6PD) deficiency, causing severe anemia.",
    },
    {
      question:
        "Which antibiotic has the highest likelihood of causing pseudomembranous colitis?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Clindamycin is notably associated with an increased risk of pseudomembranous colitis due to its disruption of normal gut flora, leading to Clostridium difficile overgrowth.",
    },
    {
      question:
        "Which antiviral agent can potentially cause psychiatric side effects such as hallucinations and confusion?",
      answers: [
        { text: "Oseltamivir" },
        { text: "Zanamivir" },
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Ganciclovir" },
      ],
      Explanation:
        "Ribavirin, commonly used in hepatitis C treatment, has been associated with psychiatric side effects, including hallucinations and confusion, albeit less frequently.",
    },
    {
      question:
        "Which antibiotic may require dose adjustment in patients with severe renal impairment due to decreased clearance?",
      answers: [
        { text: "Gentamicin" },
        { text: "Erythromycin" },
        { text: "Ceftriaxone" },
        { text: "Vancomycin", isCorrect: true },
        { text: "Linezolid" },
      ],
      Explanation:
        "Vancomycin's elimination is predominantly renal, necessitating dose adjustment in individuals with severe renal impairment to avoid potential toxicity.",
    },
    {
      question:
        "Which antifungal medication has the potential for serious infusion-related reactions, including hypotension and bronchospasm?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Amphotericin B is notorious for causing infusion-related reactions such as fever, chills, hypotension, and bronchospasm, requiring careful monitoring during administration.",
    },
    {
      question:
        "Which drug is most commonly associated with the development of photosensitivity reactions?",
      answers: [
        { text: "Doxycycline", isCorrect: true },
        { text: "Trimethoprim" },
        { text: "Cefalexin" },
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Doxycycline is known to cause photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antibiotic is least likely to cause prolongation of the QT interval?",
      answers: [
        { text: "Levofloxacin" },
        { text: "Clarithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Moxifloxacin" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid has a minimal effect on QT interval prolongation compared to other antibiotics listed, making it a safer option in patients predisposed to arrhythmias.",
    },
    {
      question:
        "Which antifungal medication requires monitoring for visual disturbances due to potential ocular toxicity?",
      answers: [
        { text: "Voriconazole", isCorrect: true },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Which drug is associated with the risk of causing agranulocytosis, leading to severe neutropenia?",
      answers: [
        { text: "Carbapenems" },
        { text: "Methicillin" },
        { text: "Co-trimoxazole", isCorrect: true },
        { text: "Linezolid" },
        { text: "Cloxacillin" },
      ],
      Explanation:
        "Co-trimoxazole has been reported to cause agranulocytosis, leading to severe neutropenia, albeit infrequently.",
    },
    {
      question:
        "Which antibiotic is most likely to cause drug-induced liver injury (DILI) among the listed options?",
      answers: [
        { text: "Azithromycin" },
        { text: "Ceftriaxone" },
        { text: "Rifampicin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Clindamycin" },
      ],
      Explanation:
        "Rifampicin is notorious for its hepatotoxic potential, necessitating caution and monitoring for signs of liver injury during its use.",
    },
    {
      question:
        "Which antiviral medication is associated with the highest risk of renal toxicity?",
      answers: [
        { text: "Acyclovir" },
        { text: "Zidovudine" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ribavirin" },
      ],
      Explanation:
        "Ganciclovir has a higher likelihood of causing renal toxicity, including nephrotoxicity and renal impairment, compared to other antiviral options.",
    },
    {
      question:
        "Which antibiotic is least likely to cause disruption of the normal gut flora?",
      answers: [
        { text: "Ampicillin" },
        { text: "Tetracycline" },
        { text: "Metronidazole" },
        { text: "Cefixime" },
        { text: "Trimethoprim", isCorrect: true },
      ],
      Explanation:
        "Trimethoprim typically has a lower impact on gut flora compared to the other antibiotics listed, preserving the normal microbiota to a greater extent.",
    },
    {
      question:
        "Which antibiotic is most associated with causing pseudomembranous colitis?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Ceftriaxone is known to be linked with an increased risk of pseudomembranous colitis due to the disruption of normal gut flora, leading to Clostridium difficile overgrowth.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest likelihood of causing QT interval prolongation?",
      answers: [
        { text: "Levofloxacin" },
        { text: "Ciprofloxacin" },
        { text: "Moxifloxacin", isCorrect: true },
        { text: "Clindamycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Moxifloxacin is associated with a higher propensity for QT interval prolongation compared to other antibiotics, potentially leading to arrhythmias.",
    },
    {
      question:
        "Which antifungal medication carries the risk of causing hepatotoxicity?",
      answers: [
        { text: "Fluconazole" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Itraconazole", isCorrect: true },
        { text: "Amphotericin B" },
      ],
      Explanation:
        "Itraconazole has been associated with cases of hepatotoxicity, requiring careful monitoring for signs of liver injury during its use.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the broadest spectrum of activity against Gram-negative bacteria?",
      answers: [
        { text: "Cefepime" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Meropenem", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Meropenem exhibits a broad spectrum of activity against Gram-negative bacteria, including Pseudomonas aeruginosa, making it effective against a wide range of pathogens.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing tendon rupture and tendinitis?",
      answers: [
        { text: "Levofloxacin", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Vancomycin" },
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Fluoroquinolones like levofloxacin are linked to an increased risk of tendon rupture and tendinitis, particularly in the Achilles tendon.",
    },
    {
      question:
        "Among the listed antiviral medications, which one is least likely to cause central nervous system (CNS) side effects?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin" },
        { text: "Zanamivir", isCorrect: true },
        { text: "Ganciclovir" },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Zanamivir has a lower likelihood of causing CNS side effects compared to other antiviral agents listed, making it a safer choice in terms of CNS tolerability.",
    },
    {
      question:
        "Which antifungal medication may require dose adjustment in patients with hepatic impairment due to altered metabolism?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
        { text: "Micafungin" },
      ],
      Explanation:
        "Voriconazole's metabolism is affected by hepatic impairment, necessitating dosage adjustment to avoid potential toxicity due to increased concentrations.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most likely to cause photosensitivity reactions?",
      answers: [
        { text: "Trimethoprim" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Cefalexin" },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing a metallic taste as an adverse effect?",
      answers: [
        { text: "Clarithromycin" },
        { text: "Metronidazole", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Cefixime" },
      ],
      Explanation:
        "Metronidazole is often linked to the development of a metallic taste in the mouth as a common adverse effect experienced by patients.",
    },
    {
      question:
        "Among the listed antiviral agents, which one has the potential to cause hemolytic anemia in patients with glucose-6-phosphate dehydrogenase (G6PD) deficiency?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zidovudine" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Ribavirin can induce hemolytic anemia in individuals with G6PD deficiency, leading to severe complications due to red blood cell destruction.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with infusion-related reactions such as fever and chills?",
      answers: [
        { text: "Fluconazole" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Anidulafungin" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is notorious for causing infusion-related reactions, including fever, chills, and rigors, during its administration.",
    },
    {
      question:
        "Among the listed antibiotics, which one requires monitoring for auditory toxicity, particularly affecting hearing?",
      answers: [
        { text: "Gentamicin", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Azithromycin" },
        { text: "Vancomycin" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Gentamicin is known to cause auditory toxicity, including irreversible damage to hearing, necessitating careful monitoring during therapy.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with the development of Red Man Syndrome upon rapid infusion?",
      answers: [
        { text: "Vancomycin", isCorrect: true },
        { text: "Teicoplanin" },
        { text: "Daptomycin" },
        { text: "Linezolid" },
        { text: "Tigecycline" },
      ],
      Explanation:
        "Rapid infusion of vancomycin can lead to Red Man Syndrome, characterized by flushing, hypotension, and rash, due to histamine release.",
    },
    {
      question:
        "Among the listed antiviral medications, which one has the highest risk of causing renal toxicity?",
      answers: [
        { text: "Zidovudine" },
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Ganciclovir is associated with a higher risk of renal toxicity, including nephrotoxicity and impaired kidney function, compared to other antiviral options.",
    },
    {
      question:
        "Which antifungal medication has the potential to cause visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Caspofungin" },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least likely to cause disruption of the normal gut flora?",
      answers: [
        { text: "Tetracycline" },
        { text: "Amoxicillin" },
        { text: "Metronidazole" },
        { text: "Cefixime" },
        { text: "Trimethoprim", isCorrect: true },
      ],
      Explanation:
        "Trimethoprim generally has a lower impact on gut flora compared to other antibiotics listed, preserving the normal microbiota to a greater extent.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing drug-induced liver injury (DILI)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Ceftriaxone" },
        { text: "Rifampicin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Clindamycin" },
      ],
      Explanation:
        "Rifampicin is known for its hepatotoxic potential, necessitating caution and monitoring for signs of liver injury during its use.",
    },
    {
      question:
        "Among the listed antiviral medications, which one is most likely to cause psychiatric side effects such as hallucinations and confusion?",
      answers: [
        { text: "Oseltamivir" },
        { text: "Zanamivir" },
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Ganciclovir" },
      ],
      Explanation:
        "Ribavirin has been associated with psychiatric side effects, including hallucinations and confusion, albeit less frequently compared to other options.",
    },
    {
      question:
        "Which antibiotic has the narrowest spectrum of activity against Gram-positive bacteria?",
      answers: [
        { text: "Linezolid" },
        { text: "Vancomycin" },
        { text: "Daptomycin" },
        { text: "Teicoplanin", isCorrect: true },
        { text: "Clindamycin" },
      ],
      Explanation:
        "Teicoplanin has a relatively narrow spectrum of activity, primarily targeting Gram-positive bacteria such as staphylococci and streptococci.",
    },
    {
      question:
        "Which antifungal medication requires monitoring for potential infusion-related reactions such as hypotension and bronchospasm?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is notorious for causing infusion-related reactions, including hypotension and bronchospasm, necessitating careful monitoring during administration.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing peripheral neuropathy as an adverse effect?",
      answers: [
        { text: "Linezolid" },
        { text: "Ciprofloxacin" },
        { text: "Metronidazole", isCorrect: true },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Metronidazole is known to be associated with peripheral neuropathy as an adverse effect, particularly with prolonged use or high doses.",
    },
    {
      question:
        "Which antifungal medication may require therapeutic drug monitoring due to its variable pharmacokinetics and potential for drug interactions?",
      answers: [
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
      ],
      Explanation:
        "Voriconazole's pharmacokinetics can vary significantly among individuals and may require therapeutic drug monitoring, especially due to its susceptibility to drug interactions.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least likely to cause Clostridium difficile-associated diarrhea (CDAD)?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Ceftriaxone" },
        { text: "Doxycycline" },
        { text: "Vancomycin", isCorrect: true },
      ],
      Explanation:
        "Vancomycin is less likely to cause CDAD compared to other antibiotics due to its minimal impact on the normal gut flora.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with renal impairment and requires dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Acyclovir" },
        { text: "Zidovudine" },
        { text: "Oseltamivir" },
        { text: "Ribavirin" },
        { text: "Ganciclovir", isCorrect: true },
      ],
      Explanation:
        "Ganciclovir is known to cause renal impairment and often requires dose adjustment in patients with kidney dysfunction to prevent toxicity.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing a disulfiram-like reaction when combined with alcohol?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Metronidazole", isCorrect: true },
        { text: "Clindamycin" },
        { text: "Doxycycline" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Metronidazole is known to produce a disulfiram-like reaction when combined with alcohol, causing symptoms like flushing, nausea, and palpitations.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most associated with causing myelosuppression and may necessitate regular monitoring of blood counts?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Clindamycin", isCorrect: true },
        { text: "Trimethoprim" },
        { text: "Linezolid" },
      ],
      Explanation:
        "Clindamycin has been associated with myelosuppression, particularly with prolonged use, indicating the need for regular monitoring of blood counts during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing QT interval prolongation?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Fluconazole" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Caspofungin" },
      ],
      Explanation:
        "Voriconazole is known to cause QT interval prolongation, potentially leading to arrhythmias, especially at higher doses or in susceptible individuals.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing crystalluria as an adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Trimethoprim", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Trimethoprim is often associated with crystalluria, especially in patients with inadequate fluid intake or renal impairment.",
    },
    {
      question:
        "Which antibiotic is most associated with the development of tendinopathy and tendon rupture?",
      answers: [
        { text: "Levofloxacin", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Tetracycline" },
      ],
      Explanation:
        "Fluoroquinolones like levofloxacin are commonly linked to tendinopathy and tendon rupture, especially in older patients and those with certain risk factors.",
    },
    {
      question:
        "Among the listed antiviral medications, which one is least likely to cause gastrointestinal disturbances as a common adverse effect?",
      answers: [
        { text: "Zidovudine", isCorrect: true },
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Ganciclovir" },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Zidovudine is less commonly associated with gastrointestinal disturbances compared to other antiviral agents, making it a more tolerable option in this aspect.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with hepatotoxicity and may necessitate liver function monitoring during therapy?",
      answers: [
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole is known to be associated with hepatotoxicity, requiring careful monitoring of liver function during treatment due to potential adverse effects.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing hypersensitivity reactions, including Stevens-Johnson syndrome?",
      answers: [
        { text: "Cefalexin" },
        { text: "Doxycycline" },
        { text: "Azithromycin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Azithromycin is associated with a higher risk of causing hypersensitivity reactions, including severe conditions like Stevens-Johnson syndrome.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing neuropsychiatric side effects, such as depression and mood changes?",
      answers: [
        { text: "Ribavirin" },
        { text: "Oseltamivir", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Acyclovir" },
        { text: "Ganciclovir" },
      ],
      Explanation:
        "Oseltamivir has been associated with neuropsychiatric side effects, including depression and mood changes, particularly in vulnerable populations.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing ototoxicity?",
      answers: [
        { text: "Linezolid" },
        { text: "Azithromycin" },
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Gentamicin", isCorrect: true },
      ],
      Explanation:
        "Gentamicin is known to cause ototoxicity, potentially resulting in irreversible damage to the inner ear structures and subsequent hearing loss.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Clindamycin" },
        { text: "Vancomycin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Among the listed antiviral medications, which one is least likely to cause bone marrow suppression?",
      answers: [
        { text: "Ribavirin" },
        { text: "Zidovudine" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Zanamivir", isCorrect: true },
      ],
      Explanation:
        "Zanamivir has a lower likelihood of causing bone marrow suppression compared to other antiviral agents listed, making it safer in terms of hematologic side effects.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, including fever and chills?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause infusion-related reactions, including fever, chills, and rigors, during its administration.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing gastrointestinal disturbances, such as pseudomembranous colitis?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is associated with a higher risk of gastrointestinal disturbances, including pseudomembranous colitis, compared to other antibiotics.",
    },
    {
      question:
        "Which antibiotic is most commonly associated with causing drug-induced liver injury (DILI) and may require monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin" },
        { text: "Ceftriaxone" },
        { text: "Rifampicin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Clindamycin" },
      ],
      Explanation:
        "Rifampicin is known for its hepatotoxic potential, necessitating caution and monitoring of liver function tests during its use.",
    },
    {
      question:
        "Among the listed antiviral medications, which one has the potential to cause hemolytic anemia in individuals with glucose-6-phosphate dehydrogenase (G6PD) deficiency?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zidovudine" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Ribavirin can induce hemolytic anemia in individuals with G6PD deficiency, leading to severe complications due to red blood cell destruction.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing tendonitis and tendon rupture?",
      answers: [
        { text: "Levofloxacin", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Tetracycline" },
      ],
      Explanation:
        "Fluoroquinolones like levofloxacin are commonly linked to tendonitis and tendon rupture, particularly in certain patient populations.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing electrolyte abnormalities, such as hypokalemia and hypomagnesemia?",
      answers: [
        { text: "Fluconazole" },
        { text: "Voriconazole" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause electrolyte disturbances, such as hypokalemia and hypomagnesemia, which can lead to complications during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least likely to cause photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Doxycycline" },
        { text: "Cefalexin", isCorrect: true },
        { text: "Trimethoprim" },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Cefalexin is less likely to cause photosensitivity reactions compared to other antibiotics listed, making it a more suitable choice in this regard.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing CNS side effects, such as confusion and hallucinations, especially in elderly patients?",
      answers: [
        { text: "Zanamivir" },
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
      ],
      Explanation:
        "Ribavirin has been associated with CNS side effects, including confusion and hallucinations, particularly in elderly patients or those with pre-existing conditions.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing a metallic taste in the mouth as an adverse effect?",
      answers: [
        { text: "Metronidazole" },
        { text: "Clarithromycin" },
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
        { text: "Ceftriaxone", isCorrect: true },
      ],
      Explanation:
        "Metronidazole is known to produce a metallic taste in the mouth as an adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with infusion-related reactions, including fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is notorious for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity, potentially leading to renal impairment?",
      answers: [
        { text: "Acyclovir" },
        { text: "Zidovudine" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Ribavirin" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity, including renal impairment, requiring caution and monitoring during therapy to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least likely to cause disruption of the normal gut flora?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Vancomycin", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Clindamycin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Vancomycin typically has a lower impact on gut flora compared to other antibiotics listed, preserving the normal microbiota to a greater extent.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing hepatic impairment and may require liver function monitoring during therapy?",
      answers: [
        { text: "Fluconazole" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Micafungin" },
        { text: "Anidulafungin" },
      ],
      Explanation:
        "Voriconazole is known to be associated with hepatic impairment, necessitating liver function monitoring during therapy due to potential adverse effects.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing tendinopathy and tendon rupture?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Azithromycin" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
      ],
      Explanation:
        "Fluoroquinolones like levofloxacin are commonly linked to tendinopathy and tendon rupture, particularly in certain patient populations.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing retinal toxicity and visual disturbances, requiring ophthalmologic monitoring during therapy?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ganciclovir is known to cause retinal toxicity and visual disturbances, necessitating regular ophthalmologic monitoring to prevent potential vision-related complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Trimethoprim" },
        { text: "Cefalexin" },
        { text: "Azithromycin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing QT interval prolongation, potentially leading to arrhythmias?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Anidulafungin" },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole is known to cause QT interval prolongation, potentially leading to arrhythmias, especially at higher doses or in susceptible individuals.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing a disulfiram-like reaction when combined with alcohol?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Doxycycline" },
        { text: "Metronidazole", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Metronidazole is known to produce a disulfiram-like reaction when combined with alcohol, causing symptoms like flushing, nausea, and palpitations.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing bone marrow suppression, leading to hematologic side effects?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ribavirin is known to cause bone marrow suppression, leading to hematologic side effects such as anemia and leukopenia during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least likely to cause tendonitis and tendon rupture as an adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Amoxicillin is less commonly associated with tendonitis and tendon rupture compared to fluoroquinolones like levofloxacin or ceftriaxone.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ribavirin is often linked with gastrointestinal disturbances as a common adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing a metallic taste in the mouth as an adverse effect?",
      answers: [
        { text: "Metronidazole", isCorrect: true },
        { text: "Clarithromycin" },
        { text: "Ceftriaxone" },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
      ],
      Explanation:
        "Metronidazole is known to cause a metallic taste in the mouth as an adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing QT interval prolongation, potentially leading to arrhythmias?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Micafungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Caspofungin" },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole is known to cause QT interval prolongation, potentially leading to arrhythmias, especially at higher doses or in susceptible individuals.",
    },
    {
      question:
        "Among the listed antibiotics, which one has the highest risk of causing crystalluria as an adverse effect?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Ceftriaxone" },
        { text: "Doxycycline" },
        { text: "Trimethoprim", isCorrect: true },
      ],
      Explanation:
        "Trimethoprim is often associated with crystalluria, especially in patients with inadequate fluid intake or renal impairment.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing retinal toxicity and visual disturbances, necessitating ophthalmologic monitoring during therapy?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ganciclovir is known to cause retinal toxicity and visual disturbances, requiring regular ophthalmologic monitoring to prevent potential vision-related complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Amoxicillin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Amoxicillin is less likely to cause photosensitivity reactions compared to other antibiotics listed, making it a more suitable choice in this aspect.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is notorious for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing tendonitis and tendon rupture as an adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Amoxicillin is less commonly associated with tendonitis and tendon rupture compared to fluoroquinolones like levofloxacin or ceftriaxone.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ribavirin is often linked with gastrointestinal disturbances as a common adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing tendonitis and tendon rupture as an adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Amoxicillin is less commonly associated with tendonitis and tendon rupture compared to fluoroquinolones like levofloxacin or ceftriaxone.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ribavirin is often linked with gastrointestinal disturbances as a common adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing tendonitis and tendon rupture as an adverse effect?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Levofloxacin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Amoxicillin is less commonly associated with tendonitis and tendon rupture compared to fluoroquinolones like levofloxacin or ceftriaxone.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing gastrointestinal disturbances as a common adverse effect?",
      answers: [
        { text: "Acyclovir" },
        { text: "Ribavirin", isCorrect: true },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Zanamivir" },
      ],
      Explanation:
        "Ribavirin is often linked with gastrointestinal disturbances as a common adverse effect experienced by patients during therapy.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing photosensitivity reactions upon exposure to sunlight or UV radiation?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Doxycycline", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Azithromycin" },
        { text: "Cefalexin" },
      ],
      Explanation:
        "Doxycycline is known for causing photosensitivity reactions upon exposure to sunlight or UV radiation, leading to skin irritation and rashes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing infusion-related reactions, such as fever, chills, and rigors, during its administration?",
      answers: [
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Micafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known for causing infusion-related reactions, including fever, chills, and rigors, making it a challenging drug to administer without complications.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced lupus erythematosus (DILE)?",
      answers: [
        { text: "Azithromycin" },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Minocycline", isCorrect: true },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Minocycline is notably associated with drug-induced lupus erythematosus (DILE), a rare but recognized adverse effect of prolonged use.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Ribavirin" },
        { text: "Acyclovir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir", isCorrect: true },
        { text: "Zidovudine" },
      ],
      Explanation:
        "Ganciclovir is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is least commonly associated with causing hypoglycemia as an adverse effect?",
      answers: [
        { text: "Ciprofloxacin" },
        { text: "Clindamycin" },
        { text: "Amoxicillin" },
        { text: "Doxycycline" },
        { text: "Linezolid", isCorrect: true },
      ],
      Explanation:
        "Linezolid is associated with a higher risk of causing hypoglycemia as an adverse effect, particularly in susceptible individuals or those with diabetes.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing nephrotoxicity and may require dose adjustment in patients with kidney dysfunction?",
      answers: [
        { text: "Micafungin" },
        { text: "Caspofungin" },
        { text: "Anidulafungin" },
        { text: "Voriconazole" },
        { text: "Amphotericin B", isCorrect: true },
      ],
      Explanation:
        "Amphotericin B is known to cause nephrotoxicity and may necessitate dose adjustment in patients with kidney dysfunction to prevent kidney damage.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing pseudomembranous colitis due to Clostridium difficile overgrowth?",
      answers: [
        { text: "Ceftriaxone", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Ceftriaxone is known to disrupt the normal gut flora, leading to an increased risk of Clostridium difficile overgrowth and pseudomembranous colitis.",
    },
    {
      question:
        "Which antiviral medication is most commonly associated with causing thrombotic complications and may require close monitoring in susceptible patients?",
      answers: [
        { text: "Ribavirin", isCorrect: true },
        { text: "Zanamivir" },
        { text: "Oseltamivir" },
        { text: "Ganciclovir" },
        { text: "Acyclovir" },
      ],
      Explanation:
        "Ribavirin is known to be associated with thrombotic complications, necessitating close monitoring in susceptible patients to prevent adverse events.",
    },
    {
      question:
        "Among the listed antibiotics, which one is most commonly associated with causing drug-induced liver injury (DILI), necessitating monitoring of liver function tests during therapy?",
      answers: [
        { text: "Azithromycin", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Doxycycline" },
        { text: "Vancomycin" },
      ],
      Explanation:
        "Azithromycin is known for its potential to cause drug-induced liver injury (DILI), requiring careful monitoring of liver function during therapy.",
    },
    {
      question:
        "Which antifungal medication is most commonly associated with causing visual disturbances and photophobia as adverse effects?",
      answers: [
        { text: "Micafungin" },
        { text: "Anidulafungin" },
        { text: "Caspofungin" },
        { text: "Voriconazole", isCorrect: true },
        { text: "Fluconazole" },
      ],
      Explanation:
        "Voriconazole may cause visual disturbances and photophobia as adverse effects, necessitating regular ophthalmic monitoring to detect potential ocular toxicity.",
    },
    {
      question:
        "You receive a call from Mrs K, a patient you know well and who has been a regular patient at your pharmacy. She calls informing you that she has been given medication for tuberculosis but remembers only requiring four antibiotics (one of which is isoniazid) but is unsure why they have been prescribed pyridoxine alongside this. Which one of the following adverse effects has pyridoxine been prescribed to help prevent from the use of Isoniazid?",
      answers: [
        { text: "Hepatitis" },
        { text: "Bloody stools" },
        { text: "Haemolytic anemia" },
        { text: "Peripheral neuropathy", isCorrect: true },
        { text: "Pancreatitis" },
      ],
      Explanation:
        "Vitamin B6, or pyridoxine, is given during isoniazid therapy in some patients to prevent the chances of the patient developing peripheral neuropathy.",
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

export default InfectionQuestion
