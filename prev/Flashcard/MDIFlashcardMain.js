
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const MDIFlashcardMain = () => {

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
        question: "Which immunosuppressant inhibits calcineurin?",
        answer: "Tacrolimus",
        options: [
          "Cyclophosphamide",
          "Azathioprine",
          "Methotrexate",
          "Tacrolimus",
          "Sirolimus"
        ]
      },
      {
        id: 2,
        question: "What is the mechanism of action of Rituximab?",
        answer: "Binds to CD20",
        options: [
          "Binds to CD20",
          "Inhibits mTOR",
          "Blocks TNF-α",
          "Inhibits DHFR",
          "Binds to HER2"
        ]
      },
      {
        id: 3,
        question: "Which drug is a monoclonal antibody against EGFR?",
        answer: "Cetuximab",
        options: [
          "Trastuzumab",
          "Cetuximab",
          "Bevacizumab",
          "Rituximab",
          "Pembrolizumab"
        ]
      },
      {
        id: 4,
        question: "Which drug inhibits microtubule formation?",
        answer: "Vinblastine",
        options: [
          "Vinblastine",
          "Imatinib",
          "Cisplatin",
          "Bleomycin",
          "Etoposide"
        ]
      },
      {
        id: 5,
        question: "Which drug is a proteasome inhibitor?",
        answer: "Bortezomib",
        options: [
          "Bortezomib",
          "Methotrexate",
          "Lenalidomide",
          "Cyclophosphamide",
          "Fluorouracil"
        ]
      },
      {
        id: 6,
        question: "What is the primary mechanism of action of Interferon-α?",
        answer: "Antineoplastic",
        options: [
          "Antiviral",
          "Anti-inflammatory",
          "Antineoplastic",
          "Immunosuppressive",
          "Pro-apoptotic"
        ]
      },
      {
        id: 7,
        question: "Which drug inhibits tyrosine kinase activity?",
        answer: "Imatinib",
        options: [
          "Imatinib",
          "5-Fluorouracil",
          "Bleomycin",
          "Doxorubicin",
          "Etoposide"
        ]
      },
      {
        id: 8,
        question: "What is the primary action of Alemtuzumab?",
        answer: "Binds to CD52",
        options: [
          "Binds to CD52",
          "Blocks TNF-α",
          "Inhibits mTOR",
          "Binds to HER2",
          "Inhibits DHFR"
        ]
      },
      {
        id: 9,
        question: "Which drug is an anti-CD20 monoclonal antibody?",
        answer: "Rituximab",
        options: [
          "Obinutuzumab",
          "Cetuximab",
          "Trastuzumab",
          "Rituximab",
          "Bevacizumab"
        ]
      },
      {
        id: 10,
        question: "Which drug inhibits dihydrofolate reductase?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Bleomycin",
          "Vinblastine",
          "Etoposide",
          "Imatinib"
        ]
      },
      {
        id: 11,
        question: "What is the mechanism of action of Bevacizumab?",
        answer: "Anti-angiogenic",
        options: [
          "Anti-angiogenic",
          "Blocks TNF-α",
          "Binds to HER2",
          "Inhibits mTOR",
          "Binds to CD20"
        ]
      },
      {
        id: 12,
        question: "Which drug is a topoisomerase inhibitor?",
        answer: "Etoposide",
        options: [
          "Etoposide",
          "Lenalidomide",
          "Methotrexate",
          "Cyclophosphamide",
          "Bortezomib"
        ]
      },
      {
        id: 13,
        question: "What is the primary mechanism of action of Trastuzumab?",
        answer: "Binds to HER2",
        options: [
          "Binds to HER2",
          "Inhibits mTOR",
          "Blocks TNF-α",
          "Binds to CD20",
          "Inhibits DHFR"
        ]
      },
      {
        id: 14,
        question: "Which drug is an antimetabolite?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Bleomycin",
          "Vinblastine",
          "Etoposide",
          "Imatinib"
        ]
      },
      {
        id: 15,
        question: "What is the primary mechanism of action of Pembrolizumab?",
        answer: "PD-1 inhibitor",
        options: [
          "PD-1 inhibitor",
          "Binds to CD20",
          "Inhibits mTOR",
          "Blocks TNF-α",
          "Inhibits DHFR"
        ]
      },
      {
        id: 16,
        question: "Which drug inhibits ribonucleotide reductase?",
        answer: "Hydroxyurea",
        options: [
          "Hydroxyurea",
          "Rituximab",
          "Bevacizumab",
          "Alemtuzumab",
          "Trastuzumab"
        ]
      },
      {
        id: 17,
        question: "What is the mechanism of action of Lenalidomide?",
        answer: "Immunomodulatory",
        options: [
          "Immunomodulatory",
          "Binds to CD20",
          "Blocks TNF-α",
          "Inhibits mTOR",
          "Inhibits DHFR"
        ]
      },
      {
        id: 18,
        question: "Which drug is a DNA alkylating agent?",
        answer: "Cyclophosphamide",
        options: [
          "Cyclophosphamide",
          "Rituximab",
          "Trastuzumab",
          "Bevacizumab",
          "Alemtuzumab"
        ]
      },
      {
        id: 19,
        question: "What is the primary action of Dasatinib?",
        answer: "Tyrosine kinase inhibitor",
        options: [
          "Tyrosine kinase inhibitor",
          "Blocks TNF-α",
          "Binds to HER2",
          "Inhibits mTOR",
          "Binds to CD20"
        ]
      },
      {
        id: 20,
        question: "Which drug is a BRAF inhibitor?",
        answer: "Vemurafenib",
        options: [
          "Vemurafenib",
          "Methotrexate",
          "Etoposide",
          "Bevacizumab",
          "Imatinib"
        ]
      },
      {
        id: 21,
        question: "A 45-year-old female presents with rheumatoid arthritis unresponsive to methotrexate. Which drug with TNF-α inhibitory properties is most suitable?",
        answer: "Adalimumab",
        options: [
          "Infliximab",
          "Rituximab",
          "Adalimumab",
          "Bevacizumab",
          "Pembrolizumab"
        ]
      },
      {
        id: 22,
        question: "A 65-year-old male is diagnosed with chronic lymphocytic leukemia. Which drug, targeting CD52, is recommended as a first-line treatment?",
        answer: "Alemtuzumab",
        options: [
          "Alemtuzumab",
          "Rituximab",
          "Pembrolizumab",
          "Bevacizumab",
          "Infliximab"
        ]
      },
      {
        id: 23,
        question: "A 50-year-old woman with HER2-positive breast cancer requires adjuvant therapy post-surgery. Which medication is specifically indicated in this case?",
        answer: "Trastuzumab",
        options: [
          "Trastuzumab",
          "Cetuximab",
          "Bevacizumab",
          "Pembrolizumab",
          "Infliximab"
        ]
      },
      {
        id: 24,
        question: "A 30-year-old man with multiple myeloma experiences neuropathy due to chemotherapy. Which proteasome inhibitor should be avoided to minimize this side effect?",
        answer: "Bortezomib",
        options: [
          "Bortezomib",
          "Carfilzomib",
          "Ixazomib",
          "Panobinostat",
          "Daratumumab"
        ]
      },
      {
        id: 25,
        question: "A 60-year-old woman presents with psoriasis unresponsive to conventional therapies. Which IL-17 inhibitor is most suitable for her condition?",
        answer: "Secukinumab",
        options: [
          "Secukinumab",
          "Ustekinumab",
          "Golimumab",
          "Tocilizumab",
          "Vedolizumab"
        ]
      },
      {
        id: 26,
        question: "A 55-year-old male diagnosed with non-Hodgkin's lymphoma is prescribed a monoclonal antibody that binds to CD20. Which drug matches this description?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Cetuximab",
          "Trastuzumab",
          "Bevacizumab",
          "Infliximab"
        ]
      },
      {
        id: 27,
        question: "A 70-year-old patient with chronic myeloid leukemia requires a drug inhibiting BCR-ABL tyrosine kinase. Which medication is the standard of care in this scenario?",
        answer: "Imatinib",
        options: [
          "Imatinib",
          "Dasatinib",
          "Nilotinib",
          "Bosutinib",
          "Ponatinib"
        ]
      },
      {
        id: 28,
        question: "A 40-year-old male with ulcerative colitis needs a TNF-α inhibitor. Which drug should be avoided due to its potential for worsening colitis?",
        answer: "Infliximab",
        options: [
          "Etanercept",
          "Infliximab",
          "Adalimumab",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 29,
        question: "A 25-year-old female with systemic lupus erythematosus is prescribed an immunosuppressant targeting mTOR. Which drug should be chosen?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Azathioprine",
          "Cyclophosphamide",
          "Methotrexate",
          "Tacrolimus"
        ]
      },
      {
        id: 30,
        question: "A 50-year-old male with advanced melanoma and BRAF mutation needs a targeted therapy. Which drug specifically targets mutated BRAF proteins?",
        answer: "Vemurafenib",
        options: [
          "Vemurafenib",
          "Ipilimumab",
          "Nivolumab",
          "Pembrolizumab",
          "Atezolizumab"
        ]
      },
      {
        id: 31,
        question: "A 65-year-old female with renal cell carcinoma requires an anti-VEGF agent. Which medication primarily inhibits vascular endothelial growth factor?",
        answer: "Bevacizumab",
        options: [
          "Bevacizumab",
          "Ramucirumab",
          "Sorafenib",
          "Axitinib",
          "Cabozantinib"
        ]
      },
      {
        id: 32,
        question: "A 55-year-old male with ankylosing spondylitis requires a TNF-α inhibitor. Which medication should be avoided due to its ineffectiveness in this condition?",
        answer: "Etanercept",
        options: [
          "Etanercept",
          "Infliximab",
          "Adalimumab",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 33,
        question: "A 70-year-old male diagnosed with mantle cell lymphoma needs a drug targeting BTK. Which medication specifically inhibits Bruton's tyrosine kinase?",
        answer: "Ibrutinib",
        options: [
          "Ibrutinib",
          "Idelalisib",
          "Copanlisib",
          "Duvelisib",
          "Tirabrutinib"
        ]
      },
      {
        id: 34,
        question: "A 40-year-old female with Crohn's disease needs an anti-integrin therapy. Which medication primarily targets integrins in this condition?",
        answer: "Vedolizumab",
        options: [
          "Vedolizumab",
          "Natalizumab",
          "Efalizumab",
          "Ustekinumab",
          "Secukinumab"
        ]
      },
      {
        id: 35,
        question: "A 60-year-old male with advanced non-small cell lung cancer requires an immunotherapy targeting PD-1. Which drug should be prescribed in this scenario?",
        answer: "Pembrolizumab",
        options: [
          "Pembrolizumab",
          "Nivolumab",
          "Atezolizumab",
          "Durvalumab",
          "Ipilimumab"
        ]
      },
      {
        id: 36,
        question: "A 45-year-old female with relapsing-remitting multiple sclerosis requires an anti-CD25 monoclonal antibody. Which medication should be chosen?",
        answer: "Daclizumab",
        options: [
          "Daclizumab",
          "Basiliximab",
          "Muromonab",
          "Alemtuzumab",
          "Rituximab"
        ]
      },
      {
        id: 37,
        question: "A 30-year-old male with acute lymphoblastic leukemia requires a drug targeting CD19. Which medication specifically targets CD19-expressing cells?",
        answer: "Blinatumomab",
        options: [
          "Blinatumomab",
          "Gemtuzumab",
          "Ofatumumab",
          "Obinutuzumab",
          "Brentuximab"
        ]
      },
      {
        id: 38,
        question: "A 55-year-old male with rheumatoid arthritis needs an anti-IL-6 receptor antibody. Which medication primarily blocks IL-6 signaling?",
        answer: "Tocilizumab",
        options: [
          "Tocilizumab",
          "Sarilumab",
          "Eculizumab",
          "Anakinra",
          "Canakinumab"
        ]
      },
      {
        id: 39,
        question: "A 65-year-old female with metastatic colorectal cancer needs an EGFR inhibitor. Which medication specifically targets the epidermal growth factor receptor?",
        answer: "Cetuximab",
        options: [
          "Cetuximab",
          "Panitumumab",
          "Trastuzumab",
          "Bevacizumab",
          "Ramucirumab"
        ]
      },
      {
        id: 40,
        question: "A 50-year-old male with advanced renal cell carcinoma needs an mTOR inhibitor. Which medication primarily inhibits the mammalian target of rapamycin?",
        answer: "Everolimus",
        options: [
          "Everolimus",
          "Temsirolimus",
          "Ridaforolimus",
          "Sirolimus",
          "Palbociclib"
        ]
      },
      {
        id: 41,
        question: "A 30-year-old female with severe hepatic impairment requires an immunosuppressant. Which drug is contraindicated due to its hepatotoxicity?",
        answer: "Methotrexate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 42,
        question: "A 50-year-old male with a history of congestive heart failure needs an immunosuppressant post-organ transplant. Which medication should be avoided due to its adverse effects on cardiac function?",
        answer: "Cyclosporine",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 43,
        question: "A 40-year-old female with a history of active tuberculosis requires an immunosuppressant for autoimmune hepatitis. Which drug is contraindicated due to its risk of reactivating tuberculosis?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Etanercept",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 44,
        question: "A 60-year-old male with a history of seizures due to brain metastases needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to lower seizure threshold?",
        answer: "Mycophenolate",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 45,
        question: "A 35-year-old male with a history of recurrent infections requires an immunosuppressant for ulcerative colitis. Which medication should be avoided due to its increased risk of infections?",
        answer: "Infliximab",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Infliximab",
          "Adalimumab",
          "Certolizumab"
        ]
      },
      {
        id: 46,
        question: "A 55-year-old female with severe renal impairment needs an immunosuppressant for lupus nephritis. Which drug is contraindicated due to its risk of nephrotoxicity?",
        answer: "Sirolimus",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 47,
        question: "A 45-year-old male with a history of severe cytopenias requires an immunosuppressant for psoriasis. Which medication should be avoided due to its potential to exacerbate cytopenias?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Infliximab",
          "Adalimumab",
          "Certolizumab"
        ]
      },
      {
        id: 48,
        question: "A 60-year-old female with a history of demyelinating disorders needs an immunosuppressant for rheumatoid arthritis. Which drug is contraindicated due to its risk of exacerbating demyelination?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 49,
        question: "A 50-year-old male with a history of malignancies needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to increase the risk of malignancies?",
        answer: "Mycophenolate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Mycophenolate",
          "Sirolimus"
        ]
      },
      {
        id: 50,
        question: "A 40-year-old female with a history of systemic fungal infections requires an immunosuppressant for vasculitis. Which medication is contraindicated due to its risk of exacerbating fungal infections?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 51,
        question: "A 35-year-old male with a history of gastrointestinal bleeding needs an immunosuppressant for Crohn's disease. Which medication should be avoided due to its potential to exacerbate bleeding?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 52,
        question: "A 55-year-old female with a history of severe infections needs an immunosuppressant for lupus nephritis. Which drug should be avoided due to its increased risk of severe infections?",
        answer: "Cyclophosphamide",
        options: [
          "Cyclophosphamide",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 53,
        question: "A 45-year-old male with a history of psychiatric disorders needs an immunosuppressant for rheumatoid arthritis. Which medication is contraindicated due to its potential to exacerbate psychiatric symptoms?",
        answer: "Methotrexate",
        options: [
          "Corticosteroids",
          "Methotrexate",
          "Cyclosporine",
          "Azathioprine",
          "Mycophenolate"
        ]
      },
      {
        id: 54,
        question: "A 60-year-old female with a history of chronic viral infections needs an immunosuppressant for glomerulonephritis. Which drug should be avoided due to its risk of viral reactivation?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 55,
        question: "A 40-year-old male with a history of hematologic disorders needs an immunosuppressant for polymyositis. Which medication is contraindicated due to its potential to exacerbate hematologic abnormalities?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 56,
        question: "A 50-year-old female with a history of recurrent infections needs an immunosuppressant for systemic sclerosis. Which drug should be avoided due to its increased risk of infections?",
        answer: "Cyclophosphamide",
        options: [
          "Cyclophosphamide",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 57,
        question: "A 35-year-old male with a history of drug allergies needs an immunosuppressant for Behçet's disease. Which medication is contraindicated due to its potential to induce severe allergic reactions?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 58,
        question: "A 45-year-old female with a history of recurrent pancreatitis needs an immunosuppressant for lupus nephritis. Which drug should be avoided due to its potential to exacerbate pancreatitis?",
        answer: "Sirolimus",
        options: [
          "Mycophenolate",
          "Azathioprine",
          "Cyclophosphamide",
          "Tacrolimus",
          "Sirolimus"
        ]
      },
      {
        id: 59,
        question: "A 60-year-old male with a history of prior malignancies needs an immunosuppressant post-kidney transplant. Which drug should be avoided due to its potential to increase the risk of recurrence?",
        answer: "Mycophenolate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Mycophenolate",
          "Sirolimus"
        ]
      },
      {
        id: 60,
        question: "A 40-year-old female with a history of uncontrolled diabetes needs an immunosuppressant for ulcerative colitis. Which medication is contraindicated due to its potential to exacerbate diabetes?",
        answer: "Cyclosporine",
        options: [
          "Corticosteroids",
          "Methotrexate",
          "Cyclosporine",
          "Azathioprine",
          "Mycophenolate"
        ]
      },
      {
        id: 61,
        question: "Which immunosuppressant is contraindicated in pregnancy due to teratogenic effects?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 62,
        question: "In patients with a history of active tuberculosis, which TNF-α inhibitor should be avoided?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Etanercept",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 63,
        question: "Which immunosuppressant is contraindicated in severe hepatic impairment?",
        answer: "Methotrexate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 64,
        question: "In patients with severe renal impairment, which mTOR inhibitor should be avoided?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Everolimus",
          "Temsirolimus",
          "Ridaforolimus",
          "Palbociclib"
        ]
      },
      {
        id: 65,
        question: "Which immunosuppressant is contraindicated in patients with active fungal infections?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 66,
        question: "In individuals with a history of demyelinating disorders, which monoclonal antibody should be avoided?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 67,
        question: "Which immunosuppressant should be avoided in patients with a history of hematologic disorders?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 68,
        question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
        answer: "Cyclosporine",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 69,
        question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Cyclosporine",
          "Mycophenolate",
          "Azathioprine",
          "Methotrexate"
        ]
      },
      {
        id: 70,
        question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 71,
        question: "Which immunosuppressant is contraindicated in patients with a history of psychiatric disorders?",
        answer: "Methotrexate",
        options: [
          "Corticosteroids",
          "Methotrexate",
          "Cyclosporine",
          "Azathioprine",
          "Mycophenolate"
        ]
      },
      {
        id: 72,
        question: "In individuals with a history of gastrointestinal bleeding, which TNF-α inhibitor should be avoided?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 73,
        question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
        answer: "Cyclosporine",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 74,
        question: "In patients with a history of drug allergies, which TNF-α inhibitor should be avoided?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 75,
        question: "Which immunosuppressant is contraindicated in patients with chronic viral infections?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 76,
        question: "In individuals with a history of malignancies, which immunosuppressant should be avoided due to its potential to increase the risk of recurrence?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Azathioprine",
          "Cyclosporine",
          "Mycophenolate",
          "Methotrexate"
        ]
      },
      {
        id: 77,
        question: "Which immunosuppressant is contraindicated in patients with a history of severe infections?",
        answer: "Cyclophosphamide",
        options: [
          "Cyclophosphamide",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 78,
        question: "In patients with active tuberculosis, which immunosuppressant should be avoided?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 79,
        question: "Which immunosuppressant is contraindicated in patients with severe renal impairment?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Azathioprine",
          "Cyclosporine",
          "Mycophenolate",
          "Methotrexate"
        ]
      },
      {
        id: 80,
        question: "In individuals with a history of demyelinating disorders, which immunosuppressant should be avoided?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 81,
        question: "In patients with severe hepatic impairment, which immunosuppressant should be avoided due to its hepatotoxic potential?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 82,
        question: "Which TNF-α inhibitor is contraindicated in patients with a history of active tuberculosis?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Etanercept",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 83,
        question: "In individuals with severe renal impairment, which mTOR inhibitor should be avoided?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Everolimus",
          "Temsirolimus",
          "Ridaforolimus",
          "Palbociclib"
        ]
      },
      {
        id: 84,
        question: "Which immunosuppressant is contraindicated in patients with active fungal infections?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 85,
        question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
        answer: "Cyclosporine",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 86,
        question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
        answer: "Sirolimus",
        options: [
          "Sirolimus",
          "Cyclosporine",
          "Mycophenolate",
          "Azathioprine",
          "Methotrexate"
        ]
      },
      {
        id: 87,
        question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 88,
        question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
        answer: "Cyclosporine",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 89,
        question: "In individuals with a history of drug allergies, which TNF-α inhibitor should be avoided?",
        answer: "Infliximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 90,
        question: "Which immunosuppressant is contraindicated in patients with chronic viral infections?",
        answer: "Rituximab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 91,
        question: "In individuals with a history of malignancies, which immunosuppressant should be avoided due to its potential to increase the risk of recurrence?",
        answer: "Sirolimus",
        options: [
          "Azathioprine",
          "Cyclosporine",
          "Mycophenolate",
          "Methotrexate"
        ]
      },
      {
        id: 92,
        question: "Which immunosuppressant is contraindicated in patients with a history of severe infections?",
        answer: "Cyclophosphamide",
        options: [
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 93,
        question: "In patients with active tuberculosis, which immunosuppressant should be avoided?",
        answer: "Infliximab",
        options: [
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 94,
        question: "Which immunosuppressant is contraindicated in patients with severe renal impairment?",
        answer: "Sirolimus",
        options: [
          "Azathioprine",
          "Cyclosporine",
          "Mycophenolate",
          "Methotrexate"
        ]
      },
      {
        id: 95,
        question: "In individuals with a history of demyelinating disorders, which immunosuppressant should be avoided?",
        answer: "Rituximab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 96,
        question: "In patients with severe hepatic impairment, which immunosuppressant should be avoided due to its hepatotoxic potential?",
        answer: "Methotrexate",
        options: [
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 97,
        question: "Which TNF-α inhibitor is contraindicated in patients with a history of active tuberculosis?",
        answer: "Infliximab",
        options: [
          "Adalimumab",
          "Etanercept",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 98,
        question: "In patients with a history of congestive heart failure, which immunosuppressant should be avoided due to its potential effects on cardiac function?",
        answer: "Cyclosporine",
        options: [
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 99,
        question: "Which immunosuppressant is contraindicated in patients with a history of recurrent pancreatitis?",
        answer: "Sirolimus",
        options: [
          "Cyclosporine",
          "Mycophenolate",
          "Azathioprine",
          "Methotrexate"
        ]
      },
      {
        id: 100,
        question: "In patients with severe cytopenias, which immunosuppressant should be avoided?",
        answer: "Methotrexate",
        options: [
          "Cyclosporine",
          "Tacrolimus",
          "Sirolimus",
          "Azathioprine"
        ]
      },
      {
        id: 101,
        question: "Which immunosuppressant is contraindicated in patients with uncontrolled diabetes?",
        answer: "Cyclosporine",
        options: [
          "Tacrolimus",
          "Sirolimus",
          "Mycophenolate",
          "Azathioprine"
        ]
      },
      {
        id: 102,
        question: "In patients with a history of severe allergic reactions, which TNF-α inhibitor should be avoided?",
        answer: "Golimumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Etanercept",
          "Certolizumab"
        ]
      },
      {
        id: 103,
        question: "Which immunosuppressant is contraindicated in patients with a history of significant bone marrow suppression?",
        answer: "Sirolimus",
        options: [
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Methotrexate"
        ]
      },
      {
        id: 104,
        question: "In individuals with a history of severe gastrointestinal bleeding, which TNF-α inhibitor should be avoided?",
        answer: "Golimumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Vedolizumab"
        ]
      },
      {
        id: 105,
        question: "Which immunosuppressant is contraindicated in patients with known resistance to the medication?",
        answer: "Tacrolimus",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Mycophenolate"
        ]
      },
      {
        id: 106,
        question: "In patients with a history of recurrent severe infections, which mTOR inhibitor should be avoided?",
        answer: "Ridaforolimus",
        options: [
          "Sirolimus",
          "Everolimus",
          "Temsirolimus",
          "Palbociclib"
        ]
      },
      {
        id: 107,
        question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug formulation?",
        answer: "Tacrolimus",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Mycophenolate"
        ]
      },
      {
        id: 108,
        question: "In individuals with a history of neurological adverse reactions, which TNF-α inhibitor should be avoided?",
        answer: "Golimumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Vedolizumab"
        ]
      },
      {
        id: 109,
        question: "Which immunosuppressant is contraindicated in patients with known hypersensitivity to polyethylene glycol?",
        answer: "Tacrolimus",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Mycophenolate"
        ]
      },
      {
        id: 110,
        question: "In patients with a history of severe hepatotoxicity, which monoclonal antibody should be avoided?",
        answer: "Certolizumab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Golimumab"
        ]
      },
      {
        id: 111,
        question: "Which immunosuppressant is contraindicated in patients with a known allergy to excipients within the drug formulation?",
        answer: "Tacrolimus",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 112,
        question: "In patients with a history of severe renal impairment, which immunosuppressant should be avoided due to its nephrotoxic potential?",
        answer: "Mycophenolate",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 113,
        question: "Which TNF-α inhibitor is contraindicated in patients with known hypersensitivity to murine proteins?",
        answer: "Certolizumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Etanercept",
          "Golimumab",
          "Certolizumab"
        ]
      },
      {
        id: 114,
        question: "In individuals with a history of severe hematologic abnormalities, which monoclonal antibody should be avoided?",
        answer: "Golimumab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 115,
        question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's inactive ingredients?",
        answer: "Mycophenolate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 116,
        question: "In patients with a history of recurrent severe infections, which mTOR inhibitor should be avoided?",
        answer: "Palbociclib",
        options: [
          "Sirolimus",
          "Everolimus",
          "Temsirolimus",
          "Ridaforolimus",
          "Palbociclib"
        ]
      },
      {
        id: 117,
        question: "Which TNF-α inhibitor is contraindicated in patients with a known allergy to latex?",
        answer: "Vedolizumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 118,
        question: "In individuals with a history of severe gastrointestinal disorders, which monoclonal antibody should be avoided?",
        answer: "Golimumab",
        options: [
          "Rituximab",
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab"
        ]
      },
      {
        id: 119,
        question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's preservatives?",
        answer: "Mycophenolate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 120,
        question: "In patients with a history of severe respiratory adverse effects, which TNF-α inhibitor should be avoided?",
        answer: "Vedolizumab",
        options: [
          "Infliximab",
          "Adalimumab",
          "Certolizumab",
          "Golimumab",
          "Vedolizumab"
        ]
      },
      {
        id: 121,
        question: "Which immunosuppressant is contraindicated in patients with known intolerance to the drug's coating material?",
        answer: "Mycophenolate",
        options: [
          "Azathioprine",
          "Methotrexate",
          "Cyclosporine",
          "Tacrolimus",
          "Mycophenolate"
        ]
      },
      {
        id: 122,
        question: "A patient has come into your pharmacy complaining of a toothache and wishes to purchase a painkiller from the pharmacy that can give him pain relief until he visits his dentist. He suffers from rheumatoid arthritis and takes methotrexate tablets. He has no other known drug allergies. Which one of the following options would NOT be suitable for this patient?",
        answer: "Nurofen express (ibuprofen)",
        options: [
          "Panadol (paracetamol)",
          "Nurofen express (ibuprofen)",
          "Co-codamol 8mg/500mg tablets",
          "Oil of cloves",
          "Orajel (benzocaine)"
        ]
      }
]

export default MDIFlashcardMain;
