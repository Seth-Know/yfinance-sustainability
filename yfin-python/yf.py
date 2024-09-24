import pandas as pd
import yfinance as yf

# Read the CSV file with company symbols
df = pd.read_csv('C:\Repo\yfin\constituents.csv')

# List to store the sustainability data
results = []

# Loop through each company symbol in the CSV
for index, row in df.iterrows():
    symbol = row['Symbol']
    companyName = row['Security']
    
    # Fetch sustainability data using yfinance
    ticker = yf.Ticker(symbol)
    sustainability_data = ticker.sustainability
    if sustainability_data is not None and not sustainability_data.empty:
        # Extract key ESG scores
        total_esg = sustainability_data.loc['totalEsg', 'esgScores']
        environment_score = sustainability_data.loc['environmentScore', 'esgScores']
        social_score = sustainability_data.loc['socialScore', 'esgScores']
        governance_score = sustainability_data.loc['governanceScore', 'esgScores']            
        rating_year = sustainability_data.loc['ratingYear', 'esgScores']            
        rating_month = sustainability_data.loc['ratingMonth', 'esgScores']            

        # Extract only the required fields
        relevant_data = {
            'Company': companyName,
            'Symbol': symbol,            
            'totalEsg': total_esg,
            'environmentScore': environment_score,
            'socialScore': social_score,
            'governanceScore': governance_score,
            'ratingYear': rating_year,
            'ratingMonth': rating_month
        }

        # Append the relevant data to the results
        results.append(relevant_data)

# Convert the results to a DataFrame
sustainability_df = pd.DataFrame(results)

# Define the output CSV file path
output_file = 'C:\Repo\yfin\sustainability_data.csv'

# Write the data to a new CSV file
sustainability_df.to_csv(output_file, index=False)

print(f'Sustainability data saved to {output_file}')


# df = pd.read_csv('C:\Repo\yfin\constituents.csv')
# #symbol = "HELP HERE"
# ticker = yf.Ticker(symbol)
# sustainability_data = ticker.sustainability

# msft = yf.Ticker("MSFT")
# intc = yf.Ticker("INTC")

# print(msft.sustainability)
# print("*******************************************")
# print(intc.sustainability)
# get all stock info
# msft.info

# # get historical market data
# hist = msft.history(period="1mo")

# # show meta information about the history (requires history() to be called first)
# msft.history_metadata

# # show actions (dividends, splits, capital gains)
# msft.actions
# msft.dividends
# msft.splits
# msft.capital_gains  # only for mutual funds & etfs

# # show share count
# msft.get_shares_full(start="2022-01-01", end=None)

# # show financials:
# msft.calendar
# msft.sec_filings
# # - income statement
# msft.income_stmt
# msft.quarterly_income_stmt
# # - balance sheet
# msft.balance_sheet
# msft.quarterly_balance_sheet
# # - cash flow statement
# msft.cashflow
# msft.quarterly_cashflow
# # see `Ticker.get_income_stmt()` for more options

# # show holders
# msft.major_holders
# msft.institutional_holders
# msft.mutualfund_holders
# msft.insider_transactions
# msft.insider_purchases
# msft.insider_roster_holders


# # show recommendations
# msft.recommendations
# msft.recommendations_summary
# msft.upgrades_downgrades

# # show analysts data
# msft.analyst_price_targets
# msft.earnings_estimate
# msft.revenue_estimate
# msft.earnings_history
# msft.eps_trend
# msft.eps_revisions
# msft.growth_estimates

# # Show future and historic earnings dates, returns at most next 4 quarters and last 8 quarters by default.
# # Note: If more are needed use msft.get_earnings_dates(limit=XX) with increased limit argument.
# msft.earnings_dates

# # show ISIN code - *experimental*
# # ISIN = International Securities Identification Number
# msft.isin

# # show options expirations
# msft.options

# # show news
# msft.news

# # get option chain for specific expiration
# opt = msft.option_chain('2024-09-27')
# data available via: opt.calls, opt.puts