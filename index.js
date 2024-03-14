let name = "Homem aranha";
let experiency = 901;
let type;

switch (true) {
  case experiency >= 1000 && experiency <= 2000:
    type = "Bronze";
    break;
  case experiency >= 2001 && experiency <= 5000:
    type = "Prata";
    break;
  case experiency >= 5001 && experiency <= 7000:
    type = "Ouro";
    break;
  case experiency >= 7001 && experiency <= 8000:
    type = "Platina";
    break;
  case experiency >= 8001 && experiency <= 9000:
    type = "Ascendente";
    break;
  case experiency >= 9001 && experiency <= 10000:
    type = "Imortal";
    break;
  case experiency >= 10001:
    type = "Radiante";
    break;
  default:
    type = "Ferro";
}

console.log(`O Herói de nome ${name} está no nível de ${type}`);
