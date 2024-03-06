import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const NBQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
      question: "What is the main indication for Ferrous Sulfate?",
      answers: [
        { text: "Treating iron-deficiency anemia", isCorrect: true },
        { text: "Managing hypertension" },
        { text: "Correcting vitamin D deficiency" },
        { text: "Treating hyperthyroidism" },
        { text: "Managing diabetes mellitus" }
      ],
      Explanation: "Ferrous Sulfate is primarily used to treat iron-deficiency anemia."
    },
    {
      question: "Which vitamin is primarily involved in blood coagulation?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin K", isCorrect: true }
      ],
      Explanation: "Vitamin K is essential for the synthesis of factors necessary for blood coagulation."
    },
    {
      question: "Cyanocobalamin is a form of which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Cyanocobalamin is a synthetic form of Vitamin B12 used in supplements and for treatment."
    },
    {
      question: "What is a common side effect of oral iron supplements like Ferrous Fumarate?",
      answers: [
        { text: "Hypotension" },
        { text: "Insomnia" },
        { text: "Constipation", isCorrect: true },
        { text: "Tachycardia" },
        { text: "Weight loss" }
      ],
      Explanation: "Oral iron supplements, including Ferrous Fumarate, often cause gastrointestinal side effects like constipation."
    },
    {
      question: "Folic acid supplementation is most critical during which phase of life?",
      answers: [
        { text: "Adolescence" },
        { text: "Early adulthood" },
        { text: "Pregnancy", isCorrect: true },
        { text: "Middle age" },
        { text: "Elderly" }
      ],
      Explanation: "Folic acid is crucial during pregnancy to prevent neural tube defects in the developing fetus."
    },
    {
      question: "Which nutrient deficiency is primarily associated with Scurvy?",
      answers: [
        { text: "Iron" },
        { text: "Vitamin A" },
        { text: "Vitamin C", isCorrect: true },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Scurvy is caused by a deficiency of Vitamin C."
    },
    {
      question: "What is the main therapeutic use of Hydroxocobalamin?",
      answers: [
        { text: "Treating iron-deficiency anemia" },
        { text: "Treating Vitamin B12 deficiency", isCorrect: true },
        { text: "Correcting calcium imbalance" },
        { text: "Managing hypertension" },
        { text: "Treating Vitamin D deficiency" }
      ],
      Explanation: "Hydroxocobalamin is used to treat Vitamin B12 deficiency."
    },
    {
      question: "Which mineral is essential for thyroid hormone synthesis?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Iodine", isCorrect: true },
        { text: "Magnesium" },
        { text: "Zinc" }
      ],
      Explanation: "Iodine is crucial for the synthesis of thyroid hormones."
    },
    {
      question: "What is the recommended dietary supplement for someone with osteoporosis?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid" },
        { text: "Vitamin C" },
        { text: "Calcium and Vitamin D", isCorrect: true },
        { text: "Vitamin B12" }
      ],
      Explanation: "Calcium and Vitamin D are recommended for individuals with osteoporosis to strengthen bones."
    },
    {
      question: "Which of the following is a sign of Vitamin B12 deficiency?",
      answers: [
        { text: "Muscle weakness" },
        { text: "Night blindness" },
        { text: "Scurvy" },
        { text: "Pernicious anemia", isCorrect: true },
        { text: "Rickets" }
      ],
      Explanation: "Pernicious anemia is a classic sign of Vitamin B12 deficiency."
    },
    {
      question: "A 55-year-old woman with chronic kidney disease is prescribed calcium acetate for hyperphosphatemia. Which mechanism best describes its action?",
      answers: [
        { text: "Increases phosphate excretion" },
        { text: "Binds dietary phosphate in the gut", isCorrect: true },
        { text: "Stimulates phosphate absorption" },
        { text: "Reduces calcium absorption" },
        { text: "None of the above" }
      ],
      Explanation: "Calcium acetate binds dietary phosphate in the gut, reducing its absorption, which is beneficial in hyperphosphatemia associated with kidney disease."
    },
    {
      question: "A 30-year-old man with a history of alcoholism presents with Wernicke’s encephalopathy. Which treatment is most appropriate?",
      answers: [
        { text: "Thiamine", isCorrect: true },
        { text: "Cyanocobalamin" },
        { text: "Folic acid" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Thiamine is the treatment of choice for Wernicke’s encephalopathy, commonly seen in alcoholism due to thiamine deficiency."
    },
    {
      question: "A pregnant woman is advised to start folic acid supplements. What is the primary reason for this recommendation?",
      answers: [
        { text: "To enhance calcium absorption" },
        { text: "To reduce the risk of neural tube defects", isCorrect: true },
        { text: "To improve iron absorption" },
        { text: "To prevent vitamin D deficiency" },
        { text: "To reduce the risk of gestational diabetes" }
      ],
      Explanation: "Folic acid supplementation in pregnancy is primarily to reduce the risk of neural tube defects in the developing fetus."
    },
    {
      question: "A patient on warfarin therapy has started taking high doses of Vitamin E supplements. What is a potential risk of this combination?",
      answers: [
        { text: "Reduced anticoagulant effect" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hyperglycemia" },
        { text: "None of the above" }
      ],
      Explanation: "High doses of Vitamin E can potentiate the effects of warfarin, increasing the risk of bleeding."
    },
    {
      question: "A 45-year-old woman with iron-deficiency anemia is prescribed oral ferrous sulfate. Which side effect should she be informed about?",
      answers: [
        { text: "Hypertension" },
        { text: "Diarrhea" },
        { text: "Constipation", isCorrect: true },
        { text: "Tachycardia" },
        { text: "Hyperglycemia" }
      ],
      Explanation: "Constipation is a common side effect of oral iron supplements like ferrous sulfate."
    },
    {
      question: "A patient with pernicious anemia is prescribed hydroxocobalamin. What is the mechanism of action of this treatment?",
      answers: [
        { text: "It stimulates erythropoiesis" },
        { text: "It replaces deficient intrinsic factor" },
        { text: "It provides a source of Vitamin B12", isCorrect: true },
        { text: "It enhances iron absorption" },
        { text: "It increases folic acid synthesis" }
      ],
      Explanation: "Hydroxocobalamin provides a source of Vitamin B12, which is deficient in pernicious anemia."
    },
    {
      question: "A patient on long-term corticosteroid therapy is advised to take calcium and vitamin D supplements. This is primarily to prevent:",
      answers: [
        { text: "Hypertension" },
        { text: "Osteoporosis", isCorrect: true },
        { text: "Anemia" },
        { text: "Hyperglycemia" },
        { text: "Thyroid dysfunction" }
      ],
      Explanation: "Calcium and vitamin D supplementation in patients on long-term corticosteroids is to prevent osteoporosis, a known side effect of corticosteroids."
    },
    {
      question: "A patient with CKD is prescribed sevelamer. What is the primary action of this drug in CKD?",
      answers: [
        { text: "Reduces serum potassium levels" },
        { text: "Binds dietary phosphate", isCorrect: true },
        { text: "Stimulates erythropoiesis" },
        { text: "Increases calcium absorption" },
        { text: "Reduces serum urea levels" }
      ],
      Explanation: "Sevelamer is used in CKD to bind dietary phosphate, reducing its absorption and thus serum levels."
    },
    {
      question: "A 60-year-old man on antihypertensive medication develops gout. Which medication could have contributed to this condition?",
      answers: [
        { text: "Amlodipine" },
        { text: "Losartan" },
        { text: "Hydrochlorothiazide", isCorrect: true },
        { text: "Metoprolol" },
        { text: "Ramipril" }
      ],
      Explanation: "Hydrochlorothiazide, a diuretic used in hypertension, can increase uric acid levels and contribute to the development of gout."
    },
    {
      question: "A patient with a history of epilepsy is prescribed phenytoin. Which nutrient deficiency should be regularly monitored in this patient?",
      answers: [
        { text: "Vitamin D", isCorrect: true },
        { text: "Iron" },
        { text: "Vitamin C" },
        { text: "Folic acid" },
        { text: "Calcium" }
      ],
      Explanation: "Long-term use of phenytoin can lead to Vitamin D deficiency, which should be monitored and supplemented as needed."
    },
    {
      question: "A 65-year-old man with a history of stroke is prescribed alendronate. What is the primary purpose of this medication?",
      answers: [
        { text: "To increase bone density", isCorrect: true },
        { text: "To reduce cholesterol levels" },
        { text: "To control blood pressure" },
        { text: "To prevent blood clots" },
        { text: "To improve cognitive function" }
      ],
      Explanation: "Alendronate is used primarily to increase bone density and prevent osteoporosis-related fractures."
    },
    {
      question: "A 40-year-old woman complains of fatigue and hair loss. Blood tests reveal iron-deficiency anemia. Which of the following should be avoided with her iron supplement?",
      answers: [
        { text: "Vitamin C" },
        { text: "Calcium supplements" },
        { text: "Green tea", isCorrect: true },
        { text: "Beef" },
        { text: "Spinach" }
      ],
      Explanation: "Green tea can inhibit the absorption of iron and should be avoided around the time of taking an iron supplement."
    },
    {
      question: "A patient with celiac disease requires vitamin supplementation. Which vitamin is most likely to be deficient?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D", isCorrect: true },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin D deficiency is common in celiac disease due to malabsorption in the damaged small intestine."
    },
    {
      question: "A patient on dialysis is given erythropoietin. What is the primary purpose of this treatment?",
      answers: [
        { text: "To control blood pressure" },
        { text: "To stimulate red blood cell production", isCorrect: true },
        { text: "To reduce cholesterol" },
        { text: "To improve bone density" },
        { text: "To decrease phosphate levels" }
      ],
      Explanation: "Erythropoietin stimulates red blood cell production, often necessary in patients on dialysis with anemia."
    },
    {
      question: "A 50-year-old woman with breast cancer is prescribed calcium and vitamin D supplements along with her treatment. What is the rationale for this?",
      answers: [
        { text: "To prevent osteoporosis", isCorrect: true },
        { text: "To boost immune function" },
        { text: "To improve wound healing" },
        { text: "To reduce nausea from chemotherapy" },
        { text: "To enhance the effect of chemotherapy" }
      ],
      Explanation: "Calcium and vitamin D supplements are often prescribed to prevent osteoporosis, especially in patients undergoing cancer treatment."
    },
    {
      question: "A patient with hypertension is advised to reduce sodium intake. This dietary change primarily helps to:",
      answers: [
        { text: "Increase bone density" },
        { text: "Lower blood pressure", isCorrect: true },
        { text: "Increase hemoglobin levels" },
        { text: "Improve cardiac function" },
        { text: "Enhance cognitive function" }
      ],
      Explanation: "Reducing sodium intake is a key dietary modification to help lower blood pressure in hypertensive patients."
    },
    {
      question: "A patient taking warfarin is found to have a Vitamin K deficiency. How does this affect their treatment?",
      answers: [
        { text: "Increases risk of bleeding", isCorrect: true },
        { text: "Decreases risk of bleeding" },
        { text: "No effect on bleeding risk" },
        { text: "Increases blood pressure" },
        { text: "Decreases effectiveness of warfarin" }
      ],
      Explanation: "Vitamin K deficiency increases the risk of bleeding in patients taking warfarin, a Vitamin K antagonist."
    },
    {
      question: "A diabetic patient has been prescribed thiamin. What is the primary benefit of thiamine supplementation in diabetes?",
      answers: [
        { text: "Lowers blood sugar levels" },
        { text: "Prevents diabetic neuropathy", isCorrect: true },
        { text: "Increases insulin sensitivity" },
        { text: "Reduces risk of heart disease" },
        { text: "Enhances wound healing" }
      ],
      Explanation: "Thiamine can help prevent diabetic neuropathy, a common complication of diabetes."
    },
    {
      question: "A patient with hyperparathyroidism is prescribed cinacalcet. What is the mechanism of action of this drug?",
      answers: [
        { text: "Increases calcium absorption" },
        { text: "Decreases calcium absorption" },
        { text: "Increases parathyroid hormone (PTH) levels" },
        { text: "Decreases PTH levels", isCorrect: true },
        { text: "Stimulates vitamin D synthesis" }
      ],
      Explanation: "Cinacalcet decreases parathyroid hormone levels, which is beneficial in treating hyperparathyroidism."
    },
    {
      question: "A patient with a peptic ulcer is on long-term omeprazole therapy. Which nutrient should be monitored?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Folic acid" },
        { text: "Vitamin C" }
      ],
      Explanation: "Long-term use of omeprazole, a proton pump inhibitor, can lead to Vitamin B12 deficiency due to reduced stomach acidity."
    },
    {
      question: "A 70-year-old with osteoporosis is prescribed risedronate. What is the most important advice regarding its administration?",
      answers: [
        { text: "Take with a large meal" },
        { text: "Lie down immediately after taking it" },
        { text: "Take with a full glass of water and remain upright for 30 minutes", isCorrect: true },
        { text: "Take it at bedtime" },
        { text: "Take with antacids" }
      ],
      Explanation: "Risedronate should be taken with a full glass of water, and the patient should remain upright for at least 30 minutes to prevent esophageal irritation."
    },
    {
      question: "A patient on ferrous sulfate reports black stools. What is your advice?",
      answers: [
        { text: "Stop the medication immediately" },
        { text: "This is a normal side effect", isCorrect: true },
        { text: "Increase fluid intake" },
        { text: "Seek immediate medical attention" },
        { text: "Switch to intravenous iron" }
      ],
      Explanation: "Black stools are a common and harmless side effect of ferrous sulfate due to iron."
    },
    {
      question: "A patient with renal failure is prescribed epoetin alfa. What is a potential side effect of this medication?",
      answers: [
        { text: "Hypotension" },
        { text: "Weight loss" },
        { text: "Increased risk of thromboembolic events", isCorrect: true },
        { text: "Hyperglycemia" },
        { text: "Diarrhea" }
      ],
      Explanation: "Epoetin alfa can increase the risk of thromboembolic events, particularly in patients with renal failure."
    },
    {
      question: "A patient with B12 deficiency is advised to avoid alcohol. Why?",
      answers: [
        { text: "Alcohol can worsen anemia" },
        { text: "Alcohol decreases B12 absorption", isCorrect: true },
        { text: "Alcohol interferes with B12 metabolism" },
        { text: "Alcohol increases B12 requirements" },
        { text: "None of the above" }
      ],
      Explanation: "Alcohol consumption can decrease the absorption of Vitamin B12, worsening the deficiency."
    },
    {
      question: "A 55-year-old woman is diagnosed with iron-deficiency anemia and is prescribed oral iron. She is also taking levothyroxine. What should she be aware of?",
      answers: [
        { text: "Iron supplements can decrease the effectiveness of levothyroxine", isCorrect: true },
        { text: "Levothyroxine can increase iron levels" },
        { text: "Iron supplements can increase the risk of hyperthyroidism" },
        { text: "Levothyroxine should be taken with iron for better absorption" },
        { text: "None of the above" }
      ],
      Explanation: "Iron supplements can decrease the absorption and effectiveness of levothyroxine, and they should be taken a few hours apart."
    },
    {
      question: "A patient with gout is advised to limit intake of which nutrient?",
      answers: [
        { text: "Vitamin C" },
        { text: "Calcium" },
        { text: "Iron" },
        { text: "Fructose", isCorrect: true },
        { text: "Vitamin D" }
      ],
      Explanation: "Fructose can increase uric acid levels and exacerbate gout."
    },
    {
      question: "What is a major side effect of long-term use of proton pump inhibitors like omeprazole on nutrition?",
      answers: [
        { text: "Vitamin B12 deficiency", isCorrect: true },
        { text: "Calcium deficiency" },
        { text: "Iron deficiency" },
        { text: "Vitamin D deficiency" },
        { text: "Folic acid deficiency" }
      ],
      Explanation: "Long-term use of proton pump inhibitors can lead to Vitamin B12 deficiency due to reduced gastric acidity."
    },
    {
      question: "A patient on methotrexate for rheumatoid arthritis is prescribed folic acid. What is the reason for this?",
      answers: [
        { text: "To enhance the effectiveness of methotrexate" },
        { text: "To reduce the risk of liver damage" },
        { text: "To prevent methotrexate-induced folate deficiency", isCorrect: true },
        { text: "To decrease gastrointestinal side effects" },
        { text: "To improve joint mobility" }
      ],
      Explanation: "Folic acid is prescribed to prevent methotrexate-induced folate deficiency, which can cause side effects like mouth ulcers and gastrointestinal upset."
    },
    {
      question: "A 60-year-old man with heart failure is advised to take thiamine supplements. What is the reason?",
      answers: [
        { text: "To improve cardiac function", isCorrect: true },
        { text: "To reduce fluid retention" },
        { text: "To lower blood pressure" },
        { text: "To prevent arrhythmias" },
        { text: "To increase energy levels" }
      ],
      Explanation: "Thiamine can improve cardiac function, as its deficiency can exacerbate heart failure symptoms."
    },
    {
      question: "A patient with hemochromatosis is advised to avoid which type of supplement?",
      answers: [
        { text: "Iron", isCorrect: true },
        { text: "Calcium" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Folic acid" }
      ],
      Explanation: "Patients with hemochromatosis should avoid iron supplements due to the risk of iron overload."
    },
    {
      question: "A patient with Zollinger-Ellison syndrome is on high-dose proton pump inhibitors. Which nutrient deficiency should be closely monitored?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Folic acid" },
        { text: "Vitamin D" }
      ],
      Explanation: "Long-term use of high-dose PPIs can lead to Vitamin B12 deficiency due to reduced gastric acid secretion."
    },
    {
      question: "A diabetic patient is prescribed an ACE inhibitor and notices a cough. What vitamin is sometimes used to mitigate this side effect?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C", isCorrect: true },
        { text: "Vitamin E" },
        { text: "Vitamin D" }
      ],
      Explanation: "Vitamin C has been suggested to help reduce the cough associated with ACE inhibitor therapy."
    },
    {
      question: "A patient with a history of gastric bypass surgery is likely to require supplementation with which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Patients with gastric bypass surgery are at risk of Vitamin B12 deficiency due to altered gastrointestinal anatomy affecting absorption."
    },
    {
      question: "A patient on long-term aspirin therapy for cardiovascular disease prevention is advised to monitor for deficiency in which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin K", isCorrect: true }
      ],
      Explanation: "Aspirin can interfere with Vitamin K metabolism, potentially leading to deficiency."
    },
    {
      question: "In a patient with chronic liver disease, which vitamin supplementation might be necessary due to impaired storage and metabolism?",
      answers: [
        { text: "Vitamin A", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin A supplementation might be necessary in chronic liver disease due to its impaired storage and metabolism in the liver."
    },
    {
      question: "A patient with celiac disease is at increased risk of deficiency in which of the following due to malabsorption?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Vitamin B6" },
        { text: "All of the above", isCorrect: true },
        { text: "None of the above" }
      ],
      Explanation: "Patients with celiac disease are at risk of multiple nutrient deficiencies, including iron, calcium, and vitamin B6, due to malabsorption."
    },
    {
      question: "A patient on chemotherapy is experiencing severe nausea and vomiting. What vitamin might help alleviate these symptoms?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B6 can be effective in reducing nausea and vomiting, which are common side effects of chemotherapy."
    },
    {
      question: "A patient with osteoporosis is advised to increase intake of which mineral to aid in bone health?",
      answers: [
        { text: "Iron" },
        { text: "Calcium", isCorrect: true },
        { text: "Magnesium" },
        { text: "Phosphorus" },
        { text: "Potassium" }
      ],
      Explanation: "Calcium intake is crucial in managing osteoporosis to maintain bone health."
    },
    {
      question: "A patient with atrial fibrillation is on warfarin and reports eating large amounts of green leafy vegetables. What might be a concern with this diet?",
      answers: [
        { text: "Increased risk of bleeding" },
        { text: "Decreased effectiveness of warfarin", isCorrect: true },
        { text: "Hypertension" },
        { text: "Vitamin K deficiency" },
        { text: "None of the above" }
      ],
      Explanation: "Green leafy vegetables are high in Vitamin K, which can decrease the effectiveness of warfarin, a Vitamin K antagonist."
    },
    {
      question: "A patient with rheumatoid arthritis on methotrexate therapy is experiencing fatigue and mouth ulcers. Which nutrient deficiency should be considered?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" }
      ],
      Explanation: "Folic acid deficiency can occur with methotrexate therapy, leading to symptoms like fatigue and mouth ulcers."
    },
    {
      question: "A patient with chronic heart failure is advised to restrict dietary intake of which mineral?",
      answers: [
        { text: "Iron" },
        { text: "Sodium", isCorrect: true },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Sodium restriction is important in heart failure management to reduce fluid retention and manage symptoms."
    },
    {
      question: "Which vitamin deficiency is most likely in a patient with chronic alcoholism and poor diet?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Chronic alcoholism and poor diet often lead to thiamine (Vitamin B1) deficiency."
    },
    {
      question: "A patient undergoing hemodialysis is found to have elevated phosphate levels. Which medication class is commonly used to treat this?",
      answers: [
        { text: "Calcium supplements" },
        { text: "Phosphate binders", isCorrect: true },
        { text: "Potassium binders" },
        { text: "Iron supplements" },
        { text: "Vitamin D analogs" }
      ],
      Explanation: "Phosphate binders are used to control hyperphosphatemia in patients undergoing hemodialysis."
    },
    {
      question: "A patient on long-term corticosteroid therapy is at risk of deficiency in which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D", isCorrect: true },
        { text: "Vitamin E" }
      ],
      Explanation: "Long-term corticosteroid use can lead to Vitamin D deficiency due to effects on calcium metabolism."
    },
    {
      question: "In a patient with peripheral neuropathy, which vitamin deficiency should be considered?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B12 deficiency can lead to peripheral neuropathy, characterized by tingling and numbness in the extremities."
    },
    {
      question: "A patient with chronic kidney disease is prescribed calcitriol. What is the primary purpose of this medication?",
      answers: [
        { text: "To lower blood pressure" },
        { text: "To decrease cholesterol levels" },
        { text: "To control phosphate levels" },
        { text: "To increase calcium levels", isCorrect: true },
        { text: "To stimulate red blood cell production" }
      ],
      Explanation: "Calcitriol, an active form of Vitamin D, is used in CKD to help maintain calcium levels and manage secondary hyperparathyroidism."
    },
    {
      question: "A patient with a new diagnosis of epilepsy is started on phenytoin. Which nutrient interaction is important to monitor?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Calcium" }
      ],
      Explanation: "Phenytoin can interfere with folic acid metabolism, leading to deficiency, and folic acid levels should be monitored."
    },
    {
      question: "A pregnant woman is advised to take which supplement to prevent neural tube defects?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Calcium" }
      ],
      Explanation: "Folic acid supplementation is recommended in pregnancy to prevent neural tube defects in the developing fetus."
    },
    {
      question: "A patient with chronic pancreatitis might require supplementation with which vitamin?",
      answers: [
        { text: "Vitamin A", isCorrect: true },
        { text: "Vitamin B1" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Patients with chronic pancreatitis may require Vitamin A supplementation due to malabsorption issues."
    },
    {
      question: "A patient with a history of gastric ulcers is prescribed a proton pump inhibitor (PPI). What is a potential long-term side effect of PPIs?",
      answers: [
        { text: "Vitamin B12 deficiency", isCorrect: true },
        { text: "Iron overload" },
        { text: "Hypercalcemia" },
        { text: "Hypertension" },
        { text: "Hyperglycemia" }
      ],
      Explanation: "Long-term use of PPIs can lead to Vitamin B12 deficiency due to reduced stomach acidity affecting its absorption."
    },
    {
      question: "A patient with a history of renal stones is advised to moderate intake of which nutrient?",
      answers: [
        { text: "Iron" },
        { text: "Sodium" },
        { text: "Calcium", isCorrect: true },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Calcium intake should be moderated in patients with a history of renal stones to prevent recurrence."
    },
    {
      question: "A patient with gluten-sensitive enteropathy (celiac disease) is most likely to be deficient in which nutrient?",
      answers: [
        { text: "Iron", isCorrect: true },
        { text: "Vitamin B1" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Patients with celiac disease are often deficient in iron due to malabsorption in the damaged gut."
    },
    {
      question: "Which medication is likely to be prescribed to a patient with osteomalacia?",
      answers: [
        { text: "Calcium supplements" },
        { text: "Iron supplements" },
        { text: "Phosphate binders" },
        { text: "Vitamin D supplements", isCorrect: true },
        { text: "Vitamin B12 supplements" }
      ],
      Explanation: "Vitamin D supplements are commonly prescribed in osteomalacia to correct the deficiency and improve bone mineralization."
    },
    {
      question: "A patient with rheumatoid arthritis on long-term NSAID therapy should be monitored for deficiency in which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D", isCorrect: true },
        { text: "Vitamin K" }
      ],
      Explanation: "Long-term NSAID use can impair vitamin D metabolism, leading to deficiency and potential bone health issues."
    },
    {
      question: "In a patient with macrocytic anemia, which vitamin deficiency should be considered?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B12 deficiency should be considered in patients with macrocytic anemia, as it can lead to the development of large, immature red blood cells."
    },
    {
      question: "A patient on antiepileptic drugs such as carbamazepine should be monitored for deficiency in which nutrient?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid", isCorrect: true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Calcium" }
      ],
      Explanation: "Antiepileptic drugs like carbamazepine can lead to folic acid deficiency, which should be monitored and supplemented as necessary."
    },
    {
      question: "What is the primary reason for administering Vitamin K to a newborn?",
      answers: [
        { text: "To boost immune function" },
        { text: "To enhance liver function" },
        { text: "To prevent hemorrhagic disease", "isCorrect": true },
        { text: "To stimulate growth" },
        { text: "To improve bone development" }
      ],
      Explanation: "Vitamin K is administered to newborns to prevent hemorrhagic disease due to low Vitamin K levels at birth."
    },
    {
      question: "A patient with a history of bariatric surgery is at increased risk of deficiency in which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1" },
        { text: "Vitamin B12", "isCorrect": true },
        { text: "Vitamin C" },
        { text: "Vitamin E" }
      ],
      Explanation: "Patients who have undergone bariatric surgery are at increased risk of Vitamin B1 (thiamin) deficiency due to altered absorption."
    },
    {
      question: "A patient on long-term bisphosphonate therapy for osteoporosis should be advised to monitor for which side effect?",
      answers: [
        { text: "Hypertension" },
        { text: "Esophageal irritation", "isCorrect": true },
        { text: "Hyperglycemia" },
        { text: "Liver dysfunction" },
        { text: "Renal stones" }
      ],
      Explanation: "Long-term bisphosphonate therapy can cause esophageal irritation, and patients should be advised about proper medication administration to minimize this risk."
    },
    {
      question: "A patient with chronic obstructive pulmonary disease (COPD) is advised to increase intake of which nutrient?",
      answers: [
        { text: "Iron" },
        { text: "Vitamin A" },
        { text: "Vitamin C", "isCorrect": true },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Increased intake of Vitamin C is often recommended for patients with COPD to help manage oxidative stress and inflammation associated with the disease."
    },
    {
      question: "A patient with chronic kidney disease is prescribed calcitriol. What is the primary purpose of this medication?",
      answers: [
        { text: "To lower blood pressure" },
        { text: "To decrease cholesterol levels" },
        { text: "To control phosphate levels" },
        { text: "To increase calcium levels", "isCorrect": true },
        { text: "To stimulate red blood cell production" }
      ],
      Explanation: "Calcitriol, an active form of Vitamin D, is used in CKD to help maintain calcium levels and manage secondary hyperparathyroidism."
    },
    {
      question: "Which vitamin supplementation is recommended for a patient with alcoholic liver disease to prevent Wernicke-Korsakoff syndrome?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1 (Thiamin)", "isCorrect": true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Thiamine supplementation is crucial in patients with alcoholic liver disease to prevent Wernicke-Korsakoff syndrome."
    },
    {
      question: "A patient with inflammatory bowel disease (IBD) is likely to be deficient in which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D", "isCorrect": true },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin D deficiency is common in IBD due to malabsorption and reduced sunlight exposure."
    },
    {
      question: "A patient on long-term proton pump inhibitor (PPI) therapy should be monitored for deficiency in which mineral?",
      answers: [
        { text: "Iron", "isCorrect": true },
        { text: "Sodium" },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Long-term PPI therapy can lead to iron deficiency due to reduced stomach acid affecting iron absorption."
    },
    {
      question: "In a patient with pernicious anemia, which vitamin is typically supplemented?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin B12", "isCorrect": true },
        { text: "Vitamin C" },
        { text: "Vitamin D" }
      ],
      Explanation: "Vitamin B12 supplementation is necessary in pernicious anemia due to the inability to absorb B12 from the diet."
    },
    {
      question: "A patient with hemochromatosis should avoid supplements containing which mineral?",
      answers: [
        { text: "Iron", "isCorrect": true },
        { text: "Sodium" },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Patients with hemochromatosis should avoid iron supplements due to the risk of iron overload."
    },
    {
      question: "A pregnant woman is found to have iron-deficiency anemia. What is the most appropriate first-line treatment?",
      answers: [
        { text: "Oral iron supplements", "isCorrect": true },
        { text: "Intravenous iron" },
        { text: "Blood transfusion" },
        { text: "Erythropoietin therapy" },
        { text: "Diet modification only" }
      ],
      Explanation: "Oral iron supplements are the first-line treatment for iron-deficiency anemia in pregnancy."
    },
    {
      question: "What is a potential side effect of high-dose calcium supplementation?",
      answers: [
        { text: "Hypotension" },
        { text: "Diarrhea" },
        { text: "Constipation", "isCorrect": true },
        { text: "Tachycardia" },
        { text: "Hyperglycemia" }
      ],
      Explanation: "High doses of calcium supplements can cause constipation, a common side effect."
    },
    {
      question: "A patient with a history of gastric bypass surgery is at increased risk of deficiency in which mineral?",
      answers: [
        { text: "Iron", "isCorrect": true },
        { text: "Sodium" },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Patients who have undergone gastric bypass surgery are at increased risk of iron deficiency due to reduced absorption."
    },
    {
      question: "Which nutrient deficiency is a common side effect of metformin therapy in diabetes management?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid" },
        { text: "Vitamin B12", "isCorrect": true },
        { text: "Vitamin C" },
        { text: "Calcium" }
      ],
      Explanation: "Metformin therapy can lead to Vitamin B12 deficiency, which should be monitored in patients with long-term use."
    },
    {
      question: "A patient with chronic obstructive pulmonary disease (COPD) is found to have a Vitamin D deficiency. What is the significance of this finding?",
      answers: [
        { text: "Increases risk of infections" },
        { text: "Worsens lung function" },
        { text: "Both A and B", "isCorrect": true },
        { text: "No significant impact" },
        { text: "Increases risk of cardiovascular disease" }
      ],
      Explanation: "Vitamin D deficiency in COPD patients can worsen lung function and increase the risk of infections."
    },
    {
      question: "A patient with hypercalcemia is prescribed a bisphosphonate. What is the mechanism of action of bisphosphonates in this condition?",
      answers: [
        { text: "Increase calcium absorption" },
        { text: "Decrease calcium absorption" },
        { text: "Increase bone resorption" },
        { text: "Decrease bone resorption", "isCorrect": true },
        { text: "None of the above" }
      ],
      Explanation: "Bisphosphonates decrease bone resorption, helping to lower serum calcium levels in hypercalcemia."
    },
    {
      question: "A patient on warfarin therapy has started taking fish oil supplements. What potential interaction should be monitored?",
      answers: [
        { text: "Increased risk of bleeding", "isCorrect": true },
        { text: "Decreased effectiveness of warfarin" },
        { text: "Hypertension" },
        { text: "Hyperglycemia" },
        { text: "None of the above" }
      ],
      Explanation: "Fish oil supplements can increase the risk of bleeding, especially when taken with anticoagulants like warfarin."
    },
    {
      question: "In a patient with iron overload due to repeated blood transfusions, which medication might be prescribed?",
      answers: [
        { text: "Oral iron supplements" },
        { text: "Phosphate binders" },
        { text: "Chelation therapy", "isCorrect": true },
        { text: "Vitamin D supplements" },
        { text: "Erythropoietin" }
      ],
      Explanation: "Chelation therapy is used to treat iron overload in patients who have had multiple blood transfusions."
    },
    {
      question: "A patient with a history of peptic ulcer disease is on long-term omeprazole therapy. Which nutrient should be closely monitored?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Vitamin B12", "isCorrect": true },
        { text: "Folic acid" },
        { text: "Vitamin C" }
      ],
      Explanation: "Long-term use of omeprazole can lead to Vitamin B12 deficiency, which should be monitored in patients."
    },
    {
      question: "A patient with osteoporosis is advised to take which supplement to aid in bone health?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid" },
        { text: "Vitamin B12" },
        { text: "Calcium and Vitamin D", "isCorrect": true },
        { text: "Vitamin C" }
      ],
      Explanation: "Calcium and Vitamin D supplements are crucial for patients with osteoporosis to maintain bone health."
    },
    {
      question: "Which vitamin is essential for the synthesis of clotting factors and is often given to newborns?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin K", "isCorrect": true }
      ],
      Explanation: "Vitamin K is essential for the synthesis of clotting factors and is routinely given to newborns to prevent bleeding disorders."
    },
    {
      question: "A patient with chronic renal failure is at risk of developing which type of anemia?",
      answers: [
        { text: "Iron-deficiency anemia" },
        { text: "Hemolytic anemia" },
        { text: "Aplastic anemia" },
        { text: "Anemia of chronic disease", "isCorrect": true },
        { text: "Sickle cell anemia" }
      ],
      Explanation: "Patients with chronic renal failure often develop anemia of chronic disease due to reduced erythropoietin production."
    },
    {
      question: "What is a common side effect of high-dose niacin therapy used in lipid control?",
      answers: [
        { text: "Hypotension" },
        { text: "Flushing and itching", "isCorrect": true },
        { text: "Constipation" },
        { text: "Tachycardia" },
        { text: "Hyperglycemia" }
      ],
      Explanation: "High-dose niacin is often associated with flushing and itching, a common side effect."
    },
    {
      question: "A patient with a history of hypertension is prescribed a diuretic and develops hypokalemia. Which supplement should be considered?",
      answers: [
        { text: "Iron" },
        { text: "Sodium" },
        { text: "Calcium" },
        { text: "Potassium", "isCorrect": true },
        { text: "Magnesium" }
      ],
      Explanation: "Potassium supplements are often needed when patients on diuretics develop hypokalemia."
    },
    {
      question: "A patient with megaloblastic anemia is found to have a folic acid deficiency. What could be a possible cause of this condition?",
      answers: [
        { text: "Excessive alcohol consumption" },
        { text: "Poor dietary intake" },
        { text: "Both A and B", "isCorrect": true },
        { text: "Medication side effect" },
        { text: "None of the above" }
      ],
      Explanation: "Folic acid deficiency leading to megaloblastic anemia can be caused by poor diet or excessive alcohol consumption."
    },
    {
      question: "A patient on long-term prednisone therapy should be counseled about the risk of deficiency in which nutrient?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D", "isCorrect": true },
        { text: "Vitamin E" }
      ],
      Explanation: "Long-term prednisone use can lead to Vitamin D deficiency, affecting bone health."
    },
    {
      question: "Which mineral is crucial in the synthesis of thyroid hormones and should be monitored in patients with thyroid disorders?",
      answers: [
        { text: "Iron" },
        { text: "Iodine", "isCorrect": true },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Iodine is essential for the synthesis of thyroid hormones, and its deficiency can exacerbate thyroid disorders."
    },
    {
      question: "A patient with chronic liver disease should be monitored for deficiency in which vitamin, considering the liver’s role in storage and metabolism?",
      answers: [
        { text: "Vitamin A", "isCorrect": true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin A is stored in the liver, and patients with chronic liver disease are at risk of its deficiency."
    },
    {
      question: "What is the primary dietary advice for a patient with hyperuricemia and gout?",
      answers: [
        { text: "Increase protein intake" },
        { text: "Decrease fructose intake", "isCorrect": true },
        { text: "Increase calcium intake" },
        { text: "Decrease sodium intake" },
        { text: "Increase fiber intake" }
      ],
      Explanation: "Patients with hyperuricemia and gout are advised to decrease fructose intake to reduce uric acid levels."
    },
    {
      question: "A patient on chemotherapy for breast cancer is advised to supplement with which vitamin to help with bone health?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D", "isCorrect": true },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin D supplementation is important for maintaining bone health, especially in patients undergoing chemotherapy."
    },
    {
      question: "In a patient with renal insufficiency, which vitamin should be used cautiously due to the risk of accumulation and toxicity?",
      answers: [
        { text: "Vitamin A", "isCorrect": true },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin A should be used cautiously in patients with renal insufficiency due to the risk of accumulation and toxicity."
    },
    {
      question: "A patient with a recent diagnosis of celiac disease should be screened for deficiency in which of the following?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid" },
        { text: "Vitamin B12" },
        { text: "All of the above", "isCorrect": true },
        { text: "None of the above" }
      ],
      Explanation: "Patients with celiac disease should be screened for deficiencies in iron, folic acid, and Vitamin B12 due to malabsorption."
    },
    {
      question: "A patient taking a proton pump inhibitor (PPI) long-term is at risk of developing a deficiency in which mineral, potentially leading to anemia?",
      answers: [
        { text: "Iron", "isCorrect": true },
        { text: "Sodium" },
        { text: "Calcium" },
        { text: "Potassium" },
        { text: "Magnesium" }
      ],
      Explanation: "Long-term PPI use can lead to iron deficiency, potentially causing anemia, due to reduced stomach acid."
    },
    {
      question: "A patient with chronic pancreatitis is likely to be deficient in which of the following due to malabsorption?",
      answers: [
        { text: "Iron" },
        { text: "Vitamin A" },
        { text: "Vitamin D" },
        { text: "All of the above", "isCorrect": true },
        { text: "None of the above" }
      ],
      Explanation: "Chronic pancreatitis can lead to malabsorption, causing deficiencies in iron, Vitamin A, and Vitamin D."
    },
    {
      question: "A patient on anticoagulant therapy with warfarin should be counseled about dietary intake of which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin K", "isCorrect": true }
      ],
      Explanation: "Vitamin K intake should be consistent in patients on warfarin, as it can affect the drug's anticoagulant effect."
    },
    {
      question: "Which mineral's supplementation is crucial for a patient with hypoparathyroidism to maintain normal physiological function?",
      answers: [
        { text: "Iron" },
        { text: "Calcium", "isCorrect": true },
        { text: "Iodine" },
        { text: "Magnesium" },
        { text: "Potassium" }
      ],
      Explanation: "Calcium supplementation is crucial in hypoparathyroidism to maintain normal blood calcium levels."
    },
    {
      question: "In a patient with chronic renal failure, which vitamin should not be supplemented in high doses due to the risk of toxicity?",
      answers: [
        { text: "Vitamin A", "isCorrect": true },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "In patients with chronic renal failure, Vitamin A should not be given in high doses due to the risk of toxicity."
    },
    {
      question: "A patient with malabsorption syndrome is at increased risk of deficiency in which vitamin, leading to neurological symptoms?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1", "isCorrect": true },
        { text: "Vitamin B12" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B12 deficiency, common in malabsorption syndrome, can lead to neurological symptoms."
    },
    {
      question: "Which vitamin deficiency is associated with beriberi and should be supplemented in patients with a history of chronic alcohol use?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1 (Thiamin)", "isCorrect": true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B1 (Thiamin) deficiency is associated with beriberi and is common in chronic alcohol users."
    },
    {
      question: "A patient undergoing bariatric surgery is at increased risk of deficiency in which of the following due to reduced absorption?",
      answers: [
        { text: "Iron" },
        { text: "Folic acid" },
        { text: "Vitamin B12" },
        { text: "All of the above", "isCorrect": true },
        { text: "None of the above" }
      ],
      Explanation: "Patients undergoing bariatric surgery are at risk of deficiencies in iron, folic acid, and Vitamin B12."
    },
    {
      question: "What is the primary concern with excessive intake of vitamin A in a pregnant woman?",
      answers: [
        { text: "Hypertension" },
        { text: "Teratogenic effects", "isCorrect": true },
        { text: "Anemia" },
        { text: "Hyperglycemia" },
        { text: "Hypothyroidism" }
      ],
      Explanation: "Excessive Vitamin A intake in pregnancy is associated with teratogenic effects and should be avoided."
    },
    {
      question: "A patient with a history of heart failure is prescribed spironolacton What electrolyte imbalance should be closely monitored?",
      answers: [
        { text: "Hypocalcemia" },
        { text: "Hypercalcemia" },
        { text: "Hypokalemia" },
        { text: "Hyperkalemia", "isCorrect": true },
        { text: "Hyponatremia" }
      ],
      Explanation: "Hyperkalemia should be monitored in patients taking spironolactone, a potassium-sparing diuretic."
    },
    {
      question: "A patient with sickle cell disease is often supplemented with which vitamin to reduce complications?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E", "isCorrect": true }
      ],
      Explanation: "Vitamin E supplementation in sickle cell disease can help reduce oxidative stress and related complications."
    },
    {
      question: "A patient with gluten-sensitive enteropathy (celiac diseas is at risk for deficiency in which of the following due to malabsorption?",
      answers: [
        { text: "Iron" },
        { text: "Calcium" },
        { text: "Vitamin D" },
        { text: "All of the above", "isCorrect": true },
        { text: "None of the above" }
      ],
      Explanation: "Celiac disease can lead to malabsorption of various nutrients, including iron, calcium, and Vitamin D."
    },
    {
      question: "A patient with osteoporosis is advised to take a bisphosphonat What is an important counseling point for this medication?",
      answers: [
        { text: "Take it with a large meal" },
        { text: "Chew the tablet before swallowing" },
        { text: "Take it with a full glass of water and remain upright for 30 minutes", "isCorrect": true },
        { text: "Take it right before bedtime" },
        { text: "None of the above" }
      ],
      Explanation: "Bisphosphonates should be taken with a full glass of water, and the patient should remain upright for at least 30 minutes to prevent esophageal irritation."
    },
    {
      question: "In a patient with atrial fibrillation on dabigatran, a direct thrombin inhibitor, what nutrient interaction is less of a concern compared to warfarin therapy?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin K", "isCorrect": true }
      ],
      Explanation: "Vitamin K intake does not affect dabigatran efficacy, unlike warfarin, where consistent intake is necessary."
    },
    {
      question: "A patient with chronic liver disease is at risk of deficiency in which vitamin due to impaired storage and metabolism?",
      answers: [
        { text: "Vitamin A", "isCorrect": true },
        { text: "Vitamin B12" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin A deficiency is a concern in chronic liver disease due to impaired storage and metabolism in the liver."
    },
    {
      question: "Which mineral is essential for oxygen transport and is often deficient in chronic kidney disease leading to anemia?",
      answers: [
        { text: "Iron", "isCorrect": true },
        { text: "Calcium" },
        { text: "Iodine" },
        { text: "Magnesium" },
        { text: "Zinc" }
      ],
      Explanation: "Iron is essential for oxygen transport in the blood, and its deficiency is common in chronic kidney disease, contributing to anemia."
    },
    {
      question: "A patient taking a loop diuretic like furosemide should be monitored for deficiency in which electrolyte?",
      answers: [
        { text: "Calcium" },
        { text: "Chloride" },
        { text: "Magnesium" },
        { text: "Potassium", "isCorrect": true },
        { text: "Sodium" }
      ],
      Explanation: "Loop diuretics like furosemide can lead to potassium deficiency, which needs to be monitored."
    },
    {
      question: "What is the most common nutritional deficiency worldwide, often seen in women of childbearing age?",
      answers: [
        { text: "Vitamin A deficiency" },
        { text: "Vitamin D deficiency" },
        { text: "Iron deficiency anemia", "isCorrect": true },
        { text: "Iodine deficiency disorders" },
        { text: "Calcium deficiency" }
      ],
      Explanation: "Iron deficiency anemia is the most common nutritional deficiency globally, especially among women of childbearing age."
    },
    {
      question: "A patient with pernicious anemia requires supplementation with which vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B1" },
        { text: "Vitamin B12", "isCorrect": true },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin B12 supplementation is necessary in pernicious anemia due to the lack of intrinsic factor needed for its absorption."
    },
    {
      question: "A patient with a malabsorptive disorder is at increased risk for deficiency in which fat-soluble vitamin?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin D" },
        { text: "Vitamin E" },
        { text: "Vitamin K" },
        { text: "All of the above", "isCorrect": true }
      ],
      Explanation: "Fat-soluble vitamins (A, D, E, K) are at risk of deficiency in malabsorptive disorders due to impaired fat absorption."
    },
    {
      question: "Which vitamin deficiency is associated with night blindness and dry eyes, and is often seen in patients with cystic fibrosis?",
      answers: [
        { text: "Vitamin A", "isCorrect": true },
        { text: "Vitamin B6" },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" }
      ],
      Explanation: "Vitamin A deficiency, which can lead to night blindness and dry eyes, is common in conditions like cystic fibrosis due to malabsorption."
    },
    {
      question: "Mrs M has walked into your pharmacy looking to buy multivitamin supplements. As Mrs M is one of your regular patients, you look on her records to find out that she regularly takes orlistat 120mg TDS. You realise that this can somewhat impair the absorption of fat-soluble vitamins and you would like to make him aware of this. Which one of the following vitamins is NOT fat-soluble?",
      answers: [
        { text: "A" },
        { text: "B", "isCorrect": true },
        { text: "D" },
        { text: "E" },
        { text: "K" }
      ],
      Explanation: "Vitamin B is the only water-soluble vitamin here, all others (ADEK) being fat-soluble. We advise patients to have the fat-soluble vitamins with their largest meal of the day to promote absorption."
    }]);

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
              <img src="images/Logo.png" alt="PharmaQue Logo" className="logo1" />
              <span className="fs-4 fw-bold mx-3">PharmaQue</span>
            </Link>
            <Link to="/dashboard" className="removeunderline inactivelink">
              <p className="pt-5 pb-3 m-0">
                <img src="images/DashboardGrey.png" className="navigationicon" alt='icon' />
                <span className="fs-5 navigationoption mx-4">Dashboard</span>
              </p>
            </Link>
            <Link to="/chapters" class="removeunderline activelink">
                            <p class="py-3 m-0">
                                <img src="images/ChaptersColour.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Chapters</span>
                            </p>
                        </Link>
                        <Link to="/flashcards" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/FlashcardsGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Flashcards</span>
                            </p>
                        </Link>
                        <Link to="/flaggedquestions" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/FlaggedQuestionsGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Flagged Questions</span>
                            </p>
                        </Link>
                        <Link to="/pastchapters" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/PastChaptersGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Past Chapters</span>
                            </p>
                        </Link>
                        <Link to="/upcomingevents" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/UpcomingEventsGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Upcoming Events</span>
                            </p>
                        </Link>
                        <Link to="/queryresponses" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/QueryResponsesGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Query Responses</span>
                            </p>
                        </Link>
                        <Link to="/myaccount" class="removeunderline inactivelink">
                            <p class="py-3 m-0">
                                <img src="images/AccountGrey.png" class="navigationicon" alt="icon" />
                                <span class="fs-5 navigationoption mx-4">Account</span>
                            </p>
                        </Link>

            {/* Additional navigation links */}
          </div>
          <div className="col-sm-9 p-4 maincontent">
            <div className="row">
              <div className="col-sm-7">
                <p className="fs-4 mt-4 fw-bold navybluetext">Chapter: Musculoskeletal and Joint Disease</p>
              </div>
              <div className="col-sm-5">
                <button type="submit" className="btn btn-primary back fw-bold fs-5 mt-4 floatright mb-4">
                  <img src="images/Back.png" className="tinyicon mx-3" alt='icon' />Back To Chapter Selection
                </button>
              </div>
            </div>
            <div className="App">
              {isQuizOver ? (
                <ScoreView handleResetClick={handleResetClick} score={score} questions={questions} />
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
              <span className="fw-bold fs-5 navybluetext inline fitcontent">Discussion (1 Post)</span>
              <a href="#" className="removeunderline navybluetext inline fitcontent">
                <span className="fs-5"><img src="images/SortIcon.png" className="moderateicon mx-3" alt='icon' /> Sort By None</span>
              </a>
            </div>
            <div className="row mt-3">
              <div className="col-sm-1 ">
                <img src="images/DummyAvatar.png" className="midsizeicon mb-3" alt='icon' />
              </div>
              <div className="col-sm-11">
                <div class="form">
                  <textarea class="form-control fs-5" rows="2" id="comment" placeholder="Write a comment"></textarea>
                </div>
                <button type="submit" className="btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2">Post Comment</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-1 ">
                <img src="images/DummyAvatar.png" className="littlemidsizeicon mb-3" alt='icon' />
              </div>
              <div className="col-sm-11">
                <span className="fs-5 fw-bold mediumbluetext">Michael Andrew</span>
                <br />
                <span className="fs-5 navybluetext">I don’t think this question will be very useful for Masters level Pharmacy students like myself because we already learned the answer to it in our Bachelors.</span>
                <p>
                  <button className="buttonstyle"><img src="images/ThumbsUp.png" className="moderateicon mx-3 my-3" alt='icon' /></button>
                  <button className="buttonstyle"><img src="images/ThumbsDown.png" className="moderateicon mx-3 my-3" alt='icon' /></button>
                  <a href="#" className="fw-bold fs-5 removeunderline navybluetext">Reply</a>
                  <a href="#" className="fw-bold fs-5 removeunderline navybluetext floatright mx-4 my-2">Report</a>
                </p>
              </div>
            </div>
            {/* End of additional content */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NBQuestion;
