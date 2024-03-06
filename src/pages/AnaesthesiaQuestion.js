import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const AnaesthesiaQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
        question: "Which anaesthetic medication is commonly used for induction and maintenance of general anesthesia and is known for its rapid onset and short duration of action?",
        answers: [
          { text: "Propofol", "isCorrect": true },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Propofol is commonly used for induction and maintenance of general anesthesia due to its rapid onset and short duration of action."
      },
      {
        question: "Among the listed options, which anaesthetic medication is a volatile liquid inhalation agent used for the maintenance of general anesthesia and offers a smooth and rapid recovery?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane", "isCorrect": true },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Isoflurane is a volatile liquid inhalation agent used for the maintenance of general anesthesia, providing a smooth and rapid recovery."
      },
      {
        question: "Which anaesthetic medication is an inhalation agent frequently employed in pediatric anesthesia due to its minimal airway irritation and pleasant odor?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane", "isCorrect": true },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Sevoflurane is often used in pediatric anesthesia because it causes minimal airway irritation and has a pleasant odor."
      },
      {
        question: "Among the listed options, which anaesthetic medication is a barbiturate known for its rapid onset and short duration of action and is used for induction of anesthesia or sedation?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental", "isCorrect": true },
          { text: "Etomidate" }
        ],
        Explanation: "Thiopental, a barbiturate, is known for its rapid onset and short duration of action, commonly used for induction of anesthesia or sedation."
      },
      {
        question: "Which anaesthetic medication is an intravenous agent utilized for induction of anesthesia and sedation, known for its minimal cardiovascular and respiratory depression?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Etomidate", "isCorrect": true }
        ],
        Explanation: "Etomidate, an intravenous agent, is used for induction of anesthesia and sedation due to its minimal cardiovascular and respiratory depression."
      },
      {
        question: "Among the following anaesthetic medications, which one is primarily used for intravenous anesthesia induction and maintenance, often referred to as the 'milk of amnesia'?",
        answers: [
          { text: "Propofol", "isCorrect": true },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Propofol is recognized as the 'milk of amnesia' and is primarily used for intravenous anesthesia induction and maintenance."
      },
      {
        question: "Which anaesthetic medication is known for its bronchodilator properties and is commonly used in anesthesia for patients with reactive airway disease?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Ketamine", "isCorrect": true }
        ],
        Explanation: "Ketamine is an anaesthetic known for its bronchodilator properties and is frequently used in anesthesia for patients with reactive airway disease."
      },
      {
        question: "Among the listed options, which anaesthetic medication is used as an induction agent and analgesic, and is recognized for its dissociative effects and minimal effects on cardiovascular function?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Ketamine", "isCorrect": true }
        ],
        Explanation: "Ketamine is an anaesthetic used as an induction agent and analgesic, known for its dissociative effects and minimal impact on cardiovascular function."
      },
      {
        question: "Which anaesthetic medication is an intravenous agent with antiemetic properties, often used in anesthesia induction and postoperative nausea and vomiting prevention?",
        answers: [
          { text: "Propofol", "isCorrect": true },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Ondansetron" }
        ],
        Explanation: "Propofol, an intravenous agent, is used in anesthesia induction and has antiemetic properties for postoperative nausea and vomiting prevention."
      },
      {
        question: "Among the following anaesthetic medications, which one is used for maintenance of general anesthesia and is known for its minimal effect on the cardiovascular system, making it suitable for patients with cardiac conditions?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Desflurane", "isCorrect": true },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Desflurane is used for maintenance of general anesthesia and has minimal impact on the cardiovascular system, making it suitable for patients with cardiac conditions."
      },
      {
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is known for its rapid recovery due to its low solubility in blood and tissues?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Desflurane", "isCorrect": true },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Desflurane is commonly used for maintenance of anesthesia and offers rapid recovery owing to its low solubility in blood and tissues."
      },
      {
        question: "Among the listed anaesthetic medications, which one is an intravenous agent commonly used for anesthesia induction, with a formulation containing soybean oil, egg yolk phospholipids, and glycerol as emulsifiers?",
        answers: [
          { text: "Propofol", "isCorrect": true },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Intralipid" }
        ],
        Explanation: "Propofol, an intravenous agent used for anesthesia induction, contains soybean oil, egg yolk phospholipids, and glycerol as emulsifiers."
      },
      {
        question: "Which anaesthetic medication is a volatile liquid inhalation agent commonly used for maintenance of anesthesia, with a relatively low blood-gas partition coefficient contributing to faster recovery?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane", "isCorrect": true },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Halothane" }
        ],
        Explanation: "Isoflurane, a volatile liquid inhalation agent used for maintenance of anesthesia, has a relatively low blood-gas partition coefficient leading to faster recovery."
      },
      {
        question: "Among the following anaesthetic medications, which one is commonly used for short-term procedures due to its rapid onset and recovery, as well as its amnestic properties?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Midazolam", "isCorrect": true }
        ],
        Explanation: "Midazolam is commonly used for short-term procedures owing to its rapid onset and recovery and amnestic properties."
      },
      {
        question: "Which anaesthetic medication is an intravenous agent used for sedation and anesthesia induction, known for its anticonvulsant properties and amnesia effects?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Midazolam", "isCorrect": true }
        ],
        Explanation: "Midazolam, an intravenous agent, is used for sedation and anesthesia induction, possessing anticonvulsant properties and amnesia effects."
      },
      {
        question: "Among the listed options, which anaesthetic medication is used for induction and maintenance of anesthesia, particularly in patients with compromised cardiac function due to its minimal myocardial depression?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Etomidate", "isCorrect": true }
        ],
        Explanation: "Etomidate is used for induction and maintenance of anesthesia, especially in patients with compromised cardiac function, due to its minimal myocardial depression."
      },
      {
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is recognized for its low solubility in blood and tissues, facilitating rapid recovery and awakening?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Desflurane", "isCorrect": true },
          { text: "Thiopental" },
          { text: "Etomidate" }
        ],
        Explanation: "Desflurane, used for maintenance of anesthesia, has low solubility in blood and tissues, leading to rapid recovery and awakening."
      },
      {
        question: "Among the listed anaesthetic medications, which one is an intravenous agent used for induction and maintenance of anesthesia, known for its antiemetic properties, especially in high-risk patients?",
        answers: [
          { text: "Propofol", "isCorrect": true },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Ondansetron" }
        ],
        Explanation: "Propofol, an intravenous agent, is used for induction and maintenance of anesthesia and possesses antiemetic properties, particularly in high-risk patients."
      },
      {
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is known for its rapid elimination, making it suitable for outpatient surgeries?",
        answers: [
          { text: "Propofol" },
          { text: "Isoflurane" },
          { text: "Sevoflurane" },
          { text: "Thiopental" },
          { text: "Desflurane", "isCorrect": true }
        ],
        Explanation: "Desflurane is commonly used for maintenance of anesthesia due to its rapid elimination, making it suitable for outpatient surgeries."
      },
      {
        question: "Which topical anaesthetic medication is commonly used for mucosal anesthesia, particularly in dentistry, and is available in gel or liquid form?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is commonly used for mucosal anesthesia in dentistry and is available in gel or liquid formulations."
      },
      {
        question: "Among the listed options, which topical anaesthetic medication is known for its rapid onset of action and is often used for short procedures, such as venipuncture or IV cannulation?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is known for its rapid onset of action and is commonly used for short procedures like venipuncture or IV cannulation."
      },
      {
        question: "Which topical anaesthetic medication is frequently used for ophthalmic procedures and is available in drops or gel formulations for ocular surface anesthesia?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine", "isCorrect": true },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Tetracaine is frequently used for ophthalmic procedures and is available in drops or gel formulations for ocular surface anesthesia."
      },
      {
        question: "Among the following topical anaesthetic medications, which one is commonly used for numbing the skin before minor medical procedures or for temporary relief of pain and itching?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is commonly used for numbing the skin before minor medical procedures or for temporary relief of pain and itching."
      },
      {
        question: "Which topical anaesthetic medication is often used in conjunction with a vasoconstrictor, such as epinephrine, to prolong its effect and reduce bleeding during procedures?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is frequently combined with a vasoconstrictor to prolong its effect and reduce bleeding during procedures."
      },
      {
        question: "Among the listed options, which topical anaesthetic medication is primarily used for its longer duration of action and is often employed for chronic pain management or as a dermal analgesic?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine, known for its longer duration of action, is often used for chronic pain management or as a dermal analgesic."
      },
      {
        question: "Which topical anaesthetic medication is commonly used in tattooing and body piercing to alleviate pain during the procedure and is available as a cream or gel?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is commonly used in tattooing and body piercing to alleviate pain during the procedure and is available as a cream or gel."
      },
      {
        question: "Among the following topical anaesthetic medications, which one is commonly used for relief of itching and pain caused by minor burns, sunburns, or insect bites?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is commonly used for relief of itching and pain caused by minor burns, sunburns, or insect bites."
      },
      {
        question: "Which topical anaesthetic medication is often used in cosmetic procedures, such as laser hair removal, to reduce discomfort during the process and is available in various formulations?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is often used in cosmetic procedures like laser hair removal to reduce discomfort and is available in various formulations."
      },
      {
        question: "Among the listed topical anaesthetic medications, which one is frequently used for relief of pain and discomfort associated with minor skin irritations or teething in infants?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is frequently used for relief of pain and discomfort associated with minor skin irritations or teething in infants."
      },
      {
        question: "Which topical anaesthetic medication is known for its use in dentistry and is commonly employed for gingival or dental procedures, available in gel, paste, or spray forms?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is known for its use in dentistry and is commonly used for gingival or dental procedures in gel, paste, or spray forms."
      },
      {
        question: "Among the following topical anaesthetic medications, which one is used for temporary relief of discomfort associated with hemorrhoids or other anal conditions?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is used for temporary relief of discomfort associated with hemorrhoids or other anal conditions."
      },
      {
        question: "Which topical anaesthetic medication is often used for mucous membrane anesthesia, such as for intubation or endoscopy procedures, and is available in various forms, including sprays and gels?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is often used for mucous membrane anesthesia, such as for intubation or endoscopy procedures, and is available in sprays and gels."
      },
      {
        question: "Among the listed topical anaesthetic medications, which one is frequently used for reducing pain and discomfort associated with minor injuries or skin conditions like abrasions or scrapes?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is frequently used for reducing pain and discomfort associated with minor injuries or skin conditions like abrasions or scrapes."
      },
      {
        question: "Which topical anaesthetic medication is known for its use in dermatological procedures, such as skin biopsies or suturing, to minimize pain during the process?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is known for its use in dermatological procedures, such as skin biopsies or suturing, to minimize pain during the process."
      },
      {
        question: "Among the following topical anaesthetic medications, which one is commonly used in ear, nose, and throat procedures to alleviate discomfort and pain, available as drops or sprays?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is commonly used in ear, nose, and throat procedures to alleviate discomfort and pain and is available as drops or sprays."
      },
      {
        question: "Which topical anaesthetic medication is frequently used in tattooing, body piercing, or waxing to reduce pain during the procedure and is available in cream or gel forms?",
        answers: [
          { text: "Lidocaine", "isCorrect": true },
          { text: "Tetracaine" },
          { text: "Benzocaine" },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Lidocaine is frequently used in tattooing, body piercing, or waxing to reduce pain and is available in cream or gel forms."
      },
      {
        question: "Among the listed topical anaesthetic medications, which one is commonly used for temporary relief of pain and itching associated with minor skin irritations or rashes?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is commonly used for temporary relief of pain and itching associated with minor skin irritations or rashes."
      },
      {
        question: "Which topical anaesthetic medication is often used in podiatry for numbing the skin before minor procedures or to relieve pain caused by corns or calluses?",
        answers: [
          { text: "Lidocaine" },
          { text: "Tetracaine" },
          { text: "Benzocaine", "isCorrect": true },
          { text: "Dibucaine" },
          { text: "Prilocaine" }
        ],
        Explanation: "Benzocaine is often used in podiatry for numbing the skin before minor procedures or to relieve pain caused by corns or calluses."
      },
      {
        question: "Which medication, when used concomitantly with inhalational anaesthetics, is known to increase the risk of severe arrhythmias and should be used cautiously or avoided during anesthesia?",
        answers: [
          { text: "Beta-blockers", "isCorrect": true },
          { text: "ACE inhibitors" },
          { text: "Calcium channel blockers" },
          { text: "MAO inhibitors" },
          { text: "SSRIs" }
        ],
        Explanation: "Beta-blockers, when used with inhalational anaesthetics, can increase the risk of severe arrhythmias and should be used cautiously or avoided during anesthesia."
      },
      {
        question: "Among the listed medications, which one, when combined with certain anaesthetics, especially halogenated agents, can potentiate respiratory depression and should be used cautiously or adjusted in dosage?",
        answers: [
          { text: "Benzodiazepines", "isCorrect": true },
          { text: "NSAIDs" },
          { text: "Anticoagulants" },
          { text: "ACE inhibitors" },
          { text: "Antidepressants" }
        ],
        Explanation: "Benzodiazepines, when combined with certain anaesthetics, particularly halogenated agents, can potentiate respiratory depression and should be used cautiously or adjusted in dosage."
      },
      {
        question: "Which medication, if used concurrently with inhalational anaesthetics, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage?",
        answers: [
          { text: "Diuretics" },
          { text: "Corticosteroids" },
          { text: "Calcium channel blockers", "isCorrect": true },
          { text: "NSAIDs" },
          { text: "Anticoagulants" }
        ],
        Explanation: "Calcium channel blockers, when used with inhalational anaesthetics, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage."
      },
      {
        question: "Among the following medications, which one, when combined with general anaesthetics, particularly propofol, may increase the risk of CNS depression and respiratory depression, necessitating cautious use or dosage adjustment?",
        answers: [
          { text: "Antipsychotics" },
          { text: "Antihypertensives" },
          { text: "Anticoagulants" },
          { text: "Opioids", "isCorrect": true },
          { text: "SSRIs" }
        ],
        Explanation: "Opioids, when combined with general anaesthetics like propofol, may increase the risk of CNS depression and respiratory depression, necessitating cautious use or dosage adjustment."
      },
      {
        question: "Which medication, if used concurrently with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, warranting careful monitoring or dosage adjustment?",
        answers: [
          { text: "Antihistamines", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "NSAIDs" },
          { text: "Anticoagulants" },
          { text: "ACE inhibitors" }
        ],
        Explanation: "Antihistamines, when used with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment."
      },
      {
        question: "Among the listed medications, which one, if used alongside volatile anaesthetics, may enhance the neuromuscular-blocking effects and increase the risk of prolonged muscle relaxation during anesthesia?",
        answers: [
          { text: "Antiepileptics", "isCorrect": true },
          { text: "Antihypertensives" },
          { text: "NSAIDs" },
          { text: "Opioids" },
          { text: "Antibiotics" }
        ],
        Explanation: "Antiepileptics, if used alongside volatile anaesthetics, may enhance the neuromuscular-blocking effects and increase the risk of prolonged muscle relaxation during anesthesia."
      },
      {
        question: "Which medication, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, requiring cautious use or dose adjustments?",
        answers: [
          { text: "Antidepressants", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "NSAIDs" },
          { text: "Opioids" },
          { text: "Antibiotics" }
        ],
        Explanation: "Antidepressants, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, necessitating cautious use or dose adjustments."
      },
      {
        question: "Among the following medications, which one, if used concurrently with certain anaesthetics, particularly volatile agents, may increase the risk of central nervous system depression, necessitating careful monitoring or dosage adjustment?",
        answers: [
          { text: "Antidepressants", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "Antihypertensives" },
          { text: "Opioids" },
          { text: "Antiepileptics" }
        ],
        Explanation: "Antidepressants, if used with certain anaesthetics like volatile agents, may increase the risk of central nervous system depression, requiring careful monitoring or dosage adjustment."
      },
      {
        question: "Which medication, if used alongside certain anaesthetics like propofol or benzodiazepines, may potentiate sedation and respiratory depression, requiring cautious use or dosage adjustment during anesthesia?",
        answers: [
          { text: "Antihistamines", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "NSAIDs" },
          { text: "Opioids" },
          { text: "Antibiotics" }
        ],
        Explanation: "Antihistamines, when used alongside certain anaesthetics like propofol or benzodiazepines, may potentiate sedation and respiratory depression, necessitating cautious use or dosage adjustment during anesthesia."
      },
      {
        question: "Among the listed medications, which one, if used concurrently with certain anaesthetics, may increase the risk of bleeding or alter coagulation parameters, necessitating careful monitoring or adjustment in dosage?",
        answers: [
          { text: "Antidepressants" },
          { text: "Antipsychotics" },
          { text: "NSAIDs", "isCorrect": true },
          { text: "Opioids" },
          { text: "Anticoagulants" }
        ],
        Explanation: "NSAIDs, if used with certain anaesthetics, may increase the risk of bleeding or alter coagulation parameters, requiring careful monitoring or adjustment in dosage."
      },
      {
        question: "Which medication, when combined with general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, necessitating cautious use or dose adjustments during anesthesia?",
        answers: [
          { text: "Antihypertensives" },
          { text: "Antipsychotics", "isCorrect": true },
          { text: "NSAIDs" },
          { text: "Opioids" },
          { text: "Antiepileptics" }
        ],
        Explanation: "Antipsychotics, if combined with general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, necessitating cautious use or dose adjustments during anesthesia."
      },
      {
        question: "Among the following medications, which one, if used concurrently with certain anaesthetics, particularly volatile agents, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage?",
        answers: [
          { text: "Antihistamines", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "NSAIDs" },
          { text: "Opioids" },
          { text: "Antiepileptics" }
        ],
        Explanation: "Antihistamines, if used with certain anaesthetics like volatile agents, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage."
      },
      {
        question: "Which medication, if used alongside general anaesthetics, especially propofol or volatile agents, may exacerbate respiratory depression and CNS depression, warranting cautious use or dosage adjustment during anesthesia?",
        answers: [
          { text: "Antihypertensives" },
          { text: "Antipsychotics" },
          { text: "NSAIDs" },
          { text: "Opioids", "isCorrect": true },
          { text: "Antiepileptics" }
        ],
        Explanation: "Opioids, if used alongside general anaesthetics like propofol or volatile agents, may exacerbate respiratory depression and CNS depression, necessitating cautious use or dosage adjustment during anesthesia."
      },
      {
        question: "Among the listed medications, which one, when combined with certain anaesthetics, particularly volatile agents, may lead to increased CNS depression and respiratory depression, necessitating cautious use or dosage adjustment?",
        answers: [
          { text: "Antidepressants" },
          { text: "Antipsychotics" },
          { text: "Antihypertensives" },
          { text: "Opioids" },
          { text: "Antiepileptics", "isCorrect": true }
        ],
        Explanation: "Antiepileptics, when combined with certain anaesthetics like volatile agents, may lead to increased CNS depression and respiratory depression, necessitating cautious use or dosage adjustment."
      },
      {
        question: "Which medication, if used concurrently with certain anaesthetics like volatile agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment?",
        answers: [
          { text: "Antidepressants", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "Antihistamines" },
          { text: "Opioids" },
          { text: "Antiepileptics" }
        ],
        Explanation: "Antidepressants, if used with certain anaesthetics like volatile agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment."
      },
      {
        question: "Among the following medications, which one, if used alongside certain anaesthetics, particularly propofol or benzodiazepines, may lead to increased sedation and respiratory depression, requiring cautious use or dosage adjustment?",
        answers: [
          { text: "Antidepressants" },
          { text: "Antipsychotics" },
          { text: "Antihistamines" },
          { text: "Opioids" },
          { text: "Antiepileptics", "isCorrect": true }
        ],
        Explanation: "Antiepileptics, if used alongside certain anaesthetics like propofol or benzodiazepines, may lead to increased sedation and respiratory depression, necessitating cautious use or dosage adjustment."
      },
      {
        question: "Which medication, if used concurrently with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment?",
        answers: [
          { text: "Antidepressants" },
          { text: "Antipsychotics" },
          { text: "Antihistamines" },
          { text: "Opioids" },
          { text: "Antiepileptics", "isCorrect": true }
        ],
        Explanation: "Antiepileptics, if used with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment."
      },
      {
        question: "Among the listed medications, which one, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, requiring cautious use or dose adjustments?",
        answers: [
          { text: "Antidepressants" },
          { text: "Antipsychotics" },
          { text: "Antihistamines" },
          { text: "Opioids" },
          { text: "Antiepileptics", "isCorrect": true }
        ],
        Explanation: "Antiepileptics, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, necessitating cautious use or dose adjustments."
      },
      {
        question: "Which medication, if used alongside general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, warranting cautious use or dose adjustments during anesthesia?",
        answers: [
          { text: "Antidepressants", "isCorrect": true },
          { text: "Antipsychotics" },
          { text: "Antihistamines" },
          { text: "Opioids" },
          { text: "Antiepileptics" }
        ],
        Explanation: "Antidepressants, if used with general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, necessitating cautious use or dose adjustments during anesthesia."
      }   ]);

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

export default AnaesthesiaQuestion;
