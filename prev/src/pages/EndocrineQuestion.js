import React, { useEffect, useState } from "react"
import ScoreView from "./ScoreView/ScoreView"
import QuizView from "./QuizView/QuizView"
import { useNavigate, Link } from "react-router-dom"
import classnames from "classnames" // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai" // Import icons if not already imported

const EndocrineQuestion = () => {
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([
    {
      question:
        "What is the primary mechanism of action of metformin in type 2 diabetes?",
      answers: [
        { text: "Increases insulin sensitivity in muscle and fat" },
        { text: "Stimulates pancreatic insulin secretion" },
        { text: "Inhibits hepatic glucose production", isCorrect: true },
        { text: "Increases glucose uptake in the gut" },
        { text: "Enhances glucagon secretion" },
      ],
      Explanation:
        "Metformin primarily decreases hepatic glucose production, thus lowering blood glucose levels.",
    },
    {
      question: "How does levothyroxine work in hypothyroidism?",
      answers: [
        { text: "Blocks thyroid hormone synthesis" },
        { text: "Replaces deficient T4", isCorrect: true },
        { text: "Inhibits TSH secretion" },
        { text: "Enhances peripheral conversion of T4 to T3" },
        { text: "Decreases iodine uptake by the thyroid" },
      ],
      Explanation:
        "Levothyroxine acts as a synthetic form of thyroxine (T4), replacing the hormone that is deficient in hypothyroidism.",
    },
    {
      question:
        "What is the mechanism of action of pioglitazone in diabetes management?",
      answers: [
        { text: "DPP-4 inhibitor" },
        { text: "SGLT2 inhibitor" },
        { text: "PPAR-gamma agonist", isCorrect: true },
        { text: "Alpha-glucosidase inhibitor" },
        { text: "Insulin secretagogue" },
      ],
      Explanation:
        "Pioglitazone is a PPAR-gamma agonist which increases insulin sensitivity in peripheral tissue, particularly in muscle and fat.",
    },
    {
      question:
        "How does exenatide function in the treatment of type 2 diabetes?",
      answers: [
        { text: "Enhances insulin secretion in response to glucose" },
        { text: "Inhibits glucagon secretion" },
        { text: "Delays gastric emptying" },
        { text: "All of the above", isCorrect: true },
        { text: "None of the above" },
      ],
      Explanation:
        "Exenatide enhances glucose-dependent insulin secretion, suppresses inappropriately elevated glucagon secretion, and slows gastric emptying.",
    },
    {
      question:
        "What is the main action of spironolactone in primary hyperaldosteronism?",
      answers: [
        { text: "Blocks aldosterone receptors", isCorrect: true },
        { text: "Inhibits 11-beta hydroxylase" },
        { text: "Increases urinary sodium excretion" },
        { text: "Decreases potassium excretion" },
        { text: "Stimulates renin release" },
      ],
      Explanation:
        "Spironolactone acts as an aldosterone antagonist, blocking aldosterone receptors, primarily in the kidneys.",
    },
    {
      question: "Which mechanism of action best describes metformin?",
      answers: [
        { text: "Insulin receptor agonist" },
        { text: "Alpha-glucosidase inhibitor" },
        {
          text: "AMP-activated protein kinase (AMPK) activator",
          isCorrect: true,
        },
        { text: "Sodium-glucose cotransporter 2 (SGLT2) inhibitor" },
        { text: "Glucagon receptor antagonist" },
      ],
      Explanation:
        "Metformin activates AMPK in hepatocytes, leading to reduced hepatic glucose production.",
    },
    {
      question:
        "What is the primary mechanism of action of thyroxine (levothyroxin)?",
      answers: [
        { text: "Inhibition of thyroid peroxidase" },
        { text: "Inhibition of thyroglobulin synthesis" },
        { text: "Stimulation of TSH secretion" },
        { text: "Stimulation of iodine uptake" },
        { text: "Activation of thyroid hormone receptors", isCorrect: true },
      ],
      Explanation:
        "Levothyroxine acts as a synthetic thyroid hormone that binds to thyroid hormone receptors, mimicking the action of endogenous thyroxin.",
    },
    {
      question:
        "Which of the following best describes the mechanism of action of a somatostatin analog like octreotide?",
      answers: [
        { text: "Stimulation of growth hormone secretion" },
        { text: "Inhibition of insulin secretion" },
        { text: "Inhibition of glucagon secretion" },
        { text: "Inhibition of growth hormone secretion", isCorrect: true },
        { text: "Stimulation of insulin secretion" },
      ],
      Explanation:
        "Octreotide inhibits the secretion of growth hormone and other peptides by binding to somatostatin receptors.",
    },
    {
      question:
        "What is the primary mechanism of action of glucagon-like peptide-1 (GLP-1) agonists, such as exenatide?",
      answers: [
        { text: "Inhibition of glucagon receptor" },
        { text: "Inhibition of DPP-4 enzyme" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Stimulation of GLP-1 receptor" },
        { text: "Inhibition of glucose absorption" },
      ],
      Explanation:
        "GLP-1 agonists stimulate insulin secretion and inhibit glucagon secretion, among other effects.",
    },
    {
      question:
        "How do thiazolidinediones (e.g., pioglitazone) primarily exert their therapeutic effects in diabetes management?",
      answers: [
        { text: "Inhibition of alpha-glucosidase" },
        { text: "Inhibition of sodium-glucose cotransporters" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
          isCorrect: true,
        },
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of glucagon secretion" },
      ],
      Explanation:
        "Thiazolidinediones activate PPAR-gamma, which regulates genes involved in glucose and lipid metabolism.",
    },
    {
      question:
        "Which of the following best represents the mechanism of action of propylthiouracil (PTU) in the treatment of hyperthyroidism?",
      answers: [
        { text: "Stimulation of thyroid hormone synthesis" },
        { text: "Inhibition of thyroid hormone synthesis", isCorrect: true },
        { text: "Inhibition of thyroid hormone secretion" },
        { text: "Stimulation of thyroid hormone receptor" },
        { text: "Inhibition of iodine uptake" },
      ],
      Explanation:
        "PTU inhibits the synthesis of thyroid hormones by inhibiting thyroid peroxidase.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin (DDAVP) in the treatment of diabetes insipidus?",
      answers: [
        { text: "Stimulation of ADH receptor", isCorrect: true },
        { text: "Inhibition of ADH secretion" },
        { text: "Stimulation of aldosterone secretion" },
        { text: "Inhibition of vasopressin receptor" },
        { text: "Stimulation of insulin secretion" },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of ADH (vasopressin) that acts on ADH receptors to promote water reabsorption in the kidneys.",
    },
    {
      question:
        "Which of the following describes the mechanism of action of calcitonin in the treatment of osteoporosis?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation" },
        { text: "Stimulation of parathyroid hormone release" },
        { text: "Inhibition of bone resorption", isCorrect: true },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Calcitonin inhibits bone resorption by osteoclasts, leading to decreased bone turnover.",
    },
    {
      question:
        "How do sulfonylureas (e.g., glibenclamide) primarily lower blood glucose levels in diabetes?",
      answers: [
        { text: "Inhibition of glucose absorption" },
        { text: "Inhibition of glucagon secretion" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Sulfonylureas stimulate insulin secretion from pancreatic beta cells.",
    },
    {
      question:
        "Which mechanism of action best describes the effect of alendronate in the treatment of osteoporosis?",
      answers: [
        { text: "Stimulation of osteoclast activity" },
        { text: "Inhibition of bone resorption", isCorrect: true },
        { text: "Stimulation of bone formation" },
        { text: "Inhibition of vitamin D synthesis" },
        { text: "Activation of parathyroid hormone" },
      ],
      Explanation:
        "Alendronate inhibits bone resorption by osteoclasts, leading to increased bone density.",
    },
    {
      question:
        "What is the primary mechanism of action of acarbose in the management of diabetes?",
      answers: [
        { text: "Inhibition of insulin receptor" },
        { text: "Inhibition of glucose absorption", isCorrect: true },
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of glucagon receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Acarbose inhibits alpha-glucosidase enzymes in the intestine, reducing glucose absorption after meals.",
    },
    {
      question:
        "How do somatropin and other growth hormone (GH) replacement therapies primarily function in patients with GH deficiency?",
      answers: [
        { text: "Inhibition of GH receptor" },
        { text: "Stimulation of GH receptor", isCorrect: true },
        { text: "Inhibition of insulin secretion" },
        { text: "Activation of glucagon receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "GH replacement therapies like somatropin stimulate GH receptors to promote growth and metabolic effects.",
    },
    {
      question:
        "Which mechanism of action best describes the effect of metyrapone in the treatment of Cushing's syndrome?",
      answers: [
        { text: "Stimulation of cortisol synthesis" },
        { text: "Inhibition of cortisol synthesis", isCorrect: true },
        { text: "Stimulation of aldosterone synthesis" },
        { text: "Inhibition of cortisol receptor" },
        { text: "Activation of thyroid hormone receptor" },
      ],
      Explanation:
        "Metyrapone inhibits cortisol synthesis by blocking 11-beta-hydroxylase enzyme.",
    },
    {
      question:
        "How does leuprorelin (a GnRH agonist) primarily influence the secretion of gonadotropins (LH and FSH)?",
      answers: [
        { text: "Stimulation of gonadotropin release" },
        { text: "Inhibition of gonadotropin release", isCorrect: true },
        { text: "Stimulation of estrogen production" },
        { text: "Inhibition of progesterone production" },
        { text: "Stimulation of testosterone production" },
      ],
      Explanation:
        "Leuprorelin initially stimulates, but ultimately inhibits, gonadotropin release when used continuously.",
    },
    {
      question:
        "Which mechanism of action best characterizes the effect of levothyroxine on the thyroid gland?",
      answers: [
        { text: "Stimulation of thyroid hormone synthesis", isCorrect: true },
        { text: "Inhibition of thyroid hormone synthesis" },
        { text: "Stimulation of thyroid hormone receptor" },
        { text: "Inhibition of thyroid hormone receptor" },
        { text: "Inhibition of thyroid peroxidase" },
      ],
      Explanation:
        "Levothyroxine acts as a synthetic thyroid hormone, stimulating the synthesis of thyroid hormones in the thyroid gland.",
    },
    {
      question:
        "How do glucocorticoids, like prednisolone, primarily exert their anti-inflammatory effects?",
      answers: [
        { text: "Stimulation of immune cell proliferation" },
        { text: "Inhibition of leukotriene synthesis" },
        { text: "Inhibition of prostaglandin synthesis", isCorrect: true },
        { text: "Stimulation of histamine release" },
        { text: "Activation of cyclooxygenase-1 (COX-1)" },
      ],
      Explanation:
        "Glucocorticoids primarily inhibit the synthesis of prostaglandins, which are pro-inflammatory mediators.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin in the treatment of nocturnal enuresis (bedwetting)?",
      answers: [
        { text: "Stimulation of ADH receptor", isCorrect: true },
        { text: "Inhibition of ADH secretion" },
        { text: "Stimulation of aldosterone secretion" },
        { text: "Inhibition of vasopressin receptor" },
        { text: "Stimulation of insulin secretion" },
      ],
      Explanation:
        "Desmopressin stimulates ADH receptors, leading to increased water reabsorption in the kidneys and reduced nocturnal urine production.",
    },
    {
      question:
        "How do selective estrogen receptor modulators (SERMs) like tamoxifen primarily affect estrogen signaling?",
      answers: [
        { text: "Inhibition of estrogen receptor" },
        { text: "Activation of estrogen receptor", isCorrect: true },
        { text: "Inhibition of estrogen synthesis" },
        { text: "Activation of progesterone receptor" },
        { text: "Inhibition of LH secretion" },
      ],
      Explanation:
        "Tamoxifen acts as an estrogen receptor agonist in certain tissues and antagonist in others, depending on the tissue type.",
    },
    {
      question:
        "Which mechanism of action best describes how alendronate reduces the risk of osteoporotic fractures?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Stimulation of parathyroid hormone release" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Alendronate primarily inhibits bone resorption, helping to increase bone density and reduce the risk of fractures.",
    },
    {
      question:
        "How does metformin primarily affect glucose metabolism in patients with type 2 diabetes?",
      answers: [
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of glucose absorption" },
        { text: "Inhibition of hepatic glucose production", isCorrect: true },
        { text: "Activation of glucagon receptors" },
        { text: "Stimulation of glycolysis" },
      ],
      Explanation:
        "Metformin primarily inhibits hepatic glucose production, reducing blood glucose levels in type 2 diabetes.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant human insulin, such as insulin lispro?",
      answers: [
        { text: "Stimulation of insulin receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Stimulation of glucagon receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
        },
      ],
      Explanation:
        "Insulin lispro stimulates insulin receptors, allowing glucose uptake into cells and lowering blood glucose levels.",
    },
    {
      question:
        "How do thiazolidinediones (e.g., pioglitazone) primarily improve insulin sensitivity in diabetes?",
      answers: [
        { text: "Inhibition of insulin receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
          isCorrect: true,
        },
        { text: "Stimulation of glucagon secretion" },
        { text: "Stimulation of glycolysis" },
      ],
      Explanation:
        "Thiazolidinediones activate PPAR-gamma, improving insulin sensitivity and regulating glucose metabolism.",
    },
    {
      question:
        "Which of the following best describes the mechanism of action of somatropin (recombinant human growth hormone)?",
      answers: [
        { text: "Inhibition of growth hormone receptor" },
        { text: "Stimulation of growth hormone receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Somatropin stimulates growth hormone receptors, promoting growth and metabolic effects in patients with growth hormone deficiency.",
    },
    {
      question:
        "How does propylthiouracil (PTU) primarily reduce thyroid hormone levels in hyperthyroidism?",
      answers: [
        { text: "Stimulation of thyroid hormone synthesis" },
        { text: "Inhibition of thyroid hormone synthesis", isCorrect: true },
        { text: "Inhibition of thyroid hormone receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Inhibition of iodine uptake" },
      ],
      Explanation:
        "PTU inhibits thyroid hormone synthesis by blocking thyroid peroxidase enzyme activity.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
      answers: [
        { text: "Inhibition of bone resorption" },
        { text: "Stimulation of bone formation", isCorrect: true },
        { text: "Inhibition of vitamin D synthesis" },
        { text: "Activation of calcitonin receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Teriparatide stimulates bone formation and increases bone density in osteoporotic patients.",
    },
    {
      question:
        "How do aromatase inhibitors, like anastrozole, primarily affect estrogen levels in breast cancer treatment?",
      answers: [
        { text: "Inhibition of estrogen receptor" },
        { text: "Activation of estrogen receptor", isCorrect: true },
        { text: "Inhibition of estrogen synthesis" },
        { text: "Activation of progesterone receptor" },
        { text: "Inhibition of LH secretion" },
      ],
      Explanation:
        "Aromatase inhibitors block the synthesis of estrogen by inhibiting the aromatase enzyme.",
    },
    {
      question:
        "Which mechanism of action best characterizes the effect of prednisolone in the treatment of autoimmune diseases?",
      answers: [
        { text: "Stimulation of immune cell proliferation" },
        { text: "Inhibition of leukotriene synthesis" },
        { text: "Inhibition of prostaglandin synthesis", isCorrect: true },
        { text: "Activation of histamine release" },
        { text: "Activation of cyclooxygenase-1 (COX-1)" },
      ],
      Explanation:
        "Prednisolone primarily inhibits prostaglandin synthesis, reducing inflammation in autoimmune diseases.",
    },
    {
      question:
        "What is the primary mechanism of action of exenatide in the management of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucagon receptor" },
        { text: "Inhibition of DPP-4 enzyme" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Exenatide stimulates insulin secretion and inhibits glucagon secretion, helping to lower blood glucose levels in type 2 diabetes.",
    },
    {
      question:
        "How does metyrapone primarily influence cortisol levels in patients with Cushing's syndrome?",
      answers: [
        { text: "Stimulation of cortisol synthesis" },
        { text: "Inhibition of cortisol synthesis", isCorrect: true },
        { text: "Stimulation of aldosterone synthesis" },
        { text: "Activation of cortisol receptor" },
        { text: "Activation of thyroid hormone receptor" },
      ],
      Explanation:
        "Metyrapone inhibits cortisol synthesis by blocking 11-beta-hydroxylase enzyme.",
    },
    {
      question:
        "Which of the following best describes the mechanism of action of leuprorelin in the treatment of prostate cancer?",
      answers: [
        { text: "Stimulation of gonadotropin release" },
        { text: "Inhibition of gonadotropin release", isCorrect: true },
        { text: "Stimulation of estrogen production" },
        { text: "Inhibition of progesterone production" },
        { text: "Stimulation of testosterone production" },
      ],
      Explanation:
        "Leuprorelin initially stimulates, but ultimately inhibits, gonadotropin release, reducing testosterone levels in prostate cancer therapy.",
    },
    {
      question:
        "What is the primary mechanism of action of levothyroxine in the treatment of hypothyroidism?",
      answers: [
        { text: "Inhibition of thyroid peroxidase enzyme" },
        { text: "Activation of thyroid hormone receptors", isCorrect: true },
        { text: "Inhibition of thyroid hormone synthesis" },
        { text: "Stimulation of TSH secretion" },
        { text: "Inhibition of iodine uptake" },
      ],
      Explanation:
        "Levothyroxine is a synthetic form of thyroid hormone that binds to and activates thyroid hormone receptors, compensating for low endogenous thyroid hormone levels.",
    },
    {
      question:
        "How do glucocorticoids, such as prednisolone, primarily influence inflammation and immune responses?",
      answers: [
        { text: "Activation of leukotriene synthesis" },
        { text: "Inhibition of cytokine production", isCorrect: true },
        { text: "Stimulation of prostaglandin synthesis" },
        { text: "Inhibition of histamine release" },
        { text: "Activation of mast cells" },
      ],
      Explanation:
        "Glucocorticoids primarily inhibit cytokine production, leading to reduced inflammation and immune responses.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin (DDAVP) in the treatment of diabetes insipidus?",
      answers: [
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of ADH receptor", isCorrect: true },
        { text: "Stimulation of aldosterone secretion" },
        { text: "Inhibition of vasopressin receptor" },
        { text: "Activation of thyroid hormone receptors" },
      ],
      Explanation:
        "Desmopressin binds to and activates ADH receptors in the renal tubules, promoting water reabsorption and reducing urine volume in diabetes insipidus.",
    },
    {
      question:
        "How do somatostatin analogs like octreotide primarily affect hormone secretion in acromegaly and neuroendocrine tumors?",
      answers: [
        { text: "Stimulation of growth hormone secretion" },
        { text: "Inhibition of insulin secretion" },
        { text: "Inhibition of glucagon secretion" },
        { text: "Inhibition of growth hormone secretion", isCorrect: true },
        { text: "Activation of insulin receptors" },
      ],
      Explanation:
        "Octreotide binds to somatostatin receptors and inhibits the secretion of growth hormone and other peptides, reducing hormonal excess in acromegaly and neuroendocrine tumors.",
    },
    {
      question:
        "What is the primary mechanism of action of glucagon-like peptide-1 (GLP-1) agonists like exenatide in the treatment of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucagon receptor" },
        { text: "Inhibition of DPP-4 enzyme" },
        { text: "Stimulation of insulin secretion" },
        { text: "Activation of GLP-1 receptors", isCorrect: true },
        { text: "Inhibition of glucose absorption" },
      ],
      Explanation:
        "GLP-1 agonists like exenatide bind to and activate GLP-1 receptors, stimulating insulin secretion and inhibiting glucagon release in type 2 diabetes.",
    },
    {
      question:
        "How do thiazolidinediones (e.g., pioglitazone) primarily improve insulin sensitivity in type 2 diabetes?",
      answers: [
        { text: "Inhibition of insulin receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
          isCorrect: true,
        },
        { text: "Stimulation of glucagon secretion" },
        { text: "Activation of glycolysis" },
      ],
      Explanation:
        "Thiazolidinediones activate PPAR-gamma, which regulates genes involved in glucose and lipid metabolism, improving insulin sensitivity in type 2 diabetes.",
    },
    {
      question:
        "What is the primary mechanism of action of propylthiouracil (PTU) in the treatment of hyperthyroidism?",
      answers: [
        { text: "Stimulation of thyroid hormone synthesis" },
        { text: "Inhibition of thyroid hormone synthesis", isCorrect: true },
        { text: "Inhibition of thyroid hormone receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Inhibition of iodine uptake" },
      ],
      Explanation:
        "PTU inhibits thyroid hormone synthesis by blocking thyroid peroxidase enzyme activity, reducing excessive thyroid hormone production in hyperthyroidism.",
    },
    {
      question:
        "How does calcitonin primarily affect bone metabolism and calcium homeostasis?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Stimulation of parathyroid hormone release" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Calcitonin inhibits bone resorption by osteoclasts, helping to maintain bone density and calcium homeostasis.",
    },
    {
      question:
        "What is the primary mechanism of action of sulfonylureas (e.g., glibenclamide) in the treatment of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucose absorption" },
        { text: "Inhibition of glucagon secretion" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Sulfonylureas stimulate insulin secretion from pancreatic beta cells, which helps lower blood glucose levels in type 2 diabetes.",
    },
    {
      question:
        "How do alpha-glucosidase inhibitors like acarbose primarily affect postprandial blood glucose levels in diabetes management?",
      answers: [
        { text: "Activation of insulin receptors" },
        { text: "Inhibition of glucose absorption", isCorrect: true },
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of glucagon receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Acarbose inhibits alpha-glucosidase enzymes in the intestine, delaying carbohydrate digestion and reducing post-meal glucose spikes.",
    },
    {
      question:
        "What is the primary mechanism of action of somatropin (recombinant human growth hormone) in growth hormone deficiency?",
      answers: [
        { text: "Inhibition of growth hormone receptor" },
        { text: "Stimulation of growth hormone receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Somatropin binds to and stimulates growth hormone receptors, promoting growth and metabolic effects in patients with growth hormone deficiency.",
    },
    {
      question:
        "How does metyrapone primarily affect cortisol levels in the treatment of Cushing's syndrome?",
      answers: [
        { text: "Stimulation of cortisol synthesis" },
        { text: "Inhibition of cortisol synthesis", isCorrect: true },
        { text: "Stimulation of aldosterone synthesis" },
        { text: "Activation of cortisol receptor" },
        { text: "Activation of thyroid hormone receptor" },
      ],
      Explanation:
        "Metyrapone inhibits cortisol synthesis by blocking the 11-beta-hydroxylase enzyme, reducing cortisol levels in Cushing's syndrome.",
    },
    {
      question:
        "What is the primary mechanism of action of leuprorelin (a GnRH agonist) in the treatment of hormone-sensitive prostate cancer?",
      answers: [
        { text: "Stimulation of gonadotropin release" },
        { text: "Inhibition of gonadotropin release", isCorrect: true },
        { text: "Stimulation of estrogen production" },
        { text: "Inhibition of progesterone production" },
        { text: "Stimulation of testosterone production" },
      ],
      Explanation:
        "Leuprorelin initially stimulates, but ultimately inhibits, gonadotropin release, reducing testosterone levels in hormone-sensitive prostate cancer.",
    },
    {
      question:
        "How do bisphosphonates like alendronate primarily reduce the risk of osteoporotic fractures?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Stimulation of calcium absorption" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Bisphosphonates like alendronate primarily inhibit bone resorption, increasing bone density and reducing the risk of fractures in osteoporosis.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant insulin lispro in the management of diabetes mellitus?",
      answers: [
        { text: "Stimulation of insulin receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Stimulation of glucagon receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
        },
      ],
      Explanation:
        "Insulin lispro stimulates insulin receptors, promoting glucose uptake into cells and lowering blood glucose levels in diabetes.",
    },
    {
      question:
        "How does prednisolone primarily exert its anti-inflammatory effects in the treatment of autoimmune diseases?",
      answers: [
        { text: "Stimulation of immune cell proliferation" },
        { text: "Inhibition of leukotriene synthesis" },
        { text: "Inhibition of prostaglandin synthesis", isCorrect: true },
        { text: "Activation of histamine release" },
        { text: "Activation of cyclooxygenase-1 (COX-1)" },
      ],
      Explanation:
        "Prednisolone primarily inhibits prostaglandin synthesis, reducing inflammation in autoimmune diseases.",
    },
    {
      question:
        "What is the primary mechanism of action of exenatide in the management of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucagon receptor" },
        { text: "Inhibition of DPP-4 enzyme" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Exenatide stimulates insulin secretion and inhibits glucagon secretion, helping to lower blood glucose levels in type 2 diabetes.",
    },
    {
      question:
        "How does metyrosine primarily influence catecholamine levels in the treatment of pheochromocytoma?",
      answers: [
        { text: "Stimulation of catecholamine synthesis" },
        { text: "Inhibition of catecholamine synthesis", isCorrect: true },
        { text: "Stimulation of catecholamine release" },
        { text: "Inhibition of catecholamine receptors" },
        { text: "Stimulation of thyroid hormone synthesis" },
      ],
      Explanation:
        "Metyrosine inhibits catecholamine synthesis by blocking tyrosine hydroxylase, reducing excessive catecholamine production in pheochromocytoma.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin in the management of diabetes mellitus?",
      answers: [
        { text: "Stimulation of insulin receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Stimulation of glucagon receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
        },
      ],
      Explanation:
        "Insulin binds to and stimulates insulin receptors, facilitating glucose uptake into cells and lowering blood glucose levels in diabetes.",
    },
    {
      question:
        "How do thiazide diuretics like hydrochlorothiazide primarily reduce blood pressure in hypertension treatment?",
      answers: [
        { text: "Stimulation of sodium reabsorption in the kidneys" },
        { text: "Inhibition of potassium secretion" },
        { text: "Inhibition of calcium absorption" },
        { text: "Stimulation of aldosterone production" },
        {
          text: "Inhibition of sodium reabsorption in the kidneys",
          isCorrect: true,
        },
      ],
      Explanation:
        "Thiazide diuretics inhibit sodium reabsorption in the renal tubules, leading to increased water and salt excretion, reducing blood volume and lowering blood pressure.",
    },
    {
      question:
        "What is the primary mechanism of action of methimazole in the treatment of hyperthyroidism?",
      answers: [
        { text: "Stimulation of thyroid hormone synthesis" },
        { text: "Inhibition of thyroid hormone synthesis", isCorrect: true },
        { text: "Inhibition of thyroid hormone receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Inhibition of iodine uptake" },
      ],
      Explanation:
        "Methimazole inhibits thyroid hormone synthesis by blocking the thyroid peroxidase enzyme, reducing excessive thyroid hormone production in hyperthyroidism.",
    },
    {
      question:
        "How does calcitonin primarily affect bone metabolism and calcium homeostasis?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Stimulation of parathyroid hormone release" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Calcitonin inhibits bone resorption by osteoclasts, helping to maintain bone density and calcium homeostasis.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
      answers: [
        { text: "Inhibition of bone resorption" },
        { text: "Stimulation of bone formation", isCorrect: true },
        { text: "Inhibition of vitamin D synthesis" },
        { text: "Activation of calcitonin receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Teriparatide stimulates bone formation and increases bone density in osteoporotic patients.",
    },
    {
      question:
        "How do angiotensin II receptor blockers (ARBs) like losartan primarily lower blood pressure in hypertensive patients?",
      answers: [
        { text: "Inhibition of angiotensin I production" },
        { text: "Activation of ACE enzyme" },
        { text: "Stimulation of aldosterone receptors" },
        { text: "Inhibition of angiotensin II receptors", isCorrect: true },
        { text: "Activation of beta-adrenergic receptors" },
      ],
      Explanation:
        "ARBs block angiotensin II receptors, preventing angiotensin II's effects and lowering blood pressure.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant human growth hormone (somatropin) in the treatment of growth hormone deficiency?",
      answers: [
        { text: "Inhibition of growth hormone receptor" },
        { text: "Stimulation of growth hormone receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Somatropin binds to and stimulates growth hormone receptors, promoting growth and metabolic effects in patients with growth hormone deficiency.",
    },
    {
      question:
        "How does metyrapone primarily affect cortisol levels in the treatment of Cushing's syndrome?",
      answers: [
        { text: "Stimulation of cortisol synthesis" },
        { text: "Inhibition of cortisol synthesis", isCorrect: true },
        { text: "Stimulation of aldosterone synthesis" },
        { text: "Activation of cortisol receptor" },
        { text: "Activation of thyroid hormone receptor" },
      ],
      Explanation:
        "Metyrapone inhibits cortisol synthesis by blocking the 11-beta-hydroxylase enzyme, reducing cortisol levels in Cushing's syndrome.",
    },
    {
      question:
        "What is the primary mechanism of action of leuprorelin (a GnRH agonist) in the treatment of hormone-sensitive prostate cancer?",
      answers: [
        { text: "Stimulation of gonadotropin release" },
        { text: "Inhibition of gonadotropin release", isCorrect: true },
        { text: "Stimulation of estrogen production" },
        { text: "Inhibition of progesterone production" },
        { text: "Stimulation of testosterone production" },
      ],
      Explanation:
        "Leuprorelin initially stimulates, but ultimately inhibits, gonadotropin release, reducing testosterone levels in hormone-sensitive prostate cancer.",
    },
    {
      question:
        "How do bisphosphonates like alendronate primarily reduce the risk of osteoporotic fractures?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Stimulation of calcium absorption" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of vitamin D synthesis" },
      ],
      Explanation:
        "Bisphosphonates like alendronate primarily inhibit bone resorption, increasing bone density and reducing the risk of fractures in osteoporosis.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant insulin lispro in the management of diabetes mellitus?",
      answers: [
        { text: "Stimulation of insulin receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Stimulation of glucagon receptor" },
        { text: "Inhibition of glucose absorption" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
        },
      ],
      Explanation:
        "Insulin lispro stimulates insulin receptors, promoting glucose uptake into cells and lowering blood glucose levels in diabetes.",
    },
    {
      question:
        "How do dopamine agonists like bromocriptine primarily influence prolactin levels in the treatment of hyperprolactinemia?",
      answers: [
        { text: "Stimulation of prolactin synthesis" },
        { text: "Inhibition of dopamine receptor" },
        { text: "Stimulation of dopamine receptor", isCorrect: true },
        { text: "Inhibition of dopamine synthesis" },
        { text: "Stimulation of thyroid hormone synthesis" },
      ],
      Explanation:
        "Dopamine agonists like bromocriptine bind to and stimulate dopamine receptors, inhibiting prolactin release in hyperprolactinemia.",
    },
    {
      question:
        "What is the primary mechanism of action of aromatase inhibitors like anastrozole in the treatment of breast cancer?",
      answers: [
        { text: "Inhibition of estrogen receptor" },
        { text: "Activation of estrogen receptor" },
        { text: "Inhibition of estrogen synthesis", isCorrect: true },
        { text: "Activation of progesterone receptor" },
        { text: "Inhibition of LH secretion" },
      ],
      Explanation:
        "Aromatase inhibitors like anastrozole block the conversion of androgens to estrogen, reducing estrogen levels in breast cancer treatment.",
    },
    {
      question:
        "What is the primary mechanism of action of metformin in the management of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucose absorption" },
        { text: "Activation of insulin receptors" },
        { text: "Inhibition of hepatic glucose production", isCorrect: true },
        { text: "Stimulation of glucagon secretion" },
        { text: "Activation of glycolysis" },
      ],
      Explanation:
        "Metformin primarily inhibits hepatic glucose production, improving insulin sensitivity in type 2 diabetes.",
    },
    {
      question:
        "How do angiotensin-converting enzyme (ACE) inhibitors like enalapril primarily reduce blood pressure in hypertension management?",
      answers: [
        { text: "Inhibition of angiotensin II receptor" },
        { text: "Inhibition of ACE enzyme", isCorrect: true },
        { text: "Stimulation of aldosterone receptors" },
        { text: "Inhibition of angiotensin I production" },
        { text: "Activation of beta-adrenergic receptors" },
      ],
      Explanation:
        "ACE inhibitors block the ACE enzyme, preventing the conversion of angiotensin I to angiotensin II and reducing blood pressure.",
    },
    {
      question:
        "What is the primary mechanism of action of liraglutide (a GLP-1 agonist) in the treatment of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucagon receptor" },
        { text: "Inhibition of DPP-4 enzyme" },
        { text: "Stimulation of insulin secretion", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Liraglutide stimulates insulin secretion and inhibits glucagon secretion, helping to lower blood glucose levels in type 2 diabetes.",
    },
    {
      question:
        "How does cabergoline primarily influence prolactin levels in the treatment of hyperprolactinemia?",
      answers: [
        { text: "Stimulation of prolactin synthesis" },
        { text: "Inhibition of dopamine receptor" },
        { text: "Stimulation of dopamine receptor", isCorrect: true },
        { text: "Inhibition of dopamine synthesis" },
        { text: "Stimulation of thyroid hormone synthesis" },
      ],
      Explanation:
        "Cabergoline is a dopamine receptor agonist, which inhibits prolactin secretion by stimulating dopamine receptors in the pituitary gland.",
    },
    {
      question:
        "What is the primary mechanism of action of pioglitazone (a thiazolidinedione) in the management of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucose absorption" },
        { text: "Inhibition of glucagon secretion" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
          isCorrect: true,
        },
        { text: "Stimulation of insulin receptor" },
        { text: "Activation of glycolysis" },
      ],
      Explanation:
        "Pioglitazone activates PPAR-gamma, a nuclear receptor that regulates genes involved in glucose and lipid metabolism, improving insulin sensitivity in type 2 diabetes.",
    },
    {
      question:
        "How do anticoagulants like warfarin primarily reduce the risk of blood clot formation?",
      answers: [
        { text: "Inhibition of platelet activation" },
        { text: "Activation of fibrinolysis" },
        {
          text: "Inhibition of vitamin K-dependent clotting factors",
          isCorrect: true,
        },
        { text: "Stimulation of platelet aggregation" },
        { text: "Activation of endothelial cells" },
      ],
      Explanation:
        "Warfarin inhibits the synthesis of vitamin K-dependent clotting factors, reducing blood clot formation.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant human erythropoietin (epoetin alfa) in the treatment of anemia?",
      answers: [
        { text: "Inhibition of red blood cell destruction" },
        { text: "Stimulation of red blood cell production", isCorrect: true },
        { text: "Inhibition of iron absorption" },
        { text: "Activation of leukocytes" },
        { text: "Inhibition of platelet aggregation" },
      ],
      Explanation:
        "Epoetin alfa stimulates the production of red blood cells in the bone marrow, alleviating anemia.",
    },
    {
      question:
        "How does denosumab primarily reduce the risk of fractures in osteoporosis?",
      answers: [
        { text: "Stimulation of bone resorption" },
        { text: "Inhibition of bone formation", isCorrect: true },
        { text: "Activation of vitamin D synthesis" },
        { text: "Inhibition of bone mineralization" },
        { text: "Stimulation of calcium absorption" },
      ],
      Explanation:
        "Denosumab primarily inhibits bone resorption by binding to RANKL, a protein involved in osteoclast activation, leading to increased bone density.",
    },
    {
      question:
        "What is the primary mechanism of action of anastrozole (an aromatase inhibitor) in the treatment of breast cancer?",
      answers: [
        { text: "Inhibition of estrogen receptor" },
        { text: "Activation of estrogen receptor" },
        { text: "Inhibition of estrogen synthesis", isCorrect: true },
        { text: "Activation of progesterone receptor" },
        { text: "Inhibition of LH secretion" },
      ],
      Explanation:
        "Aromatase inhibitors like anastrozole block the conversion of androgens to estrogen, reducing estrogen levels in breast cancer treatment.",
    },
    {
      question:
        "How does desmopressin (DDAVP) primarily affect urine volume and concentration in the treatment of diabetes insipidus?",
      answers: [
        { text: "Stimulation of urine production" },
        { text: "Inhibition of ADH receptor" },
        { text: "Stimulation of aldosterone secretion" },
        { text: "Inhibition of vasopressin receptor", isCorrect: true },
        { text: "Activation of thyroid hormone receptors" },
      ],
      Explanation:
        "Desmopressin binds to and activates vasopressin receptors in the renal tubules, promoting water reabsorption and reducing urine volume in diabetes insipidus.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
      answers: [
        { text: "Inhibition of bone resorption" },
        { text: "Stimulation of bone formation", isCorrect: true },
        { text: "Inhibition of vitamin D synthesis" },
        { text: "Activation of calcitonin receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Teriparatide stimulates bone formation and increases bone density in osteoporotic patients.",
    },
    {
      question:
        "How do alpha-glucosidase inhibitors like acarbose primarily affect postprandial blood glucose levels in diabetes management?",
      answers: [
        { text: "Activation of insulin receptors" },
        { text: "Inhibition of glucose absorption", isCorrect: true },
        { text: "Stimulation of insulin secretion" },
        { text: "Inhibition of glucagon receptor" },
        { text: "Activation of AMP-activated protein kinase (AMPK)" },
      ],
      Explanation:
        "Acarbose inhibits alpha-glucosidase enzymes in the intestine, delaying carbohydrate digestion and reducing post-meal glucose spikes.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant human growth hormone (somatropin) in the treatment of growth hormone deficiency?",
      answers: [
        { text: "Inhibition of growth hormone receptor" },
        { text: "Stimulation of growth hormone receptor", isCorrect: true },
        { text: "Inhibition of insulin receptor" },
        { text: "Activation of thyroid hormone receptor" },
        { text: "Stimulation of aldosterone secretion" },
      ],
      Explanation:
        "Somatropin binds to and stimulates growth hormone receptors, promoting growth and metabolic effects in patients with growth hormone deficiency.",
    },
    {
      question:
        "How does cabergoline primarily influence prolactin levels in the treatment of hyperprolactinemia?",
      answers: [
        { text: "Stimulation of prolactin synthesis" },
        { text: "Inhibition of dopamine receptor" },
        { text: "Stimulation of dopamine receptor", isCorrect: true },
        { text: "Inhibition of dopamine synthesis" },
        { text: "Stimulation of thyroid hormone synthesis" },
      ],
      Explanation:
        "Cabergoline is a dopamine receptor agonist, which inhibits prolactin secretion by stimulating dopamine receptors in the pituitary gland.",
    },
    {
      question:
        "What is the primary mechanism of action of pioglitazone (a thiazolidinedione) in the management of type 2 diabetes?",
      answers: [
        { text: "Inhibition of glucose absorption" },
        { text: "Inhibition of glucagon secretion" },
        {
          text: "Activation of peroxisome proliferator-activated receptor-gamma (PPAR-gamma)",
          isCorrect: true,
        },
        { text: "Stimulation of insulin receptor" },
        { text: "Activation of glycolysis" },
      ],
      Explanation:
        "Pioglitazone activates PPAR-gamma, a nuclear receptor that regulates genes involved in glucose and lipid metabolism, improving insulin sensitivity in type 2 diabetes.",
    },
    {
      question:
        "How do anticoagulants like warfarin primarily reduce the risk of blood clot formation?",
      answers: [
        { text: "Inhibition of platelet activation" },
        { text: "Activation of fibrinolysis" },
        {
          text: "Inhibition of vitamin K-dependent clotting factors",
          isCorrect: true,
        },
        { text: "Stimulation of platelet aggregation" },
        { text: "Activation of endothelial cells" },
      ],
      Explanation:
        "Warfarin inhibits the synthesis of vitamin K-dependent clotting factors, reducing blood clot formation.",
    },
    {
      question:
        "What is the primary mechanism of action of recombinant human erythropoietin (epoetin alfa) in the treatment of anemia?",
      answers: [
        { text: "Inhibition of red blood cell destruction" },
        { text: "Stimulation of red blood cell production", isCorrect: true },
        { text: "Inhibition of iron absorption" },
        { text: "Activation of leukocytes" },
        { text: "Inhibition of platelet aggregation" },
      ],
      Explanation:
        "Epoetin alfa stimulates the production of red blood cells in the bone marrow, alleviating anemia.",
    },
    {
      question:
        "A 55-year-old patient with type 2 diabetes is taking metformin for glycemic control. The physician prescribes gemfibrozil for hyperlipidemia. What is the most likely drug interaction between metformin and gemfibrozil?",
      answers: [
        { text: "Increased risk of hypoglycemia" },
        { text: "Decreased effectiveness of metformin" },
        { text: "Increased risk of lactic acidosis", isCorrect: true },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased gemfibrozil absorption" },
      ],
      Explanation:
        "Gemfibrozil can increase the risk of lactic acidosis when combined with metformin, particularly in patients with renal impairment. Patients should be closely monitored for signs of lactic acidosis.",
    },
    {
      question:
        "A 45-year-old patient with hypertension is prescribed lisinopril for blood pressure control. The patient is also taking allopurinol for gout. What is the potential drug interaction between lisinopril and allopurinol?",
      answers: [
        { text: "Increased risk of angioedema" },
        { text: "Decreased blood pressure control" },
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Increased risk of gout flare-ups" },
        { text: "Decreased allopurinol effectiveness" },
      ],
      Explanation:
        "Lisinopril can increase potassium levels, and allopurinol may exacerbate hyperkalemia. Regular monitoring of potassium levels is essential when these drugs are used together.",
    },
    {
      question:
        "A 60-year-old patient with hypothyroidism takes levothyroxine daily. The patient develops constipation and is started on calcium carbonate for calcium supplementation. What is the potential drug interaction between levothyroxine and calcium carbonate?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased calcium absorption" },
        { text: "Increased risk of constipation" },
        { text: "Decreased calcium carbonate effectiveness" },
      ],
      Explanation:
        "Calcium supplements, including calcium carbonate, can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 50-year-old patient with type 2 diabetes is on insulin therapy. The patient develops an infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased ciprofloxacin absorption" },
      ],
      Explanation:
        "Ciprofloxacin can increase the risk of hypoglycemia when used with insulin. Close monitoring of blood glucose levels is essential, and insulin dosage adjustments may be necessary during antibiotic therapy.",
    },
    {
      question:
        "A 35-year-old patient with hyperthyroidism takes methimazole to manage the condition. The patient develops a skin infection and is prescribed warfarin for anticoagulation. What is the potential drug interaction between methimazole and warfarin?",
      answers: [
        { text: "Decreased warfarin effectiveness" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Increased warfarin metabolism" },
        { text: "Decreased anticoagulant effect of methimazole" },
        { text: "Decreased methimazole absorption" },
      ],
      Explanation:
        "Methimazole may enhance the anticoagulant effect of warfarin, leading to an increased risk of bleeding. Close monitoring of INR and possible warfarin dosage adjustment is necessary.",
    },
    {
      question:
        "A 55-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient develops a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between spironolactone and trimethoprim-sulfamethoxazole?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Trimethoprim-sulfamethoxazole can increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Close monitoring of potassium levels is essential.",
    },
    {
      question:
        "A 40-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient develops a respiratory infection and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients on insulin therapy should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 45-year-old patient with hypothyroidism takes levothyroxine daily. The patient starts a new medication for seizures, phenytoin. What is the potential drug interaction between levothyroxine and phenytoin?",
      answers: [
        { text: "Increased risk of hypothyroidism", isCorrect: true },
        { text: "Decreased phenytoin effectiveness" },
        { text: "Increased risk of thyroid storm" },
        { text: "Increased risk of seizures" },
        { text: "Decreased levothyroxine absorption" },
      ],
      Explanation:
        "Phenytoin can increase the metabolism of levothyroxine, potentially leading to reduced thyroid hormone levels and an increased risk of hypothyroidism. Monitoring thyroid function is important.",
    },
    {
      question:
        "A 60-year-old patient with hypertension takes lisinopril and hydrochlorothiazide. The patient is prescribed ibuprofen for pain relief. What is the potential drug interaction between lisinopril/hydrochlorothiazide and ibuprofen?",
      answers: [
        { text: "Increased risk of angioedema", isCorrect: true },
        { text: "Decreased blood pressure control" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Decreased pain relief" },
        { text: "Decreased absorption of lisinopril/hydrochlorothiazide" },
      ],
      Explanation:
        "Ibuprofen can reduce the effectiveness of ACE inhibitors like lisinopril, potentially increasing the risk of angioedema. Patients should be monitored for signs of angioedema when these drugs are used together.",
    },
    {
      question:
        "A 65-year-old patient with hypertension is on amlodipine therapy. The patient is diagnosed with primary hyperaldosteronism and is started on spironolacton What is the potential drug interaction between amlodipine and spironolactone?",
      answers: [
        { text: "Increased risk of hypokalemia", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hypotension" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hypokalemia when used with amlodipine. Monitoring of potassium levels and blood pressure is necessary.",
    },
    {
      question:
        "A 50-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a respiratory infection and is prescribed clarithromycin. What is the potential drug interaction between metformin and clarithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased metformin absorption" },
        { text: "Increased risk of diarrhea" },
        { text: "Decreased clarithromycin absorption" },
      ],
      Explanation:
        "Clarithromycin can enhance the risk of hypoglycemia when used with metformin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypothyroidism takes levothyroxine daily. The patient is diagnosed with iron-deficiency anemia and is prescribed ferrous sulfate. What is the potential drug interaction between levothyroxine and ferrous sulfate?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased effectiveness of ferrous sulfate" },
        { text: "Decreased iron absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased ferrous sulfate absorption" },
      ],
      Explanation:
        "Ferrous sulfate can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 60-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with a urinary tract infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased ciprofloxacin absorption" },
      ],
      Explanation:
        "Ciprofloxacin can increase the risk of hypoglycemia when used with insulin. Close monitoring of blood glucose levels is essential, and insulin dosage adjustments may be necessary during antibiotic therapy.",
    },
    {
      question:
        "A 45-year-old patient with hyperthyroidism takes methimazole for disease management. The patient develops a skin infection and is prescribed amoxicillin. What is the potential drug interaction between methimazole and amoxicillin?",
      answers: [
        { text: "Decreased amoxicillin effectiveness" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased antithyroid effect of methimazole" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "Methimazole may reduce its antithyroid effect when used concurrently with amoxicillin. Close monitoring of thyroid function is necessary.",
    },
    {
      question:
        "A 70-year-old patient with type 2 diabetes is taking glipizide for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between glipizide and trimethoprim-sulfamethoxazole?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of thrombocytopenia" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased glipizide absorption" },
      ],
      Explanation:
        "Trimethoprim-sulfamethoxazole can increase the risk of hypoglycemia when used with glipizide. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 50-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a sinus infection and is prescribed clarithromycin. What is the potential drug interaction between insulin and clarithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased clarithromycin absorption" },
      ],
      Explanation:
        "Clarithromycin can enhance the risk of hypoglycemia when used with insulin. Patients on insulin therapy should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 65-year-old patient with primary hyperaldosteronism is treated with spironolacton. The patient develops an infection and is prescribed doxycycline. What is the potential drug interaction between spironolactone and doxycycline?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hyperkalemia when used with doxycycline. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypertension is on lisinopril therapy. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
      answers: [
        { text: "Increased risk of angioedema", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Increased risk of gout flare-ups" },
        { text: "Decreased allopurinol absorption" },
      ],
      Explanation:
        "Lisinopril can increase the risk of angioedema, particularly when used with allopurinol. Close monitoring for signs of angioedema is essential.",
    },
    {
      question:
        "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with Helicobacter pylori infection and is prescribed omeprazole, amoxicillin, and clarithromycin. What is the potential drug interaction between levothyroxine and this antibiotic regimen?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Decreased omeprazole absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "The simultaneous use of omeprazole, amoxicillin, and clarithromycin can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 45-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed cephalexin. What is the potential drug interaction between spironolactone and cephalexin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Cephalexin may increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 65-year-old patient with hypertension is taking amlodipine for blood pressure control. The patient is diagnosed with primary hyperaldosteronism and is started on spironolactone. What is the potential drug interaction between amlodipine and spironolactone?",
      answers: [
        { text: "Increased risk of hypokalemia", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hypotension" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hypokalemia when used with amlodipine. Monitoring of potassium levels and blood pressure is necessary.",
    },
    {
      question:
        "A 50-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a respiratory infection and is prescribed clarithromycin. What is the potential drug interaction between metformin and clarithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased metformin absorption" },
        { text: "Increased risk of diarrhea" },
        { text: "Decreased clarithromycin absorption" },
      ],
      Explanation:
        "Clarithromycin can enhance the risk of hypoglycemia when used with metformin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypothyroidism takes levothyroxine daily. The patient is diagnosed with iron-deficiency anemia and is prescribed ferrous sulfate. What is the potential drug interaction between levothyroxine and ferrous sulfate?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased effectiveness of ferrous sulfate" },
        { text: "Decreased iron absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased ferrous sulfate absorption" },
      ],
      Explanation:
        "Ferrous sulfate can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 60-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with a urinary tract infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased ciprofloxacin absorption" },
      ],
      Explanation:
        "Ciprofloxacin can increase the risk of hypoglycemia when used with insulin. Close monitoring of blood glucose levels is essential, and insulin dosage adjustments may be necessary during antibiotic therapy.",
    },
    {
      question:
        "A 45-year-old patient with hyperthyroidism takes methimazole for disease management. The patient develops a skin infection and is prescribed amoxicillin. What is the potential drug interaction between methimazole and amoxicillin?",
      answers: [
        { text: "Decreased amoxicillin effectiveness", isCorrect: true },
        { text: "Increased risk of bleeding" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased antithyroid effect of methimazole" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "Methimazole may reduce its antithyroid effect when used concurrently with amoxicillin. Close monitoring of thyroid function is necessary.",
    },
    {
      question:
        "A 70-year-old patient with type 2 diabetes is taking glipizide for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between glipizide and trimethoprim-sulfamethoxazole?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of thrombocytopenia" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased glipizide absorption" },
      ],
      Explanation:
        "Trimethoprim-sulfamethoxazole can increase the risk of hypoglycemia when used with glipizide. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 50-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a sinus infection and is prescribed clarithromycin. What is the potential drug interaction between insulin and clarithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased clarithromycin absorption" },
      ],
      Explanation:
        "Clarithromycin can enhance the risk of hypoglycemia when used with insulin. Patients on insulin therapy should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed doxycycline. What is the potential drug interaction between spironolactone and doxycycline?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hyperkalemia when used with doxycycline. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypertension is on lisinopril therapy. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
      answers: [
        { text: "Increased risk of angioedema", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Increased risk of gout flare-ups" },
        { text: "Decreased allopurinol absorption" },
      ],
      Explanation:
        "Lisinopril can increase the risk of angioedema, particularly when used with allopurinol. Close monitoring for signs of angioedema is essential.",
    },
    {
      question:
        "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with Helicobacter pylori infection and is prescribed omeprazole, amoxicillin, and clarithromycin. What is the potential drug interaction between levothyroxine and this antibiotic regimen?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Decreased omeprazole absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "The simultaneous use of omeprazole, amoxicillin, and clarithromycin can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 45-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed cephalexin. What is the potential drug interaction between spironolactone and cephalexin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Cephalexin may increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 65-year-old patient with hypertension is taking amlodipine for blood pressure control. The patient is diagnosed with primary hyperaldosteronism and is started on spironolactone. What is the potential drug interaction between amlodipine and spironolactone?",
      answers: [
        { text: "Increased risk of hypokalemia", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hypotension" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hypokalemia when used with amlodipine. Monitoring of potassium levels and blood pressure is necessary.",
    },
    {
      question:
        "A 50-year-old patient with type 2 diabetes is taking metformin for glycemic control. The patient develops a respiratory infection and is prescribed clarithromycin. What is the potential drug interaction between metformin and clarithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased metformin absorption" },
        { text: "Increased risk of diarrhea" },
        { text: "Decreased clarithromycin absorption" },
      ],
      Explanation:
        "Clarithromycin can enhance the risk of hypoglycemia when used with metformin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypothyroidism takes levothyroxine daily. The patient is diagnosed with iron-deficiency anemia and is prescribed ferrous sulfate. What is the potential drug interaction between levothyroxine and ferrous sulfate?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased effectiveness of ferrous sulfate" },
        { text: "Decreased iron absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased ferrous sulfate absorption" },
      ],
      Explanation:
        "Ferrous sulfate can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 70-year-old patient with type 2 diabetes is on metformin therapy. The patient develops a urinary tract infection and is prescribed cephalexin. What is the potential drug interaction between metformin and cephalexin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased metformin absorption" },
        { text: "Increased risk of diarrhea" },
        { text: "Decreased cephalexin absorption" },
      ],
      Explanation:
        "Cephalexin may increase the risk of hypoglycemia when used with metformin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 50-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed doxycycline. What is the potential drug interaction between spironolactone and doxycycline?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Spironolactone can increase potassium levels, potentially leading to hyperkalemia when used with doxycycline. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 45-year-old patient with type 2 diabetes is taking glimepiride for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed trimethoprim-sulfamethoxazole. What is the potential drug interaction between glimepiride and trimethoprim-sulfamethoxazole?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of thrombocytopenia" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased glimepiride absorption" },
      ],
      Explanation:
        "Trimethoprim-sulfamethoxazole can increase the risk of hypoglycemia when used with glimepiride. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with gastroesophageal reflux disease (GERD) and is prescribed omeprazole. What is the potential drug interaction between levothyroxine and omeprazole?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased effectiveness of omeprazole" },
        { text: "Decreased omeprazole absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased GERD symptoms" },
      ],
      Explanation:
        "Omeprazole can impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 35-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a skin infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased ciprofloxacin absorption" },
      ],
      Explanation:
        "Ciprofloxacin can increase the risk of hypoglycemia when used with insulin. Close monitoring of blood glucose levels is essential, and insulin dosage adjustments may be necessary during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypertension is on lisinopril therapy. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
      answers: [
        { text: "Increased risk of angioedema", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Increased risk of gout flare-ups" },
        { text: "Decreased allopurinol absorption" },
      ],
      Explanation:
        "Lisinopril can increase the risk of angioedema, particularly when used with allopurinol. Close monitoring for signs of angioedema is essential.",
    },
    {
      question:
        "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a urinary tract infection and is prescribed nitrofurantoin. What is the potential drug interaction between spironolactone and nitrofurantoin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Nitrofurantoin can increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 50-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed amoxicillin. What is the potential drug interaction between spironolactone and amoxicillin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "Amoxicillin may increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 55-year-old patient with type 2 diabetes is taking glimepiride for glycemic control. The patient is diagnosed with a urinary tract infection and is prescribed cephalexin. What is the potential drug interaction between glimepiride and cephalexin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of thrombocytopenia" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased glimepiride absorption" },
      ],
      Explanation:
        "Cephalexin can increase the risk of hypoglycemia when used with glimepiride. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 60-year-old patient with primary hypothyroidism takes levothyroxine daily. The patient is diagnosed with Helicobacter pylori infection and is prescribed omeprazole, clarithromycin, and amoxicillin. What is the potential drug interaction between levothyroxine and this antibiotic regimen?",
      answers: [
        { text: "Decreased levothyroxine absorption", isCorrect: true },
        { text: "Decreased effectiveness of omeprazole" },
        { text: "Decreased omeprazole absorption" },
        { text: "Increased risk of thyroid storm" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "The combination of omeprazole, clarithromycin, and amoxicillin may impair the absorption of levothyroxine. These medications should be taken at different times to avoid interference with levothyroxine absorption.",
    },
    {
      question:
        "A 35-year-old patient with type 1 diabetes uses an insulin pump for glycemic control. The patient is diagnosed with a sinus infection and is prescribed ciprofloxacin. What is the potential drug interaction between insulin and ciprofloxacin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased ciprofloxacin absorption" },
      ],
      Explanation:
        "Ciprofloxacin can increase the risk of hypoglycemia when used with insulin. Close monitoring of blood glucose levels is essential, and insulin dosage adjustments may be necessary during antibiotic therapy.",
    },
    {
      question:
        "A 55-year-old patient with hypertension is on lisinopril therapy. The patient is diagnosed with gout and is prescribed allopurinol. What is the potential drug interaction between lisinopril and allopurinol?",
      answers: [
        { text: "Increased risk of angioedema", isCorrect: true },
        { text: "Decreased antihypertensive effectiveness" },
        { text: "Increased risk of hyperkalemia" },
        { text: "Increased risk of gout flare-ups" },
        { text: "Decreased allopurinol absorption" },
      ],
      Explanation:
        "Lisinopril can increase the risk of angioedema, particularly when used with allopurinol. Close monitoring for signs of angioedema is essential.",
    },
    {
      question:
        "A 65-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a urinary tract infection and is prescribed nitrofurantoin. What is the potential drug interaction between spironolactone and nitrofurantoin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased urinary tract infection symptoms" },
        { text: "Decreased spironolactone absorption" },
      ],
      Explanation:
        "Nitrofurantoin can increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "A 40-year-old patient with type 2 diabetes is on insulin therapy. The patient is diagnosed with pneumonia and is prescribed azithromycin. What is the potential drug interaction between insulin and azithromycin?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased insulin resistance" },
        { text: "Increased risk of hyperglycemia" },
        { text: "Decreased azithromycin absorption" },
      ],
      Explanation:
        "Azithromycin can enhance the risk of hypoglycemia when used with insulin. Patients should monitor their blood glucose levels closely during antibiotic therapy.",
    },
    {
      question:
        "A 50-year-old patient with primary hyperaldosteronism is treated with spironolactone. The patient is diagnosed with a skin infection and is prescribed amoxicillin. What is the potential drug interaction between spironolactone and amoxicillin?",
      answers: [
        { text: "Increased risk of hyperkalemia", isCorrect: true },
        { text: "Decreased antibiotic effectiveness" },
        { text: "Increased risk of fluid retention" },
        { text: "Decreased skin infection symptoms" },
        { text: "Decreased amoxicillin absorption" },
      ],
      Explanation:
        "Amoxicillin may increase potassium levels and enhance the risk of hyperkalemia when used with spironolactone. Monitoring of potassium levels is necessary.",
    },
    {
      question:
        "Which of the following adverse effects is most commonly associated with long-term use of metformin in diabetic patients?",
      answers: [
        { text: "Gastrointestinal disturbances", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hypoglycemia" },
        { text: "Peripheral neuropathy" },
        { text: "Weight gain" },
      ],
      Explanation:
        "Metformin is known to cause gastrointestinal disturbances, such as diarrhea, in some patients.",
    },
    {
      question:
        "A patient on long-term glucocorticoid therapy is at risk of developing which adverse effect primarily associated with these drugs?",
      answers: [
        { text: "Osteoporosis", isCorrect: true },
        { text: "Thrombocytopenia" },
        { text: "Hyperthyroidism" },
        { text: "Cardiac arrhythmias" },
        { text: "Allergic reactions" },
      ],
      Explanation:
        "Long-term use of glucocorticoids can lead to osteoporosis due to their negative effects on bone density.",
    },
    {
      question:
        "Which of the following is a potential side effect of thyroxine (levothyroxin replacement therapy for hypothyroidism?",
      answers: [
        { text: "Hypertension" },
        { text: "Hypoglycemia" },
        { text: "Weight loss" },
        { text: "Bradycardia", isCorrect: true },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "Thyroxine replacement therapy can cause bradycardia as an adverse effect, especially if the dose is too high.",
    },
    {
      question:
        "In patients taking somatostatin analogs like octreotide for acromegaly, which adverse effect should be closely monitored?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hypotension" },
        { text: "Hyperglycemia", isCorrect: true },
        { text: "Hypercalcemia" },
        { text: "Peripheral edema" },
      ],
      Explanation:
        "Somatostatin analogs like octreotide can cause hyperglycemia and should be closely monitored in patients.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of thiazolidinediones (e.g., pioglitazone in diabetes management?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Weight loss" },
        { text: "Fluid retention", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Insomnia" },
      ],
      Explanation:
        "Thiazolidinediones like pioglitazone can lead to fluid retention and edema as an adverse effect.",
    },
    {
      question:
        "Patients taking propylthiouracil or methimazole for hyperthyroidism should be educated about the risk of which severe adverse effect?",
      answers: [
        { text: "Nephrotoxicity" },
        { text: "Pancreatitis" },
        { text: "Agranulocytosis", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Hepatitis" },
      ],
      Explanation:
        "These antithyroid drugs (propylthiouracil and methimazole) can cause agranulocytosis, which is a severe and potentially life-threatening adverse effect.",
    },
    {
      question:
        "Which of the following side effects is associated with the use of exenatide, a glucagon-like peptide-1 receptor agonist, for diabetes management?",
      answers: [
        { text: "Hypotension" },
        { text: "Hypercholesterolemia" },
        { text: "Pancreatitis", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Exenatide has been associated with an increased risk of pancreatitis in some patients.",
    },
    {
      question:
        "A patient on long-term treatment with insulin may develop lipodystrophy, which is characterized by which of the following?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Insomnia" },
        { text: "Injection site fat loss or hypertrophy", isCorrect: true },
        { text: "Hypercholesterolemia" },
        { text: "Diarrhea" },
      ],
      Explanation:
        "Lipodystrophy in patients on insulin therapy can result in injection site fat loss or hypertrophy.",
    },
    {
      question:
        "Which of the following is a common adverse effect of long-term therapy with bisphosphonates such as alendronate for osteoporosis?",
      answers: [
        { text: "Hypocalcemia" },
        { text: "Hyperkalemia" },
        { text: "Renal stones" },
        { text: "Esophagitis", isCorrect: true },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "Long-term use of bisphosphonates can lead to esophagitis as a potential side effect.",
    },
    {
      question:
        "What adverse effect is associated with the use of leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, in the treatment of prostate cancer?",
      answers: [
        { text: "Gynecomastia", isCorrect: true },
        { text: "Hyperglycemia" },
        { text: "Thrombocytopenia" },
        { text: "Hypertension" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Leuprolide therapy in prostate cancer can lead to gynecomastia as an adverse effect.",
    },
    {
      question:
        "Patients taking desmopressin (DDAVP) for diabetes insipidus should be monitored for which potential side effect?",
      answers: [
        { text: "Hyponatremia", isCorrect: true },
        { text: "Hypernatremia" },
        { text: "Hyperkalemia" },
        { text: "Hypocalcemia" },
        { text: "Hypertension" },
      ],
      Explanation:
        "Desmopressin can cause hyponatremia, especially if the dosage is not adjusted correctly.",
    },
    {
      question:
        "Which adverse effect is associated with the use of anastrozole, an aromatase inhibitor, in the treatment of breast cancer?",
      answers: [
        { text: "Hypothyroidism" },
        { text: "Diarrhea" },
        { text: "Hot flashes" },
        { text: "Osteoporosis", isCorrect: true },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "Aromatase inhibitors like anastrozole can increase the risk of osteoporosis in postmenopausal women.",
    },
    {
      question:
        "What is a potential side effect of long-term use of prednisone in the management of autoimmune disorders?",
      answers: [
        { text: "Hypertension" },
        { text: "Weight loss" },
        { text: "Hypercalcemia" },
        { text: "Osteoporosis", isCorrect: true },
        { text: "Insomnia" },
      ],
      Explanation:
        "Long-term use of prednisone can lead to osteoporosis as an adverse effect.",
    },
    {
      question:
        "Which of the following side effects is associated with the use of metyrapone in the management of Cushing's syndrome?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Weight gain" },
        { text: "Thrombocytopenia" },
        { text: "Diarrhea" },
      ],
      Explanation:
        "Metyrapone therapy can lead to hypoglycemia as an adverse effect.",
    },
    {
      question:
        "Patients taking pioglitazone for diabetes should be monitored for which potential adverse effect?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Blurred vision" },
        { text: "Peripheral edema", isCorrect: true },
        { text: "Hypocalcemia" },
        { text: "Insomnia" },
      ],
      Explanation:
        "Pioglitazone can cause peripheral edema and fluid retention as an adverse effect.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of metyrapone in the management of Cushing's syndrome?",
      answers: [
        { text: "Hypokalemia" },
        { text: "Hyperglycemia" },
        { text: "Weight loss" },
        { text: "Peripheral neuropathy" },
        { text: "Hypertension", isCorrect: true },
      ],
      Explanation:
        "Long-term use of metyrapone can lead to hypertension as an adverse effect.",
    },
    {
      question:
        "What is a potential side effect of long-term use of acarbose, an alpha-glucosidase inhibitor, in the management of diabetes mellitus?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Weight gain" },
        { text: "Liver toxicity", isCorrect: true },
        { text: "Hypertension" },
        { text: "Pancreatitis" },
      ],
      Explanation:
        "Acarbose can potentially cause liver toxicity as an adverse effect.",
    },
    {
      question:
        "Patients on long-term thyroid hormone replacement therapy should be monitored for which potential side effect?",
      answers: [
        { text: "Hypotension" },
        { text: "Hypercalcemia" },
        { text: "Hypercholesterolemia", isCorrect: true },
        { text: "Hypothyroidism" },
        { text: "Hypoglycemia" },
      ],
      Explanation:
        "Long-term thyroid hormone replacement therapy can lead to hypercholesterolemia as an adverse effect.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of pasireotide, a somatostatin analog, in the treatment of Cushing's disease?",
      answers: [
        { text: "Hypotension" },
        { text: "Hypocalcemia" },
        { text: "Hyperkalemia" },
        { text: "Bradycardia" },
        { text: "Hyperglycemia", isCorrect: true },
      ],
      Explanation:
        "Pasireotide therapy can lead to hyperglycemia as an adverse effect in some patients.",
    },
    {
      question:
        "Patients taking cabergoline for hyperprolactinemia should be monitored for which potential adverse effect?",
      answers: [
        { text: "Hypertension" },
        { text: "Impulse control disorders", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia" },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "Cabergoline has been associated with impulse control disorders as an adverse effect in some patients.",
    },
    {
      question:
        "Patients taking somatropin (recombinant human growth hormone) for growth hormone deficiency should be monitored for the potential development of which adverse effect?",
      answers: [
        { text: "Hyperglycemia", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hypercalcemia" },
        { text: "Osteoporosis" },
        { text: "Weight gain" },
      ],
      Explanation:
        "Somatropin therapy can lead to hyperglycemia as an adverse effect, especially in some patients.",
    },
    {
      question:
        "Which of the following side effects is commonly associated with the use of nateglinide, a meglitinide analog, for diabetes management?",
      answers: [
        { text: "Weight loss" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Peripheral edema" },
        { text: "Thrombocytopenia" },
        { text: "Diarrhea" },
      ],
      Explanation:
        "Nateglinide is known to cause hypoglycemia as an adverse effect due to its mechanism of action.",
    },
    {
      question:
        "Patients taking exenatide for diabetes management should be aware of which potential side effect that can occur shortly after administration?",
      answers: [
        { text: "Hypercholesterolemia" },
        { text: "Pancreatitis", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Bradycardia" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Exenatide has been associated with an increased risk of pancreatitis, which can occur shortly after administration.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of tolcapone, a COMT inhibitor, in the management of Parkinson's disease?",
      answers: [
        { text: "Hypertension" },
        { text: "Weight loss" },
        { text: "Hepatotoxicity", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Hypoglycemia" },
      ],
      Explanation:
        "Tolcapone has a risk of hepatotoxicity, which is a potential adverse effect of long-term use.",
    },
    {
      question:
        "A patient on long-term therapy with levothyroxine for hypothyroidism may experience which adverse effect if the dose is too high?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia" },
        { text: "Tachycardia", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Weight loss" },
      ],
      Explanation:
        "Excessive levothyroxine can lead to tachycardia, especially if the dose is too high.",
    },
    {
      question:
        "Which adverse effect is associated with the use of pramlintide, an amylin analog, in diabetes management?",
      answers: [
        { text: "Weight gain" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Hypertension" },
        { text: "Peripheral neuropathy" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Pramlintide can cause hypoglycemia as an adverse effect, especially when used in combination with insulin.",
    },
    {
      question:
        "Patients taking bromocriptine for hyperprolactinemia should be monitored for which potential side effect?",
      answers: [
        { text: "Hypertension" },
        { text: "Impulse control disorders", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Hyperkalemia" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Bromocriptine has been associated with impulse control disorders as an adverse effect in some patients.",
    },
    {
      question:
        "What is a potential side effect of long-term use of cinacalcet, a calcimimetic agent, in the management of secondary hyperparathyroidism in end-stage renal disease?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hypocalcemia" },
        { text: "Weight loss" },
        { text: "Bradycardia" },
        { text: "Hypercalcemia", isCorrect: true },
      ],
      Explanation:
        "Long-term use of cinacalcet can lead to hypercalcemia as an adverse effect, primarily due to its effects on calcium levels.",
    },
    {
      question:
        "Patients taking methimazole for hyperthyroidism should be monitored for which potential adverse effect, especially during the initial weeks of therapy?",
      answers: [
        { text: "Agranulocytosis", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Weight loss" },
        { text: "Peripheral neuropathy" },
        { text: "Hepatitis" },
      ],
      Explanation:
        "Methimazole therapy, especially during the initial weeks, can lead to agranulocytosis, a severe adverse effect.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of desmopressin (DDAVP) in the treatment of von Willebrand disease or nocturnal enuresis?",
      answers: [
        { text: "Hypernatremia" },
        { text: "Hyponatremia", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Hypocalcemia" },
        { text: "Hypertension" },
      ],
      Explanation:
        "Long-term use of desmopressin can lead to hyponatremia as an adverse effect if not appropriately managed.",
    },
    {
      question:
        "Patients taking sitagliptin, a dipeptidyl peptidase-4 (DPP-4) inhibitor, for diabetes management should be monitored for which potential side effect?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Weight gain" },
        { text: "Pancreatitis", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Sitagliptin has been associated with an increased risk of pancreatitis as an adverse effect.",
    },
    {
      question:
        "What is a potential side effect of long-term use of alendronate in the management of osteoporosis?",
      answers: [
        { text: "Hypertension" },
        { text: "Hyperkalemia" },
        { text: "Thrombocytopenia" },
        { text: "Esophagitis", isCorrect: true },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "Long-term use of alendronate can lead to esophagitis, which is a potential side effect.",
    },
    {
      question:
        "Patients taking pegvisomant, a growth hormone receptor antagonist, for acromegaly should be monitored for which potential adverse effect?",
      answers: [
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia" },
        { text: "Hepatotoxicity", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Weight loss" },
      ],
      Explanation:
        "Pegvisomant therapy can lead to hepatotoxicity as an adverse effect.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of glipizide, a sulfonylurea, in diabetes management?",
      answers: [
        { text: "Weight loss" },
        { text: "Hypoglycemia", isCorrect: true },
        { text: "Peripheral edema" },
        { text: "Thrombocytopenia" },
        { text: "Diarrhea" },
      ],
      Explanation:
        "Glipizide is known to cause hypoglycemia as an adverse effect due to its mechanism of action.",
    },
    {
      question:
        "Patients taking pasireotide for acromegaly should be monitored for which potential side effect related to glucose metabolism?",
      answers: [
        { text: "Hypotension" },
        { text: "Hypercalcemia" },
        { text: "Hyperkalemia" },
        { text: "Hyperglycemia", isCorrect: true },
        { text: "Hypoglycemia" },
      ],
      Explanation:
        "Pasireotide therapy can lead to hyperglycemia as an adverse effect, which requires close monitoring.",
    },
    {
      question:
        "What adverse effect is associated with the use of lanreotide, another somatostatin analog, in the treatment of acromegaly?",
      answers: [
        { text: "Nephrotoxicity" },
        { text: "Pancreatitis", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Peripheral neuropathy" },
        { text: "Hepatitis" },
      ],
      Explanation:
        "Lanreotide therapy can lead to pancreatitis as an adverse effect.",
    },
    {
      question:
        "Patients taking tetracosactide (tetracosactrin) for adrenal insufficiency should be monitored for which potential side effect?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hypertension" },
        { text: "Hypernatremia", isCorrect: true },
        { text: "Peripheral neuropathy" },
        { text: "Weight gain" },
      ],
      Explanation:
        "Tetracosactide can lead to hypernatremia as an adverse effect, especially if not properly managed.",
    },
    {
      question:
        "Which of the following is a potential side effect of long-term use of rosiglitazone, a thiazolidinedione, in diabetes management?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Weight loss" },
        { text: "Fluid retention", isCorrect: true },
        { text: "Hyperkalemia" },
        { text: "Insomnia" },
      ],
      Explanation:
        "Long-term use of rosiglitazone can lead to fluid retention and peripheral edema as an adverse effect.",
    },
    {
      question:
        "Patients taking liraglutide, a glucagon-like peptide-1 receptor agonist, for diabetes management should be monitored for which potential side effect?",
      answers: [
        { text: "Hypotension" },
        { text: "Hypercholesterolemia" },
        { text: "Pancreatitis", isCorrect: true },
        { text: "Hypoglycemia" },
        { text: "Osteoporosis" },
      ],
      Explanation:
        "Liraglutide has been associated with an increased risk of pancreatitis as an adverse effect.",
    },
    {
      question:
        "What is a potential side effect of long-term use of cinacalcet, a calcimimetic agent, in the management of primary hyperparathyroidism?",
      answers: [
        { text: "Hypoglycemia" },
        { text: "Hypocalcemia", isCorrect: true },
        { text: "Weight loss" },
        { text: "Bradycardia" },
        { text: "Hypercalcemia" },
      ],
      Explanation:
        "Long-term use of cinacalcet can lead to hypocalcemia as an adverse effect, primarily due to its mechanism of action.",
    },
    {
      question:
        "Which drug is commonly used to treat hyperthyroidism by inhibiting the synthesis of thyroid hormones?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Metformin" },
        { text: "Glipizide" },
      ],
      Explanation:
        "Propylthiouracil is an antithyroid drug used to treat hyperthyroidism by inhibiting thyroid hormone synthesis.",
    },
    {
      question:
        "Which medication is used in the management of type 2 diabetes mellitus and works by increasing insulin sensitivity in the peripheral tissues?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Glucagon" },
        { text: "Metformin", isCorrect: true },
        { text: "Somatostatin" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Metformin is an insulin-sensitizing drug commonly used in the management of type 2 diabetes mellitus.",
    },
    {
      question:
        "What class of medications, often used in the treatment of osteoporosis, helps increase bone density by inhibiting bone resorption?",
      answers: [
        { text: "Bisphosphonates", isCorrect: true },
        { text: "Thiazolidinediones" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "Aromatase inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Bisphosphonates are known for their role in inhibiting bone resorption and are used in the treatment of osteoporosis.",
    },
    {
      question:
        "Which drug is primarily used in the treatment of acromegaly by suppressing the release of growth hormone?",
      answers: [
        { text: "Cabergoline" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Leuprolide" },
        { text: "Liraglutide" },
      ],
      Explanation:
        "Octreotide is a somatostatin analog used to treat acromegaly by suppressing the release of growth hormone.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin (DDAVP) when used in the treatment of diabetes insipidus?",
      answers: [
        { text: "Stimulation of insulin release" },
        { text: "Inhibition of glucagon release" },
        { text: "Antidiuretic effect on the kidneys", isCorrect: true },
        { text: "Inhibition of gastric acid secretion" },
        { text: "Promotion of bile flow" },
      ],
      Explanation:
        "Desmopressin (DDAVP) primarily exerts its effect by acting as an antidiuretic, reducing urine output in diabetes insipidus.",
    },
    {
      question:
        "Which medication is commonly used to manage symptoms of hypothyroidism by providing exogenous thyroid hormone?",
      answers: [
        { text: "Methimazole" },
        { text: "Liraglutide" },
        { text: "Cinacalcet" },
        { text: "Prednisone" },
        { text: "Levothyroxine", isCorrect: true },
      ],
      Explanation:
        "Levothyroxine is a synthetic form of thyroid hormone used to treat hypothyroidism.",
    },
    {
      question:
        "Which medication is often used in the treatment of Cushing's syndrome by inhibiting adrenal steroidogenesis?",
      answers: [
        { text: "Metyrapone", isCorrect: true },
        { text: "Pioglitazone" },
        { text: "Exenatide" },
        { text: "Bisphosphonates" },
        { text: "Somatropin" },
      ],
      Explanation:
        "Metyrapone is an inhibitor of adrenal steroidogenesis and is used in the treatment of Cushing's syndrome.",
    },
    {
      question:
        "What is the primary mechanism of action of sitagliptin, a medication used in the management of type 2 diabetes mellitus?",
      answers: [
        { text: "Enhancement of insulin secretion" },
        { text: "Inhibition of glucagon release", isCorrect: true },
        { text: "Delayed gastric emptying" },
        { text: "Inhibition of alpha-glucosidase" },
        { text: "Enhancement of GLP-1 receptor activity" },
      ],
      Explanation:
        "Sitagliptin primarily works by inhibiting the release of glucagon in the management of type 2 diabetes mellitus.",
    },
    {
      question:
        "Which medication is commonly used to treat hyperprolactinemia and can reduce elevated prolactin levels?",
      answers: [
        { text: "Cabergoline", isCorrect: true },
        { text: "Glucagon" },
        { text: "Liraglutide" },
        { text: "Exenatide" },
        { text: "Pioglitazone" },
      ],
      Explanation:
        "Cabergoline is often used to treat hyperprolactinemia by reducing elevated prolactin levels.",
    },
    {
      question:
        "Which class of medications is commonly used to lower blood glucose levels in patients with type 2 diabetes by enhancing insulin secretion and reducing hepatic glucose production?",
      answers: [
        { text: "Thiazolidinediones" },
        { text: "Bisphosphonates" },
        { text: "DPP-4 inhibitors" },
        { text: "GLP-1 receptor agonists" },
        { text: "Sulfonylureas", isCorrect: true },
      ],
      Explanation:
        "Sulfonylureas work by enhancing insulin secretion and reducing hepatic glucose production in patients with type 2 diabetes.",
    },
    {
      question:
        "Which medication is used in the management of hypercalcemia and works by reducing calcium levels in the blood?",
      answers: [
        { text: "Cinacalcet", isCorrect: true },
        { text: "Octreotide" },
        { text: "Metyrapone" },
        { text: "Levothyroxine" },
        { text: "Methimazole" },
      ],
      Explanation:
        "Cinacalcet is used in the management of hypercalcemia by reducing calcium levels in the blood.",
    },
    {
      question:
        "What class of medications is often used in the treatment of type 1 diabetes mellitus to lower blood glucose levels by stimulating insulin release from beta cells?",
      answers: [
        { text: "Thiazolidinediones" },
        { text: "GLP-1 receptor agonists" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "DPP-4 inhibitors" },
        { text: "Insulin secretagogues", isCorrect: true },
      ],
      Explanation:
        "Insulin secretagogues stimulate insulin release from beta cells and are used in the treatment of type 1 diabetes mellitus.",
    },
    {
      question:
        "Which medication is used in the management of osteoporosis and works by inhibiting bone resorption through its effect on osteoclasts?",
      answers: [
        { text: "Cinacalcet" },
        { text: "Levothyroxine" },
        { text: "Pioglitazone" },
        { text: "Raloxifene", isCorrect: true },
        { text: "Cabergoline" },
      ],
      Explanation:
        "Raloxifene is used in the management of osteoporosis and acts by inhibiting bone resorption through its effect on osteoclasts.",
    },
    {
      question:
        "What is the primary mechanism of action of bromocriptine when used in the treatment of prolactin-secreting pituitary adenomas?",
      answers: [
        { text: "Inhibition of prolactin synthesis", isCorrect: true },
        { text: "Stimulation of growth hormone release" },
        { text: "Suppression of adrenal steroidogenesis" },
        { text: "Inhibition of gonadotropin release" },
        { text: "Stimulation of insulin release" },
      ],
      Explanation:
        "Bromocriptine primarily inhibits prolactin synthesis when used to treat prolactin-secreting pituitary adenomas.",
    },
    {
      question:
        "Which medication is commonly used in the management of hyperthyroidism by blocking the conversion of T4 to the more active T3 hormone?",
      answers: [
        { text: "Methimazole" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Sitagliptin" },
        { text: "Exenatide" },
      ],
      Explanation:
        "Propylthiouracil is used in the management of hyperthyroidism by blocking the conversion of T4 to T3.",
    },
    {
      question:
        "Which class of medications, often used in the treatment of type 2 diabetes mellitus, works by slowing down carbohydrate digestion and absorption in the gastrointestinal tract?",
      answers: [
        { text: "DPP-4 inhibitors" },
        { text: "GLP-1 receptor agonists" },
        { text: "Alpha-glucosidase inhibitors", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Insulin secretagogues" },
      ],
      Explanation:
        "Alpha-glucosidase inhibitors work by slowing carbohydrate digestion and absorption in the gastrointestinal tract in type 2 diabetes.",
    },
    {
      question:
        "What is the primary mechanism of action of pramlintide, a medication used in the management of type 1 and type 2 diabetes mellitus?",
      answers: [
        { text: "Enhancement of insulin secretion" },
        { text: "Inhibition of glucagon release" },
        { text: "Delayed gastric emptying", isCorrect: true },
        { text: "Inhibition of alpha-glucosidase" },
        { text: "Enhancement of GLP-1 receptor activity" },
      ],
      Explanation:
        "Pramlintide primarily delays gastric emptying when used in the management of diabetes mellitus.",
    },
    {
      question:
        "Which medication is used in the treatment of acromegaly and works by reducing growth hormone secretion from the pituitary gland?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Pioglitazone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Raloxifene" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Octreotide is used in the treatment of acromegaly by reducing growth hormone secretion from the pituitary gland.",
    },
    {
      question:
        "What class of medications is often used in the management of primary hyperparathyroidism to lower calcium levels in the blood by decreasing parathyroid hormone (PTH) secretion?",
      answers: [
        { text: "Bisphosphonates" },
        { text: "Thiazolidinediones" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Cinacalcet is used in the management of primary hyperparathyroidism to lower calcium levels by decreasing PTH secretion.",
    },
    {
      question:
        "Which medication is used in the treatment of hypoparathyroidism to raise calcium levels in the blood by mimicking the action of parathyroid hormone (PTH)?",
      answers: [
        { text: "Metyrapone" },
        { text: "Levothyroxine" },
        { text: "Raloxifene" },
        { text: "Teriparatide", isCorrect: true },
        { text: "Cinacalcet" },
      ],
      Explanation:
        "Teriparatide is used in the treatment of hypoparathyroidism by mimicking the action of PTH to raise calcium levels.",
    },
    {
      question:
        "Which medication is commonly used to manage type 2 diabetes mellitus and works by enhancing the effects of incretin hormones like GLP-1?",
      answers: [
        { text: "Metformin" },
        { text: "Pioglitazone" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Insulin secretagogues" },
      ],
      Explanation:
        "Liraglutide enhances the effects of incretin hormones like GLP-1 in the management of type 2 diabetes mellitus.",
    },
    {
      question:
        "What is the primary mechanism of action of alendronate, a medication used in the treatment of osteoporosis?",
      answers: [
        { text: "Inhibition of bone resorption", isCorrect: true },
        { text: "Stimulation of growth hormone release" },
        { text: "Inhibition of adrenal steroidogenesis" },
        { text: "Enhancement of insulin secretion" },
        { text: "Inhibition of glucagon release" },
      ],
      Explanation:
        "Alendronate primarily works by inhibiting bone resorption in the treatment of osteoporosis.",
    },
    {
      question:
        "Which medication is used in the treatment of von Willebrand disease and nocturnal enuresis and acts as a synthetic analog of vasopressin?",
      answers: [
        { text: "Octreotide" },
        { text: "Levothyroxine" },
        { text: "Raloxifene" },
        { text: "Teriparatide" },
        { text: "Desmopressin", isCorrect: true },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of vasopressin used in the treatment of von Willebrand disease and nocturnal enuresis.",
    },
    {
      question:
        "Which class of medications, often used in the treatment of type 2 diabetes mellitus, works by enhancing the effects of GLP-1 and inhibiting glucagon release?",
      answers: [
        { text: "DPP-4 inhibitors" },
        { text: "GLP-1 receptor agonists", isCorrect: true },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "Sulfonylureas" },
        { text: "Insulin secretagogues" },
      ],
      Explanation:
        "GLP-1 receptor agonists work by enhancing the effects of GLP-1 and inhibiting glucagon release in the management of type 2 diabetes.",
    },
    {
      question:
        "Which medication is used in the treatment of diabetic macular edema and diabetic retinopathy and works by inhibiting vascular endothelial growth factor (VEGF)?",
      answers: [
        { text: "Metyrapone" },
        { text: "Levothyroxine" },
        { text: "Raloxifene" },
        { text: "Ranibizumab", isCorrect: true },
        { text: "Cinacalcet" },
      ],
      Explanation:
        "Ranibizumab is used in the treatment of diabetic macular edema and diabetic retinopathy by inhibiting VEGF.",
    },
    {
      question:
        "What class of medications, often used in the treatment of type 2 diabetes mellitus, works by inhibiting the reabsorption of glucose in the kidneys and promoting its excretion in the urine?",
      answers: [
        { text: "Thiazolidinediones" },
        { text: "GLP-1 receptor agonists" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT2 inhibitors", isCorrect: true },
        { text: "Insulin secretagogues" },
      ],
      Explanation:
        "SGLT2 inhibitors work by inhibiting the reabsorption of glucose in the kidneys and promoting its excretion in the urine in type 2 diabetes.",
    },
    {
      question:
        "Which medication is used in the treatment of hypoparathyroidism by providing exogenous parathyroid hormone (PTH)?",
      answers: [
        { text: "Cinacalcet" },
        { text: "Levothyroxine" },
        { text: "Raloxifene" },
        { text: "Teriparatide", isCorrect: true },
        { text: "Bromocriptine" },
      ],
      Explanation:
        "Teriparatide provides exogenous PTH and is used in the treatment of hypoparathyroidism.",
    },
    {
      question:
        "Which medication is used in the management of acromegaly by reducing growth hormone levels through the activation of dopamine receptors?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Teriparatide" },
        { text: "Bromocriptine", isCorrect: true },
      ],
      Explanation:
        "Bromocriptine is used in the management of acromegaly by reducing growth hormone levels through the activation of dopamine receptors.",
    },
    {
      question:
        "What class of medications, often used in the treatment of type 2 diabetes mellitus, works by inhibiting the enzyme alpha-glucosidase in the gastrointestinal tract to delay carbohydrate digestion and absorption?",
      answers: [
        { text: "DPP-4 inhibitors" },
        { text: "GLP-1 receptor agonists" },
        { text: "Alpha-glucosidase inhibitors", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Insulin secretagogues" },
      ],
      Explanation:
        "Alpha-glucosidase inhibitors delay carbohydrate digestion and absorption in type 2 diabetes mellitus.",
    },
    {
      question:
        "What is the primary therapeutic goal of insulin therapy in patients with type 1 diabetes mellitus?",
      answers: [
        { text: "Decreasing cholesterol levels" },
        { text: "Achieving euglycemia", isCorrect: true },
        { text: "Reducing blood pressure" },
        { text: "Promoting weight loss" },
        { text: "Enhancing insulin sensitivity" },
      ],
      Explanation:
        "The primary goal of insulin therapy in type 1 diabetes is to achieve euglycemia (normal blood glucose levels).",
    },
    {
      question:
        "Which type of insulin has the shortest duration of action and is often used for postprandial glucose control?",
      answers: [
        { text: "Regular insulin" },
        { text: "NPH insulin" },
        { text: "Glargine insulin" },
        { text: "Detemir insulin" },
        { text: "Lispro insulin", isCorrect: true },
      ],
      Explanation:
        "Lispro insulin has a rapid onset and a short duration of action, making it suitable for postprandial glucose control.",
    },
    {
      question:
        "What is the mechanism of action of metformin, a first-line medication for type 2 diabetes mellitus?",
      answers: [
        { text: "Increases insulin secretion" },
        { text: "Decreases insulin sensitivity" },
        { text: "Reduces hepatic glucose production", isCorrect: true },
        { text: "Promotes weight gain" },
        { text: "Enhances glucagon release" },
      ],
      Explanation:
        "Metformin primarily reduces hepatic glucose production and improves insulin sensitivity in peripheral tissues.",
    },
    {
      question:
        "Which of the following medications is a glucagon-like peptide-1 (GLP-1) receptor agonist used for the treatment of type 2 diabetes mellitus?",
      answers: [
        { text: "Metformin" },
        { text: "Rosiglitazone" },
        { text: "Sitagliptin" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Gliclazide" },
      ],
      Explanation:
        "Liraglutide is a GLP-1 receptor agonist commonly used in the treatment of type 2 diabetes.",
    },
    {
      question:
        "What is the primary mechanism of action of sulfonylureas in the management of diabetes mellitus?",
      answers: [
        { text: "Decreases insulin secretion", isCorrect: true },
        { text: "Enhances insulin sensitivity" },
        { text: "Inhibits hepatic glucose production" },
        { text: "Stimulates pancreatic alpha cells" },
        { text: "Reduces gastrointestinal absorption of glucose" },
      ],
      Explanation:
        "Sulfonylureas primarily work by increasing insulin secretion from pancreatic beta cells.",
    },
    {
      question:
        "Which of the following medications is a sodium-glucose co-transporter 2 (SGLT2) inhibitor used for the treatment of type 2 diabetes mellitus?",
      answers: [
        { text: "Gliclazide" },
        { text: "Acarbose" },
        { text: "Canagliflozin", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Metformin" },
      ],
      Explanation:
        "Canagliflozin is an SGLT2 inhibitor commonly used in the treatment of type 2 diabetes.",
    },
    {
      question:
        "Which class of medications, commonly used in the management of hyperthyroidism, inhibits the synthesis of thyroid hormones in the thyroid gland?",
      answers: [
        { text: "Beta-blockers" },
        { text: "Thiazolidinediones" },
        { text: "Dipeptidyl peptidase-4 (DPP-4) inhibitors" },
        { text: "Thyroid receptor agonists" },
        { text: "Thioamides", isCorrect: true },
      ],
      Explanation:
        "Thioamides (e.g., methimazole, propylthiouracil) inhibit the synthesis of thyroid hormones in the thyroid gland.",
    },
    {
      question:
        "What is the primary mechanism of action of levothyroxine, a medication used for thyroid hormone replacement therapy?",
      answers: [
        { text: "Blocks thyroid hormone receptors" },
        { text: "Inhibits thyroid hormone synthesis" },
        { text: "Stimulates thyroid hormone release" },
        { text: "Provides exogenous thyroid hormone", isCorrect: true },
        { text: "Enhances thyroid receptor sensitivity" },
      ],
      Explanation:
        "Levothyroxine provides exogenous thyroid hormone to replace or supplement endogenous thyroid hormone production.",
    },
    {
      question:
        "Which of the following medications is a selective aldosterone receptor antagonist used in the management of primary hyperaldosteronism and heart failure?",
      answers: [
        { text: "Lisinopril" },
        { text: "Spironolactone", isCorrect: true },
        { text: "Amlodipine" },
        { text: "Valsartan" },
        { text: "Enalapril" },
      ],
      Explanation:
        "Spironolactone is a selective aldosterone receptor antagonist used for various indications, including heart failure and primary hyperaldosteronism.",
    },
    {
      question:
        "Which class of medications, used in the treatment of diabetes, decreases hepatic glucose production and increases peripheral glucose uptake?",
      answers: [
        { text: "Sulfonylureas" },
        { text: "Biguanides", isCorrect: true },
        { text: "Thiazolidinediones" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors" },
      ],
      Explanation:
        "Biguanides, like metformin, decrease hepatic glucose production and increase peripheral glucose uptake.",
    },
    {
      question:
        "What is the primary mechanism of action of glucagon, a hormone used in the treatment of severe hypoglycemia?",
      answers: [
        { text: "Stimulates insulin release" },
        { text: "Increases hepatic glucose production", isCorrect: true },
        { text: "Inhibits glucose uptake by cells" },
        { text: "Promotes weight loss" },
        { text: "Enhances insulin sensitivity" },
      ],
      Explanation:
        "Glucagon primarily increases hepatic glucose production and can be used to treat severe hypoglycemia.",
    },
    {
      question:
        "Which of the following medications is a dopamine agonist used in the management of hyperprolactinemia and Parkinson's disease?",
      answers: [
        { text: "Bromocriptine", isCorrect: true },
        { text: "Leuprolide" },
        { text: "Desmopressin" },
        { text: "Pasireotide" },
        { text: "Octreotide" },
      ],
      Explanation:
        "Bromocriptine is a dopamine agonist used for hyperprolactinemia and other conditions.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin (DDAVP), a synthetic analogue of vasopressin?",
      answers: [
        { text: "Enhances cortisol production" },
        { text: "Increases prolactin release" },
        { text: "Stimulates ADH secretion", isCorrect: true },
        { text: "Inhibits gastric acid production" },
        { text: "Blocks dopamine receptors" },
      ],
      Explanation:
        "Desmopressin primarily stimulates the secretion of antidiuretic hormone (ADH) and is used for conditions like diabetes insipidus.",
    },
    {
      question:
        "Patients taking acarbose, an alpha-glucosidase inhibitor, for diabetes management should be advised to take it with which part of a meal?",
      answers: [
        { text: "Before the meal" },
        { text: "After the meal" },
        { text: "During the meal", isCorrect: true },
        { text: "On an empty stomach" },
        { text: "With a glass of water" },
      ],
      Explanation:
        "Acarbose should be taken during the meal to inhibit the digestion of complex carbohydrates.",
    },
    {
      question:
        "What is the primary mechanism of action of parathyroid hormone (teriparatide) in the treatment of osteoporosis?",
      answers: [
        { text: "Inhibits bone resorption" },
        { text: "Promotes bone formation", isCorrect: true },
        { text: "Reduces serum calcium levels" },
        { text: "Enhances calcium absorption" },
        { text: "Suppresses parathyroid hormone secretion" },
      ],
      Explanation:
        "Teriparatide (PTH) promotes bone formation and is used for the treatment of osteoporosis.",
    },
    {
      question:
        "Which of the following medications is commonly used as an adjunctive therapy to radioactive iodine in the treatment of hyperthyroidism?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Metformin" },
        { text: "Liraglutide" },
        { text: "Bromocriptine" },
      ],
      Explanation:
        "Propylthiouracil is often used as an adjunctive therapy to radioactive iodine in the treatment of hyperthyroidism.",
    },
    {
      question:
        "What is the primary mechanism of action of radioactive iodine (RAI) therapy in the treatment of hyperthyroidism?",
      answers: [
        { text: "Increases thyroid hormone synthesis" },
        { text: "Inhibits thyroid hormone release", isCorrect: true },
        { text: "Promotes thyroid gland growth" },
        { text: "Enhances thyroid receptor sensitivity" },
        { text: "Stimulates thyroid-stimulating hormone (TSH) production" },
      ],
      Explanation:
        "Radioactive iodine (RAI) therapy primarily inhibits thyroid hormone release by destroying thyroid tissue.",
    },
    {
      question:
        "Which class of medications, used in the management of hyperthyroidism, blocks the conversion of T4 (thyroxin) to the more active T3 (triiodothyronine)?",
      answers: [
        { text: "Beta-blockers", isCorrect: true },
        { text: "Thioamides" },
        { text: "Thyroid receptor agonists" },
        { text: "Glucocorticoids" },
        { text: "Thyroid-stimulating hormone (TSH)" },
      ],
      Explanation:
        "Beta-blockers can alleviate symptoms of hyperthyroidism and block the conversion of T4 to T3.",
    },
    {
      question:
        "Which of the following antithyroid medications has a higher risk of causing agranulocytosis and is typically reserved for specific situations, such as during the first trimester of pregnancy?",
      answers: [
        { text: "Methimazole" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Levothyroxine" },
        { text: "Liraglutide" },
        { text: "Bromocriptine" },
      ],
      Explanation:
        "Propylthiouracil has a higher risk of causing agranulocytosis and may be used in specific situations like pregnancy.",
    },
    {
      question:
        "What is the primary mechanism of action of levothyroxine (T4) therapy in the treatment of hypothyroidism?",
      answers: [
        { text: "Blocks thyroid hormone receptors" },
        { text: "Inhibits thyroid hormone synthesis" },
        { text: "Stimulates thyroid hormone release" },
        { text: "Provides exogenous thyroid hormone", isCorrect: true },
        { text: "Enhances thyroid receptor sensitivity" },
      ],
      Explanation:
        "Levothyroxine provides exogenous T4 hormone to replace or supplement endogenous thyroid hormone production.",
    },
    {
      question:
        "Which of the following medications is a thyroid receptor agonist used in the treatment of hyperlipidemia?",
      answers: [
        { text: "Methimazole" },
        { text: "Propylthiouracil" },
        { text: "Atorvastatin", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Bromocriptine" },
      ],
      Explanation:
        "Liraglutide is not a thyroid receptor agonist but rather a GLP-1 receptor agonist used in diabetes management.",
    },
    {
      question:
        "What is the primary mechanism of action of iodine-containing contrast agents in diagnostic radiology?",
      answers: [
        { text: "Inhibits thyroid hormone synthesis", isCorrect: true },
        { text: "Stimulates thyroid hormone release" },
        { text: "Enhances adrenal gland function" },
        { text: "Blocks dopamine receptors" },
        { text: "Inhibits insulin secretion" },
      ],
      Explanation:
        "Iodine-containing contrast agents can temporarily inhibit thyroid hormone synthesis and release, affecting thyroid function temporarily.",
    },
    {
      question:
        "Which class of medications, used in the treatment of thyroid storm or severe hyperthyroidism, blocks the peripheral effects of thyroid hormones without affecting hormone production?",
      answers: [
        { text: "Beta-blockers", isCorrect: true },
        { text: "Thioamides" },
        { text: "Glucocorticoids" },
        { text: "Thyroid receptor agonists" },
        { text: "Thyroid-stimulating hormone (TSH)" },
      ],
      Explanation:
        "Beta-blockers are often used in thyroid storm to block the peripheral effects of excess thyroid hormones.",
    },
    {
      question:
        "Which of the following medications is a selective thyroid receptor agonist used for the treatment of hypercholesterolemia?",
      answers: [
        { text: "Methimazole" },
        { text: "Propylthiouracil" },
        { text: "Atorvastatin", isCorrect: true },
        { text: "Liothyronine" },
        { text: "Bromocriptine" },
      ],
      Explanation:
        "Liothyronine is a selective thyroid receptor agonist used for hypercholesterolemia.",
    },
    {
      question:
        "In pregnant women with hypothyroidism, which thyroid medication is preferred due to its ability to cross the placenta and provide fetal thyroid hormone support?",
      answers: [
        { text: "Levothyroxine", isCorrect: true },
        { text: "Methimazole" },
        { text: "Propylthiouracil" },
        { text: "Liothyronine" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Levothyroxine is preferred in pregnant women as it can cross the placenta and support fetal thyroid hormone needs.",
    },
    {
      question:
        "What is the preferred treatment for congenital adrenal hyperplasia (CAH) in neonates to replace deficient cortisol and minimize androgen production?",
      answers: [
        { text: "Cortisol" },
        { text: "Fludrocortisone" },
        { text: "Prednisone" },
        { text: "Dexamethasone", isCorrect: true },
        { text: "Levothyroxine" },
      ],
      Explanation:
        "Dexamethasone is the preferred treatment in neonates with CAH to suppress adrenal androgen production.",
    },
    {
      question:
        "Elderly patients with type 2 diabetes may require dose adjustments for oral antidiabetic medications like metformin due to age-related changes in which organ that can affect drug clearance?",
      answers: [
        { text: "Kidneys", isCorrect: true },
        { text: "Liver" },
        { text: "Pancreas" },
        { text: "Spleen" },
        { text: "Stomach" },
      ],
      Explanation:
        "Age-related changes in kidney function can affect the clearance of medications like metformin, requiring dose adjustments in elderly patients.",
    },
    {
      question:
        "In patients with diabetes who have renal impairment, which class of antidiabetic medications should be used cautiously or avoided due to the risk of hypoglycemia and drug accumulation?",
      answers: [
        { text: "Thiazolidinediones" },
        { text: "DPP-4 inhibitors" },
        { text: "Sulfonylureas", isCorrect: true },
        { text: "GLP-1 receptor agonists" },
        { text: "SGLT-2 inhibitors" },
      ],
      Explanation:
        "Sulfonylureas should be used cautiously or avoided in patients with renal impairment due to the risk of hypoglycemia and drug accumulation.",
    },
    {
      question:
        "In children with growth hormone deficiency, what is the primary therapeutic goal of recombinant human growth hormone (somatropin) therapy?",
      answers: [
        { text: "Promote growth of long bones", isCorrect: true },
        { text: "Prevent weight gain" },
        { text: "Increase muscle mass" },
        { text: "Normalize blood glucose levels" },
        { text: "Improve cognitive function" },
      ],
      Explanation:
        "The primary goal of somatropin therapy in children with growth hormone deficiency is to promote growth, particularly of long bones.",
    },
    {
      question:
        "Which of the following medications is contraindicated in pregnant women due to its teratogenic effects and should be avoided in women of childbearing potential unless no other treatment options are available?",
      answers: [
        { text: "Metformin" },
        { text: "Levothyroxine" },
        { text: "Methimazole", isCorrect: true },
        { text: "Glipizide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Methimazole is contraindicated in pregnant women due to its teratogenic effects, and alternative treatments should be considered.",
    },
    {
      question:
        "In patients with diabetes who have liver impairment, which class of antidiabetic medications is preferred as they have minimal hepatic metabolism and are less likely to accumulate in the body?",
      answers: [
        { text: "Thiazolidinediones" },
        { text: "DPP-4 inhibitors" },
        { text: "Sulfonylureas" },
        { text: "GLP-1 receptor agonists", isCorrect: true },
        { text: "SGLT-2 inhibitors" },
      ],
      Explanation:
        "GLP-1 receptor agonists are preferred in patients with liver impairment as they have minimal hepatic metabolism and are less likely to accumulate in the body.",
    },
    {
      question:
        "What is the primary goal of therapy with growth hormone receptor antagonists (e.g., pegvisomant) in patients with acromegaly?",
      answers: [
        { text: "Normalize insulin levels" },
        { text: "Promote bone growth" },
        { text: "Reduce cortisol production" },
        { text: "Inhibit growth hormone effects", isCorrect: true },
        { text: "Enhance muscle development" },
      ],
      Explanation:
        "The primary goal of therapy with growth hormone receptor antagonists like pegvisomant is to inhibit the effects of excess growth hormone in patients with acromegaly.",
    },
    {
      question:
        "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
      answers: [
        { text: "Levothyroxine", isCorrect: true },
        { text: "Methimazole" },
        { text: "Propylthiouracil" },
        { text: "Liothyronine" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Levothyroxine can potentially increase the effects of warfarin, leading to an increased risk of bleeding.",
    },
    {
      question:
        "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
      answers: [
        { text: "Increased risk of lactic acidosis", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia" },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "The combination of metformin and iodinated contrast media can increase the risk of lactic acidosis, a potentially serious adverse effect.",
    },
    {
      question:
        "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" },
      ],
      Explanation:
        "Somatostatin analogs can interfere with the absorption of vitamin B12, leading to deficiency and requiring supplementation.",
    },
    {
      question:
        "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
      answers: [
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Hypotension" },
        { text: "Increased risk of hypokalemia" },
        { text: "Decreased serum glucose levels" },
        { text: "Enhanced immune response" },
      ],
      Explanation:
        "The combination of corticosteroids and NSAIDs can increase the risk of bleeding, so patients should be monitored for this interaction.",
    },
    {
      question:
        "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
      answers: [
        { text: "Atenolol" },
        { text: "Digoxin" },
        { text: "Amiodarone", isCorrect: true },
        { text: "Verapamil" },
        { text: "Isosorbide dinitrate" },
      ],
      Explanation:
        "Liothyronine therapy can increase the risk of arrhythmias when used concurrently with amiodarone, a cardiac medication.",
    },
    {
      question:
        "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased insulin resistance" },
        { text: "Enhanced insulin production" },
        { text: "Reduced risk of weight gain" },
        { text: "Improved lipid profile" },
      ],
      Explanation:
        "The combination of thiazolidinediones and insulin secretagogues can increase the risk of hypoglycemia in patients with diabetes.",
    },
    {
      question:
        "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
      answers: [
        { text: "Atenolol" },
        { text: "Verapamil" },
        { text: "Amiodarone", isCorrect: true },
        { text: "Digoxin" },
        { text: "Diltiazem" },
      ],
      Explanation:
        "Leuprolide therapy can lead to QT prolongation, and caution is needed when used with amiodarone, a medication known to affect cardiac rhythm.",
    },
    {
      question:
        "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
      answers: [
        { text: "Increased risk of serotonin syndrome" },
        { text: "Decreased effectiveness of desmopressin" },
        { text: "Enhanced antidiuretic effect" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Reduced effectiveness of SSRIs" },
      ],
      Explanation:
        "SSRIs can increase the risk of bleeding, and when combined with desmopressin, this risk should be monitored.",
    },
    {
      question:
        "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
      answers: [
        { text: "Antibiotics" },
        { text: "Antidepressants" },
        { text: "Antihypertensives" },
        {
          text: "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
          isCorrect: true,
        },
        { text: "Oral contraceptives" },
      ],
      Explanation:
        "Exenatide can delay gastric emptying, and caution is needed when starting therapy with medications that can irritate the gastrointestinal tract, such as NSAIDs.",
    },
    {
      question:
        "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
      answers: [
        { text: "Increased risk of hyperthyroidism" },
        { text: "Reduced effectiveness of methimazole" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Decreased anticoagulant effect of warfarin" },
        { text: "Enhanced immune response" },
      ],
      Explanation:
        "Methimazole can increase the anticoagulant effect of warfarin, leading to an increased risk of bleeding, so monitoring is essential.",
    },
    {
      question:
        "Patients taking warfarin, a blood thinner, should be cautious when starting therapy with which thyroid medication due to the risk of increased warfarin effects?",
      answers: [
        { text: "Levothyroxine", isCorrect: true },
        { text: "Methimazole" },
        { text: "Propylthiouracil" },
        { text: "Liothyronine" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Levothyroxine can potentially increase the effects of warfarin, leading to an increased risk of bleeding.",
    },
    {
      question:
        "What is the potential drug interaction between metformin and iodinated contrast media used in radiographic studies?",
      answers: [
        { text: "Increased risk of lactic acidosis", isCorrect: true },
        { text: "Hypertension" },
        { text: "Hyperkalemia" },
        { text: "Hypoglycemia" },
        { text: "Peripheral neuropathy" },
      ],
      Explanation:
        "The combination of metformin and iodinated contrast media can increase the risk of lactic acidosis, a potentially serious adverse effect.",
    },
    {
      question:
        "Patients taking somatostatin analogs (e.g., octreotide) should be aware that these drugs can potentially interfere with the absorption of which essential vitamin, requiring supplementation?",
      answers: [
        { text: "Vitamin A" },
        { text: "Vitamin B12", isCorrect: true },
        { text: "Vitamin C" },
        { text: "Vitamin D" },
        { text: "Vitamin E" },
      ],
      Explanation:
        "Somatostatin analogs can interfere with the absorption of vitamin B12, leading to deficiency and requiring supplementation.",
    },
    {
      question:
        "Which of the following is a potential drug interaction between corticosteroids and nonsteroidal anti-inflammatory drugs (NSAIDs) that should be monitored in patients with chronic inflammatory conditions?",
      answers: [
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Hypotension" },
        { text: "Increased risk of hypokalemia" },
        { text: "Decreased serum glucose levels" },
        { text: "Enhanced immune response" },
      ],
      Explanation:
        "The combination of corticosteroids and NSAIDs can increase the risk of bleeding, so patients should be monitored for this interaction.",
    },
    {
      question:
        "Patients taking liothyronine (T3) for hypothyroidism should be cautious when starting therapy with which cardiac medication due to the risk of arrhythmias?",
      answers: [
        { text: "Atenolol" },
        { text: "Digoxin" },
        { text: "Amiodarone", isCorrect: true },
        { text: "Verapamil" },
        { text: "Isosorbide dinitrate" },
      ],
      Explanation:
        "Liothyronine therapy can increase the risk of arrhythmias when used concurrently with amiodarone, a cardiac medication.",
    },
    {
      question:
        "What is the potential drug interaction between thiazolidinediones (e.g., pioglitazone) and insulin secretagogues (e.g., sulfonylureas) in diabetes management?",
      answers: [
        { text: "Increased risk of hypoglycemia", isCorrect: true },
        { text: "Decreased insulin resistance" },
        { text: "Enhanced insulin production" },
        { text: "Reduced risk of weight gain" },
        { text: "Improved lipid profile" },
      ],
      Explanation:
        "The combination of thiazolidinediones and insulin secretagogues can increase the risk of hypoglycemia in patients with diabetes.",
    },
    {
      question:
        "Patients taking leuprolide, a gonadotropin-releasing hormone (GnRH) agonist, should be cautious when starting therapy with which medication used to treat cardiac arrhythmias, as it can lead to QT prolongation?",
      answers: [
        { text: "Atenolol" },
        { text: "Verapamil" },
        { text: "Amiodarone", isCorrect: true },
        { text: "Digoxin" },
        { text: "Diltiazem" },
      ],
      Explanation:
        "Leuprolide therapy can lead to QT prolongation, and caution is needed when used with amiodarone, a medication known to affect cardiac rhythm.",
    },
    {
      question:
        "Which of the following is a potential drug interaction between selective serotonin reuptake inhibitors (SSRIs) and desmopressin (DDAVP)?",
      answers: [
        { text: "Increased risk of serotonin syndrome" },
        { text: "Decreased effectiveness of desmopressin" },
        { text: "Enhanced antidiuretic effect" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Reduced effectiveness of SSRIs" },
      ],
      Explanation:
        "SSRIs can increase the risk of bleeding, and when combined with desmopressin, this risk should be monitored.",
    },
    {
      question:
        "Patients taking exenatide, a glucagon-like peptide-1 receptor agonist, should be cautious when starting therapy with which type of medication due to the potential for delayed gastric emptying and risk of gastrointestinal symptoms?",
      answers: [
        { text: "Antibiotics" },
        { text: "Antidepressants" },
        { text: "Antihypertensives" },
        {
          text: "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
          isCorrect: true,
        },
        { text: "Oral contraceptives" },
      ],
      Explanation:
        "Exenatide can delay gastric emptying, and caution is needed when starting therapy with medications that can irritate the gastrointestinal tract, such as NSAIDs.",
    },
    {
      question:
        "What is a potential drug interaction between methimazole, used to treat hyperthyroidism, and warfarin, a blood thinner?",
      answers: [
        { text: "Increased risk of hyperthyroidism" },
        { text: "Reduced effectiveness of methimazole" },
        { text: "Increased risk of bleeding", isCorrect: true },
        { text: "Decreased anticoagulant effect of warfarin" },
        { text: "Enhanced immune response" },
      ],
      Explanation:
        "Methimazole can increase the anticoagulant effect of warfarin, leading to an increased risk of bleeding, so monitoring is essential.",
    },
    {
      question:
        "Which endocrine drug is a selective estrogen receptor modulator commonly used in the treatment of breast cancer and osteoporosis?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Tamoxifen", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Tamoxifen is a selective estrogen receptor modulator used in the treatment of breast cancer and osteoporosis.",
    },
    {
      question:
        "What is the primary therapeutic effect of metformin in the management of type 2 diabetes mellitus?",
      answers: [
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production", isCorrect: true },
        { text: "Increasing appetite" },
        { text: "Promoting weight gain" },
        { text: "Enhancing insulin receptor sensitivity" },
      ],
      Explanation:
        "Metformin primarily works by reducing hepatic glucose production in patients with type 2 diabetes.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of hypothyroidism and includes levothyroxine as a commonly prescribed agent?",
      answers: [
        { text: "Beta-blockers" },
        { text: "ACE inhibitors" },
        { text: "Thiazide diuretics" },
        { text: "Angiotensin receptor blockers" },
        { text: "Thyroid hormones", isCorrect: true },
      ],
      Explanation:
        "Thyroid hormones, including levothyroxine, are used to treat hypothyroidism.",
    },
    {
      question:
        "Which endocrine drug is used in the management of acromegaly and inhibits the release of growth hormone from the pituitary gland?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide, a somatostatin analog, is used in the management of acromegaly to inhibit the release of growth hormone.",
    },
    {
      question:
        "A patient with Addison's disease may require replacement therapy with which hormone?",
      answers: [
        { text: "Insulin" },
        { text: "Cortisol", isCorrect: true },
        { text: "Levothyroxine" },
        { text: "Parathyroid hormone" },
        { text: "Glucagon" },
      ],
      Explanation:
        "Patients with Addison's disease require replacement therapy with cortisol, a glucocorticoid hormone.",
    },
    {
      question:
        "Which antidiabetic medication works by inhibiting the enzyme dipeptidyl peptidase-4 (DPP-4) and prolonging the action of incretin hormones?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin", isCorrect: true },
        { text: "Pioglitazone" },
        { text: "Exenatide" },
        { text: "Glipizide" },
      ],
      Explanation:
        "Sitagliptin is a dipeptidyl peptidase-4 (DPP-4) inhibitor that prolongs the action of incretin hormones.",
    },
    {
      question:
        "What is the primary mechanism of action of desmopressin (DDAVP) when used in the treatment of diabetes insipidus?",
      answers: [
        { text: "Enhancing insulin secretion" },
        { text: "Reducing blood glucose levels" },
        {
          text: "Promoting water reabsorption in the kidneys",
          isCorrect: true,
        },
        { text: "Inhibiting cortisol production" },
        { text: "Stimulating thyroid hormone release" },
      ],
      Explanation:
        "Desmopressin promotes water reabsorption in the kidneys, reducing urine output in diabetes insipidus.",
    },
    {
      question:
        "Which medication is a synthetic form of thyroid hormone and is commonly prescribed for hypothyroidism?",
      answers: [
        { text: "Insulin glargine" },
        { text: "Prednisone" },
        { text: "Levothyroxine", isCorrect: true },
        { text: "Alendronate" },
        { text: "Liraglutide" },
      ],
      Explanation:
        "Levothyroxine is a synthetic form of thyroid hormone used to treat hypothyroidism.",
    },
    {
      question:
        "Which class of drugs is used to reduce blood glucose levels by inhibiting the reabsorption of glucose in the kidneys, leading to increased glucose excretion in the urine?",
      answers: [
        { text: "Sulfonylureas" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors", isCorrect: true },
        { text: "DPP-4 inhibitors" },
        { text: "Thiazolidinediones" },
      ],
      Explanation:
        "SGLT-2 inhibitors reduce blood glucose levels by inhibiting glucose reabsorption in the kidneys.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin in the management of diabetes mellitus?",
      answers: [
        { text: "Inhibiting hepatic glucose production" },
        { text: "Stimulating insulin receptor sensitivity" },
        { text: "Promoting weight loss" },
        { text: "Enhancing glucose uptake by cells", isCorrect: true },
        { text: "Reducing appetite" },
      ],
      Explanation:
        "Insulin promotes glucose uptake by cells, thereby lowering blood glucose levels.",
    },
    {
      question:
        "Which medication is an oral antidiabetic agent that works by increasing insulin sensitivity in peripheral tissues and is associated with a risk of fluid retention?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pioglitazone", isCorrect: true },
        { text: "Sitagliptin" },
        { text: "Exenatide" },
      ],
      Explanation:
        "Pioglitazone is an oral antidiabetic medication that increases insulin sensitivity and can lead to fluid retention.",
    },
    {
      question:
        "What is the primary mechanism of action of somatostatin analogs like octreotide in the management of acromegaly?",
      answers: [
        { text: "Stimulation of growth hormone release" },
        { text: "Inhibition of growth hormone release", isCorrect: true },
        { text: "Enhancement of insulin secretion" },
        { text: "Promotion of cortisol production" },
        { text: "Reduction of thyroid hormone levels" },
      ],
      Explanation:
        "Somatostatin analogs like octreotide inhibit the release of growth hormone in the management of acromegaly.",
    },
    {
      question:
        "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pioglitazone" },
        { text: "Sitagliptin" },
        { text: "Exenatide", isCorrect: true },
      ],
      Explanation:
        "Exenatide is a GLP-1 receptor agonist that stimulates insulin secretion and inhibits glucagon release in diabetes treatment.",
    },
    {
      question:
        "Which medication is used in the treatment of hyperthyroidism and works by inhibiting the production of thyroid hormones?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Propylthiouracil is used to treat hyperthyroidism by inhibiting the production of thyroid hormones.",
    },
    {
      question:
        "A patient with Cushing's syndrome may be prescribed which medication to inhibit cortisol synthesis?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone", isCorrect: true },
        { text: "Octreotide" },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Metyrapone is used to inhibit cortisol synthesis in patients with Cushing's syndrome.",
    },
    {
      question:
        "Which class of drugs is used to reduce blood glucose levels by increasing insulin release from pancreatic beta cells?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides", isCorrect: true },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Meglitinides increase insulin release from pancreatic beta cells to lower blood glucose levels.",
    },
    {
      question:
        "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels in primary hyperparathyroidism.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by improving insulin sensitivity in peripheral tissues?",
      answers: [
        { text: "Thiazolidinediones", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Thiazolidinediones improve insulin sensitivity in peripheral tissues and are used in type 2 diabetes management.",
    },
    {
      question:
        "Which medication is a synthetic analog of vasopressin used in the treatment of central diabetes insipidus?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of vasopressin used in central diabetes insipidus.",
    },
    {
      question:
        "Which endocrine drug is used in the treatment of hypoparathyroidism and helps to raise calcium levels in the blood?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Calcitriol", isCorrect: true },
        { text: "Octreotide" },
        { text: "Cinacalcet" },
        { text: "Propylthiouracil" },
      ],
      Explanation:
        "Calcitriol is used in the treatment of hypoparathyroidism to raise calcium levels in the blood.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin glargine in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing basal insulin coverage", isCorrect: true },
      ],
      Explanation:
        "Insulin glargine provides basal insulin coverage in diabetes management to mimic the body's natural insulin secretion pattern.",
    },
    {
      question:
        "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide is used to lower elevated growth hormone levels in acromegaly.",
    },
    {
      question:
        "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by enhancing the release of insulin from pancreatic beta cells and reducing glucagon release?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides", isCorrect: true },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Meglitinides enhance insulin release from pancreatic beta cells and reduce glucagon release in type 2 diabetes treatment.",
    },
    {
      question:
        "What is the primary mechanism of action of alendronate in the management of osteoporosis?",
      answers: [
        { text: "Enhancing calcium absorption" },
        { text: "Promoting weight gain" },
        { text: "Reducing bone resorption", isCorrect: true },
        { text: "Increasing insulin sensitivity" },
        { text: "Inhibiting growth hormone release" },
      ],
      Explanation:
        "Alendronate reduces bone resorption, helping to manage osteoporosis.",
    },
    {
      question:
        "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Phenoxybenzamine", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Phenoxybenzamine is used to control hypertension and symptoms in pheochromocytoma by blocking the effects of catecholamines.",
    },
    {
      question:
        "Which medication is a long-acting insulin analog used to provide basal insulin coverage in the management of diabetes mellitus?",
      answers: [
        { text: "Insulin aspart" },
        { text: "Insulin lispro" },
        { text: "Insulin glargine" },
        { text: "Insulin detemir", isCorrect: true },
        { text: "Insulin regular" },
      ],
      Explanation:
        "Insulin detemir is a long-acting insulin analog used to provide basal insulin coverage.",
    },
    {
      question:
        "A patient with hyperthyroidism may be prescribed which medication to inhibit thyroid hormone synthesis and reduce thyroid gland activity?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Propylthiouracil is used to inhibit thyroid hormone synthesis in hyperthyroidism.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by reducing hepatic glucose production and enhancing insulin receptor sensitivity?",
      answers: [
        { text: "Thiazolidinediones", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Thiazolidinediones reduce hepatic glucose production and enhance insulin receptor sensitivity in type 2 diabetes management.",
    },
    {
      question:
        "Which medication is a long-acting GLP-1 receptor agonist used in the treatment of diabetes mellitus and helps to reduce appetite and body weight?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pioglitazone" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Liraglutide is a long-acting GLP-1 receptor agonist that helps reduce appetite and body weight in diabetes management.",
    },
    {
      question:
        "A patient with hypercalcemia due to primary hyperparathyroidism may be prescribed which medication to lower calcium levels by inhibiting parathyroid hormone release?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels in primary hyperparathyroidism by inhibiting parathyroid hormone release.",
    },
    {
      question:
        "Which medication is a synthetic form of vasopressin used to treat diabetes insipidus by promoting water reabsorption in the kidneys?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is used in diabetes insipidus to promote water reabsorption in the kidneys.",
    },
    {
      question:
        "Which class of drugs is used to treat hyperthyroidism and works by blocking the production of thyroid hormones?",
      answers: [
        { text: "Glucagon-like peptide-1 (GLP-1) agonists" },
        { text: "Beta-blockers", isCorrect: true },
        { text: "Dipeptidyl peptidase-4 (DPP-4) inhibitors" },
        { text: "Sodium-glucose co-transporter 2 (SGLT-2) inhibitors" },
        { text: "Thiazolidinediones" },
      ],
      Explanation:
        "Beta-blockers are used to treat hyperthyroidism by blocking the effects of excess thyroid hormones.",
    },
    {
      question:
        "What is the primary therapeutic effect of metyrapone when used in the management of Cushing's syndrome?",
      answers: [
        { text: "Stimulating growth hormone release" },
        { text: "Inhibiting cortisol synthesis", isCorrect: true },
        { text: "Promoting water reabsorption in the kidneys" },
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Reducing appetite" },
      ],
      Explanation:
        "Metyrapone is used in Cushing's syndrome to inhibit cortisol synthesis.",
    },
    {
      question:
        "Which medication is a long-acting insulin analog used in diabetes management to provide basal insulin coverage?",
      answers: [
        { text: "Insulin aspart" },
        { text: "Insulin lispro" },
        { text: "Insulin glargine" },
        { text: "Insulin detemir", isCorrect: true },
        { text: "Insulin regular" },
      ],
      Explanation:
        "Insulin detemir is a long-acting insulin analog used for basal insulin coverage.",
    },
    {
      question:
        "A patient with pheochromocytoma may be prescribed which medication to control hypertension and excessive catecholamine release during surgery?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Phenoxybenzamine", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Phenoxybenzamine is used to control hypertension and excessive catecholamine release during pheochromocytoma surgery.",
    },
    {
      question:
        "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by reducing glucose reabsorption in the kidneys, leading to increased glucose excretion in the urine?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors", isCorrect: true },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "SGLT-2 inhibitors reduce glucose reabsorption in the kidneys, increasing glucose excretion in the urine.",
    },
    {
      question:
        "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels and normalize insulin-like growth factor-1 (IGF-1) levels?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide is used to lower elevated growth hormone levels and normalize IGF-1 levels in acromegaly.",
    },
    {
      question:
        "What is the primary mechanism of action of bromocriptine when used in the treatment of hyperprolactinemia?",
      answers: [
        { text: "Stimulation of growth hormone release" },
        { text: "Inhibition of growth hormone release", isCorrect: true },
        { text: "Enhancement of insulin secretion" },
        { text: "Promotion of cortisol production" },
        { text: "Reduction of thyroid hormone levels" },
      ],
      Explanation:
        "Bromocriptine inhibits the release of growth hormone when used in hyperprolactinemia.",
    },
    {
      question:
        "A patient with hypoparathyroidism may be prescribed which medication to raise calcium levels in the blood?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Calcitriol", isCorrect: true },
        { text: "Octreotide" },
        { text: "Cinacalcet" },
        { text: "Propylthiouracil" },
      ],
      Explanation:
        "Calcitriol is used to raise calcium levels in the blood in hypoparathyroidism.",
    },
    {
      question:
        "Which class of drugs is used in the treatment of type 2 diabetes mellitus and works by enhancing insulin sensitivity in peripheral tissues and reducing hepatic glucose production?",
      answers: [
        { text: "Thiazolidinediones", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Thiazolidinediones enhance insulin sensitivity in peripheral tissues and reduce hepatic glucose production in type 2 diabetes management.",
    },
    {
      question:
        "Which medication is a long-acting glucagon-like peptide-1 (GLP-1) receptor agonist used in diabetes management to improve glycemic control and reduce appetite?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pioglitazone" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Liraglutide is a long-acting GLP-1 receptor agonist used to improve glycemic control and reduce appetite in diabetes management.",
    },
    {
      question:
        "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels by inhibiting parathyroid hormone release in primary hyperparathyroidism.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin lispro in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing rapid-acting insulin coverage", isCorrect: true },
      ],
      Explanation:
        "Insulin lispro provides rapid-acting insulin coverage in diabetes management.",
    },
    {
      question:
        "A patient with pheochromocytoma may be prescribed which medication to control hypertension and excessive catecholamine release before surgical removal of the tumor?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Phenoxybenzamine", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Phenoxybenzamine is used to control hypertension and excessive catecholamine release before surgical removal of pheochromocytoma.",
    },
    {
      question:
        "Which medication is a synthetic form of thyroid hormone and is commonly prescribed for hypothyroidism?",
      answers: [
        { text: "Insulin glargine" },
        { text: "Prednisone" },
        { text: "Levothyroxine", isCorrect: true },
        { text: "Alendronate" },
        { text: "Liraglutide" },
      ],
      Explanation:
        "Levothyroxine is a synthetic form of thyroid hormone used to treat hypothyroidism.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by stimulating insulin secretion from pancreatic beta cells and reducing glucagon release?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides", isCorrect: true },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Meglitinides stimulate insulin secretion from pancreatic beta cells and reduce glucagon release in type 2 diabetes management.",
    },
    {
      question:
        "What is the primary therapeutic effect of pasireotide when used in the treatment of Cushing's disease?",
      answers: [
        { text: "Stimulation of growth hormone release" },
        { text: "Inhibition of growth hormone release" },
        { text: "Enhancement of insulin secretion" },
        { text: "Promotion of cortisol production", isCorrect: true },
        { text: "Reduction of thyroid hormone levels" },
      ],
      Explanation:
        "Pasireotide is used to inhibit cortisol production in the treatment of Cushing's disease.",
    },
    {
      question:
        "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by reducing parathyroid hormone (PTH) release?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels by reducing PTH release in primary hyperparathyroidism.",
    },
    {
      question:
        "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pioglitazone" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Liraglutide is a GLP-1 receptor agonist that stimulates insulin secretion and inhibits glucagon release in diabetes treatment.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin regular in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing rapid-acting insulin coverage", isCorrect: true },
      ],
      Explanation:
        "Insulin regular provides rapid-acting insulin coverage in diabetes management.",
    },
    {
      question:
        "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Phenoxybenzamine", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Phenoxybenzamine is used to control hypertension and symptoms in pheochromocytoma due to excessive catecholamine release.",
    },
    {
      question:
        "Which medication is an alpha-glucosidase inhibitor used in diabetes management to delay the absorption of carbohydrates from the gastrointestinal tract?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Acarbose", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Exenatide" },
      ],
      Explanation:
        "Acarbose is an alpha-glucosidase inhibitor that delays carbohydrate absorption from the gastrointestinal tract in diabetes management.",
    },
    {
      question:
        "A patient with hyperthyroidism may be prescribed which medication to inhibit thyroid hormone synthesis and reduce thyroid gland activity?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Propylthiouracil is used to inhibit thyroid hormone synthesis and reduce thyroid gland activity in hyperthyroidism.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin aspart in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing rapid-acting insulin coverage", isCorrect: true },
      ],
      Explanation:
        "Insulin aspart provides rapid-acting insulin coverage in diabetes management.",
    },
    {
      question:
        "Which medication is a synthetic analog of vasopressin used in the treatment of central diabetes insipidus and nocturnal enuresis?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of vasopressin used in the treatment of central diabetes insipidus and nocturnal enuresis.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by inhibiting the enzyme dipeptidyl peptidase-4 (DPP-4) to prolong the action of incretin hormones?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors", isCorrect: true },
      ],
      Explanation:
        "DPP-4 inhibitors inhibit the enzyme DPP-4 to prolong the action of incretin hormones in type 2 diabetes management.",
    },
    {
      question:
        "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels and improve symptoms?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide is used to lower elevated growth hormone levels and improve symptoms in acromegaly.",
    },
    {
      question:
        "What is the primary therapeutic effect of prednisone when used in the management of adrenal insufficiency (Addison's disease)?",
      answers: [
        { text: "Stimulation of growth hormone release" },
        { text: "Inhibition of growth hormone release" },
        { text: "Enhancement of insulin secretion" },
        { text: "Promotion of cortisol production", isCorrect: true },
        { text: "Reduction of thyroid hormone levels" },
      ],
      Explanation:
        "Prednisone is used to promote cortisol production in the management of adrenal insufficiency (Addison's disease).",
    },
    {
      question:
        "Which medication is commonly used to manage hyperthyroidism and works by inhibiting the synthesis of thyroid hormones?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Propylthiouracil is used to manage hyperthyroidism by inhibiting the synthesis of thyroid hormones.",
    },
    {
      question:
        "A patient with type 1 diabetes mellitus may require which medication to replace the missing hormone essential for glucose metabolism?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Insulin", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Patients with type 1 diabetes require insulin replacement therapy to manage glucose metabolism.",
    },
    {
      question:
        "Which medication is used in the treatment of diabetes insipidus and central diabetes insipidus to promote water reabsorption in the kidneys?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is used in the treatment of diabetes insipidus to promote water reabsorption in the kidneys.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by increasing insulin secretion from pancreatic beta cells?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides", isCorrect: true },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Meglitinides increase insulin secretion from pancreatic beta cells in type 2 diabetes treatment.",
    },
    {
      question:
        "Which medication is a synthetic form of parathyroid hormone used in the treatment of osteoporosis to stimulate bone formation?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Calcitriol" },
        { text: "Octreotide" },
        { text: "Teriparatide", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Teriparatide is a synthetic form of parathyroid hormone used to stimulate bone formation in osteoporosis treatment.",
    },
    {
      question:
        "A patient with Cushing's syndrome may be prescribed which medication to inhibit cortisol synthesis and manage symptoms?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone", isCorrect: true },
        { text: "Octreotide" },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Metyrapone is used to inhibit cortisol synthesis in patients with Cushing's syndrome.",
    },
    {
      question:
        "Which class of drugs is used to reduce blood glucose levels by slowing down the digestion of carbohydrates in the intestines?",
      answers: [
        { text: "Sulfonylureas" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors", isCorrect: true },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Alpha-glucosidase inhibitors reduce blood glucose levels by slowing the digestion of carbohydrates in the intestines.",
    },
    {
      question:
        "What is the primary mechanism of action of alendronate in the management of osteoporosis?",
      answers: [
        { text: "Enhancing calcium absorption" },
        { text: "Promoting weight gain" },
        { text: "Reducing bone resorption", isCorrect: true },
        { text: "Increasing insulin sensitivity" },
        { text: "Inhibiting growth hormone release" },
      ],
      Explanation:
        "Alendronate reduces bone resorption, helping to manage osteoporosis.",
    },
    {
      question:
        "A patient with hyperthyroidism may be prescribed which medication to lower thyroid hormone levels by inhibiting thyroid gland activity?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Propylthiouracil", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Propylthiouracil is used to lower thyroid hormone levels in hyperthyroidism by inhibiting thyroid gland activity.",
    },
    {
      question:
        "Which medication is an amylin analog used in diabetes management to slow gastric emptying, reduce postprandial blood glucose levels, and promote satiety?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pramlintide", isCorrect: true },
        { text: "Liraglutide" },
        { text: "Exenatide" },
      ],
      Explanation:
        "Pramlintide is an amylin analog that slows gastric emptying, reduces postprandial blood glucose levels, and promotes satiety in diabetes management.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by increasing insulin receptor sensitivity in peripheral tissues?",
      answers: [
        { text: "Thiazolidinediones", isCorrect: true },
        { text: "Sulfonylureas" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "Thiazolidinediones increase insulin receptor sensitivity in peripheral tissues and are used in type 2 diabetes management.",
    },
    {
      question:
        "A patient with growth hormone deficiency may require which medication to stimulate growth and promote development?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Somatropin", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Somatropin is used to stimulate growth and promote development in patients with growth hormone deficiency.",
    },
    {
      question:
        "Which medication is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and central diabetes insipidus?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and central diabetes insipidus.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin lispro in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion" },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing rapid-acting insulin coverage", isCorrect: true },
      ],
      Explanation:
        "Insulin lispro provides rapid-acting insulin coverage in diabetes management for mealtime glucose control.",
    },
    {
      question:
        "A patient with pheochromocytoma may be prescribed which medication to control hypertension and symptoms associated with excessive catecholamine release?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Phenoxybenzamine", isCorrect: true },
        { text: "Pasireotide" },
        { text: "Desmopressin" },
      ],
      Explanation:
        "Phenoxybenzamine is used to control hypertension and symptoms in pheochromocytoma by blocking the effects of catecholamines.",
    },
    {
      question:
        "Which medication is a long-acting insulin analog used to provide basal insulin coverage in the management of diabetes mellitus?",
      answers: [
        { text: "Insulin aspart" },
        { text: "Insulin lispro" },
        { text: "Insulin glargine", isCorrect: true },
        { text: "Insulin detemir" },
        { text: "Insulin regular" },
      ],
      Explanation:
        "Insulin detemir is a long-acting insulin analog used to provide basal insulin coverage.",
    },
    {
      question:
        "A patient with acromegaly may be prescribed which medication to lower elevated growth hormone levels?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide is used to lower elevated growth hormone levels in acromegaly.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by inhibiting the reabsorption of glucose in the kidneys, leading to increased glucose excretion in the urine?",
      answers: [
        { text: "Sulfonylureas" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors", isCorrect: true },
        { text: "DPP-4 inhibitors" },
      ],
      Explanation:
        "SGLT-2 inhibitors inhibit glucose reabsorption in the kidneys, increasing glucose excretion in the urine in type 2 diabetes management.",
    },
    {
      question:
        "What is the primary mechanism of action of calcitriol in the management of hypoparathyroidism?",
      answers: [
        { text: "Enhancing calcium absorption", isCorrect: true },
        { text: "Promoting weight gain" },
        { text: "Reducing bone resorption" },
        { text: "Increasing insulin sensitivity" },
        { text: "Inhibiting growth hormone release" },
      ],
      Explanation:
        "Calcitriol enhances calcium absorption in the management of hypoparathyroidism.",
    },
    {
      question:
        "A patient with von Willebrand disease may be prescribed which medication to enhance blood clotting by releasing von Willebrand factor from endothelial cells?",
      answers: [
        { text: "Levothyroxine" },
        { text: "Anastrozole" },
        { text: "Tamoxifen" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Desmopressin is used to enhance blood clotting in von Willebrand disease by releasing von Willebrand factor from endothelial cells.",
    },
    {
      question:
        "Which medication is a glucagon-like peptide-1 (GLP-1) receptor agonist that stimulates insulin secretion and inhibits glucagon release in the treatment of diabetes?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pramlintide" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Liraglutide is a GLP-1 receptor agonist that stimulates insulin secretion and inhibits glucagon release in diabetes treatment.",
    },
    {
      question:
        "What is the primary mechanism of action of cinacalcet in the management of secondary hyperparathyroidism in end-stage renal disease?",
      answers: [
        { text: "Enhancing calcium absorption" },
        { text: "Promoting weight gain" },
        { text: "Reducing bone resorption" },
        { text: "Increasing insulin sensitivity" },
        { text: "Sensitizing calcium-sensing receptors", isCorrect: true },
      ],
      Explanation:
        "Cinacalcet sensitizes calcium-sensing receptors, helping to manage secondary hyperparathyroidism in end-stage renal disease.",
    },
    {
      question:
        "A patient with hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels in hyperparathyroidism by inhibiting parathyroid hormone release.",
    },
    {
      question:
        "Which medication is an injectable GLP-1 receptor agonist used in diabetes management to reduce appetite and promote weight loss?",
      answers: [
        { text: "Metformin" },
        { text: "Glipizide" },
        { text: "Pramlintide" },
        { text: "Liraglutide", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Liraglutide is an injectable GLP-1 receptor agonist used in diabetes management to reduce appetite and promote weight loss.",
    },
    {
      question:
        "A patient with primary hyperparathyroidism may be prescribed which medication to lower elevated calcium levels by inhibiting parathyroid hormone release?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide" },
        { text: "Cinacalcet", isCorrect: true },
        { text: "Prednisone" },
      ],
      Explanation:
        "Cinacalcet is used to lower elevated calcium levels in primary hyperparathyroidism by inhibiting parathyroid hormone release.",
    },
    {
      question:
        "Which medication is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and primary nocturnal enuresis?",
      answers: [
        { text: "Metformin" },
        { text: "Sitagliptin" },
        { text: "Pioglitazone" },
        { text: "Desmopressin", isCorrect: true },
        { text: "Exenatide" },
      ],
      Explanation:
        "Desmopressin is a synthetic analog of vasopressin used in the treatment of nocturnal enuresis and primary nocturnal enuresis.",
    },
    {
      question:
        "What is the primary mechanism of action of insulin regular in the management of diabetes mellitus?",
      answers: [
        { text: "Enhancing insulin receptor sensitivity" },
        { text: "Stimulating insulin secretion", isCorrect: true },
        { text: "Reducing hepatic glucose production" },
        { text: "Promoting weight loss" },
        { text: "Providing rapid-acting insulin coverage" },
      ],
      Explanation:
        "Insulin regular stimulates insulin secretion and is used in diabetes management to provide rapid-acting insulin coverage.",
    },
    {
      question:
        "A patient with pituitary gigantism may be prescribed which medication to lower elevated growth hormone levels and reduce excessive growth?",
      answers: [
        { text: "Bromocriptine" },
        { text: "Metyrapone" },
        { text: "Octreotide", isCorrect: true },
        { text: "Propylthiouracil" },
        { text: "Prednisone" },
      ],
      Explanation:
        "Octreotide is used to lower elevated growth hormone levels and reduce excessive growth in pituitary gigantism.",
    },
    {
      question:
        "Which class of drugs is commonly used in the treatment of type 2 diabetes mellitus and works by enhancing the action of incretin hormones to stimulate insulin secretion and inhibit glucagon release?",
      answers: [
        { text: "Biguanides" },
        { text: "Meglitinides" },
        { text: "Alpha-glucosidase inhibitors" },
        { text: "SGLT-2 inhibitors" },
        { text: "DPP-4 inhibitors", isCorrect: true },
      ],
      Explanation:
        "DPP-4 inhibitors are commonly used in the treatment of type 2 diabetes mellitus and work by enhancing the action of incretin hormones to stimulate insulin secretion and inhibit glucagon release.",
    },
    {
      question:
        "A junior doctor contacts you regarding a diabetic clinic they are overseeing. The doctor is currently assessing a patient's HbA1c levels and is seeking guidance on the optimal target for the patient's HbA1c. What is the recommended HbA1c target for individuals with diabetes?",
      answers: [
        { text: "38mmol/mol" },
        { text: "40mmol/mol" },
        { text: "46mmol/mol" },
        { text: "48mmol/mol", isCorrect: true },
        { text: "50mmol/mol" },
      ],
      Explanation:
        "The ideal target for the HbA1c level should be 48mmol/mol for a diabetic patient.",
    },
    {
      question:
        "You are a pharmacist on a ward when a junior doctor approaches you asking about how often a HbA1c test can be carried out on a diabetic patient. Considering the lifespan of hemoglobin, how frequently can a HbA1c test be carried out on a diabetic patient?",
      answers: [
        { text: "Every 1-2 months" },
        { text: "Every 3 months", isCorrect: true },
        { text: "Every 4 months" },
        { text: "Every 6 months" },
        { text: "Every 12 months" },
      ],
      Explanation:
        "The lifespan of hemoglobin is roughly 3 months before it is recycled by the body, therefore measuring the level of glycosylation on hemoglobin would show the level of glucose control over the past 3 months.",
    },
    {
      question:
        "You are a patient on a ward and come across a diabetic patient who was visiting family over the weekend but subsequently forgot their insulin injections at home and has now developed diabetic ketoacidosis. Which one of the following options is most appropriate in the initial management of DKA?",
      answers: [
        { text: "Metformin 2g STAT and then repeated 6 hourly" },
        { text: "Glucagon IM injection every 2 hours" },
        { text: "Dextrose 10% at 125ml per hour" },
        { text: "Short-acting insulin infusion", isCorrect: true },
        { text: "Novorapid 20 units STAT repeated every hour" },
      ],
      Explanation:
        "Patients with DKA should be started on a fixed rate intravenous insulin infusion (FRIII).",
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

export default EndocrineQuestion
