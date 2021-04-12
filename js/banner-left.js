const bannerleft = [
    {
        title: "Microsoft Says A Group Of Cyberattackers Tied To China Hit Its Exchange Email Servers",
        link: "/article/microsoft-group-cyberattackers.html",
        author: "by Vineet Washington"    
    },
    {
        title: "Instagram Accidentally Hid Likes For Some Users",
        link: "/article/instagram-accidentally.html",
        author: "by Tasneem Akolawala "
    },
    {
        title:"FCC approves $50 monthly internet subsidies for low-income households during pandemic",
        link: "/article/fcc-during-pandemic.html",
        author: "by William Turton"
    },
    {
        title:"Amazon quietly changed its app icon after some unfavorable comparisons",
        link: "/article/amazon-changed-icon.html",
        author: "by Agence France-Presse"
    }

];

    $(document).ready(function(){

        for (let i = 0; i < bannerleft.length; i++) {
        const postPreviewTemplate = `<h3><a href="${bannerleft[i].link}">
       "${bannerleft[i].title}"</a> 
        <span>"${bannerleft[i].author}"</span></h3>
        `
         $("#banner-left").append(postPreviewTemplate);   
        }    
})