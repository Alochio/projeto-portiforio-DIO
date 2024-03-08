function updateProfileIinfo(profileData){
    //HEADER
    const photo = document.getElementById('profilePhoto')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profileName')
    name.innerText = profileData.name

    const job = document.getElementById('profileJob')
    job.innerText = profileData.job

    const location = document.getElementById('profileLocation')
    location.innerText = profileData.location

    const phone = document.getElementById('profilePhone')
    phone.innerText = profileData.phone
    phone.href = `https://wa.me/${profileData.whatsapp}`

    const email = document.getElementById('profileEmail')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profileSkillsHardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">`).join('')
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profileSkillsSoftSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateIdiomas(profileData){
    const language1 = document.getElementById('idioma1');
    language1.innerHTML = profileData.languages[0];

    const language2 = document.getElementById('idioma2');
    language2.innerHTML = profileData.languages[1];
}

function updateProjetos(profileData){
        const project01Name = document.getElementById('project1Name')
        project01Name.innerHTML = profileData.portfolio[0].name
        const project01Link = document.getElementById('project1Link')
        project01Link.innerHTML = profileData.portfolio[0].url
        project01Link.href = profileData.portfolio[0].url
    
        const project02Name = document.getElementById('project2Name')
        project02Name.innerHTML = profileData.portfolio[1].name
        const project02Link = document.getElementById('project2Link')
        project02Link.innerHTML = profileData.portfolio[1].url
        project02Link.href = profileData.portfolio[1].url
    
        const project03Name = document.getElementById('project3Name')
        project03Name.innerHTML = profileData.portfolio[2].name
        const project03Link = document.getElementById('project3Link')
        project03Link.innerHTML = profileData.portfolio[2].url
        project03Link.href = profileData.portfolio[2].url
}

function updateExperiencias(profileData){
     const experiencia01 = document.getElementById('experiencia1')
     experiencia01.innerHTML = profileData.professionalExperience[0].name
     const company01 = document.getElementById('company1')
     company01.innerHTML = profileData.professionalExperience[0].company
     const data01 = document.getElementById('data1')
     data01.innerHTML = profileData.professionalExperience[0].period
  
     const experiencia02 = document.getElementById('experiencia2')
     experiencia02.innerHTML = profileData.professionalExperience[1].name
     const company02 = document.getElementById('company2')
     company02.innerHTML = profileData.professionalExperience[1].company
     const data02 = document.getElementById('data2')
     data02.innerHTML = profileData.professionalExperience[1].period  
}

(async ()=>{
    const profileData = await fetchProfileData()
    console.log(profileData) //imprimindo dados no console
    updateProfileIinfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateIdiomas(profileData)
    updateProjetos(profileData)
    updateExperiencias(profileData)
})()