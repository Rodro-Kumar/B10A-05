function getInputAmount(id) {
  const ids = document.getElementById(id).value;
  const convert = parseFloat(ids);
  return convert;
}

function getTextAmount(id) {
  const ids = document.getElementById(id).innerText;
  const convert = parseFloat(ids);
  return convert;
}

function donaTionHistory(id, titles) {
  // donation history

  const time = new Date();
  const div = document.createElement("div");
  const p = document.createElement("p");
  const datetime = document.createElement("p");
  p.innerText = `${id} Taka is ${titles}
`;
  datetime.innerText = `Date: ${time && time.toDateString()} Time: ${
    time && time.toLocaleTimeString()
  }`;

  div.appendChild(p);
  div.appendChild(datetime);
  div.style.padding = "30px";
  div.style.border = "2px solid #B4F461";
  div.style.borderRadius = "20px";
  document.getElementById("history-title").appendChild(div);
  p.style.color = "#111111";
  p.style.fontSize = "20px";
  p.style.fontWeight = "bold";
}
