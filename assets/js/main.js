console.log('It works');

function myFunction(event) {
  event.preventDefault();
  let eingabe = document.querySelector("#nettoBetrag").value;
  let nettoBrutto = document.querySelector("#nettoBrutto").checked;
  let bruttoNetto = document.querySelector("#bruttoNetto").checked;
  let steuersatz1 = document.querySelector("#nineteen").checked;
  let steuersatz2 = document.querySelector("#seven").checked;
  let ausgabe1 = document.querySelector("#betrag");
  let ausgabe2 = document.querySelector("#endpreis");
  let newText = document.querySelector("#labelNettoBetrag");
  let newText2 = document.querySelector("#headerEndpreis");
  let newText_brutto1 = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
  let newText_brutto2 = "Nettobetrag";
  let betrag;
  let endbetrag;

  if (nettoBrutto == true) {
    if (steuersatz1 == true) {
        betrag = eingabe / 1.19;
        endbetrag = (eingabe / 1.19) * 0.19;
        console.log(betrag);
        console.log(endbetrag);
        ausgabe1.innerHTML = betrag.toFixed(2) + "€";
        ausgabe2.innerHTML = endbetrag.toFixed(2) + "€";
      } else if (steuersatz2 == true) {
          betrag = eingabe / 1.07;
          endbetrag = (eingabe / 1.07) * 0.07;
          console.log(betrag);
          console.log(endbetrag);
          ausgabe1.innerHTML = betrag.toFixed(2) + "€";
          ausgabe2.innerHTML = endbetrag.toFixed(2) + "€";
      }
  } else if (bruttoNetto == true) {
        if (steuersatz1 == true) {
          betrag = eingabe * 1.19;
          endbetrag = eingabe * 0.19;
          console.log(betrag);
          console.log(endbetrag);
          newText.innerText = newText_brutto1;
          newText2.innerText = newText_brutto2;
          ausgabe1.innerHTML = betrag.toFixed(2) + "€";
          ausgabe2.innerHTML = endbetrag.toFixed(2) + "€";
        } else if (steuersatz2 == true) {
          betrag = eingabe * 1.07;
          endbetrag = eingabe * 0.07;
          console.log(betrag);
          console.log(endbetrag);
          newText.innerText = newText_brutto1;
          newText2.innerText = newText_brutto2;
          ausgabe1.innerHTML = betrag.toFixed(2) + "€";
          ausgabe2.innerHTML = endbetrag.toFixed(2) + "€";
        }
  } else {
      window.alert("Fehler - Bitte einen Wert eingeben!");
      console.log("Something went wrong");
    }
}