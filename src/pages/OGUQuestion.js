import React, { useEffect, useState } from "react"
import ScoreView from "./ScoreView/ScoreView"
import QuizView from "./QuizView/QuizView"
import { useNavigate, Link } from "react-router-dom"
import classnames from "classnames" // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai" // Import icons if not already imported

const OGUQuestion = () => {
  const navigate = useNavigate()

  const [questions, useQuestions] = useState([
    {
      question:
        "Which drug is contraindicated in pregnancy due to its teratogenic effects?",
      answers: [
        { text: "Atenolol" },
        { text: "Lisinopril" },
        { text: "Warfarin" },
        { text: "Fluoxetine" },
        { text: "Isotretinoin", isCorrect: true },
      ],
      Explanation:
        "Isotretinoin is contraindicated in pregnancy due to its high teratogenic risk, causing severe birth defects.",
    },
    {
      question: "What is the first-line treatment for gestational diabetes?",
      answers: [
        { text: "Metformin" },
        { text: "Insulin", isCorrect: true },
        { text: "Glyburide" },
        { text: "Pioglitazone" },
        { text: "Acarbose" },
      ],
      Explanation:
        "Insulin remains the primary therapy for managing gestational diabetes due to its safety and efficacy in pregnancy.",
    },
    {
      question: "Which antibiotic is considered safe during lactation?",
      answers: [
        { text: "Doxycycline" },
        { text: "Trimethoprim" },
        { text: "Ciprofloxacin" },
        { text: "Azithromycin" },
        { text: "Amoxicillin", isCorrect: true },
      ],
      Explanation:
        "Amoxicillin is generally considered safe during lactation with minimal risk to the breastfed infant.",
    },
    {
      question:
        "Which contraceptive method is the most effective in preventing pregnancy?",
      answers: [
        { text: "Condoms" },
        { text: "Oral contraceptive pills" },
        { text: "Intrauterine device (IUD)", isCorrect: true },
        { text: "Diaphragm" },
        { text: "Depo-Provera injection" },
      ],
      Explanation:
        "The intrauterine device (IUD) is one of the most effective methods with a very low failure rate in preventing pregnancy.",
    },
    {
      question: "What is the primary action of oxytocin in obstetrics?",
      answers: [
        { text: "Uterine relaxation" },
        { text: "Uterine contraction", isCorrect: true },
        { text: "Cervical ripening" },
        { text: "Ovulation suppression" },
        { text: "Myometrial inhibition" },
      ],
      Explanation:
        "Oxytocin primarily induces uterine contractions during labor and delivery.",
    },
    {
      question:
        "Which drug is indicated for the treatment of recurrent urinary tract infections?",
      answers: [
        { text: "Cephalexin" },
        { text: "Nitrofurantoin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Trimethoprim" },
        { text: "Amoxicillin" },
      ],
      Explanation:
        "Nitrofurantoin is often used for the prophylactic treatment of recurrent urinary tract infections.",
    },
    {
      question:
        "What is the mechanism of action of mifepristone in medical termination of pregnancy?",
      answers: [
        { text: "Prostaglandin inhibition" },
        { text: "Oxytocin receptor blockade" },
        { text: "Glucocorticoid receptor blockade" },
        { text: "Progesterone receptor antagonist", isCorrect: true },
        { text: "Estrogen receptor antagonist" },
      ],
      Explanation:
        "Mifepristone acts as a progesterone receptor antagonist leading to endometrial breakdown and termination of pregnancy.",
    },
    {
      question:
        "Which antiviral medication is used as prophylaxis for genital herpes during pregnancy?",
      answers: [
        { text: "Acyclovir", isCorrect: true },
        { text: "Valacyclovir" },
        { text: "Famciclovir" },
        { text: "Ribavirin" },
        { text: "Oseltamivir" },
      ],
      Explanation:
        "Acyclovir is commonly used for prophylaxis against genital herpes during pregnancy to reduce transmission to the baby.",
    },
    {
      question:
        "Which hormone is responsible for stimulating milk production during breastfeeding?",
      answers: [
        { text: "Prolactin", isCorrect: true },
        { text: "Estrogen" },
        { text: "Progesterone" },
        { text: "Oxytocin" },
        { text: "Thyroxine" },
      ],
      Explanation:
        "Prolactin is the primary hormone responsible for stimulating milk production in the mammary glands.",
    },
    {
      question:
        "Which drug is contraindicated in patients with a history of cholestasis of pregnancy?",
      answers: [
        { text: "Ursodeoxycholic acid", isCorrect: true },
        { text: "Rifampicin" },
        { text: "Enoxaparin" },
        { text: "Nifedipine" },
        { text: "Hydrocortisone" },
      ],
      Explanation:
        "Ursodeoxycholic acid can exacerbate cholestasis of pregnancy and is contraindicated in such cases.",
    },
    {
      question:
        "What is the primary mechanism of action of misoprostol in obstetrics?",
      answers: [
        { text: "Cervical dilation" },
        { text: "Uterine contraction", isCorrect: true },
        { text: "Fetal neuroprotection" },
        { text: "Placental separation" },
        { text: "Myometrial relaxation" },
      ],
      Explanation:
        "Misoprostol primarily induces uterine contractions, aiding in cervical dilation and uterine expulsion in obstetrics.",
    },
    {
      question:
        "Which antibiotic is associated with a risk of causing gray baby syndrome in neonates?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Chloramphenicol", isCorrect: true },
        { text: "Ceftriaxone" },
        { text: "Vancomycin" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Chloramphenicol use in neonates has been linked to the development of gray baby syndrome.",
    },
    {
      question:
        "Which drug is a selective estrogen receptor modulator used in the treatment of infertility?",
      answers: [
        { text: "Clomiphene", isCorrect: true },
        { text: "Letrozole" },
        { text: "Tamoxifen" },
        { text: "Anastrozole" },
        { text: "Exemestane" },
      ],
      Explanation:
        "Clomiphene is a selective estrogen receptor modulator commonly used in the treatment of infertility.",
    },
    {
      question:
        "Which class of drugs is contraindicated in pregnancy due to a potential risk of causing fetal harm?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "Calcium channel blockers" },
        { text: "Beta blockers" },
        { text: "Angiotensin receptor blockers" },
        { text: "Diuretics" },
      ],
      Explanation:
        "ACE inhibitors are contraindicated in pregnancy due to their potential teratogenic effects.",
    },
    {
      question:
        "Which drug is used for emergency contraception within 72 hours of unprotected intercourse?",
      answers: [
        { text: "Levonorgestrel", isCorrect: true },
        { text: "Mifepristone" },
        { text: "Norethindrone" },
        { text: "Ulipristal acetate" },
        { text: "Desogestrel" },
      ],
      Explanation:
        "Levonorgestrel is a common emergency contraceptive used within 72 hours of unprotected intercourse.",
    },
    {
      question: "Which drug is a first-line treatment for endometriosis?",
      answers: [
        { text: "Danazol" },
        { text: "Leuprolide" },
        { text: "Norethindrone" },
        { text: "Medroxyprogesterone" },
        { text: "Gonadotropin-releasing hormone agonist", isCorrect: true },
      ],
      Explanation:
        "Gonadotropin-releasing hormone agonists are often used as the first-line treatment for endometriosis.",
    },
    {
      question:
        "Which medication is used to prevent preterm labor in women at risk?",
      answers: [
        { text: "Magnesium sulfate", isCorrect: true },
        { text: "Terbutaline" },
        { text: "Nifedipine" },
        { text: "Ritodrine" },
        { text: "Indomethacin" },
      ],
      Explanation:
        "Magnesium sulfate is often used to prevent preterm labor in high-risk women due to its tocolytic properties.",
    },
    {
      question:
        "Which medication is used for the medical management of early pregnancy loss?",
      answers: [
        { text: "Misoprostol", isCorrect: true },
        { text: "Methylergometrine" },
        { text: "Oxytocin" },
        { text: "Carboprost" },
        { text: "Mifepristone" },
      ],
      Explanation:
        "Misoprostol is commonly used for medical management in cases of early pregnancy loss.",
    },
    {
      question:
        "Which drug is a selective serotonin reuptake inhibitor (SSRI) commonly used in pregnancy?",
      answers: [
        { text: "Sertraline", isCorrect: true },
        { text: "Paroxetine" },
        { text: "Fluoxetine" },
        { text: "Citalopram" },
        { text: "Escitalopram" },
      ],
      Explanation:
        "Sertraline is often preferred among SSRIs due to its safety profile in pregnancy.",
    },
    {
      question:
        "Which medication is used for the treatment of polycystic ovary syndrome (PCOS) to induce ovulation?",
      answers: [
        { text: "Metformin" },
        { text: "Clomiphene", isCorrect: true },
        { text: "Pioglitazone" },
        { text: "Spironolactone" },
        { text: "Gonadotropin" },
      ],
      Explanation:
        "Clomiphene is commonly used to induce ovulation in women with PCOS.",
    },
    {
      question:
        "What is the primary mechanism of action of finasteride in BPH?",
      answers: [
        { text: "Alpha-1 receptor blockade" },
        { text: "5-alpha reductase inhibition", isCorrect: true },
        { text: "Androgen receptor blockade" },
        { text: "PDE-5 inhibition" },
        { text: "Estrogen receptor blockade" },
      ],
      Explanation:
        "Finasteride inhibits 5-alpha reductase, decreasing the conversion of testosterone to dihydrotestosterone in BPH.",
    },
    {
      question:
        "Which mechanism best describes the action of tolterodine in OAB?",
      answers: [
        { text: "Alpha-1 receptor blockade" },
        { text: "Muscarinic receptor blockade", isCorrect: true },
        { text: "Beta-3 receptor activation" },
        { text: "Dopamine agonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Tolterodine acts as a competitive muscarinic receptor antagonist, reducing bladder contractions in overactive bladder.",
    },
    {
      question: "What is the primary mechanism of action of sildenafil in ED?",
      answers: [
        { text: "Nitric oxide synthesis" },
        { text: "Phosphodiesterase-5 inhibition", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Testosterone modulation" },
        { text: "Endothelin receptor antagonism" },
      ],
      Explanation:
        "Sildenafil primarily works by inhibiting phosphodiesterase-5, leading to increased cGMP and smooth muscle relaxation.",
    },
    {
      question:
        "Which mechanism best describes the action of oxybutynin in OAB?",
      answers: [
        { text: "Muscarinic receptor blockade", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Beta-3 receptor activation" },
        { text: "Dopamine agonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Oxybutynin acts as a muscarinic receptor antagonist, reducing bladder contractions in overactive bladder.",
    },
    {
      question: "What is the primary mechanism of action of terazosin in BPH?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "5-alpha reductase inhibition" },
        { text: "Alpha-1 receptor blockade", isCorrect: true },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Terazosin primarily works by blocking alpha-1 adrenergic receptors, relaxing smooth muscles in the prostate and bladder.",
    },
    {
      question:
        "Which mechanism best describes the action of raloxifene in osteoporosis?",
      answers: [
        { text: "Estrogen receptor modulation" },
        { text: "Selective estrogen receptor modulation", isCorrect: true },
        { text: "Parathyroid hormone agonism" },
        { text: "Calcium channel blockade" },
        { text: "Vitamin D activation" },
      ],
      Explanation:
        "Raloxifene acts as a selective estrogen receptor modulator (SERM), mimicking estrogen's beneficial effects on bone.",
    },
    {
      question: "What is the primary mechanism of action of tamsulosin in BPH?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "Alpha-1 receptor blockade", isCorrect: true },
        { text: "5-alpha reductase inhibition" },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Tamsulosin primarily targets alpha-1 adrenergic receptors, relaxing smooth muscles in the prostate and bladder.",
    },
    {
      question:
        "Which mechanism best describes the action of clomiphene in fertility treatments?",
      answers: [
        { text: "GnRH receptor blockade" },
        { text: "Selective estrogen receptor modulation", isCorrect: true },
        { text: "Androgen receptor blockade" },
        { text: "Dopamine agonism" },
        { text: "FSH receptor agonism" },
      ],
      Explanation:
        "Clomiphene acts as a selective estrogen receptor modulator (SERM), stimulating ovulation by blocking estrogen receptors.",
    },
    {
      question: "What is the primary mechanism of action of alfuzosin in BPH?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "5-alpha reductase inhibition" },
        { text: "Alpha-1 receptor blockade", isCorrect: true },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Alfuzosin primarily works by blocking alpha-1 adrenergic receptors, reducing smooth muscle tone in the prostate.",
    },
    {
      question:
        "Which mechanism best describes the action of letrozole in breast cancer treatment?",
      answers: [
        { text: "Aromatase inhibition", isCorrect: true },
        { text: "Selective estrogen receptor modulation" },
        { text: "Androgen receptor blockade" },
        { text: "SERCA pump inhibition" },
        { text: "VEGF receptor antagonism" },
      ],
      Explanation:
        "Letrozole inhibits aromatase, reducing estrogen production and thereby suppressing estrogen-dependent tumor growth.",
    },
    {
      question:
        "What is the primary mechanism of action of darifenacin in OAB?",
      answers: [
        { text: "Muscarinic receptor blockade", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Beta-3 receptor activation" },
        { text: "Dopamine agonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Darifenacin primarily acts as a competitive antagonist at muscarinic receptors, reducing bladder muscle contractions.",
    },
    {
      question:
        "Which mechanism best describes the action of dutasteride in BPH?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "5-alpha reductase inhibition", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Dutasteride inhibits both Type I and Type II 5-alpha reductase, reducing dihydrotestosterone levels in BPH.",
    },
    {
      question:
        "What is the primary mechanism of action of fosfomycin in UTIs?",
      answers: [
        { text: "DNA gyrase inhibition" },
        { text: "Folic acid synthesis inhibition" },
        { text: "Cell wall synthesis inhibition", isCorrect: true },
        { text: "Bacterial RNA polymerase inhibition" },
        { text: "MurA inhibition" },
      ],
      Explanation:
        "Fosfomycin inhibits bacterial cell wall synthesis by blocking MurA, an enzyme involved in peptidoglycan production.",
    },
    {
      question:
        "Which mechanism best describes the action of bicalutamide in prostate cancer treatment?",
      answers: [
        { text: "Androgen receptor blockade", isCorrect: true },
        { text: "5-alpha reductase inhibition" },
        { text: "Estrogen receptor modulation" },
        { text: "Tyrosine kinase inhibition" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Bicalutamide competitively inhibits androgen receptors, preventing androgen-mediated tumor growth in prostate cancer.",
    },
    {
      question:
        "What is the primary mechanism of action of solifenacin in OAB?",
      answers: [
        { text: "Muscarinic receptor blockade", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Beta-3 receptor activation" },
        { text: "Dopamine agonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Solifenacin primarily acts as a competitive muscarinic receptor antagonist, reducing bladder muscle contractions.",
    },
    {
      question:
        "Which mechanism best describes the action of fulvestrant in breast cancer treatment?",
      answers: [
        { text: "Estrogen receptor blockade", isCorrect: true },
        { text: "Selective estrogen receptor modulation" },
        { text: "Androgen receptor blockade" },
        { text: "Aromatase inhibition" },
        { text: "VEGF receptor antagonism" },
      ],
      Explanation:
        "Fulvestrant acts as a pure estrogen receptor antagonist, blocking estrogen binding and leading to receptor degradation.",
    },
    {
      question:
        "What is the primary mechanism of action of risedronate in osteoporosis?",
      answers: [
        { text: "Osteoclast inhibition", isCorrect: true },
        { text: "Calcium channel blockade" },
        { text: "Parathyroid hormone agonism" },
        { text: "Vitamin D activation" },
        { text: "Osteoblast stimulation" },
      ],
      Explanation:
        "Risedronate primarily inhibits osteoclast-mediated bone resorption, slowing down bone loss in osteoporosis.",
    },
    {
      question:
        "Which mechanism best describes the action of solifenacin in OAB?",
      answers: [
        { text: "Muscarinic receptor blockade", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Beta-3 receptor activation" },
        { text: "Dopamine agonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Solifenacin primarily acts as a competitive muscarinic receptor antagonist, reducing bladder muscle contractions.",
    },
    {
      question:
        "What is the primary mechanism of action of pamidronate in osteoporosis?",
      answers: [
        { text: "Osteoclast inhibition", isCorrect: true },
        { text: "Calcium channel blockade" },
        { text: "Parathyroid hormone agonism" },
        { text: "Vitamin D activation" },
        { text: "Osteoblast stimulation" },
      ],
      Explanation:
        "Pamidronate primarily inhibits osteoclast activity, reducing bone resorption and improving bone density in osteoporosis.",
    },
    {
      question:
        "Which mechanism best describes the action of enzalutamide in prostate cancer treatment?",
      answers: [
        { text: "Androgen receptor blockade", isCorrect: true },
        { text: "5-alpha reductase inhibition" },
        { text: "Estrogen receptor modulation" },
        { text: "Tyrosine kinase inhibition" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Enzalutamide inhibits androgen receptor signaling, suppressing tumor growth in prostate cancer cells dependent on androgens.",
    },
    {
      question:
        "A 65-year-old male presents with BPH. Which mechanism best describes the action of dutasteride, which has been prescribed to him?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "5-alpha reductase inhibition", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Dutasteride inhibits 5-alpha reductase, reducing the conversion of testosterone to dihydrotestosterone in BPH.",
    },
    {
      question:
        "A 45-year-old female is diagnosed with hormone receptor-positive breast cancer. What is the primary mechanism of action of tamoxifen, which has been prescribed as part of her treatment?",
      answers: [
        { text: "Estrogen receptor modulation", isCorrect: true },
        { text: "Aromatase inhibition" },
        { text: "Androgen receptor blockade" },
        { text: "5-alpha reductase inhibition" },
        { text: "Selective estrogen receptor modulation" },
      ],
      Explanation:
        "Tamoxifen acts as a selective estrogen receptor modulator (SERM), competitively blocking estrogen receptors in breast tissue.",
    },
    {
      question:
        "A 50-year-old male is prescribed tadalafil for erectile dysfunction. What is the primary mechanism of action of tadalafil?",
      answers: [
        { text: "Nitric oxide synthesis" },
        { text: "Alpha-1 receptor blockade" },
        { text: "Phosphodiesterase-5 inhibition", isCorrect: true },
        { text: "Testosterone modulation" },
        { text: "Endothelin receptor antagonism" },
      ],
      Explanation:
        "Tadalafil primarily works by inhibiting phosphodiesterase-5, enhancing the effects of nitric oxide and improving erectile function.",
    },
    {
      question:
        "A 30-year-old female with polycystic ovary syndrome (PCOS) is prescribed metformin. Which mechanism best describes the action of metformin in PCOS?",
      answers: [
        { text: "Insulin receptor activation", isCorrect: true },
        { text: "Aromatase inhibition" },
        { text: "Glucagon receptor blockade" },
        { text: "Androgen receptor blockade" },
        { text: "5-alpha reductase inhibition" },
      ],
      Explanation:
        "Metformin primarily works by activating insulin receptors, improving insulin sensitivity in PCOS.",
    },
    {
      question:
        "A 70-year-old male is prescribed sildenafil for the management of pulmonary arterial hypertension (PAH). What is the primary mechanism of action of sildenafil in PAH?",
      answers: [
        { text: "Nitric oxide synthesis" },
        { text: "Phosphodiesterase-5 inhibition", isCorrect: true },
        { text: "Alpha-1 receptor blockade" },
        { text: "Endothelin receptor antagonism" },
        { text: "Prostacyclin receptor activation" },
      ],
      Explanation:
        "Sildenafil primarily works by inhibiting phosphodiesterase-5, increasing cGMP levels and vasodilation in PAH.",
    },
    {
      question:
        "A 25-year-old female with endometriosis is prescribed leuprolid. Which mechanism best describes the action of leuprolide in endometriosis?",
      answers: [
        { text: "Gonadotropin-releasing hormone agonist", isCorrect: true },
        { text: "Aromatase inhibition" },
        { text: "Estrogen receptor modulation" },
        { text: "Androgen receptor blockade" },
        { text: "5-alpha reductase inhibition" },
      ],
      Explanation:
        "Leuprolide acts as a gonadotropin-releasing hormone agonist, suppressing ovarian function and estrogen production in endometriosis.",
    },
    {
      question:
        "A 60-year-old male with prostate cancer is prescribed bicalutamide. What is the primary mechanism of action of bicalutamide in prostate cancer?",
      answers: [
        { text: "Androgen receptor blockade", isCorrect: true },
        { text: "Aromatase inhibition" },
        { text: "Estrogen receptor modulation" },
        { text: "5-alpha reductase inhibition" },
        { text: "Tyrosine kinase inhibition" },
      ],
      Explanation:
        "Bicalutamide competitively inhibits androgen receptors, suppressing androgen-dependent tumor growth in prostate cancer.",
    },
    {
      question:
        "A 40-year-old female is prescribed clomiphene for infertility. Which mechanism best describes the action of clomiphene in inducing ovulation?",
      answers: [
        { text: "Selective estrogen receptor modulation", isCorrect: true },
        { text: "Aromatase inhibition" },
        { text: "Androgen receptor blockade" },
        { text: "GnRH receptor blockade" },
        { text: "FSH receptor agonism" },
      ],
      Explanation:
        "Clomiphene acts as a selective estrogen receptor modulator (SERM), stimulating ovulation by blocking estrogen receptors.",
    },
    {
      question:
        "A 55-year-old male with BPH is prescribed alfuzosin. What is the primary mechanism of action of alfuzosin in BPH?",
      answers: [
        { text: "Muscarinic receptor blockade" },
        { text: "5-alpha reductase inhibition" },
        { text: "Alpha-1 receptor blockade", isCorrect: true },
        { text: "PDE-5 inhibition" },
        { text: "Androgen receptor blockade" },
      ],
      Explanation:
        "Alfuzosin primarily works by blocking alpha-1 adrenergic receptors, reducing smooth muscle tone in the prostate.",
    },
    {
      question:
        "A 30-year-old female with breast cancer is prescribed anastrozole. Which mechanism best describes the action of anastrozole in breast cancer treatment?",
      answers: [
        { text: "Aromatase inhibition", isCorrect: true },
        { text: "Selective estrogen receptor modulation" },
        { text: "Androgen receptor blockade" },
        { text: "Tyrosine kinase inhibition" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Anastrozole inhibits aromatase, reducing estrogen production and suppressing estrogen-dependent tumor growth in breast cancer.",
    },
    {
      question:
        "A pregnant patient with epilepsy is taking phenytoin. Which drug used in pregnancy may interact with phenytoin, leading to reduced serum levels of phenytoin?",
      answers: [
        { text: "Folic acid" },
        { text: "Aspirin", isCorrect: true },
        { text: "Omeprazole" },
        { text: "Iron" },
        { text: "Furosemide" },
      ],
      Explanation:
        "Aspirin can induce hepatic microsomal enzymes, potentially decreasing phenytoin levels.",
    },
    {
      question:
        "In a pregnant patient receiving methotrexate for ectopic pregnancy, which drug interaction might lead to methotrexate toxicity?",
      answers: [
        { text: "Paracetamol" },
        { text: "Progesterone" },
        { text: "NSAIDs", isCorrect: true },
        { text: "Metoclopramide" },
        { text: "Ondansetron" },
      ],
      Explanation:
        "NSAIDs can decrease renal clearance and increase methotrexate levels, leading to toxicity.",
    },
    {
      question:
        "A woman taking oral contraceptives is prescribed rifampicin for tuberculosis. What is the most likely consequence of this drug interaction?",
      answers: [
        { text: "Increased efficacy of oral contraceptives" },
        { text: "Reduced efficacy of rifampicin" },
        {
          text: "Decreased effectiveness of oral contraceptives",
          isCorrect: true,
        },
        { text: "No effect on either drug" },
        { text: "Increased risk of liver toxicity" },
      ],
      Explanation:
        "Rifampicin induces hepatic enzymes, reducing the effectiveness of oral contraceptives.",
    },
    {
      question:
        "A pregnant patient on warfarin therapy requires treatment with an antibiotic. Which antibiotic poses the highest risk of increasing the anticoagulant effect of warfarin?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Clarithromycin" },
        { text: "Ciprofloxacin" },
        { text: "Co-trimoxazole", isCorrect: true },
        { text: "Erythromycin" },
      ],
      Explanation:
        "Co-trimoxazole can potentiate the anticoagulant effect of warfarin by inhibiting its metabolism.",
    },
    {
      question:
        "A pregnant woman on levothyroxine for hypothyroidism develops a urinary tract infection. Which antibiotic should be cautiously prescribed due to its potential to decrease levothyroxine absorption?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Nitrofurantoin", isCorrect: true },
        { text: "Doxycycline" },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Nitrofurantoin can reduce levothyroxine absorption when taken concurrently.",
    },
    {
      question:
        "A patient with recurrent urinary tract infections is prescribed methenamine. Which medication should be avoided due to the potential for decreasing the effectiveness of methenamine?",
      answers: [
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Trimethoprim" },
        { text: "Nitrofurantoin" },
        { text: "Amoxicillin" },
        { text: "Tetracycline" },
      ],
      Explanation:
        "Ciprofloxacin increases urinary pH, potentially reducing methenamine efficacy.",
    },
    {
      question:
        "A pregnant patient on lithium for bipolar disorder develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with lithium leading to increased lithium levels?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Ceftriaxone" },
        { text: "Trimethoprim", isCorrect: true },
        { text: "Nitrofurantoin" },
        { text: "Erythromycin" },
      ],
      Explanation:
        "Trimethoprim can increase lithium levels by inhibiting its renal excretion.",
    },
    {
      question:
        "A pregnant woman with a history of renal stones is prescribed acetazolamide for glaucoma. Which medication may interact with acetazolamide, potentially reducing its efficacy in preventing stone formation?",
      answers: [
        { text: "Allopurinol" },
        { text: "Sodium bicarbonate", isCorrect: true },
        { text: "Calcium carbonate" },
        { text: "Potassium citrate" },
        { text: "Magnesium hydroxide" },
      ],
      Explanation:
        "Sodium bicarbonate can alkalinize urine, reducing the effectiveness of acetazolamide in preventing stone formation.",
    },
    {
      question:
        "A pregnant patient on enoxaparin for deep vein thrombosis prophylaxis is diagnosed with a urinary tract infection. Which antibiotic should be cautiously prescribed to avoid potential interactions with enoxaparin?",
      answers: [
        { text: "Azithromycin" },
        { text: "Gentamicin", isCorrect: true },
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Gentamicin might increase the risk of bleeding when used concomitantly with enoxaparin.",
    },
    {
      question:
        "A woman on hormonal replacement therapy is prescribed ketoconazole for a fungal infection. Which statement about this drug interaction is accurate?",
      answers: [
        { text: "Ketoconazole increases the metabolism of hormonal therapy" },
        { text: "Hormonal therapy reduces the efficacy of ketoconazole" },
        {
          text: "Ketoconazole increases the risk of thromboembolism with hormonal therapy",
        },
        {
          text: "Hormonal therapy enhances the antifungal effect of ketoconazole",
        },
        {
          text: "Ketoconazole inhibits the metabolism of hormonal therapy",
          isCorrect: true,
        },
      ],
      Explanation:
        "Ketoconazole inhibits cytochrome P450 enzymes, potentially increasing hormonal therapy levels.",
    },
    {
      question:
        "A pregnant patient on atenolol for hypertension develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with atenolol, leading to increased atenolol levels?",
      answers: [
        { text: "Trimethoprim", isCorrect: true },
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin" },
        { text: "Nitrofurantoin" },
        { text: "Doxycycline" },
      ],
      Explanation:
        "Trimethoprim can increase atenolol levels by inhibiting its renal excretion.",
    },
    {
      question:
        "A pregnant patient on heparin therapy for thrombosis prophylaxis is prescribed an antibiotic. Which antibiotic might increase the risk of bleeding when used concomitantly with heparin?",
      answers: [
        { text: "Clarithromycin" },
        { text: "Cephalexin" },
        { text: "Erythromycin", isCorrect: true },
        { text: "Vancomycin" },
        { text: "Gentamicin" },
      ],
      Explanation:
        "Erythromycin might increase the risk of bleeding when used with heparin due to potential interactions.",
    },
    {
      question:
        "A woman on oral contraceptives is prescribed rifampicin for an infection. What advice should be given regarding contraception while on rifampicin therapy?",
      answers: [
        { text: "Use barrier contraception only", isCorrect: true },
        { text: "No additional contraceptive measures are necessary" },
        { text: "Switch to a higher-dose oral contraceptive" },
        { text: "Use intrauterine device (IUD)" },
        { text: "Stop oral contraceptives during rifampicin therapy" },
      ],
      Explanation:
        "Rifampicin reduces the effectiveness of oral contraceptives; therefore, additional barrier methods are recommended.",
    },
    {
      question:
        "A pregnant patient on metformin for gestational diabetes is prescribed an antibiotic. Which antibiotic might lead to an increased risk of lactic acidosis when used concomitantly with metformin?",
      answers: [
        { text: "Penicillin V" },
        { text: "Clindamycin" },
        { text: "Trimethoprim", isCorrect: true },
        { text: "Azithromycin" },
        { text: "Ciprofloxacin" },
      ],
      Explanation:
        "Trimethoprim can increase the risk of lactic acidosis when used with metformin by inhibiting its renal excretion.",
    },
    {
      question:
        "A pregnant patient on amitriptyline for depression develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with amitriptyline, leading to increased amitriptyline levels?",
      answers: [
        { text: "Ceftriaxone" },
        { text: "Nitrofurantoin" },
        { text: "Ciprofloxacin" },
        { text: "Amoxicillin" },
        { text: "Trimethoprim", isCorrect: true },
      ],
      Explanation:
        "Trimethoprim can increase amitriptyline levels by inhibiting its renal excretion.",
    },
    {
      question:
        "A woman on hormonal contraception is prescribed phenytoin for seizures. What advice should be given regarding contraception while on phenytoin therapy?",
      answers: [
        { text: "No additional contraceptive measures are necessary" },
        { text: "Use barrier contraception only", isCorrect: true },
        { text: "Switch to a higher-dose oral contraceptive" },
        { text: "Use intrauterine device (IUD)" },
        { text: "Stop hormonal contraception during phenytoin therapy" },
      ],
      Explanation:
        "Phenytoin reduces the effectiveness of hormonal contraception, so additional barrier methods are recommended.",
    },
    {
      question:
        "A pregnant patient on nifedipine for hypertension develops a urinary tract infection. Which antibiotic should be avoided due to potential interactions with nifedipine, leading to increased nifedipine levels?",
      answers: [
        { text: "Amoxicillin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Nitrofurantoin" },
        { text: "Erythromycin" },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Ciprofloxacin can increase nifedipine levels by inhibiting its metabolism.",
    },
    {
      question:
        "A woman on hormonal replacement therapy is prescribed rifampicin for an infection. What advice should be given regarding hormonal therapy while on rifampicin therapy?",
      answers: [
        { text: "Continue hormonal therapy at the same dose" },
        { text: "Increase the dose of hormonal therapy" },
        { text: "Switch to a non-hormonal therapy", isCorrect: true },
        { text: "Decrease the dose of hormonal therapy" },
        { text: "Stop hormonal therapy during rifampicin therapy" },
      ],
      Explanation:
        "Rifampicin decreases hormonal therapy efficacy; therefore, switching to non-hormonal options is recommended.",
    },
    {
      question:
        "A pregnant patient on insulin for gestational diabetes is prescribed an antibiotic. Which antibiotic might require adjustments in insulin dosage due to potential interactions?",
      answers: [
        { text: "Doxycycline" },
        { text: "Amoxicillin" },
        { text: "Erythromycin" },
        { text: "Ciprofloxacin", isCorrect: true },
        { text: "Trimethoprim" },
      ],
      Explanation:
        "Ciprofloxacin might affect blood glucose levels, necessitating adjustments in insulin dosage.",
    },
    {
      question:
        "A woman on hormonal contraception is prescribed rifampicin for an infection. What advice should be given regarding contraception while on rifampicin therapy?",
      answers: [
        { text: "No additional contraceptive measures are necessary" },
        { text: "Use barrier contraception only", isCorrect: true },
        { text: "Switch to a higher-dose oral contraceptive" },
        { text: "Use intrauterine device (IUD)" },
        { text: "Stop hormonal contraception during rifampicin therapy" },
      ],
      Explanation:
        "Rifampicin reduces the effectiveness of hormonal contraception; therefore, additional barrier methods are recommended.",
    },
    {
      question:
        "A patient taking finasteride for benign prostatic hyperplasia experiences breast tenderness and enlargement. Which statement accurately explains these side effects?",
      answers: [
        { text: "Finasteride induces androgen production" },
        { text: "Finasteride causes direct breast tissue irritation" },
        { text: "Finasteride inhibits testosterone synthesis" },
        { text: "Finasteride increases estrogen levels", isCorrect: true },
        { text: "Finasteride blocks progesterone receptors" },
      ],
      Explanation:
        "Finasteride inhibits the conversion of testosterone to dihydrotestosterone, leading to increased estrogen levels and resulting in gynecomastia.",
    },
    {
      question:
        "A patient using oxybutynin for overactive bladder complains of dry mouth, constipation, and blurred vision. Which physiological effect of oxybutynin contributes to these side effects?",
      answers: [
        { text: "Alpha-adrenergic blockade" },
        { text: "Cholinergic stimulation", isCorrect: true },
        { text: "Antihistaminic activity" },
        { text: "Serotonergic modulation" },
        { text: "Dopaminergic inhibition" },
      ],
      Explanation:
        "Oxybutynin, as an anticholinergic agent, leads to dry mouth, constipation, and blurred vision due to its action on blocking cholinergic receptors.",
    },
    {
      question:
        "A woman undergoing chemotherapy with cisplatin develops severe nausea and vomiting. Which medication would be most effective in preventing these side effects?",
      answers: [
        { text: "Metoclopramide" },
        { text: "Ondansetron", isCorrect: true },
        { text: "Dimenhydrinate" },
        { text: "Dexamethasone" },
        { text: "Prochlorperazine" },
      ],
      Explanation:
        "Ondansetron, a serotonin receptor antagonist, is highly effective in preventing chemotherapy-induced nausea and vomiting.",
    },
    {
      question:
        "A patient receiving intravenous vancomycin for a severe infection develops redness and swelling at the infusion site. Which physiological effect of vancomycin may cause this reaction?",
      answers: [
        { text: "Histamine release" },
        { text: "Bradykinin elevation", isCorrect: true },
        { text: "Prostaglandin synthesis inhibition" },
        { text: "Serotonin depletion" },
        { text: "Leukotriene inhibition" },
      ],
      Explanation:
        "Vancomycin can cause direct mast cell degranulation, leading to bradykinin release and subsequent redness and swelling at the infusion site.",
    },
    {
      question:
        "A woman using clomiphene for ovulation induction reports visual disturbances and flashes of light. Which side effect of clomiphene is likely responsible for these symptoms?",
      answers: [
        { text: "Central nervous system depression" },
        { text: "Retinal toxicity", isCorrect: true },
        { text: "Optic neuritis" },
        { text: "Retinal detachment" },
        { text: "Visual aura" },
      ],
      Explanation:
        "Clomiphene can increase the risk of retinal detachment, which presents with symptoms like visual disturbances and flashes of light.",
    },
    {
      question:
        "A patient receiving a prostaglandin analogue for glaucoma treatment experiences iris discoloration. Which mechanism contributes to this side effect?",
      answers: [
        { text: "Increased melanin production", isCorrect: true },
        { text: "Reduced melanin production" },
        { text: "Stimulation of iris vasculature" },
        { text: "Inhibition of iris pigmentation" },
        { text: "Dilation of iris blood vessels" },
      ],
      Explanation:
        "Prostaglandin analogues can increase melanin production, leading to iris discoloration or darkening.",
    },
    {
      question:
        "A woman taking oral contraceptives presents with sudden leg pain and swelling. Which side effect of oral contraceptives might cause these symptoms?",
      answers: [
        { text: "Thrombosis", isCorrect: true },
        { text: "Rhabdomyolysis" },
        { text: "Peripheral neuropathy" },
        { text: "Osteoporosis" },
        { text: "Muscle cramps" },
      ],
      Explanation:
        "Oral contraceptives can increase the risk of thrombosis, resulting in symptoms like leg pain and swelling due to deep vein thrombosis.",
    },
    {
      question:
        "A patient prescribed methotrexate for ectopic pregnancy develops mouth ulcers and nausea. Which mechanism contributes to these side effects of methotrexate?",
      answers: [
        { text: "Gastrointestinal irritation" },
        { text: "Folic acid depletion", isCorrect: true },
        { text: "Liver toxicity" },
        { text: "Renal impairment" },
        { text: "Bone marrow suppression" },
      ],
      Explanation:
        "Methotrexate inhibits dihydrofolate reductase, leading to folic acid depletion and subsequent side effects like mouth ulcers and nausea.",
    },
    {
      question:
        "A woman on tamoxifen therapy for breast cancer complains of hot flashes and vaginal dryness. Which statement accurately describes the cause of these symptoms?",
      answers: [
        { text: "Estrogen depletion" },
        { text: "Progesterone elevation" },
        { text: "Antagonism of estrogen receptors", isCorrect: true },
        { text: "Increased androgen levels" },
        { text: "Suppression of gonadotropin release" },
      ],
      Explanation:
        "Tamoxifen acts as an estrogen receptor antagonist, causing side effects like hot flashes and vaginal dryness due to its action on estrogen receptors.",
    },
    {
      question:
        "A patient receiving allopurinol for gout develops a severe skin rash and fever. Which adverse effect of allopurinol is most likely responsible for these symptoms?",
      answers: [
        { text: "Hypersensitivity reaction", isCorrect: true },
        { text: "Hepatotoxicity" },
        { text: "Nephrotoxicity" },
        { text: "Bone marrow suppression" },
        { text: "Metabolic acidosis" },
      ],
      Explanation:
        "Allopurinol is known to cause severe hypersensitivity reactions, presenting as skin rash and fever in some cases.",
    },
    {
      question:
        "A woman taking metronidazole for bacterial vaginosis complains of a metallic taste in her mouth. Which mechanism contributes to this common side effect of metronidazole?",
      answers: [
        { text: "Impaired taste receptors" },
        { text: "Salivary gland dysfunction" },
        { text: "Disruption of oral flora", isCorrect: true },
        { text: "Central nervous system stimulation" },
        { text: "Liver toxicity" },
      ],
      Explanation:
        "Metronidazole can alter the oral flora, leading to a metallic taste sensation in the mouth.",
    },
    {
      question:
        "A patient prescribed spironolactone for heart failure develops gynecomastia and erectile dysfunction. Which action of spironolactone contributes to these side effects?",
      answers: [
        { text: "Inhibition of aldosterone receptors" },
        { text: "Stimulation of androgen receptors", isCorrect: true },
        { text: "Antagonism of estrogen receptors" },
        { text: "Blockade of progesterone receptors" },
        { text: "Inhibition of mineralocorticoid synthesis" },
      ],
      Explanation:
        "Spironolactone can act as an androgen receptor agonist, leading to side effects like gynecomastia and erectile dysfunction.",
    },
    {
      question:
        "A woman using leuprolide for endometriosis experiences hot flashes, vaginal dryness, and mood swings. Which physiological effect of leuprolide contributes to these side effects?",
      answers: [
        { text: "Estrogen depletion", isCorrect: true },
        { text: "Progesterone elevation" },
        { text: "Antagonism of gonadotropin-releasing hormone receptors" },
        { text: "Stimulation of androgen receptors" },
        { text: "Suppression of prolactin secretion" },
      ],
      Explanation:
        "Leuprolide suppresses estrogen production, leading to side effects like hot flashes, vaginal dryness, and mood swings due to estrogen depletion.",
    },
    {
      question:
        "A patient on phenytoin for seizures develops gum hyperplasia. Which mechanism contributes to this side effect of phenytoin?",
      answers: [
        { text: "Gingival inflammation" },
        { text: "Increased collagen synthesis", isCorrect: true },
        { text: "Immune system suppression" },
        { text: "Vascular dilation" },
        { text: "Gingival fibroblast stimulation" },
      ],
      Explanation:
        "Phenytoin can stimulate fibroblasts, leading to excessive collagen synthesis and subsequent gum hyperplasia.",
    },
    {
      question:
        "A woman using danazol for endometriosis presents with voice deepening and clitoral enlargement. Which action of danazol contributes to these masculinizing side effects?",
      answers: [
        { text: "Stimulation of estrogen receptors" },
        { text: "Antagonism of androgen receptors" },
        { text: "Stimulation of progesterone receptors" },
        { text: "Inhibition of gonadotropin secretion" },
        { text: "Stimulation of androgen production", isCorrect: true },
      ],
      Explanation:
        "Danazol can increase androgen production, leading to masculinizing side effects like voice deepening and clitoral enlargement.",
    },
    {
      question:
        "A patient taking furosemide for heart failure develops low potassium levels and muscle weakness. Which mechanism contributes to these side effects of furosemide?",
      answers: [
        { text: "Potassium-sparing effect" },
        { text: "Sodium excretion", isCorrect: true },
        { text: "Increased calcium reabsorption" },
        { text: "Aldosterone suppression" },
        { text: "Magnesium retention" },
      ],
      Explanation:
        "Furosemide's action as a loop diuretic leads to sodium and potassium excretion, causing low potassium levels and subsequent muscle weakness.",
    },
    {
      question:
        "A woman using misoprostol for medical abortion reports severe abdominal pain and vaginal bleeding. Which side effect of misoprostol is responsible for these symptoms?",
      answers: [
        { text: "Gastrointestinal irritation" },
        { text: "Uterine contractions", isCorrect: true },
        { text: "Cervical softening" },
        { text: "Fluid retention" },
        { text: "Renal impairment" },
      ],
      Explanation:
        "Misoprostol induces uterine contractions, leading to abdominal pain and vaginal bleeding during medical abortion.",
    },
    {
      question:
        "A patient prescribed tamsulosin for benign prostatic hyperplasia experiences dizziness and orthostatic hypotension. Which pharmacological effect of tamsulosin contributes to these side effects?",
      answers: [
        { text: "Alpha-adrenergic blockade", isCorrect: true },
        { text: "Beta-adrenergic stimulation" },
        { text: "Parasympathetic stimulation" },
        { text: "Calcium channel blockade" },
        { text: "Renin-angiotensin inhibition" },
      ],
      Explanation:
        "Tamsulosin, as an alpha-adrenergic blocker, can cause dizziness and orthostatic hypotension by relaxing smooth muscle in blood vessels.",
    },
    {
      question:
        "A woman using mifepristone for medical termination of pregnancy develops heavy vaginal bleeding. Which mechanism contributes to this side effect of mifepristone?",
      answers: [
        { text: "Uterine contractions", isCorrect: true },
        { text: "Thrombosis" },
        { text: "Cervical dilation" },
        { text: "Hormone receptor modulation" },
        { text: "Vascular permeability increase" },
      ],
      Explanation:
        "Mifepristone induces uterine contractions, leading to heavy vaginal bleeding during medical termination of pregnancy.",
    },
    {
      question:
        "A patient prescribed sildenafil for erectile dysfunction complains of headache and flushing. Which physiological effect of sildenafil contributes to these side effects?",
      answers: [
        { text: "Increased sympathetic activity" },
        { text: "Vasodilation", isCorrect: true },
        { text: "Serotonin release" },
        { text: "CNS stimulation" },
        { text: "Decreased prostaglandin synthesis" },
      ],
      Explanation:
        "Sildenafil, as a phosphodiesterase inhibitor, causes vasodilation, resulting in side effects like headache and flushing due to increased blood flow.",
    },
    {
      question:
        "A patient prescribed metformin for type 2 diabetes presents with lactic acidosis. Which factor contributes to this rare but serious side effect of metformin?",
      answers: [
        { text: "Renal impairment", isCorrect: true },
        { text: "Hyperglycemia" },
        { text: "Hepatic dysfunction" },
        { text: "Hypokalemia" },
        { text: "Insulin resistance" },
      ],
      Explanation:
        "Metformin-associated lactic acidosis is primarily linked to impaired renal function, leading to its accumulation and subsequent lactic acidosis.",
    },
    {
      question:
        "A woman taking valproate for epilepsy experiences weight gain, alopecia, and tremors. Which mechanism contributes to these side effects of valproate?",
      answers: [
        { text: "Serotonin modulation" },
        { text: "GABA potentiation", isCorrect: true },
        { text: "Dopamine depletion" },
        { text: "Histamine release" },
        { text: "Glutamate inhibition" },
      ],
      Explanation:
        "Valproate enhances GABAergic transmission, leading to side effects like weight gain, alopecia, and tremors.",
    },
    {
      question:
        "A patient using warfarin for anticoagulation develops purple discoloration of the toes and severe pain. Which side effect of warfarin is most likely responsible for these symptoms?",
      answers: [
        { text: "Thrombocytopenia" },
        { text: "Hemorrhagic stroke" },
        { text: "Purple toe syndrome", isCorrect: true },
        { text: "Osteoporosis" },
        { text: "Hepatic necrosis" },
      ],
      Explanation:
        "Warfarin-induced purple toe syndrome is characterized by purple discoloration and severe pain due to microembolization.",
    },
    {
      question:
        "A woman using bisphosphonates for osteoporosis complains of heartburn and difficulty swallowing. Which side effect of bisphosphonates might cause these symptoms?",
      answers: [
        { text: "Esophageal ulceration", isCorrect: true },
        { text: "Gastric bleeding" },
        { text: "Pancreatitis" },
        { text: "Intestinal perforation" },
        { text: "Duodenal ulcer" },
      ],
      Explanation:
        "Bisphosphonates can cause esophageal ulceration, leading to symptoms like heartburn and difficulty swallowing.",
    },
    {
      question:
        "A patient prescribed fluoxetine for depression experiences sexual dysfunction, drowsiness, and weight gain. Which mechanism contributes to these side effects of fluoxetine?",
      answers: [
        { text: "Serotonin reuptake inhibition", isCorrect: true },
        { text: "Norepinephrine depletion" },
        { text: "Dopamine elevation" },
        { text: "Acetylcholine blockade" },
        { text: "Histamine release" },
      ],
      Explanation:
        "Fluoxetine, as an SSRI, blocks serotonin reuptake, leading to side effects like sexual dysfunction, drowsiness, and weight gain.",
    },
    {
      question:
        "A woman on atenolol for hypertension develops bronchospasm and worsening of asthma symptoms. Which pharmacological effect of atenolol contributes to these side effects?",
      answers: [
        { text: "Beta-1 receptor blockade", isCorrect: true },
        { text: "Alpha-1 receptor stimulation" },
        { text: "Muscarinic receptor blockade" },
        { text: "Calcium channel inhibition" },
        { text: "Dopamine agonism" },
      ],
      Explanation:
        "Atenolol's beta-1 receptor blockade can lead to bronchospasm and worsen asthma symptoms due to beta-2 receptor antagonism in the lungs.",
    },
    {
      question:
        "A patient using alendronate for osteoporosis experiences jaw pain and osteonecrosis of the jaw. Which mechanism contributes to these side effects of alendronate?",
      answers: [
        { text: "Osteoclast inhibition", isCorrect: true },
        { text: "Bone resorption promotion" },
        { text: "Osteoblast stimulation" },
        { text: "Calcium absorption enhancement" },
        { text: "Vascular endothelial growth factor inhibition" },
      ],
      Explanation:
        "Alendronate inhibits osteoclasts, potentially leading to jaw pain and osteonecrosis of the jaw.",
    },
    {
      question:
        "A woman taking carbamazepine for epilepsy develops a skin rash and fever. Which side effect of carbamazepine is most likely responsible for these symptoms?",
      answers: [
        { text: "Stevens-Johnson syndrome", isCorrect: true },
        { text: "Hypersensitivity reaction" },
        { text: "Toxic epidermal necrolysis" },
        { text: "Erythema multiforme" },
        { text: "Contact dermatitis" },
      ],
      Explanation:
        "Carbamazepine can induce severe hypersensitivity reactions, presenting as skin rash and fever.",
    },
    {
      question:
        "A patient using tadalafil for erectile dysfunction complains of sudden vision loss in one eye. Which side effect of tadalafil is most likely responsible for this symptom?",
      answers: [
        { text: "Retinal detachment" },
        { text: "Optic neuritis" },
        { text: "Ischemic optic neuropathy", isCorrect: true },
        { text: "Macular degeneration" },
        { text: "Cataracts" },
      ],
      Explanation:
        "Tadalafil use has been associated with non-arteritic anterior ischemic optic neuropathy (NAION), leading to sudden vision loss.",
    },
    {
      question:
        "A woman using levothyroxine for hypothyroidism reports palpitations and excessive sweating. Which side effect of levothyroxine might cause these symptoms?",
      answers: [
        { text: "Thyrotoxicosis", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Hypercalcemia" },
        { text: "Hypernatremia" },
        { text: "Adrenal insufficiency" },
      ],
      Explanation:
        "Excessive doses of levothyroxine can induce symptoms of thyrotoxicosis, including palpitations and excessive sweating.",
    },
    {
      question:
        "A patient on ciprofloxacin for a urinary tract infection experiences tendon pain and swelling. Which side effect of ciprofloxacin is most likely responsible for these symptoms?",
      answers: [
        { text: "Tendon rupture" },
        { text: "Tendonitis", isCorrect: true },
        { text: "Ligament tear" },
        { text: "Bursitis" },
        { text: "Muscle strain" },
      ],
      Explanation:
        "Ciprofloxacin can cause tendonitis or tendon rupture as an adverse effect, leading to tendon pain and swelling.",
    },
    {
      question:
        "A woman using medroxyprogesterone acetate for contraception develops irregular menstrual bleeding and amenorrhea. Which mechanism contributes to these side effects of medroxyprogesterone acetate?",
      answers: [
        { text: "Estrogen elevation" },
        { text: "Progesterone depletion" },
        { text: "Endometrial atrophy", isCorrect: true },
        { text: "Ovulation suppression" },
        { text: "Cervical mucus thickening" },
      ],
      Explanation:
        "Medroxyprogesterone acetate can cause endometrial atrophy, leading to irregular bleeding and amenorrhea.",
    },
    {
      question:
        "A patient taking hydrochlorothiazide for hypertension develops hypokalemia and muscle cramps. Which mechanism contributes to these side effects of hydrochlorothiazide?",
      answers: [
        { text: "Potassium excretion", isCorrect: true },
        { text: "Sodium retention" },
        { text: "Aldosterone inhibition" },
        { text: "Calcium absorption" },
        { text: "Magnesium retention" },
      ],
      Explanation:
        "Hydrochlorothiazide increases potassium excretion, causing hypokalemia and subsequent muscle cramps.",
    },
    {
      question:
        "A woman using sertraline for depression experiences serotonin syndrome with symptoms of agitation, hyperthermia, and tremors. Which action of sertraline contributes to these side effects?",
      answers: [
        { text: "Serotonin reuptake inhibition", isCorrect: true },
        { text: "Dopamine modulation" },
        { text: "Norepinephrine depletion" },
        { text: "Acetylcholine blockade" },
        { text: "Histamine release" },
      ],
      Explanation:
        "Sertraline's action of blocking serotonin reuptake can lead to serotonin syndrome with symptoms like agitation, hyperthermia, and tremors.",
    },
    {
      question:
        "A patient on lisinopril for hypertension develops a dry cough. Which mechanism contributes to this side effect of lisinopril?",
      answers: [
        { text: "Bradykinin accumulation", isCorrect: true },
        { text: "Histamine release" },
        { text: "Prostaglandin synthesis inhibition" },
        { text: "Norepinephrine depletion" },
        { text: "Acetylcholine blockade" },
      ],
      Explanation:
        "Lisinopril can increase bradykinin levels, leading to a dry, persistent cough as a side effect.",
    },
    {
      question:
        "A woman using mirtazapine for depression reports increased appetite and weight gain. Which action of mirtazapine contributes to these side effects?",
      answers: [
        { text: "Serotonin reuptake inhibition" },
        { text: "Norepinephrine depletion" },
        { text: "Dopamine modulation" },
        { text: "Histamine release", isCorrect: true },
        { text: "GABA potentiation" },
      ],
      Explanation:
        "Mirtazapine's action of histamine release can lead to increased appetite and weight gain as side effects.",
    },
    {
      question:
        "A patient taking amitriptyline for neuropathic pain develops urinary retention and constipation. Which pharmacological effect of amitriptyline contributes to these side effects?",
      answers: [
        { text: "Anticholinergic activity", isCorrect: true },
        { text: "Serotonin reuptake inhibition" },
        { text: "Dopamine modulation" },
        { text: "GABA potentiation" },
        { text: "Alpha-adrenergic blockade" },
      ],
      Explanation:
        "Amitriptyline's anticholinergic activity can cause urinary retention and constipation as side effects.",
    },
    {
      question:
        "A woman on estradiol therapy for menopausal symptoms experiences breast tenderness and vaginal bleeding. Which mechanism contributes to these side effects of estradiol?",
      answers: [
        { text: "Progesterone elevation" },
        { text: "Estrogen depletion" },
        { text: "Endometrial atrophy" },
        { text: "Uterine contractions" },
        { text: "Estrogen stimulation", isCorrect: true },
      ],
      Explanation:
        "Estradiol therapy can lead to breast tenderness and vaginal bleeding due to estrogenic effects on breast tissue and the endometrium.",
    },
    {
      question:
        "A patient using amoxicillin-clavulanate for a respiratory infection develops jaundice and elevated liver enzymes. Which side effect of amoxicillin-clavulanate is most likely responsible for these symptoms?",
      answers: [
        { text: "Cholestatic hepatitis", isCorrect: true },
        { text: "Fatty liver" },
        { text: "Cirrhosis" },
        { text: "Liver abscess" },
        { text: "Hepatic necrosis" },
      ],
      Explanation:
        "Amoxicillin-clavulanate can cause cholestatic hepatitis, presenting as jaundice and elevated liver enzymes.",
    },
    {
      question:
        "A woman on desmopressin for diabetes insipidus develops headache and hyponatremia. Which side effect of desmopressin might cause these symptoms?",
      answers: [
        { text: "Fluid overload" },
        { text: "Hypokalemia" },
        { text: "Vasopressin excess", isCorrect: true },
        { text: "Oxytocin release" },
        { text: "Thirst suppression" },
      ],
      Explanation:
        "Desmopressin, a synthetic form of vasopressin, can cause excess water retention and subsequent hyponatremia, leading to headache.",
    },
    {
      question:
        "A patient using phenazopyridine for urinary tract pain develops orange discoloration of urine and nausea. Which mechanism contributes to these side effects of phenazopyridine?",
      answers: [
        { text: "Red blood cell destruction" },
        { text: "Increased urinary pH", isCorrect: true },
        { text: "Renal tubular damage" },
        { text: "Hepatic enzyme inhibition" },
        { text: "Bile pigment excretion" },
      ],
      Explanation:
        "Phenazopyridine increases urinary pH, causing orange discoloration of urine and potential gastrointestinal irritation leading to nausea.",
    },
    {
      question:
        "A woman taking duloxetine for depression experiences dry mouth, constipation, and increased sweating. Which mechanism contributes to these side effects of duloxetine?",
      answers: [
        { text: "Serotonin reuptake inhibition" },
        { text: "Norepinephrine depletion" },
        { text: "Dopamine modulation" },
        { text: "Acetylcholine blockade", isCorrect: true },
        { text: "Histamine release" },
      ],
      Explanation:
        "Duloxetine's blockade of cholinergic receptors contributes to side effects like dry mouth, constipation, and increased sweating.",
    },
    {
      question:
        "A patient prescribed spironolactone for heart failure develops hyperkalemia and gynecomastia. Which action of spironolactone contributes to these side effects?",
      answers: [
        { text: "Sodium excretion" },
        { text: "Potassium excretion", isCorrect: true },
        { text: "Androgen receptor antagonism", isCorrect: true },
        { text: "Aldosterone inhibition" },
        { text: "Estrogen elevation" },
      ],
      Explanation:
        "Spironolactone acts as an androgen receptor antagonist, leading to side effects like hyperkalemia and gynecomastia.",
    },
    {
      question:
        "A woman using norgestimate-ethinyl estradiol for contraception reports breast tenderness and breakthrough bleeding. Which mechanism contributes to these side effects of the combined oral contraceptive?",
      answers: [
        { text: "Estrogen elevation", isCorrect: true },
        { text: "Progesterone depletion" },
        { text: "Endometrial atrophy" },
        { text: "Uterine contractions" },
        { text: "Estrogen depletion" },
      ],
      Explanation:
        "Norgestimate-ethinyl estradiol can cause breast tenderness and breakthrough bleeding due to elevated estrogen levels.",
    },
    {
      question:
        "A patient taking hydroxychloroquine for rheumatoid arthritis develops visual disturbances and difficulty focusing. Which mechanism contributes to these side effects of hydroxychloroquine?",
      answers: [
        { text: "Retinal toxicity", isCorrect: true },
        { text: "Optic nerve inflammation" },
        { text: "Lens opacity" },
        { text: "Vitreous hemorrhage" },
        { text: "Corneal edema" },
      ],
      Explanation:
        "Hydroxychloroquine can cause retinal toxicity, leading to visual disturbances and difficulty focusing.",
    },
    {
      question:
        "A woman using clindamycin for a vaginal infection reports severe diarrhea and abdominal cramps. Which mechanism contributes to these side effects of clindamycin?",
      answers: [
        { text: "Increased intestinal motility" },
        { text: "Intestinal microflora disruption", isCorrect: true },
        { text: "Gastric acid suppression" },
        { text: "Pancreatic enzyme inhibition" },
        { text: "Bile flow obstruction" },
      ],
      Explanation:
        "Clindamycin disrupts normal intestinal flora, leading to severe diarrhea and abdominal cramps.",
    },
    {
      question:
        "A patient on atorvastatin for hypercholesterolemia develops muscle pain and weakness. Which mechanism contributes to these side effects of atorvastatin?",
      answers: [
        { text: "Increased creatinine kinase", isCorrect: true },
        { text: "Myelin sheath damage" },
        { text: "Nerve conduction blockade" },
        { text: "Mitochondrial dysfunction" },
        { text: "Neuromuscular junction inhibition" },
      ],
      Explanation:
        "Atorvastatin can cause muscle pain and weakness due to increased levels of creatinine kinase associated with muscle damage.",
    },
    {
      question:
        "A woman using fluconazole for a vaginal yeast infection complains of headache and dizziness. Which side effect of fluconazole might cause these symptoms?",
      answers: [
        { text: "CNS toxicity", isCorrect: true },
        { text: "Hepatic necrosis" },
        { text: "Renal failure" },
        { text: "Ophthalmic toxicity" },
        { text: "Ototoxicity" },
      ],
      Explanation:
        "Fluconazole can cause central nervous system toxicity, presenting as headache and dizziness.",
    },
    {
      question:
        "A patient prescribed levetiracetam for seizures develops mood swings and irritability. Which mechanism contributes to these side effects of levetiracetam?",
      answers: [
        { text: "Dopamine depletion" },
        { text: "GABA potentiation", isCorrect: true },
        { text: "Serotonin modulation" },
        { text: "Norepinephrine elevation" },
        { text: "Histamine release" },
      ],
      Explanation:
        "Levetiracetam's action in potentiating GABAergic transmission can lead to mood swings and irritability as side effects.",
    },
    {
      question:
        "A woman using isoniazid for tuberculosis develops peripheral neuropathy and liver dysfunction. Which mechanism contributes to these side effects of isoniazid?",
      answers: [
        { text: "Pyridoxine depletion", isCorrect: true },
        { text: "Acetylcholine blockade" },
        { text: "Serotonin reuptake inhibition" },
        { text: "Dopamine modulation" },
        { text: "GABA potentiation" },
      ],
      Explanation:
        "Isoniazid can lead to pyridoxine (vitamin B6) depletion, causing peripheral neuropathy and liver dysfunction as side effects.",
    },
    {
      question:
        "A patient on cimetidine for peptic ulcer disease develops gynecomastia and impotence. Which mechanism contributes to these side effects of cimetidine?",
      answers: [
        { text: "Androgen receptor antagonism", isCorrect: true },
        { text: "Estrogen elevation" },
        { text: "Histamine release" },
        { text: "Testosterone depletion" },
        { text: "Dopamine modulation" },
      ],
      Explanation:
        "Cimetidine can act as an androgen receptor antagonist, leading to side effects like gynecomastia and impotence.",
    },
    {
      question:
        "A woman using tamoxifen for breast cancer treatment reports hot flashes and mood swings. Which mechanism contributes to these side effects of tamoxifen?",
      answers: [
        { text: "Estrogen elevation" },
        { text: "Progesterone depletion" },
        { text: "Endometrial atrophy" },
        { text: "Uterine contractions" },
        { text: "Estrogen blockade", isCorrect: true },
      ],
      Explanation:
        "Tamoxifen's action as an estrogen receptor blocker can cause side effects like hot flashes and mood swings due to estrogen blockade.",
    },
    {
      question:
        "A patient taking pioglitazone for type 2 diabetes develops peripheral edema and weight gain. Which mechanism contributes to these side effects of pioglitazone?",
      answers: [
        { text: "Sodium excretion" },
        { text: "Glucose metabolism inhibition" },
        { text: "Adipose tissue expansion", isCorrect: true },
        { text: "Insulin resistance" },
        { text: "Potassium retention" },
      ],
      Explanation:
        "Pioglitazone can cause adipose tissue expansion, leading to side effects like peripheral edema and weight gain.",
    },
    {
      question:
        "A woman using levonorgestrel-releasing intrauterine device for contraception reports irregular menstrual bleeding and amenorrhea. Which mechanism contributes to these side effects of the levonorgestrel-releasing IUD?",
      answers: [
        { text: "Estrogen elevation" },
        { text: "Progesterone depletion" },
        { text: "Endometrial atrophy", isCorrect: true },
        { text: "Uterine contractions" },
        { text: "Hormone receptor modulation" },
      ],
      Explanation:
        "The levonorgestrel-releasing IUD can cause endometrial atrophy, leading to irregular bleeding and amenorrhea.",
    },
    {
      question:
        "A patient prescribed quetiapine for schizophrenia experiences sedation, dry mouth, and weight gain. Which mechanism contributes to these side effects of quetiapine?",
      answers: [
        { text: "Dopamine receptor blockade" },
        { text: "Serotonin reuptake inhibition" },
        { text: "Histamine receptor antagonism", isCorrect: true },
        { text: "GABA potentiation" },
        { text: "Glutamate inhibition" },
      ],
      Explanation:
        "Quetiapine's antagonism of histamine receptors can lead to side effects like sedation, dry mouth, and weight gain.",
    },
    {
      question:
        "A woman using isotretinoin for severe acne complains of dry skin, mucosal dryness, and joint pain. Which mechanism contributes to these side effects of isotretinoin?",
      answers: [
        { text: "Sebaceous gland inhibition", isCorrect: true },
        { text: "Collagen synthesis inhibition" },
        { text: "Keratinocyte apoptosis" },
        { text: "Hyaluronic acid degradation" },
        { text: "Melanin production suppression" },
      ],
      Explanation:
        "Isotretinoin inhibits sebaceous gland function, leading to dry skin and mucosal dryness as side effects.",
    },
    {
      question:
        "A patient on metronidazole for bacterial vaginosis develops metallic taste and nausea. Which mechanism contributes to these side effects of metronidazole?",
      answers: [
        { text: "GABA potentiation" },
        { text: "Histamine release" },
        { text: "Serotonin reuptake inhibition" },
        { text: "Disruption of oral flora", isCorrect: true },
        { text: "Norepinephrine depletion" },
      ],
      Explanation:
        "Metronidazole disrupts oral flora, leading to side effects like metallic taste and nausea.",
    },
    {
      question:
        "A woman using medroxyprogesterone acetate for contraception develops depression and irritability. Which mechanism contributes to these side effects of medroxyprogesterone acetate?",
      answers: [
        { text: "Estrogen elevation" },
        { text: "Progesterone depletion", isCorrect: true },
        { text: "Endometrial atrophy" },
        { text: "Uterine contractions" },
        { text: "Hormone receptor modulation" },
      ],
      Explanation:
        "Medroxyprogesterone acetate can cause side effects like depression and irritability due to progesterone depletion.",
    },
    {
      question:
        "A patient taking aripiprazole for bipolar disorder develops akathisia and restlessness. Which mechanism contributes to these side effects of aripiprazole?",
      answers: [
        { text: "Dopamine receptor blockade", isCorrect: true },
        { text: "Serotonin reuptake inhibition" },
        { text: "Histamine receptor antagonism" },
        { text: "GABA potentiation" },
        { text: "Glutamate inhibition" },
      ],
      Explanation:
        "Aripiprazole's action as a partial dopamine agonist can cause side effects like akathisia and restlessness.",
    },
    {
      question:
        "A woman on metformin for type 2 diabetes complains of gastrointestinal upset and diarrhea. Which mechanism contributes to these side effects of metformin?",
      answers: [
        { text: "Insulin resistance" },
        { text: "Glucose metabolism inhibition", isCorrect: true },
        { text: "Intestinal motility enhancement" },
        { text: "Sodium reabsorption inhibition" },
        { text: "Bile flow obstruction" },
      ],
      Explanation:
        "Metformin's inhibition of glucose metabolism can lead to gastrointestinal upset and diarrhea as side effects.",
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

export default OGUQuestion
