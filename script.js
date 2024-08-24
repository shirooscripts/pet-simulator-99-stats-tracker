document.getElementById('generateScriptBtn').addEventListener('click', function() {
    fetch('https://shiroo.pythonanywhere.com/generate_script')  // Update with your PythonAnywhere Flask server URL
        .then(response => response.text())
        .then(data => {
            document.getElementById('generatedScript').value = data;
        })
        .catch(error => console.error('Error generating script:', error));
});

function fetchStats() {
    fetch('https://shiroo.pythonanywhere.com/get_stats')  // Update with your PythonAnywhere Flask server URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('statsTable');
            tableBody.innerHTML = '';  // Clear the table before adding new data

            data.forEach(player => {
                const row = document.createElement("tr");

                const usernameCell = document.createElement("td");
                usernameCell.textContent = player.username;

                const diamondsCell = document.createElement("td");
                diamondsCell.textContent = player.diamonds;

                const rankCell = document.createElement("td");
                rankCell.textContent = player.rank;

                row.appendChild(usernameCell);
                row.appendChild(diamondsCell);
                row.appendChild(rankCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener("DOMContentLoaded", fetchStats);
