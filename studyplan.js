fetch("studyplan.json")
  .then((response) => response.json())
  .then((data) => {
    const tbody = document.querySelector("#studyplantable tbody");

    data.forEach((item) => {
      const row = document.createElement("tr");
      const courseCell = document.createElement("td");
      const titleCell = document.createElement("td");
      const creditCell = document.createElement("td");
      const PrerequisitesCell = document.createElement("td");
      const CheckBoxCell = document.createElement("td");

      courseCell.textContent = item.Coursecode;

      titleCell.textContent = item.Title;
      creditCell.textContent = item.Credits;
      PrerequisitesCell.textContent = item.Prerequisites;
      CheckBoxCell.textContent = item.Checkbox;

      row.appendChild(courseCell);

      row.appendChild(titleCell);
      row.appendChild(creditCell);
      row.appendChild(PrerequisitesCell);
      row.appendChild(CheckBoxCell);

      tbody.appendChild(row);
    });
  });
