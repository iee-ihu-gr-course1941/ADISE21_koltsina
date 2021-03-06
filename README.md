# Table of Contents
 
   * [Συντάκτες](#συντάκτες)
   * [Εγκατάσταση](#εγκατάσταση)
      * [Απαιτήσεις](#απαιτήσεις)
      * [Οδηγίες Εγκατάστασης](#οδηγίες-εγκατάστασης)
   * [Περιγραφή API](#περιγραφή-api)
      * [Methods](#methods)
         * [Board](#board)
            * [Αρχικοποίηση Board](#αρχικοποίηση-board)
         * [Deck](#deck)
      * [Entities](#entities)
         * [Deck](#deck)
         * [Game](#game)
         * [Players](#players)
   * [Game Status](#game-status)


# Demo Page

Μπορείτε να κατεβάσετε τοπικά ή να επισκευτείτε την σελίδα: 

https://users.iee.ihu.gr/~it174913/ADISE21_koltsina/php/pages/welcome-page.php

# Συντάκτες

* Παναγιωτίδου Όλγα
* Παντελιάς-Γκιώνης Ορφέας-Ιωάννης
* Κόλλια Ελένη

# Εγκατάσταση

## Απαιτήσεις

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

* Το board αρχικοποιείται από έναν παίκτη.
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

#### Αρχικοποίηση Board

```
POST['deck']
POST['in_hand']
POST['player_id']

INSERT INTO Deck (card_number, card_shape, in_hand, player_id) VALUES
```
Τα αρχεία addGame.php, addPlayer.php, addDeck.php συντελούν στην αρχικοποίηση του board. Γίνονται reset τα πάντα σε σχέση με το παιχνίδι.
Tο [Board](#Board) επιστρέφεται αφού συνδεθεί και ο δεύτερος παίκτης.

### Deck

Προσθέτει τα στοιχεία της τράπουλας στην βάση και τα επιστρέφει κατάλληλα.
```
json_decode($_POST['deck'])
$_POST['in_hand'];
```

Δημιουργεί παρτίδα.
```
$_POST['turn']
```

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
| `game_id`                | Δείχνει το id κάθε παιχνιδιού.               | 1..infinity                         |

# Game Status

Το παιχνίδι τελειώνει όταν το deck.length == 0 δηλαδή δεν μπορεί να πραγματοποιηθεί refill καρτών ή αν δεν μπορεί να παίξει κανένας παίκτης δηλαδή οι κάτρες στο χέρι είναι μηδέν.

```
endGame()
```
