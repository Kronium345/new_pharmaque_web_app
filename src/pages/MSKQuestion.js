import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const MSKQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
      question: "Which medication, commonly used in osteoarthritis, acts as a COX-2 selective inhibitor, providing analgesic and anti-inflammatory effects with a lower risk of gastrointestinal adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib is a COX-2 selective inhibitor with reduced gastrointestinal adverse effects in osteoarthritis."
    },
    {
      question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one acts by inhibiting dihydroorotate dehydrogenase, an enzyme involved in pyrimidine synthesis, leading to reduced proliferation of immune cells?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide", "isCorrect": true },
        { text: "Hydroxychloroquine" },
        { text: "Azathioprine" }
      ],
      Explanation: "Leflunomide inhibits dihydroorotate dehydrogenase, reducing immune cell proliferation in rheumatoid arthritis."
    },
    {
      question: "Which medication, used in gout, works by inhibiting xanthine oxidase, thereby reducing the production of uric acid, which is crucial in preventing gout attacks?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol", "isCorrect": true },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Allopurinol inhibits xanthine oxidase, reducing uric acid production and preventing gout attacks."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its longer half-life, allowing for once-daily dosing and sustained anti-inflammatory effects?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen", "isCorrect": true },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Naproxen has a longer half-life, enabling once-daily dosing and sustained anti-inflammatory effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, functions by inhibiting cytokine signaling, particularly interleukin-6, thereby reducing inflammation and joint damage?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Tocilizumab", "isCorrect": true }
      ],
      Explanation: "Tocilizumab inhibits interleukin-6 signaling, reducing inflammation and joint damage in rheumatoid arthritis."
    },
    {
      question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one is a folate analog that inhibits dihydrofolate reductase, thereby interfering with DNA synthesis in rapidly dividing cells?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate inhibits dihydrofolate reductase, interfering with DNA synthesis in rheumatoid arthritis."
    },
    {
      question: "Which medication, used in osteoarthritis, is an intra-articular injection of hyaluronic acid aimed at improving joint lubrication and reducing pain?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Sodium hyaluronate", "isCorrect": true }
      ],
      Explanation: "Sodium hyaluronate is an intra-articular injection used to improve joint lubrication in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its lower risk of causing gastrointestinal ulcers and bleeding due to its preferential inhibition of COX-2 over COX-1?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib has a lower risk of causing gastrointestinal ulcers due to its preferential COX-2 inhibition in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in gout, functions by inhibiting the reabsorption of uric acid in the renal tubules, leading to increased renal excretion of uric acid?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid", "isCorrect": true },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Probenecid inhibits uric acid reabsorption, increasing its renal excretion in gout."
    },
    {
      question: "Among the listed medications used in rheumatoid arthritis, which one is a disease-modifying anti-rheumatic drug (DMARD) that acts by suppressing T-cell function and modulating the immune response?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide", "isCorrect": true },
        { text: "Hydroxychloroquine" },
        { text: "Tocilizumab" }
      ],
      Explanation: "Leflunomide suppresses T-cell function and modulates the immune response in rheumatoid arthritis as a DMARD."
    },
    {
      question: "Which medication, used in osteoarthritis, is a non-pharmacological intervention involving the injection of plasma-rich growth factors to promote tissue repair and regeneration in affected joints?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Platelet-rich plasma", "isCorrect": true }
      ],
      Explanation: "Platelet-rich plasma involves the injection of growth factors to promote tissue repair in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, resulting in reduced risk of causing gastrointestinal adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib selectively inhibits COX-2, reducing the risk of gastrointestinal adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a disease-modifying anti-rheumatic drug (DMARD) that interferes with purine metabolism and inhibits DNA synthesis in immune cells?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Azathioprine", "isCorrect": true }
      ],
      Explanation: "Azathioprine interferes with purine metabolism and inhibits DNA synthesis in immune cells in rheumatoid arthritis as a DMARD."
    },
    {
      question: "Among the listed medications used in gout, which one is a recombinant uricase enzyme that catalyzes the breakdown of uric acid into a more soluble compound to lower uric acid levels?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase", "isCorrect": true }
      ],
      Explanation: "Pegloticase is a recombinant uricase enzyme that breaks down uric acid in gout to lower its levels."
    },
    {
      question: "Which medication, used in osteoarthritis, is a topical preparation containing capsaicin, acting as a transient receptor potential vanilloid 1 (TRPV1) agonist to reduce pain perception in affected joints?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Capsaicin cream", "isCorrect": true }
      ],
      Explanation: "Capsaicin cream contains capsaicin acting as a TRPV1 agonist to reduce pain perception in osteoarthritis."
    },
    {
      question: "Among the listed disease-modifying anti-rheumatic drugs (DMARDs) used in rheumatoid arthritis, which one is an antimalarial agent that interferes with lysosomal activity and suppresses immune responses?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine", "isCorrect": true },
        { text: "Azathioprine" }
      ],
      Explanation: "Hydroxychloroquine interferes with lysosomal activity and suppresses immune responses in rheumatoid arthritis as a DMARD."
    },
    {
      question: "Which medication, used in gout, works by inhibiting xanthine oxidase, an enzyme crucial in the conversion of hypoxanthine to xanthine and then to uric acid, thereby reducing uric acid levels?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat", "isCorrect": true },
        { text: "Pegloticase" }
      ],
      Explanation: "Febuxostat inhibits xanthine oxidase, reducing uric acid levels in gout."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, resulting in reduced risk of causing cardiovascular adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib selectively inhibits COX-2, reducing the risk of cardiovascular adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets tumor necrosis factor (TNF)-alpha, reducing inflammation and joint damage by binding to this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Adalimumab", "isCorrect": true }
      ],
      Explanation: "Adalimumab targets TNF-alpha, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, potentially reducing the risk of renal adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib selectively inhibits COX-2, potentially reducing the risk of renal adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets B-cells, leading to their depletion and subsequent reduction in autoantibody production and inflammation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Rituximab", "isCorrect": true }
      ],
      Explanation: "Rituximab targets B-cells, reducing autoantibody production and inflammation in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is an anti-inflammatory agent that inhibits microtubule polymerization and suppresses neutrophil migration to reduce inflammation during acute gout attacks?",
      answers: [
        { text: "Colchicine", "isCorrect": true },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Colchicine inhibits microtubule polymerization, suppressing neutrophil migration and reducing inflammation in acute gout attacks."
    },
    {
      question: "Which medication, used in osteoarthritis, is an intra-articular injection of corticosteroid aimed at reducing inflammation and providing relief from joint pain?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone", "isCorrect": true },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Sodium hyaluronate" }
      ],
      Explanation: "Triamcinolone is an intra-articular corticosteroid used to reduce inflammation and provide relief in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on platelet function compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce adverse effects on platelet function compared to non-selective NSAIDs in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets interleukin-1 (IL-1), reducing inflammation and joint damage by blocking this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Anakinra", "isCorrect": true }
      ],
      Explanation: "Anakinra targets IL-1, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is an uricosuric agent that inhibits uric acid reabsorption in the proximal tubules of the kidney, leading to increased renal excretion of uric acid?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid", "isCorrect": true },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Probenecid inhibits uric acid reabsorption, increasing its renal excretion in gout."
    },
    {
      question: "Which medication, used in osteoarthritis, is an oral supplement of glucosamine and chondroitin sulfate aimed at providing structural support to joint cartilage and potentially reducing symptoms?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Glucosamine-chondroitin", "isCorrect": true }
      ],
      Explanation: "Glucosamine-chondroitin is a supplement providing structural support to joint cartilage in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, potentially reducing the risk of cardiovascular adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib selectively inhibits COX-2, potentially reducing cardiovascular adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets interleukin-6 (IL-6) receptors, reducing inflammation and joint damage by blocking the effects of this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Tocilizumab", "isCorrect": true }
      ],
      Explanation: "Tocilizumab targets IL-6 receptors, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is a recombinant form of uricase enzyme that catalyzes the conversion of uric acid to allantoin, a more soluble compound excreted by the kidneys?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase", "isCorrect": true }
      ],
      Explanation: "Pegloticase is a recombinant uricase enzyme converting uric acid to allantoin in gout."
    },
    {
      question: "Which medication, used in osteoarthritis, is an intra-articular injection of a synthetic polymer aimed at providing joint lubrication and shock absorption?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Polyacrylamide gel", "isCorrect": true }
      ],
      Explanation: "Polyacrylamide gel is an intra-articular injection providing joint lubrication in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of gastrointestinal adverse effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce gastrointestinal adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets Tumor Necrosis Factor-alpha (TNF-alpha), reducing inflammation and joint damage by binding to this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Etanercept", "isCorrect": true }
      ],
      Explanation: "Etanercept targets TNF-alpha, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one acts by inhibiting xanthine oxidase, an enzyme crucial in the conversion of hypoxanthine to xanthine and then to uric acid, thereby lowering uric acid levels?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat", "isCorrect": true },
        { text: "Pegloticase" }
      ],
      Explanation: "Febuxostat inhibits xanthine oxidase, reducing uric acid levels in gout."
    },
    {
      question: "Which medication, used in osteoarthritis, is a topical preparation containing salicylates aimed at providing local anti-inflammatory effects and pain relief in affected joints?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Topical salicylate cream", "isCorrect": true }
      ],
      Explanation: "Topical salicylate cream contains salicylates providing local anti-inflammatory effects in osteoarthritis."
    },
    {
      question: "Among the listed medications used in rheumatoid arthritis, which one is a disease-modifying anti-rheumatic drug (DMARD) that acts by inhibiting Janus kinase enzymes, reducing inflammation and joint damage?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Tofacitinib", "isCorrect": true }
      ],
      Explanation: "Tofacitinib inhibits Janus kinase enzymes, reducing inflammation and joint damage in rheumatoid arthritis as a DMARD."
    },
    {
      question: "Which medication, used in gout, works by inhibiting the enzyme xanthine oxidase, leading to reduced production of uric acid and thereby preventing gout attacks?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat", "isCorrect": true },
        { text: "Pegloticase" }
      ],
      Explanation: "Febuxostat inhibits xanthine oxidase, reducing uric acid production and preventing gout attacks."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, potentially reducing the risk of adverse effects on the gastrointestinal tract compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce gastrointestinal adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets interleukin-17A, reducing inflammation and joint damage by inhibiting this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Secukinumab", "isCorrect": true }
      ],
      Explanation: "Secukinumab targets IL-17A, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is an anti-inflammatory agent that inhibits leukocyte infiltration and inflammatory mediator release, reducing pain and swelling during acute gout attacks?",
      answers: [
        { text: "Colchicine", "isCorrect": true },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Colchicine inhibits leukocyte infiltration and inflammatory mediator release, reducing pain and swelling in acute gout attacks."
    },
    {
      question: "Which medication, used in osteoarthritis, is an intra-articular injection of a synthetic polymer aimed at restoring the viscoelastic properties of synovial fluid for improved joint function?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Polyethylene glycol", "isCorrect": true }
      ],
      Explanation: "Polyethylene glycol is an intra-articular injection aimed at improving joint function in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its preferential inhibition of COX-2, potentially reducing the risk of adverse cardiovascular effects compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce cardiovascular adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets T-cell co-stimulation, reducing inflammation and joint damage by modulating T-cell activation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Abatacept", "isCorrect": true }
      ],
      Explanation: "Abatacept targets T-cell co-stimulation, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is a xanthine oxidase inhibitor that decreases uric acid production by inhibiting the enzyme responsible for its formation?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat", "isCorrect": true },
        { text: "Pegloticase" }
      ],
      Explanation: "Febuxostat inhibits xanthine oxidase, decreasing uric acid production in gout."
    },
    {
      question: "Which medication, used in osteoarthritis, is an oral supplement of avocado and soybean unsaponifiables aimed at reducing joint pain and stiffness while improving function?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Avocado-soybean unsaponifiables", "isCorrect": true }
      ],
      Explanation: "Avocado-soybean unsaponifiables are an oral supplement for joint pain and stiffness in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on renal function compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce adverse renal effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets interleukin-12 and interleukin-23, reducing inflammation and joint damage by blocking the effects of these cytokines?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Ustekinumab", "isCorrect": true }
      ],
      Explanation: "Ustekinumab targets IL-12 and IL-23, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one acts by enhancing renal excretion of uric acid by inhibiting its reabsorption in the proximal convoluted tubule of the kidney?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid", "isCorrect": true },
        { text: "Febuxostat" },
        { text: "Pegloticase" }
      ],
      Explanation: "Probenecid enhances uric acid excretion by inhibiting its reabsorption in gout."
    },
    {
      question: "Which medication, used in osteoarthritis, is a topical preparation containing nonsteroidal anti-inflammatory drugs (NSAIDs) aimed at providing local pain relief and reducing inflammation in affected joints?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Topical NSAID cream", "isCorrect": true }
      ],
      Explanation: "Topical NSAID cream provides local pain relief and reduces inflammation in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on platelet function compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce adverse platelet effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets granulocyte-macrophage colony-stimulating factor (GM-CSF), reducing inflammation and joint damage by blocking this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Mavrilimumab", "isCorrect": true }
      ],
      Explanation: "Mavrilimumab targets GM-CSF, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
    },
    {
      question: "Among the listed medications used in gout, which one is a recombinant form of uricase enzyme that catalyzes the breakdown of uric acid into a more soluble compound, lowering uric acid levels?",
      answers: [
        { text: "Colchicine" },
        { text: "Allopurinol" },
        { text: "Probenecid" },
        { text: "Febuxostat" },
        { text: "Pegloticase", "isCorrect": true }
      ],
      Explanation: "Pegloticase catalyzes the breakdown of uric acid in gout, lowering its levels."
    },
    {
      question: "Which medication, used in osteoarthritis, is an intra-articular injection of a derivative of hyaluronic acid aimed at improving joint mobility and providing pain relief?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Triamcinolone" },
        { text: "Celecoxib" },
        { text: "Diclofenac" },
        { text: "Hylan G-F 20", "isCorrect": true }
      ],
      Explanation: "Hylan G-F 20 is an intra-articular injection improving joint mobility in osteoarthritis."
    },
    {
      question: "Among the listed NSAIDs used in musculoskeletal disorders, which one is known for its COX-2 selectivity, potentially reducing the risk of adverse effects on the gastrointestinal tract compared to non-selective NSAIDs?",
      answers: [
        { text: "Ibuprofen" },
        { text: "Naproxen" },
        { text: "Celecoxib", "isCorrect": true },
        { text: "Diclofenac" },
        { text: "Meloxicam" }
      ],
      Explanation: "Celecoxib's COX-2 selectivity may reduce gastrointestinal adverse effects in musculoskeletal disorders."
    },
    {
      question: "Which medication, used in rheumatoid arthritis, is a biologic agent that targets a cytokine known as interleukin-23, reducing inflammation and joint damage by inhibiting this cytokine?",
      answers: [
        { text: "Methotrexate" },
        { text: "Sulfasalazine" },
        { text: "Leflunomide" },
        { text: "Hydroxychloroquine" },
        { text: "Guselkumab", "isCorrect": true }
      ],
      Explanation: "Guselkumab targets IL-23, reducing inflammation and joint damage in rheumatoid arthritis as a biologic agent."
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

export default MSKQuestion;
