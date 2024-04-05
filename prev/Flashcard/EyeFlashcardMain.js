
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const EyeFlashcardMain = () => {

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
        question: "Which drug is a selective alpha-2 adrenergic receptor agonist used in glaucoma management that can cause a paradoxical increase in intraocular pressure (IOP) in some individuals?",
        answer: "Brimonidine",
        options: [
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 2,
        question: "What is the mechanism of action of Methazolamide, a carbonic anhydrase inhibitor used in glaucoma treatment?",
        answer: "Inhibition of aqueous humor production",
        options: [
          "Inhibition of aqueous humor production",
          "Enhancement of uveoscleral outflow",
          "Reduction of episcleral venous pressure",
          "Increase in trabecular meshwork permeability",
          "Inhibition of ciliary body contractility"
        ]
      },
      {
        id: 3,
        question: "Which medication is a prostaglandin analog used to lower IOP by enhancing uveoscleral outflow and may cause a change in iris pigmentation and eyelash growth?",
        answer: "Travoprost",
        options: [
          "Apraclonidine",
          "Dorzolamide",
          "Brinzolamide",
          "Travoprost",
          "Acetazolamide"
        ]
      },
      {
        id: 4,
        question: "Among the beta-blockers used in ophthalmology, which drug can potentially cause bronchospasm in patients with a history of asthma?",
        answer: "Timolol",
        options: [
          "Betaxolol",
          "Carteolol",
          "Levobunolol",
          "Timolol",
          "Metipranolol"
        ]
      },
      {
        id: 5,
        question: "What is the primary action of Pilocarpine, a muscarinic receptor agonist used in glaucoma treatment?",
        answer: "Increase in trabecular meshwork outflow",
        options: [
          "Decrease in aqueous humor production",
          "Increase in trabecular meshwork outflow",
          "Relaxation of ciliary muscle",
          "Enhancement of uveoscleral outflow",
          "Stimulation of alpha-2 adrenergic receptors"
        ]
      },
      {
        id: 6,
        question: "Which drug inhibits histamine release and exerts an anti-allergic effect when applied topically in the eye?",
        answer: "Lodoxamide",
        options: [
          "Nedocromil",
          "Lodoxamide",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 7,
        question: "Which medication functions by reducing aqueous humor production and is contraindicated in patients with sulfa allergy due to its chemical structure?",
        answer: "Dorzolamide",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Travoprost",
          "Brinzolamide"
        ]
      },
      {
        id: 8,
        question: "What is the mechanism of action of Brinzolamide, a carbonic anhydrase inhibitor used in glaucoma treatment?",
        answer: "Inhibition of aqueous humor production",
        options: [
          "Increase in uveoscleral outflow",
          "Inhibition of aqueous humor production",
          "Relaxation of ciliary muscle",
          "Enhancement of trabecular meshwork outflow",
          "Reduction of episcleral venous pressure"
        ]
      },
      {
        id: 9,
        question: "Among the following drugs, which one acts as a reversible acetylcholinesterase inhibitor used in the treatment of glaucoma?",
        answer: "Echothiophate",
        options: [
          "Echothiophate",
          "Physostigmine",
          "Carbachol",
          "Pilocarpine",
          "Demecarium"
        ]
      },
      {
        id: 10,
        question: "Which medication works by stimulating alpha-2 adrenergic receptors, leading to a reduction in aqueous humor production and an increase in uveoscleral outflow?",
        answer: "Brimonidine",
        options: [
          "Apraclonidine",
          "Dipivefrin",
          "Brimonidine",
          "Epinephrine",
          "Clonidine"
        ]
      },
      {
        id: 11,
        question: "Among the following prostaglandin analogs, which one has a dosing schedule requiring administration only once daily due to its longer duration of action?",
        answer: "Travoprost",
        options: [
          "Bimatoprost",
          "Latanoprost",
          "Travoprost",
          "Tafluprost",
          "Unoprostone"
        ]
      },
      {
        id: 12,
        question: "Which medication is a sympathomimetic agent used in ophthalmology that can potentially cause systemic side effects such as hypertension and tachycardia?",
        answer: "Epinephrine",
        options: [
          "Dipivefrin",
          "Apraclonidine",
          "Brimonidine",
          "Epinephrine",
          "Naphazoline"
        ]
      },
      {
        id: 13,
        question: "Among the following alpha-agonists used in glaucoma, which one has the highest affinity for alpha-2 adrenergic receptors?",
        answer: "Brimonidine",
        options: [
          "Apraclonidine",
          "Brimonidine",
          "Clonidine",
          "Naphazoline",
          "Dipivefrin"
        ]
      },
      {
        id: 14,
        question: "Which medication, when used in ophthalmology, acts by increasing outflow of aqueous humor through the uveoscleral pathway rather than affecting conventional outflow pathways?",
        answer: "Latanoprost",
        options: [
          "Dorzolamide",
          "Timolol",
          "Pilocarpine",
          "Latanoprost",
          "Apraclonidine"
        ]
      },
      {
        id: 15,
        question: "Among the following, which medication is a prodrug that gets converted into its active metabolite, timolol, after topical application in the eye?",
        answer: "Dipivefrin",
        options: [
          "Levobunolol",
          "Betaxolol",
          "Carteolol",
          "Dipivefrin",
          "Metipranolol"
        ]
      },
      {
        id: 16,
        question: "Which drug, used in glaucoma treatment, is a selective alpha-1 adrenergic receptor agonist that enhances trabecular and uveoscleral outflow?",
        answer: "Dipivefrin",
        options: [
          "Apraclonidine",
          "Brimonidine",
          "Dipivefrin",
          "Naphazoline",
          "Epinephrine"
        ]
      },
      {
        id: 17,
        question: "Among the following, which interaction is most likely to occur between warfarin and omeprazole?",
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
        id: 18,
        question: "Which interaction is anticipated between digoxin and verapamil?",
        answer: "Verapamil increases digoxin levels",
        options: [
          "Digoxin decreases verapamil absorption",
          "Verapamil decreases digoxin levels",
          "Verapamil increases digoxin levels",
          "Digoxin inhibits verapamil metabolism",
          "Digoxin competes with verapamil for renal excretion"
        ]
      },
      {
        id: 19,
        question: "In a patient taking a non-selective MAO inhibitor, which sympathomimetic amine should be avoided due to the risk of hypertensive crisis?",
        answer: "Phenylephrine",
        options: [
          "Epinephrine",
          "Norepinephrine",
          "Phenylephrine",
          "Isoproterenol",
          "Dopamine"
        ]
      },
      {
        id: 20,
        question: "Which interaction is likely to occur when combining a statin with grapefruit juice?",
        answer: "Increased statin bioavailability",
        options: [
          "Reduced statin metabolism",
          "Increased statin absorption",
          "Reduced statin bioavailability",
          "Increased statin elimination",
          "Statin-induced inhibition of grapefruit juice metabolism"
        ]
      },
      {
        id: 21,
        question: "A patient taking a beta-blocker experiences a hypertensive crisis after consuming tyramine-rich foods. Which beta-blocker is most likely responsible for this reaction?",
        answer: "Non-selective beta-blockers (e.g., propranolol)",
        options: [
          "Cardioselective beta-blockers (e.g., metoprolol)",
          "Non-selective beta-blockers (e.g., propranolol)",
          "Alpha-1 blockers (e.g., terazosin)",
          "Beta-2 agonists (e.g., albuterol)",
          "Calcium channel blockers (e.g., verapamil)"
        ]
      },
      {
        id: 22,
        question: "A patient prescribed lithium develops symptoms of lithium toxicity after starting an ACE inhibitor. What interaction is likely responsible for this effect?",
        answer: "Decreased lithium excretion",
        options: [
          "Increased lithium absorption",
          "Decreased lithium excretion",
          "Lithium-induced ACE inhibitor metabolism",
          "ACE inhibitor-induced lithium metabolism",
          "Competition for renal excretion between lithium and ACE inhibitor"
        ]
      },
      {
        id: 23,
        question: "In a patient receiving warfarin, which antibiotic is known for causing a significant drug interaction leading to an increased risk of bleeding?",
        answer: "Ciprofloxacin",
        options: [
          "Amoxicillin",
          "Ciprofloxacin",
          "Doxycycline",
          "Azithromycin",
          "Trimethoprim-sulfamethoxazole"
        ]
      },
      {
        id: 24,
        question: "Which drug interaction is expected when combining phenytoin with oral contraceptives?",
        answer: "Decreased contraceptive efficacy",
        options: [
          "Increased contraceptive efficacy",
          "Reduced phenytoin metabolism",
          "Phenytoin-induced contraceptive metabolism",
          "Competition for renal excretion between phenytoin and contraceptives",
          "Increased risk of hepatotoxicity"
        ]
      },
      {
        id: 25,
        question: "A patient taking a thiazide diuretic experiences hypokalemia. Which drug combination is most likely responsible for this electrolyte imbalance?",
        answer: "Thiazide diuretic and glycyrrhizin-containing products",
        options: [
          "Thiazide diuretic and potassium-sparing diuretic",
          "Thiazide diuretic and ACE inhibitor",
          "Thiazide diuretic and NSAID",
          "Thiazide diuretic and glycyrrhizin-containing products",
          "Thiazide diuretic and calcium channel blocker"
        ]
      },
      {
        id: 26,
        question: "A patient receiving amiodarone is prescribed warfarin. Which interaction is crucial to consider in this combination?",
        answer: "Increased bleeding risk due to warfarin potentiation",
        options: [
          "Reduced amiodarone efficacy",
          "Decreased bleeding risk due to warfarin potentiation",
          "Increased amiodarone metabolism",
          "Amiodarone-induced warfarin metabolism",
          "Decreased amiodarone absorption"
        ]
      },
      {
        id: 27,
        question: "Which interaction is associated with combining MAO inhibitors and serotonin reuptake inhibitors (SSRIs)?",
        answer: "Serotonin syndrome",
        options: [
          "Hypertensive crisis",
          "Serotonin syndrome",
          "Neuroleptic malignant syndrome",
          "QT prolongation",
          "Extrapyramidal symptoms"
        ]
      },
      {
        id: 28,
        question: "In a patient on long-term opioid therapy, which interaction is a concern when initiating therapy with a benzodiazepine?",
        answer: "Increased risk of respiratory depression",
        options: [
          "Decreased risk of respiratory depression",
          "Increased risk of seizures",
          "Benzodiazepine-induced opioid withdrawal",
          "Reduced opioid analgesic effects",
          "Increased risk of respiratory depression"
        ]
      },
      {
        id: 29,
        question: "A patient taking an oral anticoagulant experiences an elevated INR after starting fluconazole. What is the likely mechanism of this interaction?",
        answer: "Inhibition of warfarin metabolism",
        options: [
          "Induction of warfarin metabolism",
          "Inhibition of warfarin absorption",
          "Warfarin-induced fluconazole metabolism",
          "Competition for protein binding sites",
          "Increased hepatic synthesis of clotting factors"
        ]
      },
      {
        id: 30,
        question: "Which drug interaction is a concern when combining lithium with NSAIDs?",
        answer: "Increased risk of lithium toxicity",
        options: [
          "Reduced risk of lithium toxicity",
          "Lithium-induced NSAID metabolism",
          "NSAID-induced lithium metabolism",
          "Competition for renal excretion between lithium and NSAIDs",
          "Decreased anti-inflammatory effects of NSAIDs"
        ]
      },
      {
        id: 31,
        question: "A patient on chronic corticosteroid therapy develops GI bleeding after starting ibuprofen. Which interaction is responsible for this adverse effect?",
        answer: "Increased risk of GI bleeding due to synergistic effects",
        options: [
          "Reduced risk of GI bleeding",
          "Corticosteroid-induced ibuprofen metabolism",
          "Ibuprofen-induced corticosteroid metabolism",
          "Competition for renal excretion between corticosteroids and ibuprofen",
          "Increased risk of hepatotoxicity"
        ]
      },
      {
        id: 32,
        question: "A patient is experiencing mild eye strain and wants an OTC solution for relief. Which recommendation would be most appropriate to reduce eye strain?",
        answer: "Lubricating eye gel",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Artificial tears",
          "Antihistamine eye drops",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 33,
        question: "A customer presents with symptoms of minor eye itching and asks for an OTC option to soothe the irritation. What would be the most suitable recommendation?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Artificial tears",
          "Lubricating eye gel",
          "Antibiotic eye ointment",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 34,
        question: "A patient seeks advice for their child with conjunctivitis symptoms. Which OTC eye medication would you suggest as a suitable option for bacterial conjunctivitis in children?",
        answer: "Antibiotic eye ointment",
        options: [
          "Decongestant eye drops",
          "Antihistamine eye drops",
          "Artificial tears",
          "Lubricating eye gel",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 35,
        question: "A customer reports excessive eye redness after prolonged screen time. What OTC eye product can help reduce redness caused by eye strain?",
        answer: "Artificial tears",
        options: [
          "Artificial tears",
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 36,
        question: "A patient experiences watery eyes due to exposure to wind and seeks an OTC solution. What would be the most appropriate recommendation to alleviate the watery eyes?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 37,
        question: "A customer seeks relief from eye redness due to mild irritation from swimming in a chlorinated pool. What OTC eye product would be most suitable to reduce the redness?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Artificial tears",
          "Lubricating eye gel",
          "Antibiotic eye ointment",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 38,
        question: "A patient complains of eye discomfort and a gritty sensation due to prolonged contact lens wear. What OTC eye product can provide relief from these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Artificial tears",
          "Antihistamine eye drops",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 39,
        question: "A customer seeks an OTC recommendation for minor eye itching caused by exposure to dust. What product would be most appropriate to alleviate this symptom?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 40,
        question: "A patient presents with symptoms of mild eye irritation after exposure to smoke. What would be an appropriate suggestion to alleviate discomfort from smoke exposure?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antihistamine eye drops",
          "Lubricating eye gel",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 41,
        question: "A customer asks for an OTC recommendation to relieve eye dryness caused by central heating in their home. What product would be most suitable to alleviate this dryness?",
        answer: "Lubricating eye gel",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 42,
        question: "A patient seeks advice for minor eye redness and discomfort due to exposure to pollen. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 43,
        question: "A customer complains of mild eye irritation and discomfort after working on a computer for several hours. What OTC eye product can provide relief from this discomfort?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 44,
        question: "A patient reports minor eye redness and itching after exposure to pet dander. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 45,
        question: "A customer seeks advice for eye discomfort and redness after a day of swimming in a freshwater lake. What OTC eye product would be most suitable to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 46,
        question: "A patient presents with minor eye irritation and discomfort due to exposure to cold wind. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 47,
        question: "A customer asks for an OTC recommendation to soothe mild eye redness after wearing eye makeup all day. What product would be most suitable to alleviate this redness?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 48,
        question: "Among patients with a history of sulfa allergy, which ocular medication should be avoided due to its chemical structure?",
        answer: "Dorzolamide",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 49,
        question: "Which ocular medication is contraindicated in patients with a history of bronchospasm or asthma due to its potential to exacerbate these conditions?",
        answer: "Timolol",
        options: [
          "Pilocarpine",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Dorzolamide"
        ]
      },
      {
        id: 50,
        question: "Among patients with a history of severe cardiovascular diseases such as heart block or bradycardia, which ocular medication is contraindicated due to its systemic effects on heart rate and rhythm?",
        answer: "Timolol",
        options: [
          "Pilocarpine",
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost"
        ]
      },
      {
        id: 51,
        question: "Which ocular medication should be avoided in individuals with a known hypersensitivity to prostaglandins, as it is a prostaglandin analog itself?",
        answer: "Latanoprost",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 52,
        question: "Among patients with a history of depression or severe mood disorders, which ocular medication is contraindicated due to its potential to cause central nervous system effects?",
        answer: "Brimonidine",
        options: [
          "Dorzolamide",
          "Timolol",
          "Brimonidine",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 53,
        question: "Which ocular medication should be avoided in patients with a known allergy to beta-blockers due to its potential cross-reactivity?",
        answer: "Timolol",
        options: [
          "Dorzolamide",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 54,
        question: "Among patients with a history of urinary retention or bladder obstruction, which ocular medication is contraindicated due to its potential systemic effects on urinary function?",
        answer: "Pilocarpine",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 55,
        question: "Which ocular medication is contraindicated in patients with severe renal impairment due to its potential to exacerbate renal dysfunction?",
        answer: "Dorzolamide",
        options: [
          "Dorzolamide",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 56,
        question: "Among patients with a history of severe liver disease or hepatic impairment, which ocular medication is contraindicated due to its potential to worsen liver function?",
        answer: "Dorzolamide",
        options: [
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 57,
        question: "Which ocular medication is contraindicated in individuals with a known hypersensitivity to alpha-2 adrenergic agonists due to potential allergic reactions?",
        answer: "Brimonidine",
        options: [
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 58,
        question: "A customer seeks advice for eye discomfort and redness after a day of swimming in a freshwater lake. What OTC eye product would be most suitable to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 59,
        question: "A patient presents with minor eye irritation and discomfort due to exposure to cold wind. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Lubricating eye gel",
          "Antihistamine eye drops",
          "Artificial tears",
          "Antibiotic eye ointment"
        ]
      },
      {
        id: 60,
        question: "A customer asks for an OTC recommendation to soothe mild eye redness after wearing eye makeup all day. What product would be most suitable to alleviate this redness?",
        answer: "Artificial tears",
        options: [
          "Decongestant eye drops",
          "Antibiotic eye ointment",
          "Artificial tears",
          "Lubricating eye gel",
          "Antihistamine eye drops"
        ]
      },
      {
        id: 61,
        question: "Among patients with a history of sulfa allergy, which ocular medication should be avoided due to its chemical structure?",
        answer: "Dorzolamide",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 62,
        question: "Which ocular medication is contraindicated in patients with a history of bronchospasm or asthma due to its potential to exacerbate these conditions?",
        answer: "Timolol",
        options: [
          "Pilocarpine",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Dorzolamide"
        ]
      },
      {
        id: 63,
        question: "Among patients with a history of severe cardiovascular diseases such as heart block or bradycardia, which ocular medication is contraindicated due to its systemic effects on heart rate and rhythm?",
        answer: "Timolol",
        options: [
          "Pilocarpine",
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost"
        ]
      },
      {
        id: 64,
        question: "Which ocular medication should be avoided in individuals with a known hypersensitivity to prostaglandins, as it is a prostaglandin analog itself?",
        answer: "Latanoprost",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 65,
        question: "Among patients with a history of depression or severe mood disorders, which ocular medication is contraindicated due to its potential to cause central nervous system effects?",
        answer: "Brimonidine",
        options: [
          "Dorzolamide",
          "Timolol",
          "Brimonidine",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 66,
        question: "Which ocular medication should be avoided in patients with a known allergy to beta-blockers due to its potential cross-reactivity?",
        answer: "Timolol",
        options: [
          "Dorzolamide",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 67,
        question: "Among patients with a history of urinary retention or bladder obstruction, which ocular medication is contraindicated due to its potential systemic effects on urinary function?",
        answer: "Pilocarpine",
        options: [
          "Brimonidine",
          "Latanoprost",
          "Dorzolamide",
          "Timolol",
          "Pilocarpine"
        ]
      },
      {
        id: 68,
        question: "Which ocular medication is contraindicated in patients with severe renal impairment due to its potential to exacerbate renal dysfunction?",
        answer: "Dorzolamide",
        options: [
          "Dorzolamide",
          "Brimonidine",
          "Timolol",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 69,
        question: "Among patients with a history of severe liver disease or hepatic impairment, which ocular medication is contraindicated due to its potential to worsen liver function?",
        answer: "Dorzolamide",
        options: [
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost",
          "Pilocarpine"
        ]
      },
      {
        id: 70,
        question: "Which ocular medication is contraindicated in individuals with a known hypersensitivity to alpha-2 adrenergic agonists due to potential allergic reactions?",
        answer: "Brimonidine",
        options: [
          "Timolol",
          "Brimonidine",
          "Dorzolamide",
          "Latanoprost",
          "Pilocarpine"
        ]
      }
]

export default EyeFlashcardMain;
