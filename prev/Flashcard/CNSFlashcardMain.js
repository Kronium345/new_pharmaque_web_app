
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const CNSFlashcardMain = () => {

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
        question: "A 55-year-old male patient with chronic neuropathic pain is prescribed pregabalin. What is the primary mechanism of action of pregabalin?",
        answer: "Inhibition of calcium channels",
        options: [
          "Inhibition of sodium channels",
          "Inhibition of calcium channels",
          "Enhancement of GABA synthesis",
          "Blockade of serotonin reuptake",
          "Inhibition of NMDA receptors"
        ]
      },
      {
        id: 2,
        question: "A patient on amitriptyline for depression reports dry mouth and blurred vision. Which side effect is this indicative of?",
        answer: "Anticholinergic Effects",
        options: [
          "Serotonergic syndrome",
          "Anticholinergic Effects",
          "Norepinephrine reuptake inhibition",
          "Sodium channel blockade",
          "Histamine receptor antagonism"
        ]
      },
      {
        id: 3,
        question: "A 70-year-old female with epilepsy is on carbamazepine therapy. She is prescribed doxycycline for a respiratory infection. What potential interaction should be monitored?",
        answer: "Reduced efficacy of carbamazepine",
        options: [
          "Increased risk of serotonin syndrome",
          "Reduced efficacy of carbamazepine",
          "Increased risk of bleeding",
          "Carbamazepine toxicity",
          "Reduced efficacy of doxycycline"
        ]
      },
      {
        id: 4,
        question: "A patient on phenytoin for seizure control has erratic blood levels. They do not have any other significant drug history. Which factor is most likely to contribute to this issue?",
        answer: "Phenytoin's narrow therapeutic index",
        options: [
          "Phenytoin's narrow therapeutic index",
          "Interaction with over-the-counter antacids",
          "Patient non-adherence to therapy",
          "High-fat diet",
          "Age-related renal impairment"
        ]
      },
      {
        id: 5,
        question: "A 40-year-old patient with acute migraine is prescribed sumatriptan. What is the primary action of sumatriptan in treating migraines?",
        answer: "Serotonin (5-HT1) receptor agonism",
        options: [
          "Beta-adrenergic agonism",
          "Calcium Channel Blockade",
          "Serotonin (5-HT1) receptor agonism",
          "Dopamine receptor antagonism",
          "GABA receptor modulation"
        ]
      },
      {
        id: 6,
        question: "A 45-year-old patient on levodopa for Parkinson’s disease complains of nausea and vomiting. What is the likely cause?",
        answer: "Peripheral conversion of levodopa to dopamine",
        options: [
          "Dopamine antagonism in the brain",
          "Peripheral conversion of levodopa to dopamine",
          "Enhanced cholinergic activity",
          "Reduced dopamine breakdown in CNS",
          "Serotonin syndrome"
        ]
      },
      {
        id: 7,
        question: "Which of the following is a common side effect of SSRIs like sertraline in the initial weeks of treatment and thus must you counsel the patient on?",
        answer: "Sexual dysfunction",
        options: [
          "Weight gain",
          "Sedation",
          "Anticholinergic effects",
          "Sexual dysfunction",
          "Gastrointestinal bleeding"
        ]
      },
      {
        id: 8,
        question: "A patient on lithium therapy for bipolar disorder has developed tremors and ataxia. What does this indicate?",
        answer: "Lithium toxicity",
        options: [
          "Lithium toxicity",
          "Dehydration",
          "Hypothyroidism",
          "Renal impairment",
          "Calcium deficiency"
        ]
      },
      {
        id: 9,
        question: "For a patient on warfarin, what is the risk of co-prescribing phenobarbital?",
        answer: "Reduced effectiveness of warfarin",
        options: [
          "Increased risk of bleeding",
          "Reduced effectiveness of warfarin",
          "Increased risk of seizures",
          "Hepatotoxicity",
          "Enhanced sedation"
        ]
      },
      {
        id: 10,
        question: "A patient with schizophrenia is prescribed clozapine. What unique monitoring parameter is essential for this medication?",
        answer: "White blood cell count",
        options: [
          "Renal function",
          "Liver enzymes",
          "White blood cell count",
          "Blood glucose",
          "Thyroid function"
        ]
      },
      {
        id: 11,
        question: "In a patient with multiple sclerosis, what is the primary action of interferon beta-1a?",
        answer: "Inhibition of immune cell migration across the blood-brain barrier",
        options: [
          "Immunosuppression",
          "Promotion of remyelination",
          "Reduction of neuronal inflammation",
          "Inhibition of immune cell migration across the blood-brain barrier",
          "Enhancement of nerve conduction"
        ]
      },
      {
        id: 12,
        question: "You are a pharmacist working in the community pharmacy when one of your more senior patients walks in having been newly prescribed a new antidepressant. What is the primary concern when prescribing tricyclic antidepressants (TCAs) like amitriptyline to elderly patients?",
        answer: "Increased risk of falls",
        options: [
          "Increased risk of hypertension",
          "Increased risk of falls",
          "Reduced drug clearance",
          "Serotonin syndrome",
          "Weight loss"
        ]
      },
      {
        id: 13,
        question: "A patient on monoamine oxidase inhibitors (MAOIs) for depression should avoid which type of food to prevent a hypertensive crisis?",
        answer: "Tyramine-rich foods",
        options: [
          "High-fat foods",
          "Foods rich in vitamin K",
          "Tyramine-rich foods",
          "Foods high in simple sugars",
          "Dairy products"
        ]
      },
      {
        id: 14,
        question: "A patient on antipsychotic therapy with risperidone presents with muscle rigidity and fever. What is the most likely diagnosis?",
        answer: "Neuroleptic malignant syndrome",
        options: [
          "Neuroleptic malignant syndrome",
          "Serotonin syndrome",
          "Extrapyramidal symptoms",
          "Tardive dyskinesia",
          "Anticholinergic toxicity"
        ]
      },
      {
        id: 15,
        question: "In treating status epilepticus, which medication is preferred for initial management?",
        answer: "Diazepam",
        options: [
          "Phenytoin",
          "Carbamazepine",
          "Diazepam",
          "Gabapentin",
          "Levetiracetam"
        ]
      },
      {
        id: 16,
        question: "A patient on haloperidol therapy develops restlessness and an inability to sit still. Which side effect is this indicative of?",
        answer: "Akathisia",
        options: [
          "Akathisia",
          "Parkinsonism",
          "Dystonia",
          "Neuroleptic malignant syndrome",
          "Tardive dyskinesia"
        ]
      },
      {
        id: 17,
        question: "For a patient with a history of seizures, which of the following antidepressants should be used with caution?",
        answer: "Bupropion",
        options: [
          "Sertraline",
          "Bupropion",
          "Citalopram",
          "Mirtazapine",
          "Venlafaxine"
        ]
      },
      {
        id: 18,
        question: "Which drug interaction should be monitored when a patient is co-prescribed citalopram and omeprazole?",
        answer: "Increased risk of QT prolongation",
        options: [
          "Reduced efficacy of citalopram",
          "Increased risk of QT prolongation",
          "Decreased absorption of omeprazole",
          "Enhanced sedative effect",
          "Reduced effectiveness of both drugs"
        ]
      },
      {
        id: 19,
        question: "A patient taking amitriptyline for neuropathic pain shows signs of confusion and hallucinations. What is the likely cause?",
        answer: "Anticholinergic toxicity",
        options: [
          "Serotonergic syndrome",
          "Anticholinergic toxicity",
          "Histamine receptor antagonism",
          "Sodium channel blockade",
          "Norepinephrine reuptake inhibition"
        ]
      },
      {
        id: 20,
        question: "What is the mechanism of action of memantine used in Alzheimer's disease?",
        answer: "NMDA receptor antagonism",
        options: [
          "Cholinesterase inhibition",
          "NMDA receptor antagonism",
          "Serotonin-norepinephrine reuptake inhibition",
          "GABA receptor modulation",
          "Beta-amyloid clearance enhancement"
        ]
      },
      {
        id: 21,
        question: "A patient on valproate for bipolar disorder is found to have elevated liver enzymes. What is the recommended action?",
        answer: "Discontinue valproate immediately",
        options: [
          "Discontinue valproate immediately",
          "Monitor liver enzymes closely",
          "Switch to lithium",
          "Add liver protectants",
          "Reduce valproate dosage"
        ]
      },
      {
        id: 22,
        question: "A patient on escitalopram for anxiety reports persistent headaches. Which action should be taken?",
        answer: "Monitor and reassess after a few weeks",
        options: [
          "Switch to a different SSRI",
          "Add a pain reliever",
          "Monitor and reassess after a few weeks",
          "Discontinue escitalopram",
          "Switch to a benzodiazepine"
        ]
      },
      {
        id: 23,
        question: "Which medication increases the risk of serotonin syndrome when combined with SSRIs?",
        answer: "St. John's Wort",
        options: [
          "Paracetamol",
          "Warfarin",
          "St. John's Wort",
          "Amlodipine",
          "Atorvastatin"
        ]
      },
      {
        id: 24,
        question: "In managing ADHD, what is the primary action of methylphenidate?",
        answer: "Norepinephrine reuptake inhibition",
        options: [
          "Dopamine receptor agonism",
          "Norepinephrine reuptake inhibition",
          "Monoamine oxidase inhibition",
          "Enhancement of GABAergic transmission",
          "Blockade of serotonin reuptake"
        ]
      },
      {
        id: 25,
        question: "A patient on phenytoin for seizure control has a concurrent infection treated with ciprofloxacin. What concern arises from this combination?",
        answer: "Phenytoin toxicity",
        options: [
          "Increased risk of seizures",
          "Reduced efficacy of phenytoin",
          "Phenytoin toxicity",
          "Reduced effectiveness of ciprofloxacin",
          "Hepatotoxicity"
        ]
      },
      {
        id: 26,
        question: "A 60-year-old patient on alprazolam for anxiety wants to discontinue the medication. What is the best approach?",
        answer: "Gradual tapering",
        options: [
          "Immediate cessation",
          "Replace with an SSRI",
          "Gradual tapering",
          "Switch to a long-acting benzodiazepine",
          "Increase the dose before stopping"
        ]
      },
      {
        id: 27,
        question: "For a patient with acute manic episodes in bipolar disorder, which medication is most appropriate?",
        answer: "Risperidone",
        options: [
          "Fluoxetine",
          "Risperidone",
          "Diazepam",
          "Levothyroxine",
          "Paracetamol"
        ]
      },
      {
        id: 28,
        question: "For a patient on clozapine, what blood test is mandatory due to the risk of a serious side effect?",
        answer: "Complete blood count",
        options: [
          "Liver function tests",
          "Renal function tests",
          "Thyroid function tests",
          "Complete blood count",
          "Lipid profile"
        ]
      },
      {
        id: 29,
        question: "What is a potential adverse effect of chronic use of opioid analgesics like morphine?",
        answer: "Constipation",
        options: [
          "Hypertension",
          "Constipation",
          "Hyponatremia",
          "Hyperglycemia",
          "Hypothyroidism"
        ]
      },
      {
        id: 30,
        question: "A patient on gabapentin for neuropathic pain reports swelling in the legs. What is the most likely cause?",
        answer: "Peripheral edema",
        options: [
          "Venous thromboembolism",
          "Lymphedema",
          "Peripheral edema",
          "Cellulitis",
          "Deep vein thrombosis"
        ]
      },
      {
        id: 31,
        question: "A patient on SSRIs for depression develops restlessness, confusion, and rapid heart rate. Which condition should be suspected?",
        answer: "Serotonin syndrome",
        options: [
          "Neuroleptic malignant syndrome",
          "Anticholinergic toxicity",
          "Serotonin syndrome",
          "Extrapyramidal symptoms",
          "Tardive dyskinesia"
        ]
      },
      {
        id: 32,
        question: "Which antipsychotic is known for its lower risk of extrapyramidal side effects?",
        answer: "Olanzapine",
        options: [
          "Haloperidol",
          "Chlorpromazine",
          "Risperidone",
          "Olanzapine",
          "Clozapine"
        ]
      },
      {
        id: 33,
        question: "In a patient with anxiety, which benzodiazepine characteristic is important for reducing the risk of dependence?",
        answer: "Long half-life",
        options: [
          "High potency",
          "Rapid onset of action",
          "Short half-life",
          "Long half-life",
          "Lipid solubility"
        ]
      },
      {
        id: 34,
        question: "In a patient with Alzheimer's, what is a potential side effect of using acetylcholinesterase inhibitors like donepezil?",
        answer: "Bradycardia",
        options: [
          "Hypertension",
          "Insomnia",
          "Bradycardia",
          "Weight gain",
          "Hyperglycemia"
        ]
      },
      {
        id: 35,
        question: "A patient on methadone for opioid dependence presents with prolonged QT interval. What action should be taken?",
        answer: "Monitor cardiac function closely",
        options: [
          "Increase methadone dose",
          "Monitor cardiac function closely",
          "Switch to a different opioid",
          "Add a beta-blocker",
          "Discontinue methadone"
        ]
      },
      {
        id: 36,
        question: "Which antidepressant is associated with a high risk of weight gain?",
        answer: "Mirtazapine",
        options: [
          "Fluoxetine",
          "Sertraline",
          "Venlafaxine",
          "Mirtazapine",
          "Escitalopram"
        ]
      },
      {
        id: 37,
        question: "What is the primary action of modafinil in treating narcolepsy?",
        answer: "Dopamine reuptake inhibition",
        options: [
          "Dopamine reuptake inhibition",
          "Serotonin receptor antagonism",
          "GABA receptor modulation",
          "Histamine receptor agonism",
          "Norepinephrine reuptake inhibition"
        ]
      },
      {
        id: 38,
        question: "A patient on antipsychotic therapy develops high fever and altered mental status. What is the first step in management?",
        answer: "Discontinue the antipsychotic",
        options: [
          "Administer antipyretics",
          "Increase hydration",
          "Discontinue the antipsychotic",
          "Start antibiotic therapy",
          "Provide symptomatic treatment"
        ]
      },
      {
        id: 39,
        question: "For a patient with chronic pain on high-dose opioids, what is an important consideration to prevent opioid-induced hyperalgesia?",
        answer: "Rotate opioids",
        options: [
          "Rotate opioids",
          "Increase opioid dose",
          "Add a non-opioid analgesic",
          "Start a benzodiazepine",
          "Initiate nerve block therapy"
        ]
      },
      {
        id: 40,
        question: "In a patient with depression, what is a common side effect of trazodone?",
        answer: "Sedation",
        options: [
          "Insomnia",
          "Hypertension",
          "Sedation",
          "Weight loss",
          "Tachycardia"
        ]
      },
      {
        id: 41,
        question: "What is the mechanism of action of baclofen in muscle spasticity?",
        answer: "GABA-B receptor agonism",
        options: [
          "Calcium channel blockade",
          "Dopamine receptor agonism",
          "GABA-B receptor agonism",
          "NMDA receptor antagonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 42,
        question: "In treating acute migraine, what is the primary action of triptans like sumatriptan?",
        answer: "Serotonin (5-HT1) receptor agonism",
        options: [
          "Beta-adrenergic agonism",
          "Calcium channel blockade",
          "Serotonin (5-HT1) receptor agonism",
          "Dopamine receptor antagonism",
          "GABA receptor modulation"
        ]
      },
      {
        id: 43,
        question: "Which symptom is indicative of lithium toxicity?",
        answer: "Tremors",
        options: [
          "Hypertension",
          "Tachycardia",
          "Tremors",
          "Hypoglycemia",
          "Hyperthermia"
        ]
      },
      {
        id: 44,
        question: "What is the risk of combining SSRIs with NSAIDs?",
        answer: "Increased risk of gastrointestinal bleeding",
        options: [
          "Increased risk of hypertension",
          "Reduced antidepressant efficacy",
          "Increased risk of gastrointestinal bleeding",
          "Decreased pain relief",
          "Enhanced sedation"
        ]
      },
      {
        id: 45,
        question: "For a patient on clozapine, what is a common metabolic side effect?",
        answer: "Hypokalemia",
        options: [
          "Hyperglycemia",
          "Hypothyroidism",
          "Hypocalcemia",
          "Hyponatremia",
          "Hypokalemia"
        ]
      },
      {
        id: 46,
        question: "A patient on carbamazepine for trigeminal neuralgia develops a skin rash. What is the immediate action?",
        answer: "Discontinue carbamazepine",
        options: [
          "Administer antihistamines",
          "Increase carbamazepine dose",
          "Discontinue carbamazepine",
          "Start corticosteroid therapy",
          "Apply topical ointments"
        ]
      },
      {
        id: 47,
        question: "Which antiepileptic drug requires regular monitoring of serum levels to ensure therapeutic efficacy and avoid toxicity?",
        answer: "Phenytoin",
        options: [
          "Gabapentin",
          "Levetiracetam",
          "Valproate",
          "Topiramate",
          "Phenytoin"
        ]
      },
      {
        id: 48,
        question: "A patient with bipolar disorder on lamotrigine therapy presents with a skin rash. What is the recommended action?",
        answer: "Discontinue lamotrigine immediately",
        options: [
          "Continue lamotrigine with close monitoring",
          "Discontinue lamotrigine immediately",
          "Add an antihistamine",
          "Perform a skin biopsy",
          "Start corticosteroid therapy"
        ]
      },
      {
        id: 49,
        question: "What is a common side effect of the anticholinergic drug benztropine used in Parkinson's disease?",
        answer: "Dry mouth",
        options: [
          "Dry mouth",
          "Diarrhea",
          "Hypertension",
          "Insomnia",
          "Weight loss"
        ]
      },
      {
        id: 50,
        question: "In an elderly patient with dementia, what is a concern when prescribing antipsychotics for agitation?",
        answer: "All of the above",
        options: [
          "Increased risk of falls",
          "Reduced cognitive function",
          "Increased risk of stroke",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 51,
        question: "Which side effect is commonly associated with the use of SSRIs like fluoxetine in the elderly?",
        answer: "Hyponatremia",
        options: [
          "Hypertension",
          "Urinary retention",
          "Hyponatremia",
          "Tachycardia",
          "Hyperthermia"
        ]
      },
      {
        id: 52,
        question: "A patient with depression is prescribed venlafaxin What is an important consideration regarding blood pressure?",
        answer: "Hypertension",
        options: [
          "Hypotension",
          "Orthostatic hypotension",
          "Hypertension",
          "Bradycardia",
          "Tachycardia"
        ]
      },
      {
        id: 53,
        question: "What is a major side effect of atypical antipsychotics like olanzapine in terms of metabolic health?",
        answer: "Hyperlipidemia",
        options: [
          "Hypoglycemia",
          "Hyperlipidemia",
          "Hypothyroidism",
          "Hyponatremia",
          "Hypokalemia"
        ]
      },
      {
        id: 54,
        question: "A patient on long-term corticosteroid therapy for multiple sclerosis experiences bone pain. What is a likely cause?",
        answer: "Osteoporosis",
        options: [
          "Osteoarthritis",
          "Osteoporosis",
          "Bone metastases",
          "Vitamin D deficiency",
          "Hypercalcemia"
        ]
      },
      {
        id: 55,
        question: "What is the primary mechanism of action of topiramate used in migraine prophylaxis?",
        answer: "GABA receptor modulation",
        options: [
          "Serotonin receptor agonism",
          "Calcium channel modulation",
          "GABA receptor modulation",
          "Dopamine receptor antagonism",
          "Histamine receptor antagonism"
        ]
      },
      {
        id: 56,
        question: "A patient on lithium therapy for bipolar disorder presents with tremors and slurred speech. What should be the immediate action?",
        answer: "Check lithium serum levels",
        options: [
          "Increase lithium dose",
          "Check lithium serum levels",
          "Start an antipsychotic",
          "Increase fluid intake",
          "Prescribe a beta-blocker"
        ]
      },
      {
        id: 57,
        question: "For a patient with Parkinson's disease, what is a common side effect of dopamine agonists like pramipexole?",
        answer: "Orthostatic hypotension",
        options: [
          "Urinary retention",
          "Orthostatic hypotension",
          "Hypertension",
          "Tachycardia",
          "Hyperglycemia"
        ]
      },
      {
        id: 58,
        question: "What is a significant concern when using clozapine in the treatment of schizophrenia?",
        answer: "Agranulocytosis",
        options: [
          "Agranulocytosis",
          "Hepatotoxicity",
          "Nephrotoxicity",
          "Pulmonary fibrosis",
          "Cardiomyopathy"
        ]
      },
      {
        id: 59,
        question: "In a patient with epilepsy, what is the main concern with the use of enzyme-inducing antiepileptics like carbamazepine during pregnancy?",
        answer: "Teratogenicity",
        options: [
          "Teratogenicity",
          "Decreased efficacy of the drug",
          "Hypertensive crisis",
          "Hyperglycemia",
          "Thyroid dysfunction"
        ]
      },
      {
        id: 60,
        question: "In managing a patient with generalized anxiety disorder, which type of medication is preferred for long-term treatment?",
        answer: "SSRIs",
        options: [
          "SSRIs",
          "Benzodiazepines",
          "Antipsychotics",
          "Opioids",
          "Beta-blockers"
        ]
      },
      {
        id: 61,
        question: "What is the mechanism of action of buspirone used in anxiety disorders?",
        answer: "Serotonin receptor agonism",
        options: [
          "GABA receptor modulation",
          "Serotonin receptor agonism",
          "Dopamine receptor antagonism",
          "NMDA receptor antagonism",
          "Histamine receptor antagonism"
        ]
      },
      {
        id: 62,
        question: "A patient with schizophrenia is prescribed aripiprazol What is a key benefit of this medication over older antipsychotics?",
        answer: "Lower risk of extrapyramidal side effects",
        options: [
          "Lower risk of extrapyramidal side effects",
          "Absence of sedation",
          "No risk of weight gain",
          "No effect on prolactin levels",
          "Complete absence of side effects"
        ]
      },
      {
        id: 63,
        question: "Which medication used in Alzheimer's disease can cause vivid dreams or insomnia?",
        answer: "Donepezil",
        options: [
          "Donepezil",
          "Memantine",
          "Rivastigmine",
          "Galantamine",
          "Tacrine"
        ]
      },
      {
        id: 64,
        question: "In bipolar disorder, what is a common side effect of valproate?",
        answer: "Hair loss",
        options: [
          "Weight loss",
          "Insomnia",
          "Hair loss",
          "Increased appetite",
          "Hypertension"
        ]
      },
      {
        id: 65,
        question: "What is a risk associated with the abrupt discontinuation of antiepileptic drugs?",
        answer: "Rebound seizures",
        options: [
          "Hypertension",
          "Rebound seizures",
          "Hypoglycemia",
          "Weight gain",
          "Bradycardia"
        ]
      },
      {
        id: 66,
        question: "In treating a patient with epilepsy, what is a concern with the use of lamotrigine during pregnancy?",
        answer: "Increased risk of cleft lip",
        options: [
          "Increased risk of cleft lip",
          "Decreased drug efficacy",
          "Hypertensive crisis",
          "Hyperglycemia",
          "Thyroid dysfunction"
        ]
      },
      {
        id: 67,
        question: "A patient on risperidone for schizophrenia experiences breast enlargement and lactation. What is this condition known as?",
        answer: "Hyperprolactinemia",
        options: [
          "Galactorrhea",
          "Gynecomastia",
          "Hyperprolactinemia",
          "Hypothyroidism",
          "Adrenal insufficiency"
        ]
      },
      {
        id: 68,
        question: "Which medication is preferred for the acute treatment of a migraine headache?",
        answer: "Sumatriptan",
        options: [
          "Amitriptyline",
          "Sumatriptan",
          "Topiramate",
          "Ibuprofen",
          "Paracetamol"
        ]
      },
      {
        id: 69,
        question: "A 68-year-old man with Alzheimer's is prescribed donepezil. He later presents with bradycardi What is the likely cause?",
        answer: "Donepezil's cholinergic effects",
        options: [
          "Cardiac disease",
          "Donepezil's cholinergic effects",
          "Dehydration",
          "Electrolyte imbalance",
          "Hypothyroidism"
        ]
      },
      {
        id: 70,
        question: "A 50-year-old man with chronic back pain is prescribed oxycodon He later develops constipation. What is the best management approach?",
        answer: "Start a stimulant laxative",
        options: [
          "Increase oxycodone dose",
          "Start a stimulant laxative",
          "Discontinue oxycodone",
          "Switch to a non-opioid analgesic",
          "Increase fluid and fiber intake"
        ]
      },
      {
        id: 71,
        question: "A 72-year-old man with Parkinson's disease starts taking levodopa and later experiences nause What is the likely cause?",
        answer: "Levodopa's effect on the gastrointestinal tract",
        options: [
          "Levodopa's effect on the gastrointestinal tract",
          "An unrelated gastrointestinal issue",
          "Dehydration",
          "Dietary changes",
          "Progression of Parkinson's disease"
        ]
      },
      {
        id: 72,
        question: "A 28-year-old woman with epilepsy on valproate plans to conceiv What is an important consideration?",
        answer: "Counsel on the risk of congenital malformations",
        options: [
          "Switch to a safer antiepileptic",
          "Increase valproate dose",
          "Monitor valproate serum levels",
          "Counsel on the risk of congenital malformations",
          "Start folic acid supplementation"
        ]
      },
      {
        id: 73,
        question: "A 60-year-old man on risperidone for schizophrenia experiences restlessness and an urge to move constantly. What is this condition?",
        answer: "Akathisia",
        options: [
          "Akathisia",
          "Parkinsonism",
          "Tardive dyskinesia",
          "Neuroleptic malignant syndrome",
          "Dystonia"
        ]
      },
      {
        id: 74,
        question: "A 22-year-old woman with migraines is prescribed sumatriptan. She has a history of Raynaud's phenomenon. What is a concern?",
        answer: "Sumatriptan worsening Raynaud's",
        options: [
          "Increased migraine frequency",
          "Sumatriptan worsening Raynaud's",
          "Allergic reaction to sumatriptan",
          "Interaction with her current medications",
          "Inducing a migraine aura"
        ]
      },
      {
        id: 75,
        question: "A 55-year-old man with depression and alcohol dependence starts bupropion. What is a significant risk?",
        answer: "Seizures",
        options: [
          "Increased depressive symptoms",
          "Seizures",
          "Hypertension",
          "Weight gain",
          "Insomnia"
        ]
      },
      {
        id: 76,
        question: "A 45-year-old woman on clozapine for treatment-resistant schizophrenia presents with fever and sore throat. What is the immediate action?",
        answer: "Check white blood cell count",
        options: [
          "Prescribe antibiotics",
          "Check white blood cell count",
          "Start antipyretic treatment",
          "Increase clozapine dose",
          "Counsel on hydration"
        ]
      },
      {
        id: 77,
        question: "A 70-year-old woman with a history of stroke is prescribed amitriptyline for neuropathic pain. She later reports dry mouth and blurred vision. What is the likely cause?",
        answer: "Amitriptyline's anticholinergic effects",
        options: [
          "Stroke-related symptoms",
          "Amitriptyline's anticholinergic effects",
          "Age-related changes",
          "Dehydration",
          "A new neurological condition"
        ]
      },
      {
        id: 78,
        question: "A 25-year-old woman with generalized anxiety disorder is treated with buspiron She reports minimal relief after 2 weeks. What is an appropriate action?",
        answer: "Continue current dose and reassess in a few weeks",
        options: [
          "Increase buspirone dose",
          "Add a benzodiazepine",
          "Switch to an SSRI",
          "Continue current dose and reassess in a few weeks",
          "Start cognitive behavioral therapy"
        ]
      },
      {
        id: 79,
        question: "A 65-year-old man with chronic pain is on high-dose opioids and reports increased sensitivity to pain. What could this indicate?",
        answer: "Opioid-induced hyperalgesia",
        options: [
          "Opioid-induced hyperalgesia",
          "Progression of the underlying disease",
          "Tolerance to opioids",
          "Need for a higher opioid dose",
          "A psychosomatic response"
        ]
      },
      {
        id: 80,
        question: "A 33-year-old woman with schizophrenia on aripiprazole presents with involuntary facial movements. What is the most likely diagnosis?",
        answer: "Tardive dyskinesia",
        options: [
          "Tardive dyskinesia",
          "Akathisia",
          "Parkinsonism",
          "Dystonia",
          "Neuroleptic malignant syndrome"
        ]
      },
      {
        id: 81,
        question: "A 58-year-old woman on topiramate for migraine prophylaxis reports tingling in her hands and feet. What does this indicate?",
        answer: "Topiramate side effect",
        options: [
          "Peripheral neuropathy",
          "Topiramate side effect",
          "Raynaud's phenomenon",
          "Diabetic neuropathy",
          "Vitamin B12 deficiency"
        ]
      },
      {
        id: 82,
        question: "A 58-year-old man with Parkinson's disease on selegiline presents with a severe headache after consuming aged chees What is the most likely cause?",
        answer: "Hypertensive crisis",
        options: [
          "Tyramine reaction",
          "Selegiline overdose",
          "Migraine",
          "Hypertensive crisis",
          "Cerebral hemorrhage"
        ]
      },
      {
        id: 83,
        question: "A patient on long-term lithium therapy for bipolar disorder develops polyuria and polydipsi What is the underlying mechanism?",
        answer: "Lithium-induced nephrogenic diabetes insipidus",
        options: [
          "Diabetes insipidus",
          "Lithium-induced nephrogenic diabetes insipidus",
          "Lithium-induced hyperthyroidism",
          "Diabetic ketoacidosis",
          "Chronic kidney disease"
        ]
      },
      {
        id: 84,
        question: "A 50-year-old woman with migraine headaches starts topiramate and experiences cognitive dulling. What pharmacological property of topiramate is likely responsible?",
        answer: "Carbonic anhydrase inhibition",
        options: [
          "Carbonic anhydrase inhibition",
          "GABA receptor modulation",
          "NMDA receptor antagonism",
          "Sodium channel blocking",
          "Calcium channel modulation"
        ]
      },
      {
        id: 85,
        question: "A 40-year-old man with ADHD taking atomoxetine reports erectile dysfunction. What is the likely pharmacodynamic explanation?",
        answer: "Norepinephrine reuptake inhibition",
        options: [
          "Norepinephrine reuptake inhibition",
          "Dopamine reuptake inhibition",
          "Serotonin-norepinephrine reuptake inhibition",
          "Alpha-1 adrenergic antagonism",
          "GABAergic modulation"
        ]
      },
      {
        id: 86,
        question: "A patient on warfarin and newly prescribed carbamazepine for trigeminal neuralgia shows a reduced INR. What is the probable interaction?",
        answer: "Carbamazepine induction of warfarin metabolism",
        options: [
          "Carbamazepine induction of warfarin metabolism",
          "Carbamazepine inhibition of warfarin metabolism",
          "Displacement of warfarin from plasma proteins",
          "Reduced absorption of warfarin",
          "Enhanced anticoagulant effect of warfarin"
        ]
      },
      {
        id: 87,
        question: "A 55-year-old man with chronic neuropathic pain is prescribed pregabalin. He has a history of congestive heart failur What is a key concern with pregabalin in this patient?",
        answer: "Worsening of heart failure due to fluid retention",
        options: [
          "Worsening of heart failure due to fluid retention",
          "Increased risk of neuropathy",
          "Potential for drug interactions",
          "Increased risk of renal failure",
          "Risk of respiratory depression"
        ]
      },
      {
        id: 88,
        question: "A patient with bipolar disorder treated with valproate shows elevated ammonia levels and altered mental status. What is the likely cause?",
        answer: "Hyperammonemic encephalopathy due to valproate",
        options: [
          "Valproate-induced hepatotoxicity",
          "Hyperammonemic encephalopathy due to valproate",
          "Valproate-induced thrombocytopenia",
          "Acute valproate overdose",
          "Valproate interaction with other medications"
        ]
      },
      {
        id: 89,
        question: "A 30-year-old woman on fluoxetine for major depressive disorder plans to conceiv What is a crucial consideration regarding fluoxetine?",
        answer: "Likelihood of withdrawal symptoms in the newborn",
        options: [
          "Potential for teratogenic effects",
          "Risk of gestational diabetes",
          "Increased risk of postpartum depression",
          "Need for dose adjustment during pregnancy",
          "Likelihood of withdrawal symptoms in the newborn"
        ]
      },
      {
        id: 90,
        question: "A patient on methadone maintenance therapy presents with QTc prolongation. What is the recommended management?",
        answer: "Switch to buprenorphine",
        options: [
          "Discontinue methadone immediately",
          "Switch to buprenorphine",
          "Reduce the methadone dose",
          "Monitor QTc closely without changing methadone",
          "Add a beta-blocker"
        ]
      },
      {
        id: 91,
        question: "A 47-year-old man with treatment-resistant depression is prescribed ketamine infusion. What is a key short-term adverse effect to monitor?",
        answer: "Dissociative symptoms",
        options: [
          "Hypertension",
          "Respiratory depression",
          "Bladder dysfunction",
          "Cognitive impairment",
          "Dissociative symptoms"
        ]
      },
      {
        id: 92,
        question: "A 65-year-old woman with Alzheimer's disease on memantine presents with dizziness and confusion. What is the likely pharmacological cause?",
        answer: "Memantine's NMDA receptor antagonism",
        options: [
          "Memantine's NMDA receptor antagonism",
          "Cholinergic deficit exacerbation",
          "Renal impairment affecting memantine clearance",
          "Drug interaction with other medications",
          "Progression of Alzheimer's disease"
        ]
      },
      {
        id: 93,
        question: "A 34-year-old woman on lamotrigine for bipolar disorder develops a rash. What distinguishes a benign rash from one indicative of Stevens-Johnson Syndrome?",
        answer: "Rash spreading to mucosal surfaces",
        options: [
          "Presence of fever",
          "Rash spreading to mucosal surfaces",
          "Rash color and texture",
          "Response to antihistamines",
          "Duration of the rash before onset"
        ]
      },
      {
        id: 94,
        question: "A 40-year-old man with chronic migraine is prescribed a CGRP antagonist. What is a unique consideration in the use of this class of drugs?",
        answer: "Development of antibodies reducing efficacy",
        options: [
          "Risk of hepatotoxicity",
          "Potential for medication overuse headache",
          "Development of antibodies reducing efficacy",
          "Interaction with migraine prophylactic medications",
          "Need for cardiovascular monitoring"
        ]
      },
      {
        id: 95,
        question: "A patient on antipsychotics presents with high fever, muscle rigidity, and altered consciousness. What is the most likely diagnosis?",
        answer: "Neuroleptic malignant syndrome",
        options: [
          "Tardive dyskinesia",
          "Serotonin syndrome",
          "Neuroleptic malignant syndrome",
          "Anticholinergic toxicity",
          "Extrapyramidal symptoms"
        ]
      },
      {
        id: 96,
        question: "A 56-year-old woman on escitalopram for anxiety develops hyponatremi What is the underlying mechanism?",
        answer: "SIADH induced by escitalopram",
        options: [
          "SIADH induced by escitalopram",
          "Direct renal effects of escitalopram",
          "Dehydration",
          "Escitalopram interaction with diuretics",
          "Adrenal insufficiency"
        ]
      },
      {
        id: 97,
        question: "A patient with epilepsy on multiple antiepileptics develops a rash, fever, and lymphadenopathy. What is the primary concern?",
        answer: "Stevens-Johnson Syndrome",
        options: [
          "Allergic reaction",
          "Drug-induced lupus",
          "Stevens-Johnson Syndrome",
          "DRESS syndrome",
          "Erythema multiforme"
        ]
      },
      {
        id: 98,
        question: "In a patient with major depression, which factor suggests a potential benefit from augmentation with lithium?",
        answer: "Non-response to two different antidepressants",
        options: [
          "History of rapid cycling bipolar disorder",
          "Non-response to two different antidepressants",
          "Presence of psychotic features",
          "Elderly patient with late-onset depression",
          "History of substance abuse"
        ]
      },
      {
        id: 99,
        question: "In a patient with refractory epilepsy, what is a key consideration when using the ketogenic diet as an adjunctive treatment?",
        answer: "Risk of vitamin deficiencies",
        options: [
          "Risk of vitamin deficiencies",
          "Potential for weight loss",
          "Possibility of worsening seizures",
          "Need for frequent blood glucose monitoring",
          "Interaction with antiepileptic drugs"
        ]
      },
      {
        id: 100,
        question: "A patient with narcolepsy is prescribed sodium oxybat What is a critical safety concern with this medication?",
        answer: "Potential for abuse and misuse",
        options: [
          "Potential for abuse and misuse",
          "Risk of severe allergic reactions",
          "Interaction with caffeine",
          "High risk of causing insomnia",
          "Sodium overload in patients with hypertension"
        ]
      },
      {
        id: 101,
        question: "In a patient with Parkinson's disease experiencing \"off\" episodes, what is a consideration for the use of apomorphine?",
        answer: "Risk of hypotension and nausea",
        options: [
          "Risk of severe dyskinesia",
          "Potential for on-off phenomenon exacerbation",
          "Risk of hypotension and nausea",
          "Interaction with MAO-B inhibitors",
          "Apomorphine's effect on renal function"
        ]
      },
      {
        id: 102,
        question: "A 30-year-old woman with migraines and a history of stroke is prescribed a triptan. What is a major contraindication for this prescription?",
        answer: "History of stroke",
        options: [
          "History of stroke",
          "Presence of aura",
          "Chronic migraine",
          "Overuse of analgesics",
          "Age below 50"
        ]
      },
      {
        id: 103,
        question: "A patient with schizophrenia on long-term olanzapine therapy shows elevated HbA1c levels. What is the most likely cause?",
        answer: "Olanzapine's effect on insulin sensitivity",
        options: [
          "Olanzapine's effect on insulin sensitivity",
          "Direct pancreatic beta-cell damage",
          "Increased appetite leading to weight gain",
          "Interaction with other antidiabetic medications",
          "Olanzapine-induced hypothyroidism"
        ]
      },
      {
        id: 104,
        question: "In a patient with opioid use disorder, what is a consideration when prescribing methadone?",
        answer: "Risk of QTc prolongation",
        options: [
          "Risk of QTc prolongation",
          "Potential for rapid tolerance development",
          "Interaction with benzodiazepines",
          "Methadone's effect on liver enzymes",
          "Need for daily supervised administration"
        ]
      },
      {
        id: 105,
        question: "A 50-year-old man with alcohol use disorder is prescribed disulfiram. What is a critical counseling point for this patient?",
        answer: "Avoidance of all forms of alcohol",
        options: [
          "Avoidance of all forms of alcohol",
          "Potential for depressive symptoms",
          "Risk of hepatotoxicity",
          "Need for regular liver function tests",
          "Interaction with antihypertensive medications"
        ]
      },
      {
        id: 106,
        question: "A patient with bipolar disorder experiences a manic episode while on lamotrigine monotherapy. What is the most appropriate pharmacological adjustment?",
        answer: "Add lithium",
        options: [
          "Increase lamotrigine dose",
          "Add lithium",
          "Start an antipsychotic",
          "Initiate valproate therapy",
          "Switch to an SSRI"
        ]
      },
      {
        id: 107,
        question: "In an elderly patient with glaucoma, which antidepressant should be prescribed with caution due to the risk of increasing intraocular pressure?",
        answer: "Amitriptyline",
        options: [
          "Sertraline",
          "Amitriptyline",
          "Bupropion",
          "Fluoxetine",
          "Citalopram"
        ]
      },
      {
        id: 108,
        question: "A patient on quetiapine for schizophrenia presents with diabetic ketoacidosis (DKA). What is the likely link between the medication and this condition?",
        answer: "Quetiapine-induced weight gain and insulin resistance",
        options: [
          "Quetiapine-induced weight gain and insulin resistance",
          "Direct pancreatic beta-cell toxicity by quetiapine",
          "Quetiapine's interference with insulin signaling",
          "Increased appetite leading to poor glycemic control",
          "Genetic predisposition to diabetes exacerbated by quetiapine"
        ]
      },
      {
        id: 109,
        question: "A patient with epilepsy is prescribed phenytoin and develops gingival hyperplasia. What is an appropriate management strategy?",
        answer: "Provide dental referral and maintain oral hygiene",
        options: [
          "Discontinue phenytoin immediately",
          "Reduce phenytoin dose",
          "Provide dental referral and maintain oral hygiene",
          "Switch to another antiepileptic drug",
          "Start a course of antibiotics"
        ]
      },
      {
        id: 110,
        question: "A 55-year-old woman on a high dose of venlafaxine for severe depression presents with hypertension. What pharmacological property of venlafaxine is responsible?",
        answer: "Serotonin-norepinephrine reuptake inhibition",
        options: [
          "Serotonin-norepinephrine reuptake inhibition",
          "Alpha-1 adrenergic antagonism",
          "Dopamine reuptake inhibition",
          "Direct vasopressor effect",
          "Inhibition of nitric oxide synthesis"
        ]
      },
      {
        id: 111,
        question: "A patient on long-term corticosteroid therapy for multiple sclerosis (MS) develops Cushing's syndrome. What is the best approach to manage this iatrogenic condition?",
        answer: "Gradually taper corticosteroid dose",
        options: [
          "Discontinue corticosteroids abruptly",
          "Switch to a different MS medication",
          "Gradually taper corticosteroid dose",
          "Start metyrapone",
          "Initiate insulin therapy"
        ]
      },
      {
        id: 112,
        question: "In a patient with a history of peptic ulcer disease, which antipsychotic medication requires caution due to its potential for gastrointestinal bleeding?",
        answer: "Clozapine",
        options: [
          "Clozapine",
          "Risperidone",
          "Olanzapine",
          "Quetiapine",
          "Aripiprazole"
        ]
      },
      {
        id: 113,
        question: "A 40-year-old woman with a history of migraine headaches is prescribed propranolol. She has asthma. What is a major concern with propranolol in this patient?",
        answer: "Risk of exacerbating asthma",
        options: [
          "Risk of exacerbating asthma",
          "Potential for increased headache frequency",
          "Interaction with migraine medications",
          "Propranolol-induced hypotension",
          "Development of tolerance to propranolol"
        ]
      },
      {
        id: 114,
        question: "A patient with refractory partial seizures is started on levetiracetam. They have a history of psychiatric illness. What is a key adverse effect to monitor in this patient?",
        answer: "Behavioral changes, including aggression",
        options: [
          "Behavioral changes, including aggression",
          "Hypertension",
          "Renal impairment",
          "Hepatic dysfunction",
          "Thyroid abnormalities"
        ]
      },
      {
        id: 115,
        question: "A 70-year-old patient with Alzheimer's disease is prescribed memantine. They have a history of cardiac arrhythmias. What is a critical monitoring point for this medication?",
        answer: "Cardiac function due to potential QT prolongation",
        options: [
          "Cardiac function due to potential QT prolongation",
          "Renal function for dose adjustment",
          "Liver enzymes for potential hepatotoxicity",
          "Blood pressure for potential hypotension",
          "Cognitive function for assessing efficacy"
        ]
      },
      {
        id: 116,
        question: "A patient with HIV and tuberculosis (TB) is being treated with rifampin and antiretrovirals. What is a major concern with this combination?",
        answer: "Rifampin reducing the effectiveness of antiretrovirals",
        options: [
          "Rifampin reducing the effectiveness of antiretrovirals",
          "Antiretrovirals increasing rifampin toxicity",
          "Increased risk of hepatotoxicity",
          "Development of multidrug-resistant TB",
          "Risk of immune reconstitution inflammatory syndrome"
        ]
      },
      {
        id: 117,
        question: "A patient on methotrexate for rheumatoid arthritis develops macrocytic anemia. What is a likely cause?",
        answer: "Folic acid antagonism by methotrexate",
        options: [
          "Vitamin B12 deficiency",
          "Folic acid antagonism by methotrexate",
          "Iron deficiency anemia",
          "Hemolytic anemia",
          "Anemia of chronic disease"
        ]
      },
      {
        id: 118,
        question: "A 50-year-old woman with major depressive disorder is treated with a high dose of tricyclic antidepressants (TCAs). She presents with tachycardia, dry mouth, and urinary retention. What is the likely cause?",
        answer: "Anticholinergic side effects of TCAs",
        options: [
          "Anticholinergic side effects of TCAs",
          "Serotonin syndrome",
          "TCA overdose",
          "Hypomanic switch",
          "Interaction with other medications"
        ]
      },
      {
        id: 119,
        question: "A patient with epilepsy on phenobarbital therapy shows decreased efficacy of their oral contraceptives. What is the likely explanation?",
        answer: "Phenobarbital inducing hepatic enzymes that metabolize oral contraceptives",
        options: [
          "Phenobarbital inducing hepatic enzymes that metabolize oral contraceptives",
          "Direct interaction between phenobarbital and estrogen",
          "Phenobarbital causing hormonal imbalance",
          "Reduced gastrointestinal absorption of the contraceptive",
          "Alteration in the contraceptive's renal excretion"
        ]
      },
      {
        id: 120,
        question: "A patient with a history of myocardial infarction is prescribed citalopram for depression. What is an important cardiac consideration for citalopram?",
        answer: "Risk of QT interval prolongation",
        options: [
          "Risk of hypertension",
          "Potential for bradycardia",
          "Risk of QT interval prolongation",
          "Increased risk of myocardial infarction",
          "Likelihood of arrhythmia"
        ]
      },
      {
        id: 121,
        question: "In treating a patient with Parkinson's disease, what is the primary reason for combining levodopa with carbidopa?",
        answer: "To reduce peripheral side effects of levodopa",
        options: [
          "To increase central nervous system penetration of levodopa",
          "To reduce peripheral side effects of levodopa",
          "To enhance the dopaminergic effect",
          "To slow the progression of Parkinson's disease",
          "To reduce the dose of levodopa needed"
        ]
      },
      {
        id: 122,
        question: "A patient on antipsychotic therapy develops acute dystonia. Which medication is most appropriate for immediate treatment?",
        answer: "Anticholinergic agent",
        options: [
          "Benzodiazepine",
          "Beta-blocker",
          "Anticholinergic agent",
          "Second-generation antipsychotic",
          "SSRI"
        ]
      },
      {
        id: 123,
        question: "A patient with chronic pain and a history of opioid dependence is being considered for tramadol therapy. What is a crucial concern with this medication?",
        answer: "Risk of exacerbating opioid dependence",
        options: [
          "Risk of exacerbating opioid dependence",
          "Potential for severe constipation",
          "Increased risk of seizures",
          "Interaction with non-opioid pain medications",
          "Risk of respiratory depression"
        ]
      },
      {
        id: 124,
        question: "A 55-year-old woman with breast cancer is started on tamoxifen. What is a key risk associated with tamoxifen therapy?",
        answer: "Increased risk of thromboembolic events",
        options: [
          "Increased risk of thromboembolic events",
          "Osteoporosis",
          "Hepatotoxicity",
          "Nephrotoxicity",
          "Cardiotoxicity"
        ]
      },
      {
        id: 125,
        question: "In Parkinson's disease, which medication is a COMT inhibitor used to prolong the effect of levodopa?",
        answer: "Entacapone",
        options: [
          "Rasagiline",
          "Ropinirole",
          "Selegiline",
          "Entacapone",
          "Amantadine"
        ]
      },
      {
        id: 126,
        question: "Which antiepileptic drug is known for its enzyme-inducing properties that can reduce the efficacy of oral contraceptives?",
        answer: "Carbamazepine",
        options: [
          "Lamotrigine",
          "Levetiracetam",
          "Valproate",
          "Topiramate",
          "Carbamazepine"
        ]
      },
      {
        id: 127,
        question: "In multiple sclerosis, which medication is a disease-modifying therapy that requires monitoring for macular edema?",
        answer: "Fingolimod",
        options: [
          "Interferon beta",
          "Glatiramer acetate",
          "Fingolimod",
          "Natalizumab",
          "Dimethyl fumarate"
        ]
      },
      {
        id: 128,
        question: "Which benzodiazepine is commonly used for the emergency treatment of seizures?",
        answer: "Lorazepam",
        options: [
          "Diazepam",
          "Lorazepam",
          "Clonazepam",
          "Alprazolam",
          "Midazolam"
        ]
      },
      {
        id: 129,
        question: "For a patient with a known history of substance misuse, which of the following would be a less preferable choice for anxiety management?",
        answer: "Diazepam",
        options: [
          "Buspirone",
          "Pregabalin",
          "Sertraline",
          "Diazepam",
          "Fluoxetine"
        ]
      },
      {
        id: 130,
        question: "Which drug is a selective monoamine oxidase B inhibitor used in Parkinson's disease?",
        answer: "Selegiline",
        options: [
          "Levodopa",
          "Carbidopa",
          "Selegiline",
          "Entacapone",
          "Amantadine"
        ]
      },
      {
        id: 131,
        question: "Which medication is considered a first-line treatment for major depressive disorder?",
        answer: "Sertraline",
        options: [
          "Venlafaxine",
          "Mirtazapine",
          "Sertraline",
          "Trazodone",
          "Duloxetine"
        ]
      },
      {
        id: 132,
        question: "Which antiepileptic drug has a unique mechanism of action involving sodium channel slow inactivation?",
        answer: "Lacosamide",
        options: [
          "Phenytoin",
          "Carbamazepine",
          "Valproate",
          "Lacosamide",
          "Levetiracetam"
        ]
      },
      {
        id: 133,
        question: "What is the primary risk associated with the use of tricyclic antidepressants in overdose?",
        answer: "Cardiotoxicity",
        options: [
          "Renal failure",
          "Cardiotoxicity",
          "Hepatic failure",
          "Respiratory depression",
          "Pancreatitis"
        ]
      },
      {
        id: 134,
        question: "Which medication is a first-line treatment for neuropathic pain in diabetic neuropathy?",
        answer: "Gabapentin",
        options: [
          "Gabapentin",
          "Ibuprofen",
          "Acetaminophen",
          "Aspirin",
          "Indomethacin"
        ]
      },
      {
        id: 135,
        question: "What is the most common side effect of levodopa in the treatment of Parkinson's disease?",
        answer: "Dyskinesia",
        options: [
          "Urinary retention",
          "Xerostomia",
          "Orthostatic hypotension",
          "Dyskinesia",
          "Akathisia"
        ]
      },
      {
        id: 136,
        question: "Which antipsychotic has the highest risk for causing tardive dyskinesia?",
        answer: "Haloperidol",
        options: [
          "Clozapine",
          "Olanzapine",
          "Risperidone",
          "Haloperidol",
          "Aripiprazole"
        ]
      },
      {
        id: 137,
        question: "In migraine prophylaxis, which of the following is a mechanism of action of topiramate?",
        answer: "GABA modulation",
        options: [
          "Serotonin agonism",
          "Beta-adrenergic blockade",
          "GABA modulation",
          "Dopamine antagonism",
          "NMDA antagonism"
        ]
      },
      {
        id: 138,
        question: "Which medication is considered the gold standard for treating trigeminal neuralgia?",
        answer: "Carbamazepine",
        options: [
          "Gabapentin",
          "Baclofen",
          "Carbamazepine",
          "Amitriptyline",
          "Pregabalin"
        ]
      },
      {
        id: 139,
        question: "Which antiepileptic drug is known for causing hyponatremia?",
        answer: "Carbamazepine",
        options: [
          "Carbamazepine",
          "Valproate",
          "Phenytoin",
          "Lamotrigine",
          "Levetiracetam"
        ]
      },
      {
        id: 140,
        question: "For the management of restless legs syndrome, which drug class is commonly used?",
        answer: "Dopamine agonists",
        options: [
          "Benzodiazepines",
          "Antihistamines",
          "Dopamine agonists",
          "Calcium channel blockers",
          "SSRIs"
        ]
      },
      {
        id: 141,
        question: "In bipolar disorder, what is the primary use of lamotrigine?",
        answer: "Maintenance therapy",
        options: [
          "Acute mania",
          "Acute depression",
          "Maintenance therapy",
          "Rapid cycling",
          "Psychotic symptoms"
        ]
      },
      {
        id: 142,
        question: "What is a major side effect of lithium therapy requiring regular monitoring?",
        answer: "Thyroid dysfunction",
        options: [
          "Thyroid dysfunction",
          "Hepatotoxicity",
          "Renal failure",
          "Cardiotoxicity",
          "Pancreatitis"
        ]
      },
      {
        id: 143,
        question: "In Alzheimer's disease, what is the mechanism of action of donepezil?",
        answer: "Acetylcholinesterase inhibition",
        options: [
          "NMDA receptor antagonism",
          "Dopamine reuptake inhibition",
          "Acetylcholinesterase inhibition",
          "GABA modulation",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 144,
        question: "What is the primary mechanism of action of antipsychotic drugs?",
        answer: "Dopamine receptor antagonism",
        options: [
          "Dopamine receptor antagonism",
          "Serotonin receptor antagonism",
          "GABA receptor agonism",
          "Norepinephrine reuptake inhibition",
          "Acetylcholine receptor antagonism"
        ]
      },
      {
        id: 145,
        question: "What is a major adverse effect of long-term use of levodopa/carbidopa in Parkinson's disease?",
        answer: "Motor fluctuations",
        options: [
          "Renal impairment",
          "Hepatic failure",
          "Motor fluctuations",
          "Cognitive decline",
          "Gastrointestinal bleeding"
        ]
      },
      {
        id: 146,
        question: "Which medication is an effective prophylactic treatment for cluster headaches?",
        answer: "Verapamil",
        options: [
          "Sumatriptan",
          "Amitriptyline",
          "Verapamil",
          "Ibuprofen",
          "Acetaminophen"
        ]
      },
      {
        id: 147,
        question: "In epilepsy, what is the primary concern with the use of phenytoin?",
        answer: "Gingival hyperplasia",
        options: [
          "Renal toxicity",
          "Cardiotoxicity",
          "Drug-induced lupus",
          "Gingival hyperplasia",
          "Ototoxicity"
        ]
      },
      {
        id: 148,
        question: "Which drug class is most appropriate for the treatment of acute mania in bipolar disorder?",
        answer: "Antipsychotics",
        options: [
          "SSRIs",
          "Antipsychotics",
          "Benzodiazepines",
          "Anticonvulsants",
          "MAOIs"
        ]
      },
      {
        id: 149,
        question: "What is the primary effect of naltrexone in the treatment of alcohol dependence?",
        answer: "Opioid receptor blockade",
        options: [
          "GABA receptor modulation",
          "Dopamine release",
          "Opioid receptor blockade",
          "Serotonin reuptake inhibition",
          "NMDA receptor antagonism"
        ]
      },
      {
        id: 150,
        question: "Which antiepileptic drug is associated with a risk of Stevens-Johnson syndrome, especially in patients with a certain HLA-B allele?",
        answer: "Carbamazepine",
        options: [
          "Carbamazepine",
          "Valproate",
          "Levetiracetam",
          "Phenobarbital",
          "Lamotrigine"
        ]
      },
      {
        id: 151,
        question: "In the management of acute migraine, which medication is used for its antiemetic and prokinetic properties?",
        answer: "Metoclopramide",
        options: [
          "Sumatriptan",
          "Metoclopramide",
          "Propranolol",
          "Ibuprofen",
          "Acetaminophen"
        ]
      },
      {
        id: 152,
        question: "For a patient with treatment-resistant depression, which medication could be considered?",
        answer: "Ketamine",
        options: [
          "Fluoxetine",
          "Venlafaxine",
          "Escitalopram",
          "Ketamine",
          "Citalopram"
        ]
      },
      {
        id: 153,
        question: "Which benzodiazepine has the shortest half-life and is commonly used for procedures requiring brief sedation?",
        answer: "Midazolam",
        options: [
          "Diazepam",
          "Lorazepam",
          "Midazolam",
          "Alprazolam",
          "Clonazepam"
        ]
      },
      {
        id: 154,
        question: "What is the primary concern with the use of risperidone in elderly patients with dementia?",
        answer: "Increased risk of stroke",
        options: [
          "Hypotension",
          "Increased risk of stroke",
          "Weight gain",
          "Hepatotoxicity",
          "Renal impairment"
        ]
      },
      {
        id: 155,
        question: "Which drug is used as an adjunct in Parkinson's disease for its ability to inhibit catechol-O-methyltransferase (COMT)?",
        answer: "Entacapone",
        options: [
          "Rasagiline",
          "Entacapone",
          "Amantadine",
          "Selegiline",
          "Tolcapone"
        ]
      },
      {
        id: 156,
        question: "For acute pain management in opioid-naïve patients, which opioid is commonly preferred due to its lower risk of dependence?",
        answer: "Tramadol",
        options: [
          "Morphine",
          "Fentanyl",
          "Codeine",
          "Tramadol",
          "Oxycodone"
        ]
      },
      {
        id: 157,
        question: "In treating neuropathic pain, which medication's mechanism of action involves blocking voltage-gated calcium channels?",
        answer: "Gabapentin",
        options: [
          "Amitriptyline",
          "Gabapentin",
          "Paracetamol",
          "Ibuprofen",
          "Duloxetine"
        ]
      },
      {
        id: 158,
        question: "In the treatment of depression, bupropion is unique because it does not typically cause which side effect?",
        answer: "Sexual dysfunction",
        options: [
          "Weight gain",
          "Sexual dysfunction",
          "Dry mouth",
          "Sedation",
          "Cognitive impairment"
        ]
      },
      {
        id: 159,
        question: "Which medication is an alpha-2 delta ligand used in the treatment of generalized anxiety disorder?",
        answer: "Pregabalin",
        options: [
          "Buspirone",
          "Pregabalin",
          "Sertraline",
          "Paroxetine",
          "Venlafaxine"
        ]
      },
      {
        id: 160,
        question: "What is a potential adverse effect of long-term use of antipsychotic medications in treating schizophrenia?",
        answer: "Tardive dyskinesia",
        options: [
          "Tardive dyskinesia",
          "Acute renal failure",
          "Hypothyroidism",
          "Peptic ulcer disease",
          "Myocardial infarction"
        ]
      },
      {
        id: 161,
        question: "In the treatment of major depressive disorder, what is the primary advantage of vortioxetine?",
        answer: "It has less sexual dysfunction as a side effect",
        options: [
          "It has a fast onset of action",
          "It has less sexual dysfunction as a side effect",
          "It is effective in treatment-resistant depression",
          "It has no risk of weight gain",
          "It does not require dose adjustments in renal impairment"
        ]
      },
      {
        id: 162,
        question: "Which medication is preferred for the prophylactic treatment of migraines in patients with comorbid hypertension?",
        answer: "Propranolol",
        options: [
          "Amitriptyline",
          "Topiramate",
          "Propranolol",
          "Sumatriptan",
          "Gabapentin"
        ]
      },
      {
        id: 163,
        question: "In treating schizophrenia, what is the primary benefit of using clozapine?",
        answer: "High efficacy in treatment-resistant cases",
        options: [
          "Lower risk of extrapyramidal symptoms",
          "High efficacy in treatment-resistant cases",
          "Absence of metabolic side effects",
          "No risk of tardive dyskinesia",
          "Lower risk of QT prolongation"
        ]
      },
      {
        id: 164,
        question: "What is the primary action of antipsychotics in treating bipolar mania?",
        answer: "Dopamine receptor antagonism",
        options: [
          "Serotonin reuptake inhibition",
          "Dopamine receptor antagonism",
          "GABA receptor modulation",
          "Norepinephrine reuptake inhibition",
          "Histamine antagonism"
        ]
      },
      {
        id: 165,
        question: "In Parkinson's disease, what is the primary role of MAO-B inhibitors like selegiline and rasagiline?",
        answer: "Enhance dopamine availability",
        options: [
          "Enhance dopamine availability",
          "Inhibit acetylcholinesterase",
          "Modulate GABA receptors",
          "Block calcium channels",
          "Antagonize adenosine receptors"
        ]
      },
      {
        id: 166,
        question: "Which antiepileptic drug is specifically known for causing visual field defects?",
        answer: "Topiramate",
        options: [
          "Carbamazepine",
          "Valproate",
          "Levetiracetam",
          "Topiramate",
          "Phenobarbital"
        ]
      },
      {
        id: 167,
        question: "What is a common side effect of antipsychotic medication, characterized by restlessness and an urge to move?",
        answer: "Akathisia",
        options: [
          "Akathisia",
          "Tardive dyskinesia",
          "Dystonia",
          "Parkinsonism",
          "Bradykinesia"
        ]
      },
      {
        id: 168,
        question: "Which medication is primarily used for its neuroprotective effects in amyotrophic lateral sclerosis (ALS)?",
        answer: "Riluzole",
        options: [
          "Riluzole",
          "Baclofen",
          "Gabapentin",
          "Tizanidine",
          "Modafinil"
        ]
      },
      {
        id: 169,
        question: "Which benzodiazepine is preferred for long-term treatment of anxiety due to its lower potential for dependence?",
        answer: "Clonazepam",
        options: [
          "Diazepam",
          "Lorazepam",
          "Clonazepam",
          "Alprazolam",
          "Oxazepam"
        ]
      },
      {
        id: 170,
        question: "In migraine prophylaxis, what is the mechanism of action of CGRP (calcitonin gene-related peptide) antagonists?",
        answer: "Inhibition of CGRP receptors",
        options: [
          "Vasoconstriction",
          "Vasodilation",
          "Serotonin antagonism",
          "Inhibition of CGRP receptors",
          "Dopamine agonism"
        ]
      },
      {
        id: 171,
        question: "In Parkinson's disease, which drug is used for its antiviral properties and also provides mild symptomatic relief?",
        answer: "Amantadine",
        options: [
          "Amantadine",
          "Selegiline",
          "Entacapone",
          "Rasagiline",
          "Benztropine"
        ]
      },
      {
        id: 172,
        question: "What is the primary risk associated with the abrupt discontinuation of SSRI medications?",
        answer: "Withdrawal syndrome",
        options: [
          "Hypertension",
          "Seizures",
          "Withdrawal syndrome",
          "Cardiac arrhythmias",
          "Hepatic failure"
        ]
      },
      {
        id: 173,
        question: "Which antipsychotic medication is most likely to cause metabolic syndrome, including weight gain and diabetes?",
        answer: "Olanzapine",
        options: [
          "Haloperidol",
          "Olanzapine",
          "Aripiprazole",
          "Ziprasidone",
          "Lurasidone"
        ]
      },
      {
        id: 174,
        question: "What is a major advantage of second-generation over first-generation antipsychotics in the treatment of schizophrenia?",
        answer: "Lower risk of extrapyramidal symptoms",
        options: [
          "Absence of sedative effects",
          "Lower risk of extrapyramidal symptoms",
          "Higher efficacy in treating negative symptoms",
          "No risk of metabolic syndrome",
          "More rapid onset of action"
        ]
      },
      {
        id: 175,
        question: "In the treatment of bipolar disorder, what is the primary benefit of using lithium?",
        answer: "Reduction of suicidal behavior",
        options: [
          "Rapid control of manic symptoms",
          "Prevention of depressive episodes",
          "Reduction of suicidal behavior",
          "Minimal cognitive side effects",
          "Absence of weight gain"
        ]
      },
      {
        id: 176,
        question: "What is a potential adverse effect of the long-term use of stimulant medications in the treatment of ADHD?",
        answer: "Growth suppression",
        options: [
          "Renal impairment",
          "Cardiac arrhythmias",
          "Pulmonary fibrosis",
          "Growth suppression",
          "Thyroid dysfunction"
        ]
      },
      {
        id: 177,
        question: "In managing major depressive disorder, what is a significant advantage of bupropion over other antidepressants?",
        answer: "Absence of sexual side effects",
        options: [
          "Higher efficacy",
          "Absence of sexual side effects",
          "Faster onset of action",
          "Lower risk of weight gain",
          "No withdrawal symptoms"
        ]
      },
      {
        id: 178,
        question: "For the treatment of restless legs syndrome, which medication can cause augmentation of symptoms over time?",
        answer: "Ropinirole",
        options: [
          "Gabapentin",
          "Ropinirole",
          "Baclofen",
          "Benzodiazepines",
          "Opioids"
        ]
      },
      {
        id: 179,
        question: "In the treatment of epilepsy, which antiepileptic drug is particularly effective in absence seizures?",
        answer: "Ethosuximide",
        options: [
          "Phenytoin",
          "Carbamazepine",
          "Ethosuximide",
          "Valproate",
          "Gabapentin"
        ]
      },
      {
        id: 180,
        question: "What is the primary mechanism of action of drugs used in the management of overactive bladder, such as oxybutynin?",
        answer: "Muscarinic receptor antagonism",
        options: [
          "Muscarinic receptor antagonism",
          "Dopamine receptor agonism",
          "GABA modulation",
          "Serotonin reuptake inhibition",
          "Norepinephrine reuptake inhibition"
        ]
      },
      {
        id: 181,
        question: "In the treatment of Parkinson's disease, which of the following is a common side effect of dopamine agonists like pramipexole?",
        answer: "Orthostatic hypotension",
        options: [
          "Urinary retention",
          "Orthostatic hypotension",
          "Xerostomia",
          "Cognitive impairment",
          "Hyperkalemia"
        ]
      },
      {
        id: 182,
        question: "Which medication is used in opioid overdose and works as an opioid receptor antagonist?",
        answer: "Naloxone",
        options: [
          "Naloxone",
          "Methadone",
          "Buprenorphine",
          "Naltrexone",
          "Clonidine"
        ]
      },
      {
        id: 183,
        question: "What is the main benefit of using second-generation antipsychotics in schizophrenia compared to first-generation antipsychotics?",
        answer: "Lower risk of extrapyramidal side effects",
        options: [
          "Absence of metabolic side effects",
          "Lower risk of extrapyramidal side effects",
          "More effective in treating positive symptoms",
          "Less sedation",
          "No risk of agranulocytosis"
        ]
      },
      {
        id: 184,
        question: "Which medication, used in bipolar disorder, is known for its risk of causing life-threatening rashes, such as Stevens-Johnson syndrome?",
        answer: "Lamotrigine",
        options: [
          "Lithium",
          "Valproate",
          "Lamotrigine",
          "Carbamazepine",
          "Olanzapine"
        ]
      },
      {
        id: 185,
        question: "What is a primary advantage of newer SSRIs over older antidepressants like TCAs and MAOIs?",
        answer: "Fewer cardiovascular side effects",
        options: [
          "Faster onset of action",
          "More potent effects",
          "Fewer cardiovascular side effects",
          "Higher efficacy in severe depression",
          "No withdrawal symptoms"
        ]
      },
      {
        id: 186,
        question: "Which medication is an NMDA receptor antagonist used in the treatment of moderate to severe Alzheimer's disease?",
        answer: "Memantine",
        options: [
          "Donepezil",
          "Rivastigmine",
          "Galantamine",
          "Memantine",
          "Tacrine"
        ]
      },
      {
        id: 187,
        question: "In the treatment of ADHD, what is a common side effect of stimulant medications like amphetamine and methylphenidate?",
        answer: "Appetite suppression",
        options: [
          "Hypotension",
          "Bradycardia",
          "Appetite suppression",
          "Weight gain",
          "Sedation"
        ]
      },
      {
        id: 188,
        question: "What is the primary therapeutic use of benzodiazepines in the management of epilepsy?",
        answer: "Acute seizure termination",
        options: [
          "Long-term seizure control",
          "Acute seizure termination",
          "Reducing seizure frequency",
          "Preventing seizure recurrence",
          "Enhancing the effects of antiepileptic drugs"
        ]
      },
      {
        id: 189,
        question: "Which antidepressant is known for its dual action on both serotonin and norepinephrine reuptake?",
        answer: "Venlafaxine",
        options: [
          "Fluoxetine",
          "Paroxetine",
          "Venlafaxine",
          "Bupropion",
          "Trazodone"
        ]
      },
      {
        id: 190,
        question: "What is the primary advantage of using atypical antipsychotics in the treatment of psychosis in Parkinson's disease?",
        answer: "Reduced risk of worsening parkinsonism",
        options: [
          "Enhanced motor control",
          "Reduced risk of worsening parkinsonism",
          "Greater efficacy in cognitive symptoms",
          "Lower risk of sedation",
          "No anticholinergic side effects"
        ]
      },
      {
        id: 191,
        question: "In the management of chronic pain, which medication is used for its ability to inhibit the reuptake of both serotonin and norepinephrine?",
        answer: "Duloxetine",
        options: [
          "Gabapentin",
          "Amitriptyline",
          "Duloxetine",
          "Paracetamol",
          "Ibuprofen"
        ]
      },
      {
        id: 192,
        question: "Which medication is commonly used in the treatment of narcolepsy for its ability to increase wakefulness?",
        answer: "Modafinil",
        options: [
          "Zolpidem",
          "Modafinil",
          "Clonazepam",
          "Amitriptyline",
          "Methylphenidate"
        ]
      },
      {
        id: 193,
        question: "Which medication is used for its neuroprotective effects in multiple sclerosis?",
        answer: "Fingolimod",
        options: [
          "Interferon beta",
          "Glatiramer acetate",
          "Fingolimod",
          "Natalizumab",
          "Dimethyl fumarate"
        ]
      },
      {
        id: 194,
        question: "What is the primary mechanism of action of antipsychotics in treating Tourette syndrome?",
        answer: "Dopamine receptor antagonism",
        options: [
          "Dopamine receptor antagonism",
          "Serotonin reuptake inhibition",
          "GABA modulation",
          "Norepinephrine reuptake inhibition",
          "Acetylcholine receptor antagonism"
        ]
      },
      {
        id: 195,
        question: "What is a common adverse effect of long-term use of lithium in bipolar disorder?",
        answer: "Thyroid dysfunction",
        options: [
          "Thyroid dysfunction",
          "Acute renal failure",
          "Cardiotoxicity",
          "Hepatotoxicity",
          "Peptic ulcer disease"
        ]
      },
      {
        id: 196,
        question: "Which antiepileptic drug is preferred for use in pregnancy due to lower teratogenic risk?",
        answer: "Lamotrigine",
        options: [
          "Valproate",
          "Topiramate",
          "Carbamazepine",
          "Lamotrigine",
          "Phenobarbital"
        ]
      },
      {
        id: 197,
        question: "Which medication is often used in the management of myoclonic seizures?",
        answer: "Valproate",
        options: [
          "Valproate",
          "Carbamazepine",
          "Phenobarbital",
          "Levetiracetam",
          "Gabapentin"
        ]
      },
      {
        id: 198,
        question: "What is a significant risk of using tricyclic antidepressants (TCAs) in overdose?",
        answer: "Cardiotoxicity",
        options: [
          "Hypertension",
          "Bradycardia",
          "Cardiotoxicity",
          "Hypoglycemia",
          "Hepatotoxicity"
        ]
      },
      {
        id: 199,
        question: "In the treatment of ADHD, what is the mechanism of action of non-stimulant medications like atomoxetine?",
        answer: "Norepinephrine reuptake inhibition",
        options: [
          "Norepinephrine reuptake inhibition",
          "Dopamine reuptake inhibition",
          "Serotonin reuptake inhibition",
          "GABA modulation",
          "Histamine antagonism"
        ]
      },
      {
        id: 200,
        question: "Which medication is used as a first-line treatment for prophylaxis of migraine headaches?",
        answer: "Propranolol",
        options: [
          "Amitriptyline",
          "Propranolol",
          "Topiramate",
          "Sumatriptan",
          "Gabapentin"
        ]
      },
      {
        id: 201,
        question: "What is the primary action of benzodiazepines in the treatment of muscle spasticity?",
        answer: "GABA-A receptor modulation",
        options: [
          "GABA-A receptor modulation",
          "Norepinephrine reuptake inhibition",
          "Dopamine receptor antagonism",
          "Acetylcholine receptor antagonism",
          "Serotonin reuptake inhibition"
        ]
      },
      {
        id: 202,
        question: "Which antiepileptic drug is associated with the risk of causing hyponatremia?",
        answer: "Carbamazepine",
        options: [
          "Carbamazepine",
          "Valproate",
          "Phenytoin",
          "Lamotrigine",
          "Levetiracetam"
        ]
      },
      {
        id: 203,
        question: "Which medication is used in bipolar disorder for its mood-stabilizing properties and also requires monitoring for hepatotoxicity?",
        answer: "Valproate",
        options: [
          "Lithium",
          "Lamotrigine",
          "Valproate",
          "Carbamazepine",
          "Olanzapine"
        ]
      },
      {
        id: 204,
        question: "In the treatment of depression, what is the primary benefit of using SSRIs over TCAs?",
        answer: "Fewer side effects",
        options: [
          "Higher efficacy",
          "Rapid onset of action",
          "Fewer side effects",
          "No risk of addiction",
          "More potent effects"
        ]
      },
      {
        id: 205,
        question: "Which antipsychotic medication is known for a lower risk of metabolic syndrome but a higher risk of extrapyramidal symptoms?",
        answer: "Haloperidol",
        options: [
          "Olanzapine",
          "Aripiprazole",
          "Clozapine",
          "Risperidone",
          "Haloperidol"
        ]
      },
      {
        id: 206,
        question: "What is the mechanism of action of modafinil in the treatment of narcolepsy?",
        answer: "Histamine release in the brain",
        options: [
          "GABA modulation",
          "Histamine release in the brain",
          "Dopamine reuptake inhibition",
          "Serotonin reuptake inhibition",
          "Norepinephrine reuptake inhibition"
        ]
      },
      {
        id: 207,
        question: "Which medication is used in opioid dependence and works as a partial opioid agonist?",
        answer: "Buprenorphine",
        options: [
          "Naloxone",
          "Methadone",
          "Buprenorphine",
          "Naltrexone",
          "Clonidine"
        ]
      },
      {
        id: 208,
        question: "In migraine treatment, what is the primary action of serotonin agonists like sumatriptan?",
        answer: "Vasoconstriction",
        options: [
          "Vasoconstriction",
          "Vasodilation",
          "Serotonin antagonism",
          "Dopamine agonism",
          "NMDA receptor antagonism"
        ]
      },
      {
        id: 209,
        question: "What is the primary risk associated with the use of antipsychotic medication in elderly patients with dementia?",
        answer: "Increased risk of stroke",
        options: [
          "Hypotension",
          "Increased risk of stroke",
          "Weight gain",
          "Hepatotoxicity",
          "Renal impairment"
        ]
      },
      {
        id: 210,
        question: "In the management of chronic pain, what is the mechanism of action of SNRIs like duloxetine?",
        answer: "Serotonin and norepinephrine reuptake inhibition",
        options: [
          "Serotonin and norepinephrine reuptake inhibition",
          "Dopamine reuptake inhibition",
          "GABA modulation",
          "Acetylcholine receptor antagonism",
          "Histamine antagonism"
        ]
      },
      {
        id: 211,
        question: "Which medication, used in the treatment of bipolar disorder, is known for its risk of causing rash and requires a slow titration?",
        answer: "Lamotrigine",
        options: [
          "Lithium",
          "Valproate",
          "Lamotrigine",
          "Carbamazepine",
          "Olanzapine"
        ]
      },
      {
        id: 212,
        question: "A junior doctor has approached you having prescribed medication for myasthenia gravis asking you, as the pharmacist, what the mechanism of action is and how it works. What is the primary action of acetylcholinesterase inhibitors in the management of myasthenia gravis?",
        answer: "Enhancing cholinergic transmission",
        options: [
          "Enhancing cholinergic transmission",
          "Blocking NMDA receptors",
          "Modulating GABA receptors",
          "Inhibiting dopamine reuptake",
          "Antagonizing serotonin receptors"
        ]
      },
      {
        id: 213,
        question: "In treating epilepsy, what is the primary benefit of using newer antiepileptics like levetiracetam over older drugs like phenytoin?",
        answer: "Fewer drug interactions",
        options: [
          "Higher efficacy",
          "Shorter half-life",
          "Fewer drug interactions",
          "Lower risk of teratogenicity",
          "More rapid onset of action"
        ]
      }              
];

export default CNSFlashcardMain;
