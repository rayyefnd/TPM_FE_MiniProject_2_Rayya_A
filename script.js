const predefinedSkills = [
    "Graphic Design",
    "Software Engineering",
    "Cloud Computing",
    "Networking",
    "Data Analysis",
    "Machine Learning"
];

const searchButton = document.querySelector(".comment-button");
const tagsContainer = document.querySelector(".tags-container");

function createTagElement(skill) {
    const tag = document.createElement("div");
    tag.className = "tag";

    const tagText = document.createElement("span");
    tagText.className = "tag-text";
    tagText.textContent = skill;

    const tagClose = document.createElement("button");
    tagClose.className = "tag-close";
    tagClose.textContent = "×";

    tagClose.addEventListener("click", () => {
        tag.remove();
        if (tagsContainer.childElementCount === 0) {
            tagsContainer.style.display = "none";
        }
    });

    tag.appendChild(tagText);
    tag.appendChild(tagClose);
    return tag;
}

function displaySkills() {
    tagsContainer.innerHTML = "";
    tagsContainer.style.display = "flex"; 

    predefinedSkills.forEach(skill => {
        const tag = createTagElement(skill);
        tagsContainer.appendChild(tag);
    });
}

searchButton.addEventListener("click", () => {
    displaySkills();
});
