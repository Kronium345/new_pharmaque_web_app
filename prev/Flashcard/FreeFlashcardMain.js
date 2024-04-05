
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const FreeFlashcardMain = () => {

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
    question: "You have just finished talking to an elderly patient on the ward who suffers from Crohn’s disease. He has admitted to you that recently he has been experiencing the usual pains and he thinks he might be having a flare up. He has been experiencing constipation which he believes is due to his lack of activity due to a knee injury 3 months ago and was recommended to take lactulose to help ease his constipation. Which of the following drugs has lactulose likely interacted with, reducing its effectiveness?",
    answer: 'Octasa',
    options: [
        "Prednisolone",
        "Octasa",
        "Azathioprine",
        "Remsima",
        "Methotrexate"
    ]
  },
  {
    id: 2,
    question: "A 45-year-old male, on warfarin for atrial fibrillation, is prescribed omeprazole for GORD. Which interaction is most likely to occur between warfarin and omeprazole?",
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
    id: 3,
    question: "A patient of Afro-Caribbean origin has recently come back from her GP after being diagnosed with hypertension, with a blood pressure of 153/98. The doctor has recommended that she starts with lifestyle advice and has also asked her to start on antihypertensive therapy. The patient is 45 and has no other medical conditions or allergies. Which one of the following answers is the most appropriate first-line antihypertensive that the doctor has initiated?",
    answer: "E) Amlodipine",
    options: [
      "A) Bisoprolol",
      "B) Candesartan",
      "C) Furosemide",
      "D) Ramipril",
      "E) Amlodipine"
    ]
  },
  {
    id: 4,
    question: "A 67-year-old male with hypertension and a history of gout is on hydrochlorothiazide. He experiences recurrent gout attacks. What is an appropriate medication change?",
    answer: "A) Switch to a loop diuretic",
    options: [
      "A) Switch to a loop diuretic",
      "B) Increase hydrochlorothiazide dose",
      "C) Add a beta-blocker",
      "D) Start allopurinol",
      "E) Change to an ACE inhibitor"
    ]
  },
  {
    id: 5,
    question: "Which drug class used in respiratory conditions is more likely to cause the side effect of CNS stimulation, including anxiety and tremors?",
    answer: "C) Beta-2 agonists",
    options: [
      "A) Antimuscarinics",
      "B) Inhaled corticosteroids",
      "C) Beta-2 agonists",
      "D) Leukotriene receptor antagonists",
      "E) Phosphodiesterase inhibitors"
    ]
  },
  {
    id: 6,
    question: "What is the main mechanism of action of formoterol (long-acting beta-agonist) in the management of COPD?",
    answer: "D) Beta-2 adrenergic receptor agonism",
    options: [
      "A) Inhibition of leukotriene synthesis",
      "B) Muscarinic receptor antagonism",
      "C) Suppression of inflammatory mediators",
      "D) Beta-2 adrenergic receptor agonism",
      "E) Inhibition of mast cell degranulation"
    ]
  },
  {
    id: 7,
    question: "Which antiepileptic drug is associated with a risk of Stevens-Johnson syndrome, especially in patients with a certain HLA-B allele?",
    answer: "A) Carbamazepine",
    options: [
      "A) Carbamazepine",
      "B) Valproate",
      "C) Levetiracetam",
      "D) Phenobarbital",
      "E) Lamotrigine"
    ]
  },
  {
    id: 8,
    question: "In bipolar disorder, what is the primary use of lamotrigine?",
    answer: "C) Maintenance therapy",
    options: [
      "A) Acute mania",
      "B) Acute depression",
      "C) Maintenance therapy",
      "D) Rapid cycling",
      "E) Psychotic symptoms"
    ]
  },
  {
    id: 9,
    question: "You receive a call from Mrs K, a patient you know well and who has been a regular patient at your pharmacy. She calls informing you that she has been given medication for tuberculosis but remembers only requiring four antibiotics (one of which is isoniazid) but is unsure why they have been prescribed pyridoxine alongside this. Which one of the following adverse effects has pyridoxine been prescribed to help prevent from the use of Isoniazid?",
    answer: "D) Peripheral neuropathy",
    options: [
      "A) Hepatitis",
      "B) Bloody stools",
      "C) Haemolytic anemia",
      "D) Peripheral neuropathy",
      "E) Pancreatitis"
    ]
  },
  {
    id: 10,
    question: "A 55-year-old patient is prescribed an antibiotic for a respiratory infection. After a few days of treatment, the patient develops severe diarrhea. Which antibiotic is most likely responsible for this adverse effect?",
    answer: "B) Amoxicillin",
    options: [
      "A) Ceftriaxone",
      "B) Amoxicillin",
      "C) Doxycycline",
      "D) Azithromycin",
      "E) Vancomycin"
    ]
  },
  {
    id: 11,
    question: "Which antibiotic is most associated with causing ototoxicity?",
    answer: "A) Tobramycin",
    options: [
      "A) Tobramycin",
      "B) Azithromycin",
      "C) Cefepime",
      "D) Penicillin G",
      "E) Tetracycline"
    ]
  },
  {
    id: 12,
    question: "Which antibiotic is most commonly associated with causing a disulfiram-like reaction when combined with alcohol?",
    answer: "B) Metronidazole",
    options: [
      "A) Ciprofloxacin",
      "B) Metronidazole",
      "C) Clindamycin",
      "D) Doxycycline",
      "E) Trimethoprim"
    ]
  },
  {
    id: 13,
    question: "You are a patient on a ward and come across a diabetic patient who was visiting family over the weekend but subsequently forgot their insulin injections at home and has now developed diabetic ketoacidosis. Which one of the following answers is most appropriate in the initial management of DKA?",
    answer: "D) Short-acting insulin infusion",
    options: [
      "A) Metformin 2g STAT and then repeated 6 hourly",
      "B) Glucagon IM injection every 2 hours",
      "C) Dextrose 10% at 125ml per hour",
      "D) Short-acting insulin infusion",
      "E) Novorapid 20 units STAT repeated every hour"
    ]
  },
  {
    id: 14,
    question: "Which medication is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and central diabetes insipidus?",
    answer: "D) Desmopressin",
    options: [
      "A) Metformin",
      "B) Sitagliptin",
      "C) Pioglitazone",
      "D) Desmopressin",
      "E) Exenatide"
    ]
  },
  {
    id: 15,
    question: "A patient with Cushing's syndrome may be prescribed which medication to inhibit cortisol synthesis and manage symptoms?",
    answer: "B) Metyrapone",
    options: [
      "A) Bromocriptine",
      "B) Metyrapone",
      "C) Octreotide",
      "D) Propylthiouracil",
      "E) Prednisone"
    ]
  },
  {
    id: 16,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by inhibiting the reabsorption of glucose in the kidneys, leading to increased glucose excretion in the urine?",
    answer: "D) SGLT-2 inhibitors",
    options: [
      "A) Sulfonylureas",
      "B) Meglitinides",
      "C) Alpha-glucosidase inhibitors",
      "D) SGLT-2 inhibitors",
      "E) DPP-4 inhibitors"
    ]
  },
  {
    id: 17,
    question: "What is the primary mechanism of action of finasteride in BPH?",
    answer: "B) 5-alpha reductase inhibition",
    options: [
      "A) Alpha-1 receptor blockade",
      "B) 5-alpha reductase inhibition",
      "C) Androgen receptor blockade",
      "D) PDE-5 inhibition",
      "E) Estrogen receptor blockade"
    ]
  },
  {
    id: 18,
    question: "Which hormone is responsible for stimulating milk production during breastfeeding?",
    answer: "A) Prolactin",
    options: [
      "A) Prolactin",
      "B) Estrogen",
      "C) Progesterone",
      "D) Oxytocin",
      "E) Thyroxine"
    ]
  },
  {
    id: 19,
    question: "What is the primary mechanism of action of misoprostol in obstetrics?",
    answer: "B) Uterine contraction",
    options: [
      "A) Cervical dilation",
      "B) Uterine contraction",
      "C) Fetal neuroprotection",
      "D) Placental separation",
      "E) Myometrial relaxation"
    ]
  },
  {
    id: 20,
    question: "A patient has come into your pharmacy complaining of a toothache and wishes to purchase a painkiller form the pharmacy that can give him pain relief until he visits his dentist. He suffers from rheumatoid arthritis and takes methotrexate tablets. He has no other known drug allergies. Which one of the following answers would NOT be suitable for this patient?",
    answer: "B) Nurofen express (ibuprofen)",
    options: [
      "A) Panadol (paracetamol)",
      "B) Nurofen express (ibuprofen)",
      "C) Co-codamol 8mg/500mg tablets",
      "D) Oil of cloves",
      "E) Orajel (benzocaine)"
    ]
  },
  {
    id: 21,
    question: "What is the primary mechanism of action of Trastuzumab?",
    answer: "A) Binds to HER2",
    options: [
      "A) Binds to HER2",
      "B) Inhibits mTOR",
      "C) Blocks TNF-α",
      "D) Binds to CD20",
      "E) Inhibits DHFR"
    ]
  },
  {
    id: 22,
    question: "Which immunosuppressant inhibits calcineurin?",
    answer: "D) Tacrolimus",
    options: [
      "A) Cyclophosphamide",
      "B) Azathioprine",
      "C) Methotrexate",
      "D) Tacrolimus",
      "E) Sirolimus"
    ]
  },
  {
    id: 23,
    question: "Mrs M has walked into your pharmacy looking to buy multivitamin supplements. As Mrs M is one of your regular patients, you look on her records to find out that she regularly takes orlistat 120mg TDS. You realize that this can somewhat impair the absorption of fat-soluble vitamins and you would like to make him aware of this. Which one of the following vitamins is NOT fat-soluble?",
    answer: "B) Vitamin B",
    options: [
      "A) Vitamin A",
      "B) Vitamin B",
      "C) Vitamin D",
      "D) Vitamin E",
      "E) Vitamin K"
    ]
  },
  {
    id: 24,
    question: "Which vitamin deficiency is associated with night blindness and dry eyes, and is often seen in patients with cystic fibrosis?",
    answer: "A) Vitamin A",
    options: [
      "A) Vitamin A",
      "B) Vitamin B6",
      "C) Vitamin C",
      "D) Vitamin D",
      "E) Vitamin E"
    ]
  },
  {
    id: 25,
    question: "A patient on long-term bisphosphonate therapy for osteoporosis should be advised to monitor for which side effect?",
    answer: "B) Esophageal irritation",
    options: [
      "A) Hypertension",
      "B) Esophageal irritation",
      "C) Hyperglycemia",
      "D) Liver dysfunction",
      "E) Renal stones"
    ]
  },
  {
    id: 26,
    question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets a cytokine known as interleukin-23, reducing inflammation and joint damage by inhibiting this cytokine?",
    answer: "E) Guselkumab",
    options: [
      "A) Methotrexate",
      "B) Sulfasalazine",
      "C) Leflunomide",
      "D) Hydroxychloroquine",
      "E) Guselkumab"
    ]
  },
  {
    id: 27,
    question: "Among the listed medications used in gout, which one is a non-purine analogue that acts by inhibiting xanthine oxidase, an enzyme crucial in the conversion of hypoxanthine to xanthine and then to uric acid, thereby lowering uric acid levels?",
    answer: "D) Febuxostat",
    options: [
      "A) Colchicine",
      "B) Allopurinol",
      "C) Probenecid",
      "D) Febuxostat",
      "E) Pegloticase"
    ]
  },
  {
    id: 28,
    question: "Among the listed medications used in rheumatoid arthritis, which one is a disease-modifying anti-rheumatic drug (DMARD) that acts by suppressing T-cell function and modulating the immune response?",
    answer: "C) Leflunomide",
    options: [
      "A) Methotrexate",
      "B) Sulfasalazine",
      "C) Leflunomide",
      "D) Hydroxychloroquine",
      "E) Tocilizumab"
    ]
  },
  {
    id: 29,
    question: "Which ocular medication is contraindicated in patients with a history of closed-angle glaucoma due to its potential to induce pupillary dilation and increase intraocular pressure?",
    answer: "D) Pilocarpine",
    options: [
      "A) Latanoprost",
      "B) Brimonidine",
      "C) Dorzolamide",
      "D) Pilocarpine",
      "E) Timolol"
    ]
  },
  {
    id: 30,
    question: "Among patients with a history of severe cardiovascular diseases such as heart block or bradycardia, which ocular medication is contraindicated due to its systemic effects on heart rate and rhythm?",
    answer: "E) Timolol",
    options: [
      "A) Pilocarpine",
      "B) Timolol",
      "C) Brimonidine",
      "D) Dorzolamide",
      "E) Latanoprost"
    ]
  },
  {
    id: 31,
    question: "Which ocular medication should be avoided in individuals with a known hypersensitivity to prostaglandins, as it is a prostaglandin analog itself?",
    answer: "B) Latanoprost",
    options: [
      "A) Brimonidine",
      "B) Latanoprost",
      "C) Dorzolamide",
      "D) Timolol",
      "E) Pilocarpine"
    ]
  },
  {
    id: 32,
    question: "Which topical corticosteroid, classified as a potent corticosteroid, is often avoided in the treatment of facial dermatoses due to the risk of atrophy and telangiectasia in thin skin areas?",
    answer: "C) Clobetasol",
    options: [
      "A) Hydrocortisone",
      "B) Mometasone",
      "C) Clobetasol",
      "D) Fluocinolone",
      "E) Betamethasone"
    ]
  },
  {
    id: 33,
    question: "Which systemic immunosuppressant, used in severe psoriasis, acts by inhibiting dihydrofolate reductase, leading to decreased DNA synthesis and cell proliferation?",
    answer: "A) Methotrexate",
    options: [
      "A) Methotrexate",
      "B) Azathioprine",
      "C) Mycophenolate",
      "D) Ciclosporin",
      "E) Fumaric acid esters"
    ]
  },
  {
    id: 34,
    question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
    answer: "C) Caspofungin",
    options: [
      "A) Terbinafine",
      "B) Fluconazole",
      "C) Caspofungin",
      "D) Griseofulvin",
      "E) Itraconazole"
    ]
  },
  {
    id: 35,
    question: "At what age is the Hib/MenC (Haemophilus influenzae type b/Meningococcal C) vaccine administered to infants in the UK's vaccination schedule after their 3 doses of the 6 in 1 vaccine?",
    answer: "C) 6 months",
    options: [
      "A) 2 months",
      "B) 4 months",
      "C) 6 months",
      "D) 12 months",
      "E) 18 months"
    ]
  },
  {
    id: 36,
    question: "At what age is the first dose of the DTaP/IPV/Hib/HepB vaccine typically administered to infants in the UK's childhood vaccination schedule?",
    answer: "A) 2 months",
    options: [
      "A) 2 months",
      "B) 4 months",
      "C) 6 months",
      "D) 12 months",
      "E) 18 months"
    ]
  },
  {
    id: 37,
    question: "Which vaccine type uses killed or inactivated forms of the pathogen to trigger an immune response without the risk of causing the disease in the host, as seen in some seasonal influenza vaccines?",
    answer: "C) Inactivated vaccine",
    options: [
      "A) Live attenuated vaccine",
      "B) mRNA vaccine",
      "C) Inactivated vaccine",
      "D) Conjugate vaccine",
      "E) Toxoid vaccine"
    ]
  },
  {
    id: 38,
    question: "Among the listed anaesthetic medications, which one is an intravenous agent commonly used for anesthesia induction, with a formulation containing soybean oil, egg yolk phospholipids, and glycerol as emulsifiers?",
    answer: "A) Propofol",
    options: [
      "A) Propofol",
      "B) Isoflurane",
      "C) Sevoflurane",
      "D) Thiopental",
      "E) Intralipid"
    ]
  },
  {
    id: 39,
    question: "Among the listed answers, which topical anaesthetic medication is known for its rapid onset of action and is often used for short procedures, such as venipuncture or IV cannulation?",
    answer: "A) Lidocaine",
    options: [
      "A) Lidocaine",
      "B) Tetracaine",
      "C) Benzocaine",
      "D) Dibucaine",
      "E) Prilocaine"
    ]
  }
]

export default FreeFlashcardMain;
