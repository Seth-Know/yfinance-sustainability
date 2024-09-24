from flask import Flask, render_template, request
import pandas as pd
import yfinance as yf

app = Flask(__name__)

@app.route('/')
def index():
    # Load the CSV file
    df = pd.read_csv('C:\Repo\yfin\constituents.csv')
    
    # Create a list of tuples (symbol, company name)
    dropdown_options = list(zip(df['Symbol'], df['Security']))
    
    return render_template('index.html', options=dropdown_options)

@app.route('/sustainability', methods=['POST'])
def sustainability():
    symbol = request.form['symbol']
    ticker = yf.Ticker(symbol)
    sustainability_data = ticker.sustainability
    
    # Convert sustainability data to a dictionary for display
    sustainability_dict = sustainability_data.to_dict() if sustainability_data is not None else {}

    return render_template('sustainability.html', symbol=symbol, sustainability=sustainability_dict)

if __name__ == '__main__':
    app.run(debug=True)
