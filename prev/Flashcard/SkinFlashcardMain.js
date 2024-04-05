import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const SkinFlashcardMain = () => {

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
        question: "Which systemic antifungal medication, used for severe dermatophyte infections, functions by inhibiting fungal ergosterol synthesis via inhibition of squalene epoxidase?",
        answer: "Terbinafine",
        options: [
          "Terbinafine",
          "Fluconazole",
          "Ketoconazole",
          "Griseofulvin",
          "Itraconazole"
        ]
      },
      {
        id: 2,
        question: "Among the listed medications used for psoriasis, which one is a biologic agent that targets interleukin-17A, reducing inflammation and plaque formation in psoriatic skin lesions?",
        answer: "Secukinumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Secukinumab"
        ]
      },
      {
        id: 3,
        question: "Which topical corticosteroid, classified as a potent corticosteroid, is often avoided in the treatment of facial dermatoses due to the risk of atrophy and telangiectasia in thin skin areas?",
        answer: "Clobetasol",
        options: [
          "Hydrocortisone",
          "Mometasone",
          "Clobetasol",
          "Fluocinolone",
          "Betamethasone"
        ]
      },
      {
        id: 4,
        question: "Among the listed topical antiviral medications, which one is a nucleoside analogue that inhibits viral DNA polymerase and is used in the treatment of herpes simplex infections?",
        answer: "Acyclovir",
        options: [
          "Acyclovir",
          "Penciclovir",
          "Foscarnet",
          "Valaciclovir",
          "Famciclovir"
        ]
      },
      {
        id: 5,
        question: "Which systemic medication used for severe nodular cystic acne carries a significant risk of teratogenicity and requires strict contraceptive measures in female patients due to its potential to cause severe birth defects?",
        answer: "Isotretinoin",
        options: [
          "Isotretinoin",
          "Doxycycline",
          "Azelaic acid",
          "Clindamycin",
          "Spironolactone"
        ]
      },
      {
        id: 6,
        question: "Among the listed topical antifungal medications, which one is a polyene antifungal agent used to treat candidiasis and dermatophyte infections by binding to ergosterol, disrupting fungal cell membranes?",
        answer: "Nystatin",
        options: [
          "Miconazole",
          "Clotrimazole",
          "Nystatin",
          "Amorolfine",
          "Natamycin"
        ]
      },
      {
        id: 7,
        question: "Which systemic immunosuppressant, used for severe eczema, functions by inhibiting calcineurin and suppressing T-cell activation, thereby reducing inflammation in the skin?",
        answer: "Tacrolimus",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Mycophenolate",
          "Ciclosporin",
          "Tacrolimus"
        ]
      },
      {
        id: 8,
        question: "Among the listed topical antibiotics used in skin infections, which one is a lincosamide antibiotic often combined with benzoyl peroxide in the treatment of acne vulgaris, targeting Propionibacterium acnes?",
        answer: "Clindamycin",
        options: [
          "Clindamycin",
          "Mupirocin",
          "Fusidic acid",
          "Neomycin",
          "Erythromycin"
        ]
      },
      {
        id: 9,
        question: "Which topical calcineurin inhibitor, used in the treatment of atopic dermatitis, is indicated for short-term and intermittent long-term treatment due to concerns about potential malignancy risk?",
        answer: "Tacrolimus",
        options: [
          "Tacrolimus",
          "Pimecrolimus",
          "Calcipotriol",
          "Coal tar",
          "Tazarotene"
        ]
      },
      {
        id: 10,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets the p40 subunit shared by interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
        answer: "Ustekinumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Secukinumab"
        ]
      },
      {
        id: 11,
        question: "Which topical antifungal medication, used in the treatment of dermatophyte infections, functions by inhibiting the biosynthesis of ergosterol, disrupting fungal cell membranes?",
        answer: "Terbinafine",
        options: [
          "Terbinafine",
          "Fluconazole",
          "Ketoconazole",
          "Griseofulvin",
          "Itraconazole"
        ]
      },
      {
        id: 12,
        question: "Among the listed topical corticosteroids, which one is classified as a moderate-strength corticosteroid and is commonly used in the treatment of inflammatory skin conditions, particularly eczema?",
        answer: "Mometasone",
        options: [
          "Hydrocortisone",
          "Mometasone",
          "Clobetasone",
          "Fluocinolone",
          "Betamethasone"
        ]
      },
      {
        id: 13,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase?",
        answer: "Acyclovir",
        options: [
          "Acyclovir",
          "Penciclovir",
          "Foscarnet",
          "Valaciclovir",
          "Famciclovir"
        ]
      },
      {
        id: 14,
        question: "Among the listed systemic antibiotics used in skin infections, which one is a tetracycline antibiotic that functions by inhibiting bacterial protein synthesis and is commonly used in acne vulgaris treatment?",
        answer: "Doxycycline",
        options: [
          "Erythromycin",
          "Doxycycline",
          "Clindamycin",
          "Mupirocin",
          "Azithromycin"
        ]
      },
      {
        id: 15,
        question: "Which systemic immunosuppressant, used in severe psoriasis, acts by inhibiting dihydrofolate reductase, leading to decreased DNA synthesis and cell proliferation?",
        answer: "Methotrexate",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Mycophenolate",
          "Ciclosporin",
          "Fumaric acid esters"
        ]
      },
      {
        id: 16,
        question: "Among the listed topical antibiotics used in skin infections, which one is a topical antibiotic derived from fusidic acid and is effective against Staphylococcus aureus?",
        answer: "Fusidic acid",
        options: [
          "Clindamycin",
          "Mupirocin",
          "Fusidic acid",
          "Neomycin",
          "Erythromycin"
        ]
      },
      {
        id: 17,
        question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, carries a black box warning due to its potential association with lymphoma and skin cancer risks?",
        answer: "Tacrolimus",
        options: [
          "Tacrolimus",
          "Pimecrolimus",
          "Calcipotriol",
          "Coal tar",
          "Tazarotene"
        ]
      },
      {
        id: 18,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23, reducing inflammation and plaque formation?",
        answer: "Guselkumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Guselkumab"
        ]
      },
      {
        id: 19,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
          "Terbinafine",
          "Fluconazole",
          "Caspofungin",
          "Griseofulvin",
          "Itraconazole"
        ]
      },
      {
        id: 20,
        question: "Among the listed medications used for psoriasis, which one is a biologic agent that targets T-cell activation by binding to CD2, thereby reducing inflammation and plaque formation?",
        answer: "Alefacept",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Alefacept"
        ]
      },
      {
        id: 21,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available in a cream formulation?",
        answer: "Penciclovir",
        options: [
          "Acyclovir",
          "Penciclovir",
          "Foscarnet",
          "Valaciclovir",
          "Famciclovir"
        ]
      },
      {
        id: 22,
        question: "Among the listed topical corticosteroids, which one is classified as a potent corticosteroid and is known to be absorbed systemically in high amounts, raising concerns about adverse effects particularly in children?",
        answer: "Clobetasol",
        options: [
          "Hydrocortisone",
          "Mometasone",
          "Clobetasol",
          "Fluocinolone",
          "Betamethasone"
        ]
      },
      {
        id: 23,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting inosine monophosphate dehydrogenase, thus suppressing T-cell and B-cell proliferation and reducing inflammation in the skin?",
        answer: "Mycophenolate",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Mycophenolate",
          "Ciclosporin",
          "Sirolimus"
        ]
      },
      {
        id: 24,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bacteriostatic antibiotic often used in the treatment of acne vulgaris, acting by inhibiting bacterial protein synthesis?",
        answer: "Erythromycin",
        options: [
            "Clindamycin",
            "Mupirocin",
            "Fusidic acid",
            "Neomycin",
            "Erythromycin"
        ]
    },
    {
        id: 25,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that acts by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
        answer: "Isotretinoin",
        options: [
            "Isotretinoin",
            "Doxycycline",
            "Azelaic acid",
            "Clindamycin",
            "Spironolactone"
        ]
    },
    {
        id: 26,
        question: "Among the listed topical antifungal medications, which one is an azole antifungal agent used in the treatment of candidiasis and dermatophyte infections by inhibiting fungal cytochrome P450-dependent enzymes?",
        answer: "Ketoconazole",
        options: [
            "Miconazole",
            "Clotrimazole",
            "Nystatin",
            "Amorolfine",
            "Ketoconazole"
        ]
    },
    {
        id: 27,
        question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to its potential risk of skin cancer, limiting its use to second-line treatment in patients unresponsive to other therapies?",
        answer: "Tacrolimus",
        options: [
            "Tacrolimus",
            "Pimecrolimus",
            "Calcipotriol",
            "Coal tar",
            "Tazarotene"
        ]
    },
    {
        id: 28,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-17 receptor A, reducing inflammation and plaque formation?",
        answer: "Brodalumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Brodalumab"
        ]
    },
    {
        id: 29,
        question: "Which systemic antifungal medication, used in the treatment of systemic Aspergillus infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
            "Terbinafine",
            "Fluconazole",
            "Caspofungin",
            "Griseofulvin",
            "Itraconazole"
        ]
    },
    {
        id: 30,
        question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p19 subunit of interleukin-23, reducing inflammation and plaque formation?",
        answer: "Risankizumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Risankizumab"
        ]
    },
    {
        id: 31,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available in an ointment formulation?",
        answer: "Acyclovir",
        options: [
            "Acyclovir",
            "Penciclovir",
            "Foscarnet",
            "Valaciclovir",
            "Famciclovir"
        ]
    },
    {
        id: 32,
        question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is commonly used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
        answer: "Hydrocortisone",
        options: [
            "Hydrocortisone",
            "Mometasone",
            "Clobetasone",
            "Fluocinolone",
            "Betamethasone"
        ]
    },
    {
        id: 33,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting mammalian target of rapamycin (mTOR), thereby suppressing T-cell and B-cell proliferation and reducing inflammation in the skin?",
        answer: "Sirolimus",
        options: [
            "Methotrexate",
            "Azathioprine",
            "Mycophenolate",
            "Ciclosporin",
            "Sirolimus"
        ]
    },
    {
        id: 34,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic often combined with neomycin in the treatment of infected wounds, targeting Gram-positive organisms?",
        answer: "Fusidic acid",
        options: [
            "Clindamycin",
            "Mupirocin",
            "Fusidic acid",
            "Neomycin",
            "Erythromycin"
        ]
    },
    {
        id: 35,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while requiring strict contraceptive measures due to teratogenicity risks?",
        answer: "Isotretinoin",
        options: [
            "Isotretinoin",
            "Doxycycline",
            "Azelaic acid",
            "Clindamycin",
            "Spironolactone"
        ]
    },
    {
        id: 36,
        question: "Among the listed topical antifungal medications, which one is an imidazole antifungal agent used in the treatment of candidiasis and dermatophyte infections by disrupting fungal ergosterol synthesis?",
        answer: "Clotrimazole",
        options: [
            "Miconazole",
            "Clotrimazole",
            "Nystatin",
            "Amorolfine",
            "Ketoconazole"
        ]
    },
    {
        id: 37,
        question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, has a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
        answer: "Pimecrolimus",
        options: [
            "Tacrolimus",
            "Pimecrolimus",
            "Calcipotriol",
            "Coal tar",
            "Tazarotene"
        ]
    },
    {
        id: 38,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
        answer: "Tildrakizumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Tildrakizumab"
        ]
    },
    {
        id: 39,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
            "Terbinafine",
            "Fluconazole",
            "Caspofungin",
            "Griseofulvin",
            "Itraconazole"
        ]
    },
    {
        id: 40,
        question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
        answer: "Ustekinumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Tildrakizumab"
        ]
    },
    {
        id: 41,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a patch for recurrent cold sores?",
        answer: "Penciclovir",
        options: [
            "Acyclovir",
            "Penciclovir",
            "Foscarnet",
            "Valaciclovir",
            "Famciclovir"
        ]
    },
    {
        id: 42,
        question: "Among the listed topical corticosteroids, which one is classified as a potent corticosteroid and is associated with a higher risk of systemic absorption and adverse effects, especially in children and thin-skinned areas?",
        answer: "Clobetasol",
        options: [
            "Hydrocortisone",
            "Mometasone",
            "Clobetasol",
            "Fluocinolone",
            "Betamethasone"
        ]
    },
    {
        id: 43,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting Janus kinases (JAK), thereby suppressing cytokine signaling and reducing inflammation in the skin?",
        answer: "Baricitinib",
        options: [
            "Methotrexate",
            "Azathioprine",
            "Mycophenolate",
            "Ciclosporin",
            "Baricitinib"
        ]
    },
    {
        id: 44,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic effective against MRSA and is frequently used in nasal decolonization and skin infections?",
        answer: "Mupirocin",
        options: [
            "Clindamycin",
            "Mupirocin",
            "Fusidic acid",
            "Neomycin",
            "Erythromycin"
        ]
    },
    {
        id: 45,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
        answer: "Isotretinoin",
        options: [
            "Isotretinoin",
            "Doxycycline",
            "Azelaic acid",
            "Clindamycin",
            "Spironolactone"
        ]
    },
    {
        id: 46,
        question: "Among the listed topical antifungal medications, which one is an allylamine antifungal agent used in the treatment of dermatophyte infections by inhibiting ergosterol biosynthesis?",
        answer: "Terbinafine",
        options: [
            "Miconazole",
            "Clotrimazole",
            "Nystatin",
            "Amorolfine",
            "Terbinafine"
        ]
    },
    {
        id: 47,
        question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
        answer: "Tacrolimus",
        options: [
            "Tacrolimus",
            "Pimecrolimus",
            "Calcipotriol",
            "Coal tar",
            "Tazarotene"
        ]
    },
    {
        id: 48,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
        answer: "Tildrakizumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Tildrakizumab"
        ]
    },
    {
        id: 49,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
            "Terbinafine",
            "Fluconazole",
            "Caspofungin",
            "Griseofulvin",
            "Itraconazole"
        ]
    },
    {
        id: 50,
        question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p40 subunit of interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
        answer: "Ustekinumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Briakinumab"
        ]
    },
    {
        id: 51,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a cream formulation?",
        answer: "Acyclovir",
        options: [
            "Acyclovir",
            "Penciclovir",
            "Foscarnet",
            "Valaciclovir",
            "Famciclovir"
        ]
    },
    {
        id: 52,
        question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is frequently used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
        answer: "Hydrocortisone",
        options: [
            "Hydrocortisone",
            "Mometasone",
            "Clobetasone",
            "Fluocinolone",
            "Betamethasone"
        ]
    },
    {
        id: 53,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting Janus kinases (JAK), thereby suppressing cytokine signaling and reducing inflammation in the skin?",
        answer: "Baricitinib",
        options: [
            "Methotrexate",
            "Azathioprine",
            "Mycophenolate",
            "Ciclosporin",
            "Baricitinib"
        ]
    },
    {
        id: 54,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic effective against MRSA and is frequently used in nasal decolonization and skin infections?",
        answer: "Mupirocin",
        options: [
            "Clindamycin",
            "Mupirocin",
            "Fusidic acid",
            "Neomycin",
            "Erythromycin"
        ]
    },
    {
        id: 55,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
        answer: "Isotretinoin",
        options: [
            "Isotretinoin",
            "Doxycycline",
            "Azelaic acid",
            "Clindamycin",
            "Spironolactone"
        ]
    },
    {
        id: 56,
        question: "Among the listed topical antifungal medications, which one is an allylamine antifungal agent used in the treatment of dermatophyte infections by inhibiting ergosterol biosynthesis?",
        answer: "Terbinafine",
        options: [
            "Miconazole",
            "Clotrimazole",
            "Nystatin",
            "Amorolfine",
            "Terbinafine"
        ]
    },
    {
        id: 57,
        question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
        answer: "Tacrolimus",
        options: [
            "Tacrolimus",
            "Pimecrolimus",
            "Calcipotriol",
            "Coal tar",
            "Tazarotene"
        ]
    },
    {
        id: 58,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
        answer: "Tildrakizumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Tildrakizumab"
        ]
    },
    {
        id: 59,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
            "Terbinafine",
            "Fluconazole",
            "Caspofungin",
            "Griseofulvin",
            "Itraconazole"
        ]
    },
    {
        id: 60,
        question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p40 subunit of interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
        answer: "Ustekinumab",
        options: [
            "Methotrexate",
            "Acitretin",
            "Ustekinumab",
            "Ciclosporin",
            "Briakinumab"
        ]
    },
    {
        id: 61,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a cream formulation?",
        answer: "Acyclovir",
        options: [
            "Acyclovir",
            "Penciclovir",
            "Foscarnet",
            "Valaciclovir",
            "Famciclovir"
        ]
    },
    {
        id: 62,
        question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is frequently used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
        answer: "Hydrocortisone",
        options: [
            "Hydrocortisone",
            "Mometasone",
            "Clobetasone",
            "Fluocinolone",
            "Betamethasone"
        ]
    },
    {
        id: 63,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting Janus kinases (JAK), thereby suppressing cytokine signaling and reducing inflammation in the skin?",
        answer: "Baricitinib",
        options: [
            "Methotrexate",
            "Azathioprine",
            "Mycophenolate",
            "Ciclosporin",
            "Baricitinib"
        ]
    },
    {
        id: 64,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bactericidal antibiotic effective against MRSA and is frequently used in nasal decolonization and skin infections?",
        answer: "Mupirocin",
        options: [
            "Clindamycin",
            "Mupirocin",
            "Fusidic acid",
            "Neomycin",
            "Erythromycin"
        ]
    },
    {
        id: 66,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while having a significant risk of teratogenicity?",
        answer: "Isotretinoin",
        options: [
          "Doxycycline",
          "Azelaic acid",
          "Clindamycin",
          "Spironolactone",
          "Isotretinoin"
        ]
      },
      {
        id: 67,
        question: "Among the listed topical antifungal medications, which one is an allylamine antifungal agent used in the treatment of dermatophyte infections by inhibiting ergosterol biosynthesis?",
        answer: "Terbinafine",
        options: [
          "Miconazole",
          "Clotrimazole",
          "Nystatin",
          "Amorolfine",
          "Terbinafine"
        ]
      },
      {
        id: 68,
        question: "Which topical calcineurin inhibitor, used in atopic dermatitis, is associated with a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
        answer: "Tacrolimus",
        options: [
          "Pimecrolimus",
          "Calcipotriol",
          "Coal tar",
          "Tazarotene",
          "Tacrolimus"
        ]
      },
      {
        id: 69,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
        answer: "Tildrakizumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Tildrakizumab"
        ]
      },
      {
        id: 70,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
          "Terbinafine",
          "Fluconazole",
          "Caspofungin",
          "Griseofulvin",
          "Itraconazole"
        ]
      },
      {
        id: 71,
        question: "Among the listed medications used in psoriasis, which one is a biologic agent that targets the p40 subunit of interleukin-12 and interleukin-23, reducing inflammation and plaque formation?",
        answer: "Ustekinumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Briakinumab"
        ]
      },
      {
        id: 72,
        question: "Which topical antiviral medication, used in the treatment of herpes simplex infections, is a nucleoside analogue that inhibits viral DNA polymerase and is available as a cream formulation?",
        answer: "Acyclovir",
        options: [
          "Penciclovir",
          "Foscarnet",
          "Valaciclovir",
          "Famciclovir",
          "Acyclovir"
        ]
      },
      {
        id: 73,
        question: "Among the listed topical corticosteroids, which one is classified as a mild corticosteroid and is frequently used for mild inflammatory skin conditions due to its lower potency and reduced risk of adverse effects?",
        answer: "Hydrocortisone",
        options: [
          "Mometasone",
          "Clobetasone",
          "Fluocinolone",
          "Betamethasone",
          "Hydrocortisone"
        ]
      },
      {
        id: 74,
        question: "Which systemic immunosuppressant, used in severe eczema, functions by inhibiting phosphodiesterase-4 (PDE-4), thereby reducing cytokine production and inflammation in the skin?",
        answer: "Apremilast",
        options: [
          "Methotrexate",
          "Azathioprine",
          "Mycophenolate",
          "Ciclosporin",
          "Apremilast"
        ]
      },
      {
        id: 75,
        question: "Among the listed topical antibiotics used in skin infections, which one is a bacteriostatic antibiotic commonly used in the treatment of acne vulgaris, acting by inhibiting bacterial protein synthesis?",
        answer: "Erythromycin",
        options: [
          "Clindamycin",
          "Mupirocin",
          "Fusidic acid",
          "Neomycin",
          "Erythromycin"
        ]
      },
      {
        id: 76,
        question: "Which systemic medication used in severe nodular cystic acne is a retinoid that functions by normalizing keratinization and reducing sebum production while requiring strict contraceptive measures due to teratogenicity risks?",
        answer: "Isotretinoin",
        options: [
          "Doxycycline",
          "Azelaic acid",
          "Clindamycin",
          "Spironolactone",
          "Isotretinoin"
        ]
      },
      {
        id: 77,
        question: "Among the listed topical antifungal medications, which one is a triazole antifungal agent used in the treatment of candidiasis and dermatophyte infections by inhibiting ergosterol biosynthesis?",
        answer: "Ketoconazole",
        options: [
          "Miconazole",
          "Clotrimazole",
          "Nystatin",
          "Amorolfine",
          "Ketoconazole"
        ]
      },
      {
        id: 78,
        question: "Which topical calcineurin inhibitor, used in the management of atopic dermatitis, has a black box warning due to potential lymphoma and skin cancer risks, limiting its use to second-line treatment?",
        answer: "Tacrolimus",
        options: [
          "Pimecrolimus",
          "Calcipotriol",
          "Coal tar",
          "Tazarotene",
          "Tacrolimus"
        ]
      },
      {
        id: 79,
        question: "Among the listed medications used for severe chronic plaque psoriasis, which one is a biologic agent that targets interleukin-23p19, reducing inflammation and plaque formation?",
        answer: "Tildrakizumab",
        options: [
          "Methotrexate",
          "Acitretin",
          "Ustekinumab",
          "Ciclosporin",
          "Tildrakizumab"
        ]
      },
      {
        id: 80,
        question: "Which systemic antifungal medication, used in the treatment of systemic Candida infections, functions by inhibiting fungal cell wall synthesis via inhibition of beta (1,3)-D-glucan synthase?",
        answer: "Caspofungin",
        options: [
          "Terbinafine",
          "Fluconazole",
          "Caspofungin",
          "Griseofulvin",
          "Itraconazole"
        ]
      }    
]


export default SkinFlashcardMain;