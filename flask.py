from flask import Flask, request, jsonify

app = Flask(__name__)

# Example in-memory storage for player data
player_data = [
]

@app.route('/update_stats', methods=['POST'])
def update_stats():
    data = request.json
    player_data.append(data)
    return jsonify({"status": "success"}), 200

@app.route('/get_stats', methods=['GET'])
def get_stats():
    return jsonify(player_data), 200

if __name__ == '__main__':
    app.run(debug=True)
