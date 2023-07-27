// Charger le fichier texte
fetch("liste.txt")
  .then(response => response.text())
  .then(data => {
    var wordlist = data.split("\n");
    var randomIndex = Math.floor(Math.random() * wordlist.length);
    const wordToGuess = wordlist[randomIndex];

    alert(wordToGuess);

    const wordDescriptions = {
      
 "class": "Définit une classe pour créer des objets.",
 "this": "Référence l'objet actuel dans le contexte actuel.",
 "extends": "Permet à une classe d'hériter des propriétés et méthodes d'une autre classe.",
 "super": "Appelle le constructeur de la classe parente lors de l'héritage.",
 "static": "Déclare des propriétés ou des méthodes statiques dans une classe.",
 "async": "Déclare une fonction asynchrone qui renvoie une promesse.",
 "await": "Attend la résolution d'une promesse dans une fonction asynchrone.",
 "Promise": "Représente la complétion ou l'échec éventuel d'une opération asynchrone et permet de chaîner des actions.",
 "try": "Définit un bloc de code à tester pour des erreurs.",
 "catch": "Définit un bloc de code à exécuter si une erreur est levée dans le bloc try.",
 "finally": "Définit un bloc de code à exécuter après l'exécution du bloc try-catch.",
 "import": "Permet l'importation de modules JavaScript pour organiser le code et partager des fonctionnalités.",
 "export": "Permet l'exportation de modules JavaScript pour les rendre disponibles à d'autres fichiers.",
 "Map": "Une structure de données qui permet de stocker des paires clé-valeur.",
 "Set": "Une structure de données qui stocke des valeurs uniques.",
 "WeakMap": "Une structure de données similaire à Map, mais avec des clés faiblement référencées.",
 "WeakSet": "Une structure de données similaire à Set, mais avec des valeurs faiblement référencées.",
 "Arrow functions": "Une syntaxe concise pour déclarer des fonctions anonymes.",
 "Template literals": "Permet l'insertion de variables et d'expressions dans des chaînes de caractères à l'aide de backticks (`).",
 "Destructuring assignment": "Permet d'extraire des valeurs d'objets ou d'arrays dans des variables distinctes.",
 "Rest parameters": "Permet de passer un nombre variable d'arguments à une fonction sous la forme d'un tableau.",
 "Spread syntax": "Permet de décomposer un tableau ou un objet en plusieurs éléments distincts.",
 "Prototype": "Un mécanisme qui permet à un objet d'hériter des propriétés et des méthodes d'un autre objet.",
 "Generator": "Permet de créer des fonctions itérables qui peuvent être suspendues et reprises.",
 "Symbol": "Un type de données primitif qui crée des identifiants uniques et immuables.",
 "Proxy": "Permet de créer des objets interceptant les opérations effectuées sur eux.",
 "Reflect": "Fournit des méthodes pour effectuer des opérations sur des objets de manière réfléchie.",
 "Iterator": "Un protocole qui définit une manière d'accéder séquentiellement aux éléments d'une collection.",
 "Async/Await": "Une syntaxe basée sur les Promesses pour gérer les opérations asynchrones de manière synchrone.",
 "Module": "Un mécanisme de regroupement de code en modules réutilisables et autonomes.",
 "Promise.all": "Une méthode qui renvoie une promesse qui est résolue lorsque toutes les promesses dans un tableau sont résolues.",
 "Promise.race": "Une méthode qui renvoie une promesse qui est résolue ou rejetée dès que l'une des promesses dans un tableau est résolue ou rejetée.",
 "Decorators": "Une fonctionnalité expérimentale qui permet d'ajouter des comportements supplémentaires à une classe ou à ses membres.",
 "BigInt": "Un type de données qui permet de représenter des entiers de taille arbitraire.",
 "Web Workers": "Permet d'exécuter des scripts en arrière-plan pour éviter de bloquer l'interface utilisateur."
    };

    var wordLength = wordToGuess.length;
    var hiddenWord = "";
    for (var i = 0; i < wordLength; i++) {
        hiddenWord += "_";
    }

    document.getElementById("word").innerHTML = hiddenWord;

    var guessInput = document.getElementById("guess");
    var submitButton = document.getElementById("submit");
    var result = document.getElementById("result");
    var link = document.getElementById("link");

    submitButton.onclick = function () {
        var guess = guessInput.value;
        if (guess.length > 1 || guess.length === 0) {
            result.innerHTML = "Entrez une seule lettre.";
        } else {
            if (wordToGuess.indexOf(guess) === -1) {
                result.innerHTML = "Mauvaise lettre.";
                if (wordDescriptions[wordToGuess]) {
                    alert(wordDescriptions[wordToGuess]);
                }
            } else {
                for (var i = 0; i < wordLength; i++) {
                    if (wordToGuess[i] === guess) {
                        hiddenWord = hiddenWord.substr(0, i) + guess + hiddenWord.substr(i + 1);
                    }
                }
                document.getElementById("word").innerHTML = hiddenWord;
                if (hiddenWord === wordToGuess) {
                    result.innerHTML = "Bravo, vous avez trouvé le mot !";
                    guessInput.style.display = "none";
                    submitButton.style.display = "none";
                    link.style.display = "block";
                } else {
                    result.innerHTML = "Bonne lettre !";
                }
            }
        }

        guessInput.value = "";
    };
});
