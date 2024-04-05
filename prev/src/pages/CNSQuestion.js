import React, { useEffect, useState } from "react"
import ScoreView from "./ScoreView/ScoreView"
import QuizView from "./QuizView/QuizView"
import { useNavigate, Link } from "react-router-dom"
import classnames from "classnames" // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai" // Import icons if not already imported

const CNSQuestion = () => {
  const navigate = useNavigate()

  const [questions, useQuestions] = useState([
    {
      question:
        "A 55-year-old male patient with chronic neuropathic pain is prescribed pregabalin. What is the primary mechanism of action of pregabalin?",
      answers: [
        { text: "Inhibition of sodium channels" },
        { text: "Inhibition of calcium channels", isCorrect: true },
        { text: "Enhancement of GABA synthesis" },
        { text: "Blockade of serotonin reuptake" },
        { text: "Inhibition of NMDA receptors" },
      ],
      Explanation:
        "Pregabalin primarily works by inhibiting calcium channels, which reduces the release of various neurotransmitters and thereby alleviates neuropathic pain.",
    },
    {
      question:
        "A patient on amitriptyline for depression reports dry mouth and blurred vision. Which side effect is this indicative of?",
      answers: [
        { text: "Serotonergic syndrome" },
        { text: "Anticholinergic Effects", isCorrect: true },
        { text: "Norepinephrine reuptake inhibition" },
        { text: "Sodium channel blockade" },
        { text: "Histamine receptor antagonism" },
      ],
      Explanation:
        "Dry mouth and blurred vision are typical anticholinergic side effects, commonly seen with tricyclic antidepressants like amitriptyline.",
    },
    {
      question:
        "A 70-year-old female with epilepsy is on carbamazepine therapy. She is prescribed doxycycline for a respiratory infection. What potential interaction should be monitored?",
      answers: [
        { text: "Increased risk of serotonin syndrome" },
        { text: "Reduced efficacy of carbamazepine", isCorrect: true },
        { text: "Increased risk of bleeding" },
        { text: "Carbamazepine toxicity" },
        { text: "Reduced efficacy of doxycycline" },
      ],
      Explanation:
        "Carbamazepine is a potent inducer of cytochrome P450 enzymes, which can reduce the efficacy of other drugs metabolized by these enzymes, such as doxycycline.",
    },
    {
      question:
        "A patient on phenytoin for seizure control has erratic blood levels. They do not have any other significant drug history. Which factor is most likely to contribute to this issue?",
      answers: [
        { text: "Phenytoin's narrow therapeutic index", isCorrect: true },
        { text: "Interaction with over-the-counter antacids" },
        { text: "Patient non-adherence to therapy" },
        { text: "High-fat diet" },
        { text: "Age-related renal impairment" },
      ],
      Explanation:
        "Phenytoin has a narrow therapeutic index, meaning small changes in dose or blood levels can lead to toxicity or loss of efficacy.",
    },
    {
      question:
        "A 40-year-old patient with acute migraine is prescribed sumatriptan. What is the primary action of sumatriptan in treating migraines?",
      answers: [
        { text: "Beta-adrenergic agonism" },
        { text: "Calcium Channel Blockade" },
        { text: "Serotonin (5-HT1) receptor agonism", isCorrect: true },
        { text: "Dopamine receptor antagonism" },
        { text: "GABA receptor modulation" },
      ],
      Explanation:
        "Sumatriptan relieves migraine by agonizing serotonin (5-HT1) receptors, leading to vasoconstriction of intracranial blood vessels.",
    },
    {
      question:
        "A 45-year-old patient on levodopa for Parkinson’s disease complains of nausea and vomiting. What is the likely cause?",
      answers: [
        { text: "Dopamine antagonism in the brain" },
        {
          text: "Peripheral conversion of levodopa to dopamine",
          isCorrect: true,
        },
        { text: "Enhanced cholinergic activity" },
        { text: "Reduced dopamine breakdown in CNS" },
        { text: "Serotonin syndrome" },
      ],
      Explanation:
        "Levodopa is converted to dopamine in the periphery as well as in the CNS, which can cause nausea and vomiting due to its action on the chemoreceptor trigger zone.",
    },
    {
      question:
        "Which of the following is a common side effect of SSRIs like sertraline in the initial weeks of treatment and thus must you counsel the patient on?",
      answers: [
        { text: "Weight gain" },
        { text: "Sedation" },
        { text: "Anticholinergic effects" },
        { text: "Sexual dysfunction", isCorrect: true },
        { text: "Gastrointestinal bleeding" },
      ],
      Explanation:
        "Sexual dysfunction is a common side effect of SSRIs, often occurring in the initial weeks of treatment and may persist.",
    },
    {
      question:
        "A patient on lithium therapy for bipolar disorder has developed tremors and ataxia. What does this indicate?",
      answers: [
        { text: "Lithium toxicity", isCorrect: true },
        { text: "Dehydration" },
        { text: "Hypothyroidism" },
        { text: "Renal impairment" },
        { text: "Calcium deficiency" },
      ],
      Explanation:
        "Tremors and ataxia are signs of lithium toxicity, which requires immediate attention to adjust the dose or discontinue the drug.",
    },
    {
      question:
        "For a patient on warfarin, what is the risk of co-prescribing phenobarbital?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Reduced effectiveness of warfarin", isCorrect: true },
        { text: "Increased risk of seizures" },
        { text: "Hepatotoxicity" },
        { text: "Enhanced sedation" },
      ],
      Explanation:
        "Phenobarbital induces liver enzymes and can reduce the effectiveness of warfarin, leading to a risk of thrombosis. This can be seen on bloods as a reduced INR level.",
    },
    {
      question:
        "A patient with schizophrenia is prescribed clozapine. What unique monitoring parameter is essential for this medication?",
      answers: [
        { text: "Renal function" },
        { text: "Liver enzymes" },
        { text: "White blood cell count", isCorrect: true },
        { text: "Blood glucose" },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Clozapine can cause agranulocytosis, so regular monitoring of white blood cell count is essential.",
    },
    {
      question:
        "In a patient with multiple sclerosis, what is the primary action of interferon beta-1a?",
      answers: [
        { text: "Immunosuppression" },
        { text: "Promotion of remyelination" },
        { text: "Reduction of neuronal inflammation" },
        {
          text: "Inhibition of immune cell migration across the blood-brain barrier",
          isCorrect: true,
        },
        { text: "Enhancement of nerve conduction" },
      ],
      Explanation:
        "Interferon beta-1a acts by inhibiting immune cell migration across the blood-brain barrier, reducing inflammation and the frequency of relapses.",
    },
    {
      question:
        "You are a pharmacist working in the community pharmacy when one of your more senior patients walks in having been newly prescribed a new antidepressant. What is the primary concern when prescribing tricyclic antidepressants (TCAs) like amitriptyline to elderly patients?",
      answers: [
        { text: "Increased risk of hypertension" },
        { text: "Increased risk of falls", isCorrect: true },
        { text: "Reduced drug clearance" },
        { text: "Serotonin syndrome" },
        { text: "Weight loss" },
      ],
      Explanation:
        "TCAs can cause sedation and orthostatic hypotension, increasing the risk of falls, especially in elderly patients.",
    },
    {
      question:
        "A patient on monoamine oxidase inhibitors (MAOIs) for depression should avoid which type of food to prevent a hypertensive crisis?",
      answers: [
        { text: "High-fat foods" },
        { text: "Foods rich in vitamin K" },
        { text: "Tyramine-rich foods", isCorrect: true },
        { text: "Foods high in simple sugars" },
        { text: "Dairy products" },
      ],
      Explanation:
        "Tyramine-rich foods like aged cheese and cured meats can cause a hypertensive crisis when consumed by patients on MAOIs.",
    },
    {
      question:
        "A patient on antipsychotic therapy with risperidone presents with muscle rigidity and fever. What is the most likely diagnosis?",
      answers: [
        { text: "Neuroleptic malignant syndrome", isCorrect: true },
        { text: "Serotonin syndrome" },
        { text: "Extrapyramidal symptoms" },
        { text: "Tardive dyskinesia" },
        { text: "Anticholinergic toxicity" },
      ],
      Explanation:
        "Neuroleptic malignant syndrome is a serious side effect of antipsychotics, characterized by muscle rigidity, fever, and autonomic instability.",
    },
    {
      question:
        "In treating status epilepticus, which medication is preferred for initial management?",
      answers: [
        { text: "Phenytoin" },
        { text: "Carbamazepine" },
        { text: "Diazepam", isCorrect: true },
        { text: "Gabapentin" },
        { text: "Levetiracetam" },
      ],
      Explanation:
        "Diazepam is commonly used for the initial management of status epilepticus due to its rapid onset of action.",
    },
    {
      question:
        "A patient on haloperidol therapy develops restlessness and an inability to sit still. Which side effect is this indicative of?",
      answers: [
        { text: "Akathisia", isCorrect: true },
        { text: "Parkinsonism" },
        { text: "Dystonia" },
        { text: "Neuroleptic malignant syndrome" },
        { text: "Tardive dyskinesia" },
      ],
      Explanation:
        "Akathisia, a state of restlessness and inability to stay still, is a common side effect of haloperidol and other antipsychotics.",
    },
    {
      question:
        "For a patient with a history of seizures, which of the following antidepressants should be used with caution?",
      answers: [
        { text: "Sertraline" },
        { text: "Bupropion", isCorrect: true },
        { text: "Citalopram" },
        { text: "Mirtazapine" },
        { text: "Venlafaxine" },
      ],
      Explanation:
        "Bupropion has a lower seizure threshold compared to other antidepressants and should be used with caution in patients with a history of seizures.",
    },
    {
      question:
        "Which drug interaction should be monitored when a patient is co-prescribed citalopram and omeprazole?",
      answers: [
        { text: "Reduced efficacy of citalopram" },
        { text: "Increased risk of QT prolongation", isCorrect: true },
        { text: "Decreased absorption of omeprazole" },
        { text: "Enhanced sedative effect" },
        { text: "Reduced effectiveness of both drugs" },
      ],
      Explanation:
        "The combination of citalopram and omeprazole can increase the risk of QT prolongation, requiring careful monitoring.",
    },
    {
      question:
        "A patient taking amitriptyline for neuropathic pain shows signs of confusion and hallucinations. What is the likely cause?",
      answers: [
        { text: "Serotonergic syndrome" },
        { text: "Anticholinergic toxicity", isCorrect: true },
        { text: "Histamine receptor antagonism" },
        { text: "Sodium channel blockade" },
        { text: "Norepinephrine reuptake inhibition" },
      ],
      Explanation:
        "Amitriptyline can cause anticholinergic toxicity, especially in the elderly, leading to confusion and hallucinations.",
    },
    {
      question:
        "What is the mechanism of action of memantine used in Alzheimer's disease?",
      answers: [
        { text: "Cholinesterase inhibition" },
        { text: "NMDA receptor antagonism", isCorrect: true },
        { text: "Serotonin-norepinephrine reuptake inhibition" },
        { text: "GABA receptor modulation" },
        { text: "Beta-amyloid clearance enhancement" },
      ],
      Explanation:
        "Memantine works by antagonizing NMDA receptors, which modulates the effects of glutamate in the brain, involved in Alzheimer's disease.",
    },
    {
      question:
        "A patient on valproate for bipolar disorder is found to have elevated liver enzymes. What is the recommended action?",
      answers: [
        { text: "Discontinue valproate immediately", isCorrect: true },
        { text: "Monitor liver enzymes closely" },
        { text: "Switch to lithium" },
        { text: "Add liver protectants" },
        { text: "Reduce valproate dosage" },
      ],
      Explanation:
        "Elevated liver enzymes can indicate hepatotoxicity, a serious side effect of valproate, warranting its discontinuation.",
    },
    {
      question:
        "A patient on escitalopram for anxiety reports persistent headaches. Which action should be taken?",
      answers: [
        { text: "Switch to a different SSRI" },
        { text: "Add a pain reliever" },
        { text: "Monitor and reassess after a few weeks", isCorrect: true },
        { text: "Discontinue escitalopram" },
        { text: "Switch to a benzodiazepine" },
      ],
      Explanation:
        "Headaches are a common initial side effect of SSRIs that often resolve with time. Monitoring and reassessment are advised.",
    },
    {
      question:
        "Which medication increases the risk of serotonin syndrome when combined with SSRIs?",
      answers: [
        { text: "Paracetamol" },
        { text: "Warfarin" },
        { text: "St. John's Wort", isCorrect: true },
        { text: "Amlodipine" },
        { text: "Atorvastatin" },
      ],
      Explanation:
        "St. John's Wort can increase serotonin levels, risking serotonin syndrome when combined with SSRIs.",
    },
    {
      question:
        "In managing ADHD, what is the primary action of methylphenidate?",
      answers: [
        { text: "Dopamine receptor agonism" },
        { text: "Norepinephrine reuptake inhibition", isCorrect: true },
        { text: "Monoamine oxidase inhibition" },
        { text: "Enhancement of GABAergic transmission" },
        { text: "Blockade of serotonin reuptake" },
      ],
      Explanation:
        "Methylphenidate primarily inhibits the reuptake of norepinephrine, improving attention and focus in ADHD.",
    },
    {
      question:
        "A patient on phenytoin for seizure control has a concurrent infection treated with ciprofloxacin. What concern arises from this combination?",
      answers: [
        { text: "Increased risk of seizures" },
        { text: "Reduced efficacy of phenytoin" },
        { text: "Phenytoin toxicity", isCorrect: true },
        { text: "Reduced effectiveness of ciprofloxacin" },
        { text: "Hepatotoxicity" },
      ],
      Explanation:
        "Ciprofloxacin can inhibit the metabolism of phenytoin, leading to increased levels and potential toxicity.",
    },
    {
      question:
        "A 60-year-old patient on alprazolam for anxiety wants to discontinue the medication. What is the best approach?",
      answers: [
        { text: "Immediate cessation" },
        { text: "Replace with an SSRI" },
        { text: "Gradual tapering", isCorrect: true },
        { text: "Switch to a long-acting benzodiazepine" },
        { text: "Increase the dose before stopping" },
      ],
      Explanation:
        "Gradual tapering of alprazolam is recommended to avoid withdrawal symptoms.",
    },
    {
      question:
        "For a patient with acute manic episodes in bipolar disorder, which medication is most appropriate?",
      answers: [
        { text: "Fluoxetine" },
        { text: "Risperidone", isCorrect: true },
        { text: "Diazepam" },
        { text: "Levothyroxine" },
        { text: "Paracetamol" },
      ],
      Explanation:
        "Risperidone is effective in managing acute mania in bipolar disorder.",
    },
    {
      question:
        "For a patient on clozapine, what blood test is mandatory due to the risk of a serious side effect?",
      answers: [
        { text: "Liver function tests" },
        { text: "Renal function tests" },
        { text: "Thyroid function tests" },
        { text: "Complete blood count", isCorrect: true },
        { text: "Lipid profile" },
      ],
      Explanation:
        "Regular complete blood count is required for patients on clozapine due to the risk of agranulocytosis.",
    },
    {
      question:
        "What is a potential adverse effect of chronic use of opioid analgesics like morphine?",
      answers: [
        { text: "Hypertension" },
        { text: "Constipation", isCorrect: true },
        { text: "Hyponatremia" },
        { text: "Hyperglycemia" },
        { text: "Hypothyroidism" },
      ],
      Explanation:
        "Constipation is a common and persistent side effect of chronic opioid use.",
    },
    {
      question:
        "A patient on gabapentin for neuropathic pain reports swelling in the legs. What is the most likely cause?",
      answers: [
        { text: "Venous thromboembolism" },
        { text: "Lymphedema" },
        { text: "Peripheral edema", isCorrect: true },
        { text: "Cellulitis" },
        { text: "Deep vein thrombosis" },
      ],
      Explanation:
        "Peripheral edema is a known side effect of gabapentin and should be monitored.",
    },
    {
      question:
        "A patient on SSRIs for depression develops restlessness, confusion, and rapid heart rate. Which condition should be suspected?",
      answers: [
        { text: "Neuroleptic malignant syndrome" },
        { text: "Anticholinergic toxicity" },
        { text: "Serotonin syndrome", isCorrect: true },
        { text: "Extrapyramidal symptoms" },
        { text: "Tardive dyskinesia" },
      ],
      Explanation:
        "These symptoms are indicative of serotonin syndrome, a potentially life-threatening condition caused by excess serotonin activity.",
    },
    {
      question:
        "Which antipsychotic is known for its lower risk of extrapyramidal side effects?",
      answers: [
        { text: "Haloperidol" },
        { text: "Chlorpromazine" },
        { text: "Risperidone" },
        { text: "Olanzapine", isCorrect: true },
        { text: "Clozapine" },
      ],
      Explanation:
        "Olanzapine, an atypical antipsychotic, has a lower risk of extrapyramidal side effects compared to typical antipsychotics.",
    },
    {
      question:
        "In a patient with anxiety, which benzodiazepine characteristic is important for reducing the risk of dependence?",
      answers: [
        { text: "High potency" },
        { text: "Rapid onset of action" },
        { text: "Short half-life" },
        { text: "Long half-life", isCorrect: true },
        { text: "Lipid solubility" },
      ],
      Explanation:
        "A long half-life in benzodiazepines reduces the risk of dependence and withdrawal symptoms, making it a preferable characteristic in managing anxiety.",
    },
    {
      question:
        "In a patient with Alzheimer's, what is a potential side effect of using acetylcholinesterase inhibitors like donepezil?",
      answers: [
        { text: "Hypertension" },
        { text: "Insomnia" },
        { text: "Bradycardia", isCorrect: true },
        { text: "Weight gain" },
        { text: "Hyperglycemia" },
      ],
      Explanation:
        "Bradycardia can occur with acetylcholinesterase inhibitors due to increased vagal tone.",
    },
    {
      question:
        "A patient on methadone for opioid dependence presents with prolonged QT interval. What action should be taken?",
      answers: [
        { text: "Increase methadone dose" },
        { text: "Monitor cardiac function closely", isCorrect: true },
        { text: "Switch to a different opioid" },
        { text: "Add a beta-blocker" },
        { text: "Discontinue methadone" },
      ],
      Explanation:
        "Monitoring cardiac function closely is important as methadone can prolong the QT interval.",
    },
    {
      question:
        "Which antidepressant is associated with a high risk of weight gain?",
      answers: [
        { text: "Fluoxetine" },
        { text: "Sertraline" },
        { text: "Venlafaxine" },
        { text: "Mirtazapine", isCorrect: true },
        { text: "Escitalopram" },
      ],
      Explanation:
        "Mirtazapine is known to cause significant weight gain compared to other antidepressants.",
    },
    {
      question:
        "What is the primary action of modafinil in treating narcolepsy?",
      answers: [
        { text: "Dopamine reuptake inhibition", isCorrect: true },
        { text: "Serotonin receptor antagonism" },
        { text: "GABA receptor modulation" },
        { text: "Histamine receptor agonism" },
        { text: "Norepinephrine reuptake inhibition" },
      ],
      Explanation:
        "Modafinil primarily acts by inhibiting dopamine reuptake, promoting wakefulness in narcolepsy.",
    },
    {
      question:
        "A patient on antipsychotic therapy develops high fever and altered mental status. What is the first step in management?",
      answers: [
        { text: "Administer antipyretics" },
        { text: "Increase hydration" },
        { text: "Discontinue the antipsychotic", isCorrect: true },
        { text: "Start antibiotic therapy" },
        { text: "Provide symptomatic treatment" },
      ],
      Explanation:
        "Discontinuing the antipsychotic is crucial in managing neuroleptic malignant syndrome, a serious side effect.",
    },
    {
      question:
        "For a patient with chronic pain on high-dose opioids, what is an important consideration to prevent opioid-induced hyperalgesia?",
      answers: [
        { text: "Rotate opioids", isCorrect: true },
        { text: "Increase opioid dose" },
        { text: "Add a non-opioid analgesic" },
        { text: "Start a benzodiazepine" },
        { text: "Initiate nerve block therapy" },
      ],
      Explanation:
        "Rotating opioids can help manage opioid-induced hyperalgesia, a condition where high opioid doses paradoxically increase pain sensitivity.",
    },
    {
      question:
        "In a patient with depression, what is a common side effect of trazodone?",
      answers: [
        { text: "Insomnia" },
        { text: "Hypertension" },
        { text: "Sedation", isCorrect: true },
        { text: "Weight loss" },
        { text: "Tachycardia" },
      ],
      Explanation:
        "Sedation is a common side effect of trazodone due to its sedative properties.",
    },
    {
      question:
        "What is the mechanism of action of baclofen in muscle spasticity?",
      answers: [
        { text: "Calcium channel blockade" },
        { text: "Dopamine receptor agonism" },
        { text: "GABA-B receptor agonism", isCorrect: true },
        { text: "NMDA receptor antagonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Baclofen acts as a GABA-B receptor agonist, reducing muscle spasticity.",
    },
    {
      question:
        "In treating acute migraine, what is the primary action of triptans like sumatriptan?",
      answers: [
        { text: "Beta-adrenergic agonism" },
        { text: "Calcium channel blockade" },
        { text: "Serotonin (5-HT1) receptor agonism", isCorrect: true },
        { text: "Dopamine receptor antagonism" },
        { text: "GABA receptor modulation" },
      ],
      Explanation:
        "Triptans act as serotonin (5-HT1) receptor agonists, leading to vasoconstriction and relief from migraine.",
    },
    {
      question: "Which symptom is indicative of lithium toxicity?",
      answers: [
        { text: "Hypertension" },
        { text: "Tachycardia" },
        { text: "Tremors", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Hyperthermia" },
      ],
      Explanation:
        "Tremors are a common sign of lithium toxicity, along with other symptoms like nausea, diarrhea, and ataxia.",
    },
    {
      question: "What is the risk of combining SSRIs with NSAIDs?",
      answers: [
        { text: "Increased risk of hypertension" },
        { text: "Reduced antidepressant efficacy" },
        {
          text: "Increased risk of gastrointestinal bleeding",
          isCorrect: true,
        },
        { text: "Decreased pain relief" },
        { text: "Enhanced sedation" },
      ],
      Explanation:
        "The combination of SSRIs and NSAIDs increases the risk of gastrointestinal bleeding.",
    },
    {
      question:
        "For a patient on clozapine, what is a common metabolic side effect?",
      answers: [
        { text: "Hyperglycemia" },
        { text: "Hypothyroidism" },
        { text: "Hypocalcemia" },
        { text: "Hyponatremia" },
        { text: "Hypokalemia", isCorrect: true },
      ],
      Explanation:
        "Clozapine is associated with metabolic side effects, including hyperglycemia and weight gain.",
    },
    {
      question:
        "A patient on carbamazepine for trigeminal neuralgia develops a skin rash. What is the immediate action?",
      answers: [
        { text: "Administer antihistamines" },
        { text: "Increase carbamazepine dose" },
        { text: "Discontinue carbamazepine", isCorrect: true },
        { text: "Start corticosteroid therapy" },
        { text: "Apply topical ointments" },
      ],
      Explanation:
        "Discontinuing carbamazepine is important if a skin rash develops, as it can be a sign of a serious reaction.",
    },
    {
      question:
        "Which antiepileptic drug requires regular monitoring of serum levels to ensure therapeutic efficacy and avoid toxicity?",
      answers: [
        { text: "Gabapentin" },
        { text: "Levetiracetam" },
        { text: "Valproate" },
        { text: "Topiramate" },
        { text: "Phenytoin", isCorrect: true },
      ],
      Explanation:
        "Regular monitoring of serum levels is essential for phenytoin due to its narrow therapeutic index and variable pharmacokinetics.",
    },
    {
      question:
        "A patient with bipolar disorder on lamotrigine therapy presents with a skin rash. What is the recommended action?",
      answers: [
        { text: "Continue lamotrigine with close monitoring" },
        { text: "Discontinue lamotrigine immediately", isCorrect: true },
        { text: "Add an antihistamine" },
        { text: "Perform a skin biopsy" },
        { text: "Start corticosteroid therapy" },
      ],
      Explanation:
        "Discontinuing lamotrigine is crucial if a skin rash develops, as it can be a sign of serious adverse reactions like Stevens-Johnson syndrome.",
    },
    {
      question:
        "What is a common side effect of the anticholinergic drug benztropine used in Parkinson's disease?",
      answers: [
        { text: "Dry mouth", isCorrect: true },
        { text: "Diarrhea" },
        { text: "Hypertension" },
        { text: "Insomnia" },
        { text: "Weight loss" },
      ],
      Explanation:
        "Dry mouth is a common side effect of benztropine due to its anticholinergic properties.",
    },
    {
      question:
        "In an elderly patient with dementia, what is a concern when prescribing antipsychotics for agitation?",
      answers: [
        { text: "Increased risk of falls" },
        { text: "Reduced cognitive function" },
        { text: "Increased risk of stroke" },
        { text: "All of the above", isCorrect: true },
        { text: "None of the above" },
      ],
      Explanation:
        "Antipsychotics in elderly dementia patients are associated with increased risks of falls, reduced cognitive function, and stroke.",
    },
    {
      question:
        "Which side effect is commonly associated with the use of SSRIs like fluoxetine in the elderly?",
      answers: [
        { text: "Hypertension" },
        { text: "Urinary retention" },
        { text: "Hyponatremia", isCorrect: true },
        { text: "Tachycardia" },
        { text: "Hyperthermia" },
      ],
      Explanation:
        "Hyponatremia is a notable side effect in the elderly using SSRIs due to SIADH (Syndrome of Inappropriate Antidiuretic Hormone Secretion).",
    },
    {
      question:
        "A patient with depression is prescribed venlafaxin What is an important consideration regarding blood pressure?",
      answers: [
        { text: "Hypotension" },
        { text: "Orthostatic hypotension" },
        { text: "Hypertension", isCorrect: true },
        { text: "Bradycardia" },
        { text: "Tachycardia" },
      ],
      Explanation:
        "Venlafaxine, especially at higher doses, can cause hypertension and requires monitoring of blood pressure.",
    },
    {
      question:
        "What is a major side effect of atypical antipsychotics like olanzapine in terms of metabolic health?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hyperlipidemia", isCorrect: true },
        { text: "Hypothyroidism" },
        { text: "Hyponatremia" },
        { text: "Hypokalemia" },
      ],
      Explanation:
        "Atypical antipsychotics like olanzapine can cause metabolic side effects such as hyperlipidemia and weight gain.",
    },
    {
      question:
        "A patient on long-term corticosteroid therapy for multiple sclerosis experiences bone pain. What is a likely cause?",
      answers: [
        { text: "Osteoarthritis" },
        { text: "Osteoporosis", isCorrect: true },
        { text: "Bone metastases" },
        { text: "Vitamin D deficiency" },
        { text: "Hypercalcemia" },
      ],
      Explanation:
        "Long-term corticosteroid use can lead to osteoporosis, increasing the risk of bone pain and fractures.",
    },
    {
      question:
        "What is the primary mechanism of action of topiramate used in migraine prophylaxis?",
      answers: [
        { text: "Serotonin receptor agonism" },
        { text: "Calcium channel modulation" },
        { text: "GABA receptor modulation", isCorrect: true },
        { text: "Dopamine receptor antagonism" },
        { text: "Histamine receptor antagonism" },
      ],
      Explanation:
        "Topiramate modulates GABA receptors and blocks calcium channels, contributing to its efficacy in migraine prophylaxis.",
    },
    {
      question:
        "A patient on lithium therapy for bipolar disorder presents with tremors and slurred speech. What should be the immediate action?",
      answers: [
        { text: "Increase lithium dose" },
        { text: "Check lithium serum levels", isCorrect: true },
        { text: "Start an antipsychotic" },
        { text: "Increase fluid intake" },
        { text: "Prescribe a beta-blocker" },
      ],
      Explanation:
        "Checking lithium serum levels is crucial as tremors and slurred speech can be signs of lithium toxicity.",
    },
    {
      question:
        "For a patient with Parkinson's disease, what is a common side effect of dopamine agonists like pramipexole?",
      answers: [
        { text: "Urinary retention" },
        { text: "Orthostatic hypotension", isCorrect: true },
        { text: "Hypertension" },
        { text: "Tachycardia" },
        { text: "Hyperglycemia" },
      ],
      Explanation:
        "Orthostatic hypotension is a common side effect of dopamine agonists used in Parkinson's disease.",
    },
    {
      question:
        "What is a significant concern when using clozapine in the treatment of schizophrenia?",
      answers: [
        { text: "Agranulocytosis", isCorrect: true },
        { text: "Hepatotoxicity" },
        { text: "Nephrotoxicity" },
        { text: "Pulmonary fibrosis" },
        { text: "Cardiomyopathy" },
      ],
      Explanation:
        "Agranulocytosis, a potentially life-threatening decrease in white blood cells, is a significant risk associated with clozapine.",
    },
    {
      question:
        "In a patient with epilepsy, what is the main concern with the use of enzyme-inducing antiepileptics like carbamazepine during pregnancy?",
      answers: [
        { text: "Teratogenicity", isCorrect: true },
        { text: "Decreased efficacy of the drug" },
        { text: "Hypertensive crisis" },
        { text: "Hyperglycemia" },
        { text: "Thyroid dysfunction" },
      ],
      Explanation:
        "Enzyme-inducing antiepileptics like carbamazepine have teratogenic risks and require careful management during pregnancy.",
    },
    {
      question:
        "In managing a patient with generalized anxiety disorder, which type of medication is preferred for long-term treatment?",
      answers: [
        { text: "SSRIs", isCorrect: true },
        { text: "Benzodiazepines" },
        { text: "Antipsychotics" },
        { text: "Opioids" },
        { text: "Beta-blockers" },
      ],
      Explanation:
        "SSRIs are preferred for long-term management of generalized anxiety disorder due to their safety profile and lower risk of dependence.",
    },
    {
      question:
        "What is the mechanism of action of buspirone used in anxiety disorders?",
      answers: [
        { text: "GABA receptor modulation" },
        { text: "Serotonin receptor agonism", isCorrect: true },
        { text: "Dopamine receptor antagonism" },
        { text: "NMDA receptor antagonism" },
        { text: "Histamine receptor antagonism" },
      ],
      Explanation:
        "Buspirone primarily acts as a serotonin receptor agonist, which helps in reducing anxiety.",
    },
    {
      question:
        "A patient with schizophrenia is prescribed aripiprazol What is a key benefit of this medication over older antipsychotics?",
      answers: [
        { text: "Lower risk of extrapyramidal side effects", isCorrect: true },
        { text: "Absence of sedation" },
        { text: "No risk of weight gain" },
        { text: "No effect on prolactin levels" },
        { text: "Complete absence of side effects" },
      ],
      Explanation:
        "Aripiprazole has a lower risk of extrapyramidal side effects compared to older antipsychotics.",
    },
    {
      question:
        "Which medication used in Alzheimer's disease can cause vivid dreams or insomnia?",
      answers: [
        { text: "Donepezil", isCorrect: true },
        { text: "Memantine" },
        { text: "Rivastigmine" },
        { text: "Galantamine" },
        { text: "Tacrine" },
      ],
      Explanation:
        "Donepezil, an acetylcholinesterase inhibitor, can cause vivid dreams or insomnia as a side effect.",
    },
    {
      question:
        "In bipolar disorder, what is a common side effect of valproate?",
      answers: [
        { text: "Weight loss" },
        { text: "Insomnia" },
        { text: "Hair loss", isCorrect: true },
        { text: "Increased appetite" },
        { text: "Hypertension" },
      ],
      Explanation:
        "Hair loss is a common side effect of valproate, along with other effects like weight gain and tremors.",
    },
    {
      question:
        "What is a risk associated with the abrupt discontinuation of antiepileptic drugs?",
      answers: [
        { text: "Hypertension" },
        { text: "Rebound seizures", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Weight gain" },
        { text: "Bradycardia" },
      ],
      Explanation:
        "Abrupt discontinuation of antiepileptic drugs can lead to rebound seizures, which can be more severe.",
    },
    {
      question:
        "In treating a patient with epilepsy, what is a concern with the use of lamotrigine during pregnancy?",
      answers: [
        { text: "Increased risk of cleft lip", isCorrect: true },
        { text: "Decreased drug efficacy" },
        { text: "Hypertensive crisis" },
        { text: "Hyperglycemia" },
        { text: "Thyroid dysfunction" },
      ],
      Explanation:
        "Lamotrigine use during pregnancy is associated with an increased risk of cleft lip and palate in the newborn.",
    },
    {
      question:
        "A patient on risperidone for schizophrenia experiences breast enlargement and lactation. What is this condition known as?",
      answers: [
        { text: "Galactorrhea" },
        { text: "Gynecomastia" },
        { text: "Hyperprolactinemia", isCorrect: true },
        { text: "Hypothyroidism" },
        { text: "Adrenal insufficiency" },
      ],
      Explanation:
        "Hyperprolactinemia, an increase in prolactin levels often caused by risperidone, can lead to breast enlargement and lactation.",
    },
    {
      question:
        "Which medication is preferred for the acute treatment of a migraine headache?",
      answers: [
        { text: "Amitriptyline" },
        { text: "Sumatriptan", isCorrect: true },
        { text: "Topiramate" },
        { text: "Ibuprofen" },
        { text: "Paracetamol" },
      ],
      Explanation:
        "Sumatriptan is a first-line medication for the acute treatment of migraine headaches due to its efficacy in relieving symptoms.",
    },
    {
      question:
        "A 68-year-old man with Alzheimer's is prescribed donepezil. He later presents with bradycardi What is the likely cause?",
      answers: [
        { text: "Cardiac disease" },
        { text: "Donepezil's cholinergic effects", isCorrect: true },
        { text: "Dehydration" },
        { text: "Electrolyte imbalance" },
        { text: "Hypothyroidism" },
      ],
      Explanation:
        "Bradycardia in this patient is likely due to the cholinergic effects of donepezil, which can slow heart rate.",
    },
    {
      question:
        "A 50-year-old man with chronic back pain is prescribed oxycodon He later develops constipation. What is the best management approach?",
      answers: [
        { text: "Increase oxycodone dose" },
        { text: "Start a stimulant laxative", isCorrect: true },
        { text: "Discontinue oxycodone" },
        { text: "Switch to a non-opioid analgesic" },
        { text: "Increase fluid and fiber intake" },
      ],
      Explanation:
        "Constipation is a common side effect of oxycodon Starting a stimulant laxative can help manage this issue.",
    },
    {
      question:
        "A 72-year-old man with Parkinson's disease starts taking levodopa and later experiences nause What is the likely cause?",
      answers: [
        {
          text: "Levodopa's effect on the gastrointestinal tract",
          isCorrect: true,
        },
        { text: "An unrelated gastrointestinal issue" },
        { text: "Dehydration" },
        { text: "Dietary changes" },
        { text: "Progression of Parkinson's disease" },
      ],
      Explanation:
        "Nausea is a common side effect of levodopa, as it can stimulate the chemoreceptor trigger zone in the brain.",
    },
    {
      question:
        "A 28-year-old woman with epilepsy on valproate plans to conceiv What is an important consideration?",
      answers: [
        { text: "Switch to a safer antiepileptic" },
        { text: "Increase valproate dose" },
        { text: "Monitor valproate serum levels" },
        {
          text: "Counsel on the risk of congenital malformations",
          isCorrect: true,
        },
        { text: "Start folic acid supplementation" },
      ],
      Explanation:
        "Valproate poses risks of congenital malformations. The patient should be counseled on these risks and possibly switched to a safer antiepileptic.",
    },
    {
      question:
        "A 60-year-old man on risperidone for schizophrenia experiences restlessness and an urge to move constantly. What is this condition?",
      answers: [
        { text: "Akathisia", isCorrect: true },
        { text: "Parkinsonism" },
        { text: "Tardive dyskinesia" },
        { text: "Neuroleptic malignant syndrome" },
        { text: "Dystonia" },
      ],
      Explanation:
        "This patient is likely experiencing akathisia, a common side effect of antipsychotics like risperidone, characterized by restlessness.",
    },
    {
      question:
        "A 22-year-old woman with migraines is prescribed sumatriptan. She has a history of Raynaud's phenomenon. What is a concern?",
      answers: [
        { text: "Increased migraine frequency" },
        { text: "Sumatriptan worsening Raynaud's", isCorrect: true },
        { text: "Allergic reaction to sumatriptan" },
        { text: "Interaction with her current medications" },
        { text: "Inducing a migraine aura" },
      ],
      Explanation:
        "Sumatriptan, a vasoconstrictor, can exacerbate conditions like Raynaud's phenomenon, which involves reduced blood flow to extremities.",
    },
    {
      question:
        "A 55-year-old man with depression and alcohol dependence starts bupropion. What is a significant risk?",
      answers: [
        { text: "Increased depressive symptoms" },
        { text: "Seizures", isCorrect: true },
        { text: "Hypertension" },
        { text: "Weight gain" },
        { text: "Insomnia" },
      ],
      Explanation:
        "Bupropion lowers the seizure threshold and can be risky, especially in individuals with alcohol dependence.",
    },
    {
      question:
        "A 45-year-old woman on clozapine for treatment-resistant schizophrenia presents with fever and sore throat. What is the immediate action?",
      answers: [
        { text: "Prescribe antibiotics" },
        { text: "Check white blood cell count", isCorrect: true },
        { text: "Start antipyretic treatment" },
        { text: "Increase clozapine dose" },
        { text: "Counsel on hydration" },
      ],
      Explanation:
        "Fever and sore throat in a patient on clozapine could indicate agranulocytosis. Checking the white blood cell count is essential.",
    },
    {
      question:
        "A 70-year-old woman with a history of stroke is prescribed amitriptyline for neuropathic pain. She later reports dry mouth and blurred vision. What is the likely cause?",
      answers: [
        { text: "Stroke-related symptoms" },
        { text: "Amitriptyline's anticholinergic effects", isCorrect: true },
        { text: "Age-related changes" },
        { text: "Dehydration" },
        { text: "A new neurological condition" },
      ],
      Explanation:
        "Dry mouth and blurred vision are typical anticholinergic side effects of amitriptyline.",
    },
    {
      question:
        "A 25-year-old woman with generalized anxiety disorder is treated with buspiron She reports minimal relief after 2 weeks. What is an appropriate action?",
      answers: [
        { text: "Increase buspirone dose" },
        { text: "Add a benzodiazepine" },
        { text: "Switch to an SSRI" },
        {
          text: "Continue current dose and reassess in a few weeks",
          isCorrect: true,
        },
        { text: "Start cognitive behavioral therapy" },
      ],
      Explanation:
        "It may take several weeks for the full effect of buspiron Continuing the current dose and reassessment is appropriate.",
    },
    {
      question:
        "A 65-year-old man with chronic pain is on high-dose opioids and reports increased sensitivity to pain. What could this indicate?",
      answers: [
        { text: "Opioid-induced hyperalgesia", isCorrect: true },
        { text: "Progression of the underlying disease" },
        { text: "Tolerance to opioids" },
        { text: "Need for a higher opioid dose" },
        { text: "A psychosomatic response" },
      ],
      Explanation:
        "Increased pain sensitivity in this context suggests opioid-induced hyperalgesia, a paradoxical response to long-term opioid use.",
    },
    {
      question:
        "A 33-year-old woman with schizophrenia on aripiprazole presents with involuntary facial movements. What is the most likely diagnosis?",
      answers: [
        { text: "Tardive dyskinesia", isCorrect: true },
        { text: "Akathisia" },
        { text: "Parkinsonism" },
        { text: "Dystonia" },
        { text: "Neuroleptic malignant syndrome" },
      ],
      Explanation:
        "Involuntary facial movements in a patient on antipsychotics like aripiprazole suggest tardive dyskinesia.",
    },
    {
      question:
        "A 58-year-old woman on topiramate for migraine prophylaxis reports tingling in her hands and feet. What does this indicate?",
      answers: [
        { text: "Peripheral neuropathy" },
        { text: "Topiramate side effect", isCorrect: true },
        { text: "Raynaud's phenomenon" },
        { text: "Diabetic neuropathy" },
        { text: "Vitamin B12 deficiency" },
      ],
      Explanation:
        "Tingling in extremities is a known side effect of topiramate due to its effects on nerve conduction.",
    },
    {
      question:
        "A 58-year-old man with Parkinson's disease on selegiline presents with a severe headache after consuming aged chees What is the most likely cause?",
      answers: [
        { text: "Tyramine reaction" },
        { text: "Selegiline overdose" },
        { text: "Migraine" },
        { text: "Hypertensive crisis", isCorrect: true },
        { text: "Cerebral hemorrhage" },
      ],
      Explanation:
        "Tyramine in aged cheese can cause a hypertensive crisis in patients taking MAO-B inhibitors like selegiline.",
    },
    {
      question:
        "A patient on long-term lithium therapy for bipolar disorder develops polyuria and polydipsi What is the underlying mechanism?",
      answers: [
        { text: "Diabetes insipidus" },
        {
          text: "Lithium-induced nephrogenic diabetes insipidus",
          isCorrect: true,
        },
        { text: "Lithium-induced hyperthyroidism" },
        { text: "Diabetic ketoacidosis" },
        { text: "Chronic kidney disease" },
      ],
      Explanation:
        "Lithium can cause nephrogenic diabetes insipidus, leading to polyuria (excessive urination) and polydipsia (excessive thirst).",
    },
    {
      question:
        "A 50-year-old woman with migraine headaches starts topiramate and experiences cognitive dulling. What pharmacological property of topiramate is likely responsible?",
      answers: [
        { text: "Carbonic anhydrase inhibition", isCorrect: true },
        { text: "GABA receptor modulation" },
        { text: "NMDA receptor antagonism" },
        { text: "Sodium channel blocking" },
        { text: "Calcium channel modulation" },
      ],
      Explanation:
        "Carbonic anhydrase inhibition by topiramate can lead to cognitive side effects like dulling of mental alertness.",
    },
    {
      question:
        "A 40-year-old man with ADHD taking atomoxetine reports erectile dysfunction. What is the likely pharmacodynamic explanation?",
      answers: [
        { text: "Norepinephrine reuptake inhibition", isCorrect: true },
        { text: "Dopamine reuptake inhibition" },
        { text: "Serotonin-norepinephrine reuptake inhibition" },
        { text: "Alpha-1 adrenergic antagonism" },
        { text: "GABAergic modulation" },
      ],
      Explanation:
        "Atomoxetine's mechanism as a norepinephrine reuptake inhibitor can impact erectile function due to its effects on the sympathetic nervous system.",
    },
    {
      question:
        "A patient on warfarin and newly prescribed carbamazepine for trigeminal neuralgia shows a reduced INR. What is the probable interaction?",
      answers: [
        {
          text: "Carbamazepine induction of warfarin metabolism",
          isCorrect: true,
        },
        { text: "Carbamazepine inhibition of warfarin metabolism" },
        { text: "Displacement of warfarin from plasma proteins" },
        { text: "Reduced absorption of warfarin" },
        { text: "Enhanced anticoagulant effect of warfarin" },
      ],
      Explanation:
        "Carbamazepine induces CYP450 enzymes, leading to increased metabolism of warfarin, thus reducing its anticoagulant effect (lowering INR).",
    },
    {
      question:
        "A 55-year-old man with chronic neuropathic pain is prescribed pregabalin. He has a history of congestive heart failur What is a key concern with pregabalin in this patient?",
      answers: [
        {
          text: "Worsening of heart failure due to fluid retention",
          isCorrect: true,
        },
        { text: "Increased risk of neuropathy" },
        { text: "Potential for drug interactions" },
        { text: "Increased risk of renal failure" },
        { text: "Risk of respiratory depression" },
      ],
      Explanation:
        "Pregabalin can cause fluid retention, which might exacerbate congestive heart failur",
    },
    {
      question:
        "A patient with bipolar disorder treated with valproate shows elevated ammonia levels and altered mental status. What is the likely cause?",
      answers: [
        { text: "Valproate-induced hepatotoxicity" },
        {
          text: "Hyperammonemic encephalopathy due to valproate",
          isCorrect: true,
        },
        { text: "Valproate-induced thrombocytopenia" },
        { text: "Acute valproate overdose" },
        { text: "Valproate interaction with other medications" },
      ],
      Explanation:
        "Valproate can cause hyperammonemic encephalopathy, leading to elevated ammonia levels and altered mental status, independent of liver function.",
    },
    {
      question:
        "A 30-year-old woman on fluoxetine for major depressive disorder plans to conceiv What is a crucial consideration regarding fluoxetine?",
      answers: [
        { text: "Potential for teratogenic effects" },
        { text: "Risk of gestational diabetes" },
        { text: "Increased risk of postpartum depression" },
        { text: "Need for dose adjustment during pregnancy" },
        {
          text: "Likelihood of withdrawal symptoms in the newborn",
          isCorrect: true,
        },
      ],
      Explanation:
        "SSRIs like fluoxetine can lead to withdrawal symptoms in the newborn if used late in pregnancy.",
    },
    {
      question:
        "A patient on methadone maintenance therapy presents with QTc prolongation. What is the recommended management?",
      answers: [
        { text: "Discontinue methadone immediately" },
        { text: "Switch to buprenorphine", isCorrect: true },
        { text: "Reduce the methadone dose" },
        { text: "Monitor QTc closely without changing methadone" },
        { text: "Add a beta-blocker" },
      ],
      Explanation:
        "Switching to buprenorphine, which has a lower risk of QTc prolongation, is recommended in patients with significant QTc prolongation on methadon",
    },
    {
      question:
        "A 47-year-old man with treatment-resistant depression is prescribed ketamine infusion. What is a key short-term adverse effect to monitor?",
      answers: [
        { text: "Hypertension" },
        { text: "Respiratory depression" },
        { text: "Bladder dysfunction" },
        { text: "Cognitive impairment" },
        { text: "Dissociative symptoms", isCorrect: true },
      ],
      Explanation:
        "Dissociative symptoms are a known short-term adverse effect of ketamine infusion therapy for depression.",
    },
    {
      question:
        "A 65-year-old woman with Alzheimer's disease on memantine presents with dizziness and confusion. What is the likely pharmacological cause?",
      answers: [
        { text: "Memantine's NMDA receptor antagonism", isCorrect: true },
        { text: "Cholinergic deficit exacerbation" },
        { text: "Renal impairment affecting memantine clearance" },
        { text: "Drug interaction with other medications" },
        { text: "Progression of Alzheimer's disease" },
      ],
      Explanation:
        "Memantine's action as an NMDA receptor antagonist can cause CNS effects such as dizziness and confusion.",
    },
    {
      question:
        "A 34-year-old woman on lamotrigine for bipolar disorder develops a rash. What distinguishes a benign rash from one indicative of Stevens-Johnson Syndrome?",
      answers: [
        { text: "Presence of fever" },
        { text: "Rash spreading to mucosal surfaces", isCorrect: true },
        { text: "Rash color and texture" },
        { text: "Response to antihistamines" },
        { text: "Duration of the rash before onset" },
      ],
      Explanation:
        "In Stevens-Johnson Syndrome, the rash typically spreads to mucosal surfaces, distinguishing it from more benign rashes.",
    },
    {
      question:
        "A 40-year-old man with chronic migraine is prescribed a CGRP antagonist. What is a unique consideration in the use of this class of drugs?",
      answers: [
        { text: "Risk of hepatotoxicity" },
        { text: "Potential for medication overuse headache" },
        {
          text: "Development of antibodies reducing efficacy",
          isCorrect: true,
        },
        { text: "Interaction with migraine prophylactic medications" },
        { text: "Need for cardiovascular monitoring" },
      ],
      Explanation:
        "Development of antibodies against CGRP antagonists can reduce their efficacy over tim",
    },
    {
      question:
        "A patient on antipsychotics presents with high fever, muscle rigidity, and altered consciousness. What is the most likely diagnosis?",
      answers: [
        { text: "Tardive dyskinesia" },
        { text: "Serotonin syndrome" },
        { text: "Neuroleptic malignant syndrome", isCorrect: true },
        { text: "Anticholinergic toxicity" },
        { text: "Extrapyramidal symptoms" },
      ],
      Explanation:
        "These symptoms are indicative of neuroleptic malignant syndrome, a serious reaction to antipsychotics.",
    },
    {
      question:
        "A 56-year-old woman on escitalopram for anxiety develops hyponatremi What is the underlying mechanism?",
      answers: [
        { text: "SIADH induced by escitalopram", isCorrect: true },
        { text: "Direct renal effects of escitalopram" },
        { text: "Dehydration" },
        { text: "Escitalopram interaction with diuretics" },
        { text: "Adrenal insufficiency" },
      ],
      Explanation:
        "Escitalopram can induce SIADH (Syndrome of Inappropriate Antidiuretic Hormone Secretion), leading to hyponatremi",
    },
    {
      question:
        "A patient with epilepsy on multiple antiepileptics develops a rash, fever, and lymphadenopathy. What is the primary concern?",
      answers: [
        { text: "Allergic reaction" },
        { text: "Drug-induced lupus" },
        { text: "Stevens-Johnson Syndrome", isCorrect: true },
        { text: "DRESS syndrome" },
        { text: "Erythema multiforme" },
      ],
      Explanation:
        "The symptoms suggest DRESS syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms), a serious drug-induced condition.",
    },
    {
      question:
        "In a patient with major depression, which factor suggests a potential benefit from augmentation with lithium?",
      answers: [
        { text: "History of rapid cycling bipolar disorder" },
        {
          text: "Non-response to two different antidepressants",
          isCorrect: true,
        },
        { text: "Presence of psychotic features" },
        { text: "Elderly patient with late-onset depression" },
        { text: "History of substance abuse" },
      ],
      Explanation:
        "Non-response to two different antidepressants can indicate the potential benefit of augmentation therapy with lithium.",
    },
    {
      question:
        "In a patient with refractory epilepsy, what is a key consideration when using the ketogenic diet as an adjunctive treatment?",
      answers: [
        { text: "Risk of vitamin deficiencies", isCorrect: true },
        { text: "Potential for weight loss" },
        { text: "Possibility of worsening seizures" },
        { text: "Need for frequent blood glucose monitoring" },
        { text: "Interaction with antiepileptic drugs" },
      ],
      Explanation:
        "The ketogenic diet can cause vitamin deficiencies due to its restrictive nature, requiring close monitoring and supplementation.",
    },
    {
      question:
        "A patient with narcolepsy is prescribed sodium oxybat What is a critical safety concern with this medication?",
      answers: [
        { text: "Potential for abuse and misuse", isCorrect: true },
        { text: "Risk of severe allergic reactions" },
        { text: "Interaction with caffeine" },
        { text: "High risk of causing insomnia" },
        { text: "Sodium overload in patients with hypertension" },
      ],
      Explanation:
        "Sodium oxybate has a high potential for abuse and misuse due to its CNS depressant effects and is tightly regulate",
    },
    {
      question:
        'In a patient with Parkinson\'s disease experiencing "off" episodes, what is a consideration for the use of apomorphine?',
      answers: [
        { text: "Risk of severe dyskinesia" },
        { text: "Potential for on-off phenomenon exacerbation" },
        { text: "Risk of hypotension and nausea", isCorrect: true },
        { text: "Interaction with MAO-B inhibitors" },
        { text: "Apomorphine's effect on renal function" },
      ],
      Explanation:
        "Apomorphine can cause hypotension and nausea, especially at the initiation of therapy, requiring careful monitoring.",
    },
    {
      question:
        "A 30-year-old woman with migraines and a history of stroke is prescribed a triptan. What is a major contraindication for this prescription?",
      answers: [
        { text: "History of stroke", isCorrect: true },
        { text: "Presence of aura" },
        { text: "Chronic migraine" },
        { text: "Overuse of analgesics" },
        { text: "Age below 50" },
      ],
      Explanation:
        "Triptans are contraindicated in patients with a history of stroke due to their vasoconstrictive properties.",
    },
    {
      question:
        "A patient with schizophrenia on long-term olanzapine therapy shows elevated HbA1c levels. What is the most likely cause?",
      answers: [
        { text: "Olanzapine's effect on insulin sensitivity", isCorrect: true },
        { text: "Direct pancreatic beta-cell damage" },
        { text: "Increased appetite leading to weight gain" },
        { text: "Interaction with other antidiabetic medications" },
        { text: "Olanzapine-induced hypothyroidism" },
      ],
      Explanation:
        "Olanzapine can impair insulin sensitivity, leading to elevated HbA1c levels and increased risk of type 2 diabetes.",
    },
    {
      question:
        "In a patient with opioid use disorder, what is a consideration when prescribing methadone?",
      answers: [
        { text: "Risk of QTc prolongation", isCorrect: true },
        { text: "Potential for rapid tolerance development" },
        { text: "Interaction with benzodiazepines" },
        { text: "Methadone's effect on liver enzymes" },
        { text: "Need for daily supervised administration" },
      ],
      Explanation:
        "Methadone can prolong the QTc interval, which requires careful ECG monitoring, especially at higher doses or in patients with cardiac risk factors.",
    },
    {
      question:
        "A 50-year-old man with alcohol use disorder is prescribed disulfiram. What is a critical counseling point for this patient?",
      answers: [
        { text: "Avoidance of all forms of alcohol", isCorrect: true },
        { text: "Potential for depressive symptoms" },
        { text: "Risk of hepatotoxicity" },
        { text: "Need for regular liver function tests" },
        { text: "Interaction with antihypertensive medications" },
      ],
      Explanation:
        "Patients on disulfiram must be counseled to avoid all forms of alcohol due to the risk of a severe disulfiram-alcohol reaction.",
    },
    {
      question:
        "A patient with bipolar disorder experiences a manic episode while on lamotrigine monotherapy. What is the most appropriate pharmacological adjustment?",
      answers: [
        { text: "Increase lamotrigine dose" },
        { text: "Add lithium", isCorrect: true },
        { text: "Start an antipsychotic" },
        { text: "Initiate valproate therapy" },
        { text: "Switch to an SSRI" },
      ],
      Explanation:
        "Adding lithium or an antipsychotic is often necessary for managing acute manic episodes in bipolar disorder, as lamotrigine is more effective in preventing depressive episodes.",
    },
    {
      question:
        "In an elderly patient with glaucoma, which antidepressant should be prescribed with caution due to the risk of increasing intraocular pressure?",
      answers: [
        { text: "Sertraline" },
        { text: "Amitriptyline", isCorrect: true },
        { text: "Bupropion" },
        { text: "Fluoxetine" },
        { text: "Citalopram" },
      ],
      Explanation:
        "Amitriptyline, a tricyclic antidepressant, can increase intraocular pressure due to its anticholinergic effects and should be used with caution in glaucom",
    },
    {
      question:
        "A patient on quetiapine for schizophrenia presents with diabetic ketoacidosis (DK. What is the likely link between the medication and this condition?",
      answers: [
        {
          text: "Quetiapine-induced weight gain and insulin resistance",
          isCorrect: true,
        },
        { text: "Direct pancreatic beta-cell toxicity by quetiapine" },
        { text: "Quetiapine's interference with insulin signaling" },
        { text: "Increased appetite leading to poor glycemic control" },
        {
          text: "Genetic predisposition to diabetes exacerbated by quetiapine",
        },
      ],
      Explanation:
        "Quetiapine can cause weight gain and insulin resistance, increasing the risk of type 2 diabetes and potentially leading to DK",
    },
    {
      question:
        "A patient with epilepsy is prescribed phenytoin and develops gingival hyperplasi What is an appropriate management strategy?",
      answers: [
        { text: "Discontinue phenytoin immediately" },
        { text: "Reduce phenytoin dose" },
        {
          text: "Provide dental referral and maintain oral hygiene",
          isCorrect: true,
        },
        { text: "Switch to another antiepileptic drug" },
        { text: "Start a course of antibiotics" },
      ],
      Explanation:
        "Management of phenytoin-induced gingival hyperplasia includes dental referral, good oral hygiene, and potentially switching to another antiepileptic if sever",
    },
    {
      question:
        "A 55-year-old woman on a high dose of venlafaxine for severe depression presents with hypertension. What pharmacological property of venlafaxine is responsible?",
      answers: [
        {
          text: "Serotonin-norepinephrine reuptake inhibition",
          isCorrect: true,
        },
        { text: "Alpha-1 adrenergic antagonism" },
        { text: "Dopamine reuptake inhibition" },
        { text: "Direct vasopressor effect" },
        { text: "Inhibition of nitric oxide synthesis" },
      ],
      Explanation:
        "Venlafaxine, particularly at higher doses, can cause hypertension due to its serotonin-norepinephrine reuptake inhibition.",
    },
    {
      question:
        "A patient on long-term corticosteroid therapy for multiple sclerosis (MS) develops Cushing's syndrom What is the best approach to manage this iatrogenic condition?",
      answers: [
        { text: "Discontinue corticosteroids abruptly" },
        { text: "Switch to a different MS medication" },
        { text: "Gradually taper corticosteroid dose", isCorrect: true },
        { text: "Start metyrapone" },
        { text: "Initiate insulin therapy" },
      ],
      Explanation:
        "Gradually tapering the corticosteroid dose can help manage iatrogenic Cushing's syndrome while avoiding adrenal insufficiency.",
    },
    {
      question:
        "In a patient with a history of peptic ulcer disease, which antipsychotic medication requires caution due to its potential for gastrointestinal bleeding?",
      answers: [
        { text: "Clozapine", isCorrect: true },
        { text: "Risperidone" },
        { text: "Olanzapine" },
        { text: "Quetiapine" },
        { text: "Aripiprazole" },
      ],
      Explanation:
        "Clozapine can increase the risk of gastrointestinal bleeding, particularly in patients with a history of peptic ulcer diseas",
    },
    {
      question:
        "A 40-year-old woman with a history of migraine headaches is prescribed propranolol. She has asthm What is a major concern with propranolol in this patient?",
      answers: [
        { text: "Risk of exacerbating asthma", isCorrect: true },
        { text: "Potential for increased headache frequency" },
        { text: "Interaction with migraine medications" },
        { text: "Propranolol-induced hypotension" },
        { text: "Development of tolerance to propranolol" },
      ],
      Explanation:
        "Propranolol, a non-selective beta-blocker, can exacerbate asthma and should be used cautiously in patients with a history of respiratory issues.",
    },
    {
      question:
        "A patient with refractory partial seizures is started on levetiracetam. They have a history of psychiatric illness. What is a key adverse effect to monitor in this patient?",
      answers: [
        { text: "Behavioral changes, including aggression", isCorrect: true },
        { text: "Hypertension" },
        { text: "Renal impairment" },
        { text: "Hepatic dysfunction" },
        { text: "Thyroid abnormalities" },
      ],
      Explanation:
        "Levetiracetam can cause behavioral changes, including aggression and irritability, particularly in patients with a history of psychiatric illness.",
    },
    {
      question:
        "A 70-year-old patient with Alzheimer's disease is prescribed memantin They have a history of cardiac arrhythmias. What is a critical monitoring point for this medication?",
      answers: [
        {
          text: "Cardiac function due to potential QT prolongation",
          isCorrect: true,
        },
        { text: "Renal function for dose adjustment" },
        { text: "Liver enzymes for potential hepatotoxicity" },
        { text: "Blood pressure for potential hypotension" },
        { text: "Cognitive function for assessing efficacy" },
      ],
      Explanation:
        "Memantine can cause QT prolongation, which is of particular concern in patients with a history of cardiac arrhythmias.",
    },
    {
      question:
        "A patient with HIV and tuberculosis (T is being treated with rifampin and antiretrovirals. What is a major concern with this combination?",
      answers: [
        {
          text: "Rifampin reducing the effectiveness of antiretrovirals",
          isCorrect: true,
        },
        { text: "Antiretrovirals increasing rifampin toxicity" },
        { text: "Increased risk of hepatotoxicity" },
        { text: "Development of multidrug-resistant TB" },
        { text: "Risk of immune reconstitution inflammatory syndrome" },
      ],
      Explanation:
        "Rifampin is a potent inducer of the CYP450 enzyme system and can reduce the plasma concentrations and effectiveness of many antiretrovirals.",
    },
    {
      question:
        "A patient on methotrexate for rheumatoid arthritis develops macrocytic anemi What is a likely cause?",
      answers: [
        { text: "Vitamin B12 deficiency" },
        { text: "Folic acid antagonism by methotrexate", isCorrect: true },
        { text: "Iron deficiency anemia" },
        { text: "Hemolytic anemia" },
        { text: "Anemia of chronic disease" },
      ],
      Explanation:
        "Methotrexate is a folic acid antagonist, which can lead to macrocytic anemia due to inhibition of DNA synthesis in red blood cells.",
    },
    {
      question:
        "A 50-year-old woman with major depressive disorder is treated with a high dose of tricyclic antidepressants (TCAs). She presents with tachycardia, dry mouth, and urinary retention. What is the likely cause?",
      answers: [
        { text: "Anticholinergic side effects of TCAs", isCorrect: true },
        { text: "Serotonin syndrome" },
        { text: "TCA overdose" },
        { text: "Hypomanic switch" },
        { text: "Interaction with other medications" },
      ],
      Explanation:
        "The symptoms are indicative of the anticholinergic side effects of TCAs, which can be prominent, especially at higher doses.",
    },
    {
      question:
        "A patient with epilepsy on phenobarbital therapy shows decreased efficacy of their oral contraceptiv What is the likely explanation?",
      answers: [
        {
          text: "Phenobarbital inducing hepatic enzymes that metabolize oral contraceptives",
          isCorrect: true,
        },
        { text: "Direct interaction between phenobarbital and estrogen" },
        { text: "Phenobarbital causing hormonal imbalance" },
        { text: "Reduced gastrointestinal absorption of the contraceptive" },
        { text: "Alteration in the contraceptive's renal excretion" },
      ],
      Explanation:
        "Phenobarbital induces hepatic enzymes that can increase the metabolism of oral contraceptives, reducing their efficacy.",
    },
    {
      question:
        "A patient with a history of myocardial infarction is prescribed citalopram for depression. What is an important cardiac consideration for citalopram?",
      answers: [
        { text: "Risk of hypertension" },
        { text: "Potential for bradycardia" },
        { text: "Risk of QT interval prolongation", isCorrect: true },
        { text: "Increased risk of myocardial infarction" },
        { text: "Likelihood of arrhythmia" },
      ],
      Explanation:
        "Citalopram can cause QT interval prolongation, which is a concern in patients with a history of myocardial infarction.",
    },
    {
      question:
        "In treating a patient with Parkinson's disease, what is the primary reason for combining levodopa with carbidopa?",
      answers: [
        { text: "To increase central nervous system penetration of levodopa" },
        {
          text: "To reduce peripheral side effects of levodopa",
          isCorrect: true,
        },
        { text: "To enhance the dopaminergic effect" },
        { text: "To slow the progression of Parkinson's disease" },
        { text: "To reduce the dose of levodopa needed" },
      ],
      Explanation:
        "Carbidopa is combined with levodopa to reduce peripheral side effects, as it inhibits the decarboxylation of levodopa in the periphery.",
    },
    {
      question:
        "A patient on antipsychotic therapy develops acute dystoni Which medication is most appropriate for immediate treatment?",
      answers: [
        { text: "Benzodiazepine" },
        { text: "Beta-blocker" },
        { text: "Anticholinergic agent", isCorrect: true },
        { text: "Second-generation antipsychotic" },
        { text: "SSRI" },
      ],
      Explanation:
        "An anticholinergic agent, such as benztropine or diphenhydramine, is effective for the immediate treatment of antipsychotic-induced acute dystoni",
    },
    {
      question:
        "A patient with chronic pain and a history of opioid dependence is being considered for tramadol therapy. What is a crucial concern with this medication?",
      answers: [
        { text: "Risk of exacerbating opioid dependence", isCorrect: true },
        { text: "Potential for severe constipation" },
        { text: "Increased risk of seizures" },
        { text: "Interaction with non-opioid pain medications" },
        { text: "Risk of respiratory depression" },
      ],
      Explanation:
        "Tramadol's opioid-like effects present a risk of exacerbating opioid dependence in individuals with a history of opioid use disorder.",
    },
    {
      question:
        "A 55-year-old woman with breast cancer is started on tamoxifen. What is a key risk associated with tamoxifen therapy?",
      answers: [
        { text: "Increased risk of thromboembolic events", isCorrect: true },
        { text: "Osteoporosis" },
        { text: "Hepatotoxicity" },
        { text: "Nephrotoxicity" },
        { text: "Cardiotoxicity" },
      ],
      Explanation:
        "Tamoxifen therapy increases the risk of thromboembolic events, necessitating monitoring and preventive measures in at-risk patients.",
    },
    {
      question:
        "In Parkinson's disease, which medication is a COMT inhibitor used to prolong the effect of levodopa?",
      answers: [
        { text: "Rasagiline" },
        { text: "Ropinirole" },
        { text: "Selegiline" },
        { text: "Entacapone", isCorrect: true },
        { text: "Amantadine" },
      ],
      Explanation:
        "Entacapone is a COMT inhibitor that extends the effect of levodopa by inhibiting its metabolism.",
    },
    {
      question:
        "Which antiepileptic drug is known for its enzyme-inducing properties that can reduce the efficacy of oral contraceptives?",
      answers: [
        { text: "Lamotrigine" },
        { text: "Levetiracetam" },
        { text: "Valproate" },
        { text: "Topiramate" },
        { text: "Carbamazepine", isCorrect: true },
      ],
      Explanation:
        "Carbamazepine is a potent enzyme inducer that can decrease the effectiveness of oral contraceptives.",
    },
    {
      question:
        "In multiple sclerosis, which medication is a disease-modifying therapy that requires monitoring for macular edema?",
      answers: [
        { text: "Interferon beta" },
        { text: "Glatiramer acetate" },
        { text: "Fingolimod", isCorrect: true },
        { text: "Natalizumab" },
        { text: "Dimethyl fumarate" },
      ],
      Explanation:
        "Fingolimod requires monitoring for macular edema as a potential side effect.",
    },
    {
      question:
        "Which benzodiazepine is commonly used for the emergency treatment of seizures?",
      answers: [
        { text: "Diazepam" },
        { text: "Lorazepam", isCorrect: true },
        { text: "Clonazepam" },
        { text: "Alprazolam" },
        { text: "Midazolam" },
      ],
      Explanation:
        "Lorazepam is commonly used for the emergency treatment of seizures due to its rapid onset of action.",
    },
    {
      question:
        "For a patient with a known history of substance misuse, which of the following would be a less preferable choice for anxiety management?",
      answers: [
        { text: "Buspirone" },
        { text: "Pregabalin" },
        { text: "Sertraline" },
        { text: "Diazepam", isCorrect: true },
        { text: "Fluoxetine" },
      ],
      Explanation:
        "Diazepam, a benzodiazepine, is less preferable due to its potential for misuse and dependence.",
    },
    {
      question:
        "Which drug is a selective monoamine oxidase B inhibitor used in Parkinson's disease?",
      answers: [
        { text: "Levodopa" },
        { text: "Carbidopa" },
        { text: "Selegiline", isCorrect: true },
        { text: "Entacapone" },
        { text: "Amantadine" },
      ],
      Explanation:
        "Selegiline is a selective MAO-B inhibitor used adjunctively in Parkinson's disease.",
    },
    {
      question:
        "Which medication is considered a first-line treatment for major depressive disorder?",
      answers: [
        { text: "Venlafaxine" },
        { text: "Mirtazapine" },
        { text: "Sertraline", isCorrect: true },
        { text: "Trazodone" },
        { text: "Duloxetine" },
      ],
      Explanation:
        "Sertraline, an SSRI, is often considered a first-line treatment for major depressive disorder.",
    },
    {
      question:
        "Which antiepileptic drug has a unique mechanism of action involving sodium channel slow inactivation?",
      answers: [
        { text: "Phenytoin" },
        { text: "Carbamazepine" },
        { text: "Valproate" },
        { text: "Lacosamide", isCorrect: true },
        { text: "Levetiracetam" },
      ],
      Explanation:
        "Lacosamide uniquely promotes slow inactivation of sodium channels.",
    },
    {
      question:
        "What is the primary risk associated with the use of tricyclic antidepressants in overdose?",
      answers: [
        { text: "Renal failure" },
        { text: "Cardiotoxicity", isCorrect: true },
        { text: "Hepatic failure" },
        { text: "Respiratory depression" },
        { text: "Pancreatitis" },
      ],
      Explanation:
        "Cardiotoxicity, including arrhythmias, is a major risk with TCA overdose.",
    },
    {
      question:
        "Which medication is a first-line treatment for neuropathic pain in diabetic neuropathy?",
      answers: [
        { text: "Gabapentin", isCorrect: true },
        { text: "Ibuprofen" },
        { text: "Acetaminophen" },
        { text: "Aspirin" },
        { text: "Indomethacin" },
      ],
      Explanation:
        "Gabapentin is a first-line treatment for neuropathic pain in diabetic neuropathy.",
    },
    {
      question:
        "What is the most common side effect of levodopa in the treatment of Parkinson's disease?",
      answers: [
        { text: "Urinary retention" },
        { text: "Xerostomia" },
        { text: "Orthostatic hypotension" },
        { text: "Dyskinesia", isCorrect: true },
        { text: "Akathisia" },
      ],
      Explanation:
        "Dyskinesia is a common side effect of levodopa therapy in Parkinson's disease.",
    },
    {
      question:
        "Which antipsychotic has the highest risk for causing tardive dyskinesia?",
      answers: [
        { text: "Clozapine" },
        { text: "Olanzapine" },
        { text: "Risperidone" },
        { text: "Haloperidol", isCorrect: true },
        { text: "Aripiprazole" },
      ],
      Explanation:
        "Haloperidol, a typical antipsychotic, has a higher risk of causing tardive dyskinesia.",
    },
    {
      question:
        "In migraine prophylaxis, which of the following is a mechanism of action of topiramate?",
      answers: [
        { text: "Serotonin agonism" },
        { text: "Beta-adrenergic blockade" },
        { text: "GABA modulation", isCorrect: true },
        { text: "Dopamine antagonism" },
        { text: "NMDA antagonism" },
      ],
      Explanation: "Topiramate acts in part by modulating GABAergic activity.",
    },
    {
      question:
        "Which medication is considered the gold standard for treating trigeminal neuralgia?",
      answers: [
        { text: "Gabapentin" },
        { text: "Baclofen" },
        { text: "Carbamazepine", isCorrect: true },
        { text: "Amitriptyline" },
        { text: "Pregabalin" },
      ],
      Explanation:
        "Carbamazepine is the gold standard treatment for trigeminal neuralgia.",
    },
    {
      question: "Which antiepileptic drug is known for causing hyponatremia?",
      answers: [
        { text: "Carbamazepine", isCorrect: true },
        { text: "Valproate" },
        { text: "Phenytoin" },
        { text: "Lamotrigine" },
        { text: "Levetiracetam" },
      ],
      Explanation:
        "Carbamazepine can cause hyponatremia, particularly in elderly patients.",
    },
    {
      question:
        "For the management of restless legs syndrome, which drug class is commonly used?",
      answers: [
        { text: "Benzodiazepines" },
        { text: "Antihistamines" },
        { text: "Dopamine agonists", isCorrect: true },
        { text: "Calcium channel blockers" },
        { text: "SSRIs" },
      ],
      Explanation:
        "Dopamine agonists are commonly used in the management of restless legs syndrome.",
    },
    {
      question: "In bipolar disorder, what is the primary use of lamotrigine?",
      answers: [
        { text: "Acute mania" },
        { text: "Acute depression" },
        { text: "Maintenance therapy", isCorrect: true },
        { text: "Rapid cycling" },
        { text: "Psychotic symptoms" },
      ],
      Explanation:
        "Lamotrigine is primarily used for maintenance therapy to prevent mood episodes.",
    },
    {
      question:
        "What is a major side effect of lithium therapy requiring regular monitoring?",
      answers: [
        { text: "Thyroid dysfunction", isCorrect: true },
        { text: "Hepatotoxicity" },
        { text: "Renal failure" },
        { text: "Cardiotoxicity" },
        { text: "Pancreatitis" },
      ],
      Explanation:
        "Thyroid dysfunction, particularly hypothyroidism, is a major side effect of lithium.",
    },
    {
      question:
        "In Alzheimer's disease, what is the mechanism of action of donepezil?",
      answers: [
        { text: "NMDA receptor antagonism" },
        { text: "Dopamine reuptake inhibition" },
        { text: "Acetylcholinesterase inhibition", isCorrect: true },
        { text: "GABA modulation" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Donepezil acts as an acetylcholinesterase inhibitor to increase acetylcholine levels.",
    },
    {
      question:
        "What is the primary mechanism of action of antipsychotic drugs?",
      answers: [
        { text: "Dopamine receptor antagonism", isCorrect: true },
        { text: "Serotonin receptor antagonism" },
        { text: "GABA receptor agonism" },
        { text: "Norepinephrine reuptake inhibition" },
        { text: "Acetylcholine receptor antagonism" },
      ],
      Explanation:
        "The primary mechanism of most antipsychotics is dopamine receptor antagonism.",
    },
    {
      question:
        "What is a major adverse effect of long-term use of levodopa/carbidopa in Parkinson's disease?",
      answers: [
        { text: "Renal impairment" },
        { text: "Hepatic failure" },
        { text: "Motor fluctuations", isCorrect: true },
        { text: "Cognitive decline" },
        { text: "Gastrointestinal bleeding" },
      ],
      Explanation:
        "Long-term use of levodopa/carbidopa often leads to motor fluctuations in Parkinson's disease.",
    },
    {
      question:
        "Which medication is an effective prophylactic treatment for cluster headaches?",
      answers: [
        { text: "Sumatriptan" },
        { text: "Amitriptyline" },
        { text: "Verapamil", isCorrect: true },
        { text: "Ibuprofen" },
        { text: "Acetaminophen" },
      ],
      Explanation:
        "Verapamil is effective for the prophylactic treatment of cluster headaches.",
    },
    {
      question:
        "In epilepsy, what is the primary concern with the use of phenytoin?",
      answers: [
        { text: "Renal toxicity" },
        { text: "Cardiotoxicity" },
        { text: "Drug-induced lupus" },
        { text: "Gingival hyperplasia", isCorrect: true },
        { text: "Ototoxicity" },
      ],
      Explanation:
        "Gingival hyperplasia is a well-known side effect of phenytoin use.",
    },
    {
      question:
        "Which drug class is most appropriate for the treatment of acute mania in bipolar disorder?",
      answers: [
        { text: "SSRIs" },
        { text: "Antipsychotics", isCorrect: true },
        { text: "Benzodiazepines" },
        { text: "Anticonvulsants" },
        { text: "MAOIs" },
      ],
      Explanation:
        "Antipsychotics are commonly used for the treatment of acute mania in bipolar disorder.",
    },
    {
      question:
        "What is the primary effect of naltrexone in the treatment of alcohol dependence?",
      answers: [
        { text: "GABA receptor modulation" },
        { text: "Dopamine release" },
        { text: "Opioid receptor blockade", isCorrect: true },
        { text: "Serotonin reuptake inhibition" },
        { text: "NMDA receptor antagonism" },
      ],
      Explanation:
        "Naltrexone works primarily through opioid receptor blockade to reduce the rewarding effects of alcohol.",
    },
    {
      question:
        "Which antiepileptic drug is associated with a risk of Stevens-Johnson syndrome, especially in patients with a certain HLA-B allele?",
      answers: [
        { text: "Carbamazepine", isCorrect: true },
        { text: "Valproate" },
        { text: "Levetiracetam" },
        { text: "Phenobarbital" },
        { text: "Lamotrigine" },
      ],
      Explanation:
        "Carbamazepine is associated with a risk of Stevens-Johnson syndrome, particularly in patients with the HLA-B*1502 allele.",
    },
    {
      question:
        "In the management of acute migraine, which medication is used for its antiemetic and prokinetic properties?",
      answers: [
        { text: "Sumatriptan" },
        { text: "Metoclopramide", isCorrect: true },
        { text: "Propranolol" },
        { text: "Ibuprofen" },
        { text: "Acetaminophen" },
      ],
      Explanation:
        "Metoclopramide is used in acute migraine for its antiemetic and prokinetic effects.",
    },
    {
      question:
        "For a patient with treatment-resistant depression, which medication could be considered?",
      answers: [
        { text: "Fluoxetine" },
        { text: "Venlafaxine" },
        { text: "Escitalopram" },
        { text: "Ketamine", isCorrect: true },
        { text: "Citalopram" },
      ],
      Explanation:
        "Ketamine, an NMDA receptor antagonist, is being explored for treatment-resistant depression.",
    },
    {
      question:
        "Which benzodiazepine has the shortest half-life and is commonly used for procedures requiring brief sedation?",
      answers: [
        { text: "Diazepam" },
        { text: "Lorazepam" },
        { text: "Midazolam", isCorrect: true },
        { text: "Alprazolam" },
        { text: "Clonazepam" },
      ],
      Explanation:
        "Midazolam has a short half-life and is often used for brief procedural sedation.",
    },
    {
      question:
        "What is the primary concern with the use of risperidone in elderly patients with dementia?",
      answers: [
        { text: "Hypotension" },
        { text: "Increased risk of stroke", isCorrect: true },
        { text: "Weight gain" },
        { text: "Hepatotoxicity" },
        { text: "Renal impairment" },
      ],
      Explanation:
        "Risperidone in elderly patients with dementia is associated with an increased risk of stroke.",
    },
    {
      question:
        "Which drug is used as an adjunct in Parkinson's disease for its ability to inhibit catechol-O-methyltransferase (COMT)?",
      answers: [
        { text: "Rasagiline" },
        { text: "Entacapone", isCorrect: true },
        { text: "Amantadine" },
        { text: "Selegiline" },
        { text: "Tolcapone" },
      ],
      Explanation:
        "Entacapone is a COMT inhibitor used adjunctively in Parkinson's disease to enhance the effect of levodopa.",
    },
    {
      question:
        "For acute pain management in opioid-naïve patients, which opioid is commonly preferred due to its lower risk of dependence?",
      answers: [
        { text: "Morphine" },
        { text: "Fentanyl" },
        { text: "Codeine" },
        { text: "Tramadol", isCorrect: true },
        { text: "Oxycodone" },
      ],
      Explanation:
        "Tramadol is often preferred for its lower risk of dependence in opioid-naïve patients.",
    },
    {
      question:
        "In treating neuropathic pain, which medication's mechanism of action involves blocking voltage-gated calcium channels?",
      answers: [
        { text: "Amitriptyline" },
        { text: "Gabapentin", isCorrect: true },
        { text: "Paracetamol" },
        { text: "Ibuprofen" },
        { text: "Duloxetine" },
      ],
      Explanation:
        "Gabapentin acts by blocking voltage-gated calcium channels.",
    },
    {
      question:
        "In the treatment of depression, bupropion is unique because it does not typically cause which side effect?",
      answers: [
        { text: "Weight gain" },
        { text: "Sexual dysfunction", isCorrect: true },
        { text: "Dry mouth" },
        { text: "Sedation" },
        { text: "Cognitive impairment" },
      ],
      Explanation:
        "Bupropion is less likely to cause sexual dysfunction compared to other antidepressants.",
    },
    {
      question:
        "Which medication is an alpha-2 delta ligand used in the treatment of generalized anxiety disorder?",
      answers: [
        { text: "Buspirone" },
        { text: "Pregabalin", isCorrect: true },
        { text: "Sertraline" },
        { text: "Paroxetine" },
        { text: "Venlafaxine" },
      ],
      Explanation:
        "Pregabalin, an alpha-2 delta ligand, is used in the treatment of generalized anxiety disorder.",
    },
    {
      question:
        "What is a potential adverse effect of long-term use of antipsychotic medications in treating schizophrenia?",
      answers: [
        { text: "Tardive dyskinesia", isCorrect: true },
        { text: "Acute renal failure" },
        { text: "Hypothyroidism" },
        { text: "Peptic ulcer disease" },
        { text: "Myocardial infarction" },
      ],
      Explanation:
        "Tardive dyskinesia is a potential long-term adverse effect of antipsychotic medications.",
    },
    {
      question:
        "In the treatment of major depressive disorder, what is the primary advantage of vortioxetine?",
      answers: [
        { text: "It has a fast onset of action." },
        {
          text: "It has less sexual dysfunction as a side effect",
          isCorrect: true,
        },
        { text: "It is effective in treatment-resistant depression." },
        { text: "It has no risk of weight gain." },
        { text: "It does not require dose adjustments in renal impairment." },
      ],
      Explanation:
        "Vortioxetine is chosen for its lower risk of sexual dysfunction compared to other antidepressants.",
    },
    {
      question:
        "Which medication is preferred for the prophylactic treatment of migraines in patients with comorbid hypertension?",
      answers: [
        { text: "Amitriptyline" },
        { text: "Topiramate" },
        { text: "Propranolol", isCorrect: true },
        { text: "Sumatriptan" },
        { text: "Gabapentin" },
      ],
      Explanation:
        "Propranolol, a beta-blocker, is preferred for migraine prophylaxis in patients with comorbid hypertension.",
    },
    {
      question:
        "In treating schizophrenia, what is the primary benefit of using clozapine?",
      answers: [
        { text: "Lower risk of extrapyramidal symptoms" },
        { text: "High efficacy in treatment-resistant cases", isCorrect: true },
        { text: "Absence of metabolic side effects" },
        { text: "No risk of tardive dyskinesia" },
        { text: "Lower risk of QT prolongation" },
      ],
      Explanation:
        "Clozapine is highly effective in treatment-resistant schizophrenia and has a lower risk of extrapyramidal symptoms.",
    },
    {
      question:
        "What is the primary action of antipsychotics in treating bipolar mania?",
      answers: [
        { text: "Serotonin reuptake inhibition" },
        { text: "Dopamine receptor antagonism", isCorrect: true },
        { text: "GABA receptor modulation" },
        { text: "Norepinephrine reuptake inhibition" },
        { text: "Histamine antagonism" },
      ],
      Explanation:
        "In bipolar mania, antipsychotics primarily act through dopamine receptor antagonism.",
    },
    {
      question:
        "In Parkinson's disease, what is the primary role of MAO-B inhibitors like selegiline and rasagiline?",
      answers: [
        { text: "Enhance dopamine availability", isCorrect: true },
        { text: "Inhibit acetylcholinesterase" },
        { text: "Modulate GABA receptors" },
        { text: "Block calcium channels" },
        { text: "Antagonize adenosine receptors" },
      ],
      Explanation:
        "MAO-B inhibitors like selegiline and rasagiline enhance dopamine availability by inhibiting its breakdown.",
    },
    {
      question:
        "Which antiepileptic drug is specifically known for causing visual field defects?",
      answers: [
        { text: "Carbamazepine" },
        { text: "Valproate" },
        { text: "Levetiracetam" },
        { text: "Topiramate", isCorrect: true },
        { text: "Phenobarbital" },
      ],
      Explanation:
        "Topiramate is associated with the risk of causing visual field defects.",
    },
    {
      question:
        "What is a common side effect of antipsychotic medication, characterized by restlessness and an urge to move?",
      answers: [
        { text: "Akathisia", isCorrect: true },
        { text: "Tardive dyskinesia" },
        { text: "Dystonia" },
        { text: "Parkinsonism" },
        { text: "Bradykinesia" },
      ],
      Explanation:
        "Akathisia, a feeling of restlessness and a compelling need to move, is a common side effect of antipsychotic medication.",
    },
    {
      question:
        "Which medication is primarily used for its neuroprotective effects in amyotrophic lateral sclerosis (ALS)?",
      answers: [
        { text: "Riluzole", isCorrect: true },
        { text: "Baclofen" },
        { text: "Gabapentin" },
        { text: "Tizanidine" },
        { text: "Modafinil" },
      ],
      Explanation:
        "Riluzole is used for its neuroprotective effects in ALS, potentially slowing disease progression.",
    },
    {
      question:
        "Which benzodiazepine is preferred for long-term treatment of anxiety due to its lower potential for dependence?",
      answers: [
        { text: "Diazepam" },
        { text: "Lorazepam" },
        { text: "Clonazepam", isCorrect: true },
        { text: "Alprazolam" },
        { text: "Oxazepam" },
      ],
      Explanation:
        "Clonazepam is often preferred for long-term treatment of anxiety due to its lower potential for dependence compared to other benzodiazepines.",
    },
    {
      question:
        "In migraine prophylaxis, what is the mechanism of action of CGRP (calcitonin gene-related peptid antagonists)?",
      answers: [
        { text: "Vasoconstriction" },
        { text: "Vasodilation" },
        { text: "Serotonin antagonism" },
        { text: "Inhibition of CGRP receptors", isCorrect: true },
        { text: "Dopamine agonism" },
      ],
      Explanation:
        "CGRP antagonists work by inhibiting CGRP receptors, which play a role in migraine pathophysiology.",
    },
    {
      question:
        "In Parkinson's disease, which drug is used for its antiviral properties and also provides mild symptomatic relief?",
      answers: [
        { text: "Amantadine", isCorrect: true },
        { text: "Selegiline" },
        { text: "Entacapone" },
        { text: "Rasagiline" },
        { text: "Benztropine" },
      ],
      Explanation:
        "Amantadine, originally an antiviral, is used in Parkinson's disease for mild symptomatic relief.",
    },
    {
      question:
        "What is the primary risk associated with the abrupt discontinuation of SSRI medications?",
      answers: [
        { text: "Hypertension" },
        { text: "Seizures" },
        { text: "Withdrawal syndrome", isCorrect: true },
        { text: "Cardiac arrhythmias" },
        { text: "Hepatic failure" },
      ],
      Explanation:
        "Abrupt discontinuation of SSRIs can lead to a withdrawal syndrome.",
    },
    {
      question:
        "Which antipsychotic medication is most likely to cause metabolic syndrome, including weight gain and diabetes?",
      answers: [
        { text: "Haloperidol" },
        { text: "Olanzapine", isCorrect: true },
        { text: "Aripiprazole" },
        { text: "Ziprasidone" },
        { text: "Lurasidone" },
      ],
      Explanation:
        "Olanzapine is associated with a high risk of metabolic syndrome, including weight gain and diabetes.",
    },
    {
      question:
        "What is a major advantage of second-generation over first-generation antipsychotics in the treatment of schizophrenia?",
      answers: [
        { text: "Absence of sedative effects" },
        { text: "Lower risk of extrapyramidal symptoms", isCorrect: true },
        { text: "Higher efficacy in treating negative symptoms" },
        { text: "No risk of metabolic syndrome" },
        { text: "More rapid onset of action" },
      ],
      Explanation:
        "Second-generation antipsychotics have a lower risk of extrapyramidal symptoms.",
    },
    {
      question:
        "In the treatment of bipolar disorder, what is the primary benefit of using lithium?",
      answers: [
        { text: "Rapid control of manic symptoms" },
        { text: "Prevention of depressive episodes" },
        { text: "Reduction of suicidal behavior", isCorrect: true },
        { text: "Minimal cognitive side effects" },
        { text: "Absence of weight gain" },
      ],
      Explanation:
        "One of the key benefits of lithium in bipolar disorder is the reduction of suicidal behavior.",
    },
    {
      question:
        "What is a potential adverse effect of the long-term use of stimulant medications in the treatment of ADHD?",
      answers: [
        { text: "Renal impairment" },
        { text: "Cardiac arrhythmias" },
        { text: "Pulmonary fibrosis" },
        { text: "Growth suppression", isCorrect: true },
        { text: "Thyroid dysfunction" },
      ],
      Explanation:
        "Growth suppression is a potential long-term adverse effect of stimulant medications used in ADHD.",
    },
    {
      question:
        "In managing major depressive disorder, what is a significant advantage of bupropion over other antidepressants?",
      answers: [
        { text: "Higher efficacy" },
        { text: "Absence of sexual side effects", isCorrect: true },
        { text: "Faster onset of action" },
        { text: "Lower risk of weight gain" },
        { text: "No withdrawal symptoms" },
      ],
      Explanation:
        "Bupropion has the advantage of a lower incidence of sexual side effects compared to other antidepressants.",
    },
    {
      question:
        "For the treatment of restless legs syndrome, which medication can cause augmentation of symptoms over time?",
      answers: [
        { text: "Gabapentin" },
        { text: "Ropinirole", isCorrect: true },
        { text: "Baclofen" },
        { text: "Benzodiazepines" },
        { text: "Opioids" },
      ],
      Explanation:
        "Ropinirole, a dopamine agonist, can cause augmentation of symptoms in restless legs syndrome over time.",
    },
    {
      question:
        "In the treatment of epilepsy, which antiepileptic drug is particularly effective in absence seizures?",
      answers: [
        { text: "Phenytoin" },
        { text: "Carbamazepine" },
        { text: "Ethosuximide", isCorrect: true },
        { text: "Valproate" },
        { text: "Gabapentin" },
      ],
      Explanation:
        "Ethosuximide is particularly effective in treating absence seizures.",
    },
    {
      question:
        "What is the primary mechanism of action of drugs used in the management of overactive bladder, such as oxybutynin?",
      answers: [
        { text: "Muscarinic receptor antagonism", isCorrect: true },
        { text: "Dopamine receptor agonism" },
        { text: "GABA modulation" },
        { text: "Serotonin reuptake inhibition" },
        { text: "Norepinephrine reuptake inhibition" },
      ],
      Explanation:
        "Drugs like oxybutynin act by antagonizing muscarinic receptors to reduce bladder overactivity.",
    },
    {
      question:
        "In the treatment of Parkinson's disease, which of the following is a common side effect of dopamine agonists like pramipexole?",
      answers: [
        { text: "Urinary retention" },
        { text: "Orthostatic hypotension", isCorrect: true },
        { text: "Xerostomia" },
        { text: "Cognitive impairment" },
        { text: "Hyperkalemia" },
      ],
      Explanation:
        "Orthostatic hypotension is a common side effect of dopamine agonists like pramipexole.",
    },
    {
      question:
        "Which medication is used in opioid overdose and works as an opioid receptor antagonist?",
      answers: [
        { text: "Naloxone", isCorrect: true },
        { text: "Methadone" },
        { text: "Buprenorphine" },
        { text: "Naltrexone" },
        { text: "Clonidine" },
      ],
      Explanation:
        "Naloxone is used in opioid overdose and works as an opioid receptor antagonist.",
    },
    {
      question:
        "What is the main benefit of using second-generation antipsychotics in schizophrenia compared to first-generation antipsychotics?",
      answers: [
        { text: "Absence of metabolic side effects" },
        { text: "Lower risk of extrapyramidal side effects", isCorrect: true },
        { text: "More effective in treating positive symptoms" },
        { text: "Less sedation" },
        { text: "No risk of agranulocytosis" },
      ],
      Explanation:
        "Second-generation antipsychotics have a lower risk of extrapyramidal side effects compared to first-generation antipsychotics.",
    },
    {
      question:
        "Which medication, used in bipolar disorder, is known for its risk of causing life-threatening rashes, such as Stevens-Johnson syndrome?",
      answers: [
        { text: "Lithium" },
        { text: "Valproate" },
        { text: "Lamotrigine", isCorrect: true },
        { text: "Carbamazepine" },
        { text: "Olanzapine" },
      ],
      Explanation:
        "Lamotrigine is associated with a risk of life-threatening rashes, including Stevens-Johnson syndrome.",
    },
    {
      question:
        "What is a primary advantage of newer SSRIs over older antidepressants like TCAs and MAOIs?",
      answers: [
        { text: "Faster onset of action" },
        { text: "More potent effects" },
        { text: "Fewer cardiovascular side effects", isCorrect: true },
        { text: "Higher efficacy in severe depression" },
        { text: "No withdrawal symptoms" },
      ],
      Explanation:
        "Newer SSRIs have fewer cardiovascular side effects compared to older antidepressants like TCAs and MAOIs.",
    },
    {
      question:
        "Which medication is an NMDA receptor antagonist used in the treatment of moderate to severe Alzheimer's disease?",
      answers: [
        { text: "Donepezil" },
        { text: "Rivastigmine" },
        { text: "Galantamine" },
        { text: "Memantine", isCorrect: true },
        { text: "Tacrine" },
      ],
      Explanation:
        "Memantine is an NMDA receptor antagonist used in moderate to severe Alzheimer's disease.",
    },
    {
      question:
        "In the treatment of ADHD, what is a common side effect of stimulant medications like amphetamine and methylphenidate?",
      answers: [
        { text: "Hypotension" },
        { text: "Bradycardia" },
        { text: "Appetite suppression", isCorrect: true },
        { text: "Weight gain" },
        { text: "Sedation" },
      ],
      Explanation:
        "Appetite suppression is a common side effect of stimulant medications used in ADHD.",
    },
    {
      question:
        "What is the primary therapeutic use of benzodiazepines in the management of epilepsy?",
      answers: [
        { text: "Long-term seizure control" },
        { text: "Acute seizure termination", isCorrect: true },
        { text: "Reducing seizure frequency" },
        { text: "Preventing seizure recurrence" },
        { text: "Enhancing the effects of antiepileptic drugs" },
      ],
      Explanation:
        "Benzodiazepines are primarily used for the acute termination of seizures.",
    },
    {
      question:
        "Which antidepressant is known for its dual action on both serotonin and norepinephrine reuptake?",
      answers: [
        { text: "Fluoxetine" },
        { text: "Paroxetine" },
        { text: "Venlafaxine", isCorrect: true },
        { text: "Bupropion" },
        { text: "Trazodone" },
      ],
      Explanation:
        "Venlafaxine is known for its dual action on both serotonin and norepinephrine reuptake.",
    },
    {
      question:
        "What is the primary advantage of using atypical antipsychotics in the treatment of psychosis in Parkinson's disease?",
      answers: [
        { text: "Enhanced motor control" },
        { text: "Reduced risk of worsening parkinsonism", isCorrect: true },
        { text: "Greater efficacy in cognitive symptoms" },
        { text: "Lower risk of sedation" },
        { text: "No anticholinergic side effects" },
      ],
      Explanation:
        "Atypical antipsychotics are preferred in Parkinson's disease psychosis due to a reduced risk of worsening parkinsonism.",
    },
    {
      question:
        "In the management of chronic pain, which medication is used for its ability to inhibit the reuptake of both serotonin and norepinephrine?",
      answers: [
        { text: "Gabapentin" },
        { text: "Amitriptyline" },
        { text: "Duloxetine", isCorrect: true },
        { text: "Paracetamol" },
        { text: "Ibuprofen" },
      ],
      Explanation:
        "Duloxetine inhibits the reuptake of both serotonin and norepinephrine, making it effective in chronic pain management.",
    },
    {
      question:
        "Which medication is commonly used in the treatment of narcolepsy for its ability to increase wakefulness?",
      answers: [
        { text: "Zolpidem" },
        { text: "Modafinil", isCorrect: true },
        { text: "Clonazepam" },
        { text: "Amitriptyline" },
        { text: "Methylphenidate" },
      ],
      Explanation: "Modafinil is used in narcolepsy to increase wakefulness.",
    },
    {
      question:
        "Which medication is used for its neuroprotective effects in multiple sclerosis?",
      answers: [
        { text: "Interferon beta" },
        { text: "Glatiramer acetate" },
        { text: "Fingolimod", isCorrect: true },
        { text: "Natalizumab" },
        { text: "Dimethyl fumarate" },
      ],
      Explanation:
        "Fingolimod is used in multiple sclerosis for its neuroprotective effects. Fingolimod helps to prevent episodes of symptoms and slow the worsening of disability in patients with relapsing-remitting forms of multiple sclerosis.",
    },
    {
      question:
        "What is the primary mechanism of action of antipsychotics in treating Tourette syndrome?",
      answers: [
        { text: "Dopamine receptor antagonism", isCorrect: true },
        { text: "Serotonin reuptake inhibition" },
        { text: "GABA modulation" },
        { text: "Norepinephrine reuptake inhibition" },
        { text: "Acetylcholine receptor antagonism" },
      ],
      Explanation:
        "Antipsychotics treat Tourette syndrome primarily through dopamine receptor antagonism.",
    },
    {
      question:
        "What is a common adverse effect of long-term use of lithium in bipolar disorder?",
      answers: [
        { text: "Thyroid dysfunction", isCorrect: true },
        { text: "Acute renal failure" },
        { text: "Cardiotoxicity" },
        { text: "Hepatotoxicity" },
        { text: "Peptic ulcer disease" },
      ],
      Explanation: "Long-term use of lithium can lead to thyroid dysfunction.",
    },
    {
      question:
        "Which antiepileptic drug is preferred for use in pregnancy due to lower teratogenic risk?",
      answers: [
        { text: "Valproate" },
        { text: "Topiramate" },
        { text: "Carbamazepine" },
        { text: "Lamotrigine", isCorrect: true },
        { text: "Phenobarbital" },
      ],
      Explanation:
        "Lamotrigine is preferred in pregnancy due to its relatively lower teratogenic risk.",
    },
    {
      question:
        "Which medication is often used in the management of myoclonic seizures?",
      answers: [
        { text: "Valproate", isCorrect: true },
        { text: "Carbamazepine" },
        { text: "Phenobarbital" },
        { text: "Levetiracetam" },
        { text: "Gabapentin" },
      ],
      Explanation:
        "Valproate is commonly used in the management of myoclonic seizures. The other options are indicated to be used in other types of seizures, or all types of seizures and are not limited to only being used in myoclonic presentations of epilepsy.",
    },
    {
      question:
        "What is a significant risk of using tricyclic antidepressants (TCAs) in overdose?",
      answers: [
        { text: "Hypertension" },
        { text: "Bradycardia" },
        { text: "Cardiotoxicity", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Hepatotoxicity" },
      ],
      Explanation:
        "Cardiotoxicity is a significant risk in the overdose of TCAs.",
    },
    {
      question:
        "In the treatment of ADHD, what is the mechanism of action of non-stimulant medications like atomoxetine?",
      answers: [
        { text: "Norepinephrine reuptake inhibition", isCorrect: true },
        { text: "Dopamine reuptake inhibition" },
        { text: "Serotonin reuptake inhibition" },
        { text: "GABA modulation" },
        { text: "Histamine antagonism" },
      ],
      Explanation:
        "Atomoxetine, a non-stimulant used in ADHD, works by inhibiting norepinephrine reuptake.",
    },
    {
      question:
        "Which medication is used as a first-line treatment for prophylaxis of migraine headaches?",
      answers: [
        { text: "Amitriptyline" },
        { text: "Propranolol", isCorrect: true },
        { text: "Topiramate" },
        { text: "Sumatriptan" },
        { text: "Gabapentin" },
      ],
      Explanation:
        "Propranolol is commonly used as a first-line treatment for migraine prophylaxis.",
    },
    {
      question:
        "What is the primary action of benzodiazepines in the treatment of muscle spasticity?",
      answers: [
        { text: "GABA-A receptor modulation", isCorrect: true },
        { text: "Norepinephrine reuptake inhibition" },
        { text: "Dopamine receptor antagonism" },
        { text: "Acetylcholine receptor antagonism" },
        { text: "Serotonin reuptake inhibition" },
      ],
      Explanation:
        "Benzodiazepines modulate GABA-A receptors, which can help in reducing muscle spasticity.",
    },
    {
      question:
        "Which antiepileptic drug is associated with the risk of causing hyponatremia?",
      answers: [
        { text: "Carbamazepine", isCorrect: true },
        { text: "Valproate" },
        { text: "Phenytoin" },
        { text: "Lamotrigine" },
        { text: "Levetiracetam" },
      ],
      Explanation:
        "Carbamazepine is associated with the risk of hyponatremia, particularly in elderly patients.",
    },
    {
      question:
        "Which medication is used in bipolar disorder for its mood-stabilizing properties and also requires monitoring for hepatotoxicity?",
      answers: [
        { text: "Lithium" },
        { text: "Lamotrigine" },
        { text: "Valproate", isCorrect: true },
        { text: "Carbamazepine" },
        { text: "Olanzapine" },
      ],
      Explanation:
        "Valproate is used for its mood-stabilizing properties in bipolar disorder and requires monitoring for hepatotoxicity.",
    },
    {
      question:
        "In the treatment of depression, what is the primary benefit of using SSRIs over TCAs?",
      answers: [
        { text: "Higher efficacy" },
        { text: "Rapid onset of action" },
        { text: "Fewer side effects", isCorrect: true },
        { text: "No risk of addiction" },
        { text: "More potent effects" },
      ],
      Explanation:
        "SSRIs are preferred over TCAs due to their fewer side effects. Both SSRIs and TCAs impact serotonin; however, TCAs have lower selectivity than SSRIs and act on receptors throughout the body, giving patients a higher risk of having side effects.",
    },
    {
      question:
        "Which antipsychotic medication is known for a lower risk of metabolic syndrome but a higher risk of extrapyramidal symptoms?",
      answers: [
        { text: "Olanzapine" },
        { text: "Aripiprazole" },
        { text: "Clozapine" },
        { text: "Risperidone" },
        { text: "Haloperidol", isCorrect: true },
      ],
      Explanation:
        "Haloperidol has a lower risk of metabolic syndrome but a higher risk of extrapyramidal symptoms.",
    },
    {
      question:
        "What is the mechanism of action of modafinil in the treatment of narcolepsy?",
      answers: [
        { text: "GABA modulation" },
        { text: "Histamine release in the brain", isCorrect: true },
        { text: "Dopamine reuptake inhibition" },
        { text: "Serotonin reuptake inhibition" },
        { text: "Norepinephrine reuptake inhibition" },
      ],
      Explanation:
        "Modafinil promotes wakefulness in narcolepsy primarily through increasing histamine release in the brain.",
    },
    {
      question:
        "Which medication is used in opioid dependence and works as a partial opioid agonist?",
      answers: [
        { text: "Naloxone" },
        { text: "Methadone" },
        { text: "Buprenorphine", isCorrect: true },
        { text: "Naltrexone" },
        { text: "Clonidine" },
      ],
      Explanation:
        "Buprenorphine is used in opioid dependence as a partial opioid agonist.",
    },
    {
      question:
        "In migraine treatment, what is the primary action of serotonin agonists like sumatriptan?",
      answers: [
        { text: "Vasoconstriction", isCorrect: true },
        { text: "Vasodilation" },
        { text: "Serotonin antagonism" },
        { text: "Dopamine agonism" },
        { text: "NMDA receptor antagonism" },
      ],
      Explanation:
        "Sumatriptan and similar drugs act by causing vasoconstriction, which is beneficial in treating migraines.",
    },
    {
      question:
        "What is the primary risk associated with the use of antipsychotic medication in elderly patients with dementia?",
      answers: [
        { text: "Hypotension" },
        { text: "Increased risk of stroke", isCorrect: true },
        { text: "Weight gain" },
        { text: "Hepatotoxicity" },
        { text: "Renal impairment" },
      ],
      Explanation:
        "Antipsychotic medication in elderly patients with dementia is associated with an increased risk of stroke.",
    },
    {
      question:
        "In the management of chronic pain, what is the mechanism of action of SNRIs like duloxetine?",
      answers: [
        {
          text: "Serotonin and norepinephrine reuptake inhibition",
          isCorrect: true,
        },
        { text: "Dopamine reuptake inhibition" },
        { text: "GABA modulation" },
        { text: "Acetylcholine receptor antagonism" },
        { text: "Histamine antagonism" },
      ],
      Explanation:
        "SNRIs like duloxetine work by inhibiting the reuptake of both serotonin and norepinephrine. By activating several cerebral prefrontal areas and influencing the spinal pain pathways, duloxetine modulates pain.",
    },
    {
      question:
        "Which medication, used in the treatment of bipolar disorder, is known for its risk of causing rash and requires a slow titration?",
      answers: [
        { text: "Lithium" },
        { text: "Valproate" },
        { text: "Lamotrigine", isCorrect: true },
        { text: "Carbamazepine" },
        { text: "Olanzapine" },
      ],
      Explanation:
        "Lamotrigine is known for its risk of causing rash and requires slow titration to minimize this risk.",
    },
    {
      question:
        "A junior doctor has approached you having prescribed medication for myasthenia gravis asking you, as the pharmacist, what the mechanism of action is and how it works. What is the primary action of acetylcholinesterase inhibitors in the management of myasthenia gravis?",
      answers: [
        { text: "Enhancing cholinergic transmission", isCorrect: true },
        { text: "Blocking NMDA receptors" },
        { text: "Modulating GABA receptors" },
        { text: "Inhibiting dopamine reuptake" },
        { text: "Antagonizing serotonin receptors" },
      ],
      Explanation:
        "Acetylcholinesterase inhibitors enhance cholinergic transmission, which is beneficial in myasthenia gravis.",
    },
    {
      question:
        "In treating epilepsy, what is the primary benefit of using newer antiepileptics like levetiracetam over older drugs like phenytoin?",
      answers: [
        { text: "Higher efficacy" },
        { text: "Shorter half-life" },
        { text: "Fewer drug interactions", isCorrect: true },
        { text: "Lower risk of teratogenicity" },
        { text: "More rapid onset of action" },
      ],
      Explanation:
        "Newer antiepileptics like levetiracetam generally have fewer drug interactions compared to older drugs like phenytoin.",
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

      // setTimeout(() => {
      const next = currentQuestion + 1
      if (next < questions.length) {
        setCurrentQuestion(next)
        setSelectedAnswer(null) // Reset selected answer
        setDelayNextQuestion(false) // Reset delay
        shuffleQuestions(questions) // Shuffle questions for the next round
      } else {
        setIsQuizOver(true)
      }
      // }, 5000); // 5000 milliseconds = 5 seconds
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

export default CNSQuestion
