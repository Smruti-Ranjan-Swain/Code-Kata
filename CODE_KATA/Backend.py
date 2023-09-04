from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample balance sheet data
sample_balance_sheet = [
    {
        "year": 2020,
        "month": 12,
        "profitOrLoss": 250000,
        "assetsValue": 1234
    },
    # ... (other months)
]

# Sample decision engine simulation
def simulate_decision_engine(balance_sheet, loan_amount):
    # Apply rules here and calculate preAssessment
    pre_assessment = 20
    # Apply your rules to calculate pre_assessment based on balance_sheet and loan_amount
    # ...

    return pre_assessment

@app.route('/initiate', methods=['POST'])
def initiate_application():
    return jsonify({"status": "Initiate Complete"})

@app.route('/submit', methods=['POST'])
def submit_application():
    data = request.json
    business_details = data["businessDetails"]
    loan_amount = data["loanAmount"]
    accounting_provider = data["accountingProvider"]
    balance_sheet = data["balanceSheet"]

    pre_assessment = simulate_decision_engine(balance_sheet, loan_amount)

    result = {
        "businessDetails": business_details,
        "preAssessment": pre_assessment
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
