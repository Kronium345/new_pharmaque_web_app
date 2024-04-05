
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const EndoFlashcardMain = () => {

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
    question: "What is the primary mechanism of action of metformin in type 2 diabetes?",
    answer: "Inhibits hepatic glucose production",
    options: [
          "Increases insulin sensitivity in muscle and fat",
          "Stimulates pancreatic insulin secretion",
          "Inhibits hepatic glucose production",
          "Increases glucose uptake in the gut",
          "Enhances glucagon secretion"
    ]
  },
  {
    id: 2,
    question: "How does levothyroxine work in hypothyroidism?",
    answer: "B) Replaces deficient T4",
    options: [
      "A) Blocks thyroid hormone synthesis",
      "B) Replaces deficient T4",
      "C) Inhibits TSH secretion",
      "D) Enhances peripheral conversion of T4 to T3",
      "E) Decreases iodine uptake by the thyroid"
    ]
  },
  {
    id: 3,
    question: "What is the mechanism of action of pioglitazone in diabetes management?",
    answer: "C) PPAR-gamma agonist",
    options: [
      "A) DPP-4 inhibitor",
      "B) SGLT2 inhibitor",
      "C) PPAR-gamma agonist",
      "D) Alpha-glucosidase inhibitor",
      "E) Insulin secretagogue"
    ]
  },
  {
    id: 4,
    question: "How does exenatide function in the treatment of type 2 diabetes?",
    answer: "D) All of the above",
    options: [
      "A) Enhances insulin secretion in response to glucose",
      "B) Inhibits glucagon secretion",
      "C) Delays gastric emptying",
      "D) All of the above",
      "E) None of the above"
    ]
  },
  {
    id: 5,
    question: "What is the main action of spironolactone in primary hyperaldosteronism?",
    answer: "A) Blocks aldosterone receptors",
    options: [
      "A) Blocks aldosterone receptors",
      "B) Inhibits 11-beta hydroxylase",
      "C) Increases urinary sodium excretion",
      "D) Decreases potassium excretion",
      "E) Stimulates renin release"
    ]
  },
  {
    id: 6,
    question: "Which mechanism of action best describes metformin?",
    answer: "C) AMP-activated protein kinase (AMPK) activator",
    options: [
      "A) Insulin receptor agonist",
      "B) Alpha-glucosidase inhibitor",
      "C) AMP-activated protein kinase (AMPK) activator",
      "D) Sodium-glucose cotransporter 2 (SGLT2) inhibitor",
      "E) Glucagon receptor antagonist"
    ]
  },
  {
    id: 7,
    question: "What is the primary mechanism of action of thyroxine (levothyroxin)?",
    answer: "E) Activation of thyroid hormone receptors",
    options: [
      "A) Inhibition of thyroid peroxidase",
      "B) Inhibition of thyroglobulin synthesis",
      "C) Stimulation of TSH secretion",
      "D) Stimulation of iodine uptake",
      "E) Activation of thyroid hormone receptors"
    ]
  },
  {
    id: 8,
    question: "Which of the following best describes the mechanism of action of a somatostatin analog like octreotide?",
    answer: "D) Inhibition of growth hormone secretion",
    options: [
      "A) Stimulation of growth hormone secretion",
      "B) Inhibition of insulin secretion",
      "C) Inhibition of glucagon secretion",
      "D) Inhibition of growth hormone secretion",
      "E) Stimulation of insulin secretion"
    ]
  },
  {
    id: 9,
    question: "What is the primary mechanism of action of glucagon-like peptide-1 (GLP-1) agonists, such as exenatide?",
    answer: "C) Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucagon receptor",
      "B) Inhibition of DPP-4 enzyme",
      "C) Stimulation of insulin secretion",
      "D) Stimulation of GLP-1 receptor",
      "E) Inhibition of glucose absorption"
    ]
  },
  {
    id: 10,
    question: "How do thiazolidinediones (e.g., pioglitazone) primarily exert their therapeutic effects in diabetes management?",
    answer: "C) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
    options: [
      "A) Inhibition of alpha-glucosidase",
      "B) Inhibition of sodium-glucose cotransporters",
      "C) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
      "D) Stimulation of insulin secretion",
      "E) Inhibition of glucagon secretion"
    ]
  },
  {
    id: 11,
    question: "Which of the following best represents the mechanism of action of propylthiouracil (PTU) in the treatment of hyperthyroidism?",
    answer: "B) Inhibition of thyroid hormone synthesis",
    options: [
      "A) Stimulation of thyroid hormone synthesis",
      "B) Inhibition of thyroid hormone synthesis",
      "C) Inhibition of thyroid hormone secretion",
      "D) Stimulation of thyroid hormone receptor",
      "E) Inhibition of iodine uptake"
    ]
  },
  {
    id: 12,
    question: "What is the primary mechanism of action of desmopressin (DDAVP) in the treatment of diabetes insipidus?",
    answer: "A) Stimulation of ADH receptor",
    options: [
      "A) Stimulation of ADH receptor",
      "B) Inhibition of ADH secretion",
      "C) Stimulation of aldosterone secretion",
      "D) Inhibition of vasopressin receptor",
      "E) Stimulation of insulin secretion"
    ]
  },
  {
    id: 13,
    question: "Which of the following describes the mechanism of action of calcitonin in the treatment of osteoporosis?",
    answer: "D) Inhibition of bone resorption",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of parathyroid hormone release",
      "D) Inhibition of bone resorption",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 14,
    question: "How do sulfonylureas (e.g., glibenclamide) primarily lower blood glucose levels in diabetes?",
    answer: "C) Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucose absorption",
      "B) Inhibition of glucagon secretion",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of insulin receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 15,
    question: "Which mechanism of action best describes the effect of alendronate in the treatment of osteoporosis?",
    answer: "B) Inhibition of bone resorption",
    options: [
      "A) Stimulation of osteoclast activity",
      "B) Inhibition of bone resorption",
      "C) Stimulation of bone formation",
      "D) Inhibition of vitamin D synthesis",
      "E) Activation of parathyroid hormone"
    ]
  },
  {
    id: 16,
    question: "What is the primary mechanism of action of acarbose in the management of diabetes?",
    answer: "B) Inhibition of glucose absorption",
    options: [
      "A) Inhibition of insulin receptor",
      "B) Inhibition of glucose absorption",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of glucagon receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 17,
    question: "How do somatropin and other growth hormone (GH) replacement therapies primarily function in patients with GH deficiency?",
    answer: "B) Stimulation of GH receptor",
    options: [
      "A) Inhibition of GH receptor",
      "B) Stimulation of GH receptor",
      "C) Inhibition of insulin secretion",
      "D) Activation of glucagon receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 18,
    question: "Which mechanism of action best describes the effect of metyrapone in the treatment of Cushing's syndrome?",
    answer: "B) Inhibition of cortisol synthesis",
    options: [
      "A) Stimulation of cortisol synthesis",
      "B) Inhibition of cortisol synthesis",
      "C) Stimulation of aldosterone synthesis",
      "D) Inhibition of cortisol receptor",
      "E) Activation of thyroid hormone receptor"
    ]
  },
  {
    id: 19,
    question: "How does leuprorelin (a GnRH agonist) primarily influence the secretion of gonadotropins (LH and FSH)?",
    answer: "B) Inhibition of gonadotropin release",
    options: [
      "A) Stimulation of gonadotropin release",
      "B) Inhibition of gonadotropin release",
      "C) Stimulation of estrogen production",
      "D) Inhibition of progesterone production",
      "E) Stimulation of testosterone production"
    ]
  },
  {
    id: 20,
    question: "Which mechanism of action best characterizes the effect of levothyroxine on the thyroid gland?",
    answer: "A) Stimulation of thyroid hormone synthesis",
    options: [
      "A) Stimulation of thyroid hormone synthesis",
      "B) Inhibition of thyroid hormone synthesis",
      "C) Stimulation of thyroid hormone receptor",
      "D) Inhibition of thyroid hormone receptor",
      "E) Inhibition of thyroid peroxidase"
    ]
  },
  {
    id: 21,
    question: "How do glucocorticoids, like prednisolone, primarily exert their anti-inflammatory effects?",
    answer: "C) Inhibition of prostaglandin synthesis",
    options: [
      "A) Stimulation of immune cell proliferation",
      "B) Inhibition of leukotriene synthesis",
      "C) Inhibition of prostaglandin synthesis",
      "D) Stimulation of histamine release",
      "E) Activation of cyclooxygenase-1 (COX-1)"
    ]
  },
  {
    id: 22,
    question: "What is the primary mechanism of action of desmopressin in the treatment of nocturnal enuresis (bedwetting)?",
    answer: "A) Stimulation of ADH receptor",
    options: [
      "A) Stimulation of ADH receptor",
      "B) Inhibition of ADH secretion",
      "C) Stimulation of aldosterone secretion",
      "D) Inhibition of vasopressin receptor",
      "E) Stimulation of insulin secretion"
    ]
  },
  {
    id: 23,
    question: "How do selective estrogen receptor modulators (SERMs) like tamoxifen primarily affect estrogen signaling?",
    answer: "B) Activation of estrogen receptor",
    options: [
      "A) Inhibition of estrogen receptor",
      "B) Activation of estrogen receptor",
      "C) Inhibition of estrogen synthesis",
      "D) Activation of progesterone receptor",
      "E) Inhibition of LH secretion"
    ]
  },
  {
    id: 24,
    question: "Which mechanism of action best describes how alendronate reduces the risk of osteoporotic fractures?",
    answer: "B) Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of parathyroid hormone release",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 25,
    question: "How does metformin primarily affect glucose metabolism in patients with type 2 diabetes?",
    answer: "C) Inhibition of hepatic glucose production",
    options: [
      "A) Stimulation of insulin secretion",
      "B) Inhibition of glucose absorption",
      "C) Inhibition of hepatic glucose production",
      "D) Activation of glucagon receptors",
      "E) Stimulation of glycolysis"
    ]
  },
  {
    id: 26,
    question: "What is the primary mechanism of action of recombinant human insulin, such as insulin lispro?",
    answer: "A) Stimulation of insulin receptor",
    options: [
      "A) Stimulation of insulin receptor",
      "B) Inhibition of insulin receptor",
      "C) Stimulation of glucagon receptor",
      "D) Inhibition of glucose absorption",
      "E) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)"
    ]
  },
  {
    id: 27,
    question: "How do thiazolidinediones (e.g., pioglitazone) primarily improve insulin sensitivity in diabetes?",
    answer: "C) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
    options: [
      "A) Inhibition of insulin receptor",
      "B) Inhibition of glucose absorption",
      "C) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
      "D) Stimulation of glucagon secretion",
      "E) Stimulation of glycolysis"
    ]
  },
  {
    id: 28,
    question: "Which of the following best describes the mechanism of action of somatropin (recombinant human growth hormone)?",
    answer: "B) Stimulation of growth hormone receptor",
    options: [
      "A) Inhibition of growth hormone receptor",
      "B) Stimulation of growth hormone receptor",
      "C) Inhibition of insulin receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 29,
    question: "How does propylthiouracil (PTU) primarily reduce thyroid hormone levels in hyperthyroidism?",
    answer: "B) Inhibition of thyroid hormone synthesis",
    options: [
      "A) Stimulation of thyroid hormone synthesis",
      "B) Inhibition of thyroid hormone synthesis",
      "C) Inhibition of thyroid hormone receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Inhibition of iodine uptake"
    ]
  },
  {
    id: 30,
    question: "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
    answer: "B) Stimulation of bone formation",
    options: [
      "A) Inhibition of bone resorption",
      "B) Stimulation of bone formation",
      "C) Inhibition of vitamin D synthesis",
      "D) Activation of calcitonin receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 31,
    question: "How do aromatase inhibitors, like anastrozole, primarily affect estrogen levels in breast cancer treatment?",
    answer: "Activation of estrogen receptor",
    options: [
      "A) Inhibition of estrogen receptor",
      "B) Activation of estrogen receptor",
      "C) Inhibition of estrogen synthesis",
      "D) Activation of progesterone receptor",
      "E) Inhibition of LH secretion"
    ]
  },
  {
    id: 32,
    question: "Which mechanism of action best characterizes the effect of prednisolone in the treatment of autoimmune diseases?",
    answer: "Inhibition of prostaglandin synthesis",
    options: [
      "A) Stimulation of immune cell proliferation",
      "B) Inhibition of leukotriene synthesis",
      "C) Inhibition of prostaglandin synthesis",
      "D) Activation of histamine release",
      "E) Activation of cyclooxygenase-1 (COX-1)"
    ]
  },
  {
    id: 33,
    question: "What is the primary mechanism of action of exenatide in the management of type 2 diabetes?",
    answer: "Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucagon receptor",
      "B) Inhibition of DPP-4 enzyme",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of insulin receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 34,
    question: "How does metyrapone primarily influence cortisol levels in patients with Cushing's syndrome?",
    answer: "Inhibition of cortisol synthesis",
    options: [
      "A) Stimulation of cortisol synthesis",
      "B) Inhibition of cortisol synthesis",
      "C) Stimulation of aldosterone synthesis",
      "D) Activation of cortisol receptor",
      "E) Activation of thyroid hormone receptor"
    ]
  },
  {
    id: 35,
    question: "Which of the following best describes the mechanism of action of leuprorelin in the treatment of prostate cancer?",
    answer: "Inhibition of gonadotropin release",
    options: [
      "A) Stimulation of gonadotropin release",
      "B) Inhibition of gonadotropin release",
      "C) Stimulation of estrogen production",
      "D) Inhibition of progesterone production",
      "E) Stimulation of testosterone production"
    ]
  },
  {
    id: 36,
    question: "What is the primary mechanism of action of levothyroxine in the treatment of hypothyroidism?",
    answer: "Activation of thyroid hormone receptors",
    options: [
      "A) Inhibition of thyroid peroxidase enzyme",
      "B) Activation of thyroid hormone receptors",
      "C) Inhibition of thyroid hormone synthesis",
      "D) Stimulation of TSH secretion",
      "E) Inhibition of iodine uptake"
    ]
  },
  {
    id: 37,
    question: "How do glucocorticoids, such as prednisolone, primarily influence inflammation and immune responses?",
    answer: "Inhibition of cytokine production",
    options: [
      "A) Activation of leukotriene synthesis",
      "B) Inhibition of cytokine production",
      "C) Stimulation of prostaglandin synthesis",
      "D) Inhibition of histamine release",
      "E) Activation of mast cells"
    ]
  },
  {
    id: 38,
    question: "What is the primary mechanism of action of desmopressin (DDAVP) in the treatment of diabetes insipidus?",
    answer: "Inhibition of ADH receptor",
    options: [
      "A) Stimulation of insulin secretion",
      "B) Inhibition of ADH receptor",
      "C) Stimulation of aldosterone secretion",
      "D) Inhibition of vasopressin receptor",
      "E) Activation of thyroid hormone receptors"
    ]
  },
  {
    id: 39,
    question: "How do somatostatin analogs like octreotide primarily affect hormone secretion in acromegaly and neuroendocrine tumors?",
    answer: "Inhibition of growth hormone secretion",
    options: [
      "A) Stimulation of growth hormone secretion",+
      "B) Inhibition of insulin secretion",
      "C) Inhibition of glucagon secretion",
      "D) Inhibition of growth hormone secretion",
      "E) Activation of insulin receptors"
    ]
  },
  {
    id: 40,
    question: "What is the primary mechanism of action of glucagon-like peptide-1 (GLP-1) agonists like exenatide in the treatment of type 2 diabetes?",
    answer: "Activation of GLP-1 receptors",
    options: [
      "A) Inhibition of glucagon receptor",
      "B) Inhibition of DPP-4 enzyme",
      "C) Stimulation of insulin secretion",
      "D) Activation of GLP-1 receptors",
      "E) Inhibition of glucose absorption"
    ]
  },
  {
    id: 41,
    question: "How do thiazolidinediones (e.g., pioglitazone) primarily improve insulin sensitivity in type 2 diabetes?",
    answer: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
    options: [
      "A) Inhibition of insulin receptor",
      "B) Inhibition of glucose absorption",
      "C) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
      "D) Stimulation of glucagon secretion",
      "E) Activation of glycolysis"
    ]
  },
  {
    id: 42,
    question: "What is the primary mechanism of action of propylthiouracil (PTU) in the treatment of hyperthyroidism?",
    answer: "Inhibition of thyroid hormone synthesis",
    options: [
      "A) Stimulation of thyroid hormone synthesis",
      "B) Inhibition of thyroid hormone synthesis",
      "C) Inhibition of thyroid hormone receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Inhibition of iodine uptake"
    ]
  },
  {
    id: 43,
    question: "How does calcitonin primarily affect bone metabolism and calcium homeostasis?",
    answer: "Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of parathyroid hormone release",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 44,
    question: "What is the primary mechanism of action of sulfonylureas (e.g., glibenclamide) in the treatment of type 2 diabetes?",
    answer: "Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucose absorption",
      "B) Inhibition of glucagon secretion",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of insulin receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 45,
    question: "How do alpha-glucosidase inhibitors like acarbose primarily affect postprandial blood glucose levels in diabetes management?",
    answer: "Inhibition of glucose absorption",
    options: [
      "A) Activation of insulin receptors",
      "B) Inhibition of glucose absorption",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of glucagon receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 46,
    question: "What is the primary mechanism of action of somatropin (recombinant human growth hormone) in growth hormone deficiency?",
    answer: "Stimulation of growth hormone receptor",
    options: [
      "A) Inhibition of growth hormone receptor",
      "B) Stimulation of growth hormone receptor",
      "C) Inhibition of insulin receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 47,
    question: "How does metyrapone primarily affect cortisol levels in the treatment of Cushing's syndrome?",
    answer: "Inhibition of cortisol synthesis",
    options: [
      "A) Stimulation of cortisol synthesis",
      "B) Inhibition of cortisol synthesis",
      "C) Stimulation of aldosterone synthesis",
      "D) Activation of cortisol receptor",
      "E) Activation of thyroid hormone receptor"
    ]
  },
  {
    id: 48,
    question: "What is the primary mechanism of action of leuprorelin (a GnRH agonist) in the treatment of hormone-sensitive prostate cancer?",
    answer: "Inhibition of gonadotropin release",
    options: [
      "A) Stimulation of gonadotropin release",
      "B) Inhibition of gonadotropin release",
      "C) Stimulation of estrogen production",
      "D) Inhibition of progesterone production",
      "E) Stimulation of testosterone production"
    ]
  },
  {
    id: 49,
    question: "How do bisphosphonates like alendronate primarily reduce the risk of osteoporotic fractures?",
    answer: "Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of calcium absorption",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 50,
    question: "What is the primary mechanism of action of recombinant insulin lispro in the management of diabetes mellitus?",
    answer: "Stimulation of insulin receptor",
    options: [
      "A) Stimulation of insulin receptor",
      "B) Inhibition of insulin receptor",
      "C) Stimulation of glucagon receptor",
      "D) Inhibition of glucose absorption",
      "E) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)"
    ]
  },
  {
    id: 51,
    question: "How does prednisolone primarily exert its anti-inflammatory effects in the treatment of autoimmune diseases?",
    answer: "Inhibition of prostaglandin synthesis",
    options: [
      "A) Stimulation of immune cell proliferation",
      "B) Inhibition of leukotriene synthesis",
      "C) Inhibition of prostaglandin synthesis",
      "D) Activation of histamine release",
      "E) Activation of cyclooxygenase-1 (COX-1)"
    ]
  },
  {
    id: 52,
    question: "What is the primary mechanism of action of exenatide in the management of type 2 diabetes?",
    answer: "Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucagon receptor",
      "B) Inhibition of DPP-4 enzyme",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of insulin receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 53,
    question: "How does metyrosine primarily influence catecholamine levels in the treatment of pheochromocytoma?",
    answer: "Inhibition of catecholamine synthesis",
    options: [
      "A) Stimulation of catecholamine synthesis",
      "B) Inhibition of catecholamine synthesis",
      "C) Stimulation of catecholamine release",
      "D) Inhibition of catecholamine receptors",
      "E) Stimulation of thyroid hormone synthesis"
    ]
  },
  {
    id: 54,
    question: "What is the primary mechanism of action of insulin in the management of diabetes mellitus?",
    answer: "Stimulation of insulin receptor",
    options: [
      "A) Stimulation of insulin receptor",
      "B) Inhibition of insulin receptor",
      "C) Stimulation of glucagon receptor",
      "D) Inhibition of glucose absorption",
      "E) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)"
    ]
  },
  {
    id: 55,
    question: "How do thiazide diuretics like hydrochlorothiazide primarily reduce blood pressure in hypertension treatment?",
    answer: "Inhibition of sodium reabsorption in the kidneys",
    options: [
      "A) Stimulation of sodium reabsorption in the kidneys",
      "B) Inhibition of potassium secretion",
      "C) Inhibition of calcium absorption",
      "D) Stimulation of aldosterone production",
      "E) Inhibition of sodium reabsorption in the kidneys"
    ]
  },
  {
    id: 56,
    question: "What is the primary mechanism of action of methimazole in the treatment of hyperthyroidism?",
    answer: "Inhibition of thyroid hormone synthesis",
    options: [
      "A) Stimulation of thyroid hormone synthesis",
      "B) Inhibition of thyroid hormone synthesis",
      "C) Inhibition of thyroid hormone receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Inhibition of iodine uptake"
    ]
  },
  {
    id: 57,
    question: "How does calcitonin primarily affect bone metabolism and calcium homeostasis?",
    answer: "Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of parathyroid hormone release",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 58,
    question: "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
    answer: "Stimulation of bone formation",
    options: [
      "A) Inhibition of bone resorption",
      "B) Stimulation of bone formation",
      "C) Inhibition of vitamin D synthesis",
      "D) Activation of calcitonin receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 59,
    question: "How do angiotensin II receptor blockers (ARBs) like losartan primarily lower blood pressure in hypertensive patients?",
    answer: "Inhibition of angiotensin II receptors",
    options: [
      "A) Inhibition of angiotensin I production",
      "B) Activation of ACE enzyme",
      "C) Stimulation of aldosterone receptors",
      "D) Inhibition of angiotensin II receptors",
      "E) Activation of beta-adrenergic receptors"
    ]
  },
  {
    id: 60,
    question: "What is the primary mechanism of action of recombinant human growth hormone (somatropin) in the treatment of growth hormone deficiency?",
    answer: "Stimulation of growth hormone receptor",
    options: [
      "A) Inhibition of growth hormone receptor",
      "B) Stimulation of growth hormone receptor",
      "C) Inhibition of insulin receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 61,
    question: "How does metyrapone primarily affect cortisol levels in the treatment of Cushing's syndrome?",
    answer: "Inhibition of cortisol synthesis",
    options: [
      "A) Stimulation of cortisol synthesis",
      "B) Inhibition of cortisol synthesis",
      "C) Stimulation of aldosterone synthesis",
      "D) Activation of cortisol receptor",
      "E) Activation of thyroid hormone receptor"
    ]
  },
  {
    id: 62,
    question: "What is the primary mechanism of action of leuprorelin (a GnRH agonist) in the treatment of hormone-sensitive prostate cancer?",
    answer: "Inhibition of gonadotropin release",
    options: [
      "A) Stimulation of gonadotropin release",
      "B) Inhibition of gonadotropin release",
      "C) Stimulation of estrogen production",
      "D) Inhibition of progesterone production",
      "E) Stimulation of testosterone production"
    ]
  },
  {
    id: 63,
    question: "How do bisphosphonates like alendronate primarily reduce the risk of osteoporotic fractures?",
    answer: "Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Stimulation of calcium absorption",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of vitamin D synthesis"
    ]
  },
  {
    id: 64,
    question: "What is the primary mechanism of action of recombinant insulin lispro in the management of diabetes mellitus?",
    answer: "Stimulation of insulin receptor",
    options: [
      "A) Stimulation of insulin receptor",
      "B) Inhibition of insulin receptor",
      "C) Stimulation of glucagon receptor",
      "D) Inhibition of glucose absorption",
      "E) Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)"
    ]
  },
  {
    id: 65,
    question: "How do dopamine agonists like bromocriptine primarily influence prolactin levels in the treatment of hyperprolactinemia?",
    answer: "Stimulation of dopamine receptor",
    options: [
      "A) Stimulation of prolactin synthesis",
      "B) Inhibition of dopamine receptor",
      "C) Stimulation of dopamine receptor",
      "D) Inhibition of dopamine synthesis",
      "E) Stimulation of thyroid hormone synthesis"
    ]
  },
  {
    id: 66,
    question: "What is the primary mechanism of action of aromatase inhibitors like anastrozole in the treatment of breast cancer?",
    answer: "Inhibition of estrogen synthesis",
    options: [
      "A) Inhibition of estrogen receptor",
      "B) Activation of estrogen receptor",
      "C) Inhibition of estrogen synthesis",
      "D) Activation of progesterone receptor",
      "E) Inhibition of LH secretion"
    ]
  },
  {
    id: 67,
    question: "What is the primary mechanism of action of metformin in the management of type 2 diabetes?",
    answer: "Inhibition of hepatic glucose production",
    options: [
      "A) Inhibition of glucose absorption",
      "B) Activation of insulin receptors",
      "C) Inhibition of hepatic glucose production",
      "D) Stimulation of glucagon secretion",
      "E) Activation of glycolysis"
    ]
  },
  {
    id: 68,
    question: "How do angiotensin-converting enzyme (ACE) inhibitors like enalapril primarily reduce blood pressure in hypertension management?",
    answer: "Inhibition of ACE enzyme",
    options: [
      "A) Inhibition of angiotensin II receptor",
      "B) Inhibition of ACE enzyme",
      "C) Stimulation of aldosterone receptors",
      "D) Inhibition of angiotensin I production",
      "E) Activation of beta-adrenergic receptors"
    ]
  },
  {
    id: 69,
    question: "What is the primary mechanism of action of liraglutide (a GLP-1 agonist) in the treatment of type 2 diabetes?",
    answer: "Stimulation of insulin secretion",
    options: [
      "A) Inhibition of glucagon receptor",
      "B) Inhibition of DPP-4 enzyme",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of insulin receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 70,
    question: "How does cabergoline primarily influence prolactin levels in the treatment of hyperprolactinemia?",
    answer: "Stimulation of dopamine receptor",
    options: [
      "A) Stimulation of prolactin synthesis",
      "B) Inhibition of dopamine receptor",
      "C) Stimulation of dopamine receptor",
      "D) Inhibition of dopamine synthesis",
      "E) Stimulation of thyroid hormone synthesis"
    ]
  },
  {
    id: 71,
    question: "What is the primary mechanism of action of pioglitazone (a thiazolidinedione) in the management of type 2 diabetes?",
    answer: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
    options: [
      "A) Inhibition of glucose absorption",
      "B) Inhibition of glucagon secretion",
      "C) Activation of PPAR-gamma",
      "D) Stimulation of insulin receptor",
      "E) Activation of glycolysis"
    ]
  },
  {
    id: 72,
    question: "How do anticoagulants like warfarin primarily reduce the risk of blood clot formation?",
    answer: "Inhibition of vitamin K-dependent clotting factors",
    options: [
      "A) Inhibition of platelet activation",
      "B) Activation of fibrinolysis",
      "C) Inhibition of vitamin K-dependent clotting factors",
      "D) Stimulation of platelet aggregation",
      "E) Activation of endothelial cells"
    ]
  },
  {
    id: 73,
    question: "What is the primary mechanism of action of recombinant human erythropoietin (epoetin alfa) in the treatment of anemia?",
    answer: "Stimulation of red blood cell production",
    options: [
      "A) Inhibition of red blood cell destruction",
      "B) Stimulation of red blood cell production",
      "C) Inhibition of iron absorption",
      "D) Activation of leukocytes",
      "E) Inhibition of platelet aggregation"
    ]
  },
  {
    id: 74,
    question: "How does denosumab primarily reduce the risk of fractures in osteoporosis?",
    answer: "Inhibition of bone formation",
    options: [
      "A) Stimulation of bone resorption",
      "B) Inhibition of bone formation",
      "C) Activation of vitamin D synthesis",
      "D) Inhibition of bone mineralization",
      "E) Stimulation of calcium absorption"
    ]
  },
  {
    id: 75,
    question: "What is the primary mechanism of action of anastrozole (an aromatase inhibitor) in the treatment of breast cancer?",
    answer: "Inhibition of estrogen synthesis",
    options: [
      "A) Inhibition of estrogen receptor",
      "B) Activation of estrogen receptor",
      "C) Inhibition of estrogen synthesis",
      "D) Activation of progesterone receptor",
      "E) Inhibition of LH secretion"
    ]
  },
  {
    id: 76,
    question: "How does desmopressin (DDAVP) primarily affect urine volume and concentration in the treatment of diabetes insipidus?",
    answer: "Inhibition of vasopressin receptor",
    options: [
      "A) Stimulation of urine production",
      "B) Inhibition of ADH receptor",
      "C) Stimulation of aldosterone secretion",
      "D) Inhibition of vasopressin receptor",
      "E) Activation of thyroid hormone receptors"
    ]
  },
  {
    id: 77,
    question: "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
    answer: "Stimulation of bone formation",
    options: [
      "A) Inhibition of bone resorption",
      "B) Stimulation of bone formation",
      "C) Inhibition of vitamin D synthesis",
      "D) Activation of calcitonin receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 78,
    question: "How do alpha-glucosidase inhibitors like acarbose primarily affect postprandial blood glucose levels in diabetes management?",
    answer: "Inhibition of glucose absorption",
    options: [
      "A) Activation of insulin receptors",
      "B) Inhibition of glucose absorption",
      "C) Stimulation of insulin secretion",
      "D) Inhibition of glucagon receptor",
      "E) Activation of AMP-activated protein kinase (AMPK)"
    ]
  },
  {
    id: 79,
    question: "What is the primary mechanism of action of recombinant human growth hormone (somatropin) in the treatment of growth hormone deficiency?",
    answer: "Stimulation of growth hormone receptor",
    options: [
      "A) Inhibition of growth hormone receptor",
      "B) Stimulation of growth hormone receptor",
      "C) Inhibition of insulin receptor",
      "D) Activation of thyroid hormone receptor",
      "E) Stimulation of aldosterone secretion"
    ]
  },
  {
    id: 80,
    question: "A 55-year-old patient with type 2 diabetes is taking metformin for glycemic control. The physician prescribes gemfibrozil for hyperlipidemia. What is the most likely drug interaction between metformin and gemfibrozil?",
    answer: "Increased risk of lactic acidosis",
    options: [
      "A) Increased risk of hypoglycemia",
      "B) Decreased effectiveness of metformin",
      "C) Increased risk of lactic acidosis",
      "D) Increased risk of hyperglycemia",
      "E) Decreased gemfibrozil absorption"
    ]
  },
  {
    id: 81,
    question: "A 45-year-old patient with hypertension is prescribed lisinopril for blood pressure control. The patient is also taking allopurinol for gout. What is the potential drug interaction between lisinopril and allopurinol?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "A) Increased risk of angioedema",
      "B) Decreased blood pressure control",
      "C) Increased risk of hyperkalemia",
      "D) Increased risk of gout flare-ups",
      "E) Decreased allopurinol effectiveness"
    ]
  },
  {
    id: 82,
    question: "A 60-year-old patient with hypothyroidism takes levothyroxine daily. The patient develops constipation and is started on calcium carbonate for calcium supplementation. What is the potential drug interaction between levothyroxine and calcium carbonate?",
    answer: "Decreased levothyroxine absorption",
    options: [
      "A) Decreased levothyroxine absorption",
      "B) Increased risk of thyroid storm",
      "C) Decreased calcium absorption",
      "D) Increased risk of constipation",
      "E) Decreased calcium carbonate effectiveness"
    ]
  },
  {
    id: 83,
    question: "A 50-year-old patient with type 2 diabetes is on insulin therapy. The patient develops an infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "A) Increased risk of hypoglycemia",
      "B) Decreased antibiotic effectiveness",
      "C) Increased insulin resistance",
      "D) Increased risk of hyperglycemia",
      "E) Decreased ciprofloxacin absorption"
    ]
  },
  {
    id: 84,
    question: "A 35-year-old patient with hyperthyroidism takes methimazole to manage the condition. The patient develops a skin infection and is prescribed warfarin for anticoagulation. What is the potential drug interaction between methimazole and warfarin?",
    answer: "Increased risk of bleeding",
    options: [
      "A) Decreased warfarin effectiveness",
      "B) Increased risk of bleeding",
      "C) Increased warfarin metabolism",
      "D) Decreased anticoagulant effect of methimazole",
      "E) Decreased methimazole absorption"
    ]
  },
  {
    id: 85,
    question: "A 55-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient develops a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between spironolactone and trimethoprim-sulfamethoxazole?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "A) Increased risk of hyperkalemia",
      "B) Decreased antibiotic effectiveness",
      "C) Increased risk of fluid retention",
      "D) Decreased urinary tract infection symptoms",
      "E) Decreased spironolactone absorption"
    ]
  },
  {
    id: 86,
    question: "A 40-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient develops a respiratory infection and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased azithromycin absorption"
    ]
  },
  {
    id: 87,
    question: "A 45-year-old patient with hypothyroidism takes levothyroxine daily. The patient starts a new medication for seizures, phenytoin. What is the potential drug interaction between levothyroxine and phenytoin?",
    answer: "A",
    options: [
      "Increased risk of hypothyroidism",
      "Decreased phenytoin effectiveness",
      "Increased risk of thyroid storm",
      "Increased risk of seizures",
      "Decreased levothyroxine absorption"
    ]
  },
  {
    id: 88,
    question: "A 60-year-old patient with hypertension takes lisinopril and hydrochlorothiazide. The patient is prescribed ibuprofen for pain relief. What is the potential drug interaction between lisinopril/hydrochlorothiazide and ibuprofen?",
    answer: "A",
    options: [
      "Increased risk of angioedema",
      "Decreased blood pressure control",
      "Increased risk of hyperkalemia",
      "Decreased pain relief",
      "Decreased absorption of lisinopril/hydrochlorothiazide"
    ]
  },
  {
    id: 89,
    question: "A 65-year-old patient with hypertension is on amlodipine therapy. The patient is diagnosed with primary hyperaldosteronism and is started on spironolactone. What is the potential drug interaction between amlodipine and spironolactone?",
    answer: "A",
    options: [
      "Increased risk of hypokalemia",
      "Decreased antihypertensive effectiveness",
      "Increased risk of hypotension",
      "Increased risk of hyperkalemia",
      "Decreased spironolactone absorption"
    ]
  },
  {
    id: 90,
    question: "A 50-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a respiratory infection and is prescribed clarithromycin. What is the potential drug interaction between metformin and clarithromycin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased metformin absorption",
      "Increased risk of diarrhea",
      "Decreased clarithromycin absorption"
    ]
  },
  {
    id: 91,
    question: "A 55-year-old patient with hypothyroidism takes levothyroxine daily. The patient is diagnosed with iron-deficiency anemia and is prescribed ferrous sulfate. What is the potential drug interaction between levothyroxine and ferrous sulfate?",
    answer: "A",
    options: [
      "Decreased levothyroxine absorption",
      "Decreased effectiveness of ferrous sulfate",
      "Decreased iron absorption",
      "Increased risk of thyroid storm",
      "Decreased ferrous sulfate absorption"
    ]
  },
  {
    id: 92,
    question: "A 60-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with a urinary tract infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased ciprofloxacin absorption"
    ]
  },
  {
    id: 93,
    question: "A 45-year-old patient with hyperthyroidism takes methimazole for disease management. The patient develops a skin infection and is prescribed amoxicillin. What is the potential drug interaction between methimazole and amoxicillin?",
    answer: "B",
    options: [
      "Decreased amoxicillin effectiveness",
      "Increased risk of bleeding",
      "Increased risk of thyroid storm",
      "Decreased antithyroid effect of methimazole",
      "Decreased amoxicillin absorption"
    ]
  },
  {
    id: 94,
    question: "A 70-year-old patient with type 2 diabetes is taking glipizide for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between glipizide and trimethoprim-sulfamethoxazole?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased risk of thrombocytopenia",
      "Decreased urinary tract infection symptoms",
      "Decreased glipizide absorption"
    ]
  },
  {
    id: 95,
    question: "A 50-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a sinus infection and is prescribed clarithromycin. What is the potential drug interaction between insulin and clarithromycin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased clarithromycin absorption"
    ]
  },
  {
    id: 96,
    question: "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with an infection and is prescribed doxycycline. What is the potential drug interaction between spironolactone and doxycycline?",
    answer: "A",
    options: [
      "Increased risk of hyperkalemia",
      "Decreased antibiotic effectiveness",
      "Increased risk of fluid retention",
      "Decreased urinary tract infection symptoms",
      "Decreased spironolactone absorption"
    ]
  },
  {
    id: 97,
    question: "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased azithromycin absorption"
    ]
  },
  {
    id: 98,
    question: "A 55-year-old patient with hypertension takes metoprolol for blood pressure control. The patient is prescribed fluoxetine for depression. What is the potential drug interaction between metoprolol and fluoxetine?",
    answer: "A",
    options: [
      "Increased risk of hypotension",
      "Decreased metoprolol effectiveness",
      "Increased risk of bradycardia",
      "Decreased fluoxetine absorption",
      "Increased risk of serotonin syndrome"
    ]
  },
  {
    id: 99,
    question: "A 45-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a urinary tract infection and is prescribed ciprofloxacin. What is the potential drug interaction between metformin and ciprofloxacin?",
    answer: "A",
    options: [
      "Increased risk of hypoglycemia",
      "Decreased antibiotic effectiveness",
      "Increased metformin absorption",
      "Increased risk of diarrhea",
      "Decreased ciprofloxacin absorption"
    ]
  },
  {
    id: 100,
    question: "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with gastroesophageal reflux disease (GERD) and is prescribed omeprazole. What is the potential drug interaction between levothyroxine and omeprazole?",
    answer: "Decreased levothyroxine absorption",
    options: [
      "Decreased effectiveness of omeprazole",
      "Decreased omeprazole absorption",
      "Increased risk of thyroid storm",
      "Decreased GERD symptoms"
    ]
  },
  {
    id: 101,
    question: "A 35-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a skin infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased ciprofloxacin absorption"
    ]
  },
  {
    id: 102,
    question: "A 55-year-old patient with hypertension is on lisinopril therapy. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
    answer: "Increased risk of angioedema",
    options: [
      "Decreased antihypertensive effectiveness",
      "Increased risk of hyperkalemia",
      "Increased risk of gout flare-ups",
      "Decreased allopurinol absorption"
    ]
  },
  {
    id: 103,
    question: "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a urinary tract infection and is prescribed nitrofurantoin. What is the potential drug interaction between spironolactone and nitrofurantoin?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased risk of fluid retention",
      "Decreased urinary tract infection symptoms",
      "Decreased spironolactone absorption"
    ]
  },
  {
    id: 104,
    question: "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased azithromycin absorption"
    ]
  },
  {
    id: 105,
    question: "A 50-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed amoxicillin. What is the potential drug interaction between spironolactone and amoxicillin?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased risk of fluid retention",
      "Decreased skin infection symptoms",
      "Decreased amoxicillin absorption"
    ]
  },
  {
    id: 106,
    question: "A 55-year-old patient with type 2 diabetes is taking glimepiride for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed cephalexin. What is the potential drug interaction between glimepiride and cephalexin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased risk of thrombocytopenia",
      "Decreased urinary tract infection symptoms",
      "Decreased glimepiride absorption"
    ]
  },
  {
    id: 107,
    question: "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with Helicobacter pylori infection and is prescribed omeprazole, clarithromycin, and amoxicillin. What is the potential drug interaction between levothyroxine and this antibiotic regimen?",
    answer: "Decreased levothyroxine absorption",
    options: [
      "Decreased effectiveness of omeprazole",
      "Decreased omeprazole absorption",
      "Increased risk of thyroid storm",
      "Decreased amoxicillin absorption"
    ]
  },
  {
    id: 108,
    question: "A 35-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a sinus infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased ciprofloxacin absorption"
    ]
  },
  {
    id: 109,
    question: "A 55-year-old patient with hypertension takes lisinopril for blood pressure control. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
    answer: "Increased risk of angioedema",
    options: [
      "Decreased antihypertensive effectiveness",
      "Increased risk of hyperkalemia",
      "Increased risk of gout flare-ups",
      "Decreased allopurinol absorption"
    ]
  },
  {
    id: 110,
    question: "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a urinary tract infection and is prescribed nitrofurantoin. What is the potential drug interaction between spironolactone and nitrofurantoin?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased risk of fluid retention",
      "Decreased urinary tract infection symptoms",
      "Decreased spironolactone absorption"
    ]
  },
  {
    id: 111,
    question: "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
    answer: "Increased risk of hypoglycemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased insulin resistance",
      "Increased risk of hyperglycemia",
      "Decreased azithromycin absorption"
    ]
  },
  {
    id: 112,
    question: "A 50-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed amoxicillin. What is the potential drug interaction between spironolactone and amoxicillin?",
    answer: "Increased risk of hyperkalemia",
    options: [
      "Decreased antibiotic effectiveness",
      "Increased risk of fluid retention",
      "Decreased skin infection symptoms",
      "Decreased amoxicillin absorption"
    ]
  },
  {
    id: 113,
    question: "Which of the following adverse effects is most commonly associated with long-term use of metformin in diabetic patients?",
    answer: "Gastrointestinal disturbances",
    options: [
      "Hypertension",
      "Hypoglycemia",
      "Peripheral neuropathy",
      "Weight gain"
    ]
  },
  {
    id: 114,
    question: "A patient on long-term glucocorticoid therapy is at risk of developing which adverse effect primarily associated with these drugs?",
    answer: "Osteoporosis",
    options: [
      "Thrombocytopenia",
      "Hyperthyroidism",
      "Cardiac arrhythmias",
      "Allergic reactions"
    ]
  },
  {
    id: 115,
    question: "Which of the following is a potential side effect of thyroxine (levothyroxin replacement therapy for hypothyroidism?",
    answer: "Bradycardia",
    options: [
      "Hypertension",
      "Hypoglycemia",
      "Weight loss",
      "Peripheral neuropathy"
    ]
  },
  {
    id: 116,
    question: "In patients taking somatostatin analogs like octreotide for acromegaly, which adverse effect should be closely monitored?",
    answer: "Hyperglycemia",
    options: [
      "Hyperkalemia",
      "Hypotension",
      "Hypercalcemia",
      "Peripheral edema"
    ]
  },
  {
    id: 117,
    question: "Which of the following is a potential side effect of long-term use of thiazolidinediones (e.g., pioglitazone in diabetes management?",
    answer: "Fluid retention",
    options: [
      "Hypoglycemia",
      "Weight loss",
      "Fluid retention",
      "Hyperkalemia",
      "Insomnia"
    ]
  },
  {
    id: 118,
    question: "Patients taking propylthiouracil or methimazole for hyperthyroidism should be educated about the risk of which severe adverse effect?",
    answer: "Agranulocytosis",
    options: [
      "Nephrotoxicity",
      "Pancreatitis",
      "Agranulocytosis",
      "Peripheral neuropathy",
      "Hepatitis"
    ]
  },
  {
    id: 119,
    question: "Which of the following side effects is associated with the use of exenatide, a glucagon-like peptide-1 receptor agonist, for diabetes management?",
    answer: "Pancreatitis",
    options: [
      "Hypotension",
      "Hypercholesterolemia",
      "Pancreatitis",
      "Hypoglycemia",
      "Osteoporosis"
    ]
  },
  {
    id: 120,
    question: "A patient on long-term treatment with insulin may develop lipodystrophy, which is characterized by which of the following?",
    answer: "Injection site fat loss or hypertrophy",
    options: [
      "Hypoglycemia",
      "Insomnia",
      "Injection site fat loss or hypertrophy",
      "Hypercholesterolemia",
      "Diarrhea"
    ]
  },
  {
    id: 121,
    question: "Which of the following is a common adverse effect of long-term therapy with bisphosphonates such as alendronate for osteoporosis?",
    answer: "Esophagitis",
    options: [
      "Hypocalcemia",
      "Hyperkalemia",
      "Renal stones",
      "Esophagitis",
      "Peripheral neuropathy"
    ]
  },
  {
    id: 122,
    question: "What adverse effect is associated with the use of leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, in the treatment of prostate cancer?",
    answer: "Gynecomastia",
    options: [
      "Gynecomastia",
      "Hyperglycemia",
      "Thrombocytopenia",
      "Hypertension",
      "Osteoporosis"
    ]
  },
  {
    id: 123,
    question: "Patients taking desmopressin (DDAVP) for diabetes insipidus should be monitored for which potential side effect?",
    answer: "Hyponatremia",
    options: [
      "Hyponatremia",
      "Hypernatremia",
      "Hyperkalemia",
      "Hypocalcemia",
      "Hypertension"
    ]
  },
  {
    id: 124,
    question: "Which adverse effect is associated with the use of anastrozole, an aromatase inhibitor, in the treatment of breast cancer?",
    answer: "Osteoporosis",
    options: [
      "Hypothyroidism",
      "Diarrhea",
      "Hot flashes",
      "Osteoporosis",
      "Peripheral neuropathy"
    ]
  },
  {
    id: 125,
    question: "What is a potential side effect of long-term use of prednisone in the management of autoimmune disorders?",
    answer: "Osteoporosis",
    options: [
      "Hypertension",
      "Weight loss",
      "Hypercalcemia",
      "Osteoporosis",
      "Insomnia"
    ]
  },
  {
    id: 126,
    question: "Which of the following side effects is associated with the use of metyrapone in the management of Cushing's syndrome?",
    answer: "Hypoglycemia",
    options: [
      "Hyperkalemia",
      "Hypoglycemia",
      "Weight gain",
      "Thrombocytopenia",
      "Diarrhea"
    ]
  },
  {
    id: 127,
    question: "Patients taking pioglitazone for diabetes should be monitored for which potential adverse effect?",
    answer: "Peripheral edema",
    options: [
      "Hyperkalemia",
      "Blurred vision",
      "Peripheral edema",
      "Hypocalcemia",
      "Insomnia"
    ]
  },
  {
    id: 128,
    question: "Which of the following is a potential side effect of long-term use of metyrapone in the management of Cushing's syndrome?",
    answer: "Hypertension",
    options: [
      "Hypokalemia",
      "Hyperglycemia",
      "Weight loss",
      "Peripheral neuropathy",
      "Hypertension"
    ]
  },
  {
    id: 129,
    question: "What is a potential side effect of long-term use of acarbose, an alpha-glucosidase inhibitor, in the management of diabetes mellitus?",
    answer: "Liver toxicity",
    options: [
      "Hypoglycemia",
      "Weight gain",
      "Liver toxicity",
      "Hypertension",
      "Pancreatitis"
    ]
  },
  {
    id: 130,
    question: "Patients on long-term thyroid hormone replacement therapy should be monitored for which potential side effect?",
    answer: "Hypercholesterolemia",
    options: [
      "Hypotension",
      "Hypercalcemia",
      "Hypercholesterolemia",
      "Hypothyroidism",
      "Hypoglycemia"
    ]
  },
  {
    id: 131,
    question: "Which of the following is a potential side effect of long-term use of pasireotide, a somatostatin analog, in the treatment of Cushing's disease?",
    answer: "Hyperglycemia",
    options: [
      "Hypotension",
      "Hypocalcemia",
      "Hyperkalemia",
      "Bradycardia",
      "Hyperglycemia"
    ]
  },
  {
    id: 132,
    question: "Patients taking cabergoline for hyperprolactinemia should be monitored for which potential adverse effect?",
    answer: "Impulse control disorders",
    options: [
      "Hypertension",
      "Impulse control disorders",
      "Hyperkalemia",
      "Hypoglycemia",
      "Peripheral neuropathy"
    ]
  },
  {
    id: 133,
    question: "Patients taking somatropin (recombinant human growth hormone) for growth hormone deficiency should be monitored for the potential development of which adverse effect?",
    answer: "Hyperglycemia",
    options: [
      "Hyperglycemia",
      "Hypertension",
      "Hypercalcemia",
      "Osteoporosis",
      "Weight gain"
    ]
  },
  {
    id: 134,
    question: "Which of the following side effects is commonly associated with the use of nateglinide, a meglitinide analog, for diabetes management?",
    answer: "Hypoglycemia",
    options: [
      "Weight loss",
      "Hypoglycemia",
      "Peripheral edema",
      "Thrombocytopenia",
      "Diarrhea"
    ]
  },
  {
    id: 135,
    question: "Patients taking exenatide for diabetes management should be aware of which potential side effect that can occur shortly after administration?",
    answer: "Pancreatitis",
    options: [
      "Hypercholesterolemia",
      "Pancreatitis",
      "Peripheral neuropathy",
      "Bradycardia",
      "Osteoporosis"
    ]
  },
  {
    id: 136,
    question: "Which of the following is a potential side effect of long-term use of tolcapone, a COMT inhibitor, in the management of Parkinson's disease?",
    answer: "Hepatotoxicity",
    options: [
      "Hypertension",
      "Weight loss",
      "Hepatotoxicity",
      "Peripheral neuropathy",
      "Hypoglycemia"
    ]
  },
  {
    id: 137,
    question: "A patient on long-term therapy with levothyroxine for hypothyroidism may experience which adverse effect if the dose is too high?",
    answer: "Tachycardia",
    options: [
      "Hyperkalemia",
      "Hypoglycemia",
      "Tachycardia",
      "Peripheral neuropathy",
      "Weight loss"
    ]
  },
  {
    id: 138,
    question: "Which adverse effect is associated with the use of pramlintide, an amylin analog, in diabetes management?",
    answer: "Hypoglycemia",
    options: [
      "Weight gain",
      "Hypoglycemia",
      "Hypertension",
      "Peripheral neuropathy",
      "Osteoporosis"
    ]
  },
  {
    id: 139,
    question: "Patients taking bromocriptine for hyperprolactinemia should be monitored for which potential side effect?",
    answer: "Impulse control disorders",
    options: [
      "Hypertension",
      "Impulse control disorders",
      "Peripheral neuropathy",
      "Hyperkalemia",
      "Osteoporosis"
    ]
  },
  {
    id: 140,
    question: "What is a potential side effect of long-term use of cinacalcet, a calcimimetic agent, in the management of secondary hyperparathyroidism in end-stage renal disease?",
    answer: "Hypercalcemia",
    options: [
      "Hypoglycemia",
      "Hypocalcemia",
      "Weight loss",
      "Bradycardia",
      "Hypercalcemia"
    ]
  },
  {
    id: 141,
    question: "Patients taking methimazole for hyperthyroidism should be monitored for which potential adverse effect, especially during the initial weeks of therapy?",
    answer: "Agranulocytosis",
    options: [
      "Agranulocytosis",
      "Hyperkalemia",
      "Weight loss",
      "Peripheral neuropathy",
      "Hepatitis"
    ]
  },
  {
    id: 142,
    question: "Which of the following is a potential side effect of long-term use of desmopressin (DDAVP) in the treatment of von Willebrand disease or nocturnal enuresis?",
    answer: "Hyponatremia",
    options: [
      "Hypernatremia",
      "Hyponatremia",
      "Hyperkalemia",
      "Hypocalcemia",
      "Hypertension"
    ]
  },
  {
    id: 143,
    question: "Patients taking sitagliptin, a dipeptidyl peptidase-4 (DPP-4) inhibitor, for diabetes management should be monitored for which potential side effect?",
    answer: "Pancreatitis",
    options: [
      "Hypoglycemia",
      "Weight gain",
      "Pancreatitis",
      "Peripheral neuropathy",
      "Osteoporosis"
    ]
  },
  {
    id: 144,
    question: "What is a potential side effect of long-term use of alendronate in the management of osteoporosis?",
    answer: "Esophagitis",
    options: [
      "Hypertension",
      "Hyperkalemia",
      "Thrombocytopenia",
      "Esophagitis",
      "Peripheral neuropathy"
    ]
  },
  {
    id: 145,
    question: "Patients taking pegvisomant, a growth hormone receptor antagonist, for acromegaly should be monitored for which potential adverse effect?",
    answer: "Hepatotoxicity",
    options: [
      "Hyperkalemia",
      "Hypoglycemia",
      "Hepatotoxicity",
      "Peripheral neuropathy",
      "Weight loss"
    ]
  },
  {
    id: 146,
    question: "Which of the following is a potential side effect of long-term use of glipizide, a sulfonylurea, in diabetes management?",
    answer: "Hypoglycemia",
    options: [
      "Weight loss",
      "Hypoglycemia",
      "Peripheral edema",
      "Thrombocytopenia",
      "Diarrhea"
    ]
  },
  {
    id: 147,
    question: "Patients taking pasireotide for acromegaly should be monitored for which potential side effect related to glucose metabolism?",
    answer: "Hyperglycemia",
    options: [
      "Hypotension",
      "Hypercalcemia",
      "Hyperkalemia",
      "Hyperglycemia",
      "Hypoglycemia"
    ]
  },
  {
    id: 148,
    question: "What adverse effect is associated with the use of lanreotide, another somatostatin analog, in the treatment of acromegaly?",
    answer: "Pancreatitis",
    options: [
      "Nephrotoxicity",
      "Pancreatitis",
      "Hypoglycemia",
      "Peripheral neuropathy",
      "Hepatitis"
    ]
  },
  {
    id: 149,
    question: "Patients taking tetracosactide (tetracosactrin) for adrenal insufficiency should be monitored for which potential side effect?",
    answer: "Hypernatremia",
    options: [
      "Hypoglycemia",
      "Hypertension",
      "Hypernatremia",
      "Peripheral neuropathy",
      "Weight gain"
    ]
  },
  {
    id: 150,
    question: "Which of the following is a potential side effect of long-term use of rosiglitazone, a thiazolidinedione, in diabetes management?",
    answer: "Fluid retention",
    options: [
      "Hypoglycemia",
      "Weight loss",
      "Fluid retention",
      "Hyperkalemia",
      "Insomnia"
    ]
  },
  {
    id: 151,
    question: "Patients taking liraglutide, a glucagon-like peptide-1 receptor agonist, for diabetes management should be monitored for which potential side effect?",
    answer: "Pancreatitis",
    options: [
      "Hypotension",
      "Hypercholesterolemia",
      "Pancreatitis",
      "Hypoglycemia",
      "Osteoporosis"
    ]
  },
  {
    id: 152,
    question: "What is a potential side effect of long-term use of cinacalcet, a calcimimetic agent, in the management of primary hyperparathyroidism?",
    answer: "Hypocalcemia",
    options: [
      "Hypoglycemia",
      "Hypocalcemia",
      "Weight loss",
      "Bradycardia",
      "Hypercalcemia"
    ]
  },
  {
    id: 153,
    question: "Which drug is commonly used to treat hyperthyroidism by inhibiting the synthesis of thyroid hormones?",
    answer: "Propylthiouracil",
    options: [
      "Levothyroxine",
      "Propylthiouracil",
      "Liraglutide",
      "Metformin",
      "Glipizide"
    ]
  },
  {
    id: 154,
    question: "Which medication is used in the management of type 2 diabetes mellitus and works by increasing insulin sensitivity in the peripheral tissues?",
    answer: "Metformin",
    options: [
      "Levothyroxine",
      "Glucagon",
      "Metformin",
      "Somatostatin",
      "Desmopressin"
    ]
  },
  {
    id: 155,
    question: "What class of medications, often used in the treatment of osteoporosis, helps increase bone density by inhibiting bone resorption?",
    answer: "Bisphosphonates",
    options: [
      "Bisphosphonates",
      "Thiazolidinediones",
      "Alpha-glucosidase inhibitors",
      "Aromatase inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 156,
    question: "Which drug is primarily used in the treatment of acromegaly by suppressing the release of growth hormone?",
    answer: "Octreotide",
    options: [
      "Cabergoline",
      "Metyrapone",
      "Octreotide",
      "Leuprolide",
      "Liraglutide"
    ]
  },
  {
    id: 157,
    question: "What is the primary mechanism of action of desmopressin (DDAVP) when used in the treatment of diabetes insipidus?",
    answer: "Antidiuretic effect on the kidneys",
    options: [
      "Stimulation of insulin release",
      "Inhibition of glucagon release",
      "Antidiuretic effect on the kidneys",
      "Inhibition of gastric acid secretion",
      "Promotion of bile flow"
    ]
  },
  {
    id: 158,
    question: "Which medication is commonly used to manage symptoms of hypothyroidism by providing exogenous thyroid hormone?",
    answer: "Levothyroxine",
    options: [
      "Methimazole",
      "Liraglutide",
      "Cinacalcet",
      "Prednisone",
      "Levothyroxine"
    ]
  },
  {
    id: 159,
    question: "Which medication is often used in the treatment of Cushing's syndrome by inhibiting adrenal steroidogenesis?",
    answer: "Metyrapone",
    options: [
      "Metyrapone",
      "Pioglitazone",
      "Exenatide",
      "Bisphosphonates",
      "Somatropin"
    ]
  },
  {
    id: 160,
    question: "What is the primary mechanism of action of sitagliptin, a medication used in the management of type 2 diabetes mellitus?",
    answer: "Inhibition of glucagon release",
    options: [
      "Enhancement of insulin secretion",
      "Inhibition of glucagon release",
      "Delayed gastric emptying",
      "Inhibition of alpha-glucosidase",
      "Enhancement of GLP-1 receptor activity"
    ]
  },
  {
    id: 161,
    question: "Which medication is commonly used to treat hyperprolactinemia and can reduce elevated prolactin levels?",
    answer: "Cabergoline",
    options: [
      "Cabergoline",
      "Glucagon",
      "Liraglutide",
      "Exenatide",
      "Pioglitazone"
    ]
  },
  {
    id: 162,
    question: "Which class of medications is commonly used to lower blood glucose levels in patients with type 2 diabetes by enhancing insulin secretion and reducing hepatic glucose production?",
    answer: "Sulfonylureas",
    options: [
      "Thiazolidinediones",
      "Bisphosphonates",
      "DPP-4 inhibitors",
      "GLP-1 receptor agonists",
      "Sulfonylureas"
    ]
  },
  {
    id: 163,
    question: "Which medication is used in the management of hypercalcemia and works by reducing calcium levels in the blood?",
    answer: "Cinacalcet",
    options: [
      "Cinacalcet decreases warfarin metabolism",
      "Octreotide inhibits warfarin absorption",
      "Metyrapone increases warfarin bioavailability",
      "Levothyroxine induces warfarin metabolism",
      "Methimazole interferes with warfarin binding sites"
    ]
  },
  {
    id: 164,
    question: "What class of medications is often used in the treatment of type 1 diabetes mellitus to lower blood glucose levels by stimulating insulin release from beta cells?",
    answer: "Insulin secretagogues",
    options: [
      "Thiazolidinediones decrease warfarin metabolism",
      "GLP-1 receptor agonists inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "DPP-4 inhibitors induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 165,
    question: "Which medication is used in the management of osteoporosis and works by inhibiting bone resorption through its effect on osteoclasts?",
    answer: "Raloxifene",
    options: [
      "Cinacalcet decreases warfarin metabolism",
      "Levothyroxine induces warfarin metabolism",
      "Pioglitazone increases warfarin bioavailability",
      "Raloxifene inhibits warfarin absorption",
      "Cabergoline interferes with warfarin binding sites"
    ]
  },
  {
    id: 166,
    question: "What is the primary mechanism of action of bromocriptine when used in the treatment of prolactin-secreting pituitary adenomas?",
    answer: "Inhibition of prolactin synthesis",
    options: [
      "Inhibition of prolactin synthesis",
      "Stimulation of growth hormone release",
      "Suppression of adrenal steroidogenesis",
      "Inhibition of gonadotropin release",
      "Stimulation of insulin release"
    ]
  },
  {
    id: 167,
    question: "Which medication is commonly used in the management of hyperthyroidism by blocking the conversion of T4 to the more active T3 hormone?",
    answer: "Propylthiouracil",
    options: [
      "Methimazole decreases warfarin metabolism",
      "Propylthiouracil inhibits warfarin absorption",
      "Liraglutide increases warfarin bioavailability",
      "Sitagliptin induces warfarin metabolism",
      "Exenatide interferes with warfarin binding sites"
    ]
  },
  {
    id: 168,
    question: "Which class of medications, often used in the treatment of type 2 diabetes mellitus, works by slowing down carbohydrate digestion and absorption in the gastrointestinal tract?",
    answer: "Alpha-glucosidase inhibitors",
    options: [
      "DPP-4 inhibitors decrease warfarin metabolism",
      "GLP-1 receptor agonists inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "Sulfonylureas induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 169,
    question: "What is the primary mechanism of action of pramlintide, a medication used in the management of type 1 and type 2 diabetes mellitus?",
    answer: "Delayed gastric emptying",
    options: [
      "Enhancement of insulin secretion",
      "Inhibition of glucagon release",
      "Delayed gastric emptying",
      "Inhibition of alpha-glucosidase",
      "Enhancement of GLP-1 receptor activity"
    ]
  },
  {
    id: 170,
    question: "Which medication is used in the treatment of acromegaly and works by reducing growth hormone secretion from the pituitary gland?",
    answer: "Octreotide",
    options: [
      "Levothyroxine decreases warfarin metabolism",
      "Pioglitazone inhibits warfarin absorption",
      "Octreotide increases warfarin bioavailability",
      "Raloxifene induces warfarin metabolism",
      "Desmopressin interferes with warfarin binding sites"
    ]
  },
  {
    id: 171,
    question: "What class of medications is often used in the management of primary hyperparathyroidism to lower calcium levels in the blood by decreasing parathyroid hormone (PTH) secretion?",
    answer: "Cinacalcet",
    options: [
      "Bisphosphonates decrease warfarin metabolism",
      "Thiazolidinediones inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "Cinacalcet induces warfarin metabolism",
      "DPP-4 inhibitors interfere with warfarin binding sites"
    ]
  },
  {
    id: 172,
    question: "Which medication is used in the treatment of hypoparathyroidism to raise calcium levels in the blood by mimicking the action of parathyroid hormone (PTH)?",
    answer: "Teriparatide",
    options: [
      "Metyrapone decreases warfarin metabolism",
      "Levothyroxine inhibits warfarin absorption",
      "Raloxifene increases warfarin bioavailability",
      "Teriparatide inhibits warfarin absorption",
      "Cinacalcet interferes with warfarin binding sites"
    ]
  },
  {
    id: 173,
    question: "Which medication is commonly used to manage type 2 diabetes mellitus and works by enhancing the effects of incretin hormones like GLP-1?",
    answer: "Liraglutide",
    options: [
      "Metformin decreases warfarin metabolism",
      "Pioglitazone inhibits warfarin absorption",
      "Liraglutide increases warfarin bioavailability",
      "Sulfonylureas induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 174,
    question: "What is the primary mechanism of action of alendronate, a medication used in the treatment of osteoporosis?",
    answer: "Inhibition of bone resorption",
    options: [
      "Inhibition of bone resorption",
      "Stimulation of growth hormone release",
      "Inhibition of adrenal steroidogenesis",
      "Enhancement of insulin secretion",
      "Inhibition of glucagon release"
    ]
  },
  {
    id: 175,
    question: "Which medication is used in the treatment of von Willebrand disease and nocturnal enuresis and acts as a synthetic analog of vasopressin?",
    answer: "Desmopressin",
    options: [
      "Octreotide decreases warfarin metabolism",
      "Levothyroxine inhibits warfarin absorption",
      "Raloxifene increases warfarin bioavailability",
      "Teriparatide induces warfarin metabolism",
      "Desmopressin inhibits warfarin absorption"
    ]
  },
  {
    id: 176,
    question: "Which class of medications, often used in the treatment of type 2 diabetes mellitus, works by enhancing the effects of GLP-1 and inhibiting glucagon release?",
    answer: "GLP-1 receptor agonists",
    options: [
      "DPP-4 inhibitors decrease warfarin metabolism",
      "GLP-1 receptor agonists inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "Sulfonylureas induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 177,
    question: "Which medication is used in the treatment of diabetic macular edema and diabetic retinopathy and works by inhibiting vascular endothelial growth factor (VEGF)?",
    answer: "Ranibizumab",
    options: [
      "Metyrapone decreases warfarin metabolism",
      "Levothyroxine inhibits warfarin absorption",
      "Raloxifene increases warfarin bioavailability",
      "Ranibizumab inhibits warfarin absorption",
      "Cinacalcet interferes with warfarin binding sites"
    ]
  },
  {
    id: 178,
    question: "What class of medications, often used in the treatment of type 2 diabetes mellitus, works by inhibiting the reabsorption of glucose in the kidneys and promoting its excretion in the urine?",
    answer: "SGLT2 inhibitors",
    options: [
      "Thiazolidinediones decrease warfarin metabolism",
      "GLP-1 receptor agonists inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "SGLT2 inhibitors induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 179,
    question: "Which medication is used in the treatment of hypoparathyroidism by providing exogenous parathyroid hormone (PTH)?",
    answer: "Teriparatide",
    options: [
      "Cinacalcet decreases warfarin metabolism",
      "Levothyroxine inhibits warfarin absorption",
      "Raloxifene increases warfarin bioavailability",
      "Teriparatide inhibits warfarin absorption",
      "Bromocriptine interferes with warfarin binding sites"
    ]
  },
  {
    id: 180,
    question: "Which medication is used in the management of acromegaly by reducing growth hormone levels through the activation of dopamine receptors?",
    answer: "Bromocriptine",
    options: [
      "Levothyroxine decreases warfarin metabolism",
      "Metyrapone inhibits warfarin absorption",
      "Octreotide increases warfarin bioavailability",
      "Teriparatide induces warfarin metabolism",
      "Bromocriptine inhibits warfarin absorption"
    ]
  },
  {
    id: 181,
    question: "What class of medications, often used in the treatment of type 2 diabetes mellitus, works by inhibiting the enzyme alpha-glucosidase in the gastrointestinal tract to delay carbohydrate digestion and absorption?",
    answer: "Alpha-glucosidase inhibitors",
    options: [
      "DPP-4 inhibitors decrease warfarin metabolism",
      "GLP-1 receptor agonists inhibit warfarin absorption",
      "Alpha-glucosidase inhibitors increase warfarin bioavailability",
      "Sulfonylureas induce warfarin metabolism",
      "Insulin secretagogues interfere with warfarin binding sites"
    ]
  },
  {
    id: 182,
    question: "What is the primary therapeutic goal of insulin therapy in patients with type 1 diabetes mellitus?",
    answer: "Achieving euglycemia",
    options: [
      "Decreasing cholesterol levels",
      "Achieving euglycemia",
      "Reducing blood pressure",
      "Promoting weight loss",
      "Enhancing insulin sensitivity"
    ]
  },
  {
    id: 183,
    question: "Which type of insulin has the shortest duration of action and is often used for postprandial glucose control?",
    answer: "Lispro insulin",
    options: [
      "Regular insulin decreases warfarin metabolism",
      "NPH insulin inhibits warfarin absorption",
      "Glargine insulin increases warfarin bioavailability",
      "Detemir insulin induces warfarin metabolism",
      "Lispro insulin interferes with warfarin binding sites"
    ]
  },
  {
    id: 184,
    question: "What is the mechanism of action of metformin, a first-line medication for type 2 diabetes mellitus?",
    answer: "Reduces hepatic glucose production",
    options: [
      "Increases insulin secretion",
      "Decreases insulin sensitivity",
      "Reduces hepatic glucose production",
      "Promotes weight gain",
      "Enhances glucagon release"
    ]
  },
  {
    id: 185,
    question: "Which of the following medications is a glucagon-like peptide-1 (GLP-1) receptor agonist used for the treatment of type 2 diabetes mellitus?",
    answer: "Liraglutide",
    options: [
      "Metformin decreases warfarin metabolism",
      "Rosiglitazone inhibits warfarin absorption",
      "Sitagliptin increases warfarin bioavailability",
      "Liraglutide inhibits warfarin absorption",
      "Gliclazide interferes with warfarin binding sites"
    ]
  },
  {
    id: 186,
    question: "What is the primary mechanism of action of sulfonylureas in the management of diabetes mellitus?",
    answer: "Decreases insulin secretion",
    options: [
      "Decreases insulin secretion",
      "Enhances insulin sensitivity",
      "Inhibits hepatic glucose production",
      "Stimulates pancreatic alpha cells",
      "Reduces gastrointestinal absorption of glucose"
    ]
  },
  {
    id: 187,
    question: "Which of the following medications is a sodium-glucose co-transporter 2 (SGLT2) inhibitor used for the treatment of type 2 diabetes mellitus?",
    answer: "Canagliflozin",
    options: [
    "Gliclazide",
    "Acarbose",
    "Canagliflozin",
    "Liraglutide",
    "Metformin"
    ]
    },
    {
    id: 188,
    question: "Which class of medications, commonly used in the management of hyperthyroidism, inhibits the synthesis of thyroid hormones in the thyroid gland?",
    answer: "Thioamides",
    options: [
    "Beta-blockers",
    "Thiazolidinediones",
    "Dipeptidyl peptidase-4 (DPP-4) inhibitors",
    "Thyroid receptor agonists",
    "Thioamides"
    ]
    },
    {
    id: 189,
    question: "What is the primary mechanism of action of levothyroxine, a medication used for thyroid hormone replacement therapy?",
    answer: "Provides exogenous thyroid hormone",
    options: [
    "Blocks thyroid hormone receptors",
    "Inhibits thyroid hormone synthesis",
    "Stimulates thyroid hormone release",
    "Provides exogenous thyroid hormone",
    "Enhances thyroid receptor sensitivity"
    ]
    },
    {
    id: 190,
    question: "Which of the following medications is a selective aldosterone receptor antagonist used in the management of primary hyperaldosteronism and heart failure?",
    answer: "Spironolactone",
    options: [
    "Lisinopril",
    "Spironolactone",
    "Amlodipine",
    "Valsartan",
    "Enalapril"
    ]
    },
    {
    id: 191,
    question: "Which class of medications, used in the treatment of diabetes, decreases hepatic glucose production and increases peripheral glucose uptake?",
    answer: "Biguanides",
    options: [
    "Sulfonylureas",
    "Biguanides",
    "Thiazolidinediones",
    "Meglitinides",
    "Alpha-glucosidase inhibitors"
    ]
    },
    {
    id: 192,
    question: "What is the primary mechanism of action of glucagon, a hormone used in the treatment of severe hypoglycemia?",
    answer: "Increases hepatic glucose production",
    options: [
    "Stimulates insulin release",
    "Increases hepatic glucose production",
    "Inhibits glucose uptake by cells",
    "Promotes weight loss",
    "Enhances insulin sensitivity"
    ]
    },
    {
    id: 193,
    question: "Which of the following medications is a dopamine agonist used in the management of hyperprolactinemia and Parkinson's disease?",
    answer: "Bromocriptine",
    options: [
    "Bromocriptine",
    "Leuprolide",
    "Desmopressin",
    "Pasireotide",
    "Octreotide"
    ]
    },
    {
    id: 194,
    question: "What is the primary mechanism of action of desmopressin (DDAVP), a synthetic analogue of vasopressin?",
    answer: "Stimulates ADH secretion",
    options: [
    "Enhances cortisol production",
    "Increases prolactin release",
    "Stimulates ADH secretion",
    "Inhibits gastric acid production",
    "Blocks dopamine receptors"
    ]
    },
    {
    id: 195,
    question: "Patients taking acarbose, an alpha-glucosidase inhibitor, for diabetes management should be advised to take it with which part of a meal?",
    answer: "During the meal",
    options: [
    "Before the meal",
    "After the meal",
    "During the meal",
    "On an empty stomach",
    "With a glass of water"
    ]
    },
    {
    id: 196,
    question: "What is the primary mechanism of action of parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
    answer: "Promotes bone formation",
    options: [
    "Inhibits bone resorption",
    "Promotes bone formation",
    "Reduces serum calcium levels",
    "Enhances calcium absorption",
    "Suppresses parathyroid hormone secretion"
    ]
    },
    {
    id: 197,
    question: "Which of the following medications is commonly used as an adjunctive therapy to radioactive iodine in the treatment of hyperthyroidism?",
    answer: "Propylthiouracil",
    options: [
    "Levothyroxine",
    "Propylthiouracil",
    "Metformin",
    "Liraglutide",
    "Bromocriptine"
    ]
    },
    {
    id: 198,
    question: "What is the primary mechanism of action of radioactive iodine (RAI) therapy in the treatment of hyperthyroidism?",
    answer: "Inhibits thyroid hormone release",
    options: [
    "Increases thyroid hormone synthesis",
    "Inhibits thyroid hormone release",
    "Promotes thyroid gland growth",
    "Enhances thyroid receptor sensitivity",
    "Stimulates thyroid-stimulating hormone (TSH) production"
    ]
    },
    {
    id: 199,
    question: "Which class of medications, used in the management of hyperthyroidism, blocks the conversion of T4 (thyroxin) to the more active T3 (triiodothyronine)?",
    answer: "Beta-blockers",
    options: [
    "Beta-blockers",
    "Thioamides",
    "Thyroid receptor agonists",
    "Glucocorticoids",
    "Thyroid-stimulating hormone (TSH)"
    ]
    },
    {
    id: 200,
    question: "Which of the following antithyroid medications has a higher risk of causing agranulocytosis and is typically reserved for specific situations, such as during the first trimester of pregnancy?",
    answer: "Propylthiouracil",
    options: [
    "Methimazole",
    "Propylthiouracil",
    "Levothyroxine",
    "Liraglutide",
    "Bromocriptine"
    ]
    },
    {
    id: 201,
    question: "What is the primary mechanism of action of levothyroxine (T4) therapy in the treatment of hypothyroidism?",
    answer: "Provides exogenous thyroid hormone",
    options: [
    "Blocks thyroid hormone receptors",
    "Inhibits thyroid hormone synthesis",
    "Stimulates thyroid hormone release",
    "Provides exogenous thyroid hormone",
    "Enhances thyroid receptor sensitivity"
    ]
    },
    {
    id: 202,
    question: "Which of the following medications is a thyroid receptor agonist used in the treatment of hyperlipidemia?",
    answer: "Atorvastatin",
    options: [
    "Methimazole",
    "Propylthiouracil",
    "Atorvastatin",
    "Liraglutide",
    "Bromocriptine"
    ]
    },
    {
    id: 203,
    question: "What is the primary mechanism of action of iodine-containing contrast agents in diagnostic radiology?",
    answer: "Inhibits thyroid hormone synthesis",
    options: [
    "Inhibits thyroid hormone synthesis",
    "Stimulates thyroid hormone release",
    "Enhances adrenal gland function",
    "Blocks dopamine receptors",
    "Inhibits insulin secretion"
    ]
    },
    {
    id: 204,
    question: "Which class of medications, used in the treatment of thyroid storm or severe hyperthyroidism, blocks the peripheral effects of thyroid hormones without affecting hormone production?",
    answer: "Beta-blockers",
    options: [
    "Beta-blockers",
    "Thioamides",
    "Glucocorticoids",
    "Thyroid receptor agonists",
    "Thyroid-stimulating hormone (TSH)"
    ]
    },
    {
    id: 205,
    question: "Which of the following medications is a selective thyroid receptor agonist used for the treatment of hypercholesterolemia?",
    answer: "Atorvastatin",
    options: [
    "Methimazole",
    "Propylthiouracil",
    "Atorvastatin",
    "Liothyronine",
    "Bromocriptine"
    ]
    },
    {
    id: 206,
    question: "In pregnant women with hypothyroidism, which thyroid medication is preferred due to its ability to cross the placenta and provide fetal thyroid hormone support?",
    answer: "Levothyroxine",
    options: [
    "Levothyroxine",
    "Methimazole",
    "Propylthiouracil",
    "Liothyronine",
    "Desmopressin"
    ]
    },
    {
    id: 207,
    question: "What is the preferred treatment for congenital adrenal hyperplasia (CAH) in neonates to replace deficient cortisol and minimize androgen production?",
    answer: "Dexamethasone",
    options: [
    "Cortisol",
    "Fludrocortisone",
    "Prednisone",
    "Dexamethasone",
    "Levothyroxine"
    ]
    },
    {
    id: 208,
    question: "Elderly patients with type 2 diabetes may require dose adjustments for oral antidiabetic medications like metformin due to age-related changes in which organ that can affect drug clearance?",
    answer: "Kidneys",
    options: [
    "Kidneys",
    "Liver",
    "Pancreas",
    "Spleen",
    "Stomach"
    ]
    },
    {
    id: 209,
    question: "In patients with diabetes who have renal impairment, which class of antidiabetic medications should be used cautiously or avoided due to the risk of hypoglycemia and drug accumulation?",
    answer: "Sulfonylureas",
    options: [
    "Thiazolidinediones",
    "DPP-4 inhibitors",
    "Sulfonylureas",
    "GLP-1 receptor agonists",
    "SGLT-2 inhibitors"
    ]
    },
    {
    id: 210,
    question: "In children with growth hormone deficiency, what is the primary therapeutic goal of recombinant human growth hormone (somatropin) therapy?",
    answer: "Promote growth of long bones",
    options: [
    "Promote growth of long bones",
    "Prevent weight gain",
    "Increase muscle mass",
    "Normalize blood glucose levels",
    "Improve cognitive function"
    ]
    },
    {
    id: 211,
    question: "Which of the following medications is contraindicated in pregnant women due to its teratogenic effects and should be avoided in women of childbearing potential unless no other treatment options are available?",
    answer: "Methimazole",
    options: [
    "Metformin",
    "Levothyroxine",
    "Methimazole",
    "Glipizide",
    "Desmopressin"
    ]
    },
    {
    id: 212,
    question: "In patients with diabetes who have liver impairment, which class of antidiabetic medications is preferred as they have minimal hepatic metabolism and are less likely to accumulate in the body?",
    answer: "GLP-1 receptor agonists",
    options: [
    "Thiazolidinediones",
    "DPP-4 inhibitors",
    "Sulfonylureas",
    "GLP-1 receptor agonists",
    "SGLT-2 inhibitors"
    ]
    },
    {
    id: 213,
    question: "What is the primary goal of therapy with growth hormone receptor antagonists (e.g., pegvisomant) in patients with acromegaly?",
    answer: "Inhibit growth hormone effects",
    options: [
    "Normalize insulin levels",
    "Promote bone growth",
    "Reduce cortisol production",
    "Inhibit growth hormone effects",
    "Enhance muscle development"
    ]
    },
    {
    id: 214,
    question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
    answer: "Levothyroxine",
    options: [
    "Levothyroxine",
    "Methimazole",
    "Propylthiouracil",
    "Liothyronine",
    "Desmopressin"
    ]
    },
    {
    id: 215,
    question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
    answer: "Increased risk of lactic acidosis",
    options: [
    "Increased risk of lactic acidosis",
    "Hypertension",
    "Hyperkalemia",
    "Hypoglycemia",
    "Peripheral neuropathy"
    ]
    },
    {
    id: 216,
    question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
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
    id: 217,
    question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
    answer: "Increased risk of bleeding",
    options: [
    "Increased risk of bleeding",
    "Hypotension",
    "Increased risk of hypokalemia",
    "Decreased serum glucose levels",
    "Enhanced immune response"
    ]
    },
    !
{
id: 218,
question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
answer: "C",
options: [
"A. Atenolol",
"B. Digoxin",
"C. Amiodarone",
"D. Verapamil",
"E. Isosorbide dinitrate"
]
},
{
id: 219,
question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
answer: "A",
options: [
"A. Increased risk of hypoglycemia",
"B. Decreased insulin resistance",
"C. Enhanced insulin production",
"D. Reduced risk of weight gain",
"E. Improved lipid profile"
]
},
{
id: 220,
question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
answer: "C",
options: [
"A. Atenolol",
"B. Verapamil",
"C. Amiodarone",
"D. Digoxin",
"E. Diltiazem"
]
},
{
id: 221,
question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
answer: "D",
options: [
"A. Increased risk of serotonin syndrome",
"B. Decreased effectiveness of desmopressin",
"C. Enhanced antidiuretic effect",
"D. Increased risk of bleeding",
"E. Reduced effectiveness of SSRIs"
]
},
{
id: 222,
question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
answer: "D",
options: [
"A. Antibiotics",
"B. Antidepressants",
"C. Antihypertensives",
"D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
"E. Oral contraceptives"
]
},
{
id: 223,
question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
answer: "C",
options: [
"A. Increased risk of hyperthyroidism",
"B. Reduced effectiveness of methimazole",
"C. Increased risk of bleeding",
"D. Decreased anticoagulant effect of warfarin",
"E. Enhanced immune response"
]
},
{
id: 224,
question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
answer: "A",
options: [
"A. Levothyroxine",
"B. Methimazole",
"C. Propylthiouracil",
"D. Liothyronine",
"E. Desmopressin"
]
},
{
id: 225,
question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
answer: "A",
options: [
"A. Increased risk of lactic acidosis",
"B. Hypertension",
"C. Hyperkalemia",
"D. Hypoglycemia",
"E. Peripheral neuropathy"
]
},
{
id: 226,
question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
answer: "B",
options: [
"A. Vitamin A",
"B. Vitamin B12",
"C. Vitamin C",
"D. Vitamin D",
"E. Vitamin E"
]
},
{
id: 227,
question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
answer: "A",
options: [
"A. Increased risk of bleeding",
"B. Hypotension",
"C. Increased risk of hypokalemia",
"D. Decreased serum glucose levels",
"E. Enhanced immune response"
]
},
{
id: 228,
question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
answer: "C",
options: [
"A. Atenolol",
"B. Digoxin",
"C. Amiodarone",
"D. Verapamil",
"E. Isosorbide dinitrate"
]
},
{
id: 229,
question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
answer: "A",
options: [
"A. Increased risk of hypoglycemia",
"B. Decreased insulin resistance",
"C. Enhanced insulin production",
"D. Reduced risk of weight gain",
"E. Improved lipid profile"
]
},
{
id: 230,
question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
answer: "C",
options: [
"A. Atenolol",
"B. Verapamil",
"C. Amiodarone",
"D. Digoxin",
"E. Diltiazem"
]
},
{
id: 231,
question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
answer: "D",
options: [
"A. Increased risk of serotonin syndrome",
"B. Decreased effectiveness of desmopressin",
"C. Enhanced antidiuretic effect",
"D. Increased risk of bleeding",
"E. Reduced effectiveness of SSRIs"
]
},
{
id: 232,
question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
answer: "D",
options: [
"A. Antibiotics",
"B. Antidepressants",
"C. Antihypertensives",
"D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
"E. Oral contraceptives"
]
},
{
id: 233,
question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
answer: "C",
options: [
"A. Increased risk of hyperthyroidism",
"B. Reduced effectiveness of methimazole",
"C. Increased risk of bleeding",
"D. Decreased anticoagulant effect of warfarin",
"E. Enhanced immune response"
]
},
{
id: 234,
question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
answer: "A",
options: [
"A. Levothyroxine",
"B. Methimazole",
"C. Propylthiouracil",
"D. Liothyronine",
"E. Desmopressin"
]
},
{
id: 235,
question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
answer: "A",
options: [
"A. Increased risk of lactic acidosis",
"B. Hypertension",
"C. Hyperkalemia",
"D. Hypoglycemia",
"E. Peripheral neuropathy"
]
},
{
id: 236,
question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
answer: "B",
options: [
"A. Vitamin A",
"B. Vitamin B12",
"C. Vitamin C",
"D. Vitamin D",
"E. Vitamin E"
]
},
{
id: 237,
question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
answer: "A",
options: [
"A. Increased risk of bleeding",
"B. Hypotension",
"C. Increased risk of hypokalemia",
"D. Decreased serum glucose levels",
"E. Enhanced immune response"
]
},
{
id: 238,
question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
answer: "C",
options: [
"A. Atenolol",
"B. Digoxin",
"C. Amiodarone",
"D. Verapamil",
"E. Isosorbide dinitrate"
]
},
{
id: 239,
question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
answer: "A",
options: [
"A. Increased risk of hypoglycemia",
"B. Decreased insulin resistance",
"C. Enhanced insulin production",
"D. Reduced risk of weight gain",
"E. Improved lipid profile"
]
},
{
id: 240,
question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
answer: "C",
options: [
"A. Atenolol",
"B. Verapamil",
"C. Amiodarone",
"D. Digoxin",
"E. Diltiazem"
]
},
{
id: 241,
question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
answer: "D",
options: [
"A. Increased risk of serotonin syndrome",
"B. Decreased effectiveness of desmopressin",
"C. Enhanced antidiuretic effect",
"D. Increased risk of bleeding",
"E. Reduced effectiveness of SSRIs"
]
},
{
id: 242,
question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
answer: "D",
options: [
"A. Antibiotics",
"B. Antidepressants",
"C. Antihypertensives",
"D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
"E. Oral contraceptives"
]
},
{
id: 243,
question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
answer: "C",
options: [
"A. Increased risk of hyperthyroidism",
"B. Reduced effectiveness of methimazole",
"C. Increased risk of bleeding",
"D. Decreased anticoagulant effect of warfarin",
"E. Enhanced immune response"
]
},
{
id: 244,
question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
answer: "A",
options: [
"A. Levothyroxine",
"B. Methimazole",
"C. Propylthiouracil",
"D. Liothyronine",
"E. Desmopressin"
]
},
{
id: 245,
question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
answer: "A",
options: [
"A. Increased risk of lactic acidosis",
"B. Hypertension",
"C. Hyperkalemia",
"D. Hypoglycemia",
"E. Peripheral neuropathy"
]
},
{
  id: 246,
  question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
  answer: "B",
  options: [
  "A. Vitamin A",
  "B. Vitamin B12",
  "C. Vitamin C",
  "D. Vitamin D",
  "E. Vitamin E"
  ]
  },
  {
  id: 247,
  question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
  answer: "A",
  options: [
  "A. Increased risk of bleeding",
  "B. Hypotension",
  "C. Increased risk of hypokalemia",
  "D. Decreased serum glucose levels",
  "E. Enhanced immune response"
  ]
  },
  {
  id: 248,
  question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Digoxin",
  "C. Amiodarone",
  "D. Verapamil",
  "E. Isosorbide dinitrate"
  ]
  },
  {
  id: 249,
  question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
  answer: "A",
  options: [
  "A. Increased risk of hypoglycemia",
  "B. Decreased insulin resistance",
  "C. Enhanced insulin production",
  "D. Reduced risk of weight gain",
  "E. Improved lipid profile"
  ]
  },
  {
  id: 250,
  question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Verapamil",
  "C. Amiodarone",
  "D. Digoxin",
  "E. Diltiazem"
  ]
  },
  {
  id: 251,
  question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
  answer: "D",
  options: [
  "A. Increased risk of serotonin syndrome",
  "B. Decreased effectiveness of desmopressin",
  "C. Enhanced antidiuretic effect",
  "D. Increased risk of bleeding",
  "E. Reduced effectiveness of SSRIs"
  ]
  },
  {
  id: 252,
  question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
  answer: "D",
  options: [
  "A. Antibiotics",
  "B. Antidepressants",
  "C. Antihypertensives",
  "D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
  "E. Oral contraceptives"
  ]
  },
  {
  id: 253,
  question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
  answer: "C",
  options: [
  "A. Increased risk of hyperthyroidism",
  "B. Reduced effectiveness of methimazole",
  "C. Increased risk of bleeding",
  "D. Decreased anticoagulant effect of warfarin",
  "E. Enhanced immune response"
  ]
  },
  {
  id: 254,
  question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
  answer: "A",
  options: [
  "A. Levothyroxine",
  "B. Methimazole",
  "C. Propylthiouracil",
  "D. Liothyronine",
  "E. Desmopressin"
  ]
  },
  {
  id: 255,
  question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
  answer: "A",
  options: [
  "A. Increased risk of lactic acidosis",
  "B. Hypertension",
  "C. Hyperkalemia",
  "D. Hypoglycemia",
  "E. Peripheral neuropathy"
  ]
  },
  {
  id: 256,
  question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
  answer: "B",
  options: [
  "A. Vitamin A",
  "B. Vitamin B12",
  "C. Vitamin C",
  "D. Vitamin D",
  "E. Vitamin E"
  ]
  },
  {
  id: 257,
  question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
  answer: "A",
  options: [
  "A. Increased risk of bleeding",
  "B. Hypotension",
  "C. Increased risk of hypokalemia",
  "D. Decreased serum glucose levels",
  "E. Enhanced immune response"
  ]
  },
  {
  id: 258,
  question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Digoxin",
  "C. Amiodarone",
  "D. Verapamil",
  "E. Isosorbide dinitrate"
  ]
  },
  {
  id: 259,
  question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
  answer: "A",
  options: [
  "A. Increased risk of hypoglycemia",
  "B. Decreased insulin resistance",
  "C. Enhanced insulin production",
  "D. Reduced risk of weight gain",
  "E. Improved lipid profile"
  ]
  },
  {
  id: 260,
  question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Verapamil",
  "C. Amiodarone",
  "D. Digoxin",
  "E. Diltiazem"
  ]
  },
  {
  id: 261,
  question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
  answer: "D",
  options: [
  "A. Increased risk of serotonin syndrome",
  "B. Decreased effectiveness of desmopressin",
  "C. Enhanced antidiuretic effect",
  "D. Increased risk of bleeding",
  "E. Reduced effectiveness of SSRIs"
  ]
  },
  {
  id: 262,
  question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
  answer: "D",
  options: [
  "A. Antibiotics",
  "B. Antidepressants",
  "C. Antihypertensives",
  "D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
  "E. Oral contraceptives"
  ]
  },
  {
  id: 263,
  question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
  answer: "C",
  options: [
  "A. Increased risk of hyperthyroidism",
  "B. Reduced effectiveness of methimazole",
  "C. Increased risk of bleeding",
  "D. Decreased anticoagulant effect of warfarin",
  "E. Enhanced immune response"
  ]
  },
  {
  id: 264,
  question: "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
  answer: "A",
  options: [
  "A. Levothyroxine",
  "B. Methimazole",
  "C. Propylthiouracil",
  "D. Liothyronine",
  "E. Desmopressin"
  ]
  },
  {
  id: 265,
  question: "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
  answer: "A",
  options: [
  "A. Increased risk of lactic acidosis",
  "B. Hypertension",
  "C. Hyperkalemia",
  "D. Hypoglycemia",
  "E. Peripheral neuropathy"
  ]
  },
  {
  id: 266,
  question: "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
  answer: "B",
  options: [
  "A. Vitamin A",
  "B. Vitamin B12",
  "C. Vitamin C",
  "D. Vitamin D",
  "E. Vitamin E"
  ]
  },
  {
  id: 267,
  question: "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
  answer: "A",
  options: [
  "A. Increased risk of bleeding",
  "B. Hypotension",
  "C. Increased risk of hypokalemia",
  "D. Decreased serum glucose levels",
  "E. Enhanced immune response"
  ]
  },
  {
  id: 268,
  question: "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Digoxin",
  "C. Amiodarone",
  "D. Verapamil",
  "E. Isosorbide dinitrate"
  ]
  },
  {
  id: 269,
  question: "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
  answer: "A",
  options: [
  "A. Increased risk of hypoglycemia",
  "B. Decreased insulin resistance",
  "C. Enhanced insulin production",
  "D. Reduced risk of weight gain",
  "E. Improved lipid profile"
  ]
  },
  {
  id: 270,
  question: "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
  answer: "C",
  options: [
  "A. Atenolol",
  "B. Verapamil",
  "C. Amiodarone",
  "D. Digoxin",
  "E. Diltiazem"
  ]
  },
  {
  id: 271,
  question: "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
  answer: "D",
  options: [
  "A. Increased risk of serotonin syndrome",
  "B. Decreased effectiveness of desmopressin",
  "C. Enhanced antidiuretic effect",
  "D. Increased risk of bleeding",
  "E. Reduced effectiveness of SSRIs"
  ]
  },
  {
  id: 272,
  question: "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
  answer: "D",
  options: [
  "A. Antibiotics",
  "B. Antidepressants",
  "C. Antihypertensives",
  "D. Nonsteroidal anti-inflammatory drugs (NSAIDs)",
  "E. Oral contraceptives"
  ]
  },
  {
  id: 273,
  question: "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
  answer: "C",
  options: [
  "A. Increased risk of hyperthyroidism",
  "B. Reduced effectiveness of methimazole",
  "C. Increased risk of bleeding",
  "D. Decreased anticoagulant effect of warfarin",
  "E. Enhanced immune response"
  ]
  },
  {
    id: 274,
    question: "Which endocrine drug is a selective estrogen receptor modulator commonly used in the treatment of breast cancer and osteoporosis?",
    answer: "Tamoxifen",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Tamoxifen",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 275,
    question: "What is the primary therapeutic effect of metformin in the management of type 2 diabetes mellitus?",
    answer: "Reducing hepatic glucose production",
    options: [
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Increasing appetite",
      "Promoting weight gain",
      "Enhancing insulin receptor sensitivity"
    ]
  },
  {
    id: 276,
    question: "Which class of drugs is commonly used in the treatment of hypothyroidism and includes levothyroxine as a commonly prescribed agent?",
    answer: "Thyroid hormones",
    options: [
      "Beta-blockers",
      "ACE inhibitors",
      "Thiazide diuretics",
      "Angiotensin receptor blockers",
      "Thyroid hormones"
    ]
  },
  {
    id: 277,
    question: "Which endocrine drug is used in the management of acromegaly and inhibits the release of growth hormone from the pituitary gland?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 278,
    question: "A patient with Addison's disease may require replacement therapy with which hormone?",
    answer: "Cortisol",
    options: [
      "Insulin",
      "Cortisol",
      "Levothyroxine",
      "Parathyroid hormone",
      "Glucagon"
    ]
  },
  {
    id: 279,
    question: "Which antidiabetic medication works by inhibiting the enzyme dipeptidyl peptidase-4 (DPP-4) and prolonging the action of incretin hormones?",
    answer: "Sitagliptin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Exenatide",
      "Glipizide"
    ]
  },
  {
    id: 280,
    question: "What is the primary mechanism of action of desmopressin (DDAVP) when used in the treatment of diabetes insipidus?",
    answer: "Promoting water reabsorption in the kidneys",
    options: [
      "Enhancing insulin secretion",
      "Reducing blood glucose levels",
      "Promoting water reabsorption in the kidneys",
      "Inhibiting cortisol production",
      "Stimulating thyroid hormone release"
    ]
  },
  {
    id: 281,
    question: "Which medication is a synthetic form of thyroid hormone and is commonly prescribed for hypothyroidism?",
    answer: "Levothyroxine",
    options: [
      "Insulin glargine",
      "Prednisone",
      "Levothyroxine",
      "Alendronate",
      "Liraglutide"
    ]
  },
  {
    id: 282,
    question: "Which class of drugs is used to reduce blood glucose levels by inhibiting the reabsorption of glucose in the kidneys, leading to increased glucose excretion in the urine?",
    answer: "SGLT-2 inhibitors",
    options: [
      "Sulfonylureas",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors",
      "Thiazolidinediones"
    ]
  },
  {
    id: 283,
    question: "What is the primary mechanism of action of insulin in the management of diabetes mellitus?",
    answer: "Enhancing glucose uptake by cells",
    options: [
      "Inhibiting hepatic glucose production",
      "Stimulating insulin receptor sensitivity",
      "Promoting weight loss",
      "Enhancing glucose uptake by cells",
      "Reducing appetite"
    ]
  },
  {
    id: 284,
    question: "Which medication is an oral antidiabetic agent that works by increasing insulin sensitivity in peripheral tissues and is associated with a risk of fluid retention?",
    answer: "Pioglitazone",
    options: [
      "Metformin",
      "Glipizide",
      "Pioglitazone",
      "Sitagliptin",
      "Exenatide"
    ]
  },
  {
    id: 285,
    question: "What is the primary mechanism of action of somatostatin analogs like octreotide in the management of acromegaly?",
    answer: "Inhibition of growth hormone release",
    options: [
      "Stimulation of growth hormone release",
      "Inhibition of growth hormone release",
      "Enhancement of insulin secretion",
      "Promotion of cortisol production",
      "Reduction of thyroid hormone levels"
    ]
  },
  {
    id: 286,
    question: "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
    answer: "Exenatide",
    options: [
      "Metformin",
      "Glipizide",
      "Pioglitazone",
      "Sitagliptin",
      "Exenatide"
    ]
  },
  {
    id: 287,
    question: "Which medication is used in the treatment of hyperthyroidism and works by inhibiting the production of thyroid hormones?",
    answer: "Propylthiouracil",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 288,
    question: "A patient with Cushing's syndrome may be prescribed which medication to inhibit cortisol synthesis?",
    answer: "Metyrapone",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 289,
    question: "Which class of drugs is used to reduce blood glucose levels by increasing insulin release from pancreatic beta cells?",
    answer: "Meglitinides",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 290,
    question: "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 291,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by improving insulin sensitivity in peripheral tissues?",
    answer: "Thiazolidinediones",
    options: [
      "Thiazolidinediones",
      "Sulfonylureas",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 292,
    question: "Which medication is a synthetic analog of vasopressin used in the treatment of central diabetes insipidus?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 293,
    question: "Which endocrine drug is used in the treatment of hypoparathyroidism and helps to raise calcium levels in the blood?",
    answer: "Calcitriol",
    options: [
      "Bromocriptine",
      "Calcitriol",
      "Octreotide",
      "Cinacalcet",
      "Propylthiouracil"
    ]
  },
  {
    id: 294,
    question: "What is the primary mechanism of action of insulin glargine in the management of diabetes mellitus?",
    answer: "Providing basal insulin coverage",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing basal insulin coverage"
    ]
  },
  {
    id: 295,
    question: "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 296,
    question: "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by enhancing the release of insulin from pancreatic beta cells and reducing glucagon release?",
    answer: "Meglitinides",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 297,
    question: "What is the primary mechanism of action of alendronate in the management of osteoporosis?",
    answer: "Reducing bone resorption",
    options: [
      "Enhancing calcium absorption",
      "Promoting weight gain",
      "Reducing bone resorption",
      "Increasing insulin sensitivity",
      "Inhibiting growth hormone release"
    ]
  },
  {
    id: 298,
    question: "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
    answer: "Phenoxybenzamine",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Phenoxybenzamine",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 299,
    question: "Which medication is a long-acting insulin analog used to provide basal insulin coverage in the management of diabetes mellitus?",
    answer: "Insulin detemir",
    options: [
      "Insulin aspart",
      "Insulin lispro",
      "Insulin glargine",
      "Insulin detemir",
      "Insulin regular"
    ]
  },
  {
    id: 300,
    question: "A patient with hyperthyroidism may be prescribed which medication to inhibit thyroid hormone synthesis and reduce thyroid gland activity?",
    answer: "Propylthiouracil",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 301,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by reducing hepatic glucose production and enhancing insulin receptor sensitivity?",
    answer: "Thiazolidinediones",
    options: [
      "Thiazolidinediones",
      "Sulfonylureas",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 302,
    question: "Which medication is a long-acting GLP-1 receptor agonist used in the treatment of diabetes mellitus and helps to reduce appetite and body weight?",
    answer: "Liraglutide",
    options: [
      "Metformin",
      "Glipizide",
      "Pioglitazone",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 303,
    question: "A patient with hypercalcemia due to primary hyperparathyroidism may be prescribed which medication to lower calcium levels by inhibiting parathyroid hormone release?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 304,
    question: "Which medication is a synthetic form of vasopressin used to treat diabetes insipidus by promoting water reabsorption in the kidneys?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 305,
    question: "Which class of drugs is used to treat hyperthyroidism and works by blocking the production of thyroid hormones?",
    answer: "Beta-blockers",
    options: [
      "Glucagon-like peptide-1 (GLP-1) agonists",
      "Beta-blockers",
      "Dipeptidyl peptidase-4 (DPP-4) inhibitors",
      "Sodium-glucose co-transporter 2 (SGLT-2) inhibitors",
      "Thiazolidinediones"
    ]
  },
  {
    id: 306,
    question: "What is the primary therapeutic effect of metyrapone when used in the management of Cushing's syndrome?",
    answer: "Inhibiting cortisol synthesis",
    options: [
      "Stimulating growth hormone release",
      "Inhibiting cortisol synthesis",
      "Promoting water reabsorption in the kidneys",
      "Enhancing insulin receptor sensitivity",
      "Reducing appetite"
    ]
  },
  {
    id: 307,
    question: "Which medication is a long-acting insulin analog used in diabetes management to provide basal insulin coverage?",
    answer: "Insulin detemir",
    options: [
      "Insulin aspart",
      "Insulin lispro",
      "Insulin glargine",
      "Insulin detemir",
      "Insulin regular"
    ]
  },
  {
    id: 308,
    question: "A patient with pheochromocytoma may be prescribed which medication to control hypertension and excessive catecholamine release during surgery?",
    answer: "Phenoxybenzamine",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Phenoxybenzamine",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 309,
    question: "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by reducing glucose reabsorption in the kidneys, leading to increased glucose excretion in the urine?",
    answer: "SGLT-2 inhibitors",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 310,
    question: "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels and normalize insulin-like growth factor-1 (IGF-1) levels?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 311,
    question: "What is the primary mechanism of action of bromocriptine when used in the treatment of hyperprolactinemia?",
    answer: "Inhibition of growth hormone release",
    options: [
      "Stimulation of growth hormone release",
      "Inhibition of growth hormone release",
      "Enhancement of insulin secretion",
      "Promotion of cortisol production",
      "Reduction of thyroid hormone levels"
    ]
  },
  {
    id: 312,
    question: "A patient with hypoparathyroidism may be prescribed which medication to raise calcium levels in the blood?",
    answer: "Calcitriol",
    options: [
      "Bromocriptine",
      "Calcitriol",
      "Octreotide",
      "Cinacalcet",
      "Propylthiouracil"
    ]
  },
  {
    id: 313,
    question: "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by enhancing insulin sensitivity in peripheral tissues and reducing hepatic glucose production?",
    answer: "Thiazolidinediones",
    options: [
      "Thiazolidinediones",
      "Sulfonylureas",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 314,
    question: "Which medication is a long-acting glucagon-like peptide-1 (GLP-1) receptor agonist used in diabetes management to improve glycemic control and reduce appetite?",
    answer: "Liraglutide",
    options: [
      "Metformin",
      "Glipizide",
      "Pioglitazone",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 315,
    question: "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 316,
    question: "What is the primary mechanism of action of insulin lispro in the management of diabetes mellitus?",
    answer: "Providing rapid-acting insulin coverage",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing rapid-acting insulin coverage"
    ]
  },
  {
    id: 317,
    question: "A patient with pheochromocytoma may be prescribed which medication to control hypertension and excessive catecholamine release before surgical removal of the tumor?",
    answer: "Phenoxybenzamine",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Phenoxybenzamine",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 318,
    question: "Which medication is a synthetic form of thyroid hormone and is commonly prescribed for hypothyroidism?",
    answer: "Levothyroxine",
    options: [
      "Insulin glargine",
      "Prednisone",
      "Levothyroxine",
      "Alendronate",
      "Liraglutide"
    ]
  },
  {
    id: 319,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by stimulating insulin secretion from pancreatic beta cells and reducing glucagon release?",
    answer: "Meglitinides",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 320,
    question: "What is the primary therapeutic effect of pasireotide when used in the treatment of Cushing's disease?",
    answer: "Promotion of cortisol production",
    options: [
      "Stimulation of growth hormone release",
      "Inhibition of growth hormone release",
      "Enhancement of insulin secretion",
      "Promotion of cortisol production",
      "Reduction of thyroid hormone levels"
    ]
  },
  {
    id: 321,
    question: "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by reducing parathyroid hormone (PTH) release?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 322,
    question: "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
    answer: "Liraglutide",
    options: [
      "Metformin",
      "Glipizide",
      "Pioglitazone",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 323,
    question: "What is the primary mechanism of action of insulin regular in the management of diabetes mellitus?",
    answer: "Providing rapid-acting insulin coverage",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing rapid-acting insulin coverage"
    ]
  },
  {
    id: 324,
    question: "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
    answer: "Phenoxybenzamine",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Phenoxybenzamine",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 325,
    question: "Which medication is an alpha-glucosidase inhibitor used in diabetes management to delay the absorption of carbohydrates from the gastrointestinal tract?",
    answer: "Acarbose",
    options: [
      "Metformin",
      "Sitagliptin",
      "Acarbose",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 326,
    question: "A patient with hyperthyroidism may be prescribed which medication to inhibit thyroid hormone synthesis and reduce thyroid gland activity?",
    answer: "Propylthiouracil",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 327,
    question: "What is the primary mechanism of action of insulin aspart in the management of diabetes mellitus?",
    answer: "Providing rapid-acting insulin coverage",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing rapid-acting insulin coverage"
    ]
  },
  {
    id: 328,
    question: "Which medication is a synthetic analog of vasopressin used in the treatment of central diabetes insipidus and nocturnal enuresis?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 329,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by inhibiting the enzyme dipeptidyl peptidase-4 (DPP-4) to prolong the action of incretin hormones?",
    answer: "DPP-4 inhibitors",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 330,
    question: "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels and improve symptoms?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 331,
    question: "What is the primary therapeutic effect of prednisone when used in the management of adrenal insufficiency (Addison's disease)?",
    answer: "Promotion of cortisol production",
    options: [
      "Stimulation of growth hormone release",
      "Inhibition of growth hormone release",
      "Enhancement of insulin secretion",
      "Promotion of cortisol production",
      "Reduction of thyroid hormone levels"
    ]
  },
  {
    id: 332,
    question: "Which medication is commonly used to manage hyperthyroidism and works by inhibiting the synthesis of thyroid hormones?",
    answer: "Propylthiouracil",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 333,
    question: "A patient with type 1 diabetes mellitus may require which medication to replace the missing hormone essential for glucose metabolism?",
    answer: "Insulin",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Insulin",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 334,
    question: "Which medication is used in the treatment of diabetes insipidus and central diabetes insipidus to promote water reabsorption in the kidneys?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 335,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by increasing insulin secretion from pancreatic beta cells?",
    answer: "Meglitinides",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 336,
    question: "Which medication is a synthetic form of parathyroid hormone used in the treatment of osteoporosis to stimulate bone formation?",
    answer: "Teriparatide",
    options: [
      "Bromocriptine",
      "Calcitriol",
      "Octreotide",
      "Teriparatide",
      "Prednisone"
    ]
  },
  {
    id: 337,
    question: "A patient with Cushing's syndrome may be prescribed which medication to inhibit cortisol synthesis and manage symptoms?",
    answer: "Metyrapone",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 338,
    question: "Which class of drugs is used to reduce blood glucose levels by slowing down the digestion of carbohydrates in the intestines?",
    answer: "Alpha-glucosidase inhibitors",
    options: [
      "Sulfonylureas",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 339,
    question: "What is the primary mechanism of action of alendronate in the management of osteoporosis?",
    answer: "Reducing bone resorption",
    options: [
      "Enhancing calcium absorption",
      "Promoting weight gain",
      "Reducing bone resorption",
      "Increasing insulin sensitivity",
      "Inhibiting growth hormone release"
    ]
  },
  {
    id: 340,
    question: "A patient with hyperthyroidism may be prescribed which medication to lower thyroid hormone levels by inhibiting thyroid gland activity?",
    answer: "Propylthiouracil",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 341,
    question: "Which medication is an amylin analog used in diabetes management to slow gastric emptying, reduce postprandial blood glucose levels, and promote satiety?",
    answer: "Pramlintide",
    options: [
      "Metformin",
      "Glipizide",
      "Pramlintide",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 342,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by increasing insulin receptor sensitivity in peripheral tissues?",
    answer: "Thiazolidinediones",
    options: [
      "Thiazolidinediones",
      "Sulfonylureas",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 343,
    question: "A patient with growth hormone deficiency may require which medication to stimulate growth and promote development?",
    answer: "Somatropin",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Somatropin",
      "Prednisone"
    ]
  },
  {
    id: 344,
    question: "Which medication is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and central diabetes insipidus?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 345,
    question: "What is the primary mechanism of action of insulin lispro in the management of diabetes mellitus?",
    answer: "Providing rapid-acting insulin coverage",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing rapid-acting insulin coverage"
    ]
  },
  {
    id: 346,
    question: "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
    answer: "Phenoxybenzamine",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Phenoxybenzamine",
      "Pasireotide",
      "Desmopressin"
    ]
  },
  {
    id: 347,
    question: "Which medication is a long-acting insulin analog used to provide basal insulin coverage in the management of diabetes mellitus?",
    answer: "Insulin glargine",
    options: [
      "Insulin aspart",
      "Insulin lispro",
      "Insulin glargine",
      "Insulin detemir",
      "Insulin regular"
    ]
  },
  {
    id: 348,
    question: "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 349,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by inhibiting the reabsorption of glucose in the kidneys, leading to increased glucose excretion in the urine?",
    answer: "SGLT-2 inhibitors",
    options: [
      "Sulfonylureas",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 350,
    question: "What is the primary mechanism of action of calcitriol in the management of hypoparathyroidism?",
    answer: "Enhancing calcium absorption",
    options: [
      "Enhancing calcium absorption",
      "Promoting weight gain",
      "Reducing bone resorption",
      "Increasing insulin sensitivity",
      "Inhibiting growth hormone release"
    ]
  },
  {
    id: 351,
    question: "A patient with von Willebrand disease may be prescribed which medication to enhance blood clotting by releasing von Willebrand factor from endothelial cells?",
    answer: "Desmopressin",
    options: [
      "Levothyroxine",
      "Anastrozole",
      "Tamoxifen",
      "Desmopressin",
      "Prednisone"
    ]
  },
  {
    id: 352,
    question: "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
    answer: "Liraglutide",
    options: [
      "Metformin",
      "Glipizide",
      "Pramlintide",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 353,
    question: "What is the primary mechanism of action of cinacalcet in the management of secondary hyperparathyroidism in end-stage renal disease?",
    answer: "Sensitizing calcium-sensing receptors",
    options: [
      "Enhancing calcium absorption",
      "Promoting weight gain",
      "Reducing bone resorption",
      "Increasing insulin sensitivity",
      "Sensitizing calcium-sensing receptors"
    ]
  },
  {
    id: 354,
    question: "A patient with hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 355,
    question: "Which medication is an injectable GLP-1 receptor agonist used in diabetes management to reduce appetite and promote weight loss?",
    answer: "Liraglutide",
    options: [
      "Metformin",
      "Glipizide",
      "Pramlintide",
      "Liraglutide",
      "Exenatide"
    ]
  },
  {
    id: 356,
    question: "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
    answer: "Cinacalcet",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Cinacalcet",
      "Prednisone"
    ]
  },
  {
    id: 357,
    question: "Which medication is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and primary nocturnal enuresis?",
    answer: "Desmopressin",
    options: [
      "Metformin",
      "Sitagliptin",
      "Pioglitazone",
      "Desmopressin",
      "Exenatide"
    ]
  },
  {
    id: 358,
    question: "What is the primary mechanism of action of insulin regular in the management of diabetes mellitus?",
    answer: "Stimulating insulin secretion",
    options: [
      "Enhancing insulin receptor sensitivity",
      "Stimulating insulin secretion",
      "Reducing hepatic glucose production",
      "Promoting weight loss",
      "Providing rapid-acting insulin coverage"
    ]
  },
  {
    id: 359,
    question: "A patient with pituitary gigantism may be prescribed which medication to lower elevated growth hormone levels and reduce excessive growth?",
    answer: "Octreotide",
    options: [
      "Bromocriptine",
      "Metyrapone",
      "Octreotide",
      "Propylthiouracil",
      "Prednisone"
    ]
  },
  {
    id: 360,
    question: "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by enhancing the action of incretin hormones to stimulate insulin secretion and inhibit glucagon release?",
    answer: "DPP-4 inhibitors",
    options: [
      "Biguanides",
      "Meglitinides",
      "Alpha-glucosidase inhibitors",
      "SGLT-2 inhibitors",
      "DPP-4 inhibitors"
    ]
  },
  {
    id: 361,
    question: "A junior doctor contacts you regarding a diabetic clinic they are overseeing. The doctor is currently assessing a patient's HbA1c levels and is seeking guidance on the optimal target for the patient's HbA1c. What is the recommended HbA1c target for individuals with diabetes?",
    answer: "48mmol/mol",
    options: [
      "38mmol/mol",
      "40mmol/mol",
      "46mmol/mol",
      "48mmol/mol",
      "50mmol/mol"
    ]
  },
  {
    id: 362,
    question: "You are a pharmacist on a ward when a junior doctor approaches you asking about how often a HbA1c test can be carried out on a diabetic patient. Considering the lifespan of hemoglobin, how frequently can a HbA1c test be carried out on a diabetic patient?",
    answer: "Every 3 months",
    options: [
      "Every 1-2 months",
      "Every 3 months",
      "Every 4 months",
      "Every 6 months",
      "Every 12 months"
    ]
  },
  {
    id: 363,
    question: "You are a patient on a ward and come across a diabetic patient who was visiting family over the weekend but subsequently forgot their insulin injections at home and has now developed diabetic ketoacidosis. Which one of the following options is most appropriate in the initial management of DKA?",
    answer: "Short-acting insulin infusion",
    options: [
      "Metformin 2g STAT and then repeated 6 hourly",
      "Glucagon IM injection every 2 hours",
      "Dextrose 10% at 125ml per hour",
      "Short-acting insulin infusion",
      "Novorapid 20 units STAT repeated every hour"
    ]
  }
]

export default EndoFlashcardMain;
