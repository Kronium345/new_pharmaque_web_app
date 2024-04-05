import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const ENTFlashcardMain = () => {

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
        question: "Which medication, used to treat allergic rhinitis, functions as a second-generation H1 antihistamine with minimal sedative effects?",
        answer: "Loratadine",
        options: [
          "Diphenhydramine",
          "Fexofenadine",
          "Chlorphenamine",
          "Loratadine",
          "Cetirizine"
        ]
      },
      {
        id: 2,
        question: "Among the listed intranasal corticosteroids used in allergic rhinitis, which one has a longer duration of action, reducing the need for frequent dosing?",
        answer: "Fluticasone",
        options: [
          "Fluticasone",
          "Mometasone",
          "Beclometasone",
          "Budesonide",
          "Triamcinolone"
        ]
      },
      {
        id: 3,
        question: "Which medication is a decongestant used in nasal sprays or drops for short-term relief of nasal congestion but is cautioned against prolonged use due to the risk of rebound congestion?",
        answer: "Oxymetazoline",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 4,
        question: "Among the following, which medication is a muscarinic antagonist used in nasal sprays for its drying effect on nasal secretions in allergic rhinitis and rhinorrhea?",
        answer: "Ipratropium",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 5,
        question: "Which medication, used in chronic rhinosinusitis, is a macrolide antibiotic known for its anti-inflammatory and immunomodulatory effects rather than its antimicrobial action?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 6,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with hypertension or cardiovascular diseases due to its potential to increase blood pressure?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 7,
        question: "Which medication is an anticholinergic agent used as an adjunct therapy in allergic rhinitis and chronic rhinosinusitis to reduce nasal secretions and improve symptoms?",
        answer: "Ipratropium",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 8,
        question: "Among the listed systemic antihistamines used for allergic rhinitis, which one is known for its sedative effect and is often recommended for nighttime use due to its drowsiness-inducing properties?",
        answer: "Chlorphenamine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 9,
        question: "Which medication is an aminoglycoside antibiotic often used in topical preparations for its efficacy against Gram-negative bacteria in otitis externa?",
        answer: "Neomycin",
        options: [
          "Ciprofloxacin",
          "Neomycin",
          "Gentamicin",
          "Ofloxacin",
          "Tobramycin"
        ]
      },
      {
        id: 10,
        question: "Among the following topical antifungal agents, which one is commonly used in otomycosis for its efficacy against fungal infections in the external auditory canal?",
        answer: "Clotrimazole",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 11,
        question: "Which medication, used in allergic rhinitis, is a leukotriene receptor antagonist blocking the effects of leukotrienes, thereby reducing nasal symptoms?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Fexofenadine",
          "Loratadine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 12,
        question: "Among the listed topical corticosteroids used in otitis externa, which one is known for its potent anti-inflammatory action and reduced potential for systemic side effects?",
        answer: "Hydrocortisone",
        options: [
          "Dexamethasone",
          "Hydrocortisone",
          "Betamethasone",
          "Triamcinolone",
          "Fluticasone"
        ]
      },
      {
        id: 13,
        question: "Which medication, used in allergic rhinitis and vasomotor rhinitis, is an intranasal antihistamine with minimal systemic absorption, thus reducing the risk of systemic side effects?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 14,
        question: "Among the listed mucolytic agents used in ENT conditions, which one is an N-acetylcysteine derivative used to facilitate mucus clearance in chronic respiratory conditions?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 15,
        question: "Which medication, used in allergic rhinitis, functions as a mast cell stabilizer, inhibiting the release of inflammatory mediators from mast cells in the nasal mucosa?",
        answer: "Cromolyn",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 16,
        question: "Among the listed systemic antihistamines used for allergic rhinitis, which one is known for its non-sedating properties and reduced potential for causing drowsiness?",
        answer: "Fexofenadine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 17,
        question: "Which medication is a sympathomimetic agent used in nasal decongestants, cautioning against prolonged use due to the risk of rhinitis medicamentosa or rebound congestion?",
        answer: "Xylometazoline",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 18,
        question: "Which medication, used to treat allergic rhinitis, functions as a second-generation H1 antihistamine with minimal sedative effects?",
        answer: "Loratadine",
        options: [
          "Diphenhydramine",
          "Fexofenadine",
          "Chlorphenamine",
          "Loratadine",
          "Cetirizine"
        ]
      },
      {
        id: 19,
        question: "Among the listed intranasal corticosteroids used in allergic rhinitis, which one has a longer duration of action, reducing the need for frequent dosing?",
        answer: "Fluticasone",
        options: [
          "Fluticasone",
          "Mometasone",
          "Beclometasone",
          "Budesonide",
          "Triamcinolone"
        ]
      },
      {
        id: 20,
        question: "Which medication is a decongestant used in nasal sprays or drops for short-term relief of nasal congestion but is cautioned against prolonged use due to the risk of rebound congestion?",
        answer: "Oxymetazoline",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 21,
        question: "Among the following, which medication is a muscarinic antagonist used in nasal sprays for its drying effect on nasal secretions in allergic rhinitis and rhinorrhea?",
        answer: "Ipratropium",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 22,
        question: "Which medication, used in chronic rhinosinusitis, is a macrolide antibiotic known for its anti-inflammatory and immunomodulatory effects rather than its antimicrobial action?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 23,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with hypertension or cardiovascular diseases due to its potential to increase blood pressure?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 24,
        question: "Which medication is an anticholinergic agent used as an adjunct therapy in allergic rhinitis and chronic rhinosinusitis to reduce nasal secretions and improve symptoms?",
        answer: "Ipratropium",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 25,
        question: "Among the listed systemic antihistamines used for allergic rhinitis, which one is known for its sedative effect and is often recommended for nighttime use due to its drowsiness-inducing properties?",
        answer: "Chlorphenamine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 26,
        question: "Which medication is an aminoglycoside antibiotic often used in topical preparations for its efficacy against Gram-negative bacteria in otitis externa?",
        answer: "Neomycin",
        options: [
          "Ciprofloxacin",
          "Neomycin",
          "Gentamicin",
          "Ofloxacin",
          "Tobramycin"
        ]
      },
      {
        id: 27,
        question: "Among the following topical antifungal agents, which one is commonly used in otomycosis for its efficacy against fungal infections in the external auditory canal?",
        answer: "Clotrimazole",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 28,
        question: "Which medication, used in allergic rhinitis, is a leukotriene receptor antagonist blocking the effects of leukotrienes, thereby reducing nasal symptoms?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Fexofenadine",
          "Loratadine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 29,
        question: "Among the listed topical corticosteroids used in otitis externa, which one is known for its potent anti-inflammatory action and reduced potential for systemic side effects?",
        answer: "Hydrocortisone",
        options: [
          "Dexamethasone",
          "Hydrocortisone",
          "Betamethasone",
          "Triamcinolone",
          "Fluticasone"
        ]
      },
      {
        id: 30,
        question: "Which medication, used in allergic rhinitis and vasomotor rhinitis, is an intranasal antihistamine with minimal systemic absorption, thus reducing the risk of systemic side effects?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 31,
        question: "Among the listed mucolytic agents used in ENT conditions, which one is an N-acetylcysteine derivative used to facilitate mucus clearance in chronic respiratory conditions?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 32,
        question: "Which medication, used in allergic rhinitis, functions as a mast cell stabilizer, inhibiting the release of inflammatory mediators from mast cells in the nasal mucosa?",
        answer: "Cromolyn",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 33,
        question: "Among the listed systemic antihistamines used for allergic rhinitis, which one is known for its non-sedating properties and reduced potential for causing drowsiness?",
        answer: "Fexofenadine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 34,
        question: "Which medication is a sympathomimetic agent used in nasal decongestants, cautioning against prolonged use due to the risk of rhinitis medicamentosa or rebound congestion?",
        answer: "Xylometazoline",
        options: [
          "Oxymetazoline",
          "Ipratropium",
          "Xylometazoline",
          "Phenylephrine",
          "Ephedrine"
        ]
      },
      {
        id: 35,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is considered to have minimal sedative effects, making it suitable for daytime use?",
        answer: "Desloratadine",
        options: [
          "Chlorphenamine",
          "Cetirizine",
          "Loratadine",
          "Desloratadine",
          "Fexofenadine"
        ]
      },
      {
        id: 36,
        question: "Which medication, used in allergic rhinitis and vasomotor rhinitis, is an intranasal antihistamine with rapid onset of action, providing quick relief from nasal symptoms?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 37,
        question: "Among the following anticholinergic agents used in rhinorrhea, which one is administered intranasally and is effective in reducing excessive nasal secretions?",
        answer: "Ipratropium",
        options: [
          "Glycopyrrolate",
          "Tiotropium",
          "Ipratropium",
          "Tolterodine",
          "Trospium"
        ]
      },
      {
        id: 38,
        question: "Which medication is a macrolide antibiotic often used in the treatment of otitis media due to its efficacy against Streptococcus pneumoniae and Haemophilus influenzae?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 39,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with hyperthyroidism due to its potential to exacerbate thyroid-related symptoms?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 40,
        question: "Which medication, used in chronic rhinosinusitis, is a tetracycline antibiotic with anti-inflammatory properties, making it effective in treating chronic inflammatory conditions of the sinuses?",
        answer: "Doxycycline",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 41,
        question: "Among the listed topical antifungal agents used in otitis externa, which one is commonly prescribed for its broad-spectrum activity against fungal infections in the ear canal?",
        answer: "Clotrimazole",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 42,
        question: "Which medication, used in allergic rhinitis, is a mast cell stabilizer, preventing the release of histamine and other inflammatory mediators from mast cells in the nasal mucosa?",
        answer: "Cromolyn",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 43,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is known for its quick onset of action, providing relief within 15-30 minutes after administration?",
        answer: "Cetirizine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 44,
        question: "Which medication is an aminoglycoside antibiotic used in topical formulations for its efficacy against Pseudomonas aeruginosa in otitis externa?",
        answer: "Gentamicin",
        options: [
          "Ciprofloxacin",
          "Neomycin",
          "Gentamicin",
          "Ofloxacin",
          "Tobramycin"
        ]
      },
      {
        id: 45,
        question: "Among the listed topical corticosteroids used in otitis externa, which one is commonly recommended for its broad anti-inflammatory effects and safety in otic preparations?",
        answer: "Hydrocortisone",
        options: [
          "Dexamethasone",
          "Hydrocortisone",
          "Betamethasone",
          "Triamcinolone",
          "Fluticasone"
        ]
      },
      {
        id: 46,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine with a rapid onset of action, providing relief within 15 minutes after administration?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 47,
        question: "Among the listed mucolytic agents used in ENT conditions, which one is a derivative of bromhexine and is effective in facilitating mucus clearance?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 48,
        question: "Which medication, used in allergic rhinitis, is a leukotriene receptor antagonist known for its efficacy in reducing nasal congestion and inflammation?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Fexofenadine",
          "Loratadine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 49,
        question: "Among the listed topical antifungal agents used in otitis externa, which one is effective against Candida species commonly implicated in fungal ear infections?",
        answer: "Clotrimazole",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 50,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine with minimal systemic absorption, reducing the risk of systemic side effects?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 51,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is known for its long duration of action, providing relief for up to 24 hours after a single dose?",
        answer: "Fexofenadine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 52,
        question: "Which medication, used in chronic rhinosinusitis, is a macrolide antibiotic known for its anti-inflammatory properties and its effect on biofilms in the sinuses?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 53,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with glaucoma due to its potential to increase intraocular pressure?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 54,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine effective in reducing both nasal symptoms and ocular symptoms associated with allergies?",
        answer: "Olopatadine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 55,
        question: "Among the listed mucolytic agents used in ENT conditions, which one works by increasing respiratory tract fluid and decreasing mucus viscosity?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 56,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine with a longer duration of action, providing relief for up to 12 hours after administration?",
        answer: "Olopatadine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 57,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is known for its minimal sedative effects and suitability for daytime use?",
        answer: "Fexofenadine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 58,
        question: "Which medication, used in chronic rhinosinusitis, is a fluoroquinolone antibiotic effective against both Gram-positive and Gram-negative bacteria commonly involved in sinus infections?",
        answer: "Ciprofloxacin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 59,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with hyperthyroidism due to its potential to exacerbate thyroid-related symptoms?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 60,
        question: "Which medication, used in chronic rhinosinusitis, is a macrolide antibiotic with anti-inflammatory properties and immune-modulatory effects in addition to its antimicrobial action?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 61,
        question: "Among the listed topical antifungal agents used in otitis externa, which one is effective against various fungi including Candida species and Aspergillus?",
        answer: "Amphotericin B",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 62,
        question: "Which medication, used in allergic rhinitis, functions as a mast cell stabilizer, inhibiting the release of histamine and other inflammatory mediators from mast cells in the nasal mucosa?",
        answer: "Cromolyn",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 63,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is known for its quick onset of action, providing relief within 15-30 minutes after administration?",
        answer: "Cetirizine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 64,
        question: "Which medication, used in otitis externa, is an aminoglycoside antibiotic effective against Pseudomonas aeruginosa and other Gram-negative bacteria commonly implicated in ear infections?",
        answer: "Gentamicin",
        options: [
          "Ciprofloxacin",
          "Neomycin",
          "Gentamicin",
          "Ofloxacin",
          "Tobramycin"
        ]
      },
      {
        id: 65,
        question: "Among the listed topical corticosteroids used in otitis externa, which one is commonly recommended for its broad anti-inflammatory effects and safety in otic preparations?",
        answer: "Hydrocortisone",
        options: [
          "Dexamethasone",
          "Hydrocortisone",
          "Betamethasone",
          "Triamcinolone",
          "Fluticasone"
        ]
      },
      {
        id: 66,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine with a rapid onset of action, providing relief within 15 minutes after administration?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 67,
        question: "Among the listed mucolytic agents used in ENT conditions, which one is a derivative of bromhexine and is effective in facilitating mucus clearance?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 68,
        question: "Which medication, used in allergic rhinitis, is a leukotriene receptor antagonist known for its efficacy in reducing nasal congestion and inflammation?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Fexofenadine",
          "Loratadine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 69,
        question: "Among the listed topical antifungal agents used in otitis externa, which one is effective against Candida species commonly implicated in fungal ear infections?",
        answer: "Clotrimazole",
        options: [
          "Clotrimazole",
          "Miconazole",
          "Nystatin",
          "Econazole",
          "Amphotericin B"
        ]
      },
      {
        id: 70,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine with minimal systemic absorption, reducing the risk of systemic side effects?",
        answer: "Azelastine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 71,
        question: "Among the listed systemic antihistamines used in allergic rhinitis, which one is known for its long duration of action, providing relief for up to 24 hours after a single dose?",
        answer: "Fexofenadine",
        options: [
          "Fexofenadine",
          "Loratadine",
          "Chlorphenamine",
          "Cetirizine",
          "Desloratadine"
        ]
      },
      {
        id: 72,
        question: "Which medication, used in chronic rhinosinusitis, is a macrolide antibiotic known for its anti-inflammatory properties and its effect on biofilms in the sinuses?",
        answer: "Azithromycin",
        options: [
          "Amoxicillin",
          "Cefuroxime",
          "Azithromycin",
          "Doxycycline",
          "Ciprofloxacin"
        ]
      },
      {
        id: 73,
        question: "Among the listed systemic decongestants used for nasal congestion, which one is cautioned against in patients with glaucoma due to its potential to increase intraocular pressure?",
        answer: "Pseudoephedrine",
        options: [
          "Pseudoephedrine",
          "Phenylephrine",
          "Ephedrine",
          "Oxymetazoline",
          "Xylometazoline"
        ]
      },
      {
        id: 74,
        question: "Which medication, used in allergic rhinitis, is an intranasal antihistamine effective in reducing both nasal symptoms and ocular symptoms associated with allergies?",
        answer: "Olopatadine",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      },
      {
        id: 75,
        question: "Among the listed mucolytic agents used in ENT conditions, which one works by increasing respiratory tract fluid and decreasing mucus viscosity?",
        answer: "Carbocisteine",
        options: [
          "Bromhexine",
          "Carbocisteine",
          "Guaifenesin",
          "Erdosteine",
          "Acetylcysteine"
        ]
      },
      {
        id: 76,
        question: "Which medication, used in allergic rhinitis, is a mast cell stabilizer, inhibiting the release of histamine and other inflammatory mediators from mast cells in the nasal mucosa?",
        answer: "Cromolyn",
        options: [
          "Azelastine",
          "Levocabastine",
          "Olopatadine",
          "Ketotifen",
          "Cromolyn"
        ]
      }
]

export default ENTFlashcardMain;
