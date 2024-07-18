import Image from "next/image";
import "./globals.css";

export default function Heders() {
  return (
    <div>
      <div className="header">
        <div className="emblema">
          <Image
            src="/emblem_of_kyrgyzstan.svg_.webp"
            alt="Герб Кыргызской Республики"
            width={200}
            height={200}
            className="logo"
          />
        </div>

        <div className="heading">
          <h1 className="TitleInHeading">
            Араван районунун Чек-Абад айыл өкмөтү
          </h1>
        </div>

        <div className="search">
          <input className="inputSearch" type="text" placeholder="издоо..." />
          <button className="buttonSearch">d</button>
        </div>

        <div></div>
      </div>
    </div>
  );
}
