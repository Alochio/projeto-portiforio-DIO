async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/Alochio/projeto-portiforio-DIO/main/assets/data/profile.json";
    const fetching = await fetch(url);
    return await fetching.json();
}