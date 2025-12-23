const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click',function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "☀️ Light Mode";
    }else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
    });

    const projects = [
    {
        title: "Portfolio Website",
        description: "My personal digital garden built with HTML, CSS, and JS.",
        link: "https://monumental-bunny-d8b305.netlify.app/"
    },
    {
        title: "Dark Mode Feature",
        description: "A logic-based toggle switch to change the theme for better UX.",
        link: "#"
    },
    {
        title: "Glassmorphism UI",
        description: "A glassmorphism UI element with mobile responsiveness.",
        link: "#"
    },
    {
        title: "Shopping Website",
        description: "A shopping website with cart logic and immersive glassmorphism UI.",
        link: "https://adityasstore.netlify.app/"
    }
];

console.log(projects); 
const projectContainer = document.getElementById("projects-container");
projects.forEach(function(project) {
    
    projectContainer.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View Project</a>
        </div>
    `;
});

