const footer = [
    {
        link: "#",
        class: "fab fa-facebook-f"     
    },
    {
        link: "#",
        class: "fab fa-twitter"     
    },
    {
        link: "#",
        class: "fab fa-instagram"     
    },
    {
        link: "#",
        class: "fab fa-telegram"     
    },
    {
        link: "#",
        class: "fab fa-whatsapp"     
    },
    
    
];

    $(document).ready(function(){

        for (let x = 0; x < footer.length; x++) {
        const postPreviewTemplate = `
        <a href="${footer[x].link}" class="${footer[x].class}"></a>
        `
            $("#icon-footer").append(postPreviewTemplate);   
        }    
})