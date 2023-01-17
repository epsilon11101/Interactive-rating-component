let raiting = "";
const $form = document.querySelector("form");
const $raiting_container = document.querySelector(".rating_num");
const $thanks_card = document.querySelector(".thanks_card");
const $rating_msg = document.querySelector(".rating_message");

$raiting_container.addEventListener("click", (e) => {
  if (e.target != $raiting_container) {
    [...$raiting_container.children].map(
      (child) => (child.style.backgroundImage = "var(--gradient)")
    );
    raiting = e.target.innerHTML;
    e.target.style.backgroundImage = "var(--white_gradient)";
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  $form.style.display = "None";
  $thanks_card.style.display = "Flex";

  raiting = raiting.trim() === "" ? "0" : raiting;
  $rating_msg.innerText = `You selected ${raiting} of 5`;
});
