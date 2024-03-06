import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const SkinQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
      question: "Which systemic antifungal medication, used for severe dermatophyte infections, functions by inhibiting fungal ergosterol synthesis via inhibition of squalene epoxidase?",
      answers: [
        { text: "Terbinafine", "isCorrect": true },
        { text: "Fluconazole" },
        { text: "Ketoconazole" },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Terbinafine inhibits squalene epoxidase, disrupting fungal ergosterol synthesis in severe dermatophyte infections."
    },
    {
      question: "Among the listed medications used for psoriasis, which one is a biologic agent that targets interleukin-17A, reducing inflammation and plaque formation in psoriatic skin lesions?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Secukinumab", "isCorrect": true }
      ],
      Explanation: "Secukinumab targets IL-17A, reducing inflammation and plaque formation in psoriatic skin lesions as a biologic agent."
    },
    {
      question: "Which topical corticosteroid, classified as a potent corticosteroid, is often avoided in the treatment of facial dermatoses due to the risk of atrophy and telangiectasia in thin skin areas?",
      answers: [
        { text: "Hydrocortisone" },
        { text: "Mometasone" },
        { text: "Clobetasol", "isCorrect": true },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Clobetasol, a potent corticosteroid, carries a higher risk of atrophy and telangiectasia in thin facial skin areas."
    },
    {
      question: "Among the listed topical antiviral medications, which one is a nucleoside analogue that inhibits viral DNA polymerase and is used in the treatment of herpes simplex infections?",
      answers: [
        { text: "Acyclovir", "isCorrect": true },
        { text: "Penciclovir" },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Acyclovir inhibits viral DNA polymerase, acting against herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Which systemic medication used for severe nodular cystic acne carries a significant risk of teratogenicity and requires strict contraceptive measures in female patients due to its potential to cause severe birth defects?",
      answers: [
        { text: "Isotretinoin", "isCorrect": true },
        { text: "Doxycycline" },
        { text: "Azelaic acid" },
        { text: "Clindamycin" },
        { text: "Spironolactone" }
      ],
      Explanation: "Isotretinoin poses a significant risk of teratogenicity, necessitating strict contraceptive measures due to its potential to cause severe birth defects in pregnancy."
    },
    {
      question: "Among the listed topical antifungal medications, which one is a polyene antifungal agent used to treat candidiasis and dermatophyte infections by binding to ergosterol, disrupting fungal cell membranes?",
      answers: [
        { text: "Miconazole" },
        { text: "Clotrimazole" },
        { text: "Nystatin", "isCorrect": true },
        { text: "Amorolfine" },
        { text: "Natamycin" }
      ],
      Explanation: "Nystatin binds to ergosterol, disrupting fungal cell membranes in candidiasis and dermatophyte infections as a polyene antifungal agent."
    },
    {
      question: "Which systemic immunosuppressant, used for severe eczema, functions by inhibiting calcineurin and suppressing T-cell activation, thereby reducing inflammation in the skin?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Mycophenolate" },
        { text: "Ciclosporin" },
        { text: "Tacrolimus", "isCorrect": true }
      ],
      Explanation: "Tacrolimus inhibits calcineurin, suppressing T-cell activation and reducing skin inflammation in severe eczema as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a lincosamide antibiotic often combined with benzoyl peroxide in the treatment of acne vulgaris, targeting Propionibacterium acnes?",
      answers: [
        { text: "Clindamycin", "isCorrect": true },
        { text: "Mupirocin" },
        { text: "Fusidic acid" },
        { text: "Neomycin" },
        { text: "Erythromycin" }
      ],
      Explanation: "Clindamycin, a lincosamide antibiotic, is combined with benzoyl peroxide for acne vulgaris, targeting Propionibacterium acnes."
    },
    {
      question: "Which topical calcineurin inhibitor, used in the treatment of atopic dermatitis, is indicated for short-term and intermittent long-term treatment due to concerns about potential malignancy risk?",
      answers: [
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Pimecrolimus" },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Tacrolimus is indicated for short-term and intermittent long-term treatment in atopic dermatitis due to potential malignancy risk associated with topical calcineurin inhibitors."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets the p40 subunit shared by interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab", "isCorrect": true },
        { text: "Ciclosporin" },
        { text: "Secukinumab" }
      ],
      Explanation: "Ustekinumab targets the p40 subunit shared by IL-12 and IL-23, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which topical antifungal medication, used in the treatment of dermatophyte infections, functions by inhibiting the biosynthesis of ergosterol, disrupting fungal cell membranes?",
      answers: [
        { text: "Terbinafine", "isCorrect": true },
        { text: "Fluconazole" },
        { text: "Ketoconazole" },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Terbinafine inhibits ergosterol biosynthesis, disrupting fungal cell membranes in dermatophyte infections."
    },
    {
      question: "Among the listed topical corticosteroids, which one is classified as a moderate-strength corticosteroid and is commonly used in the treatment of inflammatory skin conditions, particularly eczema?",
      answers: [
        { text: "Hydrocortisone" },
        { text: "Mometasone", "isCorrect": true },
        { text: "Clobetasone" },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Mometasone is a moderate-strength corticosteroid used for inflammatory skin conditions, especially eczema."
    },
    {
      question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase?",
      answers: [
        { text: "Acyclovir", "isCorrect": true },
        { text: "Penciclovir" },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Acyclovir inhibits viral DNA polymerase in the treatment of herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Among the listed systemic antibiotics used in skin infections, which one is a tetracycline antibiotic that functions by inhibiting bacterial protein synthesis and is commonly used in acne vulgaris treatment?",
      answers: [
        { text: "Erythromycin" },
        { text: "Doxycycline", "isCorrect": true },
        { text: "Clindamycin" },
        { text: "Mupirocin" },
        { text: "Azithromycin" }
      ],
      Explanation: "Doxycycline inhibits bacterial protein synthesis, commonly used in acne vulgaris treatment as a tetracycline antibiotic."
    },
    {
      question: "Which systemic immunosuppressant, used in severe psoriasis, acts by inhibiting dihydrofolate reductase, leading to decreased DNA synthesis and cell proliferation?",
      answers: [
        { text: "Methotrexate", "isCorrect": true },
        { text: "Azathioprine" },
        { text: "Mycophenolate" },
        { text: "Ciclosporin" },
        { text: "Fumaric acid esters" }
      ],
      Explanation: "Methotrexate inhibits dihydrofolate reductase, decreasing DNA synthesis and cell proliferation in severe psoriasis as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a topical antibiotic derived from fusidic acid and is effective against Staphylococcus aureus?",
      answers: [
        { text: "Clindamycin" },
        { text: "Mupirocin" },
        { text: "Fusidic acid", "isCorrect": true },
        { text: "Neomycin" },
        { text: "Erythromycin" }
      ],
      Explanation: "Fusidic acid, a derivative, is effective against Staphylococcus aureus in skin infections as a topical antibiotic."
    },
    {
      question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, carries a black box warning due to its potential association with lymphoma and skin cancer risks?",
      answers: [
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Pimecrolimus" },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Tacrolimus carries a black box warning due to potential lymphoma and skin cancer risks in atopic dermatitis management as a topical calcineurin inhibitor."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Guselkumab", "isCorrect": true }
      ],
      Explanation: "Guselkumab targets IL-23, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
      answers: [
        { text: "Terbinafine" },
        { text: "Fluconazole" },
        { text: "Caspofungin", "isCorrect": true },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Caspofungin inhibits beta (1,3)-D-glucan synthase, disrupting fungal cell wall synthesis in systemic Candida infections."
    },
    {
      question: "Among the listed medications used for psoriasis, which one is a biologic agent that targets T-cell activation by binding to CD2, thereby reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Alefacept", "isCorrect": true }
      ],
      Explanation: "Alefacept targets T-cell activation by binding to CD2, reducing inflammation and plaque formation in psoriasis as a biologic agent."
    },
    {
      question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available in a cream formulation?",
      answers: [
        { text: "Acyclovir" },
        { text: "Penciclovir", "isCorrect": true },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Penciclovir inhibits viral DNA polymerase and is available in cream formulation for herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Among the listed topical corticosteroids, which one is classified as a potent corticosteroid and is known to be absorbed systemically in high amounts, raising concerns about adverse effects particularly in children?",
      answers: [
        { text: "Hydrocortisone" },
        { text: "Mometasone" },
        { text: "Clobetasol", "isCorrect": true },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Clobetasol, a potent corticosteroid, is absorbed systemically in high amounts, raising concerns about adverse effects, especially in children."
    },
    {
      question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting inosine monophosphate dehydrogenase, thus suppressing T-cell and B-cell proliferation and reducing inflammation in the skin?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Mycophenolate", "isCorrect": true },
        { text: "Ciclosporin" },
        { text: "Sirolimus" }
      ],
      Explanation: "Mycophenolate inhibits inosine monophosphate dehydrogenase, suppressing T-cell and B-cell proliferation in severe eczema as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a bacteriostatic antibiotic often used in the treatment of acne vulgaris, acting by inhibiting bacterial protein synthesis?",
      answers: [
        { text: "Clindamycin" },
        { text: "Mupirocin" },
        { text: "Fusidic acid" },
        { text: "Neomycin" },
        { text: "Erythromycin", "isCorrect": true }
      ],
      Explanation: "Erythromycin, a bacteriostatic antibiotic, inhibits bacterial protein synthesis, commonly used in acne vulgaris treatment."
    },
    {
      question: "Which systemic medication used in severe nodular cystic acne is a retinoid that acts by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
      answers: [
        { text: "Isotretinoin", "isCorrect": true },
        { text: "Doxycycline" },
        { text: "Azelaic acid" },
        { text: "Clindamycin" },
        { text: "Spironolactone" }
      ],
      Explanation: "Isotretinoin, a retinoid, normalizes keratinization and reduces sebum production but carries a significant risk of teratogenicity in severe acne."
    },
    {
      question: "Among the listed topical antifungal medications, which one is an azole antifungal agent used in the treatment of candidiasis and dermatophyte infections by inhibiting fungal cytochrome P450-dependent enzymes?",
      answers: [
        { text: "Miconazole" },
        { text: "Clotrimazole" },
        { text: "Nystatin" },
        { text: "Amorolfine" },
        { text: "Ketoconazole", "isCorrect": true }
      ],
      Explanation: "Ketoconazole inhibits fungal cytochrome P450-dependent enzymes in candidiasis and dermatophyte infections as an azole antifungal agent."
    },
    {
      question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to its potential risk of skin cancer, limiting its use to second-line treatment in patients unresponsive to other therapies?",
      answers: [
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Pimecrolimus" },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Tacrolimus carries a black box warning for potential skin cancer risk, limiting its use to second-line treatment in atopic dermatitis as a topical calcineurin inhibitor."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-17 receptor A, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Brodalumab", "isCorrect": true }
      ],
      Explanation: "Brodalumab targets IL-17 receptor A, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which systemic antifungal medication, used in the treatment of systemic Aspergillus infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
      answers: [
        { text: "Terbinafine" },
        { text: "Fluconazole" },
        { text: "Caspofungin", "isCorrect": true },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Caspofungin inhibits beta (1,3)-D-glucan synthase, disrupting fungal cell wall synthesis in systemic Aspergillus infections."
    },
    {
      question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p19 subunit of interleukin-23, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Risankizumab", "isCorrect": true }
      ],
      Explanation: "Risankizumab targets the p19 subunit of IL-23, reducing inflammation and plaque formation in psoriasis as a biologic agent."
    },
    {
      question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available in an ointment formulation?",
      answers: [
        { text: "Acyclovir", "isCorrect": true },
        { text: "Penciclovir" },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Acyclovir inhibits viral DNA polymerase and is available in ointment formulation for herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is commonly used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
      answers: [
        { text: "Hydrocortisone", "isCorrect": true },
        { text: "Mometasone" },
        { text: "Clobetasone" },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Hydrocortisone, a mild corticosteroid, is commonly used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects."
    },
    {
      question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting mammalian target of rapamycin (mTOR), thereby suppressing T-cell and B-cell proliferation and reducing inflammation in the skin?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Mycophenolate" },
        { text: "Ciclosporin" },
        { text: "Sirolimus", "isCorrect": true }
      ],
      Explanation: "Sirolimus inhibits mTOR, suppressing T-cell and B-cell proliferation in severe eczema as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic often combined with neomycin in the treatment of infected wounds, targeting Gram-positive organisms?",
      answers: [
        { text: "Clindamycin" },
        { text: "Mupirocin" },
        { text: "Fusidic acid", "isCorrect": true },
        { text: "Neomycin" },
        { text: "Erythromycin" }
      ],
      Explanation: "Fusidic acid, often combined with neomycin, targets Gram-positive organisms in infected wounds as a bactericidal antibiotic."
    },
    {
      question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while requiring strict contraceptive measures due to teratogenicity risks?",
      answers: [
        { text: "Isotretinoin", "isCorrect": true },
        { text: "Doxycycline" },
        { text: "Azelaic acid" },
        { text: "Clindamycin" },
        { text: "Spironolactone" }
      ],
      Explanation: "Isotretinoin normalizes keratinization and reduces sebum production but necessitates strict contraceptive measures due to teratogenicity risks in severe acne treatment."
    },
    {
      question: "Among the listed topical antifungal medications, which one is an imidazole antifungal agent used in the treatment of candidiasis and dermatophyte infections by disrupting fungal ergosterol synthesis?",
      answers: [
        { text: "Miconazole" },
        { text: "Clotrimazole", "isCorrect": true },
        { text: "Nystatin" },
        { text: "Amorolfine" },
        { text: "Ketoconazole" }
      ],
      Explanation: "Clotrimazole disrupts fungal ergosterol synthesis in candidiasis and dermatophyte infections as an imidazole antifungal agent."
    },
    {
      question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, has a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
      answers: [
        { text: "Tacrolimus" },
        { text: "Pimecrolimus", "isCorrect": true },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Pimecrolimus has a black box warning for potential lymphoma and skin cancer risks, limiting its use to second-line treatment in atopic dermatitis as a topical calcineurin inhibitor."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Tildrakizumab", "isCorrect": true }
      ],
      Explanation: "Tildrakizumab targets interleukin-23p19, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
      answers: [
        { text: "Terbinafine" },
        { text: "Fluconazole" },
        { text: "Caspofungin", "isCorrect": true },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Caspofungin inhibits beta (1,3)-D-glucan synthase, disrupting fungal cell wall synthesis in systemic Candida infections."
    },
    {
      question: "Among the listed medications used for psoriasis, which one is a biologic agent that targets interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab", "isCorrect": true },
        { text: "Ciclosporin" },
        { text: "Tildrakizumab" }
      ],
      Explanation: "Ustekinumab targets IL-12 and IL-23, reducing inflammation and plaque formation in psoriasis as a biologic agent."
    },
    {
      question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a patch for recurrent cold sores?",
      answers: [
        { text: "Acyclovir" },
        { text: "Penciclovir", "isCorrect": true },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Penciclovir inhibits viral DNA polymerase and is available as a patch for recurrent cold sores in herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Among the listed topical corticosteroids, which one is classified as a potent corticosteroid and is associated with a higher risk of systemic absorption and adverse effects, especially in children and thin-skinned areas?",
      answers: [
        { text: "Hydrocortisone" },
        { text: "Mometasone" },
        { text: "Clobetasol", "isCorrect": true },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Clobetasol, a potent corticosteroid, has a higher risk of systemic absorption and adverse effects, particularly in children and thin-skinned areas."
    },
    {
      question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting Janus kinases (JAK), thereby suppressing cytokine signaling and reducing inflammation in the skin?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Mycophenolate" },
        { text: "Ciclosporin" },
        { text: "Baricitinib", "isCorrect": true }
      ],
      Explanation: "Baricitinib inhibits Janus kinases (JAK), suppressing cytokine signaling and reducing inflammation in severe eczema as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic effective against MRSA and is frequently used in nasal decolonization and skin infections?",
      answers: [
        { text: "Clindamycin" },
        { text: "Mupirocin", "isCorrect": true },
        { text: "Fusidic acid" },
        { text: "Neomycin" },
        { text: "Erythromycin" }
      ],
      Explanation: "Mupirocin is a bactericidal antibiotic effective against MRSA, commonly used in nasal decolonization and skin infections."
    },
    {
      question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
      answers: [
        { text: "Isotretinoin", "isCorrect": true },
        { text: "Doxycycline" },
        { text: "Azelaic acid" },
        { text: "Clindamycin" },
        { text: "Spironolactone" }
      ],
      Explanation: "Isotretinoin, a retinoid, normalizes keratinization and reduces sebum production but has a significant risk of teratogenicity in severe acne."
    },
    {
      question: "Among the listed topical antifungal medications, which one is an allylamine antifungal agent used in the treatment of dermatophyte infections by inhibiting ergosterol biosynthesis?",
      answers: [
        { text: "Miconazole" },
        { text: "Clotrimazole" },
        { text: "Nystatin" },
        { text: "Amorolfine" },
        { text: "Terbinafine", "isCorrect": true }
      ],
      Explanation: "Terbinafine inhibits ergosterol biosynthesis in the treatment of dermatophyte infections as an allylamine antifungal agent."
    },
    {
      question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
      answers: [
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Pimecrolimus" },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Tacrolimus has a black box warning for potential lymphoma and skin cancer risks, limiting its use to second-line treatment in atopic dermatitis as a topical calcineurin inhibitor."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Tildrakizumab", "isCorrect": true }
      ],
      Explanation: "Tildrakizumab targets interleukin-23p19, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
      answers: [
        { text: "Terbinafine" },
        { text: "Fluconazole" },
        { text: "Caspofungin", "isCorrect": true },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Caspofungin inhibits beta (1,3)-D-glucan synthase, disrupting fungal cell wall synthesis in systemic Candida infections."
    },
    {
      question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p40 subunit of interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab", "isCorrect": true },
        { text: "Ciclosporin" },
        { text: "Briakinumab" }
      ],
      Explanation: "Ustekinumab targets the p40 subunit of IL-12 and IL-23, reducing inflammation and plaque formation in psoriasis as a biologic agent."
    },
    {
      question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a cream formulation?",
      answers: [
        { text: "Acyclovir", "isCorrect": true },
        { text: "Penciclovir" },
        { text: "Foscarnet" },
        { text: "Valaciclovir" },
        { text: "Famciclovir" }
      ],
      Explanation: "Acyclovir inhibits viral DNA polymerase and is available as a cream formulation for herpes simplex infections as a nucleoside analogue."
    },
    {
      question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is frequently used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
      answers: [
        { text: "Hydrocortisone", "isCorrect": true },
        { text: "Mometasone" },
        { text: "Clobetasone" },
        { text: "Fluocinolone" },
        { text: "Betamethasone" }
      ],
      Explanation: "Hydrocortisone, a mild corticosteroid, is frequently used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects."
    },
    {
      question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting phosphodiesterase-4 (PDE-4), thereby reducing cytokine production and inflammation in the skin?",
      answers: [
        { text: "Methotrexate" },
        { text: "Azathioprine" },
        { text: "Mycophenolate" },
        { text: "Ciclosporin" },
        { text: "Apremilast", "isCorrect": true }
      ],
      Explanation: "Apremilast inhibits phosphodiesterase-4 (PDE-4), reducing cytokine production and inflammation in severe eczema as a systemic immunosuppressant."
    },
    {
      question: "Among the listed topical antibiotics used in skin infections, which one is a bacteriostatic antibiotic commonly used in the treatment of acne vulgaris, acting by inhibiting bacterial protein synthesis?",
      answers: [
        { text: "Clindamycin" },
        { text: "Mupirocin" },
        { text: "Fusidic acid" },
        { text: "Neomycin" },
        { text: "Erythromycin", "isCorrect": true }
      ],
      Explanation: "Erythromycin, a bacteriostatic antibiotic, inhibits bacterial protein synthesis, commonly used in acne vulgaris treatment."
    },
    {
      question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while requiring strict contraceptive measures due to teratogenicity risks?",
      answers: [
        { text: "Isotretinoin", "isCorrect": true },
        { text: "Doxycycline" },
        { text: "Azelaic acid" },
        { text: "Clindamycin" },
        { text: "Spironolactone" }
      ],
      Explanation: "Isotretinoin, a retinoid, normalizes keratinization and reduces sebum production but necessitates strict contraceptive measures due to teratogenicity risks in severe acne treatment."
    },
    {
      question: "Among the listed topical antifungal medications, which one is a triazole antifungal agent used in the treatment of candidiasis and dermatophyte infections by inhibiting ergosterol biosynthesis?",
      answers: [
        { text: "Miconazole" },
        { text: "Clotrimazole" },
        { text: "Nystatin" },
        { text: "Amorolfine" },
        { text: "Ketoconazole", "isCorrect": true }
      ],
      Explanation: "Ketoconazole inhibits ergosterol biosynthesis in candidiasis and dermatophyte infections as a triazole antifungal agent."
    },
    {
      question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, has a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
      answers: [
        { text: "Tacrolimus", "isCorrect": true },
        { text: "Pimecrolimus" },
        { text: "Calcipotriol" },
        { text: "Coal tar" },
        { text: "Tazarotene" }
      ],
      Explanation: "Tacrolimus has a black box warning for potential lymphoma and skin cancer risks, limiting its use to second-line treatment in atopic dermatitis as a topical calcineurin inhibitor."
    },
    {
      question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
      answers: [
        { text: "Methotrexate" },
        { text: "Acitretin" },
        { text: "Ustekinumab" },
        { text: "Ciclosporin" },
        { text: "Tildrakizumab", "isCorrect": true }
      ],
      Explanation: "Tildrakizumab targets interleukin-23p19, reducing inflammation and plaque formation in severe chronic plaque psoriasis as a biologic agent."
    },
    {
      question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
      answers: [
        { text: "Terbinafine" },
        { text: "Fluconazole" },
        { text: "Caspofungin", "isCorrect": true },
        { text: "Griseofulvin" },
        { text: "Itraconazole" }
      ],
      Explanation: "Caspofungin inhibits beta (1,3)-D-glucan synthase, disrupting fungal cell wall synthesis in systemic Candida infections."
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

export default SkinQuestion;
