"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUksZUFBZSxVQUFVLCtDQUErQyxPQUFPLFNBQVMsWUFBWSxZQUFZO0FBQ25QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgY29uc3QgYmFja2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2ltZ1wiKTtcclxuICBjb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZXh0ZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0RGl2XCIpO1xyXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmcmFtZS5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lXCIpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdGVsZXBob25lLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjg4NS41MTFhMS43NDUgMS43NDUgMCAwIDEgMi42MS4xNjNMNi4yOSAyLjk4Yy4zMjkuNDIzLjQ0NS45NzQuMzE1IDEuNDk0bC0uNTQ3IDIuMTlhLjY3OC42NzggMCAwIDAgLjE3OC42NDNsMi40NTcgMi40NTdhLjY3OC42NzggMCAwIDAgLjY0NC4xNzhsMi4xODktLjU0N2ExLjc0NSAxLjc0NSAwIDAgMSAxLjQ5NC4zMTVsMi4zMDYgMS43OTRjLjgyOS42NDUuOTA1IDEuODcuMTYzIDIuNjExbC0xLjAzNCAxLjAzNGMtLjc0Ljc0LTEuODQ2IDEuMDY1LTIuODc3LjcwMmExOC42MzQgMTguNjM0IDAgMCAxLTcuMDEtNC40MiAxOC42MzQgMTguNjM0IDAgMCAxLTQuNDItNy4wMDljLS4zNjItMS4wMy0uMDM3LTIuMTM3LjcwMy0yLjg3N0wxLjg4NS41MTF6XCIvPlxyXG4gIDwvc3ZnPiA5NDktOTQ5LTk0OTQgPGJyPiBcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1ob3VzZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gIDxwYXRoIGQ9XCJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDIuMjA3bDYuNjQ2IDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M0w4LjcwNyAxLjVaXCIvPlxyXG4gIDxwYXRoIGQ9XCJtOCAzLjI5MyA2IDZWMTMuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTlBMS41IDEuNSAwIDAgMSAyIDEzLjVWOS4yOTNsNi02WlwiLz5cclxuPC9zdmc+IDEyMyBHcmVlbiBTdHJlZXQsIElydmluZSwgQ2FsaWZvcm5pYWA7XHJcbiAgICBpZnJhbWUuaW5uZXJIVE1MID0gYDxpZnJhbWUgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD0xMDAlMjUmYW1wO2hlaWdodD02MDAmYW1wO2hsPWVuJmFtcDtxPWlydmluZSUyMHNwZWN0cnVtKyhNeSUyMEJ1c2luZXNzJTIwTmFtZSkmYW1wO3Q9JmFtcDt6PTE0JmFtcDtpZT1VVEY4JmFtcDtpd2xvYz1CJmFtcDtvdXRwdXQ9ZW1iZWRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MDBcIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5gO1xyXG5cclxuICAgIHRleHRkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICB0ZXh0ZGl2LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHRleHRkaXYpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlT2xkID0gKCkgPT4ge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYmFja2ltZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjb25zdCBpZkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhY3REaXZcIik7XHJcbiAgICBpZiAoaWZDb250YWN0ID4gMCkge1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlU2VsZiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhY3REaXZcIik7XHJcbiAgICBpZiAoY29udGFjdERpdi5sZW5ndGggPiAwKSBjb250YWN0RGl2WzBdLnJlbW92ZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUNvbnRhY3QsXHJcbiAgICByZW1vdmVPbGQsXHJcbiAgICByZW1vdmVTZWxmLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9