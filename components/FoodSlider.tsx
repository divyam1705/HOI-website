import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "@/app/food-slider.css"
import hoiCover1 from "@/assets/indian-f1.jpeg";
import hoiCover2 from "@/assets/indian-f2.webp";
import hoiCover3 from "@/assets/indian-f3.jpg";

export default () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 0.985
            }
        },
        [
            (slider) => {
                let timeout: NodeJS.Timeout;
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2500)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div ref={sliderRef} className=" keen-slider md:rounded-xl">
            {/* <div className="keen-slider__slide  ">
                <img src={hoiCover1.src} alt="Cover Photo" className="md:rounded-xl aspect-[16/9] md:aspect-[16/10] opacity-70" />
            </div> */}
            <div className="keen-slider__slide ">
                <img src={hoiCover2.src} alt="Cover Photo" className=" md:rounded-xl aspect-[16/10] md:aspect-[16/10] opacity-70" />
            </div>
            <div className="keen-slider__slide ">
                <img src={hoiCover3.src} alt="Cover Photo" className="md:rounded-xl aspect-[16/10] md:aspect-[16/10] opacity-70" />
            </div>
        </div>

    )
}
