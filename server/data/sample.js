
export const SAMPLE_DATA = {
  name: "Sample Questions",
  image: "uploads/images/Pharmacists.png",
  questions: [
    {
      question: "You are called by the community GP regarding the care of Mr Patel, a 47 year old gentleman with supraventricular tachycardia (SVT). The GP tells you he is currently taking adenosine. What is the primary role of adenosine in the treatment of SVT?",
      answers: [
        { text: "Prolonging QT interval" },
        { text: "Slowing atrial contraction" },
        { text: "Increasing ventricular automaticity" },
        { text: "Restoring sinus rhythm", isCorrect: true },
        { text: "Inhibiting atrial repolarisation" }
      ],
      explanation: "Adenosine can transiently slow the sinus rate, increase AV node refractoriness, and restore sinus rhythm in SVT."
    },
    {
      question: "Mr Smith is a 56 year old man who has been prescribed Adenosine by the on-call doctor, he rememebrs being told about a unusual sensation, but can’t remember what he was told. What sensation is often associated with adenosine administration, and how long does it typically last?",
      answers: [
        { text: "Warmth and tingling lasting hours" },
        { text: "Euphoria and excitement lasting hours" },
        { text: "A sinking feeling in the chest lasting seconds", isCorrect: true },
        { text: "Increased heart rate and palpitations lasting minutes" },
        { text: "Nausea and vomiting lasting hours" }
      ],
      explanation: "Adenosine administration is often accompanied by a deeply unpleasant sensation described as a sinking feeling in the chest, along with breathlessness and a sense of 'impending doom,' which typically lasts for about 30 seconds."
    },
    {
      question: "What is the primary reason for the transient nature of adenosine's effect?",
      answers: [
        { text: "Rapid excretion through the kidneys" },
        { text: "Rapid uptake by cells", isCorrect: true },
        { text: "Inhibition of hepatic metabolism" },
        { text: "Interaction with plasma proteins" },
        { text: "Slow onset of action" }
      ],
      explanation: "Adenosine's effect is short-lived due to its rapid uptake by cells, leading to a half-life in plasma of less than 10 seconds "
    },
    {
      question: "What is the primary mechanism of action of adrenaline on the cardiovascular system?",
      answers: [
        { text: "Blockade of α-adrenoceptors" },
        { text: "Stimulation of muscarinic receptors" },
        { text: "Inhibition of β1-adrenoceptors" },
        { text: "Agonism at α1-, α2-, β1-, and β2-adrenoceptors", isCorrect: true },
        { text: "Activation of histamine receptors" }
      ],
      explanation: "Adrenaline is a potent agonist of α1-, α2-, β1-, and β2-adrenoceptors, leading to various sympathetic effects on the cardiovascular system."
    },
    {
      question: "In which scenario is the use of adrenaline for immediate management appropriate?",
      answers: [
        { text: "Non-blanching rash" },
        { text: "Acute allergic rhinitis" },
        { text: "Cardiac arrest", isCorrect: true },
        { text: "Severe anxiety" },
        { text: "Pedal Oedema " }
      ],
      explanation: "Adrenaline is used in cardiac arrest as part of Advanced Life Support (ALS) for shockable and non-shockable rhythms."
    },
    {
      question: "What is the recommended route of administration for adrenaline in anaphylaxis?",
      answers: [
        { text: "Intravenous (IV)" },
        { text: "Intramuscular (IM)", isCorrect: true },
        { text: "Oral" },
        { text: "Subcutaneous (SC) " },
        { text: "Transderman patch" }
      ],
      explanation: "Adrenaline is given intramuscularly (IM) for immediate management of anaphylaxis."
    },
    {
      question: "In anaphylaxis, which of the following effects of adrenaline is crucial for its life-saving action",
      answers: [
        { text: "Inhibition of histamine release" },
        { text: "Peripheral vasodilation" },
        { text: "Decreased heart rate" },
        { text: "Vasoconstriction", isCorrect: true },
        { text: "Bronchoconstriction" }
      ],
      explanation: "The vasoconstriction effects of adrenaline can counteract widespread vasodilation in anaphylaxis, preventing hypotension and cirulatory collapse"
    },
    {
      question: "Which type of cardiac rhythm in cardiac arrest warrants the administration of adrenaline in ALS treatment?",
      answers: [
        { text: "Sinus bradycardia" },
        { text: "Atrial fibrillation" },
        { text: "Ventricular fibrillation", isCorrect: true },
        { text: "First-degree AV block" },
        { text: "Supraventricular tachycardia " }
      ],
      explanation: "Ventricular fibrillation"
    },
    {
      question: "A patient and their parent has walked into the pharmacy with acute swelling of the lips, eyes and reports to have sudden difficulty in breathing. You suspect he is having an acute anaphylactic reaction and prepare to administer adrenaline. You confirm from the parent that he is 13 years old. What strength of adrenaline would be administered accoriding to his age?",
      answers: [
        { text: "300 micrograms IM" },
        { text: "150 micrograms IM " },
        { text: "500 micrograms IM ", isCorrect: true },
        { text: "100 micrograms IM" },
        { text: "1000 micrograms IM" }
      ],
      explanation: "As this child is over the age of 12, 500 micrograms IM is the correct answer. Adults and children over 12 must be administered 500 micrograms IM "
    },
    {
      question: "In which condition is nebulized adrenaline recommended as a symptomatic treatment for inadequate response to corticosteroids?",
      answers: [
        { text: "Hypertensive crisis " },
        { text: "Croup", isCorrect: true },
        { text: "Gastrooesophageal reflux disease" },
        { text: "Chronic obstructive pulmonary disease (COPD) exacerbation" },
        { text: "Allergic conjunctivitis " }
      ],
      explanation: "Nebulised adrenaline is a recommended treatment for children with croup whose condition has not responded adequately to systemic corticosteroids? "
    },
    {
      question: "What is the recommended dose and preferred route of of adrenaline for anaphylaxis in adults?",
      answers: [
        { text: "1mg IV" },
        { text: "0.5mg IM" },
        { text: "1mg SC" },
        { text: "500 micrograms IM ", isCorrect: true },
        { text: "1mg IM" }
      ],
      explanation: "The recommended dose of adrenaline for anaphylaxis in adults is 500 micrograms administered IM to the anterolateral thigh"
    },
    {
      question: "What is the potential adverse effect of administering adrenaline too early in cardiac arrest with shockable rhythms?",
      answers: [
        { text: "Hypotension" },
        { text: "Arrhythmias", isCorrect: true },
        { text: "Tachycardia" },
        { text: "Hypertension" },
        { text: "Peripheral vasodilation" }
      ],
      explanation: "There is evidence of harm if adrenaline is administered too early in cardiac arrest with shockable rhythms, potentially leading to arrhythmias"
    },
    {
      question: "You are a pharmacist working a late shift. Whilst on your shift, a patient is rushed in by their friend who suspects they are having an acute anaphylactic attack. You are told an ambulance is on the way, and that an epipen has been administered 2 minutes ago. How long should you wait until administering a second epipen?",
      answers: [
        { text: "Immediately, as the patient continues to have an anaphylactic attack" },
        { text: "In 3 minutes time ", isCorrect: true },
        { text: "In 8 minutes " },
        { text: "13 minutes" },
        { text: "There is no need for another dose as the patient has already been administered one dose " }
      ],
      explanation: "This is in line with guidelines, which state that during anaphylaxis, the second and subsequent doses of adrenaline should be given every 5 minutes. Remember that after the initial two doses, patients may be put up on an IV infusion of adrenaline, this is known as refractory anaphylaxis "
    },
    {
      question: "In which situation should IV adrenaline be administered in anaphylaxis?",
      answers: [
        { text: "Only if anaphylaxis progresses to cardiac arrest", isCorrect: true },
        { text: "It is the first line treatment for anaphylaxis " },
        { text: "First line treatment for mild-allergic reactions" },
        { text: "As a pre-treatment for anaphylaxis " },
        { text: "In high-dependency environments only " }
      ],
      explanation: "Adrenaline IV should only be used if anaphylaxis progresses to cardiac arrest. Remember, adrenaline is recommded for the treatment of cardiac arrest anyway as per resus council guidelines"
    },
    {
      question: "What is the primary mechanism of action of aldosterone antagnosists? ",
      answers: [
        { text: "Activation of mineralocorticoid receptors" },
        { text: "Inhibition of sodium channels", isCorrect: true },
        { text: "Enhancement of potassium excretion" },
        { text: "Stimulation of aldosterone production" },
        { text: "Promotion of fluid retention" }
      ],
      explanation: "Aldosterone antagonists competitively inhibit mineralocorticoid receptors, leading to reduced sodium reabsorption through luminal epithelial sodium channels (ENaC) in the kidney's distal tubules. This results in increased sodium and water excretion and potassium retention."
    },
    {
      question: "You are going through the dosset box of an elderly patient sufferingf rom chronic heart failure. He tells you that he has been expeirencing an embarrsing problem. He plains to you that his breast tissue has enlarged since taking a new medication that the cardiologist prescribed for him. Which of the following drugs is most likely to be causing this unpleasent side effect?",
      answers: [
        { text: "Bendroflumethiazide " },
        { text: "Ramipril " },
        { text: "Amlodipine " },
        { text: "Phenytoin " },
        { text: "Spironolactone ", isCorrect: true }
      ],
      explanation: "Gynecomastia, or enlargement of male breast tissue, is a common adverse effect of spironolactone due to its anti-androgenic properties. This can impact adherence in male patients."
    },
    {
      question: "Which of the following is a common adverse effect associated with spironolactone use?",
      answers: [
        { text: "Hyperglycaemia" },
        { text: "Hypokalaemia" },
        { text: "Hypertension" },
        { text: "Gynaecomastia ", isCorrect: true },
        { text: "Nausea and vomiting lasting hours" }
      ],
      explanation: "Gynecomastia, or enlargement of male breast tissue, is a common adverse effect of spironolactone due to its anti-androgenic properties. This can impact adherence in male patients."
    },
    {
      question: "You are a pharmacist supervising a pre-registration student who asks you the following question: When is eplerenone indicated for use? Which of the following is the most appropriate response?",
      answers: [
        { text: "Ascites due to liver cirrhosis" },
        { text: "Primary hyperaldosteronism" },
        { text: "Chronic heart failure", isCorrect: true },
        { text: "Hypertension" },
        { text: "Nephrotic syndrome " }
      ],
      explanation: "Eplerenone is indicated for the treatment of chronic heart failure, typically as an addition to a β-blocker and an ACE inhibitor/ARB"
    },
    {
      question: "You are the on-call pharmacist on a busy cardiology ward and are asked to review the medication of a elderly patient who has chronic heart failure. Their most recent blood results have shown hyperkalaemia. Which of the following drugs is the most likely cause of this?",
      answers: [
        { text: "Spironolactone", isCorrect: true },
        { text: "Amlodipine " },
        { text: "Bendroflumethiazide " },
        { text: "Furosemide " },
        { text: "Bumetanide" }
      ],
      explanation: "Spironolactone is a potassium sparing diuretic, and can increase serum potassium levels leading to hyperkalaemia "
    },
    {
      question: "As a newly qualified pharmacist, you are reminded by a more senior pharmacist that monitoring during certain drug use is of paramount importance. What is the main reason for monitoring renal function and serum potassium concentration during aldosterone antagonist treatment?",
      answers: [
        { text: "To prevent hypokalemia" },
        { text: "To assess liver function" },
        { text: "To monitor blood glucose levels" },
        { text: "To prevent hypernatremia" },
        { text: "To detect hyperkalemia", isCorrect: true }
      ],
      explanation: "Monitoring renal function and serum potassium concentration is crucial during aldosterone antagonist treatment to detect hyperkalemia, which can lead to serious cardiac arrhythmias."
    },
    {
      question: "Which of the following adverse effects is associated with spironolactone use?",
      answers: [
        { text: "Hypertension" },
        { text: "Hypoglycaemia" },
        { text: "Hypernatraemia" },
        { text: "Hyperkalaemia", isCorrect: true },
        { text: "Hypercalcaemia" }
      ],
      explanation: "Spironolactone use can lead to to hyperkalaemia, an elevated level of potassium in the blood. this can cause muscle weakness, arrythmias, and cardiac arrest "
    },
    {
      question: "What is the primary rationale for combining aldosterone antagonists with other medications in chronic heart failure treatment?",
      answers: [
        { text: "To reduce the risk of bleeding" },
        { text: "To enhance the anticoagulant effect" },
        { text: "To lower blood pressure" },
        { text: "To enhance diuresis and reduce fluid retention", isCorrect: true },
        { text: "To increase heart rate" }
      ],
      explanation: "Combining aldosterone antagonists with other heart failure medications, like ACE inhibitors and β-blockers, can enhance diuresis, reduce fluid retention, and improve heart failure symptoms."
    },
    {
      question: "A 60-year-old man with moderate chronic heart failure is already on a β-blocker and an angiotensin-converting enzyme (ACE) inhibitor. What would be the most appropriate addition to his treatment regimen?",
      answers: [
        { text: "A calcium channel blocker" },
        { text: "Digoxin" },
        { text: "A statin" },
        { text: "An aldosterone antagonist", isCorrect: true },
        { text: "An anticoagulant " }
      ],
      explanation: "In this patient with moderate chronic heart failure, the addition of an aldosterone antagonist (spironolactone or eplerenone) is indicated. Aldosterone antagonists are used in chronic heart failure of at least moderate severity as an addition to β-blockers and ACE inhibitors. They help improve outcomes and reduce morbidity and mortality in heart failure patients."
    },
    {
      question: "A patient with primary hyperaldosteronism is awaiting surgery. What is the appropriate treatment option for this patient?",
      answers: [
        { text: "A loop diuretic " },
        { text: "A potassium supplement " },
        { text: "An ACE inhibitor " },
        { text: "An angiotensin receptor blocker" },
        { text: "An aldosterone antagonist", isCorrect: true }
      ],
      explanation: "For a patient with primary hyperaldosteronism who is awaiting surgery or if surgery is not an option, the appropriate treatment is an aldosterone antagonist. Aldosterone antagonists help inhibit the effects of aldosterone and are used in this context to manage the excess aldosterone activity."
    },
    {
      question: "A patient with liver cirrhosis presents with ascites and oedema. Which drug is the first-line diuretic for this indication?",
      answers: [
        { text: "Furosemide" },
        { text: "Spironolactone", isCorrect: true },
        { text: "Hydrochlorothiazide" },
        { text: "Eplerenone" },
        { text: "Metoprolol" }
      ],
      explanation: "For ascites and oedema due to liver cirrhosis, spironolactone is the first-line diuretic. It helps to increase sodium and water excretion and retain potassium, which is beneficial in the context of liver cirrhosis and its associated complications."
    },
    {
      question: "A patient with liver cirrhosis presents with ascites and oedema. The healthcare provider decides to initiate diuretic therapy. Which drug combination would be most appropriate?",
      answers: [
        { text: "Furosemide and hydrochlorothiazide." },
        { text: "Spironolactone and eplerenone." },
        { text: "Furosemide and spironolactone.", isCorrect: true },
        { text: "Hydrochlorothiazide and eplerenone." },
        { text: "Furosemide and amiloride" }
      ],
      explanation: "In the treatment of ascites and oedema due to liver cirrhosis, a combination of furosemide (a loop diuretic) and spironolactone (an aldosterone antagonist) is often used. This combination helps counteract potassium wasting by furosemide and provides enhanced diuretic effects."
    },
    {
      question: "A patient with chronic heart failure is already on an ACE inhibitor and a loop diuretic. Which additional medication is most likely to reduce the risk of hypokalaemia?",
      answers: [
        { text: "Furosemide" },
        { text: "Spironolactone ", isCorrect: true },
        { text: "Amlodopine" },
        { text: "Digoxin" },
        { text: "Metoprolol" }
      ],
      explanation: "Spironolactone, as an aldosterone antagonist, can help reduce the risk of hypokalaemia by promoting potassium retention, especially in patients who are already on an ACE inhibitor and a loop diuretic."
    },
    {
      question: "Mr. Smith, a 65-year-old male, has been diagnosed with benign prostatic enlargement and is experiencing moderate to severe voiding symptoms. Lifestyle changes have not been effective. What is the most appropriate first-line medical option for Mr. Smith's condition?",
      answers: [
        { text: "5α-reductase inhibitor" },
        { text: "ACE inhibitor" },
        { text: "Calcium channel blocker" },
        { text: "Thiazide diuretic " },
        { text: "α-blocker", isCorrect: true }
      ],
      explanation: "α-blockers, such as doxazosin and tamsulosin, are indicated as first-line medical options to improve lower urinary tract symptoms (LUTS) in benign prostatic enlargement when lifestyle changes are insufficient or voiding symptoms are moderate to severe."
    },
    {
      question: "Which of the following is a mechanism of action of α-blockers in the cardiovascular system?",
      answers: [
        { text: "Inhibition of 5α-reductase" },
        { text: "Stimulation of α1-adrenoceptors" },
        { text: "Blocking the effect on α1-adrenoceptors", isCorrect: true },
        { text: "Blockade of calcium channels " },
        { text: "Inhibition of ACE" }
      ],
      explanation: "α-blockers induce relaxation by blocking α1-adrenoceptors, leading to vasodilation, a fall in blood pressure, and reduced resistance to urine outflow."
    },
    {
      question: "Mr. Thompson, a patient with benign prostatic enlargement, is prescribed an α-blocker. Which important adverse effect should he be informed about?",
      answers: [
        { text: "Cough" },
        { text: "Hyperkalaemia" },
        { text: "Bradycardia" },
        { text: "Postural Hypotension", isCorrect: true },
        { text: "Constipation" }
      ],
      explanation: "α-blockers can cause postural hypotension, dizziness, and syncope, particularly after the first dose."
    },
    {
      question: "A patient is prescribed an α-blocker for resistant hypertension. What antihypertensive drug class should be cautiously omitted on the day the α-blocker is started to avoid pronounced first-dose hypotension?",
      answers: [
        { text: "ACE inhibitors" },
        { text: "Calcium channel blockers" },
        { text: "Diuretics" },
        { text: "β-blockers", isCorrect: true },
        { text: "Angiotensin II receptor blockers" }
      ],
      explanation: "β-blockers inhibit the reflex tachycardia that forms part of the compensatory response to vasodilation. Omitting β-blockers on the day the α-blocker is started helps prevent excessive hypotension."
    },
    {
      question: "Which statement is correct regarding the administration of doxazosin?",
      answers: [
        { text: "It is best taken in the morning with food" },
        { text: "It is typically started at a dose of 400 micrograms orally daily" },
        { text: "It should be taken at bedtime due to its pronounced BP-lowering effect ", isCorrect: true },
        { text: "It is primarily used for the treatment of resistant hypertension" },
        { text: "It is administered at the same frequency as calcium channel blockers" }
      ],
      explanation: "It should be taken at bedtime due to its pronounced BP-lowering effect. Doxazosin has pronounced BP-lowering effect, so it is recommended to take it at bedtime to minimise the impact of postural hypotension upon waking up"
    },
    {
      question: "A patient is experiencing dizziness and postural hypotension after starting an α-blocker. What advice should the healthcare provider give to the patient?",
      answers: [
        { text: "Increase the dose of the α-blocker." },
        { text: "Switch to a calcium channel blocker." },
        { text: "Rise from bed quickly to avoid dizziness." },
        { text: "Take the α-blocker with a large meal." },
        { text: "Rise from bed slowly to minimise dizziness ", isCorrect: true }
      ],
      explanation: "Postural hypotension is a common side effect of α-blockers. Patients should be advised to rise from bed slowly to prevent dizziness and falls."
    },
    {
      question: "Which of the following is a common adverse effect associated with α-blockers?",
      answers: [
        { text: "Hyperkalaemia " },
        { text: "Bradycardia" },
        { text: "Constipation" },
        { text: "Dry cough" },
        { text: "Postural hypotension", isCorrect: true }
      ],
      explanation: "Postural hypotension, dizziness, and syncope are common adverse effects of α-blockers."
    },
    {
      question: "You are a pharmacist giving scheduled teaching to one of your pre-registration students when they ask you about information about alpha-blockers. Which class of adrenoceptors do most drugs in the α-blocker class primarily target?",
      answers: [
        { text: "β-adrenoceptors" },
        { text: "α2-adrenoceptors" },
        { text: "α1-adrenoceptors", isCorrect: true },
        { text: "δ-adrenoceptors" },
        { text: "γ-adrenoceptors" }
      ],
      explanation: "Most drugs in the α-blocker class are highly selective for α1-adrenoceptors."
    },
    {
      question: "A patient with resistant hypertension is prescribed an α-blocker. Which drug class can potentially lead to symptomatic hypotension when combined with α-blockers?",
      answers: [
        { text: "Calcium channel blockers" },
        { text: "ACE inhibitors" },
        { text: "Diuretics" },
        { text: "Phosphodiesterase type 5 inhibitors ", isCorrect: true },
        { text: "Angiotensin II receptor blockers" }
      ],
      explanation: "Phosphodiesterase type 5 inhibitors (e.g., sildenafil) can lead to symptomatic hypotension when combined with α-blockers."
    },
    {
      question: "What patient population might benefit from the combined use of an α-blocker and a phosphodiesterase type 5 inhibitor?",
      answers: [
        { text: "Young women with hypertension" },
        { text: "Patients with diabetes and hyperlipidemia " },
        { text: "Elderly men with benign prostatic enlargement and erectile dysfunction", isCorrect: true },
        { text: "Patients with a history bradycardia" },
        { text: "Patients with resistant hypertension" }
      ],
      explanation: "Elderly men with benign prostatic enlargement and erectile dysfunction. Patients with benign prostatic enlargement (typically older men) may also suffer from erectile dysfunction, making the combination of an α-blocker and a phosphodiesterase type 5 inhibitor beneficial "
    },
    {
      question: "A 65-year-old patient is admitted to the hospital with ventricular fibrillation. The patient has received three shocks as per the advanced life support (ALS) algorithm what is the appropriate dose of amiodarone to administer in the situation?",
      answers: [
        { text: "100mg IV" },
        { text: "200mg IV" },
        { text: "300mg IV", isCorrect: true },
        { text: "400mg IV" },
        { text: "500mg IV" }
      ],
      explanation: "In cardiac arrest, amiodarone is given for VF or pulseless VT immediately after the third shock in the ALS algorithm. The correct dose is 300 mg IV."
    },
    {
      question: "A patient with hypertension is prescribed an antihypertensive medication to reduce the risk of stroke, myocardial infarction, and death from cardiovascular disease. Which of the following mechanisms best describes the action of angiotensin receptor blockers (ARBs)?",
      answers: [
        { text: "Inhibiting the conversion of angiotensin I to angiotensin II." },
        { text: "Blocking the action of angiotension II on the angiotensin type I receptor ", isCorrect: true },
        { text: "Inhibiting the renin-angiotensin-aldosterone system." },
        { text: "Increasing the levels of angiotensin II in the blood." },
        { text: "Stimulating the release of aldosterone." }
      ],
      explanation: "ARBs block the action of angiotensin II on the angiotensin type 1 receptor. This action leads to reduced peripheral vascular resistance, lower blood pressure, and benefits in conditions like hypertension and heart failure."
    },
    {
      question: "A patient with hypertension is prescribed an angiotensin receptor blocker (ARB). What is the primary mechanism by which ARBs lower blood pressure?",
      answers: [
        { text: "Inhibition of aldosterone secretion" },
        { text: "Inhibition of renin release" },
        { text: "Blockade of angiotensin type 2 receptors" },
        { text: "Blocking the action of angiotensin II on the angiotensin type 1 receptor", isCorrect: true },
        { text: "Enhancement of bradykinin metabolism" }
      ],
      explanation: "ARBs lower blood pressure by blocking the action of angiotensin II on the angiotensin type 1 receptor, leading to reduced peripheral vascular resistance and decreased blood pressure."
    },
    {
      question: "A patient with chronic heart failure is prescribed an angiotensin receptor blocker (ARB). What effect does the dilation of the efferent glomerular arteriole have in this condition?",
      answers: [
        { text: "Increases glomerular filtration rate ", isCorrect: true },
        { text: "Decreases glomerular filtration rate " },
        { text: "Reduces afterload" },
        { text: "Increases venous return" },
        { text: "Stimulates aldosterone secretion" }
      ],
      explanation: "Dilation of the efferent glomerular arteriole by ARBs reduces intraglomerular pressure and slows the progression of chronic kidney disease (CKD), ultimately leading to an increase in glomerular filtration rate."
    },
    {
      question: "A patient is prescribed an angiotensin receptor blocker (ARB) for hypertension. What is the primary reason for avoiding concomitant use of potassium supplements and aldosterone antagonists?",
      answers: [
        { text: "Risk of hypotension" },
        { text: "Risk of hyperkalaemia", isCorrect: true },
        { text: "Risk of angioedema " },
        { text: "Risk of nephrotoxicity" },
        { text: "Risk of tachycardia" }
      ],
      explanation: "The primary reason for avoiding concomitant use of potassium supplements and aldosterone antagonists with ARBs is the risk of hyperkalaemia (elevated blood potassium levels)."
    },
    {
      question: "A patient with hypertension is prescribed an angiotensin receptor blocker (ARB). What is the appropriate recommendation regarding the timing of the first dose?",
      answers: [
        { text: "Take the first dose in the morning with food." },
        { text: "Take the first dose before bed to reduce symptomatic hypotension.", isCorrect: true },
        { text: "Take the first dose on an empty stomach." },
        { text: "Take the first dose with a high-fat meal." },
        { text: "Take the first dose immediately after a heavy meal." }
      ],
      explanation: "It's recommended to take the first dose of an angiotensin receptor blocker (ARB) before bed to reduce the risk of symptomatic hypotension."
    },
    {
      question: "A patient with hypertension and a history of cough while on ACE inhibitors is prescribed an antihypertensive medication. Which of the following medications is a suitable alternative that does not cause cough?",
      answers: [
        { text: "Lisinopril " },
        { text: "Losartan", isCorrect: true },
        { text: "Ramipril" },
        { text: "Enalapril" },
        { text: "Quinapril" }
      ],
      explanation: "Losartan is an angiotensin receptor blocker (ARB) and is less likely to cause cough compared to ACE inhibitors."
    },
    {
      question: "A patient with hypertension and chronic kidney disease (CKD) is prescribed an angiotensin receptor blocker (ARB). What is the main benefit of using an ARB in this patient?",
      answers: [
        { text: "Increasing proteinuria" },
        { text: "Promoting sodium and water retention" },
        { text: "Reducing peripheral vascular resistance" },
        { text: "Dilation of the afferent arteriole" },
        { text: "Slowing the progression of nephropathy", isCorrect: true }
      ],
      explanation: "The main benefit of using an angiotensin receptor blocker (ARB) in a patient with CKD is to slow the progression of nephropathy."
    },
    {
      question: "A patient with hypertension is prescribed an angiotensin receptor blocker (ARB). Which of the following electrolyte imbalances is of particular concern when using ARBs?",
      answers: [
        { text: "Hypokalaemia" },
        { text: "Hypernatremia" },
        { text: "Hypercalcemia" },
        { text: "Hyperkalaemia", isCorrect: true },
        { text: "Hypocalcaemia" }
      ],
      explanation: "Hyperkalaemia (elevated blood potassium levels) is a particular concern when using angiotensin receptor blockers (ARBs) due to their effect on potassium excretion."
    },
    {
      question: "A patient is prescribed an angiotensin receptor blocker (ARB) for chronic heart failure. What aspect of heart failure does the ARB primarily target to improve symptoms and prognosis?",
      answers: [
        { text: "Improving cardiac contractility" },
        { text: "Reducing preload" },
        { text: "Enhancing heart rate" },
        { text: "Reducing afterload", isCorrect: true },
        { text: "Increasing myocardial oxygen consumption" }
      ],
      explanation: "ARBs primarily target the reduction of afterload, leading to improved symptoms and prognosis in chronic heart failure."
    },
    {
      question: "A patient with hypertension and heart failure is prescribed an angiotensin receptor blocker (ARB). Which of the following cardiovascular parameters would be expected to decrease as a result of ARB use?",
      answers: [
        { text: "Stroke volume" },
        { text: "Peripheral vascular resistance", isCorrect: true },
        { text: "Heart rate" },
        { text: "Cardiac output" },
        { text: "Blood pressure" }
      ],
      explanation: "Peripheral vascular resistance would be expected to decrease as a result of angiotensin receptor blocker (ARB) use, leading to a reduction in blood pressure."
    },
    {
      question: "A 62 year old male with hypertension is prescribed an ACE inhibitor. What is the primary mechanism of action of ACE inhibitors?",
      answers: [
        { text: "Inhibition of beta receptors" },
        { text: "Inhibition of calcium channels" },
        { text: "Inhibition of angiotensin-converting enzyme (ACE)", isCorrect: true },
        { text: "Inhibition of aldosterone receptors" },
        { text: "Inhibition of alpha receptors" }
      ],
      explanation: "ACE inhibitors work by inhibiting the action of angiotensin-converting enzyme (ACE), which reduces the conversion of angiotensin I to angiotensin II. Angiotensin II is a vasoconstrictor and stimulates aldosterone secretion."
    },
    {
      question: "Which of the following is a common indication for ACE inhibitors?",
      answers: [
        { text: "Hypercholesterolemia" },
        { text: "Chronic obstructive pulmonary disease" },
        { text: "Chronic heart failure", isCorrect: true },
        { text: "Osteoarthritis" },
        { text: "Migraine" }
      ],
      explanation: "ACE inhibitors are indicated for the first-line treatment of all grades of chronic heart failure to improve symptoms and prognosis."
    },

  ]
};

