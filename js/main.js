function init() {
  // Render Profile Header
  document.getElementById("profile-name").innerText = profileData.name;
  document.getElementById("profile-avatar").innerText = profileData.initials;
  document.getElementById("profile-role").innerText = profileData.role;
  document.getElementById("profile-company").innerText = profileData.company;

  document.getElementById("profile-socials").innerHTML = profileData.socials.map(s => 
    `<a href="${s.url}" target="_blank" title="${s.title}"><i class="${s.icon}"></i></a>`
  ).join('');

  // Render Experience
  document.getElementById("experience-container").innerHTML = experienceData.map(exp => `
    <div class="job">
      <div class="period">${exp.period}</div>
      <h3>${exp.role}</h3>
      <div class="company-name">${exp.company}</div>
      <ul>
        ${exp.points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Render Projects
  document.getElementById("projects-container").innerHTML = projectsData.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="stack">${p.stack.join(' · ')}</div>
      </div>
      `).join('');
      /* <a href="${p.link}" target="_blank">View project →</a> */

  // Render Skills
  document.getElementById("skills-container").innerHTML = skillsData.map(s => `
    <div class="skills-group">
      <h3>${s.category}</h3>
      <div class="skills-list">
        ${s.items.map(item => `<span>${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Render Certificates
  document.getElementById("certificates-container").innerHTML = certificatesData.map(c => `
    <li>
      <div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
      <div class="cert-date">${c.year}</div>
    </li>
  `).join('');
}

function showSection(sectionId) {
  const sections = ['home','experience', 'projects', 'skills', 'certificates'];
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((sec, idx) => {
    const el = document.getElementById(`${sec}-section`);
    if (sec === sectionId) {
      el.style.display = 'block';
      navLinks[idx].classList.add('active');
    } else {
      el.style.display = 'none';
      navLinks[idx].classList.remove('active');
    }
  });

  const titleEl = document.getElementById('section-title');
  const introEl = document.getElementById('section-intro');

  const textMap = {
    home: [],
    experience: ["Experience", "Professional background and trajectory."],
    projects: ["Projects", "A selection of built applications and tools."],
    skills: ["Skills", "Technical proficiency and tooling."],
    certificates: ["Certificates", "Verified certifications and credentials."]
  };

  titleEl.innerText = textMap[sectionId][0];
  introEl.innerText = textMap[sectionId][1];
}

window.onload = init;