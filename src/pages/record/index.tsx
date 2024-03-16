/* eslint-disable max-lines */
import { Icon7 } from "@/components/icon/Icon7";
import { Icon8 } from "@/components/icon/Icon8";
import { Icon16 } from "@/components/icon/Icon16";
import styles from "../../styles/record.module.css";
import { RadioButton } from "@/components/RadioButton";
import { Category } from "@/components/Category"
import { Arrow } from "@/components/arrow"
import { Nemeh } from "@/components/nemeh"
export default function record() {
  return (
    <div
      style={{
        width: "100vw",
        height: "1208px",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "whitesmoke",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "72px",
          padding: "16px , 120px, 16px, 120px",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "225.4px",
            height: "40px",
            gap: "24px",
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            marginLeft: "505px",
          }}
        >
          <Icon7 />
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "600",
              alignItems: "center",
              lineHeight: "24px",
              color: "#0F172A",
              fontFamily: "sans-serif",
            }}
          >
            Dashboard
          </h1>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              alignItems: "center",
              color: "#0F172A",
              fontFamily: "sans-serif",
            }}
          >
            Records
          </h1>
        </div>
        <div
          style={{
            width: "163px",
            height: "40px",
            gap: "24px",
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            marginRight: "505px",
          }}
        >
          <button
            style={{
              width: "99px",
              height: "32px",
              borderRadius: "20px",
              gap: "10px",
              backgroundColor: "#0166FF",
              border: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon8 />
            <p>Record</p>
          </button>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src="https://i.pinimg.com/736x/c0/5c/0a/c05c0aa478293de9c04130482f576011.jpg"
          ></img>
        </div>
      </div>

      <div className={styles.bagana}>
        <div className={styles.deetl}>
          <h1 className={styles.records}>Records</h1>
          <button className={styles.Add}>
            Add
            <Icon16 />
          </button>
          <div>
            <input className={styles.input} placeholder="Search"></input>
          </div>
          
          <div style={{  marginTop:"33px"}}>
            <RadioButton/>
            </div>

<div className={styles.deetl3}>
  <div className={styles.ehnidiv}>
    <p className={styles.category}>Category</p>
    <button className={styles.clear}>Clear</button>
  </div>
  <div className={styles.hoyrdahidiv}>
<div className={styles.dotrohdiv}><Category/>Food and Drinks <Arrow/> </div>
<div className={styles.dotrohdiv}><Category/>Shopping <Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Housing <Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Transportation<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Vehicle<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Life & Entertainment<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Communication, PC<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Financial expenses<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Investments<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Income<Arrow/></div>
<div className={styles.dotrohdiv}><Category/>Others<Arrow/></div>
<div className={styles.dotrohdiv}><Nemeh/>Add Category</div>
  </div>
  </div>
<div  className={styles.guravdahidiv}>
<p>Amount Range</p>
<div  className={styles.textinputdiv}>
<input  className={styles.textinput}></input>
<input  className={styles.textinput}></input>
</div>
</div>
        </div>
      </div>
    </div>
  );
}