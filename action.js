// 프로젝트 ID 카운터
let projectIdCounter = 0;

// 프로젝트 삭제 함수
function deleteProject(projectId) {
  const projectElement = document.getElementById(projectId);
  projectElement.remove();

  // 프로젝트 정보 로그 제거
  console.clear();
}

// 새로운 프로젝트 추가 함수
function addProject() {
  const projectNameInput = document.getElementById("input1");
  const projectDurationInput = document.getElementById("input2");

  const projectName = projectNameInput.value;
  const projectDuration = projectDurationInput.value;

  if (projectName === "") {
    alert("프로젝트 이름을 입력해주세요!");
    projectNameInput.focus();
    return;
  }
  if (projectDuration === "") {
    alert("기간을 입력해주세요!");
    projectDurationInput.focus();
    return;
  }

  projectIdCounter++;
  const projectId = "project" + projectIdCounter;

  // 새로운 프로젝트 요소 생성
  const newProjectDiv = document.createElement("div");
  newProjectDiv.className = "text-box";
  newProjectDiv.id = projectId;

  // 프로젝트 이름 텍스트 엘리먼트 생성
  const textElement = document.createElement("p");
  textElement.className = "text";
  textElement.textContent = projectName;

  // 프로젝트 기간 텍스트 엘리먼트 생성
  const yearTextElement = document.createElement("p");
  yearTextElement.className = "year-text";
  yearTextElement.textContent = `(${projectDuration})`;

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "삭제";

  // 삭제 버튼 클릭 이벤트 핸들러 등록
  deleteButton.addEventListener("click", () => {
    deleteProject(projectId);
  });

  newProjectDiv.appendChild(textElement);
  newProjectDiv.appendChild(yearTextElement);
  newProjectDiv.appendChild(deleteButton);

  // 프로젝트 컨테이너에 추가
  const container = document.getElementById("container");
  container.appendChild(newProjectDiv);

  // 콘솔에 프로젝트 정보 출력
  console.log(`프로젝트 : ${projectName}, 기간 : ${projectDuration}`);

  // JSON으로 프로젝트 정보 출력
  const projectInfo = {
    projectName: projectName,
    projectDuration: projectDuration,
  };
  console.log("프로젝트 정보: " + JSON.stringify(projectInfo));

  // 입력 필드 초기화
  projectNameInput.value = "";
  projectDurationInput.value = "";
}
