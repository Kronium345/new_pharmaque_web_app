export const QUESTIONS_DATA = {
  name: "Calculations",
  image: "uploads/images/calculations.jpg",
  questions: [
    {
      question:
        "Calculate the volume of a 15% w/v solution needed to prepare 500ml of a 5% solution.",
      answers: [
        { text: "166.67ml", isCorrect: true },
        { text: "150ml" },
        { text: "200ml" },
        { text: "125ml" },
        { text: "175ml" },
      ],
      explanation: "V1C1 = V2C2; (V1 x 15%) = (500ml x 5%); V1 = 166.67ml.",
    },
    {
      question:
        "If a patient is prescribed 25mcg/kg of Drug X and weighs 80kg, how many 100mcg tablets should they receive per dose?",
      answers: [
        { text: "0.2 tablets", isCorrect: true },
        { text: "1 tablet" },
        { text: "0.5 tablets" },
        { text: "2 tablets" },
        { text: "0.8 tablets" },
      ],
      explanation:
        "Dose = 25mcg/kg x 80kg = 2000mcg; Tablets = 2000mcg / 100mcg/tablet = 0.2 tablets.",
    },
    {
      question:
        "A solution contains 250mg of medication in 100ml. How many milliliters are needed for a 75mg dose?",
      answers: [
        { text: "30ml", isCorrect: true },
        { text: "20ml" },
        { text: "25ml" },
        { text: "35ml" },
        { text: "40ml" },
      ],
      explanation:
        "250mg in 100ml; 75mg needs X ml; X = (75mg x 100ml) / 250mg = 30ml.",
    },
    {
      question:
        "A patient requires a 0.04% solution. How much solute is needed for 250ml of solution?",
      answers: [
        { text: "0.1g", isCorrect: true },
        { text: "0.2g" },
        { text: "0.05g" },
        { text: "0.15g" },
        { text: "0.25g" },
      ],
      explanation:
        "0.04% = 0.04g/100ml; For 250ml: 0.04g/100ml x 250ml = 0.1g.",
    },
    {
      question:
        "A child is to be given 8mg/kg of a drug per day in 2 doses. If the child weighs 25kg, how much drug is needed per dose?",
      answers: [
        { text: "100mg", isCorrect: true },
        { text: "50mg" },
        { text: "200mg" },
        { text: "25mg" },
        { text: "150mg" },
      ],
      explanation:
        "Daily dose = 8mg/kg x 25kg = 200mg; Per dose = 200mg / 2 = 100mg.",
    },
    {
      question:
        "A 0.5% eye drop solution is prescribed. Each drop is 0.05ml. How many grams of medication is in 15 drops?",
      answers: [
        { text: "0.00375g", isCorrect: true },
        { text: "0.0075g" },
        { text: "0.005g" },
        { text: "0.0025g" },
        { text: "0.00125g" },
      ],
      explanation:
        "0.5% = 0.5g/100ml; 0.05ml x 15 drops = 0.75ml; 0.5g/100ml x 0.75ml = 0.00375g.",
    },
    {
      question:
        "For a 60kg patient, a drug is prescribed at 2mg/kg/day in 3 divided doses. How many mg per dose?",
      answers: [
        { text: "40mg", isCorrect: true },
        { text: "20mg" },
        { text: "60mg" },
        { text: "30mg" },
        { text: "50mg" },
      ],
      explanation:
        "Total daily dose = 2mg/kg x 60kg = 120mg; Per dose = 120mg / 3 = 40mg.",
    },
    {
      question:
        "A cream is 0.1% w/w aloe vera. How much aloe vera is in a 200g tube?",
      answers: [
        { text: "0.2g", isCorrect: true },
        { text: "0.1g" },
        { text: "0.3g" },
        { text: "0.4g" },
        { text: "0.5g" },
      ],
      explanation:
        "0.1% w/w = 0.1g/100g; For 200g cream: 0.1g/100g x 200g = 0.2g.",
    },
    {
      question:
        "A suspension has 200mg/5ml concentration. How many ml for a 600mg dose?",
      answers: [
        { text: "15ml", isCorrect: true },
        { text: "10ml" },
        { text: "20ml" },
        { text: "25ml" },
        { text: "30ml" },
      ],
      explanation:
        "200mg in 5ml; 600mg needs X ml; X = (600mg x 5ml) / 200mg = 15ml.",
    },
    {
      question:
        "A patient is to receive 50mg of a drug every 8 hours. If each vial contains 250mg, how many vials are needed for a day?",
      answers: [
        { text: "0.6 vials", isCorrect: true },
        { text: "1 vial" },
        { text: "0.5 vials" },
        { text: "1.2 vials" },
        { text: "0.8 vials" },
      ],
      explanation:
        "Doses per day = 24 hours / 8 hours = 3 doses; Total daily dose = 50mg x 3 = 150mg; Vials needed = 150mg / 250mg/vial = 0.6 vials.",
    },
    {
      question:
        "If a medication bottle contains 120ml of syrup and the dose is 10ml three times a day, how many days will the bottle last?",
      answers: [
        { text: "4 days", isCorrect: true },
        { text: "3 days" },
        { text: "5 days" },
        { text: "6 days" },
        { text: "7 days" },
      ],
      explanation:
        "Total daily dose = 10ml x 3 = 30ml; Days = 120ml / 30ml/day = 4 days.",
    },
    {
      question:
        "A patient is prescribed 250mg of a drug every 6 hours. How many mg are taken in one day?",
      answers: [
        { text: "1000mg", isCorrect: true },
        { text: "500mg" },
        { text: "750mg" },
        { text: "1250mg" },
        { text: "1500mg" },
      ],
      explanation:
        "Doses per day = 24 hours / 6 hours = 4 doses; Total = 250mg x 4 = 1000mg.",
    },
    {
      question:
        "A cream is 1.5% w/w. How much active ingredient is in a 50g tube?",
      answers: [
        { text: "0.75g", isCorrect: true },
        { text: "0.5g" },
        { text: "1g" },
        { text: "0.25g" },
        { text: "1.25g" },
      ],
      explanation:
        "1.5% w/w = 1.5g/100g; For 50g cream: 1.5g/100g x 50g = 0.75g.",
    },
    {
      question:
        "A 500mg tablet is to be split into quarters. How much drug is in each quarter?",
      answers: [
        { text: "125mg", isCorrect: true },
        { text: "100mg" },
        { text: "150mg" },
        { text: "200mg" },
        { text: "250mg" },
      ],
      explanation: "Total per tablet = 500mg; Per quarter = 500mg / 4 = 125mg.",
    },
    {
      question:
        "A solution contains 20mg of medication per 2ml. How many mg are in 10ml of this solution?",
      answers: [
        { text: "100mg", isCorrect: true },
        { text: "50mg" },
        { text: "75mg" },
        { text: "125mg" },
        { text: "150mg" },
      ],
      explanation: "20mg in 2ml; For 10ml: 20mg/2ml x 10ml = 100mg.",
    },
    {
      question: "How many 200mg tablets are needed for a 600mg dose?",
      answers: [
        { text: "3 tablets", isCorrect: true },
        { text: "2 tablets" },
        { text: "4 tablets" },
        { text: "5 tablets" },
        { text: "6 tablets" },
      ],
      explanation: "Required dose = 600mg; Tablets = 600mg / 200mg/tablet = 3.",
    },
    {
      question:
        "A patient needs a 2% solution. How much solute (in g) should be added to 150ml of water?",
      answers: [
        { text: "3g", isCorrect: true },
        { text: "2g" },
        { text: "4g" },
        { text: "5g" },
        { text: "6g" },
      ],
      explanation: "2% solution = 2g/100ml; For 150ml: 2g/100ml x 150ml = 3g.",
    },
    {
      question:
        "An antibiotic suspension contains 250mg/5ml. How many ml for a 500mg dose?",
      answers: [
        { text: "10ml", isCorrect: true },
        { text: "5ml" },
        { text: "15ml" },
        { text: "20ml" },
        { text: "25ml" },
      ],
      explanation:
        "250mg in 5ml; 500mg needs X ml; X = (500mg x 5ml) / 250mg = 10ml.",
    },
    {
      question:
        "If each capsule contains 150mg of a drug and the prescription is for 450mg, how many capsules are needed per dose?",
      answers: [
        { text: "3 capsules", isCorrect: true },
        { text: "2 capsules" },
        { text: "4 capsules" },
        { text: "5 capsules" },
        { text: "6 capsules" },
      ],
      explanation:
        "Required dose = 450mg; Capsules = 450mg / 150mg/capsule = 3.",
    },
    {
      question:
        "A patient is prescribed a medication at a dose of 0.5mg/kg and weighs 60kg. How much medication in mg is required per dose?",
      answers: [
        { text: "30mg", isCorrect: true },
        { text: "20mg" },
        { text: "40mg" },
        { text: "50mg" },
        { text: "60mg" },
      ],
      explanation: "Dose = 0.5mg/kg x 60kg = 30mg.",
    },
    {
      question:
        "A patient requires a medication infusion at a rate of 0.75mg/kg/hr. The patient weighs 90kg and the medication is supplied in 250mg/5ml. Calculate the infusion rate in ml/hr.",
      answers: [
        { text: "1.8 ml/hr", isCorrect: true },
        { text: "3.6 ml/hr" },
        { text: "2.4 ml/hr" },
        { text: "1.2 ml/hr" },
        { text: "0.9 ml/hr" },
      ],
      explanation:
        "Calculate the total mg/hr (0.75mg/kg/hr x 90kg = 67.5mg/hr), then convert to ml (67.5mg x (5ml/250mg)).",
    },
    {
      question:
        "A cream contains 0.05% w/w of an active ingredient. How much active ingredient in grams is in a 250g tube?",
      answers: [
        { text: "0.125g", isCorrect: true },
        { text: "0.25g" },
        { text: "0.05g" },
        { text: "0.1g" },
        { text: "0.2g" },
      ],
      explanation: "Calculate 0.05% of 250g (0.05/100 x 250g).",
    },
    {
      question:
        "For a 0.2% saline IV, how much sodium chloride is needed to add to 500ml of water?",
      answers: [
        { text: "1g", isCorrect: true },
        { text: "0.5g" },
        { text: "1.5g" },
        { text: "2g" },
        { text: "2.5g" },
      ],
      explanation: "0.2% saline = 0.2g/100ml. For 500ml: 0.2g/100ml x 500ml.",
    },
    {
      question:
        "A patient needs a 4% dextrose solution. How much dextrose powder (in grams) should be added to 1000ml of water?",
      answers: [
        { text: "40g", isCorrect: true },
        { text: "20g" },
        { text: "60g" },
        { text: "80g" },
        { text: "100g" },
      ],
      explanation: "4% solution = 4g/100ml. For 1000ml: 4g/100ml x 1000ml.",
    },
    {
      question:
        "If a medication is dosed at 15mg/kg and the patient weighs 60kg, how many 100mg tablets are required for one dose?",
      answers: [
        { text: "9 tablets", isCorrect: true },
        { text: "8 tablets" },
        { text: "10 tablets" },
        { text: "6 tablets" },
        { text: "12 tablets" },
      ],
      explanation:
        "Calculate dose (15mg/kg x 60kg), then divide by tablet strength (900mg / 100mg/tablet).",
    },
    {
      question:
        "Calculate the amount of drug in a 30ml solution with a concentration of 2mg/ml.",
      answers: [
        { text: "60mg", isCorrect: true },
        { text: "30mg" },
        { text: "90mg" },
        { text: "120mg" },
        { text: "45mg" },
      ],
      explanation: "Total drug = concentration x volume (2mg/ml x 30ml).",
    },
    {
      question:
        "A 250ml IV bag contains 50mg of a drug. What is the concentration in mg/ml?",
      answers: [
        { text: "0.2 mg/ml", isCorrect: true },
        { text: "0.4 mg/ml" },
        { text: "0.1 mg/ml" },
        { text: "0.5 mg/ml" },
        { text: "0.3 mg/ml" },
      ],
      explanation: "Concentration = total drug / total volume (50mg / 250ml).",
    },
    {
      question:
        "A patient needs to be administered 500mg of a drug, available in a concentration of 10mg/ml. Calculate the required volume for administration.",
      answers: [
        { text: "50ml", isCorrect: true },
        { text: "40ml" },
        { text: "60ml" },
        { text: "70ml" },
        { text: "80ml" },
      ],
      explanation: "Volume = dose / concentration (500mg / 10mg/ml).",
    },
    {
      question:
        "A suspension contains 150mg of medication per 5ml. How many ml are needed for a 450mg dose?",
      answers: [
        { text: "15ml", isCorrect: true },
        { text: "10ml" },
        { text: "20ml" },
        { text: "25ml" },
        { text: "30ml" },
      ],
      explanation: "Volume = dose / concentration (450mg / 150mg/5ml).",
    },
    {
      question:
        "A syrup contains 120mg of drug per 10ml. Calculate the dose in ml for a 180mg dose.",
      answers: [
        { text: "15ml", isCorrect: true },
        { text: "10ml" },
        { text: "20ml" },
        { text: "25ml" },
        { text: "5ml" },
      ],
      explanation: "Volume = dose / concentration (180mg / 120mg/10ml).",
    },
    {
      question:
        "You have a tube containing 35g of a hydrocortisone cream. The packaging states that the cream contains 52mg of hydrocortisone acetate. What is the strength of the cream in %w/w?",
      answers: [
        { text: "0.15%", isCorrect: true },
        { text: "0.1%" },
        { text: "0.2%" },
        { text: "0.25%" },
        { text: "0.05%" },
      ],
      explanation: "%w/w = (52mg / 35,000mg) x 100 = 0.15%",
    },
    {
      question:
        "Aseptically mix 50mL glucose 6%, 145mL glucose 20%, and 355mL of sodium chloride. What is the strength of glucose in %w/v of the resulting mixture?",
      answers: [
        { text: "9.80%", isCorrect: true },
        { text: "10%" },
        { text: "8.5%" },
        { text: "11%" },
        { text: "9%" },
      ],
      explanation:
        "Total volume = 550mL. Glucose = (50mL x 6%) + (145mL x 20%). %w/v = (Total glucose / 550mL) x 100.",
    },
    {
      question:
        "Prepare 250g of an ointment with 45%w/w white soft paraffin, 35%w/w yellow soft paraffin, and 20%w/w calamine. How much yellow soft paraffin in grams is required?",
      answers: [
        { text: "87.5g", isCorrect: true },
        { text: "75g" },
        { text: "100g" },
        { text: "50g" },
        { text: "62.5g" },
      ],
      explanation: "35% of 250g = 87.5g.",
    },
    {
      question:
        "Prescribed 320g of an emollient containing 10%w/w calamine. Available: 18%w/w and 6%w/w calamine emollient. How many grams of the 6%w/w calamine emollient will you need?",
      answers: [
        { text: "213g", isCorrect: true },
        { text: "100g" },
        { text: "150g" },
        { text: "250g" },
        { text: "300g" },
      ],
      explanation:
        "Using the formula for dilution: x/(320-x) = (10%-6%)/(18%-10%), solve for x.",
    },
    {
      question:
        "Prepare a 20%w/w coal tar ointment from a 7%w/w coal tar ointment. How many grams of coal tar to add to 250g of 7% ointment?",
      answers: [
        { text: "65.6g", isCorrect: true },
        { text: "50g" },
        { text: "75g" },
        { text: "80g" },
        { text: "60g" },
      ],
      explanation:
        "Using the concentration formula: (Total weight of ointment x desired concentration) - (weight of 7% ointment x 7% concentration).",
    },
    {
      question:
        "A patient needs a medication at a specific dose of 0.05mg/kg every 5 hours. The patient weighs 72kg. The medication comes in a concentration of 10mg/ml. Calculate the exact volume needed per dose.",
      answers: [
        { text: "0.36ml", isCorrect: true },
        { text: "0.72ml" },
        { text: "0.5ml" },
        { text: "0.45ml" },
        { text: "0.3ml" },
      ],
      explanation: "Dose = 0.05mg/kg x 72kg; Volume = Dose / Concentration.",
    },
    {
      question:
        "An IV infusion requires a drug concentration of 0.2mg/ml at a rate of 5ml/hr. The drug is supplied in vials of 100mg/2ml. How many vials are needed for 24 hours?",
      answers: [
        { text: "3 vials", isCorrect: true },
        { text: "2 vials" },
        { text: "4 vials" },
        { text: "5 vials" },
        { text: "6 vials" },
      ],
      explanation:
        "Daily requirement = 5ml/hr x 24hrs; Total drug needed = Concentration x Volume; Vials = Total drug / Vial concentration.",
    },
    {
      question:
        "A topical cream is 1.25% w/w. A patient is prescribed a thin layer covering 200cm² skin, assuming 2mg/cm². Calculate the weight of cream needed.",
      answers: [
        { text: "5g", isCorrect: true },
        { text: "10g" },
        { text: "4g" },
        { text: "6g" },
        { text: "8g" },
      ],
      explanation:
        "Area x Application rate; Convert % w/w to mg/g to find weight.",
    },
    {
      question:
        "Compound a 500ml solution with a final concentration of 2mg/ml using a stock solution of 10mg/ml and a diluent. Calculate the volume of stock solution and diluent needed.",
      answers: [
        { text: "100ml stock, 400ml diluent", isCorrect: true },
        { text: "200ml stock, 300ml diluent" },
        { text: "150ml stock, 350ml diluent" },
        { text: "50ml stock, 450ml diluent" },
        { text: "250ml stock, 250ml diluent" },
      ],
      explanation:
        "V1C1 = V2C2 for stock solution; Subtract from total for diluent.",
    },
    {
      question:
        "A pediatric patient requires 15mg/kg/day of a medication divided into three equal doses. The child weighs 20kg. The medicine is available in a 10mg/ml suspension. Calculate the volume per dose.",
      answers: [
        { text: "10ml", isCorrect: true },
        { text: "5ml" },
        { text: "15ml" },
        { text: "20ml" },
        { text: "8ml" },
      ],
      explanation:
        "Total daily dose = Weight x Dosage; Volume per dose = Total daily dose / 3 / Concentration.",
    },
    {
      question:
        "A medication's half-life is 8 hours. A patient receives an initial dose of 100mg. How much of the drug remains in the body after 24 hours?",
      answers: [
        { text: "12.5mg", isCorrect: true },
        { text: "25mg" },
        { text: "50mg" },
        { text: "75mg" },
        { text: "100mg" },
      ],
      explanation:
        "Half-life calculation: 100mg → 50mg (8 hrs) → 25mg (16 hrs) → 12.5mg (24 hrs).",
    },
    {
      question:
        "Prepare 200ml of a 5% solution using two solutions of 10% and 2% strengths. Calculate the volume of each solution required.",
      answers: [
        { text: "50ml of 10%, 150ml of 2%", isCorrect: true },
        { text: "100ml of 10%, 100ml of 2%" },
        { text: "75ml of 10%, 125ml of 2%" },
        { text: "25ml of 10%, 175ml of 2%" },
        { text: "150ml of 10%, 50ml of 2%" },
      ],
      explanation:
        "Using Alligation method: (5-2)/(10-5) = Volume of 10% solution / Total Volume.",
    },
    {
      question:
        "A patient requires a continuous IV drip of 0.4mg/kg/hr of Drug Y. The patient weighs 55kg, and the drug is available in 250mg/5ml. Determine the infusion rate in ml/hr.",
      answers: [
        { text: "2.2 ml/hr", isCorrect: true },
        { text: "1.1 ml/hr" },
        { text: "3.3 ml/hr" },
        { text: "4.4 ml/hr" },
        { text: "5 ml/hr" },
      ],
      explanation:
        "Dose = 0.4mg/kg/hr x 55kg; Infusion rate = Dose / Concentration.",
    },
    {
      question:
        "Convert a 3% w/v solution to mg/ml. Then, determine how many ml are needed for a 450mg dose.",
      answers: [
        { text: "30ml", isCorrect: true },
        { text: "15ml" },
        { text: "45ml" },
        { text: "60ml" },
        { text: "75ml" },
      ],
      explanation: "3% w/v = 30mg/ml; Volume for dose = Dose / Concentration.",
    },
    {
      question:
        "A solution contains 250mg of medication in 100ml. A dose of 50mg/kg/day is prescribed for a child weighing 18kg, divided into 4 doses. Calculate the volume for each dose.",
      answers: [
        { text: "9ml", isCorrect: true },
        { text: "4.5ml" },
        { text: "18ml" },
        { text: "12ml" },
        { text: "6ml" },
      ],
      explanation:
        "Daily dose = Dose x Weight; Volume per dose = Daily dose / 4 / Concentration.",
    },
    {
      question:
        "Calculate the volume of 0.9% saline solution needed to dilute 10ml of a 50% dextrose solution to a 5% concentration.",
      answers: [
        { text: "90ml", isCorrect: true },
        { text: "80ml" },
        { text: "100ml" },
        { text: "110ml" },
        { text: "120ml" },
      ],
      explanation:
        "Using dilution formula C1V1 = C2V2; 50% x 10ml = 5% x V2. Solve for V2.",
    },
    {
      question:
        "A patient requires an infusion at 2mg/min. The drug is supplied as 500mg in 250ml. Calculate the infusion rate in ml/hr.",
      answers: [
        { text: "15ml/hr", isCorrect: true },
        { text: "10ml/hr" },
        { text: "20ml/hr" },
        { text: "25ml/hr" },
        { text: "30ml/hr" },
      ],
      explanation: "Infusion rate = (2mg/min x 60min/hr) / (500mg/250ml).",
    },
    {
      question:
        "Prepare a 200ml solution of 0.2% w/v from a stock solution of 1% w/v. How much stock solution and water are needed?",
      answers: [
        { text: "40ml stock, 160ml water", isCorrect: true },
        { text: "50ml stock, 150ml water" },
        { text: "30ml stock, 170ml water" },
        { text: "60ml stock, 140ml water" },
        { text: "20ml stock, 180ml water" },
      ],
      explanation: "Use C1V1 = C2V2; 1% x V1 = 0.2% x 200ml. Solve for V1.",
    },
    {
      question:
        "A drug's elimination half-life is 4 hours. How much of a 400mg dose remains after 12 hours?",
      answers: [
        { text: "50mg", isCorrect: true },
        { text: "100mg" },
        { text: "200mg" },
        { text: "25mg" },
        { text: "75mg" },
      ],
      explanation:
        "Half-life calculations: 400mg → 200mg (4 hrs) → 100mg (8 hrs) → 50mg (12 hrs).",
    },
    {
      question:
        "A 70kg patient requires a 0.03mg/kg dose of a medication. The medication is available in 2mg/ml. Calculate the volume needed.",
      answers: [
        { text: "1.05ml", isCorrect: true },
        { text: "2.1ml" },
        { text: "0.7ml" },
        { text: "0.5ml" },
        { text: "1.5ml" },
      ],
      explanation: "Dose = 0.03mg/kg x 70kg; Volume = Dose / Concentration.",
    },
    {
      question:
        "A solution contains 120mg of drug per 10ml. If a patient requires a 360mg dose, how many ml are needed?",
      answers: [
        { text: "30ml", isCorrect: true },
        { text: "20ml" },
        { text: "40ml" },
        { text: "25ml" },
        { text: "35ml" },
      ],
      explanation: "Volume = Dose / Concentration; 360mg / (120mg/10ml).",
    },
    {
      question:
        "An ointment is 2.5% w/w. Calculate the amount of active ingredient in a 150g tube.",
      answers: [
        { text: "3.75g", isCorrect: true },
        { text: "2.5g" },
        { text: "5g" },
        { text: "4.5g" },
        { text: "6g" },
      ],
      explanation: "2.5% of 150g = 2.5/100 x 150g.",
    },
    {
      question:
        "A medication is administered at a rate of 5mcg/kg/min for a 60kg patient. The medication is supplied as 10mg in 100ml. Calculate the infusion rate in ml/hr.",
      answers: [
        { text: "18ml/hr", isCorrect: true },
        { text: "12ml/hr" },
        { text: "24ml/hr" },
        { text: "30ml/hr" },
        { text: "15ml/hr" },
      ],
      explanation:
        "Infusion rate = (5mcg/kg/min x 60kg x 60min/hr) / (10mg/100ml).",
    },
    {
      question:
        "A patient needs a 1.5% solution. How much solute is needed to make 500ml of solution?",
      answers: [
        { text: "7.5g", isCorrect: true },
        { text: "5g" },
        { text: "10g" },
        { text: "12.5g" },
        { text: "15g" },
      ],
      explanation: "1.5% = 1.5g/100ml; For 500ml: 1.5g/100ml x 500ml.",
    },
    {
      question:
        "A 500ml IV bag contains 250mg of a drug. A dose of 50mg/hr is required. Calculate the infusion rate in ml/hr.",
      answers: [
        { text: "100ml/hr", isCorrect: true },
        { text: "50ml/hr" },
        { text: "200ml/hr" },
        { text: "150ml/hr" },
        { text: "250ml/hr" },
      ],
      explanation:
        "Infusion rate = Dose / Concentration; 50mg/hr / (250mg/500ml).",
    },
    {
      question:
        "A prescription calls for 15% of Drug A and 85% of Drug B to make a 100g ointment. How much of each drug is needed?",
      answers: [
        { text: "15g Drug A, 85g Drug B", isCorrect: true },
        { text: "10g Drug A, 90g Drug B" },
        { text: "20g Drug A, 80g Drug B" },
        { text: "25g Drug A, 75g Drug B" },
        { text: "30g Drug A, 70g Drug B" },
      ],
      explanation: "15% of 100g for Drug A and 85% of 100g for Drug B.",
    },
    {
      question:
        "A 0.25% hydrocortisone cream is prescribed. How many grams of hydrocortisone are in a 30g tube?",
      answers: [
        { text: "0.075g", isCorrect: true },
        { text: "0.15g" },
        { text: "0.025g" },
        { text: "0.1g" },
        { text: "0.05g" },
      ],
      explanation: "0.25% of 30g = 0.25/100 x 30g.",
    },
    {
      question:
        "If 500ml of a 10% solution is diluted to make a 2% solution, what is the final volume?",
      answers: [
        { text: "2000ml" },
        { text: "2500ml", isCorrect: true },
        { text: "3000ml" },
        { text: "3500ml" },
        { text: "1500ml" },
      ],
      explanation: "Use C1V1 = C2V2; 10% x 500ml = 2% x V2. Solve for V2.",
    },
    {
      question:
        "A patient is prescribed a medication at 1mg/kg/day in two divided doses. If the patient weighs 50kg, how much medication is needed for each dose?",
      answers: [
        { text: "50mg" },
        { text: "25mg", isCorrect: true },
        { text: "20mg" },
        { text: "30mg" },
        { text: "40mg" },
      ],
      explanation:
        "Total daily dose = 1mg/kg x 50kg; Each dose = Total dose / 2.",
    },
    {
      question:
        "How many ml of a 4% solution can be made from 200ml of a 10% solution?",
      answers: [
        { text: "400ml" },
        { text: "500ml", isCorrect: true },
        { text: "600ml" },
        { text: "700ml" },
        { text: "800ml" },
      ],
      explanation:
        "Use dilution formula C1V1 = C2V2; 10% x 200ml = 4% x V2. Solve for V2.",
    },
    {
      question:
        "Calculate the volume of medication needed for a dose of 0.2mg/kg in a patient weighing 80kg from a solution of 50mg/ml.",
      answers: [
        { text: "0.4ml" },
        { text: "0.32ml", isCorrect: true },
        { text: "0.24ml" },
        { text: "0.16ml" },
        { text: "0.08ml" },
      ],
      explanation: "Dose = 0.2mg/kg x 80kg; Volume = Dose / Concentration.",
    },
    {
      question:
        "An IV contains 500mg of a drug in 250ml. What is the concentration in mg/ml?",
      answers: [
        { text: "1mg/ml" },
        { text: "2mg/ml", isCorrect: true },
        { text: "3mg/ml" },
        { text: "4mg/ml" },
        { text: "5mg/ml" },
      ],
      explanation: "Concentration = Total drug / Total volume.",
    },
    {
      question:
        "A cream is 0.3% w/w lidocaine. How much lidocaine is there in a 45g tube?",
      answers: [
        { text: "0.15g" },
        { text: "0.135g", isCorrect: true },
        { text: "0.12g" },
        { text: "0.105g" },
        { text: "0.09g" },
      ],
      explanation: "0.3% of 45g = 0.3/100 x 45g.",
    },
    {
      question:
        "A patient is to receive 3mg/kg of Drug X. The patient weighs 60kg. The drug is available in 15mg/ml concentration. Calculate the required volume.",
      answers: [
        { text: "12ml", isCorrect: true },
        { text: "10ml" },
        { text: "8ml" },
        { text: "6ml" },
        { text: "14ml" },
      ],
      explanation: "Dose = 3mg/kg x 60kg; Volume = Dose / Concentration.",
    },
    {
      question:
        "If a 0.5g of a drug is to be administered over a 4-hour period and the drug comes in 250mg/5ml, calculate the infusion rate in ml/hr.",
      answers: [
        { text: "5ml/hr" },
        { text: "2.5ml/hr", isCorrect: true },
        { text: "1.25ml/hr" },
        { text: "2ml/hr" },
        { text: "3ml/hr" },
      ],
      explanation:
        "Total volume = 0.5g / (250mg/5ml); Infusion rate = Total volume / 4 hours.",
    },
    {
      question:
        "If the displacement volume of Ceftriaxone is 0.18ml per 250mg, what is the final volume after reconstituting a 1g dose with 10ml of diluent?",
      answers: [
        { text: "11ml" },
        { text: "10.72ml", isCorrect: true },
        { text: "10.5ml" },
        { text: "10.25ml" },
        { text: "9.5ml" },
      ],
      explanation:
        "1g = 4 x 250mg, so displacement = 4 x 0.18ml = 0.72ml. Total volume = 10ml + 0.72ml.",
    },
    {
      question:
        "A vial of Penicillin contains 500mg and has a displacement volume of 0.21ml/500mg. How much diluent should be added for reconstitution to achieve a final volume of 10ml?",
      answers: [
        { text: "9.79ml", isCorrect: true },
        { text: "10ml" },
        { text: "9.5ml" },
        { text: "9ml" },
        { text: "8.5ml" },
      ],
      explanation:
        "Subtract the displacement volume from the desired final volume: 10ml - 0.21ml.",
    },
    {
      question:
        "Calculate the final volume when 30ml of water is added to reconstitute a powder with a displacement volume of 0.4ml/g for a 1g dose.",
      answers: [
        { text: "31ml" },
        { text: "30.4ml", isCorrect: true },
        { text: "29ml" },
        { text: "28ml" },
        { text: "32ml" },
      ],
      explanation:
        "Displacement volume for 1g = 0.4ml. Total volume = 30ml + 0.4ml.",
    },
    {
      question:
        "A medication with a displacement value of 0.15ml/100mg is reconstituted with 5ml of water. What is the final volume for a 200mg dose?",
      answers: [
        { text: "5.6ml" },
        { text: "5.3ml", isCorrect: true },
        { text: "5.1ml" },
        { text: "4.8ml" },
        { text: "5.5ml" },
      ],
      explanation:
        "Displacement volume = 0.15ml/100mg x 200mg = 0.3ml. Total volume = 5ml + 0.3ml.",
    },
    {
      question:
        "When reconstituting a 750mg dose of a drug with a displacement volume of 0.25ml/250mg, how much diluent is needed to achieve a final volume of 15ml?",
      answers: [
        { text: "14.5ml" },
        { text: "14.25ml", isCorrect: true },
        { text: "13.75ml" },
        { text: "15ml" },
        { text: "13.5ml" },
      ],
      explanation:
        "Displacement volume for 750mg = 3 x 0.25ml = 0.75ml. Required diluent = 15ml - 0.75ml.",
    },
    {
      question:
        "A 2g vial of a drug has a displacement volume of 0.5ml/g. Calculate the final volume after adding 20ml of diluent.",
      answers: [
        { text: "21ml", isCorrect: true },
        { text: "22ml" },
        { text: "20ml" },
        { text: "23ml" },
        { text: "19ml" },
      ],
      explanation:
        "Displacement volume for 2g = 2 x 0.5ml = 1ml. Total volume = 20ml + 1ml.",
    },
    {
      question:
        "If a 400mg vial of medication has a displacement volume of 0.2ml/100mg, what will be the final volume after adding 8ml of diluent?",
      answers: [
        { text: "8.6ml" },
        { text: "8.8ml", isCorrect: true },
        { text: "9ml" },
        { text: "7.8ml" },
        { text: "8.4ml" },
      ],
      explanation:
        "Displacement volume for 400mg = 4 x 0.2ml = 0.8ml. Total volume = 8ml + 0.8ml.",
    },
    {
      question:
        "For a 1.5g dose of a drug with a displacement volume of 0.3ml/500mg, how much diluent should be added to achieve a final volume of 12ml?",
      answers: [
        { text: "11.1ml" },
        { text: "11.4ml", isCorrect: true },
        { text: "12ml" },
        { text: "10.5ml" },
        { text: "11.7ml" },
      ],
      explanation:
        "Displacement volume for 1.5g = 3 x 0.3ml = 0.9ml. Required diluent = 12ml - 0.9ml.",
    },
    {
      question:
        "Calculate the final volume after adding 6ml of water to reconstitute a 500mg dose of a drug with a displacement volume of 0.12ml/250mg.",
      answers: [
        { text: "6.48ml" },
        { text: "6.24ml", isCorrect: true },
        { text: "6ml" },
        { text: "5.76ml" },
        { text: "6.12ml" },
      ],
      explanation:
        "Displacement volume for 500mg = 2 x 0.12ml = 0.24ml. Total volume = 6ml + 0.24ml.",
    },
    {
      question:
        "A drug has a displacement volume of 0.2ml/100mg and is available in a 250mg vial. If 5ml of diluent is added, what is the final volume?",
      answers: [
        { text: "5.2ml" },
        { text: "5.5ml", isCorrect: true },
        { text: "4.8ml" },
        { text: "5.8ml" },
        { text: "6ml" },
      ],
      explanation:
        "Displacement volume for 250mg = 2.5 x 0.2ml = 0.5ml. Total volume = 5ml + 0.5ml.",
    },
    {
      question:
        "A 600mg dose of a drug has a displacement volume of 0.2ml/100mg. How much diluent is needed for a final volume of 10ml?",
      answers: [
        { text: "10.2ml" },
        { text: "9.8ml", isCorrect: true },
        { text: "9.4ml" },
        { text: "9.2ml" },
        { text: "10ml" },
      ],
      explanation:
        "Displacement volume for 600mg = 6 x 0.2ml = 1.2ml. Required diluent = 10ml - 1.2ml.",
    },
    {
      question:
        "Calculate the final volume when adding 7ml of diluent to a 300mg vial of medication with a displacement volume of 0.15ml/100mg.",
      answers: [
        { text: "7.55ml" },
        { text: "7.45ml", isCorrect: true },
        { text: "7.35ml" },
        { text: "7.25ml" },
        { text: "7.65ml" },
      ],
      explanation:
        "Displacement volume for 300mg = 3 x 0.15ml = 0.45ml. Total volume = 7ml + 0.45ml.",
    },
    {
      question:
        "If a 1g vial of a drug has a displacement volume of 0.3ml/500mg, how much diluent is needed for a final volume of 15ml?",
      answers: [
        { text: "14.7ml" },
        { text: "14.4ml", isCorrect: true },
        { text: "15ml" },
        { text: "13.5ml" },
        { text: "14.1ml" },
      ],
      explanation:
        "Displacement volume for 1g = 2 x 0.3ml = 0.6ml. Required diluent = 15ml - 0.6ml.",
    },
    {
      question:
        "A drug with a displacement volume of 0.25ml/g is reconstituted with 12ml of water for a 750mg dose. What is the final volume?",
      answers: [
        { text: "12.1875ml", isCorrect: true },
        { text: "12ml" },
        { text: "11.8125ml" },
        { text: "12.375ml" },
        { text: "11.625ml" },
      ],
      explanation:
        "Displacement volume for 750mg = 0.75g x 0.25ml/g. Total volume = 12ml + displacement volume.",
    },
    {
      question:
        "Calculate the volume of diluent to add to a 400mg vial of medication with a displacement volume of 0.1ml/100mg for a 5ml final volume.",
      answers: [
        { text: "4.8ml" },
        { text: "5ml" },
        { text: "4.6ml", isCorrect: true },
        { text: "4.4ml" },
        { text: "4.2ml" },
      ],
      explanation:
        "Displacement volume for 400mg = 4 x 0.1ml. Required diluent = 5ml - displacement volume.",
    },
    {
      question:
        "A patient needs a drug reconstituted from a 2g vial with a displacement volume of 0.4ml/500mg. How much diluent for a final volume of 20ml?",
      answers: [
        { text: "18.8ml" },
        { text: "19.2ml", isCorrect: true },
        { text: "19.6ml" },
        { text: "20ml" },
        { text: "18.4ml" },
      ],
      explanation:
        "Displacement volume for 2g = 4 x 0.4ml. Required diluent = 20ml - displacement volume.",
    },
    {
      question:
        "For a 500mg dose of a drug with a displacement volume of 0.2ml/250mg, calculate the final volume after adding 8ml of diluent.",
      answers: [
        { text: "8.2ml" },
        { text: "8.6ml" },
        { text: "8.4ml", isCorrect: true },
        { text: "8.8ml" },
        { text: "7.8ml" },
      ],
      explanation:
        "Displacement volume for 500mg = 2 x 0.2ml. Total volume = 8ml + displacement volume.",
    },
    {
      question:
        "A vial containing 1.5g of medication has a displacement volume of 0.5ml/750mg. How much diluent is needed for a final volume of 25ml?",
      answers: [
        { text: "24.5ml", isCorrect: true },
        { text: "25ml" },
        { text: "24ml" },
        { text: "23.5ml" },
        { text: "24.75ml" },
      ],
      explanation:
        "Displacement volume for 1.5g = 0.5ml. Required diluent = 25ml - displacement volume.",
    },
    {
      question:
        "What is the final volume after adding 6ml of water to a 250mg vial of medication with a displacement volume of 0.3ml/500mg?",
      answers: [
        { text: "6.3ml" },
        { text: "6.15ml", isCorrect: true },
        { text: "5.85ml" },
        { text: "6ml" },
        { text: "6.45ml" },
      ],
      explanation:
        "Displacement volume for 250mg = 0.15ml. Total volume = 6ml + displacement volume.",
    },
    {
      question:
        "If a 3g vial of a drug has a displacement volume of 0.2ml/500mg, calculate the final volume after adding 30ml of diluent.",
      answers: [
        { text: "31ml" },
        { text: "30.8ml" },
        { text: "31.2ml", isCorrect: true },
        { text: "32ml" },
        { text: "30.4ml" },
      ],
      explanation:
        "Displacement volume for 3g = 6 x 0.2ml. Total volume = 30ml + displacement volume.",
    },
    {
      question:
        "Calculate the bioavailability of a drug given orally at 500mg, resulting in a systemic circulation concentration of 200mg.",
      answers: [
        { text: "0.3" },
        { text: "0.4", isCorrect: true },
        { text: "0.5" },
        { text: "0.6" },
        { text: "0.2" },
      ],
      explanation:
        "Bioavailability = Amount in systemic circulation / Dose = 200mg / 500mg.",
    },
    {
      question:
        "A drug with a half-life of 4 hours is administered. How much of the drug remains after 12 hours?",
      answers: [
        { text: "6.25%" },
        { text: "12.50%", isCorrect: true },
        { text: "25%" },
        { text: "50%" },
        { text: "75%" },
      ],
      explanation:
        "After each half-life, the drug amount halves; after 3 half-lives (12 hours), 12.5% remains.",
    },
    {
      question:
        "Determine the volume of distribution for a drug administered at 200mg, achieving a plasma concentration of 2mg/L.",
      answers: [
        { text: "100L", isCorrect: true },
        { text: "50L" },
        { text: "150L" },
        { text: "200L" },
        { text: "250L" },
      ],
      explanation: "Vd = Dose / Plasma concentration = 200mg / 2mg/L.",
    },
    {
      question:
        "Calculate the clearance rate if 500mg of a drug results in a steady-state concentration of 5mg/L, given over 4 hours.",
      answers: [
        { text: "20 L/hr" },
        { text: "25 L/hr", isCorrect: true },
        { text: "30 L/hr" },
        { text: "35 L/hr" },
        { text: "40 L/hr" },
      ],
      explanation:
        "Clearance = Dose / (Concentration x Time) = 500mg / (5mg/L x 4hr).",
    },
    {
      question:
        "If a drug is 80% protein-bound and the total concentration is 50mg/L, what is the free drug concentration?",
      answers: [
        { text: "5mg/L" },
        { text: "10mg/L", isCorrect: true },
        { text: "15mg/L" },
        { text: "20mg/L" },
        { text: "25mg/L" },
      ],
      explanation:
        "Free drug = Total drug x (1 - Protein binding) = 50mg/L x 20%.",
    },
    {
      question:
        "Calculate the loading dose required to achieve a target concentration of 5mg/L for a drug with a Vd of 0.7 L/kg for a 70kg patient.",
      answers: [
        { text: "245mg", isCorrect: true },
        { text: "350mg" },
        { text: "490mg" },
        { text: "175mg" },
        { text: "140mg" },
      ],
      explanation: "Loading Dose = Vd x Target concentration x Weight.",
    },
    {
      question:
        "A patient requires a maintenance dose of a drug with a clearance of 0.1 L/hr/kg and a target concentration of 4mg/L. If the patient weighs 60kg, calculate the dose.",
      answers: [
        { text: "20mg/hr" },
        { text: "24mg/hr", isCorrect: true },
        { text: "28mg/hr" },
        { text: "32mg/hr" },
        { text: "36mg/hr" },
      ],
      explanation:
        "Maintenance Dose = Clearance x Target concentration x Weight.",
    },
    {
      question:
        "Find the elimination rate constant for a drug with a half-life of 6 hours.",
      answers: [
        { text: "0.1155 hr⁻¹", isCorrect: true },
        { text: "0.123 hr⁻¹" },
        { text: "0.1305 hr⁻¹" },
        { text: "0.138 hr⁻¹" },
        { text: "0.1455 hr⁻¹" },
      ],
      explanation: "k = 0.693 / t1/2.",
    },
    {
      question:
        "Determine the time required for a drug concentration to drop from 100mg/L to 25mg/L, given a half-life of 8 hours.",
      answers: [
        { text: "16 hours", isCorrect: true },
        { text: "8 hours" },
        { text: "24 hours" },
        { text: "32 hours" },
        { text: "12 hours" },
      ],
      explanation:
        "Number of half-lives to reduce from 100mg/L to 25mg/L = 2; Total time = 2 x 8 hours.",
    },
    {
      question:
        "Calculate the peak plasma concentration after administering a 300mg dose of a drug intravenously with a bioavailability of 1 and a Vd of 50L.",
      answers: [
        { text: "4mg/L" },
        { text: "5mg/L" },
        { text: "6mg/L", isCorrect: true },
        { text: "7mg/L" },
        { text: "8mg/L" },
      ],
      explanation: "Concentration = Dose / Vd = 300mg / 50L.",
    },
    {
      question:
        "Calculate the half-life of a drug with an elimination rate constant (k) of 0.138 hr⁻¹.",
      answers: [
        { text: "4.02 hours" },
        { text: "5.02 hours", isCorrect: true },
        { text: "6.02 hours" },
        { text: "7.02 hours" },
        { text: "3.02 hours" },
      ],
      explanation: "t1/2 = 0.693 / k.",
    },
    {
      question:
        "If a patient is administered a drug intravenously with a bioavailability of 0.8 and a Vd of 40L, calculate the peak plasma concentration after a 500mg dose.",
      answers: [
        { text: "10 mg/L" },
        { text: "12.5 mg/L", isCorrect: true },
        { text: "15 mg/L" },
        { text: "17.5 mg/L" },
        { text: "20 mg/L" },
      ],
      explanation: "C = Dose / (Vd x bioavailability) = 500mg / (40L x 0.8).",
    },
    {
      question:
        "Determine the loading dose for a drug with a Vd of 0.6 L/kg for a 70kg patient to achieve a target concentration of 8mg/L.",
      answers: [
        { text: "336mg", isCorrect: true },
        { text: "420mg" },
        { text: "504mg" },
        { text: "588mg" },
        { text: "672mg" },
      ],
      explanation: "LD = Vd x Target concentration x Weight.",
    },
    {
      question:
        "Calculate the steady-state concentration of a drug administered at 20mg/hr with a clearance of 0.05 L/hr/kg for an 80kg patient.",
      answers: [
        { text: "4 mg/L" },
        { text: "5 mg/L", isCorrect: true },
        { text: "6 mg/L" },
        { text: "7 mg/L" },
        { text: "8 mg/L" },
      ],
      explanation: "Css = Dose rate / (Clearance x Weight).",
    },
    {
      question:
        "A drug is 90% protein-bound and has a total concentration of 60mg/L. Find the free drug concentration.",
      answers: [
        { text: "6mg/L", isCorrect: true },
        { text: "12mg/L" },
        { text: "18mg/L" },
        { text: "24mg/L" },
        { text: "30mg/L" },
      ],
      explanation:
        "Free drug = Total drug x (1 - Protein binding) = 60mg/L x 10%.",
    },
    {
      question:
        "For a drug with a half-life of 3 hours, calculate the amount remaining after 9 hours from an initial dose of 200mg.",
      answers: [
        { text: "25mg", isCorrect: true },
        { text: "50mg" },
        { text: "75mg" },
        { text: "100mg" },
        { text: "125mg" },
      ],
      explanation:
        "Remaining amount reduces by half every 3 hours; after 9 hours, it's 1/8th.",
    },
    {
      question:
        "If 250ml of a 4% solution is diluted to make a 0.5% solution, what is the final volume?",
      answers: [
        { text: "1500ml" },
        { text: "2000ml", isCorrect: true },
        { text: "2500ml" },
        { text: "3000ml" },
        { text: "3500ml" },
      ],
      explanation: "Use C1V1 = C2V2; 4% x 250ml = 0.5% x V2.",
    },
    {
      question:
        "Calculate the volume of distribution for a drug administered at 300mg, achieving a plasma concentration of 3mg/L.",
      answers: [
        { text: "50L" },
        { text: "75L" },
        { text: "100L", isCorrect: true },
        { text: "125L" },
        { text: "150L" },
      ],
      explanation: "Vd = Dose / Plasma concentration.",
    },
    {
      question:
        "Determine the clearance rate if 400mg of a drug results in a steady-state concentration of 4mg/L, given over 6 hours.",
      answers: [
        { text: "15 L/hr" },
        { text: "16.67 L/hr", isCorrect: true },
        { text: "18 L/hr" },
        { text: "20 L/hr" },
        { text: "12 L/hr" },
      ],
      explanation: "Clearance = Dose / (Concentration x Time).",
    },
    {
      question:
        "Calculate the bioavailability of a drug given orally at 600mg, resulting in a systemic circulation concentration of 180mg.",
      answers: [
        { text: "0.25" },
        { text: "0.3", isCorrect: true },
        { text: "0.35" },
        { text: "0.4" },
        { text: "0.2" },
      ],
      explanation: "Bioavailability = Amount in systemic circulation / Dose.",
    },
    {
      question:
        "Determine the elimination rate constant for a drug with a half-life of 3 hours.",
      answers: [
        { text: "0.231 hr⁻¹", isCorrect: true },
        { text: "0.200 hr⁻¹" },
        { text: "0.250 hr⁻¹" },
        { text: "0.275 hr⁻¹" },
        { text: "0.300 hr⁻¹" },
      ],
      explanation: "k = 0.693 / t1/2.",
    },
    {
      question:
        "Calculate the bioavailability of an oral drug given at 400mg with 160mg reaching systemic circulation.",
      answers: [
        { text: "0.5" },
        { text: "0.4", isCorrect: true },
        { text: "0.3" },
        { text: "0.2" },
        { text: "0.6" },
      ],
      explanation: "Bioavailability = Systemic circulation / Dose.",
    },
    {
      question:
        "For a drug with a Vd of 0.8 L/kg, calculate the volume of distribution for a 60kg patient.",
      answers: [
        { text: "48L", isCorrect: true },
        { text: "50L" },
        { text: "52L" },
        { text: "46L" },
        { text: "44L" },
      ],
      explanation: "Vd = 0.8 L/kg x 60kg.",
    },
    {
      question:
        "If a drug's plasma concentration decreases from 120mg/L to 30mg/L in 8 hours, what is its half-life?",
      answers: [
        { text: "4 hours", isCorrect: true },
        { text: "2 hours" },
        { text: "6 hours" },
        { text: "8 hours" },
        { text: "10 hours" },
      ],
      explanation:
        "Use the half-life formula based on concentration reduction.",
    },
    {
      question:
        "Find the loading dose needed to achieve a target plasma concentration of 6mg/L for a drug with a Vd of 0.5 L/kg in a 70kg patient.",
      answers: [
        { text: "210mg", isCorrect: true },
        { text: "200mg" },
        { text: "220mg" },
        { text: "230mg" },
        { text: "240mg" },
      ],
      explanation: "LD = Vd x Target concentration x Weight.",
    },
    {
      question:
        "Calculate the maintenance dose rate for a drug with a clearance of 0.04 L/hr/kg and a target concentration of 5mg/L in an 80kg patient.",
      answers: [
        { text: "16mg/hr", isCorrect: true },
        { text: "14mg/hr" },
        { text: "18mg/hr" },
        { text: "20mg/hr" },
        { text: "12mg/hr" },
      ],
      explanation: "MD = Clearance x Target concentration x Weight.",
    },
    {
      question:
        "If 30% of a drug is protein-bound and its total plasma concentration is 50mg/L, determine the free drug concentration.",
      answers: [
        { text: "35mg/L", isCorrect: true },
        { text: "30mg/L" },
        { text: "25mg/L" },
        { text: "40mg/L" },
        { text: "45mg/L" },
      ],
      explanation: "Free drug = Total concentration x (1 - Protein binding).",
    },
    {
      question:
        "A 200mg dose of a drug is administered, resulting in a steady-state concentration of 2mg/L. Calculate its volume of distribution.",
      answers: [
        { text: "100L", isCorrect: true },
        { text: "90L" },
        { text: "110L" },
        { text: "120L" },
        { text: "80L" },
      ],
      explanation: "Vd = Dose / Steady-state concentration.",
    },
    {
      question:
        "Determine the time for a drug concentration to reduce from 100mg/L to 12.5mg/L, given a half-life of 6 hours.",
      answers: [
        { text: "18 hours", isCorrect: true },
        { text: "12 hours" },
        { text: "24 hours" },
        { text: "6 hours" },
        { text: "30 hours" },
      ],
      explanation:
        "Use half-life formula; concentration is reduced to 1/8th in three half-lives.",
    },
    {
      question:
        "Calculate the clearance for a drug given at a rate of 50mg/hr, reaching a steady-state concentration of 10mg/L.",
      answers: [
        { text: "4 L/hr" },
        { text: "5 L/hr", isCorrect: true },
        { text: "6 L/hr" },
        { text: "7 L/hr" },
        { text: "8 L/hr" },
      ],
      explanation: "Clearance = Dose rate / Steady-state concentration.",
    },
    {
      question:
        "If a drug's half-life is 6 hours and a patient receives a 300mg dose, how much remains after 24 hours?",
      answers: [
        { text: "18.75mg", isCorrect: true },
        { text: "25mg" },
        { text: "37.5mg" },
        { text: "50mg" },
        { text: "75mg" },
      ],
      explanation:
        "300mg → 150mg (6 hrs) → 75mg (12 hrs) → 37.5mg (18 hrs) → 18.75mg (24 hrs).",
    },
    {
      question:
        "Calculate the steady-state concentration for a drug given at 10mg/hr with a clearance of 0.2 L/hr/kg in a 70kg patient.",
      answers: [
        { text: "0.5mg/L" },
        { text: "0.6mg/L" },
        { text: "0.71mg/L", isCorrect: true },
        { text: "0.8mg/L" },
        { text: "0.9mg/L" },
      ],
      explanation:
        "Css = Dose rate / (Clearance x Weight) = 10mg/hr / (0.2 L/hr/kg x 70kg).",
    },
    {
      question:
        "Determine the volume of distribution for a drug given at 250mg, achieving a plasma concentration of 10mg/L.",
      answers: [
        { text: "20L" },
        { text: "25L", isCorrect: true },
        { text: "30L" },
        { text: "35L" },
        { text: "40L" },
      ],
      explanation: "Vd = Dose / Plasma concentration = 250mg / 10mg/L.",
    },
    {
      question:
        "A drug with a bioavailability of 0.5 is given orally at 400mg. Calculate the amount reaching systemic circulation.",
      answers: [
        { text: "200mg", isCorrect: true },
        { text: "100mg" },
        { text: "300mg" },
        { text: "400mg" },
        { text: "150mg" },
      ],
      explanation:
        "Systemic circulation = Dose x Bioavailability = 400mg x 0.5.",
    },
    {
      question:
        "For a drug with a Vd of 0.7 L/kg, calculate the loading dose to achieve a target concentration of 15mg/L in a 60kg patient.",
      answers: [
        { text: "620mg" },
        { text: "630mg", isCorrect: true },
        { text: "640mg" },
        { text: "650mg" },
        { text: "660mg" },
      ],
      explanation:
        "LD = Vd x Target concentration x Weight = 0.7 L/kg x 15mg/L x 60kg.",
    },
    {
      question:
        "If 40% of a drug is protein-bound and its total concentration is 80mg/L, find the free concentration.",
      answers: [
        { text: "48mg/L", isCorrect: true },
        { text: "32mg/L" },
        { text: "40mg/L" },
        { text: "50mg/L" },
        { text: "60mg/L" },
      ],
      explanation:
        "Free concentration = Total concentration x (1 - Protein binding) = 80mg/L x 60%.",
    },
    {
      question:
        "Calculate the elimination rate constant for a drug with a half-life of 4 hours.",
      answers: [
        { text: "0.173 hr⁻¹", isCorrect: true },
        { text: "0.150 hr⁻¹" },
        { text: "0.200 hr⁻¹" },
        { text: "0.225 hr⁻¹" },
        { text: "0.250 hr⁻¹" },
      ],
      explanation: "k = 0.693 / t1/2 = 0.693 / 4 hr.",
    },
    {
      question:
        "Determine the maintenance dose for a drug with a clearance of 0.1 L/hr/kg, a target concentration of 4mg/L, and a patient weight of 50kg.",
      answers: [
        { text: "18mg/hr" },
        { text: "20mg/hr", isCorrect: true },
        { text: "22mg/hr" },
        { text: "24mg/hr" },
        { text: "16mg/hr" },
      ],
      explanation:
        "MD = Clearance x Target concentration x Weight = 0.1 L/hr/kg x 4mg/L x 50kg.",
    },
    {
      question:
        "Calculate the time to reach a drug concentration of 5mg/L from 40mg/L, given a half-life of 2 hours.",
      answers: [
        { text: "6 hours", isCorrect: true },
        { text: "4 hours" },
        { text: "8 hours" },
        { text: "10 hours" },
        { text: "12 hours" },
      ],
      explanation:
        "Concentration halves every 2 hours; from 40mg/L to 5mg/L takes three half-lives (6 hours).",
    },
    {
      question:
        "Find the volume of distribution for a 500mg dose of a drug resulting in a plasma concentration of 5mg/L.",
      answers: [
        { text: "90L" },
        { text: "100L", isCorrect: true },
        { text: "110L" },
        { text: "120L" },
        { text: "80L" },
      ],
      explanation: "Vd = Dose / Plasma concentration = 500mg / 5mg/L.",
    },
  ],
};
