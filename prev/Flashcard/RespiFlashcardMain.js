
import { useState } from "react";
import FlashcardList from './FlashcardList';
import './Flashcard.css';

const RespiFlashcardMain = () => {

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
        question: "Which corticosteroid is associated with the lowest systemic bioavailability when used in inhalational form?",
        answer: "Budesonide",
        options: [
          "Beclomethasone",
          "Fluticasone",
          "Mometasone",
          "Budesonide",
          "Ciclesonide"
        ]
      },
      {
        id: 2,
        question: "Which of the following is a leukotriene receptor antagonist used in asthma management?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Zafirlukast",
          "Zileuton",
          "Cromolyn",
          "Ipratropium"
        ]
      },
      {
        id: 3,
        question: "Which long-acting muscarinic antagonist (LAMA) is approved for the treatment of chronic obstructive pulmonary disease (COPD)?",
        answer: "Umeclidinium",
        options: [
          "Tiotropium",
          "Aclidinium",
          "Umeclidinium",
          "Glycopyrronium",
          "Ipratropium"
        ]
      },
      {
        id: 4,
        question: "Which medication, primarily used as an antihypertensive, can also be administered intravenously in emergency situations to treat severe bronchoconstriction in asthmatic patients?",
        answer: "Propranolol",
        options: [
          "Atenolol",
          "Metoprolol",
          "Propranolol",
          "Labetalol",
          "Carvedilol"
        ]
      },
      {
        id: 5,
        question: "Which of the following phosphodiesterase-4 inhibitors is used for the treatment of severe chronic obstructive pulmonary disease (COPD) with chronic bronchitis and a history of exacerbations?",
        answer: "Roflumilast",
        options: [
          "Roflumilast",
          "Cilomilast",
          "Apremilast",
          "Rolipram",
          "Milrinone"
        ]
      },
      {
        id: 6,
        question: "What is the primary mechanism of action of omalizumab in the treatment of severe allergic asthma?",
        answer: "IgE neutralization",
        options: [
          "Interleukin-5 inhibition",
          "IgE neutralization",
          "Leukotriene receptor blockade",
          "Histamine antagonism",
          "Interferon-gamma modulation"
        ]
      },
      {
        id: 7,
        question: "Which inhaled corticosteroid (ICS) is commonly combined with formoterol, a long-acting beta2 agonist (LABA), in a single inhaler device for asthma management?",
        answer: "Budesonide",
        options: [
          "Fluticasone",
          "Beclomethasone",
          "Mometasone",
          "Budesonide",
          "Ciclesonide"
        ]
      },
      {
        id: 8,
        question: "Among the following, which is a long-acting beta2 agonist (LABA) used as maintenance therapy in asthma and chronic obstructive pulmonary disease (COPD)?",
        answer: "Salmeterol",
        options: [
          "Albuterol",
          "Salmeterol",
          "Terbutaline",
          "Formoterol",
          "Ipratropium"
        ]
      },
      {
        id: 9,
        question: "Which of the following mucolytic agents is used as an adjunctive therapy in patients with chronic obstructive pulmonary disease (COPD) to reduce exacerbations?",
        answer: "Carbocisteine",
        options: [
          "Carbocisteine",
          "Erdosteine",
          "Acetylcysteine",
          "Bromhexine",
          "Ambroxol"
        ]
      },
      {
        id: 10,
        question: "Which anticholinergic medication is available in both nebulizer and metered-dose inhaler (MDI) formulations for the treatment of chronic obstructive pulmonary disease (COPD)?",
        answer: "Ipratropium",
        options: [
          "Tiotropium",
          "Ipratropium",
          "Aclidinium",
          "Umeclidinium",
          "Glycopyrronium"
        ]
      },
      {
        id: 11,
        question: "Which medication class, inhibiting leukotriene synthesis, is represented by zileuton in the management of asthma?",
        answer: "5-lipoxygenase inhibitors",
        options: [
          "Corticosteroids",
          "Mast cell stabilizers",
          "Beta2 agonists",
          "Anticholinergics",
          "5-lipoxygenase inhibitors"
        ]
      },
      {
        id: 12,
        question: "Which combination medication contains a corticosteroid and a long-acting beta2 agonist (LABA) and is indicated for the treatment of asthma and chronic obstructive pulmonary disease (COPD)?",
        answer: "Budesonide/Formoterol",
        options: [
          "Fluticasone/Salmeterol",
          "Beclomethasone/Formoterol",
          "Mometasone/Formoterol",
          "Budesonide/Formoterol",
          "Ciclesonide/Formoterol"
        ]
      },
      {
        id: 13,
        question: "Which medication, belonging to the xanthine derivative class, is used in the management of chronic obstructive pulmonary disease (COPD) and asthma but has a narrow therapeutic index?",
        answer: "Theophylline",
        options: [
          "Theophylline",
          "Aminophylline",
          "Oxtriphylline",
          "Doxofylline",
          "Enprofylline"
        ]
      },
      {
        id: 14,
        question: "Which medication, initially developed as an antidepressant, is now used off-label for its antitussive effects by acting on sigma receptors in the central nervous system?",
        answer: "Dextromethorphan",
        options: [
          "Dextromethorphan",
          "Guaifenesin",
          "Codeine",
          "Pholcodine",
          "Noscapine"
        ]
      },
      {
        id: 15,
        question: "Which medication is a mast cell stabilizer used in the prophylaxis of asthma and in the treatment of allergic rhinitis?",
        answer: "Cromolyn",
        options: [
          "Montelukast",
          "Zafirlukast",
          "Zileuton",
          "Cromolyn",
          "Ipratropium"
        ]
      },
      {
        id: 16,
        question: "Which medication, commonly used as an expectorant, works by increasing respiratory tract fluid and reducing mucus viscosity, aiding in its clearance?",
        answer: "Erdosteine",
        options: [
          "Bromhexine",
          "Ambroxol",
          "Acetylcysteine",
          "Carbocisteine",
          "Erdosteine"
        ]
      },
      {
        id: 17,
        question: "Which medication, acting as a short-acting beta2 agonist (SABA), is considered a first-line reliever therapy for acute bronchospasm in asthma and chronic obstructive pulmonary disease (COPD)?",
        answer: "Albuterol",
        options: [
          "Albuterol",
          "Salmeterol",
          "Terbutaline",
          "Formoterol",
          "Ipratropium"
        ]
      },
      {
        id: 18,
        question: "Which medication, used as an antitussive, is a non-opioid derivative of morphine and is classified as a sigma-1 receptor agonist?",
        answer: "Noscapine",
        options: [
          "Dextromethorphan",
          "Guaifenesin",
          "Codeine",
          "Pholcodine",
          "Noscapine"
        ]
      },
      {
        id: 19,
        question: "Which medication, primarily used for its mucolytic properties, acts by breaking disulfide bonds in mucus, thus reducing its viscosity and aiding in clearance?",
        answer: "Acetylcysteine",
        options: [
          "Carbocisteine",
          "Erdosteine",
          "Acetylcysteine",
          "Bromhexine",
          "Ambroxol"
        ]
      },
      {
        id: 20,
        question: "Which medication, functioning as a short-acting muscarinic antagonist (SAMA), is used as a bronchodilator in the management of chronic obstructive pulmonary disease (COPD)?",
        answer: "Ipratropium",
        options: [
          "Tiotropium",
          "Ipratropium",
          "Aclidinium",
          "Umeclidinium",
          "Glycopyrronium"
        ]
      },
      {
        id: 21,
        question: "Which leukotriene receptor antagonist has a once-daily dosing schedule and is used in the prophylaxis and chronic treatment of asthma?",
        answer: "Montelukast",
        options: [
          "Zafirlukast",
          "Montelukast",
          "Zileuton",
          "Pranlukast",
          "Apremilast"
        ]
      },
      {
        id: 22,
        question: "Among the following, which medication, used in asthma and chronic obstructive pulmonary disease (COPD), is known for its ability to inhibit phosphodiesterase-3, resulting in bronchodilation?",
        answer: "Roflumilast",
        options: [
          "Theophylline",
          "Roflumilast",
          "Milrinone",
          "Cilomilast",
          "Rolipram"
        ]
      },
      {
        id: 23,
        question: "Which combination inhaler comprises a long-acting muscarinic antagonist (LAMA) and a long-acting beta2 agonist (LABA) and is employed in the management of chronic obstructive pulmonary disease (COPD)?",
        answer: "Umeclidinium/Vilanterol",
        options: [
          "Tiotropium/Olodaterol",
          "Aclidinium/Formoterol",
          "Umeclidinium/Vilanterol",
          "Glycopyrronium/Indacaterol",
          "Ipratropium/Salmeterol"
        ]
      },
      {
        id: 24,
        question: "Which medication is a monoclonal antibody targeting interleukin-5 (IL-5) and is used in severe eosinophilic asthma to reduce exacerbations?",
        answer: "Benralizumab",
        options: [
          "Mepolizumab",
          "Omalizumab",
          "Reslizumab",
          "Benralizumab",
          "Dupilumab"
        ]
      },
      {
        id: 25,
        question: "Among the following, which is a corticosteroid that undergoes high first-pass metabolism and is often chosen in the treatment of asthma due to its safety profile?",
        answer: "Budesonide",
        options: [
          "Fluticasone",
          "Mometasone",
          "Budesonide",
          "Beclomethasone",
          "Ciclesonide"
        ]
      },
      {
        id: 26,
        question: "Which medication is a long-acting beta2 agonist (LABA) that requires administration twice daily and is used in asthma and chronic obstructive pulmonary disease (COPD)?",
        answer: "Formoterol",
        options: [
          "Salmeterol",
          "Formoterol",
          "Arformoterol",
          "Vilanterol",
          "Indacaterol"
        ]
      },
      {
        id: 27,
        question: "Among the following, which medication, classified as a xanthine derivative, is used as a bronchodilator in asthma and chronic obstructive pulmonary disease (COPD)?",
        answer: "Aminophylline",
        options: [
          "Theobromine",
          "Aminophylline",
          "Oxtriphylline",
          "Doxofylline",
          "Enprofylline"
        ]
      },
      {
        id: 28,
        question: "Which medication, functioning as a leukotriene receptor antagonist, is associated with hepatic toxicity and requires regular liver function monitoring during treatment?",
        answer: "Zileuton",
        options: [
          "Montelukast",
          "Zafirlukast",
          "Zileuton",
          "Pranlukast",
          "Apremilast"
        ]
      },
      {
        id: 29,
        question: "Among the following, which is a LABA that has an onset of action within five minutes and is used as a rescue inhaler in acute bronchospasm?",
        answer: "Formoterol",
        options: [
          "Formoterol",
          "Salmeterol",
          "Arformoterol",
          "Vilanterol",
          "Indacaterol"
        ]
      },
      {
        id: 30,
        question: "Which corticosteroid, when used in inhalational form, is predominantly metabolized by esterases in the lung, leading to rapid clearance from the systemic circulation?",
        answer: "Ciclesonide",
        options: [
          "Beclomethasone",
          "Fluticasone",
          "Mometasone",
          "Budesonide",
          "Ciclesonide"
        ]
      },
      {
        id: 31,
        question: "Which medication is a long-acting muscarinic antagonist (LAMA) that demonstrates selectivity for M3 muscarinic receptors and is used in chronic obstructive pulmonary disease (COPD)?",
        answer: "Umeclidinium",
        options: [
          "Tiotropium",
          "Aclidinium",
          "Umeclidinium",
          "Glycopyrronium",
          "Ipratropium"
        ]
      },
      {
        id: 32,
        question: "Among the following, which corticosteroid is available in an aqueous solution formulation and requires a specialized nebulizer for administration?",
        answer: "Beclomethasone",
        options: [
          "Beclomethasone",
          "Fluticasone",
          "Mometasone",
          "Budesonide",
          "Ciclesonide"
        ]
      },
      {
        id: 33,
        question: "Which medication, used in asthma management, functions as a mast cell stabilizer and inhibits the release of inflammatory mediators?",
        answer: "Cromolyn",
        options: [
          "Montelukast",
          "Zafirlukast",
          "Zileuton",
          "Cromolyn",
          "Ipratropium"
        ]
      },
      {
        id: 34,
        question: "Which medication, primarily a mucolytic agent, is indicated for patients with cystic fibrosis to decrease viscosity and aid in mucus clearance?",
        answer: "Acetylcysteine",
        options: [
          "Carbocisteine",
          "Erdosteine",
          "Acetylcysteine",
          "Bromhexine",
          "Ambroxol"
        ]
      },
      {
        id: 35,
        question: "Among the following, which anticholinergic medication is available in a long-acting form and is administered once daily for the management of chronic obstructive pulmonary disease (COPD)?",
        answer: "Tiotropium",
        options: [
          "Ipratropium",
          "Tiotropium",
          "Aclidinium",
          "Umeclidinium",
          "Glycopyrronium"
        ]
      },
      {
        id: 36,
        question: "Which medication, used in asthma, functions by inhibiting leukotriene synthesis via 5-lipoxygenase pathway blockade?",
        answer: "Zileuton",
        options: [
          "Montelukast",
          "Zafirlukast",
          "Zileuton",
          "Pranlukast",
          "Apremilast"
        ]
      },
      {
        id: 37,
        question: "Which medication, known for its antitussive effects, acts as an opioid receptor agonist and suppresses cough reflex by acting centrally?",
        answer: "Codeine",
        options: [
          "Dextromethorphan",
          "Guaifenesin",
          "Codeine",
          "Pholcodine",
          "Noscapine"
        ]
      },
      {
        id: 38,
        question: "Among the following, which medication, a phosphodiesterase-4 inhibitor, is used specifically for the treatment of severe chronic obstructive pulmonary disease (COPD) and chronic bronchitis?",
        answer: "Roflumilast",
        options: [
          "Roflumilast",
          "Cilomilast",
          "Apremilast",
          "Rolipram",
          "Milrinone"
        ]
      },
      {
        id: 39,
        question: "Which medication, classified as a short-acting beta2 agonist (SABA), is used for both acute relief of bronchospasm and prevention of exercise-induced bronchospasm?",
        answer: "Terbutaline",
        options: [
          "Albuterol",
          "Salmeterol",
          "Terbutaline",
          "Formoterol",
          "Ipratropium"
        ]
      },
      {
        id: 40,
        question: "Which medication, used as a mucolytic agent, functions by increasing respiratory tract fluid and stimulating ciliary activity, aiding in mucus clearance?",
        answer: "Ambroxol",
        options: [
          "Bromhexine",
          "Ambroxol",
          "Acetylcysteine",
          "Carbocisteine",
          "Erdosteine"
        ]
      },
      {
        id: 41,
        question: "A patient with asthma is prescribed salbutamol (Ventolin) and theophylline concurrently. Which of the following interactions is most likely to occur?",
        answer: "Increased theophylline levels",
        options: [
          "Decreased theophylline levels",
          "Increased salbutamol levels",
          "Increased theophylline levels",
          "Decreased salbutamol levels",
          "No interaction"
        ]
      },
      {
        id: 42,
        question: "A patient on warfarin therapy for atrial fibrillation is prescribed oral corticosteroids for severe COPD exacerbation. What is the potential interaction between these medications?",
        answer: "Increased risk of bleeding",
        options: [
          "Decreased warfarin efficacy",
          "Increased warfarin efficacy",
          "Reduced corticosteroid effect",
          "Increased risk of bleeding",
          "No interaction"
        ]
      },
      {
        id: 43,
        question: "A patient taking a monoamine oxidase inhibitor (MAOI) for depression is prescribed ipratropium bromide (Atrovent) for COPD. What interaction should the healthcare provider be most concerned about?",
        answer: "Increased risk of hypertensive crisis",
        options: [
          "Increased risk of hypertensive crisis",
          "Reduced bronchodilation",
          "Excessive sedation",
          "Decreased MAOI efficacy",
          "No interaction"
        ]
      },
      {
        id: 44,
        question: "A patient with asthma is using montelukast (Singulair) and is prescribed phenytoin for epilepsy. What interaction might occur between these medications?",
        answer: "Increased montelukast levels",
        options: [
          "Decreased montelukast levels",
          "Increased montelukast levels",
          "Reduced phenytoin efficacy",
          "Increased phenytoin levels",
          "No interaction"
        ]
      },
      {
        id: 45,
        question: "A patient on a beta-blocker for hypertension develops acute bronchospasm and is prescribed a short-acting beta-agonist. What interaction might occur between these medications?",
        answer: "Increased bronchospasm",
        options: [
          "Increased bronchospasm",
          "Reduced bronchospasm",
          "Hypertension exacerbation",
          "Decreased heart rate",
          "No interaction"
        ]
      },
      {
        id: 46,
        question: "A patient on theophylline for COPD is prescribed ciprofloxacin for a respiratory tract infection. What interaction should the healthcare provider be most concerned about?",
        answer: "Increased theophylline levels",
        options: [
          "Increased theophylline levels",
          "Decreased theophylline levels",
          "Reduced ciprofloxacin efficacy",
          "Increased risk of seizures",
          "No interaction"
        ]
      },
      {
        id: 47,
        question: "A patient with asthma using inhaled corticosteroids is prescribed ritonavir for HIV infection. What interaction should the healthcare provider be aware of?",
        answer: "Decreased corticosteroid effect",
        options: [
          "Reduced ritonavir efficacy",
          "Increased risk of adrenal insufficiency",
          "Decreased corticosteroid effect",
          "Increased corticosteroid effect",
          "No interaction"
        ]
      },
      {
        id: 48,
        question: "A patient using tiotropium (Spiriva) for COPD is prescribed ketoconazole for a fungal infection. What interaction might occur between these medications?",
        answer: "Increased tiotropium levels",
        options: [
          "Reduced tiotropium efficacy",
          "Increased tiotropium levels",
          "Reduced ketoconazole efficacy",
          "Increased risk of QT prolongation",
          "No interaction"
        ]
      },
      {
        id: 49,
        question: "A patient on oral theophylline is prescribed erythromycin for a respiratory infection. What interaction should the healthcare provider be most concerned about?",
        answer: "Increased risk of theophylline toxicity",
        options: [
          "Increased risk of theophylline toxicity",
          "Reduced erythromycin efficacy",
          "Decreased theophylline levels",
          "Increased risk of QT prolongation",
          "No interaction"
        ]
      },
      {
        id: 50,
        question: "A patient using budesonide/formoterol (Symbicort) for asthma is prescribed clarithromycin for a bacterial infection. What interaction might occur between these medications?",
        answer: "Decreased budesonide levels",
        options: [
          "Decreased budesonide levels",
          "Increased formoterol levels",
          "Reduced clarithromycin efficacy",
          "Increased risk of adrenal insufficiency",
          "No interaction"
        ]
      },
      {
        id: 51,
        question: "A patient with severe liver impairment is prescribed acetylcysteine for acute paracetamol overdose. What is the primary contraindication for using acetylcysteine in this scenario?",
        answer: "Renal impairment",
        options: [
          "Hypersensitivity to acetylcysteine",
          "Renal impairment",
          "Hypertension",
          "Gastrointestinal bleeding",
          "No contraindication"
        ]
      },
      {
        id: 52,
        question: "A patient with a history of heart failure is prescribed doxofylline for COPD exacerbation. What is the primary contraindication to using doxofylline in this patient?",
        answer: "Cardiac arrhythmias",
        options: [
          "Hypertension",
          "Hepatic impairment",
          "Cardiac arrhythmias",
          "Renal impairment",
          "No contraindication"
        ]
      },
      {
        id: 53,
        question: "A patient with a known allergy to soy products is prescribed levalbuterol (Xopenex) for asthma. What is the primary contraindication to using levalbuterol in this patient?",
        answer: "Hypersensitivity to levalbuterol",
        options: [
          "Hypersensitivity to levalbuterol",
          "Thyroid disorders",
          "Hyperlipidemia",
          "Hypoglycemia",
          "No contraindication"
        ]
      },
      {
        id: 54,
        question: "A patient with a history of gastric ulcers is prescribed roflumilast for severe COPD. What is the primary contraindication for using roflumilast in this patient?",
        answer: "Gastrointestinal disorders",
        options: [
          "Hypertension",
          "Liver impairment",
          "Gastrointestinal disorders",
          "Cardiac arrhythmias",
          "No contraindication"
        ]
      },
      {
        id: 55,
        question: "A patient with a history of seizures is prescribed zafirlukast for asthma. What is the primary contraindication to using zafirlukast in this patient?",
        answer: "Psychiatric disorders",
        options: [
          "Cardiovascular disorders",
          "Hepatic impairment",
          "Psychiatric disorders",
          "Renal impairment",
          "No contraindication"
        ]
      }, 
      {
        id: 56,
        question: "A patient with a sulfa allergy is prescribed sulfasalazine for inflammatory bowel disease. What is the primary contraindication to using sulfasalazine in this patient?",
        answer: "Hypersensitivity to sulfasalazine",
        options: [
          "Hypersensitivity to sulfasalazine",
          "Renal impairment",
          "Hypertension",
          "Gastrointestinal bleeding",
          "No contraindication"
        ]
      },
      {
        id: 57,
        question: "A patient with a history of substance abuse disorder is prescribed tramadol for postoperative pain relief. What is the primary contraindication to using tramadol in this patient?",
        answer: "Psychiatric disorders",
        options: [
          "Hypertension",
          "Hepatic impairment",
          "Psychiatric disorders",
          "Gastrointestinal bleeding",
          "No contraindication"
        ]
      },
      {
        id: 58,
        question: "A patient with a known allergy to peanuts is prescribed formoterol for COPD management. What is the primary contraindication to using formoterol in this patient?",
        answer: "Hypersensitivity to formoterol",
        options: [
          "Hypertension",
          "Renal impairment",
          "Hypersensitivity to formoterol",
          "Cardiac arrhythmias",
          "No contraindication"
        ]
      },
      {
        id: 59,
        question: "A patient with a history of glaucoma is prescribed ipratropium bromide (Atrovent) for COPD. What is the primary contraindication to using ipratropium bromide in this patient?",
        answer: "Ophthalmic disorders",
        options: [
          "Hypertension",
          "Renal impairment",
          "Ophthalmic disorders",
          "Cardiac arrhythmias",
          "No contraindication"
        ]
      },
      {
        id: 60,
        question: "A patient with a history of pancreatitis is prescribed dornase alfa for cystic fibrosis. What is the primary contraindication for using dornase alfa in this patient?",
        answer: "Hypersensitivity to dornase alfa and Gastrointestinal disorders",
        options: [
          "Hypersensitivity to dornase alfa",
          "Hepatic impairment",
          "Gastrointestinal disorders",
          "Renal impairment",
          "No contraindication"
        ]
      },
      {
        id: 61,
        question: "What is the primary mechanism of action of salbutamol (albuterol) in the treatment of asthma and COPD?",
        answer: "Beta-2 adrenergic receptor agonist",
        options: [
          "Muscarinic receptor antagonist",
          "Inhibition of leukotriene synthesis",
          "Beta-2 adrenergic receptor agonist",
          "Corticosteroid anti-inflammatory effects",
          "Histamine receptor antagonist"
        ]
      },
      {
        id: 62,
        question: "What is the main mechanism of action of inhaled corticosteroids in the management of asthma and COPD?",
        answer: "Suppression of inflammatory mediators",
        options: [
          "Inhibition of leukotriene synthesis",
          "Histamine receptor antagonism",
          "Beta-2 adrenergic receptor agonism",
          "Suppression of inflammatory mediators",
          "Muscarinic receptor blockade"
        ]
      },
      {
        id: 63,
        question: "What is the primary mechanism of action of montelukast (leukotriene receptor antagonist) in asthma management?",
        answer: "Inhibition of leukotriene synthesis",
        options: [
          "Inhibition of leukotriene synthesis",
          "Beta-2 adrenergic receptor agonism",
          "Inhibition of histamine release",
          "Muscarinic receptor antagonism",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 64,
        question: "Which mechanism of action best describes the function of ipratropium bromide (anticholinergic) in the treatment of COPD?",
        answer: "Muscarinic receptor antagonism",
        options: [
          "Inhibition of leukotriene synthesis",
          "Muscarinic receptor antagonism",
          "Beta-2 adrenergic receptor agonism",
          "Inhibition of histamine release",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 65,
        question: "What is the primary mechanism of action of theophylline in the treatment of asthma and COPD?",
        answer: "Phosphodiesterase inhibition",
        options: [
          "Inhibition of leukotriene synthesis",
          "Histamine receptor antagonism",
          "Beta-2 adrenergic receptor agonism",
          "Phosphodiesterase inhibition",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 66,
        question: "What is the primary mechanism of action of beclomethasone dipropionate (corticosteroid) in the treatment of asthma and COPD?",
        answer: "Suppression of inflammatory mediators",
        options: [
          "Inhibition of leukotriene synthesis",
          "Beta-2 adrenergic receptor agonism",
          "Muscarinic receptor antagonism",
          "Suppression of inflammatory mediators",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 67,
        question: "What is the main mechanism of action of formoterol (long-acting beta-agonist) in the management of COPD?",
        answer: "Beta-2 adrenergic receptor agonism",
        options: [
          "Inhibition of leukotriene synthesis",
          "Muscarinic receptor antagonism",
          "Suppression of inflammatory mediators",
          "Beta-2 adrenergic receptor agonism",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 68,
        question: "What is the primary mechanism of action of cromolyn sodium (mast cell stabilizer) in the management of asthma?",
        answer: "Mast cell stabilization",
        options: [
          "Inhibition of leukotriene synthesis",
          "Histamine receptor antagonism",
          "Beta-2 adrenergic receptor agonism",
          "Mast cell stabilization",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 69,
        question: "What is the primary mechanism of action of omalizumab (anti-IgE monoclonal antibody) in the treatment of severe allergic asthma?",
        answer: "Neutralization of IgE antibodies",
        options: [
          "Inhibition of leukotriene synthesis",
          "Histamine receptor antagonism",
          "Mast cell stabilization",
          "Neutralization of IgE antibodies",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 70,
        question: "What is the main mechanism of action of dornase alfa (recombinant human DNase) in the treatment of cystic fibrosis?",
        answer: "Enhancement of mucociliary clearance",
        options: [
          "Inhibition of leukotriene synthesis",
          "Histamine receptor antagonism",
          "Enhancement of mucociliary clearance",
          "Mast cell stabilization",
          "Inhibition of mast cell degranulation"
        ]
      },
      {
        id: 71,
        question: "Which drug is a leukotriene receptor antagonist used in asthma?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Salmeterol",
          "Theophylline",
          "Ipratropium",
          "Zafirlukast"
        ]
      },
      {
        id: 72,
        question: "What is the mechanism of action of beclometasone dipropionate in asthma therapy?",
        answer: "Corticosteroid",
        options: [
          "Beta-2 agonism",
          "Corticosteroid",
          "Anticholinergic",
          "Leukotriene receptor antagonism",
          "Mast cell stabilization"
        ]
      },
      {
        id: 73,
        question: "Which drug is a long-acting antimuscarinic used in COPD management?",
        answer: "Tiotropium",
        options: [
          "Montelukast",
          "Salmeterol",
          "Theophylline",
          "Tiotropium",
          "Zafirlukast"
        ]
      },
      {
        id: 74,
        question: "What is the primary action of salmeterol in the treatment of asthma?",
        answer: "Bronchodilation",
        options: [
          "Bronchodilation",
          "Mucolytic effect",
          "Anti-inflammatory",
          "Mast cell stabilization",
          "Smooth muscle relaxation"
        ]
      },
      {
        id: 75,
        question: "Which drug class inhibits phosphodiesterase and is used in COPD management?",
        answer: "Phosphodiesterase inhibitors",
        options: [
          "Antimuscarinics",
          "Corticosteroids",
          "Beta-2 agonists",
          "Leukotriene receptor antagonists",
          "Phosphodiesterase inhibitors"
        ]
      },
      {
        id: 76,
        question: "Which medication is a combination of fluticasone and salmeterol?",
        answer: "Seretide",
        options: [
          "Seretide",
          "Spiriva",
          "Ventolin",
          "Symbicort",
          "Fostair"
        ]
      },
      {
        id: 77,
        question: "What is the primary advantage of using cromoglicate as an asthma treatment?",
        answer: "Mast cell stabilization",
        options: [
          "Rapid onset of action",
          "Long duration of action",
          "Potent bronchodilation",
          "Anti-inflammatory effect",
          "Mast cell stabilization"
        ]
      },
      {
        id: 78,
        question: "Which medication is a long-acting muscarinic antagonist (LAMA) used in COPD?",
        answer: "Tiotropium",
        options: [
          "Budesonide",
          "Montelukast",
          "Tiotropium",
          "Formoterol",
          "Zafirlukast"
        ]
      },
      {
        id: 79,
        question: "Which drug is a leukotriene receptor antagonist indicated for allergic rhinitis?",
        answer: "Montelukast",
        options: [
          "Montelukast",
          "Salmeterol",
          "Theophylline",
          "Ipratropium",
          "Zafirlukast"
        ]
      },
      {
        id: 80,
        question: "What is the primary action of theophylline in asthma management?",
        answer: "Smooth muscle relaxation",
        options: [
          "Mast cell stabilization",
          "Smooth muscle relaxation",
          "Anti-inflammatory",
          "Bronchodilation",
          "Leukotriene receptor antagonism"
        ]
      },
      {
        id: 81,
        question: "Which medication is a combination of formoterol and budesonide?",
        answer: "Symbicort",
        options: [
          "Symbicort",
          "Ventolin",
          "Spiriva",
          "Fostair",
          "Seretide"
        ]
      },
      {
        id: 82,
        question: "What is the primary effect of omalizumab in asthma management?",
        answer: "Reduction of IgE levels",
        options: [
          "Mast cell stabilization",
          "Inhibition of leukotriene receptors",
          "Reduction of IgE levels",
          "Anti-inflammatory",
          "Bronchodilation"
        ]
      },
      {
        id: 83,
        question: "Which drug is a short-acting beta-2 agonist used as a rescue medication in asthma?",
        answer: "Terbutaline",
        options: [
          "Salmeterol",
          "Ipratropium",
          "Montelukast",
          "Terbutaline",
          "Zafirlukast"
        ]
      },
      {
        id: 84,
        question: "What is the primary mechanism of action of aclidinium in COPD management?",
        answer: "Anticholinergic",
        options: [
          "Mast cell stabilization",
          "Beta-2 agonism",
          "Anticholinergic",
          "Anti-inflammatory",
          "Leukotriene receptor antagonism"
        ]
      },
      {
        id: 85,
        question: "Which drug class includes the medication indacaterol?",
        answer: "Long-acting beta-2 agonists",
        options: [
          "Long-acting beta-2 agonists",
          "Corticosteroids",
          "Phosphodiesterase inhibitors",
          "Short-acting muscarinic antagonists",
          "Leukotriene receptor antagonists"
        ]
      },
      {
        id: 86,
        question: "Which medication is a leukotriene receptor antagonist indicated for prophylaxis of exercise-induced bronchoconstriction?",
        answer: "Montelukast",
        options: [
          "Zafirlukast",
          "Montelukast",
          "Salmeterol",
          "Formoterol",
          "Ipratropium"
        ]
      },
      {
        id: 87,
        question: "What is the primary action of glycopyrronium in COPD management?",
        answer: "Bronchodilation",
        options: [
          "Mast cell stabilization",
          "Smooth muscle relaxation",
          "Anti-inflammatory",
          "Bronchodilation",
          "Leukotriene receptor antagonism"
        ]
      },
      {
        id: 88,
        question: "Which drug is a corticosteroid indicated for inhalation in COPD?",
        answer: "Fluticasone",
        options: [
          "Tiotropium",
          "Fluticasone",
          "Roflumilast",
          "Theophylline",
          "Omalizumab"
        ]
      },
      {
        id: 89,
        question: "Which medication is a combination of vilanterol and fluticasone?",
        answer: "Seretide",
        options: [
          "Symbicort",
          "Ventolin",
          "Fostair",
          "Seretide",
          "Spiriva"
        ]
      },
      {
        id: 90,
        question: "What is the primary effect of roflumilast in COPD management?",
        answer: "Anti-inflammatory",
        options: [
          "Mast cell stabilization",
          "Smooth muscle relaxation",
          "Anti-inflammatory",
          "Bronchodilation",
          "Leukotriene receptor antagonism"
        ]
      },
      {
        id: 91,
        question: "Which respiratory drug class is associated with the potential side effect of hypokalemia?",
        answer: "Beta-2 agonists",
        options: [
          "Corticosteroids",
          "Beta-2 agonists",
          "Antimuscarinics",
          "Leukotriene receptor antagonists",
          "Phosphodiesterase inhibitors"
        ]
      },
      {
        id: 92,
        question: "Among these drugs used in respiratory conditions, which is more likely to cause an adverse effect of paradoxical bronchospasm?",
        answer: "Tiotropium",
        options: [
          "Beclometasone",
          "Montelukast",
          "Tiotropium",
          "Theophylline",
          "Roflumilast"
        ]
      },
      {
        id: 93,
        question: "Which respiratory medication might result in the uncommon side effect of oral thrush?",
        answer: "Fluticasone",
        options: [
          "Ipratropium",
          "Salmeterol",
          "Montelukast",
          "Fluticasone",
          "Formoterol"
        ]
      },
      {
        id: 94,
        question: "Which drug class among these respiratory medications has a known potential side effect of increased intraocular pressure?",
        answer: "Inhaled corticosteroids",
        options: [
          "Long-acting beta-2 agonists",
          "Leukotriene receptor antagonists",
          "Inhaled corticosteroids",
          "Phosphodiesterase inhibitors",
          "Short-acting muscarinic antagonists"
        ]
      },
      {
        id: 95,
        question: "Among these respiratory medications, which has the potential side effect of causing a metallic taste sensation?",
        answer: "Aclidinium",
        options: [
          "Omalizumab",
          "Vilanterol",
          "Zafirlukast",
          "Aclidinium",
          "Roflumilast"
        ]
      },
      {
        id: 96,
        question: "Which drug used in respiratory conditions is more likely to cause a side effect of peripheral edema?",
        answer: "Salmeterol",
        options: [
          "Salmeterol",
          "Montelukast",
          "Tiotropium",
          "Beclometasone",
          "Formoterol"
        ]
      },
      {
        id: 97,
        question: "Among these medications for respiratory disorders, which one is associated with a potential side effect of adrenal suppression?",
        answer: "Budesonide",
        options: [
          "Montelukast",
          "Ipratropium",
          "Budesonide",
          "Roflumilast",
          "Theophylline"
        ]
      },
      {
        id: 98,
        question: "Which medication used in respiratory conditions might cause a rare side effect of arrhythmias, particularly QT prolongation?",
        answer: "Formoterol",
        options: [
          "Salmeterol",
          "Zafirlukast",
          "Tiotropium",
          "Fluticasone",
          "Formoterol"
        ]
      },
      {
        id: 99,
        question: "Among these respiratory medications, which one can potentially lead to the side effect of lactic acidosis?",
        answer: "Theophylline",
        options: [
          "Salmeterol",
          "Zafirlukast",
          "Tiotropium",
          "Theophylline",
          "Roflumilast"
        ]
      },
      {
        id: 100,
        question: "Which drug class used in respiratory conditions is more likely to cause the side effect of muscle tremors?",
        answer: "Long-acting beta-2 agonists",
        options: [
          "Leukotriene receptor antagonists",
          "Long-acting beta-2 agonists",
          "Inhaled corticosteroids",
          "Phosphodiesterase inhibitors",
          "Short-acting muscarinic antagonists"
        ]
      },
      {
        id: 101,
        question: "Among these respiratory medications, which one is associated with the potential side effect of hoarseness or voice changes?",
        answer: "Beclometasone",
        options: [
          "Salmeterol",
          "Montelukast",
          "Tiotropium",
          "Beclometasone",
          "Roflumilast"
        ]
      },
      {
        id: 102,
        question: "Which medication used in respiratory conditions might lead to the side effect of bone density reduction?",
        answer: "Budesonide",
        options: [
          "Montelukast",
          "Ipratropium",
          "Budesonide",
          "Roflumilast",
          "Theophylline"
        ]
      },
      {
        id: 103,
        question: "Among these respiratory medications, which one can potentially cause the side effect of increased susceptibility to infections?",
        answer: "Fluticasone",
        options: [
          "Zafirlukast",
          "Fluticasone",
          "Aclidinium",
          "Formoterol",
          "Roflumilast"
        ]
      },
      {
        id: 104,
        question: "Which drug class used in respiratory conditions is more likely to cause the side effect of CNS stimulation, including anxiety and tremors?",
        answer: "Beta-2 agonists",
        options: [
          "Antimuscarinics",
          "Inhaled corticosteroids",
          "Beta-2 agonists",
          "Leukotriene receptor antagonists",
          "Phosphodiesterase inhibitors"
        ]
      },
      {
        id: 105,
        question: "Among these respiratory medications, which one is associated with the potential side effect of exacerbation of gastroesophageal reflux disease (GERD)?",
        answer: "Fluticasone",
        options: [
          "Ipratropium",
          "Salmeterol",
          "Montelukast",
          "Fluticasone",
          "Formoterol"
        ]
      },
      {
        id: 106,
        question: "Which medication used in respiratory conditions might lead to the side effect of hyperglycemia or worsening of diabetes?",
        answer: "Beclometasone",
        options: [
          "Tiotropium",
          "Vilanterol",
          "Zafirlukast",
          "Beclometasone",
          "Roflumilast"
        ]
      },
      {
        id: 107,
        question: "Among these respiratory medications, which one is associated with the potential side effect of hallucinations or central nervous system effects?",
        answer: "Roflumilast",
        options: [
          "Budesonide",
          "Montelukast",
          "Tiotropium",
          "Fluticasone",
          "Roflumilast"
        ]
      },
      {
        id: 108,
        question: "Which drug class used in respiratory conditions is more likely to cause the side effect of taste disturbances, such as altered taste sensation?",
        answer: "Inhaled corticosteroids",
        options: [
          "Antimuscarinics",
          "Inhaled corticosteroids",
          "Beta-2 agonists",
          "Leukotriene receptor antagonists",
          "Phosphodiesterase inhibitors"
        ]
      },
      {
        id: 109,
        question: "Among these respiratory medications, which one is associated with the potential side effect of paradoxical vocal cord dysfunction?",
        answer: "Salmeterol",
        options: [
          "Salmeterol",
          "Ipratropium",
          "Montelukast",
          "Beclometasone",
          "Tiotropium"
        ]
      },
      {
        id: 110,
        question: "Which medication used in respiratory conditions might lead to the side effect of skin bruising or skin thinning?",
        answer: "Budesonide",
        options: [
          "Montelukast",
          "Ipratropium",
          "Budesonide",
          "Roflumilast",
          "Theophylline"
        ]
      }
            
      
                 
];

export default RespiFlashcardMain;