// element select by class name
document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "lightGreen";
  }
});

// element select by id
document.getElementById("btn-center").addEventListener("click", () => {
  const thirdFriend = document.getElementById("third-friend");
  thirdFriend.style.textAlign = "center";
});

// element select and append new element
document
  .getElementById("btn-add-friend")
  .addEventListener("click", function () {
    const addFriend = document.getElementById("friends");

    const div = document.createElement("div");
    div.innerHTML = `<h3>Friend-6</h3><p>New Friend Added</p>`;
    addFriend.appendChild(div);
  });
