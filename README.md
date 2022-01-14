﻿# ADISE21_koltsina
Table of Contents
=================
   * [Συντάκτες](#συντάκτες)
   * [Εγκατάσταση](#εγκατάσταση)
      * [Απαιτήσεις](#απαιτήσεις)
      * [Οδηγίες Εγκατάστασης](#οδηγίες-εγκατάστασης)
   * [Περιγραφή API](#περιγραφή-api)
      * [Methods](#methods)
         * [Board](#board)
            * [Ανάγνωση Board](#ανάγνωση-board)
            * [Αρχικοποίηση Board](#αρχικοποίηση-board)
         * [Piece](#piece)
            * [Ανάγνωση Θέσης/Πιονιού](#ανάγνωση-θέσηςπιονιού)
            * [Μεταβολή Θέσης Πιονιού](#μεταβολή-θέσης-πιονιού)
         * [Player](#player)
            * [Ανάγνωση στοιχείων παίκτη](#ανάγνωση-στοιχείων-παίκτη)
            * [Καθορισμός στοιχείων παίκτη](#καθορισμός-στοιχείων-παίκτη)
         * [Status](#status)
            * [Ανάγνωση κατάστασης παιχνιδιού](#ανάγνωση-κατάστασης-παιχνιδιού)
      * [Entities](#entities)
         * [Deck](#deck)
         * [Game](#game)
         * [Players](#players)


# Demo Page

Μπορείτε να κατεβάσετε τοπικά ή να επισκευτείτε την σελίδα: 
https://users.iee.ihu.gr/it174951/ADISE21_koltsina/php/pages/welcome-page.ph

# Συντάκτες

* Παναγιωτίδου Όλγα
* Παντελιάς-Γκιώνης Ορφέας-Ιωάννης
* Κόλλια Ελένη

# Εγκατάσταση

## Απαιτήσεις

* Apache2
* Mysql Server
* php
* phpMyAdmin

## Οδηγίες Εγκατάστασης

 * Κάντε clone το project σε κάποιον φάκελο <br/>
  `$ git clone https://github.com/iee-ihu-gr-course1941/ADISE21_koltsina.git`

 * Κατεβάστε το phpMyAdmin και κάντε import το databaseSchema.sql.
 

# Περιγραφή Παιχνιδιού

### Στόχος : 
Να μαζέψουν οι παίκτες όσα φύλλα μπορούν από κάτω.

### Προετοιμασία :
Μοιράζονται 4 φύλλα σε κάθε παίχτη και ρίχνονται 4 φύλλα κάτω το ένα δίπλα στο άλλο ανοιχτά.

### Διαδικασία παιχνιδιού : 
Ο κάθε παίχτης έχει δύο επιλογές όταν έρθει η σειρά του.
1. Αν έχει ίδιο φύλλο κάτω με ένα από αυτά που κρατάει στα χέρια του τότε τα παίρνει, ή μπορεί να πάρει και συνδυασμό φύλλων από αυτά που είναι κάτω, δηλαδή, αν έχει κάτω 4 και 3 ρίχνει 7 και τα παίρνει.
2. Αν δεν έχει τίποτα να πάρει τότε ρίχνει ένα φύλλο κάτω ανοιχτό δίπλα στα άλλα.

Όταν τελειώσουν τα 4 φύλλα τότε μοιράζουμε τα υπόλοιπα, 4 κάθε φορά, μέχρι να τελειώσει η τράπουλα.
Οι φιγούρες δεν συνδυάζονται.

Στο τέλος μετράμε τους πόντους μας :

1. 2 πόντους σε όποιον έχει πάνω από 26 φύλλα.
2. 1 πόντο σε όποιον έχει τα περισσότερα σπαθιά.
3. 1 πόντο σε όποιον έχει το 2 σπαθί.
4. 1 πόντο σε όποιον έχει το 10 καρό.

Η εφαρμογή απαπτύχθηκε πλήρως για παρτίδα 2 παικτών.

# Βασικές Αρχές

* Το board αρχικοποιείται από ένας παίκτη.
* Για την εκκίνηση του παιχνιδιού χρειάζεται η ύπαρξη δεύτερου παίκτη, ο οποίος συνδέεται στο board που έχει ήδη δημιουργηθεί από τον πρώτο παίκτη.
* Ύπαρξη τελικού συνολικού score στο τέλος κάθε παρτίδας.

## Συντελεστές

Οι αρμοδιότητες της ομάδας.

Παναγιωτίδου Όλγα: HTML, CSS, PHP, JS.

Παντελιάς-Γκιώνης Ορφέας-Ιωάννης: Database, PHP, JS.

Κόλλια Ελένη: HTML, PHP, JS.


# Περιγραφή API

## Methods


### Board
#### Ανάγνωση Board

import { boardDiv }

Επιστρέφει το [Board](#Board).

#### Αρχικοποίηση Board

serverConnect(`POST`, `/addGame`, `turn=${this.turn}`).then(
            (id) => {
                this.id = id;
            }
);

Αρχικοποιεί το Board, δηλαδή το παιχνίδι. Γίνονται reset τα πάντα σε σχέση με το παιχνίδι.
Επιστρέφει το [Board](#Board).

### Piece
#### Ανάγνωση Θέσης/Πιονιού

```
GET /board/piece/:x/:y/
```

Κάνει την κίνηση του πιονιού από την θέση x,y στην νέα θέση. Προφανώς ελέγχεται η κίνηση αν είναι νόμιμη καθώς και αν είναι η σειρά του παίκτη να παίξει με βάση το token.
Επιστρέφει τα στοιχεία από το [Board](#Board-1) με συντεταγμένες x,y.
Περιλαμβάνει το χρώμα του πιονιού και τον τύπο.

#### Μεταβολή Θέσης Πιονιού

```
PUT /board/piece/:x/:y/
```
Json Data:

| Field             | Description                 | Required   |
| ----------------- | --------------------------- | ---------- |
| `x`               | Η νέα θέση x                | yes        |
| `y`               | Η νέα θέση y                | yes        |

Επιστρέφει τα στοιχεία από το [Board](#Board-1) με συντεταγμένες x,y.
Περιλαμβάνει το χρώμα του πιονιού και τον τύπο


### Player

#### Ανάγνωση στοιχείων παίκτη
```
GET /players/:p
```

Επιστρέφει τα στοιχεία του παίκτη p ή όλων των παικτών αν παραληφθεί. Το p μπορεί να είναι 'B' ή 'W'.

#### Καθορισμός στοιχείων παίκτη
```
PUT /players/:p
```
Json Data:

| Field             | Description                 | Required   |
| ----------------- | --------------------------- | ---------- |
| `username`        | Το username για τον παίκτη p. | yes        |
| `color`           | To χρώμα που επέλεξε ο παίκτης p. | yes        |


Επιστρέφει τα στοιχεία του παίκτη p και ένα token. Το token πρέπει να το χρησιμοποιεί ο παίκτης καθόλη τη διάρκεια του παιχνιδιού.

### Status

#### Ανάγνωση κατάστασης παιχνιδιού
```
GET /status/
```

Επιστρέφει το στοιχείο [Game_status](#Game_status).



## Entities


### Deck
---------

Το deck είναι ένας πίνακας, ο οποίος περιέχει στοιχεία για τα χαρτιά της τράπουλας. Πιο συγκεκριμένα:


| Attribute                | Description                                  | Values                              |
| ------------------------ | -------------------------------------------- | ----------------------------------- |
| `id`                     | Το id χαρακτηρίζει κάθε φύλο της τράπουλας.  | 1..52                               |
| `card_number`            | Ο αριθμός που αναγράφεται επάνω στο φύλο.    | 1..10, J,Q,K,A                      |
| `card_shape`             | Η φιγούρα του φύλου της τράπουλας.           | Hearts, Spades, Diamonds, Clubs     |
| `in_hand`                | Δείχνει αν κάποιο φύλο τράπουλας είναι στο χέρι κάποιου παίκτη. | 0,1              |
| `player_id`              | Δείχνει σε ποιον παίκτη βρίσκεται το κάθε φύλο τράπουλας. | 1..5                   |


### Game
---------

Το κάθε παιχνίδι έχει τα παρακάτω στοιχεία:


| Attribute                | Description                                  | Values                              |
| ------------------------ | -------------------------------------------- | ----------------------------------- |
| `id`                     | Αναγνωρισή game session.                     | 1..5                                |
| `turn`                   | Δείχνει ποιοσ παίζει σε κάθε game session.   | 1,2                                 |



### Players
---------

Ο κάθε παίκτης έχει τα παρακάτω στοιχεία:


| Attribute                | Description                                  | Values                              |
| ------------------------ | -------------------------------------------- | ----------------------------------- |
| `id`                     | Το id του κάθε παίκτη.                       | 1..infinity                         |
| `username`               | Δείχνει το username των παικτων.             | 'Α'...'Ζ'                           |
| `player_no`              | Δείχνει τους παίκτες αριθμημένους.           | 1,2                                 |
| `game_id`                | Δείχνει το id κάθε παιχνιδιού.               | 1..infinity                        |
