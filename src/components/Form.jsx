import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

const Form = () => {
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "YOUR INFO", active: true },
    { id: 2, title: "SELECT PLAN", active: false },
    { id: 3, title: "ADD-ONS", active: false },
    { id: 4, title: "SUMMARY", active: false },
  ]);

  const [yourInfo, setYourInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const [plan, setPlan] = useState({
    title: "",
    price: 0,
    yearly: false,
  });

  const [addons, setAddons] = useState([]);

  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }

    // console.log(steps);
    // console.log(stepNumber);
    // console.log(yourInfo);
    // console.log(plan);
    //console.log(addons);
  }, [stepNumber, yourInfo, plan, addons]);

  const nextStep = () => {
    // if (
    //   yourInfo.name.length == 0 ||
    //   yourInfo.email.length == 0 ||
    //   yourInfo.phone.length == 0
    // ) {
    //   setIsEmpty(true);
    //   return;
    // } else {
    //   setIsEmpty(false);
    // }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeYourInfo = (event) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const selectPlan = (title, price) => {
    setPlan((prevPlan) => {
      return { ...prevPlan, title: title, price: price };
    });
  };
  const toggleDuration = () => {
    // let isYearly = null;
    // if (plan.yearly == false) {
    //   isYearly = true;
    // } else {
    //   isYearly = false;
    // }
    // setPlan((prevPlan) => {
    //   return { ...prevPlan, yearly: true };
    // });
  };

  const checkBox = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const title = e.target.getAttribute("data-title-name");
    const price = parseInt(e.target.getAttribute("data-price"));
    if (e.target.checked == true) {
      setAddons((prevAddons) => [
        ...prevAddons,
        { id: id, title: price, price: price, selected: true },
      ]);
    } else {
      setAddons((prevAddons) => {
        return prevAddons.filter((addon) => addon.id != id);
      });
    }
  };

  return (
    <div className="container">
      <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
        <div className="relative">
          <img className="hidden md:block" src={BackgroundSidebar} />
          <img
            className="block md:hidden w-full"
            src={BackgroundSidebarMobile}
          />

          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
          <div>
            {(stepNumber === 1 && (
              <YourInfo
                onChangeYourInfo={changeYourInfo}
                yourInfo={yourInfo}
                currentStep={stepNumber}
                isEmpty={isEmpty}
              />
            )) ||
              (stepNumber === 2 && (
                <Plan
                  onPlanSelect={selectPlan}
                  onToggleDuration={toggleDuration}
                  currentStep={stepNumber}
                />
              )) ||
              (stepNumber === 3 && (
                <Addons onBoxCheck={checkBox} currentStep={stepNumber} />
              )) ||
              (stepNumber === 4 && <Summary currentStep={stepNumber} />)}
          </div>
          <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 md:static items-center w-[700px]]">
            {/* {stepNumber != 1 && (
              <div
                onClick={prevStep}
                className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
              >
                Go back
              </div>
            )} */}
            <div
              onClick={prevStep}
              className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
            >
              Go back
            </div>
            {stepNumber === 4 ? (
              <div className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90">
                Confirm
              </div>
            ) : (
              <div
                onClick={nextStep}
                className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
              >
                Next Step
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
