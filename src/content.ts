console.log("CarSensor content script loaded!");

const main = () => {

  const specTable = document.querySelector(".specWrap");
  if (specTable) {
    const modelNumber = document.createElement("div");
    modelNumber.classList.add("specWrap__box");

    const title = document.createElement("p");
    title.classList.add("specWrap__box__title");
    title.style.marginBottom = '8px';
    title.textContent = '型式(推定)';

    const ditail = document.createElement("p");
    ditail.classList.add("specWrap__boxDetail");

    const carImageUrls = getCarImageUrls();
    console.log(carImageUrls);
    ditail.textContent = 'DBA-ZV37'

    modelNumber.append(title, ditail);
    specTable.appendChild(modelNumber);
  }
};

const getCarImageUrls = () => {
  const anchorElements = document.querySelectorAll<HTMLImageElement>("#js-slider .subSliderMain__inner__set li[data-category='G'] a");
  return Array.from(anchorElements).map(anchorElement =>
    anchorElement.getAttribute("data-photo") || ""
  );
};

main();
