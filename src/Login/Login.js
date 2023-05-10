import React, { useState } from "react";
import style from "./Login.module.css";
import CustomInput from "../atom/customInput/CustomInput";
import { TbMessageChatbot } from "react-icons/tb";
export default function Login() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    restaurantZip: ""
  });

  const handleSubmit = () => {
    console.log(formValue);
    setFormValue({
      name: "",
      email: "",
      phone: "",
      restaurantName: "",
      restaurantZip: ""
    });
  };
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.topRed}></div>
        <div className={style.topSkyblue}></div>
      </div>
      <div className={style.innerContainer}>
        <div className={style.leftColor}>
          <div className={style.leftPattern}></div>
          <div className={style.yellow}></div>
        </div>
        <div className={style.left}>
          <div className={style.innerTop}>
            <div className={style.innertopRed}></div>
            <div className={style.innertopGray}></div>
          </div>
          <h1>Request a Demo</h1>
          <p className={style.fillForm}>
            Fill this form to get in front of an{" "}
            <span className={style.expert}>Expert.</span>
          </p>
          <p className={style.question}> HAVE A QUESTION ?</p>
          <p className={style.call}>
            Try giving us a call at{" "}
            <span className={style.number}>888-903-4921</span> or{" "}
            <span className={style.contact}> Contact Support</span>
          </p>
        </div>
        <div className={style.right}>
          <div className={style.close}>
            <p className={style.cross}>CLOSE</p>
            <p>X</p>
          </div>
          <CustomInput
            value={formValue.name}
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
            label="Name"
          />
          <CustomInput
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
            label="Email"
          />
          <CustomInput
            value={formValue.phone}
            onChange={(e) =>
              setFormValue({ ...formValue, phone: e.target.value })
            }
            label="Phone"
          />
          <CustomInput
            value={formValue.restaurantName}
            onChange={(e) =>
              setFormValue({ ...formValue, restaurantName: e.target.value })
            }
            label="Restaurant Name"
          />
          <CustomInput
            value={formValue.restaurantZip}
            onChange={(e) =>
              setFormValue({ ...formValue, restaurantZip: e.target.value })
            }
            label="Restaurant Zip Code"
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className={style.rightColor}>
          <div className={style.greenColor}></div>
          <div className={style.pattern}></div>
          <div className={style.skyBlueColor}></div>
        </div>
        <div className={style.message}>
          <TbMessageChatbot />
        </div>
      </div>
      <div className={style.bottom}></div>
    </div>
  );
}
