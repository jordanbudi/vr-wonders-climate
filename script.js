function goBack(){
    document.getElementById("homepage").setAttribute("visible","true")
    document.getElementById("sceneAfrica").setAttribute("visible","false")
    document.getElementById("sceneNYC").setAttribute("visible","false")
    document.getElementById("sceneGreenland").setAttribute("visible","false")
    document.getElementById("scenePacific").setAttribute("visible","false")
    document.getElementById("backButton").setAttribute("visible","false")
}

function travelToAfrica(){
    document.getElementById("homepage").setAttribute("visible","false")
    document.getElementById("sceneAfrica").setAttribute("visible","true")
    document.getElementById("sceneNYC").setAttribute("visible","false")
    document.getElementById("sceneGreenland").setAttribute("visible","false")
    document.getElementById("scenePacific").setAttribute("visible","false")
    document.getElementById("backButton").setAttribute("visible","true")
}

function travelToNYC(){
    document.getElementById("homepage").setAttribute("visible","false")
    document.getElementById("sceneAfrica").setAttribute("visible","false")
    document.getElementById("sceneNYC").setAttribute("visible","true")
    document.getElementById("sceneGreenland").setAttribute("visible","false")
    document.getElementById("scenePacific").setAttribute("visible","false")
    document.getElementById("backButton").setAttribute("visible","true")
}

function travelToGreenland(){
    document.getElementById("homepage").setAttribute("visible","false")
    document.getElementById("sceneAfrica").setAttribute("visible","false")
    document.getElementById("sceneNYC").setAttribute("visible","false")
    document.getElementById("sceneGreenland").setAttribute("visible","true")
    document.getElementById("scenePacific").setAttribute("visible","false")
    document.getElementById("backButton").setAttribute("visible","true")
}

function travelToPacific(){
    document.getElementById("homepage").setAttribute("visible","false")
    document.getElementById("sceneAfrica").setAttribute("visible","false")
    document.getElementById("sceneNYC").setAttribute("visible","false")
    document.getElementById("sceneGreenland").setAttribute("visible","false")
    document.getElementById("scenePacific").setAttribute("visible","true")
    document.getElementById("backButton").setAttribute("visible","true")
}