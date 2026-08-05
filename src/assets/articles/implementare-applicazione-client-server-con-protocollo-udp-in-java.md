---
title: "Implementare un'applicazione client/server con protocollo UDP in Java"
date: "2020-05-24"
slug: "implementare-applicazione-client-server-con-protocollo-udp-in-java"
wordpress_id: 399
---

Di seguito i diversi comandi per implementare un'applicazione client/server con protocollo UDP in Java.

## Lato Server

```
DatagramSocket serverSocket = new DatagramSocket(1111); // dove 1111 è la porta di ascolto

DatagramPacket receivePacket, sendPacket;

byte[] receiveData = new byte[1024]; // poniamo che 1024 sia la dimensione massima di ciò che si riceve
receivePacket = new DatagramPacket(receiveData, receiveData.lenght);

serverSocket.receive(receivePacket);

String valoreRicevuto = new String(receivePacket.getData());

String messaggioDaSpedire = "Feedback";
byte[] byteToSend = messaggioDaSpedire.getBytes();
sendPacket = new DataPacket(byteToSend, byteToSend.lenght, receivePacket.getAddress(), receivePacket.getPort());

serverSocket.send(sendPacket);
```

Non è necessario chiudere nulla alla termine. Quando il client chiuderà il socket, si chiuderà anche lato client.

## Lato Client

```
DatagramSocket socketClient = new DatagramSocket();

DatagramPacket receivePacket, sendPacket;

String msgDaSpedire = "Ciao mondo";
byte[] byteToSend = msgDaSpedire.getBytes();
InetAddress IPAddress = InetAddress.getByName("indirizzo host");
      sendPacket = new DatagramPacket(byteToSend, byteToSend.length, IPAddress, 1111); // IP e PORTA

socketClient.send(sendPacket);

byte[] messaggioRispostaServer = new byte[1024]; // poniamo a 1024 la lunghezza massima della risposta ottenuta dal server

receivePacket = new DatagramPacket(messaggioRispostaServer, messaggioRispostaServer.length);

socketClient.receive(receivePacket);

System.out.println(new String(messaggioRispostaServer.getData()));
          
socketClient.close()
```
