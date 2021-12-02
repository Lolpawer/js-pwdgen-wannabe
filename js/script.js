//prima chiedo il prompt del nome (const)
//poi il prompt del cognome (const)
//prompt del colore (const)
//poi faccio un nome + cognome + colore + 21
//poi stampo il risultato

//prompt
const inputNome = prompt('Inserisci il tuo nome');
const inputCognome = prompt('Inserisci il tuo cognome');
const inputColore = prompt('Inserisci il tuo colore preferito');

//creazione password
let createdPassword = inputNome + inputCognome + inputColore + 21 ;

//stampa password
let outputPassword = document.getElementById('password');
outputPassword.innerHTML = `La tua password è ${createdPassword}`;