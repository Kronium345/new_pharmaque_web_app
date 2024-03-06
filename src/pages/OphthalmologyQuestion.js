import React, { useEffect, useState } from 'react';
import ScoreView from './ScoreView/ScoreView';
import QuizView from './QuizView/QuizView';
import { useNavigate, Link } from "react-router-dom";
import classnames from 'classnames'; // Import classnames library if not already imported
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'; // Import icons if not already imported

const OphthalmologyQuestion = () => {
  const navigate = useNavigate();
  
  const [questions, useQuestions] = useState([
    {
        question: "Which drug is a selective alpha-2 adrenergic receptor agonist used in glaucoma management that can cause a paradoxical increase in intraocular pressure (IOP) in some individuals?",
        answers: [
          { text: "Timolol" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Dorzolamide" },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Brimonidine, though effective, can cause an initial increase in IOP due to vasoconstriction."
      },
      {
        question: "What is the mechanism of action of Methazolamide, a carbonic anhydrase inhibitor used in glaucoma treatment?",
        answers: [
          { text: "Inhibition of aqueous humor production", "isCorrect": true },
          { text: "Enhancement of uveoscleral outflow" },
          { text: "Reduction of episcleral venous pressure" },
          { text: "Increase in trabecular meshwork permeability" },
          { text: "Inhibition of ciliary body contractility" }
        ],
        Explanation: "Methazolamide inhibits carbonic anhydrase in the ciliary body, reducing aqueous humor production."
      },
      {
        question: "Which medication is a prostaglandin analog used to lower IOP by enhancing uveoscleral outflow and may cause a change in iris pigmentation and eyelash growth?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dorzolamide" },
          { text: "Brinzolamide" },
          { text: "Travoprost", "isCorrect": true },
          { text: "Acetazolamide" }
        ],
        Explanation: "Travoprost, a prostaglandin analog, can alter iris pigmentation and promote eyelash growth as side effects."
      },
      {
        question: "Among the beta-blockers used in ophthalmology, which drug can potentially cause bronchospasm in patients with a history of asthma?",
        answers: [
          { text: "Betaxolol" },
          { text: "Carteolol" },
          { text: "Levobunolol" },
          { text: "Timolol", "isCorrect": true },
          { text: "Metipranolol" }
        ],
        Explanation: "Timolol is a non-selective beta-blocker that can cause bronchospasm due to its beta-2 blockade effects."
      },
      {
        question: "What is the primary action of Pilocarpine, a muscarinic receptor agonist used in glaucoma treatment?",
        answers: [
          { text: "Decrease in aqueous humor production" },
          { text: "Increase in trabecular meshwork outflow", "isCorrect": true },
          { text: "Relaxation of ciliary muscle" },
          { text: "Enhancement of uveoscleral outflow" },
          { text: "Stimulation of alpha-2 adrenergic receptors" }
        ],
        Explanation: "Pilocarpine primarily enhances trabecular meshwork outflow, aiding in lowering IOP."
      },
      {
        question: "Which drug inhibits histamine release and exerts an anti-allergic effect when applied topically in the eye?",
        answers: [
          { text: "Nedocromil" },
          { text: "Lodoxamide", "isCorrect": true },
          { text: "Olopatadine" },
          { text: "Ketotifen" },
          { text: "Cromolyn" }
        ],
        Explanation: "Lodoxamide inhibits histamine release, aiding in the management of ocular allergies."
      },
      {
        question: "Which medication functions by reducing aqueous humor production and is contraindicated in patients with sulfa allergy due to its chemical structure?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost" },
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Travoprost" },
          { text: "Brinzolamide" }
        ],
        Explanation: "Dorzolamide, a carbonic anhydrase inhibitor, is a sulfa-based drug used in glaucoma but contraindicated in sulfa-allergic individuals."
      },
      {
        question: "What is the mechanism of action of Brinzolamide, a carbonic anhydrase inhibitor used in glaucoma treatment?",
        answers: [
          { text: "Increase in uveoscleral outflow" },
          { text: "Inhibition of aqueous humor production", "isCorrect": true },
          { text: "Relaxation of ciliary muscle" },
          { text: "Enhancement of trabecular meshwork outflow" },
          { text: "Reduction of episcleral venous pressure" }
        ],
        Explanation: "Brinzolamide inhibits carbonic anhydrase, decreasing aqueous humor production in the eye."
      },
      {
        question: "Among the following drugs, which one acts as a reversible acetylcholinesterase inhibitor used in the treatment of glaucoma?",
        answers: [
          { text: "Echothiophate", "isCorrect": true },
          { text: "Physostigmine" },
          { text: "Carbachol" },
          { text: "Pilocarpine" },
          { text: "Demecarium" }
        ],
        Explanation: "Echothiophate is a reversible acetylcholinesterase inhibitor employed in glaucoma management."
      },
      {
        question: "Which medication works by stimulating alpha-2 adrenergic receptors, leading to a reduction in aqueous humor production and an increase in uveoscleral outflow?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dipivefrin" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Epinephrine" },
          { text: "Clonidine" }
        ],
        Explanation: "Brimonidine's primary action involves stimulating alpha-2 adrenergic receptors to lower IOP."
      },
      {
        question: "Among the following prostaglandin analogs, which one has a dosing schedule requiring administration only once daily due to its longer duration of action?",
        answers: [
          { text: "Bimatoprost" },
          { text: "Latanoprost" },
          { text: "Travoprost", "isCorrect": true },
          { text: "Tafluprost" },
          { text: "Unoprostone" }
        ],
        Explanation: "Travoprost's extended duration of action allows for once-daily dosing in glaucoma treatment."
      },
      {
        question: "Which medication is a sympathomimetic agent used in ophthalmology that can potentially cause systemic side effects such as hypertension and tachycardia?",
        answers: [
          { text: "Dipivefrin" },
          { text: "Apraclonidine" },
          { text: "Brimonidine" },
          { text: "Epinephrine", "isCorrect": true },
          { text: "Naphazoline" }
        ],
        Explanation: "Epinephrine, a sympathomimetic drug, can lead to systemic side effects when used in the eye."
      },
      {
        question: "Among the following alpha-agonists used in glaucoma, which one has the highest affinity for alpha-2 adrenergic receptors?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Clonidine" },
          { text: "Naphazoline" },
          { text: "Dipivefrin" }
        ],
        Explanation: "Brimonidine has a high affinity for alpha-2 adrenergic receptors compared to other options listed."
      },
      {
        question: "Which medication, when used in ophthalmology, acts by increasing outflow of aqueous humor through the uveoscleral pathway rather than affecting conventional outflow pathways?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine" },
          { text: "Latanoprost", "isCorrect": true },
          { text: "Apraclonidine" }
        ],
        Explanation: "Latanoprost primarily enhances aqueous humor outflow via the uveoscleral pathway."
      },
      {
        question: "Among the following, which medication is a prodrug that gets converted into its active metabolite, timolol, after topical application in the eye?",
        answers: [
          { text: "Levobunolol" },
          { text: "Betaxolol" },
          { text: "Carteolol" },
          { text: "Dipivefrin", "isCorrect": true },
          { text: "Metipranolol" }
        ],
        Explanation: "Dipivefrin is a prodrug converted to its active form, timolol, after ocular administration."
      },
      {
        question: "Which drug, used in glaucoma treatment, is a selective alpha-1 adrenergic receptor agonist that enhances trabecular and uveoscleral outflow?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Brimonidine" },
          { text: "Dipivefrin", "isCorrect": true },
          { text: "Naphazoline" },
          { text: "Epinephrine" }
        ],
        Explanation: "Dipivefrin is a selective alpha-1 adrenergic receptor agonist aiding in enhancing outflow in glaucoma."
      },
      {
        question: "Among the following, which medication is an irreversible acetylcholinesterase inhibitor used in the management of glaucoma?",
        answers: [
          { text: "Carbachol" },
          { text: "Echothiophate", "isCorrect": true },
          { text: "Physostigmine" },
          { text: "Demecarium" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Echothiophate is an irreversible acetylcholinesterase inhibitor employed in glaucoma therapy."
      },
      {
        question: "What is the primary action of Carteolol, a non-selective beta-blocker used in ophthalmology?",
        answers: [
          { text: "Inhibition of aqueous humor production", "isCorrect": true },
          { text: "Increase in uveoscleral outflow" },
          { text: "Reduction of episcleral venous pressure" },
          { text: "Enhancement of trabecular meshwork outflow" },
          { text: "Relaxation of ciliary muscle" }
        ],
        Explanation: "Carteolol mainly reduces aqueous humor production as a non-selective beta-blocker."
      },
      {
        question: "Which medication, among the listed beta-blockers, is more cardioselective and is considered safer for patients with respiratory conditions like asthma?",
        answers: [
          { text: "Timolol" },
          { text: "Levobunolol" },
          { text: "Betaxolol", "isCorrect": true },
          { text: "Carteolol" },
          { text: "Metipranolol" }
        ],
        Explanation: "Betaxolol is relatively cardioselective, making it a safer choice for patients with respiratory conditions."
      },
      {
        question: "Among the following drugs, which one is a sympathomimetic agent used in ophthalmology that gets metabolized into epinephrine in the eye, thereby reducing IOP?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dipivefrin", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Epinephrine" },
          { text: "Naphazoline" }
        ],
        Explanation: "Dipivefrin is metabolized into epinephrine in the eye, leading to its IOP-lowering effects."
      },
      {
        question: "Which drug, belonging to the group of carbonic anhydrase inhibitors, is available in a sustained-release formulation for twice-daily dosing in the management of glaucoma?",
        answers: [
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Acetazolamide" },
          { text: "Brinzolamide" },
          { text: "Methazolamide" },
          { text: "Dichlorphenamide" }
        ],
        Explanation: "Dorzolamide is available in a sustained-release formulation for twice-daily dosing."
      },
      {
        question: "Among the listed drugs used in glaucoma treatment, which one can cause blurred vision and should be used cautiously in patients operating heavy machinery or driving due to its potential to impair visual acuity?",
        answers: [
          { text: "Timolol" },
          { text: "Pilocarpine" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Apraclonidine" },
          { text: "Latanoprost" }
        ],
        Explanation: "Brimonidine can cause blurred vision, impacting activities requiring clear vision."
      },
      {
        question: "What is the primary mechanism of action of Latanoprostene bunod, a newer agent used in glaucoma management?",
        answers: [
          { text: "Inhibition of prostaglandin synthesis" },
          { text: "Enhancement of ciliary muscle relaxation" },
          { text: "Activation of alpha-1 adrenergic receptors" },
          { text: "Increase in nitric oxide signaling", "isCorrect": true },
          { text: "Stimulation of uveoscleral outflow" }
        ],
        Explanation: "Latanoprostene bunod releases nitric oxide, aiding in enhancing aqueous humor outflow."
      },
      {
        question: "Among the listed medications, which one is a direct cholinergic agonist that also has a mydriatic effect due to its action on the iris sphincter muscle?",
        answers: [
          { text: "Physostigmine" },
          { text: "Carbachol", "isCorrect": true },
          { text: "Pilocarpine" },
          { text: "Demecarium" },
          { text: "Echothiophate" }
        ],
        Explanation: "Pilocarpine acts as a direct cholinergic agonist with mydriatic effects."
      },
      {
        question: "Which drug used in glaucoma management has a primary action involving the stimulation of beta-2 adrenergic receptors, potentially leading to systemic cardiovascular effects?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dipivefrin", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Epinephrine" },
          { text: "Naphazoline" }
        ],
        Explanation: "Dipivefrin stimulates beta-2 adrenergic receptors, leading to systemic cardiovascular effects."
      },
      {
        question: "Among the following, which medication works by inhibiting histamine release and is used for its anti-allergic effects in ophthalmology?",
        answers: [
          { text: "Lodoxamide", "isCorrect": true },
          { text: "Nedocromil" },
          { text: "Olopatadine" },
          { text: "Ketotifen" },
          { text: "Cromolyn" }
        ],
        Explanation: "Lodoxamide inhibits histamine release, aiding in managing ocular allergies."
      },
      {
        question: "Which medication, when used in glaucoma, primarily acts by reducing aqueous humor production through the inhibition of carbonic anhydrase enzymes?",
        answers: [
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Brimonidine" },
          { text: "Timolol" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide reduces aqueous humor production by inhibiting carbonic anhydrase."
      },
      {
        question: "What is the primary pharmacological effect of Betaxolol, a beta-blocker used in ophthalmology, compared to non-selective beta-blockers?",
        answers: [
          { text: "Reduction in aqueous humor production", "isCorrect": true },
          { text: "Increase in uveoscleral outflow" },
          { text: "Relaxation of ciliary muscle" },
          { text: "Enhancement of trabecular meshwork outflow" },
          { text: "Lowering of episcleral venous pressure" }
        ],
        Explanation: "Betaxolol primarily reduces aqueous humor production as a cardioselective beta-blocker."
      },
      {
        question: "Among the listed medications, which one is a prodrug converted to its active metabolite, brimonidine, after ocular application?",
        answers: [
          { text: "Dipivefrin" },
          { text: "Apraclonidine", "isCorrect": true },
          { text: "Brinzolamide" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Apraclonidine is a prodrug converted to brimonidine after ocular administration."
      },
      {
        question: "Which medication, used in glaucoma treatment, is an alpha-2 adrenergic receptor agonist that has a greater selectivity for the alpha-2 receptor subtype, thereby reducing systemic side effects?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dipivefrin" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Epinephrine" },
          { text: "Naphazoline" }
        ],
        Explanation: "Brimonidine has higher selectivity for alpha-2 adrenergic receptors, reducing systemic side effects."
      },
      {
        question: "Among the following, which medication is a derivative of prostaglandin F2-alpha used in glaucoma therapy?",
        answers: [
          { text: "Bimatoprost", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Travoprost" },
          { text: "Tafluprost" },
          { text: "Unoprostone" }
        ],
        Explanation: "Bimatoprost is a derivative of prostaglandin F2-alpha employed in glaucoma treatment."
      },
      {
        question: "What is the primary mechanism of action of Acetazolamide when used in glaucoma management?",
        answers: [
          { text: "Inhibition of aqueous humor production", "isCorrect": true },
          { text: "Enhancement of uveoscleral outflow" },
          { text: "Reduction of episcleral venous pressure" },
          { text: "Increase in trabecular meshwork permeability" },
          { text: "Relaxation of ciliary muscle" }
        ],
        Explanation: "Acetazolamide inhibits carbonic anhydrase, reducing aqueous humor production in the eye."
      },
      {
        question: "Among the listed sympathomimetic agents used in ophthalmology, which one can potentially cause rebound hyperemia upon discontinuation after prolonged use?",
        answers: [
          { text: "Apraclonidine" },
          { text: "Dipivefrin" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Epinephrine" },
          { text: "Naphazoline" }
        ],
        Explanation: "Brimonidine, upon discontinuation after prolonged use, can lead to rebound hyperemia."
      },
      {
        question: "Which medication, among the beta-blockers used in ophthalmology, has intrinsic sympathomimetic activity and is less likely to cause bradycardia compared to other non-selective beta-blockers?",
        answers: [
          { text: "Levobunolol" },
          { text: "Betaxolol" },
          { text: "Timolol" },
          { text: "Carteolol", "isCorrect": true },
          { text: "Metipranolol" }
        ],
        Explanation: "Carteolol has intrinsic sympathomimetic activity, reducing the likelihood of bradycardia compared to non-selective beta-blockers."
      },
      {
        question: "Among the following drugs, which one is a quaternary ammonium compound and a cholinergic agonist used in glaucoma management?",
        answers: [
          { text: "Pilocarpine" },
          { text: "Carbachol", "isCorrect": true },
          { text: "Echothiophate" },
          { text: "Physostigmine" },
          { text: "Demecarium" }
        ],
        Explanation: "Echothiophate is a quaternary ammonium compound used as a cholinergic agonist in glaucoma therapy."
      },
      {
        question: "Which medication, when used in ophthalmology, primarily enhances aqueous humor outflow by affecting the trabecular meshwork and Schlemm's canal?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Apraclonidine" }
        ],
        Explanation: "Pilocarpine primarily affects the trabecular meshwork and Schlemm's canal to enhance aqueous humor outflow."
      },
      {
        question: "Among the listed drugs, which one is a dual-action alpha-2 adrenergic receptor agonist and a presynaptic alpha-2 adrenergic receptor antagonist used in glaucoma therapy?",
        answers: [
          { text: "Apraclonidine", "isCorrect": true },
          { text: "Dipivefrin" },
          { text: "Brimonidine" },
          { text: "Epinephrine" },
          { text: "Naphazoline" }
        ],
        Explanation: "Apraclonidine functions as a dual-action alpha-2 adrenergic receptor agonist and presynaptic alpha-2 adrenergic receptor antagonist."
      },
      {
        question: "What is the primary action of Brimonidine, an alpha-2 adrenergic receptor agonist used in glaucoma treatment, apart from reducing aqueous humor production?",
        answers: [
          { text: "Increase in uveoscleral outflow", "isCorrect": true },
          { text: "Stimulation of ciliary muscle" },
          { text: "Enhancement of trabecular meshwork outflow" },
          { text: "Relaxation of episcleral venous pressure" },
          { text: "Reduction in episcleral venous pressure" }
        ],
        Explanation: "Brimonidine also increases uveoscleral outflow, aiding in lowering IOP."
      },
      {
        question: "Among the following prostaglandin analogs used in glaucoma, which one has the shortest duration of action and requires twice-daily dosing?",
        answers: [
          { text: "Bimatoprost" },
          { text: "Latanoprost" },
          { text: "Travoprost" },
          { text: "Tafluprost", "isCorrect": true },
          { text: "Unoprostone" }
        ],
        Explanation: "Tafluprost has a shorter duration of action, necessitating twice-daily dosing compared to other prostaglandin analogs."
      },
      {
        question: "Which medication, used in glaucoma treatment, is a reversible acetylcholinesterase inhibitor with a tertiary amine structure that increases outflow of aqueous humor?",
        answers: [
          { text: "Echothiophate" },
          { text: "Physostigmine" },
          { text: "Carbachol" },
          { text: "Pilocarpine" },
          { text: "Demecarium", "isCorrect": true }
        ],
        Explanation: "Demecarium is a reversible acetylcholinesterase inhibitor that enhances aqueous humor outflow."
      },
      {
        question: "A patient comes to the pharmacy complaining of redness and irritation in their eyes due to seasonal allergies. Which OTC medication would you recommend to alleviate their symptoms?",
        answers: [
          { text: "Artificial tears" },
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Antihistamine eye drops are suitable for managing allergic symptoms in the eyes."
      },
      {
        question: "A customer wants relief from dry eyes and asks for a recommendation for an OTC product to provide moisture and relief. Which product would be most appropriate to suggest?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears are designed to provide moisture and relieve dry eyes."
      },
      {
        question: "A patient is experiencing mild eye strain and wants an OTC solution for relief. Which recommendation would be most appropriate to reduce eye strain?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel", "isCorrect": true },
          { text: "Artificial tears" },
          { text: "Antihistamine eye drops" },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Lubricating eye gel can help relieve mild eye strain and discomfort."
      },
      {
        question: "A customer presents with symptoms of minor eye itching and asks for an OTC option to soothe the irritation. What would be the most suitable recommendation?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antibiotic eye ointment" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help soothe minor eye itching and irritation."
      },
      {
        question: "A patient seeks advice for their child with conjunctivitis symptoms. Which OTC eye medication would you suggest as a suitable option for bacterial conjunctivitis in children?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears" },
          { text: "Lubricating eye gel" },
          { text: "Antibiotic eye ointment", "isCorrect": true }
        ],
        Explanation: "Antibiotic eye ointment is suitable for bacterial conjunctivitis in children."
      },
      {
        question: "A customer reports excessive eye redness after prolonged screen time. What OTC eye product can help reduce redness caused by eye strain?",
        answers: [
          { text: "Artificial tears", "isCorrect": true },
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate redness caused by eye strain."
      },
      {
        question: "A patient experiences watery eyes due to exposure to wind and seeks an OTC solution. What would be the most appropriate recommendation to alleviate the watery eyes?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate watery eyes caused by wind exposure."
      },
      {
        question: "A customer seeks relief from eye redness due to mild irritation from swimming in a chlorinated pool. What OTC eye product would be most suitable to reduce the redness?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antibiotic eye ointment" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help reduce redness from mild irritation caused by swimming in a chlorinated pool."
      },
      {
        question: "A patient complains of eye discomfort and a gritty sensation due to prolonged contact lens wear. What OTC eye product can provide relief from these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel", "isCorrect": true },
          { text: "Artificial tears" },
          { text: "Antihistamine eye drops" },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can provide relief from discomfort and a gritty sensation caused by contact lens wear."
      },
      {
        question: "A customer seeks an OTC recommendation for minor eye itching caused by exposure to dust. What product would be most appropriate to alleviate this symptom?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help alleviate minor itching caused by dust exposure."
      },
      {
        question: "A patient presents with symptoms of mild eye irritation after exposure to smoke. What would be an appropriate suggestion to alleviate discomfort from smoke exposure?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antihistamine eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate mild discomfort from smoke exposure."
      },
      {
        question: "A customer asks for an OTC recommendation to relieve eye dryness caused by central heating in their home. What product would be most suitable to alleviate this dryness?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel", "isCorrect": true },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears" },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Lubricating eye gel can help relieve dryness caused by central heating."
      },
      {
        question: "A patient seeks advice for minor eye redness and discomfort due to exposure to pollen. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help alleviate minor redness and discomfort caused by pollen exposure."
      },
      {
        question: "A customer complains of mild eye irritation and discomfort after working on a computer for several hours. What OTC eye product can provide relief from this discomfort?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate discomfort from prolonged computer use."
      },
      {
        question: "A patient reports minor eye redness and itching after exposure to pet dander. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help alleviate redness and itching caused by pet dander exposure."
      },
      {
        question: "A customer seeks advice for eye discomfort and redness after a day of swimming in a freshwater lake. What OTC eye product would be most suitable to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help alleviate discomfort and redness after swimming in a freshwater lake."
      },
      {
        question: "A patient presents with minor eye irritation and discomfort due to exposure to cold wind. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate irritation caused by exposure to cold wind."
      },
      {
        question: "A customer asks for an OTC recommendation to soothe mild eye redness after wearing eye makeup all day. What product would be most suitable to alleviate this redness?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help soothe mild redness caused by wearing eye makeup."
      },
      {
        question: "Among patients with a history of sulfa allergy, which ocular medication should be avoided due to its chemical structure?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost" },
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Timolol" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide, due to its sulfa-based structure, should be avoided in patients with sulfa allergy."
      },
      {
        question: "Which ocular medication is contraindicated in patients with a history of bronchospasm or asthma due to its potential to exacerbate these conditions?",
        answers: [
          { text: "Pilocarpine" },
          { text: "Brimonidine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Dorzolamide" }
        ],
        Explanation: "Timolol, a non-selective beta-blocker, is contraindicated in patients with bronchospasm or asthma."
      },
      {
        question: "Among patients with a history of severe cardiovascular diseases such as heart block or bradycardia, which ocular medication is contraindicated due to its systemic effects on heart rate and rhythm?",
        answers: [
          { text: "Pilocarpine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Dorzolamide" },
          { text: "Latanoprost" }
        ],
        Explanation: "Timolol, as a beta-blocker, can affect heart rate and is contraindicated in severe cardiovascular conditions."
      },
      {
        question: "Which ocular medication should be avoided in individuals with a known hypersensitivity to prostaglandins, as it is a prostaglandin analog itself?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost", "isCorrect": true },
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Latanoprost, being a prostaglandin analog, should be avoided in those hypersensitive to prostaglandins."
      },
      {
        question: "Among patients with a history of depression or severe mood disorders, which ocular medication is contraindicated due to its potential to cause central nervous system effects?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Brimonidine is contraindicated in individuals with a history of severe mood disorders or depression due to its potential CNS effects."
      },
      {
        question: "Which ocular medication should be avoided in patients with a known allergy to beta-blockers due to its potential cross-reactivity?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Brimonidine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Timolol, a beta-blocker, should be avoided in patients allergic to beta-blockers due to potential cross-reactivity."
      },
      {
        question: "Among patients with a history of urinary retention or bladder obstruction, which ocular medication is contraindicated due to its potential systemic effects on urinary function?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost" },
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine", "isCorrect": true }
        ],
        Explanation: "Pilocarpine is contraindicated in individuals with urinary retention or bladder obstruction due to its potential systemic effects on urinary function."
      },
      {
        question: "Which ocular medication is contraindicated in patients with severe renal impairment due to its potential to exacerbate renal dysfunction?",
        answers: [
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Timolol" },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide is contraindicated in severe renal impairment as it can exacerbate renal dysfunction."
      },
      {
        question: "Among patients with a history of severe liver disease or hepatic impairment, which ocular medication is contraindicated due to its potential to worsen liver function?",
        answers: [
          { text: "Timolol" },
          { text: "Brimonidine" },
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide is contraindicated in severe liver disease or hepatic impairment due to its potential to worsen liver function."
      },
      {
        question: "Which ocular medication is contraindicated in individuals with a known hypersensitivity to alpha-2 adrenergic agonists due to potential allergic reactions?",
        answers: [
          { text: "Timolol" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Dorzolamide" },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Brimonidine should be avoided in patients with known hypersensitivity to alpha-2 adrenergic agonists."
      },
      {
        question: "A customer seeks advice for eye discomfort and redness after a day of swimming in a freshwater lake. What OTC eye product would be most suitable to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help alleviate discomfort and redness after swimming in a freshwater lake."
      },
      {
        question: "A patient presents with minor eye irritation and discomfort due to exposure to cold wind. What OTC eye product would be most appropriate to alleviate these symptoms?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Antibiotic eye ointment" }
        ],
        Explanation: "Artificial tears can help alleviate irritation caused by exposure to cold wind."
      },
      {
        question: "A customer asks for an OTC recommendation to soothe mild eye redness after wearing eye makeup all day. What product would be most suitable to alleviate this redness?",
        answers: [
          { text: "Decongestant eye drops" },
          { text: "Antibiotic eye ointment" },
          { text: "Artificial tears", "isCorrect": true },
          { text: "Lubricating eye gel" },
          { text: "Antihistamine eye drops" }
        ],
        Explanation: "Artificial tears can help soothe mild redness caused by wearing eye makeup."
      },
      {
        question: "Among patients with a history of sulfa allergy, which ocular medication should be avoided due to its chemical structure?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost" },
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Timolol" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide, due to its sulfa-based structure, should be avoided in patients with sulfa allergy."
      },
      {
        question: "Which ocular medication is contraindicated in patients with a history of bronchospasm or asthma due to its potential to exacerbate these conditions?",
        answers: [
          { text: "Pilocarpine" },
          { text: "Brimonidine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Dorzolamide" }
        ],
        Explanation: "Timolol, a non-selective beta-blocker, is contraindicated in patients with bronchospasm or asthma."
      },
      {
        question: "Among patients with a history of severe cardiovascular diseases such as heart block or bradycardia, which ocular medication is contraindicated due to its systemic effects on heart rate and rhythm?",
        answers: [
          { text: "Pilocarpine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Dorzolamide" },
          { text: "Latanoprost" }
        ],
        Explanation: "Timolol, as a beta-blocker, can affect heart rate and is contraindicated in severe cardiovascular conditions."
      },
      {
        question: "Which ocular medication should be avoided in individuals with a known hypersensitivity to prostaglandins, as it is a prostaglandin analog itself?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost", "isCorrect": true },
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Latanoprost, being a prostaglandin analog, should be avoided in those hypersensitive to prostaglandins."
      },
      {
        question: "Among patients with a history of depression or severe mood disorders, which ocular medication is contraindicated due to its potential to cause central nervous system effects?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Brimonidine is contraindicated in individuals with a history of severe mood disorders or depression due to its potential CNS effects."
      },
      {
        question: "Which ocular medication should be avoided in patients with a known allergy to beta-blockers due to its potential cross-reactivity?",
        answers: [
          { text: "Dorzolamide" },
          { text: "Brimonidine" },
          { text: "Timolol", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Timolol, a beta-blocker, should be avoided in patients allergic to beta-blockers due to potential cross-reactivity."
      },
      {
        question: "Among patients with a history of urinary retention or bladder obstruction, which ocular medication is contraindicated due to its potential systemic effects on urinary function?",
        answers: [
          { text: "Brimonidine" },
          { text: "Latanoprost" },
          { text: "Dorzolamide" },
          { text: "Timolol" },
          { text: "Pilocarpine", "isCorrect": true }
        ],
        Explanation: "Pilocarpine is contraindicated in individuals with urinary retention or bladder obstruction due to its potential systemic effects on urinary function."
      },
      {
        question: "Which ocular medication is contraindicated in patients with severe renal impairment due to its potential to exacerbate renal dysfunction?",
        answers: [
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Brimonidine" },
          { text: "Timolol" },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide is contraindicated in severe renal impairment as it can exacerbate renal dysfunction."
      },
      {
        question: "Among patients with a history of severe liver disease or hepatic impairment, which ocular medication is contraindicated due to its potential to worsen liver function?",
        answers: [
          { text: "Timolol" },
          { text: "Brimonidine" },
          { text: "Dorzolamide", "isCorrect": true },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Dorzolamide is contraindicated in severe liver disease or hepatic impairment due to its potential to worsen liver function."
      },
      {
        question: "Which ocular medication is contraindicated in individuals with a known hypersensitivity to alpha-2 adrenergic agonists due to potential allergic reactions?",
        answers: [
          { text: "Timolol" },
          { text: "Brimonidine", "isCorrect": true },
          { text: "Dorzolamide" },
          { text: "Latanoprost" },
          { text: "Pilocarpine" }
        ],
        Explanation: "Brimonidine should be avoided in patients with known hypersensitivity to alpha-2 adrenergic agonists."
      }]) 

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

export default OphthalmologyQuestion;
