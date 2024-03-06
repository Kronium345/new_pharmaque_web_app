import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const MDIQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
      question: "Which immunosuppressant inhibits calcineurin?",
      answers: [
        { text: "Cyclophosphamide" },
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Sirolimus" }
      ],
      Explanation: "Calcineurin inhibitors include Tacrolimus and Cyclosporine, commonly used in transplant medicine."
    },
    {
      question: "What is the mechanism of action of Rituximab?",
      answers: [
        { text: "Binds to CD20", "isCorrect": true },
        { text: "Inhibits mTOR" },
        { text: "Blocks TNF-α" },
        { text: "Inhibits DHFR" },
        { text: "Binds to HER2" }
      ],
      Explanation: "Rituximab targets CD20 antigen on B cells, used in conditions like non-Hodgkin's lymphoma and rheumatoid arthritis."
    },
    {
      question: "Which drug is a monoclonal antibody against EGFR?",
      answers: [
        { text: "Trastuzumab" },
        { text: "Cetuximab", "isCorrect": true },
        { text: "Bevacizumab" },
        { text: "Rituximab" },
        { text: "Pembrolizumab" }
      ],
      Explanation: "Cetuximab is a monoclonal antibody against EGFR, used in colorectal and head/neck cancers."
    },
    {
      question: "Which drug inhibits microtubule formation?",
      answers: [
        { text: "Vinblastine", "isCorrect": true },
        { text: "Imatinib" },
        { text: "Cisplatin" },
        { text: "Bleomycin" },
        { text: "Etoposide" }
      ],
      Explanation: "Vinblastine disrupts microtubule formation, used in treating various cancers."
    },
    {
      question: "Which drug is a proteasome inhibitor?",
      answers: [
        { text: "Bortezomib", "isCorrect": true },
        { text: "Methotrexate" },
        { text: "Lenalidomide" },
        { text: "Cyclophosphamide" },
        { text: "Fluorouracil" }
      ],
      Explanation: "Bortezomib inhibits the proteasome, commonly used in multiple myeloma therapy."
    },
    {
      question: "What is the primary mechanism of action of Interferon-α?",
      answers: [
        { text: "Antiviral" },
        { text: "Anti-inflammatory" },
        { text: "Antineoplastic", "isCorrect": true },
        { text: "Immunosuppressive" },
        { text: "Pro-apoptotic" }
      ],
      Explanation: "Interferon-α exhibits antiviral, anti-neoplastic, and immunomodulatory effects."
    },
    {
      question: "Which drug inhibits tyrosine kinase activity?",
      answers: [
        { text: "Imatinib", "isCorrect": true },
        { text: "5-Fluorouracil" },
        { text: "Bleomycin" },
        { text: "Doxorubicin" },
        { text: "Etoposide" }
      ],
      Explanation: "Imatinib inhibits tyrosine kinase, used in chronic myeloid leukemia and gastrointestinal stromal tumors."
    },
    {
      question: "What is the primary action of Alemtuzumab?",
      answers: [
        { text: "Binds to CD52", "isCorrect": true },
        { text: "Blocks TNF-α" },
        { text: "Inhibits mTOR" },
        { text: "Binds to HER2" },
        { text: "Inhibits DHFR" }
      ],
      Explanation: "Alemtuzumab targets CD52, used in chronic lymphocytic leukemia and multiple sclerosis."
    },
    {
      question: "Which drug is an anti-CD20 monoclonal antibody?",
      answers: [
        { text: "Obinutuzumab" },
        { text: "Cetuximab" },
        { text: "Trastuzumab" },
        { text: "Rituximab", "isCorrect": true },
        { text: "Bevacizumab" }
      ],
      Explanation: "Rituximab is an anti-CD20 monoclonal antibody, used in B-cell non-Hodgkin's lymphoma and rheumatoid arthritis."
    },
    {
      question: "Which drug inhibits dihydrofolate reductase?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Bleomycin" },
        { text: "Vinblastine" },
        { text: "Etoposide" },
        { text: "Imatinib" }
      ],
      Explanation: "Methotrexate inhibits dihydrofolate reductase, used in various cancers and autoimmune conditions."
    },
    {
      question: "What is the mechanism of action of Bevacizumab?",
      answers: [
        { text: "Anti-angiogenic", "isCorrect": true },
        { text: "Blocks TNF-α" },
        { text: "Binds to HER2" },
        { text: "Inhibits mTOR" },
        { text: "Binds to CD20" }
      ],
      Explanation: "Bevacizumab is an anti-angiogenic monoclonal antibody, used in cancers to inhibit angiogenesis."
    },
    {
      question: "Which drug is a topoisomerase inhibitor?",
      answers: [
        { text: "Etoposide", "isCorrect": true },
        { text: "Lenalidomide" },
        { text: "Methotrexate" },
        { text: "Cyclophosphamide" },
        { text: "Bortezomib" }
      ],
      Explanation: "Etoposide is a topoisomerase inhibitor used in various cancers."
    },
    {
      question: "What is the primary mechanism of action of Trastuzumab?",
      answers: [
        { text: "Binds to HER2", "isCorrect": true },
        { text: "Inhibits mTOR" },
        { text: "Blocks TNF-α" },
        { text: "Binds to CD20" },
        { text: "Inhibits DHFR" }
      ],
      Explanation: "Trastuzumab targets HER2, used in HER2-positive breast cancer."
    },
    {
      question: "Which drug is an antimetabolite?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Bleomycin" },
        { text: "Vinblastine" },
        { text: "Etoposide" },
        { text: "Imatinib" }
      ],
      Explanation: "Methotrexate is an antimetabolite used in cancer and autoimmune diseases."
    },
    {
      question: "What is the primary mechanism of action of Pembrolizumab?",
      answers: [
        { text: "PD-1 inhibitor", "isCorrect": true },
        { text: "Binds to CD20" },
        { text: "Inhibits mTOR" },
        { text: "Blocks TNF-α" },
        { text: "Inhibits DHFR" }
      ],
      Explanation: "Pembrolizumab is a PD-1 inhibitor, used in various cancers as immunotherapy."
    },
    {
      question: "Which drug inhibits ribonucleotide reductase?",
      answers: [
        { text: "Hydroxyurea", "isCorrect": true },
        { text: "Rituximab" },
        { text: "Bevacizumab" },
        { text: "Alemtuzumab" },
        { text: "Trastuzumab" }
      ],
      Explanation: "Hydroxyurea inhibits ribonucleotide reductase, used in myeloproliferative disorders and certain cancers."
    },
    {
      question: "What is the mechanism of action of Lenalidomide?",
      answers: [
        { text: "Immunomodulatory", "isCorrect": true },
        { text: "Binds to CD20" },
        { text: "Blocks TNF-α" },
        { text: "Inhibits mTOR" },
        { text: "Inhibits DHFR" }
      ],
      Explanation: "Lenalidomide has immunomodulatory effects, used in multiple myeloma and myelodysplastic syndromes."
    },
    {
      question: "Which drug is a DNA alkylating agent?",
      answers: [
        { text: "Cyclophosphamide", "isCorrect": true },
        { text: "Rituximab" },
        { text: "Trastuzumab" },
        { text: "Bevacizumab" },
        { text: "Alemtuzumab" }
      ],
      Explanation: "Cyclophosphamide is a DNA alkylating agent, used in various cancers."
    },
    {
      question: "What is the primary action of Dasatinib?",
      answers: [
        { text: "Tyrosine kinase inhibitor", "isCorrect": true },
        { text: "Blocks TNF-α" },
        { text: "Binds to HER2" },
        { text: "Inhibits mTOR" },
        { text: "Binds to CD20" }
      ],
      Explanation: "Dasatinib inhibits multiple tyrosine kinases, used in chronic myeloid leukemia and acute lymphoblastic leukemia."
    },
    {
      question: "Which drug is a BRAF inhibitor?",
      answers: [
        { text: "Vemurafenib", "isCorrect": true },
        { text: "Methotrexate" },
        { text: "Etoposide" },
        { text: "Bevacizumab" },
        { text: "Imatinib" }
      ],
      Explanation: "Vemurafenib is a BRAF inhibitor used in melanoma with BRAF mutations."
    },
    {
      question: "A 45-year-old female presents with rheumatoid arthritis unresponsive to methotrexate. Which drug with TNF-α inhibitory properties is most suitable?",
      answers: [
        { text: "Infliximab" },
        { text: "Rituximab" },
        { text: "Adalimumab", "isCorrect": true },
        { text: "Bevacizumab" },
        { text: "Pembrolizumab" }
      ],
      Explanation: "Adalimumab is a TNF-α inhibitor used in rheumatoid arthritis patients unresponsive to methotrexate."
    },
    {
      question: "A 65-year-old male is diagnosed with chronic lymphocytic leukemia. Which drug, targeting CD52, is recommended as a first-line treatment?",
      answers: [
        { text: "Alemtuzumab", "isCorrect": true },
        { text: "Rituximab" },
        { text: "Pembrolizumab" },
        { text: "Bevacizumab" },
        { text: "Infliximab" }
      ],
      Explanation: "Alemtuzumab targets CD52 and is used in chronic lymphocytic leukemia."
    },
    {
      question: "A 50-year-old woman with HER2-positive breast cancer requires adjuvant therapy post-surgery. Which medication is specifically indicated in this case?",
      answers: [
        { text: "Trastuzumab", "isCorrect": true },
        { text: "Cetuximab" },
        { text: "Bevacizumab" },
        { text: "Pembrolizumab" },
        { text: "Infliximab" }
      ],
      Explanation: "Trastuzumab is used in HER2-positive breast cancer as adjuvant therapy."
    },
    {
      question: "A 30-year-old man with multiple myeloma experiences neuropathy due to chemotherapy. Which proteasome inhibitor should be avoided to minimize this side effect?",
      answers: [
        { text: "Bortezomib", "isCorrect": true },
        { text: "Carfilzomib" },
        { text: "Ixazomib" },
        { text: "Panobinostat" },
        { text: "Daratumumab" }
      ],
      Explanation: "Bortezomib is associated with peripheral neuropathy; others have different side effect profiles."
    },
    {
      question: "A 60-year-old woman presents with psoriasis unresponsive to conventional therapies. Which IL-17 inhibitor is most suitable for her condition?",
      answers: [
        { text: "Secukinumab", "isCorrect": true },
        { text: "Ustekinumab" },
        { text: "Golimumab" },
        { text: "Tocilizumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Secukinumab is an IL-17 inhibitor used in psoriasis treatment."
    },
    {
      question: "A 55-year-old male diagnosed with non-Hodgkin's lymphoma is prescribed a monoclonal antibody that binds to CD20. Which drug matches this description?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Cetuximab" },
        { text: "Trastuzumab" },
        { text: "Bevacizumab" },
        { text: "Infliximab" }
      ],
      Explanation: "Rituximab specifically targets CD20 in non-Hodgkin's lymphoma."
    },
    {
      question: "A 70-year-old patient with chronic myeloid leukemia requires a drug inhibiting BCR-ABL tyrosine kinase. Which medication is the standard of care in this scenario?",
      answers: [
        { text: "Imatinib", "isCorrect": true },
        { text: "Dasatinib" },
        { text: "Nilotinib" },
        { text: "Bosutinib" },
        { text: "Ponatinib" }
      ],
      Explanation: "Imatinib is a standard BCR-ABL tyrosine kinase inhibitor in chronic myeloid leukemia."
    },
    {
      question: "A 40-year-old male with ulcerative colitis needs a TNF-α inhibitor. Which drug should be avoided due to its potential for worsening colitis?",
      answers: [
        { text: "Etanercept" },
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab may worsen ulcerative colitis symptoms."
    },
    {
      question: "A 25-year-old female with systemic lupus erythematosus is prescribed an immunosuppressant targeting mTOR. Which drug should be chosen?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Cyclophosphamide" },
        { text: "Methotrexate" },
        { text: "Tacrolimus" }
      ],
      Explanation: "Sirolimus inhibits mTOR and is used in systemic lupus erythematosus."
    },
    {
      question: "A 50-year-old male with advanced melanoma and BRAF mutation needs a targeted therapy. Which drug specifically targets mutated BRAF proteins?",
      answers: [
        { text: "Vemurafenib", "isCorrect": true },
        { text: "Ipilimumab" },
        { text: "Nivolumab" },
        { text: "Pembrolizumab" },
        { text: "Atezolizumab" }
      ],
      Explanation: "Vemurafenib targets mutated BRAF proteins in advanced melanoma."
    },
    {
      question: "A 65-year-old female with renal cell carcinoma requires an anti-VEGF agent. Which medication primarily inhibits vascular endothelial growth factor?",
      answers: [
        { text: "Bevacizumab", "isCorrect": true },
        { text: "Ramucirumab" },
        { text: "Sorafenib" },
        { text: "Axitinib" },
        { text: "Cabozantinib" }
      ],
      Explanation: "Bevacizumab primarily inhibits VEGF and is used in renal cell carcinoma."
    },
    {
      question: "A 55-year-old male with ankylosing spondylitis requires a TNF-α inhibitor. Which medication should be avoided due to its ineffectiveness in this condition?",
      answers: [
        { text: "Etanercept", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Etanercept is less effective in ankylosing spondylitis compared to others."
    },
    {
      question: "A 70-year-old male diagnosed with mantle cell lymphoma needs a drug targeting BTK. Which medication specifically inhibits Bruton's tyrosine kinase?",
      answers: [
        { text: "Ibrutinib", "isCorrect": true },
        { text: "Idelalisib" },
        { text: "Copanlisib" },
        { text: "Duvelisib" },
        { text: "Tirabrutinib" }
      ],
      Explanation: "Ibrutinib targets BTK and is used in mantle cell lymphoma."
    },
    {
      question: "A 40-year-old female with Crohn's disease needs an anti-integrin therapy. Which medication primarily targets integrins in this condition?",
      answers: [
        { text: "Vedolizumab", "isCorrect": true },
        { text: "Natalizumab" },
        { text: "Efalizumab" },
        { text: "Ustekinumab" },
        { text: "Secukinumab" }
      ],
      Explanation: "Vedolizumab specifically targets integrins in Crohn's disease treatment."
    },
    {
      question: "A 60-year-old male with advanced non-small cell lung cancer requires an immunotherapy targeting PD-1. Which drug should be prescribed in this scenario?",
      answers: [
        { text: "Pembrolizumab", "isCorrect": true },
        { text: "Nivolumab" },
        { text: "Atezolizumab" },
        { text: "Durvalumab" },
        { text: "Ipilimumab" }
      ],
      Explanation: "Pembrolizumab targets PD-1 in advanced non-small cell lung cancer."
    },
    {
      question: "A 45-year-old female with relapsing-remitting multiple sclerosis requires an anti-CD25 monoclonal antibody. Which medication should be chosen?",
      answers: [
        { text: "Daclizumab", "isCorrect": true },
        { text: "Basiliximab" },
        { text: "Muromonab" },
        { text: "Alemtuzumab" },
        { text: "Rituximab" }
      ],
      Explanation: "Daclizumab targets CD25 and is used in multiple sclerosis."
    },
    {
      question: "A 30-year-old male with acute lymphoblastic leukemia requires a drug targeting CD19. Which medication specifically targets CD19-expressing cells?",
      answers: [
        { text: "Blinatumomab", "isCorrect": true },
        { text: "Gemtuzumab" },
        { text: "Ofatumumab" },
        { text: "Obinutuzumab" },
        { text: "Brentuximab" }
      ],
      Explanation: "Blinatumomab targets CD19 and is used in acute lymphoblastic leukemia."
    },
    {
      question: "A 55-year-old male with rheumatoid arthritis needs an anti-IL-6 receptor antibody. Which medication primarily blocks IL-6 signaling?",
      answers: [
        { text: "Tocilizumab", "isCorrect": true },
        { text: "Sarilumab" },
        { text: "Eculizumab" },
        { text: "Anakinra" },
        { text: "Canakinumab" }
      ],
      Explanation: "Tocilizumab blocks IL-6 signaling and is used in rheumatoid arthritis."
    },
    {
      question: "A 65-year-old female with metastatic colorectal cancer needs an EGFR inhibitor. Which medication specifically targets the epidermal growth factor receptor?",
      answers: [
        { text: "Cetuximab", "isCorrect": true },
        { text: "Panitumumab" },
        { text: "Trastuzumab" },
        { text: "Bevacizumab" },
        { text: "Ramucirumab" }
      ],
      Explanation: "Cetuximab specifically targets EGFR in metastatic colorectal cancer."
    },
    {
      question: "A 50-year-old male with advanced renal cell carcinoma needs an mTOR inhibitor. Which medication primarily inhibits the mammalian target of rapamycin?",
      answers: [
        { text: "Everolimus", "isCorrect": true },
        { text: "Temsirolimus" },
        { text: "Ridaforolimus" },
        { text: "Sirolimus" },
        { text: "Palbociclib" }
      ],
      Explanation: "Everolimus inhibits mTOR and is used in advanced renal cell carcinoma."
    },
    {
      question: "A 30-year-old female with severe hepatic impairment requires an immunosuppressant. Which drug is contraindicated due to its hepatotoxicity?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in severe hepatic impairment due to its potential hepatotoxicity."
    },
    {
      question: "A 50-year-old male with a history of congestive heart failure needs an immunosuppressant post-organ transplant. Which medication should be avoided due to its adverse effects on cardiac function?",
      answers: [
        { text: "Cyclosporine", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine should be avoided due to its potential adverse effects on cardiac function."
    },
    {
      question: "A 40-year-old female with a history of active tuberculosis requires an immunosuppressant for autoimmune hepatitis. Which drug is contraindicated due to its risk of reactivating tuberculosis?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab is contraindicated in active tuberculosis due to the risk of reactivation."
    },
    {
      question: "A 60-year-old male with a history of seizures due to brain metastases needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to lower seizure threshold?",
      answers: [
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate", "isCorrect": true },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Mycophenolate may lower the seizure threshold and should be avoided in patients with a history of seizures."
    },
    {
      question: "A 35-year-old male with a history of recurrent infections requires an immunosuppressant for ulcerative colitis. Which medication should be avoided due to its increased risk of infections?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab increases the risk of infections and should be avoided in patients prone to recurrent infections."
    },
    {
      question: "A 55-year-old female with severe renal impairment needs an immunosuppressant for lupus nephritis. Which drug is contraindicated due to its risk of nephrotoxicity?",
      answers: [
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus", "isCorrect": true },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Sirolimus should be avoided due to its potential nephrotoxic effects in severe renal impairment."
    },
    {
      question: "A 45-year-old male with a history of severe cytopenias requires an immunosuppressant for psoriasis. Which medication should be avoided due to its potential to exacerbate cytopenias?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Methotrexate should be avoided due to its potential to exacerbate cytopenias in certain patients."
    },
    {
      question: "A 60-year-old female with a history of demyelinating disorders needs an immunosuppressant for rheumatoid arthritis. Which drug is contraindicated due to its risk of exacerbating demyelination?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in patients with a history of demyelinating disorders due to the risk of exacerbation."
    },
    {
      question: "A 50-year-old male with a history of malignancies needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to increase the risk of malignancies?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate", "isCorrect": true },
        { text: "Sirolimus" }
      ],
      Explanation: "Mycophenolate should be avoided due to its potential association with an increased risk of malignancies."
    },
    {
      question: "A 40-year-old female with a history of systemic fungal infections requires an immunosuppressant for vasculitis. Which medication is contraindicated due to its risk of exacerbating fungal infections?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in systemic fungal infections due to the risk of exacerbation."
    },
    {
      question: "A 35-year-old male with a history of gastrointestinal bleeding needs an immunosuppressant for Crohn's disease. Which medication should be avoided due to its potential to exacerbate bleeding?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided due to its potential to exacerbate gastrointestinal bleeding."
    },
    {
      question: "A 55-year-old female with a history of severe infections needs an immunosuppressant for lupus nephritis. Which drug should be avoided due to its increased risk of severe infections?",
      answers: [
        { text: "Cyclophosphamide", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclophosphamide increases the risk of severe infections and should be avoided in patients prone to infections."
    },
    {
      question: "A 45-year-old male with a history of psychiatric disorders needs an immunosuppressant for rheumatoid arthritis. Which medication is contraindicated due to its potential to exacerbate psychiatric symptoms?",
      answers: [
        { text: "Corticosteroids" },
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Azathioprine" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in patients with psychiatric disorders due to potential exacerbation of symptoms."
    },
    {
      question: "A 60-year-old female with a history of chronic viral infections needs an immunosuppressant for glomerulonephritis. Which drug should be avoided due to its risk of viral reactivation?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab should be avoided due to its potential risk of viral reactivation in patients with chronic viral infections."
    },
    {
      question: "A 40-year-old male with a history of hematologic disorders needs an immunosuppressant for polymyositis. Which medication is contraindicated due to its potential to exacerbate hematologic abnormalities?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate may exacerbate hematologic disorders and should be avoided in patients with such conditions."
    },
    {
      question: "A 50-year-old female with a history of recurrent infections needs an immunosuppressant for systemic sclerosis. Which drug should be avoided due to its increased risk of infections?",
      answers: [
        { text: "Cyclophosphamide", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclophosphamide increases the risk of infections and should be avoided in patients prone to recurrent infections."
    },
    {
      question: "A 35-year-old male with a history of drug allergies needs an immunosuppressant for Behçet's disease. Which medication is contraindicated due to its potential to induce severe allergic reactions?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab may induce severe allergic reactions and should be avoided in patients with drug allergies."
    },
    {
      question: "A 45-year-old female with a history of recurrent pancreatitis needs an immunosuppressant for lupus nephritis. Which drug should be avoided due to its potential to exacerbate pancreatitis?",
      answers: [
        { text: "Mycophenolate" },
        { text: "Azathioprine" },
        { text: "Cyclophosphamide" },
        { text: "Tacrolimus" },
        { text: "Sirolimus", "isCorrect": true }
      ],
      Explanation: "Sirolimus should be avoided due to its potential to exacerbate pancreatitis in susceptible individuals."
    },
    {
      question: "A 60-year-old male with a history of prior malignancies needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to increase the risk of recurrence?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate", "isCorrect": true },
        { text: "Sirolimus" }
      ],
      Explanation: "Sirolimus should be avoided due to its potential association with an increased risk of recurrent malignancies."
    },
    {
      question: "A 40-year-old female with a history of uncontrolled diabetes needs an immunosuppressant for ulcerative colitis. Which medication is contraindicated due to its potential to exacerbate diabetes?",
      answers: [
        { text: "Corticosteroids" },
        { text: "Methotrexate" },
        { text: "Cyclosporine", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Cyclosporine may exacerbate diabetes and should be avoided in patients with uncontrolled diabetes."
    },
    {
      question: "Which immunosuppressant is contraindicated in pregnancy due to teratogenic effects?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in pregnancy due to its teratogenic effects."
    },
    {
      question: "In patients with a history of active tuberculosis, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with active tuberculosis."
    },
    {
      question: "Which immunosuppressant is contraindicated in severe hepatic impairment?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in severe hepatic impairment."
    },
    {
      question: "In patients with severe renal impairment, which mTOR inhibitor should be avoided?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Everolimus" },
        { text: "Temsirolimus" },
        { text: "Ridaforolimus" },
        { text: "Palbociclib" }
      ],
      Explanation: "Sirolimus should be avoided in severe renal impairment."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with active fungal infections?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in patients with active fungal infections."
    },
    {
      question: "In individuals with a history of demyelinating disorders, which monoclonal antibody should be avoided?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab should be avoided in individuals with a history of demyelinating disorders."
    },
    {
      question: "Which immunosuppressant should be avoided in patients with a history of hematologic disorders?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate should be avoided in patients with a history of hematologic disorders."
    },
    {
      question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
      answers: [
        { text: "Cyclosporine", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine should be avoided in patients with a history of congestive heart failure."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with a history of recurrent pancreatitis."
    },
    {
      question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate should be avoided in patients with severe cytopenias."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of psychiatric disorders?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate is contraindicated in patients with a history of psychiatric disorders."
    },
    {
      question: "In individuals with a history of gastrointestinal bleeding, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided in individuals with a history of gastrointestinal bleeding."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
      answers: [
        { text: "Cyclosporine", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine is contraindicated in patients with uncontrolled diabetes."
    },
    {
      question: "In patients with a history of drug allergies, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with a history of drug allergies."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with chronic viral infections?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in patients with chronic viral infections."
    },
    {
      question: "In individuals with a history of malignancies, which immunosuppressant should be avoided due to its potential to increase the risk of recurrence?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus should be avoided in individuals with a history of malignancies due to its potential to increase the risk of recurrence."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of severe infections?",
      answers: [
        { text: "Cyclophosphamide", "isCorrect": true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclophosphamide is contraindicated in patients with a history of severe infections."
    },
    {
      question: "In patients with active tuberculosis, which immunosuppressant should be avoided?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with active tuberculosis."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with severe renal impairment?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with severe renal impairment."
    },
    {
      question: "In individuals with a history of demyelinating disorders, which immunosuppressant should be avoided?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab should be avoided in individuals with a history of demyelinating disorders."
    },
    {
      question: "In patients with severe hepatic impairment, which immunosuppressant should be avoided due to its hepatotoxic potential?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in severe hepatic impairment due to its hepatotoxic potential."
    },
    {
      question: "Which TNF-α inhibitor is contraindicated in patients with a history of active tuberculosis?",
      answers: [
        { text: "Infliximab", "isCorrect": true },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with a history of active tuberculosis."
    },
    {
      question: "In individuals with severe renal impairment, which mTOR inhibitor should be avoided?",
      answers: [
        { text: "Sirolimus", "isCorrect": true },
        { text: "Everolimus" },
        { text: "Temsirolimus" },
        { text: "Ridaforolimus" },
        { text: "Palbociclib" }
      ],
      Explanation: "Sirolimus should be avoided in severe renal impairment."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with active fungal infections?",
      answers: [
        { text: "Rituximab", "isCorrect": true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in patients with active fungal infections."
    },
    {
      question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
      answers: [
        { text: "Cyclosporine", isCorrect: true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine should be avoided in patients with a history of congestive heart failure."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
      answers: [
        { text: "Sirolimus", isCorrect: true },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with a history of recurrent pancreatitis."
    },
    {
      question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
      answers: [
        { text: "Methotrexate", isCorrect: true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate should be avoided in patients with severe cytopenias."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
      answers: [
        { text: "Cyclosporine", isCorrect: true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine is contraindicated in patients with uncontrolled diabetes."
    },
    {
      question: "In individuals with a history of drug allergies, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab", isCorrect: true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided in individuals with a history of drug allergies."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with chronic viral infections?",
      answers: [
        { text: "Rituximab", isCorrect: true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab is contraindicated in patients with chronic viral infections."
    },
    {
      question: "In individuals with a history of malignancies, which immunosuppressant should be avoided due to its potential to increase the risk of recurrence?",
      answers: [
        { text: "Sirolimus", isCorrect: true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus should be avoided in individuals with a history of malignancies due to its potential to increase the risk of recurrence."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of severe infections?",
      answers: [
        { text: "Cyclophosphamide", isCorrect: true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclophosphamide is contraindicated in patients with a history of severe infections."
    },
    {
      question: "In patients with active tuberculosis, which immunosuppressant should be avoided?",
      answers: [
        { text: "Infliximab", isCorrect: true },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with active tuberculosis."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with severe renal impairment?",
      answers: [
        { text: "Sirolimus", isCorrect: true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with severe renal impairment."
    },
    {
      question: "In individuals with a history of demyelinating disorders, which immunosuppressant should be avoided?",
      answers: [
        { text: "Rituximab", isCorrect: true },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" }
      ],
      Explanation: "Rituximab should be avoided in individuals with a history of demyelinating disorders."
    },
    {
      question: "In patients with severe hepatic impairment, which immunosuppressant should be avoided due to its hepatotoxic potential?",
      answers: [
        { text: "Methotrexate", isCorrect: true },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate" }
      ],
      Explanation: "Methotrexate is contraindicated in severe hepatic impairment due to its hepatotoxic potential."
    },
    {
      question: "Which TNF-α inhibitor is contraindicated in patients with a history of active tuberculosis?",
      answers: [
        { text: "Infliximab", isCorrect: true },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab" },
        { text: "Certolizumab" }
      ],
      Explanation: "Infliximab should be avoided in patients with a history of active tuberculosis."
    },
    {
      question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
      answers: [
        { text: "Cyclosporine", isCorrect: true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine should be avoided in patients with a history of congestive heart failure."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
      answers: [
        { text: "Sirolimus", isCorrect: true },
        { text: "Cyclosporine" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" },
        { text: "Methotrexate" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with a history of recurrent pancreatitis."
    },
    {
      question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
      answers: [
        { text: "Methotrexate", isCorrect: true },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Azathioprine" }
      ],
      Explanation: "Methotrexate should be avoided in patients with severe cytopenias."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
      answers: [
        { text: "Cyclosporine", isCorrect: true },
        { text: "Tacrolimus" },
        { text: "Sirolimus" },
        { text: "Mycophenolate" },
        { text: "Azathioprine" }
      ],
      Explanation: "Cyclosporine is contraindicated in patients with uncontrolled diabetes."
    },
    {
      question: "In patients with a history of severe allergic reactions, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab", isCorrect: true },
        { text: "Certolizumab" }
      ],
      Explanation: "Golimumab should be avoided in patients with a history of severe allergic reactions."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a history of significant bone marrow suppression?",
      answers: [
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Sirolimus", isCorrect: true },
        { text: "Azathioprine" }
      ],
      Explanation: "Sirolimus is contraindicated in patients with a history of significant bone marrow suppression."
    },
    {
      question: "In individuals with a history of severe gastrointestinal bleeding, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab", isCorrect: true },
        { text: "Vedolizumab" }
      ],
      Explanation: "Golimumab should be avoided in individuals with a history of severe gastrointestinal bleeding."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known resistance to the medication?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus", isCorrect: true },
        { text: "Mycophenolate" }
      ],
      Explanation: "Tacrolimus is contraindicated in patients with known resistance to the medication."
    },
    {
      question: "In patients with a history of recurrent severe infections, which mTOR inhibitor should be avoided?",
      answers: [
        { text: "Sirolimus" },
        { text: "Everolimus" },
        { text: "Temsirolimus" },
        { text: "Ridaforolimus", isCorrect: true },
        { text: "Palbociclib" }
      ],
      Explanation: "Ridaforolimus should be avoided in patients with a history of recurrent severe infections."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug formulation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus", isCorrect: true },
        { text: "Mycophenolate" }
      ],
      Explanation: "Tacrolimus is contraindicated in patients with known intolerance to the drug formulation."
    },
    {
      question: "In individuals with a history of neurological adverse reactions, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab", isCorrect: true },
        { text: "Vedolizumab" }
      ],
      Explanation: "Golimumab should be avoided in individuals with a history of neurological adverse reactions."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known hypersensitivity to polyethylene glycol?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus", isCorrect: true },
        { text: "Mycophenolate" }
      ],
      Explanation: "Tacrolimus is contraindicated in patients with known hypersensitivity to polyethylene glycol."
    },
    {
      question: "In patients with a history of severe hepatotoxicity, which monoclonal antibody should be avoided?",
      answers: [
        { text: "Rituximab" },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab", isCorrect: true },
        { text: "Golimumab" }
      ],
      Explanation: "Certolizumab should be avoided in patients with a history of severe hepatotoxicity."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with a known allergy to excipients within the drug formulation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus", isCorrect: true },
        { text: "Mycophenolate" }
      ],
      Explanation: "Tacrolimus is contraindicated in patients with a known allergy to excipients within the drug formulations."
    },
    {
      question: "In patients with a history of severe renal impairment, which immunosuppressant should be avoided due to its nephrotoxic potential?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate", isCorrect: true }
      ],
      Explanation: "Mycophenolate should be avoided in patients with a history of severe renal impairment due to its nephrotoxic potential."
    },
    {
      question: "Which TNF-α inhibitor is contraindicated in patients with known hypersensitivity to murine proteins?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Etanercept" },
        { text: "Golimumab" },
        { text: "Certolizumab", isCorrect: true }
      ],
      Explanation: "Certolizumab should be avoided in patients with known hypersensitivity to murine proteins."
    },
    {
      question: "In individuals with a history of severe hematologic abnormalities, which monoclonal antibody should be avoided?",
      answers: [
        { text: "Rituximab" },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab", isCorrect: true }
      ],
      Explanation: "Golimumab should be avoided in individuals with a history of severe hematologic abnormalities."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's inactive ingredients?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate", isCorrect: true }
      ],
      Explanation: "Mycophenolate is contraindicated in patients with known intolerance to the drug's inactive ingredients."
    },
    {
      question: "In patients with a history of recurrent severe infections, which mTOR inhibitor should be avoided?",
      answers: [
        { text: "Sirolimus" },
        { text: "Everolimus" },
        { text: "Temsirolimus" },
        { text: "Ridaforolimus" },
        { text: "Palbociclib", isCorrect: true }
      ],
      Explanation: "Palbociclib should be avoided in patients with a history of recurrent severe infections."
    },
    {
      question: "Which TNF-α inhibitor is contraindicated in patients with a known allergy to latex?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab", isCorrect: true }
      ],
      Explanation: "Vedolizumab should be avoided in patients with a known allergy to latex."
    },
    {
      question: "In individuals with a history of severe gastrointestinal disorders, which monoclonal antibody should be avoided?",
      answers: [
        { text: "Rituximab" },
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab", isCorrect: true }
      ],
      Explanation: "Golimumab should be avoided in individuals with a history of severe gastrointestinal disorders."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's preservatives?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate", isCorrect: true }
      ],
      Explanation: "Mycophenolate is contraindicated in patients with known intolerance to the drug's preservatives."
    },
    {
      question: "In patients with a history of severe respiratory adverse effects, which TNF-α inhibitor should be avoided?",
      answers: [
        { text: "Infliximab" },
        { text: "Adalimumab" },
        { text: "Certolizumab" },
        { text: "Golimumab" },
        { text: "Vedolizumab", isCorrect: true }
      ],
      Explanation: "Vedolizumab should be avoided in patients with a history of severe respiratory adverse effects."
    },
    {
      question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's coating material?",
      answers: [
        { text: "Azathioprine" },
        { text: "Methotrexate" },
        { text: "Cyclosporine" },
        { text: "Tacrolimus" },
        { text: "Mycophenolate", isCorrect: true }
      ],
      Explanation: "Mycophenolate is contraindicated in patients with known intolerance to the drug's coating material."
    },
    {
      question: "A patient has come into your pharmacy complaining of a toothache and wishes to purchase a painkiller from the pharmacy that can give him pain relief until he visits his dentist. He suffers from rheumatoid arthritis and takes methotrexate tablets. He has no other known drug allergies. Which one of the following options would NOT be suitable for this patient?",
      answers: [
        { text: "Panadol (paracetamol)" },
        { text: "Nurofen express (ibuprofen)", isCorrect: true },
        { text: "Co-codamol 8mg/500mg tablets" },
        { text: "Oil of cloves" },
        { text: "Orajel (benzocaine)" }
      ],
      Explanation: "Ibuprofen can increase the risk of toxicity when given with Methotrexate (particularly high-dose). Both the Methotrexate and Ibuprofen can increase the risk of nephrotoxicity."
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

export default MDIQuestion;
