import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const MSKFlashcardMain = () => {

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
        question: "Which medication, commonly used in osteoarthritis, acts as a COX-2 selective inhibitor, providing analgesic and anti-inflammatory effects with a lower risk of gastrointestinal adverse effects compared to non-selective NSAIDs?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 2,
        question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one acts by inhibiting dihydroorotate dehydrogenase, an enzyme involved in pyrimidine synthesis, leading to reduced proliferation of immune cells?",
        answer: "Leflunomide",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Azathioprine"
        ]
      },
      {
        id: 3,
        question: "Which medication, used in gout, works by inhibiting xanthine oxidase, thereby reducing the production of uric acid, which is crucial in preventing gout attacks?",
        answer: "Allopurinol",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 4,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its longer half-life, allowing for once-daily dosing and sustained anti-inflammatory effects?",
        answer: "Naproxen",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 5,
        question: "Which medication, used in rheumatoid arthritis, functions by inhibiting cytokine signaling, particularly interleukin-6, thereby reducing inflammation and joint damage?",
        answer: "Tocilizumab",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Tocilizumab"
        ]
      },
      {
        id: 6,
        question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one is a folate analog that inhibits dihydrofolate reductase, thereby interfering with DNA synthesis in rapidly dividing cells?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Azathioprine"
        ]
      },
      {
        id: 7,
        question: "Which medication, used in osteoarthritis, is an intra-articular injection of hyaluronic acid aimed at improving joint lubrication and reducing pain?",
        answer: "Sodium hyaluronate",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Sodium hyaluronate"
        ]
      },
      {
        id: 8,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its lower risk of causing gastrointestinal ulcers and bleeding due to its preferential inhibition of COX-2 over COX-1?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 9,
        question: "Which medication, used in gout, functions by inhibiting the reabsorption of uric acid in the renal tubules, leading to increased renal excretion of uric acid?",
        answer: "Probenecid",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 10,
        question: "Among the listed medications used in rheumatoid arthritis, which one is a disease-modifying anti-rheumatic drug (DMARD) that acts by suppressing T-cell function and modulating the immune response?",
        answer: "Leflunomide",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Tocilizumab"
        ]
      },
      {
        id: 11,
        question: "Which medication, used in osteoarthritis, is a non-pharmacological intervention involving the injection of plasma-rich growth factors to promote tissue repair and regeneration in affected joints?",
        answer: "Platelet-rich plasma",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Platelet-rich plasma"
        ]
      },
      {
        id: 12,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, resulting in reduced risk of causing gastrointestinal adverse effects compared to non-selective NSAIDs?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 13,
        question: "Which medication, used in rheumatoid arthritis, is a disease-modifying anti-rheumatic drug (DMARD) that interferes with purine metabolism and inhibits DNA synthesis in immune cells?",
        answer: "Azathioprine",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Azathioprine"
        ]
      },
      {
        id: 14,
        question: "Among the listed medications used in gout, which one is a recombinant uricase enzyme that catalyzes the breakdown of uric acid into a more soluble compound to lower uric acid levels?",
        answer: "Pegloticase",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 15,
        question: "Which medication, used in osteoarthritis, is a topical preparation containing capsaicin, acting as a transient receptor potential vanilloid 1 (TRPV1) agonist to reduce pain perception in affected joints?",
        answer: "Capsaicin cream",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Capsaicin cream"
        ]
      },
      {
        id: 16,
        question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one is an antimalarial agent that interferes with lysosomal activity and suppresses immune responses?",
        answer: "Hydroxychloroquine",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Azathioprine"
        ]
      },
      {
        id: 17,
        question: "Which interaction is most likely to occur between warfarin and omeprazole?",
        answer: "Omeprazole increases warfarin bioavailability",
        options: [
          "Omeprazole decreases warfarin metabolism",
          "Omeprazole inhibits warfarin absorption",
          "Omeprazole increases warfarin bioavailability",
          "Omeprazole induces warfarin metabolism",
          "Omeprazole interferes with warfarin binding sites"
        ]
      },
      {
        id: 18,
        question: "Which interaction is most likely to occur between fluoxetine and monoamine oxidase inhibitors (MAOIs)?",
        answer: "Increased risk of serotonin syndrome",
        options: [
          "Reduced risk of serotonin syndrome",
          "Increased risk of serotonin syndrome",
          "Reduced effectiveness of MAOIs",
          "Decreased plasma levels of fluoxetine",
          "Enhanced therapeutic effects of fluoxetine"
        ]
      },
      {
        id: 19,
        question: "A patient taking simvastatin for hyperlipidemia is prescribed itraconazole for a fungal infection. What is the primary concern regarding this drug combination?",
        answer: "Increased risk of myopathy and rhabdomyolysis",
        options: [
          "Decreased risk of myopathy and rhabdomyolysis",
          "Increased risk of myopathy and rhabdomyolysis",
          "Reduced effectiveness of itraconazole",
          "Enhanced lipid-lowering effects of simvastatin",
          "Decreased plasma levels of simvastatin"
        ]
      },
      {
        id: 20,
        question: "Which interaction is most likely to occur between digoxin and verapamil?",
        answer: "Increased risk of digoxin toxicity",
        options: [
          "Decreased risk of digoxin toxicity",
          "Increased risk of digoxin toxicity",
          "Reduced effectiveness of verapamil",
          "Enhanced therapeutic effects of digoxin",
          "Decreased plasma levels of digoxin"
        ]
      },
      {
        id: 21,
        question: "A patient taking phenytoin for seizures is started on ciprofloxacin for a urinary tract infection. What is the potential consequence of this drug combination?",
        answer: "Increased risk of phenytoin toxicity",
        options: [
          "Decreased risk of phenytoin toxicity",
          "Increased risk of phenytoin toxicity",
          "Reduced effectiveness of ciprofloxacin",
          "Enhanced seizure control with phenytoin",
          "Decreased plasma levels of phenytoin"
        ]
      },
      {
        id: 22,
        question: "Which interaction is most likely to occur between warfarin and amiodarone?",
        answer: "Increased risk of bleeding",
        options: [
          "Decreased risk of bleeding",
          "Increased risk of bleeding",
          "Reduced effectiveness of amiodarone",
          "Enhanced anticoagulant effects of warfarin",
          "Decreased plasma levels of warfarin"
        ]
      },
      {
        id: 23,
        question: "A patient taking warfarin for deep vein thrombosis is prescribed rifampin for tuberculosis. What is the primary concern regarding this drug combination?",
        answer: "Reduced anticoagulant effects of warfarin",
        options: [
          "Increased anticoagulant effects of warfarin",
          "Reduced anticoagulant effects of warfarin",
          "Increased risk of rifampin toxicity",
          "Enhanced therapeutic effects of warfarin",
          "Decreased plasma levels of rifampin"
        ]
      },
      {
        id: 24,
        question: "Which interaction is most likely to occur between aspirin and ibuprofen?",
        answer: "Reduced antiplatelet effects of aspirin",
        options: [
          "Increased antiplatelet effects of aspirin",
          "Reduced antiplatelet effects of aspirin",
          "Reduced gastrointestinal bleeding risk",
          "Enhanced analgesic effects of ibuprofen",
          "Decreased plasma levels of aspirin"
        ]
      },
      {
        id: 25,
        question: "A patient taking lithium for bipolar disorder is started on hydrochlorothiazide for hypertension. What is the primary concern regarding this drug combination?",
        answer: "Increased risk of lithium toxicity",
        options: [
          "Decreased risk of lithium toxicity",
          "Increased risk of lithium toxicity",
          "Reduced effectiveness of hydrochlorothiazide",
          "Enhanced mood-stabilizing effects of lithium",
          "Decreased plasma levels of lithium"
        ]
      },
      {
        id: 26,
        question: "Which interaction is most likely to occur between clopidogrel and omeprazole?",
        answer: "Reduced antiplatelet effects of clopidogrel",
        options: [
          "Increased antiplatelet effects of clopidogrel",
          "Reduced antiplatelet effects of clopidogrel",
          "Reduced gastrointestinal bleeding risk",
          "Enhanced acid-reducing effects of omeprazole",
          "Decreased plasma levels of clopidogrel"
        ]
      },
      {
        id: 27,
        question: "A patient taking levothyroxine for hypothyroidism is prescribed cholestyramine for high cholesterol. What is the potential consequence of this drug combination?",
        answer: "Reduced absorption of levothyroxine",
        options: [
          "Increased absorption of levothyroxine",
          "Reduced absorption of levothyroxine",
          "Reduced cholesterol-lowering effects of cholestyramine",
          "Enhanced therapeutic effects of levothyroxine",
          "Decreased plasma levels of levothyroxine"
        ]
      },
      {
        id: 28,
        question: "Which interaction is most likely to occur between metformin and cimetidine?",
        answer: "Increased risk of lactic acidosis",
        options: [
          "Decreased risk of lactic acidosis",
          "Increased risk of lactic acidosis",
          "Reduced effectiveness of cimetidine",
          "Enhanced glucose-lowering effects of metformin",
          "Decreased plasma levels of metformin"
        ]
      },
      {
        id: 29,
        question: "A patient taking amitriptyline for depression is prescribed fluconazole for a fungal infection. What is the primary concern regarding this drug combination?",
        answer: "Increased risk of amitriptyline toxicity",
        options: [
          "Decreased risk of amitriptyline toxicity",
          "Increased risk of amitriptyline toxicity",
          "Reduced effectiveness of fluconazole",
          "Enhanced therapeutic effects of amitriptyline",
          "Decreased plasma levels of amitriptyline"
        ]
      },
      {
        id: 30,
        question: "Which interaction is most likely to occur between furosemide and aminoglycosides?",
        answer: "Increased risk of ototoxicity",
        options: [
          "Decreased risk of ototoxicity",
          "Increased risk of ototoxicity",
          "Reduced effectiveness of aminoglycosides",
          "Enhanced diuretic effects of furosemide",
          "Decreased plasma levels of furosemide"
        ]
      },
      {
        id: 31,
        question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets T-cell co-stimulation, reducing inflammation and joint damage by modulating T-cell activation?",
        answer: "Abatacept",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Abatacept"
        ]
      },
      {
        id: 32,
        question: "Among the listed medications used in gout, which one is a xanthine oxidase inhibitor that decreases uric acid production by inhibiting the enzyme responsible for its formation?",
        answer: "Febuxostat",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 33,
        question: "Which medication, used in osteoarthritis, is an oral supplement of avocado and soybean unsaponifiables aimed at reducing joint pain and stiffness while improving function?",
        answer: "Avocado-soybean unsaponifiables",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Avocado-soybean unsaponifiables"
        ]
      },
      {
        id: 34,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on renal function compared to non-selective NSAIDs?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 35,
        question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets interleukin-12 and interleukin-23, reducing inflammation and joint damage by blocking the effects of these cytokines?",
        answer: "Ustekinumab",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Ustekinumab"
        ]
      },
      {
        id: 36,
        question: "Among the listed medications used in gout, which one acts by enhancing renal excretion of uric acid by inhibiting its reabsorption in the proximal convoluted tubule of the kidney?",
        answer: "Probenecid",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 37,
        question: "Which medication, used in osteoarthritis, is a topical preparation containing nonsteroidal anti-inflammatory drugs (NSAIDs) aimed at providing local pain relief and reducing inflammation in affected joints?",
        answer: "Topical NSAID cream",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Topical NSAID cream"
        ]
      },
      {
        id: 38,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on platelet function compared to non-selective NSAIDs?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 39,
        question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets granulocyte-macrophage colony-stimulating factor (GM-CSF), reducing inflammation and joint damage by blocking this cytokine?",
        answer: "Mavrilimumab",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Mavrilimumab"
        ]
      },
      {
        id: 40,
        question: "Among the listed medications used in gout, which one is a recombinant form of uricase enzyme that catalyzes the breakdown of uric acid into a more soluble compound, lowering uric acid levels?",
        answer: "Pegloticase",
        options: [
          "Colchicine",
          "Allopurinol",
          "Probenecid",
          "Febuxostat",
          "Pegloticase"
        ]
      },
      {
        id: 41,
        question: "Which medication, used in osteoarthritis, is an intra-articular injection of a derivative of hyaluronic acid aimed at improving joint mobility and providing pain relief?",
        answer: "Hylan G-F 20",
        options: [
          "Ibuprofen",
          "Triamcinolone",
          "Celecoxib",
          "Diclofenac",
          "Hylan G-F 20"
        ]
      },
      {
        id: 42,
        question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on the gastrointestinal tract compared to non-selective NSAIDs?",
        answer: "Celecoxib",
        options: [
          "Ibuprofen",
          "Naproxen",
          "Celecoxib",
          "Diclofenac",
          "Meloxicam"
        ]
      },
      {
        id: 43,
        question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets a cytokine known as interleukin-23, reducing inflammation and joint damage by inhibiting this cytokine?",
        answer: "Guselkumab",
        options: [
          "Methotrexate",
          "Sulfasalazine",
          "Leflunomide",
          "Hydroxychloroquine",
          "Guselkumab"
        ]
      }
]


export default MSKFlashcardMain;
