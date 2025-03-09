from flask import Flask, jsonify
from flask_cors import CORS
import plotly.express as px
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the Travel Itinerary API"

@app.route('/favicon.ico')
def favicon():
    return '', 204

@app.route('/api/chart', methods=['GET'])
def chart_data():
    # Sample data
    data = {
        "regions": ["Ontario", "Quebec", "British Columbia"],
        "travelers": [8000000, 5000000, 4000000]
    }
    
    # Create a DataFrame
    df = pd.DataFrame(data)
    
    # Create a chart using Plotly Express
    fig = px.bar(df, x="regions", y="travelers", title="Travel Statistics in Canada (2024)")
    
    # Generate HTML for the chart
    chart_html = fig.to_html(full_html=False)  # We use full_html=False to only return the chart
    
    return chart_html  # Return the chart HTML

if __name__ == "__main__":
    app.run(debug=True)
