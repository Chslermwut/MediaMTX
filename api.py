from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Enable debugging for better error tracking
app.config['DEBUG'] = True

@app.route('/')
def index():
    try:
        # Serve the static HTML file
        return send_from_directory('website', 'web.html')
    except Exception as e:
        print(f"Error loading file: {e}")
        return "An error occurred while loading the page", 500

if __name__ == "__main__":
    # Running the Flask app
    app.run(host='0.0.0.0', port=6002, debug=True)
