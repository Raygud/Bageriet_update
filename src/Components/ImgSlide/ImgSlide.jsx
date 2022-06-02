import '../ImgSlide/ImgSlide.scss'
import Slide1 from '../../Imgs/slide1.jpg'
import Slide2 from '../../Imgs/slide2.jpg'
import Slide3 from '../../Imgs/slide3.jpg'
import React, { useRef } from "react";


export const ImgSlide = (props) => {
    let Pos = -100;
    let IsMoving = false;
    let Index = 1
    let UserInput
    let AutoRoll = 15000
    const ImgContainer = useRef(null);
    const Indicator1 = useRef(null);
    const Indicator2 = useRef(null);
    const Indicator3 = useRef(null);
    const Indicators = [
        { Indicator: Indicator1 },
        { Indicator: Indicator2 },
        { Indicator: Indicator3 }
    ]


    console.log(Indicators)





    function Slide(Direction, GoTo, Input) {
        setTimeout(function () {
            UserInput = undefined
        }, 15000);
        UserInput = Input
        ImgContainer.current.style.transitionDuration = "1s";
        if (GoTo != undefined) {
            Direction = GoTo
        }

        switch (Direction) {

            case "Left":
                Index--

                if (IsMoving != true) {
                    console.log(GoTo)
                    console.log("Is Moving ? ", IsMoving)
                    IsMoving = true
                    if (Pos <= -200) {
                        Pos = Pos + 100;
                        console.log("Sliding Left");
                        ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                    }
                    else {
                        console.log("end reached")
                        Pos = -400;
                        ImgContainer.current.style.transitionDuration = "0s";
                        ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                        setTimeout(function () {
                            Pos = -300;
                            ImgContainer.current.style.transitionDuration = "1s";
                            ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                        }, 1);
                        console.log(Pos)
                    }
                    setTimeout(function () {
                        IsMoving = false
                        console.log("I am standing still ", IsMoving)
                    }, 999);
                    if (Index < 0) {
                        Index = 2
                    }
                    setTimeout(function () {
                        IndicatorPos(Index)
                        console.log(Index + "INDEX")
                    }, 300);
                }
                else {
                    console.log("Is Moving ? ", IsMoving)

                }
                break;

            case "Right":
                if (IsMoving != true) {
                    Index++
                    console.log("Is Moving ? ", IsMoving)
                    IsMoving = true
                    if (Pos >= -299) {
                        Pos = Pos - 100;
                        console.log("Sliding Right");
                        console.log(Pos.toString()[1])
                        ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                    }
                    else {
                        console.log("end reached")
                        Pos = 0;

                        ImgContainer.current.style.transitionDuration = "0s";
                        ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                        setTimeout(function () {
                            Pos = -100;
                            ImgContainer.current.style.transitionDuration = "1s";
                            ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                        }, 1);
                    }
                    console.log(Pos)
                    setTimeout(function () {
                        IsMoving = false
                        console.log("I am working", IsMoving)
                    }, 999);
                    if (Index > 2) {
                        Index = 0
                    }
                    setTimeout(function () {
                        IndicatorPos(Index)
                        console.log(Index + "INDEX")
                    }, 300);
                }
                else {
                    console.log("Is Moving ? ", IsMoving)

                }
                break;
            case "GoToLeft":
                console.log("GoingToLeft")

                ImgContainer.current.style.transitionDuration = "0s";
                ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                setTimeout(function () {
                    Pos = 0;
                    Index = 0;
                    ImgContainer.current.style.transitionDuration = "1s";
                    ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                }, 1);
                setTimeout(function () {
                    IndicatorPos(Index)
                    console.log(Index + "INDEX")
                }, 300);
                break;
            case "GoToCenter":
                console.log("GoingToCenter")

                ImgContainer.current.style.transitionDuration = "0s";
                ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                setTimeout(function () {
                    Pos = -100;
                    Index = 1;
                    ImgContainer.current.style.transitionDuration = "1s";
                    ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                }, 1);
                setTimeout(function () {
                    IndicatorPos(Index)
                    console.log(Index + "INDEX")
                }, 300);
                break;
            case "GoToRight":

                console.log("GoingToCenter")

                ImgContainer.current.style.transitionDuration = "0s";
                ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                setTimeout(function () {
                    Pos = -200;
                    Index = 2;
                    ImgContainer.current.style.transitionDuration = "1s";
                    ImgContainer.current.style.transform = `translateX(${Pos}vw)`;
                }, 1);
                setTimeout(function () {
                    IndicatorPos(Index)
                    console.log(Index + "INDEX")
                }, 300);
                break;

            default:
                break;

        }

        function IndicatorPos(Pos) {
            for (let i = 0; i < 3; i++) {
                if (i != Pos) {
                    console.log(Indicators[i].Indicator.current.style.backgroundColor = "red" + "INDICATOR")
                    console.log(i)
                    Indicators[i].Indicator.current.style.backgroundColor = "rgba(0, 0, 0, 0.274)"
                    // Indicators[i].Indicator.style.backgroundColor = "red"
                }
                else {
                    Indicators[i].Indicator.current.style.backgroundColor = "rgba(255, 255, 255, 0.79)"

                }
            }
        }



    }

    setInterval(function () {

        if (UserInput === undefined && IsMoving == false) {
            Slide("Right")
        }


    }, AutoRoll);






    return (
        <div id="MegaContainer">
            <button id="LeftButton" type="submit" onClick={() => { Slide("Left", null, 1) }}>&#60;</button>
            <button id="RightButton" type="submit" onClick={() => { Slide("Right", null, 1) }}>&#62;</button>
            <div ref={ImgContainer} id="ImgContainer">
                <div><img src={Slide3} alt="" /></div>
                <div><img src={Slide1} alt="" /></div>
                <div><img src={Slide2} alt="" /></div>
                <div><img src={Slide3} alt="" /></div>
                <div><img src={Slide1} alt="" /></div>
            </div>
            <div id="SlideIndicatorContainer">
                <div ref={Indicator1} onClick={() => { Slide(null, "GoToLeft") }} className="SlideIndicator"></div>
                <div ref={Indicator2} onClick={() => { Slide(null, "GoToCenter") }} className="SlideIndicator"></div>
                <div ref={Indicator3} onClick={() => { Slide(null, "GoToRight") }} className="SlideIndicator"></div>
            </div>
        </div >
    );
}
