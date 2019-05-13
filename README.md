# azubi-projekt

#### Beschreibung

Bitte ein Programm schreiben, welches die aktiven Programme aus einem Partner-Netzwerk (Adcell) über eine API zieht.
Diese müssen dann neu gemappt werden und danach im JSON-Format lokal abgespeichert werden.


#### technischer Stack
* git
* node / java / php


#### API 
Die Api-Doku für das Netzwerk findest du hier:
https://www.adcell.de/api/v2/

id => 214955 / key  => 3KoL%m7uQ

#### Mapping
Attribute: 
* id ( auto increment ) 
* external_network_id
* name
* logo
* desciption
* link
* active_partner
* fingerprint_is_allowed

#### Storage
Bitte ein Array von Objekten als JSON abspeichern. ( Einfach Lokal im gleichen Ordner wie das Programm ) 


#### Zusatz
Eine Hash Id erstellen und die an den Link anhängen. 
Hinweis: Wenn der Link kein GET Parameter hat, denn mit einem vorgestellten "?" anhängen. Sonst mit einem "&".

Der Hash besteht aus id + programmId + termsAndConditionsId ( ohne Trennung dazwischen ). Wird mit base64 encoding erstellt.
