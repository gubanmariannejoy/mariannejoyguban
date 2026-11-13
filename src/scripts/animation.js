 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 // 4. TIMELINE
        const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

        // 4.1.POSITION PARAMETER
        tl.from("h1", { y: -40, opacity: 0 })
            .from("nav a", { y: -20, opacity: 0, stagger: 0.15 }, "-=0.4")

        // 4.2. CONTROLLING TIMELINE
        const replayBtn = document.querySelector("#replayBtn");

        if (replayBtn) {
            replayBtn.addEventListener("click", function () {
                tl.restart();
            });
        }

        gsap.registerPlugin(ScrollTrigger);

        const reveals = gsap.utils.toArray(".reveal");

        reveals.forEach(function (sec){
            gsap.from(sec, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sec,
                    start: "top 80%",
                    markers: true,
                    toggleActions: "play none none reverse"
                }
            });
        });

        gsap.fromTo("#progressBar", {
            scaleX: 0, },
            {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        ScrollTrigger.create({
            trigger: "#services",
            start: "top top",
            endTrigger: "#contact",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            markers: true
        });

    


    

        const html = document.documentElement;
        const themeToggle = document.querySelector("#theme-toggle");

        themeToggle.addEventListener("click", function () {
            html.classList.toggle("dark");
        });

    