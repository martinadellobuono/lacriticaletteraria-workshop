<?php

 if ((trim($_POST['object']) != "") && (trim($_POST['body']) != "")) {    
  $to = "jane.07.2013@gmail.com";
$headers = "From: " . $_POST['mail'] . "\n";

  $subject = "Modulo proveniente da www.tuosito.it";
  
  $body = "Contenuto del modulo:\n\n";
  
$body .= "Inviata da: " . trim(stripslashes($_POST["mail"])) . "\n"; //indirizzo e-mail che manda la mail, come si vede riprende l'id del campo destinato all'inserimento della mail del mittente
  
  $body .= "Oggetto: " . trim(stripslashes($_POST["object"])) . "\n"; //oggetto del messaggio
  $body .= "testo: " . trim(stripslashes($_POST["body"])) . "\n"; //messaggio
  
  
  // invio mail
  mail($to, $subject, $body, $headers); // SE L'INOLTRO E' ANDATO A BUON FINE...
  
  echo "La mail è stata inviata con successo. Grazie per averci contattato";
  
  } else {// altrimenti
  echo "Deve compilare la form prima di inviare.";
  
  }
  
  ?>
