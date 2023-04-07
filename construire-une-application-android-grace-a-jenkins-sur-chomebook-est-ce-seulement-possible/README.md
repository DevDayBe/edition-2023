# Construire une application Android grâce à Jenkins sur Chomebook, est-ce seulement possible?

## Présentation

Cette présentation aborde les défis liés à la construction d'une application Android et la façon dont Jenkins peut être utilisé pour surmonter ces défis.
L'auteur explique comment il a utilisé Jenkins et Docker pour mettre en place un pipeline de développement Android efficace et rapide, fonctionnant sous Windows, Linux, Vagrant, macOS. \
Il explique également comment il a personnalisé les images Docker pour répondre aux besoins spécifiques de son projet. \
Il termine la présentation par une démonstration de l'ensemble du pipeline de développement avec [GitPod](https://www.gitpod.io/) afin que chacun puisse le tester depuis son Chromebook, Steam Deck ou tout autre appareil.

## Sources

La présentation se base sur le projet [Android Jenkins](https://github.com/gounthar/MyFirstAndroidAppBuiltByJenkins).
Les trois branches principales du projet sont les suivantes:
 - [main](https://github.com/gounthar/MyFirstAndroidAppBuiltByJenkins) qui contient la version la plus stable du projet
 - [stf](https://github.com/gounthar/MyFirstAndroidAppBuiltByJenkins/tree/stf) qui contient une version instable du projet qui utilise [STF](https://github.com/DeviceFarmer/stf) pour tester l'application sur un appareil Android réel ou émulé
 - [gitpod](https://github.com/gounthar/MyFirstAndroidAppBuiltByJenkins/tree/gitpod) qui contient une version instable du projet qui utilise [GitPod](https://www.gitpod.io/) pour tester l'ensemble du pipeline de développement dans le cloud

## Bio

L'auteur de cette présentation est Bruno Verachten, Developer Relations pour le projet Jenkins. Il travaille depuis 2014 sur l'intégration continue et le déploiement continu pour les écosystèmes mobiles. \
Il est également passionné par les technologies open source, les écosystèmes ARM et RISC-V, et les systèmes embarqués. \
Vous pourrez le retrouver sur Twitter à [@poddingue](https://twitter.com/poddingue), sur [LinkedIn](https://www.linkedin.com/in/poddingue/) et sur son site web [bruno.verachten.fr](https://bruno.verachten.fr/).

## Liens

Si vous souhaitez réagir à cette présentation, ou faire des suggestions, vous pouvez le faire sur le [sujet dédié](https://community.jenkins.io/t/naively-building-android-apps-with-jenkins-not-natively-naively/3624/3) du forum Jenkins.
Vous pouvez également visionner une version raccourcie de cette présentation en anglais sur [YouTube](https://www.youtube.com/watch?v=fmTdT4Y-uCw&t=15s).

## Conclusion

Il n'est pas possible pour l'instant de construire une application Android sur Chromebook nativement, avec ou sans Jenkins, avec ou sans Docker. \
La seule façon de le faire est d'utiliser un service de cloud computing, comme GitPod, qui permet de construire une application Android dans le cloud, tout en dirigeant/codant depuis son Chromebook.