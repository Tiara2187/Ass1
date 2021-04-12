const contentright = [
    {
        tgl: "10 March 2021",
        title: "Satechi’s latest USB-C hub supports 4K at 60Hz, and 100W pass-through",
        conten: "Satechi has released a new USB-C hub for your laptop to add all the ports." ,
        image: "../images/usb.jpg",
        link: "/article/satechi’s-latest-usb.html"  
    },
    {
        tgl: "10 March 2021",
        title: "The Galaxy S21 lineup is here, with a $200 price, new design and S Pen support",
        conten: "The lineup starts at $800 instead of last year's $1,000. And the Ultra supports an optional." ,
        image: "../images/samsung.jpg",
        link: "/article/galaxy-21-lineup.html"  
    },
    {
        tgl: "10 March 2021",
        title: "AI helps this Koda social robot dog sense human emotions",
        conten: "This AI robot dog not only climbs stairs but also interacts socially with its human owners." ,
        image: "../images/robot.jpg",
        link: "/article/ai-help-this-koda.html"  
    },
    {
        tgl: "10 March 2021",
        title: "Sundance 2021: New Frontier Program – Fortune & Namoo",
        conten: "Program showcases avant-garde storytellers working at the intersection of art and technology." ,
        image: "../images/ar.jpg",
        link: "/article/sundance-2021.html"  
    },
    {
        tgl: "10 March 2021",
        title: "Looking at a phone's lock screen also requries a warrant, judge rules",
        conten: "The FBI accessing a lock screen violates someone's Fourth Amendment rights, one court found." ,
        image: "../images/right-5.jpg",
        link: "/article/looking-phone-screen.html"  
    },
    
    
];

    $(document).ready(function(){

        for (let x = 0; x < contentright.length; x++) {
        const postPreviewTemplate = `
        <article>
            <h4>${contentright[x].tgl} </h4>
            <div>
                <h2>${contentright[x].title}</h2>

                <p>${contentright[x].conten}</p>

                <a href = "${contentright[x].link}">Read More <span>>></span></a>
            </div>
            <img src = "${contentright[x].image}">
    </article>
        `
            $("#content-right").append(postPreviewTemplate);   
        }    
})