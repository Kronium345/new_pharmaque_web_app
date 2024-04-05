
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const NBFlashcardMain = () => {

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
        question: "What is the main indication for Ferrous Sulfate?",
        answer: "Treating iron-deficiency anemia",
        options: [
          "Treating iron-deficiency anemia",
          "Managing hypertension",
          "Correcting vitamin D deficiency",
          "Treating hyperthyroidism",
          "Managing diabetes mellitus"
        ]
      },
      {
        id: 2,
        question: "Which vitamin is primarily involved in blood coagulation?",
        answer: "Vitamin K",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 3,
        question: "Cyanocobalamin is a form of which vitamin?",
        answer: "Vitamin B12",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 4,
        question: "What is a common side effect of oral iron supplements like Ferrous Fumarate?",
        answer: "Constipation",
        options: [
          "Hypotension",
          "Insomnia",
          "Constipation",
          "Tachycardia",
          "Weight loss"
        ]
      },
      {
        id: 5,
        question: "Folic acid supplementation is most critical during which phase of life?",
        answer: "Pregnancy",
        options: [
          "Adolescence",
          "Early adulthood",
          "Pregnancy",
          "Middle age",
          "Elderly"
        ]
      },
      {
        id: 6,
        question: "Which nutrient deficiency is primarily associated with Scurvy?",
        answer: "Vitamin C",
        options: [
          "Iron",
          "Vitamin A",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 7,
        question: "What is the main therapeutic use of Hydroxocobalamin?",
        answer: "Treating Vitamin B12 deficiency",
        options: [
          "Treating iron-deficiency anemia",
          "Treating Vitamin B12 deficiency",
          "Correcting calcium imbalance",
          "Managing hypertension",
          "Treating Vitamin D deficiency"
        ]
      },
      {
        id: 8,
        question: "Which mineral is essential for thyroid hormone synthesis?",
        answer: "Iodine",
        options: [
          "Iron",
          "Calcium",
          "Iodine",
          "Magnesium",
          "Zinc"
        ]
      },
      {
        id: 9,
        question: "What is the recommended dietary supplement for someone with osteoporosis?",
        answer: "Calcium and Vitamin D",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin C",
          "Calcium and Vitamin D",
          "Vitamin B12"
        ]
      },
      {
        id: 10,
        question: "Which of the following is a sign of Vitamin B12 deficiency?",
        answer: "Pernicious anemia",
        options: [
          "Muscle weakness",
          "Night blindness",
          "Scurvy",
          "Pernicious anemia",
          "Rickets"
        ]
      },
      {
        id: 11,
        question: "A 55-year-old woman with chronic kidney disease is prescribed calcium acetate for hyperphosphatemia. Which mechanism best describes its action?",
        answer: "Binds dietary phosphate in the gut",
        options: [
          "Increases phosphate excretion",
          "Binds dietary phosphate in the gut",
          "Stimulates phosphate absorption",
          "Reduces calcium absorption",
          "None of the above"
        ]
      },
      {
        id: 12,
        question: "A 30-year-old man with a history of alcoholism presents with Wernicke’s encephalopathy. Which treatment is most appropriate?",
        answer: "Thiamine",
        options: [
          "Thiamine",
          "Cyanocobalamin",
          "Folic acid",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 13,
        question: "A pregnant woman is advised to start folic acid supplements. What is the primary reason for this recommendation?",
        answer: "To reduce the risk of neural tube defects",
        options: [
          "To enhance calcium absorption",
          "To reduce the risk of neural tube defects",
          "To improve iron absorption",
          "To prevent vitamin D deficiency",
          "To reduce the risk of gestational diabetes"
        ]
      },
      {
        id: 14,
        question: "A patient on warfarin therapy has started taking high doses of Vitamin E supplements. What is a potential risk of this combination?",
        answer: "Increased risk of bleeding",
        options: [
          "Reduced anticoagulant effect",
          "Increased risk of bleeding",
          "Hypertension",
          "Hyperglycemia",
          "None of the above"
        ]
      },
      {
        id: 15,
        question: "A 45-year-old woman with iron-deficiency anemia is prescribed oral ferrous sulfate. Which side effect should she be informed about?",
        answer: "Constipation",
        options: [
          "Hypertension",
          "Diarrhea",
          "Constipation",
          "Tachycardia",
          "Hyperglycemia"
        ]
      },
      {
        id: 16,
        question: "A patient with pernicious anemia is prescribed hydroxocobalamin. What is the mechanism of action of this treatment?",
        answer: "It provides a source of Vitamin B12",
        options: [
          "It stimulates erythropoiesis",
          "It replaces deficient intrinsic factor",
          "It provides a source of Vitamin B12",
          "It enhances iron absorption",
          "It increases folic acid synthesis"
        ]
      },
      {
        id: 17,
        question: "A patient on long-term corticosteroid therapy is advised to take calcium and vitamin D supplements. This is primarily to prevent:",
        answer: "Osteoporosis",
        options: [
          "Hypertension",
          "Osteoporosis",
          "Anemia",
          "Hyperglycemia",
          "Thyroid dysfunction"
        ]
      },
      {
        id: 18,
        question: "A patient with CKD is prescribed sevelamer. What is the primary action of this drug in CKD?",
        answer: "Binds dietary phosphate",
        options: [
          "Reduces serum potassium levels",
          "Binds dietary phosphate",
          "Stimulates erythropoiesis",
          "Increases calcium absorption",
          "Reduces serum urea levels"
        ]
      },
      {
        id: 19,
        question: "A 60-year-old man on antihypertensive medication develops gout. Which medication could have contributed to this condition?",
        answer: "Hydrochlorothiazide",
        options: [
          "Amlodipine",
          "Losartan",
          "Hydrochlorothiazide",
          "Metoprolol",
          "Ramipril"
        ]
      },
      {
        id: 20,
        question: "A patient with a history of epilepsy is prescribed phenytoin. Which nutrient deficiency should be regularly monitored in this patient?",
        answer: "Vitamin D",
        options: [
          "Vitamin D",
          "Iron",
          "Vitamin C",
          "Folic acid",
          "Calcium"
        ]
      },
      {
        id: 21,
        question: "A 65-year-old man with a history of stroke is prescribed alendronate. What is the primary purpose of this medication?",
        answer: "To increase bone density",
        options: [
          "To increase bone density",
          "To reduce cholesterol levels",
          "To control blood pressure",
          "To prevent blood clots",
          "To improve cognitive function"
        ]
      },
      {
        id: 22,
        question: "A 40-year-old woman complains of fatigue and hair loss. Blood tests reveal iron-deficiency anemia. Which of the following should be avoided with her iron supplement?",
        answer: "Green tea",
        options: [
          "Vitamin C",
          "Calcium supplements",
          "Green tea",
          "Beef",
          "Spinach"
        ]
      },
      {
        id: 23,
        question: "A patient with celiac disease requires vitamin supplementation. Which vitamin is most likely to be deficient?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 24,
        question: "A patient on dialysis is given erythropoietin. What is the primary purpose of this treatment?",
        answer: "To stimulate red blood cell production",
        options: [
          "To control blood pressure",
          "To stimulate red blood cell production",
          "To reduce cholesterol",
          "To improve bone density",
          "To decrease phosphate levels"
        ]
      },
      {
        id: 25,
        question: "A 50-year-old woman with breast cancer is prescribed calcium and vitamin D supplements along with her treatment. What is the rationale for this?",
        answer: "To prevent osteoporosis",
        options: [
          "To prevent osteoporosis",
          "To boost immune function",
          "To improve wound healing",
          "To reduce nausea from chemotherapy",
          "To enhance the effect of chemotherapy"
        ]
      },
      {
        id: 26,
        question: "A patient with hypertension is advised to reduce sodium intake. This dietary change primarily helps to:",
        answer: "Lower blood pressure",
        options: [
          "Increase bone density",
          "Lower blood pressure",
          "Increase hemoglobin levels",
          "Improve cardiac function",
          "Enhance cognitive function"
        ]
      },
      {
        id: 27,
        question: "A patient taking warfarin is found to have a Vitamin K deficiency. How does this affect their treatment?",
        answer: "Increases risk of bleeding",
        options: [
          "Increases risk of bleeding",
          "Decreases risk of bleeding",
          "No effect on bleeding risk",
          "Increases blood pressure",
          "Decreases effectiveness of warfarin"
        ]
      },
      {
        id: 28,
        question: "A diabetic patient has been prescribed thiamin. What is the primary benefit of thiamine supplementation in diabetes?",
        answer: "Prevents diabetic neuropathy",
        options: [
          "Lowers blood sugar levels",
          "Prevents diabetic neuropathy",
          "Increases insulin sensitivity",
          "Reduces risk of heart disease",
          "Enhances wound healing"
        ]
      },
      {
        id: 29,
        question: "A patient with hyperparathyroidism is prescribed cinacalcet. What is the mechanism of action of this drug?",
        answer: "Decreases PTH levels",
        options: [
          "Increases calcium absorption",
          "Decreases calcium absorption",
          "Increases parathyroid hormone (PTH) levels",
          "Decreases PTH levels",
          "Stimulates vitamin D synthesis"
        ]
      },
      {
        id: 30,
        question: "A patient with a peptic ulcer is on long-term omeprazole therapy. Which nutrient should be monitored?",
        answer: "Vitamin B12",
        options: [
          "Iron",
          "Calcium",
          "Vitamin B12",
          "Folic acid",
          "Vitamin C"
        ]
      },
      {
        id: 31,
        question: "A 70-year-old with osteoporosis is prescribed risedronate. What is the most important advice regarding its administration?",
        answer: "Take with a full glass of water and remain upright for 30 minutes",
        options: [
          "Take with a large meal",
          "Lie down immediately after taking it",
          "Take with a full glass of water and remain upright for 30 minutes",
          "Take it at bedtime",
          "Take with antacids"
        ]
      },
      {
        id: 32,
        question: "A patient on ferrous sulfate reports black stools. What is your advice?",
        answer: "This is a normal side effect",
        options: [
          "Stop the medication immediately",
          "This is a normal side effect",
          "Increase fluid intake",
          "Seek immediate medical attention",
          "Switch to intravenous iron"
        ]
      },
      {
        id: 33,
        question: "A patient with renal failure is prescribed epoetin alfa. What is a potential side effect of this medication?",
        answer: "Increased risk of thromboembolic events",
        options: [
          "Hypotension",
          "Weight loss",
          "Increased risk of thromboembolic events",
          "Hyperglycemia",
          "Diarrhea"
        ]
      },
      {
        id: 34,
        question: "A patient with B12 deficiency is advised to avoid alcohol. Why?",
        answer: "Alcohol decreases B12 absorption",
        options: [
          "Alcohol can worsen anemia",
          "Alcohol decreases B12 absorption",
          "Alcohol interferes with B12 metabolism",
          "Alcohol increases B12 requirements",
          "None of the above"
        ]
      },
      {
        id: 35,
        question: "A 55-year-old woman is diagnosed with iron-deficiency anemia and is prescribed oral iron. She is also taking levothyroxine. What should she be aware of?",
        answer: "Iron supplements can decrease the effectiveness of levothyroxine",
        options: [
          "Iron supplements can decrease the effectiveness of levothyroxine",
          "Levothyroxine can increase iron levels",
          "Iron supplements can increase the risk of hyperthyroidism",
          "Levothyroxine should be taken with iron for better absorption",
          "None of the above"
        ]
      },
      {
        id: 36,
        question: "A patient with gout is advised to limit intake of which nutrient?",
        answer: "Fructose",
        options: [
          "Vitamin C",
          "Calcium",
          "Iron",
          "Fructose",
          "Vitamin D"
        ]
      },
      {
        id: 37,
        question: "What is a major side effect of long-term use of proton pump inhibitors like omeprazole on nutrition?",
        answer: "Vitamin B12 deficiency",
        options: [
          "Vitamin B12 deficiency",
          "Calcium deficiency",
          "Iron deficiency",
          "Vitamin D deficiency",
          "Folic acid deficiency"
        ]
      },
      {
        id: 38,
        question: "A patient on methotrexate for rheumatoid arthritis is prescribed folic acid. What is the reason for this?",
        answer: "To prevent methotrexate-induced folate deficiency",
        options: [
          "To enhance the effectiveness of methotrexate",
          "To reduce the risk of liver damage",
          "To prevent methotrexate-induced folate deficiency",
          "To decrease gastrointestinal side effects",
          "To improve joint mobility"
        ]
      },
      {
        id: 39,
        question: "A 60-year-old man with heart failure is advised to take thiamine supplements. What is the reason?",
        answer: "To improve cardiac function",
        options: [
          "To improve cardiac function",
          "To reduce fluid retention",
          "To lower blood pressure",
          "To prevent arrhythmias",
          "To increase energy levels"
        ]
      },
      {
        id: 40,
        question: "A patient with hemochromatosis is advised to avoid which type of supplement?",
        answer: "Iron",
        options: [
          "Iron",
          "Calcium",
          "Vitamin C",
          "Vitamin D",
          "Folic acid"
        ]
      },
      {
        id: 41,
        question: "A patient with Zollinger-Ellison syndrome is on high-dose proton pump inhibitors. Which nutrient deficiency should be closely monitored?",
        answer: "Vitamin B12",
        options: [
          "Iron",
          "Calcium",
          "Vitamin B12",
          "Folic acid",
          "Vitamin D"
        ]
      },
      {
        id: 42,
        question: "A diabetic patient is prescribed an ACE inhibitor and notices a cough. What vitamin is sometimes used to mitigate this side effect?",
        answer: "Vitamin C",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin E",
          "Vitamin D"
        ]
      },
      {
        id: 43,
        question: "A patient with a history of gastric bypass surgery is likely to require supplementation with which vitamin?",
        answer: "Vitamin B1",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 44,
        question: "A patient on long-term aspirin therapy for cardiovascular disease prevention is advised to monitor for deficiency in which vitamin?",
        answer: "Vitamin K",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 45,
        question: "In a patient with chronic liver disease, which vitamin supplementation might be necessary due to impaired storage and metabolism?",
        answer: "Vitamin A",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 46,
        question: "A patient with celiac disease is at increased risk of deficiency in which of the following due to malabsorption?",
        answer: "All of the above",
        options: [
          "Iron",
          "Calcium",
          "Vitamin B6",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 47,
        question: "A patient on chemotherapy is experiencing severe nausea and vomiting. What vitamin might help alleviate these symptoms?",
        answer: "Vitamin B6",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 48,
        question: "A patient with osteoporosis is advised to increase intake of which mineral to aid in bone health?",
        answer: "Calcium",
        options: [
          "Iron",
          "Calcium",
          "Magnesium",
          "Phosphorus",
          "Potassium"
        ]
      },
      {
        id: 49,
        question: "A patient with atrial fibrillation is on warfarin and reports eating large amounts of green leafy vegetables. What might be a concern with this diet?",
        answer: "Decreased effectiveness of warfarin",
        options: [
          "Increased risk of bleeding",
          "Decreased effectiveness of warfarin",
          "Hypertension",
          "Vitamin K deficiency",
          "None of the above"
        ]
      },
      {
        id: 50,
        question: "A patient with rheumatoid arthritis on methotrexate therapy is experiencing fatigue and mouth ulcers. Which nutrient deficiency should be considered?",
        answer: "Folic acid",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D"
        ]
      },
      {
        id: 51,
        question: "A patient with chronic heart failure is advised to restrict dietary intake of which mineral?",
        answer: "Sodium",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 52,
        question: "Which vitamin deficiency is most likely in a patient with chronic alcoholism and poor diet?",
        answer: "Vitamin B1",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 53,
        question: "A patient undergoing hemodialysis is found to have elevated phosphate levels. Which medication class is commonly used to treat this?",
        answer: "Phosphate binders",
        options: [
          "Calcium supplements",
          "Phosphate binders",
          "Potassium binders",
          "Iron supplements",
          "Vitamin D analogs"
        ]
      },
      {
        id: 54,
        question: "A patient on long-term corticosteroid therapy is at risk of deficiency in which vitamin?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 55,
        question: "In a patient with peripheral neuropathy, which vitamin deficiency should be considered?",
        answer: "Vitamin B12",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 56,
        question: "A patient with chronic kidney disease is prescribed calcitriol. What is the primary purpose of this medication?",
        answer: "To increase calcium levels",
        options: [
          "To lower blood pressure",
          "To decrease cholesterol levels",
          "To control phosphate levels",
          "To increase calcium levels",
          "To stimulate red blood cell production"
        ]
      },
      {
        id: 57,
        question: "A patient with a new diagnosis of epilepsy is started on phenytoin. Which nutrient interaction is important to monitor?",
        answer: "Folic acid",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Calcium"
        ]
      },
      {
        id: 58,
        question: "A pregnant woman is advised to take which supplement to prevent neural tube defects?",
        answer: "Folic acid",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Calcium"
        ]
      },
      {
        id: 59,
        question: "A patient with chronic pancreatitis might require supplementation with which vitamin?",
        answer: "Vitamin A",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 60,
        question: "A patient with a history of gastric ulcers is prescribed a proton pump inhibitor (PPI). What is a potential long-term side effect of PPIs?",
        answer: "Vitamin B12 deficiency",
        options: [
          "Vitamin B12 deficiency",
          "Iron overload",
          "Hypercalcemia",
          "Hypertension",
          "Hyperglycemia"
        ]
      },
      {
        id: 61,
        question: "A patient with a history of renal stones is advised to moderate intake of which nutrient?",
        answer: "Calcium",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 62,
        question: "A patient with gluten-sensitive enteropathy (celiac disease) is most likely to be deficient in which nutrient?",
        answer: "Iron",
        options: [
          "Iron",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 63,
        question: "Which medication is likely to be prescribed to a patient with osteomalacia?",
        answer: "Vitamin D supplements",
        options: [
          "Calcium supplements",
          "Iron supplements",
          "Phosphate binders",
          "Vitamin D supplements",
          "Vitamin B12 supplements"
        ]
      },
      {
        id: 64,
        question: "A patient with rheumatoid arthritis on long-term NSAID therapy should be monitored for deficiency in which vitamin?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 65,
        question: "In a patient with macrocytic anemia, which vitamin deficiency should be considered?",
        answer: "Vitamin B12",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 66,
        question: "A patient on antiepileptic drugs such as carbamazepine should be monitored for deficiency in which nutrient?",
        answer: "Folic acid",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Calcium"
        ]
      },
      {
        id: 67,
        question: "What is the primary reason for administering Vitamin K to a newborn?",
        answer: "To prevent hemorrhagic disease",
        options: [
          "To boost immune function",
          "To enhance liver function",
          "To prevent hemorrhagic disease",
          "To stimulate growth",
          "To improve bone development"
        ]
      },
      {
        id: 68,
        question: "A patient with a history of bariatric surgery is at increased risk of deficiency in which vitamin?",
        answer: "Vitamin B12",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin E"
        ]
      },
      {
        id: 69,
        question: "A patient on long-term bisphosphonate therapy for osteoporosis should be advised to monitor for which side effect?",
        answer: "Esophageal irritation",
        options: [
          "Hypertension",
          "Esophageal irritation",
          "Hyperglycemia",
          "Liver dysfunction",
          "Renal stones"
        ]
      },
      {
        id: 70,
        question: "A patient with chronic obstructive pulmonary disease (COPD) is advised to increase intake of which nutrient?",
        answer: "Vitamin C",
        options: [
          "Iron",
          "Vitamin A",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 71,
        question: "A patient with chronic kidney disease is prescribed calcitriol. What is the primary purpose of this medication?",
        answer: "To increase calcium levels",
        options: [
          "To lower blood pressure",
          "To decrease cholesterol levels",
          "To control phosphate levels",
          "To increase calcium levels",
          "To stimulate red blood cell production"
        ]
      },
      {
        id: 72,
        question: "Which vitamin supplementation is recommended for a patient with alcoholic liver disease to prevent Wernicke-Korsakoff syndrome?",
        answer: "Vitamin B1",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 73,
        question: "A patient with inflammatory bowel disease (IBD) is likely to be deficient in which vitamin?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 74,
        question: "A patient on long-term proton pump inhibitor (PPI) therapy should be monitored for deficiency in which mineral?",
        answer: "Iron",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 75,
        question: "In a patient with pernicious anemia, which vitamin is typically supplemented?",
        answer: "Vitamin B12",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D"
        ]
      },
      {
        id: 76,
        question: "A patient with hemochromatosis should avoid supplements containing which mineral?",
        answer: "Iron",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 77,
        question: "A pregnant woman is found to have iron-deficiency anemia. What is the most appropriate first-line treatment?",
        answer: "Oral iron supplements",
        options: [
          "Oral iron supplements",
          "Intravenous iron",
          "Blood transfusion",
          "Erythropoietin therapy",
          "Diet modification only"
        ]
      },
      {
        id: 78,
        question: "What is a potential side effect of high-dose calcium supplementation?",
        answer: "Constipation",
        options: [
          "Hypotension",
          "Diarrhea",
          "Constipation",
          "Tachycardia",
          "Hyperglycemia"
        ]
      },
      {
        id: 79,
        question: "A patient with a history of gastric bypass surgery is at increased risk of deficiency in which mineral?",
        answer: "Iron",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 80,
        question: "Which nutrient deficiency is a common side effect of metformin therapy in diabetes management?",
        answer: "Vitamin B12",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Calcium"
        ]
      },
      {
        id: 81,
        question: "A patient with chronic obstructive pulmonary disease (COPD) is found to have a Vitamin D deficiency. What is the significance of this finding?",
        answer: "Both A and B",
        options: [
          "Increases risk of infections",
          "Worsens lung function",
          "Both A and B",
          "No significant impact",
          "Increases risk of cardiovascular disease"
        ]
      },
      {
        id: 82,
        question: "A patient with hypercalcemia is prescribed a bisphosphonate. What is the mechanism of action of bisphosphonates in this condition?",
        answer: "Decrease bone resorption",
        options: [
          "Increase calcium absorption",
          "Decrease calcium absorption",
          "Increase bone resorption",
          "Decrease bone resorption",
          "None of the above"
        ]
      },
      {
        id: 83,
        question: "A patient on warfarin therapy has started taking fish oil supplements. What potential interaction should be monitored?",
        answer: "Increased risk of bleeding",
        options: [
          "Increased risk of bleeding",
          "Decreased effectiveness of warfarin",
          "Hypertension",
          "Hyperglycemia",
          "None of the above"
        ]
      },
      {
        id: 84,
        question: "In a patient with iron overload due to repeated blood transfusions, which medication might be prescribed?",
        answer: "Chelation therapy",
        options: [
          "Oral iron supplements",
          "Phosphate binders",
          "Chelation therapy",
          "Vitamin D supplements",
          "Erythropoietin"
        ]
      },
      {
        id: 85,
        question: "A patient with a history of peptic ulcer disease is on long-term omeprazole therapy. Which nutrient should be closely monitored?",
        answer: "Vitamin B12",
        options: [
          "Iron",
          "Calcium",
          "Vitamin B12",
          "Folic acid",
          "Vitamin C"
        ]
      },
      {
        id: 86,
        question: "A patient with osteoporosis is advised to take which supplement to aid in bone health?",
        answer: "Calcium and Vitamin D",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Calcium and Vitamin D",
          "Vitamin C"
        ]
      },
      {
        id: 87,
        question: "Which vitamin is essential for the synthesis of clotting factors and is often given to newborns?",
        answer: "Vitamin K",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 88,
        question: "A patient with chronic renal failure is at risk of developing which type of anemia?",
        answer: "Anemia of chronic disease",
        options: [
          "Iron-deficiency anemia",
          "Hemolytic anemia",
          "Aplastic anemia",
          "Anemia of chronic disease",
          "Sickle cell anemia"
        ]
      },
      {
        id: 89,
        question: "What is a common side effect of high-dose niacin therapy used in lipid control?",
        answer: "Flushing and itching",
        options: [
          "Hypotension",
          "Flushing and itching",
          "Constipation",
          "Tachycardia",
          "Hyperglycemia"
        ]
      },
      {
        id: 90,
        question: "A patient with a history of hypertension is prescribed a diuretic and develops hypokalemia. Which supplement should be considered?",
        answer: "Potassium",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 91,
        question: "A patient with megaloblastic anemia is found to have a folic acid deficiency. What could be a possible cause of this condition?",
        answer: "Both A and B",
        options: [
          "Excessive alcohol consumption",
          "Poor dietary intake",
          "Both A and B",
          "Medication side effect",
          "None of the above"
        ]
      },
      {
        id: 92,
        question: "A patient on long-term prednisone therapy should be counseled about the risk of deficiency in which nutrient?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 93,
        question: "Which mineral is crucial in the synthesis of thyroid hormones and should be monitored in patients with thyroid disorders?",
        answer: "Iodine",
        options: [
          "Iron",
          "Iodine",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 94,
        question: "A patient with chronic liver disease should be monitored for deficiency in which vitamin, considering the liver’s role in storage and metabolism?",
        answer: "Vitamin A",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 95,
        question: "What is the primary dietary advice for a patient with hyperuricemia and gout?",
        answer: "Decrease fructose intake",
        options: [
          "Increase protein intake",
          "Decrease fructose intake",
          "Increase calcium intake",
          "Decrease sodium intake",
          "Increase fiber intake"
        ]
      },
      {
        id: 96,
        question: "A patient on chemotherapy for breast cancer is advised to supplement with which vitamin to help with bone health?",
        answer: "Vitamin D",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 97,
        question: "In a patient with renal insufficiency, which vitamin should be used cautiously due to the risk of accumulation and toxicity?",
        answer: "Vitamin A",
        options: [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 98,
        question: "A patient with a recent diagnosis of celiac disease should be screened for deficiency in which of the following?",
        answer: "All of the above",
        options: [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 99,
        question: "A patient taking a proton pump inhibitor (PPI) long-term is at risk of developing a deficiency in which mineral, potentially leading to anemia?",
        answer: "Iron",
        options: [
          "Iron",
          "Sodium",
          "Calcium",
          "Potassium",
          "Magnesium"
        ]
      },
      {
        id: 100,
        question: "A patient with chronic pancreatitis is likely to be deficient in which of the following due to malabsorption?",
        answer: "All of the above",
        options: [
          "Iron",
          "Vitamin A",
          "Vitamin D",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 101,
        question: "A patient on anticoagulant therapy with warfarin should be counseled about dietary intake of which vitamin?",
        answer: "Vitamin K",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 102,
        question: "Which mineral's supplementation is crucial for a patient with hypoparathyroidism to maintain normal physiological function?",
        answer: "Calcium",
        options: [
          "Iron",
          "Calcium",
          "Iodine",
          "Magnesium",
          "Potassium"
        ]
      },
      {
        id: 103,
        question: "In a patient with chronic renal failure, which vitamin should not be supplemented in high doses due to the risk of toxicity?",
        answer: "Vitamin A",
        "options": [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 104,
        question: "A patient with malabsorption syndrome is at increased risk of deficiency in which vitamin, leading to neurological symptoms?",
        answer: "Vitamin B1",
        "options": [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 105,
        question: "Which vitamin deficiency is associated with beriberi and should be supplemented in patients with a history of chronic alcohol use?",
        answer: "Vitamin B1 (Thiamin)",
        "options": [
          "Vitamin A",
          "Vitamin B1 (Thiamin)",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 106,
        question: "A patient undergoing bariatric surgery is at increased risk of deficiency in which of the following due to reduced absorption?",
        answer: "All of the above",
        "options": [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 107,
        question: "What is the primary concern with excessive intake of vitamin A in a pregnant woman?",
        answer: "Teratogenic effects",
        "options": [
          "Hypertension",
          "Teratogenic effects",
          "Anemia",
          "Hyperglycemia",
          "Hypothyroidism"
        ]
      },
      {
        id: 108,
        question: "A patient with a history of heart failure is prescribed spironolactone. What electrolyte imbalance should be closely monitored?",
        answer: "Hyperkalemia",
        "options": [
          "Hypocalcemia",
          "Hypercalcemia",
          "Hypokalemia",
          "Hyperkalemia",
          "Hyponatremia"
        ]
      },
      {
        id: 109,
        question: "A patient with sickle cell disease is often supplemented with which vitamin to reduce complications?",
        answer: "Vitamin E",
        "options": [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 110,
        question: "A patient with gluten-sensitive enteropathy (celiac disease) is at risk for deficiency in which of the following due to malabsorption?",
        answer: "All of the above",
        "options": [
          "Iron",
          "Calcium",
          "Vitamin D",
          "All of the above",
          "None of the above"
        ]
      },
      {
        id: 111,
        question: "A patient with osteoporosis is advised to take a bisphosphonate. What is an important counseling point for this medication?",
        answer: "Take it with a full glass of water and remain upright for 30 minutes",
        "options": [
          "Take it with a large meal",
          "Chew the tablet before swallowing",
          "Take it with a full glass of water and remain upright for 30 minutes",
          "Take it right before bedtime",
          "None of the above"
        ]
      },
      {
        id: 112,
        question: "In a patient with atrial fibrillation on dabigatran, a direct thrombin inhibitor, what nutrient interaction is less of a concern compared to warfarin therapy?",
        answer: "Vitamin K",
        "options": [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K"
        ]
      },
      {
        id: 113,
        question: "A patient with chronic liver disease is at risk of deficiency in which vitamin due to impaired storage and metabolism?",
        answer: "Vitamin A",
        "options": [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 114,
        question: "Which mineral is essential for oxygen transport and is often deficient in chronic kidney disease leading to anemia?",
        answer: "Iron",
        "options": [
          "Iron",
          "Calcium",
          "Iodine",
          "Magnesium",
          "Zinc"
        ]
      },
      {
        id: 115,
        question: "A patient taking a loop diuretic like furosemide should be monitored for deficiency in which electrolyte?",
        answer: "Potassium",
        "options": [
          "Calcium",
          "Chloride",
          "Magnesium",
          "Potassium",
          "Sodium"
        ]
      },
      {
        id: 116,
        question: "What is the most common nutritional deficiency worldwide, often seen in women of childbearing age?",
        answer: "Iron deficiency anemia",
        "options": [
          "Vitamin A deficiency",
          "Vitamin D deficiency",
          "Iron deficiency anemia",
          "Iodine deficiency disorders",
          "Calcium deficiency"
        ]
      },
      {
        id: 117,
        question: "A patient with pernicious anemia requires supplementation with which vitamin?",
        answer: "Vitamin B12",
        "options": [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin B12",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 118,
        question: "A patient with a malabsorptive disorder is at increased risk for deficiency in which fat-soluble vitamin?",
        answer: "All of the above",
        "options": [
          "Vitamin A",
          "Vitamin D",
          "Vitamin E",
          "Vitamin K",
          "All of the above"
        ]
      },
      {
        id: 119,
        question: "Which vitamin deficiency is associated with night blindness and dry eyes, and is often seen in patients with cystic fibrosis?",
        answer: "Vitamin A",
        "options": [
          "Vitamin A",
          "Vitamin B6",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E"
        ]
      },
      {
        id: 120,
        question: "Mrs M has walked into your pharmacy looking to buy multivitamin supplements. As Mrs M is one of your regular patients, you look on her records to find out that she regularly takes orlistat 120mg TDS. You realise that this can somewhat impair the absorption of fat-soluble vitamins and you would like to make him aware of this. Which one of the following vitamins is NOT fat-soluble?",
        answer: "B",
        "options": [
          "A",
          "B",
          "D",
          "E",
          "K"
        ]
      }      
];

export default NBFlashcardMain;
