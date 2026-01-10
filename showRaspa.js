const showRaspa = (person) => {
    const tableContainer = document.getElementById("table-container");

    const oldTable = document.getElementById('table-raspa');
    if (oldTable) {
        oldTable.remove();
    }

    const table = document.createElement('table');
    table.id = "table-raspa";
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    })

    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let i = 0; i < 11; i++) {
        const row = document.createElement('tr');
        const timeCell = document.createElement('td');

        timeCell.textContent = `${i + 8}:00 - ${i + 8}:50`;
        row.appendChild(timeCell);

        for (let day in person) {
            const subjectCell = document.createElement('td');

            if (person[day][i] == "window") {

                subjectCell.className = "window-cell";
                
            } else if (person[day][i] != null) {
                const { name, professor, cabinet } = person[day][i];

                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                const p3 = document.createElement('p');

                p1.className = 'subject-cell-text';
                p2.className = 'subject-cell-text';
                p3.className = 'subject-cell-text';
                subjectCell.className = 'subject-cell';

                p1.textContent = name;
                p2.textContent = professor;
                p3.textContent = cabinet;

                subjectCell.appendChild(p1);
                subjectCell.appendChild(p2);
                subjectCell.appendChild(p3);
            }

            row.appendChild(subjectCell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}

export { showRaspa };