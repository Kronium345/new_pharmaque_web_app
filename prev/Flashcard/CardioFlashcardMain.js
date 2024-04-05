
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const CardioFlashcardMain = () => {

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
        question: "Which drug is a first-line treatment for chronic heart failure?",
        answer: "Bisoprolol",
        options: [
          "Amlodipine",
          "Bisoprolol",
          "Furosemide",
          "Simvastatin",
          "Warfarin"
        ]
      },
      {
        id: 2,
        question: "Which antiarrhythmic is contraindicated in patients with asthma?",
        answer: "Propranolol",
        options: [
          "Amiodarone",
          "Dronedarone",
          "Flecainide",
          "Propranolol",
          "Verapamil"
        ]
      },
      {
        id: 3,
        question: "What is the primary side effect of digoxin toxicity?",
        answer: "Bradycardia",
        options: [
          "Hypotension",
          "Hyperkalemia",
          "Bradycardia",
          "Hypoglycemia",
          "Hypercalcemia"
        ]
      },
      {
        id: 4,
        question: "Which antihypertensive is safe to use in pregnancy?",
        answer: "Methyldopa",
        options: [
          "Lisinopril",
          "Losartan",
          "Methyldopa",
          "Nifedipine",
          "Ramipril"
        ]
      },
      {
        id: 5,
        question: "Which medication is indicated for rate control in atrial fibrillation?",
        answer: "Diltiazem",
        options: [
          "Adenosine",
          "Atorvastatin",
          "Dabigatran",
          "Diltiazem",
          "Enoxaparin"
        ]
      },
      {
        id: 6,
        question: "In the treatment of acute coronary syndrome, which drug is not typically used?",
        answer: "Phenytoin",
        options: [
          "Aspirin",
          "Clopidogrel",
          "Enoxaparin",
          "Metoprolol",
          "Phenytoin"
        ]
      },
      {
        id: 7,
        question: "A 67-year-old patient has been prescribed ramipril by his GP. What is the main adverse effect of ACE inhibitors like ramipril?",
        answer: "Cough",
        options: [
          "Cough",
          "Diarrhea",
          "Insomnia",
          "Myalgia",
          "Tachycardia"
        ]
      },
      {
        id: 8,
        question: "Which statin has the least likelihood of causing muscle pain?",
        answer: "Pravastatin",
        options: [
          "Atorvastatin",
          "Fluvastatin",
          "Pravastatin",
          "Rosuvastatin",
          "Simvastatin"
        ]
      },
      {
        id: 9,
        question: "For a patient with a sulfa allergy, which diuretic should be avoided?",
        answer: "Bumetanide",
        options: [
          "Amiloride",
          "Bumetanide",
          "Chlorthalidone",
          "Furosemide",
          "Spironolactone"
        ]
      },
      {
        id: 10,
        question: "What is a common side effect of calcium channel blockers like amlodipine?",
        answer: "Edema",
        options: [
          "Constipation",
          "Diarrhea",
          "Dry Mouth",
          "Edema",
          "Headache"
        ]
      },
      {
        id: 11,
        question: "Which drug is not typically used for hypertension?",
        answer: "Nitroglycerin",
        options: [
          "Atenolol",
          "Clonidine",
          "Hydralazine",
          "Nitroglycerin",
          "Telmisartan"
        ]
      },
      {
        id: 12,
        question: "What is the major concern with the use of clopidogrel in cardiac patients?",
        answer: "Bleeding Risk",
        options: [
          "Bleeding Risk",
          "Constipation",
          "Hepatotoxicity",
          "Hypokalemia",
          "Renal Impairment"
        ]
      },
      {
        id: 13,
        question: "Which medication is an anticoagulant used for stroke prevention in non-valvular atrial fibrillation?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dipyridamole",
          "Esmolol",
          "Rivaroxaban",
          "Sotalol"
        ]
      },
      {
        id: 14,
        question: "In treating angina, what is the mechanism of action of nitrates like nitroglycerin?",
        answer: "Decrease myocardial oxygen demand",
        options: [
          "Beta-blockade",
          "Calcium channel blockade",
          "Decrease myocardial oxygen demand",
          "Increase coronary blood flow",
          "Potassium channel blockade"
        ]
      },
      {
        id: 15,
        question: "What is the primary reason for combining a beta-blocker with a diuretic in hypertension?",
        answer: "Improve blood pressure control",
        options: [
          "Enhance diuretic effect",
          "Minimize side effects",
          "Improve blood pressure control",
          "Reduce risk of diabetes",
          "Increase renal protection"
        ]
      },
      {
        id: 16,
        question: "Which drug is a direct thrombin inhibitor used in anticoagulation?",
        answer: "Dabigatran",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 17,
        question: "For a patient with heart failure and renal impairment, which diuretic is preferred?",
        answer: "Torsemide",
        options: [
          "Bumetanide",
          "Furosemide",
          "Hydrochlorothiazide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 18,
        question: "What is a major side effect of beta-blockers like metoprolol in diabetes?",
        answer: "Hypoglycemia",
        options: [
          "Hyperglycemia",
          "Hypoglycemia",
          "Weight gain",
          "Insulin resistance",
          "Increased appetite"
        ]
      },
      {
        id: 19,
        question: "Which is a common side effect of loop diuretics like furosemide?",
        answer: "Hypokalemia",
        options: [
          "Hyperkalemia",
          "Hypokalemia",
          "Hypernatremia",
          "Hyponatremia",
          "Hypercalcemia"
        ]
      },
      {
        id: 20,
        question: "What is the primary benefit of using beta-blockers post-myocardial infarction?",
        answer: "Reduce mortality",
        options: [
          "Antihypertensive effect",
          "Antiarrhythmic effect",
          "Reduce mortality",
          "Reduce cholesterol",
          "Prevent diabetes"
        ]
      },
      {
        id: 21,
        question: "Which drug increases the risk of hyperkalemia when used with ACE inhibitors?",
        answer: "Spironolactone",
        options: [
          "Amiodarone",
          "Atenolol",
          "Digoxin",
          "Spironolactone",
          "Warfarin"
        ]
      },
      {
        id: 22,
        question: "A patient presents to you in the pharmacy stating that the medication she uses to manage her blood pressure is giving her ankle swelling. Which class of drugs does the patient's medication belong to?",
        answer: "Calcium channel blockers",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Sartans"
        ]
      },
      {
        id: 23,
        question: "What is the mechanism of action of warfarin?",
        answer: "Inhibition of clotting factors II, VII, IX, and X",
        options: [
          "Direct thrombin inhibitor",
          "Factor Xa inhibitor",
          "Inhibition of clotting factors II, VII, IX, and X",
          "Platelet aggregation inhibitor",
          "Thromboxane A2 inhibitor"
        ]
      },
      {
        id: 24,
        question: "Which is not an indication for beta-blockers?",
        answer: "Asthma",
        options: [
          "Angina",
          "Asthma",
          "Heart failure",
          "Hypertension",
          "Myocardial infarction"
        ]
      },
      {
        id: 25,
        question: "Which drug should be avoided in patients taking simvastatin at high doses?",
        answer: "Grapefruit juice",
        options: [
          "Amlodipine",
          "Aspirin",
          "Ezetimibe",
          "Grapefruit juice",
          "Metformin"
        ]
      },
      {
        id: 26,
        question: "Which of the following is an indication to use ivabradine?",
        answer: "Chronic heart failure",
        options: [
          "Chronic heart failure",
          "Hypertension",
          "Myocardial infarction",
          "Pulmonary hypertension",
          "Supraventricular tachycardia"
        ]
      },
      {
        id: 27,
        question: "What is the mechanism of action of nitroglycerin in angina?",
        answer: "Reduction of venous return",
        options: [
          "Alpha-adrenergic blockade",
          "Calcium channel blockade",
          "Phosphodiesterase inhibition",
          "Reduction of venous return",
          "Sodium channel blockade"
        ]
      },
      {
        id: 28,
        question: "In lipid management, what is the primary function of ezetimibe?",
        answer: "Lowers LDL by inhibiting cholesterol absorption",
        options: [
          "Increases HDL",
          "Lowers LDL by inhibiting cholesterol absorption",
          "Lowers triglycerides",
          "Reduces total cholesterol",
          "Stabilizes plaque"
        ]
      },
      {
        id: 29,
        question: "What is a major adverse effect of clopidogrel and aspirin combination therapy?",
        answer: "Bleeding risk",
        options: [
          "Bleeding risk",
          "Hepatotoxicity",
          "Hyperkalemia",
          "Renal impairment",
          "Tachycardia"
        ]
      },
      {
        id: 30,
        question: "Which drug is not a calcium channel blocker?",
        answer: "Ramipril",
        options: [
          "Amlodipine",
          "Diltiazem",
          "Nifedipine",
          "Ramipril",
          "Verapamil"
        ]
      },
      {
        id: 31,
        question: "What is a common adverse effect of loop diuretics like furosemide in the elderly?",
        answer: "Dehydration",
        options: [
          "Constipation",
          "Dehydration",
          "Hyperkalemia",
          "Hypertension",
          "Weight gain"
        ]
      },
      {
        id: 32,
        question: "Which medication is an appropriate initial treatment for Raynaud's phenomenon?",
        answer: "Amlodipine",
        options: [
          "Amlodipine",
          "Atorvastatin",
          "Lisinopril",
          "Metoprolol",
          "Warfarin"
        ]
      },
      {
        id: 33,
        question: "Which beta-blocker is preferred in patients with chronic obstructive pulmonary disease (COPD)?",
        answer: "Metoprolol",
        options: [
          "Atenolol",
          "Carvedilol",
          "Labetalol",
          "Metoprolol",
          "Propranolol"
        ]
      },
      {
        id: 34,
        question: "What is the major side effect of angiotensin receptor blockers (ARBs) like losartan?",
        answer: "Hypotension",
        options: [
          "Cough",
          "Hyperkalemia",
          "Hypotension",
          "Rash",
          "Tachycardia"
        ]
      },
      {
        id: 35,
        question: "Which medication is primarily used to prevent stroke in patients with atrial fibrillation?",
        answer: "Edoxaban",
        options: [
          "Amiodarone",
          "Edoxaban",
          "Isosorbide mononitrate",
          "Nifedipine",
          "Sotalol"
        ]
      },
      {
        id: 36,
        question: "What is a risk associated with the use of non-dihydropyridine calcium channel blockers like verapamil in heart failure?",
        answer: "Worsening of heart failure",
        options: [
          "Increased heart rate",
          "Lowered blood pressure",
          "Myocardial infarction",
          "Worsening of heart failure",
          "Weight loss"
        ]
      },
      {
        id: 37,
        question: "Which drug is used as a rate control agent in atrial fibrillation and can also cause thyroid dysfunction?",
        answer: "Amiodarone",
        options: [
          "Amiodarone",
          "Dabigatran",
          "Digoxin",
          "Flecainide",
          "Sotalol"
        ]
      },
      {
        id: 38,
        question: "What is a potential side effect of high-dose statins?",
        answer: "Myopathy",
        options: [
          "Hypoglycemia",
          "Liver enzyme elevation",
          "Myopathy",
          "Nephrotoxicity",
          "Thrombocytopenia"
        ]
      },
      {
        id: 39,
        question: "Which antihypertensive medication is known to cause a dry, hacking cough?",
        answer: "Enalapril",
        options: [
          "Amlodipine",
          "Candesartan",
          "Enalapril",
          "Metoprolol",
          "Propranolol"
        ]
      },
      {
        id: 40,
        question: "Which medication is used for its anti-platelet properties in ischemic heart disease?",
        answer: "Aspirin",
        options: [
          "Aspirin",
          "Atorvastatin",
          "Lisinopril",
          "Metoprolol",
          "Nitroglycerin"
        ]
      },
      {
        id: 41,
        question: "Which beta-blocker is known to have intrinsic sympathomimetic activity (ISA)?",
        answer: "Pindolol",
        options: [
          "Atenolol",
          "Bisoprolol",
          "Carvedilol",
          "Labetalol",
          "Pindolol"
        ]
      },
      {
        id: 42,
        question: "In patients with high cardiovascular risk, which lipid-lowering drug class is preferred?",
        answer: "Statins",
        options: [
          "Bile acid sequestrants",
          "Fibrates",
          "Niacin",
          "Statins",
          "Omega-3 fatty acids"
        ]
      },
      {
        id: 43,
        question: "What is the main risk associated with the use of fibrinolytic therapy in myocardial infarction?",
        answer: "Bleeding",
        options: [
          "Arrhythmias",
          "Bleeding",
          "Hypertension",
          "Hypokalemia",
          "Renal failure"
        ]
      },
      {
        id: 44,
        question: "What is the primary action of ACE inhibitors in heart failure?",
        answer: "Reduce afterload and preload",
        options: [
          "Increase heart rate",
          "Increase myocardial contractility",
          "Reduce afterload and preload",
          "Reduce cholesterol levels",
          "Stabilize heart rhythm"
        ]
      },
      {
        id: 45,
        question: "Which diuretic is most appropriate for a patient with heart failure and hyperkalemia?",
        answer: "Furosemide",
        options: [
          "Amiloride",
          "Eplerenone",
          "Furosemide",
          "Spironolactone",
          "Triamterene"
        ]
      },
      {
        id: 46,
        question: "What is a common adverse effect of aldosterone antagonists in cardiac therapy?",
        answer: "Hyperkalemia",
        options: [
          "Hypercalcemia",
          "Hyperglycemia",
          "Hyperkalemia",
          "Hypokalemia",
          "Hypothyroidism"
        ]
      },
      {
        id: 47,
        question: "Which drug class is most likely to cause a dry cough as a side effect?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 48,
        question: "For what purpose is digoxin used in atrial fibrillation?",
        answer: "Reduce heart rate",
        options: [
          "Convert to sinus rhythm",
          "Lower blood pressure",
          "Prevent clot formation",
          "Reduce heart rate",
          "Reduce myocardial oxygen demand"
        ]
      },
      {
        id: 49,
        question: "Which antihypertensive class is associated with a risk of angioedema?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 50,
        question: "What is the mechanism of action of dipyridamole?",
        answer: "Calcium channel blocker",
        options: [
          "Anti-platelet agent",
          "Beta-blocker",
          "Calcium channel blocker",
          "Phosphodiesterase inhibitor",
          "Potassium channel opener"
        ]
      },
      {
        id: 51,
        question: "Which condition is a contraindication for the use of non-dihydropyridine calcium channel blockers?",
        answer: "Heart failure",
        options: [
          "Asthma",
          "Gout",
          "Heart failure",
          "Hyperlipidemia",
          "Thyroid disorders"
        ]
      },
      {
        id: 52,
        question: "What is the primary indication for using beta-blockers in hypertension?",
        answer: "Reduce cardiac output",
        options: [
          "Decrease heart rate",
          "Decrease peripheral resistance",
          "Increase renal blood flow",
          "Increase venous return",
          "Reduce cardiac output"
        ]
      },
      {
        id: 53,
        question: "Which drug is an angiotensin receptor-neprilysin inhibitor (ARNI) used in heart failure?",
        answer: "Sacubitril/valsartan",
        options: [
          "Candesartan",
          "Enalapril",
          "Furosemide",
          "Sacubitril/valsartan",
          "Spironolactone"
        ]
      },
      {
        id: 54,
        question: "What is the primary adverse effect of long-term amiodarone use?",
        answer: "Pulmonary toxicity",
        options: [
          "Hepatotoxicity",
          "Nephrotoxicity",
          "Neurotoxicity",
          "Pulmonary toxicity",
          "Thyroid dysfunction"
        ]
      },
      {
        id: 55,
        question: "Which medication is used as an anticoagulant in patients with a mechanical heart valve?",
        answer: "Warfarin",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 56,
        question: "What is the primary benefit of using nitrates in angina pectoris?",
        answer: "Reduction of myocardial oxygen consumption",
        options: [
          "Decrease in blood pressure",
          "Increase in heart rate",
          "Reduction of myocardial oxygen consumption",
          "Stabilization of atherosclerotic plaques",
          "Vasodilation of coronary arteries"
        ]
      },
      {
        id: 57,
        question: "Which drug is a selective inhibitor of the sodium-glucose cotransporter 2 (SGLT2) with benefits in heart failure?",
        answer: "Canagliflozin",
        options: [
          "Canagliflozin",
          "Glipizide",
          "Metformin",
          "Pioglitazone",
          "Sitagliptin"
        ]
      },
      {
        id: 58,
        question: "What is the main risk associated with the chronic use of high-dose thiazide diuretics?",
        answer: "Hypokalemia",
        options: [
          "Hypercalcemia",
          "Hyperglycemia",
          "Hyperkalemia",
          "Hypomagnesemia",
          "Hypokalemia"
        ]
      },
      {
        id: 59,
        question: "Which medication is indicated for the prevention of thromboembolism in atrial fibrillation?",
        answer: "Dabigatran",
        options: [
          "Aspirin",
          "Dabigatran",
          "Esmolol",
          "Nitroglycerin",
          "Verapamil"
        ]
      },
      {
        id: 60,
        question: "What is the primary action of sodium nitroprusside in hypertensive emergencies?",
        answer: "Direct arterial vasodilation",
        options: [
          "Alpha-adrenergic blockade",
          "Beta-adrenergic blockade",
          "Calcium channel blockade",
          "Direct arterial vasodilation",
          "Potassium channel activation"
        ]
      },
      {
        id: 61,
        question: "Which medication is a selective beta-1 blocker with renal protection benefits in diabetes?",
        answer: "Nebivolol",
        options: [
          "Atenolol",
          "Bisoprolol",
          "Carvedilol",
          "Metoprolol",
          "Nebivolol"
        ]
      },
      {
        id: 62,
        question: "What is a key side effect of using ivabradine in cardiac therapy?",
        answer: "Bradycardia",
        options: [
          "Bradycardia",
          "Diarrhea",
          "Hypertension",
          "Insomnia",
          "Tachycardia"
        ]
      },
      {
        id: 63,
        question: "Which class of antihypertensive drugs is known to precipitate bronchospasm in asthmatic patients?",
        answer: "Beta-blockers",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 64,
        question: "What is the mechanism of action of ticagrelor in acute coronary syndrome?",
        answer: "Anti-platelet agent",
        options: [
          "Anti-platelet agent",
          "Beta-blocker",
          "Calcium channel blocker",
          "Phosphodiesterase inhibitor",
          "Potassium channel opener"
        ]
      },
      {
        id: 65,
        question: "Which medication is contraindicated in patients with bilateral renal artery stenosis?",
        answer: "Enalapril",
        options: [
          "Amlodipine",
          "Enalapril",
          "Furosemide",
          "Metoprolol",
          "Sotalol"
        ]
      },
      {
        id: 66,
        question: "In congestive heart failure, why is spironolactone used?",
        answer: "To reduce aldosterone-mediated damage",
        options: [
          "To decrease preload",
          "To increase cardiac output",
          "To reduce afterload",
          "To reduce aldosterone-mediated damage",
          "To reduce cholesterol"
        ]
      },
      {
        id: 67,
        question: "Which class of drugs is preferred in hypertensive patients with osteoporosis?",
        answer: "Thiazide diuretics",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Thiazide diuretics"
        ]
      },
      {
        id: 68,
        question: "What is the primary benefit of using beta-blockers in patients post-myocardial infarction?",
        answer: "Mortality reduction",
        options: [
          "Anti-arrhythmic effect",
          "Blood pressure reduction",
          "Heart rate reduction",
          "Mortality reduction",
          "Vasodilation"
        ]
      },
      {
        id: 69,
        question: "Which drug is used to manage hyperlipidemia and can cause flushing?",
        answer: "Niacin",
        options: [
          "Atorvastatin",
          "Cholestyramine",
          "Ezetimibe",
          "Niacin",
          "Simvastatin"
        ]
      },
      {
        id: 70,
        question: "What is the mechanism of action of ranolazine in chronic angina?",
        answer: "Inhibition of late sodium current",
        options: [
          "Calcium channel blockade",
          "Decrease of myocardial oxygen demand",
          "Increase of coronary blood flow",
          "Inhibition of late sodium current",
          "Potassium channel blockade"
        ]
      },
      {
        id: 71,
        question: "Which anticoagulant is preferred for patients with non-valvular atrial fibrillation and renal impairment?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 72,
        question: "What is the primary indication for using adenosine in cardiology?",
        answer: "Paroxysmal supraventricular tachycardia",
        options: [
          "Chronic angina",
          "Heart failure",
          "Hypertension",
          "Paroxysmal supraventricular tachycardia",
          "Peripheral arterial disease"
        ]
      },
      {
        id: 73,
        question: "What is a common side effect of calcium channel blockers in the elderly?",
        answer: "Hypotension",
        options: [
          "Bradycardia",
          "Constipation",
          "Hypotension",
          "Tachycardia",
          "Urinary retention"
        ]
      },
      {
        id: 74,
        question: "Which medication is indicated for reducing the risk of stroke in patients with peripheral arterial disease?",
        answer: "Clopidogrel",
        options: [
          "Aspirin",
          "Clopidogrel",
          "Enoxaparin",
          "Heparin",
          "Warfarin"
        ]
      },
      {
        id: 75,
        question: "What is a major side effect of using high-dose thiazide diuretics in diabetes?",
        answer: "Hyperglycemia",
        options: [
          "Hypoglycemia",
          "Hyperglycemia",
          "Hyperkalemia",
          "Hyponatremia",
          "Hypocalcemia"
        ]
      },
      {
        id: 76,
        question: "Which drug is a potassium-sparing diuretic often used in heart failure?",
        answer: "Spironolactone",
        options: [
          "Furosemide",
          "Hydrochlorothiazide",
          "Spironolactone",
          "Torsemide",
          "Triamterene"
        ]
      },
      {
        id: 77,
        question: "What is the mechanism of action of verapamil in cardiac arrhythmias?",
        answer: "Calcium channel blockade",
        options: [
          "Alpha-adrenergic blockade",
          "Beta-adrenergic blockade",
          "Calcium channel blockade",
          "Potassium channel blockade",
          "Sodium channel blockade"
        ]
      },
      {
        id: 78,
        question: "Which antihypertensive class is associated with a reduced risk of new-onset diabetes?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Thiazide diuretics"
        ]
      },
      {
        id: 79,
        question: "What is the primary therapeutic use of loop diuretics like furosemide in cardiology?",
        answer: "Reduction of preload in heart failure",
        options: [
          "Hypertension management",
          "Management of peripheral edema",
          "Prevention of myocardial infarction",
          "Reduction of preload in heart failure",
          "Treatment of angina"
        ]
      },
      {
        id: 80,
        question: "Which of the following drugs is a beta-blocker used for chronic heart failure?",
        answer: "Bisoprolol",
        options: [
          "Atenolol",
          "Bisoprolol",
          "Amiodarone",
          "Digoxin",
          "Ramipril"
        ]
      },
      {
        id: 81,
        question: "Which diuretic is most suitable for a patient with heart failure and renal impairment?",
        answer: "Furosemide",
        options: [
          "Furosemide",
          "Spironolactone",
          "Amiloride",
          "Hydrochlorothiazide",
          "Bendroflumethiazide"
        ]
      },
      {
        id: 82,
        question: "A patient on Warfarin should avoid which of the following due to increased bleeding risk?",
        answer: "Ibuprofen",
        options: [
          "Paracetamol",
          "Ibuprofen",
          "Loperamide",
          "Omeprazole",
          "Cetirizine"
        ]
      },
      {
        id: 83,
        question: "Which drug is an angiotensin-converting enzyme (ACE) inhibitor used in hypertension?",
        answer: "Enalapril",
        options: [
          "Losartan",
          "Candesartan",
          "Enalapril",
          "Amlodipine",
          "Metoprolol"
        ]
      },
      {
        id: 84,
        question: "In acute coronary syndrome, which drug combination is commonly used?",
        answer: "Aspirin and Clopidogrel",
        options: [
          "Aspirin and Clopidogrel",
          "Aspirin and Warfarin",
          "Clopidogrel and Warfarin",
          "Heparin and Dabigatran",
          "Clopidogrel and Heparin"
        ]
      },
      {
        id: 85,
        question: "What is the primary side effect of Amiodarone?",
        answer: "Hypothyroidism",
        options: [
          "Hypothyroidism",
          "Hyperkalemia",
          "Hypokalemia",
          "Hyperglycemia",
          "Hypoglycemia"
        ]
      },
      {
        id: 86,
        question: "Which drug is contraindicated in a patient with a history of asthma and heart failure?",
        answer: "Propranolol",
        options: [
          "Bisoprolol",
          "Carvedilol",
          "Propranolol",
          "Nebivolol",
          "Amlodipine"
        ]
      },
      {
        id: 87,
        question: "Which of these is not a side effect of Digoxin?",
        answer: "Hyperkalemia",
        options: [
          "Visual disturbances",
          "Nausea",
          "Diarrhea",
          "Hyperkalemia",
          "Bradycardia"
        ]
      },
      {
        id: 88,
        question: "For a patient with angina, which drug class is used to reduce myocardial oxygen demand?",
        answer: "Beta-blockers",
        options: [
          "Beta-blockers",
          "ACE inhibitors",
          "Diuretics",
          "Calcium channel blockers",
          "Nitrates"
        ]
      },
      {
        id: 89,
        question: "Which calcium channel blocker is preferred for rate control in atrial fibrillation?",
        answer: "Diltiazem",
        options: [
          "Amlodipine",
          "Nifedipine",
          "Diltiazem",
          "Verapamil",
          "Felodipine"
        ]
      },
      {
        id: 90,
        question: "What is the main risk associated with the use of Thiazide diuretics in the elderly?",
        answer: "Hyponatremia",
        options: [
          "Hypernatremia",
          "Hyponatremia",
          "Hyperkalemia",
          "Hypokalemia",
          "Hypercalcemia"
        ]
      },
      {
        id: 91,
        question: "In hypertensive emergency, which drug is preferred for immediate blood pressure reduction?",
        answer: "Nitroprusside",
        options: [
          "Captopril",
          "Clonidine",
          "Nitroprusside",
          "Propranolol",
          "Losartan"
        ]
      },
      {
        id: 92,
        question: "What is a major side effect of ACE inhibitors like Lisinopril?",
        answer: "Cough",
        options: [
          "Cough",
          "Diarrhea",
          "Insomnia",
          "Bradycardia",
          "Hyperglycemia"
        ]
      },
      {
        id: 93,
        question: "Which drug is indicated for prevention of stroke in patients with atrial fibrillation and no other risk factors?",
        answer: "Aspirin",
        options: [
          "Warfarin",
          "Dabigatran",
          "Rivaroxaban",
          "Aspirin",
          "Clopidogrel"
        ]
      },
      {
        id: 94,
        question: "What is the mechanism of action of Statins like Atorvastatin?",
        answer: "Inhibit HMG-CoA reductase",
        options: [
          "Increase HDL cholesterol",
          "Inhibit HMG-CoA reductase",
          "Activate lipoprotein lipase",
          "Block bile acid absorption",
          "Inhibit cholesterol absorption"
        ]
      },
      {
        id: 95,
        question: "For which condition is Eplerenone specifically indicated?",
        answer: "Heart Failure post-MI",
        options: [
          "Hypertension",
          "Heart Failure post-MI",
          "Chronic kidney disease",
          "Peripheral artery disease",
          "Pulmonary hypertension"
        ]
      },
      {
        id: 96,
        question: "Which anti-arrhythmic drug increases the risk of torsades de pointes?",
        answer: "Sotalol",
        options: [
          "Lidocaine",
          "Sotalol",
          "Verapamil",
          "Diltiazem",
          "Atenolol"
        ]
      },
      {
        id: 97,
        question: "In a patient with Prinzmetal's angina, which drug class is most effective?",
        answer: "Calcium channel blockers",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "ACE inhibitors",
          "Nitrates",
          "Diuretics"
        ]
      },
      {
        id: 98,
        question: "Which is a common side effect of Nitrates like Nitroglycerin?",
        answer: "Headache",
        options: [
          "Hypertension",
          "Bradycardia",
          "Headache",
          "Constipation",
          "Urinary retention"
        ]
      },
      {
        id: 99,
        question: "What is the primary action of Aldosterone antagonists in heart failure?",
        answer: "Reduce myocardial fibrosis",
        options: [
          "Increase cardiac output",
          "Decrease preload",
          "Reduce afterload",
          "Increase heart rate",
          "Reduce myocardial fibrosis"
        ]
      },
      {
        id: 100,
        question: "A 63-year-old male with chronic heart failure is experiencing fatigue and shortness of breath. Which drug would be most appropriate to add to his regimen?",
        answer: "Carvedilol",
        options: [
          "Amlodipine",
          "Carvedilol",
          "Lisinopril",
          "Nifedipine",
          "Sotalol"
        ]
      },
      {
        id: 101,
        question: "A 55-year-old female with hypertension and a history of asthma is seeking medication. Which antihypertensive should be avoided?",
        answer: "Atenolol",
        options: [
          "Atenolol",
          "Candesartan",
          "Hydrochlorothiazide",
          "Ramipril",
          "Verapamil"
        ]
      },
      {
        id: 102,
        question: "A 70-year-old male with atrial fibrillation and a prior stroke requires anticoagulation. What is the most appropriate choice?",
        answer: "Dabigatran",
        options: [
          "Aspirin",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 103,
        question: "A 68-year-old female with stable angina requires additional medication. Which drug class is most effective for symptom control?",
        answer: "Calcium channel blockers",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Statins"
        ]
      },
      {
        id: 104,
        question: "A 59-year-old male with hyperlipidemia is experiencing muscle pain. Which statin has a lower risk of myopathy?",
        answer: "Pravastatin",
        options: [
          "Atorvastatin",
          "Fluvastatin",
          "Pravastatin",
          "Rosuvastatin",
          "Simvastatin"
        ]
      },
      {
        id: 105,
        question: "A 72-year-old female with hypertension and chronic kidney disease needs a blood pressure medication. Which class should be preferred?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Sartans"
        ]
      },
      {
        id: 106,
        question: "A 65-year-old male with congestive heart failure and renal impairment requires diuretic therapy. Which drug should be chosen?",
        answer: "Torsemide",
        options: [
          "Bumetanide",
          "Furosemide",
          "Hydrochlorothiazide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 107,
        question: "A 60-year-old male with chronic stable angina is not achieving adequate symptom control. What medication could be added for better management?",
        answer: "Ivabradine",
        options: [
          "Amlodipine",
          "Aspirin",
          "Clopidogrel",
          "Ivabradine",
          "Nitrates"
        ]
      },
      {
        id: 108,
        question: "A 58-year-old female with a recent diagnosis of hypertension also has diabetes. Which antihypertensive drug class is beneficial for her?",
        answer: "ACE inhibitors",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Sartans"
        ]
      },
      {
        id: 109,
        question: "A 75-year-old male with a history of myocardial infarction is on a statin. What is the primary goal of statin therapy in this patient?",
        answer: "Lower LDL",
        options: [
          "Lower LDL",
          "Lower triglycerides",
          "Prevent arrhythmias",
          "Prevent heart failure",
          "Reduce mortality"
        ]
      },
      {
        id: 110,
        question: "A 54-year-old male with peripheral arterial disease is at risk for stroke. What medication should be used for prophylaxis?",
        answer: "Clopidogrel",
        options: [
          "Aspirin",
          "Clopidogrel",
          "Dipyridamole",
          "Enoxaparin",
          "Warfarin"
        ]
      },
      {
        id: 111,
        question: "A 67-year-old female with atrial fibrillation and a high risk of bleeding requires anticoagulation. Which drug is preferred?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 112,
        question: "A 70-year-old male with chronic angina is experiencing bradycardia with his current medication. Which drug might be responsible?",
        answer: "Diltiazem",
        options: [
          "Amlodipine",
          "Atorvastatin",
          "Diltiazem",
          "Nitroglycerin",
          "Ranolazine"
        ]
      },
      {
        id: 113,
        question: "A 62-year-old female with heart failure is experiencing worsening renal function. Which medication might need adjustment?",
        answer: "Diuretics",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Diuretics",
          "Nitrates",
          "Spironolactone"
        ]
      },
      {
        id: 114,
        question: "A 56-year-old male with stable angina is not responding well to monotherapy. What combination therapy can be considered?",
        answer: "Beta-blocker and Calcium channel blocker",
        options: [
          "ACE inhibitor and Beta-blocker",
          "Beta-blocker and Calcium channel blocker",
          "Calcium channel blocker and Nitrates",
          "Nitrates and ACE inhibitor",
          "Statin and Aspirin"
        ]
      },
      {
        id: 115,
        question: "A 69-year-old female with hypertension and osteoporosis needs a new antihypertensive. Which drug class can benefit her bone health?",
        answer: "Diuretics",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Sartans"
        ]
      },
      {
        id: 116,
        question: "A 77-year-old male with heart failure and frequent urination at night is on a diuretic. Which diuretic is less likely to cause nocturia?",
        answer: "Hydrochlorothiazide",
        options: [
          "Bumetanide",
          "Furosemide",
          "Hydrochlorothiazide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 117,
        question: "A 64-year-old male with a history of myocardial infarction and depression needs lipid-lowering therapy. Which statin has fewer drug interactions with antidepressants?",
        answer: "Fluvastatin",
        options: [
          "Atorvastatin",
          "Fluvastatin",
          "Lovastatin",
          "Pravastatin",
          "Simvastatin"
        ]
      },
      {
        id: 118,
        question: "A 71-year-old female with hypertension and a history of cough with ACE inhibitors. Which alternative drug class is suitable?",
        answer: "ARBs",
        options: [
          "ARBs",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Nitrates"
        ]
      },
      {
        id: 119,
        question: "A 66-year-old male with type 2 diabetes and hypertension is experiencing peripheral edema. Which antihypertensive drug could be causing this?",
        answer: "Amlodipine",
        options: [
          "Amlodipine",
          "Enalapril",
          "Metformin",
          "Metoprolol",
          "Ramipril"
        ]
      },
      {
        id: 120,
        question: "A 55-year-old female with rheumatoid arthritis and hypertension is seeking a new antihypertensive. Which drug should be avoided due to her condition?",
        answer: "Lisinopril",
        options: [
          "Amlodipine",
          "Candesartan",
          "Lisinopril",
          "Metoprolol",
          "Verapamil"
        ]
      },
      {
        id: 121,
        question: "A 72-year-old male with heart failure and gout requires a diuretic. Which diuretic is least likely to exacerbate his gout?",
        answer: "Spironolactone",
        options: [
          "Bumetanide",
          "Furosemide",
          "Hydrochlorothiazide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 122,
        question: "A 68-year-old male with chronic kidney disease and hypertension needs medication adjustment. Which drug is beneficial for renal protection?",
        answer: "Lisinopril",
        options: [
          "Amlodipine",
          "Furosemide",
          "Lisinopril",
          "Metoprolol",
          "Nifedipine"
        ]
      },
      {
        id: 123,
        question: "A 60-year-old female with diabetes and hypertension is on a beta-blocker and needs a medication review. What is a potential issue with beta-blockers in this patient?",
        answer: "Exacerbation of diabetes",
        options: [
          "Increased risk of stroke",
          "Induction of hypothyroidism",
          "Potential for renal impairment",
          "Reduced efficacy in hypertension"
        ]
      },
      {
        id: 124,
        question: "A 74-year-old male with atrial fibrillation and a high bleeding risk needs an anticoagulant. Which drug is the safest option?",
        answer: "Apixaban",
        options: [
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 125,
        question: "A 65-year-old female with stable angina and asthma requires additional medication. Which drug should be avoided?",
        answer: "Metoprolol",
        options: [
          "Amlodipine",
          "Diltiazem",
          "Isosorbide mononitrate",
          "Nitrates"
        ]
      },
      {
        id: 126,
        question: "A 58-year-old male with hypertension and benign prostatic hyperplasia (BPH) needs a new antihypertensive. Which class can benefit his BPH?",
        answer: "Alpha-blockers",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 127,
        question: "A 77-year-old female with osteoporosis and hypertension is considering a diuretic. Which diuretic is preferred in her condition?",
        answer: "Hydrochlorothiazide",
        options: [
          "Bumetanide",
          "Furosemide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 128,
        question: "A 69-year-old male with a history of myocardial infarction is considering a beta-blocker. What is the primary benefit in his case?",
        answer: "Reduced mortality",
        options: [
          "Decreased risk of arrhythmias",
          "Improved lipid profile",
          "Lowered blood pressure",
          "Reduced angina frequency"
        ]
      },
      {
        id: 129,
        question: "A 63-year-old female with hyperlipidemia reports muscle pain. Which non-statin medication can be considered?",
        answer: "Ezetimibe",
        options: [
          "Fenofibrate",
          "Gemfibrozil",
          "Niacin",
          "Omega-3 fatty acids"
        ]
      },
      {
        id: 130,
        question: "A 70-year-old male with chronic angina and erectile dysfunction is on a nitrate. Why must phosphodiesterase type 5 inhibitors be avoided?",
        answer: "Potentiation of hypotensive effects",
        options: [
          "Increased risk of arrhythmias",
          "Increased risk of bleeding",
          "Increased risk of heart failure",
          "Reduced efficacy of nitrates"
        ]
      },
      {
        id: 131,
        question: "A 66-year-old male with atrial fibrillation and chronic kidney disease requires anticoagulation. Which drug should be used with caution?",
        answer: "Dabigatran",
        options: [
          "Apixaban",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 132,
        question: "A 56-year-old female with hypertension and a history of depression requires medication adjustment. Which antihypertensive can exacerbate depression?",
        answer: "Clonidine",
        options: [
          "Amlodipine",
          "Hydrochlorothiazide",
          "Lisinopril",
          "Metoprolol"
        ]
      },
      {
        id: 133,
        question: "A 62-year-old male with heart failure and gout is considering spironolactone. What is a major concern with this drug?",
        answer: "Hyperkalemia",
        options: [
          "Exacerbation of gout",
          "Hypokalemia",
          "Renal impairment",
          "Worsening heart failure"
        ]
      },
      {
        id: 134,
        question: "A 53-year-old female with chronic stable angina and hypothyroidism needs angina management. Which drug class is preferred?",
        answer: "Calcium channel blockers",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Nitrates",
          "Statins"
        ]
      },
      {
        id: 135,
        question: "A 78-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) needs a new antihypertensive. Which class should be avoided?",
        answer: "Beta-blockers",
        options: [
          "ACE inhibitors",
          "ARBs",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 136,
        question: "A 64-year-old female with hypertension and a history of angioedema on ACE inhibitors needs medication review. Which alternative is appropriate?",
        answer: "ARBs",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "Nitrates"
        ]
      },
      {
        id: 137,
        question: "A 71-year-old male with diabetes, hypertension, and nephropathy requires a medication adjustment. Which antihypertensive class provides renal protection?",
        answer: "Sartans",
        options: [
          "ACE inhibitors",
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics"
        ]
      },
      {
        id: 138,
        question: "A 59-year-old female with heart failure and atrial fibrillation is considering rate control medication. What is a suitable choice?",
        answer: "Diltiazem",
        options: [
          "Amiodarone",
          "Digoxin",
          "Flecainide",
          "Sotalol"
        ]
      },
      {
        id: 139,
        question: "A 68-year-old male with hyperlipidemia and liver disease is reviewing his medication. Which statin should be used with caution?",
        answer: "Atorvastatin",
        options: [
          "Fluvastatin",
          "Lovastatin",
          "Pravastatin",
          "Simvastatin"
        ]
      },
      {
        id: 140,
        question: "A 67-year-old male with stable ischemic heart disease and a sulfa allergy needs a diuretic. Which medication should be avoided?",
        answer: "Hydrochlorothiazide",
        options: [
          "Bumetanide",
          "Indapamide",
          "Spironolactone",
          "Torsemide"
        ]
      },
      {
        id: 141,
        question: "A 54-year-old female with hypertension and chronic kidney disease is considering an ARB. What is a major benefit of this class in her condition?",
        answer: "Decreased proteinuria",
        options: [
          "Increased GFR",
          "Lowered potassium levels",
          "Reduced risk of stroke",
          "Reduced systolic blood pressure"
        ]
      },
      {
        id: 142,
        question: "A 59-year-old male with atrial fibrillation and a previous GI bleed requires anticoagulation. Which medication has the lowest risk of gastrointestinal bleeding?",
        answer: "Apixaban",
        options: [
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 143,
        question: "A 73-year-old female with heart failure and diabetes needs a beta-blocker. Which one is preferred due to its metabolic neutrality?",
        answer: "Carvedilol",
        options: [
          "Atenolol",
          "Bisoprolol",
          "Metoprolol",
          "Propranolol"
        ]
      },
      {
        id: 144,
        question: "A 60-year-old male with angina and erectile dysfunction is on a PDE5 inhibitor. What class of angina medication should be avoided?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Ranolazine",
          "Statins"
        ]
      },
      {
        id: 145,
        question: "A 70-year-old female with hypertension and a history of hyperkalemia is considering an antihypertensive adjustment. Which drug should be used cautiously?",
        answer: "ACE inhibitors",
        options: [
          "Amlodipine",
          "Beta-blockers",
          "Calcium channel blockers",
          "Thiazide diuretics"
        ]
      },
      {
        id: 146,
        question: "A 55-year-old male with chronic heart failure and a cough is reviewing his medication. Which drug might be contributing to his cough?",
        answer: "Lisinopril",
        options: [
          "Digoxin",
          "Furosemide",
          "Metoprolol",
          "Spironolactone"
        ]
      },
      {
        id: 147,
        question: "A 63-year-old female with hypertension and asthma needs a new antihypertensive. What is the best choice for her?",
        answer: "Calcium channel blockers",
        options: [
          "Beta-blockers",
          "Clonidine",
          "Thiazide diuretics",
          "ACE inhibitors"
        ]
      },
      {
        id: 148,
        question: "A 72-year-old male with atrial fibrillation and renal impairment needs anticoagulation. Which drug requires careful monitoring of renal function?",
        answer: "Dabigatran",
        options: [
          "Apixaban",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 149,
        question: "A 58-year-old female with hypertension and peripheral edema is on amlodipine. What medication could be added to reduce edema?",
        answer: "A diuretic",
        options: [
          "Another calcium channel blocker",
          "A beta-blocker",
          "An ACE inhibitor",
          "An ARB"
        ]
      },
      {
        id: 150,
        question: "A 69-year-old male with stable angina and gout is considering a nitrate. What is an important consideration regarding his gout?",
        answer: "Nitrates can increase uric acid levels",
        options: [
          "Nitrates can exacerbate gout",
          "Nitrates have no effect on gout",
          "Nitrates can reduce uric acid levels",
          "Nitrates can increase uric acid levels",
          "Nitrates should be used with allopurinol"
        ]
      },
      {
        id: 151,
        question: "A 56-year-old male with heart failure and chronic obstructive pulmonary disease (COPD) is evaluating his beta-blocker therapy. Which beta-blocker is safer for COPD patients?",
        answer: "Bisoprolol",
        options: [
          "Atenolol",
          "Bisoprolol",
          "Carvedilol",
          "Metoprolol",
          "Propranolol"
        ]
      },
      {
        id: 152,
        question: "A 74-year-old female with hypertension and osteoporosis is on hydrochlorothiazide. What additional benefit does this medication provide for her osteoporosis?",
        answer: "Decreased calcium excretion",
        options: [
          "Decreased calcium excretion",
          "Increased bone density",
          "Increased calcium absorption",
          "Reduced risk of fractures",
          "Stabilized bone metabolism"
        ]
      },
      {
        id: 153,
        question: "A 65-year-old male with diabetes and hypertension is on an ACE inhibitor. He complains of a persistent dry cough. What is a suitable alternative medication?",
        answer: "An ARB",
        options: [
          "Another ACE inhibitor",
          "An ARB",
          "A beta-blocker",
          "A calcium channel blocker",
          "A thiazide diuretic"
        ]
      },
      {
        id: 154,
        question: "A 77-year-old female with atrial fibrillation and a history of falls requires anticoagulation. Which medication might be a safer choice considering her fall risk?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 155,
        question: "A 60-year-old male with hyperlipidemia and a recent episode of acute pancreatitis is on atorvastatin. What is an important consideration for his medication?",
        answer: "Atorvastatin should be discontinued",
        options: [
          "Atorvastatin dosage may need to be adjusted",
          "Atorvastatin should be discontinued",
          "Switch to a different statin",
          "Add ezetimibe to his regimen",
          "Monitor liver enzymes regularly"
        ]
      },
      {
        id: 156,
        question: "A 71-year-old female with chronic kidney disease and hypertension is on lisinopril. What is a key benefit of this medication in her condition?",
        answer: "Decreased progression of kidney disease",
        options: [
          "Decreased progression of kidney disease",
          "Increased GFR",
          "Lowered potassium levels",
          "Reduced risk of cardiovascular events",
          "Stabilization of blood pressure"
        ]
      },
      {
        id: 157,
        question: "A 66-year-old male with stable angina and reflux esophagitis is considering anti-anginal therapy. Which medication might exacerbate his reflux?",
        answer: "Isosorbide mononitrate",
        options: [
          "Amlodipine",
          "Diltiazem",
          "Isosorbide mononitrate",
          "Nitrates",
          "Ranolazine"
        ]
      },
      {
        id: 158,
        question: "A 54-year-old female with hypertension and a history of depression is on a beta-blocker. What potential issue should be monitored?",
        answer: "Worsening of depression",
        options: [
          "Exacerbation of hypertension",
          "Induction of hypothyroidism",
          "Potential for renal impairment",
          "Worsening of depression",
          "Reduced efficacy in lowering blood pressure"
        ]
      },
      {
        id: 159,
        question: "A 62-year-old male with diabetes and hypertension is on metoprolol. He reports frequent episodes of hypoglycemia. What is a concern with metoprolol in this patient?",
        answer: "Masking of hypoglycemia symptoms",
        options: [
          "Increased insulin resistance",
          "Masking of hypoglycemia symptoms",
          "Potentiation of hypoglycemia",
          "Reduction in blood glucose levels",
          "Worsening of diabetes control"
        ]
      },
      {
        id: 160,
        question: "A 70-year-old male with heart failure and chronic renal failure is on enalapril. He has elevated potassium levels. What medication adjustment is needed?",
        answer: "Discontinue enalapril",
        options: [
          "Decrease enalapril dose",
          "Discontinue enalapril",
          "Switch to a calcium channel blocker",
          "Add a potassium-sparing diuretic",
          "Monitor potassium levels regularly"
        ]
      },
      {
        id: 161,
        question: "A 65-year-old female with hypertension and bradycardia is being evaluated for a new antihypertensive. Which class should be avoided?",
        answer: "Beta-blockers",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Diuretics",
          "ACE inhibitors",
          "ARBs"
        ]
      },
      {
        id: 162,
        question: "A 58-year-old male with a history of gout and hypertension is on hydrochlorothiazide. He reports a recent gout flare. What is the best course of action?",
        answer: "Switch to a loop diuretic",
        options: [
          "Continue hydrochlorothiazide",
          "Switch to a loop diuretic",
          "Add a beta-blocker",
          "Start allopurinol",
          "Increase hydrochlorothiazide dose"
        ]
      },
      {
        id: 163,
        question: "A 72-year-old female with atrial fibrillation and a history of intestinal bleeding is on warfarin. Which alternative anticoagulant is preferable?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Clopidogrel"
        ]
      },
      {
        id: 164,
        question: "A 55-year-old male with stable angina and hypotension is being reviewed for medication adjustment. Which medication might need to be reduced or discontinued?",
        answer: "Isosorbide mononitrate",
        options: [
          "Amlodipine",
          "Aspirin",
          "Atorvastatin",
          "Isosorbide mononitrate",
          "Metoprolol"
        ]
      },
      {
        id: 165,
        question: "A 63-year-old female with diabetes, hypertension, and peripheral neuropathy is on lisinopril. What additional benefit does lisinopril provide for her diabetes?",
        answer: "Protection against diabetic nephropathy",
        options: [
          "Improved insulin sensitivity",
          "Increased glucose uptake",
          "Protection against diabetic nephropathy",
          "Reduction of neuropathic pain",
          "Stabilization of blood glucose levels"
        ]
      },
      {
        id: 166,
        question: "A 60-year-old male with chronic kidney disease and hypertension is on losartan. He has a high serum creatinine level. What should be monitored closely?",
        answer: "Renal function",
        options: [
          "Blood glucose levels",
          "Liver function tests",
          "Potassium levels",
          "Renal function",
          "Thyroid function"
        ]
      },
      {
        id: 167,
        question: "A 67-year-old female with osteoporosis and hypertension is on a calcium channel blocker. She is concerned about her bone health. What should be advised?",
        answer: "Switch to a thiazide diuretic",
        options: [
          "Discontinue the calcium channel blocker",
          "Add a bisphosphonate",
          "Add a vitamin D supplement",
          "Switch to a beta-blocker",
          "Switch to a thiazide diuretic"
        ]
      },
      {
        id: 168,
        question: "A 75-year-old male with atrial fibrillation and mild cognitive impairment is on dabigatran. What is important to monitor in this patient?",
        answer: "Renal function",
        options: [
          "Cognitive function",
          "Electrolyte levels",
          "Liver function",
          "Renal function",
          "Thyroid function"
        ]
      },
      {
        id: 169,
        question: "A 54-year-old female with hypertension and asthma is on a beta-blocker. She reports increased wheezing. What medication adjustment is indicated?",
        answer: "Switch to a calcium channel blocker",
        options: [
          "Add a bronchodilator",
          "Increase the beta-blocker dose",
          "Switch to a calcium channel blocker",
          "Switch to an ACE inhibitor",
          "Switch to an ARB"
        ]
      },
      {
        id: 170,
        question: "A 69-year-old male with stable ischemic heart disease and erectile dysfunction is seeking medication advice. Which anti-anginal medication should be used cautiously?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Ranolazine",
          "Statins"
        ]
      },
      {
        id: 171,
        question: "A 62-year-old female with heart failure and a history of depression is on carvedilol. What potential side effect should be monitored?",
        answer: "Exacerbation of depression",
        options: [
          "Exacerbation of heart failure",
          "Exacerbation of depression",
          "Hypoglycemia",
          "Renal impairment",
          "Worsening asthma"
        ]
      },
      {
        id: 172,
        question: "A 77-year-old male with hypertension and benign prostatic hyperplasia is on doxazosin. What is a key benefit of this medication for his BPH?",
        answer: "Improved urinary flow",
        options: [
          "Decreased prostate size",
          "Improved urinary flow",
          "Reduced risk of prostate cancer",
          "Reduced urinary frequency",
          "Stabilization of blood pressure"
        ]
      },
      {
        id: 173,
        question: "A 68-year-old female with diabetes and hypertension is on an ACE inhibitor. She experiences facial swelling. What is the next step?",
        answer: "Discontinue the ACE inhibitor",
        options: [
          "Add an ARB",
          "Add an antihistamine",
          "Discontinue the ACE inhibitor",
          "Reduce the ACE inhibitor dose",
          "Switch to a beta-blocker"
        ]
      },
      {
        id: 174,
        question: "A 57-year-old male with chronic stable angina and gastroesophageal reflux disease (GERD) is on a nitrate. What concern should be addressed?",
        answer: "Potentiation of GERD symptoms",
        options: [
          "Increased risk of myocardial infarction",
          "Increased risk of stroke",
          "Potentiation of GERD symptoms",
          "Reduction in angina control",
          "Risk of hypotension"
        ]
      },
      {
        id: 175,
        question: "A 71-year-old female with atrial fibrillation and a high stroke risk is on aspirin. What medication is more appropriate for stroke prevention?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Clopidogrel",
          "Dabigatran",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 176,
        question: "A 64-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) is on metoprolol. What is a potential risk with this medication?",
        answer: "Exacerbation of COPD",
        options: [
          "Exacerbation of COPD",
          "Increased blood pressure",
          "Increased heart rate",
          "Renal impairment",
          "Worsening heart failure"
        ]
      },
      {
        id: 177,
        question: "A 59-year-old female with heart failure and diabetes is considering spironolactone. What should be monitored due to her diabetes?",
        answer: "Potassium levels",
        options: [
          "Blood glucose levels",
          "Lipid profile",
          "Potassium levels",
          "Renal function",
          "Thyroid function"
        ]
      },
      {
        id: 178,
        question: "A 66-year-old male with hypertension and a history of peptic ulcer disease is on aspirin for primary prevention. What is an important consideration?",
        answer: "Discontinue aspirin",
        options: [
          "Increase aspirin dose",
          "Monitor for GI bleeding",
          "Start a proton pump inhibitor",
          "Switch to clopidogrel"
        ]
      },
      {
        id: 179,
        question: "A 73-year-old female with chronic kidney disease and hypertension is on losartan. She complains of dizziness. What should be evaluated?",
        answer: "Blood pressure",
        options: [
          "Electrolyte balance",
          "Liver function",
          "Renal function",
          "Thyroid function"
        ]
      },
      {
        id: 180,
        question: "A 59-year-old male with hypertension and chronic kidney disease is experiencing hyperkalemia. Which antihypertensive should be reconsidered?",
        answer: "Lisinopril",
        options: [
          "Amlodipine",
          "Furosemide",
          "Metoprolol",
          "Nifedipine"
        ]
      },
      {
        id: 181,
        question: "A 68-year-old female with atrial fibrillation and a history of major bleeding is under anticoagulation therapy. Which anticoagulant is most appropriate?",
        answer: "Apixaban",
        options: [
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 182,
        question: "A 70-year-old male with stable ischemic heart disease is experiencing dizziness and fatigue. He is on atenolol. What might be the cause?",
        answer: "Normal side effect of atenolol",
        options: [
          "Atenolol overdose",
          "Interaction with another medication",
          "Underlying cardiac issue",
          "Worsening ischemic disease"
        ]
      },
      {
        id: 183,
        question: "A 62-year-old female with hypertension and type 2 diabetes is considering an ARB. Which ARB is beneficial for her diabetic nephropathy?",
        answer: "Irbesartan",
        options: [
          "Candesartan",
          "Losartan",
          "Olmesartan",
          "Valsartan"
        ]
      },
      {
        id: 184,
        question: "A 56-year-old male with chronic heart failure is experiencing worsening renal function. He is on enalapril and spironolactone. What should be the focus of medication review?",
        answer: "Both enalapril and spironolactone",
        options: [
          "Enalapril only",
          "Spironolactone only",
          "Addition of a diuretic",
          "Adjustment of heart failure medication"
        ]
      },
      {
        id: 185,
        question: "A 73-year-old female with atrial fibrillation and moderate renal impairment requires anticoagulation. Which medication requires dose adjustment or monitoring?",
        answer: "Dabigatran",
        options: [
          "Apixaban",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 186,
        question: "A 65-year-old male with stable angina and erectile dysfunction is on isosorbide mononitrate. He is considering a PDE5 inhibitor. What is a major concern?",
        answer: "Potential for severe hypotension",
        options: [
          "Decreased efficacy of angina treatment",
          "Increased risk of myocardial infarction",
          "Risk of arrhythmias",
          "Worsening of erectile dysfunction"
        ]
      },
      {
        id: 187,
        question: "A 60-year-old female with hypertension and history of angioedema on ACE inhibitors is on losartan. What should be monitored due to her history?",
        answer: "Signs of angioedema",
        options: [
          "Blood glucose levels",
          "Blood pressure",
          "Liver function",
          "Renal function"
        ]
      },
      {
        id: 188,
        question: "A 57-year-old male with heart failure and COPD is on carvedilol. He reports increased shortness of breath. What might be the cause?",
        answer: "Heart failure exacerbation",
        options: [
          "COPD exacerbation",
          "Interaction with COPD medication",
          "Normal side effect of carvedilol",
          "Pulmonary infection"
        ]
      },
      {
        id: 189,
        question: "A 71-year-old female with chronic kidney disease and heart failure is on furosemide. She is experiencing decreased urine output. What is the most likely cause?",
        answer: "Heart failure exacerbation",
        options: [
          "Dehydration",
          "Deterioration of kidney function",
          "Furosemide resistance",
          "Hypotension"
        ]
      },
      {
        id: 190,
        question: "A 66-year-old male with atrial fibrillation and a high stroke risk is on aspirin. Is aspirin monotherapy sufficient for stroke prevention?",
        answer: "No, should be on an anticoagulant",
        options: [
          "Yes, if no history of stroke",
          "Yes, with regular monitoring",
          "No, unless contraindicated",
          "No, should combine with a P2Y12 inhibitor"
        ]
      },
      {
        id: 191,
        question: "A 58-year-old female with hypertension and recent onset of type 2 diabetes is on metoprolol. She reports frequent hypoglycemic episodes. What should be considered?",
        answer: "Reducing the dose of metoprolol",
        options: [
          "Adjusting diabetes medication",
          "Changing the beta-blocker",
          "Monitoring blood glucose more frequently",
          "Switching to a different antihypertensive class"
        ]
      },
      {
        id: 192,
        question: "A 69-year-old male with stable ischemic heart disease and chronic renal failure is on atorvastatin. What is important to monitor?",
        answer: "Liver function tests",
        options: [
          "Renal function tests",
          "Serum cholesterol levels",
          "Signs of muscle pain or weakness",
          "Thyroid function tests"
        ]
      },
      {
        id: 193,
        question: "A 75-year-old female with hypertension and glaucoma is on a thiazide diuretic. What potential complication should be monitored?",
        answer: "Increased risk of acute glaucoma",
        options: [
          "Decreased intraocular pressure",
          "Renal impairment",
          "Worsening hypertension",
          "Electrolyte imbalance"
        ]
      },
      {
        id: 194,
        question: "A 54-year-old male with atrial fibrillation and a prior GI bleed is on rivaroxaban. What is an alternative anticoagulant with a potentially lower GI bleeding risk?",
        answer: "Apixaban",
        options: [
          "Dabigatran",
          "Edoxaban",
          "Warfarin",
          "Clopidogrel"
        ]
      },
      {
        id: 195,
        question: "A 67-year-old female with heart failure and diabetes is on amlodipine. She reports swelling in her legs. What should be the first step in management?",
        answer: "Reduce amlodipine dose",
        options: [
          "Add a diuretic",
          "Increase amlodipine dose",
          "Switch to a different calcium channel blocker",
          "Switch to a different antihypertensive class"
        ]
      },
      {
        id: 196,
        question: "A 70-year-old male with chronic kidney disease and hypertension is on lisinopril. His serum creatinine has increased. What action is needed?",
        answer: "Discontinue lisinopril",
        options: [
          "Continue monitoring only",
          "Decrease the dose of lisinopril",
          "Switch to a calcium channel blocker",
          "Switch to a diuretic"
        ]
      },
      {
        id: 197,
        question: "A 59-year-old female with hypertension and a history of depression is on a beta-blocker. She reports worsening mood. What should be considered?",
        answer: "Switching to a different antihypertensive class",
        options: [
          "Adding an antidepressant",
          "Changing to a different beta-blocker",
          "Monitoring depression more closely",
          "Continue the current regimen with close monitoring"
        ]
      },
      {
        id: 198,
        question: "A 64-year-old male with stable angina and a peptic ulcer is on aspirin. What is an important consideration for his medication regimen?",
        answer: "Add a PPI",
        options: [
          "Change to a different NSAID",
          "Discontinue aspirin",
          "Switch to clopidogrel",
          "Use aspirin with caution"
        ]
      },
      {
        id: 199,
        question: "A 72-year-old female with heart failure and asthma is on enalapril. She reports a persistent dry cough. What is a suitable alternative medication?",
        answer: "An ARB",
        options: [
          "Another ACE inhibitor",
          "A beta-blocker",
          "A calcium channel blocker",
          "A diuretic"
        ]
      },
      {
        id: 200,
        question: "A 64-year-old female with hypertension and chronic bronchitis is on a beta-blocker. She reports increased coughing. What medication adjustment is indicated?",
        answer: "Discontinue the beta-blocker",
        options: [
          "Add a bronchodilator",
          "Change to a non-selective beta-blocker",
          "Switch to a cardioselective beta-blocker",
          "Switch to an ACE inhibitor"
        ]
      },
      {
        id: 201,
        question: "A 75-year-old male with atrial fibrillation and a history of renal impairment is on dabigatran. What is a key consideration for his medication?",
        answer: "Frequent renal function monitoring",
        options: [
          "Increasing the dose",
          "Supplementing with aspirin",
          "Switching to warfarin",
          "Using the lowest effective dose"
        ]
      },
      {
        id: 202,
        question: "A 57-year-old female with hypertension and osteoporosis is on a thiazide diuretic. What is a beneficial effect of this medication for her osteoporosis?",
        answer: "Decreased bone resorption",
        options: [
          "Increased bone density",
          "Increased calcium absorption",
          "Reduced risk of fractures",
          "Stabilization of bone metabolism"
        ]
      },
      {
        id: 203,
        question: "A 69-year-old male with stable angina is considering adding a PDE5 inhibitor for erectile dysfunction. He is currently on a nitrate. What is the primary concern?",
        answer: "Potential for severe hypotension",
        options: [
          "Decreased efficacy of angina treatment",
          "Increased risk of myocardial infarction",
          "Risk of arrhythmias",
          "Worsening of erectile dysfunction"
        ]
      },
      {
        id: 204,
        question: "A 60-year-old female with heart failure and diabetes is on a beta-blocker. She experiences frequent hypoglycemic episodes. What should be considered?",
        answer: "Changing the beta-blocker",
        options: [
          "Discontinuing the beta-blocker",
          "Monitoring blood glucose more frequently",
          "Reducing the dose of the beta-blocker",
          "Switching to a different class of heart failure medication"
        ]
      },
      {
        id: 205,
        question: "A 71-year-old male with chronic kidney disease and atrial fibrillation is on rivaroxaban. What is important to monitor in this patient?",
        answer: "Renal function",
        options: [
          "Hemoglobin levels",
          "Liver function",
          "Platelet count",
          "Thyroid function"
        ]
      },
      {
        id: 206,
        question: "A 53-year-old female with hypertension and a history of angioedema with ACE inhibitors is on an ARB. She reports facial swelling. What is the best course of action?",
        answer: "Discontinue the ARB",
        options: [
          "Add an antihistamine",
          "Continue the ARB with close monitoring",
          "Discontinue the ARB",
          "Reduce the dose of the ARB",
          "Switch to a calcium channel blocker"
        ]
      },
      {
        id: 207,
        question: "A 67-year-old male with heart failure and COPD is on carvedilol. He reports worsening shortness of breath. What might be the cause?",
        answer: "Carvedilol exacerbating COPD",
        options: [
          "Carvedilol exacerbating COPD",
          "Fluid retention due to heart failure",
          "Interaction with COPD medication",
          "Normal side effect of carvedilol",
          "Pulmonary infection"
        ]
      },
      {
        id: 208,
        question: "A 62-year-old female with chronic kidney disease and heart failure is on enalapril and furosemide. She has increasing edema. What should be evaluated first?",
        answer: "Furosemide dose",
        options: [
          "Enalapril dose",
          "Furosemide dose",
          "Kidney function",
          "Heart function",
          "Fluid and salt intake"
        ]
      },
      {
        id: 209,
        question: "A 58-year-old male with hypertension and a history of gout is on hydrochlorothiazide. He reports a recent gout attack. What modification is needed?",
        answer: "Switch to a loop diuretic",
        options: [
          "Add a gout medication",
          "Increase the hydrochlorothiazide dose",
          "Switch to a loop diuretic",
          "Switch to an ACE inhibitor",
          "Switch to another thiazide diuretic"
        ]
      },
      {
        id: 210,
        question: "A 73-year-old female with hypertension and chronic anxiety is on a beta-blocker. She reports increased anxiety. What is the appropriate action?",
        answer: "Increase the beta-blocker dose",
        options: [
          "Add an anxiolytic",
          "Change to a different beta-blocker",
          "Discontinue the beta-blocker",
          "Increase the beta-blocker dose",
          "Switch to a different class of antihypertensive"
        ]
      },
      {
        id: 211,
        question: "A 65-year-old male with atrial fibrillation and moderate renal dysfunction is on apixaban. What is important regarding his medication regimen?",
        answer: "Regular renal function tests",
        options: [
          "Frequent liver function tests",
          "Monitoring for bleeding",
          "Regular renal function tests",
          "Routine INR monitoring",
          "Supplementing with aspirin"
        ]
      },
      {
        id: 212,
        question: "A 60-year-old female with stable ischemic heart disease and a history of peptic ulcer disease is on low-dose aspirin. What additional medication might be beneficial?",
        answer: "A PPI",
        options: [
          "A PPI",
          "A beta-blocker",
          "Another NSAID",
          "Clopidogrel",
          "High-dose aspirin"
        ]
      },
      {
        id: 213,
        question: "A 70-year-old male with heart failure and a history of asthma is on lisinopril. He reports wheezing and shortness of breath. What should be the focus of medication review?",
        answer: "Lisinopril",
        options: [
          "Asthma medication",
          "Heart failure medication",
          "Lisinopril",
          "Rescue inhaler usage",
          "Steroid treatment"
        ]
      },
      {
        id: 214,
        question: "A 54-year-old male with hypertension and erectile dysfunction is considering sildenafil. He is currently on amlodipine. What should be monitored?",
        answer: "Blood pressure",
        options: [
          "Blood pressure",
          "Heart rate",
          "Liver function",
          "Renal function",
          "Serum cholesterol"
        ]
      },
      {
        id: 215,
        question: "A 77-year-old female with chronic kidney disease and heart failure is on spironolactone. She reports muscle weakness. What should be checked first?",
        answer: "Potassium levels",
        options: [
          "Calcium levels",
          "Magnesium levels",
          "Potassium levels",
          "Renal function",
          "Thyroid function"
        ]
      },
      {
        id: 216,
        question: "A 59-year-old male with atrial fibrillation and diabetes is on warfarin. He has inconsistent INR levels. What might improve INR control?",
        answer: "More frequent INR monitoring",
        options: [
          "Changing to a different anticoagulant",
          "More frequent INR monitoring",
          "Starting insulin therapy",
          "Switching to a low-carbohydrate diet",
          "Using a consistent dose of warfarin"
        ]
      },
      {
        id: 217,
        question: "A 68-year-old female with hypertension and a history of high cholesterol is on atorvastatin. She reports muscle pain. What is the first step in management?",
        answer: "Changing to a different statin",
        options: [
          "Changing to a different statin",
          "Decreasing the atorvastatin dose",
          "Discontinuing atorvastatin",
          "Monitoring liver enzymes",
          "Starting a muscle relaxant"
        ]
      },
      {
        id: 218,
        question: "A 71-year-old male with stable angina and peripheral artery disease is on clopidogrel. What is a key benefit of this medication for him?",
        answer: "Reduced risk of arterial thrombosis",
        options: [
          "Decreased angina frequency",
          "Improved walking distance",
          "Lowered blood pressure",
          "Reduced risk of arterial thrombosis",
          "Stabilization of heart rate"
        ]
      },
      {
        id: 219,
        question: "A 66-year-old female with heart failure and renal impairment is on a high dose of furosemide. She has decreasing urine output. What should be considered?",
        answer: "Switching to torsemide",
        options: [
          "Adding a thiazide diuretic",
          "Decreasing furosemide dose",
          "Initiating dialysis",
          "Switching to a potassium-sparing diuretic",
          "Switching to torsemide"
        ]
      },
      {
        id: 220,
        question: "A 63-year-old male with hypertension and a history of hyperkalemia is on lisinopril. What medication change is advisable?",
        answer: "Change to a calcium channel blocker",
        options: [
          "Change to a calcium channel blocker",
          "Change to a beta-blocker",
          "Add a potassium-sparing diuretic",
          "Increase lisinopril dose",
          "Continue lisinopril with potassium monitoring"
        ]
      },
      {
        id: 221,
        question: "A 57-year-old female with chronic heart failure and renal impairment is on furosemide. She has worsening renal function. What action is recommended?",
        answer: "Evaluate alternative diuretics",
        options: [
          "Increase furosemide dose",
          "Add hydrochlorothiazide",
          "Evaluate alternative diuretics",
          "Discontinue furosemide",
          "Add spironolactone"
        ]
      },
      {
        id: 222,
        question: "A 70-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more suitable anticoagulant?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Clopidogrel",
          "Dabigatran",
          "Rivaroxaban",
          "Warfarin"
        ]
      },
      {
        id: 223,
        question: "A 68-year-old female with hypertension and osteoporosis is on a beta-blocker. What alternative antihypertensive could also benefit her osteoporosis?",
        answer: "Thiazide diuretic",
        options: [
          "ACE inhibitor",
          "ARB",
          "Calcium channel blocker",
          "Thiazide diuretic",
          "Alpha-blocker"
        ]
      },
      {
        id: 224,
        question: "A 55-year-old male with stable ischemic heart disease and diabetes is on metformin and atorvastatin. He reports muscle pain. What might be the cause?",
        answer: "Atorvastatin side effect",
        options: [
          "Atorvastatin side effect",
          "Diabetes complication",
          "Metformin side effect",
          "Normal aging",
          "Physical overexertion"
        ]
      },
      {
        id: 225,
        question: "A 72-year-old female with atrial fibrillation and chronic kidney disease is on warfarin. What is an important aspect of her care?",
        answer: "Regular INR monitoring",
        options: [
          "Regular INR monitoring",
          "Switching to an ARB",
          "Lowering warfarin dose",
          "Discontinuing warfarin",
          "Adding an antiplatelet agent"
        ]
      },
      {
        id: 226,
        question: "A 60-year-old male with hypertension and a recent stroke is on losartan. What additional medication could benefit his stroke prevention?",
        answer: "An antiplatelet agent",
        options: [
          "Another ARB",
          "A calcium channel blocker",
          "A statin",
          "A beta-blocker",
          "An antiplatelet agent"
        ]
      },
      {
        id: 227,
        question: "A 67-year-old female with stable angina and hypothyroidism is on levothyroxine and isosorbide mononitrate. What is a concern with this combination?",
        answer: "Decreased effectiveness of levothyroxine",
        options: [
          "Increased risk of arrhythmia",
          "Decreased effectiveness of levothyroxine",
          "Hypertension exacerbation",
          "Increased angina frequency",
          "Thyroid function alteration"
        ]
      },
      {
        id: 228,
        question: "A 73-year-old male with chronic heart failure and gout is on allopurinol and enalapril. He reports increased frequency of gout attacks. What should be considered?",
        answer: "Switching from enalapril to an ARB",
        options: [
          "Discontinuing allopurinol",
          "Switching from enalapril to an ARB",
          "Increasing allopurinol dose",
          "Adjusting heart failure medication",
          "Starting a diuretic"
        ]
      },
      {
        id: 229,
        question: "A 58-year-old female with atrial fibrillation and a history of GI bleed is on dabigatran. What anticoagulant could be safer?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Rivaroxaban",
          "Warfarin",
          "Clopidogrel",
          "Edoxaban"
        ]
      },
      {
        id: 230,
        question: "A 62-year-old male with diabetes and hypertension is on an ACE inhibitor and reports persistent cough. What is an appropriate alternative?",
        answer: "An ARB",
        options: [
          "Another ACE inhibitor",
          "An ARB",
          "A beta-blocker",
          "A calcium channel blocker",
          "A diuretic"
        ]
      },
      {
        id: 231,
        question: "A 66-year-old female with hypertension and asthma is considering a beta-blocker. Why should this be avoided?",
        answer: "Risk of bronchospasm",
        options: [
          "Risk of hyperglycemia",
          "Risk of hypotension",
          "Risk of bronchospasm",
          "Risk of renal impairment",
          "Risk of heart failure exacerbation"
        ]
      },
      {
        id: 232,
        question: "A 71-year-old male with chronic kidney disease and heart failure is on spironolactone. What should be closely monitored?",
        answer: "Potassium levels",
        options: [
          "Blood glucose levels",
          "Potassium levels",
          "Blood pressure",
          "Renal function",
          "Liver function"
        ]
      },
      {
        id: 233,
        question: "A 59-year-old female with atrial fibrillation and a history of peptic ulcer is on rivaroxaban. What alternative medication could be considered?",
        answer: "Apixaban",
        options: [
          "Apixaban",
          "Dabigatran",
          "Warfarin",
          "Edoxaban",
          "Clopidogrel"
        ]
      },
      {
        id: 234,
        question: "A 54-year-old male with stable angina and erectile dysfunction is using sildenafil. What angina medication should he avoid?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Ranolazine",
          "Aspirin"
        ]
      },
      {
        id: 235,
        question: "A 75-year-old female with hypertension and chronic obstructive pulmonary disease (COPD) is on amlodipine. She reports ankle swelling. What should be the first step in management?",
        answer: "Reduce amlodipine dose",
        options: [
          "Increase amlodipine dose",
          "Add a diuretic",
          "Reduce amlodipine dose",
          "Switch to a beta-blocker",
          "Change to an ACE inhibitor"
        ]
      },
      {
        id: 236,
        question: "A 68-year-old male with heart failure and renal impairment is on lisinopril. He has worsening renal function. What is an advisable medication change?",
        answer: "Switch to an ARB",
        options: [
          "Increase lisinopril dose",
          "Add a diuretic",
          "Switch to an ARB",
          "Discontinue lisinopril",
          "Continue lisinopril with close monitoring"
        ]
      },
      {
        id: 237,
        question: "A 60-year-old female with hypertension and a history of depression is on propranolol. She reports mood worsening. What is a suitable alternative medication?",
        answer: "A calcium channel blocker",
        options: [
          "Another beta-blocker",
          "An ACE inhibitor",
          "A calcium channel blocker",
          "An ARB",
          "A diuretic"
        ]
      },
      {
        id: 238,
        question: "A 77-year-old male with stable ischemic heart disease and a history of liver disease is on simvastatin. What should be monitored?",
        answer: "Liver function tests",
        options: [
          "Liver function tests",
          "Renal function tests",
          "Serum cholesterol levels",
          "Blood pressure",
          "Thyroid function tests"
        ]
      },
      {
        id: 239,
        question: "A 53-year-old female with heart failure and diabetes is on metformin and carvedilol. She reports hypoglycemia. What should be considered?",
        answer: "Monitoring blood glucose more frequently",
        options: [
          "Decreasing metformin dose",
          "Stopping carvedilol",
          "Monitoring blood glucose more frequently",
          "Switching to a different beta-blocker",
          "Adjusting diabetes treatment"
        ]
      },
      {
        id: 240,
        question: "A 60-year-old male with hypertension and chronic kidney disease is on lisinopril. He experiences a persistent dry cough. What is a suitable alternative medication?",
        answer: "Candesartan",
        options: [
          "Candesartan",
          "Amlodipine",
          "Metoprolol",
          "Hydrochlorothiazide",
          "Diltiazem"
        ]
      },
      {
        id: 241,
        question: "A 72-year-old female with atrial fibrillation and a history of falls is on warfarin. Considering her fall risk, what medication adjustment is advisable?",
        answer: "Switch to a direct oral anticoagulant",
        options: [
          "Switch to a direct oral anticoagulant",
          "Increase warfarin dose",
          "Add aspirin",
          "Discontinue anticoagulation",
          "Monitor INR more frequently"
        ]
      },
      {
        id: 242,
        question: "A 55-year-old male with stable angina and erectile dysfunction is considering a medication for angina. What should be avoided?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Ranolazine",
          "Aspirin"
        ]
      },
      {
        id: 243,
        question: "A 67-year-old female with hypertension and osteoporosis is on hydrochlorothiazide. She is concerned about her bone health. What advice is appropriate?",
        answer: "Continue hydrochlorothiazide as it is beneficial for bones",
        options: [
          "Switch to a calcium channel blocker",
          "Add a bisphosphonate",
          "Continue hydrochlorothiazide as it is beneficial for bones",
          "Change to an ACE inhibitor",
          "Start calcium and vitamin D supplements"
        ]
      },
      {
        id: 244,
        question: "A 58-year-old male with heart failure and renal impairment is on enalapril. He reports worsening renal function. What should be considered?",
        answer: "Adjust or discontinue enalapril",
        options: [
          "Increase enalapril dose",
          "Add a diuretic",
          "Adjust or discontinue enalapril",
          "Start an ARB",
          "Maintain current enalapril dose with close monitoring"
        ]
      },
      {
        id: 245,
        question: "A 63-year-old female with atrial fibrillation and a high bleeding risk is on rivaroxaban. What is a safer anticoagulation strategy?",
        answer: "Switch to apixaban",
        options: [
          "Switch to apixaban",
          "Switch to dabigatran",
          "Switch to warfarin",
          "Continue rivaroxaban with closer monitoring",
          "Add an antiplatelet agent"
        ]
      },
      {
        id: 246,
        question: "A 70-year-old male with stable ischemic heart disease and type 2 diabetes is on metformin and atorvastatin. He reports muscle cramps. What should be evaluated?",
        answer: "Atorvastatin dosage",
        options: [
          "Atorvastatin dosage",
          "Metformin dosage",
          "Diabetes control",
          "Electrolyte imbalance",
          "Physical activity level"
        ]
      },
      {
        id: 247,
        question: "A 74-year-old female with hypertension and a history of bronchospasm is on a beta-blocker. What is a more suitable medication?",
        answer: "Calcium channel blocker",
        options: [
          "ACE inhibitor",
          "ARB",
          "Calcium channel blocker",
          "Another beta-blocker",
          "Thiazide diuretic"
        ]
      },
      {
        id: 248,
        question: "A 59-year-old male with heart failure and COPD is on carvedilol. He reports worsening of respiratory symptoms. What is the best course of action?",
        answer: "Switch to a cardioselective beta-blocker",
        options: [
          "Discontinue carvedilol",
          "Switch to a cardioselective beta-blocker",
          "Increase the dose of carvedilol",
          "Add a bronchodilator",
          "Optimize COPD treatment"
        ]
      },
      {
        id: 249,
        question: "A 68-year-old female with chronic kidney disease and atrial fibrillation is on dabigatran. She has deteriorating renal function. What adjustment is necessary?",
        answer: "Switch to a different anticoagulant",
        options: [
          "Switch to a different anticoagulant",
          "Increase dabigatran dose",
          "Add an antiplatelet agent",
          "Continue dabigatran with frequent renal monitoring",
          "Discontinue dabigatran"
        ]
      },
      {
        id: 250,
        question: "A 57-year-old female with hypertension and a history of angioedema with ACE inhibitors is on losartan. She reports facial swelling. What action should be taken?",
        answer: "Discontinue losartan",
        options: [
          "Continue losartan with close monitoring",
          "Switch to a calcium channel blocker",
          "Increase losartan dose",
          "Add an ACE inhibitor",
          "Discontinue losartan"
        ]
      },
      {
        id: 251,
        question: "A 66-year-old male with stable angina and a history of liver disease is on isosorbide mononitrate. He reports dizziness. What should be evaluated?",
        answer: "Blood pressure",
        options: [
          "Liver function",
          "Blood pressure",
          "Isosorbide mononitrate dosage",
          "Angina status",
          "Cardiac function"
        ]
      },
      {
        id: 252,
        question: "A 60-year-old female with heart failure and diabetes is on a thiazide diuretic. She has persistent hyperglycemia. What medication adjustment might help?",
        answer: "Switch to a loop diuretic",
        options: [
          "Switch to a loop diuretic",
          "Increase thiazide dose",
          "Change to a potassium-sparing diuretic",
          "Add an ACE inhibitor",
          "Adjust diabetes medication"
        ]
      },
      {
        id: 253,
        question: "A 73-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) is on amlodipine. He reports ankle edema. What should be considered?",
        answer: "Reducing amlodipine dose",
        options: [
          "Increasing amlodipine dose",
          "Adding a beta-blocker",
          "Changing to an ACE inhibitor",
          "Starting a diuretic",
          "Reducing amlodipine dose"
        ]
      },
      {
        id: 254,
        question: "A 54-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more effective stroke prevention strategy?",
        answer: "Switch to an anticoagulant",
        options: [
          "Increase aspirin dose",
          "Add clopidogrel",
          "Switch to an anticoagulant",
          "Combine aspirin with a beta-blocker",
          "Maintain current aspirin therapy"
        ]
      },
      {
        id: 255,
        question: "A 67-year-old female with stable ischemic heart disease and hypothyroidism is on levothyroxine and a beta-blocker. What should be monitored?",
        answer: "Thyroid function tests",
        options: [
          "Thyroid function tests",
          "Cardiac function",
          "Blood pressure",
          "Cholesterol levels",
          "Beta-blocker side effects"
        ]
      },
      {
        id: 256,
        question: "A 71-year-old male with chronic kidney disease and heart failure is on spironolactone. He reports muscle weakness. What should be checked?",
        answer: "Potassium levels",
        options: [
          "Potassium levels",
          "Calcium levels",
          "Magnesium levels",
          "Renal function",
          "Liver function"
        ]
      },
      {
        id: 257,
        question: "A 62-year-old female with hypertension and a history of depression is on an ACE inhibitor. She reports worsening depression. What could be a suitable alternative?",
        answer: "An ARB",
        options: [
          "A beta-blocker",
          "An ARB",
          "A calcium channel blocker",
          "A diuretic",
          "Another ACE inhibitor"
        ]
      },
      {
        id: 258,
        question: "A 58-year-old male with stable angina and erectile dysfunction is on sildenafil. He requires additional anti-anginal therapy. What should be avoided?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Ranolazine",
          "Aspirin"
        ]
      },
      {
        id: 259,
        question: "A 75-year-old female with hypertension and chronic bronchitis is on a non-selective beta-blocker. She reports increased coughing and wheezing. What is the best course of action?",
        answer: "Switch to a cardioselective beta-blocker",
        options: [
          "Switch to a cardioselective beta-blocker",
          "Increase the dose of the current beta-blocker",
          "Add a bronchodilator",
          "Switch to a calcium channel blocker",
          "Optimize bronchitis treatment"
        ]
      },
      {
        id: 260,
        question: "A 64-year-old male with heart failure and gout is on lisinopril and experiences frequent gout flares. What medication adjustment is advisable?",
        answer: "Change to an ARB",
        options: [
          "Add allopurinol",
          "Switch to a calcium channel blocker",
          "Change to an ARB",
          "Increase lisinopril dose",
          "Add a diuretic"
        ]
      },
      {
        id: 261,
        question: "A 59-year-old female with atrial fibrillation and chronic kidney disease is on apixaban. Given her kidney condition, what is important?",
        answer: "Regular renal function monitoring",
        options: [
          "Regular renal function monitoring",
          "Switching to warfarin",
          "Increasing apixaban dose",
          "Adding an antiplatelet agent",
          "Discontinuing anticoagulation"
        ]
      },
      {
        id: 262,
        question: "A 72-year-old male with hypertension and type 2 diabetes is on a beta-blocker. He reports episodes of hypoglycemia. What should be considered?",
        answer: "Switching to a calcium channel blocker",
        options: [
          "Switching to a calcium channel blocker",
          "Increasing beta-blocker dose",
          "Adding a diuretic",
          "Monitoring blood glucose more frequently",
          "Changing diabetes medication"
        ]
      },
      {
        id: 263,
        question: "A 68-year-old female with stable ischemic heart disease is on aspirin and reports gastrointestinal discomfort. What is an appropriate action?",
        answer: "Add a proton pump inhibitor",
        options: [
          "Add a proton pump inhibitor",
          "Switch to clopidogrel",
          "Discontinue aspirin",
          "Increase aspirin dose",
          "Combine aspirin with an antacid"
        ]
      },
      {
        id: 264,
        question: "A 55-year-old male with chronic kidney disease and heart failure is on furosemide and reports decreased urination. What should be evaluated?",
        answer: "Renal function",
        options: [
          "Furosemide dose",
          "Renal function",
          "Fluid intake",
          "Heart function",
          "Electrolyte balance"
        ]
      },
      {
        id: 265,
        question: "A 63-year-old female with hypertension and a history of bronchial asthma is on an ACE inhibitor. She reports worsening asthma symptoms. What is a suitable alternative?",
        answer: "A calcium channel blocker",
        options: [
          "A beta-blocker",
          "An ARB",
          "A calcium channel blocker",
          "A diuretic",
          "Another ACE inhibitor"
        ]
      },
      {
        id: 266,
        question: "A 70-year-old male with stable angina and reflux disease is on nitrates. He reports increased reflux symptoms. What could be a suitable management strategy?",
        answer: "Add a proton pump inhibitor",
        options: [
          "Increase nitrate dosage",
          "Add a proton pump inhibitor",
          "Switch to a beta-blocker",
          "Change to a calcium channel blocker",
          "Discontinue nitrates"
        ]
      },
      {
        id: 267,
        question: "A 58-year-old female with heart failure and diabetes is on a thiazide diuretic and experiences persistent hyperglycemia. What adjustment might help?",
        answer: "Switch to a loop diuretic",
        options: [
          "Switch to a loop diuretic",
          "Increase the diuretic dose",
          "Add a potassium-sparing diuretic",
          "Adjust diabetes medication",
          "Discontinue the diuretic"
        ]
      },
      {
        id: 268,
        question: "A 66-year-old male with atrial fibrillation and a previous ischemic stroke is on aspirin. What is a more effective anticoagulation therapy?",
        answer: "Switch to a direct oral anticoagulant",
        options: [
          "Increase aspirin dose",
          "Add clopidogrel",
          "Switch to a direct oral anticoagulant",
          "Combine aspirin with a beta-blocker",
          "Maintain aspirin only"
        ]
      },
      {
        id: 269,
        question: "A 75-year-old female with hypertension and osteoarthritis is on a non-selective NSAID. She reports increased blood pressure. What should be considered?",
        answer: "Switch to a selective NSAID",
        options: [
          "Adding a second antihypertensive",
          "Switching to a selective NSAID",
          "Increasing NSAID dose",
          "Starting a beta-blocker",
          "Monitoring blood pressure more closely"
        ]
      },
      {
        id: 270,
        question: "A 57-year-old male with stable ischemic heart disease and peptic ulcer disease is on low-dose aspirin. What gastroprotective strategy is advisable?",
        answer: "Add a proton pump inhibitor",
        options: [
          "Discontinue aspirin",
          "Add a proton pump inhibitor",
          "Switch to a different antiplatelet agent",
          "Combine aspirin with an H2 blocker",
          "Increase aspirin dose"
        ]
      },
      {
        id: 271,
        question: "A 69-year-old female with atrial fibrillation and renal impairment is on dabigatran. Given her renal condition, what is a key consideration?",
        answer: "Regular renal function monitoring",
        options: [
          "Switching to warfarin",
          "Regular renal function monitoring",
          "Increasing dabigatran dose",
          "Combining dabigatran with an antiplatelet",
          "Discontinuing anticoagulation"
        ]
      },
      {
        id: 272,
        question: "A 60-year-old male with hypertension and gout is on hydrochlorothiazide. He experiences frequent gout attacks. What change in therapy could help?",
        answer: "Switch to a loop diuretic",
        options: [
          "Switch to a loop diuretic",
          "Increase hydrochlorothiazide dose",
          "Add a beta-blocker",
          "Start allopurinol",
          "Change to an ACE inhibitor"
        ]
      },
      {
        id: 273,
        question: "A 74-year-old female with chronic kidney disease and heart failure is on lisinopril. She reports increased serum creatinine levels. What action is recommended?",
        answer: "Adjust or discontinue lisinopril",
        options: [
          "Increase lisinopril dose",
          "Add a diuretic",
          "Adjust or discontinue lisinopril",
          "Start an ARB",
          "Continue lisinopril with renal monitoring"
        ]
      },
      {
        id: 274,
        question: "A 53-year-old male with stable angina and erectile dysfunction is on sildenafil. He needs additional anti-anginal medication. What should be avoided?",
        answer: "Nitrates",
        options: [
          "Beta-blockers",
          "Calcium channel blockers",
          "Nitrates",
          "Ranolazine",
          "Aspirin"
        ]
      },
      {
        id: 275,
        question: "A 67-year-old female with hypertension and chronic bronchitis is on a beta-blocker. She reports increased cough and wheezing. What is a more suitable medication?",
        answer: "A calcium channel blocker",
        options: [
          "Another beta-blocker",
          "An ACE inhibitor",
          "A calcium channel blocker",
          "An ARB",
          "A diuretic"
        ]
      },
      {
        id: 276,
        question: "A 71-year-old male with heart failure and diabetes is on carvedilol. He reports episodes of hypoglycemia. What should be considered?",
        answer: "Adjusting diabetes medication",
        options: [
          "Switching to a different beta-blocker",
          "Adjusting diabetes medication",
          "Increasing carvedilol dose",
          "Monitoring blood glucose more frequently",
          "Adding a diuretic"
        ]
      },
      {
        id: 277,
        question: "A 62-year-old female with atrial fibrillation and mild renal impairment is on rivaroxaban. What is important to monitor?",
        answer: "Renal function",
        options: [
          "Liver function",
          "Renal function",
          "INR levels",
          "Blood pressure",
          "Electrolyte balance"
        ]
      },
      {
        id: 278,
        question: "A 56-year-old male with stable angina and gastroesophageal reflux disease (GERD) is on a nitrate. He reports worsening reflux. What adjustment might help?",
        answer: "Add a proton pump inhibitor",
        options: [
          "Increase nitrate dosage",
          "Switch to a different anti-anginal medication",
          "Add a proton pump inhibitor",
          "Combine nitrate with an H2 blocker",
          "Discontinue nitrate"
        ]
      },
      {
        id: 279,
        question: "A 77-year-old female with hypertension and chronic kidney disease is on amlodipine. She experiences peripheral edema. What is an appropriate action?",
        answer: "Reduce amlodipine dose",
        options: [
        "Increase amlodipine dose",
        "Add a diuretic",
        "Switch to a different calcium channel blocker",
        "Reduce amlodipine dose",
        "Change to an ACE inhibitor"
        ]
        },
        {
        id: 280,
        question: "A 61-year-old male with hypertension and a history of asthma is on an ACE inhibitor and reports worsening asthma symptoms. What medication adjustment should be considered?",
        answer: "Switch to an ARB",
        options: [
        "Switch to an ARB",
        "Increase ACE inhibitor dose",
        "Add a beta-blocker",
        "Add a calcium channel blocker",
        "Add a diuretic"
        ]
        },
        {
        id: 281,
        question: "A 75-year-old female with chronic heart failure and renal impairment is on digoxin. She has symptoms of digoxin toxicity. What should be done?",
        answer: "Reduce digoxin dose",
        options: [
        "Increase digoxin dose",
        "Discontinue digoxin",
        "Switch to a different medication",
        "Reduce digoxin dose",
        "Add an anti-arrhythmic"
        ]
        },
        {
        id: 282,
        question: "A 67-year-old male with stable ischemic heart disease and type 2 diabetes is on a statin. He reports muscle pain. What is a suitable alternative?",
        answer: "Switch to a different statin",
        options: [
        "Switch to a different statin",
        "Discontinue statin therapy",
        "Add a fibrate",
        "Begin CoQ10 supplementation",
        "Increase statin dose"
        ]
        },
        {
        id: 283,
        question: "A 70-year-old female with hypertension and chronic kidney disease is on a calcium channel blocker. She reports swollen ankles. What medication change could help?",
        answer: "Add a diuretic",
        options: [
        "Add a diuretic",
        "Increase calcium channel blocker dose",
        "Switch to a beta-blocker",
        "Switch to an ACE inhibitor",
        "Switch to an ARB"
        ]
        },
        {
        id: 284,
        question: "A 54-year-old male with atrial fibrillation and a prior history of peptic ulcer is on warfarin. He experiences gastrointestinal discomfort. What action is advisable?",
        answer: "Switch to a direct oral anticoagulant",
        options: [
        "Switch to a direct oral anticoagulant",
        "Add a proton pump inhibitor",
        "Discontinue warfarin",
        "Increase warfarin dose",
        "Combine warfarin with an antiplatelet"
        ]
        },
        {
        id: 285,
        question: "A 63-year-old female with heart failure and diabetes is on metformin and a beta-blocker. She reports frequent hypoglycemic episodes. What should be considered?",
        answer: "Adjusting diabetes medication",
        options: [
        "Switching to a different beta-blocker",
        "Adjusting diabetes medication",
        "Monitoring blood glucose more frequently",
        "Discontinuing beta-blocker",
        "Adding an ACE inhibitor"
        ]
        },
        {
        id: 286,
        question: "A 58-year-old male with chronic kidney disease and hypertension is on an ARB. He reports increased serum potassium. What is the best course of action?",
        answer: "Switch to a calcium channel blocker",
        options: [
        "Discontinue the ARB",
        "Switch to a calcium channel blocker",
        "Reduce the ARB dose",
        "Add a potassium-sparing diuretic",
        "Monitor potassium levels closely"
        ]
        },
        {
        id: 287,
        question: "A 69-year-old female with stable angina and gastroesophageal reflux disease (GERD) is on nitrates. She reports increased reflux symptoms. What adjustment might help?",
        answer: "Add a proton pump inhibitor",
        options: [
        "Increase nitrate dosage",
        "Add a proton pump inhibitor",
        "Change to a beta-blocker",
        "Switch to a different anti-anginal medication",
        "Discontinue nitrates"
        ]
        },
        {
        id: 288,
        question: "A 77-year-old male with atrial fibrillation and mild renal impairment is on dabigatran. Given his renal condition, what is important?",
        answer: "Regular renal function monitoring",
        options: [
        "Regular renal function monitoring",
        "Switching to a different anticoagulant",
        "Increasing dabigatran dose",
        "Combining dabigatran with an antiplatelet",
        "Discontinuing anticoagulation"
        ]
        },
        {
        id: 289,
        question: "A 56-year-old female with hypertension and type 2 diabetes is on an ACE inhibitor. She experiences facial swelling. What action should be taken?",
        answer: "Discontinue the ACE inhibitor",
        options: [
        "Continue the ACE inhibitor with close monitoring",
        "Switch to an ARB",
        "Increase the ACE inhibitor dose",
        "Add an antihistamine",
        "Discontinue the ACE inhibitor"
        ]
        },
        {
        id: 290,
        question: "A 65-year-old male with stable angina and hypothyroidism is on levothyroxine and a beta-blocker. What potential interaction should be monitored?",
        answer: "Levothyroxine efficacy reduction",
        options: [
        "Hypothyroidism exacerbation",
        "Increased risk of angina",
        "Levothyroxine efficacy reduction",
        "Beta-blocker metabolism alteration",
        "Thyroid function test changes"
        ]
        },
        {
        id: 291,
        question: "A 60-year-old female with atrial fibrillation and a history of GI bleed is on rivaroxaban. What should be closely monitored?",
        answer: "Renal function tests",
        options: [
        "Liver function tests",
        "Renal function tests",
        "Serum cholesterol levels",
        "Blood pressure",
        "Thyroid function tests"
        ]
        },
        {
        id: 292,
        question: "A 71-year-old male with heart failure and COPD is on carvedilol. He reports increased shortness of breath. What should be considered?",
        answer: "Switching to a different beta-blocker",
        options: [
        "Switching to a different beta-blocker",
        "Increasing carvedilol dose",
        "Adding a diuretic",
        "Optimizing COPD treatment",
        "Discontinuing carvedilol"
        ]
        },
        {
        id: 293,
        question: "A 74-year-old female with chronic kidney disease and diabetes is on an ACE inhibitor. She has elevated serum creatinine. What action is advisable?",
        answer: "Adjust or discontinue the ACE inhibitor",
        options: [
        "Increase the ACE inhibitor dose",
        "Add a diuretic",
        "Adjust or discontinue the ACE inhibitor",
        "Start an ARB",
        "Continue the ACE inhibitor with frequent monitoring"
        ]
        },
        {
        id: 294,
        question: "A 67-year-old male with hypertension and a history of gout is on hydrochlorothiazide. He experiences recurrent gout attacks. What is an appropriate medication change?",
        answer: "Switch to a loop diuretic",
        options: [
        "Switch to a loop diuretic",
        "Increase hydrochlorothiazide dose",
        "Add a beta-blocker",
        "Start allopurinol",
        "Change to an ACE inhibitor"
        ]
        },
        {
        id: 295,
        question: "A 59-year-old female with stable ischemic heart disease and a history of liver disease is on atorvastatin. What should be closely monitored?",
        answer: "Liver function tests",
        options: [
        "Liver function tests",
        "Renal function tests",
        "Serum cholesterol levels",
        "Blood pressure",
        "Thyroid function tests"
        ]
        },
        {
        id: 296,
        question: "A 53-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more effective anticoagulation strategy?",
        answer: "Switch to a direct oral anticoagulant",
        options: [
        "Increase aspirin dose",
        "Add clopidogrel",
        "Switch to a direct oral anticoagulant",
        "Combine aspirin with a beta-blocker",
        "Maintain aspirin only"
        ]
        },
        {
        id: 297,
        question: "A 62-year-old female with hypertension and chronic obstructive pulmonary disease (COP) is on a non-selective beta-blocker. She reports increased breathlessness. What is a more suitable medication?",
        answer: "A cardioselective beta-blocker",
        options: [
        "Another non-selective beta-blocker",
        "A cardioselective beta-blocker",
        "An ACE inhibitor",
        "A calcium channel blocker",
        "An ARB"
        ]
        },
        {
        id: 298,
        question: "A 70-year-old male with stable angina and a history of peptic ulcer is on low-dose aspirin. What gastroprotective strategy is advisable?",
        answer: "Add a proton pump inhibitor",
        options: [
        "Discontinue aspirin",
        "Add a proton pump inhibitor",
        "Switch to a different antiplatelet agent",
        "Combine aspirin with an H2 blocker",
        "Increase aspirin dose"
        ]
        },
        {
        id: 299,
        question: "A 55-year-old female with chronic heart failure and diabetes is on metformin and a thiazide diuretic. She experiences frequent hypoglycemic episodes. What should be considered?",
        answer: "Adjusting diabetes medication",
        options: [
        "Switching to a loop diuretic",
        "Adjusting diabetes medication",
        "Monitoring blood glucose more frequently",
        "Discontinuing the thiazide diuretic",
        "Adding an ACE inhibitor"
        ]
        },
        {
        id: 300,
        question: "A 58-year-old female with hypertension and chronic kidney disease is on losartan. She experiences elevated potassium levels. What is an appropriate adjustment?",
        answer: "Switch to a calcium channel blocker",
        options: [
        "Switch to a calcium channel blocker",
        "Increase losartan dose",
        "Add a potassium-sparing diuretic",
        "Change to an ACE inhibitor",
        "Continue losartan with potassium monitoring"
        ]
        },
        {
        id: 301,
        question: "A 67-year-old male with heart failure and diabetes is on metoprolol. He reports worsening blood glucose control. What should be considered?",
        answer: "Switching to a different beta-blocker",
        options: [
        "Switching to a different beta-blocker",
        "Adjusting diabetes medication",
        "Monitoring blood glucose more frequently",
        "Discontinuing metoprolol",
        "Adding an ACE inhibitor"
        ]
        },
        {
        id: 302,
        question: "A 60-year-old female with atrial fibrillation and a history of gastrointestinal bleeding is on dabigatran. What alternative anticoagulant could be safer?",
        answer: "Apixaban",
        options: [
        "Apixaban",
        "Rivaroxaban",
        "Warfarin",
        "Edoxaban",
        "Clopidogrel"
        ]
        },
        {
        id: 303,
        question: "A 72-year-old male with stable ischemic heart disease and a peptic ulcer is on aspirin. He reports gastrointestinal discomfort. What is an advisable action?",
        answer: "Add a proton pump inhibitor",
        options: [
        "Switch to clopidogrel",
        "Add a proton pump inhibitor",
        "Discontinue aspirin",
        "Increase aspirin dose",
        "Combine aspirin with an antacid"
        ]
        },
        {
        id: 304,
        question: "A 55-year-old male with chronic kidney disease and hypertension is on enalapril. He has increasing serum creatinine levels. What action is recommended?",
        answer: "Adjust or discontinue enalapril",
        options: [
        "Increase enalapril dose",
        "Add a diuretic",
        "Adjust or discontinue enalapril",
        "Start an ARB",
        "Continue enalapril with frequent monitoring"
        ]
        },
        {
        id: 305,
        question: "A 63-year-old female with heart failure and COPD is on carvedilol. She reports increased shortness of breath. What should be considered?",
        answer: "Switching to a different beta-blocker",
        options: [
        "Switching to a different beta-blocker",
        "Increasing carvedilol dose",
        "Adding a diuretic",
        "Optimizing COPD treatment",
        "Discontinuing carvedilol"
        ]
        },
        {
        id: 306,
        question: "A 70-year-old male with atrial fibrillation and renal impairment is on warfarin. He has unstable INR levels. What is an alternative anticoagulation strategy?",
        answer: "Switch to a direct oral anticoagulant",
        options: [
        "Switch to a direct oral anticoagulant",
        "Increase warfarin dose",
        "Add an antiplatelet agent",
        "Continue warfarin with closer monitoring",
        "Discontinue anticoagulation"
        ]
        },
        {
        id: 307,
        question: "A 59-year-old female with stable angina and reflux disease is on nitrates. She reports increased reflux symptoms. What adjustment might help?",
        answer: "Add a proton pump inhibitor",
        options: [
        "Increase nitrate dosage",
        "Add a proton pump inhibitor",
        "Switch to a beta-blocker",
        "Change to a calcium channel blocker",
        "Discontinue nitrates"
        ]
        }
];


export default CardioFlashcardMain;