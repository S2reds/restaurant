export default function contact() {
  const content = document.querySelector(".content");
  const body = document.querySelector("body");
  const backimg = document.querySelector(".backimg");
  const createContact = () => {
    const textdiv = document.createElement("div");
    textdiv.classList.add("contactDiv");
    const iframe = document.createElement("div");
    iframe.classList.add("iframe");
    const text = document.createElement("p");
    text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  </svg> 949-949-9494 <br> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg> 123 Green Street, Irvine, California`;
    iframe.innerHTML = `<iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=irvine%20spectrum+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"></iframe>`;

    textdiv.appendChild(text);
    textdiv.appendChild(iframe);
    body.appendChild(textdiv);
  };
  const removeOld = () => {
    content.innerHTML = "";
    backimg.style.display = "none";
    const ifContact = document.querySelectorAll(".contactDiv");
    if (ifContact > 0) {
    }
  };
  const removeSelf = () => {
    const contactDiv = document.querySelectorAll(".contactDiv");
    if (contactDiv.length > 0) contactDiv[0].remove();
  };
  return {
    createContact,
    removeOld,
    removeSelf,
  };
}
