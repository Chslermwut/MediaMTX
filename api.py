from flask import Flask, render_template
import os

app = Flask(__name__)

# Enable debugging for better error tracking
app.config['DEBUG'] = True

@app.route('/')
def index():
    try:
        return render_template('index.html')  # Serve the WebRTC HTML page
    except Exception as e:
        print(f"Error loading template: {e}")
        return "An error occurred while loading the page", 500

if __name__ == "__main__":
    # Running the Flask app on localhost with a port 5000
    app.run(host='0.0.0.0', port=5001, debug=True)
