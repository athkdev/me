const rolesElement = document.getElementById("roles");

const roles = ["software engineer", "blogger", "open source guy"];
let current_index = 0;

rolesElement.onmouseover = function () {
  document.getElementById("hover-box").style.display = "inline";
};

rolesElement.onmouseout = function () {
  document.getElementById("hover-box").style.display = "none";
};

rolesElement.onclick = function () {
  current_index += 1;
  if (current_index == roles.length) {
    current_index = 0;
  }

  rolesElement.innerHTML = roles[current_index];
  console.log(rolesElement.innerHTML);
};
