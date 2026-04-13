# JavaScript Theorie - Lektion 1

## 1) Variablen und Datentypen

- `let` definiert eine veraenderbare Variable.
- `const` definiert eine Konstante (soll nicht neu zugewiesen werden).
- Mit `typeof` kann der Datentyp geprueft werden.

Beispiel:

- `let a = 5;` (Zahl)
- `let b = "Hallo";` (Text/String)
- `a + b` fuehrt zu String-Verkettung: `"5Hallo"`

## 2) Ausgabe und Debugging

- `console.log(...)` schreibt Werte in die Browser-Konsole.
- Das ist hilfreich, um Zwischenergebnisse und Fehler zu kontrollieren.

Beispiel:

- `console.log("test");`
- `console.log(typeof c);`

## 3) Funktionen in JavaScript

Eine Funktion kapselt wiederverwendbare Logik.

### Klassische Funktionsschreibweise

`function add(a, b) { return a + b; }`

### Arrow Function (Pfeilfunktion)

- Kurzform: `const sub = (a, b) => a - b;`
- Mit Block: `const sub2 = (a, b) => { return a - b; }`

## 4) Funktionen als Werte

In JavaScript sind Funktionen "first-class citizens":

- Funktionen koennen Variablen zugewiesen werden.
- Funktionen koennen als Argument uebergeben werden.

Beispiel:

- `let add2 = add;`
- `add2(2, 3)` ruft die Funktion ueber die neue Variable auf.

## 5) Arrays und Iteration

Ein Array ist eine geordnete Sammlung von Werten.

Beispiel:

- `const a = [1, 2, 3, 4];`

### Iteration mit `for`

```js
let zwischensumme = 0;
for (let i = 0; i < a.length; i++) {
  zwischensumme += a[i];
}
```

### Iteration mit `forEach`

`forEach` fuehrt eine Funktion fuer jedes Element aus.

Beispiel:

- `a.forEach(print);`
- `a.forEach((wert) => { console.log(wert); });`

## 6) Array-Methoden: `filter` und `find`

### `filter`

- Gibt ein neues Array mit allen passenden Elementen zurueck.
- Beispiel: nur gerade Zahlen (`wert % 2 == 0`).

### `find`

- Gibt das erste passende Element zurueck.
- Wenn nichts passt: `undefined`.

## 7) Rest-Parameter (`...`)

Mit Rest-Parametern koennen beliebig viele weitere Argumente als Array gesammelt werden.

Beispiel:

`function add(p1, p2, ...a) { ... }`

- `p1` und `p2` sind feste Parameter.
- `a` enthaelt alle weiteren Werte als Array.

Damit kann man z. B. eine Summe ueber beliebig viele Werte berechnen.

## 8) HTML-Einbindung

In `index.html` wird das Script ueber `<script src="code1.js"></script>` eingebunden.

Das bedeutet:

- Beim Laden der Seite wird `code1.js` ausgefuehrt.
- Die Ausgabe siehst du in der Browser-Konsole.

## 9) Wichtiger Hinweis zu deinem Code

In `code2.js` gibt es eine Stelle, die syntaktisch/fachlich korrigiert werden sollte:

- `constar=Array();` ist sehr wahrscheinlich ein Tippfehler.
- Korrekt waere z. B. `const ar = [];`
- Danach sollten Werte in `ar[...]` gespeichert werden, nicht in `Array[...]`.

---

Diese Zusammenfassung basiert direkt auf den Inhalten aus:

- `Lektion1/code1.js`
- `Lektion1/code2.js`
- `Lektion1/index.html`
