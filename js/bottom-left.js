const bottomleft = [
    {
        image: "../images/wired-volvo.jpg",
        title: "Volvo’s C40 Recharge is an electric car that’s weirdly stuck in the past",
        conten: "A much-needed wave of electric vehicles flooding the market will make it hard for unimaginative models." ,
        link: "/article/volvo-c50-recharge.html"  
    },
    {
        image: "../images/bottom-left-2.jpg",
        title: "Everything You Need to Know About Using an iPad Pro",
        conten: "It's certainly a compelling idea--ditch the laptop in favor of something just as powerful but smaller and more portable. " ,
        link: "/article/everything-you-need-ipad.html"  
    }
    
];

    $(document).ready(function(){

        for (let x = 0; x < bottomleft.length; x++) {
        const postPreviewTemplate = `
         <article>
            <img src = "${bottomleft[x].image}">
            <div>
                <h3>${bottomleft[x].title}</h3>
                <p>${bottomleft[x].conten}</p>
                <a href = "${bottomleft[x].link}">Read More <span>>></span></a>
            </div>
        </article>
        `
            $("#conten-bottom-left").append(postPreviewTemplate);   
        }    
})