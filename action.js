let projectId = 0;

function deleteProject(id) {
  const div = document.getElementById(id);
  div.remove();
}

function addTextBox() {
  const input1Value = document.getElementById("input1").value;
  const input2Value = document.getElementById("input2").value;

  if (input1Value === "") {
    alert("프로젝트 이름을 입력해주세요!");
    document.getElementById("input1").focus();
    return;
  }
  if (input2Value === "") {
    alert("기간을 입력해주세요!");
    document.getElementById("input2").focus();
    return;
  }

  projectId++;
  const pId = projectId.toString();

  const newTextDiv = document.createElement("div");
  newTextDiv.className = "text-box";
  newTextDiv.id = pId;
  newTextDiv.innerHTML = `
    <p class="text">${input1Value}</p>
    <p class="year-text">(${input2Value})</p>
    <button class='delete'onClick="deleteProject('${pId}')">삭제</button>
  `;

  const container = document.getElementById("container");
  container.appendChild(newTextDiv);
  console.log(`프로젝트 : ${input1Value}, 기간 : ${input2Value}`);

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
