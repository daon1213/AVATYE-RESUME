let projectIdCounter = 0; // 프로젝트 ID 카운터

function deleteProject(projectId) {
  const projectElement = document.getElementById(projectId);
  projectElement.remove();
}

// 새로운 프로젝트 추가 함수
function addProject() {
  const projectNameInputValue = document.getElementById("input1").value;
  const projectDurationInputValue = document.getElementById("input2").value;

  if (projectNameInputValue === "") {
    alert("프로젝트 이름을 입력해주세요!");
    document.getElementById("input1").focus();
    return;
  }
  if (projectDurationInputValue === "") {
    alert("기간을 입력해주세요!");
    document.getElementById("input2").focus();
    return;
  }

  projectIdCounter++;
  const projectId = "project" + projectIdCounter;

  // 새로운 프로젝트를 나타내는 DOM 객체를 생성
  const newProjectDiv = document.createElement("div");
  newProjectDiv.className = "text-box";
  newProjectDiv.id = projectId;

  const textElement = document.createElement("p");
  textElement.className = "text";
  textElement.textContent = projectNameInputValue;

  const yearTextElement = document.createElement("p");
  yearTextElement.className = "year-text";
  yearTextElement.textContent = `(${projectDurationInputValue})`;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", () => {
    deleteProject(projectId);
  });

  newProjectDiv.appendChild(textElement);
  newProjectDiv.appendChild(yearTextElement);
  newProjectDiv.appendChild(deleteButton);

  // 새로운 프로젝트 DOM 객체를 컨테이너에 추가
  const container = document.getElementById("container");
  container.appendChild(newProjectDiv);

  // 콘솔에 프로젝트 정보 출력
  console.log(
    `프로젝트 : ${projectNameInputValue}, 기간 : ${projectDurationInputValue}`
  );

  // 입력 필드 초기화
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
