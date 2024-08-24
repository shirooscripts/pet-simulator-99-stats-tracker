function fetchStats() {
    fetch('https://your-backend-service.herokuapp.com/get_stats')  // Update this URL with your actual backend URL
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
