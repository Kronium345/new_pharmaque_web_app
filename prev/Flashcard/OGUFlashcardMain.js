import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const OGUFlashcardMain = () => {

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
        question: "Which drug is contraindicated in pregnancy due to its teratogenic effects?",
        answer: "Isotretinoin",
        options: [
          "Atenolol",
          "Lisinopril",
          "Warfarin",
          "Fluoxetine",
          "Isotretinoin"
        ]
      },
      {
        id: 2,
        question: "What is the first-line treatment for gestational diabetes?",
        answer: "Insulin",
        options: [
          "Metformin",
          "Insulin",
          "Glyburide",
          "Pioglitazone",
          "Acarbose"
        ]
      },
      {
        id: 3,
        question: "Which antibiotic is considered safe during lactation?",
        answer: "Amoxicillin",
        options: [
          "Doxycycline",
          "Trimethoprim",
          "Ciprofloxacin",
          "Azithromycin",
          "Amoxicillin"
        ]
      },
      {
        id: 4,
        question: "Which contraceptive method is the most effective in preventing pregnancy?",
        answer: "Intrauterine device (IUD)",
        options: [
          "Condoms",
          "Oral contraceptive pills",
          "Intrauterine device (IUD)",
          "Diaphragm",
          "Depo-Provera injection"
        ]
      },
      {
        id: 5,
        question: "What is the primary action of oxytocin in obstetrics?",
        answer: "Uterine contraction",
        options: [
          "Uterine relaxation",
          "Uterine contraction",
          "Cervical ripening",
          "Ovulation suppression",
          "Myometrial inhibition"
        ]
      },
      {
        id: 6,
        question: "Which drug is indicated for the treatment of recurrent urinary tract infections?",
        answer: "Nitrofurantoin",
        options: [
          "Cephalexin",
          "Nitrofurantoin",
          "Ciprofloxacin",
          "Trimethoprim",
          "Amoxicillin"
        ]
      },
      {
        id: 7,
        question: "What is the mechanism of action of mifepristone in medical termination of pregnancy?",
        answer: "Progesterone receptor antagonist",
        options: [
          "Prostaglandin inhibition",
          "Oxytocin receptor blockade",
          "Glucocorticoid receptor blockade",
          "Progesterone receptor antagonist",
          "Estrogen receptor antagonist"
        ]
      },
      {
        id: 8,
        question: "Which antiviral medication is used as prophylaxis for genital herpes during pregnancy?",
        answer: "Acyclovir",
        options: [
          "Acyclovir",
          "Valacyclovir",
          "Famciclovir",
          "Ribavirin",
          "Oseltamivir"
        ]
      },
      {
        id: 9,
        question: "Which hormone is responsible for stimulating milk production during breastfeeding?",
        answer: "Prolactin",
        options: [
          "Prolactin",
          "Estrogen",
          "Progesterone",
          "Oxytocin",
          "Thyroxine"
        ]
      },
      {
        id: 10,
        question: "Which drug is contraindicated in patients with a history of cholestasis of pregnancy?",
        answer: "Ursodeoxycholic acid",
        options: [
          "Ursodeoxycholic acid",
          "Rifampicin",
          "Enoxaparin",
          "Nifedipine",
          "Hydrocortisone"
        ]
      },
      {
        id: 11,
        question: "What is the primary mechanism of action of misoprostol in obstetrics?",
        answer: "Uterine contraction",
        options: [
          "Cervical dilation",
          "Uterine contraction",
          "Fetal neuroprotection",
          "Placental separation",
          "Myometrial relaxation"
        ]
      },
      {
        id: 12,
        question: "Which antibiotic is associated with a risk of causing gray baby syndrome in neonates?",
        answer: "Chloramphenicol",
        options: [
          "Amoxicillin",
          "Chloramphenicol",
          "Ceftriaxone",
          "Vancomycin",
          "Gentamicin"
        ]
      },
      {
        id: 13,
        question: "Which drug is a selective estrogen receptor modulator used in the treatment of infertility?",
        answer: "Clomiphene",
        options: [
          "Clomiphene",
          "Letrozole",
          "Tamoxifen",
          "Anastrozole",
          "Exemestane"
        ]
      },
      {
        id: 14,
        question: "Which class of drugs is contraindicated in pregnancy due to a potential risk of causing fetal harm?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "Calcium channel blockers",
          "Beta blockers",
          "Angiotensin receptor blockers",
          "Diuretics"
        ]
      },
      {
        id: 15,
        question: "Which drug is used for emergency contraception within 72 hours of unprotected intercourse?",
        answer: "Levonorgestrel",
        options: [
          "Levonorgestrel",
          "Mifepristone",
          "Norethindrone",
          "Ulipristal acetate",
          "Desogestrel"
        ]
      },
      {
        id: 16,
        question: "Which drug is a first-line treatment for endometriosis?",
        answer: "Gonadotropin-releasing hormone agonist",
        options: [
          "Danazol",
          "Leuprolide",
          "Norethindrone",
          "Medroxyprogesterone",
          "Gonadotropin-releasing hormone agonist"
        ]
      },
      {
        id: 17,
        question: "Which medication is used to prevent preterm labor in women at risk?",
        answer: "Magnesium sulfate",
        options: [
          "Magnesium sulfate",
          "Terbutaline",
          "Nifedipine",
          "Ritodrine",
          "Indomethacin"
        ]
      },
      {
        id: 18,
        question: "Which medication is used for the medical management of early pregnancy loss?",
        answer: "Misoprostol",
        options: [
          "Misoprostol",
          "Methylergometrine",
          "Oxytocin",
          "Carboprost",
          "Mifepristone"
        ]
      },
      {
        id: 19,
        question: "Which drug is a selective serotonin reuptake inhibitor (SSRI) commonly used in pregnancy?",
        answer: "Sertraline",
        options: [
          "Sertraline",
          "Paroxetine",
          "Fluoxetine",
          "Citalopram",
          "Escitalopram"
        ]
      },
      {
        id: 20,
        question: "Which medication is used for the treatment of polycystic ovary syndrome (PCOS) to induce ovulation?",
        answer: "Clomiphene",
        options: [
          "Metformin",
          "Clomiphene",
          "Pioglitazone",
          "Spironolactone",
          "Gonadotropin"
        ]
      },
      {
        id: 21,
        question: "What is the primary mechanism of action of finasteride in BPH?",
        answer: "5-alpha reductase inhibition",
        options: [
          "Alpha-1 receptor blockade",
          "5-alpha reductase inhibition",
          "Androgen receptor blockade",
          "PDE-5 inhibition",
          "Estrogen receptor blockade"
        ]
      },
      {
        id: 22,
        question: "Which mechanism best describes the action of tolterodine in OAB?",
        answer: "Muscarinic receptor blockade",
        options: [
          "Alpha-1 receptor blockade",
          "Muscarinic receptor blockade",
          "Beta-3 receptor activation",
          "Dopamine agonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 23,
        question: "What is the primary mechanism of action of sildenafil in ED?",
        answer: "Phosphodiesterase-5 inhibition",
        options: [
          "Nitric oxide synthesis",
          "Phosphodiesterase-5 inhibition",
          "Alpha-1 receptor blockade",
          "Testosterone modulation",
          "Endothelin receptor antagonism"
        ]
      },
      {
        id: 24,
        question: "Which mechanism best describes the action of oxybutynin in OAB?",
        answer: "Muscarinic receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "Alpha-1 receptor blockade",
          "Beta-3 receptor activation",
          "Dopamine agonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 25,
        question: "What is the primary mechanism of action of terazosin in BPH?",
        answer: "Alpha-1 receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "5-alpha reductase inhibition",
          "Alpha-1 receptor blockade",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 26,
        question: "Which mechanism best describes the action of raloxifene in osteoporosis?",
        answer: "Selective estrogen receptor modulation",
        options: [
          "Estrogen receptor modulation",
          "Selective estrogen receptor modulation",
          "Parathyroid hormone agonism",
          "Calcium channel blockade",
          "Vitamin D activation"
        ]
      },
      {
        id: 27,
        question: "What is the primary mechanism of action of tamsulosin in BPH?",
        answer: "Alpha-1 receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "Alpha-1 receptor blockade",
          "5-alpha reductase inhibition",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 28,
        question: "Which mechanism best describes the action of clomiphene in fertility treatments?",
        answer: "Selective estrogen receptor modulation",
        options: [
          "GnRH receptor blockade",
          "Selective estrogen receptor modulation",
          "Androgen receptor blockade",
          "Dopamine agonism",
          "FSH receptor agonism"
        ]
      },
      {
        id: 29,
        question: "What is the primary mechanism of action of alfuzosin in BPH?",
        answer: "Alpha-1 receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "5-alpha reductase inhibition",
          "Alpha-1 receptor blockade",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 30,
        question: "Which mechanism best describes the action of letrozole in breast cancer treatment?",
        answer: "Aromatase inhibition",
        options: [
          "Aromatase inhibition",
          "Selective estrogen receptor modulation",
          "Androgen receptor blockade",
          "SERCA pump inhibition",
          "VEGF receptor antagonism"
        ]
      },
      {
        id: 31,
        question: "What is the primary mechanism of action of darifenacin in OAB?",
        answer: "Muscarinic receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "Alpha-1 receptor blockade",
          "Beta-3 receptor activation",
          "Dopamine agonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 32,
        question: "Which mechanism best describes the action of dutasteride in BPH?",
        answer: "5-alpha reductase inhibition",
        options: [
          "Muscarinic receptor blockade",
          "5-alpha reductase inhibition",
          "Alpha-1 receptor blockade",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 33,
        question: "What is the primary mechanism of action of fosfomycin in UTIs?",
        answer: "Cell wall synthesis inhibition",
        options: [
          "DNA gyrase inhibition",
          "Folic acid synthesis inhibition",
          "Cell wall synthesis inhibition",
          "Bacterial RNA polymerase inhibition",
          "MurA inhibition"
        ]
      },
      {
        id: 34,
        question: "Which mechanism best describes the action of bicalutamide in prostate cancer treatment?",
        answer: "Androgen receptor blockade",
        options: [
          "Androgen receptor blockade",
          "5-alpha reductase inhibition",
          "Estrogen receptor modulation",
          "Tyrosine kinase inhibition",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 35,
        question: "What is the primary mechanism of action of solifenacin in OAB?",
        answer: "Muscarinic receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "Alpha-1 receptor blockade",
          "Beta-3 receptor activation",
          "Dopamine agonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 36,
        question: "Which mechanism best describes the action of fulvestrant in breast cancer treatment?",
        answer: "Estrogen receptor blockade",
        options: [
          "Estrogen receptor blockade",
          "Selective estrogen receptor modulation",
          "Androgen receptor blockade",
          "Aromatase inhibition",
          "VEGF receptor antagonism"
        ]
      },
      {
        id: 37,
        question: "What is the primary mechanism of action of risedronate in osteoporosis?",
        answer: "Osteoclast inhibition",
        options: [
          "Osteoclast inhibition",
          "Calcium channel blockade",
          "Parathyroid hormone agonism",
          "Vitamin D activation",
          "Osteoblast stimulation"
        ]
      },
      {
        id: 38,
        question: "Which mechanism best describes the action of solifenacin in OAB?",
        answer: "Muscarinic receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "Alpha-1 receptor blockade",
          "Beta-3 receptor activation",
          "Dopamine agonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 39,
        question: "What is the primary mechanism of action of pamidronate in osteoporosis?",
        answer: "Osteoclast inhibition",
        options: [
          "Osteoclast inhibition",
          "Calcium channel blockade",
          "Parathyroid hormone agonism",
          "Vitamin D activation",
          "Osteoblast stimulation"
        ]
      },
      {
        id: 40,
        question: "Which mechanism best describes the action of enzalutamide in prostate cancer treatment?",
        answer: "Androgen receptor blockade",
        options: [
          "Androgen receptor blockade",
          "5-alpha reductase inhibition",
          "Estrogen receptor modulation",
          "Tyrosine kinase inhibition",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 41,
        question: "A 65-year-old male presents with BPH. Which mechanism best describes the action of dutasteride, which has been prescribed to him?",
        answer: "5-alpha reductase inhibition",
        options: [
          "Muscarinic receptor blockade",
          "5-alpha reductase inhibition",
          "Alpha-1 receptor blockade",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 42,
        question: "A 45-year-old female is diagnosed with hormone receptor-positive breast cancer. What is the primary mechanism of action of tamoxifen, which has been prescribed as part of her treatment?",
        answer: "Estrogen receptor modulation",
        options: [
          "Estrogen receptor modulation",
          "Aromatase inhibition",
          "Androgen receptor blockade",
          "5-alpha reductase inhibition",
          "Selective estrogen receptor modulation"
        ]
      },
      {
        id: 43,
        question: "A 50-year-old male is prescribed tadalafil for erectile dysfunction. What is the primary mechanism of action of tadalafil?",
        answer: "Phosphodiesterase-5 inhibition",
        options: [
          "Nitric oxide synthesis",
          "Alpha-1 receptor blockade",
          "Phosphodiesterase-5 inhibition",
          "Testosterone modulation",
          "Endothelin receptor antagonism"
        ]
      },
      {
        id: 44,
        question: "A 30-year-old female with polycystic ovary syndrome (PCOS) is prescribed metformin. Which mechanism best describes the action of metformin in PCOS?",
        answer: "Insulin receptor activation",
        options: [
          "Insulin receptor activation",
          "Aromatase inhibition",
          "Glucagon receptor blockade",
          "Androgen receptor blockade",
          "5-alpha reductase inhibition"
        ]
      },
      {
        id: 45,
        question: "A 70-year-old male is prescribed sildenafil for the management of pulmonary arterial hypertension (PAH). What is the primary mechanism of action of sildenafil in PAH?",
        answer: "Phosphodiesterase-5 inhibition",
        options: [
          "Nitric oxide synthesis",
          "Phosphodiesterase-5 inhibition",
          "Alpha-1 receptor blockade",
          "Endothelin receptor antagonism",
          "Prostacyclin receptor activation"
        ]
      },
      {
        id: 46,
        question: "A 25-year-old female with endometriosis is prescribed leuprolid. Which mechanism best describes the action of leuprolide in endometriosis?",
        answer: "Gonadotropin-releasing hormone agonist",
        options: [
          "Gonadotropin-releasing hormone agonist",
          "Aromatase inhibition",
          "Estrogen receptor modulation",
          "Androgen receptor blockade",
          "5-alpha reductase inhibition"
        ]
      },
      {
        id: 47,
        question: "A 60-year-old male with prostate cancer is prescribed bicalutamide. What is the primary mechanism of action of bicalutamide in prostate cancer?",
        answer: "Androgen receptor blockade",
        options: [
          "Androgen receptor blockade",
          "Aromatase inhibition",
          "Estrogen receptor modulation",
          "5-alpha reductase inhibition",
          "Tyrosine kinase inhibition"
        ]
      },
      {
        id: 48,
        question: "A 40-year-old female is prescribed clomiphene for infertility. Which mechanism best describes the action of clomiphene in inducing ovulation?",
        answer: "Selective estrogen receptor modulation",
        options: [
          "Selective estrogen receptor modulation",
          "Aromatase inhibition",
          "Androgen receptor blockade",
          "GnRH receptor blockade",
          "FSH receptor agonism"
        ]
      },
      {
        id: 49,
        question: "A 55-year-old male with BPH is prescribed alfuzosin. What is the primary mechanism of action of alfuzosin in BPH?",
        answer: "Alpha-1 receptor blockade",
        options: [
          "Muscarinic receptor blockade",
          "5-alpha reductase inhibition",
          "Alpha-1 receptor blockade",
          "PDE-5 inhibition",
          "Androgen receptor blockade"
        ]
      },
      {
        id: 50,
        question: "A 30-year-old female with breast cancer is prescribed anastrozole. Which mechanism best describes the action of anastrozole in breast cancer treatment?",
        answer: "Aromatase inhibition",
        options: [
          "Aromatase inhibition",
          "Selective estrogen receptor modulation",
          "Androgen receptor blockade",
          "Tyrosine kinase inhibition",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 51,
        question: "A pregnant patient with epilepsy is taking phenytoin. Which drug used in pregnancy may interact with phenytoin, leading to reduced serum levels of phenytoin?",
        answer: "Aspirin",
        options: [
          "Folic acid",
          "Aspirin",
          "Omeprazole",
          "Iron",
          "Furosemide"
        ]
      },
      {
        id: 52,
        question: "In a pregnant patient receiving methotrexate for ectopic pregnancy, which drug interaction might lead to methotrexate toxicity?",
        answer: "NSAIDs",
        options: [
          "Paracetamol",
          "Progesterone",
          "NSAIDs",
          "Metoclopramide",
          "Ondansetron"
        ]
      },
      {
        id: 53,
        question: "A woman taking oral contraceptives is prescribed rifampicin for tuberculosis. What is the most likely consequence of this drug interaction?",
        answer: "Decreased effectiveness of oral contraceptives",
        options: [
          "Increased efficacy of oral contraceptives",
          "Reduced efficacy of rifampicin",
          "Decreased effectiveness of oral contraceptives",
          "No effect on either drug",
          "Increased risk of liver toxicity"
        ]
      },
      {
        id: 54,
        question: "A pregnant patient on warfarin therapy requires treatment with an antibiotic. Which antibiotic poses the highest risk of increasing the anticoagulant effect of warfarin?",
        answer: "Co-trimoxazole",
        options: [
          "Amoxicillin",
          "Clarithromycin",
          "Ciprofloxacin",
          "Co-trimoxazole",
          "Erythromycin"
        ]
      },
      {
        id: 55,
        question: "A pregnant woman on levothyroxine for hypothyroidism develops a urinary tract infection. Which antibiotic should be cautiously prescribed due to its potential to decrease levothyroxine absorption?",
        answer: "Nitrofurantoin",
        options: [
          "Ceftriaxone",
          "Nitrofurantoin",
          "Doxycycline",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 56,
        question: "A patient with recurrent urinary tract infections is prescribed methenamine. Which medication should be avoided due to the potential for decreasing the effectiveness of methenamine?",
        answer: "Ciprofloxacin",
        options: [
          "Ciprofloxacin",
          "Trimethoprim",
          "Nitrofurantoin",
          "Amoxicillin",
          "Tetracycline"
        ]
      },
      {
        id: 57,
        question: "A pregnant patient on lithium for bipolar disorder develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with lithium leading to increased lithium levels?",
        answer: "Trimethoprim",
        options: [
          "Amoxicillin",
          "Ceftriaxone",
          "Trimethoprim",
          "Nitrofurantoin",
          "Erythromycin"
        ]
      },
      {
        id: 58,
        question: "A pregnant woman with a history of renal stones is prescribed acetazolamide for glaucoma. Which medication may interact with acetazolamide, potentially reducing its efficacy in preventing stone formation?",
        answer: "Sodium bicarbonate",
        options: [
          "Allopurinol",
          "Sodium bicarbonate",
          "Calcium carbonate",
          "Potassium citrate",
          "Magnesium hydroxide"
        ]
      },
      {
        id: 59,
        question: "A pregnant patient on enoxaparin for deep vein thrombosis prophylaxis is diagnosed with a urinary tract infection. Which antibiotic should be cautiously prescribed to avoid potential interactions with enoxaparin?",
        answer: "Gentamicin",
        options: [
          "Azithromycin",
          "Gentamicin",
          "Ciprofloxacin",
          "Amoxicillin",
          "Trimethoprim"
        ]
      },
      {
        id: 60,
        question: "A woman on hormonal replacement therapy is prescribed ketoconazole for a fungal infection. Which statement about this drug interaction is accurate?",
        answer: "Ketoconazole inhibits the metabolism of hormonal therapy",
        options: [
          "Ketoconazole increases the metabolism of hormonal therapy",
          "Hormonal therapy reduces the efficacy of ketoconazole",
          "Ketoconazole increases the risk of thromboembolism with hormonal therapy",
          "Hormonal therapy enhances the antifungal effect of ketoconazole",
          "Ketoconazole inhibits the metabolism of hormonal therapy"
        ]
      },
      {
        id: 61,
        question: "A pregnant patient on atenolol for hypertension develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with atenolol, leading to increased atenolol levels?",
        answer: "Trimethoprim",
        options: [
          "Trimethoprim",
          "Amoxicillin",
          "Ciprofloxacin",
          "Nitrofurantoin",
          "Doxycycline"
        ]
      },
      {
        id: 62,
        question: "A pregnant patient on heparin therapy for thrombosis prophylaxis is prescribed an antibiotic. Which antibiotic might increase the risk of bleeding when used concomitantly with heparin?",
        answer: "Erythromycin",
        options: [
          "Clarithromycin",
          "Cephalexin",
          "Erythromycin",
          "Vancomycin",
          "Gentamicin"
        ]
      },
      {
        id: 63,
        question: "A woman on oral contraceptives is prescribed rifampicin for an infection. What advice should be given regarding contraception while on rifampicin therapy?",
        answer: "Use barrier contraception only",
        options: [
          "No additional contraceptive measures are necessary",
          "Use barrier contraception only",
          "Switch to a higher-dose oral contraceptive",
          "Use intrauterine device (IUD)",
          "Stop oral contraceptives during rifampicin therapy"
        ]
      },
      {
        id: 64,
        question: "A pregnant patient on metformin for gestational diabetes is prescribed an antibiotic. Which antibiotic might lead to an increased risk of lactic acidosis when used concomitantly with metformin?",
        answer: "Trimethoprim",
        options: [
          "Penicillin V",
          "Clindamycin",
          "Trimethoprim",
          "Azithromycin",
          "Ciprofloxacin"
        ]
      },
      {
        id: 65,
        question: "A pregnant patient on amitriptyline for depression develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with amitriptyline, leading to increased amitriptyline levels?",
        answer: "Trimethoprim",
        options: [
          "Ceftriaxone",
          "Nitrofurantoin",
          "Ciprofloxacin",
          "Amoxicillin",
          "Trimethoprim"
        ]
      },
      {
        id: 66,
        question: "A woman on hormonal contraception is prescribed phenytoin for seizures. What advice should be given regarding contraception while on phenytoin therapy?",
        answer: "Use barrier contraception only",
        options: [
          "No additional contraceptive measures are necessary",
          "Use barrier contraception only",
          "Switch to a higher-dose oral contraceptive",
          "Use intrauterine device (IUD)",
          "Stop hormonal contraception during phenytoin therapy"
        ]
      },
      {
        id: 67,
        question: "A pregnant patient on nifedipine for hypertension develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with nifedipine, leading to increased nifedipine levels?",
        answer: "Ciprofloxacin",
        options: [
          "Amoxicillin",
          "Ciprofloxacin",
          "Nitrofurantoin",
          "Erythromycin",
          "Trimethoprim"
        ]
      },
      {
        id: 68,
        question: "A woman on hormonal replacement therapy is prescribed rifampicin for an infection. What advice should be given regarding hormonal therapy while on rifampicin therapy?",
        answer: "Switch to a non-hormonal therapy",
        options: [
          "Continue hormonal therapy at the same dose",
          "Increase the dose of hormonal therapy",
          "Switch to a non-hormonal therapy",
          "Decrease the dose of hormonal therapy",
          "Stop hormonal therapy during rifampicin therapy"
        ]
      },
      {
        id: 69,
        question: "A pregnant patient on insulin for gestational diabetes is prescribed an antibiotic. Which antibiotic might require adjustments in insulin dosage due to potential interactions?",
        answer: "Ciprofloxacin",
        options: [
          "Doxycycline",
          "Amoxicillin",
          "Erythromycin",
          "Ciprofloxacin",
          "Trimethoprim"
        ]
      },
      {
        id: 70,
        question: "A woman on hormonal contraception is prescribed rifampicin for an infection. What advice should be given regarding contraception while on rifampicin therapy?",
        answer: "Use barrier contraception only",
        options: [
          "No additional contraceptive measures are necessary",
          "Use barrier contraception only",
          "Switch to a higher-dose oral contraceptive",
          "Use intrauterine device (IUD)",
          "Stop hormonal contraception during rifampicin therapy"
        ]
      },
      {
        id: 71,
        question: "A patient taking finasteride for benign prostatic hyperplasia experiences breast tenderness and enlargement. Which statement accurately explains these side effects?",
        answer: "Finasteride increases estrogen levels",
        options: [
          "Finasteride induces androgen production",
          "Finasteride causes direct breast tissue irritation",
          "Finasteride inhibits testosterone synthesis",
          "Finasteride increases estrogen levels",
          "Finasteride blocks progesterone receptors"
        ]
      },
      {
        id: 72,
        question: "A patient using oxybutynin for overactive bladder complains of dry mouth, constipation, and blurred vision. Which physiological effect of oxybutynin contributes to these side effects?",
        answer: "Cholinergic stimulation",
        options: [
          "Alpha-adrenergic blockade",
          "Cholinergic stimulation",
          "Antihistaminic activity",
          "Serotonergic modulation",
          "Dopaminergic inhibition"
        ]
      },
      {
        id: 73,
        question: "A woman undergoing chemotherapy with cisplatin develops severe nausea and vomiting. Which medication would be most effective in preventing these side effects?",
        answer: "Ondansetron",
        options: [
          "Metoclopramide",
          "Ondansetron",
          "Dimenhydrinate",
          "Dexamethasone",
          "Prochlorperazine"
        ]
      },
      {
        id: 74,
        question: "A patient receiving intravenous vancomycin for a severe infection develops redness and swelling at the infusion site. Which physiological effect of vancomycin may cause this reaction?",
        answer: "Bradykinin elevation",
        options: [
          "Histamine release",
          "Bradykinin elevation",
          "Prostaglandin synthesis inhibition",
          "Serotonin depletion",
          "Leukotriene inhibition"
        ]
      },
      {
        id: 75,
        question: "A woman using clomiphene for ovulation induction reports visual disturbances and flashes of light. Which side effect of clomiphene is likely responsible for these symptoms?",
        answer: "Retinal toxicity",
        options: [
          "Central nervous system depression",
          "Retinal toxicity",
          "Optic neuritis",
          "Retinal detachment",
          "Visual aura"
        ]
      },
      {
        id: 76,
        question: "A patient receiving a prostaglandin analogue for glaucoma treatment experiences iris discoloration. Which mechanism contributes to this side effect?",
        answer: "Increased melanin production",
        options: [
          "Increased melanin production",
          "Reduced melanin production",
          "Stimulation of iris vasculature",
          "Inhibition of iris pigmentation",
          "Dilation of iris blood vessels"
        ]
      },
      {
        id: 77,
        question: "A woman taking oral contraceptives presents with sudden leg pain and swelling. Which side effect of oral contraceptives might cause these symptoms?",
        answer: "Thrombosis",
        options: [
          "Thrombosis",
          "Rhabdomyolysis",
          "Peripheral neuropathy",
          "Osteoporosis",
          "Muscle cramps"
        ]
      },
      {
        id: 78,
        question: "A patient prescribed methotrexate for ectopic pregnancy develops mouth ulcers and nausea. Which mechanism contributes to these side effects of methotrexate?",
        answer: "Folic acid depletion",
        options: [
          "Gastrointestinal irritation",
          "Folic acid depletion",
          "Liver toxicity",
          "Renal impairment",
          "Bone marrow suppression"
        ]
      },
      {
        id: 79,
        question: "A woman on tamoxifen therapy for breast cancer complains of hot flashes and vaginal dryness. Which statement accurately describes the cause of these symptoms?",
        answer: "Antagonism of estrogen receptors",
        options: [
          "Estrogen depletion",
          "Progesterone elevation",
          "Antagonism of estrogen receptors",
          "Increased androgen levels",
          "Suppression of gonadotropin release"
        ]
      },
      {
        id: 80,
        question: "A patient receiving allopurinol for gout develops a severe skin rash and fever. Which adverse effect of allopurinol is most likely responsible for these symptoms?",
        answer: "Hypersensitivity reaction",
        options: [
          "Hypersensitivity reaction",
          "Hepatotoxicity",
          "Nephrotoxicity",
          "Bone marrow suppression",
          "Metabolic acidosis"
        ]
      },
      {
        id: 81,
        question: "A woman taking metronidazole for bacterial vaginosis complains of a metallic taste in her mouth. Which mechanism contributes to this common side effect of metronidazole?",
        answer: "Disruption of oral flora",
        options: [
          "Impaired taste receptors",
          "Salivary gland dysfunction",
          "Disruption of oral flora",
          "Central nervous system stimulation",
          "Liver toxicity"
        ]
      },
      {
        id: 82,
        question: "A patient prescribed spironolactone for heart failure develops gynecomastia and erectile dysfunction. Which action of spironolactone contributes to these side effects?",
        answer: "Stimulation of androgen receptors",
        options: [
          "Inhibition of aldosterone receptors",
          "Stimulation of androgen receptors",
          "Antagonism of estrogen receptors",
          "Blockade of progesterone receptors",
          "Inhibition of mineralocorticoid synthesis"
        ]
      },
      {
        id: 83,
        question: "A woman using leuprolide for endometriosis experiences hot flashes, vaginal dryness, and mood swings. Which physiological effect of leuprolide contributes to these side effects?",
        answer: "Estrogen depletion",
        options: [
          "Estrogen depletion",
          "Progesterone elevation",
          "Antagonism of gonadotropin-releasing hormone receptors",
          "Stimulation of androgen receptors",
          "Suppression of prolactin secretion"
        ]
      },
      {
        id: 84,
        question: "A patient on phenytoin for seizures develops gum hyperplasia. Which mechanism contributes to this side effect of phenytoin?",
        answer: "Increased collagen synthesis",
        options: [
          "Gingival inflammation",
          "Increased collagen synthesis",
          "Immune system suppression",
          "Vascular dilation",
          "Gingival fibroblast stimulation"
        ]
      },
      {
        id: 85,
        question: "A woman using danazol for endometriosis presents with voice deepening and clitoral enlargement. Which action of danazol contributes to these masculinizing side effects?",
        answer: "Stimulation of androgen production",
        options: [
          "Stimulation of estrogen receptors",
          "Antagonism of androgen receptors",
          "Stimulation of progesterone receptors",
          "Inhibition of gonadotropin secretion",
          "Stimulation of androgen production"
        ]
      },
      {
        id: 86,
        question: "A patient taking furosemide for heart failure develops low potassium levels and muscle weakness. Which mechanism contributes to these side effects of furosemide?",
        answer: "Sodium excretion",
        options: [
          "Potassium-sparing effect",
          "Sodium excretion",
          "Increased calcium reabsorption",
          "Aldosterone suppression",
          "Magnesium retention"
        ]
      },
      {
        id: 87,
        question: "A woman using misoprostol for medical abortion reports severe abdominal pain and vaginal bleeding. Which side effect of misoprostol is responsible for these symptoms?",
        answer: "Uterine contractions",
        options: [
          "Gastrointestinal irritation",
          "Uterine contractions",
          "Cervical softening",
          "Fluid retention",
          "Renal impairment"
        ]
      },
      {
        id: 88,
        question: "A patient prescribed tamsulosin for benign prostatic hyperplasia experiences dizziness and orthostatic hypotension. Which pharmacological effect of tamsulosin contributes to these side effects?",
        answer: "Alpha-adrenergic blockade",
        options: [
          "Alpha-adrenergic blockade",
          "Beta-adrenergic stimulation",
          "Parasympathetic stimulation",
          "Calcium channel blockade",
          "Renin-angiotensin inhibition"
        ]
      },
      {
        id: 89,
        question: "A woman using mifepristone for medical termination of pregnancy develops heavy vaginal bleeding. Which mechanism contributes to this side effect of mifepristone?",
        answer: "Uterine contractions",
        options: [
          "Uterine contractions",
          "Thrombosis",
          "Cervical dilation",
          "Hormone receptor modulation",
          "Vascular permeability increase"
        ]
      },
      {
        id: 90,
        question: "A patient prescribed sildenafil for erectile dysfunction complains of headache and flushing. Which physiological effect of sildenafil contributes to these side effects?",
        answer: "Vasodilation",
        options: [
          "Increased sympathetic activity",
          "Vasodilation",
          "Serotonin release",
          "CNS stimulation",
          "Decreased prostaglandin synthesis"
        ]
      },
      {
        id: 91,
        question: "A patient prescribed metformin for type 2 diabetes presents with lactic acidosis. Which factor contributes to this rare but serious side effect of metformin?",
        answer: "Renal impairment",
        options: [
          "Renal impairment",
          "Hyperglycemia",
          "Hepatic dysfunction",
          "Hypokalemia",
          "Insulin resistance"
        ]
      },
      {
        id: 92,
        question: "A woman taking valproate for epilepsy experiences weight gain, alopecia, and tremors. Which mechanism contributes to these side effects of valproate?",
        answer: "GABA potentiation",
        options: [
          "Serotonin modulation",
          "GABA potentiation",
          "Dopamine depletion",
          "Histamine release",
          "Glutamate inhibition"
        ]
      },
      {
        id: 93,
        question: "A patient using warfarin for anticoagulation develops purple discoloration of the toes and severe pain. Which side effect of warfarin is most likely responsible for these symptoms?",
        answer: "Purple toe syndrome",
        options: [
          "Thrombocytopenia",
          "Hemorrhagic stroke",
          "Purple toe syndrome",
          "Osteoporosis",
          "Hepatic necrosis"
        ]
      },
      {
        id: 94,
        question: "A woman using bisphosphonates for osteoporosis complains of heartburn and difficulty swallowing. Which side effect of bisphosphonates might cause these symptoms?",
        answer: "Esophageal ulceration",
        options: [
          "Gastric bleeding",
          "Pancreatitis",
          "Intestinal perforation",
          "Duodenal ulcer"
        ]
      },
      {
        id: 95,
        question: "A patient prescribed fluoxetine for depression experiences sexual dysfunction, drowsiness, and weight gain. Which mechanism contributes to these side effects of fluoxetine?",
        answer: "Serotonin reuptake inhibition",
        options: [
          "Norepinephrine depletion",
          "Dopamine elevation",
          "Acetylcholine blockade",
          "Histamine release"
        ]
      },
      {
        id: 96,
        question: "A woman on atenolol for hypertension develops bronchospasm and worsening of asthma symptoms. Which pharmacological effect of atenolol contributes to these side effects?",
        answer: "Beta-1 receptor blockade",
        options: [
          "Alpha-1 receptor stimulation",
          "Muscarinic receptor blockade",
          "Calcium channel inhibition",
          "Dopamine agonism"
        ]
      },
      {
        id: 97,
        question: "A patient using alendronate for osteoporosis experiences jaw pain and osteonecrosis of the jaw. Which mechanism contributes to these side effects of alendronate?",
        answer: "Osteoclast inhibition",
        options: [
          "Bone resorption promotion",
          "Osteoblast stimulation",
          "Calcium absorption enhancement",
          "Vascular endothelial growth factor inhibition"
        ]
      },
      {
        id: 98,
        question: "A woman taking carbamazepine for epilepsy develops a skin rash and fever. Which side effect of carbamazepine is most likely responsible for these symptoms?",
        answer: "Stevens-Johnson syndrome",
        options: [
          "Hypersensitivity reaction",
          "Toxic epidermal necrolysis",
          "Erythema multiforme",
          "Contact dermatitis"
        ]
      },
      {
        id: 99,
        question: "A patient using tadalafil for erectile dysfunction complains of sudden vision loss in one eye. Which side effect of tadalafil is most likely responsible for this symptom?",
        answer: "Ischemic optic neuropathy",
        options: [
          "Retinal detachment",
          "Optic neuritis",
          "Macular degeneration",
          "Cataracts"
        ]
      },
      {
        id: 100,
        question: "A woman using levothyroxine for hypothyroidism reports palpitations and excessive sweating. Which side effect of levothyroxine might cause these symptoms?",
        answer: "Thyrotoxicosis",
        options: [
          "Hypoglycemia",
          "Hypercalcemia",
          "Hypernatremia",
          "Adrenal insufficiency"
        ]
      },
      {
        id: 101,
        question: "A patient on ciprofloxacin for a urinary tract infection experiences tendon pain and swelling. Which side effect of ciprofloxacin is most likely responsible for these symptoms?",
        answer: "Tendonitis",
        options: [
          "Tendon rupture",
          "Ligament tear",
          "Bursitis",
          "Muscle strain"
        ]
      },
      {
        id: 102,
        question: "A woman using medroxyprogesterone acetate for contraception develops irregular menstrual bleeding and amenorrhea. Which mechanism contributes to these side effects of medroxyprogesterone acetate?",
        answer: "Endometrial atrophy",
        options: [
          "Estrogen elevation",
          "Progesterone depletion",
          "Ovulation suppression",
          "Cervical mucus thickening"
        ]
      },
      {
        id: 103,
        question: "A patient taking hydrochlorothiazide for hypertension develops hypokalemia and muscle cramps. Which mechanism contributes to these side effects of hydrochlorothiazide?",
        answer: "Potassium excretion",
        options: [
          "Sodium retention",
          "Aldosterone inhibition",
          "Calcium absorption",
          "Magnesium retention"
        ]
      },
      {
        id: 104,
        question: "A woman using sertraline for depression experiences serotonin syndrome with symptoms of agitation, hyperthermia, and tremors. Which action of sertraline contributes to these side effects?",
        answer: "Serotonin reuptake inhibition",
        options: [
          "Dopamine modulation",
          "Norepinephrine depletion",
          "Acetylcholine blockade",
          "Histamine release"
        ]
      },
      {
        id: 105,
        question: "A patient on lisinopril for hypertension develops a dry cough. Which mechanism contributes to this side effect of lisinopril?",
        answer: "Bradykinin accumulation",
        options: [
          "Histamine release",
          "Prostaglandin synthesis inhibition",
          "Norepinephrine depletion",
          "Acetylcholine blockade"
        ]
      },
      {
        id: 106,
        question: "A woman using mirtazapine for depression reports increased appetite and weight gain. Which action of mirtazapine contributes to these side effects?",
        answer: "Histamine release",
        options: [
          "Serotonin reuptake inhibition",
          "Norepinephrine depletion",
          "Dopamine modulation",
          "GABA potentiation"
        ]
      },
      {
        id: 107,
        question: "A patient taking amitriptyline for neuropathic pain develops urinary retention and constipation. Which pharmacological effect of amitriptyline contributes to these side effects?",
        answer: "Anticholinergic activity",
        options: [
          "Serotonin reuptake inhibition",
          "Dopamine modulation",
          "GABA potentiation",
          "Alpha-adrenergic blockade"
        ]
      },
      {
        id: 108,
        question: "A woman on estradiol therapy for menopausal symptoms experiences breast tenderness and vaginal bleeding. Which mechanism contributes to these side effects of estradiol?",
        answer: "Estrogen stimulation",
        options: [
          "Progesterone elevation",
          "Estrogen depletion",
          "Endometrial atrophy",
          "Uterine contractions"
        ]
      },
      {
        id: 109,
        question: "A patient using amoxicillin-clavulanate for a respiratory infection develops jaundice and elevated liver enzymes. Which side effect of amoxicillin-clavulanate is most likely responsible for these symptoms?",
        answer: "Cholestatic hepatitis",
        options: [
          "Fatty liver",
          "Cirrhosis",
          "Liver abscess",
          "Hepatic necrosis"
        ]
      },
      {
        id: 110,
        question: "A woman on desmopressin for diabetes insipidus develops headache and hyponatremia. Which side effect of desmopressin might cause these symptoms?",
        answer: "Vasopressin excess",
        options: [
          "Fluid overload",
          "Hypokalemia",
          "Oxytocin release",
          "Thirst suppression"
        ]
      },
      {
        id: 111,
        question: "A patient using phenazopyridine for urinary tract pain develops orange discoloration of urine and nausea. Which mechanism contributes to these side effects of phenazopyridine?",
        answer: "Increased urinary pH",
        options: [
          "Red blood cell destruction",
          "Renal tubular damage",
          "Hepatic enzyme inhibition",
          "Bile pigment excretion"
        ]
      },
      {
        id: 112,
        question: "A woman taking duloxetine for depression experiences dry mouth, constipation, and increased sweating. Which mechanism contributes to these side effects of duloxetine?",
        answer: "Acetylcholine blockade",
        options: [
          "Serotonin reuptake inhibition",
          "Norepinephrine depletion",
          "Dopamine modulation",
          "Histamine release"
        ]
      },
      {
        id: 113,
        question: "A patient prescribed spironolactone for heart failure develops hyperkalemia and gynecomastia. Which action of spironolactone contributes to these side effects?",
        answer: "Potassium excretion",
        options: [
          "Sodium excretion",
          "Androgen receptor antagonism",
          "Aldosterone inhibition",
          "Estrogen elevation"
        ]
      },
      {
        id: 114,
        question: "A woman using norgestimate-ethinyl estradiol for contraception reports breast tenderness and breakthrough bleeding. Which mechanism contributes to these side effects of the combined oral contraceptive?",
        answer: "Estrogen elevation",
        options: [
          "Progesterone depletion",
          "Endometrial atrophy",
          "Uterine contractions",
          "Estrogen depletion"
        ]
      },
      {
        id: 115,
        question: "A patient taking hydroxychloroquine for rheumatoid arthritis develops visual disturbances and difficulty focusing. Which mechanism contributes to these side effects of hydroxychloroquine?",
        answer: "Retinal toxicity",
        options: [
          "Optic nerve inflammation",
          "Lens opacity",
          "Vitreous hemorrhage",
          "Corneal edema"
        ]
      },
      {
        id: 116,
        question: "A woman using clindamycin for a vaginal infection reports severe diarrhea and abdominal cramps. Which mechanism contributes to these side effects of clindamycin?",
        answer: "Intestinal microflora disruption",
        options: [
          "Increased intestinal motility",
          "Intestinal microflora disruption",
          "Gastric acid suppression",
          "Pancreatic enzyme inhibition",
          "Bile flow obstruction"
        ]
      },
      {
        id: 117,
        question: "A patient on atorvastatin for hypercholesterolemia develops muscle pain and weakness. Which mechanism contributes to these side effects of atorvastatin?",
        answer: "Increased creatinine kinase",
        options: [
          "Increased creatinine kinase",
          "Myelin sheath damage",
          "Nerve conduction blockade",
          "Mitochondrial dysfunction",
          "Neuromuscular junction inhibition"
        ]
      },
      {
        id: 118,
        question: "A woman using fluconazole for a vaginal yeast infection complains of headache and dizziness. Which side effect of fluconazole might cause these symptoms?",
        answer: "CNS toxicity",
        options: [
          "CNS toxicity",
          "Hepatic necrosis",
          "Renal failure",
          "Ophthalmic toxicity",
          "Ototoxicity"
        ]
      },
      {
        id: 119,
        question: "A patient prescribed levetiracetam for seizures develops mood swings and irritability. Which mechanism contributes to these side effects of levetiracetam?",
        answer: "GABA potentiation",
        options: [
          "Dopamine depletion",
          "GABA potentiation",
          "Serotonin modulation",
          "Norepinephrine elevation",
          "Histamine release"
        ]
      },
      {
        id: 120,
        question: "A woman using isoniazid for tuberculosis develops peripheral neuropathy and liver dysfunction. Which mechanism contributes to these side effects of isoniazid?",
        answer: "Pyridoxine depletion",
        options: [
          "Pyridoxine depletion",
          "Acetylcholine blockade",
          "Serotonin reuptake inhibition",
          "Dopamine modulation",
          "GABA potentiation"
        ]
      },
      {
        id: 121,
        question: "A patient on cimetidine for peptic ulcer disease develops gynecomastia and impotence. Which mechanism contributes to these side effects of cimetidine?",
        answer: "Androgen receptor antagonism",
        options: [
          "Androgen receptor antagonism",
          "Estrogen elevation",
          "Histamine release",
          "Testosterone depletion",
          "Dopamine modulation"
        ]
      },
      {
        id: 122,
        question: "A woman using tamoxifen for breast cancer treatment reports hot flashes and mood swings. Which mechanism contributes to these side effects of tamoxifen?",
        answer: "Estrogen blockade",
        options: [
          "Estrogen elevation",
          "Progesterone depletion",
          "Endometrial atrophy",
          "Uterine contractions",
          "Estrogen blockade"
        ]
      },
      {
        id: 123,
        question: "A patient taking pioglitazone for type 2 diabetes develops peripheral edema and weight gain. Which mechanism contributes to these side effects of pioglitazone?",
        answer: "Adipose tissue expansion",
        options: [
          "Sodium excretion",
          "Glucose metabolism inhibition",
          "Adipose tissue expansion",
          "Insulin resistance",
          "Potassium retention"
        ]
      },
      {
        id: 124,
        question: "A woman using levonorgestrel-releasing intrauterine device for contraception reports irregular menstrual bleeding and amenorrhea. Which mechanism contributes to these side effects of the levonorgestrel-releasing IUD?",
        answer: "Endometrial atrophy",
        options: [
          "Estrogen elevation",
          "Progesterone depletion",
          "Endometrial atrophy",
          "Uterine contractions",
          "Hormone receptor modulation"
        ]
      },
      {
        id: 125,
        question: "A patient prescribed quetiapine for schizophrenia experiences sedation, dry mouth, and weight gain. Which mechanism contributes to these side effects of quetiapine?",
        answer: "Histamine receptor antagonism",
        options: [
          "Dopamine receptor blockade",
          "Serotonin reuptake inhibition",
          "Histamine receptor antagonism",
          "GABA potentiation",
          "Glutamate inhibition"
        ]
      },
      {
        id: 126,
        question: "A woman using isotretinoin for severe acne complains of dry skin, mucosal dryness, and joint pain. Which mechanism contributes to these side effects of isotretinoin?",
        answer: "Sebaceous gland inhibition",
        options: [
          "Sebaceous gland inhibition",
          "Collagen synthesis inhibition",
          "Keratinocyte apoptosis",
          "Hyaluronic acid degradation",
          "Melanin production suppression"
        ]
      },
      {
        id: 127,
        question: "A patient on metronidazole for bacterial vaginosis develops metallic taste and nausea. Which mechanism contributes to these side effects of metronidazole?",
        answer: "Disruption of oral flora",
        options: [
          "GABA potentiation",
          "Histamine release",
          "Serotonin reuptake inhibition",
          "Disruption of oral flora",
          "Norepinephrine depletion"
        ]
      },
      {
        id: 128,
        question: "A woman using medroxyprogesterone acetate for contraception develops depression and irritability. Which mechanism contributes to these side effects of medroxyprogesterone acetate?",
        answer: "Progesterone depletion",
        options: [
          "Estrogen elevation",
          "Progesterone depletion",
          "Endometrial atrophy",
          "Uterine contractions",
          "Hormone receptor modulation"
        ]
      },
      {
        id: 129,
        question: "A patient taking aripiprazole for bipolar disorder develops akathisia and restlessness. Which mechanism contributes to these side effects of aripiprazole?",
        answer: "Dopamine receptor blockade",
        options: [
          "Dopamine receptor blockade",
          "Serotonin reuptake inhibition",
          "Histamine receptor antagonism",
          "GABA potentiation",
          "Glutamate inhibition"
        ]
      },
      {
        id: 130,
        question: "A woman on metformin for type 2 diabetes complains of gastrointestinal upset and diarrhea. Which mechanism contributes to these side effects of metformin?",
        answer: "Glucose metabolism inhibition",
        options: [
          "Insulin resistance",
          "Glucose metabolism inhibition",
          "Intestinal motility enhancement",
          "Sodium reabsorption inhibition",
          "Bile flow obstruction"
        ]
      }
];

export default OGUFlashcardMain;
