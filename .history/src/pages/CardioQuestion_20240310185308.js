import React, { useEffect, useState } from "react";
import ScoreView from "./ScoreView/ScoreView";
import QuizView from "./QuizView/QuizView";
import { useNavigate, Link } from "react-router-dom";
import classnames from "classnames"; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"; // Import icons if not already imported

const CardioQuestion = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    {
      question:
        "Which drug is a first-line treatment for chronic heart failure?",
      answers: [
        { text: "Amlodipine" },
        { text: "Bisoprolol", isCorrect: true },
        { text: "Furosemide" },
        { text: "Simvastatin" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Bisoprolol, a beta-blocker, is recommended as a first-line treatment for chronic heart failure.",
    },
    {
      question:
        "Which antiarrhythmic is contraindicated in patients with asthma?",
      answers: [
        { text: "Amiodarone" },
        { text: "Dronedarone" },
        { text: "Flecainide" },
        { text: "Propranolol", isCorrect: true },
        { text: "Verapamil" },
      ],
      Explanation:
        "Propranolol, a non-selective beta-blocker, can exacerbate asthma and is contraindicated.",
    },
    {
      question: "What is the primary side effect of digoxin toxicity?",
      answers: [
        { text: "Hypotension" },
        { text: "Hyperkalemia" },
        { text: "Bradycardia", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Hypercalcemia" },
      ],
      Explanation: "Bradycardia is a primary side effect of digoxin toxicity.",
    },
    {
      question: "Which antihypertensive is safe to use in pregnancy?",
      answers: [
        { text: "Lisinopril" },
        { text: "Losartan" },
        { text: "Methyldopa", isCorrect: true },
        { text: "Nifedipine" },
        { text: "Ramipril" },
      ],
      Explanation:
        "Methyldopa is considered safe in pregnancy, unlike ACE inhibitors or ARBs.",
    },
    {
      question:
        "Which medication is indicated for rate control in atrial fibrillation?",
      answers: [
        { text: "Adenosine" },
        { text: "Atorvastatin" },
        { text: "Dabigatran" },
        { text: "Diltiazem", isCorrect: true },
        { text: "Enoxaparin" },
      ],
      Explanation: "Diltiazem is used for rate control in atrial fibrillation.",
    },
    {
      question:
        "In the treatment of acute coronary syndrome, which drug is not typically used?",
      answers: [
        { text: "Aspirin" },
        { text: "Clopidogrel" },
        { text: "Enoxaparin" },
        { text: "Metoprolol" },
        { text: "Phenytoin", isCorrect: true },
      ],
      Explanation:
        "Phenytoin, an antiepileptic, is not used in the treatment of acute coronary syndrome.",
    },
    {
      question:
        "A 67 year old patient has been prescribed ramipril by his GP. What is the main adverse effect of ACE inhibitors like ramipril?",
      answers: [
        { text: "Cough", isCorrect: true },
        { text: "Diarrhea" },
        { text: "Insomnia" },
        { text: "Myalgia" },
        { text: "Tachycardia" },
      ],
      Explanation: "Cough is a common adverse effect of ACE inhibitors.",
    },
    {
      question: "Which statin has the least likelihood of causing muscle pain?",
      answers: [
        { text: "Atorvastatin" },
        { text: "Fluvastatin" },
        { text: "Pravastatin", isCorrect: true },
        { text: "Rosuvastatin" },
        { text: "Simvastatin" },
      ],
      Explanation:
        "Pravastatin is generally associated with a lower risk of myopathy.",
    },
    {
      question:
        "For a patient with a sulfa allergy, which diuretic should be avoided?",
      answers: [
        { text: "Amiloride" },
        { text: "Bumetanide", isCorrect: true },
        { text: "Chlorthalidone" },
        { text: "Furosemide" },
        { text: "Spironolactone" },
      ],
      Explanation:
        "Bumetanide, a sulfonamide diuretic, should be avoided in patients with sulfa allergies.",
    },
    {
      question:
        "What is a common side effect of calcium channel blockers like amlodipine?",
      answers: [
        { text: "Constipation" },
        { text: "Diarrhea" },
        { text: "Dry Mouth" },
        { text: "Edema", isCorrect: true },
        { text: "Headache" },
      ],
      Explanation: "Peripheral edema is a common side effect of amlodipine.",
    },
    {
      question: "Which drug is not typically used for hypertension?",
      answers: [
        { text: "Atenolol" },
        { text: "Clonidine" },
        { text: "Hydralazine" },
        { text: "Nitroglycerin", isCorrect: true },
        { text: "Telmisartan" },
      ],
      Explanation:
        "Nitroglycerin is primarily used for angina, not hypertension.",
    },
    {
      question:
        "What is the major concern with the use of clopidogrel in cardiac patients?",
      answers: [
        { text: "Bleeding Risk", isCorrect: true },
        { text: "Constipation" },
        { text: "Hepatotoxicity" },
        { text: "Hypokalemia" },
        { text: "Renal Impairment" },
      ],
      Explanation: "Clopidogrel increases the risk of bleeding.",
    },
    {
      question:
        "Which medication is an anticoagulant used for stroke prevention in non-valvular atrial fibrillation?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dipyridamole" },
        { text: "Esmolol" },
        { text: "Rivaroxaban" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Apixaban is an anticoagulant indicated for stroke prevention in atrial fibrillation.",
    },
    {
      question:
        "In treating angina, what is the mechanism of action of nitrates like nitroglycerin?",
      answers: [
        { text: "Beta-blockade" },
        { text: "Calcium channel blockade" },
        { text: "Decrease myocardial oxygen demand", isCorrect: true },
        { text: "Increase coronary blood flow" },
        { text: "Potassium channel blockade" },
      ],
      Explanation:
        "Nitrates decrease myocardial oxygen demand by dilating veins and reducing preload.",
    },
    {
      question:
        "What is the primary reason for combining a beta-blocker with a diuretic in hypertension?",
      answers: [
        { text: "Enhance diuretic effect" },
        { text: "Minimize side effects" },
        { text: "Improve blood pressure control", isCorrect: true },
        { text: "Reduce risk of diabetes" },
        { text: "Increase renal protection" },
      ],
      Explanation: "Combining these drugs improves blood pressure control.",
    },
    {
      question:
        "Which drug is a direct thrombin inhibitor used in anticoagulation?",
      answers: [
        { text: "Apixaban" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation: "Dabigatran is a direct thrombin inhibitor.",
    },
    {
      question:
        "For a patient with heart failure and renal impairment, which diuretic is preferred?",
      answers: [
        { text: "Bumetanide" },
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide" },
        { text: "Spironolactone" },
        { text: "Torsemide", isCorrect: true },
      ],
      Explanation:
        "Torsemide is preferred in heart failure with renal impairment due to its better bioavailability.",
    },
    {
      question:
        "What is a major side effect of beta-blockers like metoprolol in diabetes?",
      answers: [
        { text: "Hyperglycemia" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Weight gain" },
        { text: "Insulin resistance" },
        { text: "Increased appetite" },
      ],
      Explanation:
        "Hypoglycemia and masking of its symptoms are concerns with beta-blockers in diabetes.",
    },
    {
      question:
        "Which is a common side effect of loop diuretics like furosemide?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hypokalemia", isCorrect: true },
        { text: "Hypernatremia" },
        { text: "Hyponatremia" },
        { text: "Hypercalcemia" },
      ],
      Explanation:
        "Hypokalemia is a common side effect of loop diuretics. Other drugs, such as Spironolactone are potassium sparing and avoid this issue.",
    },
    {
      question:
        "What is the primary benefit of using beta-blockers post-myocardial infarction?",
      answers: [
        { text: "Antihypertensive effect" },
        { text: "Antiarrhythmic effect" },
        { text: "Reduce mortality", isCorrect: true },
        { text: "Reduce cholesterol" },
        { text: "Prevent diabetes" },
      ],
      Explanation: "Beta-blockers reduce mortality post-myocardial infarction.",
    },
    {
      question:
        "Which drug increases the risk of hyperkalemia when used with ACE inhibitors?",
      answers: [
        { text: "Amiodarone" },
        { text: "Atenolol" },
        { text: "Digoxin" },
        { text: "Spironolactone", isCorrect: true },
        { text: "Warfarin" },
      ],
      Explanation:
        "Spironolactone can increase the risk of hyperkalemia, especially when used with ACE inhibitors.",
    },
    {
      question:
        "A patient presents to you in the pharmacy stating that the medication she uses to manage her blood pressure is giving her ankle swelling. Which class of drugs does the patient's medication belong to?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers", isCorrect: true },
        { text: "Diuretics" },
        { text: "Sartans" },
      ],
      Explanation:
        "Calcium channel blockers, especially amlodipine, can cause ankle swelling.",
    },
    {
      question: "What is the mechanism of action of warfarin?",
      answers: [
        { text: "Direct thrombin inhibitor" },
        { text: "Factor Xa inhibitor" },
        {
          text: "Inhibition of clotting factors II, VII, IX, and X",
          isCorrect: true,
        },
        { text: "Platelet aggregation inhibitor" },
        { text: "Thromboxane A2 inhibitor" },
      ],
      Explanation:
        "Warfarin inhibits vitamin K-dependent clotting factors II, VII, IX, and X.",
    },
    {
      question: "Which is not an indication for beta-blockers?",
      answers: [
        { text: "Angina" },
        { text: "Asthma", isCorrect: true },
        { text: "Heart failure" },
        { text: "Hypertension" },
        { text: "Myocardial infarction" },
      ],
      Explanation:
        "Asthma is a contraindication for beta-blockers due to the risk of bronchospasm.",
    },
    {
      question:
        "Which drug should be avoided in patients taking simvastatin at high doses?",
      answers: [
        { text: "Amlodipine" },
        { text: "Aspirin" },
        { text: "Ezetimibe" },
        { text: "Grapefruit juice", isCorrect: true },
        { text: "Metformin" },
      ],
      Explanation:
        "Grapefruit juice can increase the risk of myopathy when used with high doses of simvastatin.",
    },
    {
      question: "Which of the following is an indication to use ivabradine?",
      answers: [
        { text: "Chronic heart failure", isCorrect: true },
        { text: "Hypertension" },
        { text: "Myocardial infarction" },
        { text: "Pulmonary hypertension" },
        { text: "Supraventricular tachycardia" },
      ],
      Explanation:
        "Ivabradine is primarily indicated for chronic heart failure.",
    },
    {
      question: "What is the mechanism of action of nitroglycerin in angina?",
      answers: [
        { text: "Alpha-adrenergic blockade" },
        { text: "Calcium channel blockade" },
        { text: "Phosphodiesterase inhibition" },
        { text: "Reduction of venous return", isCorrect: true },
        { text: "Sodium channel blockade" },
      ],
      Explanation:
        "Nitroglycerin reduces venous return, decreasing myocardial oxygen demand.",
    },
    {
      question:
        "In lipid management, what is the primary function of ezetimibe?",
      answers: [
        { text: "Increases HDL" },
        {
          text: "Lowers LDL by inhibiting cholesterol absorption",
          isCorrect: true,
        },
        { text: "Lowers triglycerides" },
        { text: "Reduces total cholesterol" },
        { text: "Stabilizes plaque" },
      ],
      Explanation:
        "Ezetimibe lowers LDL cholesterol by inhibiting intestinal absorption of cholesterol.",
    },
    {
      question:
        "What is a major adverse effect of clopidogrel and aspirin combination therapy?",
      answers: [
        { text: "Bleeding risk", isCorrect: true },
        { text: "Hepatotoxicity" },
        { text: "Hyperkalemia" },
        { text: "Renal impairment" },
        { text: "Tachycardia" },
      ],
      Explanation:
        "The combination of clopidogrel and aspirin increases the bleeding risk.",
    },
    {
      question: "Which drug is not a calcium channel blocker?",
      answers: [
        { text: "Amlodipine" },
        { text: "Diltiazem" },
        { text: "Nifedipine" },
        { text: "Ramipril", isCorrect: true },
        { text: "Verapamil" },
      ],
      Explanation:
        "Ramipril is an ACE inhibitor, not a calcium channel blocker.",
    },
    {
      question:
        "What is a common adverse effect of loop diuretics like furosemide in the elderly?",
      answers: [
        { text: "Constipation" },
        { text: "Dehydration", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hypertension" },
        { text: "Weight gain" },
      ],
      Explanation:
        "Dehydration is a common adverse effect of loop diuretics, especially in the elderly.",
    },
    {
      question:
        "Which medication is an appropriate initial treatment for Raynaud's phenomenon?",
      answers: [
        { text: "Amlodipine", isCorrect: true },
        { text: "Atorvastatin" },
        { text: "Lisinopril" },
        { text: "Metoprolol" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Amlodipine, a calcium channel blocker, is effective in treating Raynaud's phenomenon.",
    },
    {
      question:
        "Which beta-blocker is preferred in patients with chronic obstructive pulmonary disease (COPD)?",
      answers: [
        { text: "Atenolol" },
        { text: "Carvedilol" },
        { text: "Labetalol" },
        { text: "Metoprolol", isCorrect: true },
        { text: "Propranolol" },
      ],
      Explanation:
        "Metoprolol, a selective beta-1 blocker, is preferred in patients with COPD.",
    },
    {
      question:
        "What is the major side effect of angiotensin receptor blockers (ARBs) like losartan?",
      answers: [
        { text: "Cough" },
        { text: "Hyperkalemia" },
        { text: "Hypotension", isCorrect: true },
        { text: "Rash" },
        { text: "Tachycardia" },
      ],
      Explanation:
        "ARBs can cause hypotension, particularly after the first dose.",
    },
    {
      question:
        "Which medication is primarily used to prevent stroke in patients with atrial fibrillation?",
      answers: [
        { text: "Amiodarone" },
        { text: "Edoxaban", isCorrect: true },
        { text: "Isosorbide mononitrate" },
        { text: "Nifedipine" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Edoxaban is an anticoagulant used to prevent stroke in atrial fibrillation.",
    },
    {
      question:
        "What is a risk associated with the use of non-dihydropyridine calcium channel blockers like verapamil in heart failure?",
      answers: [
        { text: "Increased heart rate" },
        { text: "Lowered blood pressure" },
        { text: "Myocardial infarction" },
        { text: "Worsening of heart failure", isCorrect: true },
        { text: "Weight loss" },
      ],
      Explanation:
        "Non-dihydropyridine calcium channel blockers can worsen heart failure.",
    },
    {
      question:
        "Which drug is used as a rate control agent in atrial fibrillation and can also cause thyroid dysfunction?",
      answers: [
        { text: "Amiodarone", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Digoxin" },
        { text: "Flecainide" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Amiodarone can be used for rate control in atrial fibrillation and may cause thyroid dysfunction.",
    },
    {
      question: "What is a potential side effect of high-dose statins?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Liver enzyme elevation" },
        { text: "Myopathy", isCorrect: true },
        { text: "Nephrotoxicity" },
        { text: "Thrombocytopenia" },
      ],
      Explanation: "Myopathy is a potential side effect of high-dose statins.",
    },
    {
      question:
        "Which antihypertensive medication is known to cause a dry, hacking cough?",
      answers: [
        { text: "Amlodipine" },
        { text: "Candesartan" },
        { text: "Enalapril", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Propranolol" },
      ],
      Explanation:
        "Enalapril, an ACE inhibitor, can cause a dry, hacking cough.",
    },
    {
      question:
        "Which medication is used for its anti-platelet properties in ischemic heart disease?",
      answers: [
        { text: "Aspirin", isCorrect: true },
        { text: "Atorvastatin" },
        { text: "Lisinopril" },
        { text: "Metoprolol" },
        { text: "Nitroglycerin" },
      ],
      Explanation:
        "Aspirin has anti-platelet properties and is used in ischemic heart disease.",
    },
    {
      question:
        "Which beta-blocker is known to have intrinsic sympathomimetic activity (ISA)?",
      answers: [
        { text: "Atenolol" },
        { text: "Bisoprolol" },
        { text: "Carvedilol" },
        { text: "Labetalol" },
        { text: "Pindolol", isCorrect: true },
      ],
      Explanation: "Pindolol has intrinsic sympathomimetic activity (ISA).",
    },
    {
      question:
        "In patients with high cardiovascular risk, which lipid-lowering drug class is preferred?",
      answers: [
        { text: "Bile acid sequestrants" },
        { text: "Fibrates" },
        { text: "Niacin" },
        { text: "Statins", isCorrect: true },
        { text: "Omega-3 fatty acids" },
      ],
      Explanation:
        "Statins are preferred for patients with high cardiovascular risk.",
    },
    {
      question:
        "What is the main risk associated with the use of fibrinolytic therapy in myocardial infarction?",
      answers: [
        { text: "Arrhythmias" },
        { text: "Bleeding", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hypokalemia" },
        { text: "Renal failure" },
      ],
      Explanation: "The main risk of fibrinolytic therapy is bleeding.",
    },
    {
      question:
        "What is the primary action of ACE inhibitors in heart failure?",
      answers: [
        { text: "Increase heart rate" },
        { text: "Increase myocardial contractility" },
        { text: "Reduce afterload and preload", isCorrect: true },
        { text: "Reduce cholesterol levels" },
        { text: "Stabilize heart rhythm" },
      ],
      Explanation:
        "ACE inhibitors reduce afterload and preload in heart failure.",
    },
    {
      question:
        "Which diuretic is most appropriate for a patient with heart failure and hyperkalemia?",
      answers: [
        { text: "Amiloride" },
        { text: "Eplerenone" },
        { text: "Furosemide", isCorrect: true },
        { text: "Spironolactone" },
        { text: "Triamterene" },
      ],
      Explanation:
        "Furosemide is appropriate for heart failure with hyperkalemia.",
    },
    {
      question:
        "What is a common adverse effect of aldosterone antagonists in cardiac therapy?",
      answers: [
        { text: "Hypercalcemia" },
        { text: "Hyperglycemia" },
        { text: "Hyperkalemia", isCorrect: true },
        { text: "Hypokalemia" },
        { text: "Hypothyroidism" },
      ],
      Explanation:
        "Hyperkalemia is a common side effect of aldosterone antagonists.",
    },
    {
      question:
        "Which drug class is most likely to cause a dry cough as a side effect?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "ARBs" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
      ],
      Explanation: "ACE inhibitors are known to cause a dry cough.",
    },
    {
      question: "For what purpose is digoxin used in atrial fibrillation?",
      answers: [
        { text: "Convert to sinus rhythm" },
        { text: "Lower blood pressure" },
        { text: "Prevent clot formation" },
        { text: "Reduce heart rate", isCorrect: true },
        { text: "Reduce myocardial oxygen demand" },
      ],
      Explanation:
        "Digoxin is used to reduce heart rate in atrial fibrillation.",
    },
    {
      question:
        "Which antihypertensive class is associated with a risk of angioedema?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "ARBs" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
      ],
      Explanation: "ACE inhibitors have a risk of causing angioedema.",
    },
    {
      question: "What is the mechanism of action of dipyridamole?",
      answers: [
        { text: "Anti-platelet agent" },
        { text: "Beta-blocker" },
        { text: "Calcium channel blocker", isCorrect: true },
        { text: "Phosphodiesterase inhibitor" },
        { text: "Potassium channel opener" },
      ],
      Explanation:
        "Dipyridamole is a phosphodiesterase inhibitor with anti-platelet properties.",
    },
    {
      question:
        "Which condition is a contraindication for the use of non-dihydropyridine calcium channel blockers?",
      answers: [
        { text: "Asthma" },
        { text: "Gout" },
        { text: "Heart failure", isCorrect: true },
        { text: "Hyperlipidemia" },
        { text: "Thyroid disorders" },
      ],
      Explanation:
        "Heart failure is a contraindication for non-dihydropyridine calcium channel blockers.",
    },
    {
      question:
        "What is the primary indication for using beta-blockers in hypertension?",
      answers: [
        { text: "Decrease heart rate" },
        { text: "Decrease peripheral resistance" },
        { text: "Increase renal blood flow" },
        { text: "Increase venous return" },
        { text: "Reduce cardiac output", isCorrect: true },
      ],
      Explanation:
        "The primary indication is to reduce cardiac output in hypertension.",
    },
    {
      question:
        "Which drug is an angiotensin receptor-neprilysin inhibitor (ARNI) used in heart failure?",
      answers: [
        { text: "Candesartan" },
        { text: "Enalapril" },
        { text: "Furosemide" },
        { text: "Sacubitril/valsartan", isCorrect: true },
        { text: "Spironolactone" },
      ],
      Explanation: "Sacubitril/valsartan is an ARNI used in heart failure.",
    },
    {
      question:
        "What is the primary adverse effect of long-term amiodarone use?",
      answers: [
        { text: "Hepatotoxicity" },
        { text: "Nephrotoxicity" },
        { text: "Neurotoxicity" },
        { text: "Pulmonary toxicity", isCorrect: true },
        { text: "Thyroid dysfunction" },
      ],
      Explanation:
        "Pulmonary toxicity is a major concern with long-term amiodarone use.",
    },
    {
      question:
        "Which medication is used as an anticoagulant in patients with a mechanical heart valve?",
      answers: [
        { text: "Apixaban" },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin", isCorrect: true },
      ],
      Explanation: "Warfarin is used in patients with mechanical heart valves.",
    },
    {
      question:
        "What is the primary benefit of using nitrates in angina pectoris?",
      answers: [
        { text: "Decrease in blood pressure" },
        { text: "Increase in heart rate" },
        { text: "Reduction of myocardial oxygen consumption", isCorrect: true },
        { text: "Stabilization of atherosclerotic plaques" },
        { text: "Vasodilation of coronary arteries" },
      ],
      Explanation:
        "Nitrates reduce myocardial oxygen consumption in angina pectoris.",
    },
    {
      question:
        "Which drug is a selective inhibitor of the sodium-glucose cotransporter 2 (SGLT2) with benefits in heart failure?",
      answers: [
        { text: "Canagliflozin", isCorrect: true },
        { text: "Glipizide" },
        { text: "Metformin" },
        { text: "Pioglitazone" },
        { text: "Sitagliptin" },
      ],
      Explanation:
        "Canagliflozin is an SGLT2 inhibitor beneficial in heart failure.",
    },
    {
      question:
        "What is the main risk associated with the chronic use of high-dose thiazide diuretics?",
      answers: [
        { text: "Hypercalcemia" },
        { text: "Hyperglycemia" },
        { text: "Hyperkalemia" },
        { text: "Hypomagnesemia" },
        { text: "Hypokalemia", isCorrect: true },
      ],
      Explanation:
        "Hypokalemia is a risk with chronic high-dose thiazide diuretic use.",
    },
    {
      question:
        "Which medication is indicated for the prevention of thromboembolism in atrial fibrillation?",
      answers: [
        { text: "Aspirin" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Esmolol" },
        { text: "Nitroglycerin" },
        { text: "Verapamil" },
      ],
      Explanation:
        "Dabigatran is indicated for thromboembolism prevention in atrial fibrillation.",
    },
    {
      question:
        "What is the primary action of sodium nitroprusside in hypertensive emergencies?",
      answers: [
        { text: "Alpha-adrenergic blockade" },
        { text: "Beta-adrenergic blockade" },
        { text: "Calcium channel blockade" },
        { text: "Direct arterial vasodilation", isCorrect: true },
        { text: "Potassium channel activation" },
      ],
      Explanation:
        "Sodium nitroprusside acts as a direct arterial vasodilator in hypertensive emergencies.",
    },
    {
      question:
        "Which medication is a selective beta-1 blocker with renal protection benefits in diabetes?",
      answers: [
        { text: "Atenolol" },
        { text: "Bisoprolol" },
        { text: "Carvedilol" },
        { text: "Metoprolol" },
        { text: "Nebivolol", isCorrect: true },
      ],
      Explanation:
        "Nebivolol is a selective beta-1 blocker with benefits in renal protection, especially in diabetic patients.",
    },
    {
      question:
        "What is a key side effect of using ivabradine in cardiac therapy?",
      answers: [
        { text: "Bradycardia", isCorrect: true },
        { text: "Diarrhea" },
        { text: "Hypertension" },
        { text: "Insomnia" },
        { text: "Tachycardia" },
      ],
      Explanation: "A key side effect of ivabradine is bradycardia.",
    },
    {
      question:
        "Which class of antihypertensive drugs is known to precipitate bronchospasm in asthmatic patients?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "ARBs" },
        { text: "Beta-blockers", isCorrect: true },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
      ],
      Explanation:
        "Beta-blockers can precipitate bronchospasm in asthmatic patients.",
    },
    {
      question:
        "What is the mechanism of action of ticagrelor in acute coronary syndrome?",
      answers: [
        { text: "Anti-platelet agent", isCorrect: true },
        { text: "Beta-blocker" },
        { text: "Calcium channel blocker" },
        { text: "Phosphodiesterase inhibitor" },
        { text: "Potassium channel opener" },
      ],
      Explanation:
        "Ticagrelor is an anti-platelet agent used in acute coronary syndrome.",
    },
    {
      question:
        "Which medication is contraindicated in patients with bilateral renal artery stenosis?",
      answers: [
        { text: "Amlodipine" },
        { text: "Enalapril", isCorrect: true },
        { text: "Furosemide" },
        { text: "Metoprolol" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Enalapril, an ACE inhibitor, is contraindicated in bilateral renal artery stenosis.",
    },
    {
      question: "In congestive heart failure, why is spironolactone used?",
      answers: [
        { text: "To decrease preload" },
        { text: "To increase cardiac output" },
        { text: "To reduce afterload" },
        { text: "To reduce aldosterone-mediated damage", isCorrect: true },
        { text: "To reduce cholesterol" },
      ],
      Explanation:
        "Spironolactone is used to reduce aldosterone-mediated damage in congestive heart failure.",
    },
    {
      question:
        "Which class of drugs is preferred in hypertensive patients with osteoporosis?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "ARBs" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Thiazide diuretics", isCorrect: true },
      ],
      Explanation:
        "Thiazide diuretics are preferred in hypertensive patients with osteoporosis.",
    },
    {
      question:
        "What is the primary benefit of using beta-blockers in patients post-myocardial infarction?",
      answers: [
        { text: "Anti-arrhythmic effect" },
        { text: "Blood pressure reduction" },
        { text: "Heart rate reduction" },
        { text: "Mortality reduction", isCorrect: true },
        { text: "Vasodilation" },
      ],
      Explanation:
        "The primary benefit of beta-blockers post-MI is mortality reduction.",
    },
    {
      question:
        "Which drug is used to manage hyperlipidemia and can cause flushing?",
      answers: [
        { text: "Atorvastatin" },
        { text: "Cholestyramine" },
        { text: "Ezetimibe" },
        { text: "Niacin", isCorrect: true },
        { text: "Simvastatin" },
      ],
      Explanation: "Niacin, used in hyperlipidemia, can cause flushing.",
    },
    {
      question:
        "What is the mechanism of action of ranolazine in chronic angina?",
      answers: [
        { text: "Calcium channel blockade" },
        { text: "Decrease of myocardial oxygen demand" },
        { text: "Increase of coronary blood flow" },
        { text: "Inhibition of late sodium current", isCorrect: true },
        { text: "Potassium channel blockade" },
      ],
      Explanation:
        "Ranolazine works by inhibiting the late sodium current in chronic angina.",
    },
    {
      question:
        "Which anticoagulant is preferred for patients with non-valvular atrial fibrillation and renal impairment?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban is preferred for patients with non-valvular atrial fibrillation and renal impairment.",
    },
    {
      question:
        "What is the primary indication for using adenosine in cardiology?",
      answers: [
        { text: "Chronic angina" },
        { text: "Heart failure" },
        { text: "Hypertension" },
        { text: "Paroxysmal supraventricular tachycardia", isCorrect: true },
        { text: "Peripheral arterial disease" },
      ],
      Explanation:
        "Adenosine is primarily used for paroxysmal supraventricular tachycardia.",
    },
    {
      question:
        "What is a common side effect of calcium channel blockers in the elderly?",
      answers: [
        { text: "Bradycardia" },
        { text: "Constipation" },
        { text: "Hypotension", isCorrect: true },
        { text: "Tachycardia" },
        { text: "Urinary retention" },
      ],
      Explanation:
        "Hypotension is a common side effect of calcium channel blockers in the elderly.",
    },
    {
      question:
        "Which medication is indicated for reducing the risk of stroke in patients with peripheral arterial disease?",
      answers: [
        { text: "Aspirin" },
        { text: "Clopidogrel", isCorrect: true },
        { text: "Enoxaparin" },
        { text: "Heparin" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Clopidogrel is indicated for reducing the risk of stroke in patients with peripheral arterial disease.",
    },
    {
      question:
        "What is a major side effect of using high-dose thiazide diuretics in diabetes?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hyperglycemia", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hyponatremia" },
        { text: "Hypocalcemia" },
      ],
      Explanation:
        "Hyperglycemia is a major side effect of using high-dose thiazide diuretics in diabetes.",
    },
    {
      question:
        "Which drug is a potassium-sparing diuretic often used in heart failure?",
      answers: [
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide" },
        { text: "Spironolactone", isCorrect: true },
        { text: "Torsemide" },
        { text: "Triamterene" },
      ],
      Explanation:
        "Spironolactone is a potassium-sparing diuretic used in heart failure.",
    },
    {
      question:
        "What is the mechanism of action of verapamil in cardiac arrhythmias?",
      answers: [
        { text: "Alpha-adrenergic blockade" },
        { text: "Beta-adrenergic blockade" },
        { text: "Calcium channel blockade", isCorrect: true },
        { text: "Potassium channel blockade" },
        { text: "Sodium channel blockade" },
      ],
      Explanation:
        "Verapamil acts as a calcium channel blocker in cardiac arrhythmias.",
    },
    {
      question:
        "Which antihypertensive class is associated with a reduced risk of new-onset diabetes?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "ARBs" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Thiazide diuretics" },
      ],
      Explanation:
        "ACE inhibitors are associated with a reduced risk of new-onset diabetes.",
    },
    {
      question:
        "What is the primary therapeutic use of loop diuretics like furosemide in cardiology?",
      answers: [
        { text: "Hypertension management" },
        { text: "Management of peripheral edema" },
        { text: "Prevention of myocardial infarction" },
        { text: "Reduction of preload in heart failure", isCorrect: true },
        { text: "Treatment of angina" },
      ],
      Explanation:
        "Loop diuretics like furosemide are primarily used to reduce preload in heart failure.",
    },
    {
      question:
        "Which of the following drugs is a beta-blocker used for chronic heart failure?",
      answers: [
        { text: "Atenolol" },
        { text: "Bisoprolol", isCorrect: true },
        { text: "Amiodarone" },
        { text: "Digoxin" },
        { text: "Ramipril" },
      ],
      Explanation:
        "Bisoprolol is a beta-1 selective blocker indicated for chronic heart failure.",
    },
    {
      question:
        "Which diuretic is most suitable for a patient with heart failure and renal impairment?",
      answers: [
        { text: "Furosemide", isCorrect: true },
        { text: "Spironolactone" },
        { text: "Amiloride" },
        { text: "Hydrochlorothiazide" },
        { text: "Bendroflumethiazide" },
      ],
      Explanation:
        "Furosemide is effective in renal impairment, often used in heart failure.",
    },
    {
      question:
        "A patient on Warfarin should avoid which of the following due to increased bleeding risk?",
      answers: [
        { text: "Paracetamol" },
        { text: "Ibuprofen", isCorrect: true },
        { text: "Loperamide" },
        { text: "Omeprazole" },
        { text: "Cetirizine" },
      ],
      Explanation:
        "Ibuprofen increases the risk of bleeding in patients on Warfarin.",
    },
    {
      question:
        "Which drug is an angiotensin-converting enzyme (ACE) inhibitor used in hypertension?",
      answers: [
        { text: "Losartan" },
        { text: "Candesartan" },
        { text: "Enalapril", isCorrect: true },
        { text: "Amlodipine" },
        { text: "Metoprolol" },
      ],
      Explanation:
        "Enalapril is an ACE inhibitor, commonly used in hypertension.",
    },
    {
      question:
        "In acute coronary syndrome, which drug combination is commonly used?",
      answers: [
        { text: "Aspirin and Clopidogrel", isCorrect: true },
        { text: "Aspirin and Warfarin" },
        { text: "Clopidogrel and Warfarin" },
        { text: "Heparin and Dabigatran" },
        { text: "Clopidogrel and Heparin" },
      ],
      Explanation:
        "Aspirin and Clopidogrel are often used together in acute coronary syndrome for their antiplatelet effects.",
    },
    {
      question: "What is the primary side effect of Amiodarone?",
      answers: [
        { text: "Hypothyroidism", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hypokalemia" },
        { text: "Hyperglycemia" },
        { text: "Hypoglycemia" },
      ],
      Explanation:
        "Amiodarone can cause hypothyroidism due to its iodine content.",
    },
    {
      question:
        "Which drug is contraindicated in a patient with a history of asthma and heart failure?",
      answers: [
        { text: "Bisoprolol" },
        { text: "Carvedilol" },
        { text: "Propranolol", isCorrect: true },
        { text: "Nebivolol" },
        { text: "Amlodipine" },
      ],
      Explanation:
        "Propranolol, a non-selective beta-blocker, is contraindicated in asthma and heart failure.",
    },
    {
      question: "Which of these is not a side effect of Digoxin?",
      answers: [
        { text: "Visual disturbances" },
        { text: "Nausea" },
        { text: "Diarrhea" },
        { text: "Hyperkalemia", isCorrect: true },
        { text: "Bradycardia" },
      ],
      Explanation: "Hyperkalemia is not a typical side effect of Digoxin.",
    },
    {
      question:
        "For a patient with angina, which drug class is used to reduce myocardial oxygen demand?",
      answers: [
        { text: "Beta-blockers", isCorrect: true },
        { text: "ACE inhibitors" },
        { text: "Diuretics" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates" },
      ],
      Explanation:
        "Beta-blockers are used in angina to reduce heart rate and myocardial oxygen demand.",
    },
    {
      question:
        "Which calcium channel blocker is preferred for rate control in atrial fibrillation?",
      answers: [
        { text: "Amlodipine" },
        { text: "Nifedipine" },
        { text: "Diltiazem", isCorrect: true },
        { text: "Verapamil" },
        { text: "Felodipine" },
      ],
      Explanation:
        "Diltiazem is often used for rate control in atrial fibrillation.",
    },
    {
      question:
        "What is the main risk associated with the use of Thiazide diuretics in the elderly?",
      answers: [
        { text: "Hypernatremia" },
        { text: "Hyponatremia", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hypokalemia" },
        { text: "Hypercalcemia" },
      ],
      Explanation:
        "Hyponatremia is a risk, especially in the elderly, with Thiazide diuretics.",
    },
    {
      question:
        "In hypertensive emergency, which drug is preferred for immediate blood pressure reduction?",
      answers: [
        { text: "Captopril" },
        { text: "Clonidine" },
        { text: "Nitroprusside", isCorrect: true },
        { text: "Propranolol" },
        { text: "Losartan" },
      ],
      Explanation:
        "Nitroprusside is used for rapid blood pressure reduction in hypertensive emergencies.",
    },
    {
      question:
        "What is a major side effect of ACE inhibitors like Lisinopril?",
      answers: [
        { text: "Cough", isCorrect: true },
        { text: "Diarrhea" },
        { text: "Insomnia" },
        { text: "Bradycardia" },
        { text: "Hyperglycemia" },
      ],
      Explanation:
        "A persistent dry cough is a well-known side effect of ACE inhibitors.",
    },
    {
      question:
        "Which drug is indicated for prevention of stroke in patients with atrial fibrillation and no other risk factors?",
      answers: [
        { text: "Warfarin" },
        { text: "Dabigatran" },
        { text: "Rivaroxaban" },
        { text: "Aspirin", isCorrect: true },
        { text: "Clopidogrel" },
      ],
      Explanation:
        "Aspirin may be used in patients with atrial fibrillation with no other risk factors for stroke prevention.",
    },
    {
      question: "What is the mechanism of action of Statins like Atorvastatin?",
      answers: [
        { text: "Increase HDL cholesterol" },
        { text: "Inhibit HMG-CoA reductase", isCorrect: true },
        { text: "Activate lipoprotein lipase" },
        { text: "Block bile acid absorption" },
        { text: "Inhibit cholesterol absorption" },
      ],
      Explanation:
        "Statins inhibit HMG-CoA reductase, reducing cholesterol synthesis.",
    },
    {
      question: "For which condition is Eplerenone specifically indicated?",
      answers: [
        { text: "Hypertension" },
        { text: "Heart Failure post-MI", isCorrect: true },
        { text: "Chronic kidney disease" },
        { text: "Peripheral artery disease" },
        { text: "Pulmonary hypertension" },
      ],
      Explanation:
        "Eplerenone is indicated for heart failure post-myocardial infarction.",
    },
    {
      question:
        "Which anti-arrhythmic drug increases the risk of torsades de pointes?",
      answers: [
        { text: "Lidocaine" },
        { text: "Sotalol", isCorrect: true },
        { text: "Verapamil" },
        { text: "Diltiazem" },
        { text: "Atenolol" },
      ],
      Explanation:
        "Sotalol can increase the risk of torsades de pointes, a type of ventricular tachycardia.",
    },
    {
      question:
        "In a patient with Prinzmetal's angina, which drug class is most effective?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers", isCorrect: true },
        { text: "ACE inhibitors" },
        { text: "Nitrates" },
        { text: "Diuretics" },
      ],
      Explanation:
        "Calcium channel blockers are effective in Prinzmetal's (variant) angina.",
    },
    {
      question: "Which is a common side effect of Nitrates like Nitroglycerin?",
      answers: [
        { text: "Hypertension" },
        { text: "Bradycardia" },
        { text: "Headache", isCorrect: true },
        { text: "Constipation" },
        { text: "Urinary retention" },
      ],
      Explanation:
        "Headaches are a common side effect of nitrates due to vasodilation.",
    },
    {
      question:
        "What is the primary action of Aldosterone antagonists in heart failure?",
      answers: [
        { text: "Increase cardiac output" },
        { text: "Decrease preload" },
        { text: "Reduce afterload" },
        { text: "Increase heart rate" },
        { text: "Reduce myocardial fibrosis", isCorrect: true },
      ],
      Explanation:
        "Aldosterone antagonists help in reducing myocardial fibrosis in heart failure.",
    },
    {
      question:
        "A 63-year-old male with chronic heart failure is experiencing fatigue and shortness of breath. Which drug would be most appropriate to add to his regimen?",
      answers: [
        { text: "Amlodipine" },
        { text: "Carvedilol", isCorrect: true },
        { text: "Lisinopril" },
        { text: "Nifedipine" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Carvedilol, a beta-blocker, is beneficial in chronic heart failure to improve symptoms and survival.",
    },
    {
      question:
        "A 55-year-old female with hypertension and a history of asthma is seeking medication. Which antihypertensive should be avoided?",
      answers: [
        { text: "Atenolol", isCorrect: true },
        { text: "Candesartan" },
        { text: "Hydrochlorothiazide" },
        { text: "Ramipril" },
        { text: "Verapamil" },
      ],
      Explanation:
        "Atenolol, a beta-blocker, should be avoided in asthma as it can exacerbate the condition.",
    },
    {
      question:
        "A 70-year-old male with atrial fibrillation and a prior stroke requires anticoagulation. What is the most appropriate choice?",
      answers: [
        { text: "Aspirin" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Dabigatran, a direct thrombin inhibitor, is appropriate for stroke prevention in atrial fibrillation.",
    },
    {
      question:
        "A 68-year-old female with stable angina requires additional medication. Which drug class is most effective for symptom control?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers", isCorrect: true },
        { text: "Nitrates" },
        { text: "Statins" },
      ],
      Explanation:
        "Calcium channel blockers are effective for symptom control in stable angina.",
    },
    {
      question:
        "A 59-year-old male with hyperlipidemia is experiencing muscle pain. Which statin has a lower risk of myopathy?",
      answers: [
        { text: "Atorvastatin" },
        { text: "Fluvastatin" },
        { text: "Pravastatin", isCorrect: true },
        { text: "Rosuvastatin" },
        { text: "Simvastatin" },
      ],
      Explanation:
        "Pravastatin is associated with a lower risk of myopathy compared to other statins.",
    },
    {
      question:
        "A 72-year-old female with hypertension and chronic kidney disease needs a blood pressure medication. Which class should be preferred?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "Sartans" },
      ],
      Explanation:
        "ACE inhibitors are preferred in chronic kidney disease for their renal protective effects.",
    },
    {
      question:
        "A 65-year-old male with congestive heart failure and renal impairment requires diuretic therapy. Which drug should be chosen?",
      answers: [
        { text: "Bumetanide" },
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide" },
        { text: "Spironolactone" },
        { text: "Torsemide", isCorrect: true },
      ],
      Explanation:
        "Torsemide is preferred in heart failure with renal impairment due to its better renal clearance.",
    },
    {
      question:
        "A 60-year-old male with chronic stable angina is not achieving adequate symptom control. What medication could be added for better management?",
      answers: [
        { text: "Amlodipine" },
        { text: "Aspirin" },
        { text: "Clopidogrel" },
        { text: "Ivabradine", isCorrect: true },
        { text: "Nitrates" },
      ],
      Explanation:
        "Ivabradine can be added for better symptom control in chronic stable angina.",
    },
    {
      question:
        "A 58-year-old female with a recent diagnosis of hypertension also has diabetes. Which antihypertensive drug class is beneficial for her?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "Sartans" },
      ],
      Explanation:
        "ACE inhibitors are beneficial in hypertensive patients with diabetes due to renal protection.",
    },
    {
      question:
        "A 75-year-old male with a history of myocardial infarction is on a statin. What is the primary goal of statin therapy in this patient?",
      answers: [
        { text: "Lower LDL", isCorrect: true },
        { text: "Lower triglycerides" },
        { text: "Prevent arrhythmias" },
        { text: "Prevent heart failure" },
        { text: "Reduce mortality" },
      ],
      Explanation:
        "The primary goal of statin therapy in post-myocardial infarction patients is to lower LDL cholesterol.",
    },
    {
      question:
        "A 54-year-old male with peripheral arterial disease is at risk for stroke. What medication should be used for prophylaxis?",
      answers: [
        { text: "Aspirin" },
        { text: "Clopidogrel", isCorrect: true },
        { text: "Dipyridamole" },
        { text: "Enoxaparin" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Clopidogrel is appropriate for stroke prophylaxis in peripheral arterial disease.",
    },
    {
      question:
        "A 67-year-old female with atrial fibrillation and a high risk of bleeding requires anticoagulation. Which drug is preferred?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban is preferred due to its lower bleeding risk compared to other anticoagulants.",
    },
    {
      question:
        "A 70-year-old male with chronic angina is experiencing bradycardia with his current medication. Which drug might be responsible?",
      answers: [
        { text: "Amlodipine" },
        { text: "Atorvastatin" },
        { text: "Diltiazem", isCorrect: true },
        { text: "Nitroglycerin" },
        { text: "Ranolazine" },
      ],
      Explanation:
        "Diltiazem, a calcium channel blocker, can cause bradycardia.",
    },
    {
      question:
        "A 62-year-old female with heart failure is experiencing worsening renal function. Which medication might need adjustment?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Diuretics", isCorrect: true },
        { text: "Nitrates" },
        { text: "Spironolactone" },
      ],
      Explanation:
        "Diuretics may need adjustment in the case of worsening renal function in heart failure.",
    },
    {
      question:
        "A 56-year-old male with stable angina is not responding well to monotherapy. What combination therapy can be considered?",
      answers: [
        { text: "ACE inhibitor and Beta-blocker" },
        { text: "Beta-blocker and Calcium channel blocker", isCorrect: true },
        { text: "Calcium channel blocker and Nitrates" },
        { text: "Nitrates and ACE inhibitor" },
        { text: "Statin and Aspirin" },
      ],
      Explanation:
        "A combination of Beta-blocker and Calcium channel blocker can be considered for stable angina not responding to monotherapy.",
    },
    {
      question:
        "A 69-year-old female with hypertension and osteoporosis needs a new antihypertensive. Which drug class can benefit her bone health?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics", isCorrect: true },
        { text: "Sartans" },
      ],
      Explanation:
        "Thiazide diuretics can be beneficial in patients with hypertension and osteoporosis.",
    },
    {
      question:
        "A 77-year-old male with heart failure and frequent urination at night is on a diuretic. Which diuretic is less likely to cause nocturia?",
      answers: [
        { text: "Bumetanide" },
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide", isCorrect: true },
        { text: "Spironolactone" },
        { text: "Torsemide" },
      ],
      Explanation:
        "Hydrochlorothiazide, with a shorter duration of action, may be less likely to cause nocturia.",
    },
    {
      question:
        "A 64-year-old male with a history of myocardial infarction and depression needs lipid-lowering therapy. Which statin has fewer drug interactions with antidepressants?",
      answers: [
        { text: "Atorvastatin" },
        { text: "Fluvastatin", isCorrect: true },
        { text: "Lovastatin" },
        { text: "Pravastatin" },
        { text: "Simvastatin" },
      ],
      Explanation:
        "Fluvastatin has fewer drug interactions compared to other statins and may be preferable in patients on antidepressants.",
    },
    {
      question:
        "A 71-year-old female with hypertension and a history of cough with ACE inhibitors. Which alternative drug class is suitable?",
      answers: [
        { text: "ARBs", isCorrect: true },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "Nitrates" },
      ],
      Explanation:
        "ARBs are a suitable alternative for patients who develop a cough with ACE inhibitors.",
    },
    {
      question:
        "A 66-year-old male with type 2 diabetes and hypertension is experiencing peripheral edema. Which antihypertensive drug could be causing this?",
      answers: [
        { text: "Amlodipine", isCorrect: true },
        { text: "Enalapril" },
        { text: "Metformin" },
        { text: "Metoprolol" },
        { text: "Ramipril" },
      ],
      Explanation:
        "Amlodipine, a calcium channel blocker, can cause peripheral edema.",
    },
    {
      question:
        "A 55-year-old female with rheumatoid arthritis and hypertension is seeking a new antihypertensive. Which drug should be avoided due to her condition?",
      answers: [
        { text: "Amlodipine" },
        { text: "Candesartan" },
        { text: "Lisinopril", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Verapamil" },
      ],
      Explanation:
        "Lisinopril, an ACE inhibitor, can exacerbate rheumatoid arthritis symptoms and should be avoided.",
    },
    {
      question:
        "A 72-year-old male with heart failure and gout requires a diuretic. Which diuretic is least likely to exacerbate his gout?",
      answers: [
        { text: "Bumetanide" },
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide" },
        { text: "Spironolactone", isCorrect: true },
        { text: "Torsemide" },
      ],
      Explanation:
        "Spironolactone is less likely to exacerbate gout compared to other diuretics.",
    },
    {
      question:
        "A 68-year-old male with chronic kidney disease and hypertension needs medication adjustment. Which drug is beneficial for renal protection?",
      answers: [
        { text: "Amlodipine" },
        { text: "Furosemide" },
        { text: "Lisinopril", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Nifedipine" },
      ],
      Explanation:
        "Lisinopril, an ACE inhibitor, provides renal protection in patients with chronic kidney disease.",
    },
    {
      question:
        "A 60-year-old female with diabetes and hypertension is on a beta-blocker and needs a medication review. What is a potential issue with beta-blockers in this patient?",
      answers: [
        { text: "Exacerbation of diabetes", isCorrect: true },
        { text: "Increased risk of stroke" },
        { text: "Induction of hypothyroidism" },
        { text: "Potential for renal impairment" },
        { text: "Reduced efficacy in hypertension" },
      ],
      Explanation:
        "Beta-blockers can exacerbate diabetes by masking hypoglycemia symptoms.",
    },
    {
      question:
        "A 74-year-old male with atrial fibrillation and a high bleeding risk needs an anticoagulant. Which drug is the safest option?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban has a lower bleeding risk compared to other anticoagulants, making it a safer option.",
    },
    {
      question:
        "A 65-year-old female with stable angina and asthma requires additional medication. Which drug should be avoided?",
      answers: [
        { text: "Amlodipine" },
        { text: "Diltiazem" },
        { text: "Isosorbide mononitrate" },
        { text: "Metoprolol", isCorrect: true },
        { text: "Nitrates" },
      ],
      Explanation:
        "Metoprolol, a beta-blocker, should be avoided in patients with asthma.",
    },
    {
      question:
        "A 58-year-old male with hypertension and benign prostatic hyperplasia (BPH) needs a new antihypertensive. Which class can benefit his BPH?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Alpha-blockers", isCorrect: true },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
      ],
      Explanation: "Alpha-blockers can also help in managing symptoms of BPH.",
    },
    {
      question:
        "A 77-year-old female with osteoporosis and hypertension is considering a diuretic. Which diuretic is preferred in her condition?",
      answers: [
        { text: "Bumetanide" },
        { text: "Furosemide" },
        { text: "Hydrochlorothiazide", isCorrect: true },
        { text: "Spironolactone" },
        { text: "Torsemide" },
      ],
      Explanation:
        "Hydrochlorothiazide is beneficial in patients with hypertension and osteoporosis due to its calcium-sparing effect.",
    },
    {
      question:
        "A 69-year-old male with a history of myocardial infarction is considering a beta-blocker. What is the primary benefit in his case?",
      answers: [
        { text: "Decreased risk of arrhythmias" },
        { text: "Improved lipid profile" },
        { text: "Lowered blood pressure" },
        { text: "Reduced angina frequency" },
        { text: "Reduced mortality", isCorrect: true },
      ],
      Explanation:
        "The primary benefit of beta-blockers in post-myocardial infarction patients is reduced mortality.",
    },
    {
      question:
        "A 63-year-old female with hyperlipidemia reports muscle pain. Which non-statin medication can be considered?",
      answers: [
        { text: "Ezetimibe", isCorrect: true },
        { text: "Fenofibrate" },
        { text: "Gemfibrozil" },
        { text: "Niacin" },
        { text: "Omega-3 fatty acids" },
      ],
      Explanation:
        "Ezetimibe can be considered for patients with hyperlipidemia who experience muscle pain with statins.",
    },
    {
      question:
        "A 70-year-old male with chronic angina and erectile dysfunction is on a nitrate. Why must phosphodiesterase type 5 inhibitors be avoided?",
      answers: [
        { text: "Increased risk of arrhythmias" },
        { text: "Increased risk of bleeding" },
        { text: "Increased risk of heart failure" },
        { text: "Potentiation of hypotensive effects", isCorrect: true },
        { text: "Reduced efficacy of nitrates" },
      ],
      Explanation:
        "Phosphodiesterase type 5 inhibitors can potentiate the hypotensive effects of nitrates.",
    },
    {
      question:
        "A 66-year-old male with atrial fibrillation and chronic kidney disease requires anticoagulation. Which drug should be used with caution?",
      answers: [
        { text: "Apixaban" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Dabigatran requires cautious use in patients with chronic kidney disease due to renal clearance.",
    },
    {
      question:
        "A 56-year-old female with hypertension and a history of depression requires medication adjustment. Which antihypertensive can exacerbate depression?",
      answers: [
        { text: "Amlodipine" },
        { text: "Clonidine", isCorrect: true },
        { text: "Hydrochlorothiazide" },
        { text: "Lisinopril" },
        { text: "Metoprolol" },
      ],
      Explanation: "Clonidine can exacerbate symptoms of depression.",
    },
    {
      question:
        "A 62-year-old male with heart failure and gout is considering spironolactone. What is a major concern with this drug?",
      answers: [
        { text: "Exacerbation of gout" },
        { text: "Hyperkalemia", isCorrect: true },
        { text: "Hypokalemia" },
        { text: "Renal impairment" },
        { text: "Worsening heart failure" },
      ],
      Explanation:
        "Hyperkalemia is a major concern when using spironolactone, especially in patients with heart failure.",
    },
    {
      question:
        "A 53-year-old female with chronic stable angina and hypothyroidism needs angina management. Which drug class is preferred?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers", isCorrect: true },
        { text: "Nitrates" },
        { text: "Statins" },
      ],
      Explanation:
        "Calcium channel blockers are preferred for angina management in patients with hypothyroidism.",
    },
    {
      question:
        "A 78-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) needs a new antihypertensive. Which class should be avoided?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "ARBs" },
        { text: "Beta-blockers", isCorrect: true },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
      ],
      Explanation:
        "Beta-blockers should be avoided in patients with COPD due to the risk of bronchospasm.",
    },
    {
      question:
        "A 64-year-old female with hypertension and a history of angioedema on ACE inhibitors needs medication review. Which alternative is appropriate?",
      answers: [
        { text: "ARBs", isCorrect: true },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "Nitrates" },
      ],
      Explanation:
        "ARBs are an appropriate alternative for patients who have experienced angioedema on ACE inhibitors.",
    },
    {
      question:
        "A 71-year-old male with diabetes, hypertension, and nephropathy requires a medication adjustment. Which antihypertensive class provides renal protection?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "Sartans", isCorrect: true },
      ],
      Explanation:
        "Sartans (ARBs) provide renal protection and are suitable for patients with diabetes and nephropathy.",
    },
    {
      question:
        "A 59-year-old female with heart failure and atrial fibrillation is considering rate control medication. What is a suitable choice?",
      answers: [
        { text: "Amiodarone" },
        { text: "Diltiazem", isCorrect: true },
        { text: "Digoxin" },
        { text: "Flecainide" },
        { text: "Sotalol" },
      ],
      Explanation:
        "Diltiazem is suitable for rate control in patients with heart failure and atrial fibrillation.",
    },
    {
      question:
        "A 68-year-old male with hyperlipidemia and liver disease is reviewing his medication. Which statin should be used with caution?",
      answers: [
        { text: "Atorvastatin", isCorrect: true },
        { text: "Fluvastatin" },
        { text: "Lovastatin" },
        { text: "Pravastatin" },
        { text: "Simvastatin" },
      ],
      Explanation:
        "Atorvastatin should be used with caution in patients with liver disease due to potential hepatotoxicity.",
    },
    {
      question:
        "A 67-year-old male with stable ischemic heart disease and a sulfa allergy needs a diuretic. Which medication should be avoided?",
      answers: [
        { text: "Bumetanide" },
        { text: "Hydrochlorothiazide", isCorrect: true },
        { text: "Indapamide" },
        { text: "Spironolactone" },
        { text: "Torsemide" },
      ],
      Explanation:
        "Hydrochlorothiazide, a sulfonamide diuretic, should be avoided in patients with sulfa allergies.",
    },
    {
      question:
        "A 54-year-old female with hypertension and chronic kidney disease is considering an ARB. What is a major benefit of this class in her condition?",
      answers: [
        { text: "Decreased proteinuria", isCorrect: true },
        { text: "Increased GFR" },
        { text: "Lowered potassium levels" },
        { text: "Reduced risk of stroke" },
        { text: "Reduced systolic blood pressure" },
      ],
      Explanation:
        "ARBs can decrease proteinuria, which is beneficial in chronic kidney disease.",
    },
    {
      question:
        "A 59-year-old male with atrial fibrillation and a previous GI bleed requires anticoagulation. Which medication has the lowest risk of gastrointestinal bleeding?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban has a relatively lower risk of gastrointestinal bleeding compared to other anticoagulants.",
    },
    {
      question:
        "A 73-year-old female with heart failure and diabetes needs a beta-blocker. Which one is preferred due to its metabolic neutrality?",
      answers: [
        { text: "Atenolol" },
        { text: "Bisoprolol" },
        { text: "Carvedilol", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Propranolol" },
      ],
      Explanation:
        "Carvedilol is preferred in heart failure patients with diabetes due to its metabolic neutrality.",
    },
    {
      question:
        "A 60-year-old male with angina and erectile dysfunction is on a PDE5 inhibitor. What class of angina medication should be avoided?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Statins" },
      ],
      Explanation:
        "Nitrates should be avoided due to the risk of severe hypotension when combined with PDE5 inhibitors.",
    },
    {
      question:
        "A 70-year-old female with hypertension and a history of hyperkalemia is considering an antihypertensive adjustment. Which drug should be used cautiously?",
      answers: [
        { text: "ACE inhibitors", isCorrect: true },
        { text: "Amlodipine" },
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Thiazide diuretics" },
      ],
      Explanation:
        "ACE inhibitors should be used cautiously in patients with a history of hyperkalemia.",
    },
    {
      question:
        "A 55-year-old male with chronic heart failure and a cough is reviewing his medication. Which drug might be contributing to his cough?",
      answers: [
        { text: "Digoxin" },
        { text: "Furosemide" },
        { text: "Lisinopril", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Spironolactone" },
      ],
      Explanation:
        "Lisinopril, an ACE inhibitor, can cause a persistent dry cough.",
    },
    {
      question:
        "A 63-year-old female with hypertension and asthma needs a new antihypertensive. What is the best choice for her?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers", isCorrect: true },
        { text: "Clonidine" },
        { text: "Thiazide diuretics" },
        { text: "ACE inhibitors" },
      ],
      Explanation:
        "Calcium channel blockers are a good choice for patients with hypertension and asthma.",
    },
    {
      question:
        "A 72-year-old male with atrial fibrillation and renal impairment needs anticoagulation. Which drug requires careful monitoring of renal function?",
      answers: [
        { text: "Apixaban" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Dabigatran requires careful monitoring of renal function, especially in renal impairment.",
    },
    {
      question:
        "A 58-year-old female with hypertension and peripheral edema is on amlodipine. What medication could be added to reduce edema?",
      answers: [
        { text: "Another calcium channel blocker" },
        { text: "A beta-blocker" },
        { text: "A diuretic", isCorrect: true },
        { text: "An ACE inhibitor" },
        { text: "An ARB" },
      ],
      Explanation:
        "A diuretic can be added to manage peripheral edema caused by amlodipine.",
    },
    {
      question:
        "A 69-year-old male with stable angina and gout is considering a nitrate. What is an important consideration regarding his gout?",
      answers: [
        { text: "Nitrates can exacerbate gout" },
        { text: "Nitrates have no effect on gout" },
        { text: "Nitrates can reduce uric acid levels" },
        { text: "Nitrates can increase uric acid levels", isCorrect: true },
        { text: "Nitrates should be used with allopurinol" },
      ],
      Explanation:
        "Nitrates can increase uric acid levels and might exacerbate gout.",
    },
    {
      question:
        "A 56-year-old male with heart failure and chronic obstructive pulmonary disease (COPD) is evaluating his beta-blocker therapy. Which beta-blocker is safer for COPD patients?",
      answers: [
        { text: "Atenolol" },
        { text: "Bisoprolol", isCorrect: true },
        { text: "Carvedilol" },
        { text: "Metoprolol" },
        { text: "Propranolol" },
      ],
      Explanation:
        "Bisoprolol, a cardioselective beta-blocker, is generally safer for patients with COPD.",
    },
    {
      question:
        "A 74-year-old female with hypertension and osteoporosis is on hydrochlorothiazide. What additional benefit does this medication provide for her osteoporosis?",
      answers: [
        { text: "Decreased calcium excretion", isCorrect: true },
        { text: "Increased bone density" },
        { text: "Increased calcium absorption" },
        { text: "Reduced risk of fractures" },
        { text: "Stabilized bone metabolism" },
      ],
      Explanation:
        "Hydrochlorothiazide decreases calcium excretion, which can be beneficial in osteoporosis.",
    },
    {
      question:
        "A 65-year-old male with diabetes and hypertension is on an ACE inhibitor. He complains of a persistent dry cough. What is a suitable alternative medication?",
      answers: [
        { text: "Another ACE inhibitor" },
        { text: "An ARB", isCorrect: true },
        { text: "A beta-blocker" },
        { text: "A calcium channel blocker" },
        { text: "A thiazide diuretic" },
      ],
      Explanation:
        "An ARB is a suitable alternative for patients who develop a cough with ACE inhibitors.",
    },
    {
      question:
        "A 77-year-old female with atrial fibrillation and a history of falls requires anticoagulation. Which medication might be a safer choice considering her fall risk?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban might be a safer choice due to its lower risk of major bleeding, which is important in patients with a history of falls.",
    },
    {
      question:
        "A 60-year-old male with hyperlipidemia and a recent episode of acute pancreatitis is on atorvastatin. What is an important consideration for his medication?",
      answers: [
        { text: "Atorvastatin dosage may need to be adjusted" },
        { text: "Atorvastatin should be discontinued", isCorrect: true },
        { text: "Switch to a different statin" },
        { text: "Add ezetimibe to his regimen" },
        { text: "Monitor liver enzymes regularly" },
      ],
      Explanation:
        "Atorvastatin should be discontinued in the case of acute pancreatitis.",
    },
    {
      question:
        "A 71-year-old female with chronic kidney disease and hypertension is on lisinopril. What is a key benefit of this medication in her condition?",
      answers: [
        { text: "Decreased progression of kidney disease", isCorrect: true },
        { text: "Increased GFR" },
        { text: "Lowered potassium levels" },
        { text: "Reduced risk of cardiovascular events" },
        { text: "Stabilization of blood pressure" },
      ],
      Explanation:
        "Lisinopril can decrease the progression of kidney disease in patients with chronic kidney disease.",
    },
    {
      question:
        "A 66-year-old male with stable angina and reflux esophagitis is considering anti-anginal therapy. Which medication might exacerbate his reflux?",
      answers: [
        { text: "Amlodipine" },
        { text: "Diltiazem" },
        { text: "Isosorbide mononitrate", isCorrect: true },
        { text: "Nitrates" },
        { text: "Ranolazine" },
      ],
      Explanation:
        "Isosorbide mononitrate and other nitrates can exacerbate reflux esophagitis.",
    },
    {
      question:
        "A 54-year-old female with hypertension and a history of depression is on a beta-blocker. What potential issue should be monitored?",
      answers: [
        { text: "Exacerbation of hypertension" },
        { text: "Induction of hypothyroidism" },
        { text: "Potential for renal impairment" },
        { text: "Worsening of depression", isCorrect: true },
        { text: "Reduced efficacy in lowering blood pressure" },
      ],
      Explanation:
        "Beta-blockers can sometimes worsen depression, so this should be monitored.",
    },
    {
      question:
        "A 62-year-old male with diabetes and hypertension is on metoprolol. He reports frequent episodes of hypoglycemia. What is a concern with metoprolol in this patient?",
      answers: [
        { text: "Increased insulin resistance" },
        { text: "Masking of hypoglycemia symptoms", isCorrect: true },
        { text: "Potentiation of hypoglycemia" },
        { text: "Reduction in blood glucose levels" },
        { text: "Worsening of diabetes control" },
      ],
      Explanation:
        "Metoprolol can mask hypoglycemia symptoms, which is a concern in diabetic patients.",
    },
    {
      question:
        "A 70-year-old male with heart failure and chronic renal failure is on enalapril. He has elevated potassium levels. What medication adjustment is needed?",
      answers: [
        { text: "Decrease enalapril dose" },
        { text: "Discontinue enalapril", isCorrect: true },
        { text: "Switch to a calcium channel blocker" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Monitor potassium levels regularly" },
      ],
      Explanation:
        "Discontinuing enalapril may be necessary due to its potential to increase potassium levels.",
    },
    {
      question:
        "A 65-year-old female with hypertension and bradycardia is being evaluated for a new antihypertensive. Which class should be avoided?",
      answers: [
        { text: "Beta-blockers", isCorrect: true },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "ACE inhibitors" },
        { text: "ARBs" },
      ],
      Explanation:
        "Beta-blockers should be avoided due to their potential to exacerbate bradycardia.",
    },
    {
      question:
        "A 58-year-old male with a history of gout and hypertension is on hydrochlorothiazide. He reports a recent gout flare. What is the best course of action?",
      answers: [
        { text: "Continue hydrochlorothiazide" },
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Add a beta-blocker" },
        { text: "Start allopurinol" },
        { text: "Increase hydrochlorothiazide dose" },
      ],
      Explanation:
        "Switching to a loop diuretic is advisable, as hydrochlorothiazide can exacerbate gout.",
    },
    {
      question:
        "A 72-year-old female with atrial fibrillation and a history of intestinal bleeding is on warfarin. Which alternative anticoagulant is preferable?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Clopidogrel" },
      ],
      Explanation:
        "Apixaban is preferable due to its lower risk of gastrointestinal bleeding compared to warfarin.",
    },
    {
      question:
        "A 55-year-old male with stable angina and hypotension is being reviewed for medication adjustment. Which medication might need to be reduced or discontinued?",
      answers: [
        { text: "Amlodipine" },
        { text: "Aspirin" },
        { text: "Atorvastatin" },
        { text: "Isosorbide mononitrate", isCorrect: true },
        { text: "Metoprolol" },
      ],
      Explanation:
        "Isosorbide mononitrate may need to be reduced or discontinued due to its hypotensive effects.",
    },
    {
      question:
        "A 63-year-old female with diabetes, hypertension, and peripheral neuropathy is on lisinopril. What additional benefit does lisinopril provide for her diabetes?",
      answers: [
        { text: "Improved insulin sensitivity" },
        { text: "Increased glucose uptake" },
        { text: "Protection against diabetic nephropathy", isCorrect: true },
        { text: "Reduction of neuropathic pain" },
        { text: "Stabilization of blood glucose levels" },
      ],
      Explanation: "Lisinopril offers protection against diabetic nephropathy.",
    },
    {
      question:
        "A 60-year-old male with chronic kidney disease and hypertension is on losartan. He has a high serum creatinine level. What should be monitored closely?",
      answers: [
        { text: "Blood glucose levels" },
        { text: "Liver function tests" },
        { text: "Potassium levels" },
        { text: "Renal function", isCorrect: true },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Renal function should be closely monitored in patients on losartan, especially with high serum creatinine levels.",
    },
    {
      question:
        "A 67-year-old female with osteoporosis and hypertension is on a calcium channel blocker. She is concerned about her bone health. What should be advised?",
      answers: [
        { text: "Discontinue the calcium channel blocker" },
        { text: "Add a bisphosphonate" },
        { text: "Add a vitamin D supplement" },
        { text: "Switch to a beta-blocker" },
        { text: "Switch to a thiazide diuretic", isCorrect: true },
      ],
      Explanation:
        "Switching to a thiazide diuretic can be beneficial for bone health due to its calcium-sparing effect.",
    },
    {
      question:
        "A 75-year-old male with atrial fibrillation and mild cognitive impairment is on dabigatran. What is important to monitor in this patient?",
      answers: [
        { text: "Cognitive function" },
        { text: "Electrolyte levels" },
        { text: "Liver function" },
        { text: "Renal function", isCorrect: true },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Renal function should be monitored in patients on dabigatran, especially in the elderly with cognitive impairment.",
    },
    {
      question:
        "A 54-year-old female with hypertension and asthma is on a beta-blocker. She reports increased wheezing. What medication adjustment is indicated?",
      answers: [
        { text: "Add a bronchodilator" },
        { text: "Increase the beta-blocker dose" },
        { text: "Switch to a calcium channel blocker", isCorrect: true },
        { text: "Switch to an ACE inhibitor" },
        { text: "Switch to an ARB" },
      ],
      Explanation:
        "Switching to a calcium channel blocker is indicated, as beta-blockers can exacerbate asthma.",
    },
    {
      question:
        "A 69-year-old male with stable ischemic heart disease and erectile dysfunction is seeking medication advice. Which anti-anginal medication should be used cautiously?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Statins" },
      ],
      Explanation:
        "Nitrates should be used cautiously, especially if the patient is using medications for erectile dysfunction.",
    },
    {
      question:
        "A 62-year-old female with heart failure and a history of depression is on carvedilol. What potential side effect should be monitored?",
      answers: [
        { text: "Exacerbation of heart failure" },
        { text: "Exacerbation of depression", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Renal impairment" },
        { text: "Worsening asthma" },
      ],
      Explanation:
        "Carvedilol can potentially exacerbate depression, so this should be closely monitored.",
    },
    {
      question:
        "A 77-year-old male with hypertension and benign prostatic hyperplasia is on doxazosin. What is a key benefit of this medication for his BPH?",
      answers: [
        { text: "Decreased prostate size" },
        { text: "Improved urinary flow", isCorrect: true },
        { text: "Reduced risk of prostate cancer" },
        { text: "Reduced urinary frequency" },
        { text: "Stabilization of blood pressure" },
      ],
      Explanation:
        "Doxazosin can improve urinary flow, which is beneficial for patients with BPH.",
    },
    {
      question:
        "A 68-year-old female with diabetes and hypertension is on an ACE inhibitor. She experiences facial swelling. What is the next step?",
      answers: [
        { text: "Add an ARB" },
        { text: "Add an antihistamine" },
        { text: "Discontinue the ACE inhibitor", isCorrect: true },
        { text: "Reduce the ACE inhibitor dose" },
        { text: "Switch to a beta-blocker" },
      ],
      Explanation:
        "Discontinuing the ACE inhibitor is crucial in the case of facial swelling, a sign of angioedema.",
    },
    {
      question:
        "A 57-year-old male with chronic stable angina and gastroesophageal reflux disease (GERD) is on a nitrate. What concern should be addressed?",
      answers: [
        { text: "Increased risk of myocardial infarction" },
        { text: "Increased risk of stroke" },
        { text: "Potentiation of GERD symptoms", isCorrect: true },
        { text: "Reduction in angina control" },
        { text: "Risk of hypotension" },
      ],
      Explanation:
        "Nitrates can potentiate GERD symptoms, so this should be closely monitored.",
    },
    {
      question:
        "A 71-year-old female with atrial fibrillation and a high stroke risk is on aspirin. What medication is more appropriate for stroke prevention?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Clopidogrel" },
        { text: "Dabigatran" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban is more appropriate for stroke prevention in atrial fibrillation compared to aspirin.",
    },
    {
      question:
        "A 64-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) is on metoprolol. What is a potential risk with this medication?",
      answers: [
        { text: "Exacerbation of COPD", isCorrect: true },
        { text: "Increased blood pressure" },
        { text: "Increased heart rate" },
        { text: "Renal impairment" },
        { text: "Worsening heart failure" },
      ],
      Explanation:
        "Metoprolol can exacerbate COPD, so an alternative medication might be needed.",
    },
    {
      question:
        "A 59-year-old female with heart failure and diabetes is considering spironolactone. What should be monitored due to her diabetes?",
      answers: [
        { text: "Blood glucose levels" },
        { text: "Lipid profile" },
        { text: "Potassium levels", isCorrect: true },
        { text: "Renal function" },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Potassium levels should be closely monitored in patients on spironolactone, especially those with diabetes.",
    },
    {
      question:
        "A 66-year-old male with hypertension and a history of peptic ulcer disease is on aspirin for primary prevention. What is an important consideration?",
      answers: [
        { text: "Discontinue aspirin", isCorrect: true },
        { text: "Increase aspirin dose" },
        { text: "Monitor for GI bleeding" },
        { text: "Start a proton pump inhibitor" },
        { text: "Switch to clopidogrel" },
      ],
      Explanation:
        "Discontinuing aspirin might be necessary due to its potential to exacerbate peptic ulcer disease.",
    },
    {
      question:
        "A 73-year-old female with chronic kidney disease and hypertension is on losartan. She complains of dizziness. What should be evaluated?",
      answers: [
        { text: "Blood pressure", isCorrect: true },
        { text: "Electrolyte balance" },
        { text: "Liver function" },
        { text: "Renal function" },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Blood pressure should be evaluated, as losartan can cause hypotension leading to dizziness.",
    },
    {
      question:
        "A 59-year-old male with hypertension and chronic kidney disease is experiencing hyperkalemia. Which antihypertensive should be reconsidered?",
      answers: [
        { text: "Amlodipine" },
        { text: "Furosemide" },
        { text: "Lisinopril", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Nifedipine" },
      ],
      Explanation:
        "Lisinopril, an ACE inhibitor, can cause hyperkalemia and should be reconsidered in patients with chronic kidney disease.",
    },
    {
      question:
        "A 68-year-old female with atrial fibrillation and a history of major bleeding is under anticoagulation therapy. Which anticoagulant is most appropriate?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban has a lower bleeding risk compared to other anticoagulants, making it appropriate for patients with a history of major bleeding.",
    },
    {
      question:
        "A 70-year-old male with stable ischemic heart disease is experiencing dizziness and fatigue. He is on atenolol. What might be the cause?",
      answers: [
        { text: "Atenolol overdose" },
        { text: "Interaction with another medication" },
        { text: "Normal side effect of atenolol", isCorrect: true },
        { text: "Underlying cardiac issue" },
        { text: "Worsening ischemic disease" },
      ],
      Explanation:
        "Dizziness and fatigue can be normal side effects of atenolol, a beta-blocker.",
    },
    {
      question:
        "A 62-year-old female with hypertension and type 2 diabetes is considering an ARB. Which ARB is beneficial for her diabetic nephropathy?",
      answers: [
        { text: "Candesartan" },
        { text: "Irbesartan", isCorrect: true },
        { text: "Losartan" },
        { text: "Olmesartan" },
        { text: "Valsartan" },
      ],
      Explanation:
        "Irbesartan is beneficial for its protective effects in diabetic nephropathy.",
    },
    {
      question:
        "A 56-year-old male with chronic heart failure is experiencing worsening renal function. He is on enalapril and spironolactone. What should be the focus of medication review?",
      answers: [
        { text: "Both enalapril and spironolactone", isCorrect: true },
        { text: "Enalapril only" },
        { text: "Spironolactone only" },
        { text: "Addition of a diuretic" },
        { text: "Adjustment of heart failure medication" },
      ],
      Explanation:
        "Both enalapril and spironolactone can impact renal function and should be the focus of the medication review.",
    },
    {
      question:
        "A 73-year-old female with atrial fibrillation and moderate renal impairment requires anticoagulation. Which medication requires dose adjustment or monitoring?",
      answers: [
        { text: "Apixaban" },
        { text: "Dabigatran", isCorrect: true },
        { text: "Edoxaban" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Dabigatran requires careful dose adjustment and monitoring in patients with renal impairment.",
    },
    {
      question:
        "A 65-year-old male with stable angina and erectile dysfunction is on isosorbide mononitrate. He is considering a PDE5 inhibitor. What is a major concern?",
      answers: [
        { text: "Decreased efficacy of angina treatment" },
        { text: "Increased risk of myocardial infarction" },
        { text: "Potential for severe hypotension", isCorrect: true },
        { text: "Risk of arrhythmias" },
        { text: "Worsening of erectile dysfunction" },
      ],
      Explanation:
        "The combination of isosorbide mononitrate and a PDE5 inhibitor can lead to severe hypotension.",
    },
    {
      question:
        "A 60-year-old female with hypertension and history of angioedema on ACE inhibitors is on losartan. What should be monitored due to her history?",
      answers: [
        { text: "Blood glucose levels" },
        { text: "Blood pressure" },
        { text: "Liver function" },
        { text: "Renal function" },
        { text: "Signs of angioedema", isCorrect: true },
      ],
      Explanation:
        "Signs of angioedema should be monitored, as it can rarely occur with ARBs in patients with a history of angioedema on ACE inhibitors.",
    },
    {
      question:
        "A 57-year-old male with heart failure and COPD is on carvedilol. He reports increased shortness of breath. What might be the cause?",
      answers: [
        { text: "COPD exacerbation" },
        { text: "Heart failure exacerbation", isCorrect: true },
        { text: "Interaction with COPD medication" },
        { text: "Normal side effect of carvedilol" },
        { text: "Pulmonary infection" },
      ],
      Explanation:
        "Heart failure exacerbation could be a cause, as carvedilol can impact lung function and heart failure symptoms.",
    },
    {
      question:
        "A 71-year-old female with chronic kidney disease and heart failure is on furosemide. She is experiencing decreased urine output. What is the most likely cause?",
      answers: [
        { text: "Dehydration" },
        { text: "Deterioration of kidney function" },
        { text: "Furosemide resistance" },
        { text: "Heart failure exacerbation", isCorrect: true },
        { text: "Hypotension" },
      ],
      Explanation:
        "Heart failure exacerbation could lead to decreased urine output despite furosemide use.",
    },
    {
      question:
        "A 66-year-old male with atrial fibrillation and a high stroke risk is on aspirin. Is aspirin monotherapy sufficient for stroke prevention?",
      answers: [
        { text: "Yes, if no history of stroke" },
        { text: "Yes, with regular monitoring" },
        { text: "No, should be on an anticoagulant", isCorrect: true },
        { text: "No, unless contraindicated" },
        { text: "No, should combine with a P2Y12 inhibitor" },
      ],
      Explanation:
        "In atrial fibrillation with high stroke risk, aspirin monotherapy is generally not sufficient; an anticoagulant is typically recommended.",
    },
    {
      question:
        "A 58-year-old female with hypertension and recent onset of type 2 diabetes is on metoprolol. She reports frequent hypoglycemic episodes. What should be considered?",
      answers: [
        { text: "Adjusting diabetes medication" },
        { text: "Changing the beta-blocker" },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Reducing the dose of metoprolol", isCorrect: true },
        { text: "Switching to a different antihypertensive class" },
      ],
      Explanation:
        "Reducing the dose of metoprolol or considering a different antihypertensive might be necessary due to the risk of masking hypoglycemic symptoms.",
    },
    {
      question:
        "A 69-year-old male with stable ischemic heart disease and chronic renal failure is on atorvastatin. What is important to monitor?",
      answers: [
        { text: "Liver function tests", isCorrect: true },
        { text: "Renal function tests" },
        { text: "Serum cholesterol levels" },
        { text: "Signs of muscle pain or weakness" },
        { text: "Thyroid function tests" },
      ],
      Explanation:
        "Liver function tests are important to monitor in patients on atorvastatin, particularly with chronic renal failure.",
    },
    {
      question:
        "A 75-year-old female with hypertension and glaucoma is on a thiazide diuretic. What potential complication should be monitored?",
      answers: [
        { text: "Decreased intraocular pressure" },
        { text: "Increased risk of acute glaucoma", isCorrect: true },
        { text: "Renal impairment" },
        { text: "Worsening hypertension" },
        { text: "Electrolyte imbalance" },
      ],
      Explanation:
        "Increased risk of acute glaucoma is a concern with thiazide diuretics in patients with glaucoma.",
    },
    {
      question:
        "A 54-year-old male with atrial fibrillation and a prior GI bleed is on rivaroxaban. What is an alternative anticoagulant with a potentially lower GI bleeding risk?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Edoxaban" },
        { text: "Warfarin" },
        { text: "Clopidogrel" },
      ],
      Explanation:
        "Apixaban may have a lower GI bleeding risk compared to rivaroxaban and could be a safer alternative.",
    },
    {
      question:
        "A 67-year-old female with heart failure and diabetes is on amlodipine. She reports swelling in her legs. What should be the first step in management?",
      answers: [
        { text: "Add a diuretic" },
        { text: "Increase amlodipine dose" },
        { text: "Reduce amlodipine dose", isCorrect: true },
        { text: "Switch to a different calcium channel blocker" },
        { text: "Switch to a different antihypertensive class" },
      ],
      Explanation:
        "Reducing the dose of amlodipine or considering an alternative antihypertensive might help manage the leg swelling.",
    },
    {
      question:
        "A 70-year-old male with chronic kidney disease and hypertension is on lisinopril. His serum creatinine has increased. What action is needed?",
      answers: [
        { text: "Continue monitoring only" },
        { text: "Decrease the dose of lisinopril" },
        { text: "Discontinue lisinopril", isCorrect: true },
        { text: "Switch to a calcium channel blocker" },
        { text: "Switch to a diuretic" },
      ],
      Explanation:
        "Switching to a different class of antihypertensive, such as a calcium channel blocker, may be necessary if lisinopril is affecting renal function.",
    },
    {
      question:
        "A 59-year-old female with hypertension and a history of depression is on a beta-blocker. She reports worsening mood. What should be considered?",
      answers: [
        { text: "Adding an antidepressant" },
        { text: "Changing to a different beta-blocker" },
        { text: "Monitoring depression more closely" },
        {
          text: "Switching to a different antihypertensive class",
          isCorrect: true,
        },
        { text: "Continue the current regimen with close monitoring" },
      ],
      Explanation:
        "Switching to a different antihypertensive class may be necessary if the beta-blocker is exacerbating depression.",
    },
    {
      question:
        "A 64-year-old male with stable angina and a peptic ulcer is on aspirin. What is an important consideration for his medication regimen?",
      answers: [
        { text: "Add a PPI", isCorrect: true },
        { text: "Change to a different NSAID" },
        { text: "Discontinue aspirin" },
        { text: "Switch to clopidogrel" },
        { text: "Use aspirin with caution" },
      ],
      Explanation:
        "Adding a proton pump inhibitor (PPI) can help protect against peptic ulcer exacerbation while on aspirin.",
    },
    {
      question:
        "A 72-year-old female with heart failure and asthma is on enalapril. She reports a persistent dry cough. What is a suitable alternative medication?",
      answers: [
        { text: "Another ACE inhibitor" },
        { text: "An ARB", isCorrect: true },
        { text: "A beta-blocker" },
        { text: "A calcium channel blocker" },
        { text: "A diuretic" },
      ],
      Explanation:
        "An ARB is a suitable alternative for patients who develop a cough with ACE inhibitors.",
    },
    {
      question:
        "A 64-year-old female with hypertension and chronic bronchitis is on a beta-blocker. She reports increased coughing. What medication adjustment is indicated?",
      answers: [
        { text: "Add a bronchodilator" },
        { text: "Change to a non-selective beta-blocker" },
        { text: "Discontinue the beta-blocker", isCorrect: true },
        { text: "Switch to a cardioselective beta-blocker" },
        { text: "Switch to an ACE inhibitor" },
      ],
      Explanation:
        "Discontinuing the beta-blocker may be necessary if it exacerbates chronic bronchitis symptoms.",
    },
    {
      question:
        "A 75-year-old male with atrial fibrillation and a history of renal impairment is on dabigatran. What is a key consideration for his medication?",
      answers: [
        { text: "Frequent renal function monitoring", isCorrect: true },
        { text: "Increasing the dose" },
        { text: "Supplementing with aspirin" },
        { text: "Switching to warfarin" },
        { text: "Using the lowest effective dose" },
      ],
      Explanation:
        "Frequent monitoring of renal function is essential for patients on dabigatran, especially with a history of renal impairment.",
    },
    {
      question:
        "A 57-year-old female with hypertension and osteoporosis is on a thiazide diuretic. What is a beneficial effect of this medication for her osteoporosis?",
      answers: [
        { text: "Decreased bone resorption", isCorrect: true },
        { text: "Increased bone density" },
        { text: "Increased calcium absorption" },
        { text: "Reduced risk of fractures" },
        { text: "Stabilization of bone metabolism" },
      ],
      Explanation:
        "Thiazide diuretics can decrease bone resorption, which is beneficial for patients with osteoporosis.",
    },
    {
      question:
        "A 69-year-old male with stable angina is considering adding a PDE5 inhibitor for erectile dysfunction. He is currently on a nitrate. What is the primary concern?",
      answers: [
        { text: "Decreased efficacy of angina treatment" },
        { text: "Increased risk of myocardial infarction" },
        { text: "Potential for severe hypotension", isCorrect: true },
        { text: "Risk of arrhythmias" },
        { text: "Worsening of erectile dysfunction" },
      ],
      Explanation:
        "The combination of nitrates and PDE5 inhibitors can lead to severe hypotension and is contraindicated.",
    },
    {
      question:
        "A 60-year-old female with heart failure and diabetes is on a beta-blocker. She experiences frequent hypoglycemic episodes. What should be considered?",
      answers: [
        { text: "Changing the beta-blocker", isCorrect: true },
        { text: "Discontinuing the beta-blocker" },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Reducing the dose of the beta-blocker" },
        { text: "Switching to a different class of heart failure medication" },
      ],
      Explanation:
        "Changing the beta-blocker to a different type or class may help manage the hypoglycemic episodes.",
    },
    {
      question:
        "A 71-year-old male with chronic kidney disease and atrial fibrillation is on rivaroxaban. What is important to monitor in this patient?",
      answers: [
        { text: "Hemoglobin levels" },
        { text: "Liver function" },
        { text: "Platelet count" },
        { text: "Renal function", isCorrect: true },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Monitoring renal function is important in patients on rivaroxaban, especially those with chronic kidney disease.",
    },
    {
      question:
        "A 53-year-old female with hypertension and a history of angioedema with ACE inhibitors is on an ARB. She reports facial swelling. What is the best course of action?",
      answers: [
        { text: "Add an antihistamine" },
        { text: "Continue the ARB with close monitoring" },
        { text: "Discontinue the ARB", isCorrect: true },
        { text: "Reduce the dose of the ARB" },
        { text: "Switch to a calcium channel blocker" },
      ],
      Explanation:
        "Discontinuing the ARB is necessary if angioedema occurs, as it can be a serious side effect.",
    },
    {
      question:
        "A 67-year-old male with heart failure and COPD is on carvedilol. He reports worsening shortness of breath. What might be the cause?",
      answers: [
        { text: "Carvedilol exacerbating COPD", isCorrect: true },
        { text: "Fluid retention due to heart failure" },
        { text: "Interaction with COPD medication" },
        { text: "Normal side effect of carvedilol" },
        { text: "Pulmonary infection" },
      ],
      Explanation:
        "Carvedilol, a beta-blocker, can exacerbate COPD symptoms, potentially causing shortness of breath.",
    },
    {
      question:
        "A 62-year-old female with chronic kidney disease and heart failure is on enalapril and furosemide. She has increasing edema. What should be evaluated first?",
      answers: [
        { text: "Enalapril dose" },
        { text: "Furosemide dose", isCorrect: true },
        { text: "Kidney function" },
        { text: "Heart function" },
        { text: "Fluid and salt intake" },
      ],
      Explanation:
        "Evaluating and possibly adjusting the dose of furosemide, a diuretic, may be necessary to manage edema.",
    },
    {
      question:
        "A 58-year-old male with hypertension and a history of gout is on hydrochlorothiazide. He reports a recent gout attack. What modification is needed?",
      answers: [
        { text: "Add a gout medication" },
        { text: "Increase the hydrochlorothiazide dose" },
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Switch to an ACE inhibitor" },
        { text: "Switch to another thiazide diuretic" },
      ],
      Explanation:
        "Switching to a loop diuretic may be beneficial, as hydrochlorothiazide can exacerbate gout.",
    },
    {
      question:
        "A 73-year-old female with hypertension and chronic anxiety is on a beta-blocker. She reports increased anxiety. What is the appropriate action?",
      answers: [
        { text: "Add an anxiolytic" },
        { text: "Change to a different beta-blocker" },
        { text: "Discontinue the beta-blocker" },
        { text: "Increase the beta-blocker dose", isCorrect: true },
        { text: "Switch to a different class of antihypertensive" },
      ],
      Explanation:
        "Discontinuing or switching to a different class of antihypertensive may be necessary if the beta-blocker exacerbates anxiety.",
    },
    {
      question:
        "A 65-year-old male with atrial fibrillation and moderate renal dysfunction is on apixaban. What is important regarding his medication regimen?",
      answers: [
        { text: "Frequent liver function tests" },
        { text: "Monitoring for bleeding" },
        { text: "Regular renal function tests", isCorrect: true },
        { text: "Routine INR monitoring" },
        { text: "Supplementing with aspirin" },
      ],
      Explanation:
        "Regular renal function tests are important for patients on apixaban, especially those with renal dysfunction.",
    },
    {
      question:
        "A 60-year-old female with stable ischemic heart disease and a history of peptic ulcer disease is on low-dose aspirin. What additional medication might be beneficial?",
      answers: [
        { text: "A PPI", isCorrect: true },
        { text: "A beta-blocker" },
        { text: "Another NSAID" },
        { text: "Clopidogrel" },
        { text: "High-dose aspirin" },
      ],
      Explanation:
        "A proton pump inhibitor (PPI) may be beneficial to mitigate the risk of peptic ulcer disease exacerbated by aspirin.",
    },
    {
      question:
        "A 70-year-old male with heart failure and a history of asthma is on lisinopril. He reports wheezing and shortness of breath. What should be the focus of medication review?",
      answers: [
        { text: "Asthma medication" },
        { text: "Heart failure medication" },
        { text: "Lisinopril", isCorrect: true },
        { text: "Rescue inhaler usage" },
        { text: "Steroid treatment" },
      ],
      Explanation:
        "Lisinopril may need to be reviewed, as ACE inhibitors can cause cough and potentially exacerbate asthma symptoms.",
    },
    {
      question:
        "A 54-year-old male with hypertension and erectile dysfunction is considering sildenafil. He is currently on amlodipine. What should be monitored?",
      answers: [
        { text: "Blood pressure", isCorrect: true },
        { text: "Heart rate" },
        { text: "Liver function" },
        { text: "Renal function" },
        { text: "Serum cholesterol" },
      ],
      Explanation:
        "Blood pressure should be monitored, as sildenafil can cause hypotension, especially in patients on antihypertensives like amlodipine.",
    },
    {
      question:
        "A 77-year-old female with chronic kidney disease and heart failure is on spironolactone. She reports muscle weakness. What should be checked first?",
      answers: [
        { text: "Calcium levels" },
        { text: "Magnesium levels" },
        { text: "Potassium levels", isCorrect: true },
        { text: "Renal function" },
        { text: "Thyroid function" },
      ],
      Explanation:
        "Potassium levels should be checked first, as spironolactone can cause hyperkalemia, leading to muscle weakness.",
    },
    {
      question:
        "A 59-year-old male with atrial fibrillation and diabetes is on warfarin. He has inconsistent INR levels. What might improve INR control?",
      answers: [
        { text: "Changing to a different anticoagulant" },
        { text: "More frequent INR monitoring", isCorrect: true },
        { text: "Starting insulin therapy" },
        { text: "Switching to a low-carbohydrate diet" },
        { text: "Using a consistent dose of warfarin" },
      ],
      Explanation:
        "More frequent INR monitoring may be necessary to achieve better control in patients on warfarin, especially with fluctuating levels.",
    },
    {
      question:
        "A 68-year-old female with hypertension and a history of high cholesterol is on atorvastatin. She reports muscle pain. What is the first step in management?",
      answers: [
        { text: "Changing to a different statin", isCorrect: true },
        { text: "Decreasing the atorvastatin dose" },
        { text: "Discontinuing atorvastatin" },
        { text: "Monitoring liver enzymes" },
        { text: "Starting a muscle relaxant" },
      ],
      Explanation:
        "Changing to a different statin or adjusting the dose might be necessary if muscle pain is a side effect of atorvastatin.",
    },
    {
      question:
        "A 71-year-old male with stable angina and peripheral artery disease is on clopidogrel. What is a key benefit of this medication for him?",
      answers: [
        { text: "Decreased angina frequency" },
        { text: "Improved walking distance" },
        { text: "Lowered blood pressure" },
        { text: "Reduced risk of arterial thrombosis", isCorrect: true },
        { text: "Stabilization of heart rate" },
      ],
      Explanation:
        "Clopidogrel reduces the risk of arterial thrombosis, which is beneficial for patients with peripheral artery disease.",
    },
    {
      question:
        "A 66-year-old female with heart failure and renal impairment is on a high dose of furosemide. She has decreasing urine output. What should be considered?",
      answers: [
        { text: "Adding a thiazide diuretic" },
        { text: "Decreasing furosemide dose" },
        { text: "Initiating dialysis" },
        { text: "Switching to a potassium-sparing diuretic" },
        { text: "Switching to torsemide", isCorrect: true },
      ],
      Explanation:
        "Switching to torsemide, which may be more effective in renal impairment, could be considered if furosemide is less effective.",
    },
    {
      question:
        "A 63-year-old male with hypertension and a history of hyperkalemia is on lisinopril. What medication change is advisable?",
      answers: [
        { text: "Change to a calcium channel blocker", isCorrect: true },
        { text: "Change to a beta-blocker" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Increase lisinopril dose" },
        { text: "Continue lisinopril with potassium monitoring" },
      ],
      Explanation:
        "Changing to a calcium channel blocker would be safer due to the risk of hyperkalemia with lisinopril.",
    },
    {
      question:
        "A 57-year-old female with chronic heart failure and renal impairment is on furosemide. She has worsening renal function. What action is recommended?",
      answers: [
        { text: "Increase furosemide dose" },
        { text: "Add hydrochlorothiazide" },
        { text: "Evaluate alternative diuretics", isCorrect: true },
        { text: "Discontinue furosemide" },
        { text: "Add spironolactone" },
      ],
      Explanation:
        "Evaluating alternative diuretics may be necessary due to worsening renal function with furosemide.",
    },
    {
      question:
        "A 70-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more suitable anticoagulant?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Clopidogrel" },
        { text: "Dabigatran" },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
      ],
      Explanation:
        "Apixaban is more suitable for stroke prevention in atrial fibrillation compared to aspirin.",
    },
    {
      question:
        "A 68-year-old female with hypertension and osteoporosis is on a beta-blocker. What alternative antihypertensive could also benefit her osteoporosis?",
      answers: [
        { text: "ACE inhibitor" },
        { text: "ARB" },
        { text: "Calcium channel blocker" },
        { text: "Thiazide diuretic", isCorrect: true },
        { text: "Alpha-blocker" },
      ],
      Explanation:
        "A thiazide diuretic could benefit both hypertension and osteoporosis by reducing calcium excretion.",
    },
    {
      question:
        "A 55-year-old male with stable ischemic heart disease and diabetes is on metformin and atorvastatin. He reports muscle pain. What might be the cause?",
      answers: [
        { text: "Atorvastatin side effect", isCorrect: true },
        { text: "Diabetes complication" },
        { text: "Metformin side effect" },
        { text: "Normal aging" },
        { text: "Physical overexertion" },
      ],
      Explanation:
        "Muscle pain can be a side effect of atorvastatin, especially in patients also taking metformin.",
    },
    {
      question:
        "A 72-year-old female with atrial fibrillation and chronic kidney disease is on warfarin. What is an important aspect of her care?",
      answers: [
        { text: "Regular INR monitoring", isCorrect: true },
        { text: "Switching to an ARB" },
        { text: "Lowering warfarin dose" },
        { text: "Discontinuing warfarin" },
        { text: "Adding an antiplatelet agent" },
      ],
      Explanation:
        "Regular INR monitoring is crucial for a patient on warfarin, especially with chronic kidney disease.",
    },
    {
      question:
        "A 60-year-old male with hypertension and a recent stroke is on losartan. What additional medication could benefit his stroke prevention?",
      answers: [
        { text: "Another ARB" },
        { text: "A calcium channel blocker" },
        { text: "A statin" },
        { text: "A beta-blocker" },
        { text: "An antiplatelet agent", isCorrect: true },
      ],
      Explanation:
        "Adding an antiplatelet agent could be beneficial for stroke prevention in addition to losartan.",
    },
    {
      question:
        "A 67-year-old female with stable angina and hypothyroidism is on levothyroxine and isosorbide mononitrat What is a concern with this combination?",
      answers: [
        { text: "Increased risk of arrhythmia" },
        { text: "Decreased effectiveness of levothyroxine", isCorrect: true },
        { text: "Hypertension exacerbation" },
        { text: "Increased angina frequency" },
        { text: "Thyroid function alteration" },
      ],
      Explanation:
        "The combination might affect the effectiveness of levothyroxine, requiring monitoring of thyroid function.",
    },
    {
      question:
        "A 73-year-old male with chronic heart failure and gout is on allopurinol and enalapril. He reports increased frequency of gout attacks. What should be considered?",
      answers: [
        { text: "Discontinuing allopurinol" },
        { text: "Switching from enalapril to an ARB", isCorrect: true },
        { text: "Increasing allopurinol dose" },
        { text: "Adjusting heart failure medication" },
        { text: "Starting a diuretic" },
      ],
      Explanation:
        "Switching from enalapril to an ARB may help reduce the frequency of gout attacks.",
    },
    {
      question:
        "A 58-year-old female with atrial fibrillation and a history of GI bleed is on dabigatran. What anticoagulant could be safer?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
        { text: "Clopidogrel" },
        { text: "Edoxaban" },
      ],
      Explanation:
        "Apixaban may be a safer alternative due to a lower risk of GI bleeding compared to dabigatran.",
    },
    {
      question:
        "A 62-year-old male with diabetes and hypertension is on an ACE inhibitor and reports persistent cough. What is an appropriate alternative?",
      answers: [
        { text: "Another ACE inhibitor" },
        { text: "An ARB", isCorrect: true },
        { text: "A beta-blocker" },
        { text: "A calcium channel blocker" },
        { text: "A diuretic" },
      ],
      Explanation:
        "Switching to an ARB is appropriate for patients who develop a cough with ACE inhibitors.",
    },
    {
      question:
        "A 66-year-old female with hypertension and asthma is considering a beta-blocker. Why should this be avoided?",
      answers: [
        { text: "Risk of hyperglycemia" },
        { text: "Risk of hypotension" },
        { text: "Risk of bronchospasm", isCorrect: true },
        { text: "Risk of renal impairment" },
        { text: "Risk of heart failure exacerbation" },
      ],
      Explanation:
        "Beta-blockers should be avoided due to the risk of bronchospasm in patients with asthma.",
    },
    {
      question:
        "A 71-year-old male with chronic kidney disease and heart failure is on spironolacton What should be closely monitored?",
      answers: [
        { text: "Blood glucose levels" },
        { text: "Potassium levels", isCorrect: true },
        { text: "Blood pressure" },
        { text: "Renal function" },
        { text: "Liver function" },
      ],
      Explanation:
        "Potassium levels should be closely monitored due to the risk of hyperkalemia with spironolactone, especially in chronic kidney disease.",
    },
    {
      question:
        "A 59-year-old female with atrial fibrillation and a history of peptic ulcer is on rivaroxaban. What alternative medication could be considered?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Dabigatran" },
        { text: "Warfarin" },
        { text: "Edoxaban" },
        { text: "Clopidogrel" },
      ],
      Explanation:
        "Apixaban might be a better alternative due to a potentially lower risk of peptic ulcer exacerbation.",
    },
    {
      question:
        "A 54-year-old male with stable angina and erectile dysfunction is using sildenafil. What angina medication should he avoid?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Aspirin" },
      ],
      Explanation:
        "Nitrates should be avoided as they can cause severe hypotension when combined with sildenafil.",
    },
    {
      question:
        "A 75-year-old female with hypertension and chronic obstructive pulmonary disease (COP is on amlodipin She reports ankle swelling. What should be the first step in management?",
      answers: [
        { text: "Increase amlodipine dose" },
        { text: "Add a diuretic" },
        { text: "Reduce amlodipine dose", isCorrect: true },
        { text: "Switch to a beta-blocker" },
        { text: "Change to an ACE inhibitor" },
      ],
      Explanation:
        "Reducing the dose of amlodipine or considering an alternative antihypertensive might help manage the ankle swelling.",
    },
    {
      question:
        "A 68-year-old male with heart failure and renal impairment is on lisinopril. He has worsening renal function. What is an advisable medication change?",
      answers: [
        { text: "Increase lisinopril dose" },
        { text: "Add a diuretic" },
        { text: "Switch to an ARB", isCorrect: true },
        { text: "Discontinue lisinopril" },
        { text: "Continue lisinopril with close monitoring" },
      ],
      Explanation:
        "Discontinuing lisinopril might be necessary due to its potential impact on renal function.",
    },
    {
      question:
        "A 60-year-old female with hypertension and a history of depression is on propranolol. She reports mood worsening. What is a suitable alternative medication?",
      answers: [
        { text: "Another beta-blocker" },
        { text: "An ACE inhibitor" },
        { text: "A calcium channel blocker", isCorrect: true },
        { text: "An ARB" },
        { text: "A diuretic" },
      ],
      Explanation:
        "A calcium channel blocker might be a suitable alternative if propranolol is worsening her mood.",
    },
    {
      question:
        "A 77-year-old male with stable ischemic heart disease and a history of liver disease is on simvastatin. What should be monitored?",
      answers: [
        { text: "Liver function tests", isCorrect: true },
        { text: "Renal function tests" },
        { text: "Serum cholesterol levels" },
        { text: "Blood pressure" },
        { text: "Thyroid function tests" },
      ],
      Explanation:
        "Liver function tests should be monitored due to the potential hepatotoxic effects of simvastatin, especially in patients with pre-existing liver disease.",
    },
    {
      question:
        "A 53-year-old female with heart failure and diabetes is on metformin and carvedilol. She reports hypoglycemia. What should be considered?",
      answers: [
        { text: "Decreasing metformin dose" },
        { text: "Stopping carvedilol" },
        { text: "Monitoring blood glucose more frequently", isCorrect: true },
        { text: "Switching to a different beta-blocker" },
        { text: "Adjusting diabetes treatment" },
      ],
      Explanation:
        "Monitoring blood glucose more frequently is important as carvedilol can mask hypoglycemic symptoms.",
    },
    {
      question:
        "A 60-year-old male with hypertension and chronic kidney disease is on lisinopril. He experiences a persistent dry cough. What is a suitable alternative medication?",
      answers: [
        { text: "Candesartan", isCorrect: true },
        { text: "Amlodipine" },
        { text: "Metoprolol" },
        { text: "Hydrochlorothiazide" },
        { text: "Diltiazem" },
      ],
      Explanation:
        "Candesartan, an ARB, is a suitable alternative to lisinopril, especially if the patient is experiencing a cough.",
    },
    {
      question:
        "A 72-year-old female with atrial fibrillation and a history of falls is on warfarin. Considering her fall risk, what medication adjustment is advisable?",
      answers: [
        { text: "Switch to a direct oral anticoagulant", isCorrect: true },
        { text: "Increase warfarin dose" },
        { text: "Add aspirin" },
        { text: "Discontinue anticoagulation" },
        { text: "Monitor INR more frequently" },
      ],
      Explanation:
        "Switching to a direct oral anticoagulant, like apixaban, may be safer considering her risk of falls and potential for bleeding.",
    },
    {
      question:
        "A 55-year-old male with stable angina and erectile dysfunction is considering a medication for angina. What should be avoided?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Aspirin" },
      ],
      Explanation:
        "Nitrates should be avoided as they can cause severe hypotension when used with medications for erectile dysfunction.",
    },
    {
      question:
        "A 67-year-old female with hypertension and osteoporosis is on hydrochlorothiazide. She is concerned about her bone health. What advice is appropriate?",
      answers: [
        { text: "Switch to a calcium channel blocker" },
        { text: "Add a bisphosphonate" },
        {
          text: "Continue hydrochlorothiazide as it is beneficial for bones",
          isCorrect: true,
        },
        { text: "Change to an ACE inhibitor" },
        { text: "Start calcium and vitamin D supplements" },
      ],
      Explanation:
        "Continuing hydrochlorothiazide is beneficial for her bone health as it helps reduce calcium excretion.",
    },
    {
      question:
        "A 58-year-old male with heart failure and renal impairment is on enalapril. He reports worsening renal function. What should be considered?",
      answers: [
        { text: "Increase enalapril dose" },
        { text: "Add a diuretic" },
        { text: "Adjust or discontinue enalapril", isCorrect: true },
        { text: "Start an ARB" },
        { text: "Maintain current enalapril dose with close monitoring" },
      ],
      Explanation:
        "Adjusting or discontinuing enalapril should be considered due to its potential to worsen renal function.",
    },
    {
      question:
        "A 63-year-old female with atrial fibrillation and a high bleeding risk is on rivaroxaban. What is a safer anticoagulation strategy?",
      answers: [
        { text: "Switch to apixaban", isCorrect: true },
        { text: "Switch to dabigatran" },
        { text: "Switch to warfarin" },
        { text: "Continue rivaroxaban with closer monitoring" },
        { text: "Add an antiplatelet agent" },
      ],
      Explanation:
        "Switching to apixaban may be safer, as it has a lower bleeding risk compared to rivaroxaban.",
    },
    {
      question:
        "A 70-year-old male with stable ischemic heart disease and type 2 diabetes is on metformin and atorvastatin. He reports muscle cramps. What should be evaluated?",
      answers: [
        { text: "Atorvastatin dosage", isCorrect: true },
        { text: "Metformin dosage" },
        { text: "Diabetes control" },
        { text: "Electrolyte imbalance" },
        { text: "Physical activity level" },
      ],
      Explanation:
        "The atorvastatin dosage should be evaluated, as statins can cause muscle cramps.",
    },
    {
      question:
        "A 74-year-old female with hypertension and a history of bronchospasm is on a beta-blocker. What is a more suitable medication?",
      answers: [
        { text: "ACE inhibitor" },
        { text: "ARB" },
        { text: "Calcium channel blocker", isCorrect: true },
        { text: "Another beta-blocker" },
        { text: "Thiazide diuretic" },
      ],
      Explanation:
        "A calcium channel blocker would be more suitable, as beta-blockers can exacerbate bronchospasm.",
    },
    {
      question:
        "A 59-year-old male with heart failure and COPD is on carvedilol. He reports worsening of respiratory symptoms. What is the best course of action?",
      answers: [
        { text: "Discontinue carvedilol" },
        { text: "Switch to a cardioselective beta-blocker", isCorrect: true },
        { text: "Increase the dose of carvedilol" },
        { text: "Add a bronchodilator" },
        { text: "Optimize COPD treatment" },
      ],
      Explanation:
        "Switching to a cardioselective beta-blocker like bisoprolol may help reduce respiratory symptoms in a patient with COPD.",
    },
    {
      question:
        "A 68-year-old female with chronic kidney disease and atrial fibrillation is on dabigatran. She has deteriorating renal function. What adjustment is necessary?",
      answers: [
        { text: "Switch to a different anticoagulant", isCorrect: true },
        { text: "Increase dabigatran dose" },
        { text: "Add an antiplatelet agent" },
        { text: "Continue dabigatran with frequent renal monitoring" },
        { text: "Discontinue dabigatran" },
      ],
      Explanation:
        "Switching to a different anticoagulant that is less dependent on renal excretion might be necessary.",
    },
    {
      question:
        "A 57-year-old female with hypertension and a history of angioedema with ACE inhibitors is on losartan. She reports facial swelling. What action should be taken?",
      answers: [
        { text: "Continue losartan with close monitoring" },
        { text: "Switch to a calcium channel blocker" },
        { text: "Increase losartan dose" },
        { text: "Add an ACE inhibitor" },
        { text: "Discontinue losartan", isCorrect: true },
      ],
      Explanation:
        "Discontinuing losartan is necessary due to the risk of angioedema, even though it's rare with ARBs.",
    },
    {
      question:
        "A 66-year-old male with stable angina and a history of liver disease is on isosorbide mononitrate. He reports dizziness. What should be evaluated?",
      answers: [
        { text: "Liver function" },
        { text: "Blood pressure", isCorrect: true },
        { text: "Isosorbide mononitrate dosage" },
        { text: "Angina status" },
        { text: "Cardiac function" },
      ],
      Explanation:
        "Blood pressure should be evaluated as isosorbide mononitrate can cause hypotension leading to dizziness.",
    },
    {
      question:
        "A 60-year-old female with heart failure and diabetes is on a thiazide diuretic. She has persistent hyperglycemia. What medication adjustment might help?",
      answers: [
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Increase thiazide dose" },
        { text: "Change to a potassium-sparing diuretic" },
        { text: "Add an ACE inhibitor" },
        { text: "Adjust diabetes medication" },
      ],
      Explanation:
        "Switching to a loop diuretic might help, as thiazide diuretics can worsen blood glucose control.",
    },
    {
      question:
        "A 73-year-old male with hypertension and chronic obstructive pulmonary disease (COPD) is on amlodipine. He reports ankle edema. What should be considered?",
      answers: [
        { text: "Increasing amlodipine dose" },
        { text: "Adding a beta-blocker" },
        { text: "Changing to an ACE inhibitor" },
        { text: "Starting a diuretic" },
        { text: "Reducing amlodipine dose", isCorrect: true },
      ],
      Explanation:
        "Reducing the dose of amlodipine or considering a different antihypertensive may help manage the ankle edema.",
    },
    {
      question:
        "A 54-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more effective stroke prevention strategy?",
      answers: [
        { text: "Increase aspirin dose" },
        { text: "Add clopidogrel" },
        { text: "Switch to an anticoagulant", isCorrect: true },
        { text: "Combine aspirin with a beta-blocker" },
        { text: "Maintain current aspirin therapy" },
      ],
      Explanation:
        "Switching to an anticoagulant is generally more effective for stroke prevention in atrial fibrillation.",
    },
    {
      question:
        "A 67-year-old female with stable ischemic heart disease and hypothyroidism is on levothyroxine and a beta-blocker. What should be monitored?",
      answers: [
        { text: "Thyroid function tests", isCorrect: true },
        { text: "Cardiac function" },
        { text: "Blood pressure" },
        { text: "Cholesterol levels" },
        { text: "Beta-blocker side effects" },
      ],
      Explanation:
        "Thyroid function tests should be monitored as beta-blockers can interact with thyroid hormone metabolism.",
    },
    {
      question:
        "A 71-year-old male with chronic kidney disease and heart failure is on spironolactone. He reports muscle weakness. What should be checked?",
      answers: [
        { text: "Potassium levels", isCorrect: true },
        { text: "Calcium levels" },
        { text: "Magnesium levels" },
        { text: "Renal function" },
        { text: "Liver function" },
      ],
      Explanation:
        "Potassium levels should be checked as spironolactone can cause hyperkalemia, leading to muscle weakness.",
    },
    {
      question:
        "A 62-year-old female with hypertension and a history of depression is on an ACE inhibitor. She reports worsening depression. What could be a suitable alternative?",
      answers: [
        { text: "A beta-blocker" },
        { text: "An ARB", isCorrect: true },
        { text: "A calcium channel blocker" },
        { text: "A diuretic" },
        { text: "Another ACE inhibitor" },
      ],
      Explanation:
        "An ARB could be a suitable alternative if the ACE inhibitor is contributing to her depression.",
    },
    {
      question:
        "A 58-year-old male with stable angina and erectile dysfunction is on sildenafil. He requires additional anti-anginal therapy. What should be avoided?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Aspirin" },
      ],
      Explanation:
        "Nitrates should be avoided due to the risk of severe hypotension when used with sildenafil.",
    },
    {
      question:
        "A 75-year-old female with hypertension and chronic bronchitis is on a non-selective beta-blocker. She reports increased coughing and wheezing. What is the best course of action?",
      answers: [
        { text: "Switch to a cardioselective beta-blocker", isCorrect: true },
        { text: "Increase the dose of the current beta-blocker" },
        { text: "Add a bronchodilator" },
        { text: "Switch to a calcium channel blocker" },
        { text: "Optimize bronchitis treatment" },
      ],
      Explanation:
        "Switching to a cardioselective beta-blocker like bisoprolol may reduce respiratory symptoms in a patient with chronic bronchitis.",
    },
    {
      question:
        "A 64-year-old male with heart failure and gout is on lisinopril and experiences frequent gout flares. What medication adjustment is advisable?",
      answers: [
        { text: "Add allopurinol" },
        { text: "Switch to a calcium channel blocker" },
        { text: "Change to an ARB", isCorrect: true },
        { text: "Increase lisinopril dose" },
        { text: "Add a diuretic" },
      ],
      Explanation:
        "Changing to an ARB might reduce the frequency of gout flares associated with lisinopril.",
    },
    {
      question:
        "A 59-year-old female with atrial fibrillation and chronic kidney disease is on apixaban. Given her kidney condition, what is important?",
      answers: [
        { text: "Regular renal function monitoring", isCorrect: true },
        { text: "Switching to warfarin" },
        { text: "Increasing apixaban dose" },
        { text: "Adding an antiplatelet agent" },
        { text: "Discontinuing anticoagulation" },
      ],
      Explanation:
        "Regular monitoring of renal function is important to adjust apixaban dosing appropriately.",
    },
    {
      question:
        "A 72-year-old male with hypertension and type 2 diabetes is on a beta-blocker. He reports episodes of hypoglycemia. What should be considered?",
      answers: [
        { text: "Switching to a calcium channel blocker", isCorrect: true },
        { text: "Increasing beta-blocker dose" },
        { text: "Adding a diuretic" },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Changing diabetes medication" },
      ],
      Explanation:
        "Switching to a calcium channel blocker might be safer, as beta-blockers can mask hypoglycemia symptoms.",
    },
    {
      question:
        "A 68-year-old female with stable ischemic heart disease is on aspirin and reports gastrointestinal discomfort. What is an appropriate action?",
      answers: [
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Switch to clopidogrel" },
        { text: "Discontinue aspirin" },
        { text: "Increase aspirin dose" },
        { text: "Combine aspirin with an antacid" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can help manage gastrointestinal discomfort associated with aspirin.",
    },
    {
      question:
        "A 55-year-old male with chronic kidney disease and heart failure is on furosemide and reports decreased urination. What should be evaluated?",
      answers: [
        { text: "Furosemide dose" },
        { text: "Renal function", isCorrect: true },
        { text: "Fluid intake" },
        { text: "Heart function" },
        { text: "Electrolyte balance" },
      ],
      Explanation:
        "Renal function should be evaluated, as decreased urination could indicate worsening renal function in this context.",
    },
    {
      question:
        "A 63-year-old female with hypertension and a history of bronchial asthma is on an ACE inhibitor. She reports worsening asthma symptoms. What is a suitable alternative?",
      answers: [
        { text: "A beta-blocker" },
        { text: "An ARB" },
        { text: "A calcium channel blocker", isCorrect: true },
        { text: "A diuretic" },
        { text: "Another ACE inhibitor" },
      ],
      Explanation:
        "A calcium channel blocker could be a suitable alternative, as ACE inhibitors may worsen asthma symptoms.",
    },
    {
      question:
        "A 70-year-old male with stable angina and reflux disease is on nitrates. He reports increased reflux symptoms. What could be a suitable management strategy?",
      answers: [
        { text: "Increase nitrate dosage" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Switch to a beta-blocker" },
        { text: "Change to a calcium channel blocker" },
        { text: "Discontinue nitrates" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can help manage increased reflux symptoms associated with nitrates.",
    },
    {
      question:
        "A 58-year-old female with heart failure and diabetes is on a thiazide diuretic and experiences persistent hyperglycemia. What adjustment might help?",
      answers: [
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Increase the diuretic dose" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Adjust diabetes medication" },
        { text: "Discontinue the diuretic" },
      ],
      Explanation:
        "Switching to a loop diuretic might be beneficial, as thiazide diuretics can worsen glucose control.",
    },
    {
      question:
        "A 66-year-old male with atrial fibrillation and a previous ischemic stroke is on aspirin. What is a more effective anticoagulation therapy?",
      answers: [
        { text: "Increase aspirin dose" },
        { text: "Add clopidogrel" },
        { text: "Switch to a direct oral anticoagulant", isCorrect: true },
        { text: "Combine aspirin with a beta-blocker" },
        { text: "Maintain aspirin only" },
      ],
      Explanation:
        "Switching to a direct oral anticoagulant, such as apixaban, would be more effective for stroke prevention.",
    },
    {
      question:
        "A 75-year-old female with hypertension and osteoarthritis is on a non-selective NSAID. She reports increased blood pressure. What should be considered?",
      answers: [
        { text: "Adding a second antihypertensive" },
        { text: "Switching to a selective NSAID", isCorrect: true },
        { text: "Increasing NSAID dose" },
        { text: "Starting a beta-blocker" },
        { text: "Monitoring blood pressure more closely" },
      ],
      Explanation:
        "Switching to a selective NSAID might help manage increased blood pressure associated with non-selective NSAIDs.",
    },
    {
      question:
        "A 57-year-old male with stable ischemic heart disease and peptic ulcer disease is on low-dose aspirin. What gastroprotective strategy is advisable?",
      answers: [
        { text: "Discontinue aspirin" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Switch to a different antiplatelet agent" },
        { text: "Combine aspirin with an H2 blocker" },
        { text: "Increase aspirin dose" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can provide gastroprotection while continuing low-dose aspirin therapy.",
    },
    {
      question:
        "A 69-year-old female with atrial fibrillation and renal impairment is on dabigatran. Given her renal condition, what is a key consideration?",
      answers: [
        { text: "Switching to warfarin" },
        { text: "Regular renal function monitoring", isCorrect: true },
        { text: "Increasing dabigatran dose" },
        { text: "Combining dabigatran with an antiplatelet" },
        { text: "Discontinuing anticoagulation" },
      ],
      Explanation:
        "Regular monitoring of renal function is crucial to adjust dabigatran dosing appropriately.",
    },
    {
      question:
        "A 60-year-old male with hypertension and gout is on hydrochlorothiazide. He experiences frequent gout attacks. What change in therapy could help?",
      answers: [
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Increase hydrochlorothiazide dose" },
        { text: "Add a beta-blocker" },
        { text: "Start allopurinol" },
        { text: "Change to an ACE inhibitor" },
      ],
      Explanation:
        "Switching to a loop diuretic might be beneficial, as hydrochlorothiazide can exacerbate gout.",
    },
    {
      question:
        "A 74-year-old female with chronic kidney disease and heart failure is on lisinopril. She reports increased serum creatinine levels. What action is recommended?",
      answers: [
        { text: "Increase lisinopril dose" },
        { text: "Add a diuretic" },
        { text: "Adjust or discontinue lisinopril", isCorrect: true },
        { text: "Start an ARB" },
        { text: "Continue lisinopril with renal monitoring" },
      ],
      Explanation:
        "Adjusting or discontinuing lisinopril might be necessary due to its potential impact on renal function.",
    },
    {
      question:
        "A 53-year-old male with stable angina and erectile dysfunction is on sildenafil. He needs additional anti-anginal medication. What should be avoided?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Calcium channel blockers" },
        { text: "Nitrates", isCorrect: true },
        { text: "Ranolazine" },
        { text: "Aspirin" },
      ],
      Explanation:
        "Nitrates should be avoided due to the risk of severe hypotension when used with medications like sildenafil.",
    },
    {
      question:
        "A 67-year-old female with hypertension and chronic bronchitis is on a beta-blocker. She reports increased cough and wheezing. What is a more suitable medication?",
      answers: [
        { text: "Another beta-blocker" },
        { text: "An ACE inhibitor" },
        { text: "A calcium channel blocker", isCorrect: true },
        { text: "An ARB" },
        { text: "A diuretic" },
      ],
      Explanation:
        "A calcium channel blocker would be a more suitable choice, as beta-blockers can exacerbate bronchitis symptoms.",
    },
    {
      question:
        "A 71-year-old male with heart failure and diabetes is on carvedilol. He reports episodes of hypoglycemia. What should be considered?",
      answers: [
        { text: "Switching to a different beta-blocker" },
        { text: "Adjusting diabetes medication", isCorrect: true },
        { text: "Increasing carvedilol dose" },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Adding a diuretic" },
      ],
      Explanation:
        "Adjusting diabetes medication is important, as carvedilol can mask hypoglycemic symptoms.",
    },
    {
      question:
        "A 62-year-old female with atrial fibrillation and mild renal impairment is on rivaroxaban. What is important to monitor?",
      answers: [
        { text: "Liver function" },
        { text: "Renal function", isCorrect: true },
        { text: "INR levels" },
        { text: "Blood pressure" },
        { text: "Electrolyte balance" },
      ],
      Explanation:
        "Renal function should be closely monitored, as rivaroxaban dosing may need adjustment in renal impairment.",
    },
    {
      question:
        "A 56-year-old male with stable angina and gastroesophageal reflux disease (GERD) is on a nitrate. He reports worsening reflux. What adjustment might help?",
      answers: [
        { text: "Increase nitrate dosage" },
        { text: "Switch to a different anti-anginal medication" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Combine nitrate with an H2 blocker" },
        { text: "Discontinue nitrate" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can help manage increased reflux symptoms associated with nitrates.",
    },
    {
      question:
        "A 77-year-old female with hypertension and chronic kidney disease is on amlodipine. She experiences peripheral edema. What is an appropriate action?",
      answers: [
        { text: "Increase amlodipine dose" },
        { text: "Add a diuretic" },
        { text: "Switch to a different calcium channel blocker" },
        { text: "Reduce amlodipine dose", isCorrect: true },
        { text: "Change to an ACE inhibitor" },
      ],
      Explanation:
        "Reducing the dose of amlodipine or switching to a different antihypertensive might help manage peripheral edema.",
    },
    {
      question:
        "A 61-year-old male with hypertension and a history of asthma is on an ACE inhibitor and reports worsening asthma symptoms. What medication adjustment should be considered?",
      answers: [
        { text: "Switch to an ARB", isCorrect: true },
        { text: "Increase ACE inhibitor dose" },
        { text: "Add a beta-blocker" },
        { text: "Add a calcium channel blocker" },
        { text: "Add a diuretic" },
      ],
      Explanation:
        "Switching to an ARB may be beneficial, as ACE inhibitors can exacerbate asthma symptoms.",
    },
    {
      question:
        "A 75-year-old female with chronic heart failure and renal impairment is on digoxin. She has symptoms of digoxin toxicity. What should be done?",
      answers: [
        { text: "Increase digoxin dose" },
        { text: "Discontinue digoxin" },
        { text: "Switch to a different medication" },
        { text: "Reduce digoxin dose", isCorrect: true },
        { text: "Add an anti-arrhythmic" },
      ],
      Explanation:
        "Reducing the dose of digoxin or discontinuing it may be necessary in case of toxicity, especially in renal impairment.",
    },
    {
      question:
        "A 67-year-old male with stable ischemic heart disease and type 2 diabetes is on a statin. He reports muscle pain. What is a suitable alternative?",
      answers: [
        { text: "Switch to a different statin", isCorrect: true },
        { text: "Discontinue statin therapy" },
        { text: "Add a fibrate" },
        { text: "Begin CoQ10 supplementation" },
        { text: "Increase statin dose" },
      ],
      Explanation:
        "Switching to a different statin or considering CoQ10 supplementation might help manage muscle pain.",
    },
    {
      question:
        "A 70-year-old female with hypertension and chronic kidney disease is on a calcium channel blocker. She reports swollen ankles. What medication change could help?",
      answers: [
        { text: "Add a diuretic", isCorrect: true },
        { text: "Increase calcium channel blocker dose" },
        { text: "Switch to a beta-blocker" },
        { text: "Switch to an ACE inhibitor" },
        { text: "Switch to an ARB" },
      ],
      Explanation:
        "Adding a diuretic may help manage the peripheral edema associated with calcium channel blockers.",
    },
    {
      question:
        "A 54-year-old male with atrial fibrillation and a prior history of peptic ulcer is on warfarin. He experiences gastrointestinal discomfort. What action is advisable?",
      answers: [
        { text: "Switch to a direct oral anticoagulant", isCorrect: true },
        { text: "Add a proton pump inhibitor" },
        { text: "Discontinue warfarin" },
        { text: "Increase warfarin dose" },
        { text: "Combine warfarin with an antiplatelet" },
      ],
      Explanation:
        "Switching to a direct oral anticoagulant may reduce the risk of gastrointestinal discomfort.",
    },
    {
      question:
        "A 63-year-old female with heart failure and diabetes is on metformin and a beta-blocker. She reports frequent hypoglycemic episodes. What should be considered?",
      answers: [
        { text: "Switching to a different beta-blocker" },
        { text: "Adjusting diabetes medication", isCorrect: true },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Discontinuing beta-blocker" },
        { text: "Adding an ACE inhibitor" },
      ],
      Explanation:
        "Adjusting her diabetes medication or switching to a different beta-blocker may be necessary to manage hypoglycemia.",
    },
    {
      question:
        "A 58-year-old male with chronic kidney disease and hypertension is on an ARB. He reports increased serum potassium. What is the best course of action?",
      answers: [
        { text: "Discontinue the ARB" },
        { text: "Switch to a calcium channel blocker", isCorrect: true },
        { text: "Reduce the ARB dose" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Monitor potassium levels closely" },
      ],
      Explanation:
        "Switching to a calcium channel blocker may be safer due to the risk of hyperkalemia with ARBs in chronic kidney disease.",
    },
    {
      question:
        "A 69-year-old female with stable angina and gastroesophageal reflux disease (GERD) is on nitrates. She reports increased reflux symptoms. What adjustment might help?",
      answers: [
        { text: "Increase nitrate dosage" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Change to a beta-blocker" },
        { text: "Switch to a different anti-anginal medication" },
        { text: "Discontinue nitrates" },
      ],
      Explanation:
        "Adding a proton pump inhibitor may help manage increased reflux symptoms caused by nitrates.",
    },
    {
      question:
        "A 77-year-old male with atrial fibrillation and mild renal impairment is on dabigatran. Given his renal condition, what is important?",
      answers: [
        { text: "Regular renal function monitoring", isCorrect: true },
        { text: "Switching to a different anticoagulant" },
        { text: "Increasing dabigatran dose" },
        { text: "Combining dabigatran with an antiplatelet" },
        { text: "Discontinuing anticoagulation" },
      ],
      Explanation:
        "Regular monitoring of renal function is important to adjust the dosing of dabigatran appropriately.",
    },
    {
      question:
        "A 56-year-old female with hypertension and type 2 diabetes is on an ACE inhibitor. She experiences facial swelling. What action should be taken?",
      answers: [
        { text: "Continue the ACE inhibitor with close monitoring" },
        { text: "Switch to an ARB" },
        { text: "Increase the ACE inhibitor dose" },
        { text: "Add an antihistamine" },
        { text: "Discontinue the ACE inhibitor", isCorrect: true },
      ],
      Explanation:
        "Discontinuing the ACE inhibitor is necessary, as facial swelling could indicate angioedema.",
    },
    {
      question:
        "A 65-year-old male with stable angina and hypothyroidism is on levothyroxine and a beta-blocker. What potential interaction should be monitored?",
      answers: [
        { text: "Hypothyroidism exacerbation" },
        { text: "Increased risk of angina" },
        { text: "Levothyroxine efficacy reduction", isCorrect: true },
        { text: "Beta-blocker metabolism alteration" },
        { text: "Thyroid function test changes" },
      ],
      Explanation:
        "The efficacy of levothyroxine may be reduced due to the beta-blocker, so thyroid function tests should be monitored.",
    },
    {
      question:
        "A 60-year-old female with atrial fibrillation and a history of GI bleed is on rivaroxaban. What should be closely monitored?",
      answers: [
        { text: "Liver function tests" },
        { text: "Renal function tests", isCorrect: true },
        { text: "Serum cholesterol levels" },
        { text: "Blood pressure" },
        { text: "Thyroid function tests" },
      ],
      Explanation:
        "Renal function should be closely monitored, as rivaroxaban dosing may need adjustment in renal impairment.",
    },
    {
      question:
        "A 71-year-old male with heart failure and COPD is on carvedilol. He reports increased shortness of breath. What should be considered?",
      answers: [
        { text: "Switching to a different beta-blocker", isCorrect: true },
        { text: "Increasing carvedilol dose" },
        { text: "Adding a diuretic" },
        { text: "Optimizing COPD treatment" },
        { text: "Discontinuing carvedilol" },
      ],
      Explanation:
        "Switching to a different, more cardioselective beta-blocker may help reduce respiratory symptoms in a patient with COPD.",
    },
    {
      question:
        "A 74-year-old female with chronic kidney disease and diabetes is on an ACE inhibitor. She has elevated serum creatinine. What action is advisable?",
      answers: [
        { text: "Increase the ACE inhibitor dose" },
        { text: "Add a diuretic" },
        { text: "Adjust or discontinue the ACE inhibitor", isCorrect: true },
        { text: "Start an ARB" },
        { text: "Continue the ACE inhibitor with frequent monitoring" },
      ],
      Explanation:
        "Adjusting or discontinuing the ACE inhibitor may be necessary due to its impact on renal function.",
    },
    {
      question:
        "A 67-year-old male with hypertension and a history of gout is on hydrochlorothiazide. He experiences recurrent gout attacks. What is an appropriate medication change?",
      answers: [
        { text: "Switch to a loop diuretic", isCorrect: true },
        { text: "Increase hydrochlorothiazide dose" },
        { text: "Add a beta-blocker" },
        { text: "Start allopurinol" },
        { text: "Change to an ACE inhibitor" },
      ],
      Explanation:
        "Switching to a loop diuretic may reduce the frequency of gout attacks compared to hydrochlorothiazide.",
    },
    {
      question:
        "A 59-year-old female with stable ischemic heart disease and a history of liver disease is on atorvastatin. What should be closely monitored?",
      answers: [
        { text: "Liver function tests", isCorrect: true },
        { text: "Renal function tests" },
        { text: "Serum cholesterol levels" },
        { text: "Blood pressure" },
        { text: "Thyroid function tests" },
      ],
      Explanation:
        "Liver function tests should be closely monitored due to the potential hepatotoxic effects of atorvastatin, especially in patients with pre-existing liver disease.",
    },
    {
      question:
        "A 53-year-old male with atrial fibrillation and a high stroke risk is on aspirin. What is a more effective anticoagulation strategy?",
      answers: [
        { text: "Increase aspirin dose" },
        { text: "Add clopidogrel" },
        { text: "Switch to a direct oral anticoagulant", isCorrect: true },
        { text: "Combine aspirin with a beta-blocker" },
        { text: "Maintain aspirin only" },
      ],
      Explanation:
        "Switching to a direct oral anticoagulant, such as apixaban, is generally more effective for stroke prevention in atrial fibrillation.",
    },
    {
      question:
        "A 62-year-old female with hypertension and chronic obstructive pulmonary disease (COP) is on a non-selective beta-blocker. She reports increased breathlessness. What is a more suitable medication?",
      answers: [
        { text: "Another non-selective beta-blocker" },
        { text: "A cardioselective beta-blocker", isCorrect: true },
        { text: "An ACE inhibitor" },
        { text: "A calcium channel blocker" },
        { text: "An ARB" },
      ],
      Explanation:
        "A cardioselective beta-blocker, like bisoprolol, is generally safer for patients with COP.",
    },
    {
      question:
        "A 70-year-old male with stable angina and a history of peptic ulcer disease is on low-dose aspirin. What gastroprotective strategy is advisable?",
      answers: [
        { text: "Discontinue aspirin" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Switch to a different antiplatelet agent" },
        { text: "Combine aspirin with an H2 blocker" },
        { text: "Increase aspirin dose" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can help protect the gastrointestinal tract from the effects of aspirin.",
    },
    {
      question:
        "A 55-year-old female with chronic heart failure and diabetes is on metformin and a thiazide diuretic. She experiences frequent hypoglycemic episodes. What should be considered?",
      answers: [
        { text: "Switching to a loop diuretic" },
        { text: "Adjusting diabetes medication", isCorrect: true },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Discontinuing the thiazide diuretic" },
        { text: "Adding an ACE inhibitor" },
      ],
      Explanation:
        "Adjusting her diabetes medication is important, as thiazide diuretics can affect blood glucose levels.",
    },
    {
      question:
        "A 58-year-old female with hypertension and chronic kidney disease is on losartan. She experiences elevated potassium levels. What is an appropriate adjustment?",
      answers: [
        { text: "Switch to a calcium channel blocker", isCorrect: true },
        { text: "Increase losartan dose" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Change to an ACE inhibitor" },
        { text: "Continue losartan with potassium monitoring" },
      ],
      Explanation:
        "Switching to a calcium channel blocker may be safer due to the risk of hyperkalemia with losartan in chronic kidney disease.",
    },
    {
      question:
        "A 67-year-old male with heart failure and diabetes is on metoprolol. He reports worsening blood glucose control. What should be considered?",
      answers: [
        { text: "Switching to a different beta-blocker", isCorrect: true },
        { text: "Adjusting diabetes medication" },
        { text: "Monitoring blood glucose more frequently" },
        { text: "Discontinuing metoprolol" },
        { text: "Adding an ACE inhibitor" },
      ],
      Explanation:
        "Adjusting his diabetes medication might be necessary, as beta-blockers can affect blood glucose control.",
    },
    {
      question:
        "A 60-year-old female with atrial fibrillation and a history of gastrointestinal bleeding is on dabigatran. What alternative anticoagulant could be safer?",
      answers: [
        { text: "Apixaban", isCorrect: true },
        { text: "Rivaroxaban" },
        { text: "Warfarin" },
        { text: "Edoxaban" },
        { text: "Clopidogrel" },
      ],
      Explanation:
        "Apixaban may be a safer alternative due to its relatively lower risk of gastrointestinal bleeding compared to dabigatran.",
    },
    {
      question:
        "A 72-year-old male with stable ischemic heart disease and a peptic ulcer is on aspirin. He reports gastrointestinal discomfort. What is an advisable action?",
      answers: [
        { text: "Switch to clopidogrel" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Discontinue aspirin" },
        { text: "Increase aspirin dose" },
        { text: "Combine aspirin with an antacid" },
      ],
      Explanation:
        "Adding a proton pump inhibitor can help manage gastrointestinal discomfort associated with aspirin use.",
    },
    {
      question:
        "A 55-year-old male with chronic kidney disease and hypertension is on enalapril. He has increasing serum creatinine levels. What action is recommended?",
      answers: [
        { text: "Increase enalapril dose" },
        { text: "Add a diuretic" },
        { text: "Adjust or discontinue enalapril", isCorrect: true },
        { text: "Start an ARB" },
        { text: "Continue enalapril with frequent monitoring" },
      ],
      Explanation:
        "Adjusting or discontinuing enalapril may be necessary due to its potential impact on renal function.",
    },
    {
      question:
        "A 63-year-old female with heart failure and COPD is on carvedilol. She reports increased shortness of breath. What should be considered?",
      answers: [
        { text: "Switching to a different beta-blocker", isCorrect: true },
        { text: "Increasing carvedilol dose" },
        { text: "Adding a diuretic" },
        { text: "Optimizing COPD treatment" },
        { text: "Discontinuing carvedilol" },
      ],
      Explanation:
        "Switching to a different, more cardioselective beta-blocker may help reduce respiratory symptoms in a patient with COPD.",
    },
    {
      question:
        "A 70-year-old male with atrial fibrillation and renal impairment is on warfarin. He has unstable INR levels. What is an alternative anticoagulation strategy?",
      answers: [
        { text: "Switch to a direct oral anticoagulant", isCorrect: true },
        { text: "Increase warfarin dose" },
        { text: "Add an antiplatelet agent" },
        { text: "Continue warfarin with closer monitoring" },
        { text: "Discontinue anticoagulation" },
      ],
      Explanation:
        "Switching to a direct oral anticoagulant might be more manageable and safer than warfarin, especially with unstable INR levels.",
    },
    {
      question:
        "A 59-year-old female with stable angina and reflux disease is on nitrates. She reports increased reflux symptoms. What adjustment might help?",
      answers: [
        { text: "Increase nitrate dosage" },
        { text: "Add a proton pump inhibitor", isCorrect: true },
        { text: "Switch to a beta-blocker" },
        { text: "Change to a calcium channel blocker" },
        { text: "Discontinue nitrates" },
      ],
      Explanation:
        "Adding a proton pump inhibitor may help manage increased reflux symptoms caused by nitrates.",
    },
    {
      question:
        "A 54-year-old male with hypertension and type 2 diabetes is on a thiazide diuretic. He experiences persistent hyperglycemia. What adjustment might help?",
      answers: [
        { text: "Switch to a loop diuretic" },
        { text: "Increase the diuretic dose" },
        { text: "Add a potassium-sparing diuretic" },
        { text: "Adjust diabetes medication", isCorrect: true },
        { text: "Discontinue the diuretic" },
      ],
      Explanation:
        "Adjusting his diabetes medication or considering a different class of diuretic might help manage hyperglycemia.",
    },
    {
      question:
        "A 68-year-old female with atrial fibrillation and a history of bleeding is on apixaban. What should be monitored closely?",
      answers: [
        { text: "Bleeding signs", isCorrect: true },
        { text: "Renal function" },
        { text: "Liver function" },
        { text: "INR levels" },
        { text: "Blood pressure" },
      ],
      Explanation:
        "Monitoring for signs of bleeding is important in patients on apixaban, especially those with a history of bleeding.",
    },
    {
      question:
        "A patient of afro-caribbean origin has recently come back from her gp after being diagnosed with hypertension, with a blood pressure of 153/98. The doctor has recommended that she starts with lifestyle advice and has also asked her to start on antihypertensive therapy. The patient is 45 and has no other medical conditions or allergies. Which one of the following options is the most appropriate first-line antihypertensive that the doctor has initiated?",
      answers: [
        { text: "Bisoprolol" },
        { text: "Candesartan" },
        { text: "Furosemide" },
        { text: "Ramipril" },
        { text: "Amlodipine", isCorrect: true },
      ],
      Explanation:
        "A CCB (calcium channel blocker) such as amlodipine is started first in patients who are 55 or above or of Afro-Caribbean origin.",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [delayNextQuestion, setDelayNextQuestion] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true); // Assuming you have a state for showing/hiding explanations

  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (!delayNextQuestion) {
      setSelectedAnswer(isCorrect);
      setDelayNextQuestion(true);

      // check score
      if (isCorrect) setScore(score + 1);

      setTimeout(() => {
        const next = currentQuestion + 1;
        if (next < questions.length) {
          setCurrentQuestion(next);
          setSelectedAnswer(null); // Reset selected answer
          setDelayNextQuestion(false); // Reset delay
          shuffleQuestions(questions); // Shuffle questions for the next round
        } else {
          setIsQuizOver(true);
        }
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setSelectedAnswer(null);
    setDelayNextQuestion(false);
    shuffleQuestions(questions);
  };

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
            <div class="row">
              <div class="col-sm-12">
                <div class="card p-4">
                  <div class="row borderbottom mb-3">
                    <div class="col-sm-1">
                      <Link to="" class="inline mb-3">
                        <img
                          src="images/PreviousGrey.png"
                          class="mediumicon"
                          alt="icon"
                        />
                      </Link>
                    </div>
                    <div class="col-sm-3">
                      <Link to="" class="inline removeunderline navybluetext">
                        <img
                          src="images/FlagQuestionIcon.png"
                          class="moderateicon"
                          alt="icon"
                        />{" "}
                        <span class="fs-5 mx-2">Report Flashcard</span>
                      </Link>
                    </div>

                    <div class="col-sm-4 center">
                      <p class="fs-4 fw-bold navybluetext mb-2">
                        Flashcard 1 of 100
                      </p>
                      <p class="fs-5 fw-bold mediumbluetext mb-4">
                        Chapter Weighting: <span class="redtext">High</span>
                      </p>
                    </div>

                    <div class="col-sm-3">
                      <Link
                        to=""
                        class="inline removeunderline navybluetext floatright"
                      >
                        <img
                          src="images/FlagIcon.png"
                          class="moderateicon"
                          alt="icon"
                        />{" "}
                        <span class="fs-5 mx-2">Flag Flashcard</span>
                      </Link>
                    </div>

                    <div class="col-sm-1">
                      <Link to="" class="inline floatright mb-3">
                        <img
                          src="images/NextBlue.png"
                          class="mediumicon"
                          alt="icon"
                        />
                      </Link>
                    </div>
                  </div>

                  <div class="row borderbottom">
                    <div class="col-sm-12">
                      <div class="card p-0 mb-4 mt-3">
                        <div class="flip-card maincard"></div>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Prolonging QT Interval</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">Restoring sinus rhythm</p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Slowing atrial contraction
                        </p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Inhibiting atrial repolarisation
                        </p>
                      </div>

                      <div class="btn btn-secondary fs-5 p-0 mb-3">
                        <p class="fs-5 py-2 px-4 m-0">
                          Increasing ventricular automaticity
                        </p>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="btn btn-deactivated fw-bold fs-5 mt-4 mb-4 px-3 py-2"
                        >
                          Submit Answer
                        </button>{" "}
                        <Link
                          to=""
                          class="mediumbluetext fs-5 fw-bold mx-4 removeunderline"
                        >
                          Skip Flashcard
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <span class="fw-bold fs-5 navybluetext inline fitcontent">
                      Discussion (0 Posts)
                    </span>

                    <Link
                      to=""
                      class="removeunderline navybluetext inline fitcontent"
                    >
                      <span class="fs-5">
                        <img
                          src="images/SortIcon.png"
                          class="moderateicon mx-3"
                          alt="icon"
                        />{" "}
                        Sort By None
                      </span>
                    </Link>
                  </div>

                  <div class="row mt-3">
                    <div class="col-sm-1 ">
                      <img
                        src="images/DummyAvatar.png"
                        class="midsizeicon mb-3"
                        alt="icon"
                      />
                    </div>

                    <div class="col-sm-11">
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
                        class="btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of additional content */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardioQuestion;
