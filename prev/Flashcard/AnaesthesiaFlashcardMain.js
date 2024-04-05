import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const AnaesthesiaFlashcardMain = () => {

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
        question: "Which anaesthetic medication is commonly used for induction and maintenance of general anesthesia and is known for its rapid onset and short duration of action?",
        answer: "Propofol",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 2,
        question: "Among the listed options, which anaesthetic medication is a volatile liquid inhalation agent used for the maintenance of general anesthesia and offers a smooth and rapid recovery?",
        answer: "Isoflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 3,
        question: "Which anaesthetic medication is an inhalation agent frequently employed in pediatric anesthesia due to its minimal airway irritation and pleasant odor?",
        answer: "Sevoflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 4,
        question: "Among the listed options, which anaesthetic medication is a barbiturate known for its rapid onset and short duration of action and is used for induction of anesthesia or sedation?",
        answer: "Thiopental",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 5,
        question: "Which anaesthetic medication is an intravenous agent utilized for induction of anesthesia and sedation, known for its minimal cardiovascular and respiratory depression?",
        answer: "Etomidate",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 6,
        question: "Among the following anaesthetic medications, which one is primarily used for intravenous anesthesia induction and maintenance, often referred to as the 'milk of amnesia'?",
        answer: "Propofol",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 7,
        question: "Which anaesthetic medication is known for its bronchodilator properties and is commonly used in anesthesia for patients with reactive airway disease?",
        answer: "Ketamine",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Ketamine"
        ]
      },
      {
        id: 8,
        question: "Among the listed options, which anaesthetic medication is used as an induction agent and analgesic, and is recognized for its dissociative effects and minimal effects on cardiovascular function?",
        answer: "Ketamine",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Ketamine"
        ]
      },
      {
        id: 9,
        question: "Which anaesthetic medication is an intravenous agent with antiemetic properties, often used in anesthesia induction and postoperative nausea and vomiting prevention?",
        answer: "Propofol",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Ondansetron"
        ]
      },
      {
        id: 10,
        question: "Among the following anaesthetic medications, which one is used for maintenance of general anesthesia and is known for its minimal effect on the cardiovascular system, making it suitable for patients with cardiac conditions?",
        answer: "Desflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Desflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 11,
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is known for its rapid recovery due to its low solubility in blood and tissues?",
        answer: "Desflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Desflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 12,
        question: "Among the listed anaesthetic medications, which one is an intravenous agent commonly used for anesthesia induction, with a formulation containing soybean oil, egg yolk phospholipids, and glycerol as emulsifiers?",
        answer: "Propofol",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Intralipid"
        ]
      },
      {
        id: 13,
        question: "Which anaesthetic medication is a volatile liquid inhalation agent commonly used for maintenance of anesthesia, with a relatively low blood-gas partition coefficient contributing to faster recovery?",
        answer: "Isoflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Halothane"
        ]
      },
      {
        id: 14,
        question: "Among the following anaesthetic medications, which one is commonly used for short-term procedures due to its rapid onset and recovery, as well as its amnestic properties?",
        answer: "Midazolam",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Midazolam"
        ]
      },
      {
        id: 15,
        question: "Which anaesthetic medication is an intravenous agent used for sedation and anesthesia induction, known for its anticonvulsant properties and amnesia effects?",
        answer: "Midazolam",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Midazolam"
        ]
      },
      {
        id: 16,
        question: "Among the listed options, which anaesthetic medication is used for induction and maintenance of anesthesia, particularly in patients with compromised cardiac function due to its minimal myocardial depression?",
        answer: "Etomidate",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 17,
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is recognized for its low solubility in blood and tissues, facilitating rapid recovery and awakening?",
        answer: "Desflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Desflurane",
          "Thiopental",
          "Etomidate"
        ]
      },
      {
        id: 18,
        question: "Among the listed anaesthetic medications, which one is an intravenous agent used for induction and maintenance of anesthesia, known for its antiemetic properties, especially in high-risk patients?",
        answer: "Propofol",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Ondansetron"
        ]
      },
      {
        id: 19,
        question: "Which anaesthetic medication is commonly used for maintenance of anesthesia and is known for its rapid elimination, making it suitable for outpatient surgeries?",
        answer: "Desflurane",
        options: [
          "Propofol",
          "Isoflurane",
          "Sevoflurane",
          "Thiopental",
          "Desflurane"
        ]
      },
      {
        id: 20,
        question: "Which topical anaesthetic medication is commonly used for mucosal anesthesia, particularly in dentistry, and is available in gel or liquid form?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 21,
        question: "Among the listed options, which topical anaesthetic medication is known for its rapid onset of action and is often used for short procedures, such as venipuncture or IV cannulation?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 22,
        question: "Which topical anaesthetic medication is frequently used for ophthalmic procedures and is available in drops or gel formulations for ocular surface anesthesia?",
        answer: "Tetracaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 23,
        question: "Among the following topical anaesthetic medications, which one is commonly used for numbing the skin before minor medical procedures or for temporary relief of pain and itching?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 24,
        question: "Which topical anaesthetic medication is often used in conjunction with a vasoconstrictor, such as epinephrine, to prolong its effect and reduce bleeding during procedures?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 25,
        question: "Among the listed options, which topical anaesthetic medication is primarily used for its longer duration of action and is often employed for chronic pain management or as a dermal analgesic?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 26,
        question: "Which topical anaesthetic medication is commonly used in tattooing and body piercing to alleviate pain during the procedure and is available as a cream or gel?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 27,
        question: "Among the following topical anaesthetic medications, which one is commonly used for relief of itching and pain caused by minor burns, sunburns, or insect bites?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 28,
        question: "Which topical anaesthetic medication is often used in cosmetic procedures, such as laser hair removal, to reduce discomfort during the process and is available in various formulations?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 29,
        question: "Among the listed topical anaesthetic medications, which one is frequently used for relief of pain and discomfort associated with minor skin irritations or teething in infants?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 30,
        question: "Which topical anaesthetic medication is known for its use in dentistry and is commonly employed for gingival or dental procedures, available in gel, paste, or spray forms?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 31,
        question: "Among the following topical anaesthetic medications, which one is used for temporary relief of discomfort associated with hemorrhoids or other anal conditions?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 32,
        question: "Which topical anaesthetic medication is often used for mucous membrane anesthesia, such as for intubation or endoscopy procedures, and is available in various forms, including sprays and gels?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 33,
        question: "Among the listed topical anaesthetic medications, which one is frequently used for reducing pain and discomfort associated with minor injuries or skin conditions like abrasions or scrapes?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 34,
        question: "Which topical anaesthetic medication is known for its use in dermatological procedures, such as skin biopsies or suturing, to minimize pain during the process?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 35,
        question: "Among the following topical anaesthetic medications, which one is commonly used in ear, nose, and throat procedures to alleviate discomfort and pain, available as drops or sprays?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 36,
        question: "Which topical anaesthetic medication is frequently used in tattooing, body piercing, or waxing to reduce pain during the procedure and is available in cream or gel forms?",
        answer: "Lidocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 37,
        question: "Among the listed topical anaesthetic medications, which one is commonly used for temporary relief of pain and itching associated with minor skin irritations or rashes?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 38,
        question: "Which topical anaesthetic medication is often used in podiatry for numbing the skin before minor procedures or to relieve pain caused by corns or calluses?",
        answer: "Benzocaine",
        options: [
          "Lidocaine",
          "Tetracaine",
          "Benzocaine",
          "Dibucaine",
          "Prilocaine"
        ]
      },
      {
        id: 39,
        question: "Which medication, when used concomitantly with inhalational anaesthetics, is known to increase the risk of severe arrhythmias and should be used cautiously or avoided during anesthesia?",
        answer: "Beta-blockers",
        options: [
          "Beta-blockers",
          "ACE inhibitors",
          "Calcium channel blockers",
          "MAO inhibitors",
          "SSRIs"
        ]
      },
      {
        id: 40,
        question: "Among the listed medications, which one, when combined with certain anaesthetics, especially halogenated agents, can potentiate respiratory depression and should be used cautiously or adjusted in dosage?",
        answer: "Benzodiazepines",
        options: [
          "Benzodiazepines",
          "NSAIDs",
          "Anticoagulants",
          "ACE inhibitors",
          "Antidepressants"
        ]
      },
      {
        id: 41,
        question: "Which medication, if used concurrently with inhalational anaesthetics, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage?",
        answer: "Calcium channel blockers",
        options: [
          "Diuretics",
          "Corticosteroids",
          "Calcium channel blockers",
          "NSAIDs",
          "Anticoagulants"
        ]
      },
      {
        id: 42,
        question: "Among the following medications, which one, if used alongside volatile anaesthetics, may enhance the neuromuscular-blocking effects and increase the risk of prolonged muscle relaxation during anesthesia?",
        answer: "Antiepileptics",
        options: [
          "Antiepileptics",
          "Antihypertensives",
          "NSAIDs",
          "Opioids",
          "Antibiotics"
        ]
      },
      {
        id: 43,
        question: "Which medication, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, requiring cautious use or dose adjustments?",
        answer: "Antidepressants",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Antibiotics"
        ]
      },
      {
        id: 44,
        question: "Among the following medications, which one, if used with certain anaesthetics like volatile agents, may increase the risk of central nervous system depression, necessitating careful monitoring or dosage adjustment?",
        answer: "Antidepressants",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihypertensives",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 45,
        question: "Which medication, if used alongside certain anaesthetics like propofol or benzodiazepines, may potentiate sedation and respiratory depression, requiring cautious use or dosage adjustment during anesthesia?",
        answer: "Antihistamines",
        options: [
          "Antihistamines",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Antibiotics"
        ]
      },
      {
        id: 46,
        question: "Among the listed medications, which one, if used with certain anaesthetics, may increase the risk of bleeding or alter coagulation parameters, necessitating careful monitoring or adjustment in dosage?",
        answer: "NSAIDs",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Anticoagulants"
        ]
      },
      {
        id: 47,
        question: "Which medication, when combined with general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, necessitating cautious use or dose adjustments during anesthesia?",
        answer: "Antipsychotics",
        options: [
          "Antihypertensives",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 48,
        question: "Among the following medications, which one, if used with certain anaesthetics, may increase the risk of hypotension and cardiovascular depression during anesthesia, requiring careful monitoring or adjustment in dosage?",
        answer: "Antihistamines",
        options: [
          "Antihistamines",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 49,
        question: "Which medication, if used alongside general anaesthetics, especially propofol or volatile agents, may exacerbate respiratory depression and CNS depression, warranting cautious use or dosage adjustment during anesthesia?",
        answer: "Opioids",
        options: [
          "Antihypertensives",
          "Antipsychotics",
          "NSAIDs",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 50,
        question: "Among the listed medications, which one, when combined with certain anaesthetics like volatile agents, may lead to increased CNS depression and respiratory depression, necessitating cautious use or dosage adjustment?",
        answer: "Antiepileptics",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihypertensives",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 51,
        question: "Which medication, if used concurrently with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment?",
        answer: "Antidepressants",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihistamines",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 52,
        question: "Among the following medications, which one, if used alongside certain anaesthetics, particularly propofol or benzodiazepines, may lead to increased sedation and respiratory depression, requiring cautious use or dosage adjustment?",
        answer: "Antiepileptics",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihistamines",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 53,
        question: "Which medication, if used concurrently with certain anaesthetics like ketamine or inhalational agents, may lead to increased CNS excitation, agitation, or hallucinations, necessitating careful monitoring or dosage adjustment?",
        answer: "Antiepileptics",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihistamines",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 54,
        question: "Among the following medications, which one, when combined with certain anaesthetics like sevoflurane or desflurane, may increase the risk of prolonged QT interval or cardiac arrhythmias, requiring cautious use or dose adjustments?",
        answer: "Antiepileptics",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihistamines",
          "Opioids",
          "Antiepileptics"
        ]
      },
      {
        id: 55,
        question: "Which medication, if used alongside general anaesthetics like propofol or volatile agents, may lead to increased sedation, CNS depression, or respiratory depression, warranting cautious use or dose adjustments during anesthesia?",
        answer: "Antidepressants",
        options: [
          "Antidepressants",
          "Antipsychotics",
          "Antihistamines",
          "Opioids",
          "Antiepileptics"
        ]
      }
]

export default AnaesthesiaFlashcardMain;
